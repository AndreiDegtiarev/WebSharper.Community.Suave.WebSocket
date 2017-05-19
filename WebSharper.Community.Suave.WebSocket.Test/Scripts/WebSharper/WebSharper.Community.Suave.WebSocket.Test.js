(function()
{
 "use strict";
 var Global,WebSharper,Community,Suave,WebSocket,Test,Client,WebSharper$Community$Suave$WebSocket$Test_JsonDecoder,WebSharper$Community$Suave$WebSocket$Test_JsonEncoder,UI,Next,Var,Submitter,View,Remoting,AjaxRemotingProvider,Concurrency,Doc,AttrProxy,Client$1,WithEncoding,Json,Provider;
 Global=window;
 WebSharper=Global.WebSharper=Global.WebSharper||{};
 Community=WebSharper.Community=WebSharper.Community||{};
 Suave=Community.Suave=Community.Suave||{};
 WebSocket=Suave.WebSocket=Suave.WebSocket||{};
 Test=WebSocket.Test=WebSocket.Test||{};
 Client=Test.Client=Test.Client||{};
 WebSharper$Community$Suave$WebSocket$Test_JsonDecoder=Global.WebSharper$Community$Suave$WebSocket$Test_JsonDecoder=Global.WebSharper$Community$Suave$WebSocket$Test_JsonDecoder||{};
 WebSharper$Community$Suave$WebSocket$Test_JsonEncoder=Global.WebSharper$Community$Suave$WebSocket$Test_JsonEncoder=Global.WebSharper$Community$Suave$WebSocket$Test_JsonEncoder||{};
 UI=WebSharper&&WebSharper.UI;
 Next=UI&&UI.Next;
 Var=Next&&Next.Var;
 Submitter=Next&&Next.Submitter;
 View=Next&&Next.View;
 Remoting=WebSharper&&WebSharper.Remoting;
 AjaxRemotingProvider=Remoting&&Remoting.AjaxRemotingProvider;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 Doc=Next&&Next.Doc;
 AttrProxy=Next&&Next.AttrProxy;
 Client$1=WebSocket&&WebSocket.Client;
 WithEncoding=Client$1&&Client$1.WithEncoding;
 Json=WebSharper&&WebSharper.Json;
 Provider=Json&&Json.Provider;
 Client.Main=function(endpoint)
 {
  var rvInput,submit,vReversed,v,a,a$1,a$2,a$3,a$4,a$5;
  Client.WS(endpoint);
  rvInput=Var.Create$1("");
  submit=Submitter.CreateOption(rvInput.v);
  vReversed=(v=submit.view,View.MapAsync(function(a$6)
  {
   var input;
   return(a$6!=null?a$6.$==1:false)?(input=a$6.$0,(new AjaxRemotingProvider.New()).Async("WebSharper.Community.Suave.WebSocket.Test:WebSharper.Community.Suave.WebSocket.Test.Server.DoSomething:-1287498065",[input])):Concurrency.Delay(function()
   {
    return Concurrency.Return("");
   });
  },v));
  a=[Doc.Input([],rvInput),Doc.Button("Send",[],function()
  {
   submit.Trigger();
  }),Doc.Element("hr",[],[]),(a$1=[AttrProxy.Create("class","text-muted")],(a$2=[Doc.TextNode("The server responded:")],Doc.Element("h4",a$1,a$2))),(a$3=[AttrProxy.Create("class","jumbotron")],(a$4=[(a$5=[Doc.TextView(vReversed)],Doc.Element("h1",[],a$5))],Doc.Element("div",a$3,a$4)))];
  return Doc.Element("div",[],a);
 };
 Client.WS=function(endpoint)
 {
  var a;
  a=Concurrency.Delay(function()
  {
   var x;
   x=WithEncoding.ConnectStateful(function(x$1)
   {
    return Global.JSON.stringify((WebSharper$Community$Suave$WebSocket$Test_JsonEncoder.j())(x$1));
   },function(x$1)
   {
    return(WebSharper$Community$Suave$WebSocket$Test_JsonDecoder.j())(Global.JSON.parse(x$1));
   },endpoint,function()
   {
    return Concurrency.Delay(function()
    {
     return Concurrency.Return([0,function(state)
     {
      return function(msg)
      {
       return Concurrency.Delay(function()
       {
        var data,a$1,x$1,x$2,b;
        return msg.$==3?(Global.console.log("Connection closed."),Concurrency.Return(state)):msg.$==2?(Global.console.log("WebSocket connection open."),Concurrency.Return(state)):msg.$==1?(Global.console.log("WebSocket connection error!"),Concurrency.Return(state)):(data=msg.$0,(a$1=data.$==0?(x$1=data.$0,(Global.console.log.apply(Global.console,[state].concat([x$1])),Concurrency.Return(null))):(x$2=data.$0,(Global.console.log.apply(Global.console,[state].concat([x$2])),Concurrency.Return(null))),(b=Concurrency.Delay(function()
        {
         return Concurrency.Return(state+1);
        }),Concurrency.Combine(a$1,b))));
       });
      };
     }]);
    });
   });
   return Concurrency.Bind(x,function(a$1)
   {
    var b;
    b=Concurrency.Delay(function()
    {
     var x$1;
     x$1=Concurrency.Sleep(1000);
     return Concurrency.Bind(x$1,function()
     {
      var x$2;
      a$1.Post({
       $:0,
       $0:"HELLO"
      });
      x$2=Concurrency.Sleep(1000);
      return Concurrency.Bind(x$2,function()
      {
       a$1.Post({
        $:1,
        $0:123
       });
       return Concurrency.Return(null);
      });
     });
    });
    return Concurrency.While(function()
    {
     return true;
    },b);
   });
  });
  Concurrency.Start(a,null);
 };
 WebSharper$Community$Suave$WebSocket$Test_JsonDecoder.j=function()
 {
  return WebSharper$Community$Suave$WebSocket$Test_JsonDecoder._v?WebSharper$Community$Suave$WebSocket$Test_JsonDecoder._v:WebSharper$Community$Suave$WebSocket$Test_JsonDecoder._v=(Provider.DecodeUnion(void 0,"type",[["int",[["$0","value",Provider.Id(),0]]],["string",[["$0","value",Provider.Id(),0]]]]))();
 };
 WebSharper$Community$Suave$WebSocket$Test_JsonEncoder.j=function()
 {
  return WebSharper$Community$Suave$WebSocket$Test_JsonEncoder._v?WebSharper$Community$Suave$WebSocket$Test_JsonEncoder._v:WebSharper$Community$Suave$WebSocket$Test_JsonEncoder._v=(Provider.EncodeUnion(void 0,{
   "int":1,
   str:0
  },[["Request1",[["$0","str",Provider.Id(),0]]],["Request2",[["$0","int",Provider.Id(),0]]]]))();
 };
}());
