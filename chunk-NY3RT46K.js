import{a as L,b as me}from"./chunk-ITKXRQSL.js";import{a as ee,b as te}from"./chunk-43JGI5KF.js";import{c as ne,d as p,e as ie,f as re,i as ae,j as se,k as le,l as de,m as pe,p as ce,q as R}from"./chunk-XZ2RWXKV.js";import{a as oe}from"./chunk-EDBSUU2S.js";import{a as q,i as W,j as X,m as Y}from"./chunk-VYMLQGA6.js";import{m as K,n as Q}from"./chunk-4KSGDMYY.js";import{$ as A,Ab as u,Bb as f,F as x,Ib as m,Jb as C,Kb as J,Mb as Z,Pb as z,Qb as j,Sa as G,Ta as i,Y as M,ba as y,bb as v,ca as _,gb as F,ia as k,j as $,ja as S,ob as d,pb as b,qb as U,r as H,rb as I,sa as E,sb as N,ta as l,u as g,ua as B,ub as O,va as D,vb as P,wb as r,xb as a,yb as h,zb as V}from"./chunk-J2RPSVDH.js";function ue(n){return c=>{let e=c.parent;if(!e)return null;let t=e.get(n)?.value,o=c.value;return t===o?null:{passwordMismatch:!0}}}var Ce=(n,c)=>c.value;function ve(n,c){if(n&1&&(r(0,"label",1),m(1),a()),n&2){let e=f();i(),C(e.label())}}function be(n,c){if(n&1){let e=V();r(0,"li",7),u("click",function(){let o=k(e).$implicit,s=f(2);return S(s.selectOption(o))}),m(1),a()}if(n&2){let e=c.$implicit,t=f(2);b("selected",e.value===t.control().value),i(),J(" ",e.label," ")}}function we(n,c){if(n&1&&(r(0,"ul",4),O(1,be,2,3,"li",6,Ce),a()),n&2){let e=f();i(),P(e.options())}}function xe(n,c){if(n&1&&(r(0,"small",5),m(1),a()),n&2){let e=c.$implicit;i(),C(e)}}var ge=(()=>{class n{constructor(){this.formService=_(L),this.elementRef=_(B),this.options=l.required(),this.control=l.required(),this.label=l(""),this.name=l(""),this.placeholder=l("Selecione uma op\xE7\xE3o"),this.disabled=l(!1),this.isOpen=D(!1),this.selectedValueChange=E()}onDocumentClick(e){this.elementRef.nativeElement.contains(e.target)||this.isOpen.set(!1)}toggleDropdown(e){e.stopPropagation(),this.disabled()||(this.isOpen.update(t=>!t),this.validateDropdown())}validateDropdown(){this.control().hasValidator(p.required)&&!this.control().value&&(this.control().markAsTouched(),this.control().setErrors({required:!0}))}onFocus(){this.validateDropdown()}selectOption(e){this.control().setValue(e.value),this.selectedValueChange.emit(e.value),this.isOpen.set(!1)}get selectedLabel(){let e=this.options()?.find(t=>t.value===this.control().value);return e?e.label:this.placeholder()}getErrors(){return this.formService.getFieldErrors(this.name(),this.control())}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=v({type:n,selectors:[["pgm-dropdown"]],hostBindings:function(t,o){t&1&&u("click",function(w){return o.onDocumentClick(w)},!1,G)},inputs:{options:[1,"options"],control:[1,"control"],label:[1,"label"],name:[1,"name"],placeholder:[1,"placeholder"],disabled:[1,"disabled"]},outputs:{selectedValueChange:"selectedValueChange"},decls:9,vars:7,consts:[[1,"dropdown"],[1,"dropdown__label"],[1,"dropdown__header",3,"focus","click"],[1,"dropdown__arrow"],[1,"dropdown__menu"],[1,"dropdown__error"],[3,"selected"],[3,"click"]],template:function(t,o){t&1&&(r(0,"div",0),F(1,ve,2,1,"label",1),r(2,"div",2),u("focus",function(){return o.onFocus()})("click",function(w){return o.toggleDropdown(w)}),r(3,"span"),m(4),a(),h(5,"span",3),a(),F(6,we,3,0,"ul",4),O(7,xe,2,1,"small",5,N),a()),t&2&&(b("disabled",o.disabled()),i(),I(o.label()?1:-1),i(3),C(o.selectedLabel),i(),b("open",o.isOpen()),i(),I(o.isOpen()?6:-1),i(),P(o.getErrors()))},styles:[".dropdown[_ngcontent-%COMP%]{position:relative;width:100%;color:#6c757d}.dropdown__label[_ngcontent-%COMP%]{display:block;margin-bottom:.5rem;font-weight:500}.dropdown__header[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:.75rem;border:1px solid #dee2e6;border-radius:4px;background-color:#fff;cursor:pointer;transition:all .3s ease}.dropdown__header[_ngcontent-%COMP%]:hover{border-color:#749483}.dropdown__arrow[_ngcontent-%COMP%]{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #749483;transition:transform .3s ease}.dropdown__arrow.open[_ngcontent-%COMP%]{transform:rotate(180deg)}.dropdown__menu[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;right:0;z-index:1000;margin-top:.25rem;padding:.5rem 0;background-color:#fff;border:1px solid #749483;border-radius:4px;box-shadow:0 2px 10px #0000001a;max-height:200px;overflow-y:auto}.dropdown__menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem .75rem;cursor:pointer}.dropdown__menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, .dropdown__menu[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]{background-color:#f8f9fa}.dropdown.disabled[_ngcontent-%COMP%]{opacity:.6;pointer-events:none}.dropdown.disabled[_ngcontent-%COMP%]   .dropdown__header[_ngcontent-%COMP%]{background-color:#f8f9fa}.dropdown__error[_ngcontent-%COMP%]{font-size:.875rem;color:#dc3545}"],changeDetection:0})}}return n})();var Oe=new A("baseUrl"),_e=(()=>{class n{constructor(e,t){this.http=e,this.baseUrl=t}get(e,t,o){return this.http.get(`${this.baseUrl}/${e}`,{params:t,headers:o}).pipe(g(s=>s),x(this.handleError))}post(e,t,o){return this.http.post(`${this.baseUrl}/${e}`,t,{headers:o}).pipe(g(s=>s),x(this.handleError))}put(e,t,o){return this.http.put(`${this.baseUrl}/${e}`,t,{headers:o}).pipe(g(s=>s),x(this.handleError))}delete(e,t,o){return this.http.delete(`${this.baseUrl}/${e}`,{params:t,headers:o}).pipe(g(s=>s),x(this.handleError))}handleError(e){let t="Ocorreu um erro desconhecido";return e.error instanceof ErrorEvent?t=`Erro do cliente: ${e.error.message}`:t=`Erro do servidor: ${e.status} - ${e.message}`,console.error(t),H(()=>new Error(t))}static{this.\u0275fac=function(t){return new(t||n)(y(q),y(Oe))}}static{this.\u0275prov=M({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var Pe=ee.apiLocalizationUrl,he=(()=>{class n extends _e{constructor(e){super(e,Pe),this.httpClient=e}getStates(){return this.get("estados?orderBy=nome").pipe(g(e=>e.map(t=>({label:t.nome,value:t.id}))))}getCity(e){return this.get(`estados/${e}/municipios?orderBy=nome`).pipe(g(t=>t.map(o=>({label:o.nome,value:o.id}))))}static{this.\u0275fac=function(t){return new(t||n)(y(q))}}static{this.\u0275prov=M({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var ke=(n,c)=>c.label;function Se(n,c){if(n&1){let e=V();r(0,"div",3)(1,"label")(2,"input",4),u("change",function(o){k(e);let s=f();return S(s.onRadioChange(o))}),a(),h(3,"span",5),r(4,"span",6),m(5),a()()()}if(n&2){let e=c.$implicit,t=f();i(2),d("value",e.value)("checked",t.selectedValue()===e.value)("formControl",t.control())("required",t.required()),i(3),C(e.label)}}var fe=(()=>{class n{constructor(){this.options=l.required(),this.control=l.required(),this.selectedValue=l(""),this.required=l(!1),this.customClass=l(""),this.selectedValueChange=E(),this.groupLabel=l.required(),this.isHorizontal=l(!1)}onRadioChange(e){let t=e.target;this.selectedValueChange.emit(t.value)}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=v({type:n,selectors:[["pgm-radio-group"]],inputs:{options:[1,"options"],control:[1,"control"],selectedValue:[1,"selectedValue"],required:[1,"required"],customClass:[1,"customClass"],groupLabel:[1,"groupLabel"],isHorizontal:[1,"isHorizontal"]},outputs:{selectedValueChange:"selectedValueChange"},decls:6,vars:5,consts:[[1,"radio-group"],[1,"radio-group__label"],[1,"radio-group__options"],[1,"radio-group__option"],["type","radio",1,"radio-group__input",3,"change","value","checked","formControl","required"],[1,"radio-checkmark"],[1,"radio-label"]],template:function(t,o){t&1&&(r(0,"div",0)(1,"label",1),m(2),a(),r(3,"div",2),O(4,Se,6,5,"div",3,ke),a()()),t&2&&(U(o.customClass()),b("horizontal",o.isHorizontal()),i(2),C(o.groupLabel()),i(2),P(o.options()))},dependencies:[ce,ne,se,ie,pe,R,le],styles:['.radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem}.radio-group.horizontal[_ngcontent-%COMP%]   .radio-group__options[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:1rem}.radio-group__label[_ngcontent-%COMP%]{font-weight:500;color:#6c757d}.radio-group__options[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem}.radio-group__option[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.25rem;cursor:pointer}.radio-group__option[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]{position:absolute;opacity:0;cursor:pointer}.radio-group__option[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked ~ .radio-checkmark[_ngcontent-%COMP%]{background-color:#749483;border-color:#749483}.radio-group__option[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked ~ .radio-checkmark[_ngcontent-%COMP%]:after{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:10px;height:10px;border-radius:50%;background-color:#fff}.radio-group__option[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:disabled ~ .radio-checkmark[_ngcontent-%COMP%]{background-color:#ced4da;border-color:#ced4da;cursor:not-allowed}.radio-group__option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;color:#6c757d}.radio-group__option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .radio-checkmark[_ngcontent-%COMP%]{position:relative;height:25px;width:25px;border-radius:50%;border:2px solid #ced4da;transition:all .3s ease}.radio-group__option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .radio-checkmark[_ngcontent-%COMP%]:hover{background-color:#dee2e6}.radio-group__option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .radio-label[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none}'],changeDetection:0})}}return n})();var Ee=()=>["/comunidade","login"],ht=(()=>{class n{constructor(){this.formService=_(L),this.localizationService=_(he),this.authService=_(te),this.router=_(W),this.states$=new $,this.cities$=new $,this.personTypes=[{label:"Professor",value:"professor"},{label:"Estudante",value:"estudante"},{label:"Pesquisador",value:"pesquisador"},{label:"Outros",value:"outros"}],this.isLoading=D(!1),this.form=this.formService.createForm({personType:{value:"professor",validators:[p.required]},name:{validators:[p.required,p.maxLength(150)]},state:{validators:[p.required]},city:{validators:[p.required]},institution:{validators:[p.required]},lineOfResearch:{validators:[p.required]},email:{validators:[p.required,p.email]},password:{validators:[p.required,p.minLength(6)]},confirmPassword:{validators:[ue("password"),p.required]}})}ngOnInit(){this.states$=this.localizationService.getStates()}onStateChange(e){this.cities$=this.localizationService.getCity(Number(e))}getControl(e){return this.form.get(e)}onSubmit(){if(this.form.valid){this.isLoading.set(!0);let{name:e,email:t}=this.form.getRawValue();this.authService.register(e,t).subscribe({next:()=>{this.router.navigate(["comunidade"]),this.isLoading.set(!1)},error:o=>{console.error("Login failed:",o),this.isLoading.set(!1)}})}}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=v({type:n,selectors:[["pgm-register"]],decls:24,vars:23,consts:[[1,"register"],[1,"register__container"],[1,"register__title"],[1,"register__message"],[1,"register__form",3,"ngSubmit","formGroup"],["groupLabel","Profiss\xE3o",3,"control","options","isHorizontal"],["label","Nome","type","text","placeholder","Digite seu nome completo","name","nome",3,"control"],["label","Email","type","email","placeholder","Digite seu email","name","email",3,"control"],["name","estado","placeholder","Selecione o Estado","label","Estado",3,"selectedValueChange","control","options"],["placeholder","Selecione a cidade","label","Cidade",3,"control","options"],["label","Institui\xE7\xE3o","type","text","placeholder","Digite a institui\xE7\xE3o","name","institui\xE7\xE3o",3,"control"],["label","Linha de pesquisa","type","text","placeholder","Digite a linha de pesquisa","name","linha de pesquisa",3,"control"],["label","Senha","type","password","placeholder","Digite sua senha","name","senha",3,"control"],["label","Repita a senha","type","password","placeholder","Repita a senha","name","senha",3,"control"],["text","Cadastrar","loadingText","Cadastrando...","type","submit",3,"loading","disabled","block"],[1,"register__links"],[3,"routerLink"]],template:function(t,o){t&1&&(r(0,"div",0)(1,"div",1)(2,"h1",2),m(3,"Crie sua conta"),a(),r(4,"p",3),m(5,"Preencha os campos abaixo para criar sua conta."),a(),r(6,"form",4),u("ngSubmit",function(){return o.onSubmit()}),h(7,"pgm-radio-group",5)(8,"pgm-text-input",6)(9,"pgm-text-input",7),r(10,"pgm-dropdown",8),z(11,"async"),u("selectedValueChange",function(w){return o.onStateChange(w)}),a(),h(12,"pgm-dropdown",9),z(13,"async"),h(14,"pgm-text-input",10)(15,"pgm-text-input",11)(16,"pgm-text-input",12)(17,"pgm-text-input",13)(18,"pgm-button",14),r(19,"div",15)(20,"span"),m(21,"J\xE1 tem uma conta?"),a(),r(22,"a",16),m(23,"Fa\xE7a login"),a()()()()()),t&2&&(i(6),d("formGroup",o.form),i(),d("control",o.getControl("personType"))("options",o.personTypes)("isHorizontal",!0),i(),d("control",o.getControl("name")),i(),d("control",o.getControl("email")),i(),d("control",o.getControl("state"))("options",j(11,18,o.states$)),i(2),d("control",o.getControl("city"))("options",j(13,20,o.cities$)),i(2),d("control",o.getControl("institution")),i(),d("control",o.getControl("lineOfResearch")),i(),d("control",o.getControl("password")),i(),d("control",o.getControl("confirmPassword")),i(),d("loading",o.isLoading())("disabled",o.form.invalid)("block",!0),i(4),d("routerLink",Z(22,Ee)))},dependencies:[R,ae,re,de,Y,X,oe,me,ge,Q,K,fe],styles:[".register[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:2rem;padding:2rem;height:100%;background:linear-gradient(135deg,#465c50,#749483)}.register__container[_ngcontent-%COMP%]{width:95%;padding:1rem;border-radius:8px;background:#fff;box-shadow:0 2px 8px #0000001a}@media (min-width: 768px){.register__container[_ngcontent-%COMP%]{padding:2rem}}@media (min-width: 992px){.register__container[_ngcontent-%COMP%]{padding:3rem;width:40rem}}.register__title[_ngcontent-%COMP%]{text-align:center;color:#749483}.register__message[_ngcontent-%COMP%]{margin-bottom:2rem;text-align:center;font-size:1.25rem;color:#6c757d}.register__form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.register__links[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:.5rem;margin-top:1.5rem}@media (min-width: 992px){.register__links[_ngcontent-%COMP%]{flex-direction:row;display:flex;justify-content:center;align-items:center}}.register__links[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#6c757d}"],changeDetection:0})}}return n})();export{ht as RegisterComponent};
