import{r,b as p,j as e,k as n,m as c,B as o,ax as g,ay as A,b$ as v,aR as C,a9 as f}from"./vendor-BXSwQO8Y.js";const m="https://www.rubertogo.com",F=()=>{const[l,h]=r.useState([]),[t,x]=r.useState({question:{en:"",it:"",de:"",fr:""},answer:{en:"",it:"",de:"",fr:""}}),[u,i]=r.useState(!1),[y,d]=r.useState(!1);r.useEffect(()=>{b()},[]);const b=async()=>{try{const s=await p.get(`${m}/api/faqs`);h(s.data.data)}catch(s){console.error("Error fetching FAQs:",s)}},w=async()=>{i(!0);try{const s=await p.post(`${m}/api/faqs`,t);h([...l,s.data.data]),x({question:{en:"",it:"",de:"",fr:""},answer:{en:"",it:"",de:"",fr:""}}),d(!1)}catch(s){console.error("Error adding FAQ:",s)}finally{i(!1)}},j=async s=>{i(!0);try{await p.delete(`${m}/api/faqs/${s}`),h(l.filter(a=>a._id!==s))}catch(a){console.error("Error deleting FAQ:",a)}finally{i(!1)}};return e.jsxs(n,{sx:{p:3,bgcolor:"background.default",minHeight:"100vh"},children:[e.jsxs(n,{display:"flex",justifyContent:"space-between",alignItems:"center",mb:3,children:[e.jsx(c,{variant:"h4",fontWeight:"bold",children:"FAQ Section"}),e.jsx(o,{variant:"contained",color:"primary",onClick:()=>d(!0),children:"Add New FAQ"})]}),e.jsx(n,{sx:{display:{xs:"block",sm:"none"}},children:l.map(s=>e.jsxs(g,{sx:{mb:2},children:[e.jsxs(A,{children:[e.jsx(c,{variant:"h6",fontWeight:"bold",children:s.question.en}),e.jsx(c,{variant:"body1",color:"text.secondary",mt:1,children:s.answer.en})]}),e.jsx(v,{children:e.jsx(o,{variant:"contained",color:"error",onClick:()=>j(s._id),children:"Delete"})})]},s._id))}),e.jsx(n,{sx:{display:{xs:"none",sm:"block"},overflowX:"auto"},children:e.jsxs("table",{className:"min-w-full bg-white rounded-lg shadow-md",children:[e.jsx("thead",{className:"bg-gray-200",children:e.jsxs("tr",{children:[e.jsx("th",{className:"py-2 px-4 text-left",children:"Question (EN)"}),e.jsx("th",{className:"py-2 px-4 text-left",children:"Answer (EN)"}),e.jsx("th",{className:"py-2 px-4 text-center",children:"Actions"})]})}),e.jsx("tbody",{children:l.map(s=>e.jsxs("tr",{className:"border-b",children:[e.jsx("td",{className:"py-2 px-4",children:s.question.en}),e.jsx("td",{className:"py-2 px-4",children:s.answer.en}),e.jsx("td",{className:"py-2 px-4 text-center",children:e.jsx(o,{variant:"contained",color:"error",onClick:()=>j(s._id),children:"Delete"})})]},s._id))})]})}),e.jsx(C,{open:y,onClose:()=>d(!1),children:e.jsxs(n,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",borderRadius:2,width:{xs:"90%",sm:"75%",md:"50%"},boxShadow:24,height:{xs:"90vh",sm:"85vh",md:"70vh"},overflowY:"auto",p:4},children:[e.jsx(c,{variant:"h6",component:"h2",mb:2,children:"Add New FAQ"}),["en","it","de","fr"].map(s=>e.jsxs("div",{className:"mb-4",children:[e.jsx(f,{label:`Question (${s.toUpperCase()})`,value:t.question[s],onChange:a=>x({...t,question:{...t.question,[s]:a.target.value}}),fullWidth:!0,margin:"normal"}),e.jsx(f,{label:`Answer (${s.toUpperCase()})`,value:t.answer[s],onChange:a=>x({...t,answer:{...t.answer,[s]:a.target.value}}),fullWidth:!0,margin:"normal"})]},s)),e.jsxs(n,{display:"flex",justifyContent:"flex-end",mt:4,gap:2,children:[e.jsx(o,{onClick:()=>d(!1),variant:"outlined",color:"secondary",children:"Cancel"}),e.jsx(o,{onClick:w,variant:"contained",color:"primary",disabled:u,children:u?"Adding...":"Add"})]})]})})]})};export{F as default};
