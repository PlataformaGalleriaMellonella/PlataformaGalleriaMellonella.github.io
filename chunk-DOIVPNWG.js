import{a as P}from"./chunk-CYCCL62D.js";import{k as w,m as O}from"./chunk-MFPMUZJE.js";import{Ca as u,Da as v,Fa as M,Ha as i,Qa as m,Va as g,bb as l,eb as p,ga as _,ha as f,ib as r,jb as c,kb as C,lb as h,mb as d,nb as s,qa as T,ra as a,ub as x,vb as b,zb as k}from"./chunk-TSE6CILM.js";var H=t=>({"hero__content--center":t});function S(t,y){if(t&1){let e=h();r(0,"pgm-button",8),d("click",function(){_(e);let n=s();return f(n.primaryClicked.emit())}),c()}if(t&2){let e=s();l("text",e.primaryButtonText())}}function z(t,y){if(t&1){let e=h();r(0,"pgm-button",9),d("click",function(){_(e);let n=s();return f(n.secondaryClicked.emit())}),c()}if(t&2){let e=s();l("text",e.secondaryButtonText())}}function V(t,y){if(t&1&&(r(0,"div",7),C(1,"img",10),c()),t&2){let e=s();i(),l("src",e.imageSrc(),v)("alt",e.imageAlt())}}var W=(()=>{class t{constructor(){this.title=a.required(),this.subtitle=a.required(),this.contentCentralized=a(!1),this.primaryButtonText=a(),this.secondaryButtonText=a(),this.imageSrc=a(),this.imageAlt=a(),this.primaryClicked=T(),this.secondaryClicked=T(),this.centralized=this.contentCentralized()}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=m({type:t,selectors:[["pgm-hero"]],inputs:{title:[1,"title"],subtitle:[1,"subtitle"],contentCentralized:[1,"contentCentralized"],primaryButtonText:[1,"primaryButtonText"],secondaryButtonText:[1,"secondaryButtonText"],imageSrc:[1,"imageSrc"],imageAlt:[1,"imageAlt"]},outputs:{primaryClicked:"primaryClicked",secondaryClicked:"secondaryClicked"},decls:8,vars:8,consts:[[1,"hero"],[1,"hero__content",3,"ngClass"],[1,"hero__title",3,"innerHTML"],[1,"hero__subtitle",3,"innerHTML"],[1,"hero__cta"],["variant","cta",3,"text"],["variant","outline",3,"text"],[1,"hero__image"],["variant","cta",3,"click","text"],["variant","outline",3,"click","text"],[3,"src","alt"]],template:function(o,n){o&1&&(r(0,"section",0)(1,"div",1),C(2,"h1",2)(3,"p",3),r(4,"div",4),g(5,S,1,1,"pgm-button",5)(6,z,1,1,"pgm-button",6),c()(),g(7,V,2,2,"div",7),c()),o&2&&(i(),l("ngClass",k(6,H,n.contentCentralized())),i(),l("innerHTML",n.title(),u),i(),l("innerHTML",n.subtitle(),u),i(2),p(n.primaryButtonText()?5:-1),i(),p(n.secondaryButtonText()?6:-1),i(),p(n.imageSrc()?7:-1))},dependencies:[P,O,w],styles:[".hero[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:2rem;min-height:60vh;padding:2rem;background:linear-gradient(135deg,#465c50,#749483);color:#fff}@media (min-width: 992px){.hero[_ngcontent-%COMP%]{padding:6rem 4rem;display:flex;flex-direction:row;justify-content:space-between}}.hero__content[_ngcontent-%COMP%]{display:flex;flex-direction:column}.hero__content--center[_ngcontent-%COMP%]{align-items:center;text-align:center}@media (min-width: 992px){.hero__content--center[_ngcontent-%COMP%]{padding-inline:12rem}}.hero__title[_ngcontent-%COMP%]{font-weight:700;margin-bottom:1.5rem;color:#ffb800}.hero__subtitle[_ngcontent-%COMP%]{font-size:1.25rem;margin-bottom:2rem;color:#f8f9fa}.hero__cta[_ngcontent-%COMP%]{display:flex;gap:.5rem}.hero__image[_ngcontent-%COMP%]{width:100%}"],changeDetection:0})}}return t})();function D(t,y){if(t&1){let e=h();r(0,"button",1),d("click",function(){_(e);let n=s();return f(n.scrollToTop())}),r(1,"span",2),x(2,"arrow_upward"),c()()}}var N=(()=>{class t{constructor(){this.isVisible=!1}onWindowScroll(){let e=window.scrollY||document.documentElement.scrollTop||document.body.scrollTop||0;this.isVisible=e>300}scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=m({type:t,selectors:[["pgm-back-to-top"]],hostBindings:function(o,n){o&1&&d("scroll",function(){return n.onWindowScroll()},!1,M)},decls:1,vars:1,consts:[[1,"back-to-top"],[1,"back-to-top",3,"click"],[1,"material-icons"]],template:function(o,n){o&1&&g(0,D,3,0,"button",0),o&2&&p(n.isVisible?0:-1)},styles:[".back-to-top[_ngcontent-%COMP%]{position:fixed;bottom:2rem;right:2rem;width:50px;height:50px;border-radius:50%;background-color:#fff;color:#749483;border:none;box-shadow:#0003 0 6px 12px;cursor:pointer;display:flex;justify-content:center;align-items:center;transition:background-color .3s ease}.back-to-top[_ngcontent-%COMP%]:hover{background-color:#303f37;box-shadow:#0000004d 0 6px 10px}.back-to-top[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:24px;color:#fff}"]})}}return t})();var Q=(()=>{class t{constructor(){this.info=a.required()}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=m({type:t,selectors:[["pgm-info-card"]],inputs:{info:[1,"info"]},decls:6,vars:3,consts:[[1,"info__card"],[1,"material-icons"],[3,"innerHTML"]],template:function(o,n){o&1&&(r(0,"div",0)(1,"span",1),x(2),c(),r(3,"h3"),x(4),c(),C(5,"p",2),c()),o&2&&(i(2),b(n.info().icon),i(2),b(n.info().title),i(),l("innerHTML",n.info().description,u))},styles:[".info__card[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;height:100%;padding:2rem;background:#fff;border-radius:12px;box-shadow:0 4px 12px #0000001a;transition:transform .3s ease}@media (min-width: 992px){.info__card[_ngcontent-%COMP%]{padding:2rem}}.info__card[_ngcontent-%COMP%]:hover{transform:translateY(-5px)}.info__card[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:2.5rem;color:#749483}.info__card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.5rem;color:#212529}.info__card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#6c757d;line-height:1.6}"],changeDetection:0})}}return t})();export{W as a,Q as b,N as c};
