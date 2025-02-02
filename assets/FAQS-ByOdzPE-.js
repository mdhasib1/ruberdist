import{r as c,j as e,c as S,u as _,h as z,d as J}from"./index-B_XR-bXS.js";import{b as K,c as X}from"./index-BgqZxzyz.js";import{T as P}from"./Typography-CuI5uYqX.js";import{h as Y}from"./proxy-ghLGn7f2.js";import{a as $,g as M,u as T,s as y,b as k,m as b}from"./createSimplePaletteValueFilter-BqFbd0Em.js";import{u as D}from"./useSlot-CiWiNTR6.js";import{u as Z}from"./useControlled-C95e4nO2.js";import{C as oo}from"./Collapse-CPlKmKZ2.js";import{P as so}from"./Paper-Dn5NJgTn.js";import{B as to}from"./CircularProgress-CnUP9nIX.js";const E=c.createContext({});function eo(o){return M("MuiAccordion",o)}const R=$("MuiAccordion",["root","heading","rounded","expanded","disabled","gutters","region"]),ro=o=>{const{classes:s,square:t,expanded:a,disabled:n,disableGutters:d}=o;return k({root:["root",!t&&"rounded",a&&"expanded",n&&"disabled",!d&&"gutters"],heading:["heading"],region:["region"]},eo,s)},ao=y(so,{name:"MuiAccordion",slot:"Root",overridesResolver:(o,s)=>{const{ownerState:t}=o;return[{[`& .${R.region}`]:s.region},s.root,!t.square&&s.rounded,!t.disableGutters&&s.gutters]}})(b(({theme:o})=>{const s={duration:o.transitions.duration.shortest};return{position:"relative",transition:o.transitions.create(["margin"],s),overflowAnchor:"none","&::before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(o.vars||o).palette.divider,transition:o.transitions.create(["opacity","background-color"],s)},"&:first-of-type":{"&::before":{display:"none"}},[`&.${R.expanded}`]:{"&::before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&::before":{display:"none"}}},[`&.${R.disabled}`]:{backgroundColor:(o.vars||o).palette.action.disabledBackground}}}),b(({theme:o})=>({variants:[{props:s=>!s.square,style:{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(o.vars||o).shape.borderRadius,borderTopRightRadius:(o.vars||o).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(o.vars||o).shape.borderRadius,borderBottomRightRadius:(o.vars||o).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}}},{props:s=>!s.disableGutters,style:{[`&.${R.expanded}`]:{margin:"16px 0"}}}]}))),no=y("h3",{name:"MuiAccordion",slot:"Heading",overridesResolver:(o,s)=>s.heading})({all:"unset"}),io=c.forwardRef(function(s,t){const a=T({props:s,name:"MuiAccordion"}),{children:n,className:d,defaultExpanded:l=!1,disabled:u=!1,disableGutters:r=!1,expanded:i,onChange:m,square:h=!1,slots:v={},slotProps:A={},TransitionComponent:w,TransitionProps:g,...x}=a,[p,G]=Z({controlled:i,default:l,name:"Accordion",state:"expanded"}),B=c.useCallback(O=>{G(!p),m&&m(O,!p)},[p,m,G]),[j,...F]=c.Children.toArray(n),U=c.useMemo(()=>({expanded:p,disabled:u,disableGutters:r,toggle:B}),[p,u,r,B]),C={...a,square:h,disabled:u,disableGutters:r,expanded:p},N=ro(C),V={transition:w,...v},W={transition:g,...A},I={slots:V,slotProps:W},[q,H]=D("heading",{elementType:no,externalForwardedProps:I,className:N.heading,ownerState:C}),[L,Q]=D("transition",{elementType:oo,externalForwardedProps:I,ownerState:C});return e.jsxs(ao,{className:S(N.root,d),ref:t,ownerState:C,square:h,...x,children:[e.jsx(q,{...H,children:e.jsx(E.Provider,{value:U,children:j})}),e.jsx(L,{in:p,timeout:"auto",...Q,children:e.jsx("div",{"aria-labelledby":j.props.id,id:j.props["aria-controls"],role:"region",className:N.region,children:F})})]})});function co(o){return M("MuiAccordionDetails",o)}$("MuiAccordionDetails",["root"]);const lo=o=>{const{classes:s}=o;return k({root:["root"]},co,s)},po=y("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(o,s)=>s.root})(b(({theme:o})=>({padding:o.spacing(1,2,2)}))),uo=c.forwardRef(function(s,t){const a=T({props:s,name:"MuiAccordionDetails"}),{className:n,...d}=a,l=a,u=lo(l);return e.jsx(po,{className:S(u.root,n),ref:t,ownerState:l,...d})});function mo(o){return M("MuiAccordionSummary",o)}const f=$("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),go=o=>{const{classes:s,expanded:t,disabled:a,disableGutters:n}=o;return k({root:["root",t&&"expanded",a&&"disabled",!n&&"gutters"],focusVisible:["focusVisible"],content:["content",t&&"expanded",!n&&"contentGutters"],expandIconWrapper:["expandIconWrapper",t&&"expanded"]},mo,s)},xo=y(to,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(o,s)=>s.root})(b(({theme:o})=>{const s={duration:o.transitions.duration.shortest};return{display:"flex",width:"100%",minHeight:48,padding:o.spacing(0,2),transition:o.transitions.create(["min-height","background-color"],s),[`&.${f.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},[`&.${f.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity},[`&:hover:not(.${f.disabled})`]:{cursor:"pointer"},variants:[{props:t=>!t.disableGutters,style:{[`&.${f.expanded}`]:{minHeight:64}}}]}})),fo=y("span",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(o,s)=>s.content})(b(({theme:o})=>({display:"flex",textAlign:"start",flexGrow:1,margin:"12px 0",variants:[{props:s=>!s.disableGutters,style:{transition:o.transitions.create(["margin"],{duration:o.transitions.duration.shortest}),[`&.${f.expanded}`]:{margin:"20px 0"}}}]}))),bo=y("span",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(o,s)=>s.expandIconWrapper})(b(({theme:o})=>({display:"flex",color:(o.vars||o).palette.action.active,transform:"rotate(0deg)",transition:o.transitions.create("transform",{duration:o.transitions.duration.shortest}),[`&.${f.expanded}`]:{transform:"rotate(180deg)"}}))),yo=c.forwardRef(function(s,t){const a=T({props:s,name:"MuiAccordionSummary"}),{children:n,className:d,expandIcon:l,focusVisibleClassName:u,onClick:r,...i}=a,{disabled:m=!1,disableGutters:h,expanded:v,toggle:A}=c.useContext(E),w=p=>{A&&A(p),r&&r(p)},g={...a,expanded:v,disabled:m,disableGutters:h},x=go(g);return e.jsxs(xo,{focusRipple:!1,disableRipple:!0,disabled:m,"aria-expanded":v,className:S(x.root,d),focusVisibleClassName:S(x.focusVisible,u),onClick:w,ref:t,ownerState:g,...i,children:[e.jsx(fo,{className:x.content,ownerState:g,children:n}),l&&e.jsx(bo,{className:x.expandIconWrapper,ownerState:g,children:l})]})}),ho="https://rubertogo.com",Mo=()=>{const[o,s]=c.useState([]),[t,a]=c.useState(!1),{lang:n}=_(),{translations:d}=z();c.useEffect(()=>{l()},[n]);const l=async()=>{try{const i=(await J.get(`${ho}/api/faqs`)).data.data;s(i)}catch(r){console.error("Error fetching FAQs:",r)}},u=r=>(i,m)=>{a(m?r:!1)};return e.jsxs("div",{className:"bg-blue-100 max-w-full shadow-lg py-20 border-b-2",children:[e.jsx(P,{style:{marginBottom:"20px"},variant:"h4",className:"text-center font-bold mb-8 text-gray-800",children:d.faqsTitle}),e.jsx("div",{className:"space-y-4 max-w-4xl mx-auto p-5",children:o.map((r,i)=>e.jsx(Y.div,{layout:!0,transition:{duration:.3},children:e.jsxs(io,{expanded:t===`panel${i}`,onChange:u(`panel${i}`),elevation:0,className:"border-b border-gray-200 rounded-md shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out",children:[e.jsx(yo,{expandIcon:t===`panel${i}`?e.jsx(K,{className:"text-red-500"}):e.jsx(X,{className:"text-gray-500"}),"aria-controls":`panel${i}bh-content`,id:`panel${i}bh-header`,className:"cursor-pointer",children:e.jsx(P,{variant:"h6",className:"font-semibold text-gray-800",children:r.question[n]||r.question.en})}),e.jsx(uo,{children:e.jsx(P,{className:"text-gray-600",children:r.answer[n]||r.answer.en})})]})},r._id))})]})};export{Mo as F};
