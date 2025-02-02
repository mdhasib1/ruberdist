import{r as m,j as g,c as V}from"./index-B_XR-bXS.js";import{e as Y,u as T}from"./CircularProgress-CnUP9nIX.js";import{e as j}from"./useSlot-CiWiNTR6.js";import{u as Z}from"./useTheme-B7QzK74H.js";import{g as A,a as H,u as B,s as k,b as D,m as N,L as _,c as h}from"./createSimplePaletteValueFilter-BqFbd0Em.js";import{G as tt,u as nt}from"./Grow-Diug3Yir.js";import{C as et}from"./ClickAwayListener-CAfaVHQX.js";import{P as ot}from"./Paper-Dn5NJgTn.js";function rt(t={}){const{autoHideDuration:n=null,disableWindowBlurListener:s=!1,onClose:r,open:i,resumeHideDuration:d}=t,l=Y();m.useEffect(()=>{if(!i)return;function e(o){o.defaultPrevented||o.key==="Escape"&&(r==null||r(o,"escapeKeyDown"))}return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[i,r]);const b=T((e,o)=>{r==null||r(e,o)}),u=T(e=>{!r||e==null||l.start(e,()=>{b(null,"timeout")})});m.useEffect(()=>(i&&u(n),l.clear),[i,n,u,l]);const p=e=>{r==null||r(e,"clickaway")},c=l.clear,f=m.useCallback(()=>{n!=null&&u(d??n*.5)},[n,d,u]),v=e=>o=>{const a=e.onBlur;a==null||a(o),f()},x=e=>o=>{const a=e.onFocus;a==null||a(o),c()},y=e=>o=>{const a=e.onMouseEnter;a==null||a(o),c()},C=e=>o=>{const a=e.onMouseLeave;a==null||a(o),f()};return m.useEffect(()=>{if(!s&&i)return window.addEventListener("focus",f),window.addEventListener("blur",c),()=>{window.removeEventListener("focus",f),window.removeEventListener("blur",c)}},[s,i,f,c]),{getRootProps:(e={})=>{const o={...j(t),...j(e)};return{role:"presentation",...e,...o,onBlur:v(o),onFocus:x(o),onMouseEnter:y(o),onMouseLeave:C(o)}},onClickAway:p}}function st(t){return A("MuiSnackbarContent",t)}H("MuiSnackbarContent",["root","message","action"]);const at=t=>{const{classes:n}=t;return D({root:["root"],action:["action"],message:["message"]},st,n)},it=k(ot,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(t,n)=>n.root})(N(({theme:t})=>{const n=t.palette.mode==="light"?.8:.98,s=_(t.palette.background.default,n);return{...t.typography.body2,color:t.vars?t.vars.palette.SnackbarContent.color:t.palette.getContrastText(s),backgroundColor:t.vars?t.vars.palette.SnackbarContent.bg:s,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(t.vars||t).shape.borderRadius,flexGrow:1,[t.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}}})),ct=k("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(t,n)=>n.message})({padding:"8px 0"}),lt=k("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(t,n)=>n.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),ut=m.forwardRef(function(n,s){const r=B({props:n,name:"MuiSnackbarContent"}),{action:i,className:d,message:l,role:b="alert",...u}=r,p=r,c=at(p);return g.jsxs(it,{role:b,square:!0,elevation:6,className:V(c.root,d),ownerState:p,ref:s,...u,children:[g.jsx(ct,{className:c.message,ownerState:p,children:l}),i?g.jsx(lt,{className:c.action,ownerState:p,children:i}):null]})});function pt(t){return A("MuiSnackbar",t)}H("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const dt=t=>{const{classes:n,anchorOrigin:s}=t,r={root:["root",`anchorOrigin${h(s.vertical)}${h(s.horizontal)}`]};return D(r,pt,n)},z=k("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:s}=t;return[n.root,n[`anchorOrigin${h(s.anchorOrigin.vertical)}${h(s.anchorOrigin.horizontal)}`]]}})(N(({theme:t})=>({zIndex:(t.vars||t).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center",variants:[{props:({ownerState:n})=>n.anchorOrigin.vertical==="top",style:{top:8,[t.breakpoints.up("sm")]:{top:24}}},{props:({ownerState:n})=>n.anchorOrigin.vertical!=="top",style:{bottom:8,[t.breakpoints.up("sm")]:{bottom:24}}},{props:({ownerState:n})=>n.anchorOrigin.horizontal==="left",style:{justifyContent:"flex-start",[t.breakpoints.up("sm")]:{left:24,right:"auto"}}},{props:({ownerState:n})=>n.anchorOrigin.horizontal==="right",style:{justifyContent:"flex-end",[t.breakpoints.up("sm")]:{right:24,left:"auto"}}},{props:({ownerState:n})=>n.anchorOrigin.horizontal==="center",style:{[t.breakpoints.up("sm")]:{left:"50%",right:"auto",transform:"translateX(-50%)"}}}]}))),St=m.forwardRef(function(n,s){const r=B({props:n,name:"MuiSnackbar"}),i=Z(),d={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{action:l,anchorOrigin:{vertical:b,horizontal:u}={vertical:"bottom",horizontal:"left"},autoHideDuration:p=null,children:c,className:f,ClickAwayListenerProps:v,ContentProps:x,disableWindowBlurListener:y=!1,message:C,onBlur:U,onClose:e,onFocus:o,onMouseEnter:a,onMouseLeave:ft,open:E,resumeHideDuration:mt,TransitionComponent:R=tt,transitionDuration:L=d,TransitionProps:{onEnter:M,onExited:O,...I}={},...$}=r,S={...r,anchorOrigin:{vertical:b,horizontal:u},autoHideDuration:p,disableWindowBlurListener:y,TransitionComponent:R,transitionDuration:L},F=dt(S),{getRootProps:G,onClickAway:W}=rt({...S}),[K,P]=m.useState(!0),q=nt({elementType:z,getSlotProps:G,externalForwardedProps:$,ownerState:S,additionalProps:{ref:s},className:[F.root,f]}),X=w=>{P(!0),O&&O(w)},J=(w,Q)=>{P(!1),M&&M(w,Q)};return!E&&K?null:g.jsx(et,{onClickAway:W,...v,children:g.jsx(z,{...q,children:g.jsx(R,{appear:!0,in:E,timeout:L,direction:b==="top"?"down":"up",onEnter:J,onExited:X,...I,children:c||g.jsx(ut,{message:C,action:l,...x})})})})});export{St as S};
