import{r as m,A as q,j as c,F}from"./index-DrMvIKwq.js";import{f as G}from"./index-BcTYs67B.js";import{M as N}from"./Modal-CfkloFEy.js";import{B as P}from"./Box-tqBBETVs.js";import{T}from"./Typography-BAti9wpa.js";import{T as V}from"./TextField-DvirranI.js";import{B as C}from"./Button-xUQB_oWD.js";var L="https://js.stripe.com/v3",K=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;var U=function(){for(var r=document.querySelectorAll('script[src^="'.concat(L,'"]')),e=0;e<r.length;e++){var o=r[e];if(K.test(o.src))return o}return null},b=function(r){var e="",o=document.createElement("script");o.src="".concat(L).concat(e);var n=document.head||document.body;if(!n)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return n.appendChild(o),o},X=function(r,e){!r||!r._registerWrapper||r._registerWrapper({name:"stripe-js",version:"4.6.0",startTime:e})},v=null,S=null,g=null,z=function(r){return function(){r(new Error("Failed to load Stripe.js"))}},_=function(r,e){return function(){window.Stripe?r(window.Stripe):e(new Error("Stripe.js not available"))}},H=function(r){return v!==null?v:(v=new Promise(function(e,o){if(typeof window>"u"||typeof document>"u"){e(null);return}if(window.Stripe){e(window.Stripe);return}try{var n=U();if(!(n&&r)){if(!n)n=b(r);else if(n&&g!==null&&S!==null){var l;n.removeEventListener("load",g),n.removeEventListener("error",S),(l=n.parentNode)===null||l===void 0||l.removeChild(n),n=b(r)}}g=_(e,o),S=z(o),n.addEventListener("load",g),n.addEventListener("error",S)}catch(d){o(d);return}}),v.catch(function(e){return v=null,Promise.reject(e)}))},J=function(r,e,o){if(r===null)return null;var n=r.apply(void 0,e);return X(n,o),n},h,I=!1,R=function(){return h||(h=H(null).catch(function(r){return h=null,Promise.reject(r)}),h)};Promise.resolve().then(function(){return R()}).catch(function(s){I||console.warn(s)});var oe=function(){for(var r=arguments.length,e=new Array(r),o=0;o<r;o++)e[o]=arguments[o];I=!0;var n=Date.now();return R().then(function(l){return J(l,e,n)})};const ae=({open:s,handleClose:r,otpLength:e=4,onVerify:o,onResendOtp:n})=>{const[l,d]=m.useState(Array(e).fill("")),w=m.useRef([]),[x,j]=m.useState(!1),[B,E]=m.useState(600),p=m.useRef(null),{translations:y}=q(),O=()=>{j(!1),E(600),p.current&&clearInterval(p.current),p.current=setInterval(()=>{E(i=>i<=1?(clearInterval(p.current),j(!0),0):i-1)},1e3)},M=i=>{const t=Math.floor(i/60),a=i%60;return`${t}:${a<10?"0":""}${a}`},A=(i,t)=>{var u;const{value:a}=i.target;if(/^\d$/.test(a)){const f=[...l];f[t]=a,d(f),t<e-1&&((u=w.current[t+1])==null||u.focus())}else if(a===""){const f=[...l];f[t]="",d(f)}},D=(i,t)=>{var a;if(i.key==="Backspace")if(l[t]){const u=[...l];u[t]="",d(u)}else t>0&&((a=w.current[t-1])==null||a.focus())},$=i=>{var a;i.preventDefault();const t=i.clipboardData.getData("Text").slice(0,e);if(/^\d+$/.test(t)){const u=Array.from(t).slice(0,e);d(u);const f=u.length-1;(a=w.current[f])==null||a.focus()}},k=async()=>{const i=l.join("");if(i.length<e||l.some(t=>t==="")){F.error("Please complete all OTP fields.");return}try{await o(i)}catch(t){console.error("Invalid OTP:",t)}},W=()=>{n(),O()};return m.useEffect(()=>(s&&O(),()=>{p.current&&clearInterval(p.current)}),[s]),c.jsx(N,{open:s,onClose:r,"aria-labelledby":"login-modal",children:c.jsxs(P,{className:"flex relative flex-col items-center p-10  bg-white rounded-lg shadow-lg max-w-2xl w-full",sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:[c.jsxs(T,{align:"center",variant:"h6",gutterBottom:!0,children:["`",y.loginModalTitle,"`"]}),c.jsx(P,{display:"flex",justifyContent:"center",gap:1,mb:2,children:l.map((i,t)=>c.jsx(V,{inputRef:a=>w.current[t]=a,type:"text",variant:"outlined",value:i,onChange:a=>A(a,t),onKeyDown:a=>D(a,t),onPaste:t===0?$:void 0,inputProps:{maxLength:1,inputMode:"numeric",style:{textAlign:"center",fontSize:"1.5rem",width:"2rem",height:"2rem"}}},t))}),c.jsx(T,{align:"center",variant:"body2",color:"textSecondary",children:x?"OTP has expired. Please resend.":`Time remaining: ${M(B)}`}),x&&c.jsx(C,{onClick:W,variant:"text",color:"secondary",className:"mt-2",children:y.resentCode}),c.jsx(C,{onClick:k,variant:"contained",color:"primary",className:"w-full mt-4",startIcon:c.jsx(G,{}),children:y.submitOtp})]})})};export{ae as O,oe as l};
