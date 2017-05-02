namespace WebSharper.Community.Suave.WebSocket.Test

open WebSharper
open WebSharper.Sitelets
open WebSharper.UI.Next
open WebSharper.UI.Next.Server

type EndPoint =
    | [<EndPoint "/">] Home
    | [<EndPoint "/about">] About

module Templating =
    open WebSharper.UI.Next.Html

    type MainTemplate = Templating.Template<"Main.html">

    // Compute a menubar where the menu item for the given endpoint is active
    let MenuBar (ctx: Context<EndPoint>) endpoint : Doc list =
        let ( => ) txt act =
             liAttr [if endpoint = act then yield attr.``class`` "active"] [
                aAttr [attr.href (ctx.Link act)] [text txt]
             ]
        [
            li ["Home" => EndPoint.Home]
            li ["About" => EndPoint.About]
        ]

    let Main ctx action (title: string) (body: Doc list) =
        Content.Page(
            MainTemplate()
                .Title(title)
                .MenuBar(MenuBar ctx action)
                .Body(body)
                .Doc()
        )

module Site =
    open WebSharper.UI.Next.Html
    open WebSharper.Community.Suave.WebSocket

    let HomePage ctx ep=
        Templating.Main ctx EndPoint.Home "Home" [
            h1 [text "Say Hi to the server!"]
            div [client <@ Client.Main(ep) @>]
        ]

    let AboutPage ctx =
        Templating.Main ctx EndPoint.About "About" [
            h1 [text "About"]
            p [text "This is a template WebSharper client-server application."]
        ]

    let Main ep=
        Application.MultiPage (fun ctx endpoint ->
            match endpoint with
            | EndPoint.Home -> HomePage ctx ep
            | EndPoint.About -> AboutPage ctx
        )

    open WebSharper.Suave
    open Suave.Web
    open Suave.WebPart
    open Suave.WebSocket
    open Suave.Filters
    open Suave.RequestErrors
    open Suave.Operators

    let ep = Endpoint.Create("http://localhost:8080/", "/websocket", JsonEncoding.Readable)
    let proc=ProcessorCreater.Create(ep,Server.Start ep)

    let appSuave = 
      choose [
        path "/websocket" >=> handShake proc.Listen
        WebSharperAdapter.ToWebPart (Main ep, RootDirectory = @"../..") 
        //GET >=> choose [ path "/" >=> file "index.html"; browseHome ]
        NOT_FOUND "Found no handlers." ]
    do
        startWebServer
            defaultConfig
            appSuave
