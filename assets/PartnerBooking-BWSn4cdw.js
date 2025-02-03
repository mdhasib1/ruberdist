import{r,b as N,j as t,co as j,bJ as D,cq as y,aU as C,cr as S,al as b,B as A,D as I,c4 as B,aN as k}from"./vendor-D-GSuRVS.js";import{V as M}from"./VanViewModal-DX3f5AY5.js";import"./index-DCNypv0y.js";import"./Carousel-Bcpslscg.js";const F=({bookings:d,onDateSelect:m})=>{const[g,u]=r.useState(null),o=(a,l)=>{const f=new Date(l,a+1,0).getDate(),e=new Date(l,a,1).getDay(),s=[];for(let n=0;n<e;n++)s.push(null);for(let n=1;n<=f;n++)s.push(new Date(l,a,n));return s},h=a=>d.some(l=>new Date(l.startDate).toDateString()===a.toDateString()||new Date(l.endDate).toDateString()===a.toDateString()),p=a=>{u(a),m(a)},i=new Date,x=i.getMonth(),w=i.getFullYear(),c=o(x,w);return t.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-md",children:[t.jsx("h3",{className:"text-lg font-bold",children:"Booking Calendar"}),t.jsxs("div",{className:"grid grid-cols-7 gap-2 mt-4",children:[["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(a=>t.jsx("div",{className:"text-center font-bold",children:a},a)),c.map((a,l)=>t.jsx("div",{onClick:()=>a&&p(a),className:`h-12 flex items-center justify-center rounded cursor-pointer ${a?h(a)?"bg-blue-200 hover:bg-blue-300":"bg-gray-100 hover:bg-gray-200":"bg-transparent cursor-default"} ${g&&a&&g.toDateString()===a.toDateString()?"ring-2 ring-blue-500":""}`,children:a?a.getDate():""},l))]})]})},V={hidden:{opacity:0,scale:.9},visible:{opacity:1,scale:1,transition:{duration:.4,ease:"easeOut"}},hover:{scale:1.05,boxShadow:"0px 8px 20px rgba(0, 0, 0, 0.2)"}},O={upcoming:"bg-blue-100 text-blue-600",completed:"bg-green-100 text-green-600",canceled:"bg-red-100 text-red-600",pending:"bg-yellow-100 text-yellow-600",accepted:"bg-purple-100 text-purple-600"},P="https://www.rubertogo.com",T=()=>{const[d,m]=r.useState([]),[g,u]=r.useState(!1),[o,h]=r.useState(null),[p,i]=r.useState(!1),x=()=>{i(!0)};r.useEffect(()=>{w()},[]);const w=async()=>{u(!0);try{const s=(await N.get(`${P}/api/partner/my-booking`,{headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`}})).data,n=Array.from(new Map(s.map(v=>[v.vanId._id,v.vanId])).values());m(s)}catch(e){console.error(e)}finally{u(!1)}},c=()=>d.filter(e=>!o||new Date(e.startDate).toDateString()===o.toDateString()||new Date(e.endDate).toDateString()===o.toDateString()),a={labels:["Pending","Canceled","Accepted","Completed"],datasets:[{label:"Bookings",data:["pending","canceled","accepted","completed"].map(e=>c().filter(s=>s.status===e).length),backgroundColor:["#FF6384","#36A2EB","#FFCE56","#4CAF50"]}]},l=c().map(e=>({id:e._id,vanImage:e.vanId?.images?.[0]||"https://via.placeholder.com/100",status:e.status||"N/A",plateNumber:e.vanId?.plateNumber||"Unknown",phone:e.userId?.phone||"N/A",email:e.userId?.email||"N/A",name:`${e.userId?.firstName||"Unknown"} ${e.userId?.lastName||""}`,preAuthorization:e.preAuthorization||"N/A",countdown:e.countdown||"N/A",reviews:e.review||null})),f=[{field:"name",headerName:"Name",width:200},{field:"phone",headerName:"Customer Phone",width:150},{field:"email",headerName:"Customer Email",width:200},{field:"vanImage",headerName:"Van Image",width:100,renderCell:e=>t.jsx("img",{src:e.row.vanImage,alt:"Van",className:"w-16 h-16 object-cover rounded-full"})},{field:"plateNumber",headerName:"Plate Number",width:150},{field:"status",headerName:"Status",width:150,renderCell:e=>{const s=O[e.value]||"bg-gray-100 text-gray-600";return t.jsx("div",{className:`px-2 py-1 rounded-full text-sm font-semibold ${s}`,style:{display:"inline-block"},children:e.value.charAt(0).toUpperCase()+e.value.slice(1)})}},{field:"reviews",headerName:"Reviews",width:150,renderCell:e=>e.row.status==="completed"&&e.row.reviews?t.jsx(k,{value:e.row.reviews.rating,readOnly:!0,precision:.5,size:"small"}):t.jsx("span",{className:"text-gray-400",children:"No Reviews"})}];return t.jsxs("div",{className:"flex flex-col space-y-8 p-4",children:[t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-5 gap-4",children:[{label:"Upcoming",status:"upcoming",color:"from-blue-500 to-blue-700",icon:t.jsx(j,{})},{label:"Completed",status:"completed",color:"from-green-500 to-green-700",icon:t.jsx(D,{})},{label:"Canceled",status:"canceled",color:"from-red-500 to-red-700",icon:t.jsx(y,{})},{label:"Pending",status:"pending",color:"from-yellow-500 to-yellow-700",icon:t.jsx(C,{})},{label:"Accepted",status:"accepted",color:"from-purple-500 to-purple-700",icon:t.jsx(S,{})}].map(e=>t.jsxs(b.div,{className:`p-6 bg-gradient-to-r ${e.color} text-white rounded-xl shadow-lg flex flex-col items-center gap-4`,variants:V,initial:"hidden",animate:"visible",whileHover:"hover",children:[t.jsx(b.div,{className:"flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full",whileHover:{rotate:15},transition:{type:"spring",stiffness:300},children:t.jsx("span",{className:"text-3xl",children:e.icon})}),t.jsx("h3",{className:"text-xl font-semibold tracking-wide",children:e.label}),t.jsx("span",{className:"text-4xl font-extrabold",children:c().filter(s=>s.status===e.status).length})]},e.label))}),t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:[t.jsx("div",{className:"lg:col-span-2 space-y-4",children:t.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-md",children:[t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsx("h2",{className:"text-lg font-bold mb-4",children:"All Bookings"}),t.jsx(A,{variant:"outlined",color:"primary",onClick:x,children:"Create Booking"})]}),t.jsx("div",{style:{height:400,width:"100%"},children:t.jsx(I,{rows:l,columns:f,pageSize:5,rowsPerPageOptions:[5],checkboxSelection:!1,disableSelectionOnClick:!0})})]})}),t.jsx("div",{className:"bg-white p-4 rounded-lg shadow-md",children:t.jsx(F,{bookings:d,onDateSelect:e=>h(e)})})]}),t.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-md",children:[t.jsx("h2",{className:"text-lg font-bold mb-2",children:"Booking Overview"}),t.jsx(B,{data:a,options:{responsive:!0}})]}),t.jsx(M,{isOpenVanModal:p,onCloseVanModal:()=>i(!1)})]})};export{T as default};
