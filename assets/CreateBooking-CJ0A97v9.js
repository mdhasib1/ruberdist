import{r as n,a as ze,ai as We,b as y,bg as v,j as e,m as $e,a4 as H,a2 as d,bi as c,bj as U,af as m,I as u,bk as h,bl as L,bn as G,bo as J,bp as j,bq as O,br as B,bs as Ye,g as D,aR as Ke,aS as He,aF as Ue,G as Ge,_ as Z,aW as f,bw as Je}from"./vendor-C9ifI4XU.js";import{a as Ze}from"./index-DfvkrZdQ.js";import{L as _e}from"./LoginModal-9ZENgTVw.js";import{M as Qe}from"./Modal-aLezg_Re.js";import{O as Xe}from"./OTPModal-DWNXv1xK.js";import"./Carousel-DD4UiOb1.js";const er=Je("pk_live_51PwWTGDCK8rR2FJAZlmM7KPakXDO09KCBJRjUT5QRFNRRTvlctb9KG8D9bxZ38RRsG6np5RYrJmVG2AeP22KXq7P00rQKtFDnq"),w="https://rubertogo.com",rr=t=>{const p=Z().format("dddd"),k=t.dailyPricing?.find(I=>I.day===p);return k?.pricePerHour?`${k.pricePerHour} CHF / hour`:"Not available"},xr=()=>{const[t,p]=n.useState({firstName:"",lastName:"",address:"",email:"",phone:"",idDocumentFront:null,idDocumentBack:null,licenseFront:null,licenseBack:null,isNotDriver:!1,referralCode:"",timeZone:"",driverInfo:{driverFirstName:"",driverLastName:"",driverAddress:"",driverEmail:"",driverPhone:"",driverLicenseFront:null,driverLicenseBack:null,driverIdDocumentFront:null,driverIdDocumentBack:null}}),[k,I]=n.useState(!1),[E,S]=n.useState(""),[l,_]=n.useState(null),[q,R]=n.useState(!1),{lang:Q}=ze(),[X,T]=n.useState(!1),[ee,V]=n.useState(""),[re,se]=n.useState(""),te=n.useRef([]),[ae,oe]=n.useState(null),ne=localStorage.getItem("accessToken"),[z,W]=n.useState(!1),[N,ie]=n.useState(null),{translations:a}=Ze(),[A,le]=n.useState(!1),[sr,de]=n.useState(null),[$,ce]=n.useState(!1),[tr,ar]=n.useState(!1),[F,or]=n.useState(null),[nr,ir]=n.useState(!1),[M,lr]=n.useState([]),[Y,me]=n.useState(!1),K=r=>{de(r)};n.useEffect(()=>{p(r=>({...r,timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone}))},[]);const ue=async r=>{try{(await y.post(`${w}/api/valid-referral-code`,{referralCode:r},{headers:{Authorization:`Bearer ${ne}`}})).status===200&&f.success("Referral code is valid.")}catch(s){console.error("Error validating referral code:",s),f.error("Invalid referral code.")}},he=r=>{const s=r.target.value;p(o=>({...o,referralCode:s})),ue(s)},pe=r=>{const s=Z().startOf("hour"),o=s.add(4,"hour"),i=r.pricePerHour*4;ie({...r,name:r.name.en||"Unnamed Van",description:r.description.en||"No description available.",totalPrice:i,startDate:s.format("YYYY-MM-DD"),endDate:o.format("YYYY-MM-DD"),startTime:s.format("h:mm A"),endTime:o.format("h:mm A")}),W(!0)};n.useEffect(()=>{const r=localStorage.getItem("bookingData");r&&_(JSON.parse(r))},[]);const C=r=>{const{name:s,value:o}=r.target;p(i=>({...i,[s]:o}))},xe=r=>{const s=r.target.value;p(o=>({...o,email:s})),ge(s)},ge=n.useCallback(We.debounce(async r=>{try{(await y.post(`${w}/api/exist-account`,{email:r})).status===201?R(!0):R(!1)}catch(s){console.error("Error checking account existence:",s)}},500),[]),P=r=>{const{name:s,value:o}=r.target;p(i=>({...i,driverInfo:{...i.driverInfo,[s]:o}}))},ve=r=>{ce(r.target.checked)},je=r=>{p(s=>({...s,isNotDriver:r.target.checked}))},fe=async r=>{const s=new FormData;s.append("file",r);try{return(await y.post(`${w}/api/upload`,s,{headers:{"Content-Type":"multipart/form-data"}})).data.imageURL}catch(o){return console.error("Error uploading file:",o),f.error("Failed to upload file. Please try again."),null}},g=async(r,s,o=!1)=>{const i=r[0],x=await fe(i);x&&p(o?b=>({...b,driverInfo:{...b.driverInfo,[s]:x}}):b=>({...b,[s]:x}))},{getRootProps:Ne,getInputProps:be}=v({onDrop:r=>g(r,"idDocumentFront"),accept:"image/*"}),{getRootProps:De,getInputProps:ke}=v({onDrop:r=>g(r,"idDocumentBack"),accept:"image/*"}),{getRootProps:Ie,getInputProps:Pe}=v({onDrop:r=>g(r,"licenseFront"),accept:"image/*"}),{getRootProps:ye,getInputProps:we}=v({onDrop:r=>g(r,"licenseBack"),accept:"image/*"}),{getRootProps:Fe,getInputProps:Ce}=v({onDrop:r=>g(r,"driverIdDocumentFront",!0),accept:"image/*"}),{getRootProps:Le,getInputProps:Be}=v({onDrop:r=>g(r,"driverIdDocumentBack",!0),accept:"image/*"}),{getRootProps:Se,getInputProps:Re}=v({onDrop:r=>g(r,"driverLicenseFront",!0),accept:"image/*"}),{getRootProps:Te,getInputProps:Ae}=v({onDrop:r=>g(r,"driverLicenseBack",!0),accept:"image/*"}),Me=r=>{const s=new Date(r),o=String(s.getDate()).padStart(2,"0"),i=String(s.getMonth()+1).padStart(2,"0"),x=s.getFullYear();return`${o}/${i}/${x}`},Oe=async()=>{I(!0),S("");const r=["firstName","lastName","email","phone"];for(let o of r)if(!t[o]){S(`Please fill out the ${o} field.`),f.error(`Please fill out the ${o} field.`),I(!1);return}const s={...t,selectedSlots:l.selectedSlots.map(o=>({...o,date:Me(o.date)})),totalPrice:l.totalPrice,vanId:l.vanDetails._id,driverInfo:JSON.stringify(t.driverInfo)};try{const{data:o}=await y.post(`${w}/api/create-booking`,s,{headers:{"Content-Type":"application/json"}});se(o.email),T(!0),oe(o.sessionId)}catch(o){console.error("Error during checkout:",o);const i=o.response?.data?.error||"Failed to initiate payment. Please try again.";f.error(i),S(i)}finally{I(!1)}},Ee=async r=>{try{const s=await y.post(`${w}/api/verify-otp`,{email:re,otp:r}),{accessToken:o,refreshToken:i}=s.data;localStorage.setItem("accessToken",o),localStorage.setItem("refreshToken",i),f.success("OTP verified successfully!"),T(!1),V("");const x=await er,{error:b}=await x.redirectToCheckout({sessionId:ae});b&&(console.error("Stripe Redirect Error:",b),f.error("Failed to redirect to payment. Please try again."))}catch(s){console.error("OTP Verification Failed:",s),f.error("Invalid or expired OTP.")}},qe=r=>{me(r.target.checked)},Ve=()=>{const r=l.totalPrice,s=M.reduce((i,x)=>i+x.price,0),o=Y?l?.vanDetails?.unlimitedKilometersPrice:0;return r+s+o};return e.jsxs($e.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1},className:"bg-white min-h-screen",children:[e.jsxs("div",{className:"container mx-auto py-10 px-4 sm:px-6 lg:px-8",children:[E&&e.jsx("div",{className:"flex justify-center mt-4",children:e.jsxs("p",{className:"flex flex-col sm:flex-row items-center px-4 py-2 bg-red-100 border border-red-400 text-red-600 rounded-lg font-semibold",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mb-2 sm:mb-0 sm:mr-2 text-red-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M18.364 5.636L5.636 18.364M5.636 5.636l12.728 12.728"})}),e.jsx("span",{className:"text-center sm:text-left",children:E}),l&&e.jsx(H,{sx:{marginTop:{xs:"1rem",sm:"0"},marginLeft:{sm:"1rem"}},variant:"outlined",color:"primary",onClick:()=>pe(l.vanDetails),children:"Select New Time"})]})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-10",children:[e.jsx("div",{className:"col-span-2",children:e.jsxs("form",{className:"space-y-6 p-5 bg-gray-50 shadow-md rounded-lg",children:[e.jsx(d,{label:e.jsxs("div",{className:"flex items-center",children:[a.checkoutemail,e.jsx(m,{title:"Email is required for booking confirmation",children:e.jsx(u,{size:"small",className:"ml-1",children:e.jsx(h,{})})})]}),placeholder:a.checkoutemail,name:"email",type:"email",fullWidth:!0,variant:"outlined",value:t.email,onChange:xe,required:!0,InputProps:{startAdornment:e.jsx(c,{position:"start",children:e.jsx(U,{className:"text-gray-500"})})},className:"transition duration-300 focus-within:shadow-md rounded-lg"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsx(d,{label:e.jsxs("div",{className:"flex items-center",children:[a.checkoutFirstName,e.jsx(m,{title:"First name is required for booking confirmation",children:e.jsx(u,{size:"small",className:"ml-1",children:e.jsx(h,{})})})]}),placeholder:a.checkoutFirstName,name:"firstName",fullWidth:!0,variant:"outlined",value:t.firstName,onChange:C,required:!0,InputProps:{startAdornment:e.jsx(c,{position:"start",children:e.jsx(L,{className:"text-gray-500"})})},className:"transition duration-300 focus-within:shadow-md rounded-lg"}),e.jsx(d,{label:e.jsxs("div",{className:"flex items-center",children:[a.checkoutLastName,e.jsx(m,{title:"Last name is required for booking confirmation",children:e.jsx(u,{size:"small",className:"ml-1",children:e.jsx(h,{})})})]}),placeholder:a.checkoutLastName,name:"lastName",fullWidth:!0,variant:"outlined",value:t.lastName,onChange:C,required:!0,InputProps:{startAdornment:e.jsx(c,{position:"start",children:e.jsx(L,{className:"text-gray-500"})})},className:"transition duration-300 focus-within:shadow-md rounded-lg"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-1 gap-6",children:e.jsx(d,{label:e.jsxs("div",{className:"flex items-center",children:[a.checkoutAddress,e.jsx(m,{title:"Address is required for booking confirmation",children:e.jsx(u,{size:"small",className:"ml-1",children:e.jsx(h,{})})})]}),placeholder:a.checkoutAddress,name:"address",fullWidth:!0,variant:"outlined",value:t.address,onChange:C,required:!0,InputProps:{startAdornment:e.jsx(c,{position:"start",children:e.jsx(G,{className:"text-gray-500"})})},className:"transition duration-300 focus-within:shadow-md rounded-lg"})}),e.jsx(d,{label:e.jsxs("div",{className:"flex items-center",children:[a.checkoutphone,e.jsx(m,{title:"Phone number is required for booking confirmation",children:e.jsx(u,{size:"small",className:"ml-1",children:e.jsx(h,{})})})]}),placeholder:a.checkoutphone,name:"phone",fullWidth:!0,variant:"outlined",value:t.phone,onChange:C,required:!0,InputProps:{startAdornment:e.jsx(c,{position:"start",children:e.jsx(J,{className:"text-gray-500"})})},className:"transition duration-300 focus-within:shadow-md rounded-lg"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsxs(j,{children:[a.checkoutIdFront,e.jsx(m,{title:"You must provide a valid ID document",children:e.jsx(u,{size:"small",className:"ml-1",children:e.jsx(h,{})})})]}),e.jsxs("div",{...Ne(),className:"p-4 border-dashed border-2 border-gray-300 mt-2 rounded-lg hover:shadow-lg transition-all",children:[e.jsx("input",{...be()}),t.idDocumentFront?e.jsx("img",{src:t.idDocumentFront,alt:"ID Front Preview",className:"w-full h-40 object-cover mt-2 rounded-md"}):e.jsx("p",{className:"text-gray-500",children:a.draganddrop})]})]}),e.jsxs("div",{children:[e.jsxs(j,{children:[a.checkoutIdBack,e.jsx(m,{title:"You must provide a valid ID document",children:e.jsx(u,{size:"small",className:"ml-1",children:e.jsx(h,{})})})]}),e.jsxs("div",{...De(),className:"p-4 border-dashed border-2 border-gray-300 mt-2 rounded-lg hover:shadow-lg transition-all",children:[e.jsx("input",{...ke()}),t.idDocumentBack?e.jsx("img",{src:t.idDocumentBack,alt:"ID Back Preview",className:"w-full h-40 object-cover mt-2 rounded-md"}):e.jsx("p",{className:"text-gray-500",children:a.draganddrop})]})]})]}),!t.isNotDriver&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsxs(j,{children:[a.checkoutLicenseFront,e.jsx(m,{title:"You must provide a valid driver license",children:e.jsx(u,{size:"small",className:"ml-1",children:e.jsx(h,{})})})]}),e.jsxs("div",{...Ie(),className:"p-4 border-dashed border-2 border-gray-300 mt-2 rounded-lg hover:shadow-lg transition-all",children:[e.jsx("input",{...Pe()}),t.licenseFront?e.jsx("img",{src:t.licenseFront,alt:"Driver License Front Preview",className:"w-full h-40 object-cover mt-2 rounded-md"}):e.jsx("p",{className:"text-gray-500",children:a.draganddrop})]})]}),e.jsxs("div",{children:[e.jsxs(j,{children:[a.checkoutLicenseBack,e.jsx(m,{title:"You must provide a valid driver license",children:e.jsx(u,{size:"small",className:"ml-1",children:e.jsx(h,{})})})]}),e.jsxs("div",{...ye(),className:"p-4 border-dashed border-2 border-gray-300 mt-2 rounded-lg hover:shadow-lg transition-all",children:[e.jsx("input",{...we()}),t.licenseBack?e.jsx("img",{src:t.licenseBack,alt:"Driver License Back Preview",className:"w-full h-40 object-cover mt-2 rounded-md"}):e.jsx("p",{className:"text-gray-500",children:a.draganddrop})]})]})]})}),e.jsx(O,{control:e.jsx(B,{checked:t.isNotDriver,onChange:je,name:"isNotDriver",color:"primary"}),label:e.jsxs("div",{className:"flex items-center",children:[a.checkoutImnotdriver,e.jsx(m,{title:"Check this box if you are not the driver",children:e.jsx(u,{size:"small",className:"ml-1",children:e.jsx(h,{})})})]})}),e.jsxs("div",{className:"flex flex-col space-y-4",children:[e.jsx(O,{control:e.jsx(B,{checked:$,onChange:ve,color:"primary"}),label:e.jsxs("div",{className:"flex items-center",children:["Apply Referral Code",e.jsx(m,{title:"Enter a valid referral code to get a discount",children:e.jsx(u,{size:"small",className:"ml-1",children:e.jsx(h,{})})})]})}),$&&e.jsx(d,{label:"Referral Code",name:"referralCode",variant:"outlined",fullWidth:!0,value:t.referralCode,onChange:he,InputProps:{startAdornment:e.jsx(c,{position:"start",children:e.jsx(Ye,{className:"text-gray-500"})})},className:`transition duration-300 focus-within:shadow-md rounded-lg ${F===!0?"border-green-500":F===!1?"border-red-500":""}`,helperText:F===!0?"Referral code is valid!":F===!1?"Invalid referral code":""})]}),t.isNotDriver&&e.jsxs(e.Fragment,{children:[e.jsx(D,{variant:"h6",className:"font-bold mt-6",children:a.checkoutDriverInformationHeading}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsx(d,{label:a.checkoutDriverFirstName,name:"driverFirstName",fullWidth:!0,variant:"outlined",value:t.driverInfo.driverFirstName,onChange:P,required:!0,InputProps:{startAdornment:e.jsx(c,{position:"start",children:e.jsx(L,{className:"text-gray-500"})})},className:"transition duration-300 focus-within:shadow-md rounded-lg"}),e.jsx(d,{label:a.checkoutDriverLastName,name:"driverLastName",fullWidth:!0,variant:"outlined",value:t.driverInfo.driverLastName,onChange:P,required:!0,InputProps:{startAdornment:e.jsx(c,{position:"start",children:e.jsx(L,{className:"text-gray-500"})})},className:"transition duration-300 focus-within:shadow-md rounded-lg"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsx(d,{label:a.checkoutDriverAddress,name:"driverAddress",fullWidth:!0,variant:"outlined",value:t.driverInfo.driverAddress,onChange:P,required:!0,InputProps:{startAdornment:e.jsx(c,{position:"start",children:e.jsx(G,{className:"text-gray-500"})})},className:"transition duration-300 focus-within:shadow-md rounded-lg"}),e.jsx(d,{label:a.checkoutDriverEmail,name:"driverEmail",type:"email",fullWidth:!0,variant:"outlined",value:t.driverInfo.driverEmail,onChange:P,required:!0,InputProps:{startAdornment:e.jsx(c,{position:"start",children:e.jsx(U,{className:"text-gray-500"})})},className:"transition duration-300 focus-within:shadow-md rounded-lg"})]}),e.jsx(d,{label:a.checkoutDriverPhone,name:"driverPhone",fullWidth:!0,variant:"outlined",value:t.driverInfo.driverPhone,onChange:P,required:!0,InputProps:{startAdornment:e.jsx(c,{position:"start",children:e.jsx(J,{className:"text-gray-500"})})},className:"transition duration-300 focus-within:shadow-md rounded-lg"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx(j,{children:a.checkoutDriverIdFront}),e.jsxs("div",{...Se(),className:"p-4 border-dashed border-2 border-gray-300 mt-2 rounded-lg hover:shadow-lg transition-all",children:[e.jsx("input",{...Re()}),t.driverInfo.driverLicenseFront?e.jsx("img",{src:t.driverInfo.driverLicenseFront,alt:"Driver License Front Preview",className:"w-full h-40 object-cover mt-2 rounded-md"}):e.jsx("p",{className:"text-gray-500",children:a.draganddrop})]})]}),e.jsxs("div",{children:[e.jsxs(j,{children:[" ",a.checkoutDriverIdBack," "]}),e.jsxs("div",{...Te(),className:"p-4 border-dashed border-2 border-gray-300 mt-2 rounded-lg hover:shadow-lg transition-all",children:[e.jsx("input",{...Ae()}),t.driverInfo.driverLicenseBack?e.jsx("img",{src:t.driverInfo.driverLicenseBack,alt:"Driver License Back Preview",className:"w-full h-40 object-cover mt-2 rounded-md"}):e.jsx("p",{className:"text-gray-500",children:a.draganddrop})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsxs(j,{children:[" ",a.checkoutDriverLicenseFront," "]}),e.jsxs("div",{...Fe(),className:"p-4 border-dashed border-2 border-gray-300 mt-2 rounded-lg hover:shadow-lg transition-all",children:[e.jsx("input",{...Ce()}),t.driverInfo.driverIdDocumentFront?e.jsx("img",{src:t.driverInfo.driverIdDocumentFront,alt:"Driver ID Front Preview",className:"w-full h-40 object-cover mt-2 rounded-md"}):e.jsx("p",{className:"text-gray-500",children:a.draganddrop})]})]}),e.jsxs("div",{children:[e.jsxs(j,{children:[" ",a.checkoutDriverLicenseBack," "]}),e.jsxs("div",{...Le(),className:"p-4 border-dashed border-2 border-gray-300 mt-2 rounded-lg hover:shadow-lg transition-all",children:[e.jsx("input",{...Be()}),t.driverInfo.driverIdDocumentBack?e.jsx("img",{src:t.driverInfo.driverIdDocumentBack,alt:"Driver ID Back Preview",className:"w-full h-40 object-cover mt-2 rounded-md"}):e.jsx("p",{className:"text-gray-500",children:a.draganddrop})]})]})]})]})]})}),e.jsx("div",{className:"sm:col-span-1 col-span-2",children:e.jsx("div",{className:"bg-gradient-to-br from-[#1e3c72] to-[#f83920] p-1 rounded-2xl ",children:e.jsxs(Ke,{className:"p-6 h-full bg-white rounded-xl shadow-lg",children:[e.jsxs(He,{className:"flex flex-col items-center space-y-10",children:[l&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-col items-center gap-6 p-6 bg-gradient-to-r from-white via-gray-100 to-gray-50   hover:shadow-lg transition-shadow duration-300",children:[e.jsx("img",{src:l.vanDetails.images[0],alt:"Van",className:"w-56 h-32 rounded-lg object-cover shadow-lg border-4 border-gray-100"}),e.jsxs("div",{className:"text-center",children:[e.jsx(D,{variant:"h6",className:"font-extrabold text-gray-800 text-xl tracking-wide",children:l.vanDetails?.name[Q]||l.vanDetails?.name.en}),e.jsxs(D,{variant:"body1",className:"text-gray-600 text-base mt-3",children:[e.jsx("span",{className:"font-semibold text-gray-800",children:"Total Hours:"})," ",l.selectedSlots.length]}),e.jsxs(D,{variant:"body1",className:"text-gray-600 text-base mt-2",children:[e.jsxs("span",{className:"font-semibold text-gray-800",children:[a.priceLabel,":"]})," ",rr(l.vanDetails)]})]}),e.jsx("div",{className:"flex flex-col items-center",children:e.jsxs(D,{variant:"h5",className:"text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400 mt-6",children:["Total: ",l.totalPrice," CHF"]})})]})}),e.jsx(O,{control:e.jsx(B,{checked:Y,onChange:qe,color:"primary"}),label:`Unlimited Kilometer Ride ${l?.vanDetails?.unlimitedKilometersPrice} CHF`}),M.length>0&&e.jsxs("div",{className:"mt-6 bg-gray-100 p-4 rounded-md",children:[e.jsx(D,{variant:"h6",className:"mb-2",children:"Selected Additional Products"}),M.map(r=>e.jsxs(e.Fragment,{children:[e.jsx(D,{variant:"body1",children:r.name},r._id),e.jsxs("h1",{className:"text-xl font-extrabold",children:["Price: ",r.price," CHF"]})]}))]}),e.jsxs("div",{className:"mt-4 flex items-start space-x-4",children:[e.jsx(B,{id:"termsCheckbox",className:"w-6 h-6 rounded-lg focus:ring-blue-500 shadow-md transition-all duration-300 hover:scale-110",onChange:r=>le(r.target.checked)}),e.jsxs("label",{htmlFor:"termsCheckbox",className:"text-sm text-gray-700 leading-relaxed",children:["I agree to the"," ",e.jsx("span",{onClick:()=>K("terms"),className:"text-blue-600 underline hover:text-blue-800 cursor-pointer font-semibold",children:"Terms and Conditions"})," ","and"," ",e.jsx("span",{onClick:()=>K("privacy"),className:"text-blue-600 underline hover:text-blue-800 cursor-pointer font-semibold",children:"Privacy Policy"})]})]}),e.jsxs("div",{className:"mt-6 flex items-center space-x-4 bg-gradient-to-r from-gray-100 to-gray-200 p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300",children:[e.jsx("div",{className:"text-blue-500",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-7 h-7",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 11c1.104 0 2-.896 2-2m-2 2v1m0-5c-1.104 0-2 .896-2 2m2-2h.01M12 4a4 4 0 014 4v1h2a1 1 0 011 1v10a1 1 0 01-1 1H7a1 1 0 01-1-1V10a1 1 0 011-1h2V8a4 4 0 014-4z"})})}),e.jsx("p",{className:"text-sm text-gray-600 font-semibold",children:a.sslmessage})]})]}),e.jsx("div",{className:"mt-6",children:e.jsxs(H,{variant:"contained",startIcon:e.jsx(Ge,{}),onClick:Oe,disabled:!A||k,className:`w-full py-4 rounded-xl text-lg font-bold shadow-xl transition-transform ${A?"hover:scale-105 bg-gradient-to-r from-orange-500 to-orange-600":"cursor-not-allowed bg-gray-300"}`,style:{color:A?"#fff":"#aaa"},children:[l&&Ve()," CHF",k?e.jsx(Ue,{size:24,color:"inherit"}):" Pay Now"]})})]})})})]})]}),q&&e.jsx(_e,{open:q,handleClose:()=>R(!1),email:t.email}),e.jsx(Xe,{open:X,handleClose:()=>T(!1),otp:ee,setOtp:V,onVerify:Ee,otpRefs:te,otpLength:4}),z&&N&&e.jsx(Qe,{isOpen:z,onClose:()=>W(!1),van:N,totalPrice:N.totalPrice,startDate:N.startDate,endDate:N.endDate,startTime:N.startTime,endTime:N.endTime})]})};export{xr as default};
