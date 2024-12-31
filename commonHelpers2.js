import"./assets/modulepreload-polyfill-3cfb730f.js";import{i}from"./assets/vendor-77e16229.js";const t=document.querySelector(".form");t.addEventListener("submit",o);function o(m){m.preventDefault(),(e=>new Promise((r,s)=>{setTimeout(()=>{Math.random()==="fullfilled"?r(`✅ Fulfilled promise in ${e}ms`):s(`❌ Rejected promise in ${e}ms`)},e)}))(delay).then(e=>{i.show(e`message:
  ✅ Fulfilled promise in ${delay}ms`)}).catch(e=>{i.show(e,`❌ Rejected promise in ${delay}ms`)})}
//# sourceMappingURL=commonHelpers2.js.map
