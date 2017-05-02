(function()
{
 "use strict";
 var Global,WebSharper,Control,Observer,HotStream,HotStream$1,Observable,Microsoft,FSharp,Control$1,ObservableModule,Event,Event$1,DelegateEvent,DelegateEvent$1,FSharpEvent,FSharpDelegateEvent,EventModule,MailboxProcessor,IntelliFactory,Runtime,Util,List,Ref,Unchecked,Seq,Arrays,Collections,List$1,Concurrency,TimeoutException,Operators,LinkedList;
 Global=window;
 WebSharper=Global.WebSharper=Global.WebSharper||{};
 Control=WebSharper.Control=WebSharper.Control||{};
 Observer=Control.Observer=Control.Observer||{};
 HotStream=Control.HotStream=Control.HotStream||{};
 HotStream$1=HotStream.HotStream=HotStream.HotStream||{};
 Observable=Control.Observable=Control.Observable||{};
 Microsoft=Global.Microsoft=Global.Microsoft||{};
 FSharp=Microsoft.FSharp=Microsoft.FSharp||{};
 Control$1=FSharp.Control=FSharp.Control||{};
 ObservableModule=Control$1.ObservableModule=Control$1.ObservableModule||{};
 Event=Control.Event=Control.Event||{};
 Event$1=Event.Event=Event.Event||{};
 DelegateEvent=Control.DelegateEvent=Control.DelegateEvent||{};
 DelegateEvent$1=DelegateEvent.DelegateEvent=DelegateEvent.DelegateEvent||{};
 FSharpEvent=Control.FSharpEvent=Control.FSharpEvent||{};
 FSharpDelegateEvent=Control.FSharpDelegateEvent=Control.FSharpDelegateEvent||{};
 EventModule=Control$1.EventModule=Control$1.EventModule||{};
 MailboxProcessor=Control.MailboxProcessor=Control.MailboxProcessor||{};
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 Util=WebSharper&&WebSharper.Util;
 List=WebSharper&&WebSharper.List;
 Ref=WebSharper&&WebSharper.Ref;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 Seq=WebSharper&&WebSharper.Seq;
 Arrays=WebSharper&&WebSharper.Arrays;
 Collections=WebSharper&&WebSharper.Collections;
 List$1=Collections&&Collections.List;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 TimeoutException=WebSharper&&WebSharper.TimeoutException;
 Operators=WebSharper&&WebSharper.Operators;
 LinkedList=Collections&&Collections.LinkedList;
 Observer.New=function(f,e,c)
 {
  return{
   OnCompleted:function()
   {
    return c();
   },
   OnError:e,
   OnNext:f
  };
 };
 Observer.Of=function(f)
 {
  return{
   OnCompleted:function()
   {
    return null;
   },
   OnError:function(x)
   {
    throw x;
   },
   OnNext:f
  };
 };
 HotStream$1=HotStream.HotStream=Runtime.Class({
  Trigger:function(v)
  {
   this.Latest[0]={
    $:1,
    $0:v
   };
   this.Event.event.Trigger(v);
  },
  Subscribe:function(o)
  {
   this.Latest[0]!=null?o.OnNext(this.Latest[0].$0):void 0;
   return Util.subscribeTo(this.Event.event,function(v)
   {
    o.OnNext(v);
   });
  }
 },null,HotStream$1);
 HotStream$1.New$1=function()
 {
  return HotStream$1.New([null],new FSharpEvent.New());
 };
 HotStream$1.New=function(Latest,Event$2)
 {
  return new HotStream$1({
   Latest:Latest,
   Event:Event$2
  });
 };
 Observable.Sequence=function(ios)
 {
  function sequence(ios$1)
  {
   var rest;
   return ios$1.$==1?(rest=sequence(ios$1.$1),Observable.CombineLatest(ios$1.$0,rest,function($1,$2)
   {
    return new List.T({
     $:1,
     $0:$1,
     $1:$2
    });
   })):Observable.Return(new List.T({
    $:0
   }));
  }
  return sequence(List.ofSeq(ios));
 };
 Observable.Aggregate=function(io,seed,fold)
 {
  return{
   Subscribe:function(o1)
   {
    var state;
    state=[seed];
    return io.Subscribe(Observer.New(function(v)
    {
     Observable.Protect(function()
     {
      return fold(state[0],v);
     },function(s)
     {
      state[0]=s;
      o1.OnNext(s);
     },function(a)
     {
      o1.OnError(a);
     });
    },function(a)
    {
     o1.OnError(a);
    },function()
    {
     o1.OnCompleted();
    }));
   }
  };
 };
 Observable.SelectMany=function(io)
 {
  return{
   Subscribe:function(o)
   {
    var disp,d,dispose;
    disp=[function()
    {
    }];
    d=Util.subscribeTo(io,function(o1)
    {
     var d$1;
     d$1=Util.subscribeTo(o1,function(v)
     {
      o.OnNext(v);
     });
     disp[0]=function()
     {
      disp[0]();
      d$1.Dispose();
     };
    });
    dispose=function()
    {
     disp[0]();
     d.Dispose();
    };
    return{
     Dispose:function()
     {
      return dispose();
     }
    };
   }
  };
 };
 Observable.Switch=function(io)
 {
  return{
   Subscribe:function(o)
   {
    var index,disp;
    index=[0];
    disp=[null];
    return Util.subscribeTo(io,function(o1)
    {
     var currentIndex;
     Ref.incr(index);
     disp[0]!=null?disp[0].$0.Dispose():void 0;
     currentIndex=index[0];
     disp[0]={
      $:1,
      $0:Util.subscribeTo(o1,function(v)
      {
       if(currentIndex===index[0])
        o.OnNext(v);
      })
     };
    });
   }
  };
 };
 Observable.CombineLatest=function(io1,io2,f)
 {
  return{
   Subscribe:function(o)
   {
    var lv1,lv2,update,d1,d2,dispose;
    lv1=[null];
    lv2=[null];
    update=function()
    {
     var $1,$2,v1,v2;
     $1=lv1[0];
     $2=lv2[0];
     ($1!=null?$1.$==1:false)?($2!=null?$2.$==1:false)?(v1=$1.$0,v2=$2.$0,Observable.Protect(function()
     {
      return f(v1,v2);
     },function(a)
     {
      o.OnNext(a);
     },function(a)
     {
      o.OnError(a);
     })):void 0:void 0;
    };
    d1=io1.Subscribe(Observer.New(function(x)
    {
     lv1[0]={
      $:1,
      $0:x
     };
     update();
    },function(v)
    {
    },function()
    {
    }));
    d2=io2.Subscribe(Observer.New(function(y)
    {
     lv2[0]={
      $:1,
      $0:y
     };
     update();
    },function(v)
    {
    },function()
    {
    }));
    dispose=function()
    {
     d1.Dispose();
     d2.Dispose();
    };
    return{
     Dispose:function()
     {
      return dispose();
     }
    };
   }
  };
 };
 Observable.Range=function(start,count)
 {
  return{
   Subscribe:function(o)
   {
    var dispose,i,$1;
    for(i=start,$1=start+count;i<=$1;i++)o.OnNext(i);
    dispose=function()
    {
    };
    return{
     Dispose:function()
     {
      return dispose();
     }
    };
   }
  };
 };
 Observable.Concat=function(io1,io2)
 {
  return{
   Subscribe:function(o)
   {
    var innerDisp,outerDisp,d;
    innerDisp=[null];
    outerDisp=io1.Subscribe(Observer.New(function(a)
    {
     o.OnNext(a);
    },function(v)
    {
    },function()
    {
     innerDisp[0]={
      $:1,
      $0:io2.Subscribe(o)
     };
    }));
    d=function()
    {
     innerDisp[0]!=null?innerDisp[0].$0.Dispose():void 0;
     outerDisp.Dispose();
    };
    return{
     Dispose:function()
     {
      return d();
     }
    };
   }
  };
 };
 Observable.Merge=function(io1,io2)
 {
  return{
   Subscribe:function(o)
   {
    var completed1,completed2,disp1,disp2,dispose;
    completed1=[false];
    completed2=[false];
    disp1=io1.Subscribe(Observer.New(function(a)
    {
     o.OnNext(a);
    },function(v)
    {
    },function()
    {
     completed1[0]=true;
     (completed1[0]?completed2[0]:false)?o.OnCompleted():void 0;
    }));
    disp2=io2.Subscribe(Observer.New(function(a)
    {
     o.OnNext(a);
    },function(v)
    {
    },function()
    {
     completed2[0]=true;
     (completed1[0]?completed2[0]:false)?o.OnCompleted():void 0;
    }));
    dispose=function()
    {
     disp1.Dispose();
     disp2.Dispose();
    };
    return{
     Dispose:function()
     {
      return dispose();
     }
    };
   }
  };
 };
 Observable.Drop=function(count,io)
 {
  return{
   Subscribe:function(o1)
   {
    var index;
    index=[0];
    return io.Subscribe(Observer.New(function(v)
    {
     Ref.incr(index);
     index[0]>count?o1.OnNext(v):void 0;
    },function(a)
    {
     o1.OnError(a);
    },function()
    {
     o1.OnCompleted();
    }));
   }
  };
 };
 Observable.Choose=function(f,io)
 {
  return{
   Subscribe:function(o1)
   {
    return io.Subscribe(Observer.New(function(v)
    {
     var a;
     Observable.Protect(function()
     {
      return f(v);
     },(a=function(a$1)
     {
      o1.OnNext(a$1);
     },function(o)
     {
      if(o==null)
       ;
      else
       a(o.$0);
     }),function(a$1)
     {
      o1.OnError(a$1);
     });
    },function(a)
    {
     o1.OnError(a);
    },function()
    {
     o1.OnCompleted();
    }));
   }
  };
 };
 Observable.Filter=function(f,io)
 {
  return{
   Subscribe:function(o1)
   {
    return io.Subscribe(Observer.New(function(v)
    {
     var a;
     Observable.Protect(function()
     {
      return f(v)?{
       $:1,
       $0:v
      }:null;
     },(a=function(a$1)
     {
      o1.OnNext(a$1);
     },function(o)
     {
      if(o==null)
       ;
      else
       a(o.$0);
     }),function(a$1)
     {
      o1.OnError(a$1);
     });
    },function(a)
    {
     o1.OnError(a);
    },function()
    {
     o1.OnCompleted();
    }));
   }
  };
 };
 Observable.Map=function(f,io)
 {
  return{
   Subscribe:function(o1)
   {
    return io.Subscribe(Observer.New(function(v)
    {
     Observable.Protect(function()
     {
      return f(v);
     },function(a)
     {
      o1.OnNext(a);
     },function(a)
     {
      o1.OnError(a);
     });
    },function(a)
    {
     o1.OnError(a);
    },function()
    {
     o1.OnCompleted();
    }));
   }
  };
 };
 Observable.Protect=function(f,succeed,fail)
 {
  var m;
  try
  {
   m={
    $:0,
    $0:f()
   };
  }
  catch(e)
  {
   m={
    $:1,
    $0:e
   };
  }
  return m.$==1?fail(m.$0):succeed(m.$0);
 };
 Observable.Never=function()
 {
  return{
   Subscribe:function()
   {
    var dispose;
    dispose=function()
    {
    };
    return{
     Dispose:function()
     {
      return dispose();
     }
    };
   }
  };
 };
 Observable.Return=function(x)
 {
  return{
   Subscribe:function(o)
   {
    var dispose;
    o.OnNext(x);
    o.OnCompleted();
    dispose=function()
    {
    };
    return{
     Dispose:function()
     {
      return dispose();
     }
    };
   }
  };
 };
 Observable.Of=function(f)
 {
  return{
   Subscribe:function(o)
   {
    var dispose;
    dispose=f(function(x)
    {
     o.OnNext(x);
    });
    return{
     Dispose:function()
     {
      return dispose();
     }
    };
   }
  };
 };
 ObservableModule.Split=function(f,e)
 {
  var left,c,c$1;
  left=(c=function(x)
  {
   var m;
   m=f(x);
   return m.$==0?{
    $:1,
    $0:m.$0
   }:null;
  },function(s)
  {
   return Observable.Choose(c,s);
  }(e));
  return[left,(c$1=function(x)
  {
   var m;
   m=f(x);
   return m.$==1?{
    $:1,
    $0:m.$0
   }:null;
  },function(s)
  {
   return Observable.Choose(c$1,s);
  }(e))];
 };
 ObservableModule.Scan=function(fold,seed,e)
 {
  return{
   Subscribe:function(o1)
   {
    var state;
    state=[seed];
    return e.Subscribe(Observer.New(function(v)
    {
     Observable.Protect(function()
     {
      return fold(state[0],v);
     },function(s)
     {
      state[0]=s;
      o1.OnNext(s);
     },function(a)
     {
      o1.OnError(a);
     });
    },function(a)
    {
     o1.OnError(a);
    },function()
    {
     o1.OnCompleted();
    }));
   }
  };
 };
 ObservableModule.Partition=function(f,e)
 {
  var g;
  return[Observable.Filter(f,e),Observable.Filter((g=function(v)
  {
   return!v;
  },function(x)
  {
   return g(f(x));
  }),e)];
 };
 ObservableModule.Pairwise=function(e)
 {
  return{
   Subscribe:function(o1)
   {
    var last;
    last=[null];
    return e.Subscribe(Observer.New(function(v)
    {
     var m;
     m=last[0];
     (m!=null?m.$==1:false)?o1.OnNext([m.$0,v]):void 0;
     last[0]={
      $:1,
      $0:v
     };
    },function(a)
    {
     o1.OnError(a);
    },function()
    {
     o1.OnCompleted();
    }));
   }
  };
 };
 Event$1=Event.Event=Runtime.Class({
  Subscribe$1:function(observer)
  {
   var $this,h,dispose;
   $this=this;
   h=function(a,x)
   {
    return observer.OnNext(x);
   };
   this.AddHandler$1(h);
   dispose=function()
   {
    $this.RemoveHandler$1(h);
   };
   return{
    Dispose:function()
    {
     return dispose();
    }
   };
  },
  RemoveHandler$1:function(h)
  {
   var a,o,p;
   a=(o=this.Handlers,function(a$1)
   {
    o.RemoveAt(a$1);
   });
   (function(o$1)
   {
    if(o$1==null)
     ;
    else
     a(o$1.$0);
   }((p=function(y)
   {
    return Unchecked.Equals(h,y);
   },function(s)
   {
    return Seq.tryFindIndex(p,s);
   }(this.Handlers))));
  },
  AddHandler$1:function(h)
  {
   this.Handlers.Add(h);
  },
  Trigger:function(x)
  {
   var a,i,$1;
   a=this.Handlers.ToArray();
   for(i=0,$1=a.length-1;i<=$1;i++)(Arrays.get(a,i))(null,x);
  },
  RemoveHandler:function(x)
  {
   this.RemoveHandler$1(x);
  },
  AddHandler:function(x)
  {
   this.AddHandler$1(x);
  },
  Subscribe:function(observer)
  {
   return this.Subscribe$1(observer);
  },
  Dispose:function()
  {
  }
 },null,Event$1);
 Event$1.New=function(Handlers)
 {
  return new Event$1({
   Handlers:Handlers
  });
 };
 DelegateEvent$1=DelegateEvent.DelegateEvent=Runtime.Class({
  RemoveHandler$1:function(h)
  {
   var a,o,p;
   a=(o=this.Handlers,function(a$1)
   {
    o.RemoveAt(a$1);
   });
   (function(o$1)
   {
    if(o$1==null)
     ;
    else
     a(o$1.$0);
   }((p=function(y)
   {
    return Unchecked.Equals(h,y);
   },function(s)
   {
    return Seq.tryFindIndex(p,s);
   }(this.Handlers))));
  },
  AddHandler$1:function(h)
  {
   this.Handlers.Add(h);
  },
  Trigger:function(x)
  {
   var a,i,$1,v;
   a=this.Handlers.ToArray();
   for(i=0,$1=a.length-1;i<=$1;i++){
    v=Arrays.get(a,i).apply(null,x);
   }
  },
  RemoveHandler:function(x)
  {
   this.RemoveHandler$1(x);
  },
  AddHandler:function(x)
  {
   this.AddHandler$1(x);
  },
  Dispose:function()
  {
  }
 },null,DelegateEvent$1);
 DelegateEvent$1.New=function(Handlers)
 {
  return new DelegateEvent$1({
   Handlers:Handlers
  });
 };
 FSharpEvent=Control.FSharpEvent=Runtime.Class({},null,FSharpEvent);
 FSharpEvent.New=Runtime.Ctor(function()
 {
  this.event=Event$1.New(new List$1.New$2());
 },FSharpEvent);
 FSharpDelegateEvent=Control.FSharpDelegateEvent=Runtime.Class({},null,FSharpDelegateEvent);
 FSharpDelegateEvent.New=Runtime.Ctor(function()
 {
  this.event=DelegateEvent$1.New(new List$1.New$2());
 },FSharpDelegateEvent);
 EventModule.Split=function(f,e)
 {
  var c,c$1;
  return[(c=function(x)
  {
   var m;
   m=f(x);
   return m.$==0?{
    $:1,
    $0:m.$0
   }:null;
  },function(s)
  {
   return EventModule.Choose(c,s);
  }(e)),(c$1=function(x)
  {
   var m;
   m=f(x);
   return m.$==1?{
    $:1,
    $0:m.$0
   }:null;
  },function(s)
  {
   return EventModule.Choose(c$1,s);
  }(e))];
 };
 EventModule.Scan=function(fold,seed,e)
 {
  var state;
  state=[seed];
  return EventModule.Map(function(value)
  {
   state[0]=fold(state[0],value);
   return state[0];
  },e);
 };
 EventModule.Partition=function(f,e)
 {
  var g;
  return[EventModule.Filter(f,e),EventModule.Filter((g=function(v)
  {
   return!v;
  },function(x)
  {
   return g(f(x));
  }),e)];
 };
 EventModule.Pairwise=function(e)
 {
  var buf,ev;
  buf=[null];
  ev=Event$1.New(new List$1.New$2());
  Util.addListener(e,function(x)
  {
   var m;
   m=buf[0];
   (m!=null?m.$==1:false)?(buf[0]={
    $:1,
    $0:x
   },ev.Trigger([m.$0,x])):buf[0]={
    $:1,
    $0:x
   };
  });
  return ev;
 };
 EventModule.Merge=function(e1,e2)
 {
  var r;
  r=Event$1.New(new List$1.New$2());
  Util.addListener(e1,function(a)
  {
   r.Trigger(a);
  });
  Util.addListener(e2,function(a)
  {
   r.Trigger(a);
  });
  return r;
 };
 EventModule.Map=function(f,e)
 {
  var r;
  r=Event$1.New(new List$1.New$2());
  Util.addListener(e,function(x)
  {
   r.Trigger(f(x));
  });
  return r;
 };
 EventModule.Filter=function(ok,e)
 {
  var r;
  r=Event$1.New(new List$1.New$2());
  Util.addListener(e,function(x)
  {
   if(ok(x))
    r.Trigger(x);
  });
  return r;
 };
 EventModule.Choose=function(c,e)
 {
  var r;
  r=new FSharpEvent.New();
  Util.addListener(e,function(x)
  {
   var m;
   m=c(x);
   m==null?void 0:r.event.Trigger(m.$0);
  });
  return r.event;
 };
 MailboxProcessor=Control.MailboxProcessor=Runtime.Class({
  dequeue:function()
  {
   var f;
   f=this.mailbox.n.v;
   this.mailbox.RemoveFirst();
   return f;
  },
  resume:function()
  {
   var m;
   m=this.savedCont;
   (m!=null?m.$==1:false)?(this.savedCont=null,this.startAsync(m.$0)):void 0;
  },
  startAsync:function(a)
  {
   Concurrency.Start(a,this.token);
  },
  Scan:function(scanner,timeout)
  {
   var $this;
   $this=this;
   return Concurrency.Delay(function()
   {
    var x;
    x=$this.TryScan(scanner,timeout);
    return Concurrency.Bind(x,function(a)
    {
     var $1;
     if(a!=null?a.$==1:false)
      $1=a.$0;
     else
      throw new TimeoutException.New();
     return Concurrency.Return($1);
    });
   });
  },
  TryScan:function(scanner,timeout)
  {
   var $this,timeout$1;
   $this=this;
   timeout$1=Operators.DefaultArg(timeout,this.get_DefaultTimeout());
   return Concurrency.Delay(function()
   {
    var m,m$1,found,a,m$2;
    m$1=$this.mailbox.n;
    found=null;
    while(!Unchecked.Equals(m$1,null))
     {
      m$2=scanner(m$1.v);
      m$2==null?m$1=m$1.n:($this.mailbox.Remove$1(m$1),m$1=null,found=m$2);
     }
    m=found;
    return(m!=null?m.$==1:false)?Concurrency.Bind(m.$0,function(a$1)
    {
     return Concurrency.Return({
      $:1,
      $0:a$1
     });
    }):(a=function(ok)
    {
     var waiting,pending;
     if(timeout$1<0)
      {
       function scanNext()
       {
        $this.savedCont={
         $:1,
         $0:Concurrency.Delay(function()
         {
          var m$3;
          m$3=scanner($this.mailbox.n.v);
          return(m$3!=null?m$3.$==1:false)?($this.mailbox.RemoveFirst(),Concurrency.Bind(m$3.$0,function(a$1)
          {
           ok({
            $:1,
            $0:a$1
           });
           return Concurrency.Return(null);
          })):(scanNext(),Concurrency.Return(null));
         })
        };
       }
       scanNext();
      }
     else
      {
       function scanNext$1()
       {
        $this.savedCont={
         $:1,
         $0:Concurrency.Delay(function()
         {
          var m$3;
          m$3=scanner($this.mailbox.n.v);
          return(m$3!=null?m$3.$==1:false)?($this.mailbox.RemoveFirst(),Concurrency.Bind(m$3.$0,function(a$1)
          {
           return waiting[0]?(waiting[0]=false,Global.clearTimeout(pending),ok({
            $:1,
            $0:a$1
           }),Concurrency.Return(null)):Concurrency.Return(null);
          })):(scanNext$1(),Concurrency.Return(null));
         })
        };
       }
       waiting=[true];
       pending=Global.setTimeout(function()
       {
        if(waiting[0])
         {
          waiting[0]=false;
          $this.savedCont=null;
          ok(null);
         }
       },timeout$1);
       scanNext$1();
      }
    },Concurrency.FromContinuations(function($1,$2,$3)
    {
     return a.apply(null,[$1,$2,$3]);
    }));
   });
  },
  PostAndAsyncReply:function(msgf,timeout)
  {
   var $this;
   $this=this;
   return Concurrency.Delay(function()
   {
    var x;
    x=$this.PostAndTryAsyncReply(msgf,timeout);
    return Concurrency.Bind(x,function(a)
    {
     var $1;
     if(a!=null?a.$==1:false)
      $1=a.$0;
     else
      throw new TimeoutException.New();
     return Concurrency.Return($1);
    });
   });
  },
  PostAndTryAsyncReply:function(msgf,timeout)
  {
   var $this,timeout$1,a;
   $this=this;
   timeout$1=Operators.DefaultArg(timeout,this.get_DefaultTimeout());
   a=function(ok)
   {
    var f,v,waiting,v$1,v$2;
    if(timeout$1<0)
     {
      v=$this.mailbox.AddLast(msgf((f=function(a$1)
      {
       return{
        $:1,
        $0:a$1
       };
      },function(x)
      {
       return ok(f(x));
      })));
      $this.resume();
     }
    else
     {
      waiting=[true];
      v$1=$this.mailbox.AddLast(msgf(function(res)
      {
       if(waiting[0])
        {
         waiting[0]=false;
         ok({
          $:1,
          $0:res
         });
        }
      }));
      $this.resume();
      v$2=Global.setTimeout(function()
      {
       if(waiting[0])
        {
         waiting[0]=false;
         ok(null);
        }
      },timeout$1);
     }
   };
   return Concurrency.FromContinuations(function($1,$2,$3)
   {
    return a.apply(null,[$1,$2,$3]);
   });
  },
  get_CurrentQueueLength:function()
  {
   return this.mailbox.c;
  },
  Receive:function(timeout)
  {
   var $this;
   $this=this;
   return Concurrency.Delay(function()
   {
    var x;
    x=$this.TryReceive(timeout);
    return Concurrency.Bind(x,function(a)
    {
     var $1;
     if(a!=null?a.$==1:false)
      $1=a.$0;
     else
      throw new TimeoutException.New();
     return Concurrency.Return($1);
    });
   });
  },
  TryReceive:function(timeout)
  {
   var $this,timeout$1,a;
   $this=this;
   timeout$1=Operators.DefaultArg(timeout,this.get_DefaultTimeout());
   a=function(ok)
   {
    var waiting,pending;
    if(Unchecked.Equals($this.mailbox.n,null))
    {
     if(timeout$1<0)
      $this.savedCont={
       $:1,
       $0:Concurrency.Delay(function()
       {
        ok({
         $:1,
         $0:$this.dequeue()
        });
        return Concurrency.Return(null);
       })
      };
     else
      {
       waiting=[true];
       pending=Global.setTimeout(function()
       {
        if(waiting[0])
         {
          waiting[0]=false;
          $this.savedCont=null;
          ok(null);
         }
       },timeout$1);
       $this.savedCont={
        $:1,
        $0:Concurrency.Delay(function()
        {
         return waiting[0]?(waiting[0]=false,Global.clearTimeout(pending),ok({
          $:1,
          $0:$this.dequeue()
         }),Concurrency.Return(null)):Concurrency.Return(null);
        })
       };
      }
    }
    else
     ok({
      $:1,
      $0:$this.dequeue()
     });
   };
   return Concurrency.FromContinuations(function($1,$2,$3)
   {
    return a.apply(null,[$1,$2,$3]);
   });
  },
  Start:function()
  {
   var $this;
   $this=this;
   this.started?Operators.FailWith("The MailboxProcessor has already been started."):(this.started=true,$this.startAsync(Concurrency.Delay(function()
   {
    var a;
    a=Concurrency.Delay(function()
    {
     var x;
     x=$this.initial($this);
     return Concurrency.Bind(x,function()
     {
      return Concurrency.Return(null);
     });
    });
    return Concurrency.TryWith(a,function(a$1)
    {
     $this.errorEvent.event.Trigger(a$1);
     return Concurrency.Return(null);
    });
   })));
  },
  set_DefaultTimeout:function(v)
  {
   this.DefaultTimeout=v;
  },
  get_DefaultTimeout:function()
  {
   return this.DefaultTimeout;
  },
  remove_Error:function(handler)
  {
   this.errorEvent.event.RemoveHandler(handler);
  },
  add_Error:function(handler)
  {
   this.errorEvent.event.AddHandler(handler);
  },
  get_Error:function()
  {
   return this.errorEvent.event;
  }
 },null,MailboxProcessor);
 MailboxProcessor.Start=function(initial,token)
 {
  var mb;
  mb=new MailboxProcessor.New(initial,token);
  mb.Start();
  return mb;
 };
 MailboxProcessor.New=Runtime.Ctor(function(initial,token)
 {
  var $this,m,v,callback;
  $this=this;
  this.initial=initial;
  this.token=token;
  this.started=false;
  this.errorEvent=new FSharpEvent.New();
  this.mailbox=new LinkedList.New();
  this.savedCont=null;
  m=this.token;
  m==null?void 0:v=(callback=function()
  {
   return $this.resume();
  },Concurrency.Register(m.$0,function()
  {
   callback();
  }));
  this.DefaultTimeout=-1;
 },MailboxProcessor);
}());
