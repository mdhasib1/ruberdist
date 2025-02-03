import{r as n,a as v,c as w,u as z,j as e,al as i,bj as k,m as s,k as S,bk as C,bl as P,bm as T,bn as D,bo as I,bp as o,bq as t,b as f}from"./vendor-D-GSuRVS.js";const g="https://www.rubertogo.com",$=()=>{const[a,j]=n.useState(null),[y,d]=n.useState(!0),[m,b]=n.useState(null),{lang:h}=v(),N=w(),l=z(),x=new URLSearchParams(N.search),r=x.get("session_id"),p=x.get("booking_id");return n.useEffect(()=>{r&&(async()=>{d(!0);try{const u=await f.get(`${g}/api/payment-session/${r}`);j(u.data);const c=await f.post(`${g}/api/create-pre-authorization`,{sessionId:r,bookingId:p},{headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`}});c.status===200&&toast.success("Pre-authorization successful."),c.data.error&&(b(c.data.error),l(`/${h}/payment-failed`))}catch{toast.error("Failed to create pre-authorization."),l(`/${h}/payment-failed`)}finally{d(!1)}})()},[r,p,l]),y?e.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100vh",backgroundColor:"#f9fafb"},children:[e.jsx("div",{style:{width:"300px",height:"150px",position:"relative"},children:e.jsxs("svg",{width:"100%",height:"100%",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"vanBodyGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0%",stopColor:"#ff5252",stopOpacity:"1"}),e.jsx("stop",{offset:"100%",stopColor:"#e63946",stopOpacity:"1"})]})}),e.jsx("rect",{width:"100%",height:"30",y:"100",fill:"#333"}),e.jsx("line",{x1:"0",y1:"115",x2:"100%",y2:"115",stroke:"#fff",strokeWidth:"2",strokeDasharray:"10 8"}),e.jsx(i.g,{initial:{x:"-20%"},animate:{x:"120%"},transition:{repeat:1/0,duration:5,ease:"linear"},children:e.jsx("image",{href:"https://rubertogo.fra1.digitaloceanspaces.com/images/1736120575234.png",x:"40",y:"20",height:"80",width:"120",style:{filter:"drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2))"},alt:"Van",loading:"lazy"})})]})}),e.jsx("p",{style:{marginTop:"1.5rem",fontSize:"1rem",fontWeight:"600",color:"#4b5563"},children:"Attendere prego, la tua prenotazione è in elaborazione..."})]}):m?e.jsxs(i.div,{className:"flex flex-col items-center justify-center h-screen",initial:{opacity:0},animate:{opacity:1},transition:{duration:1},children:[e.jsx(k,{size:100,className:"text-red-600"}),e.jsx(s,{variant:"h4",className:"text-center mt-4",children:m})]}):e.jsxs(i.div,{className:"container mx-auto sm:py-32 py-10 px-4",initial:{opacity:0},animate:{opacity:1},transition:{duration:1},children:[e.jsxs(i.div,{className:"py-12 bg-gradient-to-r from-[#ff0707] to-orange-500 text-white text-center",initial:{opacity:0},animate:{opacity:1},transition:{duration:1},children:[e.jsx(s,{variant:"h4",className:"font-bold",children:"La tua ricevuta di pagamento"}),e.jsx(s,{variant:"body1",className:"mt-2",children:"Grazie per il tuo acquisto! Di seguito i dettagli del pagamento."})]}),e.jsx("div",{className:"grid grid-cols-1 gap-4",children:e.jsxs(S,{className:"bg-white shadow-lg rounded-lg border border-gray-300 p-6 text-gray-700",children:[e.jsx(i.div,{className:"flex items-center justify-center",initial:{scale:0},animate:{scale:1},transition:{type:"spring",stiffness:150,damping:20},children:e.jsx("div",{className:"bg-green-500 p-3 rounded-full",children:e.jsx(C,{size:32,className:"text-white"})})}),e.jsx(s,{variant:"h4",className:"text-center font-bold mt-4",children:"Pagamento Avvenuto con Successo!"}),e.jsxs(s,{variant:"h6",className:"text-center font-semibold mt-2",children:[(a.amount_total/100).toFixed(2),e.jsx("span",{className:"uppercase ml-2",children:a.currency})]}),e.jsx(P,{component:T,className:"mt-6 shadow-md",children:e.jsx(D,{children:e.jsxs(I,{children:[e.jsxs(o,{children:[e.jsx(t,{className:"font-semibold",children:"Nome:"}),e.jsx(t,{children:a.customer_details.name})]}),e.jsxs(o,{children:[e.jsx(t,{className:"font-semibold",children:"Email:"}),e.jsx(t,{children:a.customer_details.email})]}),e.jsxs(o,{children:[e.jsx(t,{className:"font-semibold",children:"Numero di Telefono:"}),e.jsx(t,{children:a.customer_details.phone})]}),e.jsxs(o,{children:[e.jsx(t,{className:"font-semibold",children:"Importo Pagato:"}),e.jsxs(t,{children:[(a.amount_total/100).toFixed(2)," CHF"]})]})]})})}),e.jsx(s,{variant:"body2",className:"text-center mt-6 p-4 text-gray-500",children:"Grazie per il tuo pagamento!"})]})})]})};export{$ as default};
