import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as u,i as o}from"./assets/vendor-77e16229.js";let n=null;const a=document.querySelector("[data-start]"),s=document.getElementById("datetime-picker"),i=document.getElementById("timer");i.textContent="00:00:00:00";let c=0;const m={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=t[0];e<new Date?(o.error({message:"Please choose a date in the future"}),a.disabled=!0):(a.disabled=!1,c=e.getTime())}};u(s,m);a.addEventListener("click",function(){if(!s.value){o.error({message:"Please choose a date"});return}n=setInterval(()=>{const t=Date.now(),e=c-t;if(e<=0){clearInterval(n),a.disabled=!1;return}const r=f(e);i.textContent=r},1e3)});const f=t=>{const e=Math.floor(t/864e5),r=Math.floor(t%(1e3*60*60*24)/(1e3*60*60)),d=Math.floor(t%(1e3*60*60)/(1e3*60)),l=Math.floor(t%(1e3*60)/1e3);return[e.toString().padStart(2,"0"),r.toString().padStart(2,"0"),d.toString().padStart(2,"0"),l.toString().padStart(2,"0")].join(":")};
//# sourceMappingURL=commonHelpers.js.map
