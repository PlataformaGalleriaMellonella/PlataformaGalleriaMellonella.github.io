import{a as b}from"./chunk-DE5YU4P7.js";import{l as v,o as T}from"./chunk-ALWD4M5K.js";import{Cb as u,Db as d,Lb as M,Mb as w,Oa as p,Pa as P,Qb as y,Ta as i,ab as g,fb as x,ia as s,ja as h,nb as a,qb as l,sa as C,ta as r,vb as c,wb as m,xb as _,yb as f}from"./chunk-62T5DOLL.js";var H=e=>({"hero__content--center":e});function S(e,O){if(e&1){let t=f();c(0,"pgm-button",8),u("click",function(){s(t);let n=d();return h(n.primaryClicked.emit())}),m()}if(e&2){let t=d();a("text",t.primaryButtonText())}}function z(e,O){if(e&1){let t=f();c(0,"pgm-button",9),u("click",function(){s(t);let n=d();return h(n.secondaryClicked.emit())}),m()}if(e&2){let t=d();a("text",t.secondaryButtonText())}}function B(e,O){if(e&1&&(c(0,"div",7),_(1,"img",10),m()),e&2){let t=d();i(),a("src",t.imageSrc(),P)("alt",t.imageAlt())}}var q=(()=>{class e{constructor(){this.title=r.required(),this.subtitle=r.required(),this.contentCentralized=r(!1),this.primaryButtonText=r(),this.secondaryButtonText=r(),this.imageSrc=r(),this.imageAlt=r(),this.primaryClicked=C(),this.secondaryClicked=C(),this.centralized=this.contentCentralized()}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=g({type:e,selectors:[["pgm-hero"]],inputs:{title:[1,"title"],subtitle:[1,"subtitle"],contentCentralized:[1,"contentCentralized"],primaryButtonText:[1,"primaryButtonText"],secondaryButtonText:[1,"secondaryButtonText"],imageSrc:[1,"imageSrc"],imageAlt:[1,"imageAlt"]},outputs:{primaryClicked:"primaryClicked",secondaryClicked:"secondaryClicked"},decls:8,vars:8,consts:[[1,"hero"],[1,"hero__content",3,"ngClass"],[1,"hero__title",3,"innerHTML"],[1,"hero__subtitle",3,"innerHTML"],[1,"hero__cta"],["variant","cta",3,"text"],["variant","outline",3,"text"],[1,"hero__image"],["variant","cta",3,"click","text"],["variant","outline",3,"click","text"],[3,"src","alt"]],template:function(o,n){o&1&&(c(0,"section",0)(1,"div",1),_(2,"h1",2)(3,"p",3),c(4,"div",4),x(5,S,1,1,"pgm-button",5)(6,z,1,1,"pgm-button",6),m()(),x(7,B,2,2,"div",7),m()),o&2&&(i(),a("ngClass",y(6,H,n.contentCentralized())),i(),a("innerHTML",n.title(),p),i(),a("innerHTML",n.subtitle(),p),i(2),l(n.primaryButtonText()?5:-1),i(),l(n.secondaryButtonText()?6:-1),i(),l(n.imageSrc()?7:-1))},dependencies:[b,T,v],styles:[".hero[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:60vh;background:linear-gradient(135deg,#5d786a,#749483);gap:.375rem .375rem;padding:1rem}@media (min-width: 576px){.hero[_ngcontent-%COMP%]{gap:.75rem .75rem}}@media (min-width: 768px){.hero[_ngcontent-%COMP%]{gap:1.5rem 1.5rem}}@media (min-width: 992px){.hero[_ngcontent-%COMP%]{gap:2.25rem 2.25rem}}@media (min-width: 1200px){.hero[_ngcontent-%COMP%]{gap:3rem 3rem}}@media (min-width: 576px){.hero[_ngcontent-%COMP%]{padding:2rem}}@media (min-width: 768px){.hero[_ngcontent-%COMP%]{padding:2rem}}@media (min-width: 992px){.hero[_ngcontent-%COMP%]{padding:3rem}}@media (min-width: 1200px){.hero[_ngcontent-%COMP%]{padding:4rem}}@media (min-width: 768px){.hero[_ngcontent-%COMP%]{flex-direction:row}}.hero__content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;text-align:center;gap:.25rem .25rem}@media (min-width: 576px){.hero__content[_ngcontent-%COMP%]{gap:.5rem .5rem}}@media (min-width: 768px){.hero__content[_ngcontent-%COMP%]{gap:.5rem .5rem}}@media (min-width: 992px){.hero__content[_ngcontent-%COMP%]{gap:.75rem .75rem}}@media (min-width: 1200px){.hero__content[_ngcontent-%COMP%]{gap:1rem 1rem}}@media (min-width: 768px){.hero__content[_ngcontent-%COMP%]{align-items:flex-start;text-align:left}.hero__content--center[_ngcontent-%COMP%]{margin-top:0;margin-right:3rem;margin-bottom:0;margin-left:3rem;align-items:center;text-align:center}}@media (min-width: 768px) and (min-width: 576px){.hero__content--center[_ngcontent-%COMP%]{margin-top:0;margin-right:6rem;margin-bottom:0;margin-left:6rem}}@media (min-width: 768px) and (min-width: 768px){.hero__content--center[_ngcontent-%COMP%]{margin-top:0;margin-right:6rem;margin-bottom:0;margin-left:6rem}}@media (min-width: 768px) and (min-width: 992px){.hero__content--center[_ngcontent-%COMP%]{margin-top:0;margin-right:9rem;margin-bottom:0;margin-left:9rem}}@media (min-width: 768px) and (min-width: 1200px){.hero__content--center[_ngcontent-%COMP%]{margin-top:0;margin-right:12rem;margin-bottom:0;margin-left:12rem}}.hero__title[_ngcontent-%COMP%]{color:#ffb800}.hero__subtitle[_ngcontent-%COMP%]{color:#f8f9fa}.hero__cta[_ngcontent-%COMP%]{display:flex;gap:.25rem .25rem}@media (min-width: 576px){.hero__cta[_ngcontent-%COMP%]{gap:.5rem .5rem}}@media (min-width: 768px){.hero__cta[_ngcontent-%COMP%]{gap:.5rem .5rem}}@media (min-width: 992px){.hero__cta[_ngcontent-%COMP%]{gap:.75rem .75rem}}@media (min-width: 1200px){.hero__cta[_ngcontent-%COMP%]{gap:1rem 1rem}}.hero__image[_ngcontent-%COMP%]{width:100%}"],changeDetection:0})}}return e})();var G=(()=>{class e{constructor(){this.info=r.required()}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=g({type:e,selectors:[["pgm-info-card"]],inputs:{info:[1,"info"]},decls:6,vars:3,consts:[[1,"info__card"],[1,"material-icons"],[3,"innerHTML"]],template:function(o,n){o&1&&(c(0,"div",0)(1,"span",1),M(2),m(),c(3,"h3"),M(4),m(),_(5,"p",2),m()),o&2&&(i(2),w(n.info().icon),i(2),w(n.info().title),i(),a("innerHTML",n.info().description,p))},styles:[".info__card[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;background:#fff;border-radius:.375rem;box-shadow:0 2px 4px #00000026;gap:.25rem .25rem;padding:.5rem}@media (min-width: 576px){.info__card[_ngcontent-%COMP%]{gap:.5rem .5rem}}@media (min-width: 768px){.info__card[_ngcontent-%COMP%]{gap:.5rem .5rem}}@media (min-width: 992px){.info__card[_ngcontent-%COMP%]{gap:.75rem .75rem}}@media (min-width: 1200px){.info__card[_ngcontent-%COMP%]{gap:1rem 1rem}}@media (min-width: 576px){.info__card[_ngcontent-%COMP%]{padding:1rem}}@media (min-width: 768px){.info__card[_ngcontent-%COMP%]{padding:1rem}}@media (min-width: 992px){.info__card[_ngcontent-%COMP%]{padding:1.5rem}}@media (min-width: 1200px){.info__card[_ngcontent-%COMP%]{padding:2rem}}.info__card[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:2.5rem;color:#749483}.info__card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#212529}.info__card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#6c757d}"],changeDetection:0})}}return e})();export{G as a,q as b};
