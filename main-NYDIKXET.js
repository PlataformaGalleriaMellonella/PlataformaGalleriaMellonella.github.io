import{b as Q}from"./chunk-GI2R4W4O.js";import{c as Re,e as Ae,h as Le,k as ze,q as je}from"./chunk-JJGSZ5YK.js";import{b as Se,c as Te,d as ke,e as Ee,f as De,g as Ie,h as V,i as N,j as F,k as J,l as Fe}from"./chunk-2BT27VFM.js";import{m as P}from"./chunk-3GU57MFO.js";import{$ as fe,Ab as u,B as te,Bb as K,C as ne,Cb as Z,D as H,E as L,H as de,Hb as p,Ib as T,J as z,Jb as I,K as ue,L as ge,Lb as j,Oa as be,Q as he,Sa as we,Sb as Pe,T as G,Ta as s,V as _e,Y as ie,a as ce,ab as m,ba as oe,ca as f,da as Ce,fb as C,ia as y,ja as M,jb as Oe,lb as re,m as se,ma as ve,nb as v,ob as S,p as le,q as Y,qa as xe,qb as x,r as me,rb as q,sa as ye,sb as ae,ta as U,tb as w,u as A,ua as Me,ub as O,va as D,vb as r,wb as a,xb as d,y as pe,yb as b,z as ee,zb as h}from"./chunk-6GGH6SES.js";var He=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=m({type:e,selectors:[["pgm-root"]],decls:1,vars:0,template:function(n,i){n&1&&d(0,"router-outlet")},dependencies:[V],encapsulation:2})}}return e})();var X=(e,o)=>{let t=f(Q),n=f(N),i=["login","cadastro","esqueci-senha"],c=o.url.split("?")[0].split("/").pop(),g=t.isAuthenticated();return g&&i.includes(c||"")?n.createUrlTree(["/comunidade"]):!g&&!i.includes(c||"")?n.createUrlTree(["/acesso-comunidade/login"],{queryParams:{returnUrl:o.url}}):!0};var Ue=(()=>{class e{constructor(){this.currentYear=new Date().getFullYear(),this.links=[{label:"P\xE1gina inicial",route:"/home"},{label:"Divulga\xE7\xE3o Cient\xEDfica",route:"/divulgacao-cientifica"},{label:"Biblioteca",route:"/biblioteca"},{label:"Comunidade",route:"/acesso-comunidade"},{label:"Contato",route:"/contato"}]}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=m({type:e,selectors:[["pgm-footer"]],decls:6,vars:1,consts:[[1,"footer"],[1,"footer__copyright"],[1,"text-italic"]],template:function(n,i){n&1&&(r(0,"footer",0)(1,"p",1),p(2),r(3,"span",2),p(4,"Galleria mellonella"),a(),p(5,". Todos os direitos reservados."),a()()),n&2&&(s(2),I("\xA9 ",i.currentYear," Plataforma "))},dependencies:[P],styles:["[_nghost-%COMP%]{grid-area:footer}.footer[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:2rem;padding:1rem;background:#749483;color:#fff;height:100%}.footer__copyright[_ngcontent-%COMP%]{text-align:center;font-size:.9rem}"],changeDetection:0})}}return e})();var mt=()=>({exact:!1}),pt=(e,o)=>o.route;function dt(e,o){e&1&&(r(0,"span",8),p(1,"menu"),a())}function ut(e,o){if(e&1){let t=b();r(0,"li")(1,"a",11),h("click",function(){y(t);let i=u();return M(i.toggleMenu())}),p(2),a()()}if(e&2){let t=o.$implicit;s(),v("routerLink",t.route)("routerLinkActiveOptions",j(3,mt)),s(),T(t.label)}}var Ve=(()=>{class e{constructor(){this.title="Plataforma Galleria mellonella",this.isMenuOpen=!1,this.navigationItems=[{label:"P\xE1gina inicial",route:"/home"},{label:"Divulga\xE7\xE3o Cient\xEDfica",route:"/divulgacao-cientifica"},{label:"Biblioteca",route:"/biblioteca"},{label:"Comunidade",route:"/acesso-comunidade"},{label:"Contato",route:"/contato"}]}toggleMenu(){this.isMenuOpen=!this.isMenuOpen}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=m({type:e,selectors:[["pgm-header"]],decls:18,vars:3,consts:[[1,"header"],[1,"header__logo-container"],["href","/home"],["media","(min-width: 1200px)","srcset","icons/logo/pgm-logo-250x150-xl.webp","width","250","height","150"],["media","(min-width: 992px)","srcset","icons/logo/pgm-logo-200x100-lg.webp","width","200","height","100"],["media","(min-width: 768px)","srcset","icons/logo/pgm-logo-180x80-md.webp","width","180","height","80"],["src","icons/logo/pgm-logo-160x70-sm.webp","alt","Logo Plataforma Galleria Mellonella","width","160","height","70","loading","eager"],[1,"header__menu-toggle",3,"click"],[1,"material-icons"],[1,"header__navigation"],[1,"header__navigation--close"],["routerLinkActive","--active",3,"click","routerLink","routerLinkActiveOptions"]],template:function(n,i){n&1&&(r(0,"header",0)(1,"div",1)(2,"a",2)(3,"picture"),d(4,"source",3)(5,"source",4)(6,"source",5)(7,"img",6),a()()(),r(8,"button",7),h("click",function(){return i.toggleMenu()}),C(9,dt,2,0,"span",8),a(),r(10,"nav",9)(11,"div",10)(12,"button",7),h("click",function(){return i.toggleMenu()}),r(13,"span",8),p(14,"close"),a()()(),r(15,"ul"),w(16,ut,3,4,"li",null,pt),a()()()),n&2&&(s(9),x(i.isMenuOpen?-1:9),s(),S("header__navigation--open",i.isMenuOpen),s(6),O(i.navigationItems))},dependencies:[P,F,J],styles:["[_nghost-%COMP%]{grid-area:header}.header[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;color:#fff;background:#749483;padding-inline:2rem;height:100%}.header__menu-toggle[_ngcontent-%COMP%]{height:24px;z-index:1;color:#fff}@media (min-width: 992px){.header__menu-toggle[_ngcontent-%COMP%]{display:none}}.header__navigation[_ngcontent-%COMP%]{position:fixed;top:0;right:-100%;height:100vh;transition:right .3s ease;background:#749483;z-index:1030}.header__navigation--open[_ngcontent-%COMP%]{right:0}.header__navigation--close[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center;padding:1rem;height:70px}@media (min-width: 768px){.header__navigation--close[_ngcontent-%COMP%]{height:80px}}@media (min-width: 992px){.header__navigation--close[_ngcontent-%COMP%]{display:none;height:0}}.header__navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;margin:0;padding:.5rem;list-style:none}.header__navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;padding:.5rem;font-weight:700;transition:color .3s ease;color:#fff;text-shadow:0 1px #212529}.header__navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .header__navigation[_ngcontent-%COMP%]   a.--active[_ngcontent-%COMP%]{color:#ffb800}@media (min-width: 992px){.header__navigation[_ngcontent-%COMP%]{position:static;width:auto;height:auto;padding-top:0;background:none}.header__navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:2rem}.header__navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:0}}"],changeDetection:0})}}return e})();var gt=["*"],Ne=(()=>{class e{constructor(){this.narrow=U(!1)}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=m({type:e,selectors:[["pgm-container"]],inputs:{narrow:[1,"narrow"]},ngContentSelectors:gt,decls:2,vars:2,consts:[[1,"container"]],template:function(n,i){n&1&&(K(),r(0,"div",0),Z(1),a()),n&2&&S("container--narrow",i.narrow())},styles:["[_nghost-%COMP%]{grid-area:content}.container[_ngcontent-%COMP%]{display:block;width:100%;min-height:calc(100vh - 220px)}@media (min-width: 576px){.container[_ngcontent-%COMP%]{min-height:calc(100vh - 140px)}}@media (min-width: 768px){.container[_ngcontent-%COMP%]{min-height:calc(100vh - 150px)}}@media (min-width: 992px){.container[_ngcontent-%COMP%]{min-height:calc(100vh - 170px)}}@media (min-width: 576px){.container--narrow[_ngcontent-%COMP%]{max-width:33.75rem}}@media (min-width: 768px){.container--narrow[_ngcontent-%COMP%]{max-width:45rem}}@media (min-width: 992px){.container--narrow[_ngcontent-%COMP%]{max-width:60rem}}@media (min-width: 1200px){.container--narrow[_ngcontent-%COMP%]{max-width:71.25rem}}@media (min-width: 1400px){.container--narrow[_ngcontent-%COMP%]{max-width:82.5rem}}"],changeDetection:0})}}return e})();var Be=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=m({type:e,selectors:[["pgm-public"]],decls:5,vars:0,consts:[[1,"grid"],[1,"grid__header"],[1,"grid__content"],[1,"grid__footer"]],template:function(n,i){n&1&&(r(0,"div",0),d(1,"pgm-header",1),r(2,"pgm-container",2),d(3,"router-outlet"),a(),d(4,"pgm-footer",3),a())},dependencies:[Ve,Ne,Ue,V],styles:['.grid[_ngcontent-%COMP%]{display:grid;grid-template-areas:"header" "content" "footer";height:100vh}.grid__content[_ngcontent-%COMP%]{display:flex;flex:1}']})}}return e})();var Ge=[{path:"",component:Be,children:[{path:"",pathMatch:"full",redirectTo:"home"},{path:"home",loadComponent:()=>import("./chunk-MCEXDRR5.js").then(e=>e.HomeComponent)},{path:"divulgacao-cientifica",loadComponent:()=>import("./chunk-PZ6L3IO3.js").then(e=>e.ScientificOutreachComponent)},{path:"biblioteca",loadComponent:()=>import("./chunk-CJH675SE.js").then(e=>e.LibraryComponent)},{path:"acesso-comunidade",canActivate:[X],children:[{path:"",loadComponent:()=>import("./chunk-PE6FTB5T.js").then(e=>e.CommunityComponent)},{path:"login",loadComponent:()=>import("./chunk-6CQNVMYM.js").then(e=>e.LoginComponent)},{path:"cadastro",loadComponent:()=>import("./chunk-EOB5D3CY.js").then(e=>e.RegisterComponent)},{path:"esqueci-senha",loadComponent:()=>import("./chunk-5643ID3S.js").then(e=>e.ForgotPasswordComponent)}]},{path:"contato",loadComponent:()=>import("./chunk-NLCI7ECX.js").then(e=>e.ContactComponent)}]}];var ht=()=>({exact:!1}),_t=(e,o)=>o.route;function ft(e,o){e&1&&(r(0,"span",10),p(1,"menu"),a())}function Ct(e,o){if(e&1){let t=b();r(0,"li")(1,"a",14),h("click",function(){y(t);let i=u();return M(i.toggleMenu())}),p(2),a()()}if(e&2){let t=o.$implicit;s(),v("routerLink",t.route)("routerLinkActiveOptions",j(3,ht)),s(),T(t.label)}}var $e=(()=>{class e{constructor(){this.title="Plataforma Galleria mellonella",this.isMenuOpen=!1,this.navigationItems=[{label:"P\xE1gina inicial",route:"/home"},{label:"Divulga\xE7\xE3o Cient\xEDfica",route:"/divulgacao-cientifica"},{label:"Biblioteca",route:"/biblioteca"},{label:"Comunidade",route:"/acesso-comunidade"},{label:"Contato",route:"/contato"}]}toggleMenu(){this.isMenuOpen=!this.isMenuOpen}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=m({type:e,selectors:[["pgm-community-header"]],decls:21,vars:5,consts:[[1,"community-header"],[1,"community-header__container"],[1,"community-header__logo-container"],["href","/home"],["media","(min-width: 1200px)","srcset","icons/logo/pgm-logo-250x150-xl.webp","width","250","height","150"],["media","(min-width: 992px)","srcset","icons/logo/pgm-logo-200x100-lg.webp","width","200","height","100"],["media","(min-width: 768px)","srcset","icons/logo/pgm-logo-180x80-md.webp","width","180","height","80"],["src","icons/logo/pgm-logo-160x70-sm.webp","alt","Logo Plataforma Galleria Mellonella","width","160","height","70","loading","eager"],[1,"community-header__right"],[1,"community-header__menu-toggle",3,"click"],[1,"material-icons"],[1,"community-header__navigation-container"],[1,"community-header__navigation"],[1,"community-header__navigation--close"],["routerLinkActive","--active",3,"click","routerLink","routerLinkActiveOptions"]],template:function(n,i){n&1&&(r(0,"header",0)(1,"div",1)(2,"div",2)(3,"a",3)(4,"picture"),d(5,"source",4)(6,"source",5)(7,"source",6)(8,"img",7),a()()(),r(9,"div",8)(10,"button",9),h("click",function(){return i.toggleMenu()}),C(11,ft,2,0,"span",10),a(),r(12,"div",11)(13,"nav",12)(14,"div",13)(15,"button",9),h("click",function(){return i.toggleMenu()}),r(16,"span",10),p(17,"close"),a()()(),r(18,"ul"),w(19,Ct,3,4,"li",null,_t),a()()()()()()),n&2&&(s(11),x(i.isMenuOpen?-1:11),s(),S("community-header__navigation-container--open",i.isMenuOpen),s(),S("community-header__navigation--open",i.isMenuOpen),s(6),O(i.navigationItems))},dependencies:[F,J],styles:["[_nghost-%COMP%]{grid-area:community-header}.community-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}.community-header__container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;color:#fff;background:#749483;height:100%;padding-inline:2rem}.community-header__right[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:1rem}.community-header__menu-toggle[_ngcontent-%COMP%]{height:24px;z-index:1;color:#fff}@media (min-width: 992px){.community-header__menu-toggle[_ngcontent-%COMP%]{display:none}}.community-header__navigation-container[_ngcontent-%COMP%]{display:none}.community-header__navigation-container--open[_ngcontent-%COMP%]{display:flex}@media (min-width: 992px){.community-header__navigation-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}}.community-header__navigation[_ngcontent-%COMP%]{position:fixed;top:0;right:-100%;height:100vh;transition:right .3s ease;background:#749483;z-index:1030}.community-header__navigation--open[_ngcontent-%COMP%]{right:0}.community-header__navigation--close[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center;padding:1rem;height:70px}@media (min-width: 768px){.community-header__navigation--close[_ngcontent-%COMP%]{height:80px}}@media (min-width: 992px){.community-header__navigation--close[_ngcontent-%COMP%]{display:none;height:0}}.community-header__navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;margin:0;padding:0;padding:.5rem;list-style:none}.community-header__navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;padding:.5rem;font-weight:700;transition:color .3s ease;color:#fff;text-shadow:0 1px #212529}.community-header__navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .community-header__navigation[_ngcontent-%COMP%]   a.--active[_ngcontent-%COMP%]{color:#ffb800}@media (min-width: 992px){.community-header__navigation[_ngcontent-%COMP%]{position:static;width:auto;height:auto;padding-top:0;background:none}.community-header__navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:2rem}.community-header__navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:0}}"],changeDetection:0})}}return e})();var We=(()=>{class e{constructor(){this.currentYear=new Date().getFullYear()}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=m({type:e,selectors:[["pgm-community-footer"]],decls:6,vars:1,consts:[[1,"footer"],[1,"footer__copyright"],[1,"text-italic"]],template:function(n,i){n&1&&(r(0,"footer",0)(1,"p",1),p(2),r(3,"span",2),p(4,"Galleria mellonella"),a(),p(5,". Todos os direitos reservados."),a()()),n&2&&(s(2),I("\xA9 ",i.currentYear," Plataforma "))},styles:["[_nghost-%COMP%]{grid-area:community-footer}.footer[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:2rem;padding:1rem;background:#749483;color:#fff;height:100%}.footer__copyright[_ngcontent-%COMP%]{text-align:center;font-size:.9rem}"],changeDetection:0})}}return e})();var vt=["*"],Ye=(()=>{class e{constructor(){this.narrow=U(!1)}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=m({type:e,selectors:[["pgm-community-container"]],inputs:{narrow:[1,"narrow"]},ngContentSelectors:vt,decls:2,vars:2,consts:[[1,"container"]],template:function(n,i){n&1&&(K(),r(0,"div",0),Z(1),a()),n&2&&S("container--narrow",i.narrow())},styles:["[_nghost-%COMP%]{grid-area:community-content}.container[_ngcontent-%COMP%]{display:block;width:100%;min-height:calc(100vh - 220px)}@media (min-width: 576px){.container[_ngcontent-%COMP%]{min-height:calc(100vh - 140px)}}@media (min-width: 768px){.container[_ngcontent-%COMP%]{min-height:calc(100vh - 150px)}}@media (min-width: 992px){.container[_ngcontent-%COMP%]{min-height:calc(100vh - 170px)}}@media (min-width: 1200px){.container[_ngcontent-%COMP%]{min-height:calc(100vh - 220px)}}@media (min-width: 576px){.container--narrow[_ngcontent-%COMP%]{max-width:33.75rem}}@media (min-width: 768px){.container--narrow[_ngcontent-%COMP%]{max-width:45rem}}@media (min-width: 992px){.container--narrow[_ngcontent-%COMP%]{max-width:60rem}}@media (min-width: 1200px){.container--narrow[_ngcontent-%COMP%]{max-width:71.25rem}}@media (min-width: 1400px){.container--narrow[_ngcontent-%COMP%]{max-width:82.5rem}}"],changeDetection:0})}}return e})();function xt(e,o){if(e&1&&(r(0,"a",1),p(1),a()),e&2){let t=u().$implicit;v("routerLink",t.url),s(),T(t.label)}}function yt(e,o){if(e&1&&(r(0,"span"),p(1),a()),e&2){let t=u().$implicit;s(),T(t.label)}}function Mt(e,o){if(e&1&&(r(0,"li"),C(1,xt,2,2,"a",1)(2,yt,2,1,"span"),a()),e&2){let t=o.$index,n=o.$count;s(),x(t!==n-1?1:2)}}var qe=(()=>{class e{constructor(){this.breadcrumbs=D([]),this.router=f(N),this.activatedRoute=f(Ie),this.router.events.pipe(L(t=>t instanceof De)).subscribe(()=>{this.generateBreadcrumbs()})}generateBreadcrumbs(){let t=[],n=this.activatedRoute.root,i="";for(;n.children.length>0;){let l=n.children[0],c=l.routeConfig;if(c?.path&&c.data&&c.data.breadcrumb){let g=c.path;i+=`/${g}`;let k=c.data.breadcrumb;if(g.includes(":slug")&&l.snapshot.params.slug){let R=l.snapshot.params.slug;t.push({label:this.resolveSlug(R),url:`${i.replace(":slug",R)}`})}else t.push({label:k,url:i})}n=l}this.breadcrumbs.set(t)}resolveSlug(t){return t.replace(/-/g," ")}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=m({type:e,selectors:[["pgm-breadcrumb"]],decls:4,vars:0,consts:[[1,"breadcrumb"],[3,"routerLink"]],template:function(n,i){n&1&&(r(0,"nav",0)(1,"ul"),w(2,Mt,3,1,"li",null,q),a()()),n&2&&(s(2),O(i.breadcrumbs()))},dependencies:[F],styles:['[_nghost-%COMP%]{align-self:flex-start}@media (min-width: 768px){[_nghost-%COMP%]{align-self:center}}.breadcrumb[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:.9rem;color:#212529}.breadcrumb[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;list-style:none;padding:0;margin:0}.breadcrumb[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:center}.breadcrumb[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#749483;font-weight:700;white-space:nowrap}.breadcrumb[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#5d786a}.breadcrumb[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#adb5bd}.breadcrumb[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child):after{content:">";margin:0 .5rem;color:#adb5bd}'],changeDetection:0})}}return e})();function bt(e,o){if(e&1){let t=b();r(0,"li",1),h("click",function(){let i=y(t).$implicit,l=u();return M(l.selectItem(i))}),p(1),a()}if(e&2){let t=o.$implicit;s(),I(" ",t.label," ")}}var Ke=(()=>{class e{constructor(){this.menuItems=U([]),this.itemSelected=ye()}selectItem(t){this.itemSelected.emit(t.action)}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=m({type:e,selectors:[["pgm-user-menu"]],inputs:{menuItems:[1,"menuItems"]},outputs:{itemSelected:"itemSelected"},decls:4,vars:0,consts:[[1,"user-menu"],[3,"click"]],template:function(n,i){n&1&&(r(0,"div",0)(1,"ul"),w(2,bt,2,1,"li",null,q),a()()),n&2&&(s(2),O(i.menuItems()))},dependencies:[P],styles:[".user-menu[_ngcontent-%COMP%]{position:absolute;top:100%;right:-20px;background-color:#fff;border-radius:4px;box-shadow:0 2px 4px #00000026;z-index:10;padding:.5rem 0;min-width:150px}ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}li[_ngcontent-%COMP%]{padding:.5rem 1rem;cursor:pointer;transition:background-color .2s ease}li[_ngcontent-%COMP%]:hover{background-color:#f8f9fa}"],changeDetection:0})}}return e})();var wt=()=>["perfil","notificacoes"],Ot=()=>["perfil","mensagens"];function Pt(e,o){if(e&1){let t=b();r(0,"pgm-user-menu",9),h("itemSelected",function(i){y(t);let l=u();return M(l.handleMenuItemClick(i))}),a()}if(e&2){let t=u();v("menuItems",t.menuItems)}}var Ze=(()=>{class e{constructor(){this.elementRef=f(Me),this.router=f(N),this.isMenuOpen=D(!1),this.menuItems=[{label:"Perfil",action:"profile"},{label:"Sair",action:"logout"}]}onDocumentClick(t){this.elementRef.nativeElement.contains(t.target)||this.isMenuOpen.set(!1)}toggleMenu(){this.isMenuOpen.update(t=>!t)}getIcon(){return this.isMenuOpen()?"arrow_drop_up":"arrow_drop_down"}handleMenuItemClick(t){console.log(`Item selected: ${t}`),t==="profile"&&this.router.navigate(["comunidade","perfil"]),this.isMenuOpen.set(!1)}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=m({type:e,selectors:[["pgm-user-data"]],hostBindings:function(n,i){n&1&&h("click",function(c){return i.onDocumentClick(c)},!1,we)},decls:14,vars:6,consts:[[1,"user-data"],[1,"user-data__icons"],[1,"material-icons",3,"routerLink"],[1,"user-data__separator"],[1,"user-data__user",3,"click"],[3,"menuItems"],["src","https://picsum.photos/20/20","alt","Logo","loading","eager"],["href","javascript:void(0);"],[1,"material-icons"],[3,"itemSelected","menuItems"]],template:function(n,i){n&1&&(r(0,"div",0)(1,"div",1)(2,"a",2),p(3,"notifications"),a(),r(4,"a",2),p(5,"mail"),a()(),d(6,"div",3),r(7,"div",4),h("click",function(){return i.toggleMenu()}),C(8,Pt,1,1,"pgm-user-menu",5),d(9,"img",6),r(10,"a",7),p(11,"Marcelo"),r(12,"span",8),p(13),a()()()()),n&2&&(s(2),v("routerLink",j(4,wt)),s(2),v("routerLink",j(5,Ot)),s(4),x(i.isMenuOpen()?8:-1),s(5),T(i.getIcon()))},dependencies:[F,P,Ke],styles:["[_nghost-%COMP%]{align-self:flex-end}@media (min-width: 768px){[_nghost-%COMP%]{align-self:center}}.user-data[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:1.5rem;color:#749483;font-weight:700}.user-data[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .user-data[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#749483;font-weight:700}.user-data__icons[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:1rem}.user-data__user[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:row;gap:.25rem;cursor:pointer}.user-data__user[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center}.user-data__user[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:24px;height:24px;border-radius:50%}.user-data__separator[_ngcontent-%COMP%]{border-right:2px solid #ced4da;height:1.5rem}"],changeDetection:0})}}return e})();function St(e,o){if(e&1){let t=b();r(0,"button",5),h("click",function(){y(t);let i=u();return M(i.clearSearchTerm())}),r(1,"span",6),p(2,"close"),a()()}}function Tt(e,o){if(e&1){let t=b();r(0,"div",9),h("click",function(){let i=y(t).$implicit,l=u(3);return M(l.selectResult(i))}),d(1,"span",10),a()}if(e&2){let t=o.$implicit;s(),v("innerHTML",t,be)}}function kt(e,o){if(e&1&&(r(0,"div",7),w(1,Tt,2,1,"div",8,ae),a()),e&2){let t=u(2);s(),O(t.searchResults())}}function Et(e,o){if(e&1){let t=b();r(0,"div",13),h("click",function(){let i=y(t).$implicit,l=u(4);return M(l.selectResult(i))}),p(1),a()}if(e&2){let t=o.$implicit;s(),I(" ",t," ")}}function Dt(e,o){if(e&1&&(r(0,"div",11)(1,"span"),p(2,"Recentes:"),a(),w(3,Et,2,1,"div",12,ae),a()),e&2){let t=u(3);s(3),O(t.recentSearches())}}function It(e,o){if(e&1&&C(0,Dt,5,0,"div",11),e&2){let t=u(2);x(t.recentSearches().length>0&&(t.searchTerm.value==null?null:t.searchTerm.value.length)===0?0:-1)}}function Ft(e,o){if(e&1&&(r(0,"div",4),C(1,kt,3,0,"div",7)(2,It,1,1),a()),e&2){let t=u();s(),x(t.searchResults().length>0?1:2)}}var Je=(()=>{class e{constructor(){this.searchTerm=new Le(""),this.searchResults=D([]),this.recentSearches=D([]),this.isInputFocused=D(!1),this.sanitizer=f(Ee),this.searchTerm.valueChanges.pipe(de(300),ge()).subscribe(t=>{t&&t.length>2?this.search(t):this.searchResults.set([])})}ngOnInit(){let t=localStorage.getItem("recentSearches");t&&this.recentSearches.set(JSON.parse(t))}normalizeString(t){return t.normalize("NFD").replace(/[\u0300-\u036f]/g,"")}highlightSearchTerm(t,n){let i=this.normalizeString(n).toLowerCase(),c=this.normalizeString(t).toLowerCase().indexOf(i);if(c>=0){let g=t.substring(0,c),k=t.substring(c,c+n.length),R=t.substring(c+n.length),E=`${g}<strong>${k}</strong>${R}`;return this.sanitizer.bypassSecurityTrustHtml(E)}return this.sanitizer.bypassSecurityTrustHtml(t)}search(t){let n=this.normalizeString(t).toLowerCase(),c=["Efeitos da Galleria mellonella em diferentes tipos de pl\xE1stico","Enzimas da Galleria mellonella para degrada\xE7\xE3o de polietileno","Aplica\xE7\xF5es biotecnol\xF3gicas da Galleria mellonella na reciclagem de pl\xE1stico","Estudo comparativo da efici\xEAncia da Galleria mellonella com outros m\xE9todos de degrada\xE7\xE3o de pl\xE1stico","Microbiota intestinal da Galleria mellonella e seu papel na degrada\xE7\xE3o de pol\xEDmeros","Identifica\xE7\xE3o de genes envolvidos na capacidade da Galleria mellonella de degradar pl\xE1stico","Otimiza\xE7\xE3o das condi\xE7\xF5es para a degrada\xE7\xE3o de pl\xE1stico pela *Galleria mellonella*","Utiliza\xE7\xE3o da Galleria mellonella para reduzir a polui\xE7\xE3o por micropl\xE1sticos","Impacto ambiental da utiliza\xE7\xE3o da Galleria mellonella na degrada\xE7\xE3o de pl\xE1stico","An\xE1lise econ\xF4mica da utiliza\xE7\xE3o da Galleria mellonella na reciclagem de pl\xE1stico","Novas descobertas sobre a capacidade da Galleria mellonella de degradar pl\xE1stico","Como a Galleria mellonella pode nos ajudar a resolver o problema do lixo pl\xE1stico","O papel da Galleria mellonella na biorremedia\xE7\xE3o de pl\xE1sticos","A Galleria mellonella como modelo para estudos de degrada\xE7\xE3o de pl\xE1stico","Estrat\xE9gias para aumentar a efici\xEAncia da Galleria mellonella na degrada\xE7\xE3o de pl\xE1stico"].filter(g=>this.normalizeString(g).toLowerCase().includes(n)).map(g=>this.highlightSearchTerm(g,t));this.searchResults.set(c)}addToRecentSearches(t){let n=this.recentSearches();if(!n.includes(t)){let i=[t,...n.slice(0,4)];this.recentSearches.set(i),localStorage.setItem("recentSearches",JSON.stringify(i))}}selectResult(t){let n=this.extractTextFromHtml(t);this.searchTerm.setValue(n),this.addToRecentSearches(n),this.searchResults.set([]),this.isInputFocused.set(!1)}extractTextFromHtml(t){let n=this.sanitizer.sanitize(1,t)||"",i=document.createElement("div");return i.innerHTML=n,i.textContent||i.innerText||""}clearSearchTerm(){this.searchTerm.setValue("")}handleInputFocus(){this.isInputFocused.set(!0),this.searchTerm.value&&this.searchTerm.value.length>0&&this.search(this.searchTerm.value)}handleInputBlur(){setTimeout(()=>{document.activeElement&&!document.activeElement.classList.contains("search-input__result-item")&&(this.isInputFocused.set(!1),this.searchResults.set([]))},100)}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=m({type:e,selectors:[["pgm-search-input"]],decls:5,vars:3,consts:[[1,"search-input__container"],[1,"search-input__input"],["type","text","placeholder","Pesquisar...",3,"focus","blur","formControl"],[1,"search-input__clear-button"],[1,"search-input__autocomplete"],[1,"search-input__clear-button",3,"click"],[1,"material-icons"],[1,"search-input__autocomplete__results"],[1,"search-input__result-item"],[1,"search-input__result-item",3,"click"],[3,"innerHTML"],[1,"search-input__autocomplete__recent-searches"],[1,"search-input__recent-item"],[1,"search-input__recent-item",3,"click"]],template:function(n,i){n&1&&(r(0,"div",0)(1,"div",1)(2,"input",2),h("focus",function(){return i.handleInputFocus()})("blur",function(){return i.handleInputBlur()}),a(),C(3,St,3,0,"button",3),a(),C(4,Ft,3,1,"div",4),a()),n&2&&(s(2),v("formControl",i.searchTerm),s(),x(i.searchTerm.value?3:-1),s(),x(i.isInputFocused()?4:-1))},dependencies:[P,je,Re,Ae,ze],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%}@media (min-width: 768px){[_nghost-%COMP%]{width:40%}}@media (min-width: 992px){[_nghost-%COMP%]{width:30%}}.search-input__container[_ngcontent-%COMP%]{width:100%;position:relative}.search-input__input[_ngcontent-%COMP%]{display:flex;align-items:center;border:1px solid #dee2e6;border-radius:4px;padding:.5rem;background-color:#fff}.search-input__input[_ngcontent-%COMP%]:focus-within{outline:#749483;border-color:#749483;box-shadow:2px 4px #74948326}.search-input__input[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{color:#6c757d;flex-grow:1;border:none;outline:none}.search-input__input[_ngcontent-%COMP%]   .search-input__clear-button[_ngcontent-%COMP%]{background:none;border:none;cursor:pointer;font-size:1.2rem;color:#749483;padding:0;height:24px;width:24px}.search-input__autocomplete[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;width:100%;background-color:#fff;border:1px solid #749483;border-top:none;border-radius:0 0 4px 4px;box-shadow:0 2px 4px #00000026;z-index:10;max-height:200px;overflow-y:auto}.search-input__autocomplete__results[_ngcontent-%COMP%], .search-input__autocomplete__recent-searches[_ngcontent-%COMP%]{padding:.5rem}.search-input__autocomplete__results[_ngcontent-%COMP%]   .search-input__result-item[_ngcontent-%COMP%], .search-input__autocomplete__results[_ngcontent-%COMP%]   .search-input__recent-item[_ngcontent-%COMP%], .search-input__autocomplete__recent-searches[_ngcontent-%COMP%]   .search-input__result-item[_ngcontent-%COMP%], .search-input__autocomplete__recent-searches[_ngcontent-%COMP%]   .search-input__recent-item[_ngcontent-%COMP%]{padding:.7rem;cursor:pointer;transition:background-color .2s ease}.search-input__autocomplete__results[_ngcontent-%COMP%]   .search-input__result-item[_ngcontent-%COMP%]:hover, .search-input__autocomplete__results[_ngcontent-%COMP%]   .search-input__recent-item[_ngcontent-%COMP%]:hover, .search-input__autocomplete__recent-searches[_ngcontent-%COMP%]   .search-input__result-item[_ngcontent-%COMP%]:hover, .search-input__autocomplete__recent-searches[_ngcontent-%COMP%]   .search-input__recent-item[_ngcontent-%COMP%]:hover{background-color:#f8f9fa}.search-input__autocomplete__recent-searches[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:700;display:block;margin-bottom:.5rem}"],changeDetection:0})}}return e})();var Qe=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=m({type:e,selectors:[["pgm-toolbar"]],decls:4,vars:0,consts:[[1,"toolbar"]],template:function(n,i){n&1&&(r(0,"div",0),d(1,"pgm-breadcrumb")(2,"pgm-search-input")(3,"pgm-user-data"),a())},dependencies:[qe,Ze,Je],styles:["[_nghost-%COMP%]{grid-area:search-bar}.toolbar[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:1rem;padding:1.5rem;border-bottom:1px solid #ced4da}@media (min-width: 768px){.toolbar[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between}}"],changeDetection:0})}}return e})();var Xe=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=m({type:e,selectors:[["pgm-last-topics"]],decls:1,vars:0,consts:[[1,"last-topics"]],template:function(n,i){n&1&&d(0,"div",0)},styles:["[_nghost-%COMP%]{grid-area:last-topics;display:flex;flex-direction:column;justify-content:space-between;background-color:#fff;border-radius:8px;height:100px;width:100%;box-shadow:0 2px 4px #00000026}"],changeDetection:0})}}return e})();var et=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=m({type:e,selectors:[["pgm-who-is-online"]],decls:1,vars:0,consts:[[1,"who-is-online"]],template:function(n,i){n&1&&d(0,"div",0)},styles:["[_nghost-%COMP%]{grid-area:who-is-online;background-color:#fff;border-radius:8px;box-shadow:0 2px 4px #00000026;height:100px;width:100%}"]})}}return e})();var tt=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=m({type:e,selectors:[["pgm-statistics"]],decls:1,vars:0,consts:[[1,"statistics"]],template:function(n,i){n&1&&d(0,"div",0)},styles:["[_nghost-%COMP%]{grid-area:stats}.statistics[_ngcontent-%COMP%]{display:flex;height:100px;width:100%;padding:2rem;background-color:#fff;border-radius:8px;box-shadow:0 2px 4px #00000026}"]})}}return e})();var nt=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=m({type:e,selectors:[["pgm-community-area"]],decls:9,vars:0,consts:[[1,"grid"],[1,"grid__content"],[1,"grid__footer"]],template:function(n,i){n&1&&(d(0,"pgm-community-header")(1,"pgm-toolbar"),r(2,"div",0)(3,"pgm-community-container",1),d(4,"router-outlet"),a(),d(5,"pgm-last-topics")(6,"pgm-who-is-online")(7,"pgm-statistics"),a(),d(8,"pgm-community-footer",2))},dependencies:[$e,We,Ye,V,Qe,Xe,et,tt],styles:['.grid[_ngcontent-%COMP%]{display:grid;grid-template:"community-header" "search-bar" "community-content" "last-topics" "who-is-online" "stats" "community-footer";background-color:#e9ecef;gap:1rem;height:100%}.grid__content[_ngcontent-%COMP%]{display:flex;flex:1}@media (min-width: 992px){.grid[_ngcontent-%COMP%]{grid-template:"community-header community-header " "search-bar search-bar" "community-content last-topics" "community-content who-is-online" "stats stats" "community-footer community-footer"/4fr 1fr;padding:2rem}}']})}}return e})();var it=[{path:"comunidade",component:nt,canActivate:[X],data:{breadcrumb:"Comunidade"},children:[{path:"",loadComponent:()=>import("./chunk-YTO2QMB2.js").then(e=>e.CommunityHomeComponent)},{path:"perfil/:slug",loadComponent:()=>import("./chunk-AQLFZVMI.js").then(e=>e.CommunityProfileComponent),data:{breadcrumb:"Perfil"},children:[{path:"notificacoes",loadComponent:()=>import("./chunk-IOCHEFKT.js").then(e=>e.CommunityNotificationsComponent),data:{breadcrumb:"Notifica\xE7\xF5es"}},{path:"mensagens",loadComponent:()=>import("./chunk-CFHFAVTO.js").then(e=>e.CommunityMessagesComponent),data:{breadcrumb:"Mensagens"}}]},{path:"forum/:slug",loadComponent:()=>import("./chunk-FOYRSBAL.js").then(e=>e.CommunityForumComponent),data:{breadcrumb:"F\xF3rum"},children:[{path:"topico/:slug",loadComponent:()=>import("./chunk-JUX26OZ7.js").then(e=>e.CommunityTopicComponent),data:{breadcrumb:"T\xF3pico"}},{path:"topico/novo",loadComponent:()=>import("./chunk-FN3C4UBR.js").then(e=>e.CommunityTopicFormComponent),data:{breadcrumb:"Novo t\xF3pico"}}]}]}];var ot=[...Ge,...it,{path:"**",loadComponent:()=>import("./chunk-K6BNL7JP.js").then(e=>e.NotFoundComponent)}];var W="Service workers are disabled or not supported by this browser";function Rt(e){return ee(()=>me(new Error(e)))}var B=class{serviceWorker;worker;registration;events;constructor(o){if(this.serviceWorker=o,!o)this.worker=this.events=this.registration=Rt(W);else{let n=te(o,"controllerchange").pipe(A(()=>o.controller)),i=ee(()=>Y(o.controller)),l=pe(i,n);this.worker=l.pipe(L(E=>!!E)),this.registration=this.worker.pipe(G(()=>o.getRegistration()));let R=te(o,"message").pipe(A(E=>E.data)).pipe(L(E=>E&&E.type)).pipe(he());R.connect(),this.events=R}}postMessage(o,t){return this.worker.pipe(z(1),_e(n=>{n.postMessage(ce({action:o},t))})).toPromise().then(()=>{})}postMessageWithOperation(o,t,n){let i=this.waitForOperationCompleted(n),l=this.postMessage(o,t);return Promise.all([l,i]).then(([,c])=>c)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(o){let t;return typeof o=="string"?t=n=>n.type===o:t=n=>o.includes(n.type),this.events.pipe(L(t))}nextEventOfType(o){return this.eventsOfType(o).pipe(z(1))}waitForOperationCompleted(o){return this.eventsOfType("OPERATION_COMPLETED").pipe(L(t=>t.nonce===o),z(1),A(t=>{if(t.result!==void 0)return t.result;throw new Error(t.error)})).toPromise()}get isEnabled(){return!!this.serviceWorker}},At=(()=>{class e{sw;messages;notificationClicks;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new se;constructor(t){if(this.sw=t,!t.isEnabled){this.messages=H,this.notificationClicks=H,this.subscription=H;return}this.messages=this.sw.eventsOfType("PUSH").pipe(A(i=>i.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(A(i=>i.data)),this.pushManager=this.sw.registration.pipe(A(i=>i.pushManager));let n=this.pushManager.pipe(G(i=>i.getSubscription()));this.subscription=ne(n,this.subscriptionChanges)}requestSubscription(t){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(W));let n={userVisibleOnly:!0},i=this.decodeBase64(t.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),l=new Uint8Array(new ArrayBuffer(i.length));for(let c=0;c<i.length;c++)l[c]=i.charCodeAt(c);return n.applicationServerKey=l,this.pushManager.pipe(G(c=>c.subscribe(n)),z(1)).toPromise().then(c=>(this.subscriptionChanges.next(c),c))}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(W));let t=n=>{if(n===null)throw new Error("Not subscribed to push notifications.");return n.unsubscribe().then(i=>{if(!i)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null)})};return this.subscription.pipe(z(1),G(t)).toPromise()}decodeBase64(t){return atob(t)}static \u0275fac=function(n){return new(n||e)(oe(B))};static \u0275prov=ie({token:e,factory:e.\u0275fac})}return e})(),Lt=(()=>{class e{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}constructor(t){if(this.sw=t,!t.isEnabled){this.versionUpdates=H,this.unrecoverable=H;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(W));let t=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:t},t)}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(W));let t=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:t},t)}static \u0275fac=function(n){return new(n||e)(oe(B))};static \u0275prov=ie({token:e,factory:e.\u0275fac})}return e})();var rt=new fe("");function zt(e,o,t){return()=>{if(!("serviceWorker"in navigator&&t.enabled!==!1))return;let n=e.get(xe),i=e.get(re);n.runOutsideAngular(()=>{let c=navigator.serviceWorker,g=()=>c.controller?.postMessage({action:"INITIALIZE"});c.addEventListener("controllerchange",g),i.onDestroy(()=>{c.removeEventListener("controllerchange",g)})});let l;if(typeof t.registrationStrategy=="function")l=t.registrationStrategy();else{let[c,...g]=(t.registrationStrategy||"registerWhenStable:30000").split(":");switch(c){case"registerImmediately":l=Y(null);break;case"registerWithDelay":l=at(+g[0]||0);break;case"registerWhenStable":let k=le(e.get(re).whenStable());l=g[0]?ne(k,at(+g[0])):k;break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${t.registrationStrategy}`)}}n.runOutsideAngular(()=>l.pipe(z(1)).subscribe(()=>navigator.serviceWorker.register(o,{scope:t.scope}).catch(c=>console.error("Service worker registration failed with:",c))))}}function at(e){return Y(null).pipe(ue(e))}function jt(e){return new B(e.enabled!==!1?navigator.serviceWorker:void 0)}var $=class{enabled;scope;registrationStrategy};function ct(e,o={}){return Ce([At,Lt,{provide:rt,useValue:e},{provide:$,useValue:o},{provide:B,useFactory:jt,deps:[$]},{provide:Oe,useFactory:zt,deps:[ve,rt,$],multi:!0}])}var st=(e,o)=>{let n=f(Q).getToken();if(n){let i=e.clone({setHeaders:{Authorization:`Bearer ${n}`}});return o(i)}return o(e)};var lt={providers:[Fe(ot),ct("ngsw-worker.js",{enabled:!Pe(),registrationStrategy:"registerWhenStable:30000"}),Se(Te([st]))]};ke(He,lt).catch(e=>console.error(e));
