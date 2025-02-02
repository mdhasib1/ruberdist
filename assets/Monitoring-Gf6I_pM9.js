import{r as n,b as D,j as t,ce as E,bx as T,cg as O,aH as _,ch as R,m as A,a4 as U,bZ as H,bT as L,aR as q,bC as W,aj as Y,aA as G,aW as S}from"./vendor-CRYhOL6r.js";import{V as Z}from"./VanViewModal-BgcX_w4U.js";import"./index-DxNkCV2a.js";import"./Carousel-xnm3iIAm.js";const J={hidden:{opacity:0,scale:.9},visible:{opacity:1,scale:1,transition:{duration:.4,ease:"easeOut"}},hover:{scale:1.05,boxShadow:"0px 8px 20px rgba(0, 0, 0, 0.2)"}},K={upcoming:"bg-blue-100 text-blue-600",completed:"bg-green-100 text-green-600",canceled:"bg-red-100 text-red-600",pending:"bg-yellow-100 text-yellow-600",accepted:"bg-purple-100 text-purple-600"},Q=({bookings:d,onDateSelect:x})=>{const[g,b]=n.useState(null),p=(a,l)=>{const j=new Date(l,a+1,0).getDate(),N=new Date(l,a,1).getDay(),c=[];for(let o=0;o<N;o++)c.push(null);for(let o=1;o<=j;o++)c.push(new Date(l,a,o));return c},f=a=>d.some(l=>new Date(l.startDate).toDateString()===a.toDateString()||new Date(l.endDate).toDateString()===a.toDateString()),w=a=>{b(a),x(a)},u=new Date,r=u.getMonth(),h=u.getFullYear(),i=p(r,h);return t.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-md",children:[t.jsx("h3",{className:"text-lg font-bold",children:"Booking Calendar"}),t.jsxs("div",{className:"grid grid-cols-7 gap-2 mt-4",children:[["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(a=>t.jsx("div",{className:"text-center font-bold",children:a},a)),i.map((a,l)=>t.jsx("div",{onClick:()=>a&&w(a),className:`h-12 flex items-center justify-center rounded cursor-pointer ${a?f(a)?"bg-red-200 hover:bg-red-300":"bg-gray-100 hover:bg-gray-200":"bg-transparent cursor-default"} ${g&&a&&g.toDateString()===a.toDateString()?"ring-2 ring-blue-500":""}`,children:a?a.getDate():""},l))]})]})},k="https://www.rubertogo.com",se=()=>{const[d,x]=n.useState([]),[g,b]=n.useState([]),[p,f]=n.useState(null),[w,u]=n.useState(!1),[r,h]=n.useState(null),[i,a]=n.useState(!1),[l,j]=n.useState(null),[N,c]=n.useState(!1),o=()=>{c(!0)};n.useEffect(()=>{v()},[]);const v=async()=>{try{const e=await D.get(`${k}/api/getAllBookings`,{headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`}});if(e.data.success){const s=e.data.data,C=Array.from(new Map(s.map(B=>[B.vanId._id,B.vanId])).values());x(s),b(C)}}catch(e){console.error("Error fetching bookings:",e)}},y=()=>d.filter(e=>(!p||e.vanId._id===p)&&(!l||new Date(e.startDate).toDateString()===l.toDateString()||new Date(e.endDate).toDateString()===l.toDateString())),z=e=>{h(e),u(!0)},m=()=>{u(!1),h(null)},I={labels:["Pending","Canceled","Accepted","Completed"],datasets:[{label:"Bookings",data:["pending","canceled","accepted","completed"].map(e=>y().filter(s=>s.status===e).length),backgroundColor:["#FF6384","#36A2EB","#FFCE56","#4CAF50"]}]},P=[{field:"name",headerName:"Name",width:200},{field:"phone",headerName:"Customer Phone",width:150},{field:"email",headerName:"Customer Email",width:200},{field:"vanImage",headerName:"Van Image",width:100,renderCell:e=>t.jsx("img",{src:e.row.vanImage,alt:"Van",className:"w-16 h-16 object-cover rounded-full"})},{field:"plateNumber",headerName:"Plate Number",width:150},{field:"status",headerName:"Status",width:150,renderCell:e=>{const s=K[e.value]||"bg-gray-100 text-gray-600";return t.jsx("div",{className:`px-2 py-1 rounded-full text-sm font-semibold ${s}`,style:{display:"inline-block"},children:e.value.charAt(0).toUpperCase()+e.value.slice(1)})}},{field:"reviews",headerName:"Reviews",width:150,renderCell:e=>e.row.status==="completed"&&e.row.reviews?t.jsx(G,{value:e.row.reviews.rating,readOnly:!0,precision:.5,size:"small"}):t.jsx("span",{className:"text-gray-400",children:"No Reviews"})},{field:"actions",headerName:"Actions",width:200,renderCell:e=>e.row.status==="completed"&&t.jsx("button",{onClick:()=>z(e.row),className:"bg-green-500 text-white px-4 py-1 rounded",children:"Capture Pre-Auth"})}],M=async e=>{if(!r?.id){alert("Invalid booking selected. Please try again.");return}a(!0);try{(await D.post(`${k}/api/capture-pre-authorization`,{bookingId:r.id,amount:e},{headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`}})).data.success&&(alert("Pre-authorization captured successfully."),v(),m())}catch(s){console.error("Error capturing pre-authorization:",s),S.error("Failed to capture pre-authorization. Please try again.")}finally{a(!1),m()}},V=async()=>{if(!r?.id){alert("Invalid booking selected. Please try again.");return}a(!0);try{(await D.post(`${k}/api/cancel-pre-authorization`,{bookingId:r.id},{headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`}})).data.success&&(S.success("Pre-authorization canceled successfully."),v(),m())}catch(e){console.error("Error canceling pre-authorization:",e),S.error("Failed to cancel pre-authorization. Please try again.")}finally{a(!1),m()}},F=y().map((e,s)=>({id:e._id,vanImage:e.vanId.images[0]||"N/A",status:e.status||"N/A",plateNumber:e.vanId?.plateNumber||"N/A",phone:e.userId?.phone||"N/A",email:e.userId?.email||"N/A",name:`${e.userId?.firstName||"N/A"} ${e.userId?.lastName||"N/A"}`,preAuthorization:e?.preAuthorization||"N/A",reviews:e.review||"N/A"})),$=e=>{j(e)};return t.jsxs("div",{className:"flex flex-col space-y-8 p-4",children:[t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-5 gap-4",children:[{label:"Upcoming",status:"upcoming",color:"from-blue-500 to-blue-700",icon:t.jsx(E,{})},{label:"Completed",status:"completed",color:"from-green-500 to-green-700",icon:t.jsx(T,{})},{label:"Canceled",status:"canceled",color:"from-red-500 to-red-700",icon:t.jsx(O,{})},{label:"Pending",status:"pending",color:"from-yellow-500 to-yellow-700",icon:t.jsx(_,{})},{label:"Accepted",status:"accepted",color:"from-purple-500 to-purple-700",icon:t.jsx(R,{})}].map((e,s)=>t.jsxs(A.div,{className:`p-6 bg-gradient-to-r ${e.color} text-white rounded-xl shadow-lg flex flex-col items-center gap-4`,variants:J,initial:"hidden",animate:"visible",whileHover:"hover",children:[t.jsx(A.div,{className:"flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full",whileHover:{rotate:15},transition:{type:"spring",stiffness:300},children:t.jsx("span",{className:"text-3xl",children:e.icon})}),t.jsx("h3",{className:"text-xl font-semibold tracking-wide",children:e.label}),t.jsx("span",{className:"text-4xl font-extrabold",children:y().filter(C=>C.status===e.status).length})]},e.label))}),t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:[t.jsxs("div",{className:"lg:col-span-2 space-y-4",children:[t.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-md",children:[t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsx("h2",{className:"text-lg font-bold mb-4",children:"All Bookings"}),t.jsx(U,{variant:"outlined",color:"primary",onClick:o,children:"Create Booking"})]}),t.jsx("div",{style:{height:400,width:"100%"},children:t.jsx(H,{rows:F,columns:P,pageSize:5,rowsPerPageOptions:[5],checkboxSelection:!1,disableSelectionOnClick:!0})})]}),t.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-md",children:[t.jsx("h2",{className:"text-lg font-bold mb-2",children:"Booking Overview"}),t.jsx(L,{data:I,options:{responsive:!0}})]})]}),t.jsxs(q,{className:"space-y-4 ",children:[g.map(e=>t.jsxs("div",{className:"bg-white flex p-4 rounded-lg shadow-md hover:shadow-lg cursor-pointer",onClick:()=>f(e._id),children:[t.jsx("img",{src:e.images[0],alt:e.name.en,className:" h-24 w-24 rounded-full object-cover mr-5"}),t.jsxs("div",{children:[t.jsx("h3",{className:"mt-2 text-lg font-semibold",children:e.name.en}),t.jsxs("p",{children:["Plate: ",e.plateNumber]}),t.jsxs("p",{children:["Upcoming Bookings:"," ",d.filter(s=>s.vanId._id===e._id&&s.status==="upcoming").length]})]})]},e._id)),t.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-md",children:[t.jsx("h3",{className:"text-lg font-bold",children:"Booking Calendar"}),t.jsx(Q,{bookings:d,onDateSelect:e=>$(e)}),t.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-md",children:[t.jsx("h2",{className:"text-lg font-bold mb-2",children:"Trends"}),t.jsx(W,{data:I,options:{responsive:!0}})]})]})]})]}),t.jsx(Z,{isOpenVanModal:N,onCloseVanModal:()=>c(!1)}),t.jsx(Y,{children:w&&t.jsx(A.div,{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:t.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg w-full max-w-md",children:[t.jsxs("h2",{className:"text-xl font-bold mb-4",children:["Capture Pre-Authorization - $",r?.preAuthorization?.authorizedAmount/100," CHF"]}),t.jsxs("div",{children:[t.jsx("img",{src:r?.vanImage,alt:"Van",className:"w-32 h-32 object-cover rounded-full mb-4"}),t.jsxs("p",{children:["Customer Email: ",r?.email]}),t.jsxs("p",{children:["Customer Phone: ",r?.phone]}),t.jsx("input",{type:"number",placeholder:"Enter amount",className:"w-full p-2 border rounded mt-4",onChange:e=>h({...r,captureAmount:e.target.value})})]}),t.jsxs("div",{className:"flex justify-end mt-4",children:[t.jsx("button",{onClick:m,className:"px-4 py-2 bg-gray-300 rounded mr-2",disabled:i,children:"Close"}),t.jsx("button",{onClick:V,className:"px-4 py-2 bg-red-500 text-white rounded mr-2",disabled:i,children:"Cancel"}),t.jsx("button",{onClick:()=>M(r._id),className:"px-4 py-2 bg-green-500 text-white rounded",disabled:i,children:i?"Processing...":"Capture"})]})]})})})]})};export{se as default};
