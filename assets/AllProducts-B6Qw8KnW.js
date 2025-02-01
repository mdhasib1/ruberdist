import{r as a,u as k,j as e,L as F,d as m,F as M}from"./index-DrMvIKwq.js";import{aa as W,a0 as _}from"./index-y5yuKkc0.js";import{M as $}from"./index-BcTYs67B.js";import{u as A}from"./index-DaPaQiLs.js";import{B as s}from"./Button-xUQB_oWD.js";import{C as B}from"./Card-locYS_tZ.js";import{C as D}from"./CardContent-CLprEiUl.js";import{T as l}from"./Typography-BAti9wpa.js";import{M as O}from"./Modal-CfkloFEy.js";import{B as T}from"./Box-tqBBETVs.js";import{T as p}from"./TextField-DvirranI.js";import{I as y}from"./IconButton-BGQYt6kH.js";import{D as I}from"./DataGrid-odPpneuv.js";import"./iconBase-BBLIWj70.js";import"./createSimplePaletteValueFilter-zjTMkHT-.js";import"./useTheme-CepysXf6.js";import"./Chip-BGAMkzyn.js";import"./createSvgIcon-CgYohZ5P.js";import"./CircularProgress-B5agUqRt.js";import"./Paper-C4BDKHkT.js";import"./useTheme-C3_UZ2QD.js";import"./index-pDPmJGlT.js";import"./Portal-BMjECl0g.js";import"./useSlot-BWhg9WXJ.js";import"./Select-DJdQC6kX.js";import"./Menu-ComLaOXz.js";import"./Grow-B1pBNw31.js";import"./List-BLDT_Zsz.js";import"./useControlled-Bio4-BJG.js";import"./isMuiElement-LlRumiQy.js";import"./index-COvJ5x3S.js";import"./Close-CZtWXSiP.js";import"./Badge-Dv4pCkXf.js";import"./Tooltip-BJxLh1tU.js";import"./ClickAwayListener-CKDzE_Pj.js";import"./MenuItem-8srXigvG.js";import"./listItemTextClasses--ZWm_3O6.js";import"./dividerClasses-CP17GPn_.js";import"./Toolbar-IXigYXsH.js";import"./ListItemText-CPFOLNaz.js";import"./InputAdornment-qRqOoZAt.js";import"./Divider-DKVgf2v9.js";import"./FormControlLabel-B2fud-Wt.js";import"./TableCell-Cv6TnrlD.js";import"./Skeleton-BNpbg8au.js";const u="https://rubertogo.com",We=()=>{const[n,d]=a.useState([]),[v,h]=a.useState(!1),[x,f]=a.useState(""),[C,g]=a.useState(!1),[t,o]=a.useState(null),{lang:N}=k(),w=A("(max-width: 768px)"),P=async()=>{h(!0),f("");try{const r=await m.get(`${u}/api/products`);d(r.data)}catch{f("Failed to fetch products. Please try again later.")}finally{h(!1)}},j=async r=>{if(window.confirm("Are you sure you want to delete this product?"))try{await m.delete(`${u}/api/products/${r}`),d(n.filter(i=>i._id!==r))}catch(i){console.error("Error deleting product:",i),alert("Failed to delete product.")}},b=r=>{o(r),g(!0)},c=()=>{o(null),g(!1)},S=async()=>{if(!t.name||!t.description||!t.price){alert("Please fill out all fields.");return}try{await m.put(`${u}/api/products/${t._id}`,t),d(r=>r.map(i=>i._id===t._id?t:i)),M.success("Product Updated Successfully"),c()}catch(r){console.error("Error updating product:",r),alert("Failed to update product.")}};a.useEffect(()=>{P()},[]);const E=[{field:"name",headerName:"Product Name",flex:1,minWidth:150},{field:"description",headerName:"Description",flex:2,minWidth:200},{field:"price",headerName:"Price",flex:1,minWidth:100,renderCell:r=>`${r.value} CHF`},{field:"actions",headerName:"Actions",flex:1,minWidth:150,sortable:!1,renderCell:r=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(y,{color:"primary",onClick:()=>b(r.row),children:e.jsx(W,{})}),e.jsx(y,{color:"error",onClick:()=>j(r.row._id),children:e.jsx(_,{})})]})}];return e.jsxs("div",{className:"p-4 bg-white min-h-screen",children:[x&&e.jsx("div",{className:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4",children:x}),e.jsxs("div",{className:"bg-white rounded-lg ",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsxs("h1",{className:"text-2xl font-bold text-gray-800 mb-4 flex gap-4 items-center",children:[" ",e.jsx($,{className:"text-gray-400 text-4xl"})," All Products"]}),e.jsx(F,{to:`/${N}/admin/add-product`,children:e.jsx(s,{variant:"contained",color:"primary",children:"Add Product"})})]}),w?e.jsx("div",{className:"grid grid-cols-1 gap-4",children:n.map(r=>e.jsx(B,{className:"shadow-lg",children:e.jsxs(D,{children:[e.jsx(l,{variant:"h6",className:"font-bold",children:r.name}),e.jsx(l,{variant:"body2",className:"text-gray-600",children:r.description}),e.jsxs(l,{variant:"body1",className:"text-blue-600 mt-2",children:[r.price," CHF"]}),e.jsxs("div",{className:"flex justify-end mt-2 space-x-2",children:[e.jsx(s,{size:"small",variant:"outlined",color:"primary",onClick:()=>b(r),children:"Edit"}),e.jsx(s,{size:"small",variant:"outlined",color:"error",onClick:()=>j(r._id),children:"Delete"})]})]})},r._id))}):e.jsx("div",{style:{height:500,width:"100%"},children:e.jsx(I,{rows:n,columns:E,getRowId:r=>r._id,loading:v,pageSize:10,rowsPerPageOptions:[5,10,20],checkboxSelection:!1,disableSelectionOnClick:!0})})]}),e.jsx(O,{open:C,onClose:c,children:e.jsxs(T,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",boxShadow:24,p:4,width:"90%",maxWidth:400,borderRadius:2},children:[e.jsx(l,{variant:"h6",className:"font-bold mb-4",children:"Edit Product"}),e.jsx(p,{label:"Product Name",fullWidth:!0,margin:"normal",value:(t==null?void 0:t.name)||"",onChange:r=>o({...t,name:r.target.value})}),e.jsx(p,{label:"Description",fullWidth:!0,margin:"normal",multiline:!0,rows:3,value:(t==null?void 0:t.description)||"",onChange:r=>o({...t,description:r.target.value})}),e.jsx(p,{label:"Price",fullWidth:!0,margin:"normal",type:"number",value:(t==null?void 0:t.price)||"",onChange:r=>o({...t,price:r.target.value})}),e.jsxs("div",{className:"flex justify-end mt-4 space-x-2",children:[e.jsx(s,{onClick:c,variant:"outlined",color:"error",children:"Cancel"}),e.jsx(s,{onClick:S,variant:"contained",color:"primary",children:"Save Changes"})]})]})})]})};export{We as default};
