import{r as i,a as _,c as z,u as P,j as e,am as o,bi as T,m as r,k as $,bj as I,bk as k,bl as E,bm as A,bn as C,bo as c,bp as s,b as y,f as x}from"./vendor-DPDX2MNh.js";const N="https://www.rubertogo.com",L=()=>{const[t,v]=i.useState(null),[w,h]=i.useState(!0),[p,B]=i.useState(null),{lang:l}=_(),S=z(),d=P(),f=new URLSearchParams(S.search),a=f.get("session_id"),n=f.get("booking_id");return i.useEffect(()=>{let g=!0;const j=`payment_request_${a}_${n}`;if(!a||!n||sessionStorage.getItem(j))return;const b=async()=>{h(!0);try{const m=await y.get(`${N}/api/payment-session/${a}`);v(m.data);const u=await y.post(`${N}/api/create-pre-authorization`,{sessionId:a,bookingId:n},{headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`}});if(u.status===201)sessionStorage.setItem(j,"true"),x.success("Pre-authorization successful.");else if(u.data.error){x.error(u.data.error),d(`/${l}/payment-failed`);return}}catch(m){m.response?.status===429?setTimeout(b,5e3):(x.error("Failed to create pre-authorization."),d(`/${l}/payment-failed`))}finally{g&&h(!1)}};return b(),()=>{g=!1}},[a,n,d,l]),w?e.jsx("div",{className:"flex flex-col justify-center items-center h-screen bg-gray-100",children:e.jsx("p",{className:"mt-6 text-lg font-semibold text-gray-600",children:"Attendere prego, la tua prenotazione è in elaborazione..."})}):p?e.jsxs(o.div,{className:"flex flex-col items-center justify-center h-screen",initial:{opacity:0},animate:{opacity:1},transition:{duration:1},children:[e.jsx(T,{size:100,className:"text-red-600"}),e.jsx(r,{variant:"h4",className:"text-center mt-4",children:p})]}):e.jsxs(o.div,{className:"container mx-auto py-10 px-4",initial:{opacity:0},animate:{opacity:1},transition:{duration:1},children:[e.jsx(o.div,{className:"py-12 bg-gradient-to-r from-[#ff0707] to-orange-500 text-white text-center",initial:{opacity:0},animate:{opacity:1},transition:{duration:1},children:e.jsx(r,{variant:"h4",className:"font-bold",children:"La tua ricevuta di pagamento"})}),e.jsxs($,{className:"bg-white shadow-lg rounded-lg border border-gray-300 p-6 text-gray-700",children:[e.jsx(o.div,{className:"flex items-center justify-center",initial:{scale:0},animate:{scale:1},transition:{type:"spring",stiffness:150,damping:20},children:e.jsx("div",{className:"bg-green-500 p-3 rounded-full",children:e.jsx(I,{size:32,className:"text-white"})})}),e.jsx(r,{variant:"h4",className:"text-center font-bold mt-4",children:"Pagamento Avvenuto con Successo!"}),e.jsxs(r,{variant:"h6",className:"text-center font-semibold mt-2",children:[(t.amount_total/100).toFixed(2),e.jsx("span",{className:"uppercase ml-2",children:t.currency})]}),e.jsx(k,{component:E,className:"mt-6 shadow-md",children:e.jsx(A,{children:e.jsxs(C,{children:[e.jsxs(c,{children:[e.jsx(s,{className:"font-semibold",children:"Nome:"}),e.jsx(s,{children:t.customer_details.name})]}),e.jsxs(c,{children:[e.jsx(s,{className:"font-semibold",children:"Email:"}),e.jsx(s,{children:t.customer_details.email})]}),e.jsxs(c,{children:[e.jsx(s,{className:"font-semibold",children:"Numero di Telefono:"}),e.jsx(s,{children:t.customer_details.phone})]}),e.jsxs(c,{children:[e.jsx(s,{className:"font-semibold",children:"Importo Pagato:"}),e.jsxs(s,{children:[(t.amount_total/100).toFixed(2)," CHF"]})]})]})})}),e.jsx(r,{variant:"body2",className:"text-center mt-6 p-4 text-gray-500",children:"Grazie per il tuo pagamento!"})]})]})};export{L as default};
