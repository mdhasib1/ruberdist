import{r as w,j as C,c as z}from"./index-B_XR-bXS.js";import{g as V,a as D,u as T,s as I,b as O,D as $,E as S}from"./createSimplePaletteValueFilter-BqFbd0Em.js";import{u as L}from"./useTheme-B7QzK74H.js";import{e as U}from"./index-xHaaV7qh.js";const N=w.createContext();function Z(e){return V("MuiGrid",e)}const A=[0,1,2,3,4,5,6,7,8,9,10],F=["column-reverse","column","row-reverse","row"],K=["nowrap","wrap-reverse","wrap"],m=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],g=D("MuiGrid",["root","container","item","zeroMinWidth",...A.map(e=>`spacing-xs-${e}`),...F.map(e=>`direction-xs-${e}`),...K.map(e=>`wrap-xs-${e}`),...m.map(e=>`grid-xs-${e}`),...m.map(e=>`grid-sm-${e}`),...m.map(e=>`grid-md-${e}`),...m.map(e=>`grid-lg-${e}`),...m.map(e=>`grid-xl-${e}`)]);function _({theme:e,ownerState:n}){let i;return e.breakpoints.keys.reduce((t,r)=>{let s={};if(n[r]&&(i=n[r]),!i)return t;if(i===!0)s={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(i==="auto")s={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const o=$({values:n.columns,breakpoints:e.breakpoints.values}),c=typeof o=="object"?o[r]:o;if(c==null)return t;const u=`${Math.round(i/c*1e8)/1e6}%`;let a={};if(n.container&&n.item&&n.columnSpacing!==0){const l=e.spacing(n.columnSpacing);if(l!=="0px"){const p=`calc(${u} + ${l})`;a={flexBasis:p,maxWidth:p}}}s={flexBasis:u,flexGrow:0,maxWidth:u,...a}}return e.breakpoints.values[r]===0?Object.assign(t,s):t[e.breakpoints.up(r)]=s,t},{})}function q({theme:e,ownerState:n}){const i=$({values:n.direction,breakpoints:e.breakpoints.values});return S({theme:e},i,t=>{const r={flexDirection:t};return t.startsWith("column")&&(r[`& > .${g.item}`]={maxWidth:"none"}),r})}function y({breakpoints:e,values:n}){let i="";Object.keys(n).forEach(r=>{i===""&&n[r]!==0&&(i=r)});const t=Object.keys(e).sort((r,s)=>e[r]-e[s]);return t.slice(0,t.indexOf(i))}function H({theme:e,ownerState:n}){const{container:i,rowSpacing:t}=n;let r={};if(i&&t!==0){const s=$({values:t,breakpoints:e.breakpoints.values});let o;typeof s=="object"&&(o=y({breakpoints:e.breakpoints.values,values:s})),r=S({theme:e},s,(c,u)=>{const a=e.spacing(c);return a!=="0px"?{marginTop:`calc(-1 * ${a})`,[`& > .${g.item}`]:{paddingTop:a}}:o!=null&&o.includes(u)?{}:{marginTop:0,[`& > .${g.item}`]:{paddingTop:0}}})}return r}function J({theme:e,ownerState:n}){const{container:i,columnSpacing:t}=n;let r={};if(i&&t!==0){const s=$({values:t,breakpoints:e.breakpoints.values});let o;typeof s=="object"&&(o=y({breakpoints:e.breakpoints.values,values:s})),r=S({theme:e},s,(c,u)=>{const a=e.spacing(c);if(a!=="0px"){const l=`calc(-1 * ${a})`;return{width:`calc(100% + ${a})`,marginLeft:l,[`& > .${g.item}`]:{paddingLeft:a}}}return o!=null&&o.includes(u)?{}:{width:"100%",marginLeft:0,[`& > .${g.item}`]:{paddingLeft:0}}})}return r}function Q(e,n,i={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[i[`spacing-xs-${String(e)}`]];const t=[];return n.forEach(r=>{const s=e[r];Number(s)>0&&t.push(i[`spacing-${r}-${String(s)}`])}),t}const X=I("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:i}=e,{container:t,direction:r,item:s,spacing:o,wrap:c,zeroMinWidth:u,breakpoints:a}=i;let l=[];t&&(l=Q(o,a,n));const p=[];return a.forEach(f=>{const d=i[f];d&&p.push(n[`grid-${f}-${String(d)}`])}),[n.root,t&&n.container,s&&n.item,u&&n.zeroMinWidth,...l,r!=="row"&&n[`direction-xs-${String(r)}`],c!=="wrap"&&n[`wrap-xs-${String(c)}`],...p]}})(({ownerState:e})=>({boxSizing:"border-box",...e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},...e.item&&{margin:0},...e.zeroMinWidth&&{minWidth:0},...e.wrap!=="wrap"&&{flexWrap:e.wrap}}),q,H,J,_);function Y(e,n){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const i=[];return n.forEach(t=>{const r=e[t];if(Number(r)>0){const s=`spacing-${t}-${String(r)}`;i.push(s)}}),i}const ee=e=>{const{classes:n,container:i,direction:t,item:r,spacing:s,wrap:o,zeroMinWidth:c,breakpoints:u}=e;let a=[];i&&(a=Y(s,u));const l=[];u.forEach(f=>{const d=e[f];d&&l.push(`grid-${f}-${String(d)}`)});const p={root:["root",i&&"container",r&&"item",c&&"zeroMinWidth",...a,t!=="row"&&`direction-xs-${String(t)}`,o!=="wrap"&&`wrap-xs-${String(o)}`,...l]};return O(p,Z,n)},se=w.forwardRef(function(n,i){const t=T({props:n,name:"MuiGrid"}),{breakpoints:r}=L(),s=U(t),{className:o,columns:c,columnSpacing:u,component:a="div",container:l=!1,direction:p="row",item:f=!1,rowSpacing:d,spacing:h=0,wrap:M="wrap",zeroMinWidth:E=!1,...v}=s,j=d||h,P=u||h,R=w.useContext(N),b=l?c||12:R,G={},W={...v};r.keys.forEach(x=>{v[x]!=null&&(G[x]=v[x],delete W[x])});const k={...s,columns:b,container:l,direction:p,item:f,rowSpacing:j,columnSpacing:P,wrap:M,zeroMinWidth:E,spacing:h,...G,breakpoints:r.keys},B=ee(k);return C.jsx(N.Provider,{value:b,children:C.jsx(X,{ownerState:k,className:z(B.root,o),as:a,ref:i,...W})})});export{se as G};
