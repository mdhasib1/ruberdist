import{r as s,j as t,bZ as h,b as x,aA as u}from"./vendor-C9ifI4XU.js";const g="https://rubertogo.com",f=()=>{const[n,l]=s.useState([]),[d,i]=s.useState(!0),[r,o]=s.useState(null);s.useEffect(()=>{(async()=>{try{const a=await x.get(`${g}/api/reviews/all`,{headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`}});console.log(a.data),l(a.data||[])}catch(a){console.error("Failed to fetch reviews:",a),o("Failed to load reviews. Please try again later.")}finally{i(!1)}})()},[]);const c=[{field:"vanImage",headerName:"Van Image",width:150,renderCell:e=>t.jsx("div",{className:"flex items-center justify-center",children:e.row?.vanId?.images?.[0]?t.jsx("img",{src:e.row.vanId.images[0],alt:e.row.vanId.name?.en||"Van",className:"w-20 h-20 rounded-full object-cover"}):t.jsx("div",{className:"w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-500",children:"N/A"})})},{field:"vanDetails",headerName:"Van",width:250,renderCell:e=>e.row.vanId?t.jsxs("div",{children:[t.jsx("p",{className:"font-semibold",children:e.row.vanId.name.en}),t.jsxs("p",{className:"text-sm text-gray-500",children:["Plate: ",e.row.vanId.plateNumber]})]}):"N/A"},{field:"name",headerName:"Name",width:200,renderCell:e=>t.jsx("div",{children:e?.row?.userId?t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"font-semibold",children:e.row.userId.firstName||"N/A"}),t.jsx("p",{className:"text-sm text-gray-500",children:e.row.userId.lastName||"N/A"})]}):t.jsx("p",{className:"text-sm text-gray-500",children:"No User Info"})})},{field:"rating",headerName:"Rating",width:150,renderCell:e=>t.jsx(u,{value:e.value,precision:.5,readOnly:!0})},{field:"comment",headerName:"Comment",width:300},{field:"vanDetails",headerName:"Van",width:250,renderCell:e=>e.row.vanId?t.jsxs("div",{children:[t.jsx("p",{className:"font-semibold",children:e.row.vanId.name.en}),t.jsxs("p",{className:"text-sm text-gray-500",children:["Plate: ",e.row.vanId.plateNumber]})]}):"N/A"}],m=n.map(e=>({id:e._id,author_name:e.author_name||`${e.userId?.firstName} ${e.userId?.lastName}`,author_url:e.author_url||"",rating:e.rating,comment:e.text||e.comment,createdAt:e.createdAt||e.time,vanId:e.vanId}));return t.jsxs("div",{className:"p-4 bg-white rounded-lg shadow-md",children:[t.jsx("h2",{className:"text-xl font-bold mb-4",children:"Reviews"}),d?t.jsx("div",{className:"text-center text-gray-500",children:"Loading reviews..."}):r?t.jsx("div",{className:"text-center text-red-500",children:r}):t.jsx("div",{style:{height:600,width:"100%"},children:t.jsx(h,{rows:m,columns:c,pageSize:10,rowsPerPageOptions:[10],checkboxSelection:!1,disableSelectionOnClick:!0})})]})};export{f as default};
