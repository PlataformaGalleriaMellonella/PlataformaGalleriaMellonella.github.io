import{a as I}from"./chunk-WAJJJ7AM.js";import{a as v,b as N,c as y,e as S,g as P}from"./chunk-Z7KF32ES.js";import"./chunk-IKWQYKEW.js";import{a as O}from"./chunk-FEG6DMII.js";import{g as f,i as _}from"./chunk-EDLNJQHN.js";import{a as M}from"./chunk-ARI5VF3D.js";import"./chunk-SY5KKSHA.js";import{Cb as h,Kb as m,Lb as G,Mb as A,Ta as i,ab as d,da as n,nb as r,rb as g,tb as w,ua as D,ub as C,vb as l,wa as u,wb as s,xb as p}from"./chunk-4JVUJWEJ.js";var b=(()=>{class a{constructor(){this.sectionItem=D.required(),this.communityNavigationService=n(N),this.profileNavigationService=n(y)}navigateToProfile(o){this.profileNavigationService.navigateToProfile(o)}navigateToTopic(o,t){this.communityNavigationService.navigateToTopic(o,t)}static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275cmp=d({type:a,selectors:[["pgm-topic-info"]],inputs:{sectionItem:[1,"sectionItem"]},decls:19,vars:10,consts:[[1,"topic-info"],[1,"topic-info__title",3,"showImage"],["primary","","tabindex","1",3,"click","keypress"],["secondary","",1,"topic-info__author"],["tabindex","1",3,"click","keypress"],[3,"date"],[1,"topic-info__stats",3,"showImage"],["primary","",1,"topic-info__answers"],["secondary","",1,"topic-info__views"],[1,"topic-info__last-post",3,"imageSrc"],["primary","","tabindex","1",1,"topic-info__last-post-author",3,"click","keypress"],["secondary","",1,"topic-info__last-post-date",3,"date"]],template:function(t,e){t&1&&(l(0,"div",0)(1,"pgm-forum-topic-item",1)(2,"a",2),h("click",function(){return e.navigateToTopic(e.sectionItem().forumName,e.sectionItem().name)})("keypress",function(){return e.navigateToTopic(e.sectionItem().forumName,e.sectionItem().name)}),l(3,"h3"),m(4),s()(),l(5,"span",3),m(6," Por "),l(7,"a",4),h("click",function(){return e.navigateToProfile(e.sectionItem().topicAuthor)})("keypress",function(){return e.navigateToProfile(e.sectionItem().topicAuthor)}),m(8),s(),p(9,"pgm-date",5),s()(),l(10,"pgm-forum-topic-item",6)(11,"p",7),m(12),s(),l(13,"p",8),m(14),s()(),l(15,"pgm-forum-topic-item",9)(16,"a",10),h("click",function(){return e.navigateToProfile(e.sectionItem().topicAuthor)})("keypress",function(){return e.navigateToProfile(e.sectionItem().topicAuthor)}),m(17),s(),p(18,"pgm-date",11),s()()),t&2&&(i(),r("showImage",!1),i(3),G(e.sectionItem().name),i(4),A(" ",e.sectionItem().topicAuthor," "),i(),r("date",e.sectionItem().topicDate),i(),r("showImage",!1),i(2),A(" ",e.sectionItem().answers," respostas "),i(2),A(" ",e.sectionItem().views," visualiza\xE7\xF5es "),i(),r("imageSrc",e.sectionItem().lastTopicAuthorAvatar),i(2),A(" ",e.sectionItem().topicAuthor," "),i(),r("date",e.sectionItem().lastTopicDate))},dependencies:[P,S],styles:['.topic-info[_ngcontent-%COMP%]{display:grid;grid-template:"title last-post" "stats last-post";gap:1rem;max-width:100%;overflow-x:auto;border-bottom:1px solid #dee2e6;transition:background-color .3s ease;padding:1rem}@media (min-width: 768px){.topic-info[_ngcontent-%COMP%]{padding:1.5rem}}@media (min-width: 1200px){.topic-info[_ngcontent-%COMP%]{padding:2rem}}@media (min-width: 768px){.topic-info[_ngcontent-%COMP%]{grid-template:"title stats last-post"/1fr 1fr 1fr;gap:2rem}}@media (min-width: 1200px){.topic-info[_ngcontent-%COMP%]{grid-template:"title stats last-post"/2fr 1fr 1fr;gap:2.5rem}}.topic-info[_ngcontent-%COMP%]:hover{background-color:#f8f9fa}.topic-info__title[_ngcontent-%COMP%]{display:flex;flex-direction:column;grid-area:title;justify-content:center}.topic-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#749483;font-size:1.6rem}@media (min-width: 768px){.topic-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.92rem}}@media (min-width: 1200px){.topic-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:2.24rem}}.topic-info__author[_ngcontent-%COMP%]{display:none}@media (min-width: 768px){.topic-info__author[_ngcontent-%COMP%]{display:unset}}.topic-info__stats[_ngcontent-%COMP%]{display:flex;grid-area:stats;justify-content:flex-start}@media (min-width: 768px){.topic-info__stats[_ngcontent-%COMP%]{display:flex;justify-content:center}}.topic-info__answers[_ngcontent-%COMP%]{display:flex;font-size:small;color:#6c757d}@media (min-width: 768px){.topic-info__answers[_ngcontent-%COMP%]{color:#343a40;font-size:1.2rem;line-height:2.2rem}}@media (min-width: 768px) and (min-width: 768px){.topic-info__answers[_ngcontent-%COMP%]{font-size:1.44rem;line-height:2.44rem}}@media (min-width: 768px) and (min-width: 1200px){.topic-info__answers[_ngcontent-%COMP%]{font-size:2.016rem;line-height:3.016rem}}.topic-info__views[_ngcontent-%COMP%]{display:none;font-size:small;color:#6c757d}@media (min-width: 768px){.topic-info__views[_ngcontent-%COMP%]{display:unset;font-size:1rem;line-height:2rem}}@media (min-width: 768px) and (min-width: 768px){.topic-info__views[_ngcontent-%COMP%]{font-size:1.2rem;line-height:2.2rem}}@media (min-width: 768px) and (min-width: 1200px){.topic-info__views[_ngcontent-%COMP%]{font-size:1.68rem;line-height:2.68rem}}.topic-info__last-post[_ngcontent-%COMP%]{display:flex;grid-area:last-post;gap:1rem;align-items:center;justify-content:flex-end}.topic-info__last-post-author[_ngcontent-%COMP%]{display:none}@media (min-width: 768px){.topic-info__last-post-author[_ngcontent-%COMP%]{display:unset}}.topic-info__last-post-date[_ngcontent-%COMP%]{display:none}@media (min-width: 768px){.topic-info__last-post-date[_ngcontent-%COMP%]{display:unset}}'],changeDetection:0})}}return a})();var F={"comportamento-da-galleria-mellonella":[{answers:78,forumName:"Comportamento da Galleria mellonella",lastTopicAuthor:"Jo\xE3o Silva",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-27 14:22",name:"Comportamento alimentar da Galleria mellonella em diferentes temperaturas",topicAuthor:"Maria Santos",topicDate:"2025-03-15 09:30",views:342},{answers:65,forumName:"Comportamento da Galleria mellonella",lastTopicAuthor:"Ana Oliveira",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-24 11:15",name:"Estudo sobre o ciclo reprodutivo da Galleria mellonella",topicAuthor:"Carlos Ferreira",topicDate:"2025-03-10 08:45",views:289},{answers:92,forumName:"Comportamento da Galleria mellonella",lastTopicAuthor:"Maria Souza",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-26 16:50",name:"Influ\xEAncia da luminosidade no desenvolvimento da Galleria mellonella",topicAuthor:"Jo\xE3o Silva",topicDate:"2025-03-05 14:30",views:431},{answers:45,forumName:"Comportamento da Galleria mellonella",lastTopicAuthor:"Carlos Mendes",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-22 09:20",name:"Adapta\xE7\xE3o da Galleria mellonella a ambientes com baixa umidade",topicAuthor:"Ana Oliveira",topicDate:"2025-03-08 10:15",views:276},{answers:83,forumName:"Comportamento da Galleria mellonella",lastTopicAuthor:"Jo\xE3o Silva",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-25 13:40",name:"Comportamento de defesa da Galleria mellonella contra predadores",topicAuthor:"Maria Santos",topicDate:"2025-03-02 17:25",views:405},{answers:34,forumName:"Comportamento da Galleria mellonella",lastTopicAuthor:"Ana Oliveira",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-19 08:35",name:"Comunica\xE7\xE3o entre esp\xE9cimes de Galleria mellonella",topicAuthor:"Carlos Ferreira",topicDate:"2025-03-07 11:50",views:215},{answers:79,forumName:"Comportamento da Galleria mellonella",lastTopicAuthor:"Maria Souza",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-23 15:10",name:"Efeito de diferentes dietas no comportamento da Galleria mellonella",topicAuthor:"Jo\xE3o Silva",topicDate:"2025-03-09 09:45",views:368},{answers:51,forumName:"Comportamento da Galleria mellonella",lastTopicAuthor:"Carlos Mendes",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-18 10:30",name:"Ciclo circadiano da Galleria mellonella",topicAuthor:"Ana Oliveira",topicDate:"2025-03-04 13:20",views:294},{answers:88,forumName:"Comportamento da Galleria mellonella",lastTopicAuthor:"Jo\xE3o Silva",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-26 12:15",name:"Comportamento de acasalamento da Galleria mellonella",topicAuthor:"Maria Santos",topicDate:"2025-03-11 16:40",views:457},{answers:42,forumName:"Comportamento da Galleria mellonella",lastTopicAuthor:"Ana Oliveira",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-21 09:55",name:"Resposta da Galleria mellonella a est\xEDmulos sonoros",topicAuthor:"Carlos Ferreira",topicDate:"2025-03-06 14:10",views:237},{answers:76,forumName:"Comportamento da Galleria mellonella",lastTopicAuthor:"Maria Souza",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-24 17:30",name:"Impacto de ferom\xF4nios no comportamento social da Galleria mellonella",topicAuthor:"Jo\xE3o Silva",topicDate:"2025-03-12 10:25",views:389},{answers:59,forumName:"Comportamento da Galleria mellonella",lastTopicAuthor:"Carlos Mendes",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-20 11:40",name:"Comportamento migrat\xF3rio da Galleria mellonella",topicAuthor:"Ana Oliveira",topicDate:"2025-03-03 15:55",views:312},{answers:94,forumName:"Comportamento da Galleria mellonella",lastTopicAuthor:"Jo\xE3o Silva",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-25 14:50",name:"Adapta\xE7\xF5es comportamentais da Galleria mellonella em condi\xE7\xF5es de estresse",topicAuthor:"Maria Santos",topicDate:"2025-03-08 12:35",views:476},{answers:37,forumName:"Comportamento da Galleria mellonella",lastTopicAuthor:"Ana Oliveira",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-19 16:20",name:"Intera\xE7\xE3o da Galleria mellonella com outras esp\xE9cies",topicAuthor:"Carlos Ferreira",topicDate:"2025-03-10 09:10",views:254},{answers:81,forumName:"Comportamento da Galleria mellonella",lastTopicAuthor:"Maria Souza",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-23 10:45",name:"Padr\xF5es de movimento da Galleria mellonella",topicAuthor:"Jo\xE3o Silva",topicDate:"2025-03-05 17:30",views:329}],"galleria-mellonella-em-estudos-de-patogenicidade":[{answers:92,forumName:"Galleria mellonella em estudos de patogenicidade",lastTopicAuthor:"Rafael Oliveira",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-26 08:45",name:"Compara\xE7\xE3o entre Galleria mellonella e modelos murinos para estudos de infec\xE7\xF5es f\xFAngicas",topicAuthor:"Carolina Mendes",topicDate:"2025-03-12 14:22",views:478},{answers:65,forumName:"Galleria mellonella em estudos de patogenicidade",lastTopicAuthor:"Maria Santos",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-25 16:30",name:"Protocolos de inocula\xE7\xE3o de pat\xF3genos em Galleria mellonella",topicAuthor:"Pedro Almeida",topicDate:"2025-03-08 10:15",views:329},{answers:103,forumName:"Galleria mellonella em estudos de patogenicidade",lastTopicAuthor:"Ana Costa",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-24 11:20",name:"Avalia\xE7\xE3o da virul\xEAncia de Candida auris utilizando modelo Galleria mellonella",topicAuthor:"Jo\xE3o Ferreira",topicDate:"2025-03-05 09:30",views:542},{answers:48,forumName:"Galleria mellonella em estudos de patogenicidade",lastTopicAuthor:"Carlos Silva",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-22 15:45",name:"Resposta imune de Galleria mellonella a infec\xE7\xF5es bacterianas",topicAuthor:"Mariana Sousa",topicDate:"2025-03-10 13:55",views:287},{answers:79,forumName:"Galleria mellonella em estudos de patogenicidade",lastTopicAuthor:"Laura Martins",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-26 09:10",name:"Galleria mellonella como modelo para estudo de biofilmes bacterianos",topicAuthor:"Ricardo Campos",topicDate:"2025-03-15 08:20",views:416},{answers:54,forumName:"Galleria mellonella em estudos de patogenicidade",lastTopicAuthor:"Fernando Pereira",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-20 14:35",name:"M\xE9todos de avalia\xE7\xE3o da virul\xEAncia de pat\xF3genos em Galleria mellonella",topicAuthor:"Sofia Rodrigues",topicDate:"2025-03-07 16:40",views:312},{answers:87,forumName:"Galleria mellonella em estudos de patogenicidade",lastTopicAuthor:"Maria Santos",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-26 09:15",name:"Galleria mellonella vs. modelos mam\xEDferos em estudos de virul\xEAncia",topicAuthor:"Andr\xE9 Lima",topicDate:"2025-03-11 10:25",views:498},{answers:41,forumName:"Galleria mellonella em estudos de patogenicidade",lastTopicAuthor:"Juliana Costa",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-23 12:50",name:"Uso de Galleria mellonella para avaliar resist\xEAncia antimicrobiana",topicAuthor:"Gabriel Santos",topicDate:"2025-03-09 15:15",views:265},{answers:76,forumName:"Galleria mellonella em estudos de patogenicidade",lastTopicAuthor:"Lucas Oliveira",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-25 08:30",name:"Infec\xE7\xF5es virais em modelo Galleria mellonella: limita\xE7\xF5es e desafios",topicAuthor:"Carolina Fernandes",topicDate:"2025-03-14 11:40",views:389},{answers:58,forumName:"Galleria mellonella em estudos de patogenicidade",lastTopicAuthor:"Rafael Dias",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-21 16:25",name:"Padroniza\xE7\xE3o de in\xF3culos de fungos filamentosos para Galleria mellonella",topicAuthor:"Amanda Soares",topicDate:"2025-03-06 13:10",views:327},{answers:98,forumName:"Galleria mellonella em estudos de patogenicidade",lastTopicAuthor:"Paulo Mendes",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-24 10:45",name:"Aspectos \xE9ticos do uso de Galleria mellonella em pesquisa",topicAuthor:"Beatriz Cardoso",topicDate:"2025-03-13 09:50",views:456},{answers:52,forumName:"Galleria mellonella em estudos de patogenicidade",lastTopicAuthor:"Carla Lima",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-22 13:15",name:"Estudo comparativo: Galleria mellonella vs. Zebrafish em estudos de patogenicidade",topicAuthor:"Henrique Alves",topicDate:"2025-03-04 15:30",views:298},{answers:81,forumName:"Galleria mellonella em estudos de patogenicidade",lastTopicAuthor:"Mariana Sousa",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-26 07:55",name:"Aplica\xE7\xE3o de Galleria mellonella em estudos de pat\xF3genos emergentes",topicAuthor:"Daniel Costa",topicDate:"2025-03-16 10:05",views:421},{answers:63,forumName:"Galleria mellonella em estudos de patogenicidade",lastTopicAuthor:"Gustavo Ferreira",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-23 15:40",name:"Fatores que influenciam a susceptibilidade de Galleria mellonella a infec\xE7\xF5es",topicAuthor:"Camila Rodrigues",topicDate:"2025-03-08 12:25",views:347},{answers:74,forumName:"Galleria mellonella em estudos de patogenicidade",lastTopicAuthor:"Isabela Martins",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-25 11:05",name:"Biomarcadores de infec\xE7\xE3o em Galleria mellonella",topicAuthor:"Felipe Santos",topicDate:"2025-03-12 14:50",views:385}],"genetica-da-galleria-mellonella":[{answers:87,forumName:"Gen\xE9tica da Galleria mellonella",lastTopicAuthor:"Carlos Ferreira",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-25 16:30",name:"Sequenciamento do genoma da Galleria mellonella",topicAuthor:"Ana Silva",topicDate:"2025-03-10 09:15",views:456},{answers:62,forumName:"Gen\xE9tica da Galleria mellonella",lastTopicAuthor:"Maria Santos",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-24 14:20",name:"An\xE1lise comparativa do genoma da G. mellonella com outras esp\xE9cies de lepid\xF3pteros",topicAuthor:"Jo\xE3o Oliveira",topicDate:"2025-03-08 11:30",views:328},{answers:95,forumName:"Gen\xE9tica da Galleria mellonella",lastTopicAuthor:"Pedro Almeida",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-26 10:45",name:"Genes relacionados \xE0 resposta imune em Galleria mellonella",topicAuthor:"Carla Rodrigues",topicDate:"2025-03-12 15:20",views:512},{answers:53,forumName:"Gen\xE9tica da Galleria mellonella",lastTopicAuthor:"Luisa Ferreira",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-23 09:55",name:"Identifica\xE7\xE3o de marcadores gen\xE9ticos para resist\xEAncia a pat\xF3genos em G. mellonella",topicAuthor:"Ricardo Costa",topicDate:"2025-03-05 13:40",views:287},{answers:78,forumName:"Gen\xE9tica da Galleria mellonella",lastTopicAuthor:"Fernando Sousa",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-25 11:10",name:"Estudo de genes envolvidos no desenvolvimento larval de Galleria mellonella",topicAuthor:"Mariana Lima",topicDate:"2025-03-15 16:25",views:402},{answers:41,forumName:"Gen\xE9tica da Galleria mellonella",lastTopicAuthor:"Carolina Mendes",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-22 14:35",name:"An\xE1lise de polimorfismos gen\xE9ticos em popula\xE7\xF5es de G. mellonella",topicAuthor:"Gabriel Santos",topicDate:"2025-03-07 10:50",views:215},{answers:89,forumName:"Gen\xE9tica da Galleria mellonella",lastTopicAuthor:"Andr\xE9 Oliveira",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-26 09:30",name:"Express\xE3o g\xEAnica diferencial durante a metamorfose de Galleria mellonella",topicAuthor:"Sofia Cardoso",topicDate:"2025-03-11 12:15",views:476},{answers:56,forumName:"Gen\xE9tica da Galleria mellonella",lastTopicAuthor:"Beatriz Alves",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-24 15:50",name:"Caracteriza\xE7\xE3o de microRNAs em Galleria mellonella",topicAuthor:"Lucas Ferreira",topicDate:"2025-03-09 14:05",views:298},{answers:72,forumName:"Gen\xE9tica da Galleria mellonella",lastTopicAuthor:"Rafaela Nunes",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-25 13:25",name:"Estudo de genes relacionados \xE0 produ\xE7\xE3o de seda em G. mellonella",topicAuthor:"Henrique Martins",topicDate:"2025-03-14 11:40",views:387},{answers:48,forumName:"Gen\xE9tica da Galleria mellonella",lastTopicAuthor:"Gustavo Pereira",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-23 10:15",name:"An\xE1lise epigen\xE9tica em Galleria mellonella",topicAuthor:"Isabel Costa",topicDate:"2025-03-06 16:30",views:254},{answers:83,forumName:"Gen\xE9tica da Galleria mellonella",lastTopicAuthor:"Camila Rodrigues",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-26 12:40",name:"Identifica\xE7\xE3o de genes relacionados \xE0 resist\xEAncia a inseticidas em G. mellonella",topicAuthor:"Daniel Oliveira",topicDate:"2025-03-13 09:55",views:439},{answers:59,forumName:"Gen\xE9tica da Galleria mellonella",lastTopicAuthor:"Marcelo Santos",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-24 11:05",name:"Estudo de fatores de transcri\xE7\xE3o em Galleria mellonella",topicAuthor:"Laura Almeida",topicDate:"2025-03-08 14:20",views:312},{answers:76,forumName:"Gen\xE9tica da Galleria mellonella",lastTopicAuthor:"Renata Lima",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-25 15:30",name:"An\xE1lise de elementos transpon\xEDveis no genoma de G. mellonella",topicAuthor:"F\xE1bio Cardoso",topicDate:"2025-03-10 13:45",views:405},{answers:51,forumName:"Gen\xE9tica da Galleria mellonella",lastTopicAuthor:"Thiago Ferreira",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-23 16:55",name:"Estudo de genes envolvidos na produ\xE7\xE3o de ferom\xF4nios em Galleria mellonella",topicAuthor:"Amanda Sousa",topicDate:"2025-03-07 11:10",views:278},{answers:68,forumName:"Gen\xE9tica da Galleria mellonella",lastTopicAuthor:"Juliana Costa",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-26 10:20",name:"Caracteriza\xE7\xE3o de fam\xEDlias g\xEAnicas em Galleria mellonella",topicAuthor:"Roberto Alves",topicDate:"2025-03-12 15:35",views:359}],"imunologia-da-galleria-mellonella":[{answers:92,forumName:"Imunologia da Galleria mellonella",lastTopicAuthor:"Ana Oliveira",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-24 11:45",name:"Resposta imune da Galleria mellonella a infec\xE7\xF5es f\xFAngicas",topicAuthor:"Carlos Ferreira",topicDate:"2025-03-10 09:30",views:487},{answers:76,forumName:"Imunologia da Galleria mellonella",lastTopicAuthor:"Maria Santos",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-26 15:20",name:"Papel dos hem\xF3citos na resposta imune de G. mellonella",topicAuthor:"Jo\xE3o Silva",topicDate:"2025-03-15 11:45",views:412},{answers:58,forumName:"Imunologia da Galleria mellonella",lastTopicAuthor:"Pedro Almeida",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-25 10:30",name:"Pept\xEDdeos antimicrobianos em Galleria mellonella",topicAuthor:"Luisa Ferreira",topicDate:"2025-03-12 14:20",views:329},{answers:84,forumName:"Imunologia da Galleria mellonella",lastTopicAuthor:"Sofia Rodrigues",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-27 09:15",name:"Compara\xE7\xE3o entre o sistema imune de G. mellonella e mam\xEDferos",topicAuthor:"Ricardo Costa",topicDate:"2025-03-18 16:40",views:456},{answers:63,forumName:"Imunologia da Galleria mellonella",lastTopicAuthor:"Carolina Mendes",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-26 13:50",name:"Processo de melaniza\xE7\xE3o em Galleria mellonella",topicAuthor:"Andr\xE9 Lima",topicDate:"2025-03-14 10:25",views:378},{answers:71,forumName:"Imunologia da Galleria mellonella",lastTopicAuthor:"Gabriel Santos",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-25 17:30",name:"Receptores toll-like em Galleria mellonella",topicAuthor:"Mariana Sousa",topicDate:"2025-03-16 09:55",views:402},{answers:89,forumName:"Imunologia da Galleria mellonella",lastTopicAuthor:"Beatriz Cardoso",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-27 11:40",name:"Resposta imune de G. mellonella a infec\xE7\xF5es bacterianas",topicAuthor:"Fernando Oliveira",topicDate:"2025-03-20 14:15",views:495},{answers:52,forumName:"Imunologia da Galleria mellonella",lastTopicAuthor:"Lucas Ferreira",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-26 10:20",name:"Fatores que influenciam a resposta imune de G. mellonella",topicAuthor:"Camila Rodrigues",topicDate:"2025-03-13 15:30",views:287},{answers:79,forumName:"Imunologia da Galleria mellonella",lastTopicAuthor:"Rafaela Nunes",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-25 16:45",name:"Uso de G. mellonella para estudos de efic\xE1cia antimicrobiana",topicAuthor:"Henrique Martins",topicDate:"2025-03-17 11:10",views:423},{answers:67,forumName:"Imunologia da Galleria mellonella",lastTopicAuthor:"Isabel Costa",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-26 14:30",name:"Resposta imune de G. mellonella a infec\xE7\xF5es virais",topicAuthor:"Gustavo Pereira",topicDate:"2025-03-19 09:40",views:356},{answers:85,forumName:"Imunologia da Galleria mellonella",lastTopicAuthor:"Daniel Oliveira",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-27 10:55",name:"Modula\xE7\xE3o da resposta imune em G. mellonella",topicAuthor:"Laura Almeida",topicDate:"2025-03-21 13:25",views:468},{answers:61,forumName:"Imunologia da Galleria mellonella",lastTopicAuthor:"Marcelo Santos",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-26 12:10",name:"Estudo de biomarcadores imunol\xF3gicos em G. mellonella",topicAuthor:"Juliana Costa",topicDate:"2025-03-18 15:50",views:342},{answers:73,forumName:"Imunologia da Galleria mellonella",lastTopicAuthor:"Renata Lima",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-25 14:40",name:"Imunidade inata vs. adaptativa em G. mellonella",topicAuthor:"Thiago Ferreira",topicDate:"2025-03-16 10:35",views:398},{answers:56,forumName:"Imunologia da Galleria mellonella",lastTopicAuthor:"Amanda Sousa",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-26 16:25",name:"Efeito do estresse na resposta imune de G. mellonella",topicAuthor:"Roberto Alves",topicDate:"2025-03-20 11:55",views:312},{answers:82,forumName:"Imunologia da Galleria mellonella",lastTopicAuthor:"Carla Rodrigues",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-27 09:45",name:"Aplica\xE7\xF5es da G. mellonella em estudos de imunotoxicologia",topicAuthor:"F\xE1bio Cardoso",topicDate:"2025-03-22 14:30",views:445}],"cria\xE7\xE3o-de-galleria-mellonella":[{answers:86,forumName:"Cria\xE7\xE3o de Galleria mellonella",lastTopicAuthor:"Pedro Alves",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-23 13:20",name:"Otimiza\xE7\xE3o de dietas artificiais para Galleria mellonella",topicAuthor:"Mariana Lima",topicDate:"2025-03-05 10:15",views:432},{answers:74,forumName:"Cria\xE7\xE3o de Galleria mellonella",lastTopicAuthor:"Carolina Mendes",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-21 15:45",name:"Controle de temperatura e umidade para o desenvolvimento larval",topicAuthor:"Rafael Oliveira",topicDate:"2025-03-08 09:30",views:378},{answers:93,forumName:"Cria\xE7\xE3o de Galleria mellonella",lastTopicAuthor:"Sofia Rodrigues",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-22 11:10",name:"M\xE9todos eficientes para coleta de ovos de Galleria mellonella",topicAuthor:"Andr\xE9 Lima",topicDate:"2025-03-10 14:25",views:467},{answers:65,forumName:"Cria\xE7\xE3o de Galleria mellonella",lastTopicAuthor:"Lucas Ferreira",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-20 16:30",name:"Preven\xE7\xE3o de contamina\xE7\xE3o por fungos em col\xF4nias de G. mellonella",topicAuthor:"Camila Costa",topicDate:"2025-03-12 11:20",views:345},{answers:81,forumName:"Cria\xE7\xE3o de Galleria mellonella",lastTopicAuthor:"Henrique Martins",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-22 09:45",name:"Tipos de recipientes para cria\xE7\xE3o de Galleria mellonella",topicAuthor:"Beatriz Alves",topicDate:"2025-03-07 13:50",views:412},{answers:59,forumName:"Cria\xE7\xE3o de Galleria mellonella",lastTopicAuthor:"Gustavo Pereira",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-19 14:15",name:"T\xE9cnicas de manejo para evitar fugas de larvas",topicAuthor:"Isabel Costa",topicDate:"2025-03-09 10:40",views:298},{answers:88,forumName:"Cria\xE7\xE3o de Galleria mellonella",lastTopicAuthor:"Daniel Oliveira",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-21 11:30",name:"Influ\xEAncia da dieta no tamanho e peso das larvas de G. mellonella",topicAuthor:"Marcelo Santos",topicDate:"2025-03-04 16:55",views:453},{answers:72,forumName:"Cria\xE7\xE3o de Galleria mellonella",lastTopicAuthor:"Renata Lima",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-18 13:40",name:"Padroniza\xE7\xE3o de larvas para uso em pesquisas microbiol\xF3gicas",topicAuthor:"Thiago Ferreira",topicDate:"2025-03-06 09:20",views:385},{answers:67,forumName:"Cria\xE7\xE3o de Galleria mellonella",lastTopicAuthor:"Amanda Sousa",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-17 15:25",name:"Ciclos de luz e escurid\xE3o na cria\xE7\xE3o de Galleria mellonella",topicAuthor:"Roberto Alves",topicDate:"2025-03-11 12:10",views:316},{answers:95,forumName:"Cria\xE7\xE3o de Galleria mellonella",lastTopicAuthor:"Juliana Costa",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-20 10:15",name:"Manejo de pupas para produ\xE7\xE3o eficiente de adultos",topicAuthor:"F\xE1bio Cardoso",topicDate:"2025-03-03 14:30",views:478},{answers:54,forumName:"Cria\xE7\xE3o de Galleria mellonella",lastTopicAuthor:"Carla Rodrigues",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-19 11:55",name:"Uso de cera de abelha na dieta artificial: pr\xF3s e contras",topicAuthor:"Gabriel Santos",topicDate:"2025-03-08 15:40",views:287},{answers:79,forumName:"Cria\xE7\xE3o de Galleria mellonella",lastTopicAuthor:"Laura Almeida",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-22 16:10",name:"Compara\xE7\xE3o entre m\xE9todos de cria\xE7\xE3o: natural vs. laborat\xF3rio",topicAuthor:"Rafaela Nunes",topicDate:"2025-03-05 11:35",views:419},{answers:61,forumName:"Cria\xE7\xE3o de Galleria mellonella",lastTopicAuthor:"Fernando Oliveira",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-21 09:25",name:"Protocolos de esteriliza\xE7\xE3o para manuten\xE7\xE3o de col\xF4nias saud\xE1veis",topicAuthor:"Mariana Sousa",topicDate:"2025-03-09 13:15",views:342},{answers:83,forumName:"Cria\xE7\xE3o de Galleria mellonella",lastTopicAuthor:"Ana Costa",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-23 10:45",name:"Fontes alternativas de prote\xEDna para dietas de Galleria mellonella",topicAuthor:"Jo\xE3o Ferreira",topicDate:"2025-03-07 15:30",views:437},{answers:69,forumName:"Cria\xE7\xE3o de Galleria mellonella",lastTopicAuthor:"Ricardo Costa",lastTopicAuthorAvatar:"https://picsum.photos/40/40",lastTopicDate:"2025-03-20 14:50",name:"Estrat\xE9gias para maximizar a produ\xE7\xE3o de ovos em G. mellonella",topicAuthor:"Carlos Silva",topicDate:"2025-03-10 11:05",views:368}]};function k(a,T){if(a&1&&p(0,"pgm-topic-info",2),a&2){let o=T.$implicit;r("sectionItem",o)}}function L(a,T){if(a&1&&(l(0,"pgm-forum-section",1),w(1,k,1,1,"pgm-topic-info",2,g),s()),a&2){let o=T.$implicit;r("forumSection",o),i(),C(o.items)}}var R=(()=>{class a{constructor(){this.forumslug=u(""),this.topicSections=u([{items:[],title:""}]),this.route=n(f),this.route.params.subscribe(o=>{let t=o.forumslug;this.topicSections()[0].items=F[t]||[],this.topicSections()[0].title=v(t)})}static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275cmp=d({type:a,selectors:[["pgm-topic-list"]],decls:3,vars:0,consts:[[1,"topic-list"],[3,"forumSection"],["section-item","",3,"sectionItem"]],template:function(t,e){t&1&&(l(0,"div",0),w(1,L,3,1,"pgm-forum-section",1,g),s()),t&2&&(i(),C(e.topicSections()))},dependencies:[I,b],styles:[".topic-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2rem;justify-content:flex-end}.topic-list__header[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2rem}@media (min-width: 992px){.topic-list__header[_ngcontent-%COMP%]{flex-direction:row;justify-content:space-between}}.topic-list[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center;font-size:2rem}@media (min-width: 768px){.topic-list[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.4rem}}@media (min-width: 1200px){.topic-list[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3.2rem}}@media (min-width: 992px){.topic-list[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:left}}.topic-list__button[_ngcontent-%COMP%]{align-self:flex-end}"],changeDetection:0})}}return a})();var ce=(()=>{class a{constructor(){this.forumSlug=u(""),this.router=n(_),this.title=u(""),this.route=n(f),this.route.params.subscribe(o=>{this.forumSlug.set(o.forumslug),this.title.set(v(this.forumSlug()))})}onCreateTopicClicked(){this.router.navigate(["comunidade","forum",this.forumSlug(),"novo"])}static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275cmp=d({type:a,selectors:[["pgm-community-forum"]],decls:7,vars:2,consts:[[1,"community-forum"],[3,"title","isTitleSticky"],[1,"community-forum__info"],[1,"community-forum__actions"],["variant","primary","loadingText","Carregando...","text","Criar t\xF3pico","iconLeft","add",1,"forum-list__button",3,"clicked"]],template:function(t,e){t&1&&(l(0,"div",0)(1,"pgm-forum-card",1)(2,"div",2)(3,"div",3)(4,"pgm-button",4),h("clicked",function(){return e.onCreateTopicClicked()}),s()()()(),l(5,"pgm-forum-card"),p(6,"pgm-topic-list"),s()()),t&2&&(i(),r("title",e.title())("isTitleSticky",!1))},dependencies:[M,R,O],styles:[".community-forum[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2rem}.community-forum__info[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end}.community-forum__actions[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;justify-content:center;color:#6c757d}@media (min-width: 768px){.community-forum__actions[_ngcontent-%COMP%]{flex-direction:row}}"],changeDetection:0})}}return a})();export{ce as CommunityForumComponent};
