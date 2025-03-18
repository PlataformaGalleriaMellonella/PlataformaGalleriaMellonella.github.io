import{A as J,G as X,J as C,S as K,U as x,Z as d,_ as z,a as P,aa as b,ca as o,cb as Z,ea as W,la as y,q as L,qa as w,s as v,u as R,y as M,z as N}from"./chunk-EB7LXIP5.js";var h=class{},O=(()=>{class t extends h{getTranslation(e){return L({})}static \u0275fac=(()=>{let e;return function(s){return(e||(e=y(t)))(s||t)}})();static \u0275prov=d({token:t,factory:t.\u0275fac})}return t})(),g=class{},U=(()=>{class t{handle(e){return e.key}static \u0275fac=function(n){return new(n||t)};static \u0275prov=d({token:t,factory:t.\u0275fac})}return t})();function u(t){return typeof t<"u"&&t!==null}function V(t){return S(t)&&!q(t)&&t!==null}function S(t){return typeof t=="object"}function q(t){return Array.isArray(t)}function Q(t){return typeof t=="string"}function k(t){return typeof t=="function"}function _(t,r){let e=Object.assign({},t);return S(t)?(S(t)&&S(r)&&Object.keys(r).forEach(n=>{V(r[n])?n in t?e[n]=_(t[n],r[n]):Object.assign(e,{[n]:r[n]}):Object.assign(e,{[n]:r[n]})}),e):_({},r)}function B(t,r){let e=r.split(".");r="";do r+=e.shift(),u(t)&&u(t[r])&&(V(t[r])||q(t[r])||!e.length)?(t=t[r],r=""):e.length?r+=".":t=void 0;while(e.length);return t}function ee(t,r,e){let n=r.split("."),s=t;for(let i=0;i<n.length;i++){let a=n[i];i===n.length-1?s[a]=e:((!s[a]||!V(s[a]))&&(s[a]={}),s=s[a])}}var f=class{},G=(()=>{class t extends f{templateMatcher=/{{\s?([^{}\s]*)\s?}}/g;interpolate(e,n){if(Q(e))return this.interpolateString(e,n);if(k(e))return this.interpolateFunction(e,n)}interpolateFunction(e,n){return e(n)}interpolateString(e,n){return n?e.replace(this.templateMatcher,(s,i)=>{let a=B(n,i);return u(a)?a:s}):e}static \u0275fac=(()=>{let e;return function(s){return(e||(e=y(t)))(s||t)}})();static \u0275prov=d({token:t,factory:t.\u0275fac})}return t})(),c=class{},H=(()=>{class t extends c{compile(e,n){return e}compileTranslations(e,n){return e}static \u0275fac=(()=>{let e;return function(s){return(e||(e=y(t)))(s||t)}})();static \u0275prov=d({token:t,factory:t.\u0275fac})}return t})(),p=class{defaultLang;currentLang=this.defaultLang;translations={};langs=[];onTranslationChange=new w;onLangChange=new w;onDefaultLangChange=new w},E=new b("ISOLATE_TRANSLATE_SERVICE"),j=new b("USE_DEFAULT_LANG"),A=new b("DEFAULT_LANGUAGE"),I=new b("USE_EXTEND"),m=t=>v(t)?t:L(t),$=(()=>{class t{store;currentLoader;compiler;parser;missingTranslationHandler;useDefaultLang;extend;loadingTranslations;pending=!1;_translationRequests={};lastUseLanguage=null;get onTranslationChange(){return this.store.onTranslationChange}get onLangChange(){return this.store.onLangChange}get onDefaultLangChange(){return this.store.onDefaultLangChange}get defaultLang(){return this.store.defaultLang}set defaultLang(e){this.store.defaultLang=e}get currentLang(){return this.store.currentLang}set currentLang(e){this.store.currentLang=e}get langs(){return this.store.langs}set langs(e){this.store.langs=e}get translations(){return this.store.translations}set translations(e){this.store.translations=e}constructor(e,n,s,i,a,F=!0,l=!1,D=!1,T){this.store=e,this.currentLoader=n,this.compiler=s,this.parser=i,this.missingTranslationHandler=a,this.useDefaultLang=F,this.extend=D,l&&(this.store=new p),T&&this.setDefaultLang(T)}setDefaultLang(e){if(e===this.defaultLang)return;let n=this.retrieveTranslations(e);typeof n<"u"?(this.defaultLang==null&&(this.defaultLang=e),n.pipe(C(1)).subscribe(()=>{this.changeDefaultLang(e)})):this.changeDefaultLang(e)}getDefaultLang(){return this.defaultLang}use(e){if(this.lastUseLanguage=e,e===this.currentLang)return L(this.translations[e]);this.currentLang||(this.currentLang=e);let n=this.retrieveTranslations(e);return v(n)?(n.pipe(C(1)).subscribe(()=>{this.changeLang(e)}),n):(this.changeLang(e),L(this.translations[e]))}changeLang(e){e===this.lastUseLanguage&&(this.currentLang=e,this.onLangChange.emit({lang:e,translations:this.translations[e]}),this.defaultLang==null&&this.changeDefaultLang(e))}retrieveTranslations(e){if(typeof this.translations[e]>"u"||this.extend)return this._translationRequests[e]=this._translationRequests[e]||this.loadAndCompileTranslations(e),this._translationRequests[e]}getTranslation(e){return this.loadAndCompileTranslations(e)}loadAndCompileTranslations(e){this.pending=!0;let n=this.currentLoader.getTranslation(e).pipe(K(1),C(1));return this.loadingTranslations=n.pipe(R(s=>this.compiler.compileTranslations(s,e)),K(1),C(1)),this.loadingTranslations.subscribe({next:s=>{this.translations[e]=this.extend&&this.translations[e]?P(P({},s),this.translations[e]):s,this.updateLangs(),this.pending=!1},error:s=>{this.pending=!1}}),n}setTranslation(e,n,s=!1){let i=this.compiler.compileTranslations(n,e);(s||this.extend)&&this.translations[e]?this.translations[e]=_(this.translations[e],i):this.translations[e]=i,this.updateLangs(),this.onTranslationChange.emit({lang:e,translations:this.translations[e]})}getLangs(){return this.langs}addLangs(e){let n=e.filter(s=>!this.langs.includes(s));n.length>0&&(this.langs=[...this.langs,...n])}updateLangs(){this.addLangs(Object.keys(this.translations))}getParsedResultForKey(e,n,s){let i;if(e&&(i=this.runInterpolation(B(e,n),s)),i===void 0&&this.defaultLang!=null&&this.defaultLang!==this.currentLang&&this.useDefaultLang&&(i=this.runInterpolation(B(this.translations[this.defaultLang],n),s)),i===void 0){let a={key:n,translateService:this};typeof s<"u"&&(a.interpolateParams=s),i=this.missingTranslationHandler.handle(a)}return i!==void 0?i:n}runInterpolation(e,n){if(q(e))return e.map(s=>this.runInterpolation(s,n));if(V(e)){let s={};for(let i in e){let a=this.runInterpolation(e[i],n);a!==void 0&&(s[i]=a)}return s}else return this.parser.interpolate(e,n)}getParsedResult(e,n,s){if(n instanceof Array){let i={},a=!1;for(let l of n)i[l]=this.getParsedResultForKey(e,l,s),a=a||v(i[l]);if(!a)return i;let F=n.map(l=>m(i[l]));return J(F).pipe(R(l=>{let D={};return l.forEach((T,Y)=>{D[n[Y]]=T}),D}))}return this.getParsedResultForKey(e,n,s)}get(e,n){if(!u(e)||!e.length)throw new Error('Parameter "key" is required and cannot be empty');return this.pending?this.loadingTranslations.pipe(X(s=>m(this.getParsedResult(s,e,n)))):m(this.getParsedResult(this.translations[this.currentLang],e,n))}getStreamOnTranslationChange(e,n){if(!u(e)||!e.length)throw new Error('Parameter "key" is required and cannot be empty');return M(N(()=>this.get(e,n)),this.onTranslationChange.pipe(x(s=>{let i=this.getParsedResult(s.translations,e,n);return m(i)})))}stream(e,n){if(!u(e)||!e.length)throw new Error('Parameter "key" required');return M(N(()=>this.get(e,n)),this.onLangChange.pipe(x(s=>{let i=this.getParsedResult(s.translations,e,n);return m(i)})))}instant(e,n){if(!u(e)||e.length===0)throw new Error('Parameter "key" is required and cannot be empty');let s=this.getParsedResult(this.translations[this.currentLang],e,n);return v(s)?Array.isArray(e)?e.reduce((i,a)=>(i[a]=a,i),{}):e:s}set(e,n,s=this.currentLang){ee(this.translations[s],e,Q(n)?this.compiler.compile(n,s):this.compiler.compileTranslations(n,s)),this.updateLangs(),this.onTranslationChange.emit({lang:s,translations:this.translations[s]})}changeDefaultLang(e){this.defaultLang=e,this.onDefaultLangChange.emit({lang:e,translations:this.translations[e]})}reloadLang(e){return this.resetLang(e),this.loadAndCompileTranslations(e)}resetLang(e){delete this._translationRequests[e],delete this.translations[e]}getBrowserLang(){if(typeof window>"u"||!window.navigator)return;let e=this.getBrowserCultureLang();return e?e.split(/[-_]/)[0]:void 0}getBrowserCultureLang(){if(!(typeof window>"u"||typeof window.navigator>"u"))return window.navigator.languages?window.navigator.languages[0]:window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage}static \u0275fac=function(n){return new(n||t)(o(p),o(h),o(c),o(f),o(g),o(j),o(E),o(I),o(A))};static \u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Le=(t={})=>W([t.loader||{provide:h,useClass:O},t.compiler||{provide:c,useClass:H},t.parser||{provide:f,useClass:G},t.missingTranslationHandler||{provide:g,useClass:U},p,{provide:E,useValue:t.isolate},{provide:j,useValue:t.useDefaultLang},{provide:I,useValue:t.extend},{provide:A,useValue:t.defaultLanguage},$]),ve=(()=>{class t{static forRoot(e={}){return{ngModule:t,providers:[e.loader||{provide:h,useClass:O},e.compiler||{provide:c,useClass:H},e.parser||{provide:f,useClass:G},e.missingTranslationHandler||{provide:g,useClass:U},p,{provide:E,useValue:e.isolate},{provide:j,useValue:e.useDefaultLang},{provide:I,useValue:e.extend},{provide:A,useValue:e.defaultLanguage},$]}}static forChild(e={}){return{ngModule:t,providers:[e.loader||{provide:h,useClass:O},e.compiler||{provide:c,useClass:H},e.parser||{provide:f,useClass:G},e.missingTranslationHandler||{provide:g,useClass:U},{provide:E,useValue:e.isolate},{provide:j,useValue:e.useDefaultLang},{provide:I,useValue:e.extend},{provide:A,useValue:e.defaultLanguage},$]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=Z({type:t});static \u0275inj=z({})}return t})();export{h as a,$ as b,Le as c,ve as d};
