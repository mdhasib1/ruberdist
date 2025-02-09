import{r as l,a as he,u as pe,j as e,z as ue,c7 as xe,D as ge,I as f,c8 as q,p as W,s as n,bq as J,m as y,a9 as b,B as u,c9 as je,ca as fe,cb as ye,cc as be,bG as we,cd as Q,C as ve,b as o,f as i}from"./vendor-YnnEx5JS.js";import{V as Ne}from"./VanLoading-XOe4w7ES.js";const c="https://rubertogo.wedevguru.com",Ae=()=>{const[F,w]=l.useState([]),[X,M]=l.useState(!0),[x,P]=l.useState(null),[d,Y]=l.useState(null),[Z,v]=l.useState(!1),[m,g]=l.useState([]),[I,h]=l.useState(!1),{lang:$}=he(),[ee,B]=l.useState(!1),[j,T]=l.useState(null),[ae,N]=l.useState(!1),[p,C]=l.useState([]),[se,S]=l.useState([]),[z,k]=l.useState(""),O=pe(),V=localStorage.getItem("accessToken");l.useEffect(()=>{M(!0),(async()=>{try{const t=(await o.get(`${c}/api/vans/admin/all`,{headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`}})).data.map(r=>({id:r._id,vanName:r.name?.en||"N/A",model:r.transmissionType||"N/A",regNumber:r.plateNumber||"N/A",capacity:r.weight?.maxLoad||"N/A",status:r.status||"pending"}));w(t)}catch(s){console.error("Error fetching van data:",s)}finally{M(!1)}})()},[]);const U=(a,s)=>{P({element:a.currentTarget,id:s.id}),Y(s)},R=()=>{P(null)},te=async()=>{if(!j||m.length!==7||m.some(a=>!a.pricePerHour||!a.kilometers||!a.extraPerKm)){i.error("Please provide valid pricing for all 7 days.");return}try{h(!0),await o.put(`${c}/api/vans/${j}/approve`,{dailyPricing:m},{headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`}}),i.success("Van approved successfully."),w(a=>a.map(s=>s.id===j?{...s,status:"approved"}:s)),v(!1),g([])}catch{i.error("Failed to approve van. Please try again.")}finally{h(!1)}},K=async()=>{try{await o.put(`${c}/api/vans/${d.id}/reject`),i.success("Van rejected successfully."),w(a=>a.map(s=>s.id===d.id?{...s,status:"rejected"}:s)),P(null)}catch(a){console.error("Error rejecting van:",a),i.error("Failed to reject van. Please try again.")}},E=(a,s,t)=>{const r=[...m];r[a]={...r[a],[s]:t},g(r)},L=a=>{T(a),B(!0)},D=()=>{T(null),B(!1)},re=async()=>{try{await o.delete(`${c}/api/vans/${j}`,{headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`}}),w(a=>a.filter(s=>s.id!==j)),i.success("Van deleted successfully.")}catch{i.error("Failed to delete van.")}finally{D()}},H=async a=>{T(a);try{const s=await o.get(`${c}/api/vans/${a}/pricing`,{headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`}});s.data?g(s.data):g(new Array(7).fill({pricePerHour:"",kilometers:"",extraPerKm:""}))}catch(s){console.error("Error fetching daily pricing:",s),g(new Array(7).fill({pricePerHour:"",kilometers:"",extraPerKm:""}))}v(!0)},le=()=>{C([...p,{damageType:"",description:"",image:null,imageUrl:""}])},A=(a,s,t)=>{const r=[...p];r[a][s]=t,C(r)},ne=a=>{const s=p.filter((t,r)=>r!==a);C(s)},oe=async a=>{try{const s=await o.delete(`${c}/api/vans/${d.id}/contracts`,{headers:{Authorization:`Bearer ${V}`},params:{imageId:a}});s.status===201&&(N(!1),i.success(s.data.message)),S(t=>t.filter(r=>r.image!==a))}catch(s){console.error("Error removing contract image:",s),k("Failed to remove contract image. Please try again.")}},ie=async(a,s)=>{try{const t=new FormData;t.append("file",a),h(!0);const me=(await o.post(`${c}/api/upload`,t,{headers:{"Content-Type":"multipart/form-data"}})).data.imageURL;A(s,"imageUrl",me)}catch(t){console.error("Error uploading image:",t),k("Image upload failed. Please try again.")}finally{h(!1)}},ce=async()=>{if(p.some(a=>!a.damageType||!a.description||!a.imageUrl)){k("Please complete all fields for each contract.");return}h(!0),k("");try{const a=p.map(t=>({damageType:t.damageType,description:t.description,image:t.imageUrl})),s=await o.post(`${c}/api/vans/${d.id}/contracts`,a,{headers:{Authorization:`Bearer ${V}`}});S(t=>[...t,...a]),C([]),N(!1)}catch(a){console.warn("Error saving contracts:",a)}finally{h(!1)}},_=()=>{N(!1)},G=async()=>{if(d)try{const a=await o.get(`${c}/api/vans/contracts/${d.id}`,{headers:{Authorization:`Bearer ${V}`}});S(a.data||[])}catch{i.error("Failed to load contract images. Please try again.")}finally{N(!0)}},de=[{field:"vanName",headerName:"Van Name",width:200},{field:"model",headerName:"Transmission Type",width:150},{field:"regNumber",headerName:"Registration Number",width:200},{field:"capacity",headerName:"Max Load Capacity",width:150},{field:"status",headerName:"Status",width:150,renderCell:a=>e.jsx("span",{className:`px-2 py-1 rounded-full text-white ${a.value==="approved"?"bg-green-500":a.value==="rejected"?"bg-red-500":"bg-yellow-500"}`,children:a.value})},{field:"actions",headerName:"Actions",width:150,renderCell:a=>e.jsxs(e.Fragment,{children:[e.jsx(f,{onClick:s=>U(s,a.row),children:e.jsx(q,{})}),e.jsxs(W,{anchorEl:x?.element,open:!!x&&x?.id===a.row.id,onClose:R,children:[a.row.status!=="approved"&&a.row.status!=="rejected"&&e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>H(a.row.id),children:"Approve"}),e.jsx(n,{onClick:K,children:"Reject"})]}),e.jsx(n,{onClick:()=>O(`/${$}/admin/vans/edit-van/${a.row.id}`),children:"Edit Van"}),e.jsx(n,{onClick:()=>G(),children:"Add/Edit Contracts"}),e.jsx(n,{onClick:()=>L(a.row.id),children:"Delete Van"})]})]})}];return X?e.jsx(Ne,{vanImageUrl:"/runvan.png"}):e.jsxs("div",{className:"container mx-auto p-4",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800",children:"All Vans"}),e.jsx(ue,{to:`/${$}/admin/vans/add`,className:"text-blue-500 hover:underline",children:e.jsxs("button",{className:"bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition duration-200 flex items-center space-x-2",children:[e.jsx(xe,{}),e.jsx("span",{children:"Add New Van"})]})})]}),e.jsxs("div",{className:"w-full overflow-auto",style:{height:400},children:[e.jsx("div",{className:"hidden sm:block",children:e.jsx(ge,{rows:F,columns:de,pageSize:5,rowsPerPageOptions:[5],disableSelectionOnClick:!0})}),e.jsx("div",{className:"block sm:hidden",children:F.map(a=>e.jsxs("div",{className:"bg-white shadow-md rounded-lg mb-4 p-4",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Van Name:"})," ",a.vanName]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Transmission:"})," ",a.model]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Registration Number:"})," ",a.regNumber]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Max Load Capacity:"})," ",a.capacity]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Status:"})," ",e.jsx("span",{className:`px-2 py-1 rounded-full text-white ${a.status==="approved"?"bg-green-500":a.status==="rejected"?"bg-red-500":"bg-yellow-500"}`,children:a.status}),e.jsx(f,{onClick:s=>U(s,a),className:"text-gray-600 hover:text-black",children:e.jsx(q,{})}),e.jsxs(W,{anchorEl:x,open:!!(x&&d?.id===a.id),onClose:R,className:"sm:hidden",children:[a.status!=="approved"&&a.status!=="rejected"&&e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>H(a.id),children:"Approve"}),e.jsx(n,{onClick:()=>K(a.id),children:"Reject"})]}),e.jsx(n,{onClick:()=>O(`/${$}/admin/vans/edit-van/${a.id}`),children:"Edit Van"}),e.jsx(n,{onClick:()=>G(a.id),children:"Add/Edit Contracts"}),e.jsx(n,{onClick:()=>L(a.id),children:"Delete Van"})]})]})]},a.id))})]}),e.jsx(J,{open:Z,onClose:()=>v(!1),children:e.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 px-4 sm:px-0",children:e.jsxs("div",{className:"w-full container sm:max-w-4xl bg-white rounded-lg shadow-lg p-6",children:[e.jsx(y,{variant:"h5",className:"text-2xl font-bold text-gray-800 mb-6 text-center border-b border-gray-200 pb-4",children:"Approve Van"}),e.jsx("div",{className:"space-y-4",children:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map((a,s)=>e.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-4",children:[e.jsx(y,{className:"flex-1 text-gray-600",children:a}),e.jsx(b,{label:"Price Per Hour",type:"number",value:m[s]?.pricePerHour||"",onChange:t=>E(s,"pricePerHour",t.target.value),className:"flex-1 w-full"}),e.jsx(b,{label:"Kilometers",type:"number",value:m[s]?.kilometers||"",onChange:t=>E(s,"kilometers",t.target.value),className:"flex-1 w-full"}),e.jsx(b,{label:"Extra Per Km",type:"number",value:m[s]?.extraPerKm||"",onChange:t=>E(s,"extraPerKm",t.target.value),className:"flex-1 w-full"})]},a))}),e.jsxs("div",{className:"mt-6 flex justify-end space-x-4",children:[e.jsx(u,{variant:"outlined",onClick:()=>v(!1),className:"rounded-md",children:"Cancel"}),e.jsx(u,{variant:"contained",onClick:te,className:"bg-green-500 text-white rounded-md",children:"Approve Van"})]})]})})}),e.jsxs(je,{open:ee,onClose:D,"aria-labelledby":"confirm-dialog-title","aria-describedby":"confirm-dialog-description",children:[e.jsx(fe,{id:"confirm-dialog-title",children:"Confirm Deletion"}),e.jsx(ye,{children:e.jsx(y,{id:"confirm-dialog-description",children:"Are you sure you want to delete this van? This action cannot be undone."})}),e.jsxs(be,{children:[e.jsx(u,{onClick:D,color:"primary",children:"Cancel"}),e.jsx(u,{onClick:re,color:"error",variant:"contained",children:"Confirm"})]})]}),e.jsx(J,{open:ae,onClose:_,children:e.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 px-4 sm:px-0",children:e.jsxs("div",{className:"w-full container sm:max-w-4xl bg-white rounded-lg shadow-lg p-6 relative transform transition-all scale-100 sm:scale-105",children:[e.jsx("button",{className:"absolute top-2 left-2",children:e.jsx(f,{onClick:_,children:e.jsx(we,{})})}),e.jsx(y,{variant:"h5",className:"text-2xl font-bold text-gray-800 mb-6 text-center border-b border-gray-200 pb-4",children:"Add/Edit Contracts"}),e.jsx("div",{className:"overflow-x-auto mb-6",children:e.jsxs("table",{className:"min-w-full bg-white shadow rounded-lg",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-100 border-b",children:[e.jsx("th",{className:"text-left py-3 px-4 font-semibold text-gray-600 whitespace-nowrap",children:"Damage Type"}),e.jsx("th",{className:"text-left py-3 px-4 font-semibold text-gray-600 whitespace-nowrap",children:"Description"}),e.jsx("th",{className:"text-left py-3 px-4 font-semibold text-gray-600 whitespace-nowrap",children:"Image"}),e.jsx("th",{className:"text-left py-3 px-4 font-semibold text-gray-600 whitespace-nowrap",children:"Action"})]})}),e.jsx("tbody",{children:se.map((a,s)=>e.jsxs("tr",{className:"border-b hover:bg-gray-50",children:[e.jsx("td",{className:"py-3 px-4 text-gray-700",children:a?.damageType}),e.jsx("td",{className:"py-3 px-4  text-gray-700",children:a.description}),e.jsx("td",{className:"py-3 px-4 ",children:e.jsx("img",{src:a.image,alt:"Contract",className:"w-64 h-32 objec rounded-md shadow-sm"})}),e.jsx("td",{className:"py-3 px-4",children:e.jsx(f,{onClick:()=>oe(a._id),className:"text-red-500 hover:text-red-700",children:e.jsx(Q,{})})})]},s))})]})}),p.map((a,s)=>e.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-4 mt-4",children:[e.jsx(b,{label:"Damage Type",variant:"outlined",value:a.damageType,onChange:t=>A(s,"damageType",t.target.value),className:"flex-1 w-full",InputProps:{className:"rounded-md shadow-sm border-gray-300 focus:ring-2 focus:ring-blue-500"}}),e.jsx(b,{label:"Description",variant:"outlined",value:a.description,onChange:t=>A(s,"description",t.target.value),className:"flex-1 w-full",InputProps:{className:"rounded-md shadow-sm border-gray-300 focus:ring-2 focus:ring-blue-500"}}),e.jsxs("div",{className:"flex-1 w-full p-2 border border-dashed rounded-md border-gray-300 cursor-pointer hover:bg-gray-50",children:[e.jsx("input",{type:"file",onChange:t=>{t.target.files[0]&&(ie(t.target.files[0],s),A(s,"image",t.target.files[0]))}}),a.imageUrl?e.jsx("img",{src:a.imageUrl,alt:"Contract",className:"w-12 h-12 object-cover rounded-md shadow-sm"}):e.jsx("p",{className:"text-sm text-gray-400",children:"Click to upload an image"})]}),e.jsx(f,{onClick:()=>ne(s),className:"text-red-500 hover:text-red-700",children:e.jsx(Q,{})})]},s)),e.jsxs("div",{className:"mt-8 space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-end",children:[e.jsx(u,{variant:"outlined",color:"primary",onClick:le,className:"rounded-md shadow-sm hover:bg-blue-50",children:"Add New Contract"}),z&&e.jsx(y,{color:"error",className:"text-red-500 text-sm mt-2",children:z}),e.jsx(u,{variant:"contained",onClick:ce,disabled:I,className:"bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition w-full sm:w-auto",children:I?e.jsx(ve,{size:24}):"Save Contracts"})]})]})})})]})};export{Ae as default};
