(function()
{
 "use strict";
 var Global,WebSharper,UI,Next,CSharp,ViewExtensions,DocExtension,Client,Helpers,RouteMapBuilder,RouteItemParsers,View,Doc,Var,List,IntelliFactory,Runtime,RouteMap,Seq,Unchecked,Arrays,Collections,FSharpMap,Option,Map,Nullable,Operators;
 Global=window;
 WebSharper=Global.WebSharper=Global.WebSharper||{};
 UI=WebSharper.UI=WebSharper.UI||{};
 Next=UI.Next=UI.Next||{};
 CSharp=Next.CSharp=Next.CSharp||{};
 ViewExtensions=CSharp.ViewExtensions=CSharp.ViewExtensions||{};
 DocExtension=CSharp.DocExtension=CSharp.DocExtension||{};
 Client=CSharp.Client=CSharp.Client||{};
 Helpers=Client.Helpers=Client.Helpers||{};
 RouteMapBuilder=Client.RouteMapBuilder=Client.RouteMapBuilder||{};
 RouteItemParsers=Client.RouteItemParsers=Client.RouteItemParsers||{};
 View=Next&&Next.View;
 Doc=Next&&Next.Doc;
 Var=Next&&Next.Var;
 List=WebSharper&&WebSharper.List;
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 RouteMap=Next&&Next.RouteMap;
 Seq=WebSharper&&WebSharper.Seq;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 Arrays=WebSharper&&WebSharper.Arrays;
 Collections=WebSharper&&WebSharper.Collections;
 FSharpMap=Collections&&Collections.FSharpMap;
 Option=WebSharper&&WebSharper.Option;
 Map=Collections&&Collections.Map;
 Nullable=WebSharper&&WebSharper.Nullable;
 Operators=WebSharper&&WebSharper.Operators;
 ViewExtensions.UpdateWhile=function(va,a,vb)
 {
  return View.UpdateWhile(a,vb,va);
 };
 DocExtension.DocSeqCached=function(v,f,g)
 {
  var a;
  a=function(a$1,b)
  {
   return g(a$1,b);
  };
  return Doc.ConvertSeqBy(f,function($1)
  {
   return function($2)
   {
    return a($1,$2);
   };
  },v);
 };
 Helpers.seqRefToListRef=function(l)
 {
  var a;
  a=function(a$1,b)
  {
   return b;
  };
  return Var.Lens(l,List.ofSeq,function($1,$2)
  {
   return a($1,$2);
  });
 };
 RouteMapBuilder=Client.RouteMapBuilder=Runtime.Class({
  Install:function()
  {
   var routeMap,_var,renders,m,v;
   routeMap=this.ToRouteMap();
   _var=RouteMap.Install(routeMap);
   renders=(m=function(f,r)
   {
    return f(function(d)
    {
     return Var.Set(_var,d);
    },r);
   },function(l)
   {
    return List.map(function($1)
    {
     return function($2)
     {
      return m($1,$2);
     };
    },l);
   }(List.rev(this.renders)));
   v=_var.v;
   return Doc.BindView(function(r)
   {
    return Seq.pick(function(f)
    {
     return f(r);
    },renders);
   },v);
  },
  ToRouteMap:function()
  {
   var links,routes;
   links=List.rev(this.links);
   routes=List.rev(this.routes);
   return RouteMap.CreateWithQuery(function(a)
   {
    return Seq.pick(function(f)
    {
     return f(a);
    },links);
   },function(r)
   {
    return Seq.pick(function(f)
    {
     return f(r);
    },routes);
   });
  },
  AddRender:function(r)
  {
   this.renders=new List.T({
    $:1,
    $0:r,
    $1:this.renders
   });
  },
  AddLink:function(l)
  {
   this.links=new List.T({
    $:1,
    $0:l,
    $1:this.links
   });
  },
  AddRoute:function(r)
  {
   this.routes=new List.T({
    $:1,
    $0:r,
    $1:this.routes
   });
  }
 },null,RouteMapBuilder);
 RouteMapBuilder.New=Runtime.Ctor(function()
 {
  this.links=new List.T({
   $:0
  });
  this.routes=new List.T({
   $:0
  });
  this.renders=new List.T({
   $:0
  });
 },RouteMapBuilder);
 RouteItemParsers["System.Double"]=function(a)
 {
  var x,x$1,rest,m,x$2;
  x=a[0];
  return x.$==1?(x$1=x.$0,(rest=x.$1,(m=(new Global.RegExp("^[0-9](?:\\.[0-9]*)?$")).exec(x$1),Unchecked.Equals(m,null)?null:{
   $:1,
   $0:[(x$2=Arrays.get(m,0),Global.parseFloat(x$2)),rest]
  }))):null;
 };
 RouteItemParsers["System.Int32"]=function(a)
 {
  var x,x$1,rest,m,a$1;
  x=a[0];
  return x.$==1?(x$1=x.$0,(rest=x.$1,(m=(new Global.RegExp("^[0-9]+$")).exec(x$1),Unchecked.Equals(m,null)?null:{
   $:1,
   $0:[(a$1=Arrays.get(m,0),Global.parseInt(a$1,Global.$1)),rest]
  }))):null;
 };
 RouteItemParsers["System.String"]=function(a)
 {
  var x;
  x=a[0];
  return x.$==1?{
   $:1,
   $0:[x.$0,x.$1]
  }:null;
 };
 RouteItemParsers.MakeLink=function(shape)
 {
  return function(value)
  {
   var name,args,map,m,linkItem,m$1,g,items,m$2;
   return shape.$==1?(name=shape.$1,(args=shape.$2,(map=[new FSharpMap.New([])],[List.append(Option.toList(name),List.ofSeq((m=function(name$1,queryItem,a,link)
   {
    var p,m$3,l,x,m$4,x$1,v;
    return Unchecked.Equals(queryItem,0)?(p=link(value[name$1]),(m$3=p[1],(l=p[0],(map[0]=Map.FoldBack(function($1,$2,$3)
    {
     return $3.Add($1,$2);
    },m$3,map[0]),l)))):Unchecked.Equals(queryItem,1)?(x=List.head((link(value[name$1]))[0]),(map[0]=map[0].Add(name$1,x),new List.T({
     $:0
    }))):Unchecked.Equals(queryItem,2)?(m$4=value[name$1],(m$4!=null?m$4.$==1:false)?(x$1=m$4.$0,map[0]=map[0].Add(name$1,List.head((link(x$1))[0]))):void 0,new List.T({
     $:0
    })):Unchecked.Equals(queryItem,3)?(v=value[name$1],(v!=null?map[0]=map[0].Add(name$1,List.head((link(Nullable.get(v)))[0])):void 0,new List.T({
     $:0
    }))):Operators.FailWith("invalid QueryItem enum value");
   },function(s)
   {
    return Seq.collect(function($1)
    {
     return m($1[0],$1[1],$1[2],$1[3]);
    },s);
   }(args)))),map[0]]))):shape.$==2?(linkItem=shape.$2,[new List.T({
    $:1,
    $0:Global.String(Seq.length(value)),
    $1:List.ofSeq((m$1=(g=function(t)
    {
     return t[0];
    },function(x)
    {
     return g(linkItem(x));
    }),function(s)
    {
     return Seq.collect(m$1,s);
    }(value)))
   }),new FSharpMap.New([])]):shape.$==3?(items=shape.$0,[List.ofSeq(Seq.concat(((m$2=function(a,link)
   {
    return function(x)
    {
     return(link(x))[0];
    };
   },(Runtime.Curried3(Seq.map2))(function($1,$2)
   {
    return(function($3)
    {
     return m$2($3[0],$3[1]);
    }($1))($2);
   }))(items))(value))),new FSharpMap.New([])]):[List.ofArray([Global.String(value)]),new FSharpMap.New([])];
  };
 };
 RouteItemParsers.ParseRoute=function(shape)
 {
  var f,g,b;
  f=RouteItemParsers.ParseShape(shape);
  g=(b=function($1,$2)
  {
   return $2.$==0?{
    $:1,
    $0:$1
   }:null;
  },function(o)
  {
   return o==null?null:b.apply(null,o.$0);
  });
  return function(x)
  {
   return g(f(x));
  };
 };
 RouteItemParsers.ParseShape=function(shape)
 {
  return function(t)
  {
   var path,query,args,init,name,$1,fromArray,parseItem,b,items,t$1,m,f;
   function parseArgs(init$1,rest,args$1)
   {
    var v,m$1,f$1;
    v=init$1();
    m$1=function(rest$1)
    {
     return[v,rest$1];
    };
    return function(o)
    {
     return o==null?null:{
      $:1,
      $0:m$1(o.$0)
     };
    }(((f$1=function(rest$1,t$2)
    {
     var name$1,queryItem,parse,rest$2,m$2,rest$3,m$3,m$4,x,m$5,m$6,x$1,m$7;
     name$1=t$2[0];
     queryItem=t$2[1];
     parse=t$2[2];
     return(rest$1!=null?rest$1.$==1:false)?(rest$2=rest$1.$0,Unchecked.Equals(queryItem,0)?(m$2=parse([rest$2,query]),(m$2!=null?m$2.$==1:false)?(rest$3=m$2.$0[1],(v[name$1]=m$2.$0[0],{
      $:1,
      $0:rest$3
     })):null):Unchecked.Equals(queryItem,1)?(m$3=Map.TryFind(name$1,query),m$3==null?null:(v[name$1]=m$3.$0,{
      $:1,
      $0:rest$2
     })):Unchecked.Equals(queryItem,2)?(m$4=Map.TryFind(name$1,query),(m$4!=null?m$4.$==1:false)?(x=m$4.$0,(m$5=parse([List.ofArray([x]),new FSharpMap.New([])]),(m$5!=null?m$5.$==1:false)?(v[name$1]={
      $:1,
      $0:m$5.$0[0]
     },{
      $:1,
      $0:rest$2
     }):null)):(v[name$1]=null,{
      $:1,
      $0:rest$2
     })):Unchecked.Equals(queryItem,3)?(m$6=Map.TryFind(name$1,query),(m$6!=null?m$6.$==1:false)?(x$1=m$6.$0,(m$7=parse([List.ofArray([x$1]),new FSharpMap.New([])]),(m$7!=null?m$7.$==1:false)?(v[name$1]=m$7.$0[0],{
      $:1,
      $0:rest$2
     }):null)):(v[name$1]=null,{
      $:1,
      $0:rest$2
     })):Operators.FailWith("invalid QueryItem enum value")):null;
    },(Runtime.Curried3(Arrays.fold))(f$1))({
     $:1,
     $0:rest
    }))(args$1));
   }
   path=t[0];
   query=t[1];
   return shape.$==1?shape.$1==null?parseArgs(shape.$0,path,shape.$2):(args=shape.$2,(init=shape.$0,(name=shape.$1.$0,(path.$==1?path.$0===name?($1=[path.$1,path.$0],true):false:false)?parseArgs(init,$1[0],args):null))):shape.$==2?(fromArray=shape.$0,(parseItem=shape.$1,(b=function(length,rest)
   {
    var arr;
    arr=Arrays.create(length,null);
    return function(i,rest$1)
    {
     var m$1,rest$2,item;
     while(true)
      if(i===length)
       return{
        $:1,
        $0:[fromArray(arr),rest$1]
       };
      else
       {
        m$1=parseItem([rest$1,query]);
        if(m$1!=null?m$1.$==1:false)
         {
          rest$2=m$1.$0[1];
          item=m$1.$0[0];
          Arrays.set(arr,i,item);
          i=i+1;
          rest$1=rest$2;
         }
        else
         return null;
       }
    }(0,rest);
   },function(o)
   {
    return o==null?null:b.apply(null,o.$0);
   }(RouteItemParsers["System.Int32"]([path,query]))))):shape.$==3?(items=shape.$0,(t$1=Global.Array.prototype.constructor.apply(Global.Array,[]),(m=function(rest)
   {
    return[t$1,rest];
   },function(o)
   {
    return o==null?null:{
     $:1,
     $0:m(o.$0)
    };
   }(((f=function(rest,t$2)
   {
    var parse,b$1;
    parse=t$2[0];
    b$1=function(rest$1)
    {
     var m$1;
     m$1=function(parsed,rest$2)
     {
      var v;
      v=t$1.push(parsed);
      return rest$2;
     };
     return function(o)
     {
      return o==null?null:{
       $:1,
       $0:m$1.apply(null,o.$0)
      };
     }(parse([rest$1,query]));
    };
    return function(o)
    {
     return o==null?null:b$1(o.$0);
    }(rest);
   },(Runtime.Curried3(Arrays.fold))(f))({
    $:1,
    $0:path
   }))(items))))):shape.$0([path,query]);
  };
 };
}());
