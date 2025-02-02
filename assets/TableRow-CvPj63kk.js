import{r as p,j as d,c as b}from"./index-B_XR-bXS.js";import{a as U,b as h}from"./TableCell-B5lIhqZQ.js";import{g as y,a as v,u as T,s as f,b as m,m as $,e as w}from"./createSimplePaletteValueFilter-BqFbd0Em.js";function j(o){return y("MuiTable",o)}v("MuiTable",["root","stickyHeader"]);const B=o=>{const{classes:e,stickyHeader:t}=o;return m({root:["root",t&&"stickyHeader"]},j,e)},N=f("table",{name:"MuiTable",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.stickyHeader&&e.stickyHeader]}})($(({theme:o})=>({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":{...o.typography.body2,padding:o.spacing(2),color:(o.vars||o).palette.text.secondary,textAlign:"left",captionSide:"bottom"},variants:[{props:({ownerState:e})=>e.stickyHeader,style:{borderCollapse:"separate"}}]}))),R="table",J=p.forwardRef(function(e,t){const s=T({props:e,name:"MuiTable"}),{className:n,component:a=R,padding:l="normal",size:r="medium",stickyHeader:c=!1,...i}=s,u={...s,component:a,padding:l,size:r,stickyHeader:c},C=B(u),k=p.useMemo(()=>({padding:l,size:r,stickyHeader:c}),[l,r,c]);return d.jsx(U.Provider,{value:k,children:d.jsx(N,{as:a,role:a===R?null:"table",ref:t,className:b(C.root,n),ownerState:u,...i})})});function S(o){return y("MuiTableBody",o)}v("MuiTableBody",["root"]);const H=o=>{const{classes:e}=o;return m({root:["root"]},S,e)},O=f("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(o,e)=>e.root})({display:"table-row-group"}),P={variant:"body"},g="tbody",K=p.forwardRef(function(e,t){const s=T({props:e,name:"MuiTableBody"}),{className:n,component:a=g,...l}=s,r={...s,component:a},c=H(r);return d.jsx(h.Provider,{value:P,children:d.jsx(O,{className:b(c.root,n),as:a,ref:t,role:a===g?null:"rowgroup",ownerState:r,...l})})});function A(o){return y("MuiTableContainer",o)}v("MuiTableContainer",["root"]);const E=o=>{const{classes:e}=o;return m({root:["root"]},A,e)},z=f("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(o,e)=>e.root})({width:"100%",overflowX:"auto"}),L=p.forwardRef(function(e,t){const s=T({props:e,name:"MuiTableContainer"}),{className:n,component:a="div",...l}=s,r={...s,component:a},c=E(r);return d.jsx(z,{ref:t,as:a,className:b(c.root,n),ownerState:r,...l})});function D(o){return y("MuiTableRow",o)}const M=v("MuiTableRow",["root","selected","hover","head","footer"]),X=o=>{const{classes:e,selected:t,hover:s,head:n,footer:a}=o;return m({root:["root",t&&"selected",s&&"hover",n&&"head",a&&"footer"]},D,e)},q=f("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.head&&e.head,t.footer&&e.footer]}})($(({theme:o})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${M.hover}:hover`]:{backgroundColor:(o.vars||o).palette.action.hover},[`&.${M.selected}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / ${o.vars.palette.action.selectedOpacity})`:w(o.palette.primary.main,o.palette.action.selectedOpacity),"&:hover":{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.hoverOpacity}))`:w(o.palette.primary.main,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity)}}}))),x="tr",Q=p.forwardRef(function(e,t){const s=T({props:e,name:"MuiTableRow"}),{className:n,component:a=x,hover:l=!1,selected:r=!1,...c}=s,i=p.useContext(h),u={...s,component:a,hover:l,selected:r,head:i&&i.variant==="head",footer:i&&i.variant==="footer"},C=X(u);return d.jsx(q,{as:a,ref:t,className:b(C.root,n),role:a===x?null:"row",ownerState:u,...c})});export{L as T,J as a,K as b,Q as c};
