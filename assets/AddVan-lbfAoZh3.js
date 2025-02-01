import{r as p,a as xe,u as je,j as e,F as T,d as $}from"./index-DrMvIKwq.js";import{u as pe,A as be}from"./esm-HUilWcXb.js";import{u as ve}from"./index-ZT8RtkrU.js";import{P as x,a1 as fe,a0 as ye,_}from"./index-y5yuKkc0.js";import{P as Ne}from"./PackageModal-C6rrHwWx.js";import{C as G}from"./Card-locYS_tZ.js";import{T as y}from"./Typography-BAti9wpa.js";import{G as r}from"./Grid-BqE4Oht1.js";import{T as m}from"./TextField-DvirranI.js";import{T as j}from"./Tooltip-BJxLh1tU.js";import{I as h}from"./IconButton-BGQYt6kH.js";import{F as k,C as P}from"./FormControlLabel-B2fud-Wt.js";import{M as N}from"./MenuItem-8srXigvG.js";import{B as J}from"./Button-xUQB_oWD.js";import"./index-COvJ5x3S.js";import"./iconBase-BBLIWj70.js";import"./createSimplePaletteValueFilter-zjTMkHT-.js";import"./Paper-C4BDKHkT.js";import"./useTheme-C3_UZ2QD.js";import"./useTheme-CepysXf6.js";import"./index-pDPmJGlT.js";import"./useSlot-BWhg9WXJ.js";import"./CircularProgress-B5agUqRt.js";import"./Select-DJdQC6kX.js";import"./Menu-ComLaOXz.js";import"./Portal-BMjECl0g.js";import"./Grow-B1pBNw31.js";import"./List-BLDT_Zsz.js";import"./Modal-CfkloFEy.js";import"./useControlled-Bio4-BJG.js";import"./createSvgIcon-CgYohZ5P.js";import"./isMuiElement-LlRumiQy.js";import"./listItemTextClasses--ZWm_3O6.js";import"./dividerClasses-CP17GPn_.js";const q="https://rubertogo.com",ke=["places"],ct=()=>{const[s,i]=p.useState({name:{en:"",fr:"",it:"",de:""},description:{en:"",fr:"",it:"",de:""},images:[],plateNumber:"",dailyPricing:{Monday:{pricePerHour:"",kilometers:"",extraPerKm:""},Tuesday:{pricePerHour:"",kilometers:"",extraPerKm:""},Wednesday:{pricePerHour:"",kilometers:"",extraPerKm:""},Thursday:{pricePerHour:"",kilometers:"",extraPerKm:""},Friday:{pricePerHour:"",kilometers:"",extraPerKm:""},Saturday:{pricePerHour:"",kilometers:"",extraPerKm:""},Sunday:{pricePerHour:"",kilometers:"",extraPerKm:""}},minimumHours:"",unlimitedKilometersPrice:"",allowPackage:!1,packagePrices:{},externalDimensions:{length:"",width:"",height:""},internalDimensions:{length:"",width:"",height:""},weight:{empty:"",maxLoad:""},location:{address:"",latitude:"",longitude:""},fuelType:"Petrol",transmissionType:"Manual",optionalFeatures:{roofRack:!1,airConditioning:!1,towingHook:!1,parkingSensors:!1},contractImages:[],trackingDevice:{type:"NoDevice",customName:""},restrictedBookingHours:{Monday:{start:"",end:""},Tuesday:{start:"",end:""},Wednesday:{start:"",end:""},Thursday:{start:"",end:""},Friday:{start:"",end:""},Saturday:{start:"",end:""},Sunday:{start:"",end:""}}}),{isLoaded:g}=pe({googleMapsApiKey:"AIzaSyCJgOiSJeJlRdoFK_jTK-mNug5b22XPRn4",libraries:ke}),[o,u]=p.useState("it"),[b,v]=p.useState("it"),f=xe(),[c,I]=p.useState(!1),[w,F]=p.useState(!1),[W,Z]=p.useState(!1),[L,Q]=p.useState(!1),[z,Y]=p.useState(!1),ee=localStorage.getItem("accessToken"),[te,K]=p.useState(!1),[se,ae]=p.useState({}),[S,re]=p.useState(!1),ie=t=>{if(re(t),t){const a=s.dailyPricing.Monday;i(l=>({...l,dailyPricing:Object.keys(l.dailyPricing).reduce((n,d)=>(n[d]={...l.dailyPricing[d],kilometers:a.kilometers,extraPerKm:a.extraPerKm},n),{})}))}},le=t=>{ae(t),i(a=>({...a,packagePrices:t,allowPackage:!0}))},ne=()=>{K(!1)},{lang:oe}=je(),ce=async t=>{const a=new FormData;a.append("file",t);try{return(await $.post(`${q}/api/upload`,a,{headers:{"Content-Type":"multipart/form-data"}})).data.imageURL}catch(l){return console.error("Error uploading file:",l),null}},E=async(t,a,l=null)=>{const n=await Promise.all(t.map(async d=>await ce(d)));if(a==="contractImages"&&l!==null){const d=[...s.contractImages];d[l]={...d[l],image:n[0]},i({...s,contractImages:d})}else i(d=>({...d,images:[...d.images,...n]}))},C=t=>{const{name:a,value:l}=t.target;i({...s,[a]:l})},M=(t,a,l)=>{i(n=>{const d={...n[t],[a]:l};return a==="it"&&(d.en=l,d.fr=l,d.de=l),{...n,[t]:d}})},me=t=>{i(a=>({...a,optionalFeatures:{...a.optionalFeatures,[t]:!a.optionalFeatures[t]}}))},A=(t,a,l)=>{i(n=>({...n,[t]:{...n[t],[a]:l}}))},de=(t,a,l)=>{const n=[...s.contractImages];n[t]={...n[t],[a]:l},i({...s,contractImages:n})},ue=()=>{i(t=>({...t,contractImages:[...t.contractImages,{damageType:"",description:"",image:""}]}))},he=t=>{const a=s.contractImages.filter((l,n)=>n!==t);i({...s,contractImages:a})},ge=async t=>{if(t.preventDefault(),!s.plateNumber){T.error("Plate Number are required.");return}try{(await $.post(`${q}/api/vans`,s,{headers:{Authorization:`Bearer ${ee}`}})).status===201&&(f(`/:${oe}/admin/vans`),T.success("Van added successfully!"))}catch(a){a.response&&a.response.status===400&&a.response.data.message?T.error(a.response.data.message):T.error("An error occurred while adding the van."),console.error("Error submitting form:",a)}},B=[{value:"en",label:"English"},{value:"fr",label:"French"},{value:"it",label:"Italian"},{value:"de",label:"German"}],D=(t,a,l)=>{i(n=>{const d={...n.dailyPricing};return d[t][a]=l,S&&t==="Monday"&&(a==="kilometers"||a==="extraPerKm")&&Object.keys(d).forEach(H=>{H!=="Monday"&&(d[H][a]=l)}),{...n,dailyPricing:d}})},U=(t,a)=>{i(l=>({...l,trackingDevice:{...l.trackingDevice,[t]:a}}))},R=(t,a,l)=>{i(n=>({...n,restrictedBookingHours:{...n.restrictedBookingHours,[t]:{...n.restrictedBookingHours[t],[a]:l}}}))};return e.jsx("div",{className:"flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-200",children:e.jsxs(G,{className:"shadow-2xl rounded-lg container",children:[e.jsx(y,{variant:"h4",style:{marginBottom:"1rem"},className:"p-3 text-white text-center bg-blue-600 font-bold rounded",children:"Add New Van"}),e.jsx("form",{onSubmit:ge,className:"space-y-4 sm:p-12 p-4 border bg-white mt-4",children:e.jsxs(r,{container:!0,spacing:3,children:[e.jsx(O,{label:"Van Name",field:"name",selectedLang:o,setSelectedLang:u,value:s.name[o],onChange:M,languageOptions:B}),e.jsx(O,{label:"Description",field:"description",selectedLang:b,setSelectedLang:v,value:s.description[b],onChange:M,languageOptions:B,multiline:!0,rows:3}),e.jsx(r,{item:!0,xs:12,children:e.jsx(m,{fullWidth:!0,label:"Plate Number",name:"plateNumber",value:s.plateNumber,onChange:C,variant:"outlined",required:!0,className:"bg-white rounded-lg"})}),e.jsxs(r,{item:!0,xs:12,children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"font-semibold text-gray-700",children:"Daily Pricing"}),e.jsx(j,{title:"Set daily pricing details for this van.",children:e.jsx(h,{size:"small",className:"ml-1",children:e.jsx(x,{})})})]}),e.jsx(k,{control:e.jsx(P,{checked:S,onChange:t=>ie(t.target.checked)}),label:e.jsxs("div",{className:"flex items-center",children:["Apply Kilometers and Extra Per Km to All Days",e.jsx(j,{title:"Enable this to apply Monday's values to all other days.",children:e.jsx(h,{size:"small",className:"ml-1",children:e.jsx(x,{})})})]})}),Object.keys(s.dailyPricing).map(t=>e.jsxs(r,{container:!0,spacing:2,className:"mb-4",children:[e.jsx(r,{item:!0,xs:12,sm:4,children:e.jsx(m,{fullWidth:!0,label:`${t} Price Per Hour`,type:"number",value:s.dailyPricing[t].pricePerHour,onChange:a=>D(t,"pricePerHour",a.target.value),variant:"outlined",className:"bg-white rounded-lg"})}),e.jsx(r,{item:!0,xs:12,sm:4,children:e.jsx(m,{fullWidth:!0,label:`${t} Kilometers`,type:"number",value:s.dailyPricing[t].kilometers,onChange:a=>D(t,"kilometers",a.target.value),variant:"outlined",className:"bg-white rounded-lg",disabled:S&&t!=="Monday"})}),e.jsx(r,{item:!0,xs:12,sm:4,children:e.jsx(m,{fullWidth:!0,label:`${t} Extra Per Km`,type:"number",value:s.dailyPricing[t].extraPerKm,onChange:a=>D(t,"extraPerKm",a.target.value),variant:"outlined",className:"bg-white rounded-lg",disabled:S&&t!=="Monday"})})]},t))]}),e.jsx(r,{item:!0,xs:6,sm:4,children:e.jsx(k,{control:e.jsx(P,{checked:z,onChange:t=>Y(t.target.checked)}),label:e.jsxs("div",{className:"flex items-center",children:["Set Pre Authorization Amount",e.jsx(j,{title:"Enable this to set a pre authorization amount for this van.",children:e.jsx(h,{size:"small",className:"ml-1",children:e.jsx(x,{})})})]})})}),z&&e.jsx(r,{item:!0,xs:6,sm:6,children:e.jsx(m,{fullWidth:!0,label:"Pre Authorization Amount",name:"preAuthorizationAmount",value:s.preAuthorizationAmount,onChange:C,variant:"outlined",required:!0,className:"bg-white rounded-lg"})}),e.jsx(r,{item:!0,xs:6,sm:4,children:e.jsx(k,{control:e.jsx(P,{checked:L,onChange:t=>Q(t.target.checked)}),label:e.jsxs("div",{className:"flex items-center",children:["Set Minimum Hours",e.jsx(j,{title:"Enable this to set a minimum number of hours for this van.",children:e.jsx(h,{size:"small",className:"ml-1",children:e.jsx(x,{})})})]})})}),L&&e.jsx(r,{item:!0,xs:6,sm:6,children:e.jsx(m,{fullWidth:!0,label:"Minimum Hours",name:"minimumHours",value:s.minimumHours,onChange:C,variant:"outlined",required:!0,className:"bg-white rounded-lg"})}),e.jsx(r,{item:!0,xs:6,sm:4,children:e.jsx(k,{control:e.jsx(P,{checked:w,onChange:t=>F(t.target.checked)}),label:e.jsxs("div",{className:"flex items-center",children:["Set Unlimited Kilometers",e.jsx(j,{title:"Enable this to allow unlimited kilometers for this van. A price must be specified.",children:e.jsx(h,{size:"small",className:"ml-1",children:e.jsx(x,{})})})]})})}),w&&e.jsx(r,{item:!0,xs:6,sm:6,children:e.jsx(m,{fullWidth:!0,label:"Unlimited Kilometers Price",name:"unlimitedKilometersPrice",value:s.unlimitedKilometersPrice,onChange:C,variant:"outlined",required:!0,className:"bg-white rounded-lg"})}),e.jsx(r,{item:!0,xs:6,sm:4,children:e.jsx(k,{control:e.jsx(P,{checked:W,onChange:t=>{const a=t.target.checked;Z(a),a&&K(!0)}}),label:e.jsxs("div",{className:"flex items-center",children:["Allow Package",e.jsx(j,{title:"Enable this to allow users to book packages for this van.",children:e.jsx(h,{size:"small",className:"ml-1",children:e.jsx(x,{})})})]})})}),e.jsx(r,{item:!0,xs:12,sm:4,children:e.jsx(k,{control:e.jsx(P,{checked:c,onChange:t=>I(t.target.checked)}),label:e.jsxs("div",{className:"flex items-center",children:["Set Restricted Booking Hours",e.jsx(j,{title:"Enable this to restrict specific booking hours for this van.",children:e.jsx(h,{size:"small",className:"ml-1",children:e.jsx(x,{})})})]})})}),W&&e.jsx(Ne,{isOpen:te,onClose:ne,onSave:le,initialPrices:se}),c&&e.jsxs(r,{item:!0,xs:12,children:[e.jsx(y,{variant:"h6",sx:{marginBottom:"10px"},className:"mb-4",children:"Weekly Restricted Booking Hours"}),Object.keys(s.restrictedBookingHours).map(t=>e.jsxs(r,{container:!0,spacing:2,className:"mb-3",children:[e.jsx(r,{item:!0,xs:6,children:e.jsx(m,{select:!0,fullWidth:!0,label:`${t} Start Time`,value:s.restrictedBookingHours[t].start,onChange:a=>R(t,"start",a.target.value),variant:"outlined",className:"bg-white rounded-lg",children:Array.from({length:24},(a,l)=>{const n=l.toString().padStart(2,"0")+":00";return e.jsx(N,{value:n,children:n},n)})})}),e.jsx(r,{item:!0,xs:6,children:e.jsx(m,{select:!0,fullWidth:!0,label:`${t} End Time`,value:s.restrictedBookingHours[t].end,onChange:a=>R(t,"end",a.target.value),variant:"outlined",className:"bg-white rounded-lg",children:Array.from({length:24},(a,l)=>{const n=l.toString().padStart(2,"0")+":00";return e.jsx(N,{value:n,children:n},n)})})})]},t))]}),e.jsx(Pe,{label:e.jsxs("div",{className:"flex items-center mb-5",children:["Upload Van Images",e.jsx(j,{title:"Upload images of the van.",children:e.jsx(h,{size:"small",className:"ml-1",children:e.jsx(x,{})})})]}),images:s.images,onDrop:t=>E(t,"images")}),e.jsx(Ce,{label:e.jsxs("div",{className:"flex items-center mb-5",children:["Upload Damage Images",e.jsx(j,{title:"Upload images of the damage.",children:e.jsx(h,{size:"small",className:"ml-1",children:e.jsx(x,{})})})]}),contractImages:s.contractImages,onDrop:E,onAdd:ue,onRemove:he,onChange:de}),e.jsx(we,{label:e.jsxs("div",{className:"flex items-center mb-5",children:["Location",e.jsx(j,{title:"Select the location of the van.",children:e.jsx(h,{size:"small",className:"ml-1",children:e.jsx(x,{})})})]}),location:s.location,onChange:A,isLoaded:g}),e.jsx(r,{item:!0,xs:6,children:e.jsx(m,{select:!0,fullWidth:!0,label:e.jsxs("div",{className:"flex items-center",children:["Fuel Type",e.jsx(j,{title:"Select the fuel type of the van.",children:e.jsx(h,{size:"small",className:"ml-1",children:e.jsx(x,{})})})]}),name:"fuelType",value:s.fuelType,onChange:C,variant:"outlined",required:!0,className:"bg-white rounded-lg",children:["Petrol","Diesel","Electric","Hybrid"].map(t=>e.jsx(N,{value:t,children:t},t))})}),e.jsx(r,{item:!0,xs:6,children:e.jsx(m,{select:!0,fullWidth:!0,label:e.jsxs("div",{className:"flex items-center",children:["Transmission Type",e.jsx(j,{title:"Select the transmission type of the van.",children:e.jsx(h,{size:"small",className:"ml-1",children:e.jsx(x,{})})})]}),name:"transmissionType",value:s.transmissionType,onChange:C,variant:"outlined",required:!0,className:"bg-white rounded-lg",children:["Manual","Automatic"].map(t=>e.jsx(N,{value:t,children:t},t))})}),e.jsx(Se,{label:e.jsxs("div",{className:"flex items-center mb-5",children:["Optional Features",e.jsx(j,{title:"Select the optional features of the van.",children:e.jsx(h,{size:"small",className:"ml-1",children:e.jsx(x,{})})})]}),optionalFeatures:s.optionalFeatures,onChange:me}),e.jsx(V,{label:e.jsxs("div",{className:"flex items-center mb-5",children:["External Dimensions (L × W × H)",e.jsx(j,{title:"Enter the external dimensions of the van.",children:e.jsx(h,{size:"small",className:"ml-1",children:e.jsx(x,{})})})]}),dimensions:s.externalDimensions,onChange:A,dimensionType:"externalDimensions"}),e.jsx(V,{label:e.jsxs("div",{className:"flex items-center mb-5",children:["Internal Dimensions (L × W × H)",e.jsx(j,{title:"Enter the internal dimensions of the van.",children:e.jsx(h,{size:"small",className:"ml-1",children:e.jsx(x,{})})})]}),dimensions:s.internalDimensions,onChange:A,dimensionType:"internalDimensions"}),e.jsx(Ae,{label:e.jsxs("div",{className:"flex items-center mb-5",children:["Weight (Empty × Max Load)",e.jsx(j,{title:"Enter the load capacity of the van.",children:e.jsx(h,{size:"small",className:"ml-1",children:e.jsx(x,{})})})]}),weight:s.weight,onChange:A}),e.jsxs(r,{item:!0,xs:12,children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("span",{className:"font-semibold text-gray-700",children:"Traking Device"}),e.jsx(j,{title:" Set the tracking device details for this van.",children:e.jsx(h,{size:"small",className:"ml-1",children:e.jsx(x,{})})})]}),e.jsxs(r,{container:!0,spacing:2,children:[e.jsx(r,{item:!0,xs:12,children:e.jsxs(m,{select:!0,fullWidth:!0,label:"Tracking Device Type",value:s.trackingDevice.type,onChange:t=>U("type",t.target.value),variant:"outlined",required:!0,className:"bg-white rounded-lg",children:[e.jsx(N,{value:"NoDevice",children:"NoDevice"}),e.jsx(N,{value:"fleet2track",children:"Fleet2Track"}),e.jsx(N,{value:"other",children:"Other"})]})}),s.trackingDevice.type==="other"&&e.jsx(r,{item:!0,xs:12,children:e.jsx(m,{fullWidth:!0,label:"Custom Tracking Device Name",value:s.trackingDevice.customName,onChange:t=>U("customName",t.target.value),variant:"outlined",required:!0,className:"bg-white rounded-lg"})})]})]}),e.jsx(r,{item:!0,xs:12,children:e.jsxs(J,{variant:"contained",color:"primary",type:"submit",fullWidth:!0,className:"flex items-center justify-center text-lg font-semibold shadow-md hover:shadow-lg transition-shadow",children:[e.jsx(fe,{className:"mr-2"}),"Add Van"]})})]})})]})})},O=({label:s,field:i,value:g,onChange:o,multiline:u=!1,rows:b=1})=>e.jsx(r,{item:!0,xs:12,children:e.jsx(m,{fullWidth:!0,label:s,name:i,placeholder:`Enter ${s}`,value:g,onChange:v=>o(i,"it",v.target.value),variant:"outlined",required:!0,multiline:u,rows:b,className:"bg-white rounded-lg"})}),Pe=({label:s,images:i,onDrop:g})=>e.jsxs(r,{item:!0,xs:12,children:[e.jsx(y,{variant:"body1",className:"font-semibold text-gray-600 mb-2",children:s}),e.jsxs(r,{container:!0,spacing:2,children:[i.map((o,u)=>e.jsx(r,{item:!0,xs:6,sm:4,md:3,className:"relative",children:e.jsx("img",{src:o,alt:`Van Image ${u+1}`,className:"w-full h-48 object-cover rounded-lg shadow-md"})},u)),e.jsx(r,{item:!0,xs:6,sm:4,md:3,children:e.jsx(X,{onDrop:g})})]})]}),Ce=({label:s,contractImages:i,onDrop:g,onAdd:o,onRemove:u,onChange:b})=>e.jsxs(r,{item:!0,xs:12,children:[e.jsx(y,{variant:"body1",className:"font-semibold text-gray-600 mb-2",children:s}),i.map((v,f)=>e.jsxs(r,{container:!0,spacing:2,alignItems:"center",className:"mb-4",children:[e.jsx(r,{item:!0,xs:12,sm:3,children:e.jsx(m,{fullWidth:!0,label:"Damage Type",value:v.damageType,onChange:c=>b(f,"damageType",c.target.value),variant:"outlined",className:"bg-white rounded-lg"})}),e.jsx(r,{item:!0,xs:12,sm:5,children:e.jsx(m,{fullWidth:!0,label:"Description",value:v.description,onChange:c=>b(f,"description",c.target.value),variant:"outlined",className:"bg-white rounded-lg"})}),e.jsx(r,{item:!0,xs:6,sm:3,children:v.image?e.jsx("img",{src:v.image,alt:"Contract",className:"w-full h-48 object-cover rounded-lg shadow-md"}):e.jsx(X,{onDrop:c=>g(c,"contractImages",f)})}),e.jsx(r,{item:!0,xs:1,sm:1,children:e.jsx(h,{color:"secondary",onClick:()=>u(f),children:e.jsx(ye,{})})})]},f)),e.jsx(J,{variant:"outlined",color:"primary",onClick:o,startIcon:e.jsx(_,{}),className:"mt-2",children:"Add damage image"})]}),we=({location:s,onChange:i,isLoaded:g,label:o})=>{const[u,b]=p.useState(null),v=()=>{if(u){const c=u.getPlace(),I=c.formatted_address,w=c.geometry.location.lat(),F=c.geometry.location.lng();i("location","address",I),i("location","latitude",w),i("location","longitude",F)}},f=c=>{b(c)};return e.jsxs(r,{item:!0,xs:12,children:[e.jsx(y,{variant:"body1",className:"font-semibold text-gray-600",children:o}),g?e.jsx(be,{onLoad:f,onPlaceChanged:v,children:e.jsx(m,{fullWidth:!0,label:"Address",name:"location.address",value:s.address,onChange:c=>i("location","address",c.target.value),variant:"outlined",required:!0,className:"bg-white rounded-lg mb-3",style:{marginBottom:"1rem"}})}):e.jsx(m,{fullWidth:!0,label:"Address",name:"location.address",value:s.address,onChange:c=>i("location","address",c.target.value),variant:"outlined",required:!0,className:"bg-white rounded-lg mb-3"}),e.jsxs(r,{container:!0,spacing:2,children:[e.jsx(r,{item:!0,xs:6,children:e.jsx(m,{fullWidth:!0,label:"Latitude",name:"location.latitude",type:"number",value:s.latitude,onChange:c=>i("location","latitude",c.target.value),variant:"outlined",required:!0,className:"bg-white rounded-lg"})}),e.jsx(r,{item:!0,xs:6,children:e.jsx(m,{fullWidth:!0,label:"Longitude",name:"location.longitude",type:"number",value:s.longitude,onChange:c=>i("location","longitude",c.target.value),variant:"outlined",required:!0,className:"bg-white rounded-lg"})})]})]})},Se=({optionalFeatures:s,onChange:i,label:g})=>e.jsxs(r,{item:!0,xs:12,children:[e.jsx(y,{variant:"body1",className:"font-semibold text-gray-600",children:g}),Object.keys(s).map(o=>e.jsx(k,{control:e.jsx(P,{checked:s[o],onChange:()=>i(o),color:"primary"}),label:o.charAt(0).toUpperCase()+o.slice(1).replace(/([A-Z])/g," $1")},o))]}),V=({label:s,dimensions:i,onChange:g,dimensionType:o})=>e.jsxs(r,{item:!0,xs:12,children:[e.jsx(y,{variant:"body1",className:"font-semibold text-gray-600",children:s}),e.jsx(r,{container:!0,spacing:1,children:["length","width","height"].map(u=>e.jsx(r,{item:!0,xs:4,children:e.jsx(m,{fullWidth:!0,label:u.charAt(0).toUpperCase()+u.slice(1),name:`${o}.${u}`,value:i[u],onChange:b=>g(o,u,b.target.value),variant:"outlined",className:"bg-white rounded-lg"})},u))})]}),Ae=({weight:s,onChange:i,label:g})=>e.jsxs(r,{item:!0,xs:12,children:[e.jsx(y,{variant:"body1",className:"font-semibold text-gray-600",children:g}),e.jsx(r,{container:!0,spacing:2,children:["empty","maxLoad"].map(o=>e.jsx(r,{item:!0,xs:6,children:e.jsx(m,{fullWidth:!0,label:o==="empty"?"Empty Weight":"Max Load",name:`weight.${o}`,value:s[o],onChange:u=>i("weight",o,u.target.value),variant:"outlined",className:"bg-white rounded-lg"})},o))})]}),X=({onDrop:s})=>{const{getRootProps:i,getInputProps:g}=ve({onDrop:s,accept:"image/*",multiple:!1});return e.jsxs(G,{...i(),className:"border-dashed border-2 border-gray-400 rounded-lg h-48 w-full flex items-center justify-center cursor-pointer hover:border-gray-500 transition-all shadow-sm hover:shadow-md",children:[e.jsx("input",{...g()}),e.jsx(_,{className:"text-gray-400 text-3xl"})]})};export{ct as default};
