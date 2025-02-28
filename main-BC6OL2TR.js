import{b as z}from"./chunk-64CNB3DW.js";import{b as _e,c as Ce,d as ve,f as w,g as ye,h as $,i as Y,j as we}from"./chunk-7HTR6D5M.js";import{m as B}from"./chunk-MFPMUZJE.js";import{$ as ee,$a as te,B as Q,C as J,D as y,E as x,Fb as fe,Ha as p,I as C,J as se,O as me,Qa as m,R as O,T as le,Va as A,W as X,Z as pe,Za as he,a as oe,aa as P,ba as de,bb as I,cb as g,eb as F,ga as k,gb as R,ha as T,hb as L,ib as r,jb as a,ka as ue,kb as d,lb as j,m as ie,mb as f,nb as N,oa as ge,ob as H,p as re,pb as U,q as S,r as ae,ra as D,u as _,ub as s,vb as W,wb as V,y as ce,yb as G,z as Z}from"./chunk-TSE6CILM.js";var Me=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=m({type:e,selectors:[["pgm-root"]],decls:1,vars:0,template:function(t,o){t&1&&d(0,"router-outlet")},dependencies:[w],encapsulation:2})}}return e})();var K=(e,i)=>{let n=P(z),t=P(ye),o=["login","cadastro","esqueci-senha"],c=i.url.split("?")[0].split("/").pop(),u=n.isAuthenticated();return u&&o.includes(c||"")?t.createUrlTree(["/comunidade"]):!u&&!o.includes(c||"")?t.createUrlTree(["/acesso-comunidade/login"],{queryParams:{returnUrl:i.url}}):!0};var xe=(()=>{class e{constructor(){this.currentYear=new Date().getFullYear(),this.links=[{label:"P\xE1gina inicial",route:"/home"},{label:"Divulga\xE7\xE3o Cient\xEDfica",route:"/divulgacao-cientifica"},{label:"Biblioteca",route:"/biblioteca"},{label:"Comunidade",route:"/acesso-comunidade"},{label:"Contato",route:"/contato"}]}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=m({type:e,selectors:[["pgm-footer"]],decls:6,vars:1,consts:[[1,"footer"],[1,"footer__copyright"],[1,"text-italic"]],template:function(t,o){t&1&&(r(0,"footer",0)(1,"p",1),s(2),r(3,"span",2),s(4,"Galleria mellonella"),a(),s(5,". Todos os direitos reservados."),a()()),t&2&&(p(2),V("\xA9 ",o.currentYear," Plataforma "))},dependencies:[B],styles:["[_nghost-%COMP%]{grid-area:footer}.footer[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:2rem;padding:1rem;background:#749483;color:#fff;height:100%}.footer__copyright[_ngcontent-%COMP%]{text-align:center;font-size:.9rem}"],changeDetection:0})}}return e})();var He=()=>({exact:!1}),Ue=(e,i)=>i.route;function We(e,i){e&1&&(r(0,"span",7),s(1,"menu"),a())}function Ve(e,i){if(e&1){let n=j();r(0,"li")(1,"a",10),f("click",function(){k(n);let o=N();return T(o.toggleMenu())}),s(2),a()()}if(e&2){let n=i.$implicit;p(),I("routerLink",n.route)("routerLinkActiveOptions",G(3,He)),p(),W(n.label)}}var Oe=(()=>{class e{constructor(){this.title="Plataforma Galleria mellonella",this.isMenuOpen=!1,this.navigationItems=[{label:"P\xE1gina inicial",route:"/home"},{label:"Divulga\xE7\xE3o Cient\xEDfica",route:"/divulgacao-cientifica"},{label:"Biblioteca",route:"/biblioteca"},{label:"Comunidade",route:"/acesso-comunidade"},{label:"Contato",route:"/contato"}]}toggleMenu(){this.isMenuOpen=!this.isMenuOpen}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=m({type:e,selectors:[["pgm-header"]],decls:17,vars:3,consts:[[1,"header"],[1,"header__logo-container"],["href","/home"],["media","(min-width: 992px)","srcset","icons/logo/pgm-logo-200x100-lg.webp","width","200","height","100"],["media","(min-width: 768px)","srcset","icons/logo/pgm-logo-180x80-md.webp","width","180","height","80"],["src","icons/logo/pgm-logo-160x70-sm.webp","alt","Logo Plataforma Galleria Mellonella","width","160","height","70","loading","eager"],[1,"header__menu-toggle",3,"click"],[1,"material-icons"],[1,"header__navigation"],[1,"header__navigation--close"],["routerLinkActive","--active",3,"click","routerLink","routerLinkActiveOptions"]],template:function(t,o){t&1&&(r(0,"header",0)(1,"div",1)(2,"a",2)(3,"picture"),d(4,"source",3)(5,"source",4)(6,"img",5),a()()(),r(7,"button",6),f("click",function(){return o.toggleMenu()}),A(8,We,2,0,"span",7),a(),r(9,"nav",8)(10,"div",9)(11,"button",6),f("click",function(){return o.toggleMenu()}),r(12,"span",7),s(13,"close"),a()()(),r(14,"ul"),R(15,Ve,3,4,"li",null,Ue),a()()()),t&2&&(p(8),F(o.isMenuOpen?-1:8),p(),g("header__navigation--open",o.isMenuOpen),p(6),L(o.navigationItems))},dependencies:[B,$,Y],styles:["[_nghost-%COMP%]{grid-area:header}.header[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;color:#fff;background:#749483;padding-inline:2rem;height:100%}.header__menu-toggle[_ngcontent-%COMP%]{height:24px;z-index:1;color:#fff}@media (min-width: 992px){.header__menu-toggle[_ngcontent-%COMP%]{display:none}}.header__navigation[_ngcontent-%COMP%]{position:fixed;top:0;right:-100%;height:100vh;transition:right .3s ease;background:#749483}.header__navigation--open[_ngcontent-%COMP%]{right:0}.header__navigation--close[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center;padding:1rem;height:70px}@media (min-width: 768px){.header__navigation--close[_ngcontent-%COMP%]{height:80px}}@media (min-width: 992px){.header__navigation--close[_ngcontent-%COMP%]{display:none;height:0}}.header__navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;margin:0;list-style:none}.header__navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;padding:.5rem;font-weight:700;transition:color .3s ease;color:#fff;text-shadow:0 1px #212529}.header__navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .header__navigation[_ngcontent-%COMP%]   a.--active[_ngcontent-%COMP%]{color:#ffb800}@media (min-width: 992px){.header__navigation[_ngcontent-%COMP%]{position:static;width:auto;height:auto;padding-top:0;background:none}.header__navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:2rem}.header__navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:0}}"],changeDetection:0})}}return e})();var Ge=["*"],Pe=(()=>{class e{constructor(){this.narrow=D(!1)}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=m({type:e,selectors:[["pgm-container"]],inputs:{narrow:[1,"narrow"]},ngContentSelectors:Ge,decls:2,vars:2,consts:[[1,"container"]],template:function(t,o){t&1&&(H(),r(0,"div",0),U(1),a()),t&2&&g("container--narrow",o.narrow())},styles:["[_nghost-%COMP%]{grid-area:content}.container[_ngcontent-%COMP%]{display:block;width:100%;min-height:calc(100vh - 220px)}@media (min-width: 576px){.container[_ngcontent-%COMP%]{min-height:calc(100vh - 140px)}}@media (min-width: 768px){.container[_ngcontent-%COMP%]{min-height:calc(100vh - 150px)}}@media (min-width: 992px){.container[_ngcontent-%COMP%]{min-height:calc(100vh - 170px)}}@media (min-width: 576px){.container--narrow[_ngcontent-%COMP%]{max-width:33.75rem}}@media (min-width: 768px){.container--narrow[_ngcontent-%COMP%]{max-width:45rem}}@media (min-width: 992px){.container--narrow[_ngcontent-%COMP%]{max-width:60rem}}@media (min-width: 1200px){.container--narrow[_ngcontent-%COMP%]{max-width:71.25rem}}@media (min-width: 1400px){.container--narrow[_ngcontent-%COMP%]{max-width:82.5rem}}"],changeDetection:0})}}return e})();var be=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=m({type:e,selectors:[["pgm-public"]],decls:5,vars:0,consts:[[1,"grid"],[1,"grid__header"],[1,"grid__content"],[1,"grid__footer"]],template:function(t,o){t&1&&(r(0,"div",0),d(1,"pgm-header",1),r(2,"pgm-container",2),d(3,"router-outlet"),a(),d(4,"pgm-footer",3),a())},dependencies:[Oe,Pe,xe,w],styles:['.grid[_ngcontent-%COMP%]{display:grid;grid-template-areas:"header" "content" "footer";height:100vh}.grid__content[_ngcontent-%COMP%]{display:flex;flex:1}']})}}return e})();var Ee=[{path:"",component:be,children:[{path:"",pathMatch:"full",redirectTo:"home"},{path:"home",loadComponent:()=>import("./chunk-MAQYUP3E.js").then(e=>e.HomeComponent)},{path:"divulgacao-cientifica",loadComponent:()=>import("./chunk-TVFPKGGW.js").then(e=>e.ScientificOutreachComponent)},{path:"biblioteca",loadComponent:()=>import("./chunk-U4ZPOR25.js").then(e=>e.LibraryComponent)},{path:"acesso-comunidade",canActivate:[K],children:[{path:"",loadComponent:()=>import("./chunk-IQKJQYXQ.js").then(e=>e.CommunityComponent)},{path:"login",loadComponent:()=>import("./chunk-QXIQQEUM.js").then(e=>e.LoginComponent)},{path:"cadastro",loadComponent:()=>import("./chunk-SNB6IPZ2.js").then(e=>e.RegisterComponent)},{path:"esqueci-senha",loadComponent:()=>import("./chunk-RGMELBYA.js").then(e=>e.ForgotPasswordComponent)}]},{path:"contato",loadComponent:()=>import("./chunk-7KB4ZQTA.js").then(e=>e.ContactComponent)}]}];var Be=()=>({exact:!1}),$e=(e,i)=>i.route;function Ye(e,i){e&1&&(r(0,"span",16),s(1,"menu"),a())}function ze(e,i){if(e&1){let n=j();r(0,"li")(1,"a",21),f("click",function(){k(n);let o=N();return T(o.toggleMenu())}),s(2),a()()}if(e&2){let n=i.$implicit;p(),I("routerLink",n.route)("routerLinkActiveOptions",G(3,Be)),p(),W(n.label)}}var Se=(()=>{class e{constructor(){this.title="Plataforma Galleria mellonella",this.isMenuOpen=!1,this.navigationItems=[{label:"P\xE1gina inicial",route:"/home"},{label:"Divulga\xE7\xE3o Cient\xEDfica",route:"/divulgacao-cientifica"},{label:"Biblioteca",route:"/biblioteca"},{label:"Comunidade",route:"/acesso-comunidade"},{label:"Contato",route:"/contato"}]}toggleMenu(){this.isMenuOpen=!this.isMenuOpen}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=m({type:e,selectors:[["pgm-community-header"]],decls:34,vars:5,consts:[[1,"community-header"],[1,"community-header__container"],[1,"community-header__logo-container"],["href","/comunidade/home"],["media","(min-width: 1200px)","srcset","icons/logo/pgm-logo-250x150-xl.webp","width","250","height","150"],["media","(min-width: 992px)","srcset","icons/logo/pgm-logo-200x100-lg.webp","width","200","height","100"],["media","(min-width: 768px)","srcset","icons/logo/pgm-logo-180x80-md.webp","width","180","height","80"],["src","icons/logo/pgm-logo-160x70-sm.webp","alt","Logo Plataforma Galleria Mellonella","width","160","height","70","loading","eager"],[1,"community-header__right"],[1,"community-header__user-container"],[1,"community-header__icons"],["href","https://google.com",1,"material-icons"],[1,"community-header__separator"],[1,"community-header__user"],["src","https://picsum.photos/20/20","alt","Logo","loading","eager"],["href","https://google.com"],[1,"material-icons"],[1,"community-header__menu-toggle",3,"click"],[1,"community-header__navigation-container"],[1,"community-header__navigation"],[1,"community-header__navigation--close"],["routerLinkActive","--active",3,"click","routerLink","routerLinkActiveOptions"]],template:function(t,o){t&1&&(r(0,"header",0)(1,"div",1)(2,"div",2)(3,"a",3)(4,"picture"),d(5,"source",4)(6,"source",5)(7,"source",6)(8,"img",7),a()()(),r(9,"div",8)(10,"div",9)(11,"div",10)(12,"a",11),s(13,"notifications"),a(),r(14,"a",11),s(15,"mail"),a()(),d(16,"div",12),r(17,"div",13),d(18,"img",14),r(19,"a",15),s(20,"Marcelo"),r(21,"span",16),s(22,"arrow_drop_down"),a()()()(),r(23,"button",17),f("click",function(){return o.toggleMenu()}),A(24,Ye,2,0,"span",16),a(),r(25,"div",18)(26,"nav",19)(27,"div",20)(28,"button",17),f("click",function(){return o.toggleMenu()}),r(29,"span",16),s(30,"close"),a()()(),r(31,"ul"),R(32,ze,3,4,"li",null,$e),a()()()()()()),t&2&&(p(24),F(o.isMenuOpen?-1:24),p(),g("community-header__navigation-container--open",o.isMenuOpen),p(),g("community-header__navigation--open",o.isMenuOpen),p(6),L(o.navigationItems))},dependencies:[$,Y],styles:["[_nghost-%COMP%]{grid-area:community-header}.community-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}.community-header__container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;color:#fff;background:#749483;height:100%;padding-inline:.5rem}@media (min-width: 768px){.community-header__container[_ngcontent-%COMP%]{padding-inline:2rem}}.community-header__right[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:1rem}.community-header__menu-toggle[_ngcontent-%COMP%]{height:24px;z-index:1;color:#fff}@media (min-width: 992px){.community-header__menu-toggle[_ngcontent-%COMP%]{display:none}}.community-header__user-container[_ngcontent-%COMP%]{position:static;display:flex;align-items:center;justify-content:space-between;gap:.5rem}@media (min-width: 992px){.community-header__user-container[_ngcontent-%COMP%]{position:absolute;bottom:1rem;right:2rem;background:#fff;border-radius:8px;padding:.5rem;color:#749483;font-weight:700}}.community-header__user-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .community-header__user-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#749483;font-weight:700}.community-header__icons[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:1rem}.community-header__user[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:.25rem}.community-header__user[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center}.community-header__user[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:24px;height:24px;border-radius:50%}.community-header__separator[_ngcontent-%COMP%]{border-right:2px solid #ced4da;height:1.5rem}.community-header__navigation-container[_ngcontent-%COMP%]{display:none}.community-header__navigation-container--open[_ngcontent-%COMP%]{display:flex}@media (min-width: 992px){.community-header__navigation-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}}.community-header__navigation[_ngcontent-%COMP%]{position:fixed;top:0;right:-100%;height:100vh;transition:right .3s ease;background:#749483}.community-header__navigation--open[_ngcontent-%COMP%]{right:0}.community-header__navigation--close[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center;padding:1rem;height:70px}@media (min-width: 768px){.community-header__navigation--close[_ngcontent-%COMP%]{height:80px}}@media (min-width: 992px){.community-header__navigation--close[_ngcontent-%COMP%]{display:none;height:0}}.community-header__navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;margin:0;list-style:none}.community-header__navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;padding:.5rem;font-weight:700;transition:color .3s ease;color:#fff;text-shadow:0 1px #212529}.community-header__navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .community-header__navigation[_ngcontent-%COMP%]   a.--active[_ngcontent-%COMP%]{color:#ffb800}@media (min-width: 992px){.community-header__navigation[_ngcontent-%COMP%]{position:static;width:auto;height:auto;padding-top:0;background:none}.community-header__navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:2rem}.community-header__navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:0}}"]})}}return e})();var ke=(()=>{class e{constructor(){this.currentYear=new Date().getFullYear()}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=m({type:e,selectors:[["pgm-community-footer"]],decls:6,vars:1,consts:[[1,"footer"],[1,"footer__copyright"],[1,"text-italic"]],template:function(t,o){t&1&&(r(0,"footer",0)(1,"p",1),s(2),r(3,"span",2),s(4,"Galleria mellonella"),a(),s(5,". Todos os direitos reservados."),a()()),t&2&&(p(2),V("\xA9 ",o.currentYear," Plataforma "))},styles:["[_nghost-%COMP%]{grid-area:community-footer}.footer[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:2rem;padding:1rem;background:#749483;color:#fff;height:100%}.footer__copyright[_ngcontent-%COMP%]{text-align:center;font-size:.9rem}"]})}}return e})();var Ke=["*"],Te=(()=>{class e{constructor(){this.narrow=D(!1)}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=m({type:e,selectors:[["pgm-community-container"]],inputs:{narrow:[1,"narrow"]},ngContentSelectors:Ke,decls:2,vars:2,consts:[[1,"container"]],template:function(t,o){t&1&&(H(),r(0,"div",0),U(1),a()),t&2&&g("container--narrow",o.narrow())},styles:["[_nghost-%COMP%]{grid-area:community-content}.container[_ngcontent-%COMP%]{display:block;width:100%;min-height:calc(100vh - 220px)}@media (min-width: 576px){.container[_ngcontent-%COMP%]{min-height:calc(100vh - 140px)}}@media (min-width: 768px){.container[_ngcontent-%COMP%]{min-height:calc(100vh - 150px)}}@media (min-width: 992px){.container[_ngcontent-%COMP%]{min-height:calc(100vh - 170px)}}@media (min-width: 1200px){.container[_ngcontent-%COMP%]{min-height:calc(100vh - 220px)}}@media (min-width: 576px){.container--narrow[_ngcontent-%COMP%]{max-width:33.75rem}}@media (min-width: 768px){.container--narrow[_ngcontent-%COMP%]{max-width:45rem}}@media (min-width: 992px){.container--narrow[_ngcontent-%COMP%]{max-width:60rem}}@media (min-width: 1200px){.container--narrow[_ngcontent-%COMP%]{max-width:71.25rem}}@media (min-width: 1400px){.container--narrow[_ngcontent-%COMP%]{max-width:82.5rem}}"],changeDetection:0})}}return e})();var De=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=m({type:e,selectors:[["pgm-community-area"]],decls:5,vars:0,consts:[[1,"grid"],[1,"grid__content"],[1,"grid__footer"]],template:function(t,o){t&1&&(r(0,"div",0),d(1,"pgm-community-header"),r(2,"pgm-community-container",1),d(3,"router-outlet"),a(),d(4,"pgm-community-footer",2),a())},dependencies:[Se,ke,Te,w],styles:['.grid[_ngcontent-%COMP%]{display:grid;grid-template-areas:"community-header" "community-content" "community-footer";height:100vh}.grid__content[_ngcontent-%COMP%]{display:flex;flex:1}']})}}return e})();var Ae=[{path:"comunidade",component:De,canActivate:[K],children:[{path:"",loadComponent:()=>import("./chunk-PRILAKWB.js").then(e=>e.CommunityHomeComponent)},{path:"perfil",loadComponent:()=>import("./chunk-OKMZPJQC.js").then(e=>e.CommunityProfileComponent)},{path:"notificacoes",loadComponent:()=>import("./chunk-ROPCVCPJ.js").then(e=>e.CommunityNotificationsComponent)},{path:"forums",loadComponent:()=>import("./chunk-U4L6V54U.js").then(e=>e.CommunityForumComponent)},{path:"topicos",loadComponent:()=>import("./chunk-67WXUUFU.js").then(e=>e.CommunityTopicComponent)},{path:"topico",loadComponent:()=>import("./chunk-DL5TLQOX.js").then(e=>e.CommunityTopicFormComponent)}]}];var Ie=[...Ee,...Ae,{path:"**",loadComponent:()=>import("./chunk-KAGLQJEU.js").then(e=>e.NotFoundComponent)}];var E="Service workers are disabled or not supported by this browser";function qe(e){return Z(()=>ae(new Error(e)))}var M=class{serviceWorker;worker;registration;events;constructor(i){if(this.serviceWorker=i,!i)this.worker=this.events=this.registration=qe(E);else{let t=Q(i,"controllerchange").pipe(_(()=>i.controller)),o=Z(()=>S(i.controller)),l=ce(o,t);this.worker=l.pipe(x(v=>!!v)),this.registration=this.worker.pipe(O(()=>i.getRegistration()));let ne=Q(i,"message").pipe(_(v=>v.data)).pipe(x(v=>v&&v.type)).pipe(me());ne.connect(),this.events=ne}}postMessage(i,n){return this.worker.pipe(C(1),le(t=>{t.postMessage(oe({action:i},n))})).toPromise().then(()=>{})}postMessageWithOperation(i,n,t){let o=this.waitForOperationCompleted(t),l=this.postMessage(i,n);return Promise.all([l,o]).then(([,c])=>c)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(i){let n;return typeof i=="string"?n=t=>t.type===i:n=t=>i.includes(t.type),this.events.pipe(x(n))}nextEventOfType(i){return this.eventsOfType(i).pipe(C(1))}waitForOperationCompleted(i){return this.eventsOfType("OPERATION_COMPLETED").pipe(x(n=>n.nonce===i),C(1),_(n=>{if(n.result!==void 0)return n.result;throw new Error(n.error)})).toPromise()}get isEnabled(){return!!this.serviceWorker}},Ze=(()=>{class e{sw;messages;notificationClicks;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new ie;constructor(n){if(this.sw=n,!n.isEnabled){this.messages=y,this.notificationClicks=y,this.subscription=y;return}this.messages=this.sw.eventsOfType("PUSH").pipe(_(o=>o.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(_(o=>o.data)),this.pushManager=this.sw.registration.pipe(_(o=>o.pushManager));let t=this.pushManager.pipe(O(o=>o.getSubscription()));this.subscription=J(t,this.subscriptionChanges)}requestSubscription(n){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(E));let t={userVisibleOnly:!0},o=this.decodeBase64(n.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),l=new Uint8Array(new ArrayBuffer(o.length));for(let c=0;c<o.length;c++)l[c]=o.charCodeAt(c);return t.applicationServerKey=l,this.pushManager.pipe(O(c=>c.subscribe(t)),C(1)).toPromise().then(c=>(this.subscriptionChanges.next(c),c))}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(E));let n=t=>{if(t===null)throw new Error("Not subscribed to push notifications.");return t.unsubscribe().then(o=>{if(!o)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null)})};return this.subscription.pipe(C(1),O(n)).toPromise()}decodeBase64(n){return atob(n)}static \u0275fac=function(t){return new(t||e)(ee(M))};static \u0275prov=X({token:e,factory:e.\u0275fac})}return e})(),Qe=(()=>{class e{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}constructor(n){if(this.sw=n,!n.isEnabled){this.versionUpdates=y,this.unrecoverable=y;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(E));let n=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:n},n)}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(E));let n=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:n},n)}static \u0275fac=function(t){return new(t||e)(ee(M))};static \u0275prov=X({token:e,factory:e.\u0275fac})}return e})();var Fe=new pe("");function Je(e,i,n){return()=>{if(!("serviceWorker"in navigator&&n.enabled!==!1))return;let t=e.get(ge),o=e.get(te);t.runOutsideAngular(()=>{let c=navigator.serviceWorker,u=()=>c.controller?.postMessage({action:"INITIALIZE"});c.addEventListener("controllerchange",u),o.onDestroy(()=>{c.removeEventListener("controllerchange",u)})});let l;if(typeof n.registrationStrategy=="function")l=n.registrationStrategy();else{let[c,...u]=(n.registrationStrategy||"registerWhenStable:30000").split(":");switch(c){case"registerImmediately":l=S(null);break;case"registerWithDelay":l=Re(+u[0]||0);break;case"registerWhenStable":let q=re(e.get(te).whenStable());l=u[0]?J(q,Re(+u[0])):q;break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${n.registrationStrategy}`)}}t.runOutsideAngular(()=>l.pipe(C(1)).subscribe(()=>navigator.serviceWorker.register(i,{scope:n.scope}).catch(c=>console.error("Service worker registration failed with:",c))))}}function Re(e){return S(null).pipe(se(e))}function Xe(e){return new M(e.enabled!==!1?navigator.serviceWorker:void 0)}var b=class{enabled;scope;registrationStrategy};function Le(e,i={}){return de([Ze,Qe,{provide:Fe,useValue:e},{provide:b,useValue:i},{provide:M,useFactory:Xe,deps:[b]},{provide:he,useFactory:Je,deps:[ue,Fe,b],multi:!0}])}var je=(e,i)=>{let t=P(z).getToken();if(t){let o=e.clone({setHeaders:{Authorization:`Bearer ${t}`}});return i(o)}return i(e)};var Ne={providers:[we(Ie),Le("ngsw-worker.js",{enabled:!fe(),registrationStrategy:"registerWhenStable:30000"}),_e(Ce([je]))]};ve(Me,Ne).catch(e=>console.error(e));
