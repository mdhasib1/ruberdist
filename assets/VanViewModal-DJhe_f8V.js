import{r as x,c as Me,a as $e,l as Be,a5 as g,j as e,m as k,cs as Ie,ct as Ae,cu as Fe,cv as Ee,cw as Le,cx as xe,cy as ue,B as he,ab as Q,bA as je,cz as re,bQ as fe,cA as _e,f as Re,cD as ze,bk as Oe,aK as ge,aL as Ge,cC as Ue,n as ne,aw as Ve,cE as We,K as Ke,aW as Ze}from"./vendor-DTHYb0ru.js";import{a as we}from"./index-B529Ge2K.js";import{C as qe,B as Je}from"./Carousel-VrZhV3IT.js";const Qe="https://www.rubertogo.com",pe=Be(Qe),oe="https://www.rubertogo.com",be=(a=[])=>a.flatMap(l=>l.hours.map(m=>({date:new Date(l.date).toISOString().split("T")[0],time:m}))),Xe=()=>{const a=[];for(let l=0;l<=23;l++)a.push(`${l<10?"0":""}${l}:00`);return a},T=Xe(),et=(a,l)=>{const m=[],p=new Date(a);for(let b=0;b<l;b++){const y=new Date(p);m.push({date:g(y).format("YYYY-MM-DD"),displayDate:y.toLocaleDateString("en-GB",{day:"numeric",month:"short"}),slots:T}),p.setDate(p.getDate()+1)}return m},ie=(a,l)=>{const m=g(l).format("dddd");return a.dailyPricing?.find(b=>b.day===m)?.pricePerHour||0},ye=(a={})=>{const l=[],m=new Date,p=m.getDay(),b=m.getHours(),y=m.getMinutes(),P=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][p],E=m.toISOString().split("T")[0];if(a[P]){const{start:S,end:L}=a[P],C=parseInt(S.split(":")[0],10),B=parseInt(L.split(":")[0],10);if(B<C){for(let N=C;N<24;N++)(N<b-1||N===b-1&&y===0)&&l.push({date:E,time:`${N<10?"0":""}${N}:00`});const j=new Date(m);j.setDate(j.getDate()+1);const M=j.toISOString().split("T")[0];for(let N=0;N<B;N++)l.push({date:M,time:`${N<10?"0":""}${N}:00`})}else for(let j=C;j<B;j++)(j<b-1||j===b-1&&y===0)&&l.push({date:E,time:`${j<10?"0":""}${j}:00`})}return l},tt=({van:a,isOpen:l,onClose:m})=>{const[p,b]=x.useState("21:00"),[y,P]=x.useState({}),[E,S]=x.useState([]),[L,C]=x.useState([]);x.useEffect(()=>{(async()=>{try{const s=await(await fetch(`${oe}/api/packages`)).json();C(s)}catch(r){console.error("Error fetching packages:",r)}})()},[]);const B=(t,r)=>{const s=g(`${t}T${p}`,"YYYY-MM-DDTHH:mm"),o=s.add(y.freeHours,"hour");if(g(`${t}T${r}:00`,"YYYY-MM-DDTHH:mm").isBetween(s,g(t).endOf("day"),null,"[)"))return!0;const n=g(t).add(1,"day").format("YYYY-MM-DD");return g(`${n}T${r}`,"YYYY-MM-DDTHH:mm").isBetween(s.add(1,"day").startOf("day"),o,null,"[)")},W=new Date,j=7,[M,N]=x.useState(0),[D,z]=x.useState(null),[R,K]=x.useState(null),[f,v]=x.useState([]),w=x.useRef(null),[O,I]=x.useState(!1),$=Me(),{translations:c}=we(),{lang:H}=$e(),[X,Z]=x.useState(!0),[G,ee]=x.useState(!1),[te,ce]=x.useState(!1);x.useEffect(()=>{if(a)return(async()=>{try{Z(!0);const s=await(await fetch(`${oe}/api/booking-settings/${a._id}`)).json();P({freeHours:s.freeHours??9,minimumPaidHours:s.minimumPaidHours??3}),b(s.freePeriodStart??"21:00");const o=[...be(s.blockedDateHours),...ye(a.restrictedBookingHours)];S(o)}catch(r){console.error("Error fetching booking settings:",r)}finally{Z(!1)}})(),pe.on("bookingSettingsUpdated",({vanId:r,settings:s})=>{if(r===a._id){P(s);const o=[...be(s.blockedDateHours),...ye(a.restrictedBookingHours)];S(o)}}),()=>{pe.off("bookingSettingsUpdated")}},[a]),x.useEffect(()=>{const t=a?._id;a&&l&&(async()=>{try{const o=await(await fetch(`${oe}/api/vans/${t}/booked-slots`)).json(),n=(Array.isArray(o)?o:o.bookings||[]).flatMap(d=>d.selectedSlots.map(u=>({date:u.date,time:u.time})));v(n)}catch(s){console.log("Error fetching booked slots:",s)}finally{Z(!1)}})()},[a,l]);const Se=()=>{const t=new URLSearchParams($.search),r=t.get("start_date"),s=t.get("start_time"),o=t.get("end_date"),i=t.get("end_time");return{start_date:r,start_time:s,end_date:o,end_time:i}},ke=[{target:".modal-header",content:"Welcome to the booking modal! Here you can select your desired vehicle and book your time slots.",placement:"bottom"},{target:".time-slot-table",content:"Select your start time by clicking on a time slot.",placement:"top"},{target:".time-slot-table td",content:"Available time slots are highlighted. Click to select an end time.",placement:"top"},{target:".booking-button",content:"Once you have selected your slots, click here to proceed to checkout.",placement:"top"}],h=x.useMemo(()=>et(W,30),[W]);x.useEffect(()=>{if(l&&E.length>0){const{start_date:t,start_time:r,end_date:s,end_time:o}=Se();if(t&&r&&s&&o){const i=De({start_date:t,start_time:r,end_date:s,end_time:o});V(i)}}},[l,E]);const De=({start_date:t,start_time:r,end_date:s,end_time:o})=>{if(t&&r&&s&&o){const i=h.findIndex(u=>g(u.date).isSame(g(t),"day"));if(i===-1)return[];const n=T.findIndex(u=>u===r),d=g(`${s}T${o}:00`,"YYYY-MM-DDTHH:mm").diff(g(`${t}T${r}:00`,"YYYY-MM-DDTHH:mm"),"hour");return ve(i,n,d)}return[]},ve=(t,r,s)=>{let o=s,i=[];for(let n=t;n<h.length;n++){const d=h[n].slots;for(let u=r;u<d.length;u++){const _=d[u];if(q(h[n].date,_)){if(i.push({date:h[n].date,time:_}),o--,o===0)return i}else i=[],o=s,r=0}r=0}return i},A=(t,r)=>f.some(s=>s.date===t&&s.time===r),F=(t,r)=>E.some(s=>s.date===t&&s.time===r),U=(t,r)=>{const s=g();return g(`${t}T${r}`,"YYYY-MM-DDTHH:mm").isBefore(s)},q=(t,r)=>!U(t,r)&&!F(t,r)&&!A(t,r),[Y,V]=x.useState([]),de=t=>{if(!D)z(t),V([t]);else{if(R){z(t),K(null),V([t]);return}const r=h.findIndex(u=>u.date===D.date),s=T.findIndex(u=>u===D.time),o=T.findIndex(u=>u===t.time),i=h.findIndex(u=>u.date===t.date);if(i<r||i===r&&o<s){z(t),V([t]);return}let n=!0,d=[];if(D.date===t.date)for(let u=s;u<=o;u++){const _=T[u];if(F(t.date,_)||A(t.date,_)){n=!1;break}d.push({date:t.date,time:_})}else n=Te(r,s,i,o,d);n?(V(d),K(t)):(z(t),K(null),V([t]))}},Te=(t,r,s,o,i)=>{for(let n=r;n<T.length;n++){const d=T[n];if(U(h[t].date,d)||F(h[t].date,d)||A(h[t].date,d))return!1;i.push({date:h[t].date,time:d})}for(let n=t+1;n<s;n++)for(const d of T){if(U(h[n].date,d)||F(h[n].date,d)||A(h[n].date,d))return!1;i.push({date:h[n].date,time:d})}for(let n=0;n<=o;n++){const d=T[n];if(U(h[s].date,d)||F(h[s].date,d)||A(h[s].date,d))return!1;i.push({date:h[s].date,time:d})}return!0},se=()=>{let t=0,r=0;const s=Y.reduce((o,i)=>(o[i.date]||(o[i.date]=[]),o[i.date].push(i),o),{});if(Object.keys(s).forEach(o=>{const i=ie(a,o);s[o].forEach(n=>{B(n.date,n.time)||(t++,r+=i)})}),t<y.minimumPaidHours){let o=0,i=0;const n=Y.sort((d,u)=>{const _=new Date(d.date+"T"+d.time),Ce=new Date(u.date+"T"+u.time);return _-Ce});for(const d of n)if(i<y.minimumPaidHours)o+=ie(a,d.date),i++;else break;return o}return r},J=(()=>{const t=Y.length;if(!L||t<24)return null;let r=null,s=1/0;return L.forEach(o=>{const i=o.duration*24,n=Math.abs(i-t);i>=t&&n<s&&(r=o,s=n)}),r})();x.useEffect(()=>{l&&J&&!G&&!te&&(ee(!0),w.current.scrollTop=0)},[l,J,G,te]);const He=()=>{ee(!1),ce(!0)},ae=(t=null)=>{const r=t?L.find(i=>i._id===t):null;if(!Y.length){Re.error("Please select at least one hour time solt.");return}const s={selectedSlots:Y,totalPrice:r?r.price:se(),vanDetails:a,packageId:r?r._id:null};localStorage.setItem("bookingData",JSON.stringify(s));const o=`/:${H}/create-booking`;window.location.href=o},Ye=()=>{N(t=>Math.max(t-j,0)),w.current&&(w.current.scrollTop=0)},Pe=()=>{N(t=>Math.min(t+j,h.length-j)),w.current&&(w.current.scrollTop=0)},me=t=>{const r=Y.filter(i=>B(i.date,i.time));Y.filter(i=>!B(i.date,i.time));const s=Math.max(0,Y.length-y.minimumPaidHours),o=r.findIndex(i=>i.date===t.date&&i.time===t.time);return o>=0&&o<s};return X?e.jsx("div",{className:"flex items-center justify-center h-screen bg-gray-100",children:e.jsx(k.div,{initial:{rotate:0},animate:{rotate:360},transition:{repeat:1/0,duration:1.5,ease:"linear"},className:"w-20 h-20 border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-blue-500 rounded-full"})}):l?Ie.createPortal(e.jsxs(k.div,{className:"relative",children:[e.jsx(Ae,{steps:ke,run:O,continuous:!0,showSkipButton:!0,callback:t=>{(t.status==="finished"||t.status==="skipped")&&I(!1)},styles:{options:{zIndex:1e4,backgroundColor:"#fff",color:"#333",arrowColor:"#fff",primaryColor:"#007bff",textColor:"#333",beaconSize:20,spotlightPadding:10,spotlightBorderRadius:8}}}),e.jsxs(k.div,{className:"fixed inset-0 bg-gray-800 bg-opacity-70 flex max-w-full m-auto items-center justify-center z-50",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[e.jsxs(k.div,{className:"bg-white p-8 sm:p-5 rounded-2xl shadow-2xl w-full sm:max-w-4xl sm:h-[70vh] h-[90vh]  overflow-y-auto relative",ref:w,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.5,ease:"easeInOut"},children:[e.jsx(k.button,{onClick:m,className:"absolute z-40 top-4 right-4 text-red-500 text-2xl rounded-full shadow-md hover:bg-gray-100 p-2",whileHover:{scale:1.1},whileTap:{scale:.9},children:e.jsx(Fe,{})}),e.jsx(qe,{images:a.images}),J&&e.jsx(e.Fragment,{children:e.jsx(Je,{betterPackage:J,isOpen:G,onClose:He,handleBooking:ae})}),e.jsxs(Ee,{children:[e.jsxs(Le,{className:"flex text-center items-center gap-5 p-5 justify-center border-0",children:[e.jsx(xe,{className:"py-2 bg-blue-100 sm:py-4 flex-1 cursor-pointer font-semibold text-lg sm:text-xl",children:c.timeTable}),e.jsx(xe,{className:"py-2 sm:py-4 bg-blue-100 flex-1 cursor-pointer font-semibold text-lg sm:text-xl details-tab",children:c.details})]}),e.jsxs(ue,{children:[e.jsxs(k.div,{className:"text-center mb-4 sm:mb-6",initial:{y:50,opacity:0},animate:{y:0,opacity:1},transition:{duration:.7},children:[e.jsx("h1",{className:"text-xl sm:text-3xl font-bold text-gray-800 mt-5",children:c.modalTitle}),e.jsx("h3",{className:"text-lg sm:text-2xl text-gray-700",children:a.name[H]||a.name.en}),e.jsx("p",{className:"text-gray-500 text-xl",children:c.modalSubtitle}),te&&e.jsx("div",{className:"text-center mt-4",children:e.jsx(he,{variant:"outlined",color:"warning",onClick:()=>{ee(!0),ce(!1)},children:"View Better Package Offer"})}),e.jsxs("button",{onClick:ae,className:"w-full bg-blue-600 py-3 sm:py-4 text-white text-lg sm:text-xl rounded-lg mt-4 shadow-lg",children:[c.priceLabel,": ",se()," CHF"]})]}),e.jsxs(k.div,{className:"w-full overflow-x-auto sm:overflow-hidden",initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.3},children:[e.jsx("div",{className:"hidden sm:block max-w-full overflow-x-auto time-slot-table",children:e.jsxs("table",{className:"max-w-full border-separate border-spacing-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"border p-2 sm:p-4 sticky left-0 bg-white text-base sm:text-lg font-semibold text-gray-600",style:{zIndex:10},children:"Date"}),T.map((t,r)=>e.jsx("th",{className:"border p-2 sm:p-4 left-0 bg-white text-base sm:text-lg font-semibold text-gray-600",children:t},r))]})}),e.jsx("tbody",{children:h.slice(M,M+j).map((t,r)=>e.jsxs("tr",{children:[e.jsx("td",{className:"border p-2 sm:p-4 sticky left-0 bg-white font-semibold text-gray-700",children:t.displayDate}),T.map((s,o)=>{const i=D&&!R&&t.date===D.date?T.findIndex(n=>n===D.time)+1:null;return e.jsxs(k.td,{className:`border text-center cursor-pointer  p-2 sm:p-4 transition-all duration-300 ${Y.some(n=>n.date===t.date&&n.time===s)?"bg-green-500 text-white font-bold":F(t.date,s)?"bg-red-600 text-white":A(t.date,s)?"bg-gray-400 text-center text-white":U(t.date,s)?"bg-gray-300 cursor-not-allowed":"bg-white"}`,whileHover:{scale:q(t.date,s)?1.05:1},whileTap:{scale:.95},onClick:()=>q(t.date,s)&&de({date:t.date,time:s}),children:[D&&!R&&i===o&&e.jsx(k.span,{className:"relative inset-0 flex text-center justify-center items-center",initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},transition:{duration:.5},children:e.jsx(Q,{className:"text-yellow-400 text-3xl animate-bounce",title:"Select end time"})}),F(t.date,s)?e.jsx(je,{className:"text-red-500 text-4xl font-extrabold"}):A(t.date,s)?e.jsx(re,{className:"text-white text-center"}):Y.some(n=>n.date===t.date&&n.time===s)?me({date:t.date,time:s})?e.jsx("span",{className:"text-white",children:c.freeLabel}):e.jsx(fe,{className:"text-white text-4xl font-extrabold"}):null]},o)})]},r))})]})}),e.jsx("div",{className:"block sm:hidden",children:h.slice(M,M+j).map((t,r)=>e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"text-white text-center bg-green-800 p-5 font-bold text-lg mb-2",children:["Date ",t.displayDate]}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:T.map((s,o)=>{const i=D&&!R&&t.date===D.date?T.findIndex(n=>n===D.time)+1:null;return e.jsxs(k.div,{className:`p-4 text-center flex flex-col items-center justify-center border transition-all duration-300 rounded-lg ${Y.some(n=>n.date===t.date&&n.time===s)?"bg-green-500 text-white font-bold":F(t.date,s)?"bg-red-600 text-white":A(t.date,s)?"bg-gray-500 text-white":U(t.date,s)?"bg-gray-300 cursor-not-allowed":"bg-white"}`,whileHover:{scale:q(t.date,s)?1.05:1},whileTap:{scale:.95},onClick:()=>q(t.date,s)&&de({date:t.date,time:s}),children:[s,D&&!R&&i===o&&e.jsxs(k.div,{className:"relative flex items-center justify-center",initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},transition:{duration:.5},children:[e.jsx(Q,{className:"text-yellow-400 text-xl animate-bounce"}),e.jsx("div",{className:"absolute top-full mt-2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg transform -translate-x-1/2",children:"Select an end time."})]}),F(t.date,s)?e.jsx(re,{className:"text-white"}):A(t.date,s)?e.jsx(re,{className:"text-white"}):Y.some(n=>n.date===t.date&&n.time===s)?me({date:t.date,time:s})?e.jsx("span",{className:"text-white",children:c.freeLabel}):e.jsx(fe,{className:"text-white text-4xl font-extrabold"}):null]},o)})})]},r))})]}),e.jsxs("div",{className:"flex justify-between mt-4 sm:mt-6",children:[e.jsx(k.button,{onClick:Ye,className:"text-orange-500 text-lg p-2",disabled:M===0,whileHover:{scale:1.05},whileTap:{scale:.95},children:e.jsx(_e,{size:24})}),e.jsx(k.button,{onClick:Pe,className:"text-orange-500 text-lg p-2",disabled:M+j>=h.length,whileHover:{scale:1.05},whileTap:{scale:.95},children:e.jsx(Q,{size:24})})]})]}),e.jsx(ue,{children:e.jsxs(k.div,{className:"text-left p-6 bg-white rounded-lg shadow-md",initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[e.jsx("h2",{className:"text-3xl font-bold mb-4 text-gray-800",children:c.vehicleDetails}),e.jsxs("div",{className:"p-4 rounded-lg border-b-2 border-t-2 border-dashed border-red-300 ",children:[e.jsxs("h3",{className:"text-2xl font-semibold mb-2",children:[" ",a.name[H]||a.name.en]}),e.jsxs("p",{className:"text-red-500 font-bold text-xl mt-2",children:[c.priceLabel,":"," ",e.jsxs("span",{className:"text-green-600",children:[ie(a)," CHF ",c.perHour]})]})]}),e.jsxs("div",{className:" flex items-center justify-between p-4 border-b-2 border-dashed border-red-300 rounded-lg  ",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-2",children:c.externalDimensions}),e.jsxs("ul",{className:"list-disc list-inside text-gray-600",children:[e.jsxs("li",{children:[c.length,":"," ",e.jsx("span",{className:"font-semibold",children:a.externalDimensions.length})]}),e.jsxs("li",{children:[c.width,":"," ",e.jsx("span",{className:"font-semibold",children:a.externalDimensions.width})]}),e.jsxs("li",{children:[c.Height,":"," ",e.jsx("span",{className:"font-semibold",children:a.externalDimensions.height})]})]})]}),e.jsx("div",{children:e.jsx("img",{src:"/externalsize.png",width:120,alt:"",srcset:""})})]}),e.jsxs("div",{className:" flex items-center justify-between p-4 rounded-lg border-b-2 border-dashed border-red-300 ",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-2",children:c.internalDimensions}),e.jsxs("ul",{className:"list-disc list-inside text-gray-600",children:[e.jsxs("li",{children:[c.length,":"," ",e.jsx("span",{className:"font-semibold",children:a.internalDimensions.length})]}),e.jsxs("li",{children:[c.width,":"," ",e.jsx("span",{className:"font-semibold",children:a.internalDimensions.width})]}),e.jsxs("li",{children:[c.Height,":"," ",e.jsx("span",{className:"font-semibold",children:a.internalDimensions.height})]})]})]}),e.jsx("div",{children:e.jsx("img",{src:"/internalsize.png",width:120,alt:"",srcset:""})})]}),e.jsxs("div",{className:" p-4 rounded-lg border-b-2 border-dashed border-red-300",children:[e.jsx("h3",{className:"text-xl font-bold mb-2",children:c.weight}),e.jsxs("ul",{className:"list-disc list-inside text-gray-600",children:[e.jsxs("li",{children:[c.empty,":"," ",e.jsx("span",{className:"font-semibold",children:a.weight.empty})]}),e.jsxs("li",{children:[c.maxLoad,":"," ",e.jsx("span",{className:"font-semibold",children:a.weight.maxLoad})]})]})]}),e.jsxs("div",{className:"p-4 rounded-lg border-b-2 border-dashed border-red-300",children:[e.jsx("h3",{className:"text-xl font-bold mb-2",children:c.optionalFeatures}),e.jsxs("ul",{className:"list-disc list-inside text-gray-600",children:[e.jsxs("li",{children:[c.roofRack,":"," ",a.optionalFeatures.roofRack?e.jsx("span",{className:"text-green-500",children:"✓ Available"}):e.jsx("span",{className:"text-red-500",children:"✗ Not Available"})]}),e.jsxs("li",{children:[c.airConditioning,":"," ",a.optionalFeatures.airConditioning?e.jsx("span",{className:"text-green-500",children:"✓ Available"}):e.jsx("span",{className:"text-red-500",children:"✗ Not Available"})]}),e.jsxs("li",{children:[c.towingHook,":"," ",a.optionalFeatures.towingHook?e.jsx("span",{className:"text-green-500",children:"✓ Available"}):e.jsx("span",{className:"text-red-500",children:"✗ Not Available"})]}),e.jsxs("li",{children:[c.parkingSensors,":"," ",a.optionalFeatures.parkingSensors?e.jsx("span",{className:"text-green-500",children:"✓ Available"}):e.jsx("span",{className:"text-red-500",children:"✗ Not Available"})]})]})]})]})})]})]}),e.jsx("div",{className:"max-w-full fixed bottom-4 left-0 right-0 px-4",children:e.jsxs(he,{variant:"contained",color:"warning",fullWidth:!0,className:"booking-button gap-5 rounded-xl bg-blue-600 text-white py-4 shadow-lg hover:bg-blue-700 transition duration-300",onClick:ae,children:[e.jsxs("span",{className:" font-extrabold  text-2xl",children:[" ",se()," CHF"]})," ",c.procedToBooking," ",e.jsx(Q,{})]})})]})]}),document.body):null},le="https://www.rubertogo.com",st=()=>e.jsxs("svg",{className:"absolute inset-0 w-full h-full z-0",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",viewBox:"0 0 800 600",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"bgGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#ff2100"}),e.jsx("stop",{offset:"100%",stopColor:"#ff2100"})]}),e.jsxs("linearGradient",{id:"shapeGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[e.jsx("stop",{offset:"0%",stopColor:"#8c020b"}),e.jsx("stop",{offset:"100%",stopColor:"#000"})]})]}),e.jsx("rect",{width:"800",height:"600",fill:"url(#bgGradient)"}),e.jsx("circle",{cx:"200",cy:"150",r:"100",fill:"rgba(255, 255, 255, 0.1)"}),e.jsx("circle",{cx:"600",cy:"450",r:"150",fill:"rgba(255, 255, 255, 0.1)"}),e.jsx("path",{d:"M0,200 C400,100 400,500 800,300 L800,600 L0,600 Z",fill:"url(#shapeGradient)",opacity:"0.3"}),e.jsx("path",{d:"M0,400 C400,200 400,600 800,400 L800,600 L0,600 Z",fill:"url(#shapeGradient)",opacity:"0.2"})]}),Ne=a=>{const l=g().format("dddd"),m=a.dailyPricing?.find(p=>p.day===l);return m?.pricePerHour?`${m.pricePerHour} CHF / hour`:"Not available"},at=({van:a,onSelect:l})=>{const{language:m,translations:p}=we(),[b,y]=x.useState(!0),P=()=>{y(!1)};return e.jsxs(k.div,{className:"relative flex h-[420px] flex-col  rounded-xl overflow-hidden  transition-transform duration-300 transform  hover:shadow-2xl bg-white",children:[e.jsx("div",{className:"relative z-10 w-full  h-[180px] overflow-hidden flex items-center",children:e.jsxs("div",{className:"relative h-full w-full",children:[b&&e.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-gray-100",children:e.jsx(Ge,{})}),e.jsx(Ue,{component:"img",alt:a.name.en,image:a.images[0],title:a.name.en,className:"h-full w-full object-cover transition-transform duration-300 hover:scale-110",style:{padding:"1.2rem",objectFit:"contain"},loading:"lazy",onLoad:P,srcSet:`
    ${a.images[0]}?w=300&h=180&fit=crop 300w,
    ${a.images[0]}?w=600&h=360&fit=crop 600w,
    ${a.images[0]}?w=900&h=540&fit=crop 900w
  `,sizes:`(max-width: 600px) 300px, 
         (max-width: 1200px) 600px, 
         900px`})]})}),e.jsx("div",{className:"absolute inset-0 z-0",children:e.jsx(st,{})}),e.jsxs("div",{className:"flex flex-col  gap-5 justify-between  bg-white bg-opacity-1 backdrop-blur-md border border-gray-200 rounded-lg relative z-10 flex-grow",style:{flex:1,padding:"0.5rem"},children:[e.jsxs("div",{className:"flex-grow p-2",children:[e.jsx(ne,{variant:"h6",className:"font-extrabold text-gray-800 text-center   text-xl md:text-2xl",style:{marginBottom:"0.3rem"},children:a.name[m]||a.name.en}),e.jsx(ne,{variant:"h6",className:" text-3xl text-green-600 font-extrabold text-center  md:text-2xl",style:{marginBottom:"0.3rem"},children:Ne(a)}),e.jsx(ne,{variant:"body2",className:" text-center flex items-center text-sm justify-center text-green-900",sx:{display:"flex",alignItems:"center",justifyContent:"center",gap:"0.3rem",marginTop:"0.3rem",textAlign:"center"},children:a.location.address||"Location not specified."}),e.jsx("div",{className:"mt-2",children:e.jsx("div",{className:"overflow-hidden",children:e.jsxs("div",{className:"flex gap-4 mt-2 justify-center max-w-full animate-auto-scroll",children:[a.optionalFeatures.roofRack&&e.jsxs("span",{className:"bg-green-500 text-center flex justify-center items-center text-white rounded-full px-6 py-2 min-w-[200px] text-sm font-semibold shadow-md transition-transform duration-200 hover:scale-105",children:[e.jsx(Ve,{className:"mr-2"})," ",p.roofRack]}),a.optionalFeatures.airConditioning&&e.jsxs("span",{className:"bg-green-500 text-center flex justify-center items-center text-white rounded-full px-6 py-2 min-w-[200px] text-sm font-semibold shadow-md transition-transform duration-200 hover:scale-105",children:[e.jsx(We,{className:"mr-2"})," ",p.airConditioning]}),a.optionalFeatures.towingHook&&e.jsxs("span",{className:"bg-green-500 text-center flex justify-center items-center text-white rounded-full px-6 py-2 min-w-[200px] text-sm font-semibold shadow-md transition-transform duration-200 hover:scale-105",children:[e.jsx(Ke,{className:"mr-2"})," ",p.towingHook]}),a.optionalFeatures.parkingSensors&&e.jsxs("span",{className:"bg-green-500 text-center flex justify-center items-center text-white rounded-full px-6 py-2 min-w-[250px] text-sm font-semibold shadow-md transition-transform duration-200 hover:scale-105",children:[e.jsx(Ze,{className:"mr-2"})," ",p.parkingSensors]})]})})})]}),e.jsx("button",{onClick:()=>l(a),className:" w-full text-white font-bold bg-blue-600 rounded-lg border-2  py-2 text-lg shadow-md transition-transform duration-200 hover:bg-green-600 hover:text-white hover:shadow-lg transform hover:scale-104",children:p.bookNowButton})]})]})},rt=(a=[])=>a.flatMap(l=>l.hours.map(m=>({date:g(l.date).format("YYYY-MM-DD"),time:m}))),nt=a=>{const l=[];return Object.entries(a).forEach(([m,p])=>{const{start:b,end:y}=p;if(b&&y)if(g(`1970-01-01T${b}`).isAfter(g(`1970-01-01T${y}`))){l.push({day:m,start:b,end:"23:59"});const P=ot(m);l.push({day:P,start:"00:00",end:y})}else l.push({day:m,start:b,end:y})}),l},ot=a=>{const l=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],m=l.indexOf(a);return l[(m+1)%l.length]},mt=({isOpenVanModal:a,onCloseVanModal:l})=>{const[m,p]=x.useState([]),[b,y]=x.useState([]),[P,E]=x.useState([]),[S,L]=x.useState(null),[C]=ze(),B=C.get("start_date"),W=C.get("start_time"),j=C.get("end_date"),M=C.get("end_time"),N=async()=>{try{const v=await(await fetch(`${le}/api/vans`)).json();p(v)}catch(f){console.error("Error fetching vans:",f)}};x.useEffect(()=>{a&&N()},[a]);const D=async f=>{try{const w=await(await fetch(`${le}/api/booking-settings/${f}`)).json();y(rt(w.blockedDateHours||[]))}catch(v){console.error("Error fetching blocked slots:",v)}},z=async f=>{try{const w=await(await fetch(`${le}/api/vans/${f}/booked-slots`)).json(),I=(Array.isArray(w)?w:w.bookings||[]).flatMap($=>$.selectedSlots.map(c=>({date:c.date,time:c.time})));E(I)}catch(v){console.error("Error fetching booked slots:",v)}},R=(f,v,w)=>{const O=nt(f.restrictedBookingHours),I=[...b,...P,...O],$=g(`${v}T${W}`),c=g(`${w}T${M}`);let H=$;for(;I.some(G=>G.date===H.format("YYYY-MM-DD")&&G.time===H.format("HH:mm"));)H=H.add(1,"hour");const X=c.diff($,"hour"),Z=H.add(X,"hour");return{adjustedStart:H,adjustedEnd:Z}},K=async f=>{await D(f._id),await z(f._id);const v=Ne(f),w=B||g().format("YYYY-MM-DD"),O=j||g(w).add(1,"day").format("YYYY-MM-DD"),{adjustedStart:I,adjustedEnd:$}=R(f,w,O),H=$.diff(I,"hour")*parseFloat(v);L({...f,name:f.name||"Unnamed Van",description:f.description.en||"No description available.",currentDayPrice:v,totalPrice:H,startDate:I.format("YYYY-MM-DD"),endDate:$.format("YYYY-MM-DD"),startTime:I.format("h:mm A"),endTime:$.format("h:mm A")})};return S&&l(),e.jsxs("div",{className:"container m-auto pb-10 p-5",children:[e.jsx(Oe,{open:a,onClose:l,"aria-labelledby":"vans-modal-title","aria-describedby":"vans-modal-description",children:e.jsx("div",{className:"flex items-center justify-center min-h-screen bg-black bg-opacity-50",children:e.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-lg max-w-5xl h-[80vh] overflow-y-scroll w-full relative",children:[e.jsx("button",{className:" absolute right-2 top-2 text-red-500 text-2xl hover:bg-red-500 hover:text-white rounded-full p-2 ",onClick:l,children:e.jsx(je,{})}),e.jsx("div",{className:"container m-auto pb-10 p-5",children:e.jsx(ge,{container:!0,spacing:1,justifyContent:"center",alignItems:"center",children:m.map(f=>e.jsx(ge,{item:!0,xs:12,sm:6,md:6,lg:6,xl:6,children:e.jsx(at,{van:f,onSelect:K})},f._id))})})]})})}),S&&e.jsx(tt,{isOpen:!!S,onClose:()=>L(null),van:S,currentDayPrice:S.currentDayPrice,totalPrice:S.totalPrice,startDate:S.startDate,endDate:S.endDate,startTime:S.startTime,endTime:S.endTime})]})};export{mt as V};
