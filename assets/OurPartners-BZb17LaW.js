import{r as l,d as n,j as s}from"./index-DrMvIKwq.js";import{u as A}from"./index-DaPaQiLs.js";import{D as $}from"./DataGrid-odPpneuv.js";import"./createSimplePaletteValueFilter-zjTMkHT-.js";import"./useTheme-CepysXf6.js";import"./Chip-BGAMkzyn.js";import"./createSvgIcon-CgYohZ5P.js";import"./CircularProgress-B5agUqRt.js";import"./index-COvJ5x3S.js";import"./Portal-BMjECl0g.js";import"./Select-DJdQC6kX.js";import"./Menu-ComLaOXz.js";import"./Grow-B1pBNw31.js";import"./useSlot-BWhg9WXJ.js";import"./useTheme-C3_UZ2QD.js";import"./List-BLDT_Zsz.js";import"./Paper-C4BDKHkT.js";import"./Modal-CfkloFEy.js";import"./useControlled-Bio4-BJG.js";import"./index-pDPmJGlT.js";import"./Close-CZtWXSiP.js";import"./Badge-Dv4pCkXf.js";import"./Tooltip-BJxLh1tU.js";import"./IconButton-BGQYt6kH.js";import"./ClickAwayListener-CKDzE_Pj.js";import"./MenuItem-8srXigvG.js";import"./listItemTextClasses--ZWm_3O6.js";import"./dividerClasses-CP17GPn_.js";import"./Toolbar-IXigYXsH.js";import"./ListItemText-CPFOLNaz.js";import"./Typography-BAti9wpa.js";import"./TextField-DvirranI.js";import"./isMuiElement-LlRumiQy.js";import"./InputAdornment-qRqOoZAt.js";import"./Button-xUQB_oWD.js";import"./Divider-DKVgf2v9.js";import"./FormControlLabel-B2fud-Wt.js";import"./TableCell-Cv6TnrlD.js";import"./Skeleton-BNpbg8au.js";const c="https://rubertogo.com",pe=()=>{var g,j;const[i,r]=l.useState([]),[b,d]=l.useState(!1),[v,m]=l.useState(!1),[t,p]=l.useState(null),f=A("(max-width: 768px)");l.useEffect(()=>{w()},[]);const w=async()=>{d(!0);try{const e=await n.get(`${c}/api/partner`,{headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`}});r(e.data||[])}catch(e){console.error("Error fetching partner requests:",e)}finally{d(!1)}},h=async e=>{try{await n.put(`${c}/api/partner/approve/${e}`,{},{headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`}}),r(o=>o.map(a=>a._id===e?{...a,approvalStatus:"approved"}:a)),alert("Partner approved successfully!")}catch(o){console.error("Error approving partner:",o),alert("Failed to approve partner.")}},u=async e=>{try{await n.put(`${c}/api/partner/reject/${e}`,{},{headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`}}),r(o=>o.map(a=>a._id===e?{...a,approvalStatus:"rejected"}:a)),alert("Partner rejected successfully!")}catch(o){console.error("Error rejecting partner:",o),alert("Failed to reject partner.")}},x=e=>{p(e),m(!0)},N=()=>{p(null),m(!1)},y=[{field:"name",headerName:"Name",width:200},{field:"email",headerName:"Email",width:200},{field:"phone",headerName:"Phone",width:150},{field:"vat",headerName:"Registration #",width:150},{field:"approvalStatus",headerName:"Status",width:150,renderCell:e=>s.jsx("span",{className:`px-3 py-1 rounded-full ${e.value==="approved"?"bg-green-100 text-green-800":e.value==="rejected"?"bg-red-100 text-red-800":"bg-yellow-100 text-yellow-800"}`,children:e.value})},{field:"actions",headerName:"Actions",width:250,renderCell:e=>s.jsxs("div",{className:"space-x-2",children:[e.row.approvalStatus!=="approved"&&e.row.approvalStatus!=="rejected"&&s.jsxs(s.Fragment,{children:[s.jsx("button",{onClick:()=>h(e.row.id),className:"bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600",children:"Approve"}),s.jsx("button",{onClick:()=>u(e.row.id),className:"bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600",children:"Reject"})]}),s.jsx("button",{onClick:()=>x(e.row),className:"bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600",children:"View"})]})}],S=i.map(e=>{var o,a;return{id:e._id,name:e!=null&&e.user?`${e.user.firstName||"N/A"} ${e.user.lastName||"N/A"}`:"N/A",email:((o=e==null?void 0:e.user)==null?void 0:o.email)||"N/A",phone:((a=e==null?void 0:e.user)==null?void 0:a.phone)||"N/A",vat:e.vat||"N/A",approvalStatus:e.approvalStatus||"pending"}});return s.jsxs("div",{className:"p-6 bg-gray-100 min-h-screen max-w-full",children:[s.jsx("h1",{className:"text-2xl font-bold mb-6",children:"Partner Requests"}),b?s.jsx("p",{className:"text-center",children:"Loading..."}):i.length===0?s.jsx("p",{className:"text-center",children:"No partner requests found."}):f?s.jsx("div",{className:"grid gap-4",children:i.map(e=>s.jsxs("div",{className:"bg-white shadow p-4 rounded-lg",children:[s.jsxs("p",{children:[s.jsx("span",{className:"font-semibold",children:"Name:"})," ",`${e.user.firstName} ${e.user.lastName}`]}),s.jsxs("p",{children:[s.jsx("span",{className:"font-semibold",children:"Email:"})," ",e.user.email]}),s.jsxs("p",{children:[s.jsx("span",{className:"font-semibold",children:"Phone:"})," ",e.user.phone]}),s.jsxs("p",{children:[s.jsx("span",{className:"font-semibold",children:"Registration #:"})," ",e.vat]}),s.jsxs("p",{className:"text-green-500",children:[s.jsx("span",{className:"font-semibold",children:"Status #:"})," ",e==null?void 0:e.approvalStatus]}),s.jsxs("div",{className:"mt-4 space-x-2",children:[e.approvalStatus!=="approved"&&e.approvalStatus!=="rejected"&&s.jsxs(s.Fragment,{children:[s.jsx("button",{onClick:()=>h(e._id),className:"bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600",children:"Approve"}),s.jsx("button",{onClick:()=>u(e._id),className:"bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600",children:"Reject"})]}),s.jsx("button",{onClick:()=>x(e),className:"bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600",children:"View"})]})]},e._id))}):s.jsx("div",{className:"w-full h-[500px]",children:s.jsx($,{rows:S,columns:y,pageSize:5,rowsPerPageOptions:[5],disableSelectionOnClick:!0})}),v&&t&&s.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50",children:s.jsxs("div",{className:"bg-white rounded-xl shadow-lg max-w-4xl w-full p-6 relative",children:[s.jsx("button",{onClick:N,className:"absolute top-4 right-4 text-gray-500 hover:text-gray-800",children:"✖"}),s.jsxs("h2",{className:"text-2xl font-bold mb-4",children:["Partner Details - ",t.companyName]}),s.jsxs("p",{children:[s.jsx("span",{className:"font-semibold",children:"Owner Name:"})," ",t!=null&&t.user?`${t.user.firstName||"N/A"} ${t.user.lastName||"N/A"}`:"N/A"]}),s.jsxs("p",{children:[s.jsx("span",{className:"font-semibold",children:"Email:"})," ",((g=t==null?void 0:t.user)==null?void 0:g.email)||"N/A"]}),s.jsxs("p",{children:[s.jsx("span",{className:"font-semibold",children:"Phone:"})," ",((j=t==null?void 0:t.user)==null?void 0:j.phone)||"N/A"]}),s.jsxs("p",{children:[s.jsx("span",{className:"font-semibold",children:"Registration #:"})," ",(t==null?void 0:t.vat)||"N/A"]}),s.jsxs("p",{className:"text-green-500",children:[s.jsx("span",{className:"font-semibold",children:"Status #:"})," ",(t==null?void 0:t.approvalStatus)||"N/A"]}),s.jsx("button",{onClick:N,className:"bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 mt-4",children:"Close"})]})})]})};export{pe as default};
