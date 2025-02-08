import{r,b as l,j as t,D as z,bq as N,f as n}from"./vendor-YnnEx5JS.js";const c="https://www.rubertogo.wedevguru.com",j={Pending:"bg-yellow-200 text-yellow-800",Canceled:"bg-red-200 text-red-800",Captured:"bg-green-200 text-green-800"},C=()=>{const[g,m]=r.useState([]),[a,u]=r.useState(null),[x,h]=r.useState(!1),[p,o]=r.useState(!1);r.useEffect(()=>{i()},[]);const i=async()=>{try{const e=await l.get(`${c}/api/all-pre-authorization`,{headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`}});e.data&&m(e.data)}catch(e){console.error("Error fetching pre-authorization data:",e)}},f=async e=>{if(!a?.id){alert("Invalid booking selected. Please try again.");return}o(!0);try{(await l.post(`${c}/api/capture-pre-authorization`,{bookingId:a.id,amount:e},{headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`}})).data.success&&(n.success("Pre-authorization captured successfully."),i(),d())}catch(s){console.error("Error capturing pre-authorization:",s),n.error("Failed to capture pre-authorization. Please try again.")}finally{o(!1)}},A=async()=>{if(!a?.id){alert("Invalid booking selected. Please try again.");return}o(!0);try{(await l.post(`${c}/api/cancel-pre-authorization`,{bookingId:a.id},{headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`}})).data.success&&(n.success("Pre-authorization canceled successfully."),i(),d())}catch(e){console.error("Error canceling pre-authorization:",e),n.error("Failed to cancel pre-authorization. Please try again.")}finally{o(!1)}},y=e=>{u(e),h(!0)},d=()=>{u(null),h(!1)},b=[{field:"name",headerName:"Name",width:150},{field:"phone",headerName:"Phone",width:150},{field:"authorizedAmount",headerName:"Authorized Amount",width:180},{field:"capturedAmount",headerName:"Captured Amount",width:180},{field:"holdDurationDays",headerName:"Hold Duration (Days)",width:180},{field:"status",headerName:"Status",width:150,renderCell:e=>{const s=j[e.value]||"bg-gray-200 text-gray-800";return t.jsx("div",{className:`px-2 py-2 flex mt-2 justify-center items-center rounded-full text-center text-sm font-medium ${s}`,children:e.value})}},{field:"actions",headerName:"Actions",width:200,renderCell:e=>t.jsx("button",{onClick:()=>y(e.row),className:"px-4  bg-blue-500 text-white rounded",children:"Manage"})}],w=g.map(e=>({id:e._id,name:e.userId?.firstName+" "+e.userId?.lastName||"N/A",phone:e.phone||e.userId?.phone||"N/A",authorizedAmount:e.authorizedAmount||0,capturedAmount:e.capturedAmount!==void 0?e.capturedAmount:"N/A",holdDurationDays:e.holdDurationDays||"N/A",status:e.status||"Unknown"}));return t.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-md",children:[t.jsx("h2",{className:"text-xl font-bold text-gray-800 mb-4",children:"Pre-Authorization Data"}),t.jsx("div",{style:{height:600,width:"100%"},children:t.jsx(z,{rows:w,columns:b,pageSize:10,rowsPerPageOptions:[10,20,50],checkboxSelection:!1,disableSelectionOnClick:!0,className:"text-gray-700"})}),t.jsx(N,{open:x,onClose:d,children:t.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-20",children:[t.jsx("h2",{className:"text-lg font-bold mb-4",children:"Manage Pre-Authorization"}),t.jsxs("p",{children:["Authorized Amount: $",a?.authorizedAmount||0]}),t.jsxs("p",{children:["Captured Amount: $",a?.capturedAmount||0]}),t.jsxs("div",{className:"flex justify-end gap-4 mt-4",children:[t.jsx("button",{onClick:A,disabled:p,className:"px-4 py-2 bg-red-500 text-white rounded",children:"Refund"}),t.jsx("button",{onClick:()=>f(a?.authorizedAmount),disabled:p,className:"px-4 py-2 bg-green-500 text-white rounded",children:"Capture"})]})]})})]})};export{C as default};
