import{a,i as h}from"./chunk-2HCALHZX.js";import{W as s,Z as r,da as o,wa as n}from"./chunk-VUK7EZK5.js";var p={apiLocalizationUrl:"https://servicodados.ibge.gov.br/api/v1/localidades",apiUrl:"",production:!0};var A=(()=>{class e{constructor(){this.http=o(a),this.isAuthenticated=n(this.hasValidToken()),this.router=o(h),this.API_URL=`${p.apiUrl}/auth`,this.TOKEN_KEY="access_token"}forgotPassword(t){return this.http.post(`${this.API_URL}/forgot-password`,{email:t})}getToken(){return sessionStorage.getItem(this.TOKEN_KEY)}login(t,i){return this.http.post(`${this.API_URL}/login`,{email:t,password:i}).pipe(s(c=>{sessionStorage.setItem(this.TOKEN_KEY,c.access_token),this.isAuthenticated.set(!0)}))}logout(){sessionStorage.removeItem(this.TOKEN_KEY),this.isAuthenticated.set(!1),this.router.navigate(["acesso-comunidade","login"])}register(t,i){return this.http.post(`${this.API_URL}/register`,{email:i,name:t}).pipe(s(()=>{this.isAuthenticated.set(!1)}))}hasValidToken(){return!0}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=r({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();export{p as a,A as b};
