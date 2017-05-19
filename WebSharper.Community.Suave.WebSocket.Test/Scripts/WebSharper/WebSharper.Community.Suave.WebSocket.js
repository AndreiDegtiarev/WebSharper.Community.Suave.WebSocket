(function()
{
 "use strict";
 var Global,WebSharper,Community,Suave,WebSocket,JsonEncoding,Async,Endpoint,Client,WebSocketServer,WithEncoding,IntelliFactory,Runtime,Control,MailboxProcessor,Concurrency,Operators,Json,Seq;
 Global=window;
 WebSharper=Global.WebSharper=Global.WebSharper||{};
 Community=WebSharper.Community=WebSharper.Community||{};
 Suave=Community.Suave=Community.Suave||{};
 WebSocket=Suave.WebSocket=Suave.WebSocket||{};
 JsonEncoding=WebSocket.JsonEncoding=WebSocket.JsonEncoding||{};
 Async=WebSocket.Async=WebSocket.Async||{};
 Endpoint=WebSocket.Endpoint=WebSocket.Endpoint||{};
 Client=WebSocket.Client=WebSocket.Client||{};
 WebSocketServer=Client.WebSocketServer=Client.WebSocketServer||{};
 WithEncoding=Client.WithEncoding=Client.WithEncoding||{};
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 Control=WebSharper&&WebSharper.Control;
 MailboxProcessor=Control&&Control.MailboxProcessor;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 Operators=WebSharper&&WebSharper.Operators;
 Json=WebSharper&&WebSharper.Json;
 Seq=WebSharper&&WebSharper.Seq;
 JsonEncoding=WebSocket.JsonEncoding=Runtime.Class({
  ClientProviderOrElse:function(p)
  {
   return this.$==1?p:p;
  }
 },null,JsonEncoding);
 Async.FoldAgent=function(initState,f)
 {
  return MailboxProcessor.Start(function(inbox)
  {
   function loop(state)
   {
    return Concurrency.Delay(function()
    {
     var x;
     x=inbox.Receive(null);
     return Concurrency.Bind(x,function(a)
     {
      var x$1;
      x$1=f(state,a);
      return Concurrency.Bind(x$1,loop);
     });
    });
   }
   return loop(initState);
  },null);
 };
 Endpoint.CreateRemote=function(url,encoding)
 {
  return Endpoint.New(url,"",Operators.DefaultArg(encoding,new JsonEncoding({
   $:0
  })));
 };
 Endpoint.New=function(URI,Route,JsonEncoding$1)
 {
  return{
   URI:URI,
   Route:Route,
   JsonEncoding:JsonEncoding$1
  };
 };
 WebSocketServer=Client.WebSocketServer=Runtime.Class({
  Post:function(msg)
  {
   this.conn.send(this.encode(msg));
  },
  get_Connection:function()
  {
   return this.conn;
  }
 },null,WebSocketServer);
 WebSocketServer.New=Runtime.Ctor(function(conn,encode)
 {
  this.conn=conn;
  this.encode=encode;
 },WebSocketServer);
 WithEncoding.Connect=function(encode,decode,endpoint,agent)
 {
  var socket,a,a$1;
  socket=(a=endpoint.URI,new Global.WebSocket(a));
  a$1=endpoint.JsonEncoding;
  return WithEncoding.FromWebSocket(encode,decode,socket,agent,a$1);
 };
 WithEncoding.ConnectStateful=function(encode,decode,endpoint,agent)
 {
  var socket,a,a$1;
  socket=(a=endpoint.URI,new Global.WebSocket(a));
  a$1=endpoint.JsonEncoding;
  return WithEncoding.FromWebSocketStateful(encode,decode,socket,agent,a$1);
 };
 WithEncoding.FromWebSocket=function(encode,decode,socket,agent,jsonEncoding)
 {
  var p,encode$1,decode$1,flush,server;
  p=Client.getEncoding(encode,decode,jsonEncoding);
  encode$1=p[0];
  decode$1=p[1];
  flush=Client.cacheSocket(socket,decode$1);
  server=new WebSocketServer.New(socket,encode$1);
  return Concurrency.Delay(function()
  {
   var x;
   x=agent(server);
   return Concurrency.Bind(x,function(a)
   {
    var a$1;
    a$1=function(ok,ko)
    {
     var isOpen;
     isOpen=flush(a);
     socket.onopen=function()
     {
      a({
       $:2
      });
      return ok(server);
     };
     socket.onclose=function()
     {
      return a({
       $:3
      });
     };
     socket.onmessage=function(msg)
     {
      return a({
       $:0,
       $0:decode$1(msg)
      });
     };
     socket.onerror=function()
     {
      a({
       $:1
      });
      return ko(Global.Error("Could not connect to the server."));
     };
     isOpen?ok(server):void 0;
    };
    return Concurrency.FromContinuations(function($1,$2,$3)
    {
     return a$1.apply(null,[$1,$2,$3]);
    });
   });
  });
 };
 WithEncoding.FromWebSocketStateful=function(encode,decode,socket,agent,jsonEncoding)
 {
  var p,encode$1,decode$1,flush,server;
  p=Client.getEncoding(encode,decode,jsonEncoding);
  encode$1=p[0];
  decode$1=p[1];
  flush=Client.cacheSocket(socket,decode$1);
  server=new WebSocketServer.New(socket,encode$1);
  return Concurrency.Delay(function()
  {
   var x,f;
   x=agent(server);
   f=function(initState,func)
   {
    var agent$1,a;
    agent$1=Async.FoldAgent(initState,function($1,$2)
    {
     return(func($1))($2);
    });
    a=function(ok,ko)
    {
     var isOpen;
     isOpen=flush(function(a$1)
     {
      var v;
      v=agent$1.mailbox.AddLast(a$1);
      agent$1.resume();
     });
     socket.onopen=function()
     {
      var v;
      v=agent$1.mailbox.AddLast({
       $:2
      });
      agent$1.resume();
      return ok(server);
     };
     socket.onclose=function()
     {
      var v;
      v=agent$1.mailbox.AddLast({
       $:3
      });
      return agent$1.resume();
     };
     socket.onmessage=function(msg)
     {
      var v;
      v=agent$1.mailbox.AddLast({
       $:0,
       $0:decode$1(msg)
      });
      return agent$1.resume();
     };
     socket.onerror=function()
     {
      var v;
      v=agent$1.mailbox.AddLast({
       $:1
      });
      agent$1.resume();
      return ko(Global.Error("Could not connect to the server."));
     };
     isOpen?ok(server):void 0;
    };
    return Concurrency.FromContinuations(function($1,$2,$3)
    {
     return a.apply(null,[$1,$2,$3]);
    });
   };
   return Concurrency.Bind(x,function($1)
   {
    return f($1[0],$1[1]);
   });
  });
 };
 Client.getEncoding=function(encode,decode,jsonEncoding)
 {
  var p,f,encode$1,decode$1;
  p=jsonEncoding.$==0?[function(a)
  {
   return Global.JSON.stringify(a);
  },(f=function(a)
  {
   return Global.JSON.parse(a);
  },function(x)
  {
   return Json.Activate(f(x));
  })]:[encode,decode];
  encode$1=p[0];
  decode$1=p[1];
  return[encode$1,function(msg)
  {
   return decode$1(msg.data);
  }];
 };
 Client.cacheSocket=function(socket,decode)
 {
  var cache,isOpen;
  cache=[];
  isOpen=[false];
  socket.onopen=function()
  {
   cache.push({
    $:2
   });
   isOpen[0]=true;
  };
  socket.onclose=function()
  {
   return cache.push({
    $:3
   });
  };
  socket.onmessage=function(msg)
  {
   return cache.push({
    $:0,
    $0:decode(msg)
   });
  };
  socket.onerror=function()
  {
   return cache.push({
    $:1
   });
  };
  return function(post)
  {
   Seq.iter(post,cache);
   return isOpen[0];
  };
 };
}());
