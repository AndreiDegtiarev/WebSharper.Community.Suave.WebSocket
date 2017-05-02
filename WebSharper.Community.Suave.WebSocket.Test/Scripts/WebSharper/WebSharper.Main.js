(function()
{
 "use strict";
 var Global,WebSharper,JavaScript,JSModule,Collections,EqualityComparer,MacroModule,EquatableEqualityComparer,BaseEqualityComparer,Comparer,ComparableComparer,BaseComparer,Pervasives,Json,Remoting,XhrProvider,AjaxRemotingProvider,SC$1,PrintfHelpers,Concurrency,Scheduler,SC$2,Enumerator,T,HtmlContentExtensions,SingleNode,Activator,Arrays,Seq,List,Arrays2D,CancellationTokenSource,Char,Util,DateUtil,Delegate,DictionaryUtil,KeyCollection,ValueCollection,Dictionary,MatchFailureException,IndexOutOfRangeException,OperationCanceledException,ArgumentException,ArgumentOutOfRangeException,InvalidOperationException,AggregateException,TimeoutException,FormatException,OverflowException,Guid,HashSetUtil,HashSet,Lazy,T$1,Nullable,Ref,Operators,Slice,Option,Queue,Random,Microsoft,FSharp,Core,FSharpRef,Control,Stack,Strings,Task,Task1,TaskCompletionSource,Unchecked,N,Byte,SByte,Int16,Int32,UInt16,UInt32,Int64,UInt64,IntelliFactory,Runtime,String;
 Global=window;
 WebSharper=Global.WebSharper=Global.WebSharper||{};
 JavaScript=WebSharper.JavaScript=WebSharper.JavaScript||{};
 JSModule=JavaScript.JSModule=JavaScript.JSModule||{};
 Collections=WebSharper.Collections=WebSharper.Collections||{};
 EqualityComparer=Collections.EqualityComparer=Collections.EqualityComparer||{};
 MacroModule=WebSharper.MacroModule=WebSharper.MacroModule||{};
 EquatableEqualityComparer=MacroModule.EquatableEqualityComparer=MacroModule.EquatableEqualityComparer||{};
 BaseEqualityComparer=MacroModule.BaseEqualityComparer=MacroModule.BaseEqualityComparer||{};
 Comparer=Collections.Comparer=Collections.Comparer||{};
 ComparableComparer=MacroModule.ComparableComparer=MacroModule.ComparableComparer||{};
 BaseComparer=MacroModule.BaseComparer=MacroModule.BaseComparer||{};
 Pervasives=JavaScript.Pervasives=JavaScript.Pervasives||{};
 Json=WebSharper.Json=WebSharper.Json||{};
 Remoting=WebSharper.Remoting=WebSharper.Remoting||{};
 XhrProvider=Remoting.XhrProvider=Remoting.XhrProvider||{};
 AjaxRemotingProvider=Remoting.AjaxRemotingProvider=Remoting.AjaxRemotingProvider||{};
 SC$1=Global.StartupCode$WebSharper_Main$Remoting=Global.StartupCode$WebSharper_Main$Remoting||{};
 PrintfHelpers=WebSharper.PrintfHelpers=WebSharper.PrintfHelpers||{};
 Concurrency=WebSharper.Concurrency=WebSharper.Concurrency||{};
 Scheduler=Concurrency.Scheduler=Concurrency.Scheduler||{};
 SC$2=Global.StartupCode$WebSharper_Main$Concurrency=Global.StartupCode$WebSharper_Main$Concurrency||{};
 Enumerator=WebSharper.Enumerator=WebSharper.Enumerator||{};
 T=Enumerator.T=Enumerator.T||{};
 HtmlContentExtensions=WebSharper.HtmlContentExtensions=WebSharper.HtmlContentExtensions||{};
 SingleNode=HtmlContentExtensions.SingleNode=HtmlContentExtensions.SingleNode||{};
 Activator=WebSharper.Activator=WebSharper.Activator||{};
 Arrays=WebSharper.Arrays=WebSharper.Arrays||{};
 Seq=WebSharper.Seq=WebSharper.Seq||{};
 List=WebSharper.List=WebSharper.List||{};
 Arrays2D=WebSharper.Arrays2D=WebSharper.Arrays2D||{};
 CancellationTokenSource=WebSharper.CancellationTokenSource=WebSharper.CancellationTokenSource||{};
 Char=WebSharper.Char=WebSharper.Char||{};
 Util=WebSharper.Util=WebSharper.Util||{};
 DateUtil=WebSharper.DateUtil=WebSharper.DateUtil||{};
 Delegate=WebSharper.Delegate=WebSharper.Delegate||{};
 DictionaryUtil=Collections.DictionaryUtil=Collections.DictionaryUtil||{};
 KeyCollection=Collections.KeyCollection=Collections.KeyCollection||{};
 ValueCollection=Collections.ValueCollection=Collections.ValueCollection||{};
 Dictionary=Collections.Dictionary=Collections.Dictionary||{};
 MatchFailureException=WebSharper.MatchFailureException=WebSharper.MatchFailureException||{};
 IndexOutOfRangeException=WebSharper.IndexOutOfRangeException=WebSharper.IndexOutOfRangeException||{};
 OperationCanceledException=WebSharper.OperationCanceledException=WebSharper.OperationCanceledException||{};
 ArgumentException=WebSharper.ArgumentException=WebSharper.ArgumentException||{};
 ArgumentOutOfRangeException=WebSharper.ArgumentOutOfRangeException=WebSharper.ArgumentOutOfRangeException||{};
 InvalidOperationException=WebSharper.InvalidOperationException=WebSharper.InvalidOperationException||{};
 AggregateException=WebSharper.AggregateException=WebSharper.AggregateException||{};
 TimeoutException=WebSharper.TimeoutException=WebSharper.TimeoutException||{};
 FormatException=WebSharper.FormatException=WebSharper.FormatException||{};
 OverflowException=WebSharper.OverflowException=WebSharper.OverflowException||{};
 Guid=WebSharper.Guid=WebSharper.Guid||{};
 HashSetUtil=Collections.HashSetUtil=Collections.HashSetUtil||{};
 HashSet=Collections.HashSet=Collections.HashSet||{};
 Lazy=WebSharper.Lazy=WebSharper.Lazy||{};
 T$1=List.T=List.T||{};
 Nullable=WebSharper.Nullable=WebSharper.Nullable||{};
 Ref=WebSharper.Ref=WebSharper.Ref||{};
 Operators=WebSharper.Operators=WebSharper.Operators||{};
 Slice=WebSharper.Slice=WebSharper.Slice||{};
 Option=WebSharper.Option=WebSharper.Option||{};
 Queue=WebSharper.Queue=WebSharper.Queue||{};
 Random=WebSharper.Random=WebSharper.Random||{};
 Microsoft=Global.Microsoft=Global.Microsoft||{};
 FSharp=Microsoft.FSharp=Microsoft.FSharp||{};
 Core=FSharp.Core=FSharp.Core||{};
 FSharpRef=Core.FSharpRef=Core.FSharpRef||{};
 Control=WebSharper.Control=WebSharper.Control||{};
 Stack=WebSharper.Stack=WebSharper.Stack||{};
 Strings=WebSharper.Strings=WebSharper.Strings||{};
 Task=WebSharper.Task=WebSharper.Task||{};
 Task1=WebSharper.Task1=WebSharper.Task1||{};
 TaskCompletionSource=WebSharper.TaskCompletionSource=WebSharper.TaskCompletionSource||{};
 Unchecked=WebSharper.Unchecked=WebSharper.Unchecked||{};
 N=WebSharper.N=WebSharper.N||{};
 Byte=WebSharper.Byte=WebSharper.Byte||{};
 SByte=WebSharper.SByte=WebSharper.SByte||{};
 Int16=WebSharper.Int16=WebSharper.Int16||{};
 Int32=WebSharper.Int32=WebSharper.Int32||{};
 UInt16=WebSharper.UInt16=WebSharper.UInt16||{};
 UInt32=WebSharper.UInt32=WebSharper.UInt32||{};
 Int64=WebSharper.Int64=WebSharper.Int64||{};
 UInt64=WebSharper.UInt64=WebSharper.UInt64||{};
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 String=Global.String;
 JSModule.LogMore=function(args)
 {
  if(Global.console)
   Global.console.log.apply(Global.console,args);
 };
 JSModule.Log=function(x)
 {
  if(Global.console)
   Global.console.log(x);
 };
 JSModule.GetFieldValues=function(o)
 {
  var r,k;
  r=[];
  for(var k$1 in o)r.push(o[k$1]);
  return r;
 };
 JSModule.GetFieldNames=function(o)
 {
  var r,k;
  r=[];
  for(var k$1 in o)r.push(k$1);
  return r;
 };
 JSModule.GetFields=function(o)
 {
  var r,k;
  r=[];
  for(var k$1 in o)r.push([k$1,o[k$1]]);
  return r;
 };
 EqualityComparer=Collections.EqualityComparer=Runtime.Class({
  CGetHashCode0:function(x)
  {
   return this.GetHashCode(x);
  },
  CEquals0:function(x,y)
  {
   return this.Equals(x,y);
  },
  CGetHashCode:function(x)
  {
   return this.GetHashCode(x);
  },
  CEquals:function(x,y)
  {
   return this.Equals(x,y);
  }
 },null,EqualityComparer);
 EqualityComparer.New=Runtime.Ctor(function()
 {
 },EqualityComparer);
 EquatableEqualityComparer=MacroModule.EquatableEqualityComparer=Runtime.Class({
  GetHashCode:function(x)
  {
   return Unchecked.Hash(x);
  },
  Equals:function(x,y)
  {
   return x.EEquals(y);
  }
 },EqualityComparer,EquatableEqualityComparer);
 EquatableEqualityComparer.New=Runtime.Ctor(function()
 {
  EqualityComparer.New.call(this);
 },EquatableEqualityComparer);
 BaseEqualityComparer=MacroModule.BaseEqualityComparer=Runtime.Class({
  GetHashCode:function(x)
  {
   return Unchecked.Hash(x);
  },
  Equals:function(x,y)
  {
   return Unchecked.Equals(x,y);
  }
 },EqualityComparer,BaseEqualityComparer);
 BaseEqualityComparer.New=Runtime.Ctor(function()
 {
  EqualityComparer.New.call(this);
 },BaseEqualityComparer);
 Comparer=Collections.Comparer=Runtime.Class({
  Compare0:function(x,y)
  {
   return this.Compare$1(x,y);
  },
  Compare:function(x,y)
  {
   return this.Compare$1(x,y);
  }
 },null,Comparer);
 Comparer.New=Runtime.Ctor(function()
 {
 },Comparer);
 ComparableComparer=MacroModule.ComparableComparer=Runtime.Class({
  Compare$1:function(x,y)
  {
   return x.CompareTo(y);
  }
 },Comparer,ComparableComparer);
 ComparableComparer.New=Runtime.Ctor(function()
 {
  Comparer.New.call(this);
 },ComparableComparer);
 BaseComparer=MacroModule.BaseComparer=Runtime.Class({
  Compare$1:function(x,y)
  {
   return Operators.Compare(x,y);
  }
 },Comparer,BaseComparer);
 BaseComparer.New=Runtime.Ctor(function()
 {
  Comparer.New.call(this);
 },BaseComparer);
 Pervasives.GetJS=function(x,items)
 {
  var x$1,e;
  x$1=x;
  e=Enumerator.Get(items);
  try
  {
   while(e.MoveNext())
    x$1=x$1[e.Current()];
  }
  finally
  {
   if("Dispose"in e)
    e.Dispose();
  }
  return x$1;
 };
 Pervasives.NewFromSeq=function(fields)
 {
  var r,e,f;
  r={};
  e=Enumerator.Get(fields);
  try
  {
   while(e.MoveNext())
    {
     f=e.Current();
     r[f[0]]=f[1];
    }
  }
  finally
  {
   if("Dispose"in e)
    e.Dispose();
  }
  return r;
 };
 Json.Activate=function(json)
 {
  var types,i,$1;
  function decode(x)
  {
   var x$1,o,ti,t,r,k;
   if(Unchecked.Equals(x,null))
    return x;
   else
    if(typeof x=="object")
    {
     if(x instanceof Global.Array)
      return Json.shallowMap(decode,x);
     else
      {
       o=Json.shallowMap(decode,x.$V);
       ti=x.$T;
       if(Unchecked.Equals(typeof ti,"undefined"))
        return o;
       else
        {
         t=Arrays.get(types,ti);
         if(t===Global.WebSharper.List.T)
          return List.ofArray(o);
         else
          {
           r=(x$1=Arrays.get(types,ti),new x$1());
           for(var k$1 in o)if(function(k$2)
           {
            r[k$2]=o[k$2];
            return false;
           }(k$1))
            break;
           return r;
          }
        }
      }
    }
    else
     return x;
  }
  types=json.$TYPES;
  for(i=0,$1=Arrays.length(types)-1;i<=$1;i++)Arrays.set(types,i,Json.lookup(Arrays.get(types,i)));
  return decode(json.$DATA);
 };
 Json.shallowMap=function(f,x)
 {
  var r,k;
  if(x instanceof Global.Array)
   return Arrays.map(f,x);
  else
   if(typeof x=="object")
    {
     r={};
     for(var k$1 in x)if(function(y)
     {
      r[y]=f(x[y]);
      return false;
     }(k$1))
      break;
     return r;
    }
   else
    return x;
 };
 Json.lookup=function(x)
 {
  var r,i,k,n,rn;
  k=Arrays.length(x);
  r=Global;
  i=0;
  while(i<k)
   {
    n=Arrays.get(x,i);
    rn=r[n];
    !Unchecked.Equals(typeof rn,void 0)?(r=rn,i=i+1):Operators.FailWith("Invalid server reply. Failed to find type: "+n);
   }
  return r;
 };
 XhrProvider=Remoting.XhrProvider=Runtime.Class({
  Sync:function(url,headers,data)
  {
   var res;
   res=[null];
   Remoting.ajax(false,url,headers,data,function(x)
   {
    res[0]=x;
   },function(e)
   {
    throw e;
   },function()
   {
    Remoting.ajax(false,url,headers,data,function(x)
    {
     res[0]=x;
    },function(e)
    {
     throw e;
    },void 0);
   });
   return res[0];
  },
  Async:function(url,headers,data,ok,err)
  {
   Remoting.ajax(true,url,headers,data,ok,err,function()
   {
    Remoting.ajax(true,url,headers,data,ok,err,void 0);
   });
  }
 },null,XhrProvider);
 XhrProvider.New=Runtime.Ctor(function()
 {
 },XhrProvider);
 AjaxRemotingProvider=Remoting.AjaxRemotingProvider=Runtime.Class({
  get_EndPoint:function()
  {
   return Remoting.EndPoint();
  },
  AsyncBase:function(m,data)
  {
   var $this;
   $this=this;
   return Concurrency.Delay(function()
   {
    var headers,payload,x;
    headers=Remoting.makeHeaders(m);
    payload=Remoting.makePayload(data);
    x=Concurrency.GetCT();
    return Concurrency.Bind(x,function(a)
    {
     return Concurrency.FromContinuations(function(ok,err,cc)
     {
      var waiting,reg,callback,a$1;
      waiting=[true];
      reg=(callback=function()
      {
       return waiting[0]?(waiting[0]=false,cc(new OperationCanceledException.New(a))):null;
      },Concurrency.Register(a,function()
      {
       callback();
      }));
      a$1=$this.get_EndPoint();
      return Remoting.AjaxProvider().Async(a$1,headers,payload,function(x$1)
      {
       if(waiting[0])
        {
         waiting[0]=false;
         reg.Dispose();
         ok(Json.Activate(Global.JSON.parse(x$1)));
        }
      },function(e)
      {
       if(waiting[0])
        {
         waiting[0]=false;
         reg.Dispose();
         err(e);
        }
      });
     });
    });
   });
  },
  Send:function(m,data)
  {
   var computation;
   computation=this.AsyncBase(m,data);
   Concurrency.Start(computation,null);
  },
  Task:function(m,data)
  {
   var a;
   a=this.AsyncBase(m,data);
   return Concurrency.StartAsTask(a,null);
  },
  Async:function(m,data)
  {
   return this.AsyncBase(m,data);
  },
  Sync:function(m,data)
  {
   var data$1,a,a$1,a$2;
   data$1=(a=this.get_EndPoint(),(a$1=Remoting.makeHeaders(m),(a$2=Remoting.makePayload(data),Remoting.AjaxProvider().Sync(a,a$1,a$2))));
   return Json.Activate(Global.JSON.parse(data$1));
  }
 },null,AjaxRemotingProvider);
 AjaxRemotingProvider.New=Runtime.Ctor(function()
 {
 },AjaxRemotingProvider);
 Remoting.ajax=function(async,url,headers,data,ok,err,csrf)
 {
  var xhr,csrf$1,h;
  xhr=new Global.XMLHttpRequest();
  csrf$1=Global.document.cookie.replace(new Global.RegExp("(?:(?:^|.*;)\\s*csrftoken\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1");
  xhr.open("POST",url,async);
  if(async==true)
   xhr.withCredentials=true;
  for(var h$1 in headers)xhr.setRequestHeader(h$1,headers[h$1]);
  if(csrf$1)
   xhr.setRequestHeader("x-csrftoken",csrf$1);
  function k()
  {
   var msg;
   if(xhr.status==200)
    ok(xhr.responseText);
   else
    if(csrf&&xhr.status==403&&xhr.responseText=="CSRF")
     csrf();
    else
     {
      msg="Response status is not 200: ";
      err(new Global.Error(msg+xhr.status));
     }
  }
  if("onload"in xhr)
   xhr.onload=xhr.onerror=xhr.onabort=k;
  else
   xhr.onreadystatechange=function()
   {
    if(xhr.readyState==4)
     k();
   };
  xhr.send(data);
 };
 Remoting.makePayload=function(data)
 {
  return Global.JSON.stringify(data);
 };
 Remoting.makeHeaders=function(m)
 {
  return{
   "x-websharper-rpc":m,
   "content-type":"application/json"
  };
 };
 Remoting.AjaxProvider=function()
 {
  SC$1.$cctor();
  return SC$1.AjaxProvider;
 };
 Remoting.set_AjaxProvider=function($1)
 {
  SC$1.$cctor();
  SC$1.AjaxProvider=$1;
 };
 Remoting.UseHttps=function()
 {
  var _this,_this$1;
  try
  {
   return!(_this=Global.window.location.href,Strings.StartsWith(_this,"https://"))?(Remoting.set_EndPoint((_this$1=Global.window.location.href,Strings.Replace(_this$1,"http://","https://"))),true):false;
  }
  catch(m)
  {
   return false;
  }
 };
 Remoting.EndPoint=function()
 {
  SC$1.$cctor();
  return SC$1.EndPoint;
 };
 Remoting.set_EndPoint=function($1)
 {
  SC$1.$cctor();
  SC$1.EndPoint=$1;
 };
 SC$1.$cctor=Runtime.Cctor(function()
 {
  SC$1.EndPoint="?";
  SC$1.AjaxProvider=new XhrProvider.New();
  SC$1.$cctor=Global.ignore;
 });
 PrintfHelpers.prettyPrint=function(o)
 {
  var t,s,s$1,s$2,m;
  return o===null?"null":(t=typeof o,t=="string"?"\""+o+"\"":t=="object"?o instanceof Global.Array?"[|"+(s=Arrays.map(PrintfHelpers.prettyPrint,o),Strings.concat("; ",s))+"|]":(s$1=Global.String(o),s$1==="[object Object]"?"{"+(s$2=(m=function(k,v)
  {
   return k+" = "+PrintfHelpers.prettyPrint(v);
  },function(a)
  {
   return Arrays.map(function($1)
   {
    return m($1[0],$1[1]);
   },a);
  }(JSModule.GetFields(o))),Strings.concat("; ",s$2))+"}":s$1):Global.String(o));
 };
 PrintfHelpers.printArray2D=function(p,o)
 {
  return o===null?"null":"[["+Strings.concat("][",Seq.delay(function()
  {
   var l2;
   l2=o.length?o[0].length:0;
   return Seq.map(function(i)
   {
    return Strings.concat("; ",Seq.delay(function()
    {
     return Seq.map(function(j)
     {
      return p(Arrays.get2D(o,i,j));
     },Operators.range(0,l2-1));
    }));
   },Operators.range(0,o.length-1));
  }))+"]]";
 };
 PrintfHelpers.printArray=function(p,o)
 {
  var s;
  return o===null?"null":"[|"+(s=Arrays.map(p,o),Strings.concat("; ",s))+"|]";
 };
 PrintfHelpers.printList=function(p,o)
 {
  return"["+Strings.concat("; ",Seq.map(p,o))+"]";
 };
 PrintfHelpers.padNumLeft=function(s,l)
 {
  var f,_this;
  f=Arrays.get(s,0);
  return((f===" "?true:f==="+")?true:f==="-")?f+(_this=s.substr(1),Strings.PadLeftWith(_this,l-1,48)):Strings.PadLeftWith(s,l,48);
 };
 PrintfHelpers.spaceForPos=function(n,s)
 {
  return 0<=n?" "+s:s;
 };
 PrintfHelpers.plusForPos=function(n,s)
 {
  return 0<=n?"+"+s:s;
 };
 PrintfHelpers.toSafe=function(s)
 {
  return s==null?"":s;
 };
 Scheduler=Concurrency.Scheduler=Runtime.Class({
  tick:function()
  {
   var loop,$this,t,m,v;
   $this=this;
   t=Global.Date.now();
   loop=true;
   while(loop)
    {
     m=this.robin.length;
     m===0?(this.idle=true,loop=false):((this.robin.shift())(),Global.Date.now()-t>40?(v=Global.setTimeout(function()
     {
      $this.tick();
     },0),loop=false):void 0);
    }
  },
  Fork:function(action)
  {
   var $this,v;
   $this=this;
   this.robin.push(action);
   this.idle?(this.idle=false,v=Global.setTimeout(function()
   {
    $this.tick();
   },0)):void 0;
  }
 },null,Scheduler);
 Scheduler.New=Runtime.Ctor(function()
 {
  this.idle=true;
  this.robin=[];
 },Scheduler);
 Concurrency.For=function(s,b)
 {
  return Concurrency.Using(Enumerator.Get(s),function(ie)
  {
   return Concurrency.While(function()
   {
    return ie.MoveNext();
   },Concurrency.Delay(function()
   {
    return b(ie.Current());
   }));
  });
 };
 Concurrency.While=function(g,c)
 {
  return g()?Concurrency.Bind(c,function()
  {
   return Concurrency.While(g,c);
  }):Concurrency.Return();
 };
 Concurrency.Using=function(x,f)
 {
  return Concurrency.TryFinally(f(x),function()
  {
   x.Dispose();
  });
 };
 Concurrency.TryCancelled=function(run,comp)
 {
  return function(c)
  {
   run({
    k:function(a)
    {
     if(a.$==2)
      {
       comp(a.$0);
       c.k(a);
      }
     else
      c.k(a);
    },
    ct:c.ct
   });
  };
 };
 Concurrency.OnCancel=function(action)
 {
  return function(c)
  {
   c.k({
    $:0,
    $0:Concurrency.Register(c.ct,action)
   });
  };
 };
 Concurrency.StartChild=function(r,t,c)
 {
  var inTime,cached,queue,tReg;
  inTime=[true];
  cached=[null];
  queue=[];
  tReg=(t!=null?t.$==1:false)?{
   $:1,
   $0:Global.setTimeout(function()
   {
    var err;
    inTime[0]=false;
    err={
     $:1,
     $0:new TimeoutException.New()
    };
    while(queue.length>0)
     (queue.shift())(err);
   },t.$0)
  }:null;
  Concurrency.scheduler().Fork(function()
  {
   if(!c.ct.c)
    r({
     k:function(res)
     {
      if(inTime[0])
       {
        cached[0]={
         $:1,
         $0:res
        };
        (tReg!=null?tReg.$==1:false)?Global.clearTimeout(tReg.$0):void 0;
        while(queue.length>0)
         (queue.shift())(res);
       }
     },
     ct:c.ct
    });
  });
  c.k({
   $:0,
   $0:function(c2)
   {
    var m;
    if(inTime[0])
     {
      m=cached[0];
      m==null?queue.push(c2.k):c2.k(m.$0);
     }
    else
     c2.k({
      $:1,
      $0:new TimeoutException.New()
     });
   }
  });
 };
 Concurrency.Parallel=function(cs)
 {
  var cs$1;
  cs$1=Arrays.ofSeq(cs);
  return Arrays.length(cs$1)===0?Concurrency.Return([]):function(c)
  {
   var n,o,a,accept;
   n=cs$1.length;
   o=[n];
   a=new Global.Array(n);
   accept=function(i,x)
   {
    var $1,$2;
    $2=o[0];
    switch($2===0?0:$2===1?x.$==0?1:($1=[$2,x],3):x.$==0?2:($1=[$2,x],3))
    {
     case 0:
      return null;
      break;
     case 1:
      Arrays.set(a,i,x.$0);
      o[0]=0;
      return c.k({
       $:0,
       $0:a
      });
      break;
     case 2:
      Arrays.set(a,i,x.$0);
      o[0]=$2-1;
      break;
     case 3:
      o[0]=0;
      return c.k($1[1]);
      break;
    }
   };
   Arrays.iteri(function($1,$2)
   {
    return Concurrency.scheduler().Fork(function()
    {
     $2({
      k:function($3)
      {
       return accept($1,$3);
      },
      ct:c.ct
     });
    });
   },cs$1);
  };
 };
 Concurrency.Sleep=function(ms)
 {
  return function(c)
  {
   var p,c$1,pending,creg;
   function p$1()
   {
    return Global.setTimeout(function()
    {
     Lazy.Force(c$1).Dispose();
     Concurrency.scheduler().Fork(function()
     {
      c.k({
       $:0,
       $0:null
      });
     });
    },ms);
   }
   function c$2()
   {
    return Concurrency.Register(c.ct,function()
    {
     var handle;
     handle=Lazy.Force(p);
     Global.clearTimeout(handle);
     Concurrency.scheduler().Fork(function()
     {
      Concurrency.cancel(c);
     });
    });
   }
   p=Lazy.Create(p$1);
   c$1=Lazy.Create(c$2);
   pending=Lazy.Force(p);
   creg=Lazy.Force(c$1);
  };
 };
 Concurrency.StartAsTask=function(c,ctOpt)
 {
  var tcs;
  tcs=new TaskCompletionSource.New();
  Concurrency.StartWithContinuations(c,function(a)
  {
   tcs.SetResult(a);
  },function(a)
  {
   tcs.SetException$1(a);
  },function()
  {
   tcs.SetCanceled();
  },ctOpt);
  return tcs.get_Task();
 };
 Concurrency.AwaitTask1=function(t)
 {
  return Concurrency.FromContinuations(function(ok,err,cc)
  {
   var v;
   Unchecked.Equals(t.get_Status(),0)?t.Start():void 0;
   return v=t.ContinueWith$2(function(t$1)
   {
    return t$1.get_IsCanceled()?cc(new OperationCanceledException.New(Concurrency.noneCT())):t$1.get_IsFaulted()?err(t$1.get_Exception()):ok(t$1.get_Result());
   });
  });
 };
 Concurrency.AwaitTask=function(t)
 {
  return Concurrency.FromContinuations(function(ok,err,cc)
  {
   var v;
   Unchecked.Equals(t.get_Status(),0)?t.Start():void 0;
   return v=t.ContinueWith$2(function(t$1)
   {
    return t$1.get_IsCanceled()?cc(new OperationCanceledException.New(Concurrency.noneCT())):t$1.get_IsFaulted()?err(t$1.get_Exception()):ok();
   });
  });
 };
 Concurrency.AwaitEvent=function(e,ca)
 {
  return function(c)
  {
   var s,c$1,sub,creg;
   function s$1()
   {
    return Util.subscribeTo(e,function(x)
    {
     Lazy.Force(s).Dispose();
     Lazy.Force(c$1).Dispose();
     Concurrency.scheduler().Fork(function()
     {
      c.k({
       $:0,
       $0:x
      });
     });
    });
   }
   function c$2()
   {
    return Concurrency.Register(c.ct,function()
    {
     if(ca!=null?ca.$==1:false)
      ca.$0();
     else
      {
       Lazy.Force(s).Dispose();
       Concurrency.scheduler().Fork(function()
       {
        Concurrency.cancel(c);
       });
      }
    });
   }
   s=Lazy.Create(s$1);
   c$1=Lazy.Create(c$2);
   sub=Lazy.Force(s);
   creg=Lazy.Force(c$1);
  };
 };
 Concurrency.StartImmediate=function(c,ctOpt)
 {
  var ct;
  ct=Operators.DefaultArg(ctOpt,(Concurrency.defCTS())[0]);
  !ct.c?c({
   k:function(a)
   {
    if(a.$==1)
     Concurrency.UncaughtAsyncError(a.$0);
   },
   ct:ct
  }):void 0;
 };
 Concurrency.Start=function(c,ctOpt)
 {
  var ct;
  ct=Operators.DefaultArg(ctOpt,(Concurrency.defCTS())[0]);
  Concurrency.scheduler().Fork(function()
  {
   if(!ct.c)
    c({
     k:function(a)
     {
      if(a.$==1)
       Concurrency.UncaughtAsyncError(a.$0);
     },
     ct:ct
    });
  });
 };
 Concurrency.UncaughtAsyncError=function(e)
 {
  Global.console.log.apply(Global.console,["WebSharper: Uncaught asynchronous exception"].concat([e]));
 };
 Concurrency.StartWithContinuations=function(c,s,f,cc,ctOpt)
 {
  var ct;
  ct=Operators.DefaultArg(ctOpt,(Concurrency.defCTS())[0]);
  !ct.c?c({
   k:function(a)
   {
    if(a.$==1)
     f(a.$0);
    else
     if(a.$==2)
      cc(a.$0);
     else
      s(a.$0);
   },
   ct:ct
  }):void 0;
 };
 Concurrency.FromContinuations=function(subscribe)
 {
  return function(c)
  {
   var continued,once;
   continued=[false];
   once=function(cont)
   {
    if(continued[0])
     Operators.FailWith("A continuation provided by Async.FromContinuations was invoked multiple times");
    else
     {
      continued[0]=true;
      Concurrency.scheduler().Fork(cont);
     }
   };
   subscribe(function(a)
   {
    once(function()
    {
     c.k({
      $:0,
      $0:a
     });
    });
   },function(e)
   {
    once(function()
    {
     c.k({
      $:1,
      $0:e
     });
    });
   },function(e)
   {
    once(function()
    {
     c.k({
      $:2,
      $0:e
     });
    });
   });
  };
 };
 Concurrency.GetCT=function()
 {
  SC$2.$cctor();
  return SC$2.GetCT;
 };
 Concurrency.Catch=function(r)
 {
  return function(c)
  {
   try
   {
    r({
     k:function(a)
     {
      if(a.$==0)
       c.k({
        $:0,
        $0:{
         $:0,
         $0:a.$0
        }
       });
      else
       if(a.$==1)
        c.k({
         $:0,
         $0:{
          $:1,
          $0:a.$0
         }
        });
       else
        c.k(a);
     },
     ct:c.ct
    });
   }
   catch(e)
   {
    c.k({
     $:0,
     $0:{
      $:1,
      $0:e
     }
    });
   }
  };
 };
 Concurrency.TryWith=function(r,f)
 {
  return function(c)
  {
   r({
    k:function(a)
    {
     if(a.$==0)
      c.k({
       $:0,
       $0:a.$0
      });
     else
      if(a.$==1)
       try
       {
        (f(a.$0))(c);
       }
       catch(e)
       {
        c.k(a);
       }
      else
       c.k(a);
    },
    ct:c.ct
   });
  };
 };
 Concurrency.TryFinally=function(run,f)
 {
  return function(c)
  {
   run({
    k:function(r)
    {
     try
     {
      f();
      c.k(r);
     }
     catch(e)
     {
      c.k({
       $:1,
       $0:e
      });
     }
    },
    ct:c.ct
   });
  };
 };
 Concurrency.Delay=function(mk)
 {
  return function(c)
  {
   try
   {
    (mk(null))(c);
   }
   catch(e)
   {
    c.k({
     $:1,
     $0:e
    });
   }
  };
 };
 Concurrency.Combine=function(a,b)
 {
  return Concurrency.Bind(a,function()
  {
   return b;
  });
 };
 Concurrency.Bind=function(r,f)
 {
  return Concurrency.checkCancel(function(c)
  {
   r({
    k:function(a)
    {
     var x;
     if(a.$==0)
      {
       x=a.$0;
       Concurrency.scheduler().Fork(function()
       {
        try
        {
         (f(x))(c);
        }
        catch(e)
        {
         c.k({
          $:1,
          $0:e
         });
        }
       });
      }
     else
      Concurrency.scheduler().Fork(function()
      {
       c.k(a);
      });
    },
    ct:c.ct
   });
  });
 };
 Concurrency.Return=function(x)
 {
  return function(c)
  {
   c.k({
    $:0,
    $0:x
   });
  };
 };
 Concurrency.checkCancel=function(r)
 {
  return function(c)
  {
   if(c.ct.c)
    Concurrency.cancel(c);
   else
    r(c);
  };
 };
 Concurrency.cancel=function(c)
 {
  c.k({
   $:2,
   $0:new OperationCanceledException.New(c.ct)
  });
 };
 Concurrency.defCTS=function()
 {
  SC$2.$cctor();
  return SC$2.defCTS;
 };
 Concurrency.scheduler=function()
 {
  SC$2.$cctor();
  return SC$2.scheduler;
 };
 Concurrency.Register=function(ct,callback)
 {
  var i;
  return ct===Concurrency.noneCT()?{
   Dispose:function()
   {
    return null;
   }
  }:(i=ct.r.push(callback)-1,{
   Dispose:function()
   {
    return Arrays.set(ct.r,i,function()
    {
    });
   }
  });
 };
 Concurrency.noneCT=function()
 {
  SC$2.$cctor();
  return SC$2.noneCT;
 };
 SC$2.$cctor=Runtime.Cctor(function()
 {
  SC$2.noneCT={
   c:false,
   r:[]
  };
  SC$2.scheduler=new Scheduler.New();
  SC$2.defCTS=[new CancellationTokenSource.New()];
  SC$2.GetCT=function(c)
  {
   c.k({
    $:0,
    $0:c.ct
   });
  };
  SC$2.$cctor=Global.ignore;
 });
 T=Enumerator.T=Runtime.Class({
  Dispose:function()
  {
   if(this.d)
    this.d(this);
  },
  Current:function()
  {
   return this.c;
  },
  Current0:function()
  {
   return this.c;
  },
  MoveNext:function()
  {
   return this.n(this);
  }
 },null,T);
 T.New=Runtime.Ctor(function(s,c,n,d)
 {
  this.s=s;
  this.c=c;
  this.n=n;
  this.d=d;
 },T);
 Enumerator.Get0=function(x)
 {
  return x instanceof Global.Array?Enumerator.ArrayEnumerator(x):Unchecked.Equals(typeof x,"string")?Enumerator.StringEnumerator(x):"GetEnumerator0"in x?x.GetEnumerator0():x.GetEnumerator();
 };
 Enumerator.Get=function(x)
 {
  return x instanceof Global.Array?Enumerator.ArrayEnumerator(x):Unchecked.Equals(typeof x,"string")?Enumerator.StringEnumerator(x):x.GetEnumerator();
 };
 Enumerator.StringEnumerator=function(s)
 {
  return new T.New(0,null,function(e)
  {
   var i;
   i=e.s;
   return i<s.length?(e.c=s.charCodeAt(i),e.s=i+1,true):false;
  },void 0);
 };
 Enumerator.ArrayEnumerator=function(s)
 {
  return new T.New(0,null,function(e)
  {
   var i;
   i=e.s;
   return i<Arrays.length(s)?(e.c=Arrays.get(s,i),e.s=i+1,true):false;
  },void 0);
 };
 SingleNode=HtmlContentExtensions.SingleNode=Runtime.Class({
  ReplaceInDom:function(old)
  {
   var v;
   v=this.node.parentNode.replaceChild(this.node,old);
  }
 },null,SingleNode);
 SingleNode.New=Runtime.Ctor(function(node)
 {
  this.node=node;
 },SingleNode);
 Activator.hasDocument=function()
 {
  return typeof Global.document!=="undefined";
 };
 Activator.Activate=function()
 {
  var meta,element;
  if(Activator.hasDocument())
   {
    meta=Global.document.getElementById("websharper-data");
    meta?(element=Global.document,Global.jQuery(element)).ready(function()
    {
     var text,obj,a;
     text=meta.getAttribute("content");
     obj=Json.Activate(Global.JSON.parse(text));
     a=function(k,v)
     {
      var p;
      p=v.Body();
      p.ReplaceInDom(Global.document.getElementById(k));
     };
     return function(a$1)
     {
      Arrays.iter(function($1)
      {
       return a($1[0],$1[1]);
      },a$1);
     }(JSModule.GetFields(obj));
    }):void 0;
   }
 };
 Arrays.splitInto=function(count,arr)
 {
  var startIndex,len,count$1,res,minChunkSize,i,$1,i$1,$2;
  if(count<=0)
   Operators.FailWith("Count must be positive");
  len=Arrays.length(arr);
  if(len===0)
   return[];
  else
   {
    count$1=Operators.Min(count,len);
    res=Arrays.create(count$1,null);
    minChunkSize=len/count$1>>0;
    startIndex=0;
    for(i=0,$1=len%count$1-1;i<=$1;i++){
     res[i]=Arrays.sub(arr,startIndex,minChunkSize+1);
     startIndex=startIndex+minChunkSize+1;
    }
    for(i$1=len%count$1,$2=count$1-1;i$1<=$2;i$1++){
     res[i$1]=Arrays.sub(arr,startIndex,minChunkSize);
     startIndex=startIndex+minChunkSize;
    }
    return res;
   }
 };
 Arrays.contains=function(item,arr)
 {
  var c,i,$1,l;
  c=true;
  i=0;
  l=Arrays.length(arr);
  while(c?i<l:false)
   if(Unchecked.Equals(arr[i],item))
    c=false;
   else
    i=i+1;
  return!c;
 };
 Arrays.tryFindBack=function(f,arr)
 {
  var res,i,r;
  res=null;
  i=arr.length-1;
  while(i>=0?res==null:false)
   {
    r=arr[i];
    f(r)?res={
     $:1,
     $0:r
    }:void 0;
    i=i-1;
   }
  return res;
 };
 Arrays.tryFindIndexBack=function(f,arr)
 {
  var res,i;
  res=null;
  i=arr.length-1;
  while(i>=0?res==null:false)
   {
    f(Arrays.get(arr,i))?res={
     $:1,
     $0:i
    }:void 0;
    i=i-1;
   }
  return res;
 };
 Arrays.mapFold=function(f,zero,arr)
 {
  var a,acc,r,i,$1,p;
  r=(a=arr.length,new Global.Array(a));
  acc=zero;
  for(i=0,$1=arr.length-1;i<=$1;i++){
   p=f(acc,arr[i]);
   r[i]=p[0];
   acc=p[1];
  }
  return[r,acc];
 };
 Arrays.mapFoldBack=function(f,arr,zero)
 {
  var a,acc,$1,r,len,j,$2,i,p;
  r=(a=arr.length,new Global.Array(a));
  acc=zero;
  len=arr.length;
  for(j=1,$2=len;j<=$2;j++){
   i=len-j;
   p=f(arr[i],acc);
   r[i]=p[0];
   acc=p[1];
  }
  return[r,acc];
 };
 Arrays.mapInPlace=function(f,arr)
 {
  var i,$1;
  for(i=0,$1=arr.length-1;i<=$1;i++)arr[i]=f(arr[i]);
 };
 Arrays.mapiInPlace=function(f,arr)
 {
  var i,$1;
  for(i=0,$1=arr.length-1;i<=$1;i++)arr[i]=f(i,arr[i]);
  return arr;
 };
 Arrays.sortInPlaceByDescending=function(f,arr)
 {
  var f$1,_this;
  f$1=function(t)
  {
   return t[0];
  };
  (function(a)
  {
   Arrays.mapInPlace(f$1,a);
  }((_this=Arrays.mapiInPlace(function($1,$2)
  {
   return[$2,[f($2),$1]];
  },arr),_this.sort(function(x,y)
  {
   return-Operators.Compare(x[1],y[1]);
  }))));
 };
 Seq.tryHead=function(s)
 {
  var e;
  e=Enumerator.Get(s);
  try
  {
   return e.MoveNext()?{
    $:1,
    $0:e.Current()
   }:null;
  }
  finally
  {
   if("Dispose"in e)
    e.Dispose();
  }
 };
 Seq.tryItem=function(i,s)
 {
  var j,e,go;
  if(i<0)
   return null;
  else
   {
    j=0;
    e=Enumerator.Get(s);
    try
    {
     go=true;
     while(go?j<=i:false)
      if(e.MoveNext())
       j=j+1;
      else
       go=false;
     return go?{
      $:1,
      $0:e.Current()
     }:null;
    }
    finally
    {
     if("Dispose"in e)
      e.Dispose();
    }
   }
 };
 Seq.tryLast=function(s)
 {
  var e,$1;
  e=Enumerator.Get(s);
  try
  {
   if(e.MoveNext())
    {
     while(e.MoveNext())
      ;
     $1={
      $:1,
      $0:e.Current()
     };
    }
   else
    $1=null;
   return $1;
  }
  finally
  {
   if("Dispose"in e)
    e.Dispose();
  }
 };
 Seq.chunkBySize=function(size,s)
 {
  size<=0?Operators.FailWith("Chunk size must be positive"):void 0;
  return{
   GetEnumerator:function()
   {
    var o;
    o=Enumerator.Get(s);
    return new T.New(null,null,function(e)
    {
     var res,v;
     if(o.MoveNext())
      {
       res=[o.Current()];
       while(Arrays.length(res)<size?o.MoveNext():false)
        {
         v=res.push(o.Current());
        }
       e.c=res;
       return true;
      }
     else
      return false;
    },function()
    {
     o.Dispose();
    });
   }
  };
 };
 Arrays.countBy=function(f,a)
 {
  var f$1,d,keys,i,$1,k,v;
  d=new Dictionary.New$5();
  keys=Global.Array.prototype.constructor.apply(Global.Array,[]);
  for(i=0,$1=Arrays.length(a)-1;i<=$1;i++){
   k=f(a[i]);
   d.ContainsKey(k)?d.set_Item(k,d.get_Item(k)+1):(v=keys.push(k),d.Add(k,1));
  }
  f$1=function(k$1)
  {
   return[k$1,d.get_Item(k$1)];
  };
  (function(a$1)
  {
   Arrays.mapInPlace(f$1,a$1);
  }(keys));
  return keys;
 };
 Seq.except=function(itemsToExclude,s)
 {
  return{
   GetEnumerator:function()
   {
    var o,seen;
    o=Enumerator.Get(s);
    seen=new HashSet.New$2(itemsToExclude);
    return new T.New(null,null,function(e)
    {
     var cur,has;
     if(o.MoveNext())
      {
       cur=o.Current();
       has=seen.Add(cur);
       while(!has?o.MoveNext():false)
        {
         cur=o.Current();
         has=seen.Add(cur);
        }
       return has?(e.c=cur,true):false;
      }
     else
      return false;
    },function()
    {
     o.Dispose();
    });
   }
  };
 };
 List.skip=function(i,l)
 {
  var res,j,$1;
  res=l;
  for(j=1,$1=i;j<=$1;j++)if(res.$==0)
   Operators.FailWith("Input list too short.");
  else
   res=res.$1;
  return res;
 };
 Arrays.groupBy=function(f,a)
 {
  var f$1,d,keys,i,$1,c,k,v,v$1;
  d=new Dictionary.New$5();
  keys=Global.Array.prototype.constructor.apply(Global.Array,[]);
  for(i=0,$1=Arrays.length(a)-1;i<=$1;i++){
   c=a[i];
   k=f(c);
   d.ContainsKey(k)?v=d.get_Item(k).push(c):(v$1=keys.push(k),d.Add(k,[c]));
  }
  f$1=function(k$1)
  {
   return[k$1,d.get_Item(k$1)];
  };
  (function(a$1)
  {
   Arrays.mapInPlace(f$1,a$1);
  }(keys));
  return keys;
 };
 Seq.insufficient=function()
 {
  return Operators.FailWith("The input sequence has an insufficient number of elements.");
 };
 Seq.last=function(s)
 {
  var e,$1;
  e=Enumerator.Get(s);
  try
  {
   if(!e.MoveNext())
    $1=Seq.insufficient();
   else
    {
     while(e.MoveNext())
      ;
     $1=e.Current();
    }
   return $1;
  }
  finally
  {
   if("Dispose"in e)
    e.Dispose();
  }
 };
 Seq.contains=function(el,s)
 {
  var e,r;
  e=Enumerator.Get(s);
  try
  {
   r=false;
   while(!r?e.MoveNext():false)
    r=Unchecked.Equals(e.Current(),el);
   return r;
  }
  finally
  {
   if("Dispose"in e)
    e.Dispose();
  }
 };
 List.skipWhile=function(predicate,list)
 {
  var rest;
  rest=list;
  while(!(rest.$==0)?predicate(List.head(rest)):false)
   rest=List.tail(rest);
  return rest;
 };
 Seq.nonNegative=function()
 {
  return Operators.FailWith("The input must be non-negative.");
 };
 Arrays.checkBounds=function(arr,n)
 {
  if(n<0?true:n>=arr.length)
   Operators.FailWith("Index was outside the bounds of the array.");
 };
 Arrays.checkBounds2D=function(arr,n1,n2)
 {
  if(((n1<0?true:n2<0)?true:n1>=arr.length)?true:n2>=(arr.length?arr[0].length:0))
   throw new IndexOutOfRangeException.New();
 };
 Arrays.checkRange=function(arr,start,size)
 {
  if((size<0?true:start<0)?true:arr.length<start+size)
   Operators.FailWith("Index was outside the bounds of the array.");
 };
 Arrays.set=function(arr,n,x)
 {
  Arrays.checkBounds(arr,n);
  arr[n]=x;
 };
 Arrays.get=function(arr,n)
 {
  Arrays.checkBounds(arr,n);
  return arr[n];
 };
 Arrays.sub=function(arr,start,length)
 {
  Arrays.checkRange(arr,start,length);
  return arr.slice(start,start+length);
 };
 Arrays.setSub=function(arr,start,len,src)
 {
  var i,$1;
  for(i=0,$1=len-1;i<=$1;i++)Arrays.set(arr,start+i,Arrays.get(src,i));
 };
 Arrays.get2D=function(arr,n1,n2)
 {
  Arrays.checkBounds2D(arr,n1,n2);
  return arr[n1][n2];
 };
 Arrays.set2D=function(arr,n1,n2,x)
 {
  Arrays.checkBounds2D(arr,n1,n2);
  arr[n1][n2]=x;
 };
 Arrays.zeroCreate2D=function(n,m)
 {
  var arr;
  arr=Arrays.init(n,function()
  {
   return Arrays.create(m,null);
  });
  arr.dims=2;
  return arr;
 };
 Arrays.sub2D=function(src,src1,src2,len1,len2)
 {
  var len1$1,len2$1,dst,i,$1,j,$2;
  len1$1=len1<0?0:len1;
  len2$1=len2<0?0:len2;
  dst=Arrays.zeroCreate2D(len1$1,len2$1);
  for(i=0,$1=len1$1-1;i<=$1;i++){
   for(j=0,$2=len2$1-1;j<=$2;j++)Arrays.set2D(dst,i,j,Arrays.get2D(src,src1+i,src2+j));
  }
  return dst;
 };
 Arrays.setSub2D=function(dst,src1,src2,len1,len2,src)
 {
  var i,$1,j,$2;
  for(i=0,$1=len1-1;i<=$1;i++){
   for(j=0,$2=len2-1;j<=$2;j++)Arrays.set2D(dst,src1+i,src2+j,Arrays.get2D(src,i,j));
  }
 };
 Arrays.length=function(arr)
 {
  return arr.dims===2?arr.length*arr.length:arr.length;
 };
 WebSharper.checkThis=function(_this)
 {
  return Unchecked.Equals(_this,null)?Operators.InvalidOp("The initialization of an object or value resulted in an object or value being accessed recursively before it was fully initialized."):_this;
 };
 Arrays.reverse=function(array,offset,length)
 {
  var a;
  a=Arrays.sub(array,offset,length).slice().reverse();
  Arrays.blit(a,0,array,offset,Arrays.length(a));
 };
 Arrays.sum=function(arr)
 {
  var sum,i;
  sum=0;
  i=0;
  for(;i<arr.length;i++)sum+=arr[i];
  return sum;
 };
 Arrays.sumBy=function(f,arr)
 {
  var sum,i;
  sum=0;
  i=0;
  for(;i<arr.length;i++)sum+=f(arr[i]);
  return sum;
 };
 Arrays.average=function(arr)
 {
  var x,x$1;
  return(x=Arrays.sum(arr),Global.Number(x))/(x$1=arr.length,Global.Number(x$1));
 };
 Arrays.averageBy=function(f,arr)
 {
  var x,x$1;
  return(x=Arrays.sumBy(f,arr),Global.Number(x))/(x$1=arr.length,Global.Number(x$1));
 };
 Arrays.blit=function(arr1,start1,arr2,start2,length)
 {
  var i,$1;
  Arrays.checkRange(arr1,start1,length);
  Arrays.checkRange(arr2,start2,length);
  for(i=0,$1=length-1;i<=$1;i++)arr2[start2+i]=arr1[start1+i];
 };
 Arrays.choose=function(f,arr)
 {
  var q,i,$1,m;
  q=[];
  for(i=0,$1=arr.length-1;i<=$1;i++){
   m=f(arr[i]);
   m==null?void 0:q.push(m.$0);
  }
  return q;
 };
 Arrays.collect=function(f,x)
 {
  var x$1;
  x$1=Arrays.map(f,x);
  return Global.Array.prototype.concat.apply([],x$1);
 };
 Arrays.concat=function(xs)
 {
  var x;
  x=Arrays.ofSeq(xs);
  return Global.Array.prototype.concat.apply([],x);
 };
 Arrays.create=function(size,value)
 {
  var r,i,$1;
  r=new Global.Array(size);
  for(i=0,$1=size-1;i<=$1;i++)r[i]=value;
  return r;
 };
 Arrays.exists=function(f,x)
 {
  var e,i,$1,l;
  e=false;
  i=0;
  l=Arrays.length(x);
  while(!e?i<l:false)
   if(f(x[i]))
    e=true;
   else
    i=i+1;
  return e;
 };
 Arrays.exists2=function(f,x1,x2)
 {
  var e,i,$1,l;
  Arrays.checkLength(x1,x2);
  e=false;
  i=0;
  l=Arrays.length(x1);
  while(!e?i<l:false)
   if(f(x1[i],x2[i]))
    e=true;
   else
    i=i+1;
  return e;
 };
 Arrays.fill=function(arr,start,length,value)
 {
  var i,$1;
  Arrays.checkRange(arr,start,length);
  for(i=start,$1=start+length-1;i<=$1;i++)arr[i]=value;
 };
 Arrays.filter=function(f,arr)
 {
  var r,i,$1;
  r=[];
  for(i=0,$1=arr.length-1;i<=$1;i++)if(f(arr[i]))
   r.push(arr[i]);
  return r;
 };
 Arrays.find=function(f,arr)
 {
  var m;
  m=Arrays.tryFind(f,arr);
  return m==null?Operators.FailWith("KeyNotFoundException"):m.$0;
 };
 Arrays.findIndex=function(f,arr)
 {
  var m;
  m=Arrays.tryFindIndex(f,arr);
  return m==null?Operators.FailWith("KeyNotFoundException"):m.$0;
 };
 Arrays.fold=function(f,zero,arr)
 {
  var acc,i,$1;
  acc=zero;
  for(i=0,$1=arr.length-1;i<=$1;i++)acc=f(acc,arr[i]);
  return acc;
 };
 Arrays.fold2=function(f,zero,arr1,arr2)
 {
  var accum,i,$1;
  Arrays.checkLength(arr1,arr2);
  accum=zero;
  for(i=0,$1=arr1.length-1;i<=$1;i++)accum=f(accum,arr1[i],arr2[i]);
  return accum;
 };
 Arrays.foldBack=function(f,arr,zero)
 {
  var acc,$1,len,i,$2;
  acc=zero;
  len=arr.length;
  for(i=1,$2=len;i<=$2;i++)acc=f(arr[len-i],acc);
  return acc;
 };
 Arrays.foldBack2=function(f,arr1,arr2,zero)
 {
  var $1,accum,len,i,$2;
  Arrays.checkLength(arr1,arr2);
  len=arr1.length;
  accum=zero;
  for(i=1,$2=len;i<=$2;i++)accum=f(arr1[len-i],arr2[len-i],accum);
  return accum;
 };
 Arrays.forall=function(f,x)
 {
  var a,i,$1,l;
  a=true;
  i=0;
  l=Arrays.length(x);
  while(a?i<l:false)
   if(f(x[i]))
    i=i+1;
   else
    a=false;
  return a;
 };
 Arrays.forall2=function(f,x1,x2)
 {
  var a,i,$1,l;
  Arrays.checkLength(x1,x2);
  a=true;
  i=0;
  l=Arrays.length(x1);
  while(a?i<l:false)
   if(f(x1[i],x2[i]))
    i=i+1;
   else
    a=false;
  return a;
 };
 Arrays.init=function(size,f)
 {
  var r,i,$1;
  size<0?Operators.FailWith("Negative size given."):null;
  r=new Global.Array(size);
  for(i=0,$1=size-1;i<=$1;i++)r[i]=f(i);
  return r;
 };
 Arrays.iter=function(f,arr)
 {
  var i,$1;
  for(i=0,$1=arr.length-1;i<=$1;i++)f(arr[i]);
 };
 Arrays.iter2=function(f,arr1,arr2)
 {
  var i,$1;
  Arrays.checkLength(arr1,arr2);
  for(i=0,$1=arr1.length-1;i<=$1;i++)f(arr1[i],arr2[i]);
 };
 Arrays.iteri=function(f,arr)
 {
  var i,$1;
  for(i=0,$1=arr.length-1;i<=$1;i++)f(i,arr[i]);
 };
 Arrays.iteri2=function(f,arr1,arr2)
 {
  var i,$1;
  Arrays.checkLength(arr1,arr2);
  for(i=0,$1=arr1.length-1;i<=$1;i++)f(i,arr1[i],arr2[i]);
 };
 Arrays.map=function(f,arr)
 {
  var a,r,i,$1;
  r=(a=arr.length,new Global.Array(a));
  for(i=0,$1=arr.length-1;i<=$1;i++)r[i]=f(arr[i]);
  return r;
 };
 Arrays.map2=function(f,arr1,arr2)
 {
  var a,r,i,$1;
  Arrays.checkLength(arr1,arr2);
  r=(a=arr2.length,new Global.Array(a));
  for(i=0,$1=arr2.length-1;i<=$1;i++)r[i]=f(arr1[i],arr2[i]);
  return r;
 };
 Arrays.mapi=function(f,arr)
 {
  var a,y,i,$1;
  y=(a=arr.length,new Global.Array(a));
  for(i=0,$1=arr.length-1;i<=$1;i++)y[i]=f(i,arr[i]);
  return y;
 };
 Arrays.mapi2=function(f,arr1,arr2)
 {
  var a,res,i,$1;
  Arrays.checkLength(arr1,arr2);
  res=(a=arr1.length,new Global.Array(a));
  for(i=0,$1=arr1.length-1;i<=$1;i++)res[i]=f(i,arr1[i],arr2[i]);
  return res;
 };
 Arrays.max=function(x)
 {
  return Arrays.reduce(Operators.Max,x);
 };
 Arrays.maxBy=function(f,arr)
 {
  return Arrays.reduce(function($1,$2)
  {
   return Unchecked.Compare(f($1),f($2))===1?$1:$2;
  },arr);
 };
 Arrays.min=function(x)
 {
  return Arrays.reduce(Operators.Min,x);
 };
 Arrays.minBy=function(f,arr)
 {
  return Arrays.reduce(function($1,$2)
  {
   return Unchecked.Compare(f($1),f($2))===-1?$1:$2;
  },arr);
 };
 Arrays.ofList=function(xs)
 {
  var l,q;
  q=[];
  l=xs;
  while(!(l.$==0))
   {
    q.push(List.head(l));
    l=List.tail(l);
   }
  return q;
 };
 Arrays.ofSeq=function(xs)
 {
  var q,o;
  if(xs instanceof Global.Array)
   return xs.slice();
  else
   if(xs instanceof T$1)
    return Arrays.ofList(xs);
   else
    {
     q=[];
     o=Enumerator.Get(xs);
     try
     {
      while(o.MoveNext())
       q.push(o.Current());
      return q;
     }
     finally
     {
      if("Dispose"in o)
       o.Dispose();
     }
    }
 };
 Arrays.partition=function(f,arr)
 {
  var ret1,ret2,i,$1;
  ret1=[];
  ret2=[];
  for(i=0,$1=arr.length-1;i<=$1;i++)if(f(arr[i]))
   ret1.push(arr[i]);
  else
   ret2.push(arr[i]);
  return[ret1,ret2];
 };
 Arrays.permute=function(f,arr)
 {
  var a,ret,i,$1;
  ret=(a=arr.length,new Global.Array(a));
  for(i=0,$1=arr.length-1;i<=$1;i++)ret[f(i)]=arr[i];
  return ret;
 };
 Arrays.pick=function(f,arr)
 {
  var m;
  m=Arrays.tryPick(f,arr);
  return m==null?Operators.FailWith("KeyNotFoundException"):m.$0;
 };
 Arrays.reduce=function(f,arr)
 {
  var acc,i,$1;
  Arrays.nonEmpty(arr);
  acc=arr[0];
  for(i=1,$1=arr.length-1;i<=$1;i++)acc=f(acc,arr[i]);
  return acc;
 };
 Arrays.reduceBack=function(f,arr)
 {
  var $1,acc,len,i,$2;
  Arrays.nonEmpty(arr);
  len=arr.length;
  acc=arr[len-1];
  for(i=2,$2=len;i<=$2;i++)acc=f(arr[len-i],acc);
  return acc;
 };
 Arrays.scan=function(f,zero,arr)
 {
  var a,ret,i,$1;
  ret=(a=1+arr.length,new Global.Array(a));
  ret[0]=zero;
  for(i=0,$1=arr.length-1;i<=$1;i++)ret[i+1]=f(ret[i],arr[i]);
  return ret;
 };
 Arrays.scanBack=function(f,arr,zero)
 {
  var len,ret,i,$1;
  len=arr.length;
  ret=new Global.Array(1+len);
  ret[len]=zero;
  for(i=0,$1=len-1;i<=$1;i++)ret[len-i-1]=f(arr[len-i-1],ret[len-i]);
  return ret;
 };
 Arrays.sort=function(arr)
 {
  var m,_this;
  m=function(t)
  {
   return t[0];
  };
  return function(a)
  {
   return Arrays.map(m,a);
  }((_this=Arrays.mapi(function($1,$2)
  {
   return[$2,$1];
  },arr),_this.sort(Operators.Compare)));
 };
 Arrays.sortBy=function(f,arr)
 {
  var m,_this;
  m=function(t)
  {
   return t[0];
  };
  return function(a)
  {
   return Arrays.map(m,a);
  }((_this=Arrays.mapi(function($1,$2)
  {
   return[$2,[f($2),$1]];
  },arr),_this.sort(function(x,y)
  {
   return Operators.Compare(x[1],y[1]);
  })));
 };
 Arrays.sortInPlace=function(arr)
 {
  var f,_this;
  f=function(t)
  {
   return t[0];
  };
  (function(a)
  {
   Arrays.mapInPlace(f,a);
  }((_this=Arrays.mapiInPlace(function($1,$2)
  {
   return[$2,$1];
  },arr),_this.sort(Operators.Compare))));
 };
 Arrays.sortInPlaceBy=function(f,arr)
 {
  var f$1,_this;
  f$1=function(t)
  {
   return t[0];
  };
  (function(a)
  {
   Arrays.mapInPlace(f$1,a);
  }((_this=Arrays.mapiInPlace(function($1,$2)
  {
   return[$2,[f($2),$1]];
  },arr),_this.sort(function(x,y)
  {
   return Operators.Compare(x[1],y[1]);
  }))));
 };
 Arrays.sortInPlaceWith=function(comparer,arr)
 {
  var v;
  v=arr.sort(comparer);
 };
 Arrays.sortWith=function(comparer,arr)
 {
  return arr.slice().sort(comparer);
 };
 Arrays.sortByDescending=function(f,arr)
 {
  var m,_this;
  m=function(t)
  {
   return t[0];
  };
  return function(a)
  {
   return Arrays.map(m,a);
  }((_this=Arrays.mapi(function($1,$2)
  {
   return[$2,[f($2),$1]];
  },arr),_this.sort(function(x,y)
  {
   return-Operators.Compare(x[1],y[1]);
  })));
 };
 Arrays.sortDescending=function(arr)
 {
  var m,_this;
  m=function(t)
  {
   return t[0];
  };
  return function(a)
  {
   return Arrays.map(m,a);
  }((_this=Arrays.mapi(function($1,$2)
  {
   return[$2,$1];
  },arr),_this.sort(function(x,y)
  {
   return-Operators.Compare(x,y);
  })));
 };
 Arrays.tryFind=function(f,arr)
 {
  var res,i;
  res=null;
  i=0;
  while(i<arr.length?res==null:false)
   {
    f(arr[i])?res={
     $:1,
     $0:arr[i]
    }:void 0;
    i=i+1;
   }
  return res;
 };
 Arrays.tryFindIndex=function(f,arr)
 {
  var res,i;
  res=null;
  i=0;
  while(i<arr.length?res==null:false)
   {
    f(arr[i])?res={
     $:1,
     $0:i
    }:void 0;
    i=i+1;
   }
  return res;
 };
 Arrays.tryHead=function(arr)
 {
  return arr.length===0?null:{
   $:1,
   $0:arr[0]
  };
 };
 Arrays.tryItem=function(i,arr)
 {
  return(arr.length<=i?true:i<0)?null:{
   $:1,
   $0:arr[i]
  };
 };
 Arrays.tryLast=function(arr)
 {
  var len;
  len=arr.length;
  return len===0?null:{
   $:1,
   $0:arr[len-1]
  };
 };
 Arrays.tryPick=function(f,arr)
 {
  var res,i,m;
  res=null;
  i=0;
  while(i<arr.length?res==null:false)
   {
    m=f(arr[i]);
    (m!=null?m.$==1:false)?res=m:void 0;
    i=i+1;
   }
  return res;
 };
 Arrays.unzip=function(arr)
 {
  var x,y,i,$1,p;
  x=[];
  y=[];
  for(i=0,$1=arr.length-1;i<=$1;i++){
   p=arr[i];
   x.push(p[0]);
   y.push(p[1]);
  }
  return[x,y];
 };
 Arrays.unzip3=function(arr)
 {
  var x,y,z,i,$1,m;
  x=[];
  y=[];
  z=[];
  for(i=0,$1=arr.length-1;i<=$1;i++){
   m=arr[i];
   x.push(m[0]);
   y.push(m[1]);
   z.push(m[2]);
  }
  return[x,y,z];
 };
 Arrays.zip=function(arr1,arr2)
 {
  var res,i,$1;
  Arrays.checkLength(arr1,arr2);
  res=Arrays.create(arr1.length,null);
  for(i=0,$1=arr1.length-1;i<=$1;i++)res[i]=[arr1[i],arr2[i]];
  return res;
 };
 Arrays.zip3=function(arr1,arr2,arr3)
 {
  var res,i,$1;
  Arrays.checkLength(arr1,arr2);
  Arrays.checkLength(arr2,arr3);
  res=Arrays.create(arr1.length,null);
  for(i=0,$1=arr1.length-1;i<=$1;i++)res[i]=[arr1[i],arr2[i],arr3[i]];
  return res;
 };
 Arrays.chunkBySize=function(size,array)
 {
  return Arrays.ofSeq(Seq.chunkBySize(size,array));
 };
 Arrays.compareWith=function(f,a1,a2)
 {
  return Seq.compareWith(f,a1,a2);
 };
 Arrays.distinct=function(l)
 {
  return Arrays.ofSeq(Seq.distinct(l));
 };
 Arrays.distinctBy=function(f,a)
 {
  return Arrays.ofSeq(Seq.distinctBy(f,a));
 };
 Arrays.except=function(itemsToExclude,a)
 {
  return Arrays.ofSeq(Seq.except(itemsToExclude,a));
 };
 Arrays.findBack=function(p,s)
 {
  var m;
  m=Arrays.tryFindBack(p,s);
  return m==null?Operators.FailWith("KeyNotFoundException"):m.$0;
 };
 Arrays.findIndexBack=function(p,s)
 {
  var m;
  m=Arrays.tryFindIndexBack(p,s);
  return m==null?Operators.FailWith("KeyNotFoundException"):m.$0;
 };
 Arrays.head=function(arr)
 {
  Arrays.nonEmpty(arr);
  return arr[0];
 };
 Arrays.last=function(arr)
 {
  Arrays.nonEmpty(arr);
  return arr[arr.length-1];
 };
 Arrays.map3=function(f,arr1,arr2,arr3)
 {
  var a,r,i,$1;
  Arrays.checkLength(arr1,arr2);
  Arrays.checkLength(arr1,arr3);
  r=(a=arr3.length,new Global.Array(a));
  for(i=0,$1=arr3.length-1;i<=$1;i++)r[i]=f(arr1[i],arr2[i],arr3[i]);
  return r;
 };
 Arrays.pairwise=function(a)
 {
  return Arrays.ofSeq(Seq.pairwise(a));
 };
 Arrays.replicate=function(size,value)
 {
  return Arrays.create(size,value);
 };
 Arrays.indexed=function(ar)
 {
  return Arrays.mapi(function($1,$2)
  {
   return[$1,$2];
  },ar);
 };
 Arrays.skip=function(i,ar)
 {
  return i<0?Seq.nonNegative():i>ar.length?Seq.insufficient():ar.slice(i);
 };
 Arrays.skipWhile=function(predicate,ar)
 {
  var i,len;
  len=ar.length;
  i=0;
  while(i<len?predicate(ar[i]):false)
   i=i+1;
  return ar.slice(i);
 };
 Arrays.tail=function(ar)
 {
  return Arrays.skip(1,ar);
 };
 Arrays.take=function(n,ar)
 {
  return n<0?Seq.nonNegative():n>ar.length?Seq.insufficient():ar.slice(0,n);
 };
 Arrays.takeWhile=function(predicate,ar)
 {
  var i,len;
  len=ar.length;
  i=0;
  while(i<len?predicate(ar[i]):false)
   i=i+1;
  return ar.slice(0,i);
 };
 Arrays.exactlyOne=function(ar)
 {
  return ar.length===1?ar[0]:Operators.FailWith("The input does not have precisely one element.");
 };
 Arrays.unfold=function(f,s)
 {
  return Arrays.ofSeq(Seq.unfold(f,s));
 };
 Arrays.windowed=function(windowSize,s)
 {
  return Arrays.ofSeq(Seq.windowed(windowSize,s));
 };
 Arrays.splitAt=function(n,ar)
 {
  return[Arrays.take(n,ar),Arrays.skip(n,ar)];
 };
 Arrays.nonEmpty=function(arr)
 {
  if(arr.length===0)
   Operators.FailWith("The input array was empty.");
 };
 Arrays.checkLength=function(arr1,arr2)
 {
  if(arr1.length!==arr2.length)
   Operators.FailWith("The arrays have different lengths.");
 };
 Arrays2D.init=function(n,m,f)
 {
  var array,i,$1,j,$2;
  array=Arrays.zeroCreate2D(n,m);
  for(i=0,$1=n-1;i<=$1;i++){
   for(j=0,$2=m-1;j<=$2;j++)Arrays.set2D(array,i,j,f(i,j));
  }
  return array;
 };
 Arrays2D.iter=function(f,array)
 {
  var count1,count2,i,$1,j,$2;
  count1=array.length;
  count2=array.length?array[0].length:0;
  for(i=0,$1=count1-1;i<=$1;i++){
   for(j=0,$2=count2-1;j<=$2;j++)f(Arrays.get2D(array,i,j));
  }
 };
 Arrays2D.iteri=function(f,array)
 {
  var count1,count2,i,$1,j,$2;
  count1=array.length;
  count2=array.length?array[0].length:0;
  for(i=0,$1=count1-1;i<=$1;i++){
   for(j=0,$2=count2-1;j<=$2;j++)f(i,j,Arrays.get2D(array,i,j));
  }
 };
 Arrays2D.map=function(f,array)
 {
  return Arrays2D.init(array.length,array.length?array[0].length:0,function($1,$2)
  {
   return f(Arrays.get2D(array,$1,$2));
  });
 };
 Arrays2D.mapi=function(f,array)
 {
  return Arrays2D.init(array.length,array.length?array[0].length:0,function($1,$2)
  {
   return f($1,$2,Arrays.get2D(array,$1,$2));
  });
 };
 Arrays2D.copy=function(array)
 {
  return Arrays2D.init(array.length,array.length?array[0].length:0,function($1,$2)
  {
   return Arrays.get2D(array,$1,$2);
  });
 };
 CancellationTokenSource=WebSharper.CancellationTokenSource=Runtime.Class({
  CancelAfter:function(delay)
  {
   var $this,o;
   $this=this;
   !this.c?(o=this.pending,o==null?void 0:Global.clearTimeout(o.$0),this.pending={
    $:1,
    $0:Global.setTimeout(function()
    {
     $this.Cancel$1();
    },delay)
   }):void 0;
  },
  Cancel:function(throwOnFirstException)
  {
   var a;
   if(!throwOnFirstException)
    this.Cancel$1();
   else
    if(!this.c)
     {
      this.c=true;
      a=function(a$1)
      {
       a$1();
      };
      (function(a$1)
      {
       Arrays.iter(a,a$1);
      }(this.r));
     }
  },
  Cancel$1:function()
  {
   var c,errors;
   if(!this.c)
    {
     this.c=true;
     errors=(c=function(a)
     {
      try
      {
       a();
       return null;
      }
      catch(e)
      {
       return{
        $:1,
        $0:e
       };
      }
     },function(a)
     {
      return Arrays.choose(c,a);
     }(this.r));
     if(Arrays.length(errors)>0)
      throw new AggregateException.New$3(errors);
     else
      void 0;
    }
  }
 },null,CancellationTokenSource);
 CancellationTokenSource.CreateLinkedTokenSource=function(t1,t2)
 {
  return CancellationTokenSource.CreateLinkedTokenSource$1([t1,t2]);
 };
 CancellationTokenSource.CreateLinkedTokenSource$1=function(tokens)
 {
  var cts,a;
  cts=new CancellationTokenSource.New();
  a=function(t)
  {
   var v,callback;
   v=(callback=function()
   {
    return cts.Cancel$1();
   },Concurrency.Register(t,function()
   {
    callback();
   }));
  };
  (function(a$1)
  {
   Arrays.iter(a,a$1);
  }(tokens));
  return cts;
 };
 CancellationTokenSource.New=Runtime.Ctor(function()
 {
  this.c=false;
  this.pending=null;
  this.r=[];
  this.init=1;
 },CancellationTokenSource);
 Char.IsWhiteSpace=function(c)
 {
  return Global.String.fromCharCode(c).match(new Global.RegExp("\\s"))!==null;
 };
 Char.Parse=function(s)
 {
  return s.length===1?s.charCodeAt(0):Operators.FailWith("String must be exactly one character long.");
 };
 Char.IsUpper=function(c)
 {
  return c>=65?c<=90:false;
 };
 Char.IsLower=function(c)
 {
  return c>=97?c<=122:false;
 };
 Char.IsLetterOrDigit=function(c)
 {
  return Char.IsLetter(c)?true:Char.IsDigit(c);
 };
 Char.IsLetter=function(c)
 {
  return(c>=65?c<=90:false)?true:c>=97?c<=122:false;
 };
 Char.IsDigit=function(c)
 {
  return c>=48?c<=57:false;
 };
 Char.IsControl=function(c)
 {
  return(c>=0?c<=31:false)?true:c>=128?c<=159:false;
 };
 Char.GetNumericValue=function(c)
 {
  return(c>=48?c<=57:false)?Global.Number(c)-Global.Number(48):-1;
 };
 Util.addListener=function(event,h)
 {
  var v;
  v=event.Subscribe(Util.observer(h));
 };
 Util.subscribeTo=function(event,h)
 {
  return event.Subscribe(Util.observer(h));
 };
 Util.observer=function(h)
 {
  return{
   OnNext:h,
   OnError:function()
   {
    return null;
   },
   OnCompleted:function()
   {
    return null;
   }
  };
 };
 DateUtil.LongTime=function(d)
 {
  return(new Global.Date(d)).toLocaleTimeString({},{
   hour:"2-digit",
   minute:"2-digit",
   second:"2-digit",
   hour12:false
  });
 };
 DateUtil.ShortTime=function(d)
 {
  return(new Global.Date(d)).toLocaleTimeString({},{
   hour:"2-digit",
   minute:"2-digit",
   hour12:false
  });
 };
 DateUtil.LongDate=function(d)
 {
  return(new Global.Date(d)).toLocaleDateString({},{
   year:"numeric",
   month:"long",
   day:"numeric",
   weekday:"long"
  });
 };
 DateUtil.Parse=function(s)
 {
  var m;
  m=DateUtil.TryParse(s);
  return(m!=null?m.$==1:false)?m.$0:Operators.FailWith("Failed to parse date string.");
 };
 DateUtil.TryParse=function(s)
 {
  var d;
  d=Global.Date.parse(s);
  return Global.isNaN(d)?null:{
   $:1,
   $0:d
  };
 };
 DateUtil.AddMonths=function(d,months)
 {
  var e,y,mo,d$1,h,m,s,ms;
  e=new Global.Date(d);
  return(y=e.getFullYear(),(mo=e.getMonth()+months,(d$1=e.getDate(),(h=e.getHours(),(m=e.getMinutes(),(s=e.getSeconds(),(ms=e.getMilliseconds(),new Global.Date(y,mo,d$1,h,m,s,ms)))))))).getTime();
 };
 DateUtil.AddYears=function(d,years)
 {
  var e,y,mo,d$1,h,m,s,ms;
  e=new Global.Date(d);
  return(y=e.getFullYear()+years,(mo=e.getMonth(),(d$1=e.getDate(),(h=e.getHours(),(m=e.getMinutes(),(s=e.getSeconds(),(ms=e.getMilliseconds(),new Global.Date(y,mo,d$1,h,m,s,ms)))))))).getTime();
 };
 DateUtil.TimePortion=function(d)
 {
  var e;
  e=new Global.Date(d);
  return(((24*0+e.getHours())*60+e.getMinutes())*60+e.getSeconds())*1000+e.getMilliseconds();
 };
 DateUtil.DatePortion=function(d)
 {
  var e,y,mo,d$1;
  e=new Global.Date(d);
  return(y=e.getFullYear(),(mo=e.getMonth(),(d$1=e.getDate(),new Global.Date(y,mo,d$1)))).getTime();
 };
 Delegate.InvocationList=function(del)
 {
  return del.$Invokes||[del];
 };
 Delegate.RemoveAll=function(source,value)
 {
  var sourceInv,p;
  sourceInv=Delegate.InvocationList(source);
  Arrays.length(Delegate.InvocationList(value))>1?Operators.FailWith("TODO: Remove multicast delegates"):void 0;
  return Runtime.CreateDelegate((p=function(i)
  {
   return!Unchecked.Equals(i,value);
  },function(a)
  {
   return Arrays.filter(p,a);
  }(sourceInv)));
 };
 Delegate.Remove=function(source,value)
 {
  var $1,found,sourceInv,resInv,i,$2,it,v;
  sourceInv=Delegate.InvocationList(source);
  if(Arrays.length(Delegate.InvocationList(value))>1)
   Operators.FailWith("TODO: Remove multicast delegates");
  resInv=[];
  found=false;
  for(i=Arrays.length(sourceInv)-1,$2=0;i>=$2;i--){
   it=Arrays.get(sourceInv,i);
   (!found?Runtime.DelegateEqual(it,value):false)?found=true:v=resInv.unshift(it);
  }
  return Runtime.CreateDelegate(resInv);
 };
 Delegate.DelegateTarget=function(del)
 {
  var inv;
  return!del?null:"$Target"in del?del.$Target:"$Invokes"in del?(inv=del.$Invokes,(Arrays.get(inv,Arrays.length(inv)-1))[1]):null;
 };
 DictionaryUtil.getHashCode=function(c,x)
 {
  return c.CGetHashCode(x);
 };
 DictionaryUtil.equals=function(c)
 {
  return function($1,$2)
  {
   return c.CEquals($1,$2);
  };
 };
 DictionaryUtil.alreadyAdded=function()
 {
  return Operators.FailWith("An item with the same key has already been added.");
 };
 DictionaryUtil.notPresent=function()
 {
  return Operators.FailWith("The given key was not present in the dictionary.");
 };
 KeyCollection=Collections.KeyCollection=Runtime.Class({
  GetEnumerator$1:function()
  {
   var m;
   return Enumerator.Get((m=function(kvp)
   {
    return kvp.K;
   },function(s)
   {
    return Seq.map(m,s);
   }(this.d)));
  },
  get_Count:function()
  {
   return this.d.count;
  },
  GetEnumerator0:function()
  {
   return this.GetEnumerator$1();
  },
  GetEnumerator:function()
  {
   return this.GetEnumerator$1();
  }
 },null,KeyCollection);
 KeyCollection.New=Runtime.Ctor(function(d)
 {
  this.d=d;
 },KeyCollection);
 ValueCollection=Collections.ValueCollection=Runtime.Class({
  GetEnumerator$1:function()
  {
   var m;
   return Enumerator.Get((m=function(kvp)
   {
    return kvp.V;
   },function(s)
   {
    return Seq.map(m,s);
   }(this.d)));
  },
  get_Count:function()
  {
   return this.d.count;
  },
  GetEnumerator0:function()
  {
   return this.GetEnumerator$1();
  },
  GetEnumerator:function()
  {
   return this.GetEnumerator$1();
  }
 },null,ValueCollection);
 ValueCollection.New=Runtime.Ctor(function(d)
 {
  this.d=d;
 },ValueCollection);
 Dictionary=Collections.Dictionary=Runtime.Class({
  remove:function(k)
  {
   var $this,h,d,r,p;
   $this=this;
   h=this.hash(k);
   d=this.data[h];
   return d?(r=(p=function(a)
   {
    return!$this.equals.apply(null,[(Operators.KeyValue(a))[0],k]);
   },function(a)
   {
    return Arrays.filter(p,a);
   }(d)),Arrays.length(r)<d.length?(this.count=this.count-1,this.data[h]=r,true):false):false;
  },
  add:function(k,v)
  {
   var $this,h,d,p,v$1;
   $this=this;
   h=this.hash(k);
   d=this.data[h];
   d?((p=function(a)
   {
    return $this.equals.apply(null,[(Operators.KeyValue(a))[0],k]);
   },function(a)
   {
    return Arrays.exists(p,a);
   }(d))?DictionaryUtil.alreadyAdded():void 0,this.count=this.count+1,v$1=d.push({
    K:k,
    V:v
   })):(this.count=this.count+1,this.data[h]=new Global.Array({
    K:k,
    V:v
   }));
  },
  set:function(k,v)
  {
   var $this,h,d,m,p,v$1;
   $this=this;
   h=this.hash(k);
   d=this.data[h];
   d?(m=(p=function(a)
   {
    return $this.equals.apply(null,[(Operators.KeyValue(a))[0],k]);
   },function(a)
   {
    return Arrays.tryFindIndex(p,a);
   }(d)),m==null?(this.count=this.count+1,v$1=d.push({
    K:k,
    V:v
   })):d[m.$0]={
    K:k,
    V:v
   }):(this.count=this.count+1,this.data[h]=new Global.Array({
    K:k,
    V:v
   }));
  },
  get:function(k)
  {
   var $this,h,d,c;
   $this=this;
   h=this.hash(k);
   d=this.data[h];
   return d?(c=function(a)
   {
    var a$1;
    a$1=Operators.KeyValue(a);
    return $this.equals.apply(null,[a$1[0],k])?{
     $:1,
     $0:a$1[1]
    }:null;
   },function(a)
   {
    return Arrays.pick(c,a);
   }(d)):DictionaryUtil.notPresent();
  },
  get_Keys:function()
  {
   return new KeyCollection.New(this);
  },
  get_Values:function()
  {
   return new ValueCollection.New(this);
  },
  TryGetValue:function(k,res)
  {
   var $this,h,d,v,c;
   $this=this;
   h=this.hash(k);
   d=this.data[h];
   return d?(v=(c=function(a)
   {
    var a$1;
    a$1=Operators.KeyValue(a);
    return $this.equals.apply(null,[a$1[0],k])?{
     $:1,
     $0:a$1[1]
    }:null;
   },function(a)
   {
    return Arrays.tryPick(c,a);
   }(d)),(v!=null?v.$==1:false)?(res.set(v.$0),true):false):false;
  },
  Remove:function(k)
  {
   return this.remove(k);
  },
  GetEnumerator$1:function()
  {
   return Enumerator.Get0(this);
  },
  set_Item:function(k,v)
  {
   this.set(k,v);
  },
  get_Item:function(k)
  {
   return this.get(k);
  },
  ContainsKey:function(k)
  {
   var $this,h,d,p;
   $this=this;
   h=this.hash(k);
   d=this.data[h];
   return d?(p=function(a)
   {
    return $this.equals.apply(null,[(Operators.KeyValue(a))[0],k]);
   },function(a)
   {
    return Arrays.exists(p,a);
   }(d)):false;
  },
  Clear:function()
  {
   this.data=Global.Array.prototype.constructor.apply(Global.Array,[]);
   this.count=0;
  },
  Add:function(k,v)
  {
   this.add(k,v);
  },
  GetEnumerator:function()
  {
   return Enumerator.Get0(this);
  },
  GetEnumerator0:function()
  {
   var s;
   s=JSModule.GetFieldValues(this.data);
   return Enumerator.Get0(Arrays.concat(s));
  }
 },null,Dictionary);
 Dictionary.New=Runtime.Ctor(function(dictionary,comparer)
 {
  Dictionary.New$6.call(this,dictionary,DictionaryUtil.equals(comparer),function(x)
  {
   return DictionaryUtil.getHashCode(comparer,x);
  });
 },Dictionary);
 Dictionary.New$1=Runtime.Ctor(function(dictionary)
 {
  Dictionary.New$6.call(this,dictionary,Unchecked.Equals,Unchecked.Hash);
 },Dictionary);
 Dictionary.New$2=Runtime.Ctor(function(capacity,comparer)
 {
  Dictionary.New$3.call(this,comparer);
 },Dictionary);
 Dictionary.New$3=Runtime.Ctor(function(comparer)
 {
  Dictionary.New$6.call(this,[],DictionaryUtil.equals(comparer),function(x)
  {
   return DictionaryUtil.getHashCode(comparer,x);
  });
 },Dictionary);
 Dictionary.New$4=Runtime.Ctor(function(capacity)
 {
  Dictionary.New$5.call(this);
 },Dictionary);
 Dictionary.New$5=Runtime.Ctor(function()
 {
  Dictionary.New$6.call(this,[],Unchecked.Equals,Unchecked.Hash);
 },Dictionary);
 Dictionary.New$6=Runtime.Ctor(function(init,equals,hash)
 {
  var e,x;
  this.equals=equals;
  this.hash=hash;
  this.count=0;
  this.data=[];
  e=Enumerator.Get(init);
  try
  {
   while(e.MoveNext())
    {
     x=e.Current();
     this.set(x.K,x.V);
    }
  }
  finally
  {
   if("Dispose"in e)
    e.Dispose();
  }
 },Dictionary);
 MatchFailureException=WebSharper.MatchFailureException=Runtime.Class({},null,MatchFailureException);
 MatchFailureException.New=Runtime.Ctor(function(message,line,column)
 {
  this.message=message+" at "+Global.String(line)+":"+Global.String(column);
 },MatchFailureException);
 IndexOutOfRangeException=WebSharper.IndexOutOfRangeException=Runtime.Class({},null,IndexOutOfRangeException);
 IndexOutOfRangeException.New=Runtime.Ctor(function()
 {
  IndexOutOfRangeException.New$1.call(this,"Index was outside the bounds of the array.");
 },IndexOutOfRangeException);
 IndexOutOfRangeException.New$1=Runtime.Ctor(function(message)
 {
  this.message=message;
 },IndexOutOfRangeException);
 OperationCanceledException=WebSharper.OperationCanceledException=Runtime.Class({},null,OperationCanceledException);
 OperationCanceledException.New=Runtime.Ctor(function(ct)
 {
  OperationCanceledException.New$1.call(this,"The operation was canceled.",null,ct);
 },OperationCanceledException);
 OperationCanceledException.New$1=Runtime.Ctor(function(message,inner,ct)
 {
  this.message=message;
  this.inner=inner;
  this.ct=ct;
 },OperationCanceledException);
 ArgumentException=WebSharper.ArgumentException=Runtime.Class({},null,ArgumentException);
 ArgumentException.New=Runtime.Ctor(function(argumentName,message)
 {
  ArgumentException.New$2.call(this,message+"\nParameter name: "+argumentName);
 },ArgumentException);
 ArgumentException.New$1=Runtime.Ctor(function()
 {
  ArgumentException.New$2.call(this,"Value does not fall within the expected range.");
 },ArgumentException);
 ArgumentException.New$2=Runtime.Ctor(function(message)
 {
  this.message=message;
 },ArgumentException);
 ArgumentOutOfRangeException=WebSharper.ArgumentOutOfRangeException=Runtime.Class({},null,ArgumentOutOfRangeException);
 ArgumentOutOfRangeException.New=Runtime.Ctor(function()
 {
  ArgumentOutOfRangeException.New$1.call(this,"Specified argument was out of the range of valid values.");
 },ArgumentOutOfRangeException);
 ArgumentOutOfRangeException.New$1=Runtime.Ctor(function(message)
 {
  this.message=message;
 },ArgumentOutOfRangeException);
 InvalidOperationException=WebSharper.InvalidOperationException=Runtime.Class({},null,InvalidOperationException);
 InvalidOperationException.New=Runtime.Ctor(function()
 {
  InvalidOperationException.New$1.call(this,"Operation is not valid due to the current state of the object.");
 },InvalidOperationException);
 InvalidOperationException.New$1=Runtime.Ctor(function(message)
 {
  this.message=message;
 },InvalidOperationException);
 AggregateException=WebSharper.AggregateException=Runtime.Class({},null,AggregateException);
 AggregateException.New=Runtime.Ctor(function(message,innerException)
 {
  AggregateException.New$4.call(this,message,[innerException]);
 },AggregateException);
 AggregateException.New$1=Runtime.Ctor(function(message,innerExceptions)
 {
  AggregateException.New$4.call(this,message,Arrays.ofSeq(innerExceptions));
 },AggregateException);
 AggregateException.New$2=Runtime.Ctor(function(innerExceptions)
 {
  AggregateException.New$4.call(this,"One or more errors occurred.",Arrays.ofSeq(innerExceptions));
 },AggregateException);
 AggregateException.New$3=Runtime.Ctor(function(innerExceptions)
 {
  AggregateException.New$4.call(this,"One or more errors occurred.",innerExceptions);
 },AggregateException);
 AggregateException.New$4=Runtime.Ctor(function(message,innerExceptions)
 {
  this.message=message;
  this.innerExceptions=innerExceptions;
 },AggregateException);
 TimeoutException=WebSharper.TimeoutException=Runtime.Class({},null,TimeoutException);
 TimeoutException.New=Runtime.Ctor(function()
 {
  TimeoutException.New$1.call(this,"The operation has timed out.");
 },TimeoutException);
 TimeoutException.New$1=Runtime.Ctor(function(message)
 {
  this.message=message;
 },TimeoutException);
 FormatException=WebSharper.FormatException=Runtime.Class({},null,FormatException);
 FormatException.New=Runtime.Ctor(function()
 {
  FormatException.New$1.call(this,"One of the identified items was in an invalid format.");
 },FormatException);
 FormatException.New$1=Runtime.Ctor(function(message)
 {
  this.message=message;
 },FormatException);
 OverflowException=WebSharper.OverflowException=Runtime.Class({},null,OverflowException);
 OverflowException.New=Runtime.Ctor(function()
 {
  OverflowException.New$1.call(this,"Arithmetic operation resulted in an overflow.");
 },OverflowException);
 OverflowException.New$1=Runtime.Ctor(function(message)
 {
  this.message=message;
 },OverflowException);
 Arrays.create2D=function(rows)
 {
  var arr;
  arr=Arrays.ofSeq(Seq.map(Arrays.ofSeq,rows));
  arr.dims=2;
  return arr;
 };
 Guid.NewGuid=function()
 {
  return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(new Global.RegExp("[xy]","g"),function(c)
  {
   var r,v;
   r=Global.Math.random()*16|0;
   v=c=="x"?r:r&3|8;
   return v.toString(16);
  });
 };
 HashSetUtil.concat=function(o)
 {
  var r,k;
  r=[];
  for(var k$1 in o)r.push.apply(r,o[k$1]);
  return r;
 };
 HashSet=Collections.HashSet=Runtime.Class({
  add:function(item)
  {
   var h,arr,v;
   h=this.hash(item);
   arr=this.data[h];
   return arr==null?(this.data[h]=[item],this.count=this.count+1,true):this.arrContains(item,arr)?false:(v=arr.push(item),this.count=this.count+1,true);
  },
  arrRemove:function(item,arr)
  {
   var c,i,$1,l,v;
   c=true;
   i=0;
   l=arr.length;
   while(c?i<l:false)
    if(this.equals.apply(null,[arr[i],item]))
     {
      v=arr.splice.apply(arr,[i,1].concat([]));
      c=false;
     }
    else
     i=i+1;
   return!c;
  },
  arrContains:function(item,arr)
  {
   var c,i,$1,l;
   c=true;
   i=0;
   l=arr.length;
   while(c?i<l:false)
    if(this.equals.apply(null,[arr[i],item]))
     c=false;
    else
     i=i+1;
   return!c;
  },
  UnionWith:function(xs)
  {
   var e,v;
   e=Enumerator.Get(xs);
   try
   {
    while(e.MoveNext())
     {
      v=this.Add(e.Current());
     }
   }
   finally
   {
    if("Dispose"in e)
     e.Dispose();
   }
  },
  SymmetricExceptWith:function(xs)
  {
   var e,item,v,v$1;
   e=Enumerator.Get(xs);
   try
   {
    while(e.MoveNext())
     {
      item=e.Current();
      this.Contains(item)?v=this.Remove(item):v$1=this.Add(item);
     }
   }
   finally
   {
    if("Dispose"in e)
     e.Dispose();
   }
  },
  SetEquals:function(xs)
  {
   var other;
   other=new HashSet.New$4(xs,this.equals,this.hash);
   return this.get_Count()===other.get_Count()?this.IsSupersetOf(other):false;
  },
  RemoveWhere:function(cond)
  {
   var res,all,i,$1,item;
   all=HashSetUtil.concat(this.data);
   res=0;
   for(i=0,$1=all.length-1;i<=$1;i++){
    item=all[i];
    cond(item)?this.Remove(item)?res=res+1:void 0:void 0;
   }
   return res;
  },
  Remove:function(item)
  {
   var arr;
   arr=this.data[this.hash(item)];
   return arr==null?false:this.arrRemove(item,arr)?(this.count=this.count-1,true):false;
  },
  Overlaps:function(xs)
  {
   var $this,p;
   $this=this;
   p=function(a)
   {
    return $this.Contains(a);
   };
   return function(s)
   {
    return Seq.exists(p,s);
   }(xs);
  },
  IsSupersetOf:function(xs)
  {
   var $this,p;
   $this=this;
   p=function(a)
   {
    return $this.Contains(a);
   };
   return function(s)
   {
    return Seq.forall(p,s);
   }(xs);
  },
  IsSubsetOf:function(xs)
  {
   var other,p;
   other=new HashSet.New$4(xs,this.equals,this.hash);
   p=function(a)
   {
    return other.Contains(a);
   };
   return function(a)
   {
    return Arrays.forall(p,a);
   }(HashSetUtil.concat(this.data));
  },
  IsProperSupersetOf:function(xs)
  {
   var other;
   other=Arrays.ofSeq(xs);
   return this.count>Arrays.length(other)?this.IsSupersetOf(other):false;
  },
  IsProperSubsetOf:function(xs)
  {
   var other;
   other=Arrays.ofSeq(xs);
   return this.count<Arrays.length(other)?this.IsSubsetOf(other):false;
  },
  IntersectWith:function(xs)
  {
   var other,all,i,$1,item,v;
   other=new HashSet.New$4(xs,this.equals,this.hash);
   all=HashSetUtil.concat(this.data);
   for(i=0,$1=all.length-1;i<=$1;i++){
    item=all[i];
    !other.Contains(item)?v=this.Remove(item):void 0;
   }
  },
  ExceptWith:function(xs)
  {
   var e,v;
   e=Enumerator.Get(xs);
   try
   {
    while(e.MoveNext())
     {
      v=this.Remove(e.Current());
     }
   }
   finally
   {
    if("Dispose"in e)
     e.Dispose();
   }
  },
  get_Count:function()
  {
   return this.count;
  },
  CopyTo:function(arr)
  {
   var i,all,i$1,$1;
   i=0;
   all=HashSetUtil.concat(this.data);
   for(i$1=0,$1=all.length-1;i$1<=$1;i$1++)Arrays.set(arr,i$1,all[i$1]);
  },
  Contains:function(item)
  {
   var arr;
   arr=this.data[this.hash(item)];
   return arr==null?false:this.arrContains(item,arr);
  },
  Clear:function()
  {
   this.data=Global.Array.prototype.constructor.apply(Global.Array,[]);
   this.count=0;
  },
  Add:function(item)
  {
   return this.add(item);
  },
  GetEnumerator:function()
  {
   return Enumerator.Get(HashSetUtil.concat(this.data));
  },
  GetEnumerator0:function()
  {
   return Enumerator.Get(HashSetUtil.concat(this.data));
  }
 },null,HashSet);
 HashSet.New=Runtime.Ctor(function(init,comparer)
 {
  HashSet.New$4.call(this,init,DictionaryUtil.equals(comparer),function(x)
  {
   return DictionaryUtil.getHashCode(comparer,x);
  });
 },HashSet);
 HashSet.New$1=Runtime.Ctor(function(comparer)
 {
  HashSet.New$4.call(this,[],DictionaryUtil.equals(comparer),function(x)
  {
   return DictionaryUtil.getHashCode(comparer,x);
  });
 },HashSet);
 HashSet.New$2=Runtime.Ctor(function(init)
 {
  HashSet.New$4.call(this,init,Unchecked.Equals,Unchecked.Hash);
 },HashSet);
 HashSet.New$3=Runtime.Ctor(function()
 {
  HashSet.New$4.call(this,[],Unchecked.Equals,Unchecked.Hash);
 },HashSet);
 HashSet.New$4=Runtime.Ctor(function(init,equals,hash)
 {
  var e,v;
  this.equals=equals;
  this.hash=hash;
  this.data=Global.Array.prototype.constructor.apply(Global.Array,[]);
  this.count=0;
  e=Enumerator.Get(init);
  try
  {
   while(e.MoveNext())
    {
     v=this.add(e.Current());
    }
  }
  finally
  {
   if("Dispose"in e)
    e.Dispose();
  }
 },HashSet);
 Lazy.Force=function(x)
 {
  return x.f();
 };
 Lazy.CreateFromValue=function(v)
 {
  return{
   c:true,
   v:v,
   f:Lazy.cachedLazy
  };
 };
 Lazy.Create=function(f)
 {
  return{
   c:false,
   v:f,
   f:Lazy.forceLazy
  };
 };
 Lazy.forceLazy=function()
 {
  var v;
  v=this.v();
  this.c=true;
  this.v=v;
  this.f=Lazy.cachedLazy;
  return v;
 };
 Lazy.cachedLazy=function()
 {
  return this.v;
 };
 T$1=List.T=Runtime.Class({
  GetSlice:function(start,finish)
  {
   var i,c,c$1;
   return(start!=null?start.$==1:false)?(finish!=null?finish.$==1:false)?(i=start.$0,List.ofSeq((c=finish.$0-i+1,function(s)
   {
    return Seq.take(c,s);
   }(List.skip(i,this))))):List.skip(start.$0,this):(finish!=null?finish.$==1:false)?List.ofSeq((c$1=finish.$0+1,function(s)
   {
    return Seq.take(c$1,s);
   }(this))):this;
  },
  get_Item:function(x)
  {
   return Seq.nth(x,this);
  },
  get_Length:function()
  {
   return List.length(this);
  },
  GetEnumerator:function()
  {
   return new T.New(this,null,function(e)
   {
    var m;
    m=e.s;
    return m.$==0?false:(e.c=m.$0,e.s=m.$1,true);
   },void 0);
  },
  GetEnumerator0:function()
  {
   return Enumerator.Get(this);
  }
 },null,T$1);
 List.append=function(x,y)
 {
  var r,l,go,v,res;
  if(x.$==0)
   return y;
  else
   {
    res=new T$1({
     $:0
    });
    r=res;
    l=x;
    go=true;
    while(go)
     {
      List.setValue(r,l.$0);
      l=l.$1;
      l.$==0?go=false:r=List.setTail(r,new T$1({
       $:0
      }));
     }
    v=List.setTail(r,y);
    return res;
   }
 };
 List.choose=function(f,l)
 {
  return List.ofSeq(Seq.choose(f,l));
 };
 List.collect=function(f,l)
 {
  return List.ofSeq(Seq.collect(f,l));
 };
 List.concat=function(s)
 {
  return List.ofSeq(Seq.concat(s));
 };
 List.exists=function(p,x)
 {
  var e,l;
  e=false;
  l=x;
  while(!e?l.$==1:false)
   {
    e=p(l.$0);
    l=l.$1;
   }
  return e;
 };
 List.exists2=function(p,x1,x2)
 {
  var e,l1,l2;
  e=false;
  l1=x1;
  l2=x2;
  while((!e?l1.$==1:false)?l2.$==1:false)
   {
    e=p(l1.$0,l2.$0);
    l1=l1.$1;
    l2=l2.$1;
   }
  (!e?l1.$==1?true:l2.$==1:false)?List.badLengths():void 0;
  return e;
 };
 List.filter=function(p,l)
 {
  return List.ofSeq(Seq.filter(p,l));
 };
 List.fold2=function(f,s,l1,l2)
 {
  return Arrays.fold2(f,s,Arrays.ofList(l1),Arrays.ofList(l2));
 };
 List.foldBack=function(f,l,s)
 {
  return Arrays.foldBack(f,Arrays.ofList(l),s);
 };
 List.foldBack2=function(f,l1,l2,s)
 {
  return Arrays.foldBack2(f,Arrays.ofList(l1),Arrays.ofList(l2),s);
 };
 List.forAll=function(p,x)
 {
  var a,l;
  a=true;
  l=x;
  while(a?l.$==1:false)
   {
    a=p(l.$0);
    l=l.$1;
   }
  return a;
 };
 List.forall2=function(p,x1,x2)
 {
  var a,l1,l2;
  a=true;
  l1=x1;
  l2=x2;
  while((a?l1.$==1:false)?l2.$==1:false)
   {
    a=p(l1.$0,l2.$0);
    l1=l1.$1;
    l2=l2.$1;
   }
  (a?l1.$==1?true:l2.$==1:false)?List.badLengths():void 0;
  return a;
 };
 List.head=function(l)
 {
  return l.$==1?l.$0:List.listEmpty();
 };
 List.init=function(s,f)
 {
  return List.ofArray(Arrays.init(s,f));
 };
 List.iter=function(f,l)
 {
  var r;
  r=l;
  while(r.$==1)
   {
    f(List.head(r));
    r=List.tail(r);
   }
 };
 List.iter2=function(f,l1,l2)
 {
  var r1,r2;
  r1=l1;
  r2=l2;
  while(r1.$==1)
   {
    r2.$==0?List.badLengths():void 0;
    f(List.head(r1),List.head(r2));
    r1=List.tail(r1);
    r2=List.tail(r2);
   }
  r2.$==1?List.badLengths():void 0;
 };
 List.iteri=function(f,l)
 {
  var r,i;
  r=l;
  i=0;
  while(r.$==1)
   {
    f(i,List.head(r));
    r=List.tail(r);
    i=i+1;
   }
 };
 List.iteri2=function(f,l1,l2)
 {
  var r1,r2,i;
  r1=l1;
  r2=l2;
  i=0;
  while(r1.$==1)
   {
    r2.$==0?List.badLengths():void 0;
    f(i,List.head(r1),List.head(r2));
    r1=List.tail(r1);
    r2=List.tail(r2);
    i=i+1;
   }
  r2.$==1?List.badLengths():void 0;
 };
 List.length=function(l)
 {
  var r,i;
  r=l;
  i=0;
  while(r.$==1)
   {
    r=List.tail(r);
    i=i+1;
   }
  return i;
 };
 List.map=function(f,x)
 {
  var r,l,res;
  res=new T$1({
   $:0
  });
  r=res;
  l=x;
  while(l.$==1)
   {
    List.setValue(r,f(l.$0));
    r=List.setTail(r,new T$1({
     $:0
    }));
    l=l.$1;
   }
  return res;
 };
 List.map2=function(f,x1,x2)
 {
  var r,l1,l2,res;
  res=new T$1({
   $:0
  });
  r=res;
  l1=x1;
  l2=x2;
  while(l1.$==1?l2.$==1:false)
   {
    List.setValue(r,f(l1.$0,l2.$0));
    r=List.setTail(r,new T$1({
     $:0
    }));
    l1=l1.$1;
    l2=l2.$1;
   }
  (l1.$==1?true:l2.$==1)?List.badLengths():void 0;
  return res;
 };
 List.map3=function(f,x1,x2,x3)
 {
  var r,l1,l2,l3,res;
  res=new T$1({
   $:0
  });
  r=res;
  l1=x1;
  l2=x2;
  l3=x3;
  while((l1.$==1?l2.$==1:false)?l3.$==1:false)
   {
    List.setValue(r,f(l1.$0,l2.$0,l3.$0));
    r=List.setTail(r,new T$1({
     $:0
    }));
    l1=l1.$1;
    l2=l2.$1;
    l3=l3.$1;
   }
  ((l1.$==1?true:l2.$==1)?true:l3.$==1)?List.badLengths():void 0;
  return res;
 };
 List.mapi=function(f,x)
 {
  var r,l,i,res;
  res=new T$1({
   $:0
  });
  r=res;
  l=x;
  i=0;
  while(l.$==1)
   {
    List.setValue(r,f(i,l.$0));
    r=List.setTail(r,new T$1({
     $:0
    }));
    l=l.$1;
    i=i+1;
   }
  return res;
 };
 List.mapi2=function(f,x1,x2)
 {
  var r,l1,l2,i,res;
  res=new T$1({
   $:0
  });
  r=res;
  l1=x1;
  l2=x2;
  i=0;
  while(l1.$==1?l2.$==1:false)
   {
    List.setValue(r,f(i,l1.$0,l2.$0));
    r=List.setTail(r,new T$1({
     $:0
    }));
    l1=l1.$1;
    l2=l2.$1;
    i=i+1;
   }
  (l1.$==1?true:l2.$==1)?List.badLengths():void 0;
  return res;
 };
 List.max=function(l)
 {
  return Seq.reduce(Operators.Max,l);
 };
 List.maxBy=function(f,l)
 {
  return Seq.reduce(function($1,$2)
  {
   return Unchecked.Compare(f($1),f($2))===1?$1:$2;
  },l);
 };
 List.min=function(l)
 {
  return Seq.reduce(Operators.Min,l);
 };
 List.minBy=function(f,l)
 {
  return Seq.reduce(function($1,$2)
  {
   return Unchecked.Compare(f($1),f($2))===-1?$1:$2;
  },l);
 };
 List.ofArray=function(arr)
 {
  var r,i,$1;
  r=new T$1({
   $:0
  });
  for(i=Arrays.length(arr)-1,$1=0;i>=$1;i--)r=new T$1({
   $:1,
   $0:Arrays.get(arr,i),
   $1:r
  });
  return r;
 };
 List.ofSeq=function(s)
 {
  var last,res,e;
  if(s instanceof T$1)
   return s;
  else
   if(s instanceof Global.Array)
    return List.ofArray(s);
   else
    {
     res=new T$1({
      $:0
     });
     last=res;
     e=Enumerator.Get(s);
     try
     {
      while(e.MoveNext())
       {
        List.setValue(last,e.Current());
        last=List.setTail(last,new T$1({
         $:0
        }));
       }
      last.$=0;
      return res;
     }
     finally
     {
      if("Dispose"in e)
       e.Dispose();
     }
    }
 };
 List.partition=function(p,l)
 {
  var p$1;
  p$1=Arrays.partition(p,Arrays.ofList(l));
  return[List.ofArray(p$1[0]),List.ofArray(p$1[1])];
 };
 List.permute=function(f,l)
 {
  return List.ofArray(Arrays.permute(f,Arrays.ofList(l)));
 };
 List.reduceBack=function(f,l)
 {
  return Arrays.reduceBack(f,Arrays.ofList(l));
 };
 List.replicate=function(size,value)
 {
  return List.ofArray(Arrays.create(size,value));
 };
 List.rev=function(l)
 {
  var res,r;
  res=new T$1({
   $:0
  });
  r=l;
  while(r.$==1)
   {
    res=new T$1({
     $:1,
     $0:r.$0,
     $1:res
    });
    r=r.$1;
   }
  return res;
 };
 List.scan=function(f,s,l)
 {
  return List.ofSeq(Seq.scan(f,s,l));
 };
 List.scanBack=function(f,l,s)
 {
  return List.ofArray(Arrays.scanBack(f,Arrays.ofList(l),s));
 };
 List.sort=function(l)
 {
  var a;
  a=Arrays.ofList(l);
  Arrays.sortInPlace(a);
  return List.ofArray(a);
 };
 List.sortBy=function(f,l)
 {
  return List.sortWith(function($1,$2)
  {
   return Operators.Compare(f($1),f($2));
  },l);
 };
 List.sortByDescending=function(f,l)
 {
  return List.sortWith(function($1,$2)
  {
   return-Operators.Compare(f($1),f($2));
  },l);
 };
 List.sortDescending=function(l)
 {
  var a;
  a=Arrays.ofList(l);
  Arrays.sortInPlaceByDescending(Global.id,a);
  return List.ofArray(a);
 };
 List.sortWith=function(f,l)
 {
  var a;
  a=Arrays.ofList(l);
  Arrays.sortInPlaceWith(f,a);
  return List.ofArray(a);
 };
 List.tail=function(l)
 {
  return l.$==1?l.$1:List.listEmpty();
 };
 List.unzip=function(l)
 {
  var x,y,e,f;
  x=[];
  y=[];
  e=Enumerator.Get(l);
  try
  {
   while(e.MoveNext())
    {
     f=e.Current();
     x.push(f[0]);
     y.push(f[1]);
    }
  }
  finally
  {
   if("Dispose"in e)
    e.Dispose();
  }
  return[List.ofArray(x.slice(0)),List.ofArray(y.slice(0))];
 };
 List.unzip3=function(l)
 {
  var x,y,z,e,f;
  x=[];
  y=[];
  z=[];
  e=Enumerator.Get(l);
  try
  {
   while(e.MoveNext())
    {
     f=e.Current();
     x.push(f[0]);
     y.push(f[1]);
     z.push(f[2]);
    }
  }
  finally
  {
   if("Dispose"in e)
    e.Dispose();
  }
  return[List.ofArray(x.slice(0)),List.ofArray(y.slice(0)),List.ofArray(z.slice(0))];
 };
 List.zip=function(l1,l2)
 {
  return List.map2(function($1,$2)
  {
   return[$1,$2];
  },l1,l2);
 };
 List.zip3=function(l1,l2,l3)
 {
  return List.map3(function($1,$2,$3)
  {
   return[$1,$2,$3];
  },l1,l2,l3);
 };
 List.chunkBySize=function(size,list)
 {
  var l;
  l=List.ofSeq(Seq.chunkBySize(size,list));
  return List.map(List.ofArray,l);
 };
 List.compareWith=function(f,l1,l2)
 {
  return Seq.compareWith(f,l1,l2);
 };
 List.countBy=function(f,l)
 {
  return List.ofArray(Arrays.countBy(f,Arrays.ofList(l)));
 };
 List.distinct=function(l)
 {
  return List.ofSeq(Seq.distinct(l));
 };
 List.distinctBy=function(f,l)
 {
  return List.ofSeq(Seq.distinctBy(f,l));
 };
 List.splitInto=function(count,list)
 {
  var l;
  l=List.ofArray(Arrays.splitInto(count,Arrays.ofList(list)));
  return List.map(List.ofArray,l);
 };
 List.except=function(itemsToExclude,l)
 {
  return List.ofSeq(Seq.except(itemsToExclude,l));
 };
 List.tryFindBack=function(ok,l)
 {
  return Arrays.tryFindBack(ok,Arrays.ofList(l));
 };
 List.findBack=function(p,s)
 {
  var m;
  m=List.tryFindBack(p,s);
  return m==null?Operators.FailWith("KeyNotFoundException"):m.$0;
 };
 List.findIndexBack=function(p,s)
 {
  var m;
  m=Arrays.tryFindIndexBack(p,Arrays.ofList(s));
  return m==null?Operators.FailWith("KeyNotFoundException"):m.$0;
 };
 List.groupBy=function(f,l)
 {
  var arr,f$1;
  arr=Arrays.groupBy(f,Arrays.ofList(l));
  f$1=function(k,s)
  {
   return[k,List.ofArray(s)];
  };
  (function(a)
  {
   Arrays.mapInPlace(function($1)
   {
    return f$1($1[0],$1[1]);
   },a);
  }(arr));
  return List.ofArray(arr);
 };
 List.last=function(list)
 {
  var r,t;
  list.$==0?List.listEmpty():null;
  r=list;
  t=r.$1;
  while(t.$==1)
   {
    r=t;
    t=r.$1;
   }
  return r.$0;
 };
 List.contains=function(el,x)
 {
  var c,l;
  c=false;
  l=x;
  while(!c?l.$==1:false)
   {
    c=Unchecked.Equals(el,l.$0);
    l=l.$1;
   }
  return c;
 };
 List.mapFold=function(f,zero,list)
 {
  var t;
  t=Arrays.mapFold(f,zero,Arrays.ofList(list));
  return[List.ofArray(t[0]),t[1]];
 };
 List.mapFoldBack=function(f,list,zero)
 {
  var t;
  t=Arrays.mapFoldBack(f,Arrays.ofList(list),zero);
  return[List.ofArray(t[0]),t[1]];
 };
 List.pairwise=function(l)
 {
  return List.ofSeq(Seq.pairwise(l));
 };
 List.indexed=function(list)
 {
  return List.mapi(function($1,$2)
  {
   return[$1,$2];
  },list);
 };
 List.tryHead=function(list)
 {
  return list.$==0?null:{
   $:1,
   $0:list.$0
  };
 };
 List.exactlyOne=function(list)
 {
  var $1;
  return(list.$==1?list.$1.$==0?($1=list.$0,true):false:false)?$1:Operators.FailWith("The input does not have precisely one element.");
 };
 List.unfold=function(f,s)
 {
  return List.ofSeq(Seq.unfold(f,s));
 };
 List.windowed=function(windowSize,s)
 {
  var s$1;
  return List.ofSeq((s$1=Seq.windowed(windowSize,s),Seq.map(List.ofArray,s$1)));
 };
 List.splitAt=function(n,list)
 {
  return[List.ofSeq(Seq.take(n,list)),List.skip(n,list)];
 };
 List.setTail=function(l,t)
 {
  l.$1=t;
  return t;
 };
 List.setValue=function(l,v)
 {
  l.$=1;
  l.$0=v;
 };
 List.listEmpty=function()
 {
  return Operators.FailWith("The input list was empty.");
 };
 List.badLengths=function()
 {
  return Operators.FailWith("The lists have different lengths.");
 };
 Nullable.getOrValue=function(x,v)
 {
  return x==null?v:x;
 };
 Nullable.get=function(x)
 {
  return x==null?Operators.FailWith("Nullable object must have a value."):x;
 };
 Ref.decr=function(x)
 {
  x[0]--;
 };
 Ref.incr=function(x)
 {
  x[0]++;
 };
 Operators.range=function(min,max)
 {
  var count;
  count=1+max-min;
  return count<=0?[]:Seq.init(count,function(x)
  {
   return x+min;
  });
 };
 Operators.step=function(min,step,max)
 {
  var s,p;
  s=Operators.Sign(step);
  p=function(k)
  {
   return s*(max-k)>=0;
  };
  return function(s$1)
  {
   return Seq.takeWhile(p,s$1);
  }(Seq.initInfinite(function(k)
  {
   return min+k*step;
  }));
 };
 Operators.KeyValue=function(kvp)
 {
  return[kvp.K,kvp.V];
 };
 Operators.Using=function(t,f)
 {
  try
  {
   return f(t);
  }
  finally
  {
   t.Dispose();
  }
 };
 Operators.Truncate=function(x)
 {
  return x<0?Global.Math.ceil(x):Global.Math.floor(x);
 };
 Operators.Sign=function(x)
 {
  return x===0?0:x<0?-1:1;
 };
 Operators.Pown=function(a,n)
 {
  function p(n$1)
  {
   var b;
   return n$1===1?a:n$1%2===0?(b=p(n$1/2>>0),b*b):a*p(n$1-1);
  }
  return p(n);
 };
 Operators.Min=function(a,b)
 {
  return Unchecked.Compare(a,b)===-1?a:b;
 };
 Operators.Max=function(a,b)
 {
  return Unchecked.Compare(a,b)===1?a:b;
 };
 Operators.InvalidArg=function(arg,msg)
 {
  throw new ArgumentException.New(arg,msg);
 };
 Operators.InvalidOp=function(msg)
 {
  throw new InvalidOperationException.New$1(msg);
 };
 Operators.FailWith=function(msg)
 {
  throw Global.Error(msg);
 };
 Operators.DefaultArg=function(x,d)
 {
  return x==null?d:x.$0;
 };
 Operators.Compare=function(a,b)
 {
  return Unchecked.Compare(a,b);
 };
 Slice.string=function(source,start,finish)
 {
  return start==null?(finish!=null?finish.$==1:false)?source.slice(0,finish.$0+1):"":finish==null?source.slice(start.$0):source.slice(start.$0,finish.$0+1);
 };
 Slice.array=function(source,start,finish)
 {
  return start==null?(finish!=null?finish.$==1:false)?source.slice(0,finish.$0+1):[]:finish==null?source.slice(start.$0):source.slice(start.$0,finish.$0+1);
 };
 Slice.setArray=function(dst,start,finish,src)
 {
  var start$1,finish$1;
  start$1=(start!=null?start.$==1:false)?start.$0:0;
  finish$1=(finish!=null?finish.$==1:false)?finish.$0:dst.length-1;
  Arrays.setSub(dst,start$1,finish$1-start$1+1,src);
 };
 Slice.array2D=function(arr,start1,finish1,start2,finish2)
 {
  var start1$1,start2$1,finish1$1,finish2$1;
  start1$1=(start1!=null?start1.$==1:false)?start1.$0:0;
  start2$1=(start2!=null?start2.$==1:false)?start2.$0:0;
  finish1$1=(finish1!=null?finish1.$==1:false)?finish1.$0:arr.length-1;
  finish2$1=(finish2!=null?finish2.$==1:false)?finish2.$0:(arr.length?arr[0].length:0)-1;
  return Arrays.sub2D(arr,start1$1,start2$1,finish1$1-start1$1+1,finish2$1-start2$1+1);
 };
 Slice.array2Dfix1=function(arr,fixed1,start2,finish2)
 {
  var start2$1,finish2$1,len2,dst,j,$1;
  start2$1=(start2!=null?start2.$==1:false)?start2.$0:0;
  finish2$1=(finish2!=null?finish2.$==1:false)?finish2.$0:(arr.length?arr[0].length:0)-1;
  len2=finish2$1-start2$1+1;
  dst=new Global.Array(len2);
  for(j=0,$1=len2-1;j<=$1;j++)Arrays.set(dst,j,Arrays.get2D(arr,fixed1,start2$1+j));
  return dst;
 };
 Slice.array2Dfix2=function(arr,start1,finish1,fixed2)
 {
  var start1$1,finish1$1,len1,dst,i,$1;
  start1$1=(start1!=null?start1.$==1:false)?start1.$0:0;
  finish1$1=(finish1!=null?finish1.$==1:false)?finish1.$0:arr.length-1;
  len1=finish1$1-start1$1+1;
  dst=new Global.Array(len1);
  for(i=0,$1=len1-1;i<=$1;i++)Arrays.set(dst,i,Arrays.get2D(arr,start1$1+i,fixed2));
  return dst;
 };
 Slice.setArray2Dfix1=function(dst,fixed1,start2,finish2,src)
 {
  var start2$1,finish2$1,j,$1;
  start2$1=(start2!=null?start2.$==1:false)?start2.$0:0;
  finish2$1=(finish2!=null?finish2.$==1:false)?finish2.$0:(dst.length?dst[0].length:0)-1;
  for(j=0,$1=finish2$1-start2$1+1-1;j<=$1;j++)Arrays.set2D(dst,fixed1,start2$1+j,Arrays.get(src,j));
 };
 Slice.setArray2Dfix2=function(dst,start1,finish1,fixed2,src)
 {
  var start1$1,finish1$1,i,$1;
  start1$1=(start1!=null?start1.$==1:false)?start1.$0:0;
  finish1$1=(finish1!=null?finish1.$==1:false)?finish1.$0:dst.length-1;
  for(i=0,$1=finish1$1-start1$1+1-1;i<=$1;i++)Arrays.set2D(dst,start1$1+i,fixed2,Arrays.get(src,i));
 };
 Slice.setArray2D=function(dst,start1,finish1,start2,finish2,src)
 {
  var start1$1,start2$1,finish1$1,finish2$1;
  start1$1=(start1!=null?start1.$==1:false)?start1.$0:0;
  start2$1=(start2!=null?start2.$==1:false)?start2.$0:0;
  finish1$1=(finish1!=null?finish1.$==1:false)?finish1.$0:dst.length-1;
  finish2$1=(finish2!=null?finish2.$==1:false)?finish2.$0:(dst.length?dst[0].length:0)-1;
  Arrays.setSub2D(dst,start1$1,start2$1,finish1$1-start1$1+1,finish2$1-start2$1+1,src);
 };
 Option.fold=function(f,s,x)
 {
  return x==null?s:f(s,x.$0);
 };
 Option.foldBack=function(f,x,s)
 {
  return x==null?s:f(x.$0,s);
 };
 Option.toArray=function(x)
 {
  return x==null?[]:[x.$0];
 };
 Option.toList=function(x)
 {
  return x==null?new T$1({
   $:0
  }):List.ofArray([x.$0]);
 };
 Option.ofObj=function(o)
 {
  return o==null?null:{
   $:1,
   $0:o
  };
 };
 Option.toObj=function(o)
 {
  return o==null?null:o.$0;
 };
 Option.ofNullable=function(o)
 {
  return o==null?null:{
   $:1,
   $0:Nullable.get(o)
  };
 };
 Option.toNullable=function(o)
 {
  return(o!=null?o.$==1:false)?o.$0:null;
 };
 Option.filter=function(f,o)
 {
  var v;
  return(o!=null?o.$==1:false)?(v=o.$0,f(v)?{
   $:1,
   $0:v
  }:null):null;
 };
 Queue.CopyTo=function(a,array,index)
 {
  Arrays.blit(a,0,array,index,Arrays.length(a));
 };
 Queue.Contains=function(a,el)
 {
  return Seq.exists(function(y)
  {
   return Unchecked.Equals(el,y);
  },a);
 };
 Queue.Clear=function(a)
 {
  a.splice(0,Arrays.length(a));
 };
 Random=WebSharper.Random=Runtime.Class({
  NextBytes:function(buffer)
  {
   var i,$1;
   for(i=0,$1=Arrays.length(buffer)-1;i<=$1;i++)Arrays.set(buffer,i,Global.Math.floor(Global.Math.random()*256));
  },
  Next:function(minValue,maxValue)
  {
   return minValue>maxValue?Operators.FailWith("'minValue' cannot be greater than maxValue."):minValue+Global.Math.floor(Global.Math.random()*(maxValue-minValue));
  },
  Next$1:function(maxValue)
  {
   return maxValue<0?Operators.FailWith("'maxValue' must be greater than zero."):Global.Math.floor(Global.Math.random()*maxValue);
  },
  Next$2:function()
  {
   return Global.Math.floor(Global.Math.random()*2147483648);
  }
 },null,Random);
 Random.New=Runtime.Ctor(function()
 {
 },Random);
 FSharpRef.New=function(contents)
 {
  return{
   "0":contents
  };
 };
 Seq.enumFinally=function(s,f)
 {
  return{
   GetEnumerator:function()
   {
    var _enum;
    try
    {
     _enum=Enumerator.Get(s);
    }
    catch(e)
    {
     f();
     throw e;
    }
    return new T.New(null,null,function(e$1)
    {
     return _enum.MoveNext()?(e$1.c=_enum.Current(),true):false;
    },function()
    {
     _enum.Dispose();
     f();
    });
   }
  };
 };
 Seq.enumUsing=function(x,f)
 {
  return{
   GetEnumerator:function()
   {
    var _enum;
    try
    {
     _enum=Enumerator.Get(f(x));
    }
    catch(e)
    {
     x.Dispose();
     throw e;
    }
    return new T.New(null,null,function(e$1)
    {
     return _enum.MoveNext()?(e$1.c=_enum.Current(),true):false;
    },function()
    {
     _enum.Dispose();
     x.Dispose();
    });
   }
  };
 };
 Seq.enumWhile=function(f,s)
 {
  return{
   GetEnumerator:function()
   {
    return new T.New(null,null,function(en)
    {
     var m;
     while(true)
      {
       m=en.s;
       if(Unchecked.Equals(m,null))
        {
         if(f())
          {
           en.s=Enumerator.Get(s);
           en=en;
          }
         else
          return false;
        }
       else
        {
         if(m.MoveNext())
          {
           en.c=m.Current();
           return true;
          }
         else
          {
           m.Dispose();
           en.s=null;
           en=en;
          }
        }
      }
    },function(en)
    {
     var x;
     x=en.s;
     !Unchecked.Equals(x,null)?x.Dispose():void 0;
    });
   }
  };
 };
 Control.createEvent=function(add,remove,create)
 {
  return{
   Subscribe:function(r)
   {
    var h;
    h=create(function()
    {
     return function(args)
     {
      return r.OnNext(args);
     };
    });
    add(h);
    return{
     Dispose:function()
     {
      return remove(h);
     }
    };
   },
   RemoveHandler:remove,
   AddHandler:add
  };
 };
 Seq.append=function(s1,s2)
 {
  return{
   GetEnumerator:function()
   {
    var e1,first;
    e1=Enumerator.Get(s1);
    first=[true];
    return new T.New(e1,null,function(x)
    {
     var x$1;
     return x.s.MoveNext()?(x.c=x.s.Current(),true):(x$1=x.s,!Unchecked.Equals(x$1,null)?x$1.Dispose():void 0,x.s=null,first[0]?(first[0]=false,x.s=Enumerator.Get(s2),x.s.MoveNext()?(x.c=x.s.Current(),true):(x.s.Dispose(),x.s=null,false)):false);
    },function(x)
    {
     var x$1;
     x$1=x.s;
     !Unchecked.Equals(x$1,null)?x$1.Dispose():void 0;
    });
   }
  };
 };
 Seq.average=function(s)
 {
  var p,count;
  p=Seq.fold(function($1,$2)
  {
   return(function(t)
   {
    var n,s$1;
    n=t[0];
    s$1=t[1];
    return function(x)
    {
     return[n+1,s$1+x];
    };
   }($1))($2);
  },[0,0],s);
  count=p[0];
  return count===0?Operators.InvalidArg("source","The input sequence was empty."):p[1]/count;
 };
 Seq.averageBy=function(f,s)
 {
  var p,count;
  p=Seq.fold(function($1,$2)
  {
   return(function(t)
   {
    var n,s$1;
    n=t[0];
    s$1=t[1];
    return function(x)
    {
     return[n+1,s$1+f(x)];
    };
   }($1))($2);
  },[0,0],s);
  count=p[0];
  return count===0?Operators.InvalidArg("source","The input sequence was empty."):p[1]/count;
 };
 Seq.cache=function(s)
 {
  var cache,o;
  cache=[];
  o=[Enumerator.Get(s)];
  return{
   GetEnumerator:function()
   {
    return new T.New(0,null,function(e)
    {
     var en;
     return e.s+1<cache.length?(e.s=e.s+1,e.c=cache[e.s],true):(en=o[0],Unchecked.Equals(en,null)?false:en.MoveNext()?(e.s=e.s+1,e.c=en.Current(),cache.push(e.c),true):(en.Dispose(),o[0]=null,false));
    },void 0);
   }
  };
 };
 Seq.choose=function(f,s)
 {
  var m;
  m=function(x)
  {
   var m$1;
   m$1=f(x);
   return m$1==null?new T$1({
    $:0
   }):List.ofArray([m$1.$0]);
  };
  return function(s$1)
  {
   return Seq.collect(m,s$1);
  }(s);
 };
 Seq.collect=function(f,s)
 {
  return Seq.concat(Seq.map(f,s));
 };
 Seq.compareWith=function(f,s1,s2)
 {
  var e1,$1,e2,r,loop;
  e1=Enumerator.Get(s1);
  try
  {
   e2=Enumerator.Get(s2);
   try
   {
    r=0;
    loop=true;
    while(loop?r===0:false)
     if(e1.MoveNext())
      r=e2.MoveNext()?f(e1.Current(),e2.Current()):1;
     else
      if(e2.MoveNext())
       r=-1;
      else
       loop=false;
    $1=r;
   }
   finally
   {
    if("Dispose"in e2)
     e2.Dispose();
   }
   return $1;
  }
  finally
  {
   if("Dispose"in e1)
    e1.Dispose();
  }
 };
 Seq.concat=function(ss)
 {
  return{
   GetEnumerator:function()
   {
    var outerE;
    outerE=Enumerator.Get(ss);
    return new T.New(null,null,function(st)
    {
     var m;
     while(true)
      {
       m=st.s;
       if(Unchecked.Equals(m,null))
        {
         if(outerE.MoveNext())
          {
           st.s=Enumerator.Get(outerE.Current());
           st=st;
          }
         else
          {
           outerE.Dispose();
           return false;
          }
        }
       else
        {
         if(m.MoveNext())
          {
           st.c=m.Current();
           return true;
          }
         else
          {
           st.Dispose();
           st.s=null;
           st=st;
          }
        }
      }
    },function(st)
    {
     var x;
     x=st.s;
     !Unchecked.Equals(x,null)?x.Dispose():void 0;
     !Unchecked.Equals(outerE,null)?outerE.Dispose():void 0;
    });
   }
  };
 };
 Seq.countBy=function(f,s)
 {
  return Seq.delay(function()
  {
   return Arrays.countBy(f,Arrays.ofSeq(s));
  });
 };
 Seq.delay=function(f)
 {
  return{
   GetEnumerator:function()
   {
    return Enumerator.Get(f());
   }
  };
 };
 Seq.distinct=function(s)
 {
  return Seq.distinctBy(Global.id,s);
 };
 Seq.distinctBy=function(f,s)
 {
  return{
   GetEnumerator:function()
   {
    var o,seen;
    o=Enumerator.Get(s);
    seen=new HashSet.New$3();
    return new T.New(null,null,function(e)
    {
     var cur,has;
     if(o.MoveNext())
      {
       cur=o.Current();
       has=seen.Add(f(cur));
       while(!has?o.MoveNext():false)
        {
         cur=o.Current();
         has=seen.Add(f(cur));
        }
       return has?(e.c=cur,true):false;
      }
     else
      return false;
    },function()
    {
     o.Dispose();
    });
   }
  };
 };
 Seq.splitInto=function(count,s)
 {
  count<=0?Operators.FailWith("Count must be positive"):void 0;
  return Seq.delay(function()
  {
   return Arrays.splitInto(count,Arrays.ofSeq(s));
  });
 };
 Seq.exactlyOne=function(s)
 {
  var e,x;
  e=Enumerator.Get(s);
  try
  {
   return e.MoveNext()?(x=e.Current(),e.MoveNext()?Operators.InvalidOp("Sequence contains more than one element"):x):Operators.InvalidOp("Sequence contains no elements");
  }
  finally
  {
   if("Dispose"in e)
    e.Dispose();
  }
 };
 Seq.exists=function(p,s)
 {
  var e,r;
  e=Enumerator.Get(s);
  try
  {
   r=false;
   while(!r?e.MoveNext():false)
    r=p(e.Current());
   return r;
  }
  finally
  {
   if("Dispose"in e)
    e.Dispose();
  }
 };
 Seq.exists2=function(p,s1,s2)
 {
  var e1,$1,e2,r;
  e1=Enumerator.Get(s1);
  try
  {
   e2=Enumerator.Get(s2);
   try
   {
    r=false;
    while((!r?e1.MoveNext():false)?e2.MoveNext():false)
     r=p(e1.Current(),e2.Current());
    $1=r;
   }
   finally
   {
    if("Dispose"in e2)
     e2.Dispose();
   }
   return $1;
  }
  finally
  {
   if("Dispose"in e1)
    e1.Dispose();
  }
 };
 Seq.filter=function(f,s)
 {
  return{
   GetEnumerator:function()
   {
    var o;
    o=Enumerator.Get(s);
    return new T.New(null,null,function(e)
    {
     var loop,c,res;
     loop=o.MoveNext();
     c=o.Current();
     res=false;
     while(loop)
      if(f(c))
       {
        e.c=c;
        res=true;
        loop=false;
       }
      else
       if(o.MoveNext())
        c=o.Current();
       else
        loop=false;
     return res;
    },function()
    {
     o.Dispose();
    });
   }
  };
 };
 Seq.find=function(p,s)
 {
  var m;
  m=Seq.tryFind(p,s);
  return m==null?Operators.FailWith("KeyNotFoundException"):m.$0;
 };
 Seq.findIndex=function(p,s)
 {
  var m;
  m=Seq.tryFindIndex(p,s);
  return m==null?Operators.FailWith("KeyNotFoundException"):m.$0;
 };
 Seq.fold=function(f,x,s)
 {
  var r,e;
  r=x;
  e=Enumerator.Get(s);
  try
  {
   while(e.MoveNext())
    r=f(r,e.Current());
   return r;
  }
  finally
  {
   if("Dispose"in e)
    e.Dispose();
  }
 };
 Seq.forall=function(p,s)
 {
  return!Seq.exists(function(x)
  {
   return!p(x);
  },s);
 };
 Seq.forall2=function(p,s1,s2)
 {
  return!Seq.exists2(function($1,$2)
  {
   return!p($1,$2);
  },s1,s2);
 };
 Seq.groupBy=function(f,s)
 {
  return Seq.delay(function()
  {
   return Arrays.groupBy(f,Arrays.ofSeq(s));
  });
 };
 Seq.head=function(s)
 {
  var e;
  e=Enumerator.Get(s);
  try
  {
   return e.MoveNext()?e.Current():Seq.insufficient();
  }
  finally
  {
   if("Dispose"in e)
    e.Dispose();
  }
 };
 Seq.init=function(n,f)
 {
  return Seq.take(n,Seq.initInfinite(f));
 };
 Seq.initInfinite=function(f)
 {
  return{
   GetEnumerator:function()
   {
    return new T.New(0,null,function(e)
    {
     e.c=f(e.s);
     e.s=e.s+1;
     return true;
    },void 0);
   }
  };
 };
 Seq.isEmpty=function(s)
 {
  var e;
  e=Enumerator.Get(s);
  try
  {
   return!e.MoveNext();
  }
  finally
  {
   if("Dispose"in e)
    e.Dispose();
  }
 };
 Seq.iter=function(p,s)
 {
  var e;
  e=Enumerator.Get(s);
  try
  {
   while(e.MoveNext())
    p(e.Current());
  }
  finally
  {
   if("Dispose"in e)
    e.Dispose();
  }
 };
 Seq.iter2=function(p,s1,s2)
 {
  var e1,$1,e2;
  e1=Enumerator.Get(s1);
  try
  {
   e2=Enumerator.Get(s2);
   try
   {
    while(e1.MoveNext()?e2.MoveNext():false)
     p(e1.Current(),e2.Current());
    $1=void 0;
   }
   finally
   {
    if("Dispose"in e2)
     e2.Dispose();
   }
   $1;
  }
  finally
  {
   if("Dispose"in e1)
    e1.Dispose();
  }
 };
 Seq.iteri=function(p,s)
 {
  var i,e;
  i=0;
  e=Enumerator.Get(s);
  try
  {
   while(e.MoveNext())
    {
     p(i,e.Current());
     i=i+1;
    }
  }
  finally
  {
   if("Dispose"in e)
    e.Dispose();
  }
 };
 Seq.length=function(s)
 {
  var i,e;
  i=0;
  e=Enumerator.Get(s);
  try
  {
   while(e.MoveNext())
    i=i+1;
   return i;
  }
  finally
  {
   if("Dispose"in e)
    e.Dispose();
  }
 };
 Seq.map=function(f,s)
 {
  return{
   GetEnumerator:function()
   {
    var en;
    en=Enumerator.Get(s);
    return new T.New(null,null,function(e)
    {
     return en.MoveNext()?(e.c=f(en.Current()),true):false;
    },function()
    {
     en.Dispose();
    });
   }
  };
 };
 Seq.mapi=function(f,s)
 {
  return Seq.map2(f,Seq.initInfinite(Global.id),s);
 };
 Seq.map2=function(f,s1,s2)
 {
  return{
   GetEnumerator:function()
   {
    var e1,e2;
    e1=Enumerator.Get(s1);
    e2=Enumerator.Get(s2);
    return new T.New(null,null,function(e)
    {
     return(e1.MoveNext()?e2.MoveNext():false)?(e.c=f(e1.Current(),e2.Current()),true):false;
    },function()
    {
     e1.Dispose();
     e2.Dispose();
    });
   }
  };
 };
 Seq.maxBy=function(f,s)
 {
  return Seq.reduce(function($1,$2)
  {
   return Unchecked.Compare(f($1),f($2))>=0?$1:$2;
  },s);
 };
 Seq.minBy=function(f,s)
 {
  return Seq.reduce(function($1,$2)
  {
   return Unchecked.Compare(f($1),f($2))<=0?$1:$2;
  },s);
 };
 Seq.max=function(s)
 {
  return Seq.reduce(function($1,$2)
  {
   return Unchecked.Compare($1,$2)>=0?$1:$2;
  },s);
 };
 Seq.min=function(s)
 {
  return Seq.reduce(function($1,$2)
  {
   return Unchecked.Compare($1,$2)<=0?$1:$2;
  },s);
 };
 Seq.nth=function(index,s)
 {
  var pos,e;
  if(index<0)
   Operators.FailWith("negative index requested");
  pos=-1;
  e=Enumerator.Get(s);
  try
  {
   while(pos<index)
    {
     !e.MoveNext()?Seq.insufficient():void 0;
     pos=pos+1;
    }
   return e.Current();
  }
  finally
  {
   if("Dispose"in e)
    e.Dispose();
  }
 };
 Seq.pairwise=function(s)
 {
  var m;
  m=function(x)
  {
   return[Arrays.get(x,0),Arrays.get(x,1)];
  };
  return function(s$1)
  {
   return Seq.map(m,s$1);
  }(Seq.windowed(2,s));
 };
 Seq.pick=function(p,s)
 {
  var m;
  m=Seq.tryPick(p,s);
  return m==null?Operators.FailWith("KeyNotFoundException"):m.$0;
 };
 Seq.readOnly=function(s)
 {
  return{
   GetEnumerator:function()
   {
    return Enumerator.Get(s);
   }
  };
 };
 Seq.reduce=function(f,source)
 {
  var e,r;
  e=Enumerator.Get(source);
  try
  {
   if(!e.MoveNext())
    Operators.FailWith("The input sequence was empty");
   r=e.Current();
   while(e.MoveNext())
    r=f(r,e.Current());
   return r;
  }
  finally
  {
   if("Dispose"in e)
    e.Dispose();
  }
 };
 Seq.scan=function(f,x,s)
 {
  return{
   GetEnumerator:function()
   {
    var en,d;
    en=Enumerator.Get(s);
    d=function()
    {
     en.Dispose();
    };
    return function(n)
    {
     return new T.New(false,null,n,d);
    }(function(e)
    {
     return e.s?en.MoveNext()?(e.c=f(e.c,en.Current()),true):false:(e.c=x,e.s=true,true);
    });
   }
  };
 };
 Seq.skip=function(n,s)
 {
  return{
   GetEnumerator:function()
   {
    var o;
    o=Enumerator.Get(s);
    return new T.New(true,null,function(e)
    {
     var i,$1;
     if(e.s)
      {
       for(i=1,$1=n;i<=$1;i++)if(!o.MoveNext())
        Seq.insufficient();
       e.s=false;
      }
     else
      null;
     return o.MoveNext()?(e.c=o.Current(),true):false;
    },function()
    {
     o.Dispose();
    });
   }
  };
 };
 Seq.skipWhile=function(f,s)
 {
  return{
   GetEnumerator:function()
   {
    var o;
    o=Enumerator.Get(s);
    return new T.New(true,null,function(e)
    {
     var go,empty;
     if(e.s)
      {
       go=true;
       empty=false;
       while(go)
        if(o.MoveNext())
        {
         if(!f(o.Current()))
          go=false;
        }
        else
         {
          go=false;
          empty=true;
         }
       e.s=false;
       return empty?false:(e.c=o.Current(),true);
      }
     else
      return o.MoveNext()?(e.c=o.Current(),true):false;
    },function()
    {
     o.Dispose();
    });
   }
  };
 };
 Seq.sort=function(s)
 {
  return Seq.sortBy(Global.id,s);
 };
 Seq.sortBy=function(f,s)
 {
  return Seq.delay(function()
  {
   var array;
   array=Arrays.ofSeq(s);
   Arrays.sortInPlaceBy(f,array);
   return array;
  });
 };
 Seq.sortByDescending=function(f,s)
 {
  return Seq.delay(function()
  {
   var array;
   array=Arrays.ofSeq(s);
   Arrays.sortInPlaceByDescending(f,array);
   return array;
  });
 };
 Seq.sortDescending=function(s)
 {
  return Seq.sortByDescending(Global.id,s);
 };
 Seq.sum=function(s)
 {
  return Seq.fold(function($1,$2)
  {
   return $1+$2;
  },0,s);
 };
 Seq.sumBy=function(f,s)
 {
  return Seq.fold(function($1,$2)
  {
   return $1+f($2);
  },0,s);
 };
 Seq.take=function(n,s)
 {
  n<0?Seq.nonNegative():void 0;
  return{
   GetEnumerator:function()
   {
    var e;
    e=[Enumerator.Get(s)];
    return new T.New(0,null,function(o)
    {
     var en;
     o.s=o.s+1;
     return o.s>n?false:(en=e[0],Unchecked.Equals(en,null)?Seq.insufficient():en.MoveNext()?(o.c=en.Current(),o.s===n?(en.Dispose(),e[0]=null):void 0,true):(en.Dispose(),e[0]=null,Seq.insufficient()));
    },function()
    {
     var x;
     x=e[0];
     !Unchecked.Equals(x,null)?x.Dispose():void 0;
    });
   }
  };
 };
 Seq.takeWhile=function(f,s)
 {
  return Seq.delay(function()
  {
   return Seq.enumUsing(Enumerator.Get(s),function(e)
   {
    return Seq.enumWhile(function()
    {
     return e.MoveNext()?f(e.Current()):false;
    },Seq.delay(function()
    {
     return[e.Current()];
    }));
   });
  });
 };
 Seq.truncate=function(n,s)
 {
  return Seq.delay(function()
  {
   return Seq.enumUsing(Enumerator.Get(s),function(e)
   {
    var i;
    i=[0];
    return Seq.enumWhile(function()
    {
     return e.MoveNext()?i[0]<n:false;
    },Seq.delay(function()
    {
     Ref.incr(i);
     return[e.Current()];
    }));
   });
  });
 };
 Seq.tryFind=function(ok,s)
 {
  var e,r,x;
  e=Enumerator.Get(s);
  try
  {
   r=null;
   while(r==null?e.MoveNext():false)
    {
     x=e.Current();
     ok(x)?r={
      $:1,
      $0:x
     }:void 0;
    }
   return r;
  }
  finally
  {
   if("Dispose"in e)
    e.Dispose();
  }
 };
 Seq.findBack=function(p,s)
 {
  var m;
  m=Arrays.tryFindBack(p,Arrays.ofSeq(s));
  return m==null?Operators.FailWith("KeyNotFoundException"):m.$0;
 };
 Seq.tryFindIndex=function(ok,s)
 {
  var e,loop,i;
  e=Enumerator.Get(s);
  try
  {
   loop=true;
   i=0;
   while(loop?e.MoveNext():false)
    if(ok(e.Current()))
     loop=false;
    else
     i=i+1;
   return loop?null:{
    $:1,
    $0:i
   };
  }
  finally
  {
   if("Dispose"in e)
    e.Dispose();
  }
 };
 Seq.findIndexBack=function(p,s)
 {
  var m;
  m=Arrays.tryFindIndexBack(p,Arrays.ofSeq(s));
  return m==null?Operators.FailWith("KeyNotFoundException"):m.$0;
 };
 Seq.tryPick=function(f,s)
 {
  var e,r;
  e=Enumerator.Get(s);
  try
  {
   r=null;
   while(Unchecked.Equals(r,null)?e.MoveNext():false)
    r=f(e.Current());
   return r;
  }
  finally
  {
   if("Dispose"in e)
    e.Dispose();
  }
 };
 Seq.unfold=function(f,s)
 {
  return{
   GetEnumerator:function()
   {
    return new T.New(s,null,function(e)
    {
     var m;
     m=f(e.s);
     return m==null?false:(e.c=m.$0[0],e.s=m.$0[1],true);
    },void 0);
   }
  };
 };
 Seq.windowed=function(windowSize,s)
 {
  windowSize<=0?Operators.FailWith("The input must be positive."):void 0;
  return Seq.delay(function()
  {
   return Seq.enumUsing(Enumerator.Get(s),function(e)
   {
    var q;
    q=[];
    return Seq.append(Seq.enumWhile(function()
    {
     return q.length<windowSize?e.MoveNext():false;
    },Seq.delay(function()
    {
     q.push(e.Current());
     return[];
    })),Seq.delay(function()
    {
     return q.length===windowSize?Seq.append([q.slice(0)],Seq.delay(function()
     {
      return Seq.enumWhile(function()
      {
       return e.MoveNext();
      },Seq.delay(function()
      {
       q.shift();
       q.push(e.Current());
       return[q.slice(0)];
      }));
     })):[];
    }));
   });
  });
 };
 Seq.zip=function(s1,s2)
 {
  return Seq.map2(function($1,$2)
  {
   return[$1,$2];
  },s1,s2);
 };
 Seq.map3=function(f,s1,s2,s3)
 {
  return{
   GetEnumerator:function()
   {
    var e1,e2,e3;
    e1=Enumerator.Get(s1);
    e2=Enumerator.Get(s2);
    e3=Enumerator.Get(s3);
    return new T.New(null,null,function(e)
    {
     return((e1.MoveNext()?e2.MoveNext():false)?e3.MoveNext():false)?(e.c=f(e1.Current(),e2.Current(),e3.Current()),true):false;
    },function()
    {
     e1.Dispose();
     e2.Dispose();
     e3.Dispose();
    });
   }
  };
 };
 Seq.zip3=function(s1,s2,s3)
 {
  return Seq.map3(function($1,$2,$3)
  {
   return[$1,$2,$3];
  },s1,s2,s3);
 };
 Seq.fold2=function(f,s,s1,s2)
 {
  return Arrays.fold2(f,s,Arrays.ofSeq(s1),Arrays.ofSeq(s2));
 };
 Seq.foldBack=function(f,s,state)
 {
  return Arrays.foldBack(f,Arrays.ofSeq(s),state);
 };
 Seq.foldBack2=function(f,s1,s2,s)
 {
  return Arrays.foldBack2(f,Arrays.ofSeq(s1),Arrays.ofSeq(s2),s);
 };
 Seq.iteri2=function(f,s1,s2)
 {
  var i,e1,$1,e2;
  i=0;
  e1=Enumerator.Get(s1);
  try
  {
   e2=Enumerator.Get(s2);
   try
   {
    while(e1.MoveNext()?e2.MoveNext():false)
     {
      f(i,e1.Current(),e2.Current());
      i=i+1;
     }
    $1=void 0;
   }
   finally
   {
    if("Dispose"in e2)
     e2.Dispose();
   }
   $1;
  }
  finally
  {
   if("Dispose"in e1)
    e1.Dispose();
  }
 };
 Seq.mapi2=function(f,s1,s2)
 {
  return Seq.map3(function($1,$2,$3)
  {
   return((f($1))($2))($3);
  },Seq.initInfinite(Global.id),s1,s2);
 };
 Seq.mapFold=function(f,zero,s)
 {
  return Arrays.mapFold(f,zero,Arrays.ofSeq(s));
 };
 Seq.mapFoldBack=function(f,s,zero)
 {
  return Arrays.mapFoldBack(f,Arrays.ofSeq(s),zero);
 };
 Seq.permute=function(f,s)
 {
  return Seq.delay(function()
  {
   return Arrays.permute(f,Arrays.ofSeq(s));
  });
 };
 Seq.reduceBack=function(f,s)
 {
  return Arrays.reduceBack(f,Arrays.ofSeq(s));
 };
 Seq.replicate=function(size,value)
 {
  size<0?Seq.nonNegative():void 0;
  return Seq.delay(function()
  {
   return Seq.map(function()
   {
    return value;
   },Operators.range(0,size-1));
  });
 };
 Seq.rev=function(s)
 {
  return Seq.delay(function()
  {
   return Arrays.ofSeq(s).slice().reverse();
  });
 };
 Seq.scanBack=function(f,l,s)
 {
  return Seq.delay(function()
  {
   return Arrays.scanBack(f,Arrays.ofSeq(l),s);
  });
 };
 Seq.indexed=function(s)
 {
  return Seq.mapi(function($1,$2)
  {
   return[$1,$2];
  },s);
 };
 Seq.sortWith=function(f,s)
 {
  return Seq.delay(function()
  {
   var a;
   a=Arrays.ofSeq(s);
   Arrays.sortInPlaceWith(f,a);
   return a;
  });
 };
 Seq.tail=function(s)
 {
  return Seq.skip(1,s);
 };
 Stack.CopyTo=function(stack,array,index)
 {
  Arrays.blit(array,0,array,index,Arrays.length(stack));
 };
 Stack.Contains=function(stack,el)
 {
  return Seq.exists(function(y)
  {
   return Unchecked.Equals(el,y);
  },stack);
 };
 Stack.Clear=function(stack)
 {
  stack.splice(0,Arrays.length(stack));
 };
 Strings.RegexEscape=function(s)
 {
  return s.replace(new Global.RegExp("[-\\/\\\\^$*+?.()|[\\]{}]","g"),"\\$&");
 };
 Strings.SplitWith=function(str,pat)
 {
  return str.split(pat);
 };
 Strings.Join=function(sep,values)
 {
  return values.join(sep);
 };
 Strings.TrimEndWS=function(s)
 {
  return s.replace(new Global.RegExp("\\s+$"),"");
 };
 Strings.TrimStartWS=function(s)
 {
  return s.replace(new Global.RegExp("^\\s+"),"");
 };
 Strings.Trim=function(s)
 {
  return s.replace(new Global.RegExp("^\\s+"),"").replace(new Global.RegExp("\\s+$"),"");
 };
 Strings.StartsWith=function(t,s)
 {
  return t.substring(0,s.length)==s;
 };
 Strings.Substring=function(s,ix,ct)
 {
  return s.substr(ix,ct);
 };
 Strings.ReplaceOnce=function(string,search,replace)
 {
  return string.replace(search,replace);
 };
 Strings.Remove=function(x,ix,ct)
 {
  return x.substring(0,ix)+x.substring(ix+ct);
 };
 Strings.PadRightWith=function(s,n,c)
 {
  return n>s.length?s+Global.Array(n-s.length+1).join(Global.String.fromCharCode(c)):s;
 };
 Strings.PadLeftWith=function(s,n,c)
 {
  return n>s.length?Global.Array(n-s.length+1).join(Global.String.fromCharCode(c))+s:s;
 };
 Strings.LastIndexOf=function(s,c,i)
 {
  return s.lastIndexOf(Global.String.fromCharCode(c),i);
 };
 Strings.IsNullOrWhiteSpace=function(x)
 {
  return x==null||(new Global.RegExp("^\\s*$")).test(x);
 };
 Strings.IsNullOrEmpty=function(x)
 {
  return x==null||x=="";
 };
 Strings.Insert=function(x,index,s)
 {
  return x.substring(0,index-1)+s+x.substring(index);
 };
 Strings.IndexOf=function(s,c,i)
 {
  return s.indexOf(Global.String.fromCharCode(c),i);
 };
 Strings.EndsWith=function(x,s)
 {
  return x.substring(x.length-s.length)==s;
 };
 Strings.collect=function(f,s)
 {
  return Arrays.init(s.length,function(i)
  {
   return f(s.charCodeAt(i));
  }).join("");
 };
 Strings.concat=function(separator,strings)
 {
  return Arrays.ofSeq(strings).join(separator);
 };
 Strings.exists=function(f,s)
 {
  return Seq.exists(f,Strings.protect(s));
 };
 Strings.forall=function(f,s)
 {
  return Seq.forall(f,Strings.protect(s));
 };
 Strings.init=function(count,f)
 {
  return Arrays.init(count,f).join("");
 };
 Strings.iter=function(f,s)
 {
  Seq.iter(f,Strings.protect(s));
 };
 Strings.iteri=function(f,s)
 {
  Seq.iteri(f,Strings.protect(s));
 };
 Strings.length=function(s)
 {
  return Strings.protect(s).length;
 };
 Strings.map=function(f,s)
 {
  return Strings.collect(function(x)
  {
   return String.fromCharCode(f(x));
  },Strings.protect(s));
 };
 Strings.mapi=function(f,s)
 {
  return Arrays.ofSeq(Seq.mapi(function($1,$2)
  {
   return String.fromCharCode(f($1,$2));
  },s)).join("");
 };
 Strings.replicate=function(count,s)
 {
  return Strings.init(count,function()
  {
   return s;
  });
 };
 Strings.protect=function(s)
 {
  return s===null?"":s;
 };
 Strings.SFormat=function(format,args)
 {
  var pattern,r;
  pattern=new Global.RegExp("{(0|[1-9]\\d*)(?:,(-?[1-9]\\d*|0))?(?::(.*?))?}","g");
  r=function($1,$2,w)
  {
   var r$1,w1,w2;
   r$1=String(Arrays.get(args,+$2));
   return!Unchecked.Equals(w,void 0)?(w1=+w,(w2=Global.Math.abs(w1),w2>r$1.length?w1>0?Strings.PadLeft(r$1,w2):Strings.PadRight(r$1,w2):r$1)):r$1;
  };
  return function(t)
  {
   return t.replace(pattern,r);
  }(format);
 };
 Strings.Filter=function(f,s)
 {
  var c;
  return Arrays.ofSeq((c=function(c$1)
  {
   return f(c$1)?{
    $:1,
    $0:String.fromCharCode(c$1)
   }:null;
  },function(s$1)
  {
   return Seq.choose(c,s$1);
  }(s))).join("");
 };
 Strings.SplitStrings=function(s,sep,opts)
 {
  var re;
  re=Strings.concat("|",Arrays.map(Strings.RegexEscape,sep));
  return Strings.Split(s,new Global.RegExp(re),opts);
 };
 Strings.SplitChars=function(s,sep,opts)
 {
  var re;
  re="["+Strings.RegexEscape(Global.String.fromCharCode.apply(void 0,sep))+"]";
  return Strings.Split(s,new Global.RegExp(re),opts);
 };
 Strings.Split=function(s,pat,opts)
 {
  var res;
  res=Strings.SplitWith(s,pat);
  return opts===1?Arrays.filter(function(x)
  {
   return x!=="";
  },res):res;
 };
 Strings.TrimEnd=function(s,t)
 {
  var i,go,ct;
  if(Unchecked.Equals(t,null)?true:t.length==0)
   return Strings.TrimEndWS(s);
  else
   {
    i=s.length-1;
    go=true;
    while(i>=0?go:false)
     (function()
     {
      var c,p;
      c=s.charCodeAt(i);
      return(p=function(y)
      {
       return c===y;
      },function(a)
      {
       return Arrays.exists(p,a);
      }(t))?void(i=i-1):void(go=false);
     }());
    ct=i+1;
    return Strings.Substring(s,0,ct);
   }
 };
 Strings.TrimStart=function(s,t)
 {
  var i,go;
  if(Unchecked.Equals(t,null)?true:t.length==0)
   return Strings.TrimStartWS(s);
  else
   {
    i=0;
    go=true;
    while(i<s.length?go:false)
     (function()
     {
      var c,p;
      c=s.charCodeAt(i);
      return(p=function(y)
      {
       return c===y;
      },function(a)
      {
       return Arrays.exists(p,a);
      }(t))?void(i=i+1):void(go=false);
     }());
    return s.substring(i);
   }
 };
 Strings.ToCharArrayRange=function(s,startIndex,length)
 {
  return Arrays.init(length,function(i)
  {
   return s.charCodeAt(startIndex+i);
  });
 };
 Strings.ToCharArray=function(s)
 {
  return Arrays.init(s.length,function(x)
  {
   return s.charCodeAt(x);
  });
 };
 Strings.ReplaceChar=function(s,oldC,newC)
 {
  return Strings.Replace(s,String.fromCharCode(oldC),String.fromCharCode(newC));
 };
 Strings.Replace=function(subject,search,replace)
 {
  function replaceLoop(subj)
  {
   var index,replaced,nextStartIndex,ct;
   index=subj.indexOf(search);
   return index!==-1?(replaced=Strings.ReplaceOnce(subj,search,replace),(nextStartIndex=index+replace.length,(ct=index+replace.length,Strings.Substring(replaced,0,ct))+replaceLoop(replaced.substring(nextStartIndex)))):subj;
  }
  return replaceLoop(subject);
 };
 Strings.PadRight=function(s,n)
 {
  return Strings.PadRightWith(s,n,32);
 };
 Strings.PadLeft=function(s,n)
 {
  return Strings.PadLeftWith(s,n,32);
 };
 Strings.CopyTo=function(s,o,d,off,ct)
 {
  Arrays.blit(Strings.ToCharArray(s),o,d,off,ct);
 };
 Strings.Compare=function(x,y)
 {
  return Operators.Compare(x,y);
 };
 Task=WebSharper.Task=Runtime.Class({
  Execute:function()
  {
   this.action();
  },
  Start:function()
  {
   var $this;
   $this=this;
   Unchecked.Equals(this.status,0)?(this.status=2,Concurrency.scheduler().Fork(function()
   {
    var $1;
    $this.status=3;
    try
    {
     $this.Execute();
     $this.status=5;
    }
    catch(m)
    {
     (m instanceof OperationCanceledException?Unchecked.Equals(m.ct,$this.token)?($1=m,true):false:false)?(Global.console.log.apply(Global.console,["Task cancellation caught:"].concat([$1])),$this.exc=new AggregateException.New$3([$1]),$this.status=6):(Global.console.log.apply(Global.console,["Task error caught:"].concat([m])),$this.exc=new AggregateException.New$3([m]),$this.status=7);
    }
    $this.RunContinuations();
   })):Operators.InvalidOp("Task not in initial state");
  },
  StartContinuation:function()
  {
   var $this;
   $this=this;
   Unchecked.Equals(this.status,1)?(this.status=2,Concurrency.scheduler().Fork(function()
   {
    if(Unchecked.Equals($this.status,2))
     {
      $this.status=3;
      try
      {
       $this.Execute();
       $this.status=5;
      }
      catch(e)
      {
       $this.exc=new AggregateException.New$3([e]);
       $this.status=7;
      }
      $this.RunContinuations();
     }
   })):void 0;
  },
  ContinueWith:function(func,ct)
  {
   var $this,res,v;
   $this=this;
   res=new Task1.New(function()
   {
    return func($this);
   },ct,1,null,void 0);
   this.get_IsCompleted()?res.StartContinuation():v=this.continuations.push(res);
   return res;
  },
  ContinueWith$1:function(action,ct)
  {
   var $this,res,v;
   $this=this;
   res=new Task.New$2(function()
   {
    return action($this);
   },ct,1,null);
   this.get_IsCompleted()?res.StartContinuation():v=this.continuations.push(res);
   return res;
  },
  ContinueWith$2:function(action)
  {
   return this.ContinueWith$1(action,Concurrency.noneCT());
  },
  RunContinuations:function()
  {
   var a,i,$1;
   a=this.continuations;
   for(i=0,$1=a.length-1;i<=$1;i++)Arrays.get(a,i).StartContinuation();
  },
  OnCompleted:function(cont)
  {
   var v;
   if(this.get_IsCompleted())
    cont();
   else
    {
     Unchecked.Equals(this.get_Status(),0)?this.Start():void 0;
     v=this.ContinueWith$2(function()
     {
      return cont();
     });
    }
  },
  get_Status:function()
  {
   return this.status;
  },
  get_IsFaulted:function()
  {
   return Unchecked.Equals(this.status,7);
  },
  get_IsCompleted:function()
  {
   return(Unchecked.Equals(this.status,5)?true:Unchecked.Equals(this.status,7))?true:Unchecked.Equals(this.status,6);
  },
  get_IsCanceled:function()
  {
   return Unchecked.Equals(this.status,6);
  },
  get_Exception:function()
  {
   return this.exc;
  }
 },null,Task);
 Task.WhenAll=function(tasks)
 {
  var target,completed,results,tcs,i,$1;
  target=Arrays.length(tasks);
  completed=[0];
  results=new Global.Array(target);
  tcs=new TaskCompletionSource.New();
  for(i=0,$1=target-1;i<=$1;i++)(function(i$1)
  {
   var v;
   v=Arrays.get(tasks,i).ContinueWith$2(function(t)
   {
    var v$1,v$2;
    return t.get_IsFaulted()?(v$1=tcs.TrySetException$1(t.get_Exception()),void 0):t.get_IsCanceled()?(v$2=tcs.TrySetCanceled$1(),void 0):(Ref.incr(completed),results[i$1]=t.get_Result(),completed[0]===target?tcs.SetResult(results):null);
   });
  }(i));
  return tcs.get_Task();
 };
 Task.WhenAll$1=function(tasks)
 {
  var target,completed,tcs,i,$1,v;
  target=Arrays.length(tasks);
  completed=[0];
  tcs=new TaskCompletionSource.New();
  for(i=0,$1=target-1;i<=$1;i++){
   v=Arrays.get(tasks,i).ContinueWith$2(function(t)
   {
    var v$1,v$2,v$3;
    return t.get_IsFaulted()?(v$1=tcs.TrySetException$1(t.get_Exception()),void 0):t.get_IsCanceled()?(v$2=tcs.TrySetCanceled$1(),void 0):(Ref.incr(completed),completed[0]===target?(v$3=tcs.TrySetResult(),void 0):null);
   });
  }
  return tcs.get_Task();
 };
 Task.WhenAny=function(tasks)
 {
  var tcs,i,$1,t,v;
  tcs=new TaskCompletionSource.New();
  for(i=0,$1=tasks.length-1;i<=$1;i++){
   t=Arrays.get(tasks,i);
   v=t.ContinueWith(function(t$1)
   {
    var v$1;
    v$1=tcs.TrySetResult(t$1);
   },Concurrency.noneCT());
  }
  return tcs.get_Task();
 };
 Task.WhenAny$1=function(tasks)
 {
  var tcs,i,$1,t,v;
  tcs=new TaskCompletionSource.New();
  for(i=0,$1=tasks.length-1;i<=$1;i++){
   t=Arrays.get(tasks,i);
   v=t.ContinueWith$2(function(t$1)
   {
    var v$1;
    v$1=tcs.TrySetResult(t$1);
   });
  }
  return tcs.get_Task();
 };
 Task.Delay=function(time,ct)
 {
  var a;
  a=Concurrency.Sleep(time);
  return Concurrency.StartAsTask(a,{
   $:1,
   $0:ct
  });
 };
 Task.Delay$1=function(time)
 {
  var a;
  a=Concurrency.Sleep(time);
  return Concurrency.StartAsTask(a,null);
 };
 Task.Run=function(func,ct)
 {
  var task;
  task=func();
  return ct.c?Task.FromCanceled(ct):(Unchecked.Equals(task.get_Status(),0)?task.Start():void 0,task);
 };
 Task.Run$1=function(func,ct)
 {
  var res;
  res=new Task1.New(func,ct,0,null,void 0);
  res.Start();
  return res;
 };
 Task.Run$2=function(func,ct)
 {
  var task;
  task=func();
  return ct.c?Task.FromCanceled$1(ct):(Unchecked.Equals(task.get_Status(),0)?task.Start():void 0,task);
 };
 Task.Run$3=function(action,ct)
 {
  var res;
  res=new Task.New$2(action,ct,0,null);
  res.Start();
  return res;
 };
 Task.FromResult=function(res)
 {
  return new Task1.New(null,Concurrency.noneCT(),5,null,res);
 };
 Task.FromException=function(exc)
 {
  return new Task1.New(null,Concurrency.noneCT(),7,new AggregateException.New$3([exc]),null);
 };
 Task.FromException$1=function(exc)
 {
  return new Task.New$2(null,Concurrency.noneCT(),7,new AggregateException.New$3([exc]));
 };
 Task.FromCanceled=function(ct)
 {
  return new Task1.New(null,ct,6,null,null);
 };
 Task.FromCanceled$1=function(ct)
 {
  return new Task.New$2(null,ct,6,null);
 };
 Task.New=Runtime.Ctor(function(action,ct)
 {
  Task.New$2.call(this,action,ct,0,null);
 },Task);
 Task.New$1=Runtime.Ctor(function(action)
 {
  Task.New$2.call(this,action,Concurrency.noneCT(),0,null);
 },Task);
 Task.New$2=Runtime.Ctor(function(action,token,status,exc)
 {
  this.action=action;
  this.token=token;
  this.status=status;
  this.continuations=[];
  this.exc=exc;
 },Task);
 Task1=WebSharper.Task1=Runtime.Class({
  get_Result:function()
  {
   return this.result;
  },
  Execute:function()
  {
   this.result=this.func();
  }
 },Task,Task1);
 Task1.New=Runtime.Ctor(function(func,token,status,exc,result)
 {
  Task.New$2.call(this,null,token,status,exc);
  this.func=func;
  this.result=result;
 },Task1);
 TaskCompletionSource=WebSharper.TaskCompletionSource=Runtime.Class({
  TrySetResult:function(res)
  {
   return!this.task.get_IsCompleted()?(this.task.status=5,this.task.result=res,this.task.RunContinuations(),true):false;
  },
  TrySetException:function(exs)
  {
   return this.TrySetException$1(new AggregateException.New$2(exs));
  },
  TrySetException$1:function(exc)
  {
   return!this.task.get_IsCompleted()?(this.task.status=7,this.task.exc=new AggregateException.New$3([exc]),this.task.RunContinuations(),true):false;
  },
  TrySetCanceled:function(ct)
  {
   return!this.task.get_IsCompleted()?(this.task.status=6,this.task.RunContinuations(),true):false;
  },
  TrySetCanceled$1:function()
  {
   return!this.task.get_IsCompleted()?(this.task.status=6,this.task.RunContinuations(),true):false;
  },
  SetResult:function(res)
  {
   this.task.get_IsCompleted()?Operators.FailWith("Task already completed."):void 0;
   this.task.status=5;
   this.task.result=res;
   this.task.RunContinuations();
  },
  SetException:function(exs)
  {
   this.SetException$1(new AggregateException.New$2(exs));
  },
  SetException$1:function(exc)
  {
   this.task.get_IsCompleted()?Operators.FailWith("Task already completed."):void 0;
   this.task.status=7;
   this.task.exc=new AggregateException.New$3([exc]);
   this.task.RunContinuations();
  },
  SetCanceled:function()
  {
   this.task.get_IsCompleted()?Operators.FailWith("Task already completed."):void 0;
   this.task.status=6;
   this.task.RunContinuations();
  },
  get_Task:function()
  {
   return this.task;
  }
 },null,TaskCompletionSource);
 TaskCompletionSource.New=Runtime.Ctor(function()
 {
  this.task=new Task1.New(null,Concurrency.noneCT(),1,null,void 0);
 },TaskCompletionSource);
 Unchecked.Hash=function(o)
 {
  var m;
  m=typeof o;
  return m=="function"?0:m=="boolean"?o?1:0:m=="number"?o:m=="string"?Unchecked.hashString(o):m=="object"?o==null?0:o instanceof Global.Array?Unchecked.hashArray(o):Unchecked.hashObject(o):0;
 };
 Unchecked.hashObject=function(o)
 {
  var _,h,k;
  if("GetHashCode"in o)
   return o.GetHashCode();
  else
   {
    _=Unchecked.hashMix;
    h=[0];
    for(var k$1 in o)if(function(key)
    {
     h[0]=_(_(h[0],Unchecked.hashString(key)),Unchecked.Hash(o[key]));
     return false;
    }(k$1))
     break;
    return h[0];
   }
 };
 Unchecked.hashString=function(s)
 {
  var hash,i,$1;
  if(s===null)
   return 0;
  else
   {
    hash=5381;
    for(i=0,$1=s.length-1;i<=$1;i++)hash=Unchecked.hashMix(hash,s.charCodeAt(i)<<0);
    return hash;
   }
 };
 Unchecked.hashArray=function(o)
 {
  var h,i,$1;
  h=-34948909;
  for(i=0,$1=Arrays.length(o)-1;i<=$1;i++)h=Unchecked.hashMix(h,Unchecked.Hash(Arrays.get(o,i)));
  return h;
 };
 Unchecked.hashMix=function(x,y)
 {
  return(x<<5)+x+y;
 };
 Unchecked.Equals=function(a,b)
 {
  var m,eqR,k,k$1;
  if(a===b)
   return true;
  else
   {
    m=typeof a;
    if(m=="object")
    {
     if(((a===null?true:a===void 0)?true:b===null)?true:b===void 0)
      return false;
     else
      if("Equals"in a)
       return a.Equals(b);
      else
       if(a instanceof Global.Array?b instanceof Global.Array:false)
        return Unchecked.arrayEquals(a,b);
       else
        if(a instanceof Global.Date?b instanceof Global.Date:false)
         return Unchecked.dateEquals(a,b);
        else
         {
          eqR=[true];
          for(var k$2 in a)if(function(k$3)
          {
           eqR[0]=!a.hasOwnProperty(k$3)?true:b.hasOwnProperty(k$3)?Unchecked.Equals(a[k$3],b[k$3]):false;
           return!eqR[0];
          }(k$2))
           break;
          if(eqR[0])
           {
            for(var k$3 in b)if(function(k$4)
            {
             eqR[0]=!b.hasOwnProperty(k$4)?true:a.hasOwnProperty(k$4);
             return!eqR[0];
            }(k$3))
             break;
           }
          return eqR[0];
         }
    }
    else
     return m=="function"?"$Func"in a?a.$Func===b.$Func?a.$Target===b.$Target:false:("$Invokes"in a?"$Invokes"in b:false)?Unchecked.arrayEquals(a.$Invokes,b.$Invokes):false:false;
   }
 };
 Unchecked.dateEquals=function(a,b)
 {
  return a.getTime()===b.getTime();
 };
 Unchecked.arrayEquals=function(a,b)
 {
  var eq,i;
  if(Arrays.length(a)===Arrays.length(b))
   {
    eq=true;
    i=0;
    while(eq?i<Arrays.length(a):false)
     {
      !Unchecked.Equals(Arrays.get(a,i),Arrays.get(b,i))?eq=false:void 0;
      i=i+1;
     }
    return eq;
   }
  else
   return false;
 };
 Unchecked.Compare=function(a,b)
 {
  var $1,m,$2,cmp,k,k$1;
  if(a===b)
   return 0;
  else
   {
    m=typeof a;
    switch(m=="function"?1:m=="boolean"?2:m=="number"?2:m=="string"?2:m=="object"?3:0)
    {
     case 0:
      return typeof b=="undefined"?0:-1;
      break;
     case 1:
      return Operators.FailWith("Cannot compare function values.");
      break;
     case 2:
      return a<b?-1:1;
      break;
     case 3:
      if(a===null)
       $2=-1;
      else
       if(b===null)
        $2=1;
       else
        if("CompareTo"in a)
         $2=a.CompareTo(b);
        else
         if("CompareTo0"in a)
          $2=a.CompareTo0(b);
         else
          if(a instanceof Global.Array?b instanceof Global.Array:false)
           $2=Unchecked.compareArrays(a,b);
          else
           if(a instanceof Global.Date?b instanceof Global.Date:false)
            $2=Unchecked.compareDates(a,b);
           else
            {
             cmp=[0];
             for(var k$2 in a)if(function(k$3)
             {
              return!a.hasOwnProperty(k$3)?false:!b.hasOwnProperty(k$3)?(cmp[0]=1,true):(cmp[0]=Unchecked.Compare(a[k$3],b[k$3]),cmp[0]!==0);
             }(k$2))
              break;
             if(cmp[0]===0)
              {
               for(var k$3 in b)if(function(k$4)
               {
                return!b.hasOwnProperty(k$4)?false:!a.hasOwnProperty(k$4)?(cmp[0]=-1,true):false;
               }(k$3))
                break;
              }
             $2=cmp[0];
            }
      return $2;
      break;
    }
   }
 };
 Unchecked.compareDates=function(a,b)
 {
  return Operators.Compare(a.getTime(),b.getTime());
 };
 Unchecked.compareArrays=function(a,b)
 {
  var cmp,i;
  if(Arrays.length(a)<Arrays.length(b))
   return -1;
  else
   if(Arrays.length(a)>Arrays.length(b))
    return 1;
   else
    {
     cmp=0;
     i=0;
     while(cmp===0?i<Arrays.length(a):false)
      {
       cmp=Unchecked.Compare(Arrays.get(a,i),Arrays.get(b,i));
       i=i+1;
      }
     return cmp;
    }
 };
 N.TryParse=function(s,min,max,r)
 {
  var x,ok;
  x=+s;
  ok=(x===x-x%1?x>=min:false)?x<=max:false;
  ok?r.set(x):void 0;
  return ok;
 };
 N.Parse=function(s,min,max,overflowMsg)
 {
  var x;
  x=+s;
  if(x!==x-x%1)
   throw new FormatException.New$1("Input string was not in a correct format.");
  else
   if(x<min?true:x>max)
    throw new OverflowException.New$1(overflowMsg);
   else
    return x;
 };
 Byte.TryParse=function(s,r)
 {
  return N.TryParse(s,0,255,r);
 };
 Byte.Parse=function(s)
 {
  return N.Parse(s,0,255,"Value was either too large or too small for an unsigned byte.");
 };
 SByte.TryParse=function(s,r)
 {
  return N.TryParse(s,-128,127,r);
 };
 SByte.Parse=function(s)
 {
  return N.Parse(s,-128,127,"Value was either too large or too small for a signed byte.");
 };
 Int16.TryParse=function(s,r)
 {
  return N.TryParse(s,-32768,32767,r);
 };
 Int16.Parse=function(s)
 {
  return N.Parse(s,-32768,32767,"Value was either too large or too small for an Int16.");
 };
 Int32.TryParse=function(s,r)
 {
  return N.TryParse(s,-2147483648,2147483647,r);
 };
 Int32.Parse=function(s)
 {
  return N.Parse(s,-2147483648,2147483647,"Value was either too large or too small for an Int32.");
 };
 UInt16.TryParse=function(s,r)
 {
  return N.TryParse(s,0,65535,r);
 };
 UInt16.Parse=function(s)
 {
  return N.Parse(s,0,65535,"Value was either too large or too small for an UInt16.");
 };
 UInt32.TryParse=function(s,r)
 {
  return N.TryParse(s,0,4294967295,r);
 };
 UInt32.Parse=function(s)
 {
  return N.Parse(s,0,4294967295,"Value was either too large or too small for an UInt32.");
 };
 Int64.TryParse=function(s,r)
 {
  return N.TryParse(s,-9223372036854775808,9223372036854775807,r);
 };
 Int64.Parse=function(s)
 {
  return N.Parse(s,-9223372036854775808,9223372036854775807,"Value was either too large or too small for an Int64.");
 };
 UInt64.TryParse=function(s,r)
 {
  return N.TryParse(s,0,18446744073709551615,r);
 };
 UInt64.Parse=function(s)
 {
  return N.Parse(s,0,18446744073709551615,"Value was either too large or too small for an UInt64.");
 };
}());
