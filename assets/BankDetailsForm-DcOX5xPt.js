import{r as l,b,j as t,m as h,a9 as g,B as k,C as x,f as i}from"./vendor-YnnEx5JS.js";const f="https://rubertogo.wedevguru.com",y=r=>{if(!r)return null;try{const a=r.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),o=decodeURIComponent(atob(a).split("").map(n=>"%"+("00"+n.charCodeAt(0).toString(16)).slice(-2)).join(""));return JSON.parse(o)}catch(s){return console.error("Failed to parse JWT:",s.message),null}},N=()=>{const[r,s]=l.useState(!1),[a,o]=l.useState({id:"",bankName:"",accountNumber:"",accountHolderName:"",branchName:"",swiftCode:""}),n=localStorage.getItem("accessToken"),d=y(n)?.id,c=b.create({baseURL:f,headers:{Authorization:`Bearer ${n}`}}),u=async()=>{s(!0);try{const e=await c.get(`/api/bank-details/${d}`);o(e.data.bankDetails||{})}catch(e){console.error("Fetch Bank Details Error:",e.response?.data||e.message)}finally{s(!1)}},p=async()=>{s(!0);try{if(a._id)await c.put(`/api/bank-details/${a._id}`,a),i.success("Bank details updated successfully.");else{const e=await c.post("/api/bank-details",{partnerId:d,...a});o(e.data.bankDetails),i.success("Bank details added successfully.")}}catch(e){console.error("Save Bank Details Error:",e.response?.data||e.message),i.error("Failed to save bank details.")}finally{s(!1)}};return l.useEffect(()=>{u()},[]),t.jsxs("div",{className:"p-6 container mx-auto bg-white rounded-xl shadow-lg h-screen",children:[t.jsx(h,{variant:"h4",className:"font-bold text-white bg-blue-500 mb-8 p-5",sx:{textAlign:"center",marginBottom:"2rem"},children:"Bank Details"}),t.jsxs("div",{className:"space-y-4",children:[["bankName","accountNumber","accountHolderName","branchName","swiftCode"].map(e=>t.jsx(g,{label:e.replace(/([A-Z])/g," $1"),variant:"outlined",fullWidth:!0,value:a[e]||"",onChange:m=>o({...a,[e]:m.target.value})},e)),t.jsx(k,{variant:"contained",color:"primary",onClick:p,disabled:r,children:r?t.jsx(x,{size:20,color:"inherit"}):"Save Details"})]})]})};export{N as default};
