import{a as b}from"./chunk-DCB7I6NO.js";import{a as R,b as A}from"./chunk-H3GC3JRE.js";import{a as f}from"./chunk-XKJDJV4T.js";import{a as k,c as h,d as T}from"./chunk-7EZIG4UW.js";import"./chunk-MDI37FVZ.js";import{g as E}from"./chunk-LJV3XJ23.js";import{m as D}from"./chunk-FL6EUVX6.js";import{Bb as d,Kb as c,Lb as S,Pa as y,Qb as w,Ta as a,ab as m,da as v,nb as p,ob as P,rb as M,sb as x,tb as O,ua as l,ub as n,vb as i,wa as _,wb as r}from"./chunk-3NCDLDE5.js";var F=(()=>{class e{constructor(){this.postContent=l.required()}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=m({type:e,selectors:[["pgm-post-content"]],inputs:{postContent:[1,"postContent"]},decls:1,vars:1,consts:[[1,"post-content",3,"innerHTML"]],template:function(t,o){t&1&&r(0,"span",0),t&2&&p("innerHTML",o.postContent(),y)},styles:[`:host{grid-area:content}
`],encapsulation:2,changeDetection:0})}}return e})();var j=(()=>{class e{constructor(){this.showReactions=!1}react(s){console.log(`User reacted with ${s}`),this.showReactions=!1}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=m({type:e,selectors:[["pgm-post-reaction"]],decls:14,vars:2,consts:[[1,"reaction-container",3,"mouseenter","mouseleave"],[1,"reaction-button"],[1,"reaction-icons"],[1,"reaction-icon",3,"click"]],template:function(t,o){t&1&&(n(0,"div",0),d("mouseenter",function(){return o.showReactions=!0})("mouseleave",function(){return o.showReactions=!1}),n(1,"button",1),c(2,"\u{1F44D}"),i(),n(3,"div",2)(4,"button",3),d("click",function(){return o.react("trophy")}),c(5," \u{1F3C6} "),i(),n(6,"button",3),d("click",function(){return o.react("heart")}),c(7," \u2764\uFE0F "),i(),n(8,"button",3),d("click",function(){return o.react("laugh")}),c(9," \u{1F604} "),i(),n(10,"button",3),d("click",function(){return o.react("sad")}),c(11," \u{1F622} "),i(),n(12,"button",3),d("click",function(){return o.react("angry")}),c(13," \u{1F620} "),i()()()),t&2&&(a(3),P("show",o.showReactions))},styles:[".reaction-container[_ngcontent-%COMP%]{position:relative;display:inline-block}.reaction-button[_ngcontent-%COMP%]{width:40px;height:40px;font-size:18px;cursor:pointer;background-color:#fff;border:none;border-radius:50%;box-shadow:0 2px 4px #00000026;transition:transform .3s ease-in-out}.reaction-button[_ngcontent-%COMP%]:hover{background-color:#749483;transform:scale(1.1)}.reaction-icons[_ngcontent-%COMP%]{position:absolute;bottom:0;left:calc(100% + 10px);display:flex;visibility:hidden;flex-direction:row;gap:1rem;opacity:0;transform:translate(-20px);transition:all .3s ease-in-out}@media (min-width: 768px){.reaction-icons[_ngcontent-%COMP%]{right:calc(100% + 10px);left:auto;flex-direction:row-reverse;transform-origin:left}}.reaction-icons.show[_ngcontent-%COMP%]{visibility:visible;opacity:1;transform:translate(0)}.reaction-icons[_ngcontent-%COMP%]   .reaction-icon[_ngcontent-%COMP%]{width:40px;height:40px;font-size:18px;cursor:pointer;background-color:#fff;border:none;border-radius:50%;box-shadow:0 2px 4px #00000026}.reaction-icons[_ngcontent-%COMP%]   .reaction-icon[_ngcontent-%COMP%]:hover{background-color:#749483;transform:scale(1.1);transition:transform .3s ease-in-out}"],changeDetection:0})}}return e})();var z=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=m({type:e,selectors:[["pgm-post-footer"]],decls:8,vars:0,consts:[[1,"post-footer"],[1,"post-footer__comment-controls"],["iconLeft","add","variant","icon"],["iconLeft","alternate_email","text","Mencionar","variant","link"],["iconLeft","format_quote","text","Citar","variant","link"],[1,"post-footer__reaction"]],template:function(t,o){t&1&&(r(0,"hr"),n(1,"div",0)(2,"div",1),r(3,"pgm-button",2)(4,"pgm-button",3)(5,"pgm-button",4),i(),n(6,"div",5),r(7,"pgm-post-reaction"),i()())},dependencies:[f,j],styles:["[_nghost-%COMP%]{grid-area:footer}.post-footer[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;justify-content:center}@media (min-width: 768px){.post-footer[_ngcontent-%COMP%]{flex-direction:row;align-items:center;justify-content:space-between}}.post-footer__reaction[_ngcontent-%COMP%]{display:flex}.post-footer__comment-controls[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:1rem;align-items:center}"],changeDetection:0})}}return e})();var q=(()=>{class e{constructor(){this.post=l.required()}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=m({type:e,selectors:[["pgm-post-header"]],inputs:{post:[1,"post"]},decls:7,vars:1,consts:[[1,"post-header"],[1,"post-header__date"],["prefix","Postado","format","fullDate",3,"date"],[1,"post-header__actions"],["iconLeft","report","variant","link","text","Denunciar"],["iconLeft","share","variant","link","text","Compartilhar"]],template:function(t,o){t&1&&(n(0,"div",0)(1,"div",1),r(2,"pgm-user-date",2),i(),n(3,"div",3),r(4,"pgm-button",4)(5,"pgm-button",5),i()(),r(6,"hr")),t&2&&(a(2),p("date",o.post().date))},dependencies:[h,f],styles:["[_nghost-%COMP%]{display:none;grid-area:header}@media (min-width: 768px){[_nghost-%COMP%]{display:unset}}.post-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.post-header__date[_ngcontent-%COMP%]{display:flex;align-items:center;color:#6c757d}.post-header__actions[_ngcontent-%COMP%]{display:flex;gap:1rem}"],changeDetection:0})}}return e})();var J=(e,C)=>({online:e,offline:C}),G=(()=>{class e{constructor(){this.post=l.required()}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=m({type:e,selectors:[["pgm-post-sidebar"]],inputs:{post:[1,"post"]},decls:13,vars:10,consts:[[1,"post-sidebar"],["alt","Avatar","src","https://picsum.photos/40/40",1,"post-sidebar__avatar",3,"height","width"],[1,"post-sidebar__user"],[1,"post-sidebar__user-name"],[1,"post-sidebar__status",3,"ngClass"],["size","md",3,"name"],["prefix","Postado","format","fullDate",1,"post-sidebar__post-date",3,"date"],[1,"post-sidebar__user-type"],[1,"post-sidebar__user-member-since"],["format","shortDate",3,"date"]],template:function(t,o){t&1&&(n(0,"aside",0),r(1,"pgm-user-avatar",1),n(2,"div",2)(3,"div",3),r(4,"div",4)(5,"pgm-user-name",5),i(),r(6,"pgm-user-date",6),i(),n(7,"h3",7),c(8),i(),n(9,"div",8)(10,"span"),c(11,"Membro desde:"),i(),r(12,"pgm-user-date",9),i()()),t&2&&(a(),p("height",40)("width",40),a(3),p("ngClass",w(7,J,o.post().author.status==="online",o.post().author.status==="offline")),a(),p("name",o.post().author.name),a(),p("date",o.post().date),a(2),S(o.post().author.role),a(4),p("date",o.post().author.memberSince))},dependencies:[R,T,h,D],styles:['[_nghost-%COMP%]{grid-area:sidebar}.post-sidebar[_ngcontent-%COMP%]{display:grid;grid-template-areas:"avatar user-name" "avatar creation-date";gap:1rem}@media (min-width: 768px){.post-sidebar[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;align-items:center;text-align:center}}.post-sidebar__avatar[_ngcontent-%COMP%]{grid-area:avatar}.post-sidebar__user[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem;justify-content:center}@media (min-width: 768px){.post-sidebar__user[_ngcontent-%COMP%]{align-items:center}}.post-sidebar__user-name[_ngcontent-%COMP%]{display:flex;grid-area:user-name;gap:.5rem;align-items:center}.post-sidebar__post-date[_ngcontent-%COMP%]{display:flex;grid-area:creation-date}@media (min-width: 768px){.post-sidebar__post-date[_ngcontent-%COMP%]{display:none}}.post-sidebar__user-member-since[_ngcontent-%COMP%]{display:none}@media (min-width: 768px){.post-sidebar__user-member-since[_ngcontent-%COMP%]{display:unset}}.post-sidebar__user-type[_ngcontent-%COMP%]{display:none;font-size:1rem}@media (min-width: 768px){.post-sidebar__user-type[_ngcontent-%COMP%]{font-size:1.2rem}}@media (min-width: 1200px){.post-sidebar__user-type[_ngcontent-%COMP%]{font-size:1.4rem}}@media (min-width: 768px){.post-sidebar__user-type[_ngcontent-%COMP%]{display:unset}}.post-sidebar__status[_ngcontent-%COMP%]{display:flex;width:1rem;height:1rem;background-color:#ccc;border-radius:50%}.post-sidebar__status.online[_ngcontent-%COMP%]{background-color:#28a745}.post-sidebar__status.offline[_ngcontent-%COMP%]{background-color:#6c757d}'],changeDetection:0})}}return e})();var L=(()=>{class e{constructor(){this.post=l.required()}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=m({type:e,selectors:[["pgm-post"]],inputs:{post:[1,"post"]},decls:5,vars:3,consts:[[1,"post"],[3,"post"],[3,"postContent"]],template:function(t,o){t&1&&(n(0,"article",0),r(1,"pgm-post-sidebar",1)(2,"pgm-post-content",2)(3,"pgm-post-header",1)(4,"pgm-post-footer"),i()),t&2&&(a(),p("post",o.post()),a(),p("postContent",o.post().content),a(),p("post",o.post()))},dependencies:[G,F,q,z],styles:['.post[_ngcontent-%COMP%]{display:grid;grid-template:"sidebar" "content" "footer";min-height:350px}@media (min-width: 768px){.post[_ngcontent-%COMP%]{grid-template:"sidebar header" 1fr "sidebar content" 5fr "sidebar footer" 1fr/1fr 6fr}}']})}}return e})();function U(e,C){if(e&1&&(n(0,"pgm-forum-card"),r(1,"pgm-post",7),i()),e&2){let s=C.$implicit;a(),p("post",s)}}var we=(()=>{class e{constructor(){this.forumTitle=_(""),this.posts=[{author:{avatar:"https://picsum.photos/40/40",isPostCreator:!0,memberSince:"2025-03-01 11:43",name:"Jo\xE3o Silva",posts:15,role:"Membro J\xFAnior",status:"online"},content:"<p>A Galleria mellonella tem sido amplamente utilizada em estudos sobre resist\xEAncia bacteriana. Algu\xE9m j\xE1 realizou experimentos com antibi\xF3ticos utilizando esse modelo?</p>",date:"2025-03-01 11:43"},{author:{avatar:"https://picsum.photos/40/41",isPostCreator:!1,memberSince:"2024-12-15 09:30",name:"Maria Souza",posts:45,role:"Pesquisadora S\xEAnior",status:"offline"},content:"<p>Recentemente, utilizamos Galleria mellonella para avaliar a toxicidade de novos compostos qu\xEDmicos. Os resultados foram surpreendentes e muito promissores!</p>",date:"2025-03-05 15:20"},{author:{avatar:"https://picsum.photos/40/42",isPostCreator:!1,memberSince:"2025-02-10 14:00",name:"Carlos Alberto",posts:8,role:"Estudante de Biologia",status:"online"},content:"<p>Estou iniciando um projeto sobre o ciclo de vida da Galleria mellonella em ambientes urbanos. Alguma recomenda\xE7\xE3o de literatura para come\xE7ar?</p>",date:"2025-03-10 10:45"},{author:{avatar:"https://picsum.photos/40/43",isPostCreator:!1,memberSince:"2023-08-20 16:30",name:"Ana Paula",posts:120,role:"Especialista em Microbiologia",status:"online"},content:"<p>A Galleria mellonella \xE9 um excelente modelo para estudos imunol\xF3gicos. Algu\xE9m aqui j\xE1 testou a resposta imune contra diferentes pat\xF3genos?</p>",date:"2025-03-12 09:15"},{author:{avatar:"https://picsum.photos/40/44",isPostCreator:!1,memberSince:"2025-01-05 12:00",name:"Fernanda Lima",posts:3,role:"Membro J\xFAnior",status:"offline"},content:"<p>Estou curiosa sobre como a Galleria mellonella interage com outros insetos em ambientes naturais. Algu\xE9m j\xE1 observou intera\xE7\xF5es espec\xEDficas?</p>",date:"2025-03-15 14:30"},{author:{avatar:"https://picsum.photos/40/45",isPostCreator:!1,memberSince:"2024-05-10 08:00",name:"Ricardo Oliveira",posts:25,role:"Pesquisador de Ecologia",status:"online"},content:"<p>A adapta\xE7\xE3o da Galleria mellonella em ambientes polu\xEDdos \xE9 fascinante. J\xE1 publiquei um artigo sobre isso, se algu\xE9m quiser trocar ideias!</p>",date:"2025-03-18 11:00"},{author:{avatar:"https://picsum.photos/40/46",isPostCreator:!1,memberSince:"2023-02-01 10:00",name:"Jo\xE3o Silva",posts:150,role:"Professor Universit\xE1rio",status:"online"},content:"<p>Algu\xE9m j\xE1 utilizou Galleria mellonella para estudar resist\xEAncia a fungos? Estou pensando em iniciar um projeto nessa \xE1rea.</p>",date:"2025-03-19 09:45"},{author:{avatar:"https://picsum.photos/40/41",isPostCreator:!1,memberSince:"2024-12-15 09:30",name:"Maria Souza",posts:45,role:"Pesquisadora S\xEAnior",status:"offline"},content:"<p>A Galleria mellonella \xE9 um modelo fascinante para estudos sobre resist\xEAncia bacteriana. Recentemente, publiquei um artigo sobre isso!</p>",date:"2025-03-05 15:20"},{author:{avatar:"https://picsum.photos/40/42",isPostCreator:!1,memberSince:"2025-02-10 14:00",name:"Carlos Alberto",posts:8,role:"Estudante de Biologia",status:"online"},content:"<p>Estou iniciando um projeto sobre o ciclo de vida da Galleria mellonella em ambientes urbanos. Alguma recomenda\xE7\xE3o de literatura?</p>",date:"2025-03-10 10:45"},{author:{avatar:"https://picsum.photos/40/43",isPostCreator:!1,memberSince:"2023-08-20 16:30",name:"Ana Paula",posts:120,role:"Especialista em Microbiologia",status:"online"},content:"<p>A Galleria mellonella tem respostas imunol\xF3gicas muito interessantes. Recentemente, testei diferentes pat\xF3genos e observei resultados \xFAnicos!</p>",date:"2025-03-12 09:15"},{author:{avatar:"https://picsum.photos/40/44",isPostCreator:!1,memberSince:"2025-01-05 12:00",name:"Fernanda Lima",posts:3,role:"Membro J\xFAnior",status:"offline"},content:"<p>Algu\xE9m j\xE1 observou como a Galleria mellonella interage com outros insetos em ambientes naturais? Estou curiosa para entender essas rela\xE7\xF5es.</p>",date:"2025-03-15 14:30"}],this.topicOwner=_({avatar:"https://picsum.photos/40/40",date:"2025-03-01 11:43",name:"Jo\xE3o Silva"}),this.topicTitle=_(""),this.route=v(E),this.route.params.subscribe(s=>{let t=s.topicslug,o=s.forumslug;this.topicTitle.set(b(t)),this.forumTitle.set(b(o))})}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=m({type:e,selectors:[["pgm-community-topic"]],decls:9,vars:9,consts:[[1,"topic"],[3,"title","isStickyTitle"],[1,"topic__info"],["dateFormat","fullDate",3,"author","avatar","date","forumTitle","showPrefix"],[1,"topic__actions"],["iconLeft","share","text","Compartilhar","variant","link",3,"block"],["iconLeft","edit","text","Responder","variant","primary",3,"block"],[3,"post"]],template:function(t,o){t&1&&(n(0,"div",0)(1,"pgm-forum-card",1)(2,"div",2),r(3,"pgm-user-info",3),n(4,"div",4),r(5,"pgm-button",5)(6,"pgm-button",6),i()()(),x(7,U,2,1,"pgm-forum-card",null,M),i()),t&2&&(a(),p("title",o.topicTitle())("isStickyTitle",!1),a(2),p("author",o.topicOwner().name)("avatar",o.topicOwner().avatar)("date",o.topicOwner().date)("forumTitle",o.forumTitle())("showPrefix",!0),a(2),p("block",!0),a(),p("block",!0),a(),O(o.posts))},dependencies:[k,L,A,f],styles:[".topic[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}@media (min-width: 992px){.topic[_ngcontent-%COMP%]{gap:2rem}}@media (min-width: 1200px){.topic[_ngcontent-%COMP%]{gap:2.5rem}}.topic__info[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.topic__actions[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2.5rem;justify-content:center;color:#6c757d}@media (min-width: 768px){.topic__actions[_ngcontent-%COMP%]{flex-direction:row;align-items:center}}"],changeDetection:0})}}return e})();export{we as CommunityTopicComponent};
