import{g as b,a as y,r as p,u as v,j as d,s as T,c as f,d as C,m as h,H as w}from"./index-DLpikvjc.js";import{a as U,b as $}from"./TableCell-Bsl3T8tX.js";function j(o){return b("MuiTable",o)}y("MuiTable",["root","stickyHeader"]);const B=o=>{const{classes:e,stickyHeader:t}=o;return C({root:["root",t&&"stickyHeader"]},j,e)},H=T("table",{name:"MuiTable",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.stickyHeader&&e.stickyHeader]}})(h(({theme:o})=>({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":{...o.typography.body2,padding:o.spacing(2),color:(o.vars||o).palette.text.secondary,textAlign:"left",captionSide:"bottom"},variants:[{props:({ownerState:e})=>e.stickyHeader,style:{borderCollapse:"separate"}}]}))),R="table",I=p.forwardRef(function(e,t){const s=v({props:e,name:"MuiTable"}),{className:n,component:a=R,padding:l="normal",size:r="medium",stickyHeader:c=!1,...i}=s,u={...s,component:a,padding:l,size:r,stickyHeader:c},m=B(u),k=p.useMemo(()=>({padding:l,size:r,stickyHeader:c}),[l,r,c]);return d.jsx(U.Provider,{value:k,children:d.jsx(H,{as:a,role:a===R?null:"table",ref:t,className:f(m.root,n),ownerState:u,...i})})});function N(o){return b("MuiTableBody",o)}y("MuiTableBody",["root"]);const S=o=>{const{classes:e}=o;return C({root:["root"]},N,e)},O=T("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(o,e)=>e.root})({display:"table-row-group"}),P={variant:"body"},g="tbody",J=p.forwardRef(function(e,t){const s=v({props:e,name:"MuiTableBody"}),{className:n,component:a=g,...l}=s,r={...s,component:a},c=S(r);return d.jsx($.Provider,{value:P,children:d.jsx(O,{className:f(c.root,n),as:a,ref:t,role:a===g?null:"rowgroup",ownerState:r,...l})})});function A(o){return b("MuiTableContainer",o)}y("MuiTableContainer",["root"]);const E=o=>{const{classes:e}=o;return C({root:["root"]},A,e)},z=T("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(o,e)=>e.root})({width:"100%",overflowX:"auto"}),K=p.forwardRef(function(e,t){const s=v({props:e,name:"MuiTableContainer"}),{className:n,component:a="div",...l}=s,r={...s,component:a},c=E(r);return d.jsx(z,{ref:t,as:a,className:f(c.root,n),ownerState:r,...l})});function D(o){return b("MuiTableRow",o)}const M=y("MuiTableRow",["root","selected","hover","head","footer"]),X=o=>{const{classes:e,selected:t,hover:s,head:n,footer:a}=o;return C({root:["root",t&&"selected",s&&"hover",n&&"head",a&&"footer"]},D,e)},q=T("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.head&&e.head,t.footer&&e.footer]}})(h(({theme:o})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${M.hover}:hover`]:{backgroundColor:(o.vars||o).palette.action.hover},[`&.${M.selected}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / ${o.vars.palette.action.selectedOpacity})`:w(o.palette.primary.main,o.palette.action.selectedOpacity),"&:hover":{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.hoverOpacity}))`:w(o.palette.primary.main,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity)}}}))),x="tr",L=p.forwardRef(function(e,t){const s=v({props:e,name:"MuiTableRow"}),{className:n,component:a=x,hover:l=!1,selected:r=!1,...c}=s,i=p.useContext($),u={...s,component:a,hover:l,selected:r,head:i&&i.variant==="head",footer:i&&i.variant==="footer"},m=X(u);return d.jsx(q,{as:a,ref:t,className:f(m.root,n),role:a===x?null:"row",ownerState:u,...c})});export{K as T,I as a,J as b,L as c};
