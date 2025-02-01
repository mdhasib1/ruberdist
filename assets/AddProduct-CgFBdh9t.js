import{r as t,a as y,u as v,j as e,d as P}from"./index-DrMvIKwq.js";import{U as w,V as F,_ as S}from"./index-y5yuKkc0.js";import"./iconBase-BBLIWj70.js";const A="https://rubertogo.com",M=()=>{const[r,l]=t.useState(""),[a,n]=t.useState(""),[o,d]=t.useState(""),[i,u]=t.useState(""),[m,c]=t.useState(""),[p,x]=t.useState(!1),h=y(),{lang:N}=v(),j=async s=>{var g,b;if(s.preventDefault(),u(""),c(""),!r||!a||!o){c("All fields are required!");return}x(!0);try{const f=await P.post(`${A}/api/products`,{name:r,description:a,price:parseFloat(o)});u("Product added successfully!"),l(""),n(""),d(""),h(`/${N}/admin/all-product`)}catch(f){c(((b=(g=f.response)==null?void 0:g.data)==null?void 0:b.message)||"Failed to add product.")}finally{x(!1)}};return e.jsx("div",{className:"flex justify-center items-center  bg-gray-100",children:e.jsxs("div",{className:"w-full container bg-white rounded-lg  p-6",children:[e.jsx("h2",{className:"text-2xl font-bold text-center text-gray-800 mb-6",children:"Add New Product"}),i&&e.jsxs("div",{className:"bg-green-100 border border-green-500 text-green-700 px-4 py-3 rounded mb-4 flex items-center",children:[e.jsx(w,{className:"mr-2"}),i]}),m&&e.jsxs("div",{className:"bg-red-100 border border-red-500 text-red-700 px-4 py-3 rounded mb-4 flex items-center",children:[e.jsx(F,{className:"mr-2"}),m]}),e.jsxs("form",{onSubmit:j,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"productName",className:"block text-gray-700 font-medium mb-2",children:"Product Name"}),e.jsx("input",{type:"text",id:"productName",className:"w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400",value:r,onChange:s=>l(s.target.value),placeholder:"Enter product name"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"description",className:"block text-gray-700 font-medium mb-2",children:"Description"}),e.jsx("textarea",{id:"description",rows:"3",className:"w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400",value:a,onChange:s=>n(s.target.value),placeholder:"Enter product description"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"price",className:"block text-gray-700 font-medium mb-2",children:"Price"}),e.jsx("input",{type:"number",id:"price",className:"w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400",value:o,onChange:s=>d(s.target.value),placeholder:"Enter product price"})]}),e.jsx("div",{className:"flex justify-between items-center",children:e.jsx("button",{type:"submit",className:"bg-blue-500 text-white px-6 py-2 rounded-lg flex items-center hover:bg-blue-600 transition focus:outline-none disabled:opacity-50",disabled:p,children:p?e.jsx("span",{className:"loader"}):e.jsxs(e.Fragment,{children:[e.jsx(S,{className:"mr-2"}),"Add Product"]})})})]})]})})};export{M as default};
