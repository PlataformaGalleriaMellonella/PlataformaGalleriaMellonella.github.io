import{$ as l,Tb as p,W as v,Wa as D,Xa as f,Xb as m,Y as u,Z as I,ba as c,bb as L,ca as d,cb as M,db as T,hb as B,ib as R,m as b,ua as g}from"./chunk-UXVKSERO.js";var x=null;function C(){return x}function Ge(n){x??=n}var O=class{};var A=new l(""),S=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=u({token:n,factory:()=>d(z),providedIn:"platform"})}return n})(),He=new l(""),z=(()=>{class n extends S{_location;_history;_doc=d(A);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return C().getBaseHref(this._doc)}onPopState(e){let t=C().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){let t=C().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,i){this._history.pushState(e,t,i)}replaceState(e,t,i){this._history.replaceState(e,t,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(t){return new(t||n)};static \u0275prov=u({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function _(n,r){return n?r?n.endsWith("/")?r.startsWith("/")?n+r.slice(1):n+r:r.startsWith("/")?n+r:`${n}/${r}`:n:r}function P(n){let r=n.search(/#|\?|$/);return n[r-1]==="/"?n.slice(0,r-1)+n.slice(r):n}function a(n){return n&&n[0]!=="?"?`?${n}`:n}var h=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=u({token:n,factory:()=>d(V),providedIn:"root"})}return n})(),U=new l(""),V=(()=>{class n extends h{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??d(A).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return _(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+a(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${t}${i}`:t}pushState(e,t,i,s){let o=this.prepareExternalUrl(i+a(s));this._platformLocation.pushState(e,t,o)}replaceState(e,t,i,s){let o=this.prepareExternalUrl(i+a(s));this._platformLocation.replaceState(e,t,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||n)(c(S),c(U,8))};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ze=(()=>{class n extends h{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,t!=null&&(this._baseHref=t)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let t=this._platformLocation.hash??"#";return t.length>0?t.substring(1):t}prepareExternalUrl(e){let t=_(this._baseHref,e);return t.length>0?"#"+t:t}pushState(e,t,i,s){let o=this.prepareExternalUrl(i+a(s))||this._platformLocation.pathname;this._platformLocation.pushState(e,t,o)}replaceState(e,t,i,s){let o=this.prepareExternalUrl(i+a(s))||this._platformLocation.pathname;this._platformLocation.replaceState(e,t,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||n)(c(S),c(U,8))};static \u0275prov=u({token:n,factory:n.\u0275fac})}return n})(),j=(()=>{class n{_subject=new b;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=Z(P(N(t))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+a(t))}normalize(e){return n.stripTrailingSlash(H(this._basePath,N(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",i=null){this._locationStrategy.pushState(i,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+a(t)),i)}replaceState(e,t="",i=null){this._locationStrategy.replaceState(i,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+a(t)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(i=>i(e,t))}subscribe(e,t,i){return this._subject.subscribe({next:e,error:t??void 0,complete:i??void 0})}static normalizeQueryParams=a;static joinWithSlash=_;static stripTrailingSlash=P;static \u0275fac=function(t){return new(t||n)(c(h))};static \u0275prov=u({token:n,factory:()=>G(),providedIn:"root"})}return n})();function G(){return new j(c(h))}function H(n,r){if(!n||!r.startsWith(n))return r;let e=r.substring(n.length);return e===""||["/",";","?","#"].includes(e[0])?e:r}function N(n){return n.replace(/\/index.html$/,"")}function Z(n){if(new RegExp("^(https?:)?//").test(n)){let[,e]=n.split(/\/\/[^\/]+/);return e}return n}function Ye(n,r){r=encodeURIComponent(r);for(let e of n.split(";")){let t=e.indexOf("="),[i,s]=t==-1?[e,""]:[e.slice(0,t),e.slice(t+1)];if(i.trim()===r)return decodeURIComponent(s)}return null}var F=/\s+/,k=[],We=(()=>{class n{_ngEl;_renderer;initialClasses=k;rawClass;stateMap=new Map;constructor(e,t){this._ngEl=e,this._renderer=t}set klass(e){this.initialClasses=e!=null?e.trim().split(F):k}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(F):e}ngDoCheck(){for(let t of this.initialClasses)this._updateState(t,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let t of e)this._updateState(t,!0);else if(e!=null)for(let t of Object.keys(e))this._updateState(t,!!e[t]);this._applyStateDiff()}_updateState(e,t){let i=this.stateMap.get(e);i!==void 0?(i.enabled!==t&&(i.changed=!0,i.enabled=t),i.touched=!0):this.stateMap.set(e,{enabled:t,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let t=e[0],i=e[1];i.changed?(this._toggleClass(t,i.enabled),i.changed=!1):i.touched||(i.enabled&&this._toggleClass(t,!1),this.stateMap.delete(t)),i.touched=!1}}_toggleClass(e,t){e=e.trim(),e.length>0&&e.split(F).forEach(i=>{t?this._renderer.addClass(this._ngEl.nativeElement,i):this._renderer.removeClass(this._ngEl.nativeElement,i)})}static \u0275fac=function(t){return new(t||n)(f(g),f(D))};static \u0275dir=M({type:n,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return n})();function Y(n,r){return new v(2100,!1)}var y=class{createSubscription(r,e){return m(()=>r.subscribe({next:e,error:t=>{throw t}}))}dispose(r){m(()=>r.unsubscribe())}},E=class{createSubscription(r,e){return r.then(e,t=>{throw t})}dispose(r){}},W=new E,K=new y,Ke=(()=>{class n{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,t=>this._updateLatestValue(e,t))}_selectStrategy(e){if(B(e))return W;if(R(e))return K;throw Y(n,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,t){e===this._obj&&(this._latestValue=t,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(t){return new(t||n)(f(p,16))};static \u0275pipe=T({name:"async",type:n,pure:!1})}return n})();var Xe=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=I({})}return n})(),qe="browser",X="server";function Je(n){return n===X}var Qe=(()=>{class n{static \u0275prov=u({token:n,providedIn:"root",factory:()=>new w(d(A),window)})}return n})(),w=class{document;window;offset=()=>[0,0];constructor(r,e){this.document=r,this.window=e}setOffset(r){Array.isArray(r)?this.offset=()=>r:this.offset=r}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(r){this.window.scrollTo(r[0],r[1])}scrollToAnchor(r){let e=q(this.document,r);e&&(this.scrollToElement(e),e.focus())}setHistoryScrollRestoration(r){this.window.history.scrollRestoration=r}scrollToElement(r){let e=r.getBoundingClientRect(),t=e.left+this.window.pageXOffset,i=e.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(t-s[0],i-s[1])}};function q(n,r){let e=n.getElementById(r)||n.getElementsByName(r)[0];if(e)return e;if(typeof n.createTreeWalker=="function"&&n.body&&typeof n.body.attachShadow=="function"){let t=n.createTreeWalker(n.body,NodeFilter.SHOW_ELEMENT),i=t.currentNode;for(;i;){let s=i.shadowRoot;if(s){let o=s.getElementById(r)||s.querySelector(`[name="${r}"]`);if(o)return o}i=t.nextNode()}}return null}var $=class{};export{C as a,Ge as b,O as c,A as d,He as e,h as f,V as g,Ze as h,j as i,Ye as j,We as k,Ke as l,Xe as m,qe as n,Je as o,Qe as p,$ as q};
