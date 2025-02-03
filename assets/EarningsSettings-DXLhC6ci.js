import{r as s,j as e,C as h,am as c,bZ as x,a9 as l,B as N,b_ as E,b as f}from"./vendor-BXSwQO8Y.js";const y="https://www.rubertogo.com",C=()=>{const[v,g]=s.useState(!1),[o,u]=s.useState(!1),[b,d]=s.useState(!1),[p,a]=s.useState(""),[r,m]=s.useState({adminpercentage:"",partnerpercentage:"",referralpercentage:"",userpercentage:""});s.useEffect(()=>{(async()=>{g(!0);try{const t=await f.get(`${y}/api/earnings-settings`,{headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`}});console.log("response",t),t.status===200?m(t.data.settings||{}):a("Failed to fetch earnings settings.")}catch(t){console.error("Error fetching earnings settings:",t),a("An error occurred while fetching earnings settings.")}finally{g(!1)}})()},[]);const n=i=>{const{name:t,value:S}=i.target;m(w=>({...w,[t]:S}))},j=async i=>{i.preventDefault(),u(!0),d(!1),a("");try{const t=await f.put(`${y}/api/earnings-settings`,r,{headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`}});console.log("Settings update response:",t),t.status===200?(d(!0),a("")):a(t.data.message||"Failed to update earnings settings.")}catch(t){console.error("Error updating earnings settings:",t),a("An error occurred while updating earnings settings.")}finally{u(!1)}};return v?e.jsx("div",{className:"flex justify-center items-center h-screen",children:e.jsx(h,{})}):e.jsxs(c.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},className:"max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg",children:[e.jsx("h1",{className:"text-2xl font-bold mb-6 text-gray-800",children:"Earnings Settings"}),b&&e.jsx(c.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e.jsx(x,{severity:"success",className:"mb-4",children:"Earnings settings updated successfully!"})}),p&&e.jsx(c.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e.jsx(x,{severity:"error",className:"mb-4",children:p})}),e.jsxs("form",{onSubmit:j,className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsx(l,{label:"Admin Percentage",name:"adminpercentage",type:"number",value:r.adminpercentage,onChange:n,fullWidth:!0,required:!0,variant:"outlined"}),e.jsx(l,{label:"Partner Percentage",name:"partnerpercentage",type:"number",value:r.partnerpercentage,onChange:n,fullWidth:!0,required:!0,variant:"outlined"}),e.jsx(l,{label:"Referral Percentage",name:"referralpercentage",type:"number",value:r.referralpercentage,onChange:n,fullWidth:!0,required:!0,variant:"outlined"}),e.jsx(l,{label:"User Percentage",name:"userpercentage",type:"number",value:r.userpercentage,onChange:n,fullWidth:!0,required:!0,variant:"outlined"})]}),e.jsx("div",{className:"flex justify-end",children:e.jsx(c.div,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"flex items-center",children:e.jsx(N,{type:"submit",variant:"contained",color:"primary",startIcon:o?e.jsx(h,{size:20}):e.jsx(E,{}),disabled:o,className:"bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded",children:o?"Saving...":"Save"})})})]})]})};export{C as default};
