import{a as j,r as n,j as e,k as s,C as y,m as t,b2 as w,b3 as T,ax as v,co as D,aU as S,cp as b,D as C,b as P}from"./vendor-C2yKzKC1.js";const B="https://www.rubertogo.com",F=()=>{const{userId:o,lang:m}=j(),[l,u]=n.useState([]),[r,f]=n.useState(null),[N,c]=n.useState(!1),[x,d]=n.useState(null);if(n.useEffect(()=>{(async()=>{c(!0);const h=localStorage.getItem("accessToken");if(!h){d("User is not authenticated. Please log in."),c(!1);return}try{const i=await P.get(`${B}/api/bookings/${o}`,{headers:{Authorization:`Bearer ${h}`}});u(i.data.bookings||[]),f(i.data.user||null),d(null)}catch(i){d(i.response?.data?.message||"Failed to fetch booking history.")}finally{c(!1)}})()},[o]),N)return e.jsx(s,{className:"flex justify-center items-center h-screen",children:e.jsx(y,{})});if(x)return e.jsx(s,{className:"flex justify-center items-center h-screen",children:e.jsx(t,{color:"error",variant:"h6",children:x})});const p=[{field:"vanName",headerName:"Van Name",width:200},{field:"startDate",headerName:"Start Date",width:150},{field:"endDate",headerName:"End Date",width:150},{field:"startTime",headerName:"Start Time",width:150},{field:"endTime",headerName:"End Time",width:150},{field:"totalPrice",headerName:"Total Price (CHF)",width:150},{field:"status",headerName:"Status",width:150}],g=l.map(a=>({id:a._id,vanName:a?.vanId?.name?.[m]||"Van Name",startDate:a.startDate,endDate:a.endDate,startTime:new Date(a.startTime).toLocaleTimeString(),endTime:new Date(a.endTime).toLocaleTimeString(),totalPrice:a.totalPrice,status:a.status.charAt(0).toUpperCase()+a.status.slice(1)}));return e.jsxs("div",{className:"container mx-auto p-6",children:[r&&e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsxs(t,{variant:"h4",className:"text-center font-bold text-gray-700 mb-6",children:["Booking History ",r.firstName," ",r.lastName]}),e.jsx(t,{variant:"body2",sx:{fontSize:"1.2em",marginTop:"1rem"},children:r.email}),e.jsx(t,{variant:"body1",sx:{fontSize:"1.1em",marginTop:"0.3rem"},children:r.phone})]}),e.jsx(s,{sx:{display:{xs:"block",md:"none"}},children:l.length===0?e.jsx(t,{variant:"body1",className:"text-center text-gray-500",children:"No bookings found."}):e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:l.map(a=>e.jsx(w,{className:"shadow-lg border border-gray-200 rounded-lg",children:e.jsxs(T,{children:[e.jsxs(s,{className:"flex items-center gap-2 mb-2",children:[e.jsx(v,{className:"text-blue-500"}),e.jsx(t,{variant:"h6",className:"font-bold",children:a?.vanId?.name?.[m]||"Van Name"})]}),e.jsxs(s,{className:"flex items-center gap-2 mb-1",children:[e.jsx(D,{className:"text-green-500"}),e.jsxs(t,{variant:"body2",className:"text-gray-600",children:[a.startDate," to ",a.endDate]})]}),e.jsxs(s,{className:"flex items-center gap-2 mb-1",children:[e.jsx(S,{className:"text-yellow-500"}),e.jsxs(t,{variant:"body2",className:"text-gray-600",children:[new Date(a.startTime).toLocaleTimeString()," -"," ",new Date(a.endTime).toLocaleTimeString()]})]}),e.jsxs(s,{className:"flex items-center gap-2 mb-2",children:[e.jsx(b,{className:"text-green-500"}),e.jsxs(t,{variant:"body2",className:"text-gray-600",children:["Total Price: $",a.totalPrice]})]}),e.jsxs(t,{variant:"caption",className:`font-bold ${a.status==="completed"?"text-green-600":a.status==="pending"?"text-yellow-600":"text-red-600"}`,children:["Status:"," ",a.status.charAt(0).toUpperCase()+a.status.slice(1)]})]})},a._id))})}),e.jsx(s,{sx:{display:{xs:"none",md:"block"},height:500,mt:4},children:e.jsx(C,{rows:g,columns:p,pageSize:5,rowsPerPageOptions:[5],disableSelectionOnClick:!0,sx:{"& .MuiDataGrid-columnHeaders":{bgcolor:"primary.main",color:"#000"},"& .MuiDataGrid-cell":{fontSize:"16px"}}})})]})};export{F as default};
