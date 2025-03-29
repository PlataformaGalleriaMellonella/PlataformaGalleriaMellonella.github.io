import{a as ne,b as ae}from"./chunk-LK5QFO25.js";import{a as ie}from"./chunk-F7KRT44H.js";import{a as oe}from"./chunk-SKMPN7Q7.js";import{c as N,d as a,e as J,f as Z,j as K,k as Q,l as W,m as X,n as Y,p as ee,q as b,r as te}from"./chunk-5IURUPRO.js";import{a as re}from"./chunk-IIVPZIGE.js";import{a as A,i as U,j as B,n as H}from"./chunk-2HCALHZX.js";import{o as G}from"./chunk-QYI3YH3R.js";import{Cb as _,Db as w,F as f,Kb as m,Lb as P,Rb as j,Ta as i,Vb as M,Wb as x,Z as C,aa as k,ab as v,ca as E,da as u,j as y,ja as R,ka as q,nb as n,ob as $,pb as z,r as S,rb as D,ta as L,tb as I,u as c,ua as d,ub as F,vb as s,wa as V,wb as p,xb as g,yb as T}from"./chunk-VUK7EZK5.js";var me=new k("baseUrl"),se=(()=>{class r{constructor(t){this.baseUrl=t,this.http=u(A)}delete(t,o,e){return this.http.delete(`${this.baseUrl}/${t}`,{headers:e,params:o}).pipe(c(l=>l),f(this.handleError))}get(t,o,e){return this.http.get(`${this.baseUrl}/${t}`,{headers:e,params:o}).pipe(c(l=>l),f(this.handleError))}post(t,o,e){return this.http.post(`${this.baseUrl}/${t}`,o,{headers:e}).pipe(c(l=>l),f(this.handleError))}put(t,o,e){return this.http.put(`${this.baseUrl}/${t}`,o,{headers:e}).pipe(c(l=>l),f(this.handleError))}handleError(t){let o="Ocorreu um erro desconhecido";return t.error instanceof ErrorEvent?o=`Erro do cliente: ${t.error.message}`:o=`Erro do servidor: ${t.status} - ${t.message}`,console.error(o),S(()=>new Error(o))}static{this.\u0275fac=function(o){return new(o||r)(E(me))}}static{this.\u0275prov=C({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();var ue=ne.apiLocalizationUrl,le=(()=>{class r extends se{constructor(){super(ue)}getCity(t){return this.get(`estados/${t}/municipios?orderBy=nome`).pipe(c(o=>o.map(e=>({label:e.nome,value:e.id}))))}getStates(){return this.get("estados?orderBy=nome").pipe(c(t=>t.map(o=>({label:o.nome,value:o.id}))))}static{this.\u0275fac=function(o){return new(o||r)}}static{this.\u0275prov=C({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();function pe(r){return h=>{let t=h.parent;if(!t)return null;let o=t.get(r)?.value,e=h.value;return o===e?null:{passwordMismatch:!0}}}function he(r,h){if(r&1){let t=T();s(0,"div",3)(1,"label",4)(2,"input",5),_("change",function(e){R(t);let l=w();return q(l.onRadioChange(e))}),p(),g(3,"span",6),s(4,"span",7),m(5),p()()()}if(r&2){let t=h.$implicit,o=h.$index,e=w();i(),n("for","radio"+o),i(),n("id","radio"+o)("value",t.value)("checked",e.selectedValue()===t.value)("formControl",e.control())("required",e.required()),i(3),P(t.label)}}var ce=(()=>{class r{constructor(){this.control=d.required(),this.customClass=d(""),this.groupLabel=d.required(),this.isHorizontal=d(!1),this.options=d.required(),this.required=d(!1),this.selectedValue=d(""),this.selectedValueChange=L()}onRadioChange(t){let o=t.target;this.selectedValueChange.emit(o.value)}static{this.\u0275fac=function(o){return new(o||r)}}static{this.\u0275cmp=v({type:r,selectors:[["pgm-radio-group"]],inputs:{control:[1,"control"],customClass:[1,"customClass"],groupLabel:[1,"groupLabel"],isHorizontal:[1,"isHorizontal"],options:[1,"options"],required:[1,"required"],selectedValue:[1,"selectedValue"]},outputs:{selectedValueChange:"selectedValueChange"},decls:6,vars:5,consts:[[1,"radio-group"],[1,"radio-group__label"],[1,"radio-group__options"],[1,"radio-group__option"],[3,"for"],["type","radio",1,"radio-group__input",3,"change","id","value","checked","formControl","required"],[1,"radio-checkmark"],[1,"radio-label"]],template:function(o,e){o&1&&(s(0,"div",0)(1,"span",1),m(2),p(),s(3,"div",2),I(4,he,6,7,"div",3,D),p()()),o&2&&(z(e.customClass()),$("horizontal",e.isHorizontal()),i(2),P(e.groupLabel()),i(2),F(e.options()))},dependencies:[ee,N,Q,J,Y,b,W],styles:['.radio-group__label[_ngcontent-%COMP%]{font-size:1.6rem;line-height:2.4rem}@media (min-width: 768px){.radio-group__label[_ngcontent-%COMP%]{font-size:1.7rem;line-height:2.6rem}}@media (min-width: 1200px){.radio-group__label[_ngcontent-%COMP%]{font-size:1.8rem;line-height:2.7rem}}.radio-group[_ngcontent-%COMP%], .radio-group.horizontal__options[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.radio-group.horizontal[_ngcontent-%COMP%]   .radio-group__options[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;gap:2rem}.radio-group__option[_ngcontent-%COMP%]{display:flex;align-items:center;cursor:pointer}.radio-group[_ngcontent-%COMP%]   .radio-checkmark[_ngcontent-%COMP%]{position:relative;width:25px;height:25px;border:2px solid #dee2e6;border-radius:50%;transition:all .3s ease}.radio-group[_ngcontent-%COMP%]   .radio-checkmark[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#e9ecef}.radio-group[_ngcontent-%COMP%]:disabled ~ .radio-checkmark[_ngcontent-%COMP%]{cursor:not-allowed;background-color:#ced4da;border-color:#ced4da}.radio-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .radio-checkmark[_ngcontent-%COMP%]{background-color:#749483;border-color:#749483}.radio-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .radio-checkmark[_ngcontent-%COMP%]:after{position:absolute;top:50%;left:50%;width:10px;height:10px;content:"";background-color:#fff;border-radius:50%;transform:translate(-50%,-50%)}.radio-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;gap:1rem;align-items:center;cursor:pointer}.radio-group[_ngcontent-%COMP%]   .radio-label[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none}'],changeDetection:0})}}return r})();var fe=()=>["/acesso-comunidade","login"],Qe=(()=>{class r{constructor(){this.cities$=new y,this.formService=u(te),this.form=this.formService.createForm({city:{validators:[a.required]},confirmPassword:{validators:[pe("password"),a.required]},email:{validators:[a.required,a.email]},institution:{validators:[a.required]},lineOfResearch:{validators:[a.required]},name:{validators:[a.required,a.maxLength(150)]},password:{validators:[a.required,a.minLength(6)]},personType:{validators:[a.required],value:"professor"},state:{validators:[a.required]}}),this.isLoading=V(!1),this.personTypes=[{label:"Professor",value:"professor"},{label:"Estudante",value:"estudante"},{label:"Pesquisador",value:"pesquisador"},{label:"Outros",value:"outros"}],this.states$=new y,this.authService=u(ae),this.localizationService=u(le),this.router=u(U)}getControl(t){return this.form.get(t)}ngOnInit(){this.states$=this.localizationService.getStates()}onStateChange(t){this.cities$=this.localizationService.getCity(Number(t))}onSubmit(){if(this.form.valid){this.isLoading.set(!0);let{email:t,name:o}=this.form.getRawValue();this.authService.register(o,t).subscribe({error:e=>{console.error("Login failed:",e),this.isLoading.set(!1)},next:()=>{this.router.navigate(["comunidade"]),this.isLoading.set(!1)}})}}static{this.\u0275fac=function(o){return new(o||r)}}static{this.\u0275cmp=v({type:r,selectors:[["pgm-register"]],decls:24,vars:23,consts:[[1,"register"],[1,"register__container"],[1,"register__title"],[1,"register__message"],[1,"register__form",3,"ngSubmit","formGroup"],["groupLabel","Profiss\xE3o",3,"control","options","isHorizontal"],["label","Nome","type","text","placeholder","Digite seu nome completo","name","nome",3,"control"],["label","Email","type","email","placeholder","Digite seu email","name","email",3,"control"],["name","estado","placeholder","Selecione o Estado","label","Estado",3,"selectedValueChange","control","options"],["placeholder","Selecione a cidade","label","Cidade",3,"control","options"],["label","Institui\xE7\xE3o","type","text","placeholder","Digite a institui\xE7\xE3o","name","institui\xE7\xE3o",3,"control"],["label","Linha de pesquisa","type","text","placeholder","Digite a linha de pesquisa","name","linha de pesquisa",3,"control"],["label","Senha","type","password","placeholder","Digite sua senha","name","senha",3,"control"],["label","Repita a senha","type","password","placeholder","Repita a senha","name","senha",3,"control"],["text","Cadastrar","loadingText","Cadastrando...","type","submit",3,"loading","disabled","block"],[1,"register__links"],[3,"routerLink"]],template:function(o,e){o&1&&(s(0,"div",0)(1,"div",1)(2,"h1",2),m(3,"Crie sua conta"),p(),s(4,"p",3),m(5," Preencha os campos abaixo para criar sua conta. "),p(),s(6,"form",4),_("ngSubmit",function(){return e.onSubmit()}),g(7,"pgm-radio-group",5)(8,"pgm-text-input",6)(9,"pgm-text-input",7),s(10,"pgm-dropdown",8),M(11,"async"),_("selectedValueChange",function(de){return e.onStateChange(de)}),p(),g(12,"pgm-dropdown",9),M(13,"async"),g(14,"pgm-text-input",10)(15,"pgm-text-input",11)(16,"pgm-text-input",12)(17,"pgm-text-input",13)(18,"pgm-button",14),s(19,"div",15)(20,"span"),m(21,"J\xE1 tem uma conta?"),p(),s(22,"a",16),m(23,"Fa\xE7a login"),p()()()()()),o&2&&(i(6),n("formGroup",e.form),i(),n("control",e.getControl("personType"))("options",e.personTypes)("isHorizontal",!0),i(),n("control",e.getControl("name")),i(),n("control",e.getControl("email")),i(),n("control",e.getControl("state"))("options",x(11,18,e.states$)),i(2),n("control",e.getControl("city"))("options",x(13,20,e.cities$)),i(2),n("control",e.getControl("institution")),i(),n("control",e.getControl("lineOfResearch")),i(),n("control",e.getControl("password")),i(),n("control",e.getControl("confirmPassword")),i(),n("loading",e.isLoading())("disabled",e.form.invalid)("block",!0),i(4),n("routerLink",j(22,fe)))},dependencies:[b,K,Z,X,H,B,re,ie,oe,ce,G],styles:[".register[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#5d786a,#749483)}.register__container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2rem;width:95vw;background:#fff;border-radius:.5rem;padding:3rem}@media (min-width: 768px){.register__container[_ngcontent-%COMP%]{padding:4.5rem}}@media (min-width: 1200px){.register__container[_ngcontent-%COMP%]{padding:6rem}}@media (min-width: 768px){.register__container[_ngcontent-%COMP%]{width:80vw}}@media (min-width: 1200px){.register__container[_ngcontent-%COMP%]{width:35vw}}.register__title[_ngcontent-%COMP%]{color:#749483;text-align:center;font-size:2.5rem}@media (min-width: 768px){.register__title[_ngcontent-%COMP%]{font-size:3rem}}@media (min-width: 1200px){.register__title[_ngcontent-%COMP%]{font-size:4rem}}.register__message[_ngcontent-%COMP%]{text-align:center}.register__form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2rem}.register__links[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;align-items:center;justify-content:center}@media (min-width: 992px){.register__links[_ngcontent-%COMP%]{align-items:center}}.register__links[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#343a40}"],changeDetection:0})}}return r})();export{Qe as RegisterComponent};
