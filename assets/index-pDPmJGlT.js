import{j as l}from"./index-DrMvIKwq.js";import{G as f,p as a,q as c,T as y,t as x}from"./createSimplePaletteValueFilter-zjTMkHT-.js";import{u as m}from"./useTheme-CepysXf6.js";function S(t){return t==null||Object.keys(t).length===0}function b(t){const{styles:e,defaultTheme:o={}}=t,n=typeof e=="function"?s=>e(S(s)?o:s):e;return l.jsx(f,{styles:n})}function h({styles:t,themeId:e,defaultTheme:o={}}){const n=m(o),s=typeof t=="function"?t(e&&n[e]||n):t;return l.jsx(b,{styles:s})}const P=t=>{var n;const e={systemProps:{},otherProps:{}},o=((n=t==null?void 0:t.theme)==null?void 0:n.unstable_sxConfig)??c;return Object.keys(t).forEach(s=>{o[s]?e.systemProps[s]=t[s]:e.otherProps[s]=t[s]}),e};function g(t){const{sx:e,...o}=t,{systemProps:n,otherProps:s}=P(o);let r;return Array.isArray(e)?r=[n,...e]:typeof e=="function"?r=(...i)=>{const u=e(...i);return a(u)?{...n,...u}:n}:r={...n,...e},{...s,sx:r}}function d(t){return l.jsx(h,{...t,defaultTheme:x,themeId:y})}function T(t){return function(o){return l.jsx(d,{styles:typeof t=="function"?n=>t({theme:n,...o}):t})}}function C(){return g}export{g as e,T as g,C as i};
