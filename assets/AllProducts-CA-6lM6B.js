import{r,a as E,cl as F,j as e,Z as W,C as _,B as i,aX as M,aY as $,n,D as A,bk as D,k as B,a9 as u,b as h,I as y,cF as O,c7 as I,f as z}from"./vendor-DTHYb0ru.js";const m="https://www.rubertogo.com",R=()=>{const[o,d]=r.useState([]),[v,x]=r.useState(!1),[p,f]=r.useState(""),[w,g]=r.useState(!1),[t,l]=r.useState(null),{lang:C}=E(),N=F("(max-width: 768px)"),P=async()=>{x(!0),f("");try{const a=await h.get(`${m}/api/products`);d(a.data)}catch{f("Failed to fetch products. Please try again later.")}finally{x(!1)}},j=async a=>{if(window.confirm("Are you sure you want to delete this product?"))try{await h.delete(`${m}/api/products/${a}`),d(o.filter(s=>s._id!==a))}catch(s){console.error("Error deleting product:",s),alert("Failed to delete product.")}},b=a=>{l(a),g(!0)},c=()=>{l(null),g(!1)},S=async()=>{if(!t.name||!t.description||!t.price){alert("Please fill out all fields.");return}try{await h.put(`${m}/api/products/${t._id}`,t),d(a=>a.map(s=>s._id===t._id?t:s)),z.success("Product Updated Successfully"),c()}catch(a){console.error("Error updating product:",a),alert("Failed to update product.")}};r.useEffect(()=>{P()},[]);const k=[{field:"name",headerName:"Product Name",flex:1,minWidth:150},{field:"description",headerName:"Description",flex:2,minWidth:200},{field:"price",headerName:"Price",flex:1,minWidth:100,renderCell:a=>`${a.value} CHF`},{field:"actions",headerName:"Actions",flex:1,minWidth:150,sortable:!1,renderCell:a=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(y,{color:"primary",onClick:()=>b(a.row),children:e.jsx(O,{})}),e.jsx(y,{color:"error",onClick:()=>j(a.row._id),children:e.jsx(I,{})})]})}];return e.jsxs("div",{className:"p-4 bg-white min-h-screen",children:[p&&e.jsx("div",{className:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4",children:p}),e.jsxs("div",{className:"bg-white rounded-lg ",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsxs("h1",{className:"text-2xl font-bold text-gray-800 mb-4 flex gap-4 items-center",children:[" ",e.jsx(W,{className:"text-gray-400 text-4xl"})," All Products"]}),e.jsx(_,{to:`/${C}/admin/add-product`,children:e.jsx(i,{variant:"contained",color:"primary",children:"Add Product"})})]}),N?e.jsx("div",{className:"grid grid-cols-1 gap-4",children:o.map(a=>e.jsx(M,{className:"shadow-lg",children:e.jsxs($,{children:[e.jsx(n,{variant:"h6",className:"font-bold",children:a.name}),e.jsx(n,{variant:"body2",className:"text-gray-600",children:a.description}),e.jsxs(n,{variant:"body1",className:"text-blue-600 mt-2",children:[a.price," CHF"]}),e.jsxs("div",{className:"flex justify-end mt-2 space-x-2",children:[e.jsx(i,{size:"small",variant:"outlined",color:"primary",onClick:()=>b(a),children:"Edit"}),e.jsx(i,{size:"small",variant:"outlined",color:"error",onClick:()=>j(a._id),children:"Delete"})]})]})},a._id))}):e.jsx("div",{style:{height:500,width:"100%"},children:e.jsx(A,{rows:o,columns:k,getRowId:a=>a._id,loading:v,pageSize:10,rowsPerPageOptions:[5,10,20],checkboxSelection:!1,disableSelectionOnClick:!0})})]}),e.jsx(D,{open:w,onClose:c,children:e.jsxs(B,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",boxShadow:24,p:4,width:"90%",maxWidth:400,borderRadius:2},children:[e.jsx(n,{variant:"h6",className:"font-bold mb-4",children:"Edit Product"}),e.jsx(u,{label:"Product Name",fullWidth:!0,margin:"normal",value:t?.name||"",onChange:a=>l({...t,name:a.target.value})}),e.jsx(u,{label:"Description",fullWidth:!0,margin:"normal",multiline:!0,rows:3,value:t?.description||"",onChange:a=>l({...t,description:a.target.value})}),e.jsx(u,{label:"Price",fullWidth:!0,margin:"normal",type:"number",value:t?.price||"",onChange:a=>l({...t,price:a.target.value})}),e.jsxs("div",{className:"flex justify-end mt-4 space-x-2",children:[e.jsx(i,{onClick:c,variant:"outlined",color:"error",children:"Cancel"}),e.jsx(i,{onClick:S,variant:"contained",color:"primary",children:"Save Changes"})]})]})})]})};export{R as default};
