import{a as R}from"./chunk-CB7T5XUB.js";import{a as w,c as E,d as z}from"./chunk-XGMA5WYI.js";import"./chunk-KYAPI73Y.js";import"./chunk-FFRX2J2I.js";import{a as G}from"./chunk-L3SXA77J.js";import"./chunk-TVNSG44Z.js";import{a as L}from"./chunk-E2FHLFHX.js";import{i as I,n as N}from"./chunk-C25HR74B.js";import{a as k}from"./chunk-OIORLEYO.js";import"./chunk-22XWPGPG.js";import{$a as p,Bb as r,Cb as b,Jb as u,Kb as C,Lb as y,Sa as i,da as d,ja as M,ka as F,mb as m,nb as h,qb as P,rb as x,sb as _,ta as S,tb as v,ua as g,ub as l,vb as n,wa as A,wb as c,xb as O}from"./chunk-XQT5PYR5.js";function B(a,f){if(a&1){let t=O();l(0,"li",1)(1,"button",11),r("click",function(){let e=M(t).$implicit,s=b();return F(s.changePage(e))}),u(2),n()()}if(a&2){let t=f.$implicit,o=b();h("active",t===o.currentPage()),i(2),C(t)}}var q=(()=>{class a{constructor(){this.currentPageInput=g(1),this.currentPage=A(this.currentPageInput()),this.pageChanged=S(),this.pageSize=g(20),this.totalItems=g.required()}get pages(){let t=this.totalPages,o=this.currentPage(),e=2,s=[];for(let T=Math.max(1,o-e);T<=Math.min(t,o+e);T++)s.push(T);return s}get totalPages(){return Math.ceil(this.totalItems()/this.pageSize())}changePage(t){t>=1&&t<=this.totalPages&&(this.currentPage.set(t),this.pageChanged.emit(t))}nextPage(){this.currentPage()<this.totalPages&&this.changePage(this.currentPage()+1)}prevPage(){this.currentPage()>1&&this.changePage(this.currentPage()-1)}static{this.\u0275fac=function(o){return new(o||a)}}static{this.\u0275cmp=p({type:a,selectors:[["pgm-pagination"]],inputs:{currentPageInput:[1,"currentPageInput"],pageSize:[1,"pageSize"],totalItems:[1,"totalItems"]},outputs:{pageChanged:"pageChanged"},decls:16,vars:8,consts:[[1,"pagination"],[1,"pagination__item"],["aria-label","Primeira p\xE1gina",3,"click"],["iconName","keyboard_double_arrow_left","lineHeight","1"],["aria-label","P\xE1gina anterior",3,"click"],["iconName","keyboard_arrow_left","lineHeight","1"],[1,"pagination__item",3,"active"],["aria-label","Pr\xF3xima p\xE1gina",3,"click"],["iconName","keyboard_arrow_right","lineHeight","1"],["aria-label","\xDAltima p\xE1gina",3,"click"],["iconName","keyboard_double_arrow_right","lineHeight","1"],[3,"click"]],template:function(o,e){o&1&&(l(0,"nav",0)(1,"ul")(2,"li",1)(3,"button",2),r("click",function(){return e.changePage(1)}),c(4,"pgm-icon",3),n()(),l(5,"li",1)(6,"button",4),r("click",function(){return e.prevPage()}),c(7,"pgm-icon",5),n()(),_(8,B,3,3,"li",6,x),l(10,"li",1)(11,"button",7),r("click",function(){return e.nextPage()}),c(12,"pgm-icon",8),n()(),l(13,"li",1)(14,"button",9),r("click",function(){return e.changePage(e.totalPages)}),c(15,"pgm-icon",10),n()()()()),o&2&&(i(2),h("disabled",e.currentPage()===1),i(3),h("disabled",e.currentPage()===1),i(3),v(e.pages),i(2),h("disabled",e.currentPage()===e.totalPages),i(3),h("disabled",e.currentPage()===e.totalPages))},dependencies:[N],styles:[".pagination[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0;margin:0;list-style:none}.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:1rem}@media (min-width: 768px){.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:1.2rem}}@media (min-width: 1200px){.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:1.4rem}}.pagination[_ngcontent-%COMP%]{display:flex;gap:1rem;justify-content:center}.pagination[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex}.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#749483;cursor:pointer;border:none;border-radius:.5rem}.pagination__item.disabled[_ngcontent-%COMP%]{pointer-events:none;opacity:.5}.pagination__item.active[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-weight:700;color:#fff;background-color:#749483}.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(.disabled){color:#fff;background-color:#749483}"],changeDetection:0})}}return a})();var j=(()=>{class a{constructor(){this.forumItem=g.required(),this.communityNavigationService=d(G),this.profileNavigationService=d(w)}navigateToForum(t){this.communityNavigationService.navigateToForum(t)}navigateToProfile(t){this.profileNavigationService.navigateToProfile(t)}static{this.\u0275fac=function(o){return new(o||a)}}static{this.\u0275cmp=p({type:a,selectors:[["pgm-forum-info"]],inputs:{forumItem:[1,"forumItem"]},decls:17,vars:8,consts:[[1,"forum-info"],[1,"forum-info__title",3,"showImage"],["primary","","tabindex","1",3,"click","keypress"],[1,"forum-info__posts",3,"showImage"],["primary",""],[1,"forum-info__last-topic"],["imageAlt","Avatar",3,"imageSrc"],["primary","",1,"forum-info__last-topic-title"],["secondary","",1,"forum-info__last-topic-author"],["tabindex","1",3,"click","keypress"],[3,"date"]],template:function(o,e){o&1&&(l(0,"div",0)(1,"pgm-forum-topic-item",1)(2,"a",2),r("click",function(){return e.navigateToForum(e.forumItem().name)})("keypress",function(){return e.navigateToForum(e.forumItem().name)}),l(3,"h3"),u(4),n()()(),l(5,"pgm-forum-topic-item",3)(6,"span",4),u(7),n()(),l(8,"div",5)(9,"pgm-forum-topic-item",6)(10,"span",7),u(11),n(),l(12,"span",8),u(13," Por "),l(14,"a",9),r("click",function(){return e.navigateToProfile(e.forumItem().lastTopicAuthor)})("keypress",function(){return e.navigateToProfile(e.forumItem().lastTopicAuthor)}),u(15),n(),c(16,"pgm-date",10),n()()()()),o&2&&(i(),m("showImage",!1),i(3),C(e.forumItem().name),i(),m("showImage",!1),i(2),y("",e.forumItem().topics," t\xF3picos"),i(2),m("imageSrc",e.forumItem().lastTopicAuthorAvatar),i(2),C(e.forumItem().lastTopicTitle),i(4),y(" ",e.forumItem().lastTopicAuthor," "),i(),m("date",e.forumItem().lastTopicDate))},dependencies:[z,E],styles:['.forum-info[_ngcontent-%COMP%]{display:grid;grid-template:"title last-topic" "posts last-topic";max-width:100%;height:10rem;overflow-x:auto;border-bottom:1px solid #dee2e6;transition:background-color .3s ease;padding:1rem}@media (min-width: 768px){.forum-info[_ngcontent-%COMP%]{padding:1.5rem}}@media (min-width: 1200px){.forum-info[_ngcontent-%COMP%]{padding:2rem}}@media (min-width: 768px){.forum-info[_ngcontent-%COMP%]{grid-template:"title posts last-topic"/1fr 1fr 1fr;height:12rem}}@media (min-width: 1200px){.forum-info[_ngcontent-%COMP%]{height:14rem}}.forum-info[_ngcontent-%COMP%]:hover{background-color:#f8f9fa}.forum-info__title[_ngcontent-%COMP%]{display:flex;grid-area:title;align-items:center}.forum-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#749483;font-size:1.6rem}@media (min-width: 768px){.forum-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.92rem}}@media (min-width: 1200px){.forum-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:2.24rem}}.forum-info__posts[_ngcontent-%COMP%]{display:flex;flex-direction:column;grid-area:posts;font-size:small;color:#adb5bd}@media (min-width: 576px){.forum-info__posts[_ngcontent-%COMP%]{align-items:center;justify-content:center;font-size:unset;color:unset}}.forum-info__last-topic[_ngcontent-%COMP%]{display:flex;grid-area:last-topic;align-items:center;justify-content:flex-end}@media (min-width: 768px){.forum-info__last-topic[_ngcontent-%COMP%]{display:flex;gap:2rem;justify-content:flex-start}}.forum-info__last-topic-title[_ngcontent-%COMP%]{display:none}@media (min-width: 768px){.forum-info__last-topic-title[_ngcontent-%COMP%]{display:unset}}.forum-info__last-topic-author[_ngcontent-%COMP%]{display:none}@media (min-width: 768px){.forum-info__last-topic-author[_ngcontent-%COMP%]{display:unset}}'],changeDetection:0})}}return a})();function $(a,f){if(a&1&&c(0,"pgm-forum-info",3),a&2){let t=f.$implicit;m("forumItem",t)}}function J(a,f){if(a&1&&(l(0,"pgm-forum-section",1),_(1,$,1,1,"pgm-forum-info",3,P),n()),a&2){let t=f.$implicit;m("forumSection",t),i(),v(t.items)}}var H=(()=>{class a{constructor(){this.forumCount=30,this.forumSections=A([{items:[{description:"Estudo sobre o comportamento da Galleria mellonella em diferentes ambientes.",lastTopicAuthor:"Jo\xE3o Silva",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-27 14:22",lastTopicTitle:"Adapta\xE7\xE3o da Galleria mellonella a ambientes extremos",name:"Comportamento da Galleria mellonella",topics:150},{description:"Discuss\xE3o sobre o uso da Galleria mellonella como modelo para estudos de patogenicidade microbiana.",lastTopicAuthor:"Maria Santos",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-26 09:15",lastTopicTitle:"Galleria mellonella vs. modelos mam\xEDferos em estudos de virul\xEAncia",name:"Galleria mellonella em estudos de patogenicidade",topics:132},{description:"F\xF3rum dedicado \xE0 gen\xE9tica e gen\xF4mica da Galleria mellonella.",lastTopicAuthor:"Carlos Ferreira",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-25 16:30",lastTopicTitle:"Sequenciamento do genoma da Galleria mellonella",name:"Gen\xE9tica da Galleria mellonella",topics:98},{description:"Discuss\xF5es sobre o sistema imunol\xF3gico da Galleria mellonella e suas aplica\xE7\xF5es em pesquisa.",lastTopicAuthor:"Ana Oliveira",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-24 11:45",lastTopicTitle:"Resposta imune da Galleria mellonella a infec\xE7\xF5es f\xFAngicas",name:"Imunologia da Galleria mellonella",topics:115},{description:"F\xF3rum para compartilhar t\xE9cnicas de cria\xE7\xE3o e manuten\xE7\xE3o de col\xF4nias de Galleria mellonella.",lastTopicAuthor:"Pedro Alves",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-23 13:20",lastTopicTitle:"Otimiza\xE7\xE3o de dietas artificiais para Galleria mellonella",name:"Cria\xE7\xE3o de Galleria mellonella",topics:87},{description:"Discuss\xE3o sobre o uso da Galleria mellonella em estudos toxicol\xF3gicos e farmacol\xF3gicos.",lastTopicAuthor:"Sofia Mendes",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-22 10:05",lastTopicTitle:"Avalia\xE7\xE3o de nanopart\xEDculas usando Galleria mellonella",name:"Galleria mellonella em estudos toxicol\xF3gicos",topics:76},{description:"F\xF3rum para discutir a fisiologia e metabolismo da Galleria mellonella.",lastTopicAuthor:"Lucas Costa",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-21 15:50",lastTopicTitle:"Regula\xE7\xE3o hormonal no desenvolvimento da Galleria mellonella",name:"Fisiologia da Galleria mellonella",topics:104},{description:"Discuss\xF5es sobre o ciclo de vida e desenvolvimento da Galleria mellonella.",lastTopicAuthor:"Mariana Rodrigues",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-20 09:30",lastTopicTitle:"Fatores que influenciam a metamorfose da Galleria mellonella",name:"Desenvolvimento da Galleria mellonella",topics:92},{description:"F\xF3rum para compartilhar e discutir m\xE9todos de controle da Galleria mellonella como praga.",lastTopicAuthor:"Ricardo Sousa",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-19 14:10",lastTopicTitle:"Controle biol\xF3gico da Galleria mellonella em api\xE1rios",name:"Controle de Galleria mellonella",topics:68}],title:"Lorem ipsum dolor sit"}])}onPageChanged(t){t===1&&(this.forumSections()[0].items=[{description:"Estudo sobre o comportamento da Galleria mellonella em diferentes ambientes.",lastTopicAuthor:"Jo\xE3o Silva",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-27 14:22",lastTopicTitle:"Adapta\xE7\xE3o da Galleria mellonella a ambientes extremos",name:"Comportamento da Galleria mellonella",topics:150},{description:"Discuss\xE3o sobre o uso da Galleria mellonella como modelo para estudos de patogenicidade microbiana.",lastTopicAuthor:"Maria Santos",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-26 09:15",lastTopicTitle:"Galleria mellonella vs. modelos mam\xEDferos em estudos de virul\xEAncia",name:"Galleria mellonella em estudos de patogenicidade",topics:132},{description:"F\xF3rum dedicado \xE0 gen\xE9tica e gen\xF4mica da Galleria mellonella.",lastTopicAuthor:"Carlos Ferreira",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-25 16:30",lastTopicTitle:"Sequenciamento do genoma da Galleria mellonella",name:"Gen\xE9tica da Galleria mellonella",topics:98},{description:"Discuss\xF5es sobre o sistema imunol\xF3gico da Galleria mellonella e suas aplica\xE7\xF5es em pesquisa.",lastTopicAuthor:"Ana Oliveira",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-24 11:45",lastTopicTitle:"Resposta imune da Galleria mellonella a infec\xE7\xF5es f\xFAngicas",name:"Imunologia da Galleria mellonella",topics:115},{description:"F\xF3rum para compartilhar t\xE9cnicas de cria\xE7\xE3o e manuten\xE7\xE3o de col\xF4nias de Galleria mellonella.",lastTopicAuthor:"Pedro Alves",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-23 13:20",lastTopicTitle:"Otimiza\xE7\xE3o de dietas artificiais para Galleria mellonella",name:"Cria\xE7\xE3o de Galleria mellonella",topics:87},{description:"Discuss\xE3o sobre o uso da Galleria mellonella em estudos toxicol\xF3gicos e farmacol\xF3gicos.",lastTopicAuthor:"Sofia Mendes",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-22 10:05",lastTopicTitle:"Avalia\xE7\xE3o de nanopart\xEDculas usando Galleria mellonella",name:"Galleria mellonella em estudos toxicol\xF3gicos",topics:76},{description:"F\xF3rum para discutir a fisiologia e metabolismo da Galleria mellonella.",lastTopicAuthor:"Lucas Costa",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-21 15:50",lastTopicTitle:"Regula\xE7\xE3o hormonal no desenvolvimento da Galleria mellonella",name:"Fisiologia da Galleria mellonella",topics:104},{description:"Discuss\xF5es sobre o ciclo de vida e desenvolvimento da Galleria mellonella.",lastTopicAuthor:"Mariana Rodrigues",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-20 09:30",lastTopicTitle:"Fatores que influenciam a metamorfose da Galleria mellonella",name:"Desenvolvimento da Galleria mellonella",topics:92},{description:"F\xF3rum para compartilhar e discutir m\xE9todos de controle da Galleria mellonella como praga.",lastTopicAuthor:"Ricardo Sousa",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-19 14:10",lastTopicTitle:"Controle biol\xF3gico da Galleria mellonella em api\xE1rios",name:"Controle de Galleria mellonella",topics:68}]),t===2?this.forumSections()[0].items=[{description:"Discuss\xE3o sobre o uso da Galleria mellonella em pesquisas de ecotoxicologia.",lastTopicAuthor:"Beatriz Lima",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-18 11:25",lastTopicTitle:"Impacto de pesticidas na sobreviv\xEAncia da Galleria mellonella",name:"Galleria mellonella em ecotoxicologia",topics:81},{description:"F\xF3rum para discutir a evolu\xE7\xE3o e adapta\xE7\xE3o da Galleria mellonella.",lastTopicAuthor:"Fernando Gomes",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-17 16:40",lastTopicTitle:"Adapta\xE7\xF5es da Galleria mellonella a diferentes habitats",name:"Evolu\xE7\xE3o da Galleria mellonella",topics:95},{description:"Discuss\xE3o sobre o uso da Galleria mellonella em estudos de resist\xEAncia a antibi\xF3ticos.",lastTopicAuthor:"Camila Rocha",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-16 10:55",lastTopicTitle:"Galleria mellonella como modelo para testar novos antibi\xF3ticos",name:"Galleria mellonella e resist\xEAncia antimicrobiana",topics:110},{description:"F\xF3rum para compartilhar t\xE9cnicas de microscopia e imageamento da Galleria mellonella.",lastTopicAuthor:"Rafael Nunes",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-15 13:30",lastTopicTitle:"T\xE9cnicas de fluoresc\xEAncia para visualizar infec\xE7\xF5es em Galleria mellonella",name:"Microscopia da Galleria mellonella",topics:72},{description:"Discuss\xE3o sobre o papel da Galleria mellonella na poliniza\xE7\xE3o e ecologia.",lastTopicAuthor:"Laura Cardoso",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-14 09:20",lastTopicTitle:"Impacto da Galleria mellonella na biodiversidade de abelhas",name:"Ecologia da Galleria mellonella",topics:88},{description:"F\xF3rum para discutir o uso da Galleria mellonella em estudos de estresse oxidativo.",lastTopicAuthor:"Gabriel Santos",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-13 15:15",lastTopicTitle:"Biomarcadores de estresse oxidativo em Galleria mellonella",name:"Galleria mellonella e estresse oxidativo",topics:79},{description:"Discuss\xE3o sobre t\xE9cnicas moleculares aplicadas \xE0 Galleria mellonella.",lastTopicAuthor:"Isabel Ferreira",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-12 11:05",lastTopicTitle:"CRISPR-Cas9 em Galleria mellonella: desafios e oportunidades",name:"Biologia molecular da Galleria mellonella",topics:103},{description:"F\xF3rum para discutir a nutri\xE7\xE3o e metabolismo da Galleria mellonella.",lastTopicAuthor:"Henrique Oliveira",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-11 14:50",lastTopicTitle:"Influ\xEAncia da dieta na longevidade da Galleria mellonella",name:"Nutri\xE7\xE3o da Galleria mellonella",topics:86},{description:"Discuss\xE3o sobre o uso da Galleria mellonella em estudos de envelhecimento.",lastTopicAuthor:"Carolina Martins",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-10 10:35",lastTopicTitle:"Galleria mellonella como modelo para estudos de longevidade",name:"Galleria mellonella e envelhecimento",topics:94},{description:"F\xF3rum para discutir a intera\xE7\xE3o entre Galleria mellonella e microrganismos simbiontes.",lastTopicAuthor:"Rodrigo Almeida",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-09 16:20",lastTopicTitle:"Microbioma intestinal da Galleria mellonella",name:"Simbiose em Galleria mellonella",topics:77}]:t===3&&(this.forumSections()[0].items=[{description:"Discuss\xE3o sobre o uso da Galleria mellonella em estudos de neurobiologia.",lastTopicAuthor:"Juliana Costa",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-08 13:45",lastTopicTitle:"Neurotransmissores em Galleria mellonella",name:"Neurobiologia da Galleria mellonella",topics:82},{description:"F\xF3rum para discutir o comportamento de acasalamento da Galleria mellonella.",lastTopicAuthor:"Andr\xE9 Sousa",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-07 11:10",lastTopicTitle:"Ferom\xF4nios sexuais da Galleria mellonella",name:"Reprodu\xE7\xE3o da Galleria mellonella",topics:69},{description:"Discuss\xE3o sobre o uso da Galleria mellonella em estudos de bioremedia\xE7\xE3o.",lastTopicAuthor:"Patr\xEDcia Ribeiro",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-06 15:30",lastTopicTitle:"Potencial da Galleria mellonella na degrada\xE7\xE3o de pl\xE1sticos",name:"Galleria mellonella em bioremedia\xE7\xE3o",topics:91},{description:"F\xF3rum para discutir a produ\xE7\xE3o de seda pela Galleria mellonella.",lastTopicAuthor:"Marcelo Dias",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-05 09:55",lastTopicTitle:"Aplica\xE7\xF5es biotecnol\xF3gicas da seda de Galleria mellonella",name:"Produ\xE7\xE3o de seda em Galleria mellonella",topics:75},{description:"Discuss\xE3o sobre o uso da Galleria mellonella em estudos de comportamento social.",lastTopicAuthor:"Fernanda Lima",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-04 14:25",lastTopicTitle:"Comunica\xE7\xE3o entre larvas de Galleria mellonella",name:"Comportamento social da Galleria mellonella",topics:83},{description:"F\xF3rum para discutir o impacto das mudan\xE7as clim\xE1ticas na Galleria mellonella.",lastTopicAuthor:"Gustavo Pereira",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-03 10:40",lastTopicTitle:"Adapta\xE7\xE3o da Galleria mellonella ao aquecimento global",name:"Galleria mellonella e mudan\xE7as clim\xE1ticas",topics:97},{description:"Discuss\xE3o sobre o uso da Galleria mellonella em estudos de epigen\xE9tica.",lastTopicAuthor:"Carla Rodrigues",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-02 16:15",lastTopicTitle:"Metila\xE7\xE3o do DNA em Galleria mellonella",name:"Epigen\xE9tica da Galleria mellonella",topics:89},{description:"F\xF3rum para discutir o uso da Galleria mellonella na ind\xFAstria de alimentos.",lastTopicAuthor:"Roberto Alves",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-01 12:50",lastTopicTitle:"Galleria mellonella como fonte de prote\xEDna alternativa",name:"Galleria mellonella na ind\xFAstria aliment\xEDcia",topics:73},{description:"F\xF3rum para discutir as intera\xE7\xF5es entre Galleria mellonella e plantas hospedeiras.",lastTopicAuthor:"Mariana Costa",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-27 09:30",lastTopicTitle:"Prefer\xEAncias alimentares da Galleria mellonella em diferentes esp\xE9cies de plantas",name:"Galleria mellonella e intera\xE7\xF5es com plantas",topics:85},{description:"Discuss\xE3o sobre o uso da Galleria mellonella em estudos de biorremedia\xE7\xE3o de metais pesados.",lastTopicAuthor:"Felipe Santos",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-26 14:45",lastTopicTitle:"Potencial da Galleria mellonella na descontamina\xE7\xE3o de solos com chumbo",name:"Galleria mellonella em biorremedia\xE7\xE3o de metais",topics:78},{description:"F\xF3rum para discutir o uso da Galleria mellonella como bioindicador ambiental.",lastTopicAuthor:"Luciana Ferreira",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-25 11:20",lastTopicTitle:"Sensibilidade da Galleria mellonella a poluentes atmosf\xE9ricos",name:"Galleria mellonella como bioindicador",topics:92}]),this.scrollToTop()}scrollToTop(){window.scrollTo({behavior:"smooth",top:0})}static{this.\u0275fac=function(o){return new(o||a)}}static{this.\u0275cmp=p({type:a,selectors:[["pgm-forum-list"]],decls:4,vars:2,consts:[[1,"forum-list"],[3,"forumSection"],[3,"pageChanged","totalItems","pageSize"],["section-item","",3,"forumItem"]],template:function(o,e){o&1&&(l(0,"div",0),_(1,J,3,1,"pgm-forum-section",1,P),l(3,"pgm-pagination",2),r("pageChanged",function(T){return e.onPageChanged(T)}),n()()),o&2&&(i(),v(e.forumSections()),i(2),m("totalItems",e.forumCount)("pageSize",10))},dependencies:[R,j,q],styles:[".forum-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2rem;justify-content:flex-end}.forum-list[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center;font-size:2rem}@media (min-width: 768px){.forum-list[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.4rem}}@media (min-width: 1200px){.forum-list[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3.2rem}}@media (min-width: 992px){.forum-list[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:left}}.forum-list__button[_ngcontent-%COMP%]{align-self:flex-end}"],changeDetection:0})}}return a})();var Ce=(()=>{class a{constructor(){this.router=d(I),this.communityNavigationService=d(G)}onCreateTopicClicked(){this.communityNavigationService.navigateToNewTopic()}static{this.\u0275fac=function(o){return new(o||a)}}static{this.\u0275cmp=p({type:a,selectors:[["pgm-community-home"]],decls:7,vars:1,consts:[[1,"community-home"],["title","F\xF3runs",3,"isTitleSticky"],[1,"community-home__info"],[1,"community-home__actions"],["variant","primary","loadingText","Carregando...","text","Criar t\xF3pico","iconLeft","add",1,"forum-list__button",3,"clicked"]],template:function(o,e){o&1&&(l(0,"div",0)(1,"pgm-forum-card",1)(2,"div",2)(3,"div",3)(4,"pgm-button",4),r("clicked",function(){return e.onCreateTopicClicked()}),n()()()(),l(5,"pgm-forum-card"),c(6,"pgm-forum-list"),n()()),o&2&&(i(),m("isTitleSticky",!1))},dependencies:[H,k,L],styles:[".community-home[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2rem}.community-home__info[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end}.community-home__actions[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;justify-content:center;color:#6c757d}@media (min-width: 768px){.community-home__actions[_ngcontent-%COMP%]{flex-direction:row}}"],changeDetection:0})}}return a})();export{Ce as CommunityHomeComponent};
