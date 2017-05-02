(function()
{
 "use strict";
 var Global,WebSharper,UI,Next,Array,String,Abbrev,Fresh,HashSet,Dict,Slot,Async,Mailbox,MailboxState,SC$1,AppendList,SC$2,DomUtility,SC$3,Trie,SC$4,Snap,Var,View,Submitter,Key,Model,Serializer,Storage,ArrayStorage,LocalStorageBackend,ListModel,ListModels,SC$5,ReactiveExtensions,DoubleInterpolation,Interpolation,Easing,Easings,An,Anims,Trans,SC$6,AnimatedAttrNode,DynamicAttrNode,AttrProxy,Client,Attrs,Dyn,Attrs$1,CheckedInput,AttrModule,SC$7,DocElemNode,Docs,DomNodes,NodeSet,RunState,Docs$1,Doc,Elt,EltUpdater,SC$8,Flow,FlowBuilder,Html,attr,Route,Routing,State,RouteMap,Router,Input,MousePosSt,MouseBtnSt,Mouse,KeyListenerSt,Keyboard,SC$9,List,Arrays,Enumerator,Strings,Char,Collections,HashSet$1,Seq,IntelliFactory,Runtime,Unchecked,Concurrency,Map,FSharpMap,List$1,Operators,Ref,Lazy,Dictionary,Int32,Slice;
 Global=window;
 WebSharper=Global.WebSharper=Global.WebSharper||{};
 UI=WebSharper.UI=WebSharper.UI||{};
 Next=UI.Next=UI.Next||{};
 Array=Next.Array=Next.Array||{};
 String=Next.String=Next.String||{};
 Abbrev=Next.Abbrev=Next.Abbrev||{};
 Fresh=Abbrev.Fresh=Abbrev.Fresh||{};
 HashSet=Abbrev.HashSet=Abbrev.HashSet||{};
 Dict=Abbrev.Dict=Abbrev.Dict||{};
 Slot=Abbrev.Slot=Abbrev.Slot||{};
 Async=Abbrev.Async=Abbrev.Async||{};
 Mailbox=Abbrev.Mailbox=Abbrev.Mailbox||{};
 MailboxState=Mailbox.MailboxState=Mailbox.MailboxState||{};
 SC$1=Global.StartupCode$WebSharper_UI_Next$Abbrev=Global.StartupCode$WebSharper_UI_Next$Abbrev||{};
 AppendList=Next.AppendList=Next.AppendList||{};
 SC$2=Global.StartupCode$WebSharper_UI_Next$AppendList=Global.StartupCode$WebSharper_UI_Next$AppendList||{};
 DomUtility=Next.DomUtility=Next.DomUtility||{};
 SC$3=Global.StartupCode$WebSharper_UI_Next$DomUtility=Global.StartupCode$WebSharper_UI_Next$DomUtility||{};
 Trie=Next.Trie=Next.Trie||{};
 SC$4=Global.StartupCode$WebSharper_UI_Next$Trie=Global.StartupCode$WebSharper_UI_Next$Trie||{};
 Snap=Next.Snap=Next.Snap||{};
 Var=Next.Var=Next.Var||{};
 View=Next.View=Next.View||{};
 Submitter=Next.Submitter=Next.Submitter||{};
 Key=Next.Key=Next.Key||{};
 Model=Next.Model=Next.Model||{};
 Serializer=Next.Serializer=Next.Serializer||{};
 Storage=Next.Storage=Next.Storage||{};
 ArrayStorage=Storage.ArrayStorage=Storage.ArrayStorage||{};
 LocalStorageBackend=Storage.LocalStorageBackend=Storage.LocalStorageBackend||{};
 ListModel=Next.ListModel=Next.ListModel||{};
 ListModels=Next.ListModels=Next.ListModels||{};
 SC$5=Global.StartupCode$WebSharper_UI_Next$Models=Global.StartupCode$WebSharper_UI_Next$Models||{};
 ReactiveExtensions=Next.ReactiveExtensions=Next.ReactiveExtensions||{};
 DoubleInterpolation=Next.DoubleInterpolation=Next.DoubleInterpolation||{};
 Interpolation=Next.Interpolation=Next.Interpolation||{};
 Easing=Next.Easing=Next.Easing||{};
 Easings=Next.Easings=Next.Easings||{};
 An=Next.An=Next.An||{};
 Anims=Next.Anims=Next.Anims||{};
 Trans=Next.Trans=Next.Trans||{};
 SC$6=Global.StartupCode$WebSharper_UI_Next$Animation=Global.StartupCode$WebSharper_UI_Next$Animation||{};
 AnimatedAttrNode=Next.AnimatedAttrNode=Next.AnimatedAttrNode||{};
 DynamicAttrNode=Next.DynamicAttrNode=Next.DynamicAttrNode||{};
 AttrProxy=Next.AttrProxy=Next.AttrProxy||{};
 Client=Next.Client=Next.Client||{};
 Attrs=Client.Attrs=Client.Attrs||{};
 Dyn=Attrs.Dyn=Attrs.Dyn||{};
 Attrs$1=Next.Attrs=Next.Attrs||{};
 CheckedInput=Next.CheckedInput=Next.CheckedInput||{};
 AttrModule=Next.AttrModule=Next.AttrModule||{};
 SC$7=Global.StartupCode$WebSharper_UI_Next$Attr_Client=Global.StartupCode$WebSharper_UI_Next$Attr_Client||{};
 DocElemNode=Next.DocElemNode=Next.DocElemNode||{};
 Docs=Client.Docs=Client.Docs||{};
 DomNodes=Docs.DomNodes=Docs.DomNodes||{};
 NodeSet=Docs.NodeSet=Docs.NodeSet||{};
 RunState=Docs.RunState=Docs.RunState||{};
 Docs$1=Next.Docs=Next.Docs||{};
 Doc=Next.Doc=Next.Doc||{};
 Elt=Next.Elt=Next.Elt||{};
 EltUpdater=Client.EltUpdater=Client.EltUpdater||{};
 SC$8=Global.StartupCode$WebSharper_UI_Next$Doc_Client=Global.StartupCode$WebSharper_UI_Next$Doc_Client||{};
 Flow=Next.Flow=Next.Flow||{};
 FlowBuilder=Next.FlowBuilder=Next.FlowBuilder||{};
 Html=Next.Html=Next.Html||{};
 attr=Html.attr=Html.attr||{};
 Route=Next.Route=Next.Route||{};
 Routing=Next.Routing=Next.Routing||{};
 State=Routing.State=Routing.State||{};
 RouteMap=Next.RouteMap=Next.RouteMap||{};
 Router=Next.Router=Next.Router||{};
 Input=Next.Input=Next.Input||{};
 MousePosSt=Input.MousePosSt=Input.MousePosSt||{};
 MouseBtnSt=Input.MouseBtnSt=Input.MouseBtnSt||{};
 Mouse=Input.Mouse=Input.Mouse||{};
 KeyListenerSt=Input.KeyListenerSt=Input.KeyListenerSt||{};
 Keyboard=Input.Keyboard=Input.Keyboard||{};
 SC$9=Global.StartupCode$WebSharper_UI_Next$Input=Global.StartupCode$WebSharper_UI_Next$Input||{};
 List=WebSharper&&WebSharper.List;
 Arrays=WebSharper&&WebSharper.Arrays;
 Enumerator=WebSharper&&WebSharper.Enumerator;
 Strings=WebSharper&&WebSharper.Strings;
 Char=WebSharper&&WebSharper.Char;
 Collections=WebSharper&&WebSharper.Collections;
 HashSet$1=Collections&&Collections.HashSet;
 Seq=WebSharper&&WebSharper.Seq;
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 Map=Collections&&Collections.Map;
 FSharpMap=Collections&&Collections.FSharpMap;
 List$1=Collections&&Collections.List;
 Operators=WebSharper&&WebSharper.Operators;
 Ref=WebSharper&&WebSharper.Ref;
 Lazy=WebSharper&&WebSharper.Lazy;
 Dictionary=Collections&&Collections.Dictionary;
 Int32=WebSharper&&WebSharper.Int32;
 Slice=WebSharper&&WebSharper.Slice;
 Array.mapInPlace=function(f,arr)
 {
  var i,$1;
  for(i=0,$1=arr.length-1;i<=$1;i++)arr[i]=f(arr[i]);
  return arr;
 };
 Array.ofSeqNonCopying=function(xs)
 {
  var q,o,v;
  if(xs instanceof Global.Array)
   return xs;
  else
   if(xs instanceof List.T)
    return Arrays.ofList(xs);
   else
    if(xs===null)
     return[];
    else
     {
      q=[];
      o=Enumerator.Get(xs);
      try
      {
       while(o.MoveNext())
        {
         v=q.push(o.Current());
        }
       return q;
      }
      finally
      {
       if("Dispose"in o)
        o.Dispose();
      }
     }
 };
 Array.MapTreeReduce=function(mapping,defaultValue,reduction,array)
 {
  var l;
  function loop(off,len)
  {
   var $1,l2;
   return len<=0?defaultValue:(len===1?(off>=0?off<l:false)?true:false:false)?mapping(Arrays.get(array,off)):(l2=len/2>>0,reduction(loop(off,l2),loop(off+l2,len-l2)));
  }
  l=Arrays.length(array);
  return loop(0,l);
 };
 Array.TreeReduce=function(defaultValue,reduction,array)
 {
  var l;
  function loop(off,len)
  {
   var $1,l2;
   return len<=0?defaultValue:(len===1?(off>=0?off<l:false)?true:false:false)?Arrays.get(array,off):(l2=len/2>>0,reduction(loop(off,l2),loop(off+l2,len-l2)));
  }
  l=Arrays.length(array);
  return loop(0,l);
 };
 String.isBlank=function(s)
 {
  return Strings.forall(Char.IsWhiteSpace,s);
 };
 Fresh.Id=function()
 {
  Fresh.set_counter(Fresh.counter()+1);
  return"uid"+Global.String(Fresh.counter());
 };
 Fresh.Int=function()
 {
  Fresh.set_counter(Fresh.counter()+1);
  return Fresh.counter();
 };
 Fresh.counter=function()
 {
  SC$1.$cctor();
  return SC$1.counter;
 };
 Fresh.set_counter=function($1)
 {
  SC$1.$cctor();
  SC$1.counter=$1;
 };
 HashSet.Filter=function(ok,set)
 {
  var a;
  return new HashSet$1.New$2((a=HashSet.ToArray(set),Arrays.filter(ok,a)));
 };
 HashSet.Intersect=function(a,b)
 {
  var set;
  set=new HashSet$1.New$2(HashSet.ToArray(a));
  set.IntersectWith(HashSet.ToArray(b));
  return set;
 };
 HashSet.Except=function(excluded,included)
 {
  var set;
  set=new HashSet$1.New$2(HashSet.ToArray(included));
  set.ExceptWith(HashSet.ToArray(excluded));
  return set;
 };
 HashSet.ToArray=function(set)
 {
  var arr;
  arr=Arrays.create(set.get_Count(),void 0);
  set.CopyTo(arr);
  return arr;
 };
 Dict.ToValueArray=function(d)
 {
  var arr,a;
  arr=Arrays.create(d.count,void 0);
  a=function(i,kv)
  {
   return Arrays.set(arr,i,kv.V);
  };
  (function(s)
  {
   Seq.iteri(a,s);
  }(d));
  return arr;
 };
 Dict.ToKeyArray=function(d)
 {
  var arr,a;
  arr=Arrays.create(d.count,void 0);
  a=function(i,kv)
  {
   return Arrays.set(arr,i,kv.K);
  };
  (function(s)
  {
   Seq.iteri(a,s);
  }(d));
  return arr;
 };
 Slot=Abbrev.Slot=Runtime.Class({
  GetHashCode:function()
  {
   return Unchecked.Hash(this.key(this.value));
  },
  Equals:function(o)
  {
   return Unchecked.Equals(this.key(this.value),this.key(o.get_Value()));
  },
  get_Value:function()
  {
   return this.value;
  }
 },null,Slot);
 Slot.New=Runtime.Ctor(function(key,value)
 {
  this.key=key;
  this.value=value;
 },Slot);
 Slot.Create=function(key,value)
 {
  return new Slot.New(key,value);
 };
 Async.OnError=function(e)
 {
  return Global.console.log("WebSharper UI.Next: Uncaught asynchronous exception",e);
 };
 Async.Schedule=function(f)
 {
  var a;
  a=Concurrency.Delay(function()
  {
   f();
   return Concurrency.Return(null);
  });
  Concurrency.Start(a,null);
 };
 Async.StartTo=function(comp,k)
 {
  Concurrency.StartWithContinuations(comp,k,function(e)
  {
   Async.OnError(e);
  },function(v)
  {
  },null);
 };
 MailboxState=Mailbox.MailboxState=Runtime.Class({},null,MailboxState);
 Mailbox.StartProcessor=function(procAsync)
 {
  var st;
  function work()
  {
   return Concurrency.Delay(function()
   {
    return Concurrency.Bind(procAsync,function()
    {
     var m,x;
     m=st[0];
     return Unchecked.Equals(m,1)?(st[0]=0,Concurrency.Return(null)):Unchecked.Equals(m,2)?(st[0]=1,x=work(),Concurrency.Bind(x,function()
     {
      return Concurrency.Return(null);
     })):Concurrency.Return(null);
    });
   });
  }
  st=[0];
  return function()
  {
   var m,computation;
   m=st[0];
   Unchecked.Equals(m,0)?(st[0]=1,computation=work(),Concurrency.Start(computation,null)):Unchecked.Equals(m,1)?st[0]=2:void 0;
  };
 };
 SC$1.$cctor=Runtime.Cctor(function()
 {
  SC$1.counter=0;
  SC$1.$cctor=Global.ignore;
 });
 AppendList.FromArray=function(xs)
 {
  var m;
  m=xs.length;
  return m===0?{
   $:0
  }:m===1?{
   $:1,
   $0:Arrays.get(xs,0)
  }:{
   $:3,
   $0:xs.slice()
  };
 };
 AppendList.ToArray=function(xs)
 {
  var out;
  function loop(xs$1)
  {
   if(xs$1.$==1)
    out.push(xs$1.$0);
   else
    if(xs$1.$==2)
     {
      loop(xs$1.$0);
      loop(xs$1.$1);
     }
    else
     if(xs$1.$==3)
      Arrays.iter(function(v)
      {
       out.push(v);
      },xs$1.$0);
  }
  out=[];
  loop(xs);
  return out.slice(0);
 };
 AppendList.Single=function(x)
 {
  return{
   $:1,
   $0:x
  };
 };
 AppendList.Concat=function(xs)
 {
  var x,d;
  x=Array.ofSeqNonCopying(xs);
  d=AppendList.Empty();
  return Array.TreeReduce(d,AppendList.Append,x);
 };
 AppendList.Append=function(x,y)
 {
  return x.$==0?y:y.$==0?x:{
   $:2,
   $0:x,
   $1:y
  };
 };
 AppendList.Empty=function()
 {
  SC$2.$cctor();
  return SC$2.Empty;
 };
 SC$2.$cctor=Runtime.Cctor(function()
 {
  SC$2.Empty={
   $:0
  };
  SC$2.$cctor=Global.ignore;
 });
 DomUtility.SetProperty=function(target,name,value)
 {
  return target.setProperty(name,value);
 };
 DomUtility.IterSelector=function(el,selector,f)
 {
  var l,i,$1;
  l=el.querySelectorAll(selector);
  for(i=0,$1=l.length-1;i<=$1;i++)f(l[i]);
 };
 DomUtility.ChildrenArray=function(element)
 {
  var a,i,$1,v;
  a=[];
  for(i=0,$1=element.childNodes.length-1;i<=$1;i++){
   v=a.push(element.childNodes[i]);
  }
  return a;
 };
 DomUtility.RemoveClass=function(element,cl)
 {
  var v;
  v=Global.jQuery(element).removeClass(cl);
 };
 DomUtility.AddClass=function(element,cl)
 {
  var v;
  v=Global.jQuery(element).addClass(cl);
 };
 DomUtility.InsertAt=function(parent,pos,node)
 {
  var m,v;
  !(node.parentNode===parent?pos===(m=node.nextSibling,Unchecked.Equals(m,null)?null:m):false)?v=parent.insertBefore(node,pos):void 0;
 };
 DomUtility.RemoveNode=function(parent,el)
 {
  var v;
  if(el.parentNode===parent)
   {
    v=parent.removeChild(el);
   }
 };
 DomUtility.SetStyle=function(el,name,value)
 {
  DomUtility.SetProperty(el.style,name,value);
 };
 DomUtility.SetAttr=function(el,name,value)
 {
  el.setAttribute(name,value);
 };
 DomUtility.RemoveAttr=function(el,attrName)
 {
  el.removeAttribute(attrName);
 };
 DomUtility.CreateAttr=function(name,value)
 {
  var a;
  a=DomUtility.Doc().createAttribute(name);
  a.value=value;
  return a;
 };
 DomUtility.CreateText=function(s)
 {
  return DomUtility.Doc().createTextNode(s);
 };
 DomUtility.CreateSvgElement=function(name)
 {
  return DomUtility.Doc().createElementNS("http://www.w3.org/2000/svg",name);
 };
 DomUtility.CreateElement=function(name)
 {
  return DomUtility.Doc().createElement(name);
 };
 DomUtility.Clear=function(ctx)
 {
  var v;
  while(ctx.hasChildNodes())
   {
    v=ctx.removeChild(ctx.firstChild);
   }
 };
 DomUtility.ClearAttrs=function(ctx)
 {
  var v;
  while(ctx.hasAttributes())
   {
    v=ctx.removeAttributeNode(ctx.attributes.item(0));
   }
 };
 DomUtility.AppendTo=function(ctx,node)
 {
  var v;
  v=ctx.appendChild(node);
 };
 DomUtility.Doc=function()
 {
  SC$3.$cctor();
  return SC$3.Doc;
 };
 SC$3.$cctor=Runtime.Cctor(function()
 {
  SC$3.Doc=Global.document;
  SC$3.$cctor=Global.ignore;
 });
 Trie.Empty=function()
 {
  SC$4.$cctor();
  return SC$4.Empty;
 };
 Trie.Lookup=function(trie,key)
 {
  return Trie.Look(List.ofSeq(key),trie);
 };
 Trie.Look=function(key,trie)
 {
  var $1,m;
  switch(trie.$==2?($1=trie.$0,0):trie.$==0?key.$==1?($1=[key.$0,key.$1,trie.$0],1):2:2)
  {
   case 0:
    return{
     $:0,
     $0:$1,
     $1:key
    };
    break;
   case 1:
    m=Map.TryFind($1[0],$1[2]);
    return m==null?{
     $:1
    }:Trie.Look($1[1],m.$0);
    break;
   case 2:
    return{
     $:1
    };
    break;
  }
 };
 Trie.ToArray=function(trie)
 {
  var all,v;
  all=[];
  v=Trie.Map(function()
  {
   return function(v$1)
   {
    return all.push(v$1);
   };
  },trie);
  return all.slice(0);
 };
 Trie.Mapi=function(f,trie)
 {
  var counter,next;
  counter=[0];
  next=function()
  {
   var c;
   c=counter[0];
   counter[0]=c+1;
   return c;
  };
  return Trie.Map(function(x)
  {
   return f(next(),x);
  },trie);
 };
 Trie.Map=function(f,trie)
 {
  return Trie.MapLoop(new List.T({
   $:0
  }),f,trie);
 };
 Trie.MapLoop=function(loc,f,trie)
 {
  var m;
  return trie.$==1?{
   $:1
  }:trie.$==2?{
   $:2,
   $0:(f(loc))(trie.$0)
  }:Trie.TrieBranch((m=function(k,v)
  {
   return Trie.MapLoop(List.append(loc,List.ofArray([k])),f,v);
  },function(t)
  {
   return Map.Map(m,t);
  }(trie.$0)));
 };
 Trie.Merge=function(ts)
 {
  var ts$1,m,o,m$1,c;
  ts$1=Array.ofSeqNonCopying(ts);
  m=Arrays.length(ts$1);
  return m===0?{
   $:1,
   $0:{
    $:1
   }
  }:m===1?{
   $:1,
   $0:Arrays.get(ts$1,0)
  }:Arrays.exists(Trie.IsLeaf,ts$1)?null:(o=(m$1=(c=function(a)
  {
   return a.$==0?{
    $:1,
    $0:a.$0
   }:null;
  },function(s)
  {
   return Seq.choose(c,s);
  }(ts$1)),Trie.MergeMaps(Trie.Merge,m$1)),o==null?null:{
   $:1,
   $0:Trie.TrieBranch(o.$0)
  });
 };
 Trie.IsLeaf=function(t)
 {
  return t.$==2?true:false;
 };
 Trie.MergeMaps=function(merge,maps)
 {
  var m,m$1,x,s;
  m=function(e)
  {
   return Map.OfArray(Arrays.ofSeq(e));
  };
  return function(o)
  {
   return o==null?null:{
    $:1,
    $0:m(o.$0)
   };
  }(Trie.AllSome((m$1=function(k,vs)
  {
   var m$2;
   m$2=function(v)
   {
    return[k,v];
   };
   return function(o)
   {
    return o==null?null:{
     $:1,
     $0:m$2(o.$0)
    };
   }(merge(vs));
  },function(s$1)
  {
   return Seq.map(function($1)
   {
    return m$1($1[0],$1[1]);
   },s$1);
  }(Map.ToSeq((x=Seq.collect(Map.ToSeq,maps),(s=new FSharpMap.New([]),Seq.fold(function(s$1,t)
  {
   return Trie.MultiAdd(t[0],t[1],s$1);
  },s,x))))))));
 };
 Trie.AllSome=function(xs)
 {
  var ok,e,r,m;
  e=Enumerator.Get(xs);
  r=new List$1.New$2();
  ok=true;
  while(ok?e.MoveNext():false)
   {
    m=e.Current();
    (m!=null?m.$==1:false)?r.Add(m.$0):ok=false;
   }
  return ok?{
   $:1,
   $0:r.ToArray()
  }:null;
 };
 Trie.MultiAdd=function(key,value,map)
 {
  return map.Add(key,new List.T({
   $:1,
   $0:value,
   $1:Trie.MultiFind(key,map)
  }));
 };
 Trie.MultiFind=function(key,map)
 {
  return Operators.DefaultArg(Map.TryFind(key,map),new List.T({
   $:0
  }));
 };
 Trie.Prefix=function(key,trie)
 {
  return Trie.TrieBranch(new FSharpMap.New(List.ofArray([[key,trie]])));
 };
 Trie.Leaf=function(v)
 {
  return{
   $:2,
   $0:v
  };
 };
 Trie.TrieBranch=function(xs)
 {
  return xs.get_IsEmpty()?{
   $:1
  }:{
   $:0,
   $0:xs
  };
 };
 SC$4.$cctor=Runtime.Cctor(function()
 {
  SC$4.Empty={
   $:1
  };
  SC$4.$cctor=Global.ignore;
 });
 Snap.MapAsync=function(fn,snap)
 {
  var res;
  res=Snap.Create();
  Snap.When(snap,function(v)
  {
   Async.StartTo(fn(v),function(v$1)
   {
    Snap.MarkDone(res,snap,v$1);
   });
  },Snap.Obs(res));
  return res;
 };
 Snap.SnapshotOn=function(sn1,sn2)
 {
  var res,obs;
  function cont(a)
  {
   var $1,$2,y;
   if(!Snap.IsDone(res))
    {
     $1=Snap.ValueAndForever(sn1);
     $2=Snap.ValueAndForever(sn2);
     ($1!=null?$1.$==1:false)?($2!=null?$2.$==1:false)?(y=$2.$0[0],($1.$0[1]?true:$2.$0[1])?Snap.MarkForever(res,y):Snap.MarkReady(res,y)):void 0:void 0;
    }
  }
  res=Snap.Create();
  obs=Snap.Obs(res);
  Snap.When(sn1,cont,obs);
  Snap.When(sn2,cont,function()
  {
  });
  return res;
 };
 Snap.Map3=function(fn,sn1,sn2,sn3)
 {
  var $1,$2,$3,x,y,x$1,z,x$2,y$1,z$1,y$2,z$2,res,obs;
  function cont(a)
  {
   var $4,$5,$6,x$3,y$3,z$3;
   if(!Snap.IsDone(res))
    {
     $4=Snap.ValueAndForever(sn1);
     $5=Snap.ValueAndForever(sn2);
     $6=Snap.ValueAndForever(sn3);
     ($4!=null?$4.$==1:false)?($5!=null?$5.$==1:false)?($6!=null?$6.$==1:false)?(x$3=$4.$0[0],y$3=$5.$0[0],z$3=$6.$0[0],(($4.$0[1]?$5.$0[1]:false)?$6.$0[1]:false)?Snap.MarkForever(res,fn(x$3,y$3,z$3)):Snap.MarkReady(res,fn(x$3,y$3,z$3))):void 0:void 0:void 0;
    }
  }
  $1=sn1.s;
  $2=sn2.s;
  $3=sn3.s;
  return $1.$==0?$2.$==0?$3.$==0?Snap.CreateForever(fn($1.$0,$2.$0,$3.$0)):(x=$1.$0,(y=$2.$0,Snap.Map(function(z$3)
  {
   return fn(x,y,z$3);
  },sn3))):$3.$==0?(x$1=$1.$0,(z=$3.$0,Snap.Map(function(y$3)
  {
   return fn(x$1,y$3,z);
  },sn2))):(x$2=$1.$0,Snap.Map2(function($4,$5)
  {
   return fn(x$2,$4,$5);
  },sn2,sn3)):$2.$==0?$3.$==0?(y$1=$2.$0,(z$1=$3.$0,Snap.Map(function(x$3)
  {
   return fn(x$3,y$1,z$1);
  },sn1))):(y$2=$2.$0,Snap.Map2(function($4,$5)
  {
   return fn($4,y$2,$5);
  },sn1,sn3)):$3.$==0?(z$2=$3.$0,Snap.Map2(function($4,$5)
  {
   return fn($4,$5,z$2);
  },sn1,sn2)):(res=Snap.Create(),(obs=Snap.Obs(res),(Snap.When(sn1,cont,obs),Snap.When(sn2,cont,obs),Snap.When(sn3,cont,obs),res)));
 };
 Snap.Map2Unit=function(sn1,sn2)
 {
  var $1,res,obs;
  function cont()
  {
   var $2,$3;
   if(!Snap.IsDone(res))
    {
     $2=Snap.ValueAndForever(sn1);
     $3=Snap.ValueAndForever(sn2);
     ($2!=null?$2.$==1:false)?($3!=null?$3.$==1:false)?($2.$0[1]?$3.$0[1]:false)?Snap.MarkForever(res,null):Snap.MarkReady(res,null):void 0:void 0;
    }
  }
  $1=sn2.s;
  return sn1.s.$==0?$1.$==0?Snap.CreateForever():sn2:$1.$==0?sn1:(res=Snap.Create(),(obs=Snap.Obs(res),(Snap.When(sn1,cont,obs),Snap.When(sn2,cont,obs),res)));
 };
 Snap.Map2=function(fn,sn1,sn2)
 {
  var $1,$2,x,y,res,obs;
  function cont(a)
  {
   var $3,$4,x$1,y$1;
   if(!Snap.IsDone(res))
    {
     $3=Snap.ValueAndForever(sn1);
     $4=Snap.ValueAndForever(sn2);
     ($3!=null?$3.$==1:false)?($4!=null?$4.$==1:false)?(x$1=$3.$0[0],y$1=$4.$0[0],($3.$0[1]?$4.$0[1]:false)?Snap.MarkForever(res,fn(x$1,y$1)):Snap.MarkReady(res,fn(x$1,y$1))):void 0:void 0;
    }
  }
  $1=sn1.s;
  $2=sn2.s;
  return $1.$==0?$2.$==0?Snap.CreateForever(fn($1.$0,$2.$0)):(x=$1.$0,Snap.Map(function(y$1)
  {
   return fn(x,y$1);
  },sn2)):$2.$==0?(y=$2.$0,Snap.Map(function(x$1)
  {
   return fn(x$1,y);
  },sn1)):(res=Snap.Create(),(obs=Snap.Obs(res),(Snap.When(sn1,cont,obs),Snap.When(sn2,cont,obs),res)));
 };
 Snap.MapCachedBy=function(eq,prev,fn,sn)
 {
  return Snap.Map(function(x)
  {
   var m,$1,y;
   m=prev[0];
   return((m!=null?m.$==1:false)?eq(x,m.$0[0])?($1=[m.$0[0],m.$0[1]],true):false:false)?$1[1]:(y=fn(x),(prev[0]={
    $:1,
    $0:[x,y]
   },y));
  },sn);
 };
 Snap.Map=function(fn,sn)
 {
  var m,res,g;
  m=sn.s;
  return m.$==0?Snap.CreateForever(fn(m.$0)):(res=Snap.Create(),(Snap.When(sn,(g=function(v)
  {
   Snap.MarkDone(res,sn,v);
  },function(x)
  {
   return g(fn(x));
  }),Snap.Obs(res)),res));
 };
 Snap.Sequence=function(snaps)
 {
  var snaps$1,res,w,obs,cont,a;
  snaps$1=Arrays.ofSeq(snaps);
  return snaps$1.length==0?Snap.CreateForever([]):(res=Snap.Create(),(w=[Arrays.length(snaps$1)-1],(obs=Snap.Obs(res),(cont=function()
  {
   var vs,m;
   if(w[0]===0)
    {
     vs=(m=function(s)
     {
      var m$1;
      m$1=s.s;
      return m$1.$==0?m$1.$0:m$1.$==2?m$1.$0:Operators.FailWith("value not found by View.Sequence");
     },function(a$1)
     {
      return Arrays.map(m,a$1);
     }(snaps$1));
     Arrays.forall(Snap.IsForever,snaps$1)?Snap.MarkForever(res,vs):Snap.MarkReady(res,vs);
    }
   else
    Ref.decr(w);
  },(a=function(s)
  {
   Snap.When(s,cont,obs);
  },function(a$1)
  {
   Arrays.iter(a,a$1);
  }(snaps$1),res)))));
 };
 Snap.CreateForeverAsync=function(a)
 {
  var o;
  o=Snap.Make({
   $:3,
   $0:[],
   $1:[]
  });
  Async.StartTo(a,function(v)
  {
   Snap.MarkForever(o,v);
  });
  return o;
 };
 Snap.JoinInner=function(snap)
 {
  var res,obs;
  res=Snap.Create();
  obs=Snap.Obs(res);
  Snap.When(snap,function(x)
  {
   var y;
   y=x();
   Snap.When(y,function(v)
   {
    if(Snap.IsForever(y)?Snap.IsForever(snap):false)
     Snap.MarkForever(res,v);
    else
     Snap.MarkReady(res,v);
   },obs);
   Snap.WhenObsolete(snap,Snap.Obs(y));
  },obs);
  return res;
 };
 Snap.Join=function(snap)
 {
  var res,obs;
  res=Snap.Create();
  obs=Snap.Obs(res);
  Snap.When(snap,function(x)
  {
   var y;
   y=x();
   Snap.When(y,function(v)
   {
    if(Snap.IsForever(y)?Snap.IsForever(snap):false)
     Snap.MarkForever(res,v);
    else
     Snap.MarkReady(res,v);
   },obs);
  },obs);
  return res;
 };
 Snap.ValueAndForever=function(snap)
 {
  var m;
  m=snap.s;
  return m.$==0?{
   $:1,
   $0:[m.$0,true]
  }:m.$==2?{
   $:1,
   $0:[m.$0,false]
  }:null;
 };
 Snap.WhenObsolete=function(snap,obsolete)
 {
  var m;
  m=snap.s;
  m.$==1?obsolete():m.$==2?m.$1.push(obsolete):m.$==3?m.$1.push(obsolete):void 0;
 };
 Snap.When=function(snap,avail,obsolete)
 {
  var m;
  m=snap.s;
  m.$==1?obsolete():m.$==2?(m.$1.push(obsolete),avail(m.$0)):m.$==3?(m.$0.push(avail),m.$1.push(obsolete)):avail(m.$0);
 };
 Snap.MarkDone=function(res,sn,v)
 {
  if(Snap.IsForever(sn))
   Snap.MarkForever(res,v);
  else
   Snap.MarkReady(res,v);
 };
 Snap.MarkReady=function(sn,v)
 {
  var m;
  m=sn.s;
  m.$==3?(sn.s={
   $:2,
   $0:v,
   $1:m.$1
  },Seq.iter(function(k)
  {
   k(v);
  },m.$0)):void 0;
 };
 Snap.Obs=function(sn)
 {
  return function()
  {
   Snap.MarkObsolete(sn);
  };
 };
 Snap.MarkObsolete=function(sn)
 {
  var m,$1;
  m=sn.s;
  (m.$==1?true:m.$==2?($1=m.$1,false):m.$==3?($1=m.$1,false):true)?void 0:(sn.s={
   $:1
  },Seq.iter(function(k)
  {
   k();
  },$1));
 };
 Snap.MarkForever=function(sn,v)
 {
  var m;
  m=sn.s;
  m.$==3?(sn.s={
   $:0,
   $0:v
  },Seq.iter(function(k)
  {
   k(v);
  },m.$0)):void 0;
 };
 Snap.IsDone=function(snap)
 {
  var m;
  m=snap.s;
  return m.$==0?true:m.$==2?true:false;
 };
 Snap.IsObsolete=function(snap)
 {
  return snap.s.$==1?true:false;
 };
 Snap.IsForever=function(snap)
 {
  return snap.s.$==0?true:false;
 };
 Snap.CreateWithValue=function(v)
 {
  return Snap.Make({
   $:2,
   $0:v,
   $1:[]
  });
 };
 Snap.CreateForever=function(v)
 {
  return Snap.Make({
   $:0,
   $0:v
  });
 };
 Snap.Create=function()
 {
  return Snap.Make({
   $:3,
   $0:[],
   $1:[]
  });
 };
 Snap.Make=function(st)
 {
  return{
   s:st
  };
 };
 Var=Next.Var=Runtime.Class({
  RId:function()
  {
   return"uinref"+Global.String(this.i);
  },
  RView:function()
  {
   return this.v;
  },
  RUpdM:function(f)
  {
   var m;
   m=f(this.c);
   (m!=null?m.$==1:false)?Var.Set(this,m.$0):void 0;
  },
  RUpd:function(f)
  {
   Var.Update(this,f);
  },
  set_RVal:function(v)
  {
   Var.Set(this,v);
  },
  RVal:function()
  {
   return this.c;
  },
  RSet:function(v)
  {
   Var.Set(this,v);
  },
  RGet:function()
  {
   return this.c;
  }
 },null,Var);
 Var.New=function(Const,Current,Snap$1,Id,VarView)
 {
  return new Var({
   o:Const,
   c:Current,
   s:Snap$1,
   i:Id,
   v:VarView
  });
 };
 Var.Lens=function(iref,get,update)
 {
  var id,view,a;
  id=Fresh.Id();
  view=(a=iref.RView(),View.Map(get,a));
  return{
   RId:function()
   {
    return id;
   },
   RView:function()
   {
    return view;
   },
   RUpdM:function(f)
   {
    return iref.RUpdM(function(t)
    {
     var x;
     x=f(get(t));
     return x==null?null:{
      $:1,
      $0:update(t,x.$0)
     };
    });
   },
   RUpd:function(f)
   {
    return iref.RUpd(function(t)
    {
     return update(t,f(get(t)));
    });
   },
   set_RVal:function(v)
   {
    return iref.RUpd(function(t)
    {
     return update(t,v);
    });
   },
   RVal:function()
   {
    return get(iref.RGet());
   },
   RSet:function(v)
   {
    return iref.RUpd(function(t)
    {
     return update(t,v);
    });
   },
   RGet:function()
   {
    return get(iref.RGet());
   }
  };
 };
 Var.Update=function(_var,fn)
 {
  var a;
  a=fn(_var.c);
  Var.Set(_var,a);
 };
 Var.SetFinal=function(_var,value)
 {
  if(_var.o)
   (function($1)
   {
    return $1("WebSharper UI.Next: invalid attempt to change value of a Var after calling SetFinal");
   }(function(s)
   {
    Global.console.log(s);
   }));
  else
   {
    Snap.MarkObsolete(_var.s);
    _var.o=true;
    _var.c=value;
    _var.s=Snap.CreateForever(value);
   }
 };
 Var.Set=function(_var,value)
 {
  if(_var.o)
   (function($1)
   {
    return $1("WebSharper UI.Next: invalid attempt to change value of a Var after calling SetFinal");
   }(function(s)
   {
    Global.console.log(s);
   }));
  else
   {
    Snap.MarkObsolete(_var.s);
    _var.c=value;
    _var.s=Snap.CreateWithValue(value);
   }
 };
 Var.Create=function()
 {
  var _var;
  _var=null;
  _var=Var.New(false,null,Snap.CreateWithValue(),Fresh.Int(),function()
  {
   return _var.s;
  });
  return _var;
 };
 Var.Create$1=function(v)
 {
  var _var;
  _var=null;
  _var=Var.New(false,v,Snap.CreateWithValue(v),Fresh.Int(),function()
  {
   return _var.s;
  });
  return _var;
 };
 View.get_Do=function()
 {
  return{
   $:0
  };
 };
 View.Apply=function(fn,view)
 {
  return View.Map2(function(f,x)
  {
   return f(x);
  },fn,view);
 };
 View.AsyncAwait=function(filter,view)
 {
  var a;
  a=function(ok)
  {
   var r,remove;
   function r$1()
   {
    return View.RemovableSink(function(value)
    {
     if(filter(value))
      {
       (Lazy.Force(r))();
       ok(value);
      }
    },view);
   }
   r=Lazy.Create(r$1);
   remove=Lazy.Force(r);
  };
  return Concurrency.FromContinuations(function($1,$2,$3)
  {
   return a.apply(null,[$1,$2,$3]);
  });
 };
 View.RemovableSink=function(act,a)
 {
  var cont;
  function loop()
  {
   var sn;
   sn=a();
   Snap.When(sn,function(x)
   {
    if(cont[0])
     act(x);
   },function()
   {
    if(cont[0])
     Async.Schedule(loop);
   });
  }
  cont=[true];
  Async.Schedule(loop);
  return function()
  {
   cont[0]=false;
  };
 };
 View.Sink=function(act,a)
 {
  function loop()
  {
   var sn;
   sn=a();
   Snap.When(sn,act,function()
   {
    Async.Schedule(loop);
   });
  }
  Async.Schedule(loop);
 };
 View.TryFinally=function(f,a)
 {
  return View.CreateLazy(function()
  {
   try
   {
    return a();
   }
   finally
   {
    f();
   }
  });
 };
 View.TryWith=function(f,a)
 {
  return View.CreateLazy(function()
  {
   try
   {
    return a();
   }
   catch(exn)
   {
    return(f(exn))();
   }
  });
 };
 View.ConstAsync=function(a)
 {
  var o;
  o=Snap.CreateForeverAsync(a);
  return function()
  {
   return o;
  };
 };
 View.Const=function(x)
 {
  var o;
  o=Snap.CreateForever(x);
  return function()
  {
   return o;
  };
 };
 View.Sequence=function(views)
 {
  return View.CreateLazy(function()
  {
   var m;
   return Snap.Sequence((m=function(a)
   {
    return a();
   },function(s)
   {
    return Seq.map(m,s);
   }(views)));
  });
 };
 View.UpdateWhile=function(def,v1,v2)
 {
  var value;
  value=[def];
  return View.BindInner(function(pred)
  {
   return pred?View.Map(function(v)
   {
    value[0]=v;
    return v;
   },v2):View.Const(value[0]);
  },v1);
 };
 View.BindInner=function(fn,view)
 {
  return View.JoinInner(View.Map(fn,view));
 };
 View.JoinInner=function(a)
 {
  return View.CreateLazy(function()
  {
   return Snap.JoinInner(a());
  });
 };
 View.Bind=function(fn,view)
 {
  return View.Join(View.Map(fn,view));
 };
 View.Join=function(a)
 {
  return View.CreateLazy(function()
  {
   return Snap.Join(a());
  });
 };
 View.MapSeqCachedView=function(conv,view)
 {
  var a;
  a=function()
  {
   return conv;
  };
  return View.MapSeqCachedViewBy(Global.id,function($1,$2)
  {
   return(a($1))($2);
  },view);
 };
 View.MapSeqCachedViewBy=function(key,conv,view)
 {
  var state,a;
  state=[new Dictionary.New$5()];
  a=function(xs)
  {
   var prevState,newState,result,f;
   prevState=state[0];
   newState=new Dictionary.New$5();
   result=(f=function(x)
   {
    var k,node,n;
    k=key(x);
    node=prevState.ContainsKey(k)?(n=prevState.get_Item(k),(Var.Set(n.r,x),n)):View.ConvertSeqNode(function(v)
    {
     return conv(k,v);
    },x);
    newState.set_Item(k,node);
    return node.e;
   },function(a$1)
   {
    return Array.mapInPlace(f,a$1);
   }(Arrays.ofSeq(xs)));
   state[0]=newState;
   return result;
  };
  return function(a$1)
  {
   return View.Map(a,a$1);
  }(view);
 };
 View.ConvertSeqNode=function(conv,value)
 {
  var _var,view;
  _var=Var.Create$1(value);
  view=_var.v;
  return{
   e:conv(view),
   r:_var,
   w:view
  };
 };
 View.MapSeqCached=function(conv,view)
 {
  return View.MapSeqCachedBy(Global.id,conv,view);
 };
 View.MapSeqCachedBy=function(key,conv,view)
 {
  var state,a;
  state=[new Dictionary.New$5()];
  a=function(xs)
  {
   var prevState,newState,result,f;
   prevState=state[0];
   newState=new Dictionary.New$5();
   result=(f=function(x)
   {
    var k,res;
    k=key(x);
    res=prevState.ContainsKey(k)?prevState.get_Item(k):conv(x);
    newState.set_Item(k,res);
    return res;
   },function(a$1)
   {
    return Array.mapInPlace(f,a$1);
   }(Arrays.ofSeq(xs)));
   state[0]=newState;
   return result;
  };
  return function(a$1)
  {
   return View.Map(a,a$1);
  }(view);
 };
 View.SnapshotOn=function(def,a,a$1)
 {
  var sInit;
  sInit=Snap.CreateWithValue(def);
  return View.CreateLazy(function()
  {
   var s1,s2;
   s1=a();
   return Snap.IsObsolete(sInit)?(s2=a$1(),Snap.SnapshotOn(s1,s2)):(Snap.WhenObsolete(s1,Snap.Obs(sInit)),sInit);
  });
 };
 View.GetAsync=function(v)
 {
  return Concurrency.FromContinuations(function(ok)
  {
   return View.Get(ok,v);
  });
 };
 View.Get=function(f,a)
 {
  var ok;
  function obs()
  {
   Snap.When(a(),function(v)
   {
    if(!ok[0])
     {
      ok[0]=true;
      f(v);
     }
   },function()
   {
    if(!ok[0])
     obs();
   });
  }
  ok=[false];
  obs();
 };
 View.MapAsync2=function(fn,v1,v2)
 {
  var a;
  a=Global.id;
  return function(a$1)
  {
   return View.MapAsync(a,a$1);
  }(View.Map2(fn,v1,v2));
 };
 View.MapAsync=function(fn,a)
 {
  return View.CreateLazy(function()
  {
   var a$1;
   a$1=a();
   return Snap.MapAsync(fn,a$1);
  });
 };
 View.Map3=function(fn,a,a$1,a$2)
 {
  return View.CreateLazy(function()
  {
   var s1,s2,s3;
   s1=a();
   s2=a$1();
   s3=a$2();
   return Snap.Map3(fn,s1,s2,s3);
  });
 };
 View.Map2Unit=function(a,a$1)
 {
  return View.CreateLazy(function()
  {
   var s1,s2;
   s1=a();
   s2=a$1();
   return Snap.Map2Unit(s1,s2);
  });
 };
 View.Map2=function(fn,a,a$1)
 {
  return View.CreateLazy(function()
  {
   var s1,s2;
   s1=a();
   s2=a$1();
   return Snap.Map2(fn,s1,s2);
  });
 };
 View.MapCached=function(fn,v)
 {
  return View.MapCachedBy(Unchecked.Equals,fn,v);
 };
 View.MapCachedBy=function(eq,fn,a)
 {
  var vref;
  vref=[null];
  return View.CreateLazy(function()
  {
   var a$1;
   a$1=a();
   return Snap.MapCachedBy(eq,vref,fn,a$1);
  });
 };
 View.Map=function(fn,a)
 {
  return View.CreateLazy(function()
  {
   var a$1;
   a$1=a();
   return Snap.Map(fn,a$1);
  });
 };
 View.CreateLazy=function(observe)
 {
  var lv;
  lv={
   c:null,
   o:observe
  };
  return function()
  {
   var c;
   c=lv.c;
   return c===null?(c=lv.o(),lv.c=c,Snap.IsForever(c)?lv.o=null:Snap.WhenObsolete(c,function()
   {
    lv.c=null;
   }),c):c;
  };
 };
 Submitter=Next.Submitter=Runtime.Class({
  Trigger:function()
  {
   Var.Set(this["var"],null);
  }
 },null,Submitter);
 Submitter.New=Runtime.Ctor(function(input,init)
 {
  this.input=input;
  this["var"]=Var.Create();
  this.view=View.SnapshotOn(init,this["var"].v,this.input);
 },Submitter);
 Submitter.CreateOption=function(input)
 {
  return new Submitter.New(View.Map(function(a)
  {
   return{
    $:1,
    $0:a
   };
  },input),null);
 };
 Key.Fresh=function()
 {
  return{
   $:0,
   $0:Fresh.Int()
  };
 };
 Model=Next.Model=Runtime.Class({},null,Model);
 Model.New=Runtime.Ctor(function(proj,init)
 {
  var _var,view;
  _var=Var.Create$1(init);
  view=View.Map(proj,_var.v);
  Model.New$1.call(this,_var,view);
 },Model);
 Model.New$1=Runtime.Ctor(function(_var,view)
 {
  this["var"]=_var;
  this.view=view;
 },Model);
 Model.Update=function(update,m)
 {
  Var.Update(m["var"],function(x)
  {
   update(x);
   return x;
  });
 };
 Model.Create=function(proj,init)
 {
  return new Model.New(proj,init);
 };
 Serializer.Default=function()
 {
  SC$5.$cctor();
  return SC$5.Default;
 };
 ArrayStorage=Storage.ArrayStorage=Runtime.Class({
  SSet:function(coll)
  {
   return Arrays.ofSeq(coll);
  },
  SSetAt:function(idx,elem,arr)
  {
   Arrays.set(arr,idx,elem);
   return arr;
  },
  SRemoveIf:function(pred,arr)
  {
   var g;
   return Arrays.filter((g=function(v)
   {
    return!v;
   },function(x)
   {
    return g(pred(x));
   }),arr);
  },
  SInit:function()
  {
   return this.init;
  },
  SPrependMany:function(is,arr)
  {
   var v;
   v=arr.unshift.apply(arr,Array.ofSeqNonCopying(is));
   return arr;
  },
  SPrepend:function(i,arr)
  {
   var v;
   v=arr.unshift(i);
   return arr;
  },
  SAppendMany:function(is,arr)
  {
   var v;
   v=arr.push.apply(arr,Array.ofSeqNonCopying(is));
   return arr;
  },
  SAppend:function(i,arr)
  {
   var v;
   v=arr.push(i);
   return arr;
  }
 },null,ArrayStorage);
 ArrayStorage.New=Runtime.Ctor(function(init)
 {
  this.init=init;
 },ArrayStorage);
 LocalStorageBackend=Storage.LocalStorageBackend=Runtime.Class({
  clear:function()
  {
   this.storage.removeItem(this.id);
  },
  set:function(arr)
  {
   var a,m;
   this.storage.setItem(this.id,(a=(m=this.serializer.Encode,function(a$1)
   {
    return Arrays.map(m,a$1);
   }(arr)),Global.JSON.stringify(a)));
   return arr;
  },
  SSet:function(coll)
  {
   return this.set(Arrays.ofSeq(coll));
  },
  SSetAt:function(idx,elem,arr)
  {
   Arrays.set(arr,idx,elem);
   return this.set(arr);
  },
  SRemoveIf:function(pred,arr)
  {
   var g;
   return this.set(Arrays.filter((g=function(v)
   {
    return!v;
   },function(x)
   {
    return g(pred(x));
   }),arr));
  },
  SInit:function()
  {
   var item,arr,m;
   item=this.storage.getItem(this.id);
   if(item===null)
    return[];
   else
    try
    {
     arr=Global.JSON.parse(item);
     m=this.serializer.Decode;
     return function(a)
     {
      return Arrays.map(m,a);
     }(arr);
    }
    catch(m$1)
    {
     return[];
    }
  },
  SPrependMany:function(is,arr)
  {
   var v;
   v=arr.unshift.apply(arr,Array.ofSeqNonCopying(is));
   return this.set(arr);
  },
  SPrepend:function(i,arr)
  {
   var v;
   v=arr.unshift(i);
   return this.set(arr);
  },
  SAppendMany:function(is,arr)
  {
   var v;
   v=arr.push.apply(arr,Array.ofSeqNonCopying(is));
   return this.set(arr);
  },
  SAppend:function(i,arr)
  {
   var v;
   v=arr.push(i);
   return this.set(arr);
  }
 },null,LocalStorageBackend);
 LocalStorageBackend.New=Runtime.Ctor(function(id,serializer)
 {
  this.id=id;
  this.serializer=serializer;
  this.storage=Global.window.localStorage;
 },LocalStorageBackend);
 Storage.LocalStorage=function(id,serializer)
 {
  return new LocalStorageBackend.New(id,serializer);
 };
 Storage.InMemory=function(init)
 {
  return new ArrayStorage.New(init);
 };
 ListModel=Next.ListModel=Runtime.Class({
  Wrap:function(extract,wrap,update)
  {
   var a;
   a=function($1,$2)
   {
    return update($1,$2);
   };
   return ListModel.Wrap(this,extract,wrap,function($1,$2)
   {
    return a($1,$2);
   });
  },
  Lens:function(key)
  {
   var a;
   a=function(a$1,x)
   {
    return x;
   };
   return this.LensInto(Global.id,function($1,$2)
   {
    return a($1,$2);
   },key);
  },
  LensInto:function(get,update,key)
  {
   var $this,id,view,a;
   $this=this;
   id=Fresh.Id();
   view=(a=this.FindByKeyAsView(key),View.Map(get,a));
   return{
    RId:function()
    {
     return id;
    },
    RView:function()
    {
     return view;
    },
    RUpdM:function(f)
    {
     return $this.UpdateBy(function(i)
     {
      var x;
      x=f(get(i));
      return x==null?null:{
       $:1,
       $0:update(i,x.$0)
      };
     },key);
    },
    RUpd:function(f)
    {
     return $this.UpdateBy(function(i)
     {
      return{
       $:1,
       $0:update(i,f(get(i)))
      };
     },key);
    },
    set_RVal:function(v)
    {
     return this.RSet(v);
    },
    RVal:function()
    {
     return this.RGet();
    },
    RSet:function(v)
    {
     return $this.UpdateBy(function(i)
     {
      return{
       $:1,
       $0:update(i,v)
      };
     },key);
    },
    RGet:function()
    {
     return get($this.FindByKey(key));
    }
   };
  },
  get_LengthAsView:function()
  {
   var a;
   a=this["var"].RView();
   return View.Map(Arrays.length,a);
  },
  get_Length:function()
  {
   return Arrays.length(this["var"].RVal());
  },
  Clear:function()
  {
   this["var"].set_RVal(this.storage.SSet([]));
   this.ObsoleteAll();
  },
  UpdateBy:function(fn,key)
  {
   var $this,v,m,index,m$1;
   $this=this;
   v=this["var"].RVal();
   m=Arrays.tryFindIndex(function(it)
   {
    return Unchecked.Equals($this.key(it),key);
   },v);
   (m!=null?m.$==1:false)?(index=m.$0,m$1=fn(Arrays.get(v,index)),(m$1!=null?m$1.$==1:false)?(this["var"].set_RVal(this.storage.SSetAt(index,m$1.$0,v)),this.ObsoleteKey(key)):void 0):void 0;
  },
  UpdateAll:function(fn)
  {
   var $this;
   $this=this;
   this["var"].RUpd(function(a)
   {
    var a$1;
    a$1=function(i,x)
    {
     var a$2;
     a$2=function(y)
     {
      Arrays.set(a,i,y);
     };
     return function(o)
     {
      if(o==null)
       ;
      else
       a$2(o.$0);
     }(fn(x));
    };
    (function(a$2)
    {
     Arrays.iteri(a$1,a$2);
    }(a));
    return $this.storage.SSet(a);
   });
   this.ObsoleteAll();
  },
  FindByKeyAsView:function(key)
  {
   var a;
   a=function(o)
   {
    return o.$0;
   };
   return function(a$1)
   {
    return View.Map(a,a$1);
   }(this.TryFindByKeyAsView(key));
  },
  TryFindByKeyAsView:function(key)
  {
   var $this;
   $this=this;
   return function()
   {
    var m,o,it,sn;
    m=(o=null,[$this.it.TryGetValue(key,{
     get:function()
     {
      return o;
     },
     set:function(v)
     {
      o=v;
     }
    }),o]);
    return m[0]?m[1]:(it=$this.TryFindByKey(key),(sn=Snap.CreateWithValue(it),($this.it.Add(key,sn),sn)));
   };
  },
  TryFindByKey:function(key)
  {
   var $this;
   $this=this;
   return Arrays.tryFind(function(it)
   {
    return Unchecked.Equals($this.key(it),key);
   },this["var"].RVal());
  },
  FindByKey:function(key)
  {
   var $this;
   $this=this;
   return Arrays.find(function(it)
   {
    return Unchecked.Equals($this.key(it),key);
   },this["var"].RVal());
  },
  TryFindAsView:function(pred)
  {
   var a;
   a=function(a$1)
   {
    return Arrays.tryFind(pred,a$1);
   };
   return function(a$1)
   {
    return View.Map(a,a$1);
   }(this["var"].RView());
  },
  FindAsView:function(pred)
  {
   var a;
   a=function(a$1)
   {
    return Arrays.find(pred,a$1);
   };
   return function(a$1)
   {
    return View.Map(a,a$1);
   }(this["var"].RView());
  },
  TryFind:function(pred)
  {
   return Arrays.tryFind(pred,this["var"].RVal());
  },
  Find:function(pred)
  {
   return Arrays.find(pred,this["var"].RVal());
  },
  ContainsKeyAsView:function(key)
  {
   var $this,a,p;
   $this=this;
   a=(p=function(it)
   {
    return Unchecked.Equals($this.key(it),key);
   },function(a$1)
   {
    return Arrays.exists(p,a$1);
   });
   return function(a$1)
   {
    return View.Map(a,a$1);
   }(this["var"].RView());
  },
  ContainsKey:function(key)
  {
   var $this;
   $this=this;
   return Arrays.exists(function(it)
   {
    return Unchecked.Equals($this.key(it),key);
   },this["var"].RVal());
  },
  Set:function(lst)
  {
   this["var"].set_RVal(this.storage.SSet(lst));
   this.ObsoleteAll();
  },
  Iter:function(fn)
  {
   Arrays.iter(fn,this["var"].RVal());
  },
  RemoveByKey:function(key)
  {
   var $this,a;
   $this=this;
   this["var"].set_RVal((a=this["var"].RVal(),this.storage.SRemoveIf(function(i)
   {
    return Unchecked.Equals($this.key(i),key);
   },a)));
   this.ObsoleteKey(key);
  },
  RemoveBy:function(f)
  {
   var a,i,$1,v;
   a=this["var"].RVal();
   for(i=0,$1=a.length-1;i<=$1;i++){
    v=Arrays.get(a,i);
    f(v)?this.ObsoleteKey(this.key(v)):void 0;
   }
   this["var"].set_RVal(this.storage.SRemoveIf(f,this["var"].RVal()));
  },
  Remove:function(item)
  {
   var $this,v,keyFn,k;
   $this=this;
   v=this["var"].RVal();
   ListModels.Contains($this.key,item,v)?(keyFn=$this.key,k=keyFn(item),this["var"].set_RVal(this.storage.SRemoveIf(function(i)
   {
    return Unchecked.Equals(keyFn(i),k);
   },v)),this.ObsoleteKey(k)):void 0;
  },
  PrependMany:function(items)
  {
   var $this,toPrepend,x,f;
   $this=this;
   toPrepend=new List$1.New$2();
   this["var"].set_RVal(this.storage.SPrependMany(toPrepend,(x=this["var"].RVal(),((f=function(v,item)
   {
    var t,m;
    t=$this.key(item);
    $this.ObsoleteKey(t);
    m=Arrays.tryFindIndex(function(it)
    {
     return Unchecked.Equals($this.key(it),t);
    },v);
    return m==null?(toPrepend.Add(item),v):$this.storage.SSetAt(m.$0,item,v);
   },(Runtime.Curried3(Seq.fold))(f))(x))(items))));
  },
  Prepend:function(item)
  {
   var $this,v,t,m;
   $this=this;
   v=this["var"].RVal();
   t=this.key(item);
   m=Arrays.tryFindIndex(function(it)
   {
    return Unchecked.Equals($this.key(it),t);
   },v);
   (m!=null?m.$==1:false)?this["var"].set_RVal(this.storage.SSetAt(m.$0,item,v)):this["var"].set_RVal(this.storage.SPrepend(item,v));
   this.ObsoleteKey(t);
  },
  AppendMany:function(items)
  {
   var $this,toAppend,x,f;
   $this=this;
   toAppend=new List$1.New$2();
   this["var"].set_RVal(this.storage.SAppendMany(toAppend,(x=this["var"].RVal(),((f=function(v,item)
   {
    var t,m;
    t=$this.key(item);
    $this.ObsoleteKey(t);
    m=Arrays.tryFindIndex(function(it)
    {
     return Unchecked.Equals($this.key(it),t);
    },v);
    return m==null?(toAppend.Add(item),v):$this.storage.SSetAt(m.$0,item,v);
   },(Runtime.Curried3(Seq.fold))(f))(x))(items))));
  },
  Append:function(item)
  {
   var $this,v,t,m;
   $this=this;
   v=this["var"].RVal();
   t=this.key(item);
   m=Arrays.tryFindIndex(function(it)
   {
    return Unchecked.Equals($this.key(it),t);
   },v);
   (m!=null?m.$==1:false)?this["var"].set_RVal(this.storage.SSetAt(m.$0,item,v)):this["var"].set_RVal(this.storage.SAppend(item,v));
   this.ObsoleteKey(t);
  },
  ObsoleteAll:function()
  {
   var a;
   a=function(ksn)
   {
    Snap.MarkObsolete(ksn.V);
   };
   (function(s)
   {
    Seq.iter(a,s);
   }(this.it));
   this.it.Clear();
  },
  ObsoleteKey:function(key)
  {
   var m,o,v;
   m=(o=null,[this.it.TryGetValue(key,{
    get:function()
    {
     return o;
    },
    set:function(v$1)
    {
     o=v$1;
    }
   }),o]);
   m[0]?(Snap.MarkObsolete(m[1]),v=this.it.Remove(key)):void 0;
  },
  GetEnumerator0:function()
  {
   return Enumerator.Get0(this["var"].RVal());
  },
  GetEnumerator:function()
  {
   return Enumerator.Get(this["var"].RVal());
  }
 },null,ListModel);
 ListModel.New=Runtime.Ctor(function(key,storage)
 {
  var _var;
  _var=Var.Create$1(Arrays.ofSeq(Seq.distinctBy(key,storage.SInit())));
  ListModel.New$3.call(this,key,_var,storage);
 },ListModel);
 ListModel.New$1=Runtime.Ctor(function(key)
 {
  ListModel.New$2.call(this,key,[]);
 },ListModel);
 ListModel.New$2=Runtime.Ctor(function(key,init)
 {
  var init$1;
  init$1=Arrays.ofSeq(init);
  ListModel.New$3.call(this,key,Var.Create$1(init$1),Storage.InMemory(init$1));
 },ListModel);
 ListModel.New$3=Runtime.Ctor(function(key,_var,storage)
 {
  var v;
  this.key=key;
  this["var"]=_var;
  this.storage=storage;
  this.v=(v=this["var"].RView(),View.Map(function(x)
  {
   return x.slice();
  },v));
  this.it=new Dictionary.New$5();
 },ListModel);
 ListModels.Contains=function(keyFn,item,xs)
 {
  var t;
  t=keyFn(item);
  return Arrays.exists(function(it)
  {
   return Unchecked.Equals(keyFn(it),t);
  },xs);
 };
 ListModel.Wrap=function(underlying,extract,createItem,updateItem)
 {
  var state,init,m,_var,o,a;
  state=[new Dictionary.New$5()];
  init=(m=function(u)
  {
   var t;
   t=createItem(u);
   state[0].set_Item(underlying.key(u),t);
   return t;
  },function(a$1)
  {
   return Arrays.map(m,a$1);
  }(underlying["var"].RVal()));
  _var=(o=underlying["var"],(a=function(us)
  {
   var newState,ts,m$1;
   newState=new Dictionary.New$5();
   ts=(m$1=function(u)
   {
    var k,t;
    k=underlying.key(u);
    t=state[0].ContainsKey(k)?updateItem(state[0].get_Item(k),u):createItem(u);
    newState.set_Item(k,t);
    return t;
   },function(a$1)
   {
    return Arrays.map(m$1,a$1);
   }(us));
   state[0]=newState;
   return ts;
  },function(a$1)
  {
   return Var.Lens(o,a,function($1,$2)
   {
    return(a$1($1))($2);
   });
  })(function()
  {
   return function(ts)
   {
    var newState,us,m$1;
    newState=new Dictionary.New$5();
    us=(m$1=function(t)
    {
     var u;
     u=extract(t);
     newState.set_Item(underlying.key(u),t);
     return u;
    },function(a$1)
    {
     return Arrays.map(m$1,a$1);
    }(ts));
    state[0]=newState;
    return us;
   };
  }));
  return new ListModel.New$3(function(d)
  {
   var g;
   g=underlying.key;
   return function(x)
   {
    return g(extract(x));
   }(d);
  },_var,Storage.InMemory(init));
 };
 ListModel.FromSeq=function(init)
 {
  return ListModel.Create(Global.id,init);
 };
 ListModel.Create=function(key,init)
 {
  var a;
  a=Storage.InMemory(Arrays.ofSeq(init));
  return ListModel.CreateWithStorage(key,a);
 };
 ListModel.CreateWithStorage=function(key,storage)
 {
  return new ListModel.New(key,storage);
 };
 SC$5.$cctor=Runtime.Cctor(function()
 {
  SC$5.Default={
   Encode:Global.id,
   Decode:Global.id
  };
  SC$5.$cctor=Global.ignore;
 });
 ReactiveExtensions=Next.ReactiveExtensions=Runtime.Class({},null,ReactiveExtensions);
 ReactiveExtensions.New=Runtime.Ctor(function()
 {
 },ReactiveExtensions);
 DoubleInterpolation=Next.DoubleInterpolation=Runtime.Class({
  Interpolate:function(t,x,y)
  {
   return x+t*(y-x);
  }
 },null,DoubleInterpolation);
 Interpolation.get_Double=function()
 {
  return new DoubleInterpolation({
   $:0
  });
 };
 Easing=Next.Easing=Runtime.Class({
  TransformTime:function(t)
  {
   return this.transformTime(t);
  }
 },null,Easing);
 Easing.get_CubicInOut=function()
 {
  return Easings.CubicInOut();
 };
 Easing.Custom=function(f)
 {
  return new Easing.New(f);
 };
 Easing.New=Runtime.Ctor(function(transformTime)
 {
  this.transformTime=transformTime;
 },Easing);
 Easings.CubicInOut=function()
 {
  SC$6.$cctor();
  return SC$6.CubicInOut;
 };
 An.get_Empty=function()
 {
  return{
   $:0,
   $0:AppendList.Empty()
  };
 };
 An.WhenDone=function(f,main)
 {
  var a;
  a={
   $:0,
   $0:AppendList.Single({
    $:0,
    $0:f
   })
  };
  return function(a$1)
  {
   return An.Append(a,a$1);
  }(main);
 };
 An.Run=function(k,anim)
 {
  var dur,a;
  dur=anim.Duration;
  a=function(ok)
  {
   var v;
   function loop(start,now)
   {
    var t,v$1;
    t=now-start;
    anim.Compute(t);
    k();
    return t<=dur?(v$1=Global.requestAnimationFrame(function(t$1)
    {
     loop(start,t$1);
    }),void 0):ok();
   }
   v=Global.requestAnimationFrame(function(t)
   {
    loop(t,t);
   });
  };
  return Concurrency.FromContinuations(function($1,$2,$3)
  {
   return a.apply(null,[$1,$2,$3]);
  });
 };
 An.Play=function(anim)
 {
  return Concurrency.Delay(function()
  {
   var x,a;
   x=(a=function()
   {
   },function(a$1)
   {
    return An.Run(a,a$1);
   }(Anims.Actions(anim)));
   return Concurrency.Bind(x,function()
   {
    Anims.Finalize(anim);
    return Concurrency.Return(null);
   });
  });
 };
 An.Pack=function(anim)
 {
  return{
   $:0,
   $0:AppendList.Single({
    $:1,
    $0:anim
   })
  };
 };
 An.Map=function(f,anim)
 {
  var f$1;
  return Anims.Def(anim.Duration,(f$1=anim.Compute,function(x)
  {
   return f(f$1(x));
  }));
 };
 An.Delayed=function(inter,easing,dur,delay,x,y)
 {
  return{
   Compute:function(t)
   {
    return t<=delay?x:inter.Interpolate(easing.TransformTime((t-delay)/dur),x,y);
   },
   Duration:dur+delay
  };
 };
 An.Simple=function(inter,easing,dur,x,y)
 {
  return{
   Compute:function(t)
   {
    return inter.Interpolate(easing.TransformTime(t/dur),x,y);
   },
   Duration:dur
  };
 };
 An.Const=function(v)
 {
  return Anims.Const(v);
 };
 An.Concat=function(xs)
 {
  return{
   $:0,
   $0:AppendList.Concat(Seq.map(Anims.List,xs))
  };
 };
 An.Append=function(a,a$1)
 {
  return{
   $:0,
   $0:AppendList.Append(a.$0,a$1.$0)
  };
 };
 An.set_UseAnimations=function(v)
 {
  Anims.set_UseAnimations(v);
 };
 An.get_UseAnimations=function()
 {
  return Anims.UseAnimations();
 };
 Anims.UseAnimations=function()
 {
  SC$6.$cctor();
  return SC$6.UseAnimations;
 };
 Anims.set_UseAnimations=function($1)
 {
  SC$6.$cctor();
  SC$6.UseAnimations=$1;
 };
 Anims.Actions=function(a)
 {
  var c;
  return Anims.ConcatActions((c=function(a$1)
  {
   return a$1.$==1?{
    $:1,
    $0:a$1.$0
   }:null;
  },function(a$1)
  {
   return Arrays.choose(c,a$1);
  }(AppendList.ToArray(a.$0))));
 };
 Anims.ConcatActions=function(xs)
 {
  var xs$1,m,dur,m$1,xs$2;
  xs$1=Array.ofSeqNonCopying(xs);
  m=Arrays.length(xs$1);
  return m===0?Anims.Const():m===1?Arrays.get(xs$1,0):(dur=Seq.max((m$1=function(anim)
  {
   return anim.Duration;
  },function(s)
  {
   return Seq.map(m$1,s);
  }(xs$1))),(xs$2=Arrays.map(function(a)
  {
   return Anims.Prolong(dur,a);
  },xs$1),Anims.Def(dur,function(t)
  {
   Arrays.iter(function(anim)
   {
    anim.Compute(t);
   },xs$2);
  })));
 };
 Anims.Prolong=function(nextDuration,anim)
 {
  var comp,dur,last;
  comp=anim.Compute;
  dur=anim.Duration;
  last=Lazy.Create(function()
  {
   return anim.Compute(anim.Duration);
  });
  return{
   Compute:function(t)
   {
    return t>=dur?last.f():comp(t);
   },
   Duration:nextDuration
  };
 };
 Anims.Const=function(v)
 {
  return Anims.Def(0,function()
  {
   return v;
  });
 };
 Anims.Def=function(d,f)
 {
  return{
   Compute:f,
   Duration:d
  };
 };
 Anims.Finalize=function(a)
 {
  var a$1;
  a$1=function(a$2)
  {
   if(a$2.$==0)
    a$2.$0();
  };
  (function(a$2)
  {
   Arrays.iter(a$1,a$2);
  }(AppendList.ToArray(a.$0)));
 };
 Anims.List=function(a)
 {
  return a.$0;
 };
 Trans=Next.Trans=Runtime.Class({
  Copy:function(change,enter,exit,flags)
  {
   var $this,ch,en,ex,fl;
   $this=this;
   ch=Operators.DefaultArg(change,function(a)
   {
    return function(a$1)
    {
     return $this.TChange(a,a$1);
    };
   });
   en=Operators.DefaultArg(enter,this.get_TEnter());
   ex=Operators.DefaultArg(exit,this.get_TExit());
   fl=Operators.DefaultArg(flags,this.get_TFlags());
   return new Trans.New$3(function(d,d$1)
   {
    return(ch(d))(d$1);
   },en,ex,fl);
  },
  get_TFlags:function()
  {
   return this.flags;
  },
  get_TExit:function()
  {
   return this.exit;
  },
  get_TEnter:function()
  {
   return this.enter;
  },
  TChange:function(x,y)
  {
   return this.change(x,y);
  }
 },null,Trans);
 Trans.New=Runtime.Ctor(function(ch,enter,exit)
 {
  Trans.New$3.call(this,ch,Unchecked.Equals(enter,null)?An.Const:enter,Unchecked.Equals(exit,null)?An.Const:exit,1|(Unchecked.Equals(enter,null)?0:2)|(Unchecked.Equals(exit,null)?0:4));
 },Trans);
 Trans.New$1=Runtime.Ctor(function(ch)
 {
  Trans.New$3.call(this,ch,An.Const,An.Const,1);
 },Trans);
 Trans.New$2=Runtime.Ctor(function()
 {
  Trans.New$3.call(this,function(x,y)
  {
   return An.Const(y);
  },An.Const,An.Const,0);
 },Trans);
 Trans.New$3=Runtime.Ctor(function(change,enter,exit,flags)
 {
  this.change=change;
  this.enter=enter;
  this.exit=exit;
  this.flags=flags;
 },Trans);
 Trans.Exit=function(f,tr)
 {
  return tr.Copy(null,null,{
   $:1,
   $0:f
  },{
   $:1,
   $0:tr.get_TFlags()|4
  });
 };
 Trans.Enter=function(f,tr)
 {
  return tr.Copy(null,{
   $:1,
   $0:f
  },null,{
   $:1,
   $0:tr.get_TFlags()|2
  });
 };
 Trans.Change=function(ch,tr)
 {
  return tr.Copy({
   $:1,
   $0:ch
  },null,null,{
   $:1,
   $0:tr.get_TFlags()|1
  });
 };
 Trans.Create=function(ch)
 {
  return new Trans.New$1(ch);
 };
 Trans.Trivial=function()
 {
  return new Trans.New$2();
 };
 Trans.CanAnimateExit=function(tr)
 {
  var c,flag;
  c=tr.get_TFlags();
  flag=4;
  return(c&flag)===flag;
 };
 Trans.CanAnimateEnter=function(tr)
 {
  var c,flag;
  c=tr.get_TFlags();
  flag=2;
  return(c&flag)===flag;
 };
 Trans.CanAnimateChange=function(tr)
 {
  var c,flag;
  c=tr.get_TFlags();
  flag=1;
  return(c&flag)===flag;
 };
 Trans.AnimateExit=function(tr,x)
 {
  return(tr.get_TExit())(x);
 };
 Trans.AnimateEnter=function(tr,x)
 {
  return(tr.get_TEnter())(x);
 };
 Trans.AnimateChange=function(tr,x,y)
 {
  return tr.TChange(x,y);
 };
 SC$6.$cctor=Runtime.Cctor(function()
 {
  SC$6.CubicInOut=Easing.Custom(function(t)
  {
   var t2;
   t2=t*t;
   return 3*t2-2*(t2*t);
  });
  SC$6.UseAnimations=true;
  SC$6.$cctor=Global.ignore;
 });
 AnimatedAttrNode=Next.AnimatedAttrNode=Runtime.Class({
  sync:function(p)
  {
   var x;
   if(this.dirty)
    {
     x=this.logical;
     x==null?void 0:(this.push(p))(x.$0);
     this.visible=this.logical;
     this.dirty=false;
    }
  },
  pushVisible:function(el,v)
  {
   this.visible={
    $:1,
    $0:v
   };
   this.dirty=true;
   (this.push(el))(v);
  },
  NChanged:function()
  {
   return this.updates;
  },
  NSync:function(parent)
  {
  },
  NGetExitAnim:function(parent)
  {
   var $this,a,m,a$1;
   $this=this;
   a=function()
   {
    $this.dirty=true;
    $this.visible=null;
   };
   return function(a$2)
   {
    return An.WhenDone(a,a$2);
   }((m=this.visible,(m!=null?m.$==1:false)?An.Pack((a$1=function(v)
   {
    $this.pushVisible(parent,v);
   },function(a$2)
   {
    return An.Map(a$1,a$2);
   }(Trans.AnimateExit(this.tr,m.$0)))):An.get_Empty()));
  },
  NGetEnterAnim:function(parent)
  {
   var $this,a,$1,$2,$3,a$1,$4,a$2;
   $this=this;
   a=function()
   {
    $this.sync(parent);
   };
   return function(a$3)
   {
    return An.WhenDone(a,a$3);
   }(($1=this.visible,($2=this.logical,(($1!=null?$1.$==1:false)?($2!=null?$2.$==1:false)?this.dirty?($3=[$2.$0,$1.$0],true):false:false:false)?An.Pack((a$1=function(v)
   {
    $this.pushVisible(parent,v);
   },function(a$3)
   {
    return An.Map(a$1,a$3);
   }(Trans.AnimateChange(this.tr,$3[1],$3[0])))):($1==null?($2!=null?$2.$==1:false)?true:false:false)?An.Pack((a$2=function(v)
   {
    $this.pushVisible(parent,v);
   },function(a$3)
   {
    return An.Map(a$2,a$3);
   }(Trans.AnimateEnter(this.tr,$2.$0)))):An.get_Empty())));
  },
  NGetChangeAnim:function(parent)
  {
   var $this,a,$1,$2,$3,a$1;
   $this=this;
   a=function()
   {
    $this.sync(parent);
   };
   return function(a$2)
   {
    return An.WhenDone(a,a$2);
   }(($1=this.visible,($2=this.logical,(($1!=null?$1.$==1:false)?($2!=null?$2.$==1:false)?this.dirty?($3=[$2.$0,$1.$0],true):false:false:false)?An.Pack((a$1=function(v)
   {
    $this.pushVisible(parent,v);
   },function(a$2)
   {
    return An.Map(a$1,a$2);
   }(Trans.AnimateChange(this.tr,$3[1],$3[0])))):An.get_Empty())));
  }
 },null,AnimatedAttrNode);
 AnimatedAttrNode.New=Runtime.Ctor(function(tr,view,push)
 {
  var $this,a;
  $this=this;
  this.tr=tr;
  this.push=push;
  this.logical=null;
  this.visible=null;
  this.dirty=true;
  this.updates=(a=function(x)
  {
   $this.logical={
    $:1,
    $0:x
   };
   $this.dirty=true;
  },function(a$1)
  {
   return View.Map(a,a$1);
  }(view));
 },AnimatedAttrNode);
 DynamicAttrNode=Next.DynamicAttrNode=Runtime.Class({
  NChanged:function()
  {
   return this.updates;
  },
  NSync:function(parent)
  {
   if(this.dirty)
    {
     (this.push(parent))(this.value);
     this.dirty=false;
    }
  },
  NGetExitAnim:function(parent)
  {
   return An.get_Empty();
  },
  NGetEnterAnim:function(parent)
  {
   return An.get_Empty();
  },
  NGetChangeAnim:function(parent)
  {
   return An.get_Empty();
  }
 },null,DynamicAttrNode);
 DynamicAttrNode.New=Runtime.Ctor(function(view,push)
 {
  var $this,a;
  $this=this;
  this.push=push;
  this.value=void 0;
  this.dirty=false;
  this.updates=(a=function(x)
  {
   $this.value=x;
   $this.dirty=true;
  },function(a$1)
  {
   return View.Map(a,a$1);
  }(view));
 },DynamicAttrNode);
 AttrProxy=Next.AttrProxy=Runtime.Class({},null,AttrProxy);
 AttrProxy.Handler=function(event,q)
 {
  return Attrs$1.Static(function(el)
  {
   el.addEventListener(event,function(d)
   {
    return(q(el))(d);
   },false);
  });
 };
 AttrProxy.Concat=function(xs)
 {
  var x,d;
  x=Array.ofSeqNonCopying(xs);
  d=Attrs$1.EmptyAttr();
  return Array.TreeReduce(d,AttrProxy.Append,x);
 };
 AttrProxy.Append=function(a,b)
 {
  return Attrs$1.AppendTree(a,b);
 };
 AttrProxy.Create=function(name,value)
 {
  return Attrs$1.Static(function(el)
  {
   DomUtility.SetAttr(el,name,value);
  });
 };
 Dyn.New=function(DynElem,DynFlags,DynNodes,OnAfterRender)
 {
  var $1;
  $1={
   DynElem:DynElem,
   DynFlags:DynFlags,
   DynNodes:DynNodes
  };
  Runtime.SetOptional($1,"OnAfterRender",OnAfterRender);
  return $1;
 };
 Attrs$1.Static=function(attr$1)
 {
  return new AttrProxy({
   $:3,
   $0:attr$1
  });
 };
 Attrs$1.Dynamic=function(view,set)
 {
  return new AttrProxy({
   $:1,
   $0:new DynamicAttrNode.New(view,set)
  });
 };
 Attrs$1.Animated=function(tr,view,set)
 {
  var node,flags,n;
  node=new AnimatedAttrNode.New(tr,view,set);
  flags=4;
  Trans.CanAnimateEnter(tr)?flags=flags|1:void 0;
  Trans.CanAnimateExit(tr)?flags=flags|2:void 0;
  n=new AttrProxy({
   $:1,
   $0:node
  });
  Attrs$1.SetFlags(n,flags);
  return n;
 };
 Attrs$1.EmptyAttr=function()
 {
  SC$7.$cctor();
  return SC$7.EmptyAttr;
 };
 Attrs$1.AppendTree=function(a,b)
 {
  return a===null?b:b===null?a:new AttrProxy({
   $:2,
   $0:a,
   $1:b
  });
 };
 Attrs$1.GetChangeAnim=function(dyn)
 {
  return Attrs$1.GetAnim(dyn,function($1,$2)
  {
   return $1.NGetChangeAnim($2);
  });
 };
 Attrs$1.GetExitAnim=function(dyn)
 {
  return Attrs$1.GetAnim(dyn,function($1,$2)
  {
   return $1.NGetExitAnim($2);
  });
 };
 Attrs$1.GetEnterAnim=function(dyn)
 {
  return Attrs$1.GetAnim(dyn,function($1,$2)
  {
   return $1.NGetEnterAnim($2);
  });
 };
 Attrs$1.GetAnim=function(dyn,f)
 {
  var m;
  return An.Concat((m=function(n)
  {
   return f(n,dyn.DynElem);
  },function(a)
  {
   return Arrays.map(m,a);
  }(dyn.DynNodes)));
 };
 Attrs$1.Updates=function(dyn)
 {
  var m,d;
  m=function(x)
  {
   return x.NChanged();
  };
  return(d=View.Const(),function(a)
  {
   return Array.MapTreeReduce(m,d,View.Map2Unit,a);
  })(dyn.DynNodes);
 };
 Attrs$1.Empty=function(e)
 {
  return Dyn.New(e,0,[],null);
 };
 Attrs$1.Insert=function(elem,tree)
 {
  var nodes,oar,arr;
  function loop(node)
  {
   if(!(node===null))
    if(node!=null?node.$==1:false)
     nodes.push(node.$0);
    else
     if(node!=null?node.$==2:false)
      {
       loop(node.$0);
       loop(node.$1);
      }
     else
      if(node!=null?node.$==3:false)
       node.$0(elem);
      else
       if(node!=null?node.$==4:false)
        oar.push(node.$0);
  }
  nodes=[];
  oar=[];
  loop(tree);
  arr=nodes.slice(0);
  return Dyn.New(elem,Attrs$1.Flags(tree),arr,oar.length===0?null:{
   $:1,
   $0:function(el)
   {
    Seq.iter(function(f)
    {
     f(el);
    },oar);
   }
  });
 };
 Attrs$1.Sync=function(elem,dyn)
 {
  var a;
  a=function(d)
  {
   d.NSync(elem);
  };
  (function(a$1)
  {
   Arrays.iter(a,a$1);
  }(dyn.DynNodes));
 };
 Attrs$1.SetFlags=function(a,f)
 {
  a.flags=f;
 };
 Attrs$1.Flags=function(a)
 {
  return(a!==null?a.hasOwnProperty("flags"):false)?a.flags:0;
 };
 Attrs$1.HasExitAnim=function(attr$1)
 {
  var flag;
  flag=2;
  return(attr$1.DynFlags&flag)===flag;
 };
 Attrs$1.HasEnterAnim=function(attr$1)
 {
  var flag;
  flag=1;
  return(attr$1.DynFlags&flag)===flag;
 };
 Attrs$1.HasChangeAnim=function(attr$1)
 {
  var flag;
  flag=4;
  return(attr$1.DynFlags&flag)===flag;
 };
 CheckedInput=Next.CheckedInput=Runtime.Class({
  get_Input:function()
  {
   return this.$==1?this.$0:this.$==2?this.$0:this.$1;
  }
 },null,CheckedInput);
 CheckedInput.Make=function(x)
 {
  return new CheckedInput({
   $:0,
   $0:x,
   $1:Global.String(x)
  });
 };
 AttrModule.ValidateForm=function()
 {
  return AttrModule.OnAfterRender(function(e)
  {
   if(Global.H5F)
    Global.H5F.setup(e);
  });
 };
 AttrModule.Checked=function(_var)
 {
  var onSet;
  onSet=function(el)
  {
   return!Unchecked.Equals(_var.RVal(),el.checked)?_var.set_RVal(el.checked):null;
  };
  return AttrProxy.Concat([AttrModule.DynamicProp("checked",_var.RView()),AttrModule.Handler("change",function($1)
  {
   return function($2)
   {
    return onSet($1,$2);
   };
  }),AttrModule.Handler("click",function($1)
  {
   return function($2)
   {
    return onSet($1,$2);
   };
  })]);
 };
 AttrModule.FloatValue=function(_var)
 {
  return AttrModule.CustomVar(_var,function($1,$2)
  {
   var i;
   i=$2.get_Input();
   return $1.value!==i?void($1.value=i):null;
  },function(el)
  {
   var s,i;
   s=el.value;
   return{
    $:1,
    $0:String.isBlank(s)?(el.checkValidity?el.checkValidity():true)?new CheckedInput({
     $:2,
     $0:s
    }):new CheckedInput({
     $:1,
     $0:s
    }):(i=+s,Global.isNaN(i)?new CheckedInput({
     $:1,
     $0:s
    }):new CheckedInput({
     $:0,
     $0:i,
     $1:s
    }))
   };
  });
 };
 AttrModule.FloatValueUnchecked=function(_var)
 {
  return AttrModule.CustomValue(_var,Global.String,function(s)
  {
   var pd;
   return String.isBlank(s)?{
    $:1,
    $0:0
   }:(pd=+s,Global.isNaN(pd)?null:{
    $:1,
    $0:pd
   });
  });
 };
 AttrModule.IntValue=function(_var)
 {
  return AttrModule.CustomVar(_var,function($1,$2)
  {
   var i;
   i=$2.get_Input();
   return $1.value!==i?void($1.value=i):null;
  },function(el)
  {
   var s,m,o;
   s=el.value;
   return{
    $:1,
    $0:String.isBlank(s)?(el.checkValidity?el.checkValidity():true)?new CheckedInput({
     $:2,
     $0:s
    }):new CheckedInput({
     $:1,
     $0:s
    }):(m=(o=0,[Int32.TryParse(s,{
     get:function()
     {
      return o;
     },
     set:function(v)
     {
      o=v;
     }
    }),o]),m[0]?new CheckedInput({
     $:0,
     $0:m[1],
     $1:s
    }):new CheckedInput({
     $:1,
     $0:s
    }))
   };
  });
 };
 AttrModule.IntValueUnchecked=function(_var)
 {
  return AttrModule.CustomValue(_var,Global.String,function(s)
  {
   var pd;
   return String.isBlank(s)?{
    $:1,
    $0:0
   }:(pd=+s,pd!==pd>>0?null:{
    $:1,
    $0:pd
   });
  });
 };
 AttrModule.Value=function(_var)
 {
  var f,g;
  return AttrModule.CustomValue(_var,Global.id,(f=Global.id,(g=function(a)
  {
   return{
    $:1,
    $0:a
   };
  },function(x)
  {
   return g(f(x));
  })));
 };
 AttrModule.ContentEditableHtml=function(_var)
 {
  var x,a;
  x=AttrModule.CustomVar(_var,function($1,$2)
  {
   $1.innerHTML=$2;
  },function(e)
  {
   return{
    $:1,
    $0:e.innerHTML
   };
  });
  a=AttrProxy.Create("contenteditable","true");
  return AttrProxy.Append(a,x);
 };
 AttrModule.ContentEditableText=function(_var)
 {
  var x,a;
  x=AttrModule.CustomVar(_var,function($1,$2)
  {
   $1.textContent=$2;
  },function(e)
  {
   return{
    $:1,
    $0:e.textContent
   };
  });
  a=AttrProxy.Create("contenteditable","true");
  return AttrProxy.Append(a,x);
 };
 AttrModule.CustomValue=function(_var,toString,fromString)
 {
  return AttrModule.CustomVar(_var,function($1,$2)
  {
   $1.value=toString($2);
  },function(e)
  {
   return fromString(e.value);
  });
 };
 AttrModule.CustomVar=function(_var,set,get)
 {
  var onChange,set$1;
  onChange=function(el)
  {
   return _var.RUpdM(function(v)
   {
    var m,$1;
    m=get(el);
    return((m!=null?m.$==1:false)?!Unchecked.Equals(m.$0,v)?($1=[m,m.$0],true):false:false)?$1[0]:null;
   });
  };
  set$1=function(e,v)
  {
   var m,$1;
   m=get(e);
   return((m!=null?m.$==1:false)?Unchecked.Equals(m.$0,v)?($1=m.$0,true):false:false)?null:set(e,v);
  };
  return AttrProxy.Concat([AttrModule.Handler("change",function($1)
  {
   return function($2)
   {
    return onChange($1,$2);
   };
  }),AttrModule.Handler("input",function($1)
  {
   return function($2)
   {
    return onChange($1,$2);
   };
  }),AttrModule.Handler("keypress",function($1)
  {
   return function($2)
   {
    return onChange($1,$2);
   };
  }),AttrModule.DynamicCustom(function($1)
  {
   return function($2)
   {
    return set$1($1,$2);
   };
  },_var.RView())]);
 };
 AttrModule.DynamicProp=function(name,view)
 {
  return Attrs$1.Dynamic(view,function(el)
  {
   return function(v)
   {
    el[name]=v;
   };
  });
 };
 AttrModule.DynamicPred=function(name,predView,valView)
 {
  var viewFn,tupleView;
  viewFn=function(el,t)
  {
   return t[0]?DomUtility.SetAttr(el,name,t[1]):DomUtility.RemoveAttr(el,name);
  };
  tupleView=View.Map2(function(pred,value)
  {
   return[pred,value];
  },predView,valView);
  return Attrs$1.Dynamic(tupleView,function($1)
  {
   return function($2)
   {
    return viewFn($1,$2);
   };
  });
 };
 AttrModule.DynamicClass=function(name,view,ok)
 {
  return Attrs$1.Dynamic(view,function(el)
  {
   return function(v)
   {
    return ok(v)?DomUtility.AddClass(el,name):DomUtility.RemoveClass(el,name);
   };
  });
 };
 AttrModule.OnAfterRenderView=function(v,callback)
 {
  var id,a,a$1;
  id=Fresh.Id();
  a=AttrModule.OnAfterRender(function(el)
  {
   callback(el,el[id]);
  });
  a$1=AttrModule.DynamicCustom(function(el)
  {
   return function(x)
   {
    el[id]=x;
   };
  },v);
  return AttrProxy.Append(a,a$1);
 };
 AttrModule.OnAfterRender=function(callback)
 {
  return new AttrProxy({
   $:4,
   $0:callback
  });
 };
 AttrModule.HandlerView=function(name,view,callback)
 {
  return Attrs$1.Static(function(el)
  {
   var callback$1;
   callback$1=callback(el);
   el.addEventListener(name,function(ev)
   {
    var a;
    a=callback$1(ev);
    return View.Get(a,view);
   },false);
  });
 };
 AttrModule.Handler=function(name,callback)
 {
  return Attrs$1.Static(function(el)
  {
   el.addEventListener(name,function(d)
   {
    return(callback(el))(d);
   },false);
  });
 };
 AttrModule.DynamicStyle=function(name,view)
 {
  return Attrs$1.Dynamic(view,function(el)
  {
   return function(v)
   {
    return DomUtility.SetStyle(el,name,v);
   };
  });
 };
 AttrModule.DynamicCustom=function(set,view)
 {
  return Attrs$1.Dynamic(view,set);
 };
 AttrModule.Dynamic=function(name,view)
 {
  return Attrs$1.Dynamic(view,function(el)
  {
   return function(v)
   {
    return DomUtility.SetAttr(el,name,v);
   };
  });
 };
 AttrModule.AnimatedStyle=function(name,tr,view,attr$1)
 {
  return Attrs$1.Animated(tr,view,function(el)
  {
   return function(v)
   {
    return DomUtility.SetStyle(el,name,attr$1(v));
   };
  });
 };
 AttrModule.Animated=function(name,tr,view,attr$1)
 {
  return Attrs$1.Animated(tr,view,function(el)
  {
   return function(v)
   {
    return DomUtility.SetAttr(el,name,attr$1(v));
   };
  });
 };
 AttrModule.Class=function(name)
 {
  return Attrs$1.Static(function(el)
  {
   DomUtility.AddClass(el,name);
  });
 };
 AttrModule.Style=function(name,value)
 {
  return Attrs$1.Static(function(el)
  {
   DomUtility.SetStyle(el,name,value);
  });
 };
 SC$7.$cctor=Runtime.Cctor(function()
 {
  SC$7.EmptyAttr=null;
  SC$7.$cctor=Global.ignore;
 });
 DocElemNode=Next.DocElemNode=Runtime.Class({
  GetHashCode:function()
  {
   return this.ElKey;
  },
  Equals:function(o)
  {
   return this.ElKey===o.ElKey;
  }
 },null,DocElemNode);
 DocElemNode.New=function(Attr,Children,Delimiters,El,ElKey,Render)
 {
  var $1;
  return new DocElemNode(($1={
   Attr:Attr,
   Children:Children,
   El:El,
   ElKey:ElKey
  },(Runtime.SetOptional($1,"Delimiters",Delimiters),Runtime.SetOptional($1,"Render",Render),$1)));
 };
 DomNodes.FoldBack=function(f,a,z)
 {
  return Arrays.foldBack(f,a.$0,z);
 };
 DomNodes.Iter=function(f,a)
 {
  Arrays.iter(f,a.$0);
 };
 DomNodes.Except=function(a,a$1)
 {
  var excluded,p;
  excluded=a.$0;
  return{
   $:0,
   $0:(p=function(n)
   {
    var p$1;
    p$1=function(k)
    {
     return!(n===k);
    };
    return function(a$2)
    {
     return Arrays.forall(p$1,a$2);
    }(excluded);
   },function(a$2)
   {
    return Arrays.filter(p,a$2);
   }(a$1.$0))
  };
 };
 DomNodes.DocChildren=function(node)
 {
  var q;
  function loop(doc)
  {
   var a;
   if(doc.$==2)
    loop(doc.$0.Current);
   else
    if(doc.$==1)
     q.push(doc.$0.El);
    else
     if(doc.$==3)
      ;
     else
      if(doc.$==5)
       q.push(doc.$0);
      else
       if(doc.$==4)
        q.push(doc.$0.Text);
       else
        if(doc.$==6)
         {
          a=function(a$1)
          {
           if(a$1.constructor===Global.Object)
            loop(a$1);
           else
            q.push(a$1);
          };
          (function(a$1)
          {
           Arrays.iter(a,a$1);
          }(doc.$0.Els));
         }
        else
         {
          loop(doc.$0);
          loop(doc.$1);
         }
  }
  q=[];
  loop(node.Children);
  return{
   $:0,
   $0:Array.ofSeqNonCopying(q)
  };
 };
 DomNodes.Children=function(elem,delims)
 {
  var n,o,a,v;
  if(delims!=null?delims.$==1:false)
   {
    a=Global.Array.prototype.constructor.apply(Global.Array,[]);
    n=delims.$0[0].nextSibling;
    while(n!==delims.$0[1])
     {
      v=a.push(n);
      n=n.nextSibling;
     }
    return{
     $:0,
     $0:a
    };
   }
  else
   return{
    $:0,
    $0:Arrays.init(elem.childNodes.length,(o=elem.childNodes,function(a$1)
    {
     return o[a$1];
    }))
   };
 };
 NodeSet.ToArray=function(a)
 {
  return HashSet.ToArray(a.$0);
 };
 NodeSet.get_Empty=function()
 {
  return{
   $:0,
   $0:new HashSet$1.New$3()
  };
 };
 NodeSet.IsEmpty=function(a)
 {
  return a.$0.get_Count()===0;
 };
 NodeSet.Intersect=function(a,a$1)
 {
  return{
   $:0,
   $0:HashSet.Intersect(a.$0,a$1.$0)
  };
 };
 NodeSet.Except=function(a,a$1)
 {
  return{
   $:0,
   $0:HashSet.Except(a.$0,a$1.$0)
  };
 };
 NodeSet.FindAll=function(doc)
 {
  var q;
  function loop(node)
  {
   if(node.$==0)
    {
     loop(node.$0);
     loop(node.$1);
    }
   else
    if(node.$==1)
     loopEN(node.$0);
    else
     if(node.$==2)
      loop(node.$0.Current);
     else
      if(node.$==6)
       Arrays.iter(loopEN,node.$0.Holes);
  }
  function loopEN(el)
  {
   q.push(el);
   loop(el.Children);
  }
  q=[];
  loop(doc);
  return{
   $:0,
   $0:new HashSet$1.New$2(q)
  };
 };
 NodeSet.Filter=function(f,a)
 {
  return{
   $:0,
   $0:HashSet.Filter(f,a.$0)
  };
 };
 RunState.New=function(PreviousNodes,Top)
 {
  return{
   PreviousNodes:PreviousNodes,
   Top:Top
  };
 };
 Docs$1.TextHoleRE=function()
 {
  SC$8.$cctor();
  return SC$8.TextHoleRE;
 };
 Docs$1.LoadedTemplates=function()
 {
  SC$8.$cctor();
  return SC$8.LoadedTemplates;
 };
 Docs$1.UpdateTextNode=function(n,t)
 {
  n.Value=t;
  n.Dirty=true;
 };
 Docs$1.CreateTextNode=function()
 {
  return{
   Text:DomUtility.CreateText(""),
   Dirty:false,
   Value:""
  };
 };
 Docs$1.UpdateEmbedNode=function(node,upd)
 {
  node.Current=upd;
  node.Dirty=true;
 };
 Docs$1.CreateEmbedNode=function()
 {
  return{
   Current:{
    $:3
   },
   Dirty:false
  };
 };
 Docs$1.PerformAnimatedUpdate=function(st,doc)
 {
  var a;
  return An.get_UseAnimations()?Concurrency.Delay(function()
  {
   var cur,change,enter,exit,x;
   cur=NodeSet.FindAll(doc);
   change=Docs$1.ComputeChangeAnim(st,cur);
   enter=Docs$1.ComputeEnterAnim(st,cur);
   exit=Docs$1.ComputeExitAnim(st,cur);
   x=An.Play(An.Append(change,exit));
   return Concurrency.Bind(x,function()
   {
    var x$1;
    Docs$1.SyncElemNode(st.Top);
    x$1=An.Play(enter);
    return Concurrency.Bind(x$1,function()
    {
     st.PreviousNodes=cur;
     return Concurrency.Return(null);
    });
   });
  }):(a=function(ok)
  {
   var v;
   v=Global.requestAnimationFrame(function()
   {
    Docs$1.SyncElemNode(st.Top);
    ok();
   });
  },Concurrency.FromContinuations(function($1,$2,$3)
  {
   return a.apply(null,[$1,$2,$3]);
  }));
 };
 Docs$1.ComputeEnterAnim=function(st,cur)
 {
  var m,a,a$1;
  return An.Concat((m=function(n)
  {
   return Attrs$1.GetEnterAnim(n.Attr);
  },function(a$2)
  {
   return Arrays.map(m,a$2);
  }(NodeSet.ToArray((a=st.PreviousNodes,function(a$2)
  {
   return NodeSet.Except(a,a$2);
  }((a$1=function(n)
  {
   return Attrs$1.HasEnterAnim(n.Attr);
  },function(a$2)
  {
   return NodeSet.Filter(a$1,a$2);
  }(cur))))))));
 };
 Docs$1.ComputeChangeAnim=function(st,cur)
 {
  var relevant,a,m,a$1,a$2;
  relevant=(a=function(n)
  {
   return Attrs$1.HasChangeAnim(n.Attr);
  },function(a$3)
  {
   return NodeSet.Filter(a,a$3);
  });
  return An.Concat((m=function(n)
  {
   return Attrs$1.GetChangeAnim(n.Attr);
  },function(a$3)
  {
   return Arrays.map(m,a$3);
  }(NodeSet.ToArray((a$1=relevant(st.PreviousNodes),(a$2=relevant(cur),NodeSet.Intersect(a$1,a$2)))))));
 };
 Docs$1.ComputeExitAnim=function(st,cur)
 {
  var m,a,a$1;
  return An.Concat((m=function(n)
  {
   return Attrs$1.GetExitAnim(n.Attr);
  },function(a$2)
  {
   return Arrays.map(m,a$2);
  }(NodeSet.ToArray((a=(a$1=function(n)
  {
   return Attrs$1.HasExitAnim(n.Attr);
  },function(a$2)
  {
   return NodeSet.Filter(a$1,a$2);
  }(st.PreviousNodes)),NodeSet.Except(cur,a))))));
 };
 Docs$1.CreateDelimitedRunState=function(ldelim,rdelim,doc)
 {
  return RunState.New(NodeSet.get_Empty(),Docs$1.CreateDelimitedElemNode(ldelim,rdelim,Attrs$1.EmptyAttr(),doc));
 };
 Docs$1.CreateRunState=function(parent,doc)
 {
  return RunState.New(NodeSet.get_Empty(),Docs$1.CreateElemNode(parent,Attrs$1.EmptyAttr(),doc));
 };
 Docs$1.CreateDelimitedElemNode=function(ldelim,rdelim,attr$1,children)
 {
  var el,attr$2;
  el=ldelim.parentElement;
  Docs$1.LinkPrevElement(rdelim,children);
  attr$2=Attrs$1.Insert(el,attr$1);
  return DocElemNode.New(attr$2,children,{
   $:1,
   $0:[ldelim,rdelim]
  },el,Fresh.Int(),Runtime.GetOptional(attr$2.OnAfterRender));
 };
 Docs$1.CreateElemNode=function(el,attr$1,children)
 {
  var attr$2;
  Docs$1.LinkElement(el,children);
  attr$2=Attrs$1.Insert(el,attr$1);
  return DocElemNode.New(attr$2,children,null,el,Fresh.Int(),Runtime.GetOptional(attr$2.OnAfterRender));
 };
 Docs$1.SyncElemNode=function(el)
 {
  Docs$1.SyncElement(el);
  Docs$1.Sync(el.Children);
  Docs$1.AfterRender(el);
 };
 Docs$1.Sync=function(doc)
 {
  var d,t;
  if(doc.$==1)
   Docs$1.SyncElemNode(doc.$0);
  else
   if(doc.$==2)
    Docs$1.Sync(doc.$0.Current);
   else
    if(doc.$==3)
     ;
    else
     if(doc.$==5)
      ;
     else
      if(doc.$==4)
       {
        d=doc.$0;
        d.Dirty?(d.Text.nodeValue=d.Value,d.Dirty=false):void 0;
       }
      else
       if(doc.$==6)
        {
         t=doc.$0;
         Arrays.iter(function(e)
         {
          Docs$1.SyncElemNode(e);
         },t.Holes);
         Arrays.iter(function(t$1)
         {
          Attrs$1.Sync(t$1[0],t$1[1]);
         },t.Attrs);
         Docs$1.AfterRender(t);
        }
       else
        {
         Docs$1.Sync(doc.$0);
         Docs$1.Sync(doc.$1);
        }
 };
 Docs$1.AfterRender=function(el)
 {
  var m;
  m=Runtime.GetOptional(el.Render);
  (m!=null?m.$==1:false)?(m.$0(el.El),Runtime.SetOptional(el,"Render",null)):void 0;
 };
 Docs$1.InsertBeforeDelim=function(afterDelim,doc)
 {
  var p,before,v;
  p=afterDelim.parentElement;
  before=Global.document.createTextNode("");
  v=p.insertBefore(before,afterDelim);
  Docs$1.LinkPrevElement(afterDelim,doc);
  return before;
 };
 Docs$1.LinkPrevElement=function(el,children)
 {
  var v;
  v=Docs$1.InsertDoc(el.parentElement,children,el);
 };
 Docs$1.LinkElement=function(el,children)
 {
  var v;
  v=Docs$1.InsertDoc(el,children,null);
 };
 Docs$1.SyncElement=function(el)
 {
  function hasDirtyChildren(el$1)
  {
   function dirty(doc)
   {
    var d,t;
    return doc.$==0?dirty(doc.$0)?true:dirty(doc.$1):doc.$==2?(d=doc.$0,d.Dirty?true:dirty(d.Current)):doc.$==6?(t=doc.$0,t.Dirty?true:Arrays.exists(hasDirtyChildren,t.Holes)):false;
   }
   return dirty(el$1.Children);
  }
  Attrs$1.Sync(el.El,el.Attr);
  hasDirtyChildren(el)?Docs$1.DoSyncElement(el):void 0;
 };
 Docs$1.DoSyncElement=function(el)
 {
  var parent,ch,a,p,a$1,v,m;
  function ins(doc,pos)
  {
   var d,t;
   return doc.$==1?doc.$0.El:doc.$==2?(d=doc.$0,d.Dirty?(d.Dirty=false,Docs$1.InsertDoc(parent,d.Current,pos)):ins(d.Current,pos)):doc.$==3?pos:doc.$==4?doc.$0.Text:doc.$==5?doc.$0:doc.$==6?(t=doc.$0,(t.Dirty?t.Dirty=false:void 0,Arrays.foldBack(function($1,$2)
   {
    return $1.constructor===Global.Object?ins($1,$2):$1;
   },t.Els,pos))):ins(doc.$0,ins(doc.$1,pos));
  }
  parent=el.El;
  ch=DomNodes.DocChildren(el);
  a=(p=el.El,function(e)
  {
   DomUtility.RemoveNode(p,e);
  });
  (function(a$2)
  {
   DomNodes.Iter(a,a$2);
  }((a$1=DomNodes.Children(el.El,Runtime.GetOptional(el.Delimiters)),DomNodes.Except(ch,a$1))));
  v=ins(el.Children,(m=Runtime.GetOptional(el.Delimiters),(m!=null?m.$==1:false)?m.$0[1]:null));
 };
 Docs$1.InsertDoc=function(parent,doc,pos)
 {
  var d;
  return doc.$==1?Docs$1.InsertNode(parent,doc.$0.El,pos):doc.$==2?(d=doc.$0,(d.Dirty=false,Docs$1.InsertDoc(parent,d.Current,pos))):doc.$==3?pos:doc.$==4?Docs$1.InsertNode(parent,doc.$0.Text,pos):doc.$==5?Docs$1.InsertNode(parent,doc.$0,pos):doc.$==6?Arrays.foldBack(function($1,$2)
  {
   return $1.constructor===Global.Object?Docs$1.InsertDoc(parent,$1,$2):Docs$1.InsertNode(parent,$1,$2);
  },doc.$0.Els,pos):Docs$1.InsertDoc(parent,doc.$0,Docs$1.InsertDoc(parent,doc.$1,pos));
 };
 Docs$1.InsertNode=function(parent,node,pos)
 {
  DomUtility.InsertAt(parent,pos,node);
  return node;
 };
 Doc=Next.Doc=Runtime.Class({
  ReplaceInDom:function(elt)
  {
   var rdelim,v;
   rdelim=Global.document.createTextNode("");
   v=elt.parentNode.replaceChild(rdelim,elt);
   Doc.RunBefore(rdelim,this);
  }
 },null,Doc);
 Doc.Append=function(a,b)
 {
  var a$1;
  a$1={
   $:0,
   $0:a.docNode,
   $1:b.docNode
  };
  return function(a$2)
  {
   return Doc.Mk(a$1,a$2);
  }(View.Map2Unit(a.updates,b.updates));
 };
 Doc.Concat=function(xs)
 {
  var x,d;
  x=Array.ofSeqNonCopying(xs);
  d=Doc.Empty();
  return Array.TreeReduce(d,Doc.Append,x);
 };
 Doc.Empty=function()
 {
  var a;
  a=View.Const();
  return Doc.Mk({
   $:3
  },a);
 };
 Doc.TextNode=function(v)
 {
  var a,a$1;
  a={
   $:5,
   $0:DomUtility.CreateText(v)
  };
  a$1=View.Const();
  return Doc.Mk(a,a$1);
 };
 Doc.Verbatim=function(html)
 {
  var a,m,es,a$1;
  a=(m=Global.jQuery.parseHTML(html),Unchecked.Equals(m,null)?[]:m);
  es=Array.MapTreeReduce(function(n)
  {
   return Unchecked.Equals(n.nodeType,Global.Node.TEXT_NODE)?{
    $:5,
    $0:n
   }:{
    $:1,
    $0:Docs$1.CreateElemNode(n,Attrs$1.EmptyAttr(),{
     $:3
    })
   };
  },{
   $:3
  },function(x,y)
  {
   return{
    $:0,
    $0:x,
    $1:y
   };
  },a);
  a$1=View.Const();
  return Doc.Mk(es,a$1);
 };
 Doc.SvgElementMixed=function(tagname,nodes)
 {
  var p;
  p=Doc.MixedNodes(nodes);
  return Doc.SvgElement(tagname,p[0],p[1]);
 };
 Doc.SvgElement=function(name,attr$1,children)
 {
  var attr$2,children$1,a;
  attr$2=AttrProxy.Concat(attr$1);
  children$1=Doc.Concat(children);
  a=DomUtility.CreateSvgElement(name);
  return Elt.New(a,attr$2,children$1);
 };
 Doc.ElementMixed=function(tagname,nodes)
 {
  var p;
  p=Doc.MixedNodes(nodes);
  return Doc.Element(tagname,p[0],p[1]);
 };
 Doc.ConcatMixed=function(elts)
 {
  return Doc.Concat(Seq.map(Doc.ToMixedDoc,elts));
 };
 Doc.MixedNodes=function(nodes)
 {
  var attrs,children,e,n;
  attrs=new List$1.New$2();
  children=new List$1.New$2();
  e=Enumerator.Get(nodes);
  try
  {
   while(e.MoveNext())
    {
     n=e.Current();
     n instanceof AttrProxy?attrs.Add(n):children.Add(Doc.ToMixedDoc(n));
    }
  }
  finally
  {
   if("Dispose"in e)
    e.Dispose();
  }
  return[attrs,children];
 };
 Doc.ToMixedDoc=function(o)
 {
  return o instanceof Doc?o:typeof o=="string"?Doc.TextNode(o):o instanceof Global.Element?Doc.Static(o):typeof o=="function"?Doc.EmbedView(View.Map(Doc.ToMixedDoc,o)):o instanceof Var?Doc.EmbedView(View.Map(Doc.ToMixedDoc,o.v)):Unchecked.Equals(o,null)?Doc.Empty():Doc.TextNode(Global.String(o));
 };
 Doc.Element=function(name,attr$1,children)
 {
  var attr$2,children$1,a;
  attr$2=AttrProxy.Concat(attr$1);
  children$1=Doc.Concat(children);
  a=DomUtility.CreateElement(name);
  return Elt.New(a,attr$2,children$1);
 };
 Doc.Radio=function(attrs,value,_var)
 {
  var el,predView,a,valAttr,_,attr$1,a$1;
  el=DomUtility.CreateElement("input");
  el.addEventListener("click",function()
  {
   return _var.RSet(value);
  },false);
  predView=(a=_var.RView(),View.Map(function(x)
  {
   return Unchecked.Equals(x,value);
  },a));
  valAttr=AttrModule.DynamicProp("checked",predView);
  _=AttrProxy.Create;
  attr$1=AttrProxy.Concat(List.append(List.ofArray([_("type","radio"),_("name",_var.RId()),valAttr]),List.ofSeq(attrs)));
  a$1=Doc.Empty();
  return Elt.New(el,attr$1,a$1);
 };
 Doc.LinkView=function(caption,attrs,view,action)
 {
  var evAttr,attrs$1,a,a$1;
  evAttr=AttrModule.HandlerView("click",view,function()
  {
   return function()
   {
    return action;
   };
  });
  attrs$1=AttrProxy.Concat(Seq.append([evAttr,AttrProxy.Create("href","#")],attrs));
  a=DomUtility.CreateElement("a");
  a$1=Doc.TextNode(caption);
  return Elt.New(a,attrs$1,a$1);
 };
 Doc.Link=function(caption,attrs,action)
 {
  var attrs$1,x,a,el,a$1;
  attrs$1=(x=AttrProxy.Concat(attrs),(a=AttrProxy.Create("href","#"),AttrProxy.Append(a,x)));
  el=Doc.Clickable("a",action);
  a$1=Doc.TextNode(caption);
  return Elt.New(el,attrs$1,a$1);
 };
 Doc.ButtonView=function(caption,attrs,view,action)
 {
  var evAttr,attrs$1,a,a$1;
  evAttr=AttrModule.HandlerView("click",view,function()
  {
   return function()
   {
    return action;
   };
  });
  attrs$1=AttrProxy.Concat(Seq.append([evAttr],attrs));
  a=DomUtility.CreateElement("button");
  a$1=Doc.TextNode(caption);
  return Elt.New(a,attrs$1,a$1);
 };
 Doc.Button=function(caption,attrs,action)
 {
  var attrs$1,el,a;
  attrs$1=AttrProxy.Concat(attrs);
  el=Doc.Clickable("button",action);
  a=Doc.TextNode(caption);
  return Elt.New(el,attrs$1,a);
 };
 Doc.Clickable=function(elem,action)
 {
  var el;
  el=DomUtility.CreateElement(elem);
  el.addEventListener("click",function(ev)
  {
   ev.preventDefault();
   return action();
  },false);
  return el;
 };
 Doc.CheckBoxGroup=function(attrs,item,chk)
 {
  var rv,a,p;
  rv=(a=function(l,b)
  {
   return b?List.exists(function(y)
   {
    return Unchecked.Equals(item,y);
   },l)?l:new List.T({
    $:1,
    $0:item,
    $1:l
   }):List.filter(function(y)
   {
    return!Unchecked.Equals(item,y);
   },l);
  },Var.Lens(chk,(p=function(y)
  {
   return Unchecked.Equals(item,y);
  },function(l)
  {
   return List.exists(p,l);
  }),function($1,$2)
  {
   return a($1,$2);
  }));
  return Doc.CheckBox(attrs,rv);
 };
 Doc.CheckBox=function(attrs,chk)
 {
  return Doc.InputInternal("input",function()
  {
   return Seq.append(attrs,[AttrProxy.Create("type","checkbox"),AttrModule.Checked(chk)]);
  });
 };
 Doc.SelectDynOptional=function(attrs,noneText,show,vOptions,current)
 {
  var a,a$1;
  a=(a$1=function(options)
  {
   return new List.T({
    $:1,
    $0:null,
    $1:List.map(function(a$2)
    {
     return{
      $:1,
      $0:a$2
     };
    },options)
   });
  },function(a$2)
  {
   return View.Map(a$1,a$2);
  }(vOptions));
  return Doc.SelectDyn(attrs,function(a$2)
  {
   return(a$2!=null?a$2.$==1:false)?show(a$2.$0):noneText;
  },a,current);
 };
 Doc.SelectOptional=function(attrs,noneText,show,options,current)
 {
  var a;
  a=new List.T({
   $:1,
   $0:null,
   $1:List.map(function(a$1)
   {
    return{
     $:1,
     $0:a$1
    };
   },options)
  });
  return Doc.Select(attrs,function(a$1)
  {
   return(a$1!=null?a$1.$==1:false)?show(a$1.$0):noneText;
  },a,current);
 };
 Doc.Select=function(attrs,show,options,current)
 {
  return Doc.SelectImpl(attrs,show,function(rOptions)
  {
   var m;
   rOptions[0]=options;
   return Doc.Concat((m=function(i,o)
   {
    var a,a$1;
    a=List.ofArray([AttrProxy.Create("value",Global.String(i))]);
    a$1=List.ofArray([Doc.TextNode(show(o))]);
    return Doc.Element("option",a,a$1);
   },function(l)
   {
    return List.mapi(m,l);
   }(options)));
  },current);
 };
 Doc.SelectDyn=function(attrs,show,vOptions,current)
 {
  return Doc.SelectImpl(attrs,show,function(options)
  {
   var a,a$1;
   a=function(i,o)
   {
    var a$2,a$3;
    a$2=List.ofArray([AttrProxy.Create("value",Global.String(i))]);
    a$3=List.ofArray([Doc.TextNode(show(o))]);
    return Doc.Element("option",a$2,a$3);
   };
   return function(a$2)
   {
    return Doc.Convert(function($1)
    {
     return a($1[0],$1[1]);
    },a$2);
   }((a$1=function(l)
   {
    var m;
    options[0]=l;
    m=function(i,x)
    {
     return[i,x];
    };
    return function(s)
    {
     return Seq.mapi(m,s);
    }(l);
   },function(a$2)
   {
    return View.Map(a$1,a$2);
   }(vOptions)));
  },current);
 };
 Doc.SelectImpl=function(attrs,show,optionElements,current)
 {
  var options,getIndex,setIndex,getSelectedItem,itemIndex,setSelectedItem,el,selectedItemAttr,v,attrs$1,x,a,a$1,a$2;
  options=[new List.T({
   $:0
  })];
  getIndex=function(el$1)
  {
   return el$1.selectedIndex;
  };
  setIndex=function(el$1,i)
  {
   el$1.selectedIndex=i;
  };
  getSelectedItem=function(el$1)
  {
   return options[0].get_Item(getIndex(el$1));
  };
  itemIndex=function(x$1)
  {
   return Seq.findIndex(function(y)
   {
    return Unchecked.Equals(x$1,y);
   },options[0]);
  };
  setSelectedItem=function(el$1,item)
  {
   return setIndex(el$1,itemIndex(item));
  };
  el=DomUtility.CreateElement("select");
  selectedItemAttr=(v=current.RView(),AttrModule.DynamicCustom(function($1)
  {
   return function($2)
   {
    return setSelectedItem($1,$2);
   };
  },v));
  el.addEventListener("change",function()
  {
   current.RUpdM(function(x$1)
   {
    var y;
    y=getSelectedItem(el);
    return Unchecked.Equals(x$1,y)?null:{
     $:1,
     $0:y
    };
   });
  },false);
  attrs$1=(x=(a=AttrProxy.Concat(attrs),AttrProxy.Append(selectedItemAttr,a)),(a$1=AttrModule.OnAfterRender(function(el$1)
  {
   setSelectedItem(el$1,current.RGet());
  }),AttrProxy.Append(a$1,x)));
  a$2=optionElements(options);
  return Elt.New(el,attrs$1,a$2);
 };
 Doc.InputArea=function(attr$1,_var)
 {
  return Doc.InputInternal("textarea",function()
  {
   return Seq.append(attr$1,[AttrModule.Value(_var)]);
  });
 };
 Doc.FloatInput=function(attr$1,_var)
 {
  return Doc.InputInternal("input",function()
  {
   return Seq.append(attr$1,[AttrModule.FloatValue(_var),AttrProxy.Create("type","number")]);
  });
 };
 Doc.FloatInputUnchecked=function(attr$1,_var)
 {
  return Doc.InputInternal("input",function()
  {
   return Seq.append(attr$1,[_var.RGet()===0?AttrProxy.Create("value","0"):Attrs$1.EmptyAttr(),AttrModule.FloatValueUnchecked(_var),AttrProxy.Create("type","number")]);
  });
 };
 Doc.IntInput=function(attr$1,_var)
 {
  return Doc.InputInternal("input",function()
  {
   return Seq.append(attr$1,[AttrModule.IntValue(_var),AttrProxy.Create("type","number")]);
  });
 };
 Doc.IntInputUnchecked=function(attr$1,_var)
 {
  return Doc.InputInternal("input",function()
  {
   return Seq.append(attr$1,[_var.RGet()===0?AttrProxy.Create("value","0"):Attrs$1.EmptyAttr(),AttrModule.IntValueUnchecked(_var),AttrProxy.Create("type","number")]);
  });
 };
 Doc.PasswordBox=function(attr$1,_var)
 {
  return Doc.InputInternal("input",function()
  {
   return Seq.append(attr$1,[AttrModule.Value(_var),AttrProxy.Create("type","password")]);
  });
 };
 Doc.Input=function(attr$1,_var)
 {
  return Doc.InputInternal("input",function()
  {
   return Seq.append(attr$1,[AttrModule.Value(_var)]);
  });
 };
 Doc.InputInternal=function(elemTy,attr$1)
 {
  var el,a,a$1;
  el=DomUtility.CreateElement(elemTy);
  a=AttrProxy.Concat(attr$1(el));
  a$1=Doc.Empty();
  return Elt.New(el,a,a$1);
 };
 Doc.ConvertSeqBy=function(key,render,view)
 {
  return Doc.Flatten(View.MapSeqCachedViewBy(key,function($1,$2)
  {
   return(render($1))($2);
  },view));
 };
 Doc.ConvertSeq=function(render,view)
 {
  return Doc.Flatten(View.MapSeqCachedView(render,view));
 };
 Doc.ConvertBy=function(key,render,view)
 {
  return Doc.Flatten(View.MapSeqCachedBy(key,render,view));
 };
 Doc.Convert=function(render,view)
 {
  return Doc.Flatten(View.MapSeqCached(render,view));
 };
 Doc.Flatten=function(view)
 {
  return Doc.EmbedView(View.Map(Doc.Concat,view));
 };
 Doc.GetOrLoadTemplate=function(baseName,name,els,fillWith)
 {
  Doc.PrepareTemplate(baseName,name,els);
  return Doc.NamedTemplate(baseName,name,fillWith);
 };
 Doc.NamedTemplate=function(baseName,name,fillWith)
 {
  var name$1,m,o,a;
  name$1=Doc.ComposeName(baseName,name);
  m=(o=null,[Docs$1.LoadedTemplates().TryGetValue(name$1,{
   get:function()
   {
    return o;
   },
   set:function(v)
   {
    o=v;
   }
  }),o]);
  return m[0]?(a=m[1].cloneNode(true),Doc.ChildrenTemplate(a,fillWith)):(Global.console.warn.apply(Global.console,["Local template doesn't exist"].concat([name$1])),Doc.Empty());
 };
 Doc.LoadLocalTemplates=function(baseName)
 {
  (function()
  {
   var a,m,m$1,name,name$1;
   while(true)
    {
     m=Global.document.querySelector("[ws-template]");
     if(Unchecked.Equals(m,null))
      {
       m$1=Global.document.querySelector("[ws-children-template]");
       if(Unchecked.Equals(m$1,null))
        return null;
       else
        {
         name=m$1.getAttribute("ws-children-template");
         m$1.removeAttribute("ws-children-template");
         a=function(n)
         {
          return function()
          {
           return DomUtility.ChildrenArray(n);
          };
         }(m$1);
         Doc.PrepareTemplate(baseName,{
          $:1,
          $0:name
         },a);
        }
      }
     else
      {
       name$1=m.getAttribute("ws-template");
       Doc.PrepareSingleTemplate(baseName,{
        $:1,
        $0:name$1
       },m);
      }
    }
  }());
 };
 Doc.PrepareTemplate=function(baseName,name,els)
 {
  var els$1,i,$1,el,m,v;
  if(!Docs$1.LoadedTemplates().ContainsKey(Doc.ComposeName(baseName,name)))
   {
    els$1=els();
    for(i=0,$1=els$1.length-1;i<=$1;i++){
     el=Arrays.get(els$1,i);
     m=el.parentElement;
     Unchecked.Equals(m,null)?void 0:v=m.removeChild(el);
    }
    Doc.PrepareTemplateStrict(baseName,name,els$1);
   }
 };
 Doc.PrepareTemplateStrict=function(baseName,name,els)
 {
  var convertAttrs,convertTextNode,mapHoles,fillInstanceAttrs,removeHolesExcept,fillTextHole,fill,fakeroot;
  function recF(recI,$1,$2)
  {
   var m,$3,x,a,f,g,v,name$1,name$2,t,instance,usedHoles,mappings,attrs,i,$4,name$3,mappedName,m$1,i$1,$5,n,singleTextFill,i$2,$6,n$1,next;
   while(true)
    switch(recI)
    {
     case 0:
      name$1=Slice.string($1.nodeName,{
       $:1,
       $0:3
      },null).toLowerCase();
      name$2=(m=name$1.indexOf(Global.String.fromCharCode(46)),m===-1?baseName+"/"+name$1:Strings.Replace(name$1,".","/"));
      if(!Docs$1.LoadedTemplates().ContainsKey(name$2))
       return Global.console.warn.apply(Global.console,["Instantiating non-loaded template"].concat([name$2]));
      else
       {
        t=Docs$1.LoadedTemplates().get_Item(name$2);
        instance=t.cloneNode(true);
        usedHoles=new HashSet$1.New$3();
        mappings=new Dictionary.New$5();
        attrs=$1.attributes;
        for(i=0,$4=attrs.length-1;i<=$4;i++){
         name$3=attrs.item(i).name.toLowerCase();
         mappedName=(m$1=attrs.item(i).nodeValue,m$1===""?name$3:m$1.toLowerCase());
         mappings.set_Item(name$3,mappedName);
         !usedHoles.Add(name$3)?Global.console.warn.apply(Global.console,["Hole mapped twice"].concat([name$3])):void 0;
        }
        for(i$1=0,$5=$1.childNodes.length-1;i$1<=$5;i$1++){
         n=$1.childNodes[i$1];
         Unchecked.Equals(n.nodeType,Global.Node.ELEMENT_NODE)?!usedHoles.Add(n.nodeName.toLowerCase())?Global.console.warn.apply(Global.console,["Hole filled twice"].concat([name$2])):void 0:void 0;
        }
        singleTextFill=$1.childNodes.length===1?Unchecked.Equals($1.firstChild.nodeType,Global.Node.TEXT_NODE):false;
        if(singleTextFill)
         {
          x=fillTextHole(instance,$1.firstChild.textContent);
          a=(f=function(usedHoles$1)
          {
           return function(a$1)
           {
            return usedHoles$1.Add(a$1);
           };
          }(usedHoles),g=function()
          {
          },function(x$1)
          {
           return g(f(x$1));
          });
          ((function(a$1)
          {
           return function(o)
           {
            if(o==null)
             ;
            else
             a$1(o.$0);
           };
          }(a))(x));
         }
        removeHolesExcept(instance,usedHoles);
        if(!singleTextFill)
         {
          for(i$2=0,$6=$1.childNodes.length-1;i$2<=$6;i$2++){
           n$1=$1.childNodes[i$2];
           Unchecked.Equals(n$1.nodeType,Global.Node.ELEMENT_NODE)?n$1.hasAttributes()?fillInstanceAttrs(instance,n$1):fillDocHole(instance,n$1):void 0;
          }
         }
        mapHoles(instance,mappings);
        (((function(a$1)
        {
         var c;
         c=function($7,$8)
         {
          return fill(a$1,$7,$8);
         };
         return function($7)
         {
          return function($8)
          {
           return c($7,$8);
          };
         };
        }(instance))($1.parentElement))($1));
        return v=$1.parentElement.removeChild($1);
       }
     case 1:
      if($2!==null)
       {
        next=$2.nextSibling;
        if(Unchecked.Equals($2.nodeType,Global.Node.TEXT_NODE))
         convertTextNode($2);
        else
         if(Unchecked.Equals($2.nodeType,Global.Node.ELEMENT_NODE))
          convertElement($2);
        recI=1;
        $1=$1;
        $2=next;
       }
      else
       return null;
    }
  }
  function fillDocHole(instance,fillWith)
  {
   var m,v,name$1,m$1,v$1;
   name$1=fillWith.nodeName.toLowerCase();
   DomUtility.IterSelector(instance,"[ws-attr-holes]",function(e)
   {
    var _this,holeAttrs,i,$1,attrName,_this$1,str,newSubStr;
    holeAttrs=(_this=e.getAttribute("ws-attr-holes"),Strings.SplitChars(_this,[32],1));
    for(i=0,$1=holeAttrs.length-1;i<=$1;i++){
     attrName=Arrays.get(holeAttrs,i);
     e.setAttribute(attrName,(_this$1=new Global.RegExp("\\${"+name$1+"}","ig"),str=e.getAttribute(attrName),newSubStr=fillWith.textContent,_this$1[Global.Symbol.replace](str,newSubStr)));
    }
   });
   convertElement(fillWith);
   m$1=instance.querySelector("[ws-hole="+name$1+"]");
   if(Unchecked.Equals(m$1,null))
    {
     m=instance.querySelector("[ws-replace="+name$1+"]");
     return Unchecked.Equals(m,null)?null:(((function(a)
     {
      var c;
      c=function($1,$2)
      {
       return fill(a,$1,$2);
      };
      return function($1)
      {
       return function($2)
       {
        return c($1,$2);
       };
      };
     }(fillWith))(m.parentElement))(m),v=m.parentElement.removeChild(m));
    }
   else
    {
     while(m$1.hasChildNodes())
      {
       v$1=m$1.removeChild(m$1.lastChild);
      }
     m$1.removeAttribute("ws-hole");
     return fill(fillWith,m$1,null);
    }
  }
  function convertInstantiation(el)
  {
   return recF(0,el);
  }
  function convertElement(el)
  {
   var _this,m,m$1,v;
   if((_this=el.nodeName.toLowerCase(),Strings.StartsWith(_this,"ws-"))?!el.hasAttribute("ws-template"):false)
    convertInstantiation(el);
   else
    {
     convertAttrs(el);
     m=el.getAttribute("ws-template");
     if(m===null)
      {
       m$1=el.getAttribute("ws-children-template");
       if(m$1===null)
        convert(el,el.firstChild);
       else
        {
         el.removeAttribute("ws-children-template");
         Doc.PrepareTemplate(baseName,{
          $:1,
          $0:m$1
         },function()
         {
          return DomUtility.ChildrenArray(el);
         });
         while(el.hasChildNodes())
          {
           v=el.removeChild(el.lastChild);
          }
        }
      }
     else
      Doc.PrepareSingleTemplate(baseName,{
       $:1,
       $0:m
      },el);
    }
  }
  function convert(p,n)
  {
   return recF(1,p,n);
  }
  convertAttrs=function(el)
  {
   var attrs,toRemove,events,holedAttrs,i,$1,a,_this,v,v$1,_this$1,a$1,_this$2,a$2,str,v$2;
   function lowercaseAttr(name$1)
   {
    var m;
    m=el.getAttribute(name$1);
    m===null?void 0:el.setAttribute(name$1,m.toLowerCase());
   }
   attrs=el.attributes;
   toRemove=[];
   events=[];
   holedAttrs=[];
   for(i=0,$1=attrs.length-1;i<=$1;i++){
    a=attrs.item(i);
    (((_this=a.nodeName,Strings.StartsWith(_this,"ws-on"))?a.nodeName!=="ws-onafterrender":false)?a.nodeName!=="ws-on":false)?(v=toRemove.push(a.nodeName),v$1=events.push(Slice.string(a.nodeName,{
     $:1,
     $0:"ws-on".length
    },null)+":"+a.nodeValue.toLowerCase())):(!(_this$1=a.nodeName,Strings.StartsWith(_this$1,"ws-"))?(a$1=Docs$1.TextHoleRE(),new Global.RegExp(a$1)).test(a.nodeValue):false)?(a.nodeValue=(_this$2=(a$2=Docs$1.TextHoleRE(),new Global.RegExp(a$2,"g")),(str=a.nodeValue,_this$2[Global.Symbol.replace](str,function($2,$3)
    {
     return"${"+$3.toLowerCase()+"}";
    }))),v$2=holedAttrs.push(a.nodeName)):void 0;
   }
   !(events.length==0)?el.setAttribute("ws-on",Strings.concat(" ",events)):void 0;
   !(holedAttrs.length==0)?el.setAttribute("ws-attr-holes",Strings.concat(" ",holedAttrs)):void 0;
   lowercaseAttr("ws-hole");
   lowercaseAttr("ws-replace");
   lowercaseAttr("ws-attr");
   lowercaseAttr("ws-onafterrender");
   lowercaseAttr("ws-var");
   Arrays.iter(function(a$3)
   {
    el.removeAttribute(a$3);
   },toRemove);
  };
  convertTextNode=function(n)
  {
   var m,li,$1,a,s,strRE,v,hole,v$1;
   m=null;
   li=0;
   s=n.textContent;
   strRE=(a=Docs$1.TextHoleRE(),new Global.RegExp(a,"g"));
   while(m=strRE.exec(s),m!==null)
    {
     v=n.parentNode.insertBefore(Global.document.createTextNode(Slice.string(s,{
      $:1,
      $0:li
     },{
      $:1,
      $0:strRE.lastIndex-Arrays.get(m,0).length-1
     })),n);
     li=strRE.lastIndex;
     hole=Global.document.createElement("span");
     hole.setAttribute("ws-replace",Arrays.get(m,1).toLowerCase());
     v$1=n.parentNode.insertBefore(hole,n);
    }
   strRE.lastIndex=0;
   n.textContent=Slice.string(s,{
    $:1,
    $0:li
   },null);
  };
  mapHoles=function(t,mappings)
  {
   function run(attrName)
   {
    DomUtility.IterSelector(t,"["+attrName+"]",function(e)
    {
     var m,o;
     m=(o=null,[mappings.TryGetValue(e.getAttribute(attrName).toLowerCase(),{
      get:function()
      {
       return o;
      },
      set:function(v)
      {
       o=v;
      }
     }),o]);
     m[0]?e.setAttribute(attrName,m[1]):void 0;
    });
   }
   run("ws-hole");
   run("ws-replace");
   run("ws-attr");
   run("ws-onafterrender");
   run("ws-var");
   DomUtility.IterSelector(t,"[ws-on]",function(e)
   {
    var s,m,_this;
    e.setAttribute("ws-on",(s=(m=function(x)
    {
     var a,m$1,o;
     a=Strings.SplitChars(x,[58],1);
     m$1=(o=null,[mappings.TryGetValue(Arrays.get(a,1),{
      get:function()
      {
       return o;
      },
      set:function(v)
      {
       o=v;
      }
     }),o]);
     return m$1[0]?Arrays.get(a,0)+":"+m$1[1]:x;
    },function(a)
    {
     return Arrays.map(m,a);
    }((_this=e.getAttribute("ws-on"),Strings.SplitChars(_this,[32],1)))),Strings.concat(" ",s)));
   });
   return DomUtility.IterSelector(t,"[ws-attr-holes]",function(e)
   {
    var _this,holeAttrs,i,$1;
    holeAttrs=(_this=e.getAttribute("ws-attr-holes"),Strings.SplitChars(_this,[32],1));
    for(i=0,$1=holeAttrs.length-1;i<=$1;i++)(function()
    {
     var attrName,x,f;
     attrName=Arrays.get(holeAttrs,i);
     return e.setAttribute(attrName,(x=e.getAttribute(attrName),((f=function(s,a)
     {
      var a$1,_this$1;
      a$1=Operators.KeyValue(a);
      _this$1=new Global.RegExp("\\${"+a$1[0]+"}","ig");
      return _this$1[Global.Symbol.replace](s,"${"+a$1[1]+"}");
     },(Runtime.Curried3(Seq.fold))(f))(x))(mappings)));
    }());
   });
  };
  fillInstanceAttrs=function(instance,fillWith)
  {
   var name$1,m,i,$1,a;
   convertAttrs(fillWith);
   name$1=fillWith.nodeName.toLowerCase();
   m=instance.querySelector("[ws-attr="+name$1+"]");
   if(Unchecked.Equals(m,null))
    return Global.console.warn.apply(Global.console,["Filling non-existent attr hole"].concat([name$1]));
   else
    {
     m.removeAttribute("ws-attr");
     for(i=0,$1=fillWith.attributes.length-1;i<=$1;i++){
      a=fillWith.attributes.item(i);
      (a.name==="class"?m.hasAttribute("class"):false)?m.setAttribute("class",m.getAttribute("class")+" "+a.nodeValue):m.setAttribute(a.name,a.nodeValue);
     }
     return;
    }
  };
  removeHolesExcept=function(instance,dontRemove)
  {
   function run(attrName)
   {
    DomUtility.IterSelector(instance,"["+attrName+"]",function(e)
    {
     if(!dontRemove.Contains(e.getAttribute(attrName)))
      e.removeAttribute(attrName);
    });
   }
   run("ws-hole");
   run("ws-attr");
   run("ws-onafterrender");
   run("ws-var");
   DomUtility.IterSelector(instance,"[ws-replace]",function(e)
   {
    var v;
    if(!dontRemove.Contains(e.getAttribute("ws-replace")))
     {
      v=e.parentElement.removeChild(e);
     }
   });
   DomUtility.IterSelector(instance,"[ws-on]",function(e)
   {
    var s,p,_this;
    e.setAttribute("ws-on",(s=(p=function(x)
    {
     var a;
     a=Strings.SplitChars(x,[58],1);
     return dontRemove.Contains(Arrays.get(a,1));
    },function(a)
    {
     return Arrays.filter(p,a);
    }((_this=e.getAttribute("ws-on"),Strings.SplitChars(_this,[32],1)))),Strings.concat(" ",s)));
   });
   return DomUtility.IterSelector(instance,"[ws-attr-holes]",function(e)
   {
    var _this,holeAttrs,i,$1,attrName,_this$1,a,str;
    holeAttrs=(_this=e.getAttribute("ws-attr-holes"),Strings.SplitChars(_this,[32],1));
    for(i=0,$1=holeAttrs.length-1;i<=$1;i++){
     attrName=Arrays.get(holeAttrs,i);
     e.setAttribute(attrName,(_this$1=(a=Docs$1.TextHoleRE(),new Global.RegExp(a,"g")),(str=e.getAttribute(attrName),_this$1[Global.Symbol.replace](str,function($2,$3)
     {
      return dontRemove.Contains($3)?$2:"";
     }))));
    }
   });
  };
  fillTextHole=function(instance,fillWith)
  {
   var m,v;
   m=instance.querySelector("[ws-replace]");
   return Unchecked.Equals(m,null)?(Global.console.warn.apply(Global.console,["Filling non-existent text hole"].concat([name])),null):(v=m.parentElement.replaceChild(new Global.Text(fillWith),m),{
    $:1,
    $0:m.getAttribute("ws-replace")
   });
  };
  fill=function(fillWith,p,n)
  {
   while(true)
    if(fillWith.hasChildNodes())
     n=p.insertBefore(fillWith.lastChild,n);
    else
     return null;
  };
  fakeroot=Doc.FakeRoot(els);
  Docs$1.LoadedTemplates().set_Item(Doc.ComposeName(baseName,name),fakeroot);
  Arrays.length(els)>0?convert(fakeroot,Arrays.get(els,0)):void 0;
 };
 Doc.ComposeName=function(baseName,name)
 {
  return(baseName+"/"+Operators.DefaultArg(name,"")).toLowerCase();
 };
 Doc.PrepareSingleTemplate=function(baseName,name,el)
 {
  var m,m$1,n,v;
  el.removeAttribute("ws-template");
  m=el.getAttribute("ws-replace");
  m===null?void 0:(el.removeAttribute("ws-replace"),m$1=el.parentElement,Unchecked.Equals(m$1,null)?void 0:(n=Global.document.createElement(el.tagName),n.setAttribute("ws-replace",m),v=m$1.replaceChild(n,el)));
  Doc.PrepareTemplateStrict(baseName,name,[el]);
 };
 Doc.FakeRoot=function(els)
 {
  var fakeroot,i,$1,v;
  fakeroot=Global.document.createElement("div");
  for(i=0,$1=els.length-1;i<=$1;i++){
   v=fakeroot.appendChild(Arrays.get(els,i));
  }
  return fakeroot;
 };
 Doc.ChildrenTemplate=function(el,fillWith)
 {
  var els,addAttr,tryGetAsDoc,docTreeNode,R,updates,d,$1,e,holes,updates$1,attrs,afterRender,fw,e$1,x;
  holes=[];
  updates$1=[];
  attrs=[];
  afterRender=[];
  fw=new Dictionary.New$5();
  e$1=Enumerator.Get(fillWith);
  try
  {
   while(e$1.MoveNext())
    {
     x=e$1.Current();
     fw.set_Item(x.$0,x);
    }
  }
  finally
  {
   if("Dispose"in e$1)
    e$1.Dispose();
  }
  els=DomUtility.ChildrenArray(el);
  addAttr=function(el$1,attr$1)
  {
   var attr$2,v,v$1,a;
   attr$2=Attrs$1.Insert(el$1,attr$1);
   v=updates$1.push(Attrs$1.Updates(attr$2));
   v$1=attrs.push([el$1,attr$2]);
   a=function(f)
   {
    var v$2;
    v$2=afterRender.push(function()
    {
     f(el$1);
    });
   };
   return function(o)
   {
    if(o==null)
     ;
    else
     a(o.$0);
   }(Runtime.GetOptional(attr$2.OnAfterRender));
  };
  tryGetAsDoc=function(name)
  {
   var o,$2,m,v,v$1,v$2,v$3,v$4;
   m=(o=null,[fw.TryGetValue(name,{
    get:function()
    {
     return o;
    },
    set:function(v$5)
    {
     o=v$5;
    }
   }),o]);
   switch(m[0]?m[1].$==0?0:m[1].$==1?1:m[1].$==2?2:m[1].$==6?3:m[1].$==7?4:m[1].$==8?5:m[1].$==9?6:m[1].$==10?7:m[1].$==11?8:9:9)
   {
    case 0:
     return{
      $:1,
      $0:m[1].$1
     };
     break;
    case 1:
     return{
      $:1,
      $0:Doc.TextNode(m[1].$1)
     };
     break;
    case 2:
     return{
      $:1,
      $0:Doc.TextView(m[1].$1)
     };
     break;
    case 3:
     return{
      $:1,
      $0:Doc.TextView(m[1].$1.RView())
     };
     break;
    case 4:
     return{
      $:1,
      $0:Doc.TextView((v=m[1].$1.RView(),View.Map(Global.String,v)))
     };
     break;
    case 5:
     return{
      $:1,
      $0:Doc.TextView((v$1=m[1].$1.RView(),View.Map(function(i)
      {
       return i.get_Input();
      },v$1)))
     };
     break;
    case 6:
     return{
      $:1,
      $0:Doc.TextView((v$2=m[1].$1.RView(),View.Map(Global.String,v$2)))
     };
     break;
    case 7:
     return{
      $:1,
      $0:Doc.TextView((v$3=m[1].$1.RView(),View.Map(function(i)
      {
       return i.get_Input();
      },v$3)))
     };
     break;
    case 8:
     return{
      $:1,
      $0:Doc.TextView((v$4=m[1].$1.RView(),View.Map(Global.String,v$4)))
     };
     break;
    case 9:
     return null;
     break;
   }
  };
  DomUtility.IterSelector(el,"[ws-hole]",function(p)
  {
   var m,doc,v,v$1,name,v$2;
   name=p.getAttribute("ws-hole");
   p.removeAttribute("ws-hole");
   while(p.hasChildNodes())
    {
     v$2=p.removeChild(p.lastChild);
    }
   m=tryGetAsDoc(name);
   (m!=null?m.$==1:false)?(doc=m.$0,Docs$1.LinkElement(p,doc.docNode),v=holes.push(DocElemNode.New(Attrs$1.Empty(p),doc.docNode,null,p,Fresh.Int(),null)),v$1=updates$1.push(doc.updates)):Global.console.warn.apply(Global.console,["Unfilled hole"].concat([name]));
  });
  DomUtility.IterSelector(el,"[ws-replace]",function(e$2)
  {
   var name,m,doc,p,after,v,before,a,p$1,v$1,v$2;
   name=e$2.getAttribute("ws-replace");
   m=tryGetAsDoc(name);
   (m!=null?m.$==1:false)?(doc=m.$0,p=e$2.parentElement,after=Global.document.createTextNode(""),v=p.replaceChild(after,e$2),before=Docs$1.InsertBeforeDelim(after,doc.docNode),a=function(i)
   {
    Arrays.set(els,i,doc.docNode);
   },function(o)
   {
    if(o==null)
     ;
    else
     a(o.$0);
   }((p$1=function(y)
   {
    return e$2===y;
   },function(a$1)
   {
    return Arrays.tryFindIndex(p$1,a$1);
   }(els))),v$1=holes.push(DocElemNode.New(Attrs$1.Empty(p),doc.docNode,{
    $:1,
    $0:[before,after]
   },p,Fresh.Int(),null)),v$2=updates$1.push(doc.updates)):Global.console.warn.apply(Global.console,["Unfilled replace"].concat([name]));
  });
  DomUtility.IterSelector(el,"[ws-attr]",function(e$2)
  {
   var name,m,o,$2;
   name=e$2.getAttribute("ws-attr");
   e$2.removeAttribute("ws-attr");
   m=(o=null,[fw.TryGetValue(name,{
    get:function()
    {
     return o;
    },
    set:function(v)
    {
     o=v;
    }
   }),o]);
   (m[0]?m[1].$==3?true:false:false)?addAttr(e$2,m[1].$1):Global.console.warn.apply(Global.console,["Unfilled attr"].concat([name]));
  });
  DomUtility.IterSelector(el,"[ws-on]",function(e$2)
  {
   var c,_this;
   addAttr(e$2,AttrProxy.Concat((c=function(x$1)
   {
    var a,m,o,$2,a$1,ps;
    a=Strings.SplitChars(x$1,[58],1);
    m=(o=null,[fw.TryGetValue(Arrays.get(a,1),{
     get:function()
     {
      return o;
     },
     set:function(v)
     {
      o=v;
     }
    }),o]);
    return(m[0]?m[1].$==4?true:false:false)?{
     $:1,
     $0:AttrModule.Handler(Arrays.get(a,0),m[1].$1)
    }:(a$1="Unfilled on"+Arrays.get(a,0),ps=[Arrays.get(a,1)],Global.console.warn.apply(Global.console,[a$1].concat(ps)),null);
   },function(a)
   {
    return Arrays.choose(c,a);
   }((_this=e$2.getAttribute("ws-on"),Strings.SplitChars(_this,[32],1))))));
   e$2.removeAttribute("ws-on");
  });
  DomUtility.IterSelector(el,"[ws-onafterrender]",function(e$2)
  {
   var name,m,o,$2;
   name=e$2.getAttribute("ws-onafterrender");
   m=(o=null,[fw.TryGetValue(name,{
    get:function()
    {
     return o;
    },
    set:function(v)
    {
     o=v;
    }
   }),o]);
   (m[0]?m[1].$==5?true:false:false)?(e$2.removeAttribute("ws-onafterrender"),addAttr(e$2,AttrModule.OnAfterRender(m[1].$1))):Global.console.warn.apply(Global.console,["Unfilled onafterrender"].concat([name]));
  });
  DomUtility.IterSelector(el,"[ws-var]",function(e$2)
  {
   var o,$2,name,m;
   name=e$2.getAttribute("ws-var");
   e$2.removeAttribute("ws-var");
   m=(o=null,[fw.TryGetValue(name,{
    get:function()
    {
     return o;
    },
    set:function(v)
    {
     o=v;
    }
   }),o]);
   switch(m[0]?m[1].$==6?0:m[1].$==7?1:m[1].$==8?2:m[1].$==9?3:m[1].$==10?4:m[1].$==11?5:6:6)
   {
    case 0:
     addAttr(e$2,AttrModule.Value(m[1].$1));
     break;
    case 1:
     addAttr(e$2,AttrModule.Checked(m[1].$1));
     break;
    case 2:
     addAttr(e$2,AttrModule.IntValue(m[1].$1));
     break;
    case 3:
     addAttr(e$2,AttrModule.IntValueUnchecked(m[1].$1));
     break;
    case 4:
     addAttr(e$2,AttrModule.FloatValue(m[1].$1));
     break;
    case 5:
     addAttr(e$2,AttrModule.FloatValueUnchecked(m[1].$1));
     break;
    case 6:
     Global.console.warn.apply(Global.console,["Unfilled var"].concat([name]));
     break;
   }
  });
  DomUtility.IterSelector(el,"[ws-attr-holes]",function(e$2)
  {
   var a,_this,re,holeAttrs,i,$2;
   re=(a=Docs$1.TextHoleRE(),new Global.RegExp(a,"g"));
   holeAttrs=(_this=e$2.getAttribute("ws-attr-holes"),Strings.SplitChars(_this,[32],1));
   e$2.removeAttribute("ws-attr-holes");
   for(i=0,$2=holeAttrs.length-1;i<=$2;i++)(function()
   {
    var m,lastIndex,$3,finalText,value,s,s$1,v,a$1,s$2,s$3,attrName,s$4,res,textBefore,v$1;
    attrName=Arrays.get(holeAttrs,i);
    s$4=e$2.getAttribute(attrName);
    m=null;
    lastIndex=0;
    res=[];
    while(m=re.exec(s$4),m!==null)
     {
      textBefore=Slice.string(s$4,{
       $:1,
       $0:lastIndex
      },{
       $:1,
       $0:re.lastIndex-Arrays.get(m,0).length-1
      });
      lastIndex=re.lastIndex;
      v$1=res.push([textBefore,Arrays.get(m,1)]);
     }
    finalText=Slice.string(s$4,{
     $:1,
     $0:lastIndex
    },null);
    re.lastIndex=0;
    value=Arrays.foldBack(function($4,$5)
    {
     return(function(t)
     {
      var textBefore$1,holeName;
      textBefore$1=t[0];
      holeName=t[1];
      return function(t$1)
      {
       var holeContent,o,$6,v$2,v$3,textAfter,views,m$1,v$4,v$5,v$6,v$7,v$8;
       textAfter=t$1[0];
       views=t$1[1];
       m$1=(o=null,[fw.TryGetValue(holeName,{
        get:function()
        {
         return o;
        },
        set:function(v$9)
        {
         o=v$9;
        }
       }),o]);
       switch(m$1[0]?m$1[1].$==1?0:m$1[1].$==2?1:m$1[1].$==6?2:m$1[1].$==7?3:m$1[1].$==8?4:m$1[1].$==9?5:m$1[1].$==10?6:m$1[1].$==11?7:8:8)
       {
        case 0:
         holeContent={
          $:0,
          $0:m$1[1].$1
         };
         break;
        case 1:
         holeContent={
          $:1,
          $0:m$1[1].$1
         };
         break;
        case 2:
         holeContent={
          $:1,
          $0:m$1[1].$1.RView()
         };
         break;
        case 3:
         holeContent={
          $:1,
          $0:(v$4=m$1[1].$1.RView(),View.Map(Global.String,v$4))
         };
         break;
        case 4:
         holeContent={
          $:1,
          $0:(v$5=m$1[1].$1.RView(),View.Map(function(i$1)
          {
           return i$1.get_Input();
          },v$5))
         };
         break;
        case 5:
         holeContent={
          $:1,
          $0:(v$6=m$1[1].$1.RView(),View.Map(Global.String,v$6))
         };
         break;
        case 6:
         holeContent={
          $:1,
          $0:(v$7=m$1[1].$1.RView(),View.Map(function(i$1)
          {
           return i$1.get_Input();
          },v$7))
         };
         break;
        case 7:
         holeContent={
          $:1,
          $0:(v$8=m$1[1].$1.RView(),View.Map(Global.String,v$8))
         };
         break;
        case 8:
         holeContent=(Global.console.warn.apply(Global.console,["Unfilled attribute hole"].concat([holeName])),{
          $:0,
          $0:""
         });
         break;
       }
       return holeContent.$==1?(v$2=holeContent.$0,v$3=textAfter===""?v$2:View.Map(function(s$5)
       {
        return s$5+textAfter;
       },v$2),[textBefore$1,new List.T({
        $:1,
        $0:v$3,
        $1:views
       })]):[textBefore$1+holeContent.$0+textAfter,views];
      };
     }($4))($5);
    },res,[finalText,new List.T({
     $:0
    })]);
    return addAttr(e$2,value[1].$==1?value[1].$1.$==1?value[1].$1.$1.$==1?value[1].$1.$1.$1.$==0?(s=value[0],AttrModule.Dynamic(attrName,View.Map3(function(v1,v2,v3)
    {
     return s+v1+v2+v3;
    },value[1].$0,value[1].$1.$0,value[1].$1.$1.$0))):(s$1=value[0],v=(a$1=function(vs)
    {
     return s$1+Strings.concat("",vs);
    },function(a$2)
    {
     return View.Map(a$1,a$2);
    }(View.Sequence(value[1]))),AttrModule.Dynamic(attrName,v)):(s$2=value[0],AttrModule.Dynamic(attrName,View.Map2(function(v1,v2)
    {
     return s$2+v1+v2;
    },value[1].$0,value[1].$1.$0))):value[0]===""?AttrModule.Dynamic(attrName,value[1].$0):(s$3=value[0],AttrModule.Dynamic(attrName,View.Map(function(v$2)
    {
     return s$3+v$2;
    },value[1].$0))):AttrProxy.Create(attrName,value[0]));
   }());
  });
  docTreeNode=(R=afterRender.length==0?null:{
   $:1,
   $0:function(el$1)
   {
    Arrays.iter(function(f)
    {
     f(el$1);
    },afterRender);
   }
  },Runtime.DeleteEmptyFields({
   Els:els,
   Dirty:true,
   Holes:holes,
   Attrs:attrs,
   Render:R?R.$0:void 0
  },["Render"]));
  updates=(d=View.Const(),function(a)
  {
   return Array.TreeReduce(d,View.Map2Unit,a);
  }(updates$1));
  return((els?Arrays.length(els)===1:false)?Arrays.get(els,0)instanceof Global.Node?(e=Arrays.get(els,0),Unchecked.Equals(e.nodeType,Global.Node.ELEMENT_NODE))?($1=Arrays.get(els,0),true):false:false:false)?Elt.TreeNode(docTreeNode,updates):Doc.Mk({
   $:6,
   $0:docTreeNode
  },updates);
 };
 Doc.Template=function(els,fillWith)
 {
  var a;
  a=Doc.FakeRoot(els);
  return Doc.ChildrenTemplate(a,fillWith);
 };
 Doc.TextView=function(txt)
 {
  var node,a,a$1;
  node=Docs$1.CreateTextNode();
  a={
   $:4,
   $0:node
  };
  return function(a$2)
  {
   return Doc.Mk(a,a$2);
  }((a$1=function(t)
  {
   Docs$1.UpdateTextNode(node,t);
  },function(a$2)
  {
   return View.Map(a$1,a$2);
  }(txt)));
 };
 Doc.RunReplaceById=function(id,tr)
 {
  var m;
  m=DomUtility.Doc().getElementById(id);
  Unchecked.Equals(m,null)?Operators.FailWith("invalid id: "+id):tr.ReplaceInDom(m);
 };
 Doc.RunById=function(id,tr)
 {
  var m;
  m=DomUtility.Doc().getElementById(id);
  Unchecked.Equals(m,null)?Operators.FailWith("invalid id: "+id):Doc.Run(m,tr);
 };
 Doc.Run=function(parent,doc)
 {
  var d,st,p;
  d=doc.docNode;
  Docs$1.LinkElement(parent,d);
  st=Docs$1.CreateRunState(parent,d);
  p=Mailbox.StartProcessor(Docs$1.PerformAnimatedUpdate(st,d));
  View.Sink(p,doc.updates);
 };
 Doc.RunPrependById=function(id,doc)
 {
  var m;
  m=DomUtility.Doc().getElementById(id);
  Unchecked.Equals(m,null)?Operators.FailWith("invalid id: "+id):Doc.RunPrepend(m,doc);
 };
 Doc.RunPrepend=function(parent,doc)
 {
  var rdelim,v;
  rdelim=Global.document.createTextNode("");
  v=parent.insertBefore(rdelim,parent.firstChild);
  Doc.RunBefore(rdelim,doc);
 };
 Doc.RunAppendById=function(id,doc)
 {
  var m;
  m=DomUtility.Doc().getElementById(id);
  Unchecked.Equals(m,null)?Operators.FailWith("invalid id: "+id):Doc.RunAppend(m,doc);
 };
 Doc.RunAppend=function(parent,doc)
 {
  var rdelim,v;
  rdelim=Global.document.createTextNode("");
  v=parent.appendChild(rdelim);
  Doc.RunBefore(rdelim,doc);
 };
 Doc.RunAfterById=function(id,doc)
 {
  var m;
  m=DomUtility.Doc().getElementById(id);
  Unchecked.Equals(m,null)?Operators.FailWith("invalid id: "+id):Doc.RunAfter(m,doc);
 };
 Doc.RunAfter=function(ldelim,doc)
 {
  var rdelim,v;
  rdelim=Global.document.createTextNode("");
  v=ldelim.parentNode.insertBefore(rdelim,ldelim.nextSibling);
  Doc.RunBetween(ldelim,rdelim,doc);
 };
 Doc.RunBeforeById=function(id,doc)
 {
  var m;
  m=DomUtility.Doc().getElementById(id);
  Unchecked.Equals(m,null)?Operators.FailWith("invalid id: "+id):Doc.RunBefore(m,doc);
 };
 Doc.RunBefore=function(rdelim,doc)
 {
  var ldelim,v;
  ldelim=Global.document.createTextNode("");
  v=rdelim.parentNode.insertBefore(ldelim,rdelim);
  Doc.RunBetween(ldelim,rdelim,doc);
 };
 Doc.RunBetween=function(ldelim,rdelim,doc)
 {
  var st,p;
  Docs$1.LinkPrevElement(rdelim,doc.docNode);
  st=Docs$1.CreateDelimitedRunState(ldelim,rdelim,doc.docNode);
  p=Mailbox.StartProcessor(Docs$1.PerformAnimatedUpdate(st,doc.docNode));
  View.Sink(p,doc.updates);
 };
 Doc.Async=function(a)
 {
  var a$1;
  return Doc.EmbedView((a$1=Global.id,function(a$2)
  {
   return View.MapAsync(a$1,a$2);
  }(View.Const(a))));
 };
 Doc.BindView=function(f,view)
 {
  return Doc.EmbedView(View.Map(f,view));
 };
 Doc.EmbedView=function(view)
 {
  var node,a,a$1,a$2;
  node=Docs$1.CreateEmbedNode();
  a={
   $:2,
   $0:node
  };
  return function(a$3)
  {
   return Doc.Mk(a,a$3);
  }((a$1=function()
  {
  },function(a$3)
  {
   return View.Map(a$1,a$3);
  }((a$2=function(doc)
  {
   Docs$1.UpdateEmbedNode(node,doc.docNode);
   return doc.updates;
  },function(a$3)
  {
   return View.Bind(a$2,a$3);
  }(view)))));
 };
 Doc.Static=function(el)
 {
  var a,a$1;
  a=Attrs$1.EmptyAttr();
  a$1=Doc.Empty();
  return Elt.New(el,a,a$1);
 };
 Doc.Mk=function(node,updates)
 {
  return new Doc.New(node,updates);
 };
 Doc.New=Runtime.Ctor(function(docNode,updates)
 {
  this.docNode=docNode;
  this.updates=updates;
 },Doc);
 Elt=Next.Elt=Runtime.Class({
  AddClass:function(cls)
  {
   return this.elt.className+=" "+cls;
  },
  SetStyle:function(style,value)
  {
   this.elt.style[style]=value;
  },
  HasClass:function(cls)
  {
   return(new Global.RegExp("(\\s|^)"+cls+"(\\s|$)")).test(this.elt.className);
  },
  RemoveClass:function(cls)
  {
   this.elt.className=this.elt.className.replace(new Global.RegExp("(?:(\\s|^)"+cls+")+(\\s|$)","g"),"$1");
  },
  GetProperty:function(name)
  {
   return this.elt[name];
  },
  SetProperty:function(name,value)
  {
   this.elt[name]=value;
  },
  RemoveAttribute:function(name)
  {
   this.elt.removeAttribute(name);
  },
  HasAttribute:function(name)
  {
   return this.elt.hasAttribute(name);
  },
  GetAttribute:function(name)
  {
   return this.elt.getAttribute(name);
  },
  SetAttribute:function(name,value)
  {
   this.elt.setAttribute(name,value);
  },
  SetText:function(v)
  {
   var m,e,a;
   m=this.docNode$1;
   m.$==1?m.$0.Children={
    $:3
   }:m.$==6?(e=m.$0,e.Els=[],e.Holes=[]):Operators.FailWith("Invalid docNode in Elt");
   a=View.Const();
   Var.Set(this.rvUpdates,a);
   this.elt.textContent=v;
  },
  GetText:function()
  {
   return this.elt.textContent;
  },
  SetValue:function(v)
  {
   this.elt.value=v;
  },
  GetValue:function()
  {
   return this.elt.value;
  },
  Id:function()
  {
   return this.elt.id;
  },
  Html:function()
  {
   return this.elt.outerHTML;
  },
  Clear:function()
  {
   var m,e,a,v;
   m=this.docNode$1;
   m.$==1?m.$0.Children={
    $:3
   }:m.$==6?(e=m.$0,(e.Els=[],e.Holes=[])):Operators.FailWith("Invalid docNode in Elt");
   a=View.Const();
   Var.Set(this.rvUpdates,a);
   while(this.elt.hasChildNodes())
    {
     v=this.elt.removeChild(this.elt.firstChild);
    }
  },
  Prepend:function(doc)
  {
   var m,e,pos,m$1,v,after,before,v$1,a;
   m=this.docNode$1;
   m.$==1?(e=m.$0,e.Children={
    $:0,
    $0:doc.docNode,
    $1:e.Children
   },pos=(m$1=this.elt.firstChild,Unchecked.Equals(m$1,null)?null:m$1),v=Docs$1.InsertDoc(this.elt,doc.docNode,pos)):m.$==6?(after=this.elt.insertBefore(Global.document.createTextNode(""),this.elt.firstChild),before=Docs$1.InsertBeforeDelim(after,doc.docNode),v$1=m.$0.Holes.push(DocElemNode.New(Attrs$1.Empty(this.elt),doc.docNode,{
    $:1,
    $0:[before,after]
   },this.elt,Fresh.Int(),null))):Operators.FailWith("Invalid docNode in Elt");
   a=View.Map2Unit(this.rvUpdates.c,doc.updates);
   Var.Set(this.rvUpdates,a);
  },
  Append:function(doc)
  {
   var m,e,v,after,before,v$1,a;
   m=this.docNode$1;
   m.$==1?(e=m.$0,e.Children={
    $:0,
    $0:e.Children,
    $1:doc.docNode
   },v=Docs$1.InsertDoc(this.elt,doc.docNode,null)):m.$==6?(after=this.elt.appendChild(Global.document.createTextNode("")),before=Docs$1.InsertBeforeDelim(after,doc.docNode),v$1=m.$0.Holes.push(DocElemNode.New(Attrs$1.Empty(this.elt),doc.docNode,{
    $:1,
    $0:[before,after]
   },this.elt,Fresh.Int(),null))):Operators.FailWith("Invalid docNode in Elt");
   a=View.Map2Unit(this.rvUpdates.c,doc.updates);
   Var.Set(this.rvUpdates,a);
  },
  ToUpdater:function()
  {
   var docTreeNode,m,$1;
   docTreeNode=(m=this.docNode$1,m.$==1?Runtime.DeleteEmptyFields({
    Els:[this.elt],
    Dirty:true,
    Holes:[m.$0],
    Attrs:[],
    Render:($1=null,$1?$1.$0:void 0)
   },["Render"]):m.$==6?m.$0:Operators.FailWith("Invalid docNode in Elt"));
   return new EltUpdater.New(docTreeNode,this.updates$1,this.elt,this.rvUpdates,Var.Create$1([]));
  },
  OnAfterRenderView:function(view,cb)
  {
   var $this,id;
   $this=this;
   id=Fresh.Id();
   this.Append(Doc.BindView(function(x)
   {
    $this.elt[id]=x;
    return Doc.Empty();
   },view));
   return this.OnAfterRender(function(e)
   {
    cb(e,e[id]);
   });
  },
  OnAfterRender:function(cb)
  {
   var m,e,m$1,f,e$1,m$2,f$1;
   m=this.docNode$1;
   m.$==1?(e=m.$0,Runtime.SetOptional(e,"Render",(m$1=Runtime.GetOptional(e.Render),(m$1!=null?m$1.$==1:false)?(f=m$1.$0,{
    $:1,
    $0:function(el)
    {
     f(el);
     cb(el);
    }
   }):{
    $:1,
    $0:cb
   }))):m.$==6?(e$1=m.$0,Runtime.SetOptional(e$1,"Render",(m$2=Runtime.GetOptional(e$1.Render),(m$2!=null?m$2.$==1:false)?(f$1=m$2.$0,{
    $:1,
    $0:function(el)
    {
     f$1(el);
     cb(el);
    }
   }):{
    $:1,
    $0:cb
   }))):Operators.FailWith("Invalid docNode in Elt");
   return this;
  },
  onView:function(ev,view,cb)
  {
   var cb$1;
   cb$1=cb(this.elt);
   this.elt.addEventListener(ev,function(ev$1)
   {
    var a;
    a=cb$1(ev$1);
    return View.Get(a,view);
   },false);
   return this;
  },
  on:function(ev,cb)
  {
   this.elt.addEventListener(ev,function(d)
   {
    return cb(d.target,d);
   },false);
   return this;
  }
 },Doc,Elt);
 Elt.TreeNode=function(tree,updates)
 {
  var rvUpdates,attrUpdates,x,m,f,d,updates$1;
  rvUpdates=Var.Create$1(updates);
  attrUpdates=(x=(m=(f=function(t)
  {
   return t[1];
  },function(x$1)
  {
   return Attrs$1.Updates(f(x$1));
  }),function(a)
  {
   return Arrays.map(m,a);
  }(tree.Attrs)),(d=View.Const(),Array.TreeReduce(d,View.Map2Unit,x)));
  updates$1=View.Bind(function(a)
  {
   return View.Map2Unit(attrUpdates,a);
  },rvUpdates.v);
  return new Elt.New$1({
   $:6,
   $0:tree
  },updates$1,Arrays.get(tree.Els,0),rvUpdates);
 };
 Elt.New=function(el,attr$1,children)
 {
  var node,rvUpdates,attrUpdates,updates;
  node=Docs$1.CreateElemNode(el,attr$1,children.docNode);
  rvUpdates=Var.Create$1(children.updates);
  attrUpdates=Attrs$1.Updates(node.Attr);
  updates=View.Bind(function(a)
  {
   return View.Map2Unit(attrUpdates,a);
  },rvUpdates.v);
  return new Elt.New$1({
   $:1,
   $0:node
  },updates,el,rvUpdates);
 };
 Elt.New$1=Runtime.Ctor(function(docNode,updates,elt,rvUpdates)
 {
  Doc.New.call(this,docNode,updates);
  this.docNode$1=docNode;
  this.updates$1=updates;
  this.elt=elt;
  this.rvUpdates=rvUpdates;
 },Elt);
 EltUpdater=Client.EltUpdater=Runtime.Class({
  RemoveAllUpdated:function()
  {
   this.treeNode.Holes=[];
   Var.Set(this.holeUpdates,[]);
  },
  RemoveUpdated:function(doc)
  {
   var m,k,p,a,p$1;
   m=doc.docNode;
   m.$==1?(k=m.$0.ElKey,this.treeNode.Holes=(p=function(h)
   {
    return h.ElKey!==k;
   },function(a$1)
   {
    return Arrays.filter(p,a$1);
   }(this.treeNode.Holes)),a=(p$1=function($1)
   {
    return $1===k?false:true;
   },function(a$1)
   {
    return Arrays.filter(function($1)
    {
     return p$1($1[0]);
    },a$1);
   }(this.holeUpdates.c)),Var.Set(this.holeUpdates,a)):Operators.FailWith("DocUpdater.RemoveUpdated expects a single element node");
  },
  AddUpdated:function(doc)
  {
   var m,e,v,hu,v$1;
   m=doc.docNode;
   m.$==1?(e=m.$0,v=this.treeNode.Holes.push(e),hu=this.holeUpdates.c,v$1=hu.push([e.ElKey,doc.updates]),Var.Set(this.holeUpdates,hu)):Operators.FailWith("DocUpdater.AddUpdated expects a single element node");
  }
 },Elt,EltUpdater);
 EltUpdater.New=Runtime.Ctor(function(treeNode,updates,elt,rvUpdates,holeUpdates)
 {
  var a,a$1,f,m,g,d;
  Elt.New$1.call(this,{
   $:6,
   $0:treeNode
  },(a=(a$1=(f=(m=function(t)
  {
   return t[1];
  },function(a$2)
  {
   return Arrays.map(m,a$2);
  }),(g=(d=View.Const(),function(a$2)
  {
   return Array.TreeReduce(d,View.Map2Unit,a$2);
  }),function(x)
  {
   return g(f(x));
  })),function(a$2)
  {
   return View.BindInner(a$1,a$2);
  }(holeUpdates.v)),View.Map2Unit(updates,a)),elt,rvUpdates);
  this.treeNode=treeNode;
  this.holeUpdates=holeUpdates;
 },EltUpdater);
 SC$8.$cctor=Runtime.Cctor(function()
 {
  SC$8.LoadedTemplates=new Dictionary.New$5();
  SC$8.TextHoleRE="\\${([^}]+)}";
  SC$8.$cctor=Global.ignore;
 });
 Flow=Next.Flow=Runtime.Class({
  get_Render:function()
  {
   return this.render;
  }
 },null,Flow);
 Flow.New=Runtime.Ctor(function(define)
 {
  Flow.New$1.call(this,function(_var)
  {
   return function(cont)
   {
    var a;
    a=define(cont);
    return Var.Set(_var,a);
   };
  });
 },Flow);
 Flow.New$1=Runtime.Ctor(function(render)
 {
  this.render=render;
 },Flow);
 Flow.get_Do=function()
 {
  return new FlowBuilder.New();
 };
 Flow.Static=function(doc)
 {
  return new Flow.New$1(function(_var)
  {
   return function(cont)
   {
    Var.Set(_var,doc);
    return cont();
   };
  });
 };
 Flow.Define=function(f)
 {
  return new Flow.New(function(x)
  {
   return f(function(a)
   {
    x(a);
   });
  });
 };
 Flow.Embed=function(fl)
 {
  var _var;
  _var=Var.Create$1(Doc.Empty());
  ((fl.get_Render())(_var))(function(v)
  {
  });
  return Doc.EmbedView(_var.v);
 };
 Flow.Return=function(x)
 {
  return new Flow.New$1(function()
  {
   return function(cont)
   {
    return cont(x);
   };
  });
 };
 Flow.Bind=function(m,k)
 {
  return new Flow.New$1(function(_var)
  {
   return function(cont)
   {
    return((m.get_Render())(_var))(function(r)
    {
     ((k(r).get_Render())(_var))(cont);
    });
   };
  });
 };
 Flow.Map=function(f,x)
 {
  return new Flow.New$1(function(_var)
  {
   return function(cont)
   {
    return((x.get_Render())(_var))(function(r)
    {
     cont(f(r));
    });
   };
  });
 };
 FlowBuilder=Next.FlowBuilder=Runtime.Class({
  ReturnFrom:Global.id,
  Return:function(value)
  {
   return Flow.Return(value);
  },
  Bind:function(comp,func)
  {
   return Flow.Bind(comp,func);
  }
 },null,FlowBuilder);
 FlowBuilder.New=Runtime.Ctor(function()
 {
 },FlowBuilder);
 attr=Html.attr=Runtime.Class({},null,attr);
 attr.New=Runtime.Ctor(function()
 {
 },attr);
 Route.Append=function(a,a$1)
 {
  return{
   $:0,
   $0:AppendList.Append(a.$0,a$1.$0),
   $1:Map.FoldBack(function($1,$2,$3)
   {
    return $3.Add($1,$2);
   },a.$1,a$1.$1)
  };
 };
 Route.FromList=function(xs,q)
 {
  return{
   $:0,
   $0:AppendList.FromArray(Arrays.ofList(xs)),
   $1:q
  };
 };
 Route.ToList=function(a)
 {
  return[List.ofArray(AppendList.ToArray(a.$0)),a.$1];
 };
 Route.SameHash=function(a,b)
 {
  return Route.NoHash(a)===Route.NoHash(b);
 };
 Route.MakeHash=function(a)
 {
  var query,path,s,a$1,s$1,m;
  query=a.$1;
  path=(s=(a$1=AppendList.ToArray(a.$0),Arrays.map(function(x)
  {
   return Global.encodeURIComponent(x);
  },a$1)),Strings.concat("/",s));
  return query.get_IsEmpty()?path:path+"?"+(s$1=(m=function(a$2)
  {
   var a$3;
   a$3=Operators.KeyValue(a$2);
   return Global.encodeURIComponent(a$3[0])+"="+Global.encodeURIComponent(a$3[1]);
  },function(s$2)
  {
   return Seq.map(m,s$2);
  }(query)),Strings.concat("&",s$1));
 };
 Route.ParseHash=function(hash)
 {
  var hash$1,p,m,path,path$1,a,m$1;
  hash$1=Route.NoHash(hash);
  p=(m=hash$1.indexOf(Global.String.fromCharCode(63)),m===-1?[hash$1,""]:[Slice.string(hash$1,null,{
   $:1,
   $0:m-1
  }),Slice.string(hash$1,{
   $:1,
   $0:m+1
  },null)]);
  path=p[0];
  path$1=AppendList.FromArray(path===""?[]:(a=Strings.SplitChars(path,[47],0),Arrays.map(function(x)
  {
   return Global.decodeURIComponent(x);
  },a)));
  return{
   $:0,
   $0:path$1,
   $1:Map.OfArray((m$1=function(s)
   {
    var m$2,x,x$1;
    m$2=s.indexOf(Global.String.fromCharCode(61));
    return m$2===-1?[Global.decodeURIComponent(s),""]:[(x=Slice.string(s,null,{
     $:1,
     $0:m$2-1
    }),Global.decodeURIComponent(x)),(x$1=Slice.string(s,{
     $:1,
     $0:m$2+1
    },null),Global.decodeURIComponent(x$1))];
   },function(a$1)
   {
    return Arrays.map(m$1,a$1);
   }(Strings.SplitChars(p[1],[38],0))))
  };
 };
 Route.NoHash=function(s)
 {
  return Strings.StartsWith(s,"#")?s.substring(1):s;
 };
 State.New=function(Bodies,CurrentRoute,CurrentSite,Selection)
 {
  return{
   Bodies:Bodies,
   CurrentRoute:CurrentRoute,
   CurrentSite:CurrentSite,
   Selection:Selection
  };
 };
 Routing.Install=function(key,a)
 {
  var va,currentRoute,state,siteTrie,a$1,parseRoute,glob,m,site,a$2;
  function updateRoute(route)
  {
   var m$1,r;
   m$1=parseRoute(route);
   m$1.$==1?void 0:(r=Route.FromList(m$1.$1,new FSharpMap.New([])),Routing.OnGlobalRouteChange(state,m$1.$0,r));
  }
  va=a.$0;
  currentRoute=Routing.InstallMap({
   Des:function(t)
   {
    return Route.FromList(t[0],t[1]);
   },
   Ser:Route.ToList
  });
  state=State.New(void 0,currentRoute,0,void 0);
  siteTrie=(a$1=function(prefix,a$3)
  {
   var id;
   id=a$3.$0;
   return a$3.$1({
    UpdateRoute:function(r)
    {
     Routing.OnInternalSiteUpdate(state,id,prefix,r);
    }
   });
  },function(a$3)
  {
   return Trie.Map(function($1)
   {
    return function($2)
    {
     return a$1($1,$2);
    };
   },a$3);
  }(a.$1));
  state.Bodies=Routing.ComputeBodies(siteTrie);
  parseRoute=function(route)
  {
   var p;
   p=Route.ToList(route);
   return Trie.Lookup(siteTrie,p[0]);
  };
  glob=(m=parseRoute(currentRoute.c),m.$==0?(site=m.$0,(state.CurrentSite=site.RouteId,Var.Create$1(site.RouteValue))):Var.Create$1((va!=null?va.$==1:false)?va.$0:Operators.FailWith("Site.Install fails on empty site")));
  state.Selection=glob;
  a$2=function(site$1)
  {
   Routing.OnSelectSite(state,key(site$1));
  };
  (function(a$3)
  {
   View.Sink(a$2,a$3);
  }(glob.v));
  updateRoute(currentRoute.c);
  View.Sink(updateRoute,currentRoute.v);
  return glob;
 };
 Routing.OnSelectSite=function(state,a)
 {
  var id;
  id=a.$0;
  state.CurrentSite!==id?(state.CurrentSite=id,state.Bodies.get_Item(id).OnSelect()):void 0;
 };
 Routing.OnInternalSiteUpdate=function(state,ix,prefix,rest)
 {
  var route;
  if(state.CurrentSite===ix)
   {
    route=Route.Append(Route.FromList(prefix,new FSharpMap.New([])),rest);
    Routing.SetCurrentRoute(state,route);
   }
 };
 Routing.OnGlobalRouteChange=function(state,site,rest)
 {
  state.CurrentSite!==site.RouteId?(state.CurrentSite=site.RouteId,Var.Set(state.Selection,site.RouteValue)):void 0;
  site.OnRouteChanged(rest);
 };
 Routing.SetCurrentRoute=function(state,route)
 {
  if(!Unchecked.Equals(state.CurrentRoute.c,route))
   Var.Set(state.CurrentRoute,route);
 };
 Routing.ComputeBodies=function(trie)
 {
  var d,a;
  d=new Dictionary.New$5();
  a=function(body)
  {
   d.set_Item(body.RouteId,body);
  };
  (function(a$1)
  {
   Arrays.iter(a,a$1);
  }(Trie.ToArray(trie)));
  return d;
 };
 Routing.MergeRouters=function(sites)
 {
  var sites$1,merged,m,value,c;
  sites$1=Array.ofSeqNonCopying(sites);
  merged=Trie.Merge((m=function(a)
  {
   return a.$1;
  },function(s)
  {
   return Seq.map(m,s);
  }(sites$1)));
  value=(c=function(a)
  {
   return a.$0;
  },function(s)
  {
   return Seq.tryPick(c,s);
  }(sites$1));
  return(merged!=null?merged.$==1:false)?{
   $:0,
   $0:value,
   $1:merged.$0
  }:Operators.FailWith("Invalid Site.Merge: need more prefix disambiguation");
 };
 Routing.DefineRoute=function(r,init,render)
 {
  var state,id,site;
  state=Var.Create$1(init);
  id=Fresh.Int();
  site=render({
   $:0,
   $0:id
  },state);
  return{
   $:0,
   $0:{
    $:1,
    $0:site
   },
   $1:Trie.Leaf({
    $:0,
    $0:id,
    $1:function(ctx)
    {
     var a;
     a=function(va)
     {
      ctx.UpdateRoute(Routing.DoLink(r,va));
     };
     (function(a$1)
     {
      View.Sink(a,a$1);
     }(state.v));
     return{
      OnRouteChanged:function(route)
      {
       var a$1;
       a$1=Routing.DoRoute(r,route);
       Var.Set(state,a$1);
      },
      OnSelect:function()
      {
       ctx.UpdateRoute(Routing.DoLink(r,state.c));
      },
      RouteId:id,
      RouteValue:site
     };
    }
   })
  };
 };
 Routing.DoLink=function(map,va)
 {
  var t;
  t=map.Ser(va);
  return Route.FromList(t[0],t[1]);
 };
 Routing.DoRoute=function(map,route)
 {
  return map.Des(Route.ToList(route));
 };
 Routing.InstallMap=function(rt)
 {
  var win,same,cur,_var,set,a;
  function onUpdate(evt)
  {
   return set(cur());
  }
  win=Global.window;
  same=function(a$1,b)
  {
   return Unchecked.Equals(rt.Ser(a$1),rt.Ser(b));
  };
  cur=function()
  {
   return rt.Des(Route.ToList(Route.ParseHash(win.location.hash)));
  };
  _var=Var.Create$1(cur());
  set=function(value)
  {
   if(!same(_var.c,value))
    Var.Set(_var,value);
  };
  win.onpopstate=onUpdate;
  win.onhashchange=onUpdate;
  a=function(loc)
  {
   var ha,t;
   ha=Route.MakeHash((t=rt.Ser(loc),Route.FromList(t[0],t[1])));
   !Route.SameHash(win.location.hash,ha)?win.location.replace("#"+ha):void 0;
  };
  (function(a$1)
  {
   View.Sink(a,a$1);
  }(_var.v));
  return _var;
 };
 RouteMap.Install=function(map)
 {
  return Routing.InstallMap(map);
 };
 RouteMap.Create=function(ser,des)
 {
  var f;
  return{
   Des:(f=function(t)
   {
    return t[0];
   },function(x)
   {
    return des(f(x));
   }),
   Ser:function(x)
   {
    return[ser(x),new FSharpMap.New([])];
   }
  };
 };
 RouteMap.CreateWithQuery=function(ser,des)
 {
  return{
   Des:des,
   Ser:ser
  };
 };
 Router.Route=function(r,init,render)
 {
  return Routing.DefineRoute(r,init,render);
 };
 Router.Prefix=function(prefix,a)
 {
  return{
   $:0,
   $0:a.$0,
   $1:Trie.Prefix(prefix,a.$1)
  };
 };
 Router.Merge=function(sites)
 {
  return Routing.MergeRouters(sites);
 };
 Router.Install=function(key,site)
 {
  return Routing.Install(key,site);
 };
 Router.Dir=function(prefix,sites)
 {
  var a;
  a=Router.Merge(sites);
  return Router.Prefix(prefix,a);
 };
 MousePosSt.New=function(Active,PosV)
 {
  return{
   Active:Active,
   PosV:PosV
  };
 };
 MouseBtnSt.New=function(Active,Left,Middle,Right)
 {
  return{
   Active:Active,
   Left:Left,
   Middle:Middle,
   Right:Right
  };
 };
 Mouse.get_MousePressed=function()
 {
  var a,a$1,a$2,a$3,a$4,a$5;
  Input.ActivateButtonListener();
  a=(a$1=(a$2=View.Const(Runtime.Curried3(function(l,m,r)
  {
   return(l?true:m)?true:r;
  })),(a$3=Input.MouseBtnSt$1().Left.v,View.Apply(a$2,a$3))),(a$4=Input.MouseBtnSt$1().Middle.v,View.Apply(a$1,a$4)));
  a$5=Input.MouseBtnSt$1().Right.v;
  return View.Apply(a,a$5);
 };
 Mouse.get_RightPressed=function()
 {
  Input.ActivateButtonListener();
  return Input.MouseBtnSt$1().Right.v;
 };
 Mouse.get_MiddlePressed=function()
 {
  Input.ActivateButtonListener();
  return Input.MouseBtnSt$1().Middle.v;
 };
 Mouse.get_LeftPressed=function()
 {
  Input.ActivateButtonListener();
  return Input.MouseBtnSt$1().Left.v;
 };
 Mouse.get_Position=function()
 {
  !Input.MousePosSt$1().Active?(Global.document.addEventListener("mousemove",function(evt)
  {
   var a,a$1;
   a=Input.MousePosSt$1().PosV;
   a$1=[evt.clientX,evt.clientY];
   Var.Set(a,a$1);
  },false),Input.MousePosSt$1().Active=true):void 0;
  return Input.MousePosSt$1().PosV.v;
 };
 KeyListenerSt.New=function(KeysPressed,KeyListenerActive,LastPressed)
 {
  return{
   KeysPressed:KeysPressed,
   KeyListenerActive:KeyListenerActive,
   LastPressed:LastPressed
  };
 };
 Keyboard.IsPressed=function(key)
 {
  var a,p;
  Input.ActivateKeyListener();
  a=Input.KeyListenerState().KeysPressed.v;
  return View.Map((p=function(x)
  {
   return x===key;
  },function(l)
  {
   return List.exists(p,l);
  }),a);
 };
 Keyboard.get_LastPressed=function()
 {
  Input.ActivateKeyListener();
  return Input.KeyListenerState().LastPressed.v;
 };
 Keyboard.get_KeysPressed=function()
 {
  Input.ActivateKeyListener();
  return Input.KeyListenerState().KeysPressed.v;
 };
 Input.ActivateKeyListener=function()
 {
  SC$9.$cctor();
  return SC$9.ActivateKeyListener;
 };
 Input.KeyListenerState=function()
 {
  SC$9.$cctor();
  return SC$9.KeyListenerState;
 };
 Input.ActivateButtonListener=function()
 {
  SC$9.$cctor();
  return SC$9.ActivateButtonListener;
 };
 Input.MouseBtnSt$1=function()
 {
  SC$9.$cctor();
  return SC$9.MouseBtnSt;
 };
 Input.MousePosSt$1=function()
 {
  SC$9.$cctor();
  return SC$9.MousePosSt;
 };
 SC$9.$cctor=Runtime.Cctor(function()
 {
  var buttonListener,v,_this,element,a,v$1,_this$1,element$1,a$1;
  SC$9.MousePosSt=MousePosSt.New(false,Var.Create$1([0,0]));
  SC$9.MouseBtnSt=MouseBtnSt.New(false,Var.Create$1(false),Var.Create$1(false),Var.Create$1(false));
  SC$9.ActivateButtonListener=(buttonListener=function(evt,down)
  {
   var m,a$2,a$3,a$4;
   m=evt.button;
   return m===0?(a$2=Input.MouseBtnSt$1().Left,Var.Set(a$2,down)):m===1?(a$3=Input.MouseBtnSt$1().Middle,Var.Set(a$3,down)):m===2?(a$4=Input.MouseBtnSt$1().Right,Var.Set(a$4,down)):null;
  },!Input.MouseBtnSt$1().Active?(Input.MouseBtnSt$1().Active=true,Global.document.addEventListener("mousedown",function(evt)
  {
   return buttonListener(evt,true);
  },false),Global.document.addEventListener("mouseup",function(evt)
  {
   return buttonListener(evt,false);
  },false)):null);
  SC$9.KeyListenerState=KeyListenerSt.New(Var.Create$1(new List.T({
   $:0
  })),false,Var.Create$1(-1));
  SC$9.ActivateKeyListener=!Input.KeyListenerState().KeyListenerActive?(v=(_this=(element=Global.document,Global.jQuery(element)),(a=function(el,evt)
  {
   var keyCode,a$2,xs,a$3,a$4;
   keyCode=evt.which;
   a$2=Input.KeyListenerState().LastPressed;
   Var.Set(a$2,keyCode);
   xs=Input.KeyListenerState().KeysPressed.c;
   return!List.exists(function(x)
   {
    return x===keyCode;
   },xs)?(a$3=Input.KeyListenerState().KeysPressed,(a$4=List.append(xs,List.ofArray([keyCode])),Var.Set(a$3,a$4))):null;
  },_this.keydown(function($1)
  {
   return a(this,$1);
  }))),v$1=(_this$1=(element$1=Global.document,Global.jQuery(element$1)),(a$1=function(el,evt)
  {
   var keyCode,a$2,p;
   keyCode=evt.which;
   a$2=Input.KeyListenerState().KeysPressed;
   return Var.Update(a$2,(p=function(x)
   {
    return x!==keyCode;
   },function(l)
   {
    return List.filter(p,l);
   }));
  },_this$1.keyup(function($1)
  {
   return a$1(this,$1);
  })))):null;
  SC$9.$cctor=Global.ignore;
 });
}());
