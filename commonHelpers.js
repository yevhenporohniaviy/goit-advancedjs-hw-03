import{a as s,i as d,S as u}from"./assets/vendor-e7472c16.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();s.defaults.baseURL="https://api.thecatapi.com/v1/";s.defaults.headers.common["x-api-key"]="live_Q0VNADEy32RTi0X0eKuhYCfTRuaBwaRjJYXAI9dpQx4K9UpiqQs3veVx8O0mXCjR";const n=document.querySelector(".loader");async function p(){try{n.style.display="block";const{data:t}=await s.get("breeds");return t}catch(t){throw d.error({timeout:1e4,position:"topRight",message:"Oops! Something went wrong! Try reloading the page!"}),new Error(`${t.code} ${t.message}`)}finally{n.style.display="none"}}async function m(t){try{n.style.display="block";const{data:e}=await s.get("images/search",{params:{breed_ids:t}});return e}catch(e){throw d.error({timeout:1e4,position:"topRight",message:"Oops! Something went wrong! Try reloading the page!"}),new Error(`${e.code} ${e.message}`)}finally{n.style.display="none"}}const c=document.querySelector(".breed-select"),f=document.querySelector(".cat-info");y();function y(){c.style.display="none",p().then(t=>{c.style.display="flex",h(t)})}function h(t){new u({select:c,settings:{showSearch:!1},data:t.map(({name:e,id:i})=>({text:e,value:e,id:i})),events:{beforeChange:()=>f.replaceChildren(),afterChange:g}})}function g(t){m(t[0].id).then(e=>{f.insertAdjacentHTML("beforeend",w(e[0]))})}function w({url:t,breeds:e}){return`
    <img class="cat-info__image" src="${t}" >
    <div class="cat-info__info">
      <h2>${e[0].name}</h2>
      <p>${e[0].description}</p>
      <p><strong>Temperament</strong>: ${e[0].temperament}</p>
    </div>
  `}
//# sourceMappingURL=commonHelpers.js.map
