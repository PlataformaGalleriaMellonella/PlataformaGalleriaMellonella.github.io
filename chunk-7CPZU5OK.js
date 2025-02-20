import{a as w}from"./chunk-C6LI6HE3.js";import{b as O,c as P}from"./chunk-YZFDS22F.js";import{$a as l,Aa as i,Ja as p,Na as C,Ua as c,Xa as _,ab as a,ba as f,bb as s,ca as u,cb as h,db as x,eb as m,kb as y,la as g,lb as v,ma as r,pb as b,xa as d,ya as T}from"./chunk-BW4FWTPU.js";var H=t=>({"hero__content--center":t});function z(t,M){if(t&1){let e=h();l(0,"pgm-button",8),x("click",function(){f(e);let n=m();return u(n.primaryClicked.emit())}),a()}if(t&2){let e=m();c("text",e.primaryButtonText())}}function S(t,M){if(t&1){let e=h();l(0,"pgm-button",9),x("click",function(){f(e);let n=m();return u(n.secondaryClicked.emit())}),a()}if(t&2){let e=m();c("text",e.secondaryButtonText())}}function B(t,M){if(t&1&&(l(0,"div",7),s(1,"img",10),a()),t&2){let e=m();i(),c("src",e.imageSrc(),T)("alt",e.imageAlt())}}var I=(()=>{class t{constructor(){this.title=r.required(),this.subtitle=r.required(),this.contentCentralized=r(!1),this.primaryButtonText=r(),this.secondaryButtonText=r(),this.imageSrc=r(),this.imageAlt=r(),this.primaryClicked=g(),this.secondaryClicked=g(),this.centralized=this.contentCentralized()}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=p({type:t,selectors:[["pgm-hero"]],inputs:{title:[1,"title"],subtitle:[1,"subtitle"],contentCentralized:[1,"contentCentralized"],primaryButtonText:[1,"primaryButtonText"],secondaryButtonText:[1,"secondaryButtonText"],imageSrc:[1,"imageSrc"],imageAlt:[1,"imageAlt"]},outputs:{primaryClicked:"primaryClicked",secondaryClicked:"secondaryClicked"},decls:8,vars:8,consts:[[1,"hero"],[1,"hero__content",3,"ngClass"],[1,"hero__title",3,"innerHTML"],[1,"hero__subtitle",3,"innerHTML"],[1,"hero__cta"],["variant","cta",3,"text"],["variant","outline",3,"text"],[1,"hero__image"],["variant","cta",3,"click","text"],["variant","outline",3,"click","text"],[3,"src","alt"]],template:function(o,n){o&1&&(l(0,"section",0)(1,"div",1),s(2,"h1",2)(3,"p",3),l(4,"div",4),C(5,z,1,1,"pgm-button",5)(6,S,1,1,"pgm-button",6),a()(),C(7,B,2,2,"div",7),a()),o&2&&(i(),c("ngClass",b(6,H,n.contentCentralized())),i(),c("innerHTML",n.title(),d),i(),c("innerHTML",n.subtitle(),d),i(2),_(n.primaryButtonText()?5:-1),i(),_(n.secondaryButtonText()?6:-1),i(),_(n.imageSrc()?7:-1))},dependencies:[w,P,O],styles:[".hero[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;gap:2rem;min-height:60vh;padding:2rem;background:linear-gradient(135deg,#475b51,#91aa9d);color:#fff}@media (min-width: 992px){.hero[_ngcontent-%COMP%]{padding:6rem 4rem;display:flex;flex-direction:row;justify-content:space-between}}.hero__content[_ngcontent-%COMP%]{display:flex;flex-direction:column}.hero__content--center[_ngcontent-%COMP%]{align-items:center}@media (min-width: 992px){.hero__content--center[_ngcontent-%COMP%]{padding-inline:12rem}}.hero__title[_ngcontent-%COMP%]{font-weight:700;margin-bottom:1.5rem;color:#ffb800}.hero__subtitle[_ngcontent-%COMP%]{font-size:1.25rem;margin-bottom:2rem;color:#f8f9fa}.hero__cta[_ngcontent-%COMP%]{display:flex;gap:.5rem}.hero__image[_ngcontent-%COMP%]{width:100%}"]})}}return t})();var N=(()=>{class t{constructor(){this.info=r.required()}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=p({type:t,selectors:[["pgm-info-card"]],inputs:{info:[1,"info"]},decls:6,vars:3,consts:[[1,"info__card"],[1,"material-icons"],[3,"innerHTML"]],template:function(o,n){o&1&&(l(0,"div",0)(1,"span",1),y(2),a(),l(3,"h3"),y(4),a(),s(5,"p",2),a()),o&2&&(i(2),v(n.info().icon),i(2),v(n.info().title),i(),c("innerHTML",n.info().description,d))},styles:[".info__card[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;height:100%;padding:2rem;background:#fff;border-radius:12px;box-shadow:0 4px 12px #0000001a;transition:transform .3s ease}@media (min-width: 992px){.info__card[_ngcontent-%COMP%]{padding:2rem}}.info__card[_ngcontent-%COMP%]:hover{transform:translateY(-5px)}.info__card[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:2.5rem;color:#91aa9d}.info__card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.5rem;color:#212529}.info__card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#6c757d;line-height:1.6}"]})}}return t})();export{I as a,N as b};
