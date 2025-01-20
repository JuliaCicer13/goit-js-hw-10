import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as r}from"./assets/vendor-103227f3.js";const i=document.querySelector(".form");i.addEventListener("submit",m);function m(s){s.preventDefault(),(e=>new Promise((o,t)=>{setTimeout(()=>{Math.random()>.5?o(`✅ Fulfilled promise in ${e}ms`):t(`❌ Rejected promise in ${e}ms`)},e)}))().then(e=>{r.show({title:"Fullfield",message:`message
  ✅ Fulfilled promise in ${e}ms`,color:"green"})}).catch(e=>{r.show({titel:"Error",message:`message ❌ Rejected promise in ${e}ms`,color:"red"})})}
//# sourceMappingURL=commonHelpers2.js.map
