import{a as k,b as P}from"./chunk-6SA45IDW.js";import{a as T}from"./chunk-6IJRFTY6.js";import{i as M}from"./chunk-YZFDS22F.js";import{$a as o,Aa as n,Ja as c,Ua as s,X as h,Za as f,_a as _,ab as a,bb as p,db as u,kb as d,la as v,lb as g,ma as l,mb as S,xa as y,ya as x}from"./chunk-BW4FWTPU.js";var D=(()=>{class e{constructor(){this.title=l.required(),this.subtitle=l.required(),this.primaryButtonText=l.required(),this.imageSrc=l.required(),this.imageAlt=l(),this.primaryClicked=v()}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["pgm-collaboration"]],inputs:{title:[1,"title"],subtitle:[1,"subtitle"],primaryButtonText:[1,"primaryButtonText"],imageSrc:[1,"imageSrc"],imageAlt:[1,"imageAlt"]},outputs:{primaryClicked:"primaryClicked"},decls:8,vars:5,consts:[[1,"collaboration"],[1,"collaboration__content"],[3,"innerHTML"],["variant","cta",3,"click","text"],[1,"collaboration__preview"],[3,"src","alt"]],template:function(i,t){i&1&&(o(0,"section",0)(1,"div",1),p(2,"h2",2)(3,"p",2),o(4,"div")(5,"pgm-button",3),u("click",function(){return t.primaryClicked.emit()}),a()()(),o(6,"div",4),p(7,"img",5),a()()),i&2&&(n(2),s("innerHTML",t.title(),y),n(),s("innerHTML",t.subtitle(),y),n(2),s("text",t.primaryButtonText()),n(2),s("src",t.imageSrc(),x)("alt",t.imageAlt()))},dependencies:[T],styles:[".collaboration[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2rem;padding:4rem 2rem;background:#fff}@media (min-width: 992px){.collaboration[_ngcontent-%COMP%]{display:flex;flex-direction:row;padding:6rem 4rem}}.collaboration__content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.5rem}.collaboration__content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.5rem;color:#212529}.collaboration__content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;color:#6c757d;line-height:1.6}"],changeDetection:0})}}return e})();var E=(e,m)=>m.number;function q(e,m){if(e&1&&(o(0,"div",3)(1,"span",4),d(2),a(),o(3,"span",5),d(4),a()()),e&2){let r=m.$implicit;n(2),g(r.number),n(2),g(r.label)}}var O=(()=>{class e{constructor(){this.title=`Junte-se \xE0 nossa comunidade e contribua para aumentar o impacto da pesquisa com Galleria mellonella. Sua
    participa\xE7\xE3o \xE9 essencial para crescermos juntos!`,this.stats=l([])}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["pgm-stats"]],inputs:{stats:[1,"stats"]},decls:6,vars:1,consts:[[1,"stats"],[1,"stats__message"],[1,"stats__grid"],[1,"stats__item"],[1,"stats__number"],[1,"stats__label"]],template:function(i,t){i&1&&(o(0,"section",0)(1,"h2",1),d(2),a(),o(3,"div",2),f(4,q,5,2,"div",3,E),a()()),i&2&&(n(2),S(" ",t.title," "),n(2),_(t.stats()))},styles:[".stats[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4rem;padding:6rem 2rem;text-align:center;background:#fff}@media (min-width: 992px){.stats[_ngcontent-%COMP%]{padding-inline:12rem}}.stats__message[_ngcontent-%COMP%]{font-weight:700;font-size:1.5rem;color:#91aa9d}.stats__grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:2rem}.stats__number[_ngcontent-%COMP%]{display:block;font-size:2.5rem;font-weight:700;color:#ffb800}.stats__label[_ngcontent-%COMP%]{color:#6c757d}"],changeDetection:0})}}return e})();var A=(e,m)=>m.title;function w(e,m){if(e&1&&p(0,"pgm-info-card",3),e&2){let r=m.$implicit;s("info",r)}}var B=(()=>{class e{constructor(){this.title="Por que participar?",this.features=l.required()}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["pgm-features"]],inputs:{features:[1,"features"]},decls:6,vars:1,consts:[[1,"features"],[1,"features__title"],[1,"features__grid"],[3,"info"]],template:function(i,t){i&1&&(o(0,"section",0)(1,"h2",1),d(2),a(),o(3,"div",2),f(4,w,1,1,"pgm-info-card",3,A),a()()),i&2&&(n(2),g(t.title),n(2),_(t.features()))},dependencies:[P],styles:[".features[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4rem;padding:2rem;background:#ced4da}@media (min-width: 992px){.features[_ngcontent-%COMP%]{padding:6rem}}.features__title[_ngcontent-%COMP%]{text-align:center;font-size:2.5rem;color:#212529}.features__grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:2rem}"],changeDetection:0})}}return e})();var ne=(()=>{class e{constructor(){this.router=h(M),this.title="Conecte-se \xE0 maior comunidade de pesquisadores de <span class='text-italic'>Galleria mellonella</span>",this.subtitle="Participe da maior plataforma dedicada \xE0 Galleria mellonella! Colabore com pesquisadores, compartilhe descobertas e impulsione sua pesquisa cient\xEDfica agora mesmo.",this.stats=[{number:"0",label:"Protocolos Compartilhados"},{number:"0",label:"Pesquisadores Ativos"},{number:"0",label:"Pa\xEDses Representados"}],this.features=[{icon:"science",title:"Base de Dados Exclusiva",description:"Acesse dados sobre gen\xE9tica, fisiologia, comportamento e patog\xEAnese"},{icon:"biotech",title:"Protocolos Validados",description:"Biblioteca de m\xE9todos e protocolos experimentais compartilhados pela comunidade"},{icon:"school",title:"F\xF3rum Especializado",description:"Discuss\xF5es t\xE9cnicas e trocas de experi\xEAncias com especialistas"},{icon:"library_books",title:"Biblioteca Virtual",description:'Acervo de artigos, teses e publica\xE7\xF5es sobre <span class="text-italic">Galleria mellonella</span>'}],this.collaboration={title:"Colabora\xE7\xE3o em Tempo Real",subtitle:`Conecte-se com pesquisadores, compartilhe protocolos e participe de
        discuss\xF5es t\xE9cnicas em um ambiente dedicado \xE0 pesquisa com <span class="text-italic">Galleria mellonella</span>`,primaryButtonText:"Junte-se \xE0 Comunidade",imageSrc:"https://picsum.photos/1920/400",imageAlt:"Ilustra\xE7\xE3o cient\xEDfica"}}openLogin(){this.router.navigate(["comunidade","login-cadastro"])}openRegister(){this.router.navigate(["comunidade","cadastro"])}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["pgm-community"]],decls:4,vars:10,consts:[["imageSrc","https://picsum.photos/1024/400","imageAlt","Ilustra\xE7\xE3o cient\xEDfica","primaryButtonText","Comece agora",3,"primaryClicked","secondaryClicked","secondaryButtonText","title","subtitle"],[3,"stats"],[3,"features"],[3,"primaryClicked","title","subtitle","imageSrc","imageAlt","primaryButtonText"]],template:function(i,t){i&1&&(o(0,"pgm-hero",0),u("primaryClicked",function(){return t.openRegister()})("secondaryClicked",function(){return t.openLogin()}),a(),p(1,"pgm-stats",1)(2,"pgm-features",2),o(3,"pgm-collaboration",3),u("primaryClicked",function(){return t.openRegister()}),a()),i&2&&(s("secondaryButtonText","Acessar Conta")("title",t.title)("subtitle",t.subtitle),n(),s("stats",t.stats),n(),s("features",t.features),n(),s("title",t.collaboration.title)("subtitle",t.collaboration.subtitle)("imageSrc",t.collaboration.imageSrc)("imageAlt",t.collaboration.imageAlt)("primaryButtonText",t.collaboration.primaryButtonText))},dependencies:[k,O,B,D],encapsulation:2,changeDetection:0})}}return e})();export{ne as CommunityComponent};
