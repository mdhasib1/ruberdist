import{R as N,A as k,r as D,j as t,C as i}from"./index-DrMvIKwq.js";import{d as z}from"./dayjs.min-DY5UBfhE.js";import{u as P}from"./index-y5yuKkc0.js";import{T as b}from"./Typography-BAti9wpa.js";import{R as I}from"./Rating-CG_vgnQ1.js";import{C as L}from"./CircularProgress-B5agUqRt.js";import{C as R}from"./CardMedia-Bxz0cUI6.js";import{T as A}from"./Tooltip-BJxLh1tU.js";import{B as $}from"./Button-xUQB_oWD.js";const C=e=>{let r;const s=new Set,o=(l,d)=>{const m=typeof l=="function"?l(r):l;if(!Object.is(m,r)){const f=r;r=d??(typeof m!="object"||m===null)?m:Object.assign({},r,m),s.forEach(h=>h(r,f))}},a=()=>r,c={setState:o,getState:a,getInitialState:()=>g,subscribe:l=>(s.add(l),()=>s.delete(l))},g=r=e(o,a,c);return c},B=e=>e?C(e):C,F=e=>e;function H(e,r=F){const s=N.useSyncExternalStore(e.subscribe,()=>r(e.getState()),()=>r(e.getInitialState()));return N.useDebugValue(s),s}const S=e=>{const r=B(e),s=o=>H(r,o);return Object.assign(s,r),s},O=e=>e?S(e):S,T="https://rubertogo.com",U=O((e,r)=>({vans:[],loading:!1,error:null,page:1,totalPages:1,fetchVans:async()=>{const{loading:s,page:o,totalPages:a}=r();if(!(s||o>a)){e({loading:!0,error:null});try{const x=await(await fetch(`${T}/api/vans?page=${o}&limit=12`)).json();x&&Array.isArray(x.vans)&&e(c=>{const g=[...c.vans,...x.vans].reduce((l,d)=>(l[d._id]=d,l),{});return{vans:Object.values(g),totalPages:x.totalPages,page:c.page+1,loading:!1}})}catch(u){console.error("Error fetching vans:",u),e({error:u.message,loading:!1})}}}})),V=e=>{var o;const r=z().format("dddd"),s=(o=e.dailyPricing)==null?void 0:o.find(a=>a.day===r);return s!=null&&s.pricePerHour?`${s.pricePerHour} CHF`:"Non Disponibile"},_=e=>{var o;const r=z().format("dddd"),s=(o=e.dailyPricing)==null?void 0:o.find(a=>a.day===r);return s!=null&&s.kilometers?`${s.kilometers} km`:"Non Disponibile"},Y=({van:e,onSelect:r})=>{var c,g,l,d,m,f,h,j,w,y;const{language:s,translations:o}=k(),[a,u]=D.useState(!0),x=()=>{u(!1)};return t.jsx(i.div,{className:"relative flex  flex-col  rounded-xl overflow-hidden  transition-transform duration-300 transform  hover:shadow-2xl bg-white shadow-xl",children:t.jsxs(i.div,{className:"w-full rounded-[15px] p-[20px] border border-gray-300 bg-white shadow-md relative",children:[t.jsx(i.div,{className:"absolute inset-0 bg-[#ff0707] rounded-[15px] [clip-path:polygon(0_56%,100%_32%,100%_100%,0%_100%)]"}),t.jsx(i.div,{className:"relative z-10",children:t.jsx(i.div,{className:"text-lg font-bold text-gray-800 relative",children:t.jsxs(b,{component:"h6",className:"font-extrabold text-gray-800 text-left flex flex-col items-start justify-start text-xl md:text-2xl",style:{marginBottom:"0.3rem"},children:[t.jsxs(i.div,{className:"flex items-center gap-3 text-2xl",children:[t.jsx("img",{src:e==null?void 0:e.images[0],className:"w-6",alt:(c=e==null?void 0:e.name)==null?void 0:c.en})," ",(e==null?void 0:e.name[s])||((g=e==null?void 0:e.name)==null?void 0:g.en)," ",""]}),t.jsxs(b,{variant:"body2",className:"text-left flex items-center gap-2 text-xs",children:[t.jsx(P,{className:"text-blue-500"}),(l=e==null?void 0:e.location)==null?void 0:l.address]}),(e==null?void 0:e.averageRating)&&t.jsxs(i.div,{className:"flex justify-center items-center",children:[t.jsx(I,{name:`van-rating-${e._id}`,value:Number(e.averageRating),precision:.1,readOnly:!0,size:"small"}),t.jsxs(b,{variant:"body2",className:"ml-2 text-gray-600",children:["(",e.totalReviews," reviews)"]})]})]})})}),t.jsxs(i.div,{className:"mt-0 w-full h-[220px] relative z-10",children:[a&&t.jsx(i.div,{className:"absolute inset-0 flex items-center justify-center bg-gray-100",children:t.jsx(L,{})}),t.jsx(R,{component:"img",alt:(d=e==null?void 0:e.name)==null?void 0:d.en,image:e==null?void 0:e.images[0],title:(m=e==null?void 0:e.name)==null?void 0:m.en,className:"h-full w-full object-cover transition-transform duration-300 hover:scale-110",style:{padding:"1.5rem",objectFit:"contain",transform:"scaleX(-1)"},loading:"lazy",onLoad:x,sizes:`(max-width: 600px) 300px,
           (max-width: 1200px) 600px,
           900px`})]}),t.jsxs(i.div,{className:"relative z-20 ",children:[t.jsxs(i.div,{children:[t.jsxs(i.div,{className:"text-md uppercase text-white font-bold  text-right",children:["Tariffa Oraria: ",V(e)]}),t.jsxs(i.div,{className:"text-md uppercase text-white font-bold  text-right",children:[o.includes,": ",_(e)]})]}),t.jsx(i.div,{className:"grid grid-cols-2 gap-1 w-full mt-2",children:[{label:"Lunghezza interna",value:((f=e==null?void 0:e.internalDimensions)==null?void 0:f.length)||"Non Disponibile"},{label:"Giornaliera",value:(e==null?void 0:e.allowPackages)===!0&&((h=e==null?void 0:e.packagePrices)==null?void 0:h.length)>0?(y=(w=(j=e.packagePrices)==null?void 0:j.filter(n=>{var p;return((p=n==null?void 0:n.packageId)==null?void 0:p.duration)===1}))==null?void 0:w.map(n=>`${n.price} CHF`))==null?void 0:y.join(", "):t.jsx(i.div,{className:"flex items-center justify-center",children:t.jsx(i.div,{className:"ml-2 text-white text-sm",children:"Non Disponibile"})})},{label:"Cauzione",value:`${(e==null?void 0:e.preAuthorizationAmount)||"Non Disponibile"} CHF`},{label:"Km illimitati",value:(e==null?void 0:e.unlimitedKilometersPrice)>0?t.jsxs(i.div,{className:"flex items-center",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",className:"w-4 h-4 text-white mr-1",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"})}),(e==null?void 0:e.unlimitedKilometersPrice)+" CHF"]}):"Non Disponibile"}].map((n,p)=>t.jsx(A,{title:n.label,placement:"top",children:t.jsxs(i.div,{className:"w-full p-2 flex flex-col shadow-lg text-white justify-center items-center rounded-md bg-white/25 hover:bg-white/40 transition-colors cursor-pointer text-center",style:{color:"#fff",fontSize:"0.7rem"},children:[n.label,t.jsx(i.div,{className:"mt-[2px] font-samibold text-xs text-white",style:{color:"#fff",fontSize:"0.8rem"},children:n.value})]})},p))}),t.jsx($,{fullWidth:!0,variant:"contained",size:"large",sx:{backgroundColor:"#2463eb",color:"#fff",borderRadius:"20px",fontWeight:"bold","&:hover":{backgroundColor:"#2463eb",color:"white",borderColor:"white"},marginTop:"1rem"},onClick:()=>r(e),children:o.bookNowButton})]})]})})};export{Y as V,U as u};
