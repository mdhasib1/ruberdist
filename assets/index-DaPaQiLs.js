import{T as h}from"./createSimplePaletteValueFilter-zjTMkHT-.js";import{r as f,G as E}from"./index-DrMvIKwq.js";import{a as g}from"./useTheme-CepysXf6.js";import{g as Q}from"./Chip-BGAMkzyn.js";import{b as S}from"./CircularProgress-B5agUqRt.js";function v(n,s,e,r,c){const[t,m]=f.useState(()=>c&&e?e(n).matches:r?r(n).matches:s);return S(()=>{if(!e)return;const o=e(n),a=()=>{m(o.matches)};return a(),o.addEventListener("change",a),()=>{o.removeEventListener("change",a)}},[n,e]),t}const w={...E},l=w.useSyncExternalStore;function y(n,s,e,r,c){const t=f.useCallback(()=>s,[s]),m=f.useMemo(()=>{if(c&&e)return()=>e(n).matches;if(r!==null){const{matches:u}=r(n);return()=>u}return t},[t,n,r,c,e]),[o,a]=f.useMemo(()=>{if(e===null)return[t,()=>()=>{}];const u=e(n);return[()=>u.matches,i=>(u.addEventListener("change",i),()=>{u.removeEventListener("change",i)})]},[t,e,n]);return l(a,o,m)}function p(n={}){const{themeId:s}=n;return function(r,c={}){let t=g();t&&s&&(t=t[s]||t);const m=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:o=!1,matchMedia:a=m?window.matchMedia:null,ssrMatchMedia:d=null,noSsr:u=!1}=Q({name:"MuiUseMediaQuery",props:c,theme:t});let i=typeof r=="function"?r(t):r;return i=i.replace(/^@media( ?)/m,""),(l!==void 0?y:v)(i,o,a,d,u)}}p();const U=p({themeId:h});export{U as u};
