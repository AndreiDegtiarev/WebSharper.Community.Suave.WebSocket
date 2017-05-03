namespace WebSharper.Community.Suave.WebSocket

open Owin
open System.Collections.Generic
open System.Runtime.CompilerServices
open WebSharper
open Suave.WebSocket


[<RequireQualifiedAccess>]
type JsonEncoding =
    | Typed
    | Readable
#if ZAFIR
#else
    | Custom of WebSharper.Core.Json.Provider * WebSharper.Json.Provider
#endif

    [<JavaScript>]
    member this.ClientProviderOrElse p =
        match this with
        | Typed | Readable -> p
#if ZAFIR
#else
        | Custom (_, p) -> p
#endif

module private Async =
    let AwaitUnitTask (tsk : System.Threading.Tasks.Task) =
        tsk.ContinueWith(ignore) |> Async.AwaitTask

    [<JavaScript>]
    let FoldAgent initState f =
        MailboxProcessor.Start(fun inbox ->
            let rec loop state : Async<unit> = async {
                let! msg = inbox.Receive()
                let! newState = f state msg
                return! loop newState
            }
            loop initState
        )

type Endpoint<'S2C, 'C2S> =
    private {
        // the uri of the websocket server
        URI : string
        // the last part of the uri
        Route : string
        // the encoding of messages
        JsonEncoding : JsonEncoding
    }

    [<JavaScript>]
    static member CreateRemote (url: string, ?encoding: JsonEncoding) =
        {
            URI = url
            Route = ""
            JsonEncoding = defaultArg encoding JsonEncoding.Typed
        } : Endpoint<'S2C, 'C2S>

    static member Create (url : string, route : string, ?encoding: JsonEncoding) =
        let uri = System.Uri(System.Uri(url), route)
        let wsuri = sprintf "ws://%s%s" uri.Authority uri.AbsolutePath
        {
            URI = wsuri
            Route = route
            JsonEncoding = defaultArg encoding JsonEncoding.Typed
        } : Endpoint<'S2C, 'C2S>

    static member Create (app: IAppBuilder, route: string, ?encoding: JsonEncoding) =
        let addr = (app.Properties.["host.Addresses"] :?> List<IDictionary<string,obj>>).[0]
        let wsuri =
            let host = addr.["host"] :?> string
            let port = addr.["port"] :?> string
            let path = addr.["path"] :?> string
            "ws://" + host + ":" + port + path
        {
            URI = wsuri
            Route = route
            JsonEncoding = defaultArg encoding JsonEncoding.Typed
        } : Endpoint<'S2C, 'C2S>

