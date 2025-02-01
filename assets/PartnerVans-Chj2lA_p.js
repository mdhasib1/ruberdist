import{r as o,u as re,a as oe,j as e,L as ne,d,F as y}from"./index-DrMvIKwq.js";import{_ as ie,$ as R,V as le,a0 as _}from"./index-y5yuKkc0.js";import{V as de}from"./VanLoading-B2lqwOkK.js";import{I as m}from"./IconButton-BGQYt6kH.js";import{M as G}from"./Menu-ComLaOXz.js";import{M as n}from"./MenuItem-8srXigvG.js";import{D as ce,a as me}from"./DialogContent-B3_vuZ-u.js";import{D as pe}from"./DialogTitle-D6X8JJ-q.js";import{T as k}from"./Typography-BAti9wpa.js";import{D as he}from"./DialogActions-D_0ZQhiH.js";import{B as b}from"./Button-xUQB_oWD.js";import{M as xe}from"./Modal-CfkloFEy.js";import{T as q}from"./TextField-DvirranI.js";import{C as ge}from"./CircularProgress-B5agUqRt.js";import{D as ue}from"./DataGrid-odPpneuv.js";import"./iconBase-BBLIWj70.js";import"./createSimplePaletteValueFilter-zjTMkHT-.js";import"./Portal-BMjECl0g.js";import"./Grow-B1pBNw31.js";import"./useSlot-BWhg9WXJ.js";import"./useTheme-C3_UZ2QD.js";import"./useTheme-CepysXf6.js";import"./List-BLDT_Zsz.js";import"./Paper-C4BDKHkT.js";import"./listItemTextClasses--ZWm_3O6.js";import"./dividerClasses-CP17GPn_.js";import"./index-pDPmJGlT.js";import"./Select-DJdQC6kX.js";import"./useControlled-Bio4-BJG.js";import"./createSvgIcon-CgYohZ5P.js";import"./isMuiElement-LlRumiQy.js";import"./index-COvJ5x3S.js";import"./Close-CZtWXSiP.js";import"./Badge-Dv4pCkXf.js";import"./Tooltip-BJxLh1tU.js";import"./Chip-BGAMkzyn.js";import"./ClickAwayListener-CKDzE_Pj.js";import"./Toolbar-IXigYXsH.js";import"./ListItemText-CPFOLNaz.js";import"./InputAdornment-qRqOoZAt.js";import"./Divider-DKVgf2v9.js";import"./FormControlLabel-B2fud-Wt.js";import"./TableCell-Cv6TnrlD.js";import"./Skeleton-BNpbg8au.js";const c="https://rubertogo.com",ia=()=>{const[T,A]=o.useState([]),[H,D]=o.useState(!0),[p,$]=o.useState(null),[i,J]=o.useState(null),[S,h]=o.useState(!1),{lang:N}=re(),[K,E]=o.useState(!1),[F,M]=o.useState(null),[Q,x]=o.useState(!1),[l,g]=o.useState([]),[W,w]=o.useState([]),[V,u]=o.useState(""),I=oe(),C=localStorage.getItem("accessToken");o.useEffect(()=>{D(!0),(async()=>{try{const t=(await d.get(`${c}/api/vans/my-vans`,{headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`}})).data.map(r=>{var j,L;return{id:r._id,vanName:((j=r.name)==null?void 0:j.en)||"N/A",model:r.transmissionType||"N/A",regNumber:r.plateNumber||"N/A",capacity:((L=r.weight)==null?void 0:L.maxLoad)||"N/A",status:r.status||"pending"}});A(t)}catch(s){console.error("Error fetching van data:",s)}finally{D(!1)}})()},[]);const P=(a,s)=>{$(a.currentTarget),J(s)},B=()=>{$(null)},O=a=>{M(a),E(!0)},v=()=>{M(null),E(!1)},X=async()=>{try{await d.delete(`${c}/api/vans/${F}`,{headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`}}),A(a=>a.filter(s=>s.id!==F)),y.success("Van deleted successfully.")}catch{y.error("Failed to delete van.")}finally{v()}},Y=()=>{g([...l,{damageType:"",description:"",image:null,imageUrl:""}])},f=(a,s,t)=>{const r=[...l];r[a][s]=t,g(r)},Z=a=>{const s=l.filter((t,r)=>r!==a);g(s)},ee=async a=>{try{const s=await d.delete(`${c}/api/vans/${i.id}/contracts`,{headers:{Authorization:`Bearer ${C}`},params:{imageId:a}});s.status===201&&(x(!1),y.success(s.data.message)),w(t=>t.filter(r=>r.image!==a))}catch(s){console.log("Error removing contract image:",s),u("Failed to remove contract image. Please try again.")}},ae=async(a,s)=>{try{const t=new FormData;t.append("file",a),h(!0);const j=(await d.post(`${c}/api/upload`,t,{headers:{"Content-Type":"multipart/form-data"}})).data.imageURL;f(s,"imageUrl",j)}catch(t){console.error("Error uploading image:",t),u("Image upload failed. Please try again.")}finally{h(!1)}},se=async()=>{if(l.some(a=>!a.damageType||!a.description||!a.imageUrl)){u("Please complete all fields for each contract.");return}h(!0),u("");try{const a=l.map(t=>({damageType:t.damageType,description:t.description,image:t.imageUrl})),s=await d.post(`${c}/api/vans/${i.id}/contracts`,a,{headers:{Authorization:`Bearer ${C}`}});console.log("res is",s),w(t=>[...t,...a]),g([]),x(!1)}catch(a){console.log("Error saving contracts:",a)}finally{h(!1)}},U=()=>{x(!1)},z=async()=>{if(i)try{const a=await d.get(`${c}/api/vans/contracts/${i.id}`,{headers:{Authorization:`Bearer ${C}`}});w(a.data||[])}catch{y.error("Failed to load contract images. Please try again.")}finally{x(!0)}},te=[{field:"vanName",headerName:"Van Name",width:200},{field:"model",headerName:"Transmission Type",width:150},{field:"regNumber",headerName:"Registration Number",width:200},{field:"capacity",headerName:"Max Load Capacity",width:150},{field:"status",headerName:"Status",width:150,renderCell:a=>e.jsx("span",{className:`px-2 py-1 rounded-full text-white ${a.value==="approved"?"bg-green-500":a.value==="rejected"?"bg-red-500":"bg-yellow-500"}`,children:a.value})},{field:"actions",headerName:"Actions",width:150,renderCell:a=>e.jsxs(e.Fragment,{children:[e.jsx(m,{onClick:s=>P(s,a.row),children:e.jsx(R,{})}),e.jsxs(G,{anchorEl:p,open:!!p,onClose:B,children:[e.jsx(n,{onClick:()=>I(`/${N}/admin/vans/edit-van/${a.row.id}`),children:"Edit Van"}),e.jsx(n,{onClick:()=>z(),children:"Add/Edit Contracts"}),e.jsx(n,{onClick:()=>O(a.row.id),children:"Delete Van"})]})]})}];return H?e.jsx(de,{vanImageUrl:"/runvan.png"}):e.jsxs("div",{className:"container mx-auto p-4",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800",children:"All Vans"}),e.jsx(ne,{to:`/${N}/partner/vans/add-van`,className:"text-blue-500 hover:underline",children:e.jsxs("button",{className:"bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition duration-200 flex items-center space-x-2",children:[e.jsx(ie,{}),e.jsx("span",{children:"Add New Van"})]})})]}),e.jsxs("div",{className:"w-full overflow-auto",style:{height:400},children:[e.jsx("div",{className:"hidden sm:block",children:e.jsx(ue,{rows:T,columns:te,pageSize:5,rowsPerPageOptions:[5],disableSelectionOnClick:!0})}),e.jsx("div",{className:"block sm:hidden",children:T.map(a=>e.jsxs("div",{className:"bg-white shadow-md rounded-lg mb-4 p-4",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Van Name:"})," ",a.vanName]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Transmission:"})," ",a.model]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Registration Number:"})," ",a.regNumber]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Max Load Capacity:"})," ",a.capacity]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Status:"})," ",e.jsx("span",{className:`px-2 py-1 rounded-full text-white ${a.status==="approved"?"bg-green-500":a.status==="rejected"?"bg-red-500":"bg-yellow-500"}`,children:a.status}),e.jsx(m,{onClick:s=>P(s,a),className:"text-gray-600 hover:text-black",children:e.jsx(R,{})}),e.jsxs(G,{anchorEl:p,open:!!(p&&(i==null?void 0:i.id)===a.id),onClose:B,children:[a.status!=="approved"&&a.status!=="rejected"&&e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>handleOpenApproveModal(a.id),children:"Approve"}),e.jsx(n,{onClick:()=>handleReject(a.id),children:"Reject"})]}),e.jsx(n,{onClick:()=>I(`/${N}/admin/vans/edit-van/${a.id}`),children:"Edit Van"}),e.jsx(n,{onClick:()=>z(a.id),children:"Add/Edit Contracts"}),e.jsx(n,{onClick:()=>O(a.id),children:"Delete Van"})]})]})]},a.id))})]}),e.jsxs(ce,{open:K,onClose:v,"aria-labelledby":"confirm-dialog-title","aria-describedby":"confirm-dialog-description",children:[e.jsx(pe,{id:"confirm-dialog-title",children:"Confirm Deletion"}),e.jsx(me,{children:e.jsx(k,{id:"confirm-dialog-description",children:"Are you sure you want to delete this van? This action cannot be undone."})}),e.jsxs(he,{children:[e.jsx(b,{onClick:v,color:"primary",children:"Cancel"}),e.jsx(b,{onClick:X,color:"error",variant:"contained",children:"Confirm"})]})]}),e.jsx(xe,{open:Q,onClose:U,children:e.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 px-4 sm:px-0",children:e.jsxs("div",{className:"w-full container sm:max-w-4xl bg-white rounded-lg shadow-lg p-6 relative transform transition-all scale-100 sm:scale-105",children:[e.jsx("button",{className:"absolute top-2 left-2",children:e.jsx(m,{onClick:U,children:e.jsx(le,{})})}),e.jsx(k,{variant:"h5",className:"text-2xl font-bold text-gray-800 mb-6 text-center border-b border-gray-200 pb-4",children:"Add/Edit Contracts"}),e.jsx("div",{className:"overflow-x-auto mb-6",children:e.jsxs("table",{className:"min-w-full bg-white shadow rounded-lg",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-100 border-b",children:[e.jsx("th",{className:"text-left py-3 px-4 font-semibold text-gray-600 whitespace-nowrap",children:"Damage Type"}),e.jsx("th",{className:"text-left py-3 px-4 font-semibold text-gray-600 whitespace-nowrap",children:"Description"}),e.jsx("th",{className:"text-left py-3 px-4 font-semibold text-gray-600 whitespace-nowrap",children:"Image"}),e.jsx("th",{className:"text-left py-3 px-4 font-semibold text-gray-600 whitespace-nowrap",children:"Action"})]})}),e.jsx("tbody",{children:W.map((a,s)=>e.jsxs("tr",{className:"border-b hover:bg-gray-50",children:[e.jsx("td",{className:"py-3 px-4 text-gray-700",children:a==null?void 0:a.damageType}),e.jsx("td",{className:"py-3 px-4  text-gray-700",children:a.description}),e.jsx("td",{className:"py-3 px-4 ",children:e.jsx("img",{src:a.image,alt:"Contract",className:"w-64 h-32 object-contain rounded-md shadow-sm"})}),e.jsx("td",{className:"py-3 px-4",children:e.jsx(m,{onClick:()=>ee(a._id),className:"text-red-500 hover:text-red-700",children:e.jsx(_,{})})})]},s))})]})}),l.map((a,s)=>e.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-4 mt-4",children:[e.jsx(q,{label:"Damage Type",variant:"outlined",value:a.damageType,onChange:t=>f(s,"damageType",t.target.value),className:"flex-1 w-full",InputProps:{className:"rounded-md shadow-sm border-gray-300 focus:ring-2 focus:ring-blue-500"}}),e.jsx(q,{label:"Description",variant:"outlined",value:a.description,onChange:t=>f(s,"description",t.target.value),className:"flex-1 w-full",InputProps:{className:"rounded-md shadow-sm border-gray-300 focus:ring-2 focus:ring-blue-500"}}),e.jsxs("div",{className:"flex-1 w-full p-2 border border-dashed rounded-md border-gray-300 cursor-pointer hover:bg-gray-50",children:[e.jsx("input",{type:"file",onChange:t=>{t.target.files[0]&&(ae(t.target.files[0],s),f(s,"image",t.target.files[0]))}}),a.imageUrl?e.jsx("img",{src:a.imageUrl,alt:"Contract",className:"w-12 h-12 object-cover rounded-md shadow-sm"}):e.jsx("p",{className:"text-sm text-gray-400",children:"Click to upload an image"})]}),e.jsx(m,{onClick:()=>Z(s),className:"text-red-500 hover:text-red-700",children:e.jsx(_,{})})]},s)),e.jsxs("div",{className:"mt-8 space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-end",children:[e.jsx(b,{variant:"outlined",color:"primary",onClick:Y,className:"rounded-md shadow-sm hover:bg-blue-50",children:"Add New Contract"}),V&&e.jsx(k,{color:"error",className:"text-red-500 text-sm mt-2",children:V}),e.jsx(b,{variant:"contained",onClick:se,disabled:S,className:"bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition w-full sm:w-auto",children:S?e.jsx(ge,{size:24}):"Save Contracts"})]})]})})})]})};export{ia as default};
