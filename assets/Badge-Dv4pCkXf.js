import{r as y,c as j,j as A}from"./index-DrMvIKwq.js";import{a as Y,g as w,u as rr,s as M,c as t,b as ar,m as or,d as tr}from"./createSimplePaletteValueFilter-zjTMkHT-.js";import{u as F}from"./Grow-B1pBNw31.js";const U=a=>{const r=y.useRef({});return y.useEffect(()=>{r.current=a}),r.current};function nr(a){const{badgeContent:r,invisible:o=!1,max:n=99,showZero:s=!1}=a,d=U({badgeContent:r,max:n});let l=o;o===!1&&r===0&&!s&&(l=!0);const{badgeContent:i,max:c=n}=l?d:a,f=i&&Number(i)>c?`${c}+`:i;return{badgeContent:i,invisible:l,max:c,displayValue:f}}function ir(a){return w("MuiBadge",a)}const e=Y("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]),b=10,O=4,er=a=>{const{color:r,anchorOrigin:o,invisible:n,overlap:s,variant:d,classes:l={}}=a,i={root:["root"],badge:["badge",d,n&&"invisible",`anchorOrigin${t(o.vertical)}${t(o.horizontal)}`,`anchorOrigin${t(o.vertical)}${t(o.horizontal)}${t(s)}`,`overlap${t(s)}`,r!=="default"&&`color${t(r)}`]};return ar(i,ir,l)},sr=M("span",{name:"MuiBadge",slot:"Root",overridesResolver:(a,r)=>r.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),lr=M("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(a,r)=>{const{ownerState:o}=a;return[r.badge,r[o.variant],r[`anchorOrigin${t(o.anchorOrigin.vertical)}${t(o.anchorOrigin.horizontal)}${t(o.overlap)}`],o.color!=="default"&&r[`color${t(o.color)}`],o.invisible&&r.invisible]}})(or(({theme:a})=>({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:a.typography.fontFamily,fontWeight:a.typography.fontWeightMedium,fontSize:a.typography.pxToRem(12),minWidth:b*2,lineHeight:1,padding:"0 6px",height:b*2,borderRadius:b,zIndex:1,transition:a.transitions.create("transform",{easing:a.transitions.easing.easeInOut,duration:a.transitions.duration.enteringScreen}),variants:[...Object.entries(a.palette).filter(tr(["contrastText"])).map(([r])=>({props:{color:r},style:{backgroundColor:(a.vars||a).palette[r].main,color:(a.vars||a).palette[r].contrastText}})),{props:{variant:"dot"},style:{borderRadius:O,height:O*2,minWidth:O*2,padding:0}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="top"&&r.anchorOrigin.horizontal==="right"&&r.overlap==="rectangular",style:{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${e.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="bottom"&&r.anchorOrigin.horizontal==="right"&&r.overlap==="rectangular",style:{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${e.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="top"&&r.anchorOrigin.horizontal==="left"&&r.overlap==="rectangular",style:{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${e.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="bottom"&&r.anchorOrigin.horizontal==="left"&&r.overlap==="rectangular",style:{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${e.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="top"&&r.anchorOrigin.horizontal==="right"&&r.overlap==="circular",style:{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${e.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="bottom"&&r.anchorOrigin.horizontal==="right"&&r.overlap==="circular",style:{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${e.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="top"&&r.anchorOrigin.horizontal==="left"&&r.overlap==="circular",style:{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${e.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="bottom"&&r.anchorOrigin.horizontal==="left"&&r.overlap==="circular",style:{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${e.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:{invisible:!0},style:{transition:a.transitions.create("transform",{easing:a.transitions.easing.easeInOut,duration:a.transitions.duration.leavingScreen})}}]})));function L(a){return{vertical:(a==null?void 0:a.vertical)??"top",horizontal:(a==null?void 0:a.horizontal)??"right"}}const dr=y.forwardRef(function(r,o){const n=rr({props:r,name:"MuiBadge"}),{anchorOrigin:s,className:d,classes:l,component:i,components:c={},componentsProps:f={},children:W,overlap:x="rectangular",color:R="default",invisible:V=!1,max:k=99,badgeContent:C,slots:g,slotProps:p,showZero:P=!1,variant:v="standard",...E}=n,{badgeContent:B,invisible:H,max:Z,displayValue:_}=nr({max:k,invisible:V,badgeContent:C,showZero:P}),q=U({anchorOrigin:L(s),color:R,overlap:x,variant:v,badgeContent:C}),$=H||B==null&&v!=="dot",{color:G=R,overlap:J=x,anchorOrigin:K,variant:z=v}=$?q:n,Q=L(K),T=z!=="dot"?_:void 0,h={...n,badgeContent:B,invisible:$,max:Z,displayValue:T,showZero:P,anchorOrigin:Q,color:G,overlap:J,variant:z},D=er(h),I=(g==null?void 0:g.root)??c.Root??sr,N=(g==null?void 0:g.badge)??c.Badge??lr,u=(p==null?void 0:p.root)??f.root,m=(p==null?void 0:p.badge)??f.badge,S=F({elementType:I,externalSlotProps:u,externalForwardedProps:E,additionalProps:{ref:o,as:i},ownerState:h,className:j(u==null?void 0:u.className,D.root,d)}),X=F({elementType:N,externalSlotProps:m,ownerState:h,className:j(D.badge,m==null?void 0:m.className)});return A.jsxs(I,{...S,children:[W,A.jsx(N,{...X,children:T})]})});export{dr as B,U as u};