module MessageCoder =
    module J = WebSharper.Core.Json

    let ToJString (jP: J.Provider) (msg: 'T) =
        let enc = jP.GetEncoder<'T>()
        enc.Encode msg
        |> jP.Pack
        |> J.Stringify

    let FromJString (jP: J.Provider) str : 'T =
        let dec = jP.GetDecoder<'T>()
        J.Parse str
        |> dec.Decode

type Action<'T> =
    | Message of 'T
    | Close

module Client =
    open WebSharper.JavaScript

    [<JavaScript>]
    type Message<'S2C> =
        | Message of 'S2C
        | Error
        | Open
        | Close

    [<JavaScript>]
    type WebSocketServer<'S2C, 'C2S>(conn: WebSocket, encode: 'C2S -> string) =
        member this.Connection = conn
        member this.Post (msg: 'C2S) = msg |> encode |> conn.Send

    type Agent<'S2C, 'C2S> = WebSocketServer<'S2C, 'C2S> -> Async<Message<'S2C> -> unit>

    type StatefulAgent<'S2C, 'C2S, 'State> = WebSocketServer<'S2C, 'C2S> -> Async<'State * ('State -> Message<'S2C> -> Async<'State>)>

    [<JavaScript>]
    let cacheSocket (socket: WebSocket) decode =
        let cache = Queue()
        let isOpen = ref false
        socket.Onopen <- fun () -> cache.Enqueue Message.Open; isOpen := true
        socket.Onclose <- fun () -> cache.Enqueue Message.Close
        socket.Onmessage <- fun msg -> cache.Enqueue (Message.Message (decode msg))
        socket.Onerror <- fun () -> cache.Enqueue Message.Error
        fun post ->
            Seq.iter post cache
            !isOpen

    [<JavaScript>]
    let getEncoding (encode: 'C2S -> string) (decode: string -> 'S2C) (jsonEncoding: JsonEncoding) =
        let encode, decode =
            match jsonEncoding with
            | JsonEncoding.Typed -> Json.Stringify, Json.Parse >> Json.Activate
            | _ -> encode, decode
        let decode (msg: MessageEvent) = decode (As<string> msg.Data)
        encode, decode

    [<JavaScript>]
    type WithEncoding =

        static member FromWebSocketStateful (encode: 'C2S -> string) (decode: string -> 'S2C) socket (agent : StatefulAgent<'S2C, 'C2S, 'State>) jsonEncoding =
            let encode, decode = getEncoding encode decode jsonEncoding
            let flush = cacheSocket socket decode
            let server = WebSocketServer(socket, encode)
            async {
                let! initState, func = agent server
                let agent = Async.FoldAgent initState func
                return! Async.FromContinuations <| fun (ok, ko, _) ->
                    let isOpen = flush agent.Post
                    socket.Onopen <- fun () ->
                        agent.Post Message.Open
                        ok server
                    socket.Onclose <- fun () ->
                        agent.Post Message.Close
                    socket.Onmessage <- fun msg ->
                        agent.Post (Message.Message (decode msg))
                    socket.Onerror <- fun () ->
                        agent.Post Message.Error
                        // TODO: test if this is right. Might be called multiple times
                        //       or after ok was already called.
                        ko <| System.Exception("Could not connect to the server.")
                    if isOpen then ok server
            }

        static member FromWebSocket (encode: 'C2S -> string) (decode: string -> 'S2C) socket (agent : Agent<'S2C, 'C2S>) jsonEncoding =
            let encode, decode = getEncoding encode decode jsonEncoding
            let flush = cacheSocket socket decode
            let server = WebSocketServer(socket, encode)

            async {
                let! proc = agent server
                return! Async.FromContinuations <| fun (ok, ko, _) ->
                    let isOpen = flush proc
                    socket.Onopen <- fun () ->
                        proc Message.Open
                        ok server
                    socket.Onclose <- fun () ->
                        proc Message.Close
                    socket.Onmessage <- fun msg ->
                        proc (Message.Message (decode msg))
                    socket.Onerror <- fun () ->
                        proc Message.Error
                        // TODO: test if this is right. Might be called multiple times
                        //       or after ok was already called.
                        ko <| System.Exception("Could not connect to the server.")
                    if isOpen then ok server
            }

        [<MethodImpl(MethodImplOptions.NoInlining)>]
        static member ConnectStateful encode decode (endpoint : Endpoint<'S2C, 'C2S>) (agent : StatefulAgent<'S2C, 'C2S, 'State>) =
            let socket = new WebSocket(endpoint.URI)
            WithEncoding.FromWebSocketStateful encode decode socket agent endpoint.JsonEncoding

        [<MethodImpl(MethodImplOptions.NoInlining)>]
        static member Connect encode decode (endpoint : Endpoint<'S2C, 'C2S>) (agent : Agent<'S2C, 'C2S>) =
            let socket = new WebSocket(endpoint.URI)
            WithEncoding.FromWebSocket encode decode socket agent endpoint.JsonEncoding

#if !ZAFIR
    module internal Macro =
        open WebSharper.Core.Macros
        module Q = WebSharper.Core.Quotations
        module J = WebSharper.Core.JavaScript.Core
        module R = WebSharper.Core.Reflection
        module JP = WebSharper.Json.Macro
        type BF = System.Reflection.BindingFlags

        type M() =
            interface IMacro with
                member this.Translate(q, tr) =
                    let fail() = failwithf "Wrong use of macro %s" typeof<M>.FullName
                    match q with
                    | Q.CallOrCallModule ({Generics = s2c::c2s::_ as g; Entity = m}, args) ->
                        match tr <|
                            Q.CallModule(
                                { Generics = g
                                  Entity = R.Method.Parse(typeof<WithEncoding>.GetMethod(m.Name, BF.Static ||| BF.NonPublic))},
                                Q.DefaultValue s2c :: Q.DefaultValue c2s :: args) with
                        | J.Call(ns, n, _ :: _ :: jargs) ->
                            let param = JP.Parameters.Default tr
                            let param =
                                if m.Name.StartsWith "Connect" then
                                    // endpoint.JsonEncoding.ClientProviderOrElse(provider)
                                    { param with Provider = J.Call(J.FieldGet(jargs.[0], !~(J.String "JsonEncoding")), !~(J.String "ClientProviderOrElse"), [param.Provider]) }
                                else
                                    param
                            let id = J.Id()
                            J.Let(id, param.Provider,
                                let param = { param with Provider = J.Var id }
                                let enc = JP.SerializeLambda param tr c2s
                                let dec = JP.DeserializeLambda param tr s2c
                                J.Call(ns, n, enc :: dec :: jargs)
                            )
                        | _ -> fail()
                    | _ -> fail()
#endif

#if ZAFIR
    [<Inline>]
#else
    [<Macro(typeof<Macro.M>)>]
#endif
    let FromWebSocket<'S2C, 'C2S> (socket: WebSocket) (agent: Agent<'S2C, 'C2S>) jsonEncoding =
        WithEncoding.FromWebSocket Json.Serialize Json.Deserialize socket agent jsonEncoding

#if ZAFIR
    [<Inline>]
#else
    [<Macro(typeof<Macro.M>); JavaScript>]
#endif
    let FromWebSocketStateful<'S2C, 'C2S, 'State> (socket: WebSocket) (agent: StatefulAgent<'S2C, 'C2S, 'State>) jsonEncoding =
#if !ZAFIR
        let x = Async.FoldAgent () (fun () -> async.Return)
#endif
        WithEncoding.FromWebSocketStateful Json.Serialize Json.Deserialize socket agent jsonEncoding

#if ZAFIR
    [<Inline>]
#else
    [<Macro(typeof<Macro.M>)>]
#endif
    let Connect<'S2C, 'C2S> (endpoint: Endpoint<'S2C, 'C2S>) (agent: Agent<'S2C, 'C2S>) =
        WithEncoding.Connect Json.Serialize Json.Deserialize endpoint agent

#if ZAFIR
    [<Inline>]
#else
    [<Macro(typeof<Macro.M>); JavaScript>]
#endif
    let ConnectStateful<'S2C, 'C2S, 'State> (endpoint: Endpoint<'S2C, 'C2S>) (agent: StatefulAgent<'S2C, 'C2S, 'State>) =
#if !ZAFIR
        let x = Async.FoldAgent () (fun () -> async.Return)
#endif
        WithEncoding.ConnectStateful Json.Serialize Json.Deserialize endpoint agent

module Server =
    type Message<'C2S> =
        | Message of 'C2S
        | Error of exn
        | Close

    type WebSocketClient<'S2C, 'C2S>(conn: WebSocket, jP) =
        let onMessage = Event<'C2S>()
        let onClose = Event<unit>()
        let onError = Event<exn>()
        //let ctx = getContext conn.Context

        member this.JsonProvider = jP
        member this.Connection = conn
       // member this.Context : WebSharper.Web.IContext = ctx
        member this.PostAsync (value: 'S2C) =
            let msg = MessageCoder.ToJString jP value
            let bytes = System.Text.Encoding.UTF8.GetBytes(msg)
            async{
                do conn.send Opcode.Text (bytes|> System.ArraySegment) true  |>Async.RunSynchronously |>ignore
                } // |> Async.AwaitUnitTask
            
        member this.Post (value: 'S2C) = this.PostAsync value |> Async.RunSynchronously
        member this.OnMessage = onMessage.Publish
        member this.OnClose = onClose.Publish
        member this.OnError = onError.Publish

        member internal this.Close() = onClose.Trigger()
        member internal this.Message msg = onMessage.Trigger(msg)
        member internal this.Error e = onError.Trigger(e)

    type Agent<'S2C, 'C2S> = WebSocketClient<'S2C, 'C2S> -> Async<Message<'C2S> -> unit>

    type StatefulAgent<'S2C, 'C2S, 'State> = WebSocketClient<'S2C, 'C2S> -> Async<'State * ('State -> Message<'C2S> -> Async<'State>)>

    [<RequireQualifiedAccess>]
    type CustomMessage<'C2S, 'Custom> =
        | Message of 'C2S
        | Custom of 'Custom
        | Error of exn
        | Close

    type CustomWebSocketAgent<'S2C, 'C2S, 'Custom>(client: WebSocketClient<'S2C, 'C2S>) =
        let onCustom = Event<'Custom>()
        member this.Client = client
        member this.PostCustom (value: 'Custom) = onCustom.Trigger value
        member this.OnCustom = onCustom.Publish

    type CustomAgent<'S2C, 'C2S, 'Custom, 'State> = CustomWebSocketAgent<'S2C, 'C2S, 'Custom> -> Async<'State * ('State -> CustomMessage<'C2S, 'Custom> -> Async<'State>)>

type WebSocketProcessor<'S2C, 'C2S> =
    {
        Agent : Server.Agent<'S2C, 'C2S>
        //GetContext : Microsoft.Owin.IOwinContext -> Web.IContext
        JsonProvider : Core.Json.Provider
        //AuthenticateRequest : option<Microsoft.Owin.IOwinContext -> bool>
    }
open Suave.Http
open Suave.Sockets
open Suave.Sockets.Control

type ProcessWebSocket<'S2C, 'C2S> =
   // inherit WebSocket
    val mutable private post : option<Server.Message<'C2S> -> unit> 
    val private processor : WebSocketProcessor<'S2C, 'C2S>

    new (processor) =
        { //inherit WebSocket(uri)
          post = None
          processor = processor }  

(*    new (processor, maxMessageSize) =
        { inherit WebSocket(maxMessageSize)
          post = None
          processor = processor } *)

    member x.Listen (webSocket : WebSocket) (context: HttpContext) =
      let cl = Server.WebSocketClient(webSocket, x.processor.JsonProvider)
      let a = (x.processor.Agent cl)|>Async.RunSynchronously
      x.post <- Some a
      socket {
        // if `loop` is set to false, the server will stop receiving messages
        let mutable loop = true
        while loop do
          // the server will wait for a message to be received without blocking the thread
          let! msg = webSocket.read()

          match msg with
          // the message has type (Opcode * byte [] * bool)
          //
          // Opcode type:
          //   type Opcode = Continuation | Text | Binary | Reserved | Close | Ping | Pong
          //
          // byte [] contains the actual message
          //
          // the last element is the FIN byte, explained later
          | (Text, data, true) ->
            // the message can be converted to a string
            let json = System.Text.Encoding.UTF8.GetString(data)
            let m = MessageCoder.FromJString x.processor.JsonProvider json
            x.post.Value(Server.Message m)

          | (Opcode.Close, _, _) ->
            x.post |> Option.iter (fun p -> p Server.Close)
            let emptyResponse = [||]  |> ByteSegment
            do! webSocket.send Opcode.Close emptyResponse true

            // after sending a Close message, stop the loop
            loop <- false

          | _ -> ()
        }

module ProcessorCreater =
    let Create (endpoint: Endpoint<'S2C, 'C2S>,statefulAgent : Server.StatefulAgent<'S2C, 'C2S, 'State>)=
                let agent =
                        (fun client -> async {
                                            let! initState, receive = statefulAgent client
                                            let receive state msg =
                                                async {
                                                    try return! receive state msg
                                                    with exn ->
                                                        try return! receive state (Server.Error exn)
                                                        with exn -> return state
                                                }
                                            let agent = Async.FoldAgent initState receive
                                            return agent.Post
                                        }
                                        )
                let processor =
                    {
                        Agent = agent
                        JsonProvider =  WebSharper.Core.Json.Provider.Create()

                    }

                ProcessWebSocket(processor)