(function(t){t.ng??={},t.ng.common??={},t.ng.common.locales??={};let e=void 0;function c(n){let a=n,l=Math.floor(Math.abs(n)),g=n.toString().replace(/^[^.]*\.?/,"").length,_=parseInt(n.toString().replace(/^[^e]*(e([-+]?\d+))?/,"$2"))||0;return l===Math.floor(l)&&l>=0&&l<=1?1:_===0&&l!==0&&l%1e6===0&&g===0||!(_>=0&&_<=5)?4:5}t.ng.common.locales.pt=["pt",[["AM","PM"],e,e],e,[["D","S","T","Q","Q","S","S"],["dom.","seg.","ter.","qua.","qui.","sex.","s\xE1b."],["domingo","segunda-feira","ter\xE7a-feira","quarta-feira","quinta-feira","sexta-feira","s\xE1bado"],["dom.","seg.","ter.","qua.","qui.","sex.","s\xE1b."]],e,[["J","F","M","A","M","J","J","A","S","O","N","D"],["jan.","fev.","mar.","abr.","mai.","jun.","jul.","ago.","set.","out.","nov.","dez."],["janeiro","fevereiro","mar\xE7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]],e,[["a.C.","d.C."],e,["antes de Cristo","depois de Cristo"]],0,[6,0],["dd/MM/y","d 'de' MMM 'de' y","d 'de' MMMM 'de' y","EEEE, d 'de' MMMM 'de' y"],["HH:mm","HH:mm:ss","HH:mm:ss z","HH:mm:ss zzzz"],["{1} {0}",e,e,e],[",",".",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0%","\xA4\xA0#,##0.00","#E0"],"BRL","R$","Real brasileiro",{AUD:["AU$","$"],BYN:[e,"\u0440."],JPY:["JP\xA5","\xA5"],PHP:[e,"\u20B1"],PTE:["Esc."],RON:[e,"L"],SYP:[e,"S\xA3"],THB:["\u0E3F"],TWD:["NT$"],USD:["US$","$"]},"ltr",c,[[["meia-noite","meio-dia","da manh\xE3","da tarde","da noite","da madrugada"],e,e],[["meia-noite","meio-dia","manh\xE3","tarde","noite","madrugada"],e,e],["00:00","12:00",["06:00","12:00"],["12:00","19:00"],["19:00","24:00"],["00:00","06:00"]]]]})(globalThis);var ce=globalThis;function te(t){return(ce.__Zone_symbol_prefix||"__zone_symbol__")+t}function Et(){let t=ce.performance;function e(L){t&&t.mark&&t.mark(L)}function c(L,s){t&&t.measure&&t.measure(L,s)}e("Zone");class n{static{this.__symbol__=te}static assertZonePatched(){if(ce.Promise!==C.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let s=n.current;for(;s.parent;)s=s.parent;return s}static get current(){return b.zone}static get currentTask(){return N}static __load_patch(s,i,o=!1){if(C.hasOwnProperty(s)){let E=ce[te("forceDuplicateZoneCheck")]===!0;if(!o&&E)throw Error("Already loaded patch: "+s)}else if(!ce["__Zone_disable_"+s]){let E="Zone:"+s;e(E),C[s]=i(ce,n,R),c(E,E)}}get parent(){return this._parent}get name(){return this._name}constructor(s,i){this._parent=s,this._name=i?i.name||"unnamed":"<root>",this._properties=i&&i.properties||{},this._zoneDelegate=new l(this,this._parent&&this._parent._zoneDelegate,i)}get(s){let i=this.getZoneWith(s);if(i)return i._properties[s]}getZoneWith(s){let i=this;for(;i;){if(i._properties.hasOwnProperty(s))return i;i=i._parent}return null}fork(s){if(!s)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,s)}wrap(s,i){if(typeof s!="function")throw new Error("Expecting function got: "+s);let o=this._zoneDelegate.intercept(this,s,i),E=this;return function(){return E.runGuarded(o,this,arguments,i)}}run(s,i,o,E){b={parent:b,zone:this};try{return this._zoneDelegate.invoke(this,s,i,o,E)}finally{b=b.parent}}runGuarded(s,i=null,o,E){b={parent:b,zone:this};try{try{return this._zoneDelegate.invoke(this,s,i,o,E)}catch(H){if(this._zoneDelegate.handleError(this,H))throw H}}finally{b=b.parent}}runTask(s,i,o){if(s.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(s.zone||J).name+"; Execution: "+this.name+")");let E=s,{type:H,data:{isPeriodic:ee=!1,isRefreshable:A=!1}={}}=s;if(s.state===q&&(H===G||H===m))return;let he=s.state!=j;he&&E._transitionTo(j,d);let _e=N;N=E,b={parent:b,zone:this};try{H==m&&s.data&&!ee&&!A&&(s.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,E,i,o)}catch(Q){if(this._zoneDelegate.handleError(this,Q))throw Q}}finally{let Q=s.state;if(Q!==q&&Q!==W)if(H==G||ee||A&&Q===k)he&&E._transitionTo(d,j,k);else{let ge=E._zoneDelegates;this._updateTaskCount(E,-1),he&&E._transitionTo(q,j,q),A&&(E._zoneDelegates=ge)}b=b.parent,N=_e}}scheduleTask(s){if(s.zone&&s.zone!==this){let o=this;for(;o;){if(o===s.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${s.zone.name}`);o=o.parent}}s._transitionTo(k,q);let i=[];s._zoneDelegates=i,s._zone=this;try{s=this._zoneDelegate.scheduleTask(this,s)}catch(o){throw s._transitionTo(W,k,q),this._zoneDelegate.handleError(this,o),o}return s._zoneDelegates===i&&this._updateTaskCount(s,1),s.state==k&&s._transitionTo(d,k),s}scheduleMicroTask(s,i,o,E){return this.scheduleTask(new g(B,s,i,o,E,void 0))}scheduleMacroTask(s,i,o,E,H){return this.scheduleTask(new g(m,s,i,o,E,H))}scheduleEventTask(s,i,o,E,H){return this.scheduleTask(new g(G,s,i,o,E,H))}cancelTask(s){if(s.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(s.zone||J).name+"; Execution: "+this.name+")");if(!(s.state!==d&&s.state!==j)){s._transitionTo($,d,j);try{this._zoneDelegate.cancelTask(this,s)}catch(i){throw s._transitionTo(W,$),this._zoneDelegate.handleError(this,i),i}return this._updateTaskCount(s,-1),s._transitionTo(q,$),s.runCount=-1,s}}_updateTaskCount(s,i){let o=s._zoneDelegates;i==-1&&(s._zoneDelegates=null);for(let E=0;E<o.length;E++)o[E]._updateTaskCount(s.type,i)}}let a={name:"",onHasTask:(L,s,i,o)=>L.hasTask(i,o),onScheduleTask:(L,s,i,o)=>L.scheduleTask(i,o),onInvokeTask:(L,s,i,o,E,H)=>L.invokeTask(i,o,E,H),onCancelTask:(L,s,i,o)=>L.cancelTask(i,o)};class l{get zone(){return this._zone}constructor(s,i,o){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this._zone=s,this._parentDelegate=i,this._forkZS=o&&(o&&o.onFork?o:i._forkZS),this._forkDlgt=o&&(o.onFork?i:i._forkDlgt),this._forkCurrZone=o&&(o.onFork?this._zone:i._forkCurrZone),this._interceptZS=o&&(o.onIntercept?o:i._interceptZS),this._interceptDlgt=o&&(o.onIntercept?i:i._interceptDlgt),this._interceptCurrZone=o&&(o.onIntercept?this._zone:i._interceptCurrZone),this._invokeZS=o&&(o.onInvoke?o:i._invokeZS),this._invokeDlgt=o&&(o.onInvoke?i:i._invokeDlgt),this._invokeCurrZone=o&&(o.onInvoke?this._zone:i._invokeCurrZone),this._handleErrorZS=o&&(o.onHandleError?o:i._handleErrorZS),this._handleErrorDlgt=o&&(o.onHandleError?i:i._handleErrorDlgt),this._handleErrorCurrZone=o&&(o.onHandleError?this._zone:i._handleErrorCurrZone),this._scheduleTaskZS=o&&(o.onScheduleTask?o:i._scheduleTaskZS),this._scheduleTaskDlgt=o&&(o.onScheduleTask?i:i._scheduleTaskDlgt),this._scheduleTaskCurrZone=o&&(o.onScheduleTask?this._zone:i._scheduleTaskCurrZone),this._invokeTaskZS=o&&(o.onInvokeTask?o:i._invokeTaskZS),this._invokeTaskDlgt=o&&(o.onInvokeTask?i:i._invokeTaskDlgt),this._invokeTaskCurrZone=o&&(o.onInvokeTask?this._zone:i._invokeTaskCurrZone),this._cancelTaskZS=o&&(o.onCancelTask?o:i._cancelTaskZS),this._cancelTaskDlgt=o&&(o.onCancelTask?i:i._cancelTaskDlgt),this._cancelTaskCurrZone=o&&(o.onCancelTask?this._zone:i._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;let E=o&&o.onHasTask,H=i&&i._hasTaskZS;(E||H)&&(this._hasTaskZS=E?o:a,this._hasTaskDlgt=i,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=this._zone,o.onScheduleTask||(this._scheduleTaskZS=a,this._scheduleTaskDlgt=i,this._scheduleTaskCurrZone=this._zone),o.onInvokeTask||(this._invokeTaskZS=a,this._invokeTaskDlgt=i,this._invokeTaskCurrZone=this._zone),o.onCancelTask||(this._cancelTaskZS=a,this._cancelTaskDlgt=i,this._cancelTaskCurrZone=this._zone))}fork(s,i){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,s,i):new n(s,i)}intercept(s,i,o){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,s,i,o):i}invoke(s,i,o,E,H){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,s,i,o,E,H):i.apply(o,E)}handleError(s,i){return this._handleErrorZS?this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,s,i):!0}scheduleTask(s,i){let o=i;if(this._scheduleTaskZS)this._hasTaskZS&&o._zoneDelegates.push(this._hasTaskDlgtOwner),o=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,s,i),o||(o=i);else if(i.scheduleFn)i.scheduleFn(i);else if(i.type==B)V(i);else throw new Error("Task is missing scheduleFn.");return o}invokeTask(s,i,o,E){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,s,i,o,E):i.callback.apply(o,E)}cancelTask(s,i){let o;if(this._cancelTaskZS)o=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,s,i);else{if(!i.cancelFn)throw Error("Task is not cancelable");o=i.cancelFn(i)}return o}hasTask(s,i){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,s,i)}catch(o){this.handleError(s,o)}}_updateTaskCount(s,i){let o=this._taskCounts,E=o[s],H=o[s]=E+i;if(H<0)throw new Error("More tasks executed then were scheduled.");if(E==0||H==0){let ee={microTask:o.microTask>0,macroTask:o.macroTask>0,eventTask:o.eventTask>0,change:s};this.hasTask(this._zone,ee)}}}class g{constructor(s,i,o,E,H,ee){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=s,this.source=i,this.data=E,this.scheduleFn=H,this.cancelFn=ee,!o)throw new Error("callback is not defined");this.callback=o;let A=this;s===G&&E&&E.useG?this.invoke=g.invokeTask:this.invoke=function(){return g.invokeTask.call(ce,A,this,arguments)}}static invokeTask(s,i,o){s||(s=this),K++;try{return s.runCount++,s.zone.runTask(s,i,o)}finally{K==1&&Y(),K--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(q,k)}_transitionTo(s,i,o){if(this._state===i||this._state===o)this._state=s,s==q&&(this._zoneDelegates=null);else throw new Error(`${this.type} '${this.source}': can not transition to '${s}', expecting state '${i}'${o?" or '"+o+"'":""}, was '${this._state}'.`)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}let _=te("setTimeout"),y=te("Promise"),S=te("then"),T=[],P=!1,M;function Z(L){if(M||ce[y]&&(M=ce[y].resolve(0)),M){let s=M[S];s||(s=M.then),s.call(M,L)}else ce[_](L,0)}function V(L){K===0&&T.length===0&&Z(Y),L&&T.push(L)}function Y(){if(!P){for(P=!0;T.length;){let L=T;T=[];for(let s=0;s<L.length;s++){let i=L[s];try{i.zone.runTask(i,null,null)}catch(o){R.onUnhandledError(o)}}}R.microtaskDrainDone(),P=!1}}let J={name:"NO ZONE"},q="notScheduled",k="scheduling",d="scheduled",j="running",$="canceling",W="unknown",B="microTask",m="macroTask",G="eventTask",C={},R={symbol:te,currentZoneFrame:()=>b,onUnhandledError:F,microtaskDrainDone:F,scheduleMicroTask:V,showUncaughtError:()=>!n[te("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:F,patchMethod:()=>F,bindArguments:()=>[],patchThen:()=>F,patchMacroTask:()=>F,patchEventPrototype:()=>F,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>F,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>F,wrapWithCurrentZone:()=>F,filterProperties:()=>[],attachOriginToPatched:()=>F,_redefineProperty:()=>F,patchCallbacks:()=>F,nativeScheduleMicroTask:Z},b={parent:null,zone:new n(null,null)},N=null,K=0;function F(){}return c("Zone","Zone"),n}function mt(){let t=globalThis,e=t[te("forceDuplicateZoneCheck")]===!0;if(t.Zone&&(e||typeof t.Zone.__symbol__!="function"))throw new Error("Zone already loaded.");return t.Zone??=Et(),t.Zone}var be=Object.getOwnPropertyDescriptor,xe=Object.defineProperty,Ze=Object.getPrototypeOf,pt=Object.create,yt=Array.prototype.slice,$e="addEventListener",He="removeEventListener",Me=te($e),Le=te(He),ae="true",le="false",Pe=te("");function Be(t,e){return Zone.current.wrap(t,e)}function Ue(t,e,c,n,a){return Zone.current.scheduleMacroTask(t,e,c,n,a)}var x=te,Ne=typeof window<"u",ye=Ne?window:void 0,X=Ne&&ye||globalThis,kt="removeAttribute";function ze(t,e){for(let c=t.length-1;c>=0;c--)typeof t[c]=="function"&&(t[c]=Be(t[c],e+"_"+c));return t}function vt(t,e){let c=t.constructor.name;for(let n=0;n<e.length;n++){let a=e[n],l=t[a];if(l){let g=be(t,a);if(!rt(g))continue;t[a]=(_=>{let y=function(){return _.apply(this,ze(arguments,c+"."+a))};return fe(y,_),y})(l)}}}function rt(t){return t?t.writable===!1?!1:!(typeof t.get=="function"&&typeof t.set>"u"):!0}var ot=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Ce=!("nw"in X)&&typeof X.process<"u"&&X.process.toString()==="[object process]",Ve=!Ce&&!ot&&!!(Ne&&ye.HTMLElement),st=typeof X.process<"u"&&X.process.toString()==="[object process]"&&!ot&&!!(Ne&&ye.HTMLElement),Se={},bt=x("enable_beforeunload"),Je=function(t){if(t=t||X.event,!t)return;let e=Se[t.type];e||(e=Se[t.type]=x("ON_PROPERTY"+t.type));let c=this||t.target||X,n=c[e],a;if(Ve&&c===ye&&t.type==="error"){let l=t;a=n&&n.call(this,l.message,l.filename,l.lineno,l.colno,l.error),a===!0&&t.preventDefault()}else a=n&&n.apply(this,arguments),t.type==="beforeunload"&&X[bt]&&typeof a=="string"?t.returnValue=a:a!=null&&!a&&t.preventDefault();return a};function Ke(t,e,c){let n=be(t,e);if(!n&&c&&be(c,e)&&(n={enumerable:!0,configurable:!0}),!n||!n.configurable)return;let a=x("on"+e+"patched");if(t.hasOwnProperty(a)&&t[a])return;delete n.writable,delete n.value;let l=n.get,g=n.set,_=e.slice(2),y=Se[_];y||(y=Se[_]=x("ON_PROPERTY"+_)),n.set=function(S){let T=this;if(!T&&t===X&&(T=X),!T)return;typeof T[y]=="function"&&T.removeEventListener(_,Je),g&&g.call(T,null),T[y]=S,typeof S=="function"&&T.addEventListener(_,Je,!1)},n.get=function(){let S=this;if(!S&&t===X&&(S=X),!S)return null;let T=S[y];if(T)return T;if(l){let P=l.call(this);if(P)return n.set.call(this,P),typeof S[kt]=="function"&&S.removeAttribute(e),P}return null},xe(t,e,n),t[a]=!0}function it(t,e,c){if(e)for(let n=0;n<e.length;n++)Ke(t,"on"+e[n],c);else{let n=[];for(let a in t)a.slice(0,2)=="on"&&n.push(a);for(let a=0;a<n.length;a++)Ke(t,n[a],c)}}var oe=x("originalInstance");function ve(t){let e=X[t];if(!e)return;X[x(t)]=e,X[t]=function(){let a=ze(arguments,t);switch(a.length){case 0:this[oe]=new e;break;case 1:this[oe]=new e(a[0]);break;case 2:this[oe]=new e(a[0],a[1]);break;case 3:this[oe]=new e(a[0],a[1],a[2]);break;case 4:this[oe]=new e(a[0],a[1],a[2],a[3]);break;default:throw new Error("Arg list too long.")}},fe(X[t],e);let c=new e(function(){}),n;for(n in c)t==="XMLHttpRequest"&&n==="responseBlob"||function(a){typeof c[a]=="function"?X[t].prototype[a]=function(){return this[oe][a].apply(this[oe],arguments)}:xe(X[t].prototype,a,{set:function(l){typeof l=="function"?(this[oe][a]=Be(l,t+"."+a),fe(this[oe][a],l)):this[oe][a]=l},get:function(){return this[oe][a]}})}(n);for(n in e)n!=="prototype"&&e.hasOwnProperty(n)&&(X[t][n]=e[n])}function ue(t,e,c){let n=t;for(;n&&!n.hasOwnProperty(e);)n=Ze(n);!n&&t[e]&&(n=t);let a=x(e),l=null;if(n&&(!(l=n[a])||!n.hasOwnProperty(a))){l=n[a]=n[e];let g=n&&be(n,e);if(rt(g)){let _=c(l,a,e);n[e]=function(){return _(this,arguments)},fe(n[e],l)}}return l}function Pt(t,e,c){let n=null;function a(l){let g=l.data;return g.args[g.cbIdx]=function(){l.invoke.apply(this,arguments)},n.apply(g.target,g.args),l}n=ue(t,e,l=>function(g,_){let y=c(g,_);return y.cbIdx>=0&&typeof _[y.cbIdx]=="function"?Ue(y.name,_[y.cbIdx],y,a):l.apply(g,_)})}function fe(t,e){t[x("OriginalDelegate")]=e}var Qe=!1,Ae=!1;function Rt(){try{let t=ye.navigator.userAgent;if(t.indexOf("MSIE ")!==-1||t.indexOf("Trident/")!==-1)return!0}catch{}return!1}function wt(){if(Qe)return Ae;Qe=!0;try{let t=ye.navigator.userAgent;(t.indexOf("MSIE ")!==-1||t.indexOf("Trident/")!==-1||t.indexOf("Edge/")!==-1)&&(Ae=!0)}catch{}return Ae}function et(t){return typeof t=="function"}function tt(t){return typeof t=="number"}var pe=!1;if(typeof window<"u")try{let t=Object.defineProperty({},"passive",{get:function(){pe=!0}});window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch{pe=!1}var St={useG:!0},ne={},ct={},at=new RegExp("^"+Pe+"(\\w+)(true|false)$"),lt=x("propagationStopped");function ut(t,e){let c=(e?e(t):t)+le,n=(e?e(t):t)+ae,a=Pe+c,l=Pe+n;ne[t]={},ne[t][le]=a,ne[t][ae]=l}function Nt(t,e,c,n){let a=n&&n.add||$e,l=n&&n.rm||He,g=n&&n.listeners||"eventListeners",_=n&&n.rmAll||"removeAllListeners",y=x(a),S="."+a+":",T="prependListener",P="."+T+":",M=function(k,d,j){if(k.isRemoved)return;let $=k.callback;typeof $=="object"&&$.handleEvent&&(k.callback=m=>$.handleEvent(m),k.originalDelegate=$);let W;try{k.invoke(k,d,[j])}catch(m){W=m}let B=k.options;if(B&&typeof B=="object"&&B.once){let m=k.originalDelegate?k.originalDelegate:k.callback;d[l].call(d,j.type,m,B)}return W};function Z(k,d,j){if(d=d||t.event,!d)return;let $=k||d.target||t,W=$[ne[d.type][j?ae:le]];if(W){let B=[];if(W.length===1){let m=M(W[0],$,d);m&&B.push(m)}else{let m=W.slice();for(let G=0;G<m.length&&!(d&&d[lt]===!0);G++){let C=M(m[G],$,d);C&&B.push(C)}}if(B.length===1)throw B[0];for(let m=0;m<B.length;m++){let G=B[m];e.nativeScheduleMicroTask(()=>{throw G})}}}let V=function(k){return Z(this,k,!1)},Y=function(k){return Z(this,k,!0)};function J(k,d){if(!k)return!1;let j=!0;d&&d.useG!==void 0&&(j=d.useG);let $=d&&d.vh,W=!0;d&&d.chkDup!==void 0&&(W=d.chkDup);let B=!1;d&&d.rt!==void 0&&(B=d.rt);let m=k;for(;m&&!m.hasOwnProperty(a);)m=Ze(m);if(!m&&k[a]&&(m=k),!m||m[y])return!1;let G=d&&d.eventNameToString,C={},R=m[y]=m[a],b=m[x(l)]=m[l],N=m[x(g)]=m[g],K=m[x(_)]=m[_],F;d&&d.prepend&&(F=m[x(d.prepend)]=m[d.prepend]);function L(r,f){return!pe&&typeof r=="object"&&r?!!r.capture:!pe||!f?r:typeof r=="boolean"?{capture:r,passive:!0}:r?typeof r=="object"&&r.passive!==!1?{...r,passive:!0}:r:{passive:!0}}let s=function(r){if(!C.isExisting)return R.call(C.target,C.eventName,C.capture?Y:V,C.options)},i=function(r){if(!r.isRemoved){let f=ne[r.eventName],v;f&&(v=f[r.capture?ae:le]);let w=v&&r.target[v];if(w){for(let p=0;p<w.length;p++)if(w[p]===r){w.splice(p,1),r.isRemoved=!0,r.removeAbortListener&&(r.removeAbortListener(),r.removeAbortListener=null),w.length===0&&(r.allRemoved=!0,r.target[v]=null);break}}}if(r.allRemoved)return b.call(r.target,r.eventName,r.capture?Y:V,r.options)},o=function(r){return R.call(C.target,C.eventName,r.invoke,C.options)},E=function(r){return F.call(C.target,C.eventName,r.invoke,C.options)},H=function(r){return b.call(r.target,r.eventName,r.invoke,r.options)},ee=j?s:o,A=j?i:H,he=function(r,f){let v=typeof f;return v==="function"&&r.callback===f||v==="object"&&r.originalDelegate===f},_e=d&&d.diff?d.diff:he,Q=Zone[x("UNPATCHED_EVENTS")],ge=t[x("PASSIVE_EVENTS")];function h(r){if(typeof r=="object"&&r!==null){let f={...r};return r.signal&&(f.signal=r.signal),f}return r}let u=function(r,f,v,w,p=!1,O=!1){return function(){let D=this||t,I=arguments[0];d&&d.transferEventName&&(I=d.transferEventName(I));let U=arguments[1];if(!U)return r.apply(this,arguments);if(Ce&&I==="uncaughtException")return r.apply(this,arguments);let z=!1;if(typeof U!="function"){if(!U.handleEvent)return r.apply(this,arguments);z=!0}if($&&!$(r,U,D,arguments))return;let de=pe&&!!ge&&ge.indexOf(I)!==-1,se=h(L(arguments[2],de)),Te=se?.signal;if(Te?.aborted)return;if(Q){for(let ie=0;ie<Q.length;ie++)if(I===Q[ie])return de?r.call(D,I,U,se):r.apply(this,arguments)}let De=se?typeof se=="boolean"?!0:se.capture:!1,Fe=se&&typeof se=="object"?se.once:!1,Tt=Zone.current,Ie=ne[I];Ie||(ut(I,G),Ie=ne[I]);let qe=Ie[De?ae:le],Ee=D[qe],We=!1;if(Ee){if(We=!0,W){for(let ie=0;ie<Ee.length;ie++)if(_e(Ee[ie],U))return}}else Ee=D[qe]=[];let Re,Xe=D.constructor.name,Ye=ct[Xe];Ye&&(Re=Ye[I]),Re||(Re=Xe+f+(G?G(I):I)),C.options=se,Fe&&(C.options.once=!1),C.target=D,C.capture=De,C.eventName=I,C.isExisting=We;let ke=j?St:void 0;ke&&(ke.taskData=C),Te&&(C.options.signal=void 0);let re=Tt.scheduleEventTask(Re,U,ke,v,w);if(Te){C.options.signal=Te;let ie=()=>re.zone.cancelTask(re);r.call(Te,"abort",ie,{once:!0}),re.removeAbortListener=()=>Te.removeEventListener("abort",ie)}if(C.target=null,ke&&(ke.taskData=null),Fe&&(C.options.once=!0),!pe&&typeof re.options=="boolean"||(re.options=se),re.target=D,re.capture=De,re.eventName=I,z&&(re.originalDelegate=U),O?Ee.unshift(re):Ee.push(re),p)return D}};return m[a]=u(R,S,ee,A,B),F&&(m[T]=u(F,P,E,A,B,!0)),m[l]=function(){let r=this||t,f=arguments[0];d&&d.transferEventName&&(f=d.transferEventName(f));let v=arguments[2],w=v?typeof v=="boolean"?!0:v.capture:!1,p=arguments[1];if(!p)return b.apply(this,arguments);if($&&!$(b,p,r,arguments))return;let O=ne[f],D;O&&(D=O[w?ae:le]);let I=D&&r[D];if(I)for(let U=0;U<I.length;U++){let z=I[U];if(_e(z,p)){if(I.splice(U,1),z.isRemoved=!0,I.length===0&&(z.allRemoved=!0,r[D]=null,!w&&typeof f=="string")){let de=Pe+"ON_PROPERTY"+f;r[de]=null}return z.zone.cancelTask(z),B?r:void 0}}return b.apply(this,arguments)},m[g]=function(){let r=this||t,f=arguments[0];d&&d.transferEventName&&(f=d.transferEventName(f));let v=[],w=ft(r,G?G(f):f);for(let p=0;p<w.length;p++){let O=w[p],D=O.originalDelegate?O.originalDelegate:O.callback;v.push(D)}return v},m[_]=function(){let r=this||t,f=arguments[0];if(f){d&&d.transferEventName&&(f=d.transferEventName(f));let v=ne[f];if(v){let w=v[le],p=v[ae],O=r[w],D=r[p];if(O){let I=O.slice();for(let U=0;U<I.length;U++){let z=I[U],de=z.originalDelegate?z.originalDelegate:z.callback;this[l].call(this,f,de,z.options)}}if(D){let I=D.slice();for(let U=0;U<I.length;U++){let z=I[U],de=z.originalDelegate?z.originalDelegate:z.callback;this[l].call(this,f,de,z.options)}}}}else{let v=Object.keys(r);for(let w=0;w<v.length;w++){let p=v[w],O=at.exec(p),D=O&&O[1];D&&D!=="removeListener"&&this[_].call(this,D)}this[_].call(this,"removeListener")}if(B)return this},fe(m[a],R),fe(m[l],b),K&&fe(m[_],K),N&&fe(m[g],N),!0}let q=[];for(let k=0;k<c.length;k++)q[k]=J(c[k],n);return q}function ft(t,e){if(!e){let l=[];for(let g in t){let _=at.exec(g),y=_&&_[1];if(y&&(!e||y===e)){let S=t[g];if(S)for(let T=0;T<S.length;T++)l.push(S[T])}}return l}let c=ne[e];c||(ut(e),c=ne[e]);let n=t[c[le]],a=t[c[ae]];return n?a?n.concat(a):n.slice():a?a.slice():[]}function Ct(t,e){let c=t.Event;c&&c.prototype&&e.patchMethod(c.prototype,"stopImmediatePropagation",n=>function(a,l){a[lt]=!0,n&&n.apply(a,l)})}function Ot(t,e){e.patchMethod(t,"queueMicrotask",c=>function(n,a){Zone.current.scheduleMicroTask("queueMicrotask",a[0])})}var we=x("zoneTask");function me(t,e,c,n){let a=null,l=null;e+=n,c+=n;let g={};function _(S){let T=S.data;T.args[0]=function(){return S.invoke.apply(this,arguments)};let P=a.apply(t,T.args);return tt(P)?T.handleId=P:(T.handle=P,T.isRefreshable=et(P.refresh)),S}function y(S){let{handle:T,handleId:P}=S.data;return l.call(t,T??P)}a=ue(t,e,S=>function(T,P){if(et(P[0])){let M={isRefreshable:!1,isPeriodic:n==="Interval",delay:n==="Timeout"||n==="Interval"?P[1]||0:void 0,args:P},Z=P[0];P[0]=function(){try{return Z.apply(this,arguments)}finally{let{handle:j,handleId:$,isPeriodic:W,isRefreshable:B}=M;!W&&!B&&($?delete g[$]:j&&(j[we]=null))}};let V=Ue(e,P[0],M,_,y);if(!V)return V;let{handleId:Y,handle:J,isRefreshable:q,isPeriodic:k}=V.data;if(Y)g[Y]=V;else if(J&&(J[we]=V,q&&!k)){let d=J.refresh;J.refresh=function(){let{zone:j,state:$}=V;return $==="notScheduled"?(V._state="scheduled",j._updateTaskCount(V,1)):$==="running"&&(V._state="scheduling"),d.call(this)}}return J??Y??V}else return S.apply(t,P)}),l=ue(t,c,S=>function(T,P){let M=P[0],Z;tt(M)?(Z=g[M],delete g[M]):(Z=M?.[we],Z?M[we]=null:Z=M),Z?.type?Z.cancelFn&&Z.zone.cancelTask(Z):S.apply(t,P)})}function Dt(t,e){let{isBrowser:c,isMix:n}=e.getGlobalObjects();if(!c&&!n||!t.customElements||!("customElements"in t))return;let a=["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"];e.patchCallbacks(e,t.customElements,"customElements","define",a)}function It(t,e){if(Zone[e.symbol("patchEventTarget")])return;let{eventNames:c,zoneSymbolEventNames:n,TRUE_STR:a,FALSE_STR:l,ZONE_SYMBOL_PREFIX:g}=e.getGlobalObjects();for(let y=0;y<c.length;y++){let S=c[y],T=S+l,P=S+a,M=g+T,Z=g+P;n[S]={},n[S][l]=M,n[S][a]=Z}let _=t.EventTarget;if(!(!_||!_.prototype))return e.patchEventTarget(t,e,[_&&_.prototype]),!0}function Mt(t,e){e.patchEventPrototype(t,e)}function ht(t,e,c){if(!c||c.length===0)return e;let n=c.filter(l=>l.target===t);if(!n||n.length===0)return e;let a=n[0].ignoreProperties;return e.filter(l=>a.indexOf(l)===-1)}function nt(t,e,c,n){if(!t)return;let a=ht(t,e,c);it(t,a,n)}function je(t){return Object.getOwnPropertyNames(t).filter(e=>e.startsWith("on")&&e.length>2).map(e=>e.substring(2))}function Lt(t,e){if(Ce&&!st||Zone[t.symbol("patchEvents")])return;let c=e.__Zone_ignore_on_properties,n=[];if(Ve){let a=window;n=n.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);let l=Rt()?[{target:a,ignoreProperties:["error"]}]:[];nt(a,je(a),c&&c.concat(l),Ze(a))}n=n.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let a=0;a<n.length;a++){let l=e[n[a]];l&&l.prototype&&nt(l.prototype,je(l.prototype),c)}}function At(t){t.__load_patch("legacy",e=>{let c=e[t.__symbol__("legacyPatch")];c&&c()}),t.__load_patch("timers",e=>{let c="set",n="clear";me(e,c,n,"Timeout"),me(e,c,n,"Interval"),me(e,c,n,"Immediate")}),t.__load_patch("requestAnimationFrame",e=>{me(e,"request","cancel","AnimationFrame"),me(e,"mozRequest","mozCancel","AnimationFrame"),me(e,"webkitRequest","webkitCancel","AnimationFrame")}),t.__load_patch("blocking",(e,c)=>{let n=["alert","prompt","confirm"];for(let a=0;a<n.length;a++){let l=n[a];ue(e,l,(g,_,y)=>function(S,T){return c.current.run(g,e,T,y)})}}),t.__load_patch("EventTarget",(e,c,n)=>{Mt(e,n),It(e,n);let a=e.XMLHttpRequestEventTarget;a&&a.prototype&&n.patchEventTarget(e,n,[a.prototype])}),t.__load_patch("MutationObserver",(e,c,n)=>{ve("MutationObserver"),ve("WebKitMutationObserver")}),t.__load_patch("IntersectionObserver",(e,c,n)=>{ve("IntersectionObserver")}),t.__load_patch("FileReader",(e,c,n)=>{ve("FileReader")}),t.__load_patch("on_property",(e,c,n)=>{Lt(n,e)}),t.__load_patch("customElements",(e,c,n)=>{Dt(e,n)}),t.__load_patch("XHR",(e,c)=>{S(e);let n=x("xhrTask"),a=x("xhrSync"),l=x("xhrListener"),g=x("xhrScheduled"),_=x("xhrURL"),y=x("xhrErrorBeforeScheduled");function S(T){let P=T.XMLHttpRequest;if(!P)return;let M=P.prototype;function Z(R){return R[n]}let V=M[Me],Y=M[Le];if(!V){let R=T.XMLHttpRequestEventTarget;if(R){let b=R.prototype;V=b[Me],Y=b[Le]}}let J="readystatechange",q="scheduled";function k(R){let b=R.data,N=b.target;N[g]=!1,N[y]=!1;let K=N[l];V||(V=N[Me],Y=N[Le]),K&&Y.call(N,J,K);let F=N[l]=()=>{if(N.readyState===N.DONE)if(!b.aborted&&N[g]&&R.state===q){let s=N[c.__symbol__("loadfalse")];if(N.status!==0&&s&&s.length>0){let i=R.invoke;R.invoke=function(){let o=N[c.__symbol__("loadfalse")];for(let E=0;E<o.length;E++)o[E]===R&&o.splice(E,1);!b.aborted&&R.state===q&&i.call(R)},s.push(R)}else R.invoke()}else!b.aborted&&N[g]===!1&&(N[y]=!0)};return V.call(N,J,F),N[n]||(N[n]=R),G.apply(N,b.args),N[g]=!0,R}function d(){}function j(R){let b=R.data;return b.aborted=!0,C.apply(b.target,b.args)}let $=ue(M,"open",()=>function(R,b){return R[a]=b[2]==!1,R[_]=b[1],$.apply(R,b)}),W="XMLHttpRequest.send",B=x("fetchTaskAborting"),m=x("fetchTaskScheduling"),G=ue(M,"send",()=>function(R,b){if(c.current[m]===!0||R[a])return G.apply(R,b);{let N={target:R,url:R[_],isPeriodic:!1,args:b,aborted:!1},K=Ue(W,d,N,k,j);R&&R[y]===!0&&!N.aborted&&K.state===q&&K.invoke()}}),C=ue(M,"abort",()=>function(R,b){let N=Z(R);if(N&&typeof N.type=="string"){if(N.cancelFn==null||N.data&&N.data.aborted)return;N.zone.cancelTask(N)}else if(c.current[B]===!0)return C.apply(R,b)})}}),t.__load_patch("geolocation",e=>{e.navigator&&e.navigator.geolocation&&vt(e.navigator.geolocation,["getCurrentPosition","watchPosition"])}),t.__load_patch("PromiseRejectionEvent",(e,c)=>{function n(a){return function(l){ft(e,a).forEach(_=>{let y=e.PromiseRejectionEvent;if(y){let S=new y(a,{promise:l.promise,reason:l.rejection});_.invoke(S)}})}}e.PromiseRejectionEvent&&(c[x("unhandledPromiseRejectionHandler")]=n("unhandledrejection"),c[x("rejectionHandledHandler")]=n("rejectionhandled"))}),t.__load_patch("queueMicrotask",(e,c,n)=>{Ot(e,n)})}function jt(t){t.__load_patch("ZoneAwarePromise",(e,c,n)=>{let a=Object.getOwnPropertyDescriptor,l=Object.defineProperty;function g(h){if(h&&h.toString===Object.prototype.toString){let u=h.constructor&&h.constructor.name;return(u||"")+": "+JSON.stringify(h)}return h?h.toString():Object.prototype.toString.call(h)}let _=n.symbol,y=[],S=e[_("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")]!==!1,T=_("Promise"),P=_("then"),M="__creationTrace__";n.onUnhandledError=h=>{if(n.showUncaughtError()){let u=h&&h.rejection;u?console.error("Unhandled Promise rejection:",u instanceof Error?u.message:u,"; Zone:",h.zone.name,"; Task:",h.task&&h.task.source,"; Value:",u,u instanceof Error?u.stack:void 0):console.error(h)}},n.microtaskDrainDone=()=>{for(;y.length;){let h=y.shift();try{h.zone.runGuarded(()=>{throw h.throwOriginal?h.rejection:h})}catch(u){V(u)}}};let Z=_("unhandledPromiseRejectionHandler");function V(h){n.onUnhandledError(h);try{let u=c[Z];typeof u=="function"&&u.call(this,h)}catch{}}function Y(h){return h&&h.then}function J(h){return h}function q(h){return A.reject(h)}let k=_("state"),d=_("value"),j=_("finally"),$=_("parentPromiseValue"),W=_("parentPromiseState"),B="Promise.then",m=null,G=!0,C=!1,R=0;function b(h,u){return r=>{try{L(h,u,r)}catch(f){L(h,!1,f)}}}let N=function(){let h=!1;return function(r){return function(){h||(h=!0,r.apply(null,arguments))}}},K="Promise resolved with itself",F=_("currentTaskTrace");function L(h,u,r){let f=N();if(h===r)throw new TypeError(K);if(h[k]===m){let v=null;try{(typeof r=="object"||typeof r=="function")&&(v=r&&r.then)}catch(w){return f(()=>{L(h,!1,w)})(),h}if(u!==C&&r instanceof A&&r.hasOwnProperty(k)&&r.hasOwnProperty(d)&&r[k]!==m)i(r),L(h,r[k],r[d]);else if(u!==C&&typeof v=="function")try{v.call(r,f(b(h,u)),f(b(h,!1)))}catch(w){f(()=>{L(h,!1,w)})()}else{h[k]=u;let w=h[d];if(h[d]=r,h[j]===j&&u===G&&(h[k]=h[W],h[d]=h[$]),u===C&&r instanceof Error){let p=c.currentTask&&c.currentTask.data&&c.currentTask.data[M];p&&l(r,F,{configurable:!0,enumerable:!1,writable:!0,value:p})}for(let p=0;p<w.length;)o(h,w[p++],w[p++],w[p++],w[p++]);if(w.length==0&&u==C){h[k]=R;let p=r;try{throw new Error("Uncaught (in promise): "+g(r)+(r&&r.stack?`
`+r.stack:""))}catch(O){p=O}S&&(p.throwOriginal=!0),p.rejection=r,p.promise=h,p.zone=c.current,p.task=c.currentTask,y.push(p),n.scheduleMicroTask()}}}return h}let s=_("rejectionHandledHandler");function i(h){if(h[k]===R){try{let u=c[s];u&&typeof u=="function"&&u.call(this,{rejection:h[d],promise:h})}catch{}h[k]=C;for(let u=0;u<y.length;u++)h===y[u].promise&&y.splice(u,1)}}function o(h,u,r,f,v){i(h);let w=h[k],p=w?typeof f=="function"?f:J:typeof v=="function"?v:q;u.scheduleMicroTask(B,()=>{try{let O=h[d],D=!!r&&j===r[j];D&&(r[$]=O,r[W]=w);let I=u.run(p,void 0,D&&p!==q&&p!==J?[]:[O]);L(r,!0,I)}catch(O){L(r,!1,O)}},r)}let E="function ZoneAwarePromise() { [native code] }",H=function(){},ee=e.AggregateError;class A{static toString(){return E}static resolve(u){return u instanceof A?u:L(new this(null),G,u)}static reject(u){return L(new this(null),C,u)}static withResolvers(){let u={};return u.promise=new A((r,f)=>{u.resolve=r,u.reject=f}),u}static any(u){if(!u||typeof u[Symbol.iterator]!="function")return Promise.reject(new ee([],"All promises were rejected"));let r=[],f=0;try{for(let p of u)f++,r.push(A.resolve(p))}catch{return Promise.reject(new ee([],"All promises were rejected"))}if(f===0)return Promise.reject(new ee([],"All promises were rejected"));let v=!1,w=[];return new A((p,O)=>{for(let D=0;D<r.length;D++)r[D].then(I=>{v||(v=!0,p(I))},I=>{w.push(I),f--,f===0&&(v=!0,O(new ee(w,"All promises were rejected")))})})}static race(u){let r,f,v=new this((O,D)=>{r=O,f=D});function w(O){r(O)}function p(O){f(O)}for(let O of u)Y(O)||(O=this.resolve(O)),O.then(w,p);return v}static all(u){return A.allWithCallback(u)}static allSettled(u){return(this&&this.prototype instanceof A?this:A).allWithCallback(u,{thenCallback:f=>({status:"fulfilled",value:f}),errorCallback:f=>({status:"rejected",reason:f})})}static allWithCallback(u,r){let f,v,w=new this((I,U)=>{f=I,v=U}),p=2,O=0,D=[];for(let I of u){Y(I)||(I=this.resolve(I));let U=O;try{I.then(z=>{D[U]=r?r.thenCallback(z):z,p--,p===0&&f(D)},z=>{r?(D[U]=r.errorCallback(z),p--,p===0&&f(D)):v(z)})}catch(z){v(z)}p++,O++}return p-=2,p===0&&f(D),w}constructor(u){let r=this;if(!(r instanceof A))throw new Error("Must be an instanceof Promise.");r[k]=m,r[d]=[];try{let f=N();u&&u(f(b(r,G)),f(b(r,C)))}catch(f){L(r,!1,f)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return A}then(u,r){let f=this.constructor?.[Symbol.species];(!f||typeof f!="function")&&(f=this.constructor||A);let v=new f(H),w=c.current;return this[k]==m?this[d].push(w,v,u,r):o(this,w,v,u,r),v}catch(u){return this.then(null,u)}finally(u){let r=this.constructor?.[Symbol.species];(!r||typeof r!="function")&&(r=A);let f=new r(H);f[j]=j;let v=c.current;return this[k]==m?this[d].push(v,f,u,u):o(this,v,f,u,u),f}}A.resolve=A.resolve,A.reject=A.reject,A.race=A.race,A.all=A.all;let he=e[T]=e.Promise;e.Promise=A;let _e=_("thenPatched");function Q(h){let u=h.prototype,r=a(u,"then");if(r&&(r.writable===!1||!r.configurable))return;let f=u.then;u[P]=f,h.prototype.then=function(v,w){return new A((O,D)=>{f.call(this,O,D)}).then(v,w)},h[_e]=!0}n.patchThen=Q;function ge(h){return function(u,r){let f=h.apply(u,r);if(f instanceof A)return f;let v=f.constructor;return v[_e]||Q(v),f}}return he&&(Q(he),ue(e,"fetch",h=>ge(h))),Promise[c.__symbol__("uncaughtPromiseErrors")]=y,A})}function xt(t){t.__load_patch("toString",e=>{let c=Function.prototype.toString,n=x("OriginalDelegate"),a=x("Promise"),l=x("Error"),g=function(){if(typeof this=="function"){let T=this[n];if(T)return typeof T=="function"?c.call(T):Object.prototype.toString.call(T);if(this===Promise){let P=e[a];if(P)return c.call(P)}if(this===Error){let P=e[l];if(P)return c.call(P)}}return c.call(this)};g[n]=c,Function.prototype.toString=g;let _=Object.prototype.toString,y="[object Promise]";Object.prototype.toString=function(){return typeof Promise=="function"&&this instanceof Promise?y:_.call(this)}})}function Zt(t,e,c,n,a){let l=Zone.__symbol__(n);if(e[l])return;let g=e[l]=e[n];e[n]=function(_,y,S){return y&&y.prototype&&a.forEach(function(T){let P=`${c}.${n}::`+T,M=y.prototype;try{if(M.hasOwnProperty(T)){let Z=t.ObjectGetOwnPropertyDescriptor(M,T);Z&&Z.value?(Z.value=t.wrapWithCurrentZone(Z.value,P),t._redefineProperty(y.prototype,T,Z)):M[T]&&(M[T]=t.wrapWithCurrentZone(M[T],P))}else M[T]&&(M[T]=t.wrapWithCurrentZone(M[T],P))}catch{}}),g.call(e,_,y,S)},t.attachOriginToPatched(e[n],g)}function $t(t){t.__load_patch("util",(e,c,n)=>{let a=je(e);n.patchOnProperties=it,n.patchMethod=ue,n.bindArguments=ze,n.patchMacroTask=Pt;let l=c.__symbol__("BLACK_LISTED_EVENTS"),g=c.__symbol__("UNPATCHED_EVENTS");e[g]&&(e[l]=e[g]),e[l]&&(c[l]=c[g]=e[l]),n.patchEventPrototype=Ct,n.patchEventTarget=Nt,n.isIEOrEdge=wt,n.ObjectDefineProperty=xe,n.ObjectGetOwnPropertyDescriptor=be,n.ObjectCreate=pt,n.ArraySlice=yt,n.patchClass=ve,n.wrapWithCurrentZone=Be,n.filterProperties=ht,n.attachOriginToPatched=fe,n._redefineProperty=Object.defineProperty,n.patchCallbacks=Zt,n.getGlobalObjects=()=>({globalSources:ct,zoneSymbolEventNames:ne,eventNames:a,isBrowser:Ve,isMix:st,isNode:Ce,TRUE_STR:ae,FALSE_STR:le,ZONE_SYMBOL_PREFIX:Pe,ADD_EVENT_LISTENER_STR:$e,REMOVE_EVENT_LISTENER_STR:He})})}function Ht(t){jt(t),xt(t),$t(t)}var dt=mt();Ht(dt);At(dt);var Bt=":";var Ge=class{visitText(e,c){return e.value}visitContainer(e,c){return`[${e.children.map(n=>n.visit(this)).join(", ")}]`}visitIcu(e,c){let n=Object.keys(e.cases).map(a=>`${a} {${e.cases[a].visit(this)}}`);return`{${e.expression}, ${e.type}, ${n.join(", ")}}`}visitTagPlaceholder(e,c){return e.isVoid?`<ph tag name="${e.startName}"/>`:`<ph tag name="${e.startName}">${e.children.map(n=>n.visit(this)).join(", ")}</ph name="${e.closeName}">`}visitPlaceholder(e,c){return e.value?`<ph name="${e.name}">${e.value}</ph>`:`<ph name="${e.name}"/>`}visitIcuPlaceholder(e,c){return`<ph icu name="${e.name}">${e.value.visit(this)}</ph>`}visitBlockPlaceholder(e,c){return`<ph block name="${e.startName}">${e.children.map(n=>n.visit(this)).join(", ")}</ph name="${e.closeName}">`}},Vt=new Ge;var _t;(function(t){t[t.Little=0]="Little",t[t.Big=1]="Big"})(_t||(_t={}));function Ut(t,e){for(let c=1,n=1;c<t.length;c++,n++)if(e[n]==="\\")n++;else if(t[c]===Bt)return c;throw new Error(`Unterminated $localize metadata block in "${e}".`)}var Oe=function(t,...e){if(Oe.translate){let n=Oe.translate(t,e);t=n[0],e=n[1]}let c=gt(t[0],t.raw[0]);for(let n=1;n<t.length;n++)c+=e[n-1]+gt(t[n],t.raw[n]);return c},zt=":";function gt(t,e){return e.charAt(0)===zt?t.substring(Ut(t,e)+1):t}globalThis.$localize=Oe;(globalThis.$localize??={}).locale="pt";
