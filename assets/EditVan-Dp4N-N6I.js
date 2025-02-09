import{r as j,bs as he,a as O,u as ge,j as e,b1 as q,m as v,ax as l,a9 as c,al as h,I as u,bv as g,bB as N,bC as k,s as y,B as _,b as W,f as S,cd as xe,c7 as J,bx as je,br as pe}from"./vendor-YnnEx5JS.js";import{P as U}from"./PackageModal-YaCDHKsD.js";const E="https://rubertogo.wedevguru.com",be=["places"],We=()=>{const[a,n]=j.useState(null);console.log(a);const{isLoaded:o}=he({googleMapsApiKey:"AIzaSyCJgOiSJeJlRdoFK_jTK-mNug5b22XPRn4",libraries:be}),{lang:x}=O(),[m,p]=j.useState("en"),[b,d]=j.useState("en"),z=ge(),P=O().id;console.log(P);const[w,X]=j.useState(!1),[Pe,we]=j.useState(!1),[Ce,Ae]=j.useState(!1),[Se,ze]=j.useState(!1),[Z,Fe]=j.useState(!1),[T,Q]=j.useState(!1),[H,C]=j.useState(!1),[Y,ee]=j.useState([]),[te,se]=j.useState({}),D=[{value:"en",label:"English"},{value:"fr",label:"French"},{value:"it",label:"Italian"},{value:"de",label:"German"}];j.useEffect(()=>{(async()=>{try{const s=await W.get(`${E}/api/vans/${P}`);n(s.data)}catch(s){console.error("Error fetching van data:",s),S.error("Failed to load van data.")}})()},[P]);const ae=t=>{if(X(t),t){const s=a.dailyPricing.Monday;Object.keys(a.dailyPricing).forEach(i=>{i!=="Monday"&&n(r=>({...r,dailyPricing:{...r.dailyPricing,[i]:{...s}}}))})}},F=t=>{n(s=>s[t]!==void 0?(se(i=>({...i,[t]:s[t]})),{...s,[t]:void 0}):{...s,[t]:te[t]||""})},I=(t,s,i)=>{n(r=>({...r,dailyPricing:{...r.dailyPricing,[t]:{...r.dailyPricing[t],[s]:i}}}))},le=t=>{ee(t),n(s=>({...s,packagePrices:t,allowPackages:!0}))},ne=()=>{C(!1)},ie=()=>{n(t=>({...t,contractImages:[...t.contractImages,{damageType:"",description:"",image:""}]}))},re=t=>{n(s=>({...s,contractImages:s.contractImages.filter((i,r)=>r!==t)}))},oe=(t,s,i)=>{n(r=>({...r,contractImages:r.contractImages.map((f,ue)=>ue===t?{...f,[s]:i}:f)}))},B=(t,s,i)=>{n(r=>({...r,restrictedBookingHours:{...r.restrictedBookingHours,[t]:{...r.restrictedBookingHours[t],[s]:i}}}))},K=(t,s)=>{n(i=>({...i,trackingDevice:{...i.trackingDevice,[t]:s}}))},L=t=>{const{name:s,value:i}=t.target;n({...a,[s]:i})},M=(t,s,i)=>{n(r=>{const f={...r[t],[s]:i};return s==="it"&&(f.en=i,f.fr=i,f.de=i),{...r,[t]:f}})},ce=t=>{n(s=>({...s,optionalFeatures:{...s.optionalFeatures,[t]:!s.optionalFeatures[t]}}))},A=(t,s,i)=>{n(r=>({...r,[t]:{...r[t],[s]:i}}))},de=async t=>{const s=new FormData;s.append("file",t);try{return(await W.post(`${E}/api/upload`,s,{headers:{"Content-Type":"multipart/form-data"}})).data.imageURL}catch(i){return console.error("Error uploading file:",i),null}},$=async(t,s)=>{const i=await Promise.all(t.map(async r=>await de(r)));s==="images"&&n(r=>({...r,images:[...r.images,...i]}))},me=async t=>{t.preventDefault();const s=localStorage.getItem("accessToken");try{(await W.put(`${E}/api/vans/${P}`,a,{headers:{Authorization:`Bearer ${s}`}})).status===200?(S.success("Van updated successfully!"),z(`/:${x}/admin/vans`)):S.error("Failed to update van.")}catch(i){console.error("Error updating van:",i),S.error("An error occurred while updating the van.")}};return a?e.jsxs("div",{className:"flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 p-4",children:[e.jsxs(q,{className:"p-8 shadow-2xl rounded-lg container",children:[e.jsxs(v,{variant:"h4",style:{marginBottom:"1rem"},className:"p-3 text-white text-center bg-blue-600 font-bold rounded",children:["Edit Van - ",a.name?.en||"Unnamed Van"]}),e.jsx("form",{onSubmit:me,children:e.jsxs(l,{container:!0,spacing:3,children:[e.jsx(R,{label:"Van Name",field:"name",selectedLang:m,setSelectedLang:p,value:a.name[m],onChange:M,languageOptions:D,style:{marginBottom:"1rem"}}),e.jsx(R,{label:"Description",field:"description",selectedLang:b,setSelectedLang:d,value:a.description[b],onChange:M,languageOptions:D,multiline:!0,rows:3}),e.jsx(l,{item:!0,xs:12,children:e.jsx(c,{fullWidth:!0,label:"Plate Number",name:"plateNumber",value:a.plateNumber,onChange:L,variant:"outlined",required:!0,className:"bg-white rounded-lg"})}),e.jsxs(l,{item:!0,xs:12,children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"font-semibold text-gray-700",children:"Daily Pricing"}),e.jsx(h,{title:"Set daily pricing details for this van.",children:e.jsx(u,{size:"small",className:"ml-1",children:e.jsx(g,{})})})]}),e.jsx(N,{control:e.jsx(k,{checked:w,onChange:t=>ae(t.target.checked)}),label:e.jsxs("div",{className:"flex items-center",children:["Apply Kilometers and Extra Per Km to All Days",e.jsx(h,{title:"Enable this to apply Monday's values to all other days.",children:e.jsx(u,{size:"small",className:"ml-1",children:e.jsx(g,{})})})]})}),Object.keys(a.dailyPricing).map(t=>e.jsxs(l,{container:!0,spacing:2,className:"mb-4",children:[e.jsx(l,{item:!0,xs:12,sm:4,children:e.jsx(c,{fullWidth:!0,label:`${t} Price Per Hour`,type:"number",value:a.dailyPricing[t].pricePerHour,onChange:s=>I(t,"pricePerHour",s.target.value),variant:"outlined",className:"bg-white rounded-lg"})}),e.jsx(l,{item:!0,xs:12,sm:4,children:e.jsx(c,{fullWidth:!0,label:`${t} Kilometers`,type:"number",value:a.dailyPricing[t].kilometers,onChange:s=>I(t,"kilometers",s.target.value),variant:"outlined",className:"bg-white rounded-lg",disabled:w&&t!=="Monday"})}),e.jsx(l,{item:!0,xs:12,sm:4,children:e.jsx(c,{fullWidth:!0,label:`${t} Extra Per Km`,type:"number",value:a.dailyPricing[t].extraPerKm,onChange:s=>I(t,"extraPerKm",s.target.value),variant:"outlined",className:"bg-white rounded-lg",disabled:w&&t!=="Monday"})})]},t))]}),e.jsx(l,{item:!0,xs:6,sm:4,children:e.jsx(N,{control:e.jsx(k,{checked:a?.preAuthorizationAmount!==void 0,onChange:()=>F("preAuthorizationAmount")}),label:e.jsxs("div",{className:"flex items-center",children:["Set Pre Authorization Amount",e.jsx(h,{title:"Enable this to set a pre-authorization amount for this van.",children:e.jsx(u,{size:"small",className:"ml-1",children:e.jsx(g,{})})})]})})}),a?.preAuthorizationAmount!==void 0&&e.jsx(l,{item:!0,xs:6,sm:6,children:e.jsx(c,{fullWidth:!0,label:"Pre Authorization Amount",name:"preAuthorizationAmount",type:"number",value:a.preAuthorizationAmount,onChange:t=>n(s=>({...s,preAuthorizationAmount:t.target.value})),variant:"outlined",className:"bg-white rounded-lg"})}),e.jsx(l,{item:!0,xs:6,sm:4,children:e.jsx(N,{control:e.jsx(k,{checked:a?.minimumHours!==void 0,onChange:()=>F("minimumHours")}),label:e.jsxs("div",{className:"flex items-center",children:["Set Minimum Hours",e.jsx(h,{title:"Enable this to set a minimum booking duration.",children:e.jsx(u,{size:"small",className:"ml-1",children:e.jsx(g,{})})})]})})}),a?.minimumHours!==void 0&&e.jsx(l,{item:!0,xs:6,sm:6,children:e.jsx(c,{fullWidth:!0,label:"Minimum Hours",name:"minimumHours",type:"number",value:a.minimumHours,onChange:t=>n(s=>({...s,minimumHours:t.target.value})),variant:"outlined",className:"bg-white rounded-lg"})}),e.jsx(l,{item:!0,xs:6,sm:4,children:e.jsx(N,{control:e.jsx(k,{checked:a?.unlimitedKilometersPrice!==void 0,onChange:()=>F("unlimitedKilometersPrice")}),label:e.jsxs("div",{className:"flex items-center",children:["Set Unlimited Kilometers",e.jsx(h,{title:"Enable this to allow unlimited kilometers with a price.",children:e.jsx(u,{size:"small",className:"ml-1",children:e.jsx(g,{})})})]})})}),a?.unlimitedKilometersPrice!==void 0&&e.jsx(l,{item:!0,xs:6,sm:6,children:e.jsx(c,{fullWidth:!0,label:"Unlimited Kilometers Price",name:"unlimitedKilometersPrice",type:"number",value:a.unlimitedKilometersPrice,onChange:t=>n(s=>({...s,unlimitedKilometersPrice:t.target.value})),variant:"outlined",className:"bg-white rounded-lg"})}),e.jsx(l,{item:!0,xs:6,sm:4,children:e.jsx(N,{control:e.jsx(k,{checked:a?.allowPackages??!1,onChange:()=>{a?.allowPackages?n(t=>({...t,allowPackages:!1,packagePrices:void 0})):(n(t=>({...t,allowPackages:!0})),C(!0))}}),label:e.jsxs("div",{className:"flex items-center",children:["Allow Package",e.jsx(h,{title:"Enable this to allow users to book packages for this van.",children:e.jsx(u,{size:"small",className:"ml-1",children:e.jsx(g,{})})})]})})}),a?.allowPackages&&e.jsx(U,{isOpen:H,onClose:()=>C(!1),onSave:t=>{const s=Object.entries(t).map(([i,r])=>({packageId:i,price:parseFloat(r)}));n(i=>({...i,packagePrices:s})),C(!1)},initialPrices:a?.packagePrices?.reduce((t,s)=>(t[s.packageId._id]=s.price,t),{})||{}}),e.jsx(l,{item:!0,xs:12,sm:4,children:e.jsx(N,{control:e.jsx(k,{checked:T,onChange:t=>Q(t.target.checked)}),label:e.jsxs("div",{className:"flex items-center",children:["Set Restricted Booking Hours",e.jsx(h,{title:"Enable this to restrict specific booking hours for this van.",children:e.jsx(u,{size:"small",className:"ml-1",children:e.jsx(g,{})})})]})})}),T&&e.jsxs(l,{item:!0,xs:12,children:[e.jsx(v,{variant:"h6",sx:{marginBottom:"10px"},className:"mb-4",children:"Weekly Restricted Booking Hours"}),Object.keys(a.restrictedBookingHours).map(t=>e.jsxs(l,{container:!0,spacing:2,className:"mb-3",children:[e.jsx(l,{item:!0,xs:6,children:e.jsx(c,{select:!0,fullWidth:!0,label:`${t} Start Time`,value:a.restrictedBookingHours[t].start,onChange:s=>B(t,"start",s.target.value),variant:"outlined",className:"bg-white rounded-lg",children:Array.from({length:24},(s,i)=>{const r=i.toString().padStart(2,"0")+":00";return e.jsx(y,{value:r,children:r},r)})})}),e.jsx(l,{item:!0,xs:6,children:e.jsx(c,{select:!0,fullWidth:!0,label:`${t} End Time`,value:a.restrictedBookingHours[t].end,onChange:s=>B(t,"end",s.target.value),variant:"outlined",className:"bg-white rounded-lg",children:Array.from({length:24},(s,i)=>{const r=i.toString().padStart(2,"0")+":00";return e.jsx(y,{value:r,children:r},r)})})})]},t))]}),e.jsx(ve,{label:e.jsxs("div",{className:"flex items-center mb-5",children:["Upload Van Images",e.jsx(h,{title:"Upload images of the van.",children:e.jsx(u,{size:"small",className:"ml-1",children:e.jsx(g,{})})})]}),images:a.images,onDrop:t=>$(t,"images")}),e.jsx(fe,{label:e.jsxs("div",{className:"flex items-center mb-5",children:["Upload Damage Images",e.jsx(h,{title:"Upload images of the damage.",children:e.jsx(u,{size:"small",className:"ml-1",children:e.jsx(g,{})})})]}),contractImages:a.contractImages,onDrop:$,onAdd:ie,onRemove:re,onChange:oe}),e.jsx(ye,{label:e.jsxs("div",{className:"flex items-center mb-5",children:["Location",e.jsx(h,{title:"Select the location of the van.",children:e.jsx(u,{size:"small",className:"ml-1",children:e.jsx(g,{})})})]}),location:a.location,onChange:A,isLoaded:o}),e.jsx(l,{item:!0,xs:6,children:e.jsx(c,{select:!0,fullWidth:!0,label:e.jsxs("div",{className:"flex items-center",children:["Fuel Type",e.jsx(h,{title:"Select the fuel type of the van.",children:e.jsx(u,{size:"small",className:"ml-1",children:e.jsx(g,{})})})]}),name:"fuelType",value:a.fuelType,onChange:L,variant:"outlined",required:!0,className:"bg-white rounded-lg",children:["Petrol","Diesel","Electric","Hybrid"].map(t=>e.jsx(y,{value:t,children:t},t))})}),e.jsx(l,{item:!0,xs:6,children:e.jsx(c,{select:!0,fullWidth:!0,label:e.jsxs("div",{className:"flex items-center",children:["Transmission Type",e.jsx(h,{title:"Select the transmission type of the van.",children:e.jsx(u,{size:"small",className:"ml-1",children:e.jsx(g,{})})})]}),name:"transmissionType",value:a.transmissionType,onChange:L,variant:"outlined",required:!0,className:"bg-white rounded-lg",children:["Manual","Automatic"].map(t=>e.jsx(y,{value:t,children:t},t))})}),e.jsx(Ne,{label:e.jsxs("div",{className:"flex items-center mb-5",children:["Optional Features",e.jsx(h,{title:"Select the optional features of the van.",children:e.jsx(u,{size:"small",className:"ml-1",children:e.jsx(g,{})})})]}),optionalFeatures:a.optionalFeatures,onChange:ce}),e.jsx(V,{label:e.jsxs("div",{className:"flex items-center mb-5",children:["External Dimensions (L × W × H)",e.jsx(h,{title:"Enter the external dimensions of the van.",children:e.jsx(u,{size:"small",className:"ml-1",children:e.jsx(g,{})})})]}),dimensions:a.externalDimensions,onChange:A,dimensionType:"externalDimensions"}),e.jsx(V,{label:e.jsxs("div",{className:"flex items-center mb-5",children:["Internal Dimensions (L × W × H)",e.jsx(h,{title:"Enter the internal dimensions of the van.",children:e.jsx(u,{size:"small",className:"ml-1",children:e.jsx(g,{})})})]}),dimensions:a.internalDimensions,onChange:A,dimensionType:"internalDimensions"}),e.jsx(ke,{label:e.jsxs("div",{className:"flex items-center mb-5",children:["Weight (Empty × Max Load)",e.jsx(h,{title:"Enter the load capacity of the van.",children:e.jsx(u,{size:"small",className:"ml-1",children:e.jsx(g,{})})})]}),weight:a.weight,onChange:A}),e.jsxs(l,{item:!0,xs:12,children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("span",{className:"font-semibold text-gray-700",children:"Traking Device"}),e.jsx(h,{title:" Set the tracking device details for this van.",children:e.jsx(u,{size:"small",className:"ml-1",children:e.jsx(g,{})})})]}),e.jsxs(l,{container:!0,spacing:2,children:[e.jsx(l,{item:!0,xs:12,children:e.jsxs(c,{select:!0,fullWidth:!0,label:"Tracking Device Type",value:a.trackingDevice.type,onChange:t=>K("type",t.target.value),variant:"outlined",required:!0,className:"bg-white rounded-lg",children:[e.jsx(y,{value:"NoDevice",children:"NoDevice"}),e.jsx(y,{value:"fleet2track",children:"Fleet2Track"}),e.jsx(y,{value:"other",children:"Other"})]})}),a.trackingDevice.type==="other"&&e.jsx(l,{item:!0,xs:12,children:e.jsx(c,{fullWidth:!0,label:"Custom Tracking Device Name",value:a.trackingDevice.customName,onChange:t=>K("customName",t.target.value),variant:"outlined",required:!0,className:"bg-white rounded-lg"})})]})]}),e.jsx(l,{item:!0,xs:12,children:e.jsx(_,{variant:"contained",color:"primary",type:"submit",fullWidth:!0,className:"flex items-center justify-center text-lg font-semibold shadow-md hover:shadow-lg transition-shadow",children:"Update Van"})})]})})]}),Z&&e.jsx(U,{isOpen:H,onClose:ne,onSave:le,initialPrices:Y})]}):e.jsx("p",{className:"text-center text-lg mt-4",children:"Loading van data..."})},R=({label:a,field:n,value:o,onChange:x,multiline:m=!1,rows:p=1})=>e.jsx(l,{item:!0,xs:12,children:e.jsx(c,{fullWidth:!0,label:a,name:n,placeholder:`Enter ${a}`,value:o,onChange:b=>x(n,"it",b.target.value),variant:"outlined",required:!0,multiline:m,rows:p,className:"bg-white rounded-lg"})}),ve=({label:a,images:n,onDrop:o})=>e.jsxs(l,{item:!0,xs:12,children:[e.jsx(v,{variant:"body1",className:"font-semibold text-gray-600 mb-2",children:a}),e.jsxs(l,{container:!0,spacing:2,children:[n.map((x,m)=>e.jsx(l,{item:!0,xs:6,sm:4,md:3,className:"relative",children:e.jsx("img",{src:x,alt:`Van Image ${m+1}`,className:"w-full h-64 object-cover rounded-lg shadow-md"})},m)),e.jsx(l,{item:!0,xs:6,sm:4,md:3,children:e.jsx(G,{onDrop:o})})]})]}),fe=({contractImages:a,onDrop:n,onAdd:o,onRemove:x,onChange:m})=>e.jsxs(l,{item:!0,xs:12,children:[e.jsx(v,{variant:"body1",className:"font-semibold text-gray-600 mb-2",children:"Contract Images"}),a.map((p,b)=>e.jsxs(l,{container:!0,spacing:2,alignItems:"center",className:"mb-4",children:[e.jsx(l,{item:!0,xs:12,sm:3,children:e.jsx(c,{fullWidth:!0,label:"Damage Type",value:p.damageType,onChange:d=>m(b,"damageType",d.target.value),variant:"outlined",className:"bg-white rounded-lg"})}),e.jsx(l,{item:!0,xs:12,sm:5,children:e.jsx(c,{fullWidth:!0,label:"Description",value:p.description,onChange:d=>m(b,"description",d.target.value),variant:"outlined",className:"bg-white rounded-lg"})}),e.jsx(l,{item:!0,xs:6,sm:3,children:p.image?e.jsx("img",{src:p.image,alt:"Contract",className:"w-full h-24 object-cover rounded-lg shadow-md"}):e.jsx(G,{onDrop:d=>n(d,"contractImages",b)})}),e.jsx(l,{item:!0,xs:1,sm:1,children:e.jsx(u,{color:"secondary",onClick:()=>x(b),children:e.jsx(xe,{})})})]},b)),e.jsx(_,{variant:"outlined",color:"primary",onClick:o,startIcon:e.jsx(J,{}),className:"mt-2",children:"Add Contract Image"})]}),ye=({location:a,onChange:n,isLoaded:o})=>{const[x,m]=j.useState(null),p=()=>{if(x){const d=x.getPlace(),z=d.formatted_address,P=d.geometry.location.lat(),w=d.geometry.location.lng();n("location","address",z),n("location","latitude",P),n("location","longitude",w)}},b=d=>{m(d)};return e.jsxs(l,{item:!0,xs:12,children:[e.jsx(v,{variant:"body1",className:"font-semibold text-gray-600",children:"Location"}),o?e.jsx(je,{onLoad:b,onPlaceChanged:p,children:e.jsx(c,{fullWidth:!0,label:"Address",name:"location.address",value:a.address,onChange:d=>n("location","address",d.target.value),variant:"outlined",required:!0,className:"bg-white rounded-lg mb-3",style:{marginBottom:"1rem"}})}):e.jsx(c,{fullWidth:!0,label:"Address",name:"location.address",value:a.address,onChange:d=>n("location","address",d.target.value),variant:"outlined",required:!0,className:"bg-white rounded-lg mb-3"}),e.jsxs(l,{container:!0,spacing:2,children:[e.jsx(l,{item:!0,xs:6,children:e.jsx(c,{fullWidth:!0,label:"Latitude",name:"location.latitude",type:"number",value:a.latitude,onChange:d=>n("location","latitude",d.target.value),variant:"outlined",required:!0,className:"bg-white rounded-lg"})}),e.jsx(l,{item:!0,xs:6,children:e.jsx(c,{fullWidth:!0,label:"Longitude",name:"location.longitude",type:"number",value:a.longitude,onChange:d=>n("location","longitude",d.target.value),variant:"outlined",required:!0,className:"bg-white rounded-lg"})})]})]})},Ne=({optionalFeatures:a,onChange:n})=>e.jsxs(l,{item:!0,xs:12,children:[e.jsx(v,{variant:"body1",className:"font-semibold text-gray-600",children:"Optional Features"}),Object.keys(a).map(o=>e.jsx(N,{control:e.jsx(k,{checked:a[o],onChange:()=>n(o),color:"primary"}),label:o.charAt(0).toUpperCase()+o.slice(1).replace(/([A-Z])/g," $1")},o))]}),V=({label:a,dimensions:n,onChange:o,dimensionType:x})=>e.jsxs(l,{item:!0,xs:12,children:[e.jsx(v,{variant:"body1",className:"font-semibold text-gray-600",children:a}),e.jsx(l,{container:!0,spacing:1,children:["length","width","height"].map(m=>e.jsx(l,{item:!0,xs:4,children:e.jsx(c,{fullWidth:!0,label:m.charAt(0).toUpperCase()+m.slice(1),name:`${x}.${m}`,value:n[m],onChange:p=>o(x,m,p.target.value),variant:"outlined",className:"bg-white rounded-lg"})},m))})]}),ke=({weight:a,onChange:n})=>e.jsxs(l,{item:!0,xs:12,children:[e.jsx(v,{variant:"body1",className:"font-semibold text-gray-600",children:"Weight (Empty & Max Load)"}),e.jsx(l,{container:!0,spacing:2,children:["empty","maxLoad"].map(o=>e.jsx(l,{item:!0,xs:6,children:e.jsx(c,{fullWidth:!0,label:o==="empty"?"Empty Weight":"Max Load",name:`weight.${o}`,value:a[o],onChange:x=>n("weight",o,x.target.value),variant:"outlined",className:"bg-white rounded-lg"})},o))})]}),G=({onDrop:a})=>{const{getRootProps:n,getInputProps:o}=pe({onDrop:a,accept:"image/*",multiple:!1});return e.jsxs(q,{...n(),className:"border-dashed border-2 border-gray-400 rounded-lg h-48 w-full flex items-center justify-center cursor-pointer hover:border-gray-500 transition-all shadow-sm hover:shadow-md",children:[e.jsx("input",{...o()}),e.jsx(J,{className:"text-gray-400 text-3xl"})]})};export{We as default};
