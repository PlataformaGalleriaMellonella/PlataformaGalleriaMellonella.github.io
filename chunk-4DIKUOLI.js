import{a as f,b as B}from"./chunk-NDIF5RGO.js";import{b as E,d as p,e as L,f as q,i as D,k as R,l as T,n as j,p as V,q as _}from"./chunk-J3WJAXKX.js";import{b as G}from"./chunk-64CNB3DW.js";import{a as F}from"./chunk-CYCCL62D.js";import{e as P,g as O,h as S,k as w}from"./chunk-7HTR6D5M.js";import"./chunk-MFPMUZJE.js";import{Ha as o,Qa as h,aa as m,bb as c,fb as v,gb as y,hb as M,ib as r,jb as a,kb as g,mb as u,qa as b,ra as l,ta as x,ub as s,vb as k,yb as C}from"./chunk-TSE6CILM.js";function $(i,N){if(i&1&&(r(0,"small",4),s(1),a()),i&2){let t=N.$implicit;o(),k(t)}}var I=(()=>{class i{constructor(){this.formService=m(f),this.checked=l(!1),this.label=l.required(),this.value=l("",{transform:t=>t.trim()}),this.indeterminate=l(!1),this.required=l(!1),this.name=l(""),this.customClass=l(""),this.control=l.required(),this.checkedChange=b()}onCheckboxChange(t){let n=t.target;this.checkedChange.emit(n.checked)}getErrors(){return this.formService.getFieldErrors(this.name(),this.control())}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275cmp=h({type:i,selectors:[["pgm-checkbox"]],inputs:{checked:[1,"checked"],label:[1,"label"],value:[1,"value"],indeterminate:[1,"indeterminate"],required:[1,"required"],name:[1,"name"],customClass:[1,"customClass"],control:[1,"control"]},outputs:{checkedChange:"checkedChange"},decls:7,vars:7,consts:[[1,"checkbox"],["id","checkbox","type","checkbox",1,"checkbox__input",3,"change","formControl","checked","required","name","value","indeterminate"],[1,"checkbox__checkmark"],["for","checkbox",1,"checkbox__label"],[1,"checkbox__error"]],template:function(n,e){n&1&&(r(0,"label",0)(1,"input",1),u("change",function(z){return e.onCheckboxChange(z)}),a(),g(2,"span",2),r(3,"label",3),s(4),a()(),y(5,$,2,1,"small",4,v)),n&2&&(o(),c("formControl",e.control())("checked",e.checked())("required",e.required())("name",e.name())("value",e.value())("indeterminate",e.indeterminate()),o(3),k(e.label()),o(),M(e.getErrors()))},dependencies:[_,E,L,j,R,V],styles:['.checkbox[_ngcontent-%COMP%]{display:flex;align-items:center;cursor:pointer;-webkit-user-select:none;user-select:none}.checkbox__input[_ngcontent-%COMP%]{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkbox__checkmark[_ngcontent-%COMP%]{display:inline-block;position:relative;height:22px;width:22px;background-color:#e9ecef;border-radius:4px;transition:all .3s ease}.checkbox__checkmark[_ngcontent-%COMP%]:after{content:"";position:absolute;display:none;left:9px;top:5px;width:5px;height:10px;border:solid #ffffff;border-width:0 3px 3px 0;transform:rotate(45deg)}.checkbox[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%] ~ .checkmark[_ngcontent-%COMP%]{background-color:#ced4da}.checkbox__input[_ngcontent-%COMP%]:checked ~ .checkbox__checkmark[_ngcontent-%COMP%]{background-color:#749483}.checkbox__input[_ngcontent-%COMP%]:checked ~ .checkbox__checkmark[_ngcontent-%COMP%]:after{display:block}.checkbox__label[_ngcontent-%COMP%]{margin-left:.5rem;line-height:1.5rem;cursor:pointer;color:#6c757d}.checkbox__error[_ngcontent-%COMP%]{font-size:.875rem;color:#dc3545}'],changeDetection:0})}}return i})();var H=()=>["/comunidade","esqueci-senha"],J=()=>["/comunidade","cadastro"],de=(()=>{class i{constructor(){this.activatedRoute=m(P),this.formService=m(f),this.authService=m(G),this.router=m(O),this.isLoading=x(!1),this.loginForm=this.formService.createForm({email:{validators:[p.required,p.email]},password:{validators:[p.required,p.minLength(6)]},remember:{value:!1}})}getControl(t){return this.loginForm.get(t)}getErrors(t){let n=this.loginForm.get(t);return this.formService.getFieldErrors(t,n)}onSubmit(){if(this.loginForm.valid){this.isLoading.set(!0);let{email:t,password:n}=this.loginForm.getRawValue(),e=this.activatedRoute.snapshot.queryParams;this.authService.login(t,n).subscribe({next:()=>{let d=e.returnUrl||"/comunidade/home";this.router.navigateByUrl(d),this.isLoading.set(!1)},error:d=>{console.error("Login failed:",d),this.isLoading.set(!1)}})}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275cmp=h({type:i,selectors:[["app-login"]],decls:19,vars:11,consts:[[1,"login"],[1,"login__container"],[1,"login__title"],[1,"login__message"],[1,"login__form",3,"ngSubmit","formGroup"],["label","Email","type","email","placeholder","Digite seu email","name","email",3,"control"],["label","Senha","type","password","placeholder","Digite sua senha","name","senha",3,"control"],["label","Lembrar de mim",3,"control"],[1,"login__links"],[1,"login__forgot-password",3,"routerLink"],["text","Entrar","loadingText","Entrando...","type","submit",3,"loading","disabled","block"],[1,"login__register"],[3,"routerLink"]],template:function(n,e){n&1&&(r(0,"div",0)(1,"div",1)(2,"h1",2),s(3,"Bem-vindo de volta!"),a(),r(4,"p",3),s(5,"Fa\xE7a login para acessar a plataforma."),a(),r(6,"form",4),u("ngSubmit",function(){return e.onSubmit()}),g(7,"pgm-text-input",5)(8,"pgm-text-input",6)(9,"pgm-checkbox",7),r(10,"div",8)(11,"a",9),s(12," Esqueci minha senha "),a()(),g(13,"pgm-button",10),a(),r(14,"div",11)(15,"span"),s(16,"N\xE3o tem uma conta?"),a(),r(17,"a",12),s(18,"Cadastre-se"),a()()()()),n&2&&(o(6),c("formGroup",e.loginForm),o(),c("control",e.getControl("email")),o(),c("control",e.getControl("password")),o(),c("control",e.getControl("remember")),o(2),c("routerLink",C(9,H)),o(2),c("loading",e.isLoading())("disabled",e.loginForm.invalid)("block",!0),o(4),c("routerLink",C(10,J)))},dependencies:[_,D,q,T,w,S,F,B,I],styles:[".login[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:2rem;height:100%;padding:2rem;background:linear-gradient(135deg,#465c50,#749483)}.login__container[_ngcontent-%COMP%]{width:95%;padding:1rem;border-radius:8px;background:#fff;box-shadow:0 2px 8px #0000001a}@media (min-width: 768px){.login__container[_ngcontent-%COMP%]{padding:2rem}}@media (min-width: 992px){.login__container[_ngcontent-%COMP%]{padding:3rem;width:40rem}}.login__title[_ngcontent-%COMP%]{text-align:center;color:#749483}.login__message[_ngcontent-%COMP%]{margin-bottom:2rem;text-align:center;font-size:1.25rem;color:#6c757d}.login__form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.login__links[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center}.login__links[_ngcontent-%COMP%]   .login__forgot-password[_ngcontent-%COMP%]{color:#749483;font-size:.875rem;font-weight:700}.login__links[_ngcontent-%COMP%]   .login__forgot-password[_ngcontent-%COMP%]:hover{color:#5d786a;transition:color .3s ease-in-out}.login__register[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:.5rem;margin-top:1.5rem}@media (min-width: 992px){.login__register[_ngcontent-%COMP%]{flex-direction:row;display:flex;justify-content:center;align-items:center}}.login__register[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#6c757d}"],changeDetection:0})}}return i})();export{de as LoginComponent};
