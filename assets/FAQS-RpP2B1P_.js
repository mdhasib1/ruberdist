import{r as n,a as p,b as u,j as a,g as r,m as g,aX as b,aY as y,aZ as j,a_ as f,a$ as w}from"./vendor-C9ifI4XU.js";import{a as N}from"./index-DfvkrZdQ.js";const v="https://rubertogo.com",$=()=>{const[c,i]=n.useState([]),[o,l]=n.useState(!1),{lang:t}=p(),{translations:d}=N();n.useEffect(()=>{m()},[t]);const m=async()=>{try{const e=(await u.get(`${v}/api/faqs`)).data.data;i(e)}catch(s){console.error("Error fetching FAQs:",s)}},h=s=>(e,x)=>{l(x?s:!1)};return a.jsxs("div",{className:"bg-blue-100 max-w-full shadow-lg py-20 border-b-2",children:[a.jsx(r,{style:{marginBottom:"20px"},variant:"h4",className:"text-center font-bold mb-8 text-gray-800",children:d.faqsTitle}),a.jsx("div",{className:"space-y-4 max-w-4xl mx-auto p-5",children:c.map((s,e)=>a.jsx(g.div,{layout:!0,transition:{duration:.3},children:a.jsxs(b,{expanded:o===`panel${e}`,onChange:h(`panel${e}`),elevation:0,className:"border-b border-gray-200 rounded-md shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out",children:[a.jsx(y,{expandIcon:o===`panel${e}`?a.jsx(j,{className:"text-red-500"}):a.jsx(f,{className:"text-gray-500"}),"aria-controls":`panel${e}bh-content`,id:`panel${e}bh-header`,className:"cursor-pointer",children:a.jsx(r,{variant:"h6",className:"font-semibold text-gray-800",children:s.question[t]||s.question.en})}),a.jsx(w,{children:a.jsx(r,{className:"text-gray-600",children:s.answer[t]||s.answer.en})})]})},s._id))})]})};export{$ as F};
