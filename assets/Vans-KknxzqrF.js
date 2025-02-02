import{r as l,cA as F,j as e,g as p,f as M,aE as a,a2 as k,d0 as N,c6 as g,bp as j,bM as v,k as s,ap as d}from"./vendor-CRYhOL6r.js";import{u as I,V as O}from"./VanCard-D1x9UKC-.js";import{a as P}from"./index-BpozoEX2.js";import{M as L}from"./Modal-DmoZrbiJ.js";import"./Carousel-xnm3iIAm.js";const W=()=>{const{vans:u,loading:b,fetchVans:C}=I(),[n,w]=l.useState(""),[c,m]=l.useState(null),{translations:t}=P();F();const[o,y]=l.useState([]),[i,S]=l.useState([]);l.useEffect(()=>{u.length===0&&C()},[]);const x=l.useMemo(()=>u.filter(r=>!(o.length>0&&!o.includes(r.sizeCategory)||i.length>0&&!i.every(f=>f==="keylessEntry"?r.trackingDevice?.type==="fleet2track":r.optionalFeatures?.[f])||n&&!(r.name.en.toLowerCase().includes(n.toLowerCase())||r.companyName?.toLowerCase().includes(n.toLowerCase())))).slice(0,6),[u,o,i,n]),V=r=>{m({...r,name:r.name?.en||"Unnamed Van",description:r.description?.en||"No description available."})};return e.jsxs("div",{className:"max-w-full mx-auto space-y-8 bg-white",children:[e.jsxs("div",{className:"relative sm:h-[350px] h-[450px] bg-cover bg-center flex flex-col gap-4 items-center justify-center",style:{backgroundImage:"url('/hero.webp')"},children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#ff0707] to-[#ff0707] opacity-90"}),e.jsxs("div",{className:"relative z-10 text-center text-white px-4",children:[e.jsx("h1",{className:"text-5xl font-extrabold",children:t.vansTitle}),e.jsx(p,{variant:"body1",className:"text-lg mt-2 max-w-2xl mx-auto",children:t.vansSubtitle})]}),e.jsx(M,{className:"sm:w-1/2 container mx-auto px-6 py-4 text-white z-20",children:e.jsxs(a,{container:!0,spacing:2,justifyContent:"center",children:[e.jsx(a,{item:!0,xs:12,sm:6,md:4,children:e.jsx(k,{placeholder:t.VanFilerform.searchPlaceholder,fullWidth:!0,variant:"outlined",value:n,onChange:r=>w(r.target.value),InputProps:{startAdornment:e.jsx(N,{className:"text-gray-600 mr-2"})},InputLabelProps:{style:{color:"white"}},sx:{"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"white"},"&:hover fieldset":{borderColor:"white"},"&.Mui-focused fieldset":{borderColor:"white"}},backgroundColor:"white",borderRadius:"8px"}})}),e.jsx(a,{item:!0,xs:12,sm:6,md:4,children:e.jsxs(g,{fullWidth:!0,variant:"outlined",children:[e.jsx(j,{sx:{color:"#333"},children:t.VanFilerform.allSizes}),e.jsxs(v,{multiple:!0,value:o,onChange:r=>y(r.target.value),renderValue:r=>r.join(", "),sx:{color:"#333","& .MuiOutlinedInput-notchedOutline":{borderColor:"white"},"&:hover .MuiOutlinedInput-notchedOutline":{borderColor:"white"},"&.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"white"},"& .MuiSvgIcon-root":{color:"#333"},backgroundColor:"white",borderRadius:"8px"},MenuProps:{PaperProps:{sx:{backgroundColor:"#fff",color:"#333"}}},children:[e.jsx(s,{value:"Small",children:t.VanFilerform.small}),e.jsx(s,{value:"Medium",children:t.VanFilerform.medium}),e.jsx(s,{value:"Large",children:t.VanFilerform.large})]})]})}),e.jsx(a,{item:!0,xs:12,sm:6,md:4,children:e.jsxs(g,{fullWidth:!0,variant:"outlined",children:[e.jsx(j,{sx:{color:"#333"},children:t.VanFilerform.allFeatures}),e.jsxs(v,{multiple:!0,value:i,onChange:r=>S(r.target.value),renderValue:r=>r.join(", "),sx:{color:"#333","& .MuiOutlinedInput-notchedOutline":{borderColor:"white"},"&:hover .MuiOutlinedInput-notchedOutline":{borderColor:"white"},"&.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"white"},"& .MuiSvgIcon-root":{color:"#333"},backgroundColor:"white",borderRadius:"8px"},MenuProps:{PaperProps:{sx:{backgroundColor:"#fff",color:"#333"}}},children:[e.jsx(s,{value:"roofRack",children:t.VanFilerform.roofRack}),e.jsx(s,{value:"airConditioning",children:t.VanFilerform.airConditioning}),e.jsx(s,{value:"towingHook",children:t.VanFilerform.towingHook}),e.jsx(s,{value:"parkingSensors",children:t.VanFilerform.parkingSensors}),e.jsx(s,{value:"keylessEntry",children:t.VanFilerform.keylessEntry})]})]})})]})})]}),e.jsxs("div",{className:"container m-auto pb-10 p-5",children:[e.jsx(a,{container:!0,spacing:2,justifyContent:"center",alignItems:"center",children:b?[...Array(6)].map((r,h)=>e.jsxs(a,{item:!0,xs:12,sm:6,md:4,children:[e.jsx(d,{variant:"rectangular",height:250,className:"rounded-xl"}),e.jsx(d,{variant:"text",className:"mt-2 w-3/4"}),e.jsx(d,{variant:"text",className:"w-1/2"})]},h)):x.length>0?x.map(r=>e.jsx(a,{item:!0,xs:12,sm:6,md:4,children:e.jsx(O,{van:r,onSelect:V})},r._id)):e.jsx(p,{className:"text-center text-xl mt-6",children:"No vans available"})}),c&&e.jsx(L,{isOpen:!!c,onClose:()=>m(null),van:c})]})]})};export{W as default};
