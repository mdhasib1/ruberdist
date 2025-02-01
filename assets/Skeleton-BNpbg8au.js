import{r as v,j as C,c as b}from"./index-DrMvIKwq.js";import{g as k,a as w,u as x,s as R,b as S,m as $,e as U,o as u,n as c}from"./createSimplePaletteValueFilter-zjTMkHT-.js";function M(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function A(t){return parseFloat(t)}function X(t){return k("MuiSkeleton",t)}w("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const j=t=>{const{classes:e,variant:a,animation:n,hasChildren:s,width:i,height:o}=t;return S({root:["root",a,n,s&&"withChildren",s&&!i&&"fitContent",s&&!o&&"heightAuto"]},X,e)},r=c`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,l=c`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,B=typeof r!="string"?u`
        animation: ${r} 2s ease-in-out 0.5s infinite;
      `:null,E=typeof l!="string"?u`
        &::after {
          animation: ${l} 2s linear 0.5s infinite;
        }
      `:null,K=R("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],a.animation!==!1&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})($(({theme:t})=>{const e=M(t.shape.borderRadius)||"px",a=A(t.shape.borderRadius);return{display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:U(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${e}/${Math.round(a/.6*10)/10}${e}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:({ownerState:n})=>n.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:n})=>n.hasChildren&&!n.width,style:{maxWidth:"fit-content"}},{props:({ownerState:n})=>n.hasChildren&&!n.height,style:{height:"auto"}},{props:{animation:"pulse"},style:B||{animation:`${r} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(t.vars||t).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:E||{"&::after":{animation:`${l} 2s linear 0.5s infinite`}}}]}})),W=v.forwardRef(function(e,a){const n=x({props:e,name:"MuiSkeleton"}),{animation:s="pulse",className:i,component:o="span",height:p,style:m,variant:f="text",width:g,...h}=n,d={...n,animation:s,component:o,variant:f,hasChildren:!!h.children},y=j(d);return C.jsx(K,{as:o,ref:a,className:b(y.root,i),ownerState:d,...h,style:{width:g,height:p,...m}})});export{W as S};
