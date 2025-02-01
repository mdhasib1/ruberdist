import{r as h,e as Ce,A as Me,u as Ye,j as e,C as w,H as Be,F as $e}from"./index-DrMvIKwq.js";import{d as y}from"./dayjs.min-DY5UBfhE.js";import{c as X,A as ie}from"./index-Bc-nvAfN.js";import{o as O,V as ve,a7 as Ie,U as oe,a8 as Fe}from"./index-y5yuKkc0.js";import{b as Ee}from"./index-DklELUdR.js";import{c as Ae,C as Re,B as _e,T as Le,a as Oe,b as le,d as de}from"./Carousel-FFuPDihC.js";import{l as ze}from"./index-Rnf9BJUB.js";import{B as ce}from"./Button-xUQB_oWD.js";import{T as Z}from"./Typography-BAti9wpa.js";const Ue="https://rubertogo.com",me=ze(Ue),ee="https://rubertogo.com",ue=(o=[])=>o.flatMap(m=>m.hours.map(x=>({date:new Date(m.date).toISOString().split("T")[0],time:x}))),Ke=()=>{const o=[];for(let m=0;m<=23;m++)o.push(`${m<10?"0":""}${m}:00`);return o},N=Ke(),We=(o,m)=>{const x=[],f=new Date(o);for(let p=0;p<m;p++){const g=new Date(f);x.push({date:y(g).format("YYYY-MM-DD"),displayDate:g.toLocaleDateString("en-GB",{day:"numeric",month:"short"}),slots:N}),f.setDate(f.getDate()+1)}return x},te=(o,m)=>{var p;const x=y(m).format("dddd"),f=(p=o.dailyPricing)==null?void 0:p.find(g=>g.day===x);return(f==null?void 0:f.pricePerHour)||0},qe=o=>{var f;const m=y().format("dddd"),x=(f=o.dailyPricing)==null?void 0:f.find(p=>p.day===m);return x!=null&&x.kilometers?`${x.kilometers} km`:"Not available"},Ge=(o,m)=>{var p;const x=y(m).format("dddd"),f=(p=o.dailyPricing)==null?void 0:p.find(g=>g.day===x);return(f==null?void 0:f.extraPerKm)||0},xe=(o={})=>{const m=[],x=new Date,f=x.getDay(),p=x.getHours(),g=x.getMinutes(),v=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][f],M=x.toISOString().split("T")[0];if(o[v]){const{start:A,end:R}=o[v],I=parseInt(A.split(":")[0],10),H=parseInt(R.split(":")[0],10);if(H<I){for(let j=I;j<24;j++)(j<p-1||j===p-1&&g===0)&&m.push({date:M,time:`${j<10?"0":""}${j}:00`});const b=new Date(x);b.setDate(b.getDate()+1);const P=b.toISOString().split("T")[0];for(let j=0;j<H;j++)m.push({date:P,time:`${j<10?"0":""}${j}:00`})}else for(let b=I;b<H;b++)(b<p-1||b===p-1&&g===0)&&m.push({date:M,time:`${b<10?"0":""}${b}:00`})}return m},nt=({van:o,isOpen:m,onClose:x})=>{const[f,p]=h.useState("21:00"),[g,v]=h.useState({}),[M,A]=h.useState([]),[R,I]=h.useState([]);h.useEffect(()=>{(async()=>{try{const s=await(await fetch(`${ee}/api/packages/vans/${o._id}`)).json();console.log(s);const r=s.filter(i=>i.packagePrices.some(a=>a.price>0));I(r)}catch(n){console.error("Error fetching packages:",n)}})()},[]);const H=(t,n)=>{const s=y(`${t}T${f}`,"YYYY-MM-DDTHH:mm"),r=s.add(g.freeHours,"hour");if(y(`${t}T${n}:00`,"YYYY-MM-DDTHH:mm").isBetween(s,y(t).endOf("day"),null,"[)"))return!0;const a=y(t).add(1,"day").format("YYYY-MM-DD");return y(`${a}T${n}`,"YYYY-MM-DDTHH:mm").isBetween(s.add(1,"day").startOf("day"),r,null,"[)")},z=new Date,b=7,[P,j]=h.useState(0),[k,_]=h.useState(null),[F,U]=h.useState(null),[he,se]=h.useState([]),Y=h.useRef(null),[fe,pe]=h.useState(!1),ge=Ce(),{translations:d}=Me(),{lang:K}=Ye(),[be,W]=h.useState(!0),[q,G]=h.useState(!1),[J,ae]=h.useState(!1);h.useEffect(()=>{if(o)return(async()=>{try{W(!0);const s=await(await fetch(`${ee}/api/booking-settings/${o._id}`)).json();v({freeHours:s.freeHours??9,minimumPaidHours:s.minimumPaidHours??3}),p(s.freePeriodStart??"21:00");const r=[...ue(s.blockedDateHours),...xe(o.restrictedBookingHours)];A(r)}catch(n){console.error("Error fetching booking settings:",n)}finally{W(!1)}})(),me.on("bookingSettingsUpdated",({vanId:n,settings:s})=>{if(n===o._id){v(s);const r=[...ue(s.blockedDateHours),...xe(o.restrictedBookingHours)];A(r)}}),()=>{me.off("bookingSettingsUpdated")}},[o]),h.useEffect(()=>{const t=o==null?void 0:o._id;o&&m&&(async()=>{try{const s=await fetch(`${ee}/api/vans/${t}/booked-slots`);if(s.status===404){console.warn("No bookings found for van ID"),se([]);return}const r=await s.json(),a=(Array.isArray(r)?r:r.bookings||[]).flatMap(l=>l.selectedSlots.map(c=>({date:c.date,time:c.time})));se(a)}catch(s){s.name==="AbortError"?console.warn("Fetch aborted:",s.message):console.error("Error fetching booked slots:",s)}finally{W(!1)}})()},[o,m]);const ye=()=>{const t=new URLSearchParams(ge.search),n=t.get("start_date"),s=t.get("start_time"),r=t.get("end_date"),i=t.get("end_time");return{start_date:n,start_time:s,end_date:r,end_time:i}},je=[{target:".modal-header",content:"Welcome to the booking modal! Here you can select your desired vehicle and book your time slots.",placement:"bottom"},{target:".time-slot-table",content:"Select your start time by clicking on a time slot.",placement:"top"},{target:".time-slot-table td",content:"Available time slots are highlighted. Click to select an end time.",placement:"top"},{target:".booking-button",content:"Once you have selected your slots, click here to proceed to checkout.",placement:"top"}],u=h.useMemo(()=>We(z,30),[z]);h.useEffect(()=>{if(m&&M.length===0||M.length>0){const{start_date:t,start_time:n,end_date:s,end_time:r}=ye();if(t&&n&&s&&r){const i=we({start_date:t,start_time:n,end_date:s,end_time:r});$(i)}}},[m,M]);const we=({start_date:t,start_time:n,end_date:s,end_time:r})=>{if(t&&n&&s&&r){const i=u.findIndex(c=>y(c.date).isSame(y(t),"day"));if(i===-1)return[];const a=N.findIndex(c=>c===n),l=y(`${s}T${r}:00`,"YYYY-MM-DDTHH:mm").diff(y(`${t}T${n}:00`,"YYYY-MM-DDTHH:mm"),"hour");return Ne(i,a,l)}return[]},Ne=(t,n,s)=>{let r=s,i=[];for(let a=t;a<u.length;a++){const l=u[a].slots;for(let c=n;c<l.length;c++){const C=l[c];if(E(u[a].date,C)){if(i.push({date:u[a].date,time:C}),r--,r===0)return i}else i=[],r=s,n=0}n=0}return i},D=(t,n)=>he.some(s=>s.date===t&&s.time===n),T=(t,n)=>M.some(s=>s.date===t&&s.time===n),B=(t,n)=>{const s=y();return y(`${t}T${n}`,"YYYY-MM-DDTHH:mm").isBefore(s)},E=(t,n)=>!B(t,n)&&!T(t,n)&&!D(t,n),[S,$]=h.useState([]),re=t=>{if(!k)_(t),$([t]);else{if(F){_(t),U(null),$([t]);return}const n=u.findIndex(c=>c.date===k.date),s=N.findIndex(c=>c===k.time),r=N.findIndex(c=>c===t.time),i=u.findIndex(c=>c.date===t.date);if(i<n||i===n&&r<s){_(t),$([t]);return}let a=!0,l=[];if(k.date===t.date)for(let c=s;c<=r;c++){const C=N[c];if(T(t.date,C)||D(t.date,C)){a=!1;break}l.push({date:t.date,time:C})}else a=Se(n,s,i,r,l);a?($(l),U(t)):(_(t),U(null),$([t]))}},Se=(t,n,s,r,i)=>{for(let a=n;a<N.length;a++){const l=N[a];if(B(u[t].date,l)||T(u[t].date,l)||D(u[t].date,l))return!1;i.push({date:u[t].date,time:l})}for(let a=t+1;a<s;a++)for(const l of N){if(B(u[a].date,l)||T(u[a].date,l)||D(u[a].date,l))return!1;i.push({date:u[a].date,time:l})}for(let a=0;a<=r;a++){const l=N[a];if(B(u[s].date,l)||T(u[s].date,l)||D(u[s].date,l))return!1;i.push({date:u[s].date,time:l})}return!0},V=()=>{let t=0,n=0;const s=S.reduce((r,i)=>(r[i.date]||(r[i.date]=[]),r[i.date].push(i),r),{});if(Object.keys(s).forEach(r=>{const i=te(o,r);s[r].forEach(a=>{H(a.date,a.time)||(t++,n+=i)})}),t<g.minimumPaidHours){let r=0,i=0;const a=S.sort((l,c)=>{const C=new Date(l.date+"T"+l.time),Pe=new Date(c.date+"T"+c.time);return C-Pe});for(const l of a)if(i<g.minimumPaidHours)r+=te(o,l.date),i++;else break;return r}return n},L=(()=>{let t=0;const n=S.reduce((i,a)=>(i[a.date]||(i[a.date]=[]),i[a.date].push(a),i),{});if(Object.keys(n).forEach(i=>{n[i].forEach(a=>{H(a.date,a.time)||t++})}),t<10)return null;let s=null,r=1/0;return R.forEach(i=>{const a=i.duration*24,l=Math.abs(a-t);a>=t&&l<r&&(s=i,r=l)}),s})();h.useEffect(()=>{m&&L&&!q&&!J&&(G(!0),Y.current.scrollTop=0)},[m,L,q,J]);const ke=()=>{G(!1),ae(!0)},He=()=>{let t=0;const n=S.reduce((s,r)=>(s[r.date]||(s[r.date]=[]),s[r.date].push(r),s),{});if(Object.keys(n).forEach(s=>{n[s].forEach(r=>{H(r.date,r.time)||t++})}),t<g.minimumPaidHours){let s=0;const r=S.sort((i,a)=>{const l=new Date(i.date+"T"+i.time),c=new Date(a.date+"T"+a.time);return l-c});for(const i of r)if(s<g.minimumPaidHours)H(i.date,i.time)||s++;else break;return Math.max(s,g.minimumPaidHours)}return t},Q=(t=null)=>{var a,l;const n=t?R.find(c=>c._id===t):null;if(He()<o.minimumHours){$e.error(`You must select at least ${o.minimumHours} paid hour(s) for this van.`);return}const r={selectedSlots:S,totalPrice:n?(l=(a=n==null?void 0:n.packagePrices)==null?void 0:a[0])==null?void 0:l.price:V(),vanDetails:o,packageId:n?n._id:null};localStorage.setItem("bookingData",JSON.stringify(r));const i=`/:${K}/booking-payment`;window.location.href=i},De=()=>{j(t=>Math.max(t-b,0)),Y.current&&(Y.current.scrollTop=0)},Te=()=>{j(t=>Math.min(t+b,u.length-b)),Y.current&&(Y.current.scrollTop=0)},ne=t=>{const n=S.filter(i=>H(i.date,i.time));S.filter(i=>!H(i.date,i.time));const s=Math.max(0,S.length-g.minimumPaidHours),r=n.findIndex(i=>i.date===t.date&&i.time===t.time);return r>=0&&r<s};return be?e.jsx("div",{className:"flex items-center justify-center h-screen bg-gray-100",children:e.jsx(w.div,{initial:{rotate:0},animate:{rotate:360},transition:{repeat:1/0,duration:1.5,ease:"linear"},className:"w-20 h-20 border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-blue-500 rounded-full"})}):m?Be.createPortal(e.jsxs(w.div,{className:"relative",children:[e.jsx(Ae,{steps:je,run:fe,continuous:!0,showSkipButton:!0,callback:t=>{(t.status==="finished"||t.status==="skipped")&&pe(!1)},styles:{options:{zIndex:1e4,backgroundColor:"#fff",color:"#333",arrowColor:"#fff",primaryColor:"#007bff",textColor:"#333",beaconSize:20,spotlightPadding:10,spotlightBorderRadius:8}}}),e.jsxs(w.div,{className:"fixed inset-0 bg-gray-800 bg-opacity-70 flex max-w-full items-center justify-center z-50 px-2 sm:px-4",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[e.jsxs(w.div,{className:"bg-white p-8 sm:p-5 rounded-2xl shadow-2xl w-full sm:max-w-6xl sm:h-[80vh] h-[90vh]  overflow-y-auto relative",ref:Y,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.5,ease:"easeInOut"},children:[e.jsx(w.button,{onClick:x,className:"absolute z-40 top-4 right-4 text-red-500 text-2xl rounded-full shadow-md hover:bg-gray-100 p-2",whileHover:{scale:1.1},whileTap:{scale:.9},children:e.jsx(Ee,{})}),e.jsx(Re,{images:o.images}),L&&e.jsx(e.Fragment,{children:e.jsx(_e,{betterPackage:L,isOpen:q,onClose:ke,handleBooking:Q})}),e.jsxs(Le,{children:[e.jsxs(Oe,{className:"flex text-center items-center gap-5 p-5 justify-center border-0",children:[e.jsx(le,{className:"py-2 bg-blue-100 sm:py-4 flex-1 cursor-pointer font-semibold text-lg sm:text-xl",children:d.timeTable}),e.jsx(le,{className:"py-2 sm:py-4 bg-blue-100 flex-1 cursor-pointer font-semibold text-lg sm:text-xl details-tab",children:d.details})]}),e.jsxs(de,{children:[e.jsxs(w.div,{className:"text-center mb-4 sm:mb-6",initial:{y:50,opacity:0},animate:{y:0,opacity:1},transition:{duration:.7},children:[e.jsx("h1",{className:"text-xl sm:text-3xl font-bold text-gray-800 mt-5",children:d.modalTitle}),e.jsx("h3",{className:"text-lg sm:text-2xl text-gray-700",children:o.name[K]||o.name.en}),e.jsx("p",{className:"text-gray-500 text-xl",children:d.modalSubtitle}),J&&e.jsx("div",{className:"text-center mt-4",children:e.jsx(ce,{variant:"outlined",color:"warning",onClick:()=>{G(!0),ae(!1)},children:"Risparmia con i pacchetti"})}),e.jsxs("button",{onClick:Q,className:"w-full bg-blue-600 py-3 sm:py-4 text-white text-lg sm:text-xl rounded-lg mt-4 shadow-lg",children:[d.priceLabel,": ",V()," CHF"]})]}),e.jsxs(w.div,{className:"w-full overflow-x-auto sm:overflow-hidden",initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.3},children:[e.jsx("div",{className:"hidden sm:block max-w-full overflow-x-auto time-slot-table",children:e.jsxs("table",{className:"max-w-full border-separate border-spacing-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"border p-2 sm:p-4 sticky left-0 bg-white text-base sm:text-lg font-semibold text-gray-600",style:{zIndex:10},children:d.date}),N.map((t,n)=>e.jsx("th",{className:"border p-2 sm:p-4 left-0 bg-white text-base sm:text-lg font-semibold text-gray-600",children:t},n))]})}),e.jsx("tbody",{children:u.slice(P,P+b).map((t,n)=>e.jsxs("tr",{children:[e.jsx("td",{className:"border p-2 sm:p-4 sticky left-0 bg-white font-semibold text-gray-700",children:t.displayDate}),N.map((s,r)=>{const i=k&&!F&&t.date===k.date?N.findIndex(a=>a===k.time)+1:null;return e.jsxs(w.td,{className:`border text-center cursor-pointer  p-2 sm:p-4 transition-all duration-300 ${S.some(a=>a.date===t.date&&a.time===s)?"bg-green-500 text-white font-bold":T(t.date,s)?"bg-red-600 text-white":D(t.date,s)?"bg-gray-400 text-center text-white":B(t.date,s)?"bg-gray-300 cursor-not-allowed":"bg-white"}`,whileHover:{scale:E(t.date,s)?1.05:1},whileTap:{scale:.95},onClick:()=>E(t.date,s)&&re({date:t.date,time:s}),children:[k&&!F&&i===r&&e.jsx(w.span,{className:"relative inset-0 flex text-center justify-center items-center",initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},transition:{duration:.5},children:e.jsx(O,{className:"text-yellow-400 text-3xl animate-bounce",title:"Select end time"})}),T(t.date,s)?e.jsx(ve,{className:"text-red-500 text-4xl font-extrabold"}):D(t.date,s)?e.jsx(X,{className:"text-white text-center"}):S.some(a=>a.date===t.date&&a.time===s)?ne({date:t.date,time:s})?e.jsx("span",{className:"text-white",children:d.freeLabel}):e.jsx(ie,{className:"text-white text-4xl font-extrabold"}):null]},r)})]},n))})]})}),e.jsx("div",{className:"block sm:hidden",children:u.slice(P,P+b).map((t,n)=>e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"text-white text-center bg-green-800 p-5 font-bold text-lg mb-2",children:[d.date," ",t.displayDate]}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:N.map((s,r)=>{const i=k&&!F&&t.date===k.date?N.findIndex(a=>a===k.time)+1:null;return e.jsxs(w.div,{className:`p-4 text-center flex flex-col items-center justify-center border transition-all duration-300 rounded-lg ${S.some(a=>a.date===t.date&&a.time===s)?"bg-green-500 text-white font-bold":T(t.date,s)?"bg-red-600 text-white":D(t.date,s)?"bg-gray-500 text-white":B(t.date,s)?"bg-gray-300 cursor-not-allowed":"bg-white"}`,whileHover:{scale:E(t.date,s)?1.05:1},whileTap:{scale:.95},onClick:()=>E(t.date,s)&&re({date:t.date,time:s}),children:[s,k&&!F&&i===r&&e.jsxs(w.div,{className:"relative flex items-center justify-center",initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},transition:{duration:.5},children:[e.jsx(O,{className:"text-yellow-400 text-xl animate-bounce"}),e.jsx("div",{className:"absolute top-full mt-2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg transform -translate-x-1/2",children:"Select an end time."})]}),T(t.date,s)?e.jsx(X,{className:"text-white"}):D(t.date,s)?e.jsx(X,{className:"text-white"}):S.some(a=>a.date===t.date&&a.time===s)?ne({date:t.date,time:s})?e.jsx("span",{className:"text-white",children:d.freeLabel}):e.jsx(ie,{className:"text-white text-4xl font-extrabold"}):null]},r)})})]},n))})]}),e.jsxs("div",{className:"flex justify-between mt-4 sm:mt-6",children:[e.jsx(w.button,{onClick:De,className:"text-orange-500 text-lg p-2",disabled:P===0,whileHover:{scale:1.05},whileTap:{scale:.95},children:e.jsx(Ie,{size:24})}),e.jsx(w.button,{onClick:Te,className:"text-orange-500 text-lg p-2",disabled:P+b>=u.length,whileHover:{scale:1.05},whileTap:{scale:.95},children:e.jsx(O,{size:24})})]})]}),e.jsx(de,{children:e.jsxs(w.div,{className:"text-left p-6 bg-white rounded-lg shadow-md",initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[e.jsx("h2",{className:"text-3xl font-bold mb-4 text-gray-800",children:d.vehicleDetails}),e.jsxs("div",{className:"p-4 rounded-lg border-b-2 border-t-2 border-dashed border-red-300 ",children:[e.jsxs("h3",{className:"text-2xl font-semibold mb-2",children:[" ",o.name[K]||o.name.en]}),e.jsxs("p",{className:"text-red-500 font-bold text-xl mt-2",children:[d.priceLabel,":"," ",e.jsxs("span",{className:"text-green-600",children:[te(o)," CHF ",d.perHour]})]}),e.jsxs("p",{className:"text-red-500 font-bold text-xl mt-2",children:[d.exprice," ",e.jsxs("span",{className:"text-green-600",children:[Ge(o)," CHF"]})]}),e.jsxs(Z,{variant:"body2",className:"text-center text-sm text-green-500 flex items-center  gap-2",children:[e.jsx(oe,{})," ",d.includes," ",qe(o)]}),(o==null?void 0:o.preAuthorizationAmount)>0?e.jsxs(Z,{variant:"body2",className:"ml-2 text-green-500 font-extrabold text-left flex items-center gap-2",children:[e.jsx(oe,{}),d.securityDiposit," ",o.preAuthorizationAmount," CHF"]}):e.jsxs(Z,{variant:"body2",className:"ml-2 text-red-500 font-extrabold text-left flex items-center gap-2",children:[e.jsx(Fe,{}),d.nosecurityDiposit]})]}),e.jsxs("div",{className:" flex items-center justify-between p-4 border-b-2 border-dashed border-red-300 rounded-lg  ",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-2",children:d.externalDimensions}),e.jsxs("ul",{className:"list-disc list-inside text-gray-600",children:[e.jsxs("li",{children:[d.length,":"," ",e.jsx("span",{className:"font-semibold",children:o.externalDimensions.length})]}),e.jsxs("li",{children:[d.width,":"," ",e.jsx("span",{className:"font-semibold",children:o.externalDimensions.width})]}),e.jsxs("li",{children:[d.Height,":"," ",e.jsx("span",{className:"font-semibold",children:o.externalDimensions.height})]})]})]}),e.jsx("div",{children:e.jsx("img",{src:"/externalsize.png",width:120,alt:"",srcset:""})})]}),e.jsxs("div",{className:" flex items-center justify-between p-4 rounded-lg border-b-2 border-dashed border-red-300 ",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-2",children:d.internalDimensions}),e.jsxs("ul",{className:"list-disc list-inside text-gray-600",children:[e.jsxs("li",{children:[d.length,":"," ",e.jsx("span",{className:"font-semibold",children:o.internalDimensions.length})]}),e.jsxs("li",{children:[d.width,":"," ",e.jsx("span",{className:"font-semibold",children:o.internalDimensions.width})]}),e.jsxs("li",{children:[d.Height,":"," ",e.jsx("span",{className:"font-semibold",children:o.internalDimensions.height})]})]})]}),e.jsx("div",{children:e.jsx("img",{src:"/internalsize.png",width:120,alt:"",srcset:""})})]}),e.jsxs("div",{className:" p-4 rounded-lg border-b-2 border-dashed border-red-300",children:[e.jsx("h3",{className:"text-xl font-bold mb-2",children:d.weight}),e.jsxs("ul",{className:"list-disc list-inside text-gray-600",children:[e.jsxs("li",{children:[d.empty,":"," ",e.jsx("span",{className:"font-semibold",children:o.weight.empty})]}),e.jsxs("li",{children:[d.maxLoad,":"," ",e.jsx("span",{className:"font-semibold",children:o.weight.maxLoad})]})]})]}),e.jsxs("div",{className:"p-4 rounded-lg border-b-2 border-dashed border-red-300",children:[e.jsx("h3",{className:"text-xl font-bold mb-2",children:d.optionalFeatures}),e.jsxs("ul",{className:"list-disc list-inside text-gray-600",children:[e.jsxs("li",{children:[d.roofRack,":"," ",o.optionalFeatures.roofRack?e.jsxs("span",{className:"text-green-500",children:["✓ ",d.available]}):e.jsx("span",{className:"text-red-500",children:"✗"})]}),e.jsxs("li",{children:[d.airConditioning,":"," ",o.optionalFeatures.airConditioning?e.jsxs("span",{className:"text-green-500",children:["✓ ",d.available]}):e.jsx("span",{className:"text-red-500",children:"✗"})]}),e.jsxs("li",{children:[d.towingHook,":"," ",o.optionalFeatures.towingHook?e.jsxs("span",{className:"text-green-500",children:["✓ ",d.available]}):e.jsx("span",{className:"text-red-500",children:"✗"})]}),e.jsxs("li",{children:[d.parkingSensors,":"," ",o.optionalFeatures.parkingSensors?e.jsxs("span",{className:"text-green-500",children:["✓ ",d.available]}):e.jsx("span",{className:"text-red-500",children:"✗"})]})]})]})]})})]})]}),e.jsx("div",{className:"max-w-full fixed bottom-0 left-0 right-0",children:e.jsxs(ce,{variant:"contained",color:"warning",fullWidth:!0,className:"booking-button rounded-xl bg-blue-600 text-white py-4 shadow-lg hover:bg-blue-700 transition duration-300",onClick:Q,children:[e.jsxs("span",{className:" font-extrabold text-2xl",children:[" ",V()," CHF"]})," ",d.procedToBooking," ",e.jsx(O,{})]})})]})]}),document.body):null};export{nt as M};
