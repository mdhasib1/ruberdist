import{r as i,d as S,j as t,C as D,F as I}from"./index-DrMvIKwq.js";import{B as R,L as U}from"./index-BWPyzWar.js";import{a2 as L,W as H,a4 as q,A as W,a5 as Y}from"./index-y5yuKkc0.js";import{V as G}from"./VanViewModal-CxSTGb3H.js";import{B as J}from"./Button-xUQB_oWD.js";import{C as K}from"./Card-locYS_tZ.js";import{A as Q}from"./index-DV8UWTri.js";import{R as X}from"./Rating-CG_vgnQ1.js";import{D as Z}from"./DataGrid-odPpneuv.js";import"./iconBase-BBLIWj70.js";import"./dayjs.min-DY5UBfhE.js";import"./index-Bc-nvAfN.js";import"./index-DklELUdR.js";import"./Carousel-FFuPDihC.js";import"./index-COvJ5x3S.js";import"./index-Rnf9BJUB.js";import"./Modal-CfkloFEy.js";import"./createSimplePaletteValueFilter-zjTMkHT-.js";import"./Portal-BMjECl0g.js";import"./CircularProgress-B5agUqRt.js";import"./useSlot-BWhg9WXJ.js";import"./useTheme-C3_UZ2QD.js";import"./useTheme-CepysXf6.js";import"./Grid-BqE4Oht1.js";import"./index-pDPmJGlT.js";import"./CardMedia-Bxz0cUI6.js";import"./Typography-BAti9wpa.js";import"./Paper-C4BDKHkT.js";import"./createSvgIcon-CgYohZ5P.js";import"./useControlled-Bio4-BJG.js";import"./visuallyHidden-Dan1xhjv.js";import"./Select-DJdQC6kX.js";import"./Menu-ComLaOXz.js";import"./Grow-B1pBNw31.js";import"./List-BLDT_Zsz.js";import"./Close-CZtWXSiP.js";import"./Badge-Dv4pCkXf.js";import"./Tooltip-BJxLh1tU.js";import"./Chip-BGAMkzyn.js";import"./IconButton-BGQYt6kH.js";import"./ClickAwayListener-CKDzE_Pj.js";import"./MenuItem-8srXigvG.js";import"./listItemTextClasses--ZWm_3O6.js";import"./dividerClasses-CP17GPn_.js";import"./Toolbar-IXigYXsH.js";import"./ListItemText-CPFOLNaz.js";import"./TextField-DvirranI.js";import"./isMuiElement-LlRumiQy.js";import"./InputAdornment-qRqOoZAt.js";import"./Divider-DKVgf2v9.js";import"./FormControlLabel-B2fud-Wt.js";import"./TableCell-Cv6TnrlD.js";import"./Skeleton-BNpbg8au.js";const ee={hidden:{opacity:0,scale:.9},visible:{opacity:1,scale:1,transition:{duration:.4,ease:"easeOut"}},hover:{scale:1.05,boxShadow:"0px 8px 20px rgba(0, 0, 0, 0.2)"}},te={upcoming:"bg-blue-100 text-blue-600",completed:"bg-green-100 text-green-600",canceled:"bg-red-100 text-red-600",pending:"bg-yellow-100 text-yellow-600",accepted:"bg-purple-100 text-purple-600"},se=({bookings:m,onDateSelect:w})=>{const[x,b]=i.useState(null),f=(s,o)=>{const v=new Date(o,s+1,0).getDate(),y=new Date(o,s,1).getDay(),d=[];for(let l=0;l<y;l++)d.push(null);for(let l=1;l<=v;l++)d.push(new Date(o,s,l));return d},j=s=>m.some(o=>new Date(o.startDate).toDateString()===s.toDateString()||new Date(o.endDate).toDateString()===s.toDateString()),N=s=>{b(s),w(s)},p=new Date,a=p.getMonth(),u=p.getFullYear(),n=f(a,u);return t.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-md",children:[t.jsx("h3",{className:"text-lg font-bold",children:"Booking Calendar"}),t.jsxs("div",{className:"grid grid-cols-7 gap-2 mt-4",children:[["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(s=>t.jsx("div",{className:"text-center font-bold",children:s},s)),n.map((s,o)=>t.jsx("div",{onClick:()=>s&&N(s),className:`h-12 flex items-center justify-center rounded cursor-pointer ${s?j(s)?"bg-red-200 hover:bg-red-300":"bg-gray-100 hover:bg-gray-200":"bg-transparent cursor-default"} ${x&&s&&x.toDateString()===s.toDateString()?"ring-2 ring-blue-500":""}`,children:s?s.getDate():""},o))]})]})},B="https://rubertogo.com",st=()=>{var z;const[m,w]=i.useState([]),[x,b]=i.useState([]),[f,j]=i.useState(null),[N,p]=i.useState(!1),[a,u]=i.useState(null),[n,s]=i.useState(!1),[o,v]=i.useState(null),[y,d]=i.useState(!1),l=()=>{d(!0)};i.useEffect(()=>{C()},[]);const C=async()=>{try{const e=await S.get(`${B}/api/getAllBookings`,{headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`}});if(e.data.success){const r=e.data.data,c=Array.from(new Map(r.map(g=>[g.vanId._id,g.vanId])).values());w(r),b(c)}}catch(e){console.error("Error fetching bookings:",e)}},A=()=>m.filter(e=>(!f||e.vanId._id===f)&&(!o||new Date(e.startDate).toDateString()===o.toDateString()||new Date(e.endDate).toDateString()===o.toDateString())),V=e=>{u(e),p(!0)},h=()=>{p(!1),u(null)},k={labels:["Pending","Canceled","Accepted","Completed"],datasets:[{label:"Bookings",data:["pending","canceled","accepted","completed"].map(e=>A().filter(r=>r.status===e).length),backgroundColor:["#FF6384","#36A2EB","#FFCE56","#4CAF50"]}]},$=[{field:"name",headerName:"Name",width:200},{field:"phone",headerName:"Customer Phone",width:150},{field:"email",headerName:"Customer Email",width:200},{field:"vanImage",headerName:"Van Image",width:100,renderCell:e=>t.jsx("img",{src:e.row.vanImage,alt:"Van",className:"w-16 h-16 object-cover rounded-full"})},{field:"plateNumber",headerName:"Plate Number",width:150},{field:"status",headerName:"Status",width:150,renderCell:e=>{const r=te[e.value]||"bg-gray-100 text-gray-600";return t.jsx("div",{className:`px-2 py-1 rounded-full text-sm font-semibold ${r}`,style:{display:"inline-block"},children:e.value.charAt(0).toUpperCase()+e.value.slice(1)})}},{field:"reviews",headerName:"Reviews",width:150,renderCell:e=>e.row.status==="completed"&&e.row.reviews?t.jsx(X,{value:e.row.reviews.rating,readOnly:!0,precision:.5,size:"small"}):t.jsx("span",{className:"text-gray-400",children:"No Reviews"})},{field:"actions",headerName:"Actions",width:200,renderCell:e=>e.row.status==="completed"&&t.jsx("button",{onClick:()=>V(e.row),className:"bg-green-500 text-white px-4 py-1 rounded",children:"Capture Pre-Auth"})}],E=async e=>{if(!(a!=null&&a.id)){alert("Invalid booking selected. Please try again.");return}s(!0);try{(await S.post(`${B}/api/capture-pre-authorization`,{bookingId:a.id,amount:e},{headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`}})).data.success&&(alert("Pre-authorization captured successfully."),C(),h())}catch(r){console.error("Error capturing pre-authorization:",r),I.error("Failed to capture pre-authorization. Please try again.")}finally{s(!1),h()}},O=async()=>{if(!(a!=null&&a.id)){alert("Invalid booking selected. Please try again.");return}s(!0);try{(await S.post(`${B}/api/cancel-pre-authorization`,{bookingId:a.id},{headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`}})).data.success&&(I.success("Pre-authorization canceled successfully."),C(),h())}catch(e){console.error("Error canceling pre-authorization:",e),I.error("Failed to cancel pre-authorization. Please try again.")}finally{s(!1),h()}},T=A().map((e,r)=>{var c,g,P,M,F;return{id:e._id,vanImage:e.vanId.images[0]||"N/A",status:e.status||"N/A",plateNumber:((c=e.vanId)==null?void 0:c.plateNumber)||"N/A",phone:((g=e.userId)==null?void 0:g.phone)||"N/A",email:((P=e.userId)==null?void 0:P.email)||"N/A",name:`${((M=e.userId)==null?void 0:M.firstName)||"N/A"} ${((F=e.userId)==null?void 0:F.lastName)||"N/A"}`,preAuthorization:(e==null?void 0:e.preAuthorization)||"N/A",reviews:e.review||"N/A"}}),_=e=>{v(e)};return t.jsxs("div",{className:"flex flex-col space-y-8 p-4",children:[t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-5 gap-4",children:[{label:"Upcoming",status:"upcoming",color:"from-blue-500 to-blue-700",icon:t.jsx(L,{})},{label:"Completed",status:"completed",color:"from-green-500 to-green-700",icon:t.jsx(H,{})},{label:"Canceled",status:"canceled",color:"from-red-500 to-red-700",icon:t.jsx(q,{})},{label:"Pending",status:"pending",color:"from-yellow-500 to-yellow-700",icon:t.jsx(W,{})},{label:"Accepted",status:"accepted",color:"from-purple-500 to-purple-700",icon:t.jsx(Y,{})}].map((e,r)=>t.jsxs(D.div,{className:`p-6 bg-gradient-to-r ${e.color} text-white rounded-xl shadow-lg flex flex-col items-center gap-4`,variants:ee,initial:"hidden",animate:"visible",whileHover:"hover",children:[t.jsx(D.div,{className:"flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full",whileHover:{rotate:15},transition:{type:"spring",stiffness:300},children:t.jsx("span",{className:"text-3xl",children:e.icon})}),t.jsx("h3",{className:"text-xl font-semibold tracking-wide",children:e.label}),t.jsx("span",{className:"text-4xl font-extrabold",children:A().filter(c=>c.status===e.status).length})]},e.label))}),t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:[t.jsxs("div",{className:"lg:col-span-2 space-y-4",children:[t.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-md",children:[t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsx("h2",{className:"text-lg font-bold mb-4",children:"All Bookings"}),t.jsx(J,{variant:"outlined",color:"primary",onClick:l,children:"Create Booking"})]}),t.jsx("div",{style:{height:400,width:"100%"},children:t.jsx(Z,{rows:T,columns:$,pageSize:5,rowsPerPageOptions:[5],checkboxSelection:!1,disableSelectionOnClick:!0})})]}),t.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-md",children:[t.jsx("h2",{className:"text-lg font-bold mb-2",children:"Booking Overview"}),t.jsx(R,{data:k,options:{responsive:!0}})]})]}),t.jsxs(K,{className:"space-y-4 ",children:[x.map(e=>t.jsxs("div",{className:"bg-white flex p-4 rounded-lg shadow-md hover:shadow-lg cursor-pointer",onClick:()=>j(e._id),children:[t.jsx("img",{src:e.images[0],alt:e.name.en,className:" h-24 w-24 rounded-full object-cover mr-5"}),t.jsxs("div",{children:[t.jsx("h3",{className:"mt-2 text-lg font-semibold",children:e.name.en}),t.jsxs("p",{children:["Plate: ",e.plateNumber]}),t.jsxs("p",{children:["Upcoming Bookings:"," ",m.filter(r=>r.vanId._id===e._id&&r.status==="upcoming").length]})]})]},e._id)),t.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-md",children:[t.jsx("h3",{className:"text-lg font-bold",children:"Booking Calendar"}),t.jsx(se,{bookings:m,onDateSelect:e=>_(e)}),t.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-md",children:[t.jsx("h2",{className:"text-lg font-bold mb-2",children:"Trends"}),t.jsx(U,{data:k,options:{responsive:!0}})]})]})]})]}),t.jsx(G,{isOpenVanModal:y,onCloseVanModal:()=>d(!1)}),t.jsx(Q,{children:N&&t.jsx(D.div,{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:t.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg w-full max-w-md",children:[t.jsxs("h2",{className:"text-xl font-bold mb-4",children:["Capture Pre-Authorization - $",((z=a==null?void 0:a.preAuthorization)==null?void 0:z.authorizedAmount)/100," CHF"]}),t.jsxs("div",{children:[t.jsx("img",{src:a==null?void 0:a.vanImage,alt:"Van",className:"w-32 h-32 object-cover rounded-full mb-4"}),t.jsxs("p",{children:["Customer Email: ",a==null?void 0:a.email]}),t.jsxs("p",{children:["Customer Phone: ",a==null?void 0:a.phone]}),t.jsx("input",{type:"number",placeholder:"Enter amount",className:"w-full p-2 border rounded mt-4",onChange:e=>u({...a,captureAmount:e.target.value})})]}),t.jsxs("div",{className:"flex justify-end mt-4",children:[t.jsx("button",{onClick:h,className:"px-4 py-2 bg-gray-300 rounded mr-2",disabled:n,children:"Close"}),t.jsx("button",{onClick:O,className:"px-4 py-2 bg-red-500 text-white rounded mr-2",disabled:n,children:"Cancel"}),t.jsx("button",{onClick:()=>E(a._id),className:"px-4 py-2 bg-green-500 text-white rounded",disabled:n,children:n?"Processing...":"Capture"})]})]})})})]})};export{st as default};
