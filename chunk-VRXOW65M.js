import{a as p,i as h}from"./chunk-DWR4Z56V.js";import{V as o,Y as a,ca as i,va as n}from"./chunk-62T5DOLL.js";var c={production:!0,apiUrl:"",apiLocalizationUrl:"https://servicodados.ibge.gov.br/api/v1/localidades"};var k=(()=>{class s{constructor(){this.API_URL=`${c.apiUrl}/auth`,this.TOKEN_KEY="access_token",this.router=i(h),this.http=i(p),this.isAuthenticated=n(this.hasValidToken())}login(t,e){return this.http.post(`${this.API_URL}/login`,{email:t,password:e}).pipe(o(r=>{sessionStorage.setItem(this.TOKEN_KEY,r.access_token),this.isAuthenticated.set(!0)}))}register(t,e){return this.http.post(`${this.API_URL}/register`,{name:t,email:e}).pipe(o(r=>{this.isAuthenticated.set(!1)}))}forgotPassword(t){return this.http.post(`${this.API_URL}/forgot-password`,{email:t})}logout(){sessionStorage.removeItem(this.TOKEN_KEY),this.isAuthenticated.set(!1),this.router.navigate(["acesso-comunidade","login"])}getToken(){return sessionStorage.getItem(this.TOKEN_KEY)}hasValidToken(){let t=this.getToken();if(!t)return!1;try{return JSON.parse(atob(t.split(".")[1])).exp>Date.now()/1e3}catch{return!1}}static{this.\u0275fac=function(e){return new(e||s)}}static{this.\u0275prov=a({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})();export{c as a,k as b};
