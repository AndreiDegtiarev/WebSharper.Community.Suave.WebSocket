namespace WebSharper.Community.Suave.WebSocket.Test

open WebSharper
open WebSharper.Community.Suave.WebSocket.Server

module Server =

    [<Rpc>]
    let DoSomething input =
        let R (s: string) = System.String(Array.rev(s.ToCharArray()))
        async {
            return R input
        }
    type [<JavaScript; NamedUnionCases>]
        C2SMessage =
        | Request1 of str: string
        | Request2 of int: int
    
    and [<JavaScript; NamedUnionCases "type">]
        S2CMessage =
        | [<Name "int">] Response2 of value: int
        | [<Name "string">] Response1 of value: string

    let Start route : StatefulAgent<S2CMessage, C2SMessage, int> =
        /// print to debug output and stdout
        let dprintfn x =
            Printf.ksprintf (fun s ->
                System.Diagnostics.Debug.WriteLine s
                stdout.WriteLine s
            ) x

        fun client -> async {
            //let clientIp = client.Connection.Context.Request.RemoteIpAddress
            return 0, fun state msg -> async {
                //eprintfn "Received message #%i from %s" state clientIp
                eprintfn "Received message #%i" state
                match msg with
                | Message data -> 
                    match data with
                    | Request1 x -> do! client.PostAsync (Response1 x)
                    | Request2 x -> do! client.PostAsync (Response2 x)
                    return state + 1
                | Error exn -> 
                    //dprintfn "Error in WebSocket server connected to %s: %s" clientIp exn.Message
                    dprintfn "Error in WebSocket server connected: %s" exn.Message
                    return state
                | Close ->
                    //eprintfn "Closed connection to %s" clientIp
                    eprintfn "Closed connection"
                    return state
            }
        }