import{p as q}from"./chunk-KG2CF7P2.js";import{a as E}from"./chunk-DE5YU4P7.js";import{i as F,j as A}from"./chunk-DWR4Z56V.js";import{n as k,o as l}from"./chunk-ALWD4M5K.js";import{Cb as h,Db as u,Lb as m,Mb as a,Nb as x,Qb as v,Sb as T,Ta as r,Ub as D,ab as c,ca as L,fb as b,ia as P,ja as y,nb as f,qb as S,sb as _,ta as O,tb as g,ub as C,vb as n,wb as o,xb as d,yb as w}from"./chunk-62T5DOLL.js";var $=e=>["forum",e],R=e=>["perfil",e];function V(e,p){if(e&1&&(n(0,"div",7)(1,"div",8)(2,"a",9)(3,"h3"),m(4),o()()(),n(5,"div",10)(6,"p"),m(7),o()(),n(8,"div",11)(9,"div"),d(10,"img",12),o(),n(11,"div",13)(12,"p"),m(13),o(),n(14,"p"),m(15,"Por "),n(16,"a",9),m(17),o(),m(18),T(19,"date"),o()()()()),e&2){let t=p.$implicit;r(2),f("routerLink",v(10,$,t.name)),r(2),a(t.name),r(3),x("",t.topics," t\xF3picos"),r(6),a(t.topicTitle),r(3),f("routerLink",v(12,R,t.topicAuthor)),r(),a(t.topicAuthor),r(),x(", ",D(19,7,t.topicDate,"shortDate")," ")}}function z(e,p){if(e&1&&(n(0,"div",6),g(1,V,20,14,"div",7,_),o()),e&2){let t=u().$implicit;r(),C(t.forums)}}function H(e,p){if(e&1){let t=w();n(0,"div",3)(1,"div",4),h("click",function(){let s=P(t).$implicit,M=u();return y(M.toggleSector(s.sector))}),n(2,"h2"),m(3),o(),n(4,"span",5),m(5),o()(),b(6,z,3,0,"div",6),o()}if(e&2){let t=p.$implicit,i=u();r(3),a(t.sector),r(2),a(i.isSectorActive(t.sector)?"remove":"add"),r(),S(i.isSectorActive(t.sector)?6:-1)}}var j=(()=>{class e{constructor(){this.router=L(F),this.forumData=[{sector:"Lorem ipsum dolor sit",forums:[{name:"Lorem ipsum sit amet",description:"Lorem ipsum dolor sit amet.",topics:150,topicTitle:"Lorem ipsum dolor sit amet",topicAuthor:"Jo\xE3o Silva",topicDate:"2024-07-01"},{name:"Lorem ipsum amet dolor",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",topics:200,topicTitle:"Lorem ipsum dolor sit amet",topicAuthor:"Maria Souza",topicDate:"2024-07-02"}]},{sector:"Lorem ipsum amet dolor",forums:[{name:"Lorem ipsum dolor sit",description:"Lorem ipsum dolor sit amet, consectetur.",topics:100,topicTitle:"Lorem ipsum dolor sit amet",topicAuthor:"Carlos Alberto",topicDate:"2024-07-03"},{name:"Lorem ipsum sit amet",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",topics:120,topicTitle:"Lorem ipsum dolor sit amet",topicAuthor:"Ana Paula",topicDate:"2024-07-04"}]},{sector:"Lorem ipsum sit amet",forums:[{name:"Lorem ipsum amet dolor",description:"Lorem ipsum dolor sit amet.",topics:80,topicTitle:"Lorem ipsum dolor sit amet",topicAuthor:"Ricardo Oliveira",topicDate:"2024-07-05"},{name:"Lorem ipsum dolor sit",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",topics:90,topicTitle:"Lorem ipsum dolor sit amet",topicAuthor:"Fernanda Costa",topicDate:"2024-07-06"}]},{sector:"Lorem ipsum consectetur",forums:[{name:"Lorem ipsum sit amet",description:"Lorem ipsum dolor sit, amet consectetur.",topics:100,topicTitle:"Lorem ipsum dolor sit amet",topicAuthor:"Admin",topicDate:"2024-07-07"}]},{sector:"Lorem ipsum adipiscing",forums:[{name:"Lorem ipsum amet dolor",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",topics:150,topicTitle:"Lorem ipsum dolor sit amet",topicAuthor:"Jo\xE3o Silva",topicDate:"2024-07-01"},{name:"Lorem ipsum sit amet",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",topics:200,topicTitle:"Lorem ipsum dolor sit amet",topicAuthor:"Maria Souza",topicDate:"2024-07-02"}]}],this.activeSectors=this.forumData.map(t=>t.sector)}onCreateTopicClicked(){this.router.navigate(["comunidade","forum","nome-do-forum","topico","novo"])}toggleSector(t){this.activeSectors.includes(t)?this.activeSectors=this.activeSectors.filter(i=>i!==t):this.activeSectors=[...this.activeSectors,t]}isSectorActive(t){return this.activeSectors.includes(t)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["pgm-forum-list"]],decls:5,vars:0,consts:[[1,"forum-list"],[1,"forum-list__buttons"],["variant","primary","loadingText","Carregando...","text","Criar t\xF3pico",3,"clicked"],[1,"forum-list__sector"],[1,"forum-list__sector-header",3,"click"],[1,"material-icons"],[1,"forum-list__forums"],[1,"forum-list__forum"],[1,"forum-list__title"],[3,"routerLink"],[1,"forum-list__posts"],[1,"forum-list__last-topic"],["src","https://picsum.photos/40/40","alt","Logo","loading","eager"],[1,"forum-list__author"]],template:function(i,s){i&1&&(n(0,"div",0)(1,"div",1)(2,"pgm-button",2),h("clicked",function(){return s.onCreateTopicClicked()}),o()(),g(3,H,7,3,"div",3,_),o()),i&2&&(r(3),C(s.forumData))},dependencies:[l,k,E,A],styles:['.forum-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2rem;color:#6c757d;background-color:#fff;border-radius:1rem;box-shadow:0 2px 4px #00000026;padding:3rem}@media (min-width: 768px){.forum-list[_ngcontent-%COMP%]{padding:4.5rem}}@media (min-width: 1200px){.forum-list[_ngcontent-%COMP%]{padding:6rem}}.forum-list__buttons[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.forum-list__sector[_ngcontent-%COMP%]{border-radius:1rem;overflow:hidden;box-shadow:0 2px 4px #00000026;transition:box-shadow .3s ease;background-color:#fff}.forum-list__sector[_ngcontent-%COMP%]:hover{box-shadow:0 4px 8px #0003}.forum-list__sector-header[_ngcontent-%COMP%]{background-color:#749483;color:#fff;cursor:pointer;display:flex;justify-content:space-between;align-items:center;font-weight:700;transition:background-color .3s ease;padding:3rem}@media (min-width: 768px){.forum-list__sector-header[_ngcontent-%COMP%]{padding:4.5rem}}@media (min-width: 1200px){.forum-list__sector-header[_ngcontent-%COMP%]{padding:6rem}}.forum-list__sector-header[_ngcontent-%COMP%]:hover{background-color:#5d786a}.forum-list__sector-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#fff}.forum-list__forum[_ngcontent-%COMP%]{display:grid;grid-template:"title last-topic" "posts last-topic";border-bottom:1px solid #e9ecef;transition:background-color .3s ease;padding:3rem}@media (min-width: 768px){.forum-list__forum[_ngcontent-%COMP%]{padding:4.5rem}}@media (min-width: 1200px){.forum-list__forum[_ngcontent-%COMP%]{padding:6rem}}@media (min-width: 576px){.forum-list__forum[_ngcontent-%COMP%]{grid-template:"title posts last-topic"/1fr 1fr 1fr}}.forum-list__forum[_ngcontent-%COMP%]:last-child{border-bottom:none}.forum-list__forum[_ngcontent-%COMP%]:hover{background-color:#f8f9fa}.forum-list__forum[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#749483}.forum-list__title[_ngcontent-%COMP%]{grid-area:title}.forum-list__posts[_ngcontent-%COMP%]{grid-area:posts;display:flex;flex-direction:column}@media (min-width: 576px){.forum-list__posts[_ngcontent-%COMP%]{text-align:center}}.forum-list__last-topic[_ngcontent-%COMP%]{grid-area:last-topic;display:flex;align-items:center;justify-content:flex-end;gap:2rem}.forum-list__last-topic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%}@media (min-width: 576px){.forum-list__last-topic[_ngcontent-%COMP%]{justify-content:flex-start}}.forum-list__author[_ngcontent-%COMP%]{display:none}@media (min-width: 576px){.forum-list__author[_ngcontent-%COMP%]{display:block}}']})}}return e})();var B=(()=>{class e{constructor(){this.title=O("")}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["pgm-page-title"]],inputs:{title:[1,"title"]},decls:3,vars:1,consts:[[1,"page-title-card"],[1,"page-title"]],template:function(i,s){i&1&&(n(0,"div",0)(1,"h1",1),m(2),o()()),i&2&&(r(2),a(s.title()))},dependencies:[l],styles:[".page-title-card[_ngcontent-%COMP%]{background-color:#fff;border-radius:1rem;box-shadow:0 2px 4px #00000026;padding:3rem}@media (min-width: 768px){.page-title-card[_ngcontent-%COMP%]{padding:4.5rem}}@media (min-width: 1200px){.page-title-card[_ngcontent-%COMP%]{padding:6rem}}.page-title-card[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]{color:#749483;font-weight:700}"]})}}return e})();var rt=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-community-home"]],decls:3,vars:0,consts:[[1,"community-home__container"],["title","Comunidade Galleria Mellonella"]],template:function(i,s){i&1&&(n(0,"div",0),d(1,"pgm-page-title",1)(2,"pgm-forum-list"),o())},dependencies:[l,q,j,B],styles:[".community-home__container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2rem}"]})}}return e})();export{rt as CommunityHomeComponent};
