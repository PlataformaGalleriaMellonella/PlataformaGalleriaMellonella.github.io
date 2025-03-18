import{a as R,b as le,c as pe,d as ce}from"./chunk-O44NVU26.js";import{c as Y,d as p,e as ee,f as te,i as oe,j as ne,k as ie,l as re,m as ae,p as se,q}from"./chunk-JWXTUTRM.js";import{a as de}from"./chunk-ASWK4CMF.js";import{a as K,i as Q,j as W,n as X}from"./chunk-R2JMLJDB.js";import{n as Z}from"./chunk-2M7DCVOA.js";import{Cb as g,Db as f,F as x,Lb as m,Mb as C,Nb as N,Pb as J,Sb as F,Ta as G,Tb as I,Ua as i,Z as M,aa as B,bb as v,ca as H,da as u,gb as $,j as T,ja as y,ka as k,ob as l,pb as w,qb as U,r as j,rb as z,sb as D,ta as S,tb as O,u as _,ua as d,ub as P,va as A,vb as r,wa as E,wb as a,xb as h,yb as V}from"./chunk-EB7LXIP5.js";var fe=new B("baseUrl"),me=(()=>{class n{constructor(e){this.baseUrl=e,this.http=u(K)}delete(e,o,t){return this.http.delete(`${this.baseUrl}/${e}`,{headers:t,params:o}).pipe(_(s=>s),x(this.handleError))}get(e,o,t){return this.http.get(`${this.baseUrl}/${e}`,{headers:t,params:o}).pipe(_(s=>s),x(this.handleError))}post(e,o,t){return this.http.post(`${this.baseUrl}/${e}`,o,{headers:t}).pipe(_(s=>s),x(this.handleError))}put(e,o,t){return this.http.put(`${this.baseUrl}/${e}`,o,{headers:t}).pipe(_(s=>s),x(this.handleError))}handleError(e){let o="Ocorreu um erro desconhecido";return e.error instanceof ErrorEvent?o=`Erro do cliente: ${e.error.message}`:o=`Erro do servidor: ${e.status} - ${e.message}`,console.error(o),j(()=>new Error(o))}static{this.\u0275fac=function(o){return new(o||n)(H(fe))}}static{this.\u0275prov=M({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var Ce=pe.apiLocalizationUrl,ue=(()=>{class n extends me{constructor(){super(Ce)}getCity(e){return this.get(`estados/${e}/municipios?orderBy=nome`).pipe(_(o=>o.map(t=>({label:t.nome,value:t.id}))))}getStates(){return this.get("estados?orderBy=nome").pipe(_(e=>e.map(o=>({label:o.nome,value:o.id}))))}static{this.\u0275fac=function(o){return new(o||n)}}static{this.\u0275prov=M({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function ge(n){return c=>{let e=c.parent;if(!e)return null;let o=e.get(n)?.value,t=c.value;return o===t?null:{passwordMismatch:!0}}}var ve=(n,c)=>c.value;function we(n,c){if(n&1&&(r(0,"span",1),m(1),a()),n&2){let e=f();i(),C(e.label())}}function be(n,c){if(n&1){let e=V();r(0,"li")(1,"button",6),g("click",function(){let t=y(e).$implicit,s=f(2);return k(s.selectOption(t))}),m(2),a()()}if(n&2){let e=c.$implicit,o=f(2);i(),w("selected",e.value===o.control().value),i(),N(" ",e.label," ")}}function xe(n,c){if(n&1&&(r(0,"ul",4),O(1,be,3,3,"li",null,ve),a()),n&2){let e=f();i(),P(e.options())}}function Oe(n,c){if(n&1&&(r(0,"small",5),m(1),a()),n&2){let e=c.$implicit;i(),C(e)}}var _e=(()=>{class n{constructor(){this.control=d.required(),this.disabled=d(!1),this.isOpen=E(!1),this.label=d(""),this.name=d(""),this.options=d.required(),this.placeholder=d("Selecione uma op\xE7\xE3o"),this.selectedValueChange=S(),this.elementRef=u(A),this.formService=u(R)}get selectedLabel(){let e=this.options()?.find(o=>o.value===this.control().value);return e?e.label:this.placeholder()}getErrors(){return this.formService.getFieldErrors(this.name(),this.control())}onDocumentClick(e){this.elementRef.nativeElement.contains(e.target)||this.isOpen.set(!1)}onFocus(){this.validateDropdown()}selectOption(e){this.control().setValue(e.value),this.selectedValueChange.emit(e.value),this.isOpen.set(!1)}toggleDropdown(e){e.stopPropagation(),this.disabled()||(this.isOpen.update(o=>!o),this.validateDropdown())}validateDropdown(){this.control().hasValidator(p.required)&&!this.control().value&&(this.control().markAsTouched(),this.control().setErrors({required:!0}))}static{this.\u0275fac=function(o){return new(o||n)}}static{this.\u0275cmp=v({type:n,selectors:[["pgm-dropdown"]],hostBindings:function(o,t){o&1&&g("click",function(b){return t.onDocumentClick(b)},!1,G)},inputs:{control:[1,"control"],disabled:[1,"disabled"],label:[1,"label"],name:[1,"name"],options:[1,"options"],placeholder:[1,"placeholder"]},outputs:{selectedValueChange:"selectedValueChange"},decls:9,vars:7,consts:[[1,"dropdown"],[1,"dropdown__label"],[1,"dropdown__header",3,"focus","click"],[1,"dropdown__arrow"],[1,"dropdown__menu"],["tabindex","0",1,"dropdown__error"],[1,"dropdown__menu-item",3,"click"]],template:function(o,t){o&1&&(r(0,"div",0),$(1,we,2,1,"span",1),r(2,"button",2),g("focus",function(){return t.onFocus()})("click",function(b){return t.toggleDropdown(b)}),r(3,"span"),m(4),a(),h(5,"span",3),a(),$(6,xe,3,0,"ul",4),O(7,Oe,2,1,"small",5,D),a()),o&2&&(w("disabled",t.disabled()),i(),z(t.label()?1:-1),i(3),C(t.selectedLabel),i(),w("open",t.isOpen()),i(),z(t.isOpen()?6:-1),i(),P(t.getErrors()))},styles:[".dropdown__label[_ngcontent-%COMP%]{font-size:1.6rem;line-height:2.4rem}@media (min-width: 768px){.dropdown__label[_ngcontent-%COMP%]{font-size:1.7rem;line-height:2.6rem}}@media (min-width: 1200px){.dropdown__label[_ngcontent-%COMP%]{font-size:1.8rem;line-height:2.7rem}}.dropdown__header[_ngcontent-%COMP%], .dropdown__menu-item[_ngcontent-%COMP%]{padding:1rem}@media (min-width: 768px){.dropdown__header[_ngcontent-%COMP%], .dropdown__menu-item[_ngcontent-%COMP%]{padding:1.2rem}}@media (min-width: 1200px){.dropdown__header[_ngcontent-%COMP%], .dropdown__menu-item[_ngcontent-%COMP%]{padding:1.4rem}}.dropdown__menu[_ngcontent-%COMP%]{border-radius:.5rem;box-shadow:0 2px 4px #00000026}.dropdown[_ngcontent-%COMP%]{position:relative;width:100%;color:#6c757d}.dropdown__label[_ngcontent-%COMP%]{display:block;margin-bottom:.5rem}.dropdown__header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%;color:#495057;background-color:#fff;border:1px solid #dee2e6;border-radius:.5rem;transition:all .3s ease}.dropdown__header[_ngcontent-%COMP%]:hover{border-color:#749483}.dropdown__arrow[_ngcontent-%COMP%]{width:0;height:0;border-top:5px solid #749483;border-right:5px solid transparent;border-left:5px solid transparent;transition:transform .3s ease}.dropdown__arrow.open[_ngcontent-%COMP%]{transform:rotate(180deg)}.dropdown__menu[_ngcontent-%COMP%]{position:absolute;top:100%;right:0;left:0;z-index:1000;max-height:200px;padding:0;margin-top:.25rem;overflow-y:auto;background-color:#fff}.dropdown__menu-item[_ngcontent-%COMP%]{width:100%;text-align:left}.dropdown__menu-item[_ngcontent-%COMP%]:hover, .dropdown__menu-item.selected[_ngcontent-%COMP%]{color:#fff;background-color:#749483}.dropdown.disabled[_ngcontent-%COMP%]{pointer-events:none;opacity:.6}.dropdown.disabled[_ngcontent-%COMP%]   .dropdown__header[_ngcontent-%COMP%]{background-color:#f8f9fa}.dropdown__error[_ngcontent-%COMP%]{color:#dc3545}"],changeDetection:0})}}return n})();function Me(n,c){if(n&1){let e=V();r(0,"div",3)(1,"label",4)(2,"input",5),g("change",function(t){y(e);let s=f();return k(s.onRadioChange(t))}),a(),h(3,"span",6),r(4,"span",7),m(5),a()()()}if(n&2){let e=c.$implicit,o=c.$index,t=f();i(),l("for","radio"+o),i(),l("id","radio"+o)("value",e.value)("checked",t.selectedValue()===e.value)("formControl",t.control())("required",t.required()),i(3),C(e.label)}}var he=(()=>{class n{constructor(){this.control=d.required(),this.customClass=d(""),this.groupLabel=d.required(),this.isHorizontal=d(!1),this.options=d.required(),this.required=d(!1),this.selectedValue=d(""),this.selectedValueChange=S()}onRadioChange(e){let o=e.target;this.selectedValueChange.emit(o.value)}static{this.\u0275fac=function(o){return new(o||n)}}static{this.\u0275cmp=v({type:n,selectors:[["pgm-radio-group"]],inputs:{control:[1,"control"],customClass:[1,"customClass"],groupLabel:[1,"groupLabel"],isHorizontal:[1,"isHorizontal"],options:[1,"options"],required:[1,"required"],selectedValue:[1,"selectedValue"]},outputs:{selectedValueChange:"selectedValueChange"},decls:6,vars:5,consts:[[1,"radio-group"],[1,"radio-group__label"],[1,"radio-group__options"],[1,"radio-group__option"],[3,"for"],["type","radio",1,"radio-group__input",3,"change","id","value","checked","formControl","required"],[1,"radio-checkmark"],[1,"radio-label"]],template:function(o,t){o&1&&(r(0,"div",0)(1,"span",1),m(2),a(),r(3,"div",2),O(4,Me,6,7,"div",3,D),a()()),o&2&&(U(t.customClass()),w("horizontal",t.isHorizontal()),i(2),C(t.groupLabel()),i(2),P(t.options()))},dependencies:[se,Y,ne,ee,ae,q,ie],styles:['.radio-group__label[_ngcontent-%COMP%]{font-size:1.6rem;line-height:2.4rem}@media (min-width: 768px){.radio-group__label[_ngcontent-%COMP%]{font-size:1.7rem;line-height:2.6rem}}@media (min-width: 1200px){.radio-group__label[_ngcontent-%COMP%]{font-size:1.8rem;line-height:2.7rem}}.radio-group[_ngcontent-%COMP%], .radio-group.horizontal__options[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.radio-group.horizontal[_ngcontent-%COMP%]   .radio-group__options[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;gap:2rem}.radio-group__option[_ngcontent-%COMP%]{display:flex;align-items:center;cursor:pointer}.radio-group[_ngcontent-%COMP%]   .radio-checkmark[_ngcontent-%COMP%]{position:relative;width:25px;height:25px;border:2px solid #dee2e6;border-radius:50%;transition:all .3s ease}.radio-group[_ngcontent-%COMP%]   .radio-checkmark[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#e9ecef}.radio-group[_ngcontent-%COMP%]:disabled ~ .radio-checkmark[_ngcontent-%COMP%]{cursor:not-allowed;background-color:#ced4da;border-color:#ced4da}.radio-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .radio-checkmark[_ngcontent-%COMP%]{background-color:#749483;border-color:#749483}.radio-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .radio-checkmark[_ngcontent-%COMP%]:after{position:absolute;top:50%;left:50%;width:10px;height:10px;content:"";background-color:#fff;border-radius:50%;transform:translate(-50%,-50%)}.radio-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;gap:1rem;align-items:center;cursor:pointer}.radio-group[_ngcontent-%COMP%]   .radio-label[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none}'],changeDetection:0})}}return n})();var ye=()=>["/acesso-comunidade","login"],ut=(()=>{class n{constructor(){this.cities$=new T,this.formService=u(R),this.form=this.formService.createForm({city:{validators:[p.required]},confirmPassword:{validators:[ge("password"),p.required]},email:{validators:[p.required,p.email]},institution:{validators:[p.required]},lineOfResearch:{validators:[p.required]},name:{validators:[p.required,p.maxLength(150)]},password:{validators:[p.required,p.minLength(6)]},personType:{validators:[p.required],value:"professor"},state:{validators:[p.required]}}),this.isLoading=E(!1),this.personTypes=[{label:"Professor",value:"professor"},{label:"Estudante",value:"estudante"},{label:"Pesquisador",value:"pesquisador"},{label:"Outros",value:"outros"}],this.states$=new T,this.authService=u(ce),this.localizationService=u(ue),this.router=u(Q)}getControl(e){return this.form.get(e)}ngOnInit(){this.states$=this.localizationService.getStates()}onStateChange(e){this.cities$=this.localizationService.getCity(Number(e))}onSubmit(){if(this.form.valid){this.isLoading.set(!0);let{email:e,name:o}=this.form.getRawValue();this.authService.register(o,e).subscribe({error:t=>{console.error("Login failed:",t),this.isLoading.set(!1)},next:()=>{this.router.navigate(["comunidade"]),this.isLoading.set(!1)}})}}static{this.\u0275fac=function(o){return new(o||n)}}static{this.\u0275cmp=v({type:n,selectors:[["pgm-register"]],decls:24,vars:23,consts:[[1,"register"],[1,"register__container"],[1,"register__title"],[1,"register__message"],[1,"register__form",3,"ngSubmit","formGroup"],["groupLabel","Profiss\xE3o",3,"control","options","isHorizontal"],["label","Nome","type","text","placeholder","Digite seu nome completo","name","nome",3,"control"],["label","Email","type","email","placeholder","Digite seu email","name","email",3,"control"],["name","estado","placeholder","Selecione o Estado","label","Estado",3,"selectedValueChange","control","options"],["placeholder","Selecione a cidade","label","Cidade",3,"control","options"],["label","Institui\xE7\xE3o","type","text","placeholder","Digite a institui\xE7\xE3o","name","institui\xE7\xE3o",3,"control"],["label","Linha de pesquisa","type","text","placeholder","Digite a linha de pesquisa","name","linha de pesquisa",3,"control"],["label","Senha","type","password","placeholder","Digite sua senha","name","senha",3,"control"],["label","Repita a senha","type","password","placeholder","Repita a senha","name","senha",3,"control"],["text","Cadastrar","loadingText","Cadastrando...","type","submit",3,"loading","disabled","block"],[1,"register__links"],[3,"routerLink"]],template:function(o,t){o&1&&(r(0,"div",0)(1,"div",1)(2,"h1",2),m(3,"Crie sua conta"),a(),r(4,"p",3),m(5," Preencha os campos abaixo para criar sua conta. "),a(),r(6,"form",4),g("ngSubmit",function(){return t.onSubmit()}),h(7,"pgm-radio-group",5)(8,"pgm-text-input",6)(9,"pgm-text-input",7),r(10,"pgm-dropdown",8),F(11,"async"),g("selectedValueChange",function(b){return t.onStateChange(b)}),a(),h(12,"pgm-dropdown",9),F(13,"async"),h(14,"pgm-text-input",10)(15,"pgm-text-input",11)(16,"pgm-text-input",12)(17,"pgm-text-input",13)(18,"pgm-button",14),r(19,"div",15)(20,"span"),m(21,"J\xE1 tem uma conta?"),a(),r(22,"a",16),m(23,"Fa\xE7a login"),a()()()()()),o&2&&(i(6),l("formGroup",t.form),i(),l("control",t.getControl("personType"))("options",t.personTypes)("isHorizontal",!0),i(),l("control",t.getControl("name")),i(),l("control",t.getControl("email")),i(),l("control",t.getControl("state"))("options",I(11,18,t.states$)),i(2),l("control",t.getControl("city"))("options",I(13,20,t.cities$)),i(2),l("control",t.getControl("institution")),i(),l("control",t.getControl("lineOfResearch")),i(),l("control",t.getControl("password")),i(),l("control",t.getControl("confirmPassword")),i(),l("loading",t.isLoading())("disabled",t.form.invalid)("block",!0),i(4),l("routerLink",J(22,ye)))},dependencies:[q,oe,te,re,X,W,de,_e,le,he,Z],styles:[".register[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#5d786a,#749483)}.register__container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2rem;width:95vw;background:#fff;border-radius:.5rem;padding:3rem}@media (min-width: 768px){.register__container[_ngcontent-%COMP%]{padding:4.5rem}}@media (min-width: 1200px){.register__container[_ngcontent-%COMP%]{padding:6rem}}@media (min-width: 768px){.register__container[_ngcontent-%COMP%]{width:80vw}}@media (min-width: 1200px){.register__container[_ngcontent-%COMP%]{width:35vw}}.register__title[_ngcontent-%COMP%]{color:#749483;text-align:center;font-size:2.5rem}@media (min-width: 768px){.register__title[_ngcontent-%COMP%]{font-size:3rem}}@media (min-width: 1200px){.register__title[_ngcontent-%COMP%]{font-size:4rem}}.register__message[_ngcontent-%COMP%]{text-align:center}.register__form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2rem}.register__links[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;align-items:center;justify-content:center}@media (min-width: 992px){.register__links[_ngcontent-%COMP%]{align-items:center}}.register__links[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#495057}"],changeDetection:0})}}return n})();export{ut as RegisterComponent};
