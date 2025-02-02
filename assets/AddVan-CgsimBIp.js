import{r as p,bh as xe,u as je,a as pe,j as e,aR as _,g as y,aE as r,a2 as d,af as x,I as h,bk as j,bq as k,br as P,k as N,a4 as J,c4 as be,aW as I,b as q,c3 as ve,bY as G,bm as fe,bg as ye}from"./vendor-C9ifI4XU.js";import{P as Ne}from"./PackageModal-QdOMjoib.js";const $="https://rubertogo.com",ke=["places"],He=()=>{const[s,l]=p.useState({name:{en:"",fr:"",it:"",de:""},description:{en:"",fr:"",it:"",de:""},images:[],plateNumber:"",dailyPricing:{Monday:{pricePerHour:"",kilometers:"",extraPerKm:""},Tuesday:{pricePerHour:"",kilometers:"",extraPerKm:""},Wednesday:{pricePerHour:"",kilometers:"",extraPerKm:""},Thursday:{pricePerHour:"",kilometers:"",extraPerKm:""},Friday:{pricePerHour:"",kilometers:"",extraPerKm:""},Saturday:{pricePerHour:"",kilometers:"",extraPerKm:""},Sunday:{pricePerHour:"",kilometers:"",extraPerKm:""}},minimumHours:"",unlimitedKilometersPrice:"",allowPackage:!1,packagePrices:{},externalDimensions:{length:"",width:"",height:""},internalDimensions:{length:"",width:"",height:""},weight:{empty:"",maxLoad:""},location:{address:"",latitude:"",longitude:""},fuelType:"Petrol",transmissionType:"Manual",optionalFeatures:{roofRack:!1,airConditioning:!1,towingHook:!1,parkingSensors:!1},contractImages:[],trackingDevice:{type:"NoDevice",customName:""},restrictedBookingHours:{Monday:{start:"",end:""},Tuesday:{start:"",end:""},Wednesday:{start:"",end:""},Thursday:{start:"",end:""},Friday:{start:"",end:""},Saturday:{start:"",end:""},Sunday:{start:"",end:""}}}),{isLoaded:g}=xe({googleMapsApiKey:"AIzaSyCJgOiSJeJlRdoFK_jTK-mNug5b22XPRn4",libraries:ke}),[o,u]=p.useState("it"),[b,v]=p.useState("it"),f=je(),[c,D]=p.useState(!1),[w,H]=p.useState(!1),[W,Y]=p.useState(!1),[L,Z]=p.useState(!1),[z,Q]=p.useState(!1),ee=localStorage.getItem("accessToken"),[te,K]=p.useState(!1),[se,ae]=p.useState({}),[S,re]=p.useState(!1),le=t=>{if(re(t),t){const a=s.dailyPricing.Monday;l(i=>({...i,dailyPricing:Object.keys(i.dailyPricing).reduce((n,m)=>(n[m]={...i.dailyPricing[m],kilometers:a.kilometers,extraPerKm:a.extraPerKm},n),{})}))}},ie=t=>{ae(t),l(a=>({...a,packagePrices:t,allowPackage:!0}))},ne=()=>{K(!1)},{lang:oe}=pe(),ce=async t=>{const a=new FormData;a.append("file",t);try{return(await q.post(`${$}/api/upload`,a,{headers:{"Content-Type":"multipart/form-data"}})).data.imageURL}catch(i){return console.error("Error uploading file:",i),null}},E=async(t,a,i=null)=>{const n=await Promise.all(t.map(async m=>await ce(m)));if(a==="contractImages"&&i!==null){const m=[...s.contractImages];m[i]={...m[i],image:n[0]},l({...s,contractImages:m})}else l(m=>({...m,images:[...m.images,...n]}))},C=t=>{const{name:a,value:i}=t.target;l({...s,[a]:i})},M=(t,a,i)=>{l(n=>{const m={...n[t],[a]:i};return a==="it"&&(m.en=i,m.fr=i,m.de=i),{...n,[t]:m}})},de=t=>{l(a=>({...a,optionalFeatures:{...a.optionalFeatures,[t]:!a.optionalFeatures[t]}}))},A=(t,a,i)=>{l(n=>({...n,[t]:{...n[t],[a]:i}}))},me=(t,a,i)=>{const n=[...s.contractImages];n[t]={...n[t],[a]:i},l({...s,contractImages:n})},ue=()=>{l(t=>({...t,contractImages:[...t.contractImages,{damageType:"",description:"",image:""}]}))},he=t=>{const a=s.contractImages.filter((i,n)=>n!==t);l({...s,contractImages:a})},ge=async t=>{if(t.preventDefault(),!s.plateNumber){I.error("Plate Number are required.");return}try{(await q.post(`${$}/api/vans`,s,{headers:{Authorization:`Bearer ${ee}`}})).status===201&&(f(`/:${oe}/admin/vans`),I.success("Van added successfully!"))}catch(a){a.response&&a.response.status===400&&a.response.data.message?I.error(a.response.data.message):I.error("An error occurred while adding the van."),console.error("Error submitting form:",a)}},B=[{value:"en",label:"English"},{value:"fr",label:"French"},{value:"it",label:"Italian"},{value:"de",label:"German"}],T=(t,a,i)=>{l(n=>{const m={...n.dailyPricing};return m[t][a]=i,S&&t==="Monday"&&(a==="kilometers"||a==="extraPerKm")&&Object.keys(m).forEach(F=>{F!=="Monday"&&(m[F][a]=i)}),{...n,dailyPricing:m}})},R=(t,a)=>{l(i=>({...i,trackingDevice:{...i.trackingDevice,[t]:a}}))},U=(t,a,i)=>{l(n=>({...n,restrictedBookingHours:{...n.restrictedBookingHours,[t]:{...n.restrictedBookingHours[t],[a]:i}}}))};return e.jsx("div",{className:"flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-200",children:e.jsxs(_,{className:"shadow-2xl rounded-lg container",children:[e.jsx(y,{variant:"h4",style:{marginBottom:"1rem"},className:"p-3 text-white text-center bg-blue-600 font-bold rounded",children:"Add New Van"}),e.jsx("form",{onSubmit:ge,className:"space-y-4 sm:p-12 p-4 border bg-white mt-4",children:e.jsxs(r,{container:!0,spacing:3,children:[e.jsx(O,{label:"Van Name",field:"name",selectedLang:o,setSelectedLang:u,value:s.name[o],onChange:M,languageOptions:B}),e.jsx(O,{label:"Description",field:"description",selectedLang:b,setSelectedLang:v,value:s.description[b],onChange:M,languageOptions:B,multiline:!0,rows:3}),e.jsx(r,{item:!0,xs:12,children:e.jsx(d,{fullWidth:!0,label:"Plate Number",name:"plateNumber",value:s.plateNumber,onChange:C,variant:"outlined",required:!0,className:"bg-white rounded-lg"})}),e.jsxs(r,{item:!0,xs:12,children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"font-semibold text-gray-700",children:"Daily Pricing"}),e.jsx(x,{title:"Set daily pricing details for this van.",children:e.jsx(h,{size:"small",className:"ml-1",children:e.jsx(j,{})})})]}),e.jsx(k,{control:e.jsx(P,{checked:S,onChange:t=>le(t.target.checked)}),label:e.jsxs("div",{className:"flex items-center",children:["Apply Kilometers and Extra Per Km to All Days",e.jsx(x,{title:"Enable this to apply Monday's values to all other days.",children:e.jsx(h,{size:"small",className:"ml-1",children:e.jsx(j,{})})})]})}),Object.keys(s.dailyPricing).map(t=>e.jsxs(r,{container:!0,spacing:2,className:"mb-4",children:[e.jsx(r,{item:!0,xs:12,sm:4,children:e.jsx(d,{fullWidth:!0,label:`${t} Price Per Hour`,type:"number",value:s.dailyPricing[t].pricePerHour,onChange:a=>T(t,"pricePerHour",a.target.value),variant:"outlined",className:"bg-white rounded-lg"})}),e.jsx(r,{item:!0,xs:12,sm:4,children:e.jsx(d,{fullWidth:!0,label:`${t} Kilometers`,type:"number",value:s.dailyPricing[t].kilometers,onChange:a=>T(t,"kilometers",a.target.value),variant:"outlined",className:"bg-white rounded-lg",disabled:S&&t!=="Monday"})}),e.jsx(r,{item:!0,xs:12,sm:4,children:e.jsx(d,{fullWidth:!0,label:`${t} Extra Per Km`,type:"number",value:s.dailyPricing[t].extraPerKm,onChange:a=>T(t,"extraPerKm",a.target.value),variant:"outlined",className:"bg-white rounded-lg",disabled:S&&t!=="Monday"})})]},t))]}),e.jsx(r,{item:!0,xs:6,sm:4,children:e.jsx(k,{control:e.jsx(P,{checked:z,onChange:t=>Q(t.target.checked)}),label:e.jsxs("div",{className:"flex items-center",children:["Set Pre Authorization Amount",e.jsx(x,{title:"Enable this to set a pre authorization amount for this van.",children:e.jsx(h,{size:"small",className:"ml-1",children:e.jsx(j,{})})})]})})}),z&&e.jsx(r,{item:!0,xs:6,sm:6,children:e.jsx(d,{fullWidth:!0,label:"Pre Authorization Amount",name:"preAuthorizationAmount",value:s.preAuthorizationAmount,onChange:C,variant:"outlined",required:!0,className:"bg-white rounded-lg"})}),e.jsx(r,{item:!0,xs:6,sm:4,children:e.jsx(k,{control:e.jsx(P,{checked:L,onChange:t=>Z(t.target.checked)}),label:e.jsxs("div",{className:"flex items-center",children:["Set Minimum Hours",e.jsx(x,{title:"Enable this to set a minimum number of hours for this van.",children:e.jsx(h,{size:"small",className:"ml-1",children:e.jsx(j,{})})})]})})}),L&&e.jsx(r,{item:!0,xs:6,sm:6,children:e.jsx(d,{fullWidth:!0,label:"Minimum Hours",name:"minimumHours",value:s.minimumHours,onChange:C,variant:"outlined",required:!0,className:"bg-white rounded-lg"})}),e.jsx(r,{item:!0,xs:6,sm:4,children:e.jsx(k,{control:e.jsx(P,{checked:w,onChange:t=>H(t.target.checked)}),label:e.jsxs("div",{className:"flex items-center",children:["Set Unlimited Kilometers",e.jsx(x,{title:"Enable this to allow unlimited kilometers for this van. A price must be specified.",children:e.jsx(h,{size:"small",className:"ml-1",children:e.jsx(j,{})})})]})})}),w&&e.jsx(r,{item:!0,xs:6,sm:6,children:e.jsx(d,{fullWidth:!0,label:"Unlimited Kilometers Price",name:"unlimitedKilometersPrice",value:s.unlimitedKilometersPrice,onChange:C,variant:"outlined",required:!0,className:"bg-white rounded-lg"})}),e.jsx(r,{item:!0,xs:6,sm:4,children:e.jsx(k,{control:e.jsx(P,{checked:W,onChange:t=>{const a=t.target.checked;Y(a),a&&K(!0)}}),label:e.jsxs("div",{className:"flex items-center",children:["Allow Package",e.jsx(x,{title:"Enable this to allow users to book packages for this van.",children:e.jsx(h,{size:"small",className:"ml-1",children:e.jsx(j,{})})})]})})}),e.jsx(r,{item:!0,xs:12,sm:4,children:e.jsx(k,{control:e.jsx(P,{checked:c,onChange:t=>D(t.target.checked)}),label:e.jsxs("div",{className:"flex items-center",children:["Set Restricted Booking Hours",e.jsx(x,{title:"Enable this to restrict specific booking hours for this van.",children:e.jsx(h,{size:"small",className:"ml-1",children:e.jsx(j,{})})})]})})}),W&&e.jsx(Ne,{isOpen:te,onClose:ne,onSave:ie,initialPrices:se}),c&&e.jsxs(r,{item:!0,xs:12,children:[e.jsx(y,{variant:"h6",sx:{marginBottom:"10px"},className:"mb-4",children:"Weekly Restricted Booking Hours"}),Object.keys(s.restrictedBookingHours).map(t=>e.jsxs(r,{container:!0,spacing:2,className:"mb-3",children:[e.jsx(r,{item:!0,xs:6,children:e.jsx(d,{select:!0,fullWidth:!0,label:`${t} Start Time`,value:s.restrictedBookingHours[t].start,onChange:a=>U(t,"start",a.target.value),variant:"outlined",className:"bg-white rounded-lg",children:Array.from({length:24},(a,i)=>{const n=i.toString().padStart(2,"0")+":00";return e.jsx(N,{value:n,children:n},n)})})}),e.jsx(r,{item:!0,xs:6,children:e.jsx(d,{select:!0,fullWidth:!0,label:`${t} End Time`,value:s.restrictedBookingHours[t].end,onChange:a=>U(t,"end",a.target.value),variant:"outlined",className:"bg-white rounded-lg",children:Array.from({length:24},(a,i)=>{const n=i.toString().padStart(2,"0")+":00";return e.jsx(N,{value:n,children:n},n)})})})]},t))]}),e.jsx(Pe,{label:e.jsxs("div",{className:"flex items-center mb-5",children:["Upload Van Images",e.jsx(x,{title:"Upload images of the van.",children:e.jsx(h,{size:"small",className:"ml-1",children:e.jsx(j,{})})})]}),images:s.images,onDrop:t=>E(t,"images")}),e.jsx(Ce,{label:e.jsxs("div",{className:"flex items-center mb-5",children:["Upload Damage Images",e.jsx(x,{title:"Upload images of the damage.",children:e.jsx(h,{size:"small",className:"ml-1",children:e.jsx(j,{})})})]}),contractImages:s.contractImages,onDrop:E,onAdd:ue,onRemove:he,onChange:me}),e.jsx(we,{label:e.jsxs("div",{className:"flex items-center mb-5",children:["Location",e.jsx(x,{title:"Select the location of the van.",children:e.jsx(h,{size:"small",className:"ml-1",children:e.jsx(j,{})})})]}),location:s.location,onChange:A,isLoaded:g}),e.jsx(r,{item:!0,xs:6,children:e.jsx(d,{select:!0,fullWidth:!0,label:e.jsxs("div",{className:"flex items-center",children:["Fuel Type",e.jsx(x,{title:"Select the fuel type of the van.",children:e.jsx(h,{size:"small",className:"ml-1",children:e.jsx(j,{})})})]}),name:"fuelType",value:s.fuelType,onChange:C,variant:"outlined",required:!0,className:"bg-white rounded-lg",children:["Petrol","Diesel","Electric","Hybrid"].map(t=>e.jsx(N,{value:t,children:t},t))})}),e.jsx(r,{item:!0,xs:6,children:e.jsx(d,{select:!0,fullWidth:!0,label:e.jsxs("div",{className:"flex items-center",children:["Transmission Type",e.jsx(x,{title:"Select the transmission type of the van.",children:e.jsx(h,{size:"small",className:"ml-1",children:e.jsx(j,{})})})]}),name:"transmissionType",value:s.transmissionType,onChange:C,variant:"outlined",required:!0,className:"bg-white rounded-lg",children:["Manual","Automatic"].map(t=>e.jsx(N,{value:t,children:t},t))})}),e.jsx(Se,{label:e.jsxs("div",{className:"flex items-center mb-5",children:["Optional Features",e.jsx(x,{title:"Select the optional features of the van.",children:e.jsx(h,{size:"small",className:"ml-1",children:e.jsx(j,{})})})]}),optionalFeatures:s.optionalFeatures,onChange:de}),e.jsx(V,{label:e.jsxs("div",{className:"flex items-center mb-5",children:["External Dimensions (L × W × H)",e.jsx(x,{title:"Enter the external dimensions of the van.",children:e.jsx(h,{size:"small",className:"ml-1",children:e.jsx(j,{})})})]}),dimensions:s.externalDimensions,onChange:A,dimensionType:"externalDimensions"}),e.jsx(V,{label:e.jsxs("div",{className:"flex items-center mb-5",children:["Internal Dimensions (L × W × H)",e.jsx(x,{title:"Enter the internal dimensions of the van.",children:e.jsx(h,{size:"small",className:"ml-1",children:e.jsx(j,{})})})]}),dimensions:s.internalDimensions,onChange:A,dimensionType:"internalDimensions"}),e.jsx(Ae,{label:e.jsxs("div",{className:"flex items-center mb-5",children:["Weight (Empty × Max Load)",e.jsx(x,{title:"Enter the load capacity of the van.",children:e.jsx(h,{size:"small",className:"ml-1",children:e.jsx(j,{})})})]}),weight:s.weight,onChange:A}),e.jsxs(r,{item:!0,xs:12,children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("span",{className:"font-semibold text-gray-700",children:"Traking Device"}),e.jsx(x,{title:" Set the tracking device details for this van.",children:e.jsx(h,{size:"small",className:"ml-1",children:e.jsx(j,{})})})]}),e.jsxs(r,{container:!0,spacing:2,children:[e.jsx(r,{item:!0,xs:12,children:e.jsxs(d,{select:!0,fullWidth:!0,label:"Tracking Device Type",value:s.trackingDevice.type,onChange:t=>R("type",t.target.value),variant:"outlined",required:!0,className:"bg-white rounded-lg",children:[e.jsx(N,{value:"NoDevice",children:"NoDevice"}),e.jsx(N,{value:"fleet2track",children:"Fleet2Track"}),e.jsx(N,{value:"other",children:"Other"})]})}),s.trackingDevice.type==="other"&&e.jsx(r,{item:!0,xs:12,children:e.jsx(d,{fullWidth:!0,label:"Custom Tracking Device Name",value:s.trackingDevice.customName,onChange:t=>R("customName",t.target.value),variant:"outlined",required:!0,className:"bg-white rounded-lg"})})]})]}),e.jsx(r,{item:!0,xs:12,children:e.jsxs(J,{variant:"contained",color:"primary",type:"submit",fullWidth:!0,className:"flex items-center justify-center text-lg font-semibold shadow-md hover:shadow-lg transition-shadow",children:[e.jsx(be,{className:"mr-2"}),"Add Van"]})})]})})]})})},O=({label:s,field:l,value:g,onChange:o,multiline:u=!1,rows:b=1})=>e.jsx(r,{item:!0,xs:12,children:e.jsx(d,{fullWidth:!0,label:s,name:l,placeholder:`Enter ${s}`,value:g,onChange:v=>o(l,"it",v.target.value),variant:"outlined",required:!0,multiline:u,rows:b,className:"bg-white rounded-lg"})}),Pe=({label:s,images:l,onDrop:g})=>e.jsxs(r,{item:!0,xs:12,children:[e.jsx(y,{variant:"body1",className:"font-semibold text-gray-600 mb-2",children:s}),e.jsxs(r,{container:!0,spacing:2,children:[l.map((o,u)=>e.jsx(r,{item:!0,xs:6,sm:4,md:3,className:"relative",children:e.jsx("img",{src:o,alt:`Van Image ${u+1}`,className:"w-full h-48 object-cover rounded-lg shadow-md"})},u)),e.jsx(r,{item:!0,xs:6,sm:4,md:3,children:e.jsx(X,{onDrop:g})})]})]}),Ce=({label:s,contractImages:l,onDrop:g,onAdd:o,onRemove:u,onChange:b})=>e.jsxs(r,{item:!0,xs:12,children:[e.jsx(y,{variant:"body1",className:"font-semibold text-gray-600 mb-2",children:s}),l.map((v,f)=>e.jsxs(r,{container:!0,spacing:2,alignItems:"center",className:"mb-4",children:[e.jsx(r,{item:!0,xs:12,sm:3,children:e.jsx(d,{fullWidth:!0,label:"Damage Type",value:v.damageType,onChange:c=>b(f,"damageType",c.target.value),variant:"outlined",className:"bg-white rounded-lg"})}),e.jsx(r,{item:!0,xs:12,sm:5,children:e.jsx(d,{fullWidth:!0,label:"Description",value:v.description,onChange:c=>b(f,"description",c.target.value),variant:"outlined",className:"bg-white rounded-lg"})}),e.jsx(r,{item:!0,xs:6,sm:3,children:v.image?e.jsx("img",{src:v.image,alt:"Contract",className:"w-full h-48 object-cover rounded-lg shadow-md"}):e.jsx(X,{onDrop:c=>g(c,"contractImages",f)})}),e.jsx(r,{item:!0,xs:1,sm:1,children:e.jsx(h,{color:"secondary",onClick:()=>u(f),children:e.jsx(ve,{})})})]},f)),e.jsx(J,{variant:"outlined",color:"primary",onClick:o,startIcon:e.jsx(G,{}),className:"mt-2",children:"Add damage image"})]}),we=({location:s,onChange:l,isLoaded:g,label:o})=>{const[u,b]=p.useState(null),v=()=>{if(u){const c=u.getPlace(),D=c.formatted_address,w=c.geometry.location.lat(),H=c.geometry.location.lng();l("location","address",D),l("location","latitude",w),l("location","longitude",H)}},f=c=>{b(c)};return e.jsxs(r,{item:!0,xs:12,children:[e.jsx(y,{variant:"body1",className:"font-semibold text-gray-600",children:o}),g?e.jsx(fe,{onLoad:f,onPlaceChanged:v,children:e.jsx(d,{fullWidth:!0,label:"Address",name:"location.address",value:s.address,onChange:c=>l("location","address",c.target.value),variant:"outlined",required:!0,className:"bg-white rounded-lg mb-3",style:{marginBottom:"1rem"}})}):e.jsx(d,{fullWidth:!0,label:"Address",name:"location.address",value:s.address,onChange:c=>l("location","address",c.target.value),variant:"outlined",required:!0,className:"bg-white rounded-lg mb-3"}),e.jsxs(r,{container:!0,spacing:2,children:[e.jsx(r,{item:!0,xs:6,children:e.jsx(d,{fullWidth:!0,label:"Latitude",name:"location.latitude",type:"number",value:s.latitude,onChange:c=>l("location","latitude",c.target.value),variant:"outlined",required:!0,className:"bg-white rounded-lg"})}),e.jsx(r,{item:!0,xs:6,children:e.jsx(d,{fullWidth:!0,label:"Longitude",name:"location.longitude",type:"number",value:s.longitude,onChange:c=>l("location","longitude",c.target.value),variant:"outlined",required:!0,className:"bg-white rounded-lg"})})]})]})},Se=({optionalFeatures:s,onChange:l,label:g})=>e.jsxs(r,{item:!0,xs:12,children:[e.jsx(y,{variant:"body1",className:"font-semibold text-gray-600",children:g}),Object.keys(s).map(o=>e.jsx(k,{control:e.jsx(P,{checked:s[o],onChange:()=>l(o),color:"primary"}),label:o.charAt(0).toUpperCase()+o.slice(1).replace(/([A-Z])/g," $1")},o))]}),V=({label:s,dimensions:l,onChange:g,dimensionType:o})=>e.jsxs(r,{item:!0,xs:12,children:[e.jsx(y,{variant:"body1",className:"font-semibold text-gray-600",children:s}),e.jsx(r,{container:!0,spacing:1,children:["length","width","height"].map(u=>e.jsx(r,{item:!0,xs:4,children:e.jsx(d,{fullWidth:!0,label:u.charAt(0).toUpperCase()+u.slice(1),name:`${o}.${u}`,value:l[u],onChange:b=>g(o,u,b.target.value),variant:"outlined",className:"bg-white rounded-lg"})},u))})]}),Ae=({weight:s,onChange:l,label:g})=>e.jsxs(r,{item:!0,xs:12,children:[e.jsx(y,{variant:"body1",className:"font-semibold text-gray-600",children:g}),e.jsx(r,{container:!0,spacing:2,children:["empty","maxLoad"].map(o=>e.jsx(r,{item:!0,xs:6,children:e.jsx(d,{fullWidth:!0,label:o==="empty"?"Empty Weight":"Max Load",name:`weight.${o}`,value:s[o],onChange:u=>l("weight",o,u.target.value),variant:"outlined",className:"bg-white rounded-lg"})},o))})]}),X=({onDrop:s})=>{const{getRootProps:l,getInputProps:g}=ye({onDrop:s,accept:"image/*",multiple:!1});return e.jsxs(_,{...l(),className:"border-dashed border-2 border-gray-400 rounded-lg h-48 w-full flex items-center justify-center cursor-pointer hover:border-gray-500 transition-all shadow-sm hover:shadow-md",children:[e.jsx("input",{...g()}),e.jsx(G,{className:"text-gray-400 text-3xl"})]})};export{He as default};
