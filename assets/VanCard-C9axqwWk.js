import{r as x,j as e,m as l,cA as h,bX as u,C as g,ck as f,al as p,B as j,a5 as o}from"./vendor-Cfy4xQX5.js";import{a as b}from"./index-BrCGVfUY.js";const w=t=>{const a=o().format("dddd"),s=t.dailyPricing?.find(r=>r.day===a);return s?.pricePerHour?`${s.pricePerHour} CHF`:"Non Disponibile"},N=t=>{const a=o().format("dddd"),s=t.dailyPricing?.find(r=>r.day===a);return s?.kilometers?`${s.kilometers} km`:"Non Disponibile"},k=({van:t,onSelect:a})=>{const{language:s,translations:r}=b(),[n,c]=x.useState(!0),d=()=>{c(!1)};return e.jsx("div",{className:"relative flex  flex-col  rounded-xl overflow-hidden  transition-transform duration-300 transform  hover:shadow-2xl bg-white shadow-xl",children:e.jsxs("div",{className:"w-full rounded-[15px] p-[20px] border border-gray-300 bg-white shadow-md relative",children:[e.jsx("div",{className:"absolute inset-0 bg-[#ff0707] rounded-[15px] [clip-path:polygon(0_56%,100%_32%,100%_100%,0%_100%)]"}),e.jsx("div",{className:"relative z-10",children:e.jsx("div",{className:"text-lg font-bold text-gray-800 relative",children:e.jsxs(l,{component:"h6",className:"font-extrabold text-gray-800 text-left flex flex-col items-start justify-start text-xl md:text-2xl",style:{marginBottom:"0.3rem"},children:[e.jsxs("div",{className:"flex items-center gap-3 text-2xl",children:[e.jsx("img",{src:t?.images[0],className:"w-6",alt:t?.name?.en})," ",t?.name[s]||t?.name?.en," ",""]}),e.jsxs(l,{variant:"body2",className:"text-left flex items-center gap-2 text-xs",children:[e.jsx(h,{className:"text-blue-500"}),t?.location?.address]}),t?.averageRating&&e.jsxs("div",{className:"flex justify-center items-center",children:[e.jsx(u,{name:`van-rating-${t._id}`,value:Number(t.averageRating),precision:.1,readOnly:!0,size:"small"}),e.jsxs(l,{variant:"body2",className:"ml-2 text-gray-600",children:["(",t.totalReviews," reviews)"]})]})]})})}),e.jsxs("div",{className:"mt-0 w-full h-[220px] relative z-10",children:[n&&e.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-gray-100",children:e.jsx(g,{})}),e.jsx(f,{component:"img",alt:t?.name?.en,image:t?.images[0],title:t?.name?.en,className:"h-full w-full object-cover transition-transform duration-300 hover:scale-110",style:{padding:"1.5rem",objectFit:"contain",transform:"scaleX(-1)"},loading:"lazy",onLoad:d,sizes:`(max-width: 600px) 300px,
         (max-width: 1200px) 600px,
         900px`})]}),e.jsxs("div",{className:"relative z-20 ",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"text-md uppercase text-white font-bold  text-right",children:["Tariffa Oraria: ",w(t)]}),e.jsxs("div",{className:"text-md uppercase text-white font-bold  text-right",children:[r.includes,": ",N(t)]})]}),e.jsx("div",{className:"grid grid-cols-2 gap-1 w-full mt-2",children:[{label:"Lunghezza interna",value:t?.internalDimensions?.length||"Non Disponibile"},{label:"Giornaliera",value:t?.allowPackages===!0&&t?.packagePrices?.length>0?t.packagePrices?.filter(i=>i?.packageId?.duration===1)?.map(i=>`${i.price} CHF`)?.join(", "):e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("div",{className:"ml-2 text-white text-sm",children:"Non Disponibile"})})},{label:"Cauzione",value:`${t?.preAuthorizationAmount||"Non Disponibile"} CHF`},{label:"Km illimitati",value:t?.unlimitedKilometersPrice>0?e.jsxs("div",{className:"flex items-center",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",className:"w-4 h-4 text-white mr-1",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"})}),t?.unlimitedKilometersPrice+" CHF"]}):"Non Disponibile"}].map((i,m)=>e.jsx(p,{title:i.label,placement:"top",children:e.jsxs("div",{className:"w-full p-2 flex flex-col shadow-lg text-white justify-center items-center rounded-md bg-white/25 hover:bg-white/40 transition-colors cursor-pointer text-center",style:{color:"#fff",fontSize:"0.7rem"},children:[i.label,e.jsx("div",{className:"mt-[2px] font-samibold text-xs text-white",style:{color:"#fff",fontSize:"0.8rem"},children:i.value})]})},m))}),e.jsx(j,{fullWidth:!0,variant:"contained",size:"large",sx:{backgroundColor:"#2463eb",color:"#fff",borderRadius:"20px",fontWeight:"bold","&:hover":{backgroundColor:"#2463eb",color:"white",borderColor:"white"},marginTop:"1rem"},onClick:()=>a(t),children:r.bookNowButton})]})]})})};export{k as V};
