import{r as a,A as I,K as N,j as e}from"./index-l_K3aXtX.js";import{ae as O}from"./index-BXk-qLCm.js";import{u as P,V as L}from"./VanCard-CDtjGIF5.js";import{M as z}from"./Modal-DkRytsZx.js";import{T as v}from"./Typography-CZDPsgqr.js";import{B as E}from"./Box-B0WO_u7N.js";import{G as s}from"./Grid-COTxR6iq.js";import{T as A,a as b,I as C}from"./TextField-CCY5dsj2.js";import{S as w}from"./Select-D24LhUbi.js";import{M as o}from"./MenuItem-BywNSZMn.js";import{S as p}from"./Skeleton-CEGYlRwS.js";import"./iconBase-JB1XClnC.js";import"./dayjs.min-_Y4n5LdA.js";import"./Rating-DS7wC93d.js";import"./Portal-DJ62drf7.js";import"./CircularProgress-CwSTxCM5.js";import"./createSimplePaletteValueFilter-BtcuYd6h.js";import"./createSvgIcon-DbYB0CI1.js";import"./useControlled-LwTdmPAX.js";import"./visuallyHidden-Dan1xhjv.js";import"./CardMedia-Nii8uERq.js";import"./Tooltip-C8YetgCC.js";import"./useTheme-mzsciiAq.js";import"./useTheme-BJ2eetf3.js";import"./useSlot-ixWl2-B5.js";import"./Grow-DcTcdrsK.js";import"./Button-BNd6gP94.js";import"./index-pUHYBnKG.js";import"./index-Hby2BaFB.js";import"./Carousel-B55KNMwi.js";import"./index-rYpT1TzP.js";import"./index-Rnf9BJUB.js";import"./index-BCtXaJ4G.js";import"./isMuiElement-EJEjTxr9.js";import"./Menu-BKbYykOQ.js";import"./List-DgI9Fo7q.js";import"./Paper-CyNIrwR6.js";import"./Modal-B3u_ui_M.js";import"./listItemTextClasses-myzqhlWt.js";import"./dividerClasses-D7PxQeec.js";const Se=()=>{const{vans:c,loading:S,fetchVans:y}=P(),[l,V]=a.useState(""),[m,h]=a.useState(null),{translations:t}=I();N();const[n,F]=a.useState([]),[u,M]=a.useState([]);a.useEffect(()=>{c.length===0&&y()},[]);const x=a.useMemo(()=>c.filter(r=>{var i;return!(n.length>0&&!n.includes(r.sizeCategory)||u.length>0&&!u.every(f=>{var g,j;return f==="keylessEntry"?((g=r.trackingDevice)==null?void 0:g.type)==="fleet2track":(j=r.optionalFeatures)==null?void 0:j[f]})||l&&!(r.name.en.toLowerCase().includes(l.toLowerCase())||(i=r.companyName)!=null&&i.toLowerCase().includes(l.toLowerCase())))}).slice(0,6),[c,n,u,l]),k=r=>{var i,d;h({...r,name:((i=r.name)==null?void 0:i.en)||"Unnamed Van",description:((d=r.description)==null?void 0:d.en)||"No description available."})};return e.jsxs("div",{className:"max-w-full mx-auto space-y-8 bg-white",children:[e.jsxs("div",{className:"relative h-[400px] bg-cover bg-center flex flex-col gap-4 items-center justify-center",style:{backgroundImage:"url('/hero.webp')"},children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#ff0707] to-[#ff0707] opacity-90"}),e.jsxs("div",{className:"relative z-10 text-center text-white px-4",children:[e.jsx("h1",{className:"text-5xl font-extrabold",children:t.vansTitle}),e.jsx(v,{variant:"body1",className:"text-lg mt-2 max-w-2xl mx-auto",children:t.vansSubtitle})]}),e.jsx(E,{className:"sm:w-1/2 container mx-auto px-6 py-6 text-white z-50",children:e.jsxs(s,{container:!0,spacing:2,justifyContent:"center",children:[e.jsx(s,{item:!0,xs:12,sm:6,md:4,children:e.jsx(A,{placeholder:t.VanFilerform.searchPlaceholder,fullWidth:!0,variant:"outlined",value:l,onChange:r=>V(r.target.value),InputProps:{startAdornment:e.jsx(O,{className:"text-gray-600 mr-2"})},InputLabelProps:{style:{color:"white"}},sx:{"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"white"},"&:hover fieldset":{borderColor:"white"},"&.Mui-focused fieldset":{borderColor:"white"}},backgroundColor:"white",borderRadius:"5px"}})}),e.jsx(s,{item:!0,xs:12,sm:6,md:4,children:e.jsxs(b,{fullWidth:!0,variant:"outlined",children:[e.jsx(C,{sx:{color:"#333"},children:t.VanFilerform.allSizes}),e.jsxs(w,{multiple:!0,value:n,onChange:r=>F(r.target.value),renderValue:r=>r.join(", "),sx:{color:"#333","& .MuiOutlinedInput-notchedOutline":{borderColor:"white"},"&:hover .MuiOutlinedInput-notchedOutline":{borderColor:"white"},"&.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"white"},"& .MuiSvgIcon-root":{color:"#333"},backgroundColor:"white"},MenuProps:{PaperProps:{sx:{backgroundColor:"#fff",color:"#333"}}},children:[e.jsx(o,{value:"Small",children:t.VanFilerform.small}),e.jsx(o,{value:"Medium",children:t.VanFilerform.medium}),e.jsx(o,{value:"Large",children:t.VanFilerform.large})]})]})}),e.jsx(s,{item:!0,xs:12,sm:6,md:4,children:e.jsxs(b,{fullWidth:!0,variant:"outlined",children:[e.jsx(C,{sx:{color:"#333"},children:t.VanFilerform.allFeatures}),e.jsxs(w,{multiple:!0,value:u,onChange:r=>M(r.target.value),renderValue:r=>r.join(", "),sx:{color:"#333","& .MuiOutlinedInput-notchedOutline":{borderColor:"white"},"&:hover .MuiOutlinedInput-notchedOutline":{borderColor:"white"},"&.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"white"},"& .MuiSvgIcon-root":{color:"#333"},backgroundColor:"white"},MenuProps:{PaperProps:{sx:{backgroundColor:"#fff",color:"#333"}}},children:[e.jsx(o,{value:"roofRack",children:t.VanFilerform.roofRack}),e.jsx(o,{value:"airConditioning",children:t.VanFilerform.airConditioning}),e.jsx(o,{value:"towingHook",children:t.VanFilerform.towingHook}),e.jsx(o,{value:"parkingSensors",children:t.VanFilerform.parkingSensors}),e.jsx(o,{value:"keylessEntry",children:t.VanFilerform.keylessEntry})]})]})})]})})]}),e.jsxs("div",{className:"container m-auto pb-10 p-5",children:[e.jsx(s,{container:!0,spacing:2,justifyContent:"center",alignItems:"center",children:S?[...Array(6)].map((r,i)=>e.jsxs(s,{item:!0,xs:12,sm:6,md:4,children:[e.jsx(p,{variant:"rectangular",height:250,className:"rounded-xl"}),e.jsx(p,{variant:"text",className:"mt-2 w-3/4"}),e.jsx(p,{variant:"text",className:"w-1/2"})]},i)):x.length>0?x.map(r=>e.jsx(s,{item:!0,xs:12,sm:6,md:4,children:e.jsx(L,{van:r,onSelect:k})},r._id)):e.jsx(v,{className:"text-center text-xl mt-6",children:"No vans available"})}),m&&e.jsx(z,{isOpen:!!m,onClose:()=>h(null),van:m})]})]})};export{Se as default};
