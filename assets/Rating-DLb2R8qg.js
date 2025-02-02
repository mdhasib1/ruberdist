import{j as i,a as ye,g as ge,r as C,u as he,s as Y,c as W,b as te,d as be,m as ne,ai as Fe,aj as Re}from"./index-DLpikvjc.js";import{u as xe}from"./Portal-C-Oqgn3D.js";import{c as ie}from"./createSvgIcon-DAAY2Ss0.js";import{c as se,d as Ve,i as ee}from"./ButtonBase-C_wHrl86.js";import{u as Se}from"./useControlled-DAqY8FYl.js";import{v as Ae}from"./visuallyHidden-Dan1xhjv.js";const Ce=ie(i.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),Me=ie(i.jsx("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");function He(o){return ge("MuiRating",o)}const I=ye("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]);function je(o){const e=o.toString().split(".")[1];return e?e.length:0}function J(o,e){if(o==null)return o;const n=Math.round(o/e)*e;return Number(n.toFixed(je(e)))}const we=o=>{const{classes:e,size:n,readOnly:m,disabled:y,emptyValueFocused:M,focusVisible:g}=o,f={root:["root",`size${te(n)}`,y&&"disabled",g&&"focusVisible",m&&"readOnly"],label:["label","pristine"],labelEmptyValue:[M&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return be(f,He,e)},Ee=Y("span",{name:"MuiRating",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:n}=o;return[{[`& .${I.visuallyHidden}`]:e.visuallyHidden},e.root,e[`size${te(n.size)}`],n.readOnly&&e.readOnly]}})(ne(({theme:o})=>({display:"inline-flex",position:"relative",fontSize:o.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",width:"min-content",WebkitTapHighlightColor:"transparent",[`&.${I.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${I.focusVisible} .${I.iconActive}`]:{outline:"1px solid #999"},[`& .${I.visuallyHidden}`]:Ae,variants:[{props:{size:"small"},style:{fontSize:o.typography.pxToRem(18)}},{props:{size:"large"},style:{fontSize:o.typography.pxToRem(30)}},{props:({ownerState:e})=>e.readOnly,style:{pointerEvents:"none"}}]}))),ae=Y("label",{name:"MuiRating",slot:"Label",overridesResolver:({ownerState:o},e)=>[e.label,o.emptyValueFocused&&e.labelEmptyValueActive]})({cursor:"inherit",variants:[{props:({ownerState:o})=>o.emptyValueFocused,style:{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"}}]}),ze=Y("span",{name:"MuiRating",slot:"Icon",overridesResolver:(o,e)=>{const{ownerState:n}=o;return[e.icon,n.iconEmpty&&e.iconEmpty,n.iconFilled&&e.iconFilled,n.iconHover&&e.iconHover,n.iconFocus&&e.iconFocus,n.iconActive&&e.iconActive]}})(ne(({theme:o})=>({display:"flex",transition:o.transitions.create("transform",{duration:o.transitions.duration.shortest}),pointerEvents:"none",variants:[{props:({ownerState:e})=>e.iconActive,style:{transform:"scale(1.2)"}},{props:({ownerState:e})=>e.iconEmpty,style:{color:(o.vars||o).palette.action.disabled}}]}))),Le=Y("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:o=>Fe(o)&&o!=="iconActive",overridesResolver:(o,e)=>{const{iconActive:n}=o;return[e.decimal,n&&e.iconActive]}})({position:"relative",variants:[{props:({iconActive:o})=>o,style:{transform:"scale(1.2)"}}]});function $e(o){const{value:e,...n}=o;return i.jsx("span",{...n})}function oe(o){const{classes:e,disabled:n,emptyIcon:m,focus:y,getLabelText:M,highlightSelectedOnly:g,hover:f,icon:O,IconContainerComponent:N,isActive:h,itemValue:r,labelProps:H,name:j,onBlur:b,onChange:_,onClick:F,onFocus:R,readOnly:P,ownerState:w,ratingValue:a,ratingValueRounded:d}=o,x=g?r===a:r<=a,T=r<=f,k=r<=y,E=r===d,B=`${j}-${se()}`,z=i.jsx(ze,{as:N,value:r,className:W(e.icon,x?e.iconFilled:e.iconEmpty,T&&e.iconHover,k&&e.iconFocus,h&&e.iconActive),ownerState:{...w,iconEmpty:!x,iconFilled:x,iconHover:T,iconFocus:k,iconActive:h},children:m&&!x?m:O});return P?i.jsx("span",{...H,children:z}):i.jsxs(C.Fragment,{children:[i.jsxs(ae,{ownerState:{...w,emptyValueFocused:void 0},htmlFor:B,...H,children:[z,i.jsx("span",{className:e.visuallyHidden,children:M(r)})]}),i.jsx("input",{className:e.visuallyHidden,onFocus:R,onBlur:b,onChange:_,onClick:F,disabled:n,value:r,id:B,type:"radio",name:j,checked:E})]})}const Ie=i.jsx(Ce,{fontSize:"inherit"}),Oe=i.jsx(Me,{fontSize:"inherit"});function Ne(o){return`${o||"0"} Star${o!==1?"s":""}`}const Xe=C.forwardRef(function(e,n){const m=he({name:"MuiRating",props:e}),{component:y="span",className:M,defaultValue:g=null,disabled:f=!1,emptyIcon:O=Oe,emptyLabelText:N="Empty",getLabelText:h=Ne,highlightSelectedOnly:r=!1,icon:H=Ie,IconContainerComponent:j=$e,max:b=5,name:_,onChange:F,onChangeActive:R,onMouseLeave:P,onMouseMove:w,precision:a=1,readOnly:d=!1,size:x="medium",value:T,...k}=m,E=se(_),[B,z]=Se({controlled:T,default:g,name:"Rating"}),D=J(B,a),le=xe(),[{hover:c,focus:U},L]=C.useState({hover:-1,focus:-1});let V=D;c!==-1&&(V=c),U!==-1&&(V=U);const[re,q]=C.useState(!1),K=C.useRef(),ce=Ve(K,n),ue=t=>{w&&w(t);const s=K.current,{right:l,left:X,width:S}=s.getBoundingClientRect();let A;le?A=(l-t.clientX)/S:A=(t.clientX-X)/S;let u=J(b*A+a/2,a);u=Re(u,a,b),L(v=>v.hover===u&&v.focus===u?v:{hover:u,focus:u}),q(!1),R&&c!==u&&R(t,u)},de=t=>{P&&P(t);const s=-1;L({hover:s,focus:s}),R&&c!==s&&R(t,s)},Q=t=>{let s=t.target.value===""?null:parseFloat(t.target.value);c!==-1&&(s=c),z(s),F&&F(t,s)},pe=t=>{t.clientX===0&&t.clientY===0||(L({hover:-1,focus:-1}),z(null),F&&parseFloat(t.target.value)===D&&F(t,null))},me=t=>{ee(t.target)&&q(!0);const s=parseFloat(t.target.value);L(l=>({hover:l.hover,focus:s}))},fe=t=>{if(c!==-1)return;ee(t.target)||q(!1);const s=-1;L(l=>({hover:l.hover,focus:s}))},[ve,Z]=C.useState(!1),$={...m,component:y,defaultValue:g,disabled:f,emptyIcon:O,emptyLabelText:N,emptyValueFocused:ve,focusVisible:re,getLabelText:h,icon:H,IconContainerComponent:j,max:b,precision:a,readOnly:d,size:x},p=we($);return i.jsxs(Ee,{as:y,ref:ce,onMouseMove:ue,onMouseLeave:de,className:W(p.root,M,d&&"MuiRating-readOnly"),ownerState:$,role:d?"img":null,"aria-label":d?h(V):null,...k,children:[Array.from(new Array(b)).map((t,s)=>{const l=s+1,X={classes:p,disabled:f,emptyIcon:O,focus:U,getLabelText:h,highlightSelectedOnly:r,hover:c,icon:H,IconContainerComponent:j,name:E,onBlur:fe,onChange:Q,onClick:pe,onFocus:me,ratingValue:V,ratingValueRounded:D,readOnly:d,ownerState:$},S=l===Math.ceil(V)&&(c!==-1||U!==-1);if(a<1){const A=Array.from(new Array(1/a));return i.jsx(Le,{className:W(p.decimal,S&&p.iconActive),ownerState:$,iconActive:S,children:A.map((u,v)=>{const G=J(l-1+(v+1)*a,a);return i.jsx(oe,{...X,isActive:!1,itemValue:G,labelProps:{style:A.length-1===v?{}:{width:G===V?`${(v+1)*a*100}%`:"0%",overflow:"hidden",position:"absolute"}}},G)})},l)}return i.jsx(oe,{...X,isActive:S,itemValue:l},l)}),!d&&!f&&i.jsxs(ae,{className:W(p.label,p.labelEmptyValue),ownerState:$,children:[i.jsx("input",{className:p.visuallyHidden,value:"",id:`${E}-empty`,type:"radio",name:E,checked:D==null,onFocus:()=>Z(!0),onBlur:()=>Z(!1),onChange:Q}),i.jsx("span",{className:p.visuallyHidden,children:N})]})]})});export{Xe as R};
