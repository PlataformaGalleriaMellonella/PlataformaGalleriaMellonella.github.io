import{b as G}from"./chunk-LK5QFO25.js";import{a as V}from"./chunk-SKMPN7Q7.js";import{b as F,d as p,e as E,f as L,j as q,l as D,m as R,o as T,p as j,q as _,r as f}from"./chunk-5IURUPRO.js";import{a as B}from"./chunk-IIVPZIGE.js";import{g as P,i as S,j as O,n as w}from"./chunk-2HCALHZX.js";import"./chunk-QYI3YH3R.js";import{Cb as u,Kb as s,Lb as k,Rb as C,Ta as o,ab as h,da as m,nb as c,rb as v,ta as b,tb as y,ua as l,ub as M,vb as r,wa as x,wb as a,xb as g}from"./chunk-VUK7EZK5.js";function $(i,N){if(i&1&&(r(0,"small",4),s(1),a()),i&2){let t=N.$implicit;o(),k(t)}}var I=(()=>{class i{constructor(){this.checked=l(!1),this.checkedChange=b(),this.control=l.required(),this.customClass=l(""),this.indeterminate=l(!1),this.label=l.required(),this.name=l(""),this.required=l(!1),this.value=l("",{transform:t=>t.trim()}),this.formService=m(f)}getErrors(){return this.formService.getFieldErrors(this.name(),this.control())}onCheckboxChange(t){let n=t.target;this.checkedChange.emit(n.checked)}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275cmp=h({type:i,selectors:[["pgm-checkbox"]],inputs:{checked:[1,"checked"],control:[1,"control"],customClass:[1,"customClass"],indeterminate:[1,"indeterminate"],label:[1,"label"],name:[1,"name"],required:[1,"required"],value:[1,"value"]},outputs:{checkedChange:"checkedChange"},decls:7,vars:7,consts:[[1,"checkbox"],["id","checkbox","type","checkbox",1,"checkbox__input",3,"change","formControl","checked","required","name","value","indeterminate"],[1,"checkbox__checkmark"],["for","checkbox",1,"checkbox__label"],[1,"checkbox__error"]],template:function(n,e){n&1&&(r(0,"label",0)(1,"input",1),u("change",function(z){return e.onCheckboxChange(z)}),a(),g(2,"span",2),r(3,"label",3),s(4),a()(),y(5,$,2,1,"small",4,v)),n&2&&(o(),c("formControl",e.control())("checked",e.checked())("required",e.required())("name",e.name())("value",e.value())("indeterminate",e.indeterminate()),o(3),k(e.label()),o(),M(e.getErrors()))},dependencies:[_,F,E,T,D,j],styles:['.checkbox[_ngcontent-%COMP%]{display:flex;align-items:center;cursor:pointer;-webkit-user-select:none;user-select:none}.checkbox__input[_ngcontent-%COMP%]{position:absolute;width:0;height:0;cursor:pointer;opacity:0}.checkbox__checkmark[_ngcontent-%COMP%]{position:relative;display:inline-block;width:22px;height:22px;background-color:#e9ecef;border-radius:.5rem;transition:all .3s ease}.checkbox__checkmark[_ngcontent-%COMP%]:after{position:absolute;top:5px;left:9px;display:none;width:5px;height:10px;content:"";border:solid #fff;border-width:0 3px 3px 0;transform:rotate(45deg)}.checkbox[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%] ~ .checkmark[_ngcontent-%COMP%]{background-color:#ced4da}.checkbox__input[_ngcontent-%COMP%]:checked ~ .checkbox__checkmark[_ngcontent-%COMP%]{background-color:#749483}.checkbox__input[_ngcontent-%COMP%]:checked ~ .checkbox__checkmark[_ngcontent-%COMP%]:after{display:block}.checkbox__label[_ngcontent-%COMP%]{margin-left:.5rem;line-height:1.5rem;cursor:pointer}.checkbox__error[_ngcontent-%COMP%]{color:#dc3545}'],changeDetection:0})}}return i})();var H=()=>["/acesso-comunidade","esqueci-senha"],J=()=>["/acesso-comunidade","cadastro"],de=(()=>{class i{constructor(){this.isLoading=x(!1),this.formService=m(f),this.loginForm=this.formService.createForm({email:{validators:[p.required,p.email]},password:{validators:[p.required,p.minLength(6)]},remember:{value:!1}}),this.activatedRoute=m(P),this.authService=m(G),this.router=m(S)}getControl(t){return this.loginForm.get(t)}getErrors(t){let n=this.loginForm.get(t);return this.formService.getFieldErrors(t,n)}onSubmit(){if(this.loginForm.valid){this.isLoading.set(!0);let{email:t,password:n}=this.loginForm.getRawValue(),e=this.activatedRoute.snapshot.queryParams;this.authService.login(t,n).subscribe({error:d=>{console.error("Login failed:",d),this.isLoading.set(!1)},next:()=>{let d=e.returnUrl||"/comunidade";this.router.navigateByUrl(d),this.isLoading.set(!1)}})}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275cmp=h({type:i,selectors:[["pgm-login"]],decls:19,vars:11,consts:[[1,"login"],[1,"login__container"],[1,"login__title"],[1,"login__message"],[1,"login__form",3,"ngSubmit","formGroup"],["label","Email","type","email","placeholder","Digite seu email","name","email",3,"control"],["label","Senha","type","password","placeholder","Digite sua senha","name","senha",3,"control"],["label","Lembrar de mim",3,"control"],[1,"login__links"],[1,"login__forgot-password",3,"routerLink"],["text","Entrar","loadingText","Entrando...","type","submit",3,"loading","disabled","block"],[1,"login__register"],[3,"routerLink"]],template:function(n,e){n&1&&(r(0,"div",0)(1,"div",1)(2,"h1",2),s(3,"Bem-vindo de volta!"),a(),r(4,"p",3),s(5,"Fa\xE7a login para acessar a plataforma."),a(),r(6,"form",4),u("ngSubmit",function(){return e.onSubmit()}),g(7,"pgm-text-input",5)(8,"pgm-text-input",6)(9,"pgm-checkbox",7),r(10,"div",8)(11,"a",9),s(12," Esqueci minha senha "),a()(),g(13,"pgm-button",10),a(),r(14,"div",11)(15,"span"),s(16,"N\xE3o tem uma conta?"),a(),r(17,"a",12),s(18,"Cadastre-se"),a()()()()),n&2&&(o(6),c("formGroup",e.loginForm),o(),c("control",e.getControl("email")),o(),c("control",e.getControl("password")),o(),c("control",e.getControl("remember")),o(2),c("routerLink",C(9,H)),o(2),c("loading",e.isLoading())("disabled",e.loginForm.invalid)("block",!0),o(4),c("routerLink",C(10,J)))},dependencies:[_,q,L,R,w,O,B,V,I],styles:[".login[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;background:linear-gradient(135deg,#5d786a,#749483)}.login__container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2rem;width:95vw;background-color:#fff;border-radius:.5rem;padding:3rem}@media (min-width: 768px){.login__container[_ngcontent-%COMP%]{padding:4.5rem}}@media (min-width: 1200px){.login__container[_ngcontent-%COMP%]{padding:6rem}}@media (min-width: 768px){.login__container[_ngcontent-%COMP%]{width:80vw}}@media (min-width: 1200px){.login__container[_ngcontent-%COMP%]{width:35vw}}.login__title[_ngcontent-%COMP%]{color:#749483;text-align:center;font-size:2.5rem}@media (min-width: 768px){.login__title[_ngcontent-%COMP%]{font-size:3rem}}@media (min-width: 1200px){.login__title[_ngcontent-%COMP%]{font-size:4rem}}.login__message[_ngcontent-%COMP%]{text-align:center}.login__form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2rem}.login__links[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end}.login__register[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2rem;align-items:center;justify-content:center}.login__register[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#343a40}"],changeDetection:0})}}return i})();export{de as LoginComponent};
