import{a as L}from"./chunk-7YNBHYMH.js";import{a as P}from"./chunk-DCB7I6NO.js";import{b as O}from"./chunk-H3GC3JRE.js";import{a as S}from"./chunk-PNTXEDJT.js";import{a as x,e as y}from"./chunk-7EZIG4UW.js";import"./chunk-MDI37FVZ.js";import{g as C,i as D,j as M}from"./chunk-LJV3XJ23.js";import"./chunk-FL6EUVX6.js";import{Bb as _,Kb as u,Lb as T,Mb as g,Qb as w,Ta as a,ab as l,da as d,nb as s,rb as h,sb as f,tb as A,ua as v,ub as n,vb as r,wa as c,wb as m}from"./chunk-3NCDLDE5.js";var I=(t,p)=>["/comunidade","forum",t,"topico",p],G=(()=>{class t{constructor(){this.sectionItem=v.required()}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=l({type:t,selectors:[["pgm-topic-info"]],inputs:{sectionItem:[1,"sectionItem"]},decls:14,vars:14,consts:[[1,"topic-info"],[1,"topic-info__title"],[3,"routerLink"],[3,"name","showPrefix","date","isHorizontal"],[1,"topic-info__stats"],[1,"topic-info__answers"],[1,"topic-info__views"],[1,"topic-info__last-topic"],[3,"author","avatar","date"]],template:function(e,o){e&1&&(n(0,"div",0)(1,"div",1)(2,"a",2)(3,"h3"),u(4),r()(),n(5,"div"),m(6,"pgm-user-details",3),r()(),n(7,"div",4)(8,"p",5),u(9),r(),n(10,"p",6),u(11),r()(),n(12,"div",7),m(13,"pgm-user-info",8),r()()),e&2&&(a(2),s("routerLink",w(11,I,o.sectionItem().forumName.toLowerCase().split(" ").join("-"),o.sectionItem().name.toLowerCase().split(" ").join("-"))),a(2),T(o.sectionItem().name),a(2),s("name",o.sectionItem().topicAuthor)("showPrefix",!0)("date",o.sectionItem().topicDate)("isHorizontal",!0),a(3),g("",o.sectionItem().answers," respostas"),a(2),g("",o.sectionItem().views," visualiza\xE7\xF5es"),a(2),s("author",o.sectionItem().lastTopicAuthor)("avatar",o.sectionItem().lastTopicAuthorAvatar)("date",o.sectionItem().lastTopicDate))},dependencies:[M,O,y],styles:['.topic-info[_ngcontent-%COMP%]{display:grid;grid-template:"title last-topic" "stats last-topic";gap:1rem;max-width:100%;overflow-x:auto;border-bottom:1px solid #dee2e6;transition:background-color .3s ease;padding:1rem}@media (min-width: 768px){.topic-info[_ngcontent-%COMP%]{padding:1.5rem}}@media (min-width: 1200px){.topic-info[_ngcontent-%COMP%]{padding:2rem}}@media (min-width: 768px){.topic-info[_ngcontent-%COMP%]{grid-template:"title stats last-topic"/1fr 1fr 1fr;gap:2rem}}@media (min-width: 1200px){.topic-info[_ngcontent-%COMP%]{grid-template:"title stats last-topic"/2fr 1fr 1fr;gap:2.5rem}}.topic-info[_ngcontent-%COMP%]:hover{background-color:#f8f9fa}.topic-info__title[_ngcontent-%COMP%]{display:flex;flex-direction:column;grid-area:title;justify-content:center}.topic-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#749483;font-size:1.6rem}@media (min-width: 768px){.topic-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.92rem}}@media (min-width: 1200px){.topic-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:2.24rem}}.topic-info__stats[_ngcontent-%COMP%]{display:flex;grid-area:stats;gap:1rem}@media (min-width: 576px){.topic-info__stats[_ngcontent-%COMP%]{flex-direction:column;gap:unset;justify-content:center;text-align:right}}.topic-info__answers[_ngcontent-%COMP%]{font-size:small;color:#6c757d}@media (min-width: 768px){.topic-info__answers[_ngcontent-%COMP%]{color:#343a40;font-size:1.2rem;line-height:2.2rem}}@media (min-width: 768px) and (min-width: 768px){.topic-info__answers[_ngcontent-%COMP%]{font-size:1.44rem;line-height:2.44rem}}@media (min-width: 768px) and (min-width: 1200px){.topic-info__answers[_ngcontent-%COMP%]{font-size:2.016rem;line-height:3.016rem}}.topic-info__views[_ngcontent-%COMP%]{font-size:small;color:#6c757d}@media (min-width: 768px){.topic-info__views[_ngcontent-%COMP%]{font-size:1rem;line-height:2rem}}@media (min-width: 768px) and (min-width: 768px){.topic-info__views[_ngcontent-%COMP%]{font-size:1.2rem;line-height:2.2rem}}@media (min-width: 768px) and (min-width: 1200px){.topic-info__views[_ngcontent-%COMP%]{font-size:1.68rem;line-height:2.68rem}}.topic-info__last-topic[_ngcontent-%COMP%]{display:flex;grid-area:last-topic;gap:1rem;align-items:center;justify-content:flex-end}@media (min-width: 768px){.topic-info__last-topic[_ngcontent-%COMP%]{justify-content:flex-start}}'],changeDetection:0})}}return t})();function z(t,p){if(t&1&&m(0,"pgm-topic-info",2),t&2){let i=p.$implicit;s("sectionItem",i)}}function F(t,p){if(t&1&&(n(0,"pgm-forum-section",1),f(1,z,1,1,"pgm-topic-info",2,h),r()),t&2){let i=p.$implicit;s("forumSection",i),a(),A(i.items)}}var N=(()=>{class t{constructor(){this.topicSections=c([{items:[{answers:78,forumName:"Lorem ipsum dolor sit amet",lastTopicAuthor:"Maria Souza",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-15 09:30",name:"Comportamento da Galleria mellonella",topicAuthor:"Jo\xE3o Silva",topicDate:"2025-03-01 11:43",views:342},{answers:156,forumName:"Lorem ipsum dolor sit amet",lastTopicAuthor:"Carlos Alberto",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-18 14:20",name:"Impacto ambiental da Galleria mellonella",topicAuthor:"Maria Souza",topicDate:"2025-03-05 09:15",views:489},{answers:92,forumName:"Lorem ipsum dolor sit amet",lastTopicAuthor:"Ana Paula",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-10 11:45",name:"Galleria mellonella na agricultura",topicAuthor:"Carlos Alberto",topicDate:"2025-02-28 14:30",views:278},{answers:105,forumName:"Lorem ipsum dolor sit amet",lastTopicAuthor:"Fernanda Costa",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-05 16:30",name:"Ciclo de vida da Galleria mellonella",topicAuthor:"Ana Paula",topicDate:"2025-01-15 08:45",views:412},{answers:67,forumName:"Lorem ipsum dolor sit amet",lastTopicAuthor:"Jo\xE3o Silva",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-12 10:15",name:"Predadores naturais da Galleria mellonella",topicAuthor:"Fernanda Costa",topicDate:"2025-02-10 16:00",views:201},{answers:88,forumName:"Lorem ipsum dolor sit amet",lastTopicAuthor:"Helena Martins",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-19 08:45",name:"Controle biol\xF3gico com Galleria mellonella",topicAuthor:"Admin",topicDate:"2025-03-08 10:30",views:325},{answers:132,forumName:"Lorem ipsum dolor sit amet",lastTopicAuthor:"Ricardo Oliveira",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-18 17:20",name:"Adapta\xE7\xE3o urbana da Galleria mellonella",topicAuthor:"Jo\xE3o Silva",topicDate:"2025-03-10 12:00",views:456},{answers:73,forumName:"Lorem ipsum dolor sit amet",lastTopicAuthor:"Maria Souza",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-19 09:10",name:"Rela\xE7\xE3o entre polinizadores e Galleria mellonella",topicAuthor:"Helena Martins",topicDate:"2025-03-12 15:00",views:287},{answers:98,forumName:"Lorem ipsum dolor sit amet",lastTopicAuthor:"Ana Paula",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-19 11:30",name:"Impacto econ\xF4mico causado pela Galleria mellonella",topicAuthor:"Carlos Alberto",topicDate:"2025-03-14 10:00",views:378},{answers:86,forumName:"Lorem ipsum dolor sit amet",lastTopicAuthor:"Fernanda Costa",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-15 14:45",name:"Uso cient\xEDfico da Galleria mellonella como modelo experimental",topicAuthor:"Ricardo Oliveira",topicDate:"2025-01-20 17:30",views:312},{answers:115,forumName:"Lorem ipsum dolor sit amet",lastTopicAuthor:"Carlos Alberto",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-17 16:20",name:"Galleria mellonella e resist\xEAncia a antibi\xF3ticos",topicAuthor:"Fernanda Costa",topicDate:"2025-02-18 14:15",views:423},{answers:128,forumName:"Lorem ipsum dolor sit amet",lastTopicAuthor:"Jo\xE3o Silva",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-16 13:40",name:"Galleria mellonella em ambientes naturais",topicAuthor:"Ana Paula",topicDate:"2025-02-22 11:00",views:467},{answers:142,forumName:"Lorem ipsum dolor sit amet",lastTopicAuthor:"Helena Martins",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-18 10:55",name:"Galleria mellonella na ind\xFAstria aliment\xEDcia",topicAuthor:"Carlos Alberto",topicDate:"2025-03-04 16:30",views:512},{answers:108,forumName:"Lorem ipsum dolor sit amet",lastTopicAuthor:"Ricardo Oliveira",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-19 09:30",name:"Galleria mellonella em sistemas de controle biol\xF3gico",topicAuthor:"Admin",topicDate:"2025-03-09 10:45",views:389},{answers:165,forumName:"Lorem ipsum dolor sit amet",lastTopicAuthor:"Maria Souza",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-19 11:15",name:"Galleria mellonella e biodiversidade",topicAuthor:"Helena Martins",topicDate:"2025-03-11 14:00",views:578},{answers:137,forumName:"Lorem ipsum dolor sit amet",lastTopicAuthor:"Ana Paula",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-18 15:40",name:"Galleria mellonella em ambientes urbanos",topicAuthor:"Jo\xE3o Silva",topicDate:"2025-03-10 12:00",views:498},{answers:96,forumName:"Lorem ipsum dolor sit amet",lastTopicAuthor:"Carlos Alberto",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-17 14:20",name:"Galleria mellonella como fonte de prote\xEDna",topicAuthor:"Ana Paula",topicDate:"2025-02-25 09:30",views:356},{answers:118,forumName:"Lorem ipsum dolor sit amet",lastTopicAuthor:"Fernanda Costa",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-18 11:30",name:"Galleria mellonella em sistemas agr\xEDcolas",topicAuthor:"Carlos Alberto",topicDate:"2025-03-03 15:00",views:432},{answers:126,forumName:"Lorem ipsum dolor sit amet",lastTopicAuthor:"Jo\xE3o Silva",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-19 10:45",name:"Galleria mellonella e ecossistemas",topicAuthor:"Helena Martins",topicDate:"2025-03-13 11:30",views:467},{answers:82,forumName:"Lorem ipsum dolor sit amet",lastTopicAuthor:"Admin",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-16 09:20",name:"Galleria mellonella na medicina",topicAuthor:"Ricardo Oliveira",topicDate:"2025-01-22 18:00",views:298},{answers:145,forumName:"Lorem ipsum dolor sit amet",lastTopicAuthor:"Helena Martins",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-18 16:30",name:"Galleria mellonella em ambientes polu\xEDdos",topicAuthor:"Fernanda Costa",topicDate:"2025-02-20 12:45",views:534},{answers:107,forumName:"Lorem ipsum dolor sit amet",lastTopicAuthor:"Maria Souza",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-19 08:50",name:"Galleria mellonella e conserva\xE7\xE3o",topicAuthor:"Admin",topicDate:"2025-03-06 10:15",views:387},{answers:162,forumName:"Lorem ipsum dolor sit amet",lastTopicAuthor:"Ricardo Oliveira",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-19 11:40",name:"Galleria mellonella em sistemas de monitoramento ambiental",topicAuthor:"Helena Martins",topicDate:"2025-03-15 14:30",views:589},{answers:98,forumName:"Lorem ipsum dolor sit amet",lastTopicAuthor:"Carlos Alberto",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-17 15:20",name:"Galleria mellonella na educa\xE7\xE3o ambiental",topicAuthor:"Ana Paula",topicDate:"2025-02-26 09:45",views:365},{answers:127,forumName:"Lorem ipsum dolor sit amet",lastTopicAuthor:"Fernanda Costa",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-18 13:45",name:"Galleria mellonella em estudos de ecotoxicologia",topicAuthor:"Carlos Alberto",topicDate:"2025-03-02 16:15",views:456},{answers:87,forumName:"Lorem ipsum dolor sit amet",lastTopicAuthor:"Ana Paula",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-19 10:30",name:"Gen\xE9tica da Galleria mellonella",topicAuthor:"Ricardo Oliveira",topicDate:"2025-03-07 11:20",views:312},{answers:93,forumName:"Lorem ipsum dolor sit amet",lastTopicAuthor:"Jo\xE3o Silva",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-18 16:15",name:"Comportamento alimentar da Galleria mellonella",topicAuthor:"Maria Souza",topicDate:"2025-03-08 09:45",views:378}],title:"Lorem ipsum dolor sit"}])}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=l({type:t,selectors:[["pgm-topic-list"]],decls:3,vars:0,consts:[[1,"topic-list"],[3,"forumSection"],["section-item","",3,"sectionItem"]],template:function(e,o){e&1&&(n(0,"div",0),f(1,F,3,1,"pgm-forum-section",1,h),r()),e&2&&(a(),A(o.topicSections()))},dependencies:[L,G],styles:[".topic-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2rem;justify-content:flex-end}.topic-list__header[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2rem}@media (min-width: 992px){.topic-list__header[_ngcontent-%COMP%]{flex-direction:row;justify-content:space-between}}.topic-list[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center;font-size:2rem}@media (min-width: 768px){.topic-list[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.4rem}}@media (min-width: 1200px){.topic-list[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3.2rem}}@media (min-width: 992px){.topic-list[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:left}}.topic-list__button[_ngcontent-%COMP%]{align-self:flex-end}"],changeDetection:0})}}return t})();var nt=(()=>{class t{constructor(){this.router=d(D),this.title=c(""),this.route=d(C),this.route.params.subscribe(i=>{let e=i.forumslug;this.title.set(P(e))})}onCreateTopicClicked(){this.router.navigate(["comunidade","forum","nome-do-forum","topico","novo"])}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=l({type:t,selectors:[["pgm-community-forum"]],decls:7,vars:2,consts:[[1,"community-forum"],[3,"title","isStickyTitle"],[1,"community-forum__info"],[1,"community-forum__actions"],["variant","primary","loadingText","Carregando...","text","Criar t\xF3pico","iconLeft","add",1,"forum-list__button",3,"clicked"]],template:function(e,o){e&1&&(n(0,"div",0)(1,"pgm-forum-card",1)(2,"div",2)(3,"div",3)(4,"pgm-button",4),_("clicked",function(){return o.onCreateTopicClicked()}),r()()()(),n(5,"pgm-forum-card"),m(6,"pgm-topic-list"),r()()),e&2&&(a(),s("title",o.title())("isStickyTitle",!1))},dependencies:[x,N,S],styles:[".community-forum[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2rem}.community-forum__info[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end}.community-forum__actions[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;justify-content:center;color:#6c757d}@media (min-width: 768px){.community-forum__actions[_ngcontent-%COMP%]{flex-direction:row}}"],changeDetection:0})}}return t})();export{nt as CommunityForumComponent};
