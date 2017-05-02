namespace WebSharper.Community.Suave.WebSocket.Test

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI.Next
open WebSharper.UI.Next.Client
open WebSharper.UI.Next.Html

open WebSharper.Community.Suave.WebSocket
open WebSharper.Community.Suave.WebSocket.Client

[<JavaScript>]
module Client =

    let WS (endpoint) =
        async {
            let! server =
                ConnectStateful endpoint <| fun server -> async {
                    return 0, fun state msg -> async {
                        match msg with
                        | Message data ->
                            match data with
                            | Server.Response1 x -> Console.Log (state, x)
                            | Server.Response2 x -> Console.Log (state, x)
                            return (state + 1)
                        | Close ->
                            Console.Log "Connection closed."
                            return state
                        | Open ->
                            Console.Log "WebSocket connection open."
                            return state
                        | Error ->
                            Console.Log "WebSocket connection error!"
                            return state 
                    }
                }
            
            while true do
                do! Async.Sleep 1000
                server.Post (Server.Request1 "HELLO")
                do! Async.Sleep 1000
                server.Post (Server.Request2 123)
        }
        |> Async.Start
    let Main (endpoint) =
        WS(endpoint)
        let rvInput = Var.Create ""
        let submit = Submitter.CreateOption rvInput.View
        let vReversed =
            submit.View.MapAsync(function
                | None -> async { return "" }
                | Some input -> Server.DoSomething input
            )
        div [
            Doc.Input [] rvInput
            Doc.Button "Send" [] submit.Trigger
            hr []
            h4Attr [attr.``class`` "text-muted"] [text "The server responded:"]
            divAttr [attr.``class`` "jumbotron"] [h1 [textView vReversed]]
        ]
