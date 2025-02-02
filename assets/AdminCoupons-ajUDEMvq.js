import{r as l,V as s,k as d,j as t}from"./index-DLpikvjc.js";import{a as A,b}from"./index-kYiSehDk.js";import{D as N,a as T}from"./DialogContent-z22RIIQN.js";import{D as w}from"./DialogTitle-1j7OIzSl.js";import{T as n}from"./TextField-DxLbd0T7.js";import{I as D}from"./InputAdornment-Dr7QdbWB.js";import{I as k}from"./IconButton-CQP4y5cZ.js";import{M as h}from"./MenuItem-Dk6ToQkn.js";import{B as x}from"./Button-Dd5SUgtW.js";import{D as I}from"./DataGrid-0EYBgjNF.js";import"./iconBase-VNWhYZQq.js";import"./useTheme-BiC74sbM.js";import"./useTheme-BaCcI6wb.js";import"./useSlot-C81N96pq.js";import"./ButtonBase-C_wHrl86.js";import"./Paper-DzT7rg5Q.js";import"./Modal-CXdfSMMy.js";import"./Portal-C-Oqgn3D.js";import"./Typography-Bytm3ycu.js";import"./index-CMMxByV_.js";import"./Select-YDvcYVIq.js";import"./Menu-BmUU4LJX.js";import"./Grow-BubuCfXA.js";import"./List-CP_tTsPm.js";import"./useControlled-DAqY8FYl.js";import"./createSvgIcon-DAAY2Ss0.js";import"./isMuiElement-Rh47zddv.js";import"./listItemTextClasses-c0_geO1e.js";import"./dividerClasses-CWGPkxTW.js";import"./index-BCUionA9.js";import"./Close-B6mu1L3C.js";import"./Badge-VQgqQlIk.js";import"./Tooltip-Cxmz8oas.js";import"./Chip-CF_ffCUn.js";import"./ClickAwayListener-ChyV3r07.js";import"./Toolbar-4GwuCQeM.js";import"./ListItemText-BaK17cQI.js";import"./Divider-BZXxc7Ka.js";import"./FormControlLabel-BZ90GYya.js";import"./TableCell-Bsl3T8tX.js";import"./Skeleton-CuRxEDba.js";const c="https://rubertogo.com",M=()=>`RTG-${Math.random().toString(36).substr(2,6).toUpperCase()}`,Ce=()=>{const[f,g]=l.useState([]),[C,i]=l.useState(!1),[o,r]=l.useState({code:"",discountType:"fixed",discountValue:"",minPaidHours:"",minAmount:"",maxUses:"",expiresAt:""}),j=localStorage.getItem("accessToken");l.useEffect(()=>{u()},[]);const u=async()=>{var e;try{const a=localStorage.getItem("accessToken");if(!a){console.error("No access token found"),s.error("Authentication error. Please log in again.");return}const m=await d.get(`${c}/api/coupons/all`,{headers:{Authorization:`Bearer ${a}`}});console.log("Coupons received:",m.data),g(m.data.map(p=>({...p,usageCount:p.usageCount||0})))}catch(a){console.error("Error fetching coupons:",((e=a.response)==null?void 0:e.data)||a),s.error("Error fetching coupons")}},v=async e=>{try{await d.delete(`${c}/api/coupons/${e}`),s.success("Coupon deleted successfully"),u()}catch{s.error("Error deleting coupon")}},y=async()=>{var e;if(!o.code.startsWith("RTG-")){s.error("Coupon code must start with RTG-");return}try{await d.post(`${c}/api/coupons/create`,o,{headers:{Authorization:`Bearer ${j}`}}),s.success("Coupon created successfully!"),i(!1),u()}catch(a){s.error((e=a.response)==null?void 0:e.data.error)}};return t.jsxs("div",{className:"p-6 bg-white shadow-md rounded-lg",children:[t.jsxs("div",{className:"flex justify-between items-center mb-4",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Manage Coupons"}),t.jsx("button",{onClick:()=>{r({...o,code:"RTG-"}),i(!0)},className:"bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-all",children:"+ Add Coupon"})]}),t.jsx("div",{className:"h-80",children:t.jsx(I,{rows:f,columns:[{field:"code",headerName:"Coupon Code",flex:1},{field:"discountType",headerName:"Type",flex:1},{field:"discountValue",headerName:"Discount",flex:1},{field:"minPaidHours",headerName:"Min Hours",flex:1},{field:"minAmount",headerName:"Min Amount",flex:1},{field:"maxUses",headerName:"Max Uses",flex:1},{field:"usageCount",headerName:"Total Used",flex:1},{field:"expiresAt",headerName:"Expires At"},{field:"actions",headerName:"Actions",flex:1,renderCell:e=>t.jsx("button",{className:"text-red-500 hover:text-red-700",onClick:()=>v(e.row._id),children:t.jsx(A,{size:20})})}],pageSize:5,getRowId:e=>e._id})}),t.jsxs(N,{open:C,onClose:()=>i(!1),children:[t.jsx(w,{children:"Add New Coupon"}),t.jsxs(T,{className:"space-y-4 p-6",children:[t.jsx(n,{fullWidth:!0,label:"Coupon Code",value:o.code,onChange:e=>r({...o,code:e.target.value.startsWith("RTG-")?e.target.value:`RTG-${e.target.value}`}),InputProps:{endAdornment:t.jsx(D,{position:"end",children:t.jsx(k,{onClick:()=>r({...o,code:M()}),children:t.jsx(b,{})})})},helperText:"Click the reload icon to generate a random code or enter manually (must start with RTG-)."}),t.jsxs(n,{select:!0,fullWidth:!0,label:"Discount Type",value:o.discountType,onChange:e=>r({...o,discountType:e.target.value}),children:[t.jsx(h,{value:"fixed",children:"Fixed Amount"}),t.jsx(h,{value:"percentage",children:"Percentage"})]}),t.jsx(n,{fullWidth:!0,label:"Discount Value",type:"number",value:o.discountValue,onChange:e=>r({...o,discountValue:e.target.value})}),t.jsx(n,{fullWidth:!0,label:"Min Paid Hours",type:"number",value:o.minPaidHours,onChange:e=>r({...o,minPaidHours:e.target.value})}),t.jsx(n,{fullWidth:!0,label:"Min Amount",type:"number",value:o.minAmount,onChange:e=>r({...o,minAmount:e.target.value})}),t.jsx(n,{fullWidth:!0,label:"Max Uses (0 = unlimited)",type:"number",value:o.maxUses,onChange:e=>r({...o,maxUses:e.target.value})}),t.jsx(n,{fullWidth:!0,label:"Expiration Date",type:"date",InputLabelProps:{shrink:!0},value:o.expiresAt,onChange:e=>r({...o,expiresAt:e.target.value})}),t.jsxs("div",{className:"flex justify-end gap-3",children:[t.jsx(x,{onClick:()=>i(!1),color:"secondary",children:"Cancel"}),t.jsx(x,{onClick:y,color:"primary",variant:"contained",children:"Create"})]})]})]})]})};export{Ce as default};
