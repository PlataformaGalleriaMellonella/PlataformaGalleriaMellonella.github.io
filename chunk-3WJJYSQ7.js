import{a as xe}from"./chunk-W6IGE5KL.js";import{a as le,i as Se,j as Ie,m as Oe}from"./chunk-545MIDZG.js";import{$a as oe,Aa as p,Da as Q,Ea as a,Ja as Ae,Ka as ee,La as f,Ma as V,Oa as Ee,P as k,Q as G,Qa as Fe,R,S as X,U as v,Va as te,Wa as ne,X as y,Ya as we,Za as ie,_a as re,a as u,aa as Y,ab as d,b as c,bb as l,cb as se,da as Me,eb as w,h as Ce,ia as F,k as Ve,lb as h,mb as ae,na as J,oa as C,ob as T,p as De,v as be,wb as S,xb as g}from"./chunk-ESY7XYHL.js";var Le=(()=>{class n{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,i){this._renderer=t,this._elementRef=i}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(i){return new(i||n)(a(Q),a(J))};static \u0275dir=f({type:n})}return n})(),mt=(()=>{class n extends Le{static \u0275fac=(()=>{let t;return function(r){return(t||(t=Me(n)))(r||n)}})();static \u0275dir=f({type:n,features:[V]})}return n})(),He=new v("");var _t={provide:He,useExisting:G(()=>Z),multi:!0};function vt(){let n=le()?le().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var yt=new v(""),Z=(()=>{class n extends Le{_compositionMode;_composing=!1;constructor(t,i,r){super(t,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!vt())}writeValue(t){let i=t??"";this.setProperty("value",i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(i){return new(i||n)(a(Q),a(J),a(yt,8))};static \u0275dir=f({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&w("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},standalone:!1,features:[T([_t]),V]})}return n})();function m(n){return n==null||(typeof n=="string"||Array.isArray(n))&&n.length===0}function $e(n){return n!=null&&typeof n.length=="number"}var We=new v(""),qe=new v(""),Ct=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,D=class{static min(e){return Vt(e)}static max(e){return Dt(e)}static required(e){return bt(e)}static requiredTrue(e){return Mt(e)}static email(e){return At(e)}static minLength(e){return Et(e)}static maxLength(e){return Ft(e)}static pattern(e){return wt(e)}static nullValidator(e){return ze(e)}static compose(e){return Qe(e)}static composeAsync(e){return tt(e)}};function Vt(n){return e=>{if(m(e.value)||m(n))return null;let t=parseFloat(e.value);return!isNaN(t)&&t<n?{min:{min:n,actual:e.value}}:null}}function Dt(n){return e=>{if(m(e.value)||m(n))return null;let t=parseFloat(e.value);return!isNaN(t)&&t>n?{max:{max:n,actual:e.value}}:null}}function bt(n){return m(n.value)?{required:!0}:null}function Mt(n){return n.value===!0?null:{required:!0}}function At(n){return m(n.value)||Ct.test(n.value)?null:{email:!0}}function Et(n){return e=>m(e.value)||!$e(e.value)?null:e.value.length<n?{minlength:{requiredLength:n,actualLength:e.value.length}}:null}function Ft(n){return e=>$e(e.value)&&e.value.length>n?{maxlength:{requiredLength:n,actualLength:e.value.length}}:null}function wt(n){if(!n)return ze;let e,t;return typeof n=="string"?(t="",n.charAt(0)!=="^"&&(t+="^"),t+=n,n.charAt(n.length-1)!=="$"&&(t+="$"),e=new RegExp(t)):(t=n.toString(),e=n),i=>{if(m(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:t,actualValue:r}}}}function ze(n){return null}function Ze(n){return n!=null}function Ke(n){return Fe(n)?Ve(n):n}function Xe(n){let e={};return n.forEach(t=>{e=t!=null?u(u({},e),t):e}),Object.keys(e).length===0?null:e}function Ye(n,e){return e.map(t=>t(n))}function St(n){return!n.validate}function Je(n){return n.map(e=>St(e)?e:t=>e.validate(t))}function Qe(n){if(!n)return null;let e=n.filter(Ze);return e.length==0?null:function(t){return Xe(Ye(t,e))}}function et(n){return n!=null?Qe(Je(n)):null}function tt(n){if(!n)return null;let e=n.filter(Ze);return e.length==0?null:function(t){let i=Ye(t,e).map(Ke);return be(i).pipe(De(Xe))}}function nt(n){return n!=null?tt(Je(n)):null}function Ne(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function it(n){return n._rawValidators}function rt(n){return n._rawAsyncValidators}function ue(n){return n?Array.isArray(n)?n:[n]:[]}function U(n,e){return Array.isArray(n)?n.includes(e):n===e}function Pe(n,e){let t=ue(e);return ue(n).forEach(r=>{U(t,r)||t.push(r)}),t}function ke(n,e){return ue(e).filter(t=>!U(n,t))}var L=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=et(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=nt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},A=class extends L{name;get formDirective(){return null}get path(){return null}},P=class extends L{_parent=null;name=null;valueAccessor=null},H=class{_cd;constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},It={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Vn=c(u({},It),{"[class.ng-submitted]":"isSubmitted"}),ot=(()=>{class n extends H{constructor(t){super(t)}static \u0275fac=function(i){return new(i||n)(a(P,2))};static \u0275dir=f({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&ne("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[V]})}return n})(),st=(()=>{class n extends H{constructor(t){super(t)}static \u0275fac=function(i){return new(i||n)(a(A,10))};static \u0275dir=f({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&ne("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[V]})}return n})();var I="VALID",j="INVALID",b="PENDING",O="DISABLED",_=class{},$=class extends _{value;source;constructor(e,t){super(),this.value=e,this.source=t}},x=class extends _{pristine;source;constructor(e,t){super(),this.pristine=e,this.source=t}},N=class extends _{touched;source;constructor(e,t){super(),this.touched=e,this.source=t}},M=class extends _{status;source;constructor(e,t){super(),this.status=e,this.source=t}},de=class extends _{source;constructor(e){super(),this.source=e}},ce=class extends _{source;constructor(e){super(),this.source=e}};function pe(n){return(K(n)?n.validators:n)||null}function Ot(n){return Array.isArray(n)?et(n):n||null}function ge(n,e){return(K(e)?e.asyncValidators:n)||null}function xt(n){return Array.isArray(n)?nt(n):n||null}function K(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function at(n,e,t){let i=n.controls;if(!(e?Object.keys(i):i).length)throw new k(1e3,"");if(!i[t])throw new k(1001,"")}function lt(n,e,t){n._forEachChild((i,r)=>{if(t[r]===void 0)throw new k(1002,"")})}var E=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,t){this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return g(this.statusReactive)}set status(e){g(()=>this.statusReactive.set(e))}_status=S(()=>this.statusReactive());statusReactive=C(void 0);get valid(){return this.status===I}get invalid(){return this.status===j}get pending(){return this.status==b}get disabled(){return this.status===O}get enabled(){return this.status!==O}errors;get pristine(){return g(this.pristineReactive)}set pristine(e){g(()=>this.pristineReactive.set(e))}_pristine=S(()=>this.pristineReactive());pristineReactive=C(!0);get dirty(){return!this.pristine}get touched(){return g(this.touchedReactive)}set touched(e){g(()=>this.touchedReactive.set(e))}_touched=S(()=>this.touchedReactive());touchedReactive=C(!1);get untouched(){return!this.touched}_events=new Ce;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Pe(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Pe(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(ke(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(ke(e,this._rawAsyncValidators))}hasValidator(e){return U(this._rawValidators,e)}hasAsyncValidator(e){return U(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(c(u({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new N(!0,i))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i),t&&e.emitEvent!==!1&&this._events.next(new N(!1,i))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(c(u({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new x(!1,i))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),t&&e.emitEvent!==!1&&this._events.next(new x(!0,i))}markAsPending(e={}){this.status=b;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new M(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(c(u({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=O,this.errors=null,this._forEachChild(r=>{r.disable(c(u({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new $(this.value,i)),this._events.next(new M(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(c(u({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=I,this._forEachChild(i=>{i.enable(c(u({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(c(u({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===I||this.status===b)&&this._runAsyncValidator(i,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new $(this.value,t)),this._events.next(new M(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(c(u({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?O:I}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=b,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let i=Ke(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(e,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new M(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,i)}_initObservables(){this.valueChanges=new F,this.statusChanges=new F}_calculateStatus(){return this._allControlsDisabled()?O:this.errors?j:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(b)?b:this._anyControlsHaveStatus(j)?j:I}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new x(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new N(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){K(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Ot(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=xt(this._rawAsyncValidators)}},W=class extends E{constructor(e,t,i){super(pe(t),ge(i,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,i={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){lt(this,!0,e),Object.keys(e).forEach(i=>{at(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,i)=>(e[i]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,i)=>i._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let i=this.controls[t];i&&e(i,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,i]of Object.entries(this.controls))if(this.contains(t)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,i,r)=>((i.enabled||this.disabled)&&(t[r]=i.value),t))}_reduceChildren(e,t){let i=e;return this._forEachChild((r,o)=>{i=t(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var he=class extends W{};var ut=new v("",{providedIn:"root",factory:()=>me}),me="always";function Nt(n,e){return[...e.path,n]}function Ge(n,e,t=me){_e(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(n.disabled),kt(n,e),Rt(n,e),Gt(n,e),Pt(n,e)}function Re(n,e,t=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),z(n,e),n&&(e._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function q(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function Pt(n,e){if(e.valueAccessor.setDisabledState){let t=i=>{e.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}function _e(n,e){let t=it(n);e.validator!==null?n.setValidators(Ne(t,e.validator)):typeof t=="function"&&n.setValidators([t]);let i=rt(n);e.asyncValidator!==null?n.setAsyncValidators(Ne(i,e.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();q(e._rawValidators,r),q(e._rawAsyncValidators,r)}function z(n,e){let t=!1;if(n!==null){if(e.validator!==null){let r=it(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==e.validator);o.length!==r.length&&(t=!0,n.setValidators(o))}}if(e.asyncValidator!==null){let r=rt(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==e.asyncValidator);o.length!==r.length&&(t=!0,n.setAsyncValidators(o))}}}let i=()=>{};return q(e._rawValidators,i),q(e._rawAsyncValidators,i),t}function kt(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&dt(n,e)})}function Gt(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&dt(n,e),n.updateOn!=="submit"&&n.markAsTouched()})}function dt(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Rt(n,e){let t=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}function Tt(n,e){n==null,_e(n,e)}function jt(n,e){return z(n,e)}function Bt(n,e){if(!n.hasOwnProperty("model"))return!1;let t=n.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function Ut(n){return Object.getPrototypeOf(n.constructor)===mt}function Lt(n,e){n._syncPendingControls(),e.forEach(t=>{let i=t.control;i.updateOn==="submit"&&i._pendingChange&&(t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function Ht(n,e){if(!e)return null;Array.isArray(e);let t,i,r;return e.forEach(o=>{o.constructor===Z?t=o:Ut(o)?i=o:r=o}),r||i||t||null}function $t(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function Te(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function je(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var B=class extends E{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(e=null,t,i){super(pe(t),ge(i,t)),this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),K(t)&&(t.nonNullable||t.initialValueIsDefault)&&(je(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Te(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Te(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){je(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Wt=n=>n instanceof B;var ct=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275dir=f({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return n})();var ht=new v("");var qt={provide:A,useExisting:G(()=>ve)},ve=(()=>{class n extends A{callSetDisabledState;get submitted(){return g(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}_submitted=S(()=>this._submittedReactive());_submittedReactive=C(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];form=null;ngSubmit=new F;constructor(t,i,r){super(),this.callSetDisabledState=r,this._setValidators(t),this._setAsyncValidators(i)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(z(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let i=this.form.get(t.path);return Ge(i,t,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),i}getControl(t){return this.form.get(t.path)}removeControl(t){Re(t.control||null,t,!1),$t(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,i){this.form.get(t.path).setValue(i)}onSubmit(t){return this._submittedReactive.set(!0),Lt(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new de(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this._submittedReactive.set(!1),this.form._events.next(new ce(this.form))}_updateDomValue(){this.directives.forEach(t=>{let i=t.control,r=this.form.get(t.path);i!==r&&(Re(i||null,t),Wt(r)&&(Ge(r,t,this.callSetDisabledState),t.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let i=this.form.get(t.path);Tt(i,t),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let i=this.form.get(t.path);i&&jt(i,t)&&i.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){_e(this.form,this),this._oldForm&&z(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||n)(a(We,10),a(qe,10),a(ut,8))};static \u0275dir=f({type:n,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&w("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[T([qt]),V,Y]})}return n})();var zt={provide:P,useExisting:G(()=>ye)},ye=(()=>{class n extends P{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(t){}model;update=new F;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,i,r,o,s){super(),this._ngModelWarningConfig=s,this._parent=t,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=Ht(this,o)}ngOnChanges(t){this._added||this._setUpControl(),Bt(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return Nt(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(i){return new(i||n)(a(A,13),a(We,10),a(qe,10),a(He,10),a(ht,8))};static \u0275dir=f({type:n,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[T([zt]),V,Y]})}return n})();var Zt=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=ee({type:n});static \u0275inj=X({})}return n})(),fe=class extends E{constructor(e,t,i){super(pe(t),ge(i,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(e){return this.controls[this._adjustIndex(e)]}push(e,t={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(e,t,i={}){this.controls.splice(e,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(e,t={}){let i=this._adjustIndex(e);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(e,t,i={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),t&&(this.controls.splice(r,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,t={}){lt(this,!1,e),e.forEach((i,r)=>{at(this,!1,r),this.at(r).setValue(i,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(e.forEach((i,r)=>{this.at(r)&&this.at(r).patchValue(i,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e=[],t={}){this._forEachChild((i,r)=>{i.reset(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((t,i)=>i._syncPendingControls()?!0:t,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((t,i)=>{e(t,i)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(t=>t.enabled&&e(t))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};function Be(n){return!!n&&(n.asyncValidators!==void 0||n.validators!==void 0||n.updateOn!==void 0)}var ft=(()=>{class n{useNonNullable=!1;get nonNullable(){let t=new n;return t.useNonNullable=!0,t}group(t,i=null){let r=this._reduceControls(t),o={};return Be(i)?o=i:i!==null&&(o.validators=i.validator,o.asyncValidators=i.asyncValidator),new W(r,o)}record(t,i=null){let r=this._reduceControls(t);return new he(r,i)}control(t,i,r){let o={};return this.useNonNullable?(Be(i)?o=i:(o.validators=i,o.asyncValidators=r),new B(t,c(u({},o),{nonNullable:!0}))):new B(t,i,r)}array(t,i,r){let o=t.map(s=>this._createControl(s));return new fe(o,i,r)}_reduceControls(t){let i={};return Object.keys(t).forEach(r=>{i[r]=this._createControl(t[r])}),i}_createControl(t){if(t instanceof B)return t;if(t instanceof E)return t;if(Array.isArray(t)){let i=t[0],r=t.length>1?t[1]:null,o=t.length>2?t[2]:null;return this.control(i,r,o)}else return this.control(t)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=R({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var pt=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:ht,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:ut,useValue:t.callSetDisabledState??me}]}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=ee({type:n});static \u0275inj=X({imports:[Zt]})}return n})();var gt=(()=>{class n{constructor(){this.fb=y(ft)}createForm(t){let i={};for(let[r,o]of Object.entries(t))i[r]=[o.value||"",o.validators||[]];return this.fb.nonNullable.group(i)}getFieldErrors(t,i){let r=i?.errors;if(!r)return[];if(!i?.touched)return[];let o=[];for(let s in r)switch(s){case"required":o.push(`Preencha o campo ${t}`);break;case"email":o.push(`Digite um email v\xE1lido no campo ${t}`);break;case"minlength":o.push(`Digite no m\xEDnimo ${r[s].requiredLength} caracteres no campo ${t}`);break;case"maxlength":o.push(`Digite no m\xE1ximo ${r[s].requiredLength} caracteres no campo ${t}`);break}return o}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=R({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function Xt(n,e){if(n&1&&(d(0,"small",7),h(1),l()),n&2){let t=e.$implicit;p(),ae(t)}}function Yt(n,e){if(n&1&&(d(0,"small",7),h(1),l()),n&2){let t=e.$implicit;p(),ae(t)}}function Jt(n,e){n&1&&(d(0,"span"),h(1,"Entrando..."),l())}function Qt(n,e){n&1&&(d(0,"span"),h(1,"Entrar"),l())}var Gn=(()=>{class n{constructor(){this.formService=y(gt),this.authService=y(xe),this.router=y(Se),this.isLoading=C(!1),this.loginForm=this.formService.createForm({email:{validators:[D.required,D.email]},password:{validators:[D.required,D.minLength(6)]}})}getErrors(t){let i=this.loginForm.get(t);return this.formService.getFieldErrors(t,i)}onSubmit(){if(this.loginForm.valid){this.isLoading.set(!0);let{email:t,password:i}=this.loginForm.getRawValue();this.authService.login(t,i).subscribe({next:()=>{this.router.navigate(["/comunidade"]),this.isLoading.set(!1)},error:r=>{console.error("Login failed:",r),this.isLoading.set(!1)}})}}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=Ae({type:n,selectors:[["app-login"]],decls:26,vars:3,consts:[[1,"login"],[1,"login__title"],[1,"login__form",3,"ngSubmit","formGroup"],[1,"login__message"],[1,"login__form-group"],["for","email"],["id","email","type","email","formControlName","email","placeholder","Digite seu email"],[1,"login__error"],["for","password"],["id","password","type","password","formControlName","password","placeholder","Digite sua senha"],["type","submit",1,"login__button",3,"disabled"],[1,"login__register"],["routerLink","/cadastro"]],template:function(i,r){i&1&&(d(0,"div",0)(1,"h1",1),h(2,"Login"),l(),d(3,"form",2),w("ngSubmit",function(){return r.onSubmit()}),d(4,"p",3),h(5," Fa\xE7a login para acessar a plataforma "),l(),d(6,"div",4)(7,"label",5),h(8,"Email"),l(),se(9,"input",6),re(10,Xt,2,1,"small",7,ie),l(),d(12,"div",4)(13,"label",8),h(14,"Senha"),l(),se(15,"input",9),re(16,Yt,2,1,"small",7,ie),l(),d(18,"button",10),Ee(19,Jt,2,0,"span")(20,Qt,2,0,"span"),l(),d(21,"div",11)(22,"span"),h(23,"Ainda n\xE3o tem uma conta?"),l(),d(24,"a",12),h(25,"Cadastre-se"),l()()()()),i&2&&(p(3),te("formGroup",r.loginForm),p(7),oe(r.getErrors("email")),p(6),oe(r.getErrors("password")),p(2),te("disabled",r.loginForm.invalid||r.isLoading()),p(),we(r.isLoading()?19:20))},dependencies:[pt,ct,Z,ot,st,ve,ye,Oe,Ie],styles:[".login[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.login__title[_ngcontent-%COMP%]{color:#91aa9d;margin:2rem;text-align:center}.login__message[_ngcontent-%COMP%]{text-align:center;color:#6c757d;margin-bottom:2rem;font-size:1rem}.login__form[_ngcontent-%COMP%]{width:100%;background:#fff;padding:2rem;border-radius:8px;box-shadow:0 2px 8px #0000001a}@media (min-width: 768px){.login__form[_ngcontent-%COMP%]{padding:3rem}}.login__register[_ngcontent-%COMP%]{display:flex;gap:.5rem;margin-top:1.5rem;text-align:center;font-size:.875rem;color:#6c757d}.login__register[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#91aa9d;text-decoration:none;font-weight:500;transition:color .3s}.login__register[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#749483;text-decoration:underline}.login__form-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem;margin-bottom:1.5rem}.login__form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:500;color:#495057}.login__form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:.75rem;border:1px solid #dee2e6;border-radius:4px;transition:border-color .3s}.login__form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none;border-color:#91aa9d}.login__error[_ngcontent-%COMP%]{color:#dc3545;font-size:.875rem}.login__button[_ngcontent-%COMP%]{width:100%;padding:.75rem;background:#91aa9d;color:#fff;border:none;border-radius:4px;font-weight:500;cursor:pointer;transition:background .3s}.login__button[_ngcontent-%COMP%]:hover:not(:disabled){background:#749483}.login__button[_ngcontent-%COMP%]:disabled{background:#ced4da;cursor:not-allowed}"],changeDetection:0})}}return n})();export{Gn as LoginComponent};
