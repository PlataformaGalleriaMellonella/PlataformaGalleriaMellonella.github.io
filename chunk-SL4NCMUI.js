import{a as M,b as T}from"./chunk-PO32ME73.js";import{i as x}from"./chunk-545MIDZG.js";import{$a as _,Aa as o,Ja as m,Va as s,X as h,_a as f,ab as n,bb as a,cb as p,eb as b,la as y,lb as d,ma as l,mb as u,xa as g,ya as v}from"./chunk-ESY7XYHL.js";var P=(()=>{class t{constructor(){this.title=l.required(),this.subtitle=l.required(),this.primaryButtonText=l.required(),this.imageSrc=l.required(),this.imageAlt=l(),this.primaryClicked=y()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["pgm-collaboration"]],inputs:{title:[1,"title"],subtitle:[1,"subtitle"],primaryButtonText:[1,"primaryButtonText"],imageSrc:[1,"imageSrc"],imageAlt:[1,"imageAlt"]},outputs:{primaryClicked:"primaryClicked"},decls:7,vars:5,consts:[[1,"collaboration"],[1,"collaboration__content"],[3,"innerHTML"],["variant","cta",3,"click","text"],[1,"collaboration__preview"],[3,"src","alt"]],template:function(i,e){i&1&&(n(0,"section",0)(1,"div",1),p(2,"h2",2)(3,"p",2),n(4,"pgm-button",3),b("click",function(){return e.primaryClicked.emit()}),a()(),n(5,"div",4),p(6,"img",5),a()()),i&2&&(o(2),s("innerHTML",e.title(),g),o(),s("innerHTML",e.subtitle(),g),o(),s("text",e.primaryButtonText()),o(2),s("src",e.imageSrc(),v)("alt",e.imageAlt()))},dependencies:[M],styles:[".collaboration[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:4rem;padding:6rem 4rem;background:#fff}@media (min-width: 768px){.collaboration[_ngcontent-%COMP%]{grid-template-columns:1fr}}.collaboration__content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.5rem;margin-bottom:1.5rem;color:#212529}.collaboration__content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;color:#6c757d;margin-bottom:2rem;line-height:1.6}"]})}}return t})();var E=(t,c)=>c.number;function B(t,c){if(t&1&&(n(0,"div",1)(1,"span",2),d(2),a(),n(3,"span",3),d(4),a()()),t&2){let r=c.$implicit;o(2),u(r.number),o(2),u(r.label)}}var S=(()=>{class t{constructor(){this.stats=l([])}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["pgm-stats"]],inputs:{stats:[1,"stats"]},decls:3,vars:0,consts:[[1,"stats"],[1,"stats__item"],[1,"stats__number"],[1,"stats__label"]],template:function(i,e){i&1&&(n(0,"section",0),f(1,B,5,2,"div",1,E),a()),i&2&&(o(),_(e.stats()))},styles:[".stats[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:2rem;padding:4rem 2rem;background:#fff;box-shadow:0 -10px 20px #0000001a}.stats__item[_ngcontent-%COMP%]{text-align:center}.stats__number[_ngcontent-%COMP%]{display:block;font-size:2.5rem;font-weight:700;color:#91aa9d;margin-bottom:.5rem}.stats__label[_ngcontent-%COMP%]{color:#6c757d;font-size:1.1rem}"]})}}return t})();var A=(t,c)=>c.title;function D(t,c){if(t&1&&(n(0,"div",3)(1,"span",4),d(2),a(),n(3,"h3"),d(4),a(),p(5,"p",5),a()),t&2){let r=c.$implicit;o(2),u(r.icon),o(2),u(r.title),o(),s("innerHTML",r.description,g)}}var O=(()=>{class t{constructor(){this.features=l([])}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["pgm-features"]],inputs:{features:[1,"features"]},decls:6,vars:0,consts:[[1,"features"],[1,"features__title"],[1,"features__grid"],[1,"features__item"],[1,"material-icons"],[3,"innerHTML"]],template:function(i,e){i&1&&(n(0,"section",0)(1,"h2",1),d(2,"Por que participar?"),a(),n(3,"div",2),f(4,D,6,3,"div",3,A),a()()),i&2&&(o(4),_(e.features()))},styles:[".features[_ngcontent-%COMP%]{padding:6rem 2rem;background:#adb5bd}.features__title[_ngcontent-%COMP%]{text-align:center;font-size:2.5rem;margin-bottom:4rem;color:#212529}.features__grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:2rem;max-width:1200px;margin:0 auto}.features__item[_ngcontent-%COMP%]{padding:2rem;background:#fff;border-radius:12px;box-shadow:0 4px 12px #0000000d;transition:transform .3s ease}.features__item[_ngcontent-%COMP%]:hover{transform:translateY(-5px)}.features__item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:2.5rem;color:#91aa9d;margin-bottom:1rem}.features__item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:1rem;color:#212529}.features__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#6c757d;line-height:1.6}"]})}}return t})();var W=(()=>{class t{constructor(){this.router=h(x),this.title="Conecte-se \xE0 maior comunidade de pesquisadores de <span class='text-italic'>Galleria mellonella</span>",this.subtitle=`Uma plataforma exclusiva para compartilhar descobertas, metodologias e avan\xE7ar a pesquisa cient\xEDfica com
  <span class='text-italic'>Galleria mellonella</span>`,this.features=[{icon:"science",title:"Base de Dados Exclusiva",description:"Acesse dados sobre gen\xE9tica, fisiologia, comportamento e patog\xEAnese"},{icon:"biotech",title:"Protocolos Validados",description:"Biblioteca de m\xE9todos e protocolos experimentais compartilhados pela comunidade"},{icon:"school",title:"F\xF3rum Especializado",description:"Discuss\xF5es t\xE9cnicas e trocas de experi\xEAncias com especialistas"},{icon:"library_books",title:"Biblioteca Virtual",description:'Acervo de artigos, teses e publica\xE7\xF5es sobre <span class="text-italic">Galleria mellonella</span>'}],this.stats=[{number:"2.5K+",label:"Protocolos Compartilhados"},{number:"150+",label:"Pesquisadores Ativos"},{number:"45+",label:"Pa\xEDses Representados"}],this.collaboration={title:"Colabora\xE7\xE3o em Tempo Real",subtitle:`Conecte-se com pesquisadores, compartilhe protocolos e participe de
        discuss\xF5es t\xE9cnicas em um ambiente dedicado \xE0 pesquisa com <span class="text-italic">Galleria mellonella</span>`,primaryButtonText:"Junte-se \xE0 Comunidade",imageSrc:"https://picsum.photos/1920/400",imageAlt:"Ilustra\xE7\xE3o cient\xEDfica"}}openLogin(){this.router.navigate(["/login"])}openRegister(){this.router.navigate(["/cadastro"])}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["pgm-community"]],decls:4,vars:10,consts:[["imageSrc","https://picsum.photos/1024/400","imageAlt","Ilustra\xE7\xE3o cient\xEDfica","primaryButtonText","Comece agora",3,"secondaryButtonText","title","subtitle"],[3,"stats"],[3,"features"],[3,"primaryClicked","title","subtitle","imageSrc","imageAlt","primaryButtonText"]],template:function(i,e){i&1&&(p(0,"pgm-hero",0)(1,"pgm-stats",1)(2,"pgm-features",2),n(3,"pgm-collaboration",3),b("primaryClicked",function(){return e.openRegister()}),a()),i&2&&(s("secondaryButtonText","Acessar Conta")("title",e.title)("subtitle",e.subtitle),o(),s("stats",e.stats),o(),s("features",e.features),o(),s("title",e.collaboration.title)("subtitle",e.collaboration.subtitle)("imageSrc",e.collaboration.imageSrc)("imageAlt",e.collaboration.imageAlt)("primaryButtonText",e.collaboration.primaryButtonText))},dependencies:[T,S,O,P],encapsulation:2,changeDetection:0})}}return t})();export{W as CommunityComponent};
