import{r as l,cJ as F,j as e,m as p,k,ax as a,a9 as M,d9 as N,cg as g,bA as j,bY as v,s,aw as d}from"./vendor-C042fTmz.js";import{u as I}from"./useVanStore-wufS0K7l.js";import{a as O}from"./index-BlJeMUC7.js";import{M as P}from"./Modal-WIIq7A_a.js";import{V as L}from"./VanCard-DnI_LMCN.js";import"./Carousel-DvmW3_zw.js";const H=()=>{const{vans:u,loading:b,fetchVans:w}=I(),[o,C]=l.useState(""),[c,m]=l.useState(null),{translations:t}=O();F();const[n,y]=l.useState([]),[i,S]=l.useState([]);l.useEffect(()=>{u.length===0&&w()},[]);const x=l.useMemo(()=>u.filter(r=>!(n.length>0&&!n.includes(r.sizeCategory)||i.length>0&&!i.every(f=>f==="keylessEntry"?r.trackingDevice?.type==="fleet2track":r.optionalFeatures?.[f])||o&&!(r.name.en.toLowerCase().includes(o.toLowerCase())||r.companyName?.toLowerCase().includes(o.toLowerCase())))).slice(0,6),[u,n,i,o]),V=r=>{m({...r,name:r.name?.en||"Unnamed Van",description:r.description?.en||"No description available."})};return e.jsxs("div",{className:"max-w-full mx-auto space-y-8 bg-white",children:[e.jsxs("div",{className:"relative sm:h-[350px] h-[450px] bg-cover bg-center flex flex-col gap-4 items-center justify-center",style:{backgroundImage:"url('/hero.webp')"},children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#ff0707] to-[#ff0707] opacity-90"}),e.jsxs("div",{className:"relative z-10 text-center text-white px-4",children:[e.jsx("h1",{className:"sm:text-5xl text-3xl font-extrabold",children:t.vansTitle}),e.jsx(p,{variant:"body1",className:"text-lg mt-2 max-w-2xl mx-auto",children:t.vansSubtitle})]}),e.jsx(k,{className:"sm:w-1/2 container mx-auto px-6 py-4 text-white z-20",children:e.jsxs(a,{container:!0,spacing:2,justifyContent:"center",children:[e.jsx(a,{item:!0,xs:12,sm:6,md:4,children:e.jsx(M,{placeholder:t.VanFilerform.searchPlaceholder,fullWidth:!0,variant:"outlined",value:o,onChange:r=>C(r.target.value),InputProps:{startAdornment:e.jsx(N,{className:"text-gray-600 mr-2"})},InputLabelProps:{style:{color:"white"}},sx:{"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"white"},"&:hover fieldset":{borderColor:"white"},"&.Mui-focused fieldset":{borderColor:"white"}},backgroundColor:"white",borderRadius:"8px"}})}),e.jsx(a,{item:!0,xs:12,sm:6,md:4,children:e.jsxs(g,{fullWidth:!0,variant:"outlined",children:[e.jsx(j,{sx:{color:"#333"},children:t.VanFilerform.allSizes}),e.jsxs(v,{multiple:!0,value:n,onChange:r=>y(r.target.value),renderValue:r=>r.join(", "),sx:{color:"#333","& .MuiOutlinedInput-notchedOutline":{borderColor:"white"},"&:hover .MuiOutlinedInput-notchedOutline":{borderColor:"white"},"&.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"white"},"& .MuiSvgIcon-root":{color:"#333"},backgroundColor:"white",borderRadius:"8px"},MenuProps:{PaperProps:{sx:{backgroundColor:"#fff",color:"#333"}}},children:[e.jsx(s,{value:"Small",children:t.VanFilerform.small}),e.jsx(s,{value:"Medium",children:t.VanFilerform.medium}),e.jsx(s,{value:"Large",children:t.VanFilerform.large})]})]})}),e.jsx(a,{item:!0,xs:12,sm:6,md:4,children:e.jsxs(g,{fullWidth:!0,variant:"outlined",children:[e.jsx(j,{sx:{color:"#333"},children:t.VanFilerform.allFeatures}),e.jsxs(v,{multiple:!0,value:i,onChange:r=>S(r.target.value),renderValue:r=>r.join(", "),sx:{color:"#333","& .MuiOutlinedInput-notchedOutline":{borderColor:"white"},"&:hover .MuiOutlinedInput-notchedOutline":{borderColor:"white"},"&.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"white"},"& .MuiSvgIcon-root":{color:"#333"},backgroundColor:"white",borderRadius:"8px"},MenuProps:{PaperProps:{sx:{backgroundColor:"#fff",color:"#333"}}},children:[e.jsx(s,{value:"roofRack",children:t.VanFilerform.roofRack}),e.jsx(s,{value:"airConditioning",children:t.VanFilerform.airConditioning}),e.jsx(s,{value:"towingHook",children:t.VanFilerform.towingHook}),e.jsx(s,{value:"parkingSensors",children:t.VanFilerform.parkingSensors}),e.jsx(s,{value:"keylessEntry",children:t.VanFilerform.keylessEntry})]})]})})]})})]}),e.jsxs("div",{className:"container m-auto pb-10 p-5",children:[e.jsx(a,{container:!0,spacing:2,justifyContent:"center",alignItems:"center",children:b?[...Array(6)].map((r,h)=>e.jsxs(a,{item:!0,xs:12,sm:6,md:4,children:[e.jsx(d,{variant:"rectangular",height:250,className:"rounded-xl"}),e.jsx(d,{variant:"text",className:"mt-2 w-3/4"}),e.jsx(d,{variant:"text",className:"w-1/2"})]},h)):x.length>0?x.map(r=>e.jsx(a,{item:!0,xs:12,sm:6,md:4,children:e.jsx(L,{van:r,onSelect:V})},r._id)):e.jsx(p,{className:"text-center text-xl mt-6",children:"No vans available"})}),c&&e.jsx(P,{isOpen:!!c,onClose:()=>m(null),van:c})]})]})};export{H as default};
