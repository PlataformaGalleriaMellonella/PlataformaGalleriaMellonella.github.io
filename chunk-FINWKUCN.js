import{a as I,i as h}from"./chunk-JZKOHZ5C.js";import{V as s,Y as n,ba as o,q as a,va as c}from"./chunk-UXVKSERO.js";var p={production:!0,apiUrl:"",apiLocalizationUrl:"https://servicodados.ibge.gov.br/api/v1/localidades"};var w=(()=>{class i{constructor(t,e){this.http=t,this.router=e,this.API_URL=`${p.apiUrl}/auth`,this.TOKEN_KEY="access_token",this.isAuthenticated=c(this.hasValidToken())}login(t,e){return sessionStorage.setItem(this.TOKEN_KEY,"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"),this.isAuthenticated.set(!0),a({access_token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",user:{id:1,username:"Marcelo",email:"email@email.com"}});return this.http.post(`${this.API_URL}/login`,{email:t,password:e}).pipe(s(r=>{sessionStorage.setItem(this.TOKEN_KEY,r.access_token),this.isAuthenticated.set(!0)}))}register(t,e){return this.http.post(`${this.API_URL}/register`,{name:t,email:e}).pipe(s(r=>{this.isAuthenticated.set(!1)}))}forgotPassword(t){return this.http.post(`${this.API_URL}/forgot-password`,{email:t})}logout(){sessionStorage.removeItem(this.TOKEN_KEY),this.isAuthenticated.set(!1),this.router.navigate(["acesso-comunidade","login"])}getToken(){return sessionStorage.getItem(this.TOKEN_KEY)}hasValidToken(){return!0}static{this.\u0275fac=function(e){return new(e||i)(o(I),o(h))}}static{this.\u0275prov=n({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();export{p as a,w as b};
