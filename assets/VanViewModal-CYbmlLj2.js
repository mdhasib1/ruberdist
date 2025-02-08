import{r as x,c as Me,a as Ye,l as $e,a5 as b,j as e,am as w,cy as Be,cz as Ie,cA as Ee,cB as Fe,cC as Ae,cD as ie,cE as oe,B as le,ab as O,bG as fe,cF as J,bX as ce,cG as Re,m as X,bF as de,cH as _e,f as Le,bq as Oe,ax as me}from"./vendor-YnnEx5JS.js";import{a as ze}from"./index-CTn0fMTp.js";import{C as Ue,B as Ve}from"./Carousel-BTBWWSOE.js";import{V as Ge}from"./VanCard-DSvh8nBd.js";import{u as Ke}from"./useVanStore-C63NhtaQ.js";const We="https://www.rubertogo.wedevguru.com",ue=$e(We),Q="https://www.rubertogo.wedevguru.com",xe=(o=[])=>o.flatMap(d=>d.hours.map(h=>({date:new Date(d.date).toISOString().split("T")[0],time:h}))),qe=()=>{const o=[];for(let d=0;d<=23;d++)o.push(`${d<10?"0":""}${d}:00`);return o},S=qe(),Je=(o,d)=>{const h=[],y=new Date(o);for(let f=0;f<d;f++){const p=new Date(y);h.push({date:b(p).format("YYYY-MM-DD"),displayDate:p.toLocaleDateString("en-GB",{day:"numeric",month:"short"}),slots:S}),y.setDate(y.getDate()+1)}return h},Z=(o,d)=>{const h=b(d).format("dddd");return o.dailyPricing?.find(f=>f.day===h)?.pricePerHour||0},Xe=o=>{const d=b().format("dddd"),h=o.dailyPricing?.find(y=>y.day===d);return h?.kilometers?`${h.kilometers} km`:"Not available"},Qe=(o,d)=>{const h=b(d).format("dddd");return o.dailyPricing?.find(f=>f.day===h)?.extraPerKm||0},he=(o={})=>{const d=[],h=new Date,y=h.getDay(),f=h.getHours(),p=h.getMinutes(),M=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][y],k=h.toISOString().split("T")[0];if(o[M]){const{start:A,end:R}=o[M],I=parseInt(A.split(":")[0],10),D=parseInt(R.split(":")[0],10);if(D<I){for(let j=I;j<24;j++)(j<f-1||j===f-1&&p===0)&&d.push({date:k,time:`${j<10?"0":""}${j}:00`});const g=new Date(h);g.setDate(g.getDate()+1);const P=g.toISOString().split("T")[0];for(let j=0;j<D;j++)d.push({date:P,time:`${j<10?"0":""}${j}:00`})}else for(let g=I;g<D;g++)(g<f-1||g===f-1&&p===0)&&d.push({date:k,time:`${g<10?"0":""}${g}:00`})}return d},Ze=({van:o,isOpen:d,onClose:h})=>{const[y,f]=x.useState("21:00"),[p,M]=x.useState({}),[k,A]=x.useState([]),[R,I]=x.useState([]);x.useEffect(()=>{(async()=>{try{const n=(await(await fetch(`${Q}/api/packages/vans/${o._id}`)).json()).filter(r=>r.packagePrices.some(a=>a.price>0));I(n)}catch(i){console.warn("Error fetching rental packages:",i)}})()},[]);const D=(t,i)=>{const s=b(`${t}T${y}`,"YYYY-MM-DDTHH:mm"),n=s.add(p.freeHours,"hour");if(b(`${t}T${i}:00`,"YYYY-MM-DDTHH:mm").isSame(s,b(t).endOf("day"),null,"[)"))return!0;const a=b(t).add(1,"day").format("YYYY-MM-DD");return b(`${a}T${i}`,"YYYY-MM-DDTHH:mm").isSame(s.add(1,"day").startOf("day"),n,null,"[)")},z=new Date,g=7,[P,j]=x.useState(0),[H,_]=x.useState(null),[E,U]=x.useState(null),[ge,ee]=x.useState([]),Y=x.useRef(null),[pe,be]=x.useState(!1),ye=Me(),{translations:l}=ze(),{lang:V}=Ye(),[je,G]=x.useState(!0),[te,K]=x.useState(!1),[se,ae]=x.useState(!1);x.useEffect(()=>{if(o)return(async()=>{try{G(!0);const s=await(await fetch(`${Q}/api/booking-settings/${o._id}`)).json();M({freeHours:s.freeHours??9,minimumPaidHours:s.minimumPaidHours??3}),f(s.freePeriodStart??"21:00");const n=[...xe(s.blockedDateHours),...he(o.restrictedBookingHours)];A(n)}catch(i){console.warn("Error fetching booking settings:",i)}finally{G(!1)}})(),ue.on("bookingSettingsUpdated",({vanId:i,settings:s})=>{if(i===o._id){M(s);const n=[...xe(s.blockedDateHours),...he(o.restrictedBookingHours)];A(n)}}),()=>{ue.off("bookingSettingsUpdated")}},[o]),x.useEffect(()=>{const t=o?._id;o&&d&&(async()=>{try{const s=await fetch(`${Q}/api/vans/${t}/booked-slots`);if(s.status===404){console.warn("No bookings found for van ID"),ee([]);return}const n=await s.json(),a=(Array.isArray(n)?n:n.bookings||[]).flatMap(c=>c.selectedSlots.map(m=>({date:m.date,time:m.time})));ee(a)}catch(s){s.name==="AbortError"?console.warn("Fetch aborted:",s.message):console.warn("Error fetching booked slots:",s)}finally{G(!1)}})()},[o,d]);const we=()=>{const t=new URLSearchParams(ye.search),i=t.get("start_date"),s=t.get("start_time"),n=t.get("end_date"),r=t.get("end_time");return{start_date:i,start_time:s,end_date:n,end_time:r}},Se=[{target:".modal-header",content:"Welcome to the booking modal! Here you can select your desired vehicle and book your time slots.",placement:"bottom"},{target:".time-slot-table",content:"Select your start time by clicking on a time slot.",placement:"top"},{target:".time-slot-table td",content:"Available time slots are highlighted. Click to select an end time.",placement:"top"},{target:".booking-button",content:"Once you have selected your slots, click here to proceed to checkout.",placement:"top"}],u=x.useMemo(()=>Je(z,30),[z]);x.useEffect(()=>{if(d&&k.length===0||k.length>0){const{start_date:t,start_time:i,end_date:s,end_time:n}=we();if(t&&i&&s&&n){const r=Ne({start_date:t,start_time:i,end_date:s,end_time:n});B(r)}}},[d,k]);const Ne=({start_date:t,start_time:i,end_date:s,end_time:n})=>{if(t&&i&&s&&n){const r=u.findIndex(m=>b(m.date).isSame(b(t),"day"));if(r===-1)return[];const a=S.findIndex(m=>m===i),c=b(`${s}T${n}:00`,"YYYY-MM-DDTHH:mm").diff(b(`${t}T${i}:00`,"YYYY-MM-DDTHH:mm"),"hour");return ke(r,a,c)}return[]},ke=(t,i,s)=>{let n=s,r=[];for(let a=t;a<u.length;a++){const c=u[a].slots;for(let m=i;m<c.length;m++){const C=c[m];if(F(u[a].date,C)){if(r.push({date:u[a].date,time:C}),n--,n===0)return r}else r=[],n=s,i=0}i=0}return r},v=(t,i)=>ge.some(s=>s.date===t&&s.time===i),T=(t,i)=>k.some(s=>s.date===t&&s.time===i),$=(t,i)=>{const s=b();return b(`${t}T${i}`,"YYYY-MM-DDTHH:mm").isBefore(s)},F=(t,i)=>!$(t,i)&&!T(t,i)&&!v(t,i),[N,B]=x.useState([]),ne=t=>{if(!H)_(t),B([t]);else{if(E){_(t),U(null),B([t]);return}const i=u.findIndex(m=>m.date===H.date),s=S.findIndex(m=>m===H.time),n=S.findIndex(m=>m===t.time),r=u.findIndex(m=>m.date===t.date);if(r<i||r===i&&n<s){_(t),B([t]);return}let a=!0,c=[];if(H.date===t.date)for(let m=s;m<=n;m++){const C=S[m];if(T(t.date,C)||v(t.date,C)){a=!1;break}c.push({date:t.date,time:C})}else a=He(i,s,r,n,c);a?(B(c),U(t)):(_(t),U(null),B([t]))}},He=(t,i,s,n,r)=>{for(let a=i;a<S.length;a++){const c=S[a];if($(u[t].date,c)||T(u[t].date,c)||v(u[t].date,c))return!1;r.push({date:u[t].date,time:c})}for(let a=t+1;a<s;a++)for(const c of S){if($(u[a].date,c)||T(u[a].date,c)||v(u[a].date,c))return!1;r.push({date:u[a].date,time:c})}for(let a=0;a<=n;a++){const c=S[a];if($(u[s].date,c)||T(u[s].date,c)||v(u[s].date,c))return!1;r.push({date:u[s].date,time:c})}return!0},W=()=>{let t=0,i=0;const s=N.reduce((n,r)=>(n[r.date]||(n[r.date]=[]),n[r.date].push(r),n),{});if(Object.keys(s).forEach(n=>{const r=Z(o,n);s[n].forEach(a=>{D(a.date,a.time)||(t++,i+=r)})}),t<p.minimumPaidHours){let n=0,r=0;const a=N.sort((c,m)=>{const C=new Date(c.date+"T"+c.time),Ce=new Date(m.date+"T"+m.time);return C-Ce});for(const c of a)if(r<p.minimumPaidHours)n+=Z(o,c.date),r++;else break;return n}return i},L=(()=>{let t=0;const i=N.reduce((r,a)=>(r[a.date]||(r[a.date]=[]),r[a.date].push(a),r),{});if(Object.keys(i).forEach(r=>{i[r].forEach(a=>{D(a.date,a.time)||t++})}),t<10)return null;let s=null,n=1/0;return R.forEach(r=>{const a=r.duration*24,c=Math.abs(a-t);a>=t&&c<n&&(s=r,n=c)}),s})();x.useEffect(()=>{d&&L&&!te&&!se&&(K(!0),Y.current&&Y.current.scrollTo({top:0,behavior:"smooth"}))},[L]);const De=()=>{K(!1),ae(!0)},ve=()=>{let t=0;const i=N.reduce((s,n)=>(s[n.date]||(s[n.date]=[]),s[n.date].push(n),s),{});if(Object.keys(i).forEach(s=>{i[s].forEach(n=>{D(n.date,n.time)||t++})}),t<p.minimumPaidHours){let s=0;const n=N.sort((r,a)=>{const c=new Date(r.date+"T"+r.time),m=new Date(a.date+"T"+a.time);return c-m});for(const r of n)if(s<p.minimumPaidHours)D(r.date,r.time)||s++;else break;return Math.max(s,p.minimumPaidHours)}return t},q=(t=null)=>{const i=t?R.find(a=>a._id===t):null;if(ve()<o.minimumHours){Le.error(`You must select at least ${o.minimumHours} paid hour(s) for this van.`);return}const n={selectedSlots:N,totalPrice:i?i?.packagePrices?.[0]?.price:W(),vanDetails:o,packageId:i?i._id:null};localStorage.setItem("bookingData",JSON.stringify(n));const r=`/:${V}/create-booking`;window.location.href=r},Te=()=>{j(t=>Math.max(t-g,0)),Y.current&&Y.current.scrollTo({top:0,behavior:"smooth"})},Pe=()=>{j(t=>Math.min(t+g,u.length-g)),Y.current&&Y.current.scrollTo({top:0,behavior:"smooth"})},re=t=>{const i=N.filter(r=>D(r.date,r.time));N.filter(r=>!D(r.date,r.time));const s=Math.max(0,N.length-p.minimumPaidHours),n=i.findIndex(r=>r.date===t.date&&r.time===t.time);return n>=0&&n<s};return je?e.jsx("div",{className:"flex items-center justify-center h-screen bg-gray-100",children:e.jsx(w.div,{initial:{rotate:0},animate:{rotate:360},transition:{repeat:1/0,duration:1.5,ease:"linear"},className:"w-20 h-20 border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-blue-500 rounded-full"})}):d?Be.createPortal(e.jsxs(w.div,{className:"relative",children:[e.jsx(Ie,{steps:Se,run:pe,continuous:!0,showSkipButton:!0,callback:t=>{(t.status==="finished"||t.status==="skipped")&&be(!1)},styles:{options:{zIndex:1e4,backgroundColor:"#fff",color:"#333",arrowColor:"#fff",primaryColor:"#007bff",textColor:"#333",beaconSize:20,spotlightPadding:10,spotlightBorderRadius:8}}}),e.jsxs(w.div,{className:"fixed inset-0 bg-gray-800 bg-opacity-70 flex max-w-full items-center justify-center z-50 px-2 sm:px-4",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[e.jsxs(w.div,{className:"bg-white p-8 sm:p-5 rounded-2xl shadow-2xl w-full sm:max-w-6xl sm:h-[80vh] h-[90vh]  overflow-y-auto relative",ref:Y,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.5,ease:"easeInOut"},children:[e.jsx(w.button,{onClick:h,className:"absolute z-40 top-4 right-4 text-red-500 text-2xl rounded-full shadow-md hover:bg-gray-100 p-2",whileHover:{scale:1.1},whileTap:{scale:.9},children:e.jsx(Ee,{})}),e.jsx(Ue,{images:o.images}),L&&e.jsx(e.Fragment,{children:e.jsx(Ve,{betterPackage:L,isOpen:te,onClose:De,handleBooking:q})}),e.jsxs(Fe,{children:[e.jsxs(Ae,{className:"flex text-center items-center gap-5 p-5 justify-center border-0",children:[e.jsx(ie,{className:"py-2 bg-blue-100 sm:py-4 flex-1 cursor-pointer font-semibold text-lg sm:text-xl",children:l.timeTable}),e.jsx(ie,{className:"py-2 sm:py-4 bg-blue-100 flex-1 cursor-pointer font-semibold text-lg sm:text-xl details-tab",children:l.details})]}),e.jsxs(oe,{children:[e.jsxs(w.div,{className:"text-center mb-4 sm:mb-6",initial:{y:50,opacity:0},animate:{y:0,opacity:1},transition:{duration:.7},children:[e.jsx("h1",{className:"text-xl sm:text-3xl font-bold text-gray-800 mt-5",children:l.modalTitle}),e.jsx("h3",{className:"text-lg sm:text-2xl text-gray-700",children:o.name[V]||o.name.en}),e.jsx("p",{className:"text-gray-500 text-xl",children:l.modalSubtitle}),se&&e.jsx("div",{className:"text-center mt-4",children:e.jsx(le,{variant:"outlined",color:"warning",onClick:()=>{K(!0),ae(!1)},children:"Risparmia con i pacchetti"})}),e.jsxs("button",{onClick:q,className:"w-full bg-blue-600 py-3 sm:py-4 text-white text-lg sm:text-xl rounded-lg mt-4 shadow-lg",children:[l.priceLabel,": ",W()," CHF"]})]}),e.jsxs(w.div,{className:"w-full overflow-x-auto sm:overflow-hidden",initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.3},children:[e.jsx("div",{className:"hidden sm:block max-w-full overflow-x-auto time-slot-table",children:e.jsxs("table",{className:"max-w-full border-separate border-spacing-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"border p-2 sm:p-4 sticky left-0 bg-white text-base sm:text-lg font-semibold text-gray-600",style:{zIndex:10},children:l.date}),S.map((t,i)=>e.jsx("th",{className:"border p-2 sm:p-4 left-0 bg-white text-base sm:text-lg font-semibold text-gray-600",children:t},i))]})}),e.jsx("tbody",{children:u.slice(P,P+g).map((t,i)=>e.jsxs("tr",{children:[e.jsx("td",{className:"border p-2 sm:p-4 sticky left-0 bg-white font-semibold text-gray-700",children:t.displayDate}),S.map((s,n)=>{const r=H&&!E&&t.date===H.date?S.findIndex(a=>a===H.time)+1:null;return e.jsxs(w.td,{className:`border text-center cursor-pointer  p-2 sm:p-4 transition-all duration-300 ${N.some(a=>a.date===t.date&&a.time===s)?"bg-green-500 text-white font-bold":T(t.date,s)?"bg-red-600 text-white":v(t.date,s)?"bg-gray-400 text-center text-white":$(t.date,s)?"bg-gray-300 cursor-not-allowed":"bg-white"}`,whileHover:{scale:F(t.date,s)?1.05:1},whileTap:{scale:.95},onClick:()=>F(t.date,s)&&ne({date:t.date,time:s}),children:[H&&!E&&r===n&&e.jsx(w.span,{className:"relative inset-0 flex text-center justify-center items-center",initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},transition:{duration:.5},children:e.jsx(O,{className:"text-yellow-400 text-3xl animate-bounce",title:"Select end time"})}),T(t.date,s)?e.jsx(fe,{className:"text-red-500 text-4xl font-extrabold"}):v(t.date,s)?e.jsx(J,{className:"text-white text-center"}):N.some(a=>a.date===t.date&&a.time===s)?re({date:t.date,time:s})?e.jsx("span",{className:"text-white",children:l.freeLabel}):e.jsx(ce,{className:"text-white text-4xl font-extrabold"}):null]},n)})]},i))})]})}),e.jsx("div",{className:"block sm:hidden",children:u.slice(P,P+g).map((t,i)=>e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"text-white text-center bg-green-800 p-5 font-bold text-lg mb-2",children:[l.date," ",t.displayDate]}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:S.map((s,n)=>{const r=H&&!E&&t.date===H.date?S.findIndex(a=>a===H.time)+1:null;return e.jsxs(w.div,{className:`p-4 text-center flex flex-col items-center justify-center border transition-all duration-300 rounded-lg ${N.some(a=>a.date===t.date&&a.time===s)?"bg-green-500 text-white font-bold":T(t.date,s)?"bg-red-600 text-white":v(t.date,s)?"bg-gray-500 text-white":$(t.date,s)?"bg-gray-300 cursor-not-allowed":"bg-white"}`,whileHover:{scale:F(t.date,s)?1.05:1},whileTap:{scale:.95},onClick:()=>F(t.date,s)&&ne({date:t.date,time:s}),children:[s,H&&!E&&r===n&&e.jsxs(w.div,{className:"relative flex items-center justify-center",initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},transition:{duration:.5},children:[e.jsx(O,{className:"text-yellow-400 text-xl animate-bounce"}),e.jsx("div",{className:"absolute top-full mt-2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg transform -translate-x-1/2",children:"Select an end time."})]}),T(t.date,s)?e.jsx(J,{className:"text-white"}):v(t.date,s)?e.jsx(J,{className:"text-white"}):N.some(a=>a.date===t.date&&a.time===s)?re({date:t.date,time:s})?e.jsx("span",{className:"text-white",children:l.freeLabel}):e.jsx(ce,{className:"text-white text-4xl font-extrabold"}):null]},n)})})]},i))})]}),e.jsxs("div",{className:"flex justify-between mt-4 sm:mt-6",children:[e.jsx(w.button,{onClick:Te,className:"text-orange-500 text-lg p-2",disabled:P===0,whileHover:{scale:1.05},whileTap:{scale:.95},children:e.jsx(Re,{size:24})}),e.jsx(w.button,{onClick:Pe,className:"text-orange-500 text-lg p-2",disabled:P+g>=u.length,whileHover:{scale:1.05},whileTap:{scale:.95},children:e.jsx(O,{size:24})})]})]}),e.jsx(oe,{children:e.jsxs(w.div,{className:"text-left p-6 bg-white rounded-lg shadow-md",initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[e.jsx("h2",{className:"text-3xl font-bold mb-4 text-gray-800",children:l.vehicleDetails}),e.jsxs("div",{className:"p-4 rounded-lg border-b-2 border-t-2 border-dashed border-red-300 ",children:[e.jsxs("h3",{className:"text-2xl font-semibold mb-2",children:[" ",o.name[V]||o.name.en]}),e.jsxs("p",{className:"text-red-500 font-bold text-xl mt-2",children:[l.priceLabel,":"," ",e.jsxs("span",{className:"text-green-600",children:[Z(o)," CHF ",l.perHour]})]}),e.jsxs("p",{className:"text-red-500 font-bold text-xl mt-2",children:[l.exprice," ",e.jsxs("span",{className:"text-green-600",children:[Qe(o)," CHF"]})]}),e.jsxs(X,{variant:"body2",className:"text-center text-sm text-green-500 flex items-center  gap-2",children:[e.jsx(de,{})," ",l.includes," ",Xe(o)]}),o?.preAuthorizationAmount>0?e.jsxs(X,{variant:"body2",className:"ml-2 text-green-500 font-extrabold text-left flex items-center gap-2",children:[e.jsx(de,{}),l.securityDiposit," ",o.preAuthorizationAmount," CHF"]}):e.jsxs(X,{variant:"body2",className:"ml-2 text-red-500 font-extrabold text-left flex items-center gap-2",children:[e.jsx(_e,{}),l.nosecurityDiposit]})]}),e.jsxs("div",{className:" flex items-center justify-between p-4 border-b-2 border-dashed border-red-300 rounded-lg  ",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-2",children:l.externalDimensions}),e.jsxs("ul",{className:"list-disc list-inside text-gray-600",children:[e.jsxs("li",{children:[l.length,":"," ",e.jsx("span",{className:"font-semibold",children:o.externalDimensions.length})]}),e.jsxs("li",{children:[l.width,":"," ",e.jsx("span",{className:"font-semibold",children:o.externalDimensions.width})]}),e.jsxs("li",{children:[l.Height,":"," ",e.jsx("span",{className:"font-semibold",children:o.externalDimensions.height})]})]})]}),e.jsx("div",{children:e.jsx("img",{src:"/externalsize.png",width:120,alt:"",srcset:""})})]}),e.jsxs("div",{className:" flex items-center justify-between p-4 rounded-lg border-b-2 border-dashed border-red-300 ",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-2",children:l.internalDimensions}),e.jsxs("ul",{className:"list-disc list-inside text-gray-600",children:[e.jsxs("li",{children:[l.length,":"," ",e.jsx("span",{className:"font-semibold",children:o.internalDimensions.length})]}),e.jsxs("li",{children:[l.width,":"," ",e.jsx("span",{className:"font-semibold",children:o.internalDimensions.width})]}),e.jsxs("li",{children:[l.Height,":"," ",e.jsx("span",{className:"font-semibold",children:o.internalDimensions.height})]})]})]}),e.jsx("div",{children:e.jsx("img",{src:"/internalsize.png",width:120,alt:"",srcset:""})})]}),e.jsxs("div",{className:" p-4 rounded-lg border-b-2 border-dashed border-red-300",children:[e.jsx("h3",{className:"text-xl font-bold mb-2",children:l.weight}),e.jsxs("ul",{className:"list-disc list-inside text-gray-600",children:[e.jsxs("li",{children:[l.empty,":"," ",e.jsx("span",{className:"font-semibold",children:o.weight.empty})]}),e.jsxs("li",{children:[l.maxLoad,":"," ",e.jsx("span",{className:"font-semibold",children:o.weight.maxLoad})]})]})]}),e.jsxs("div",{className:"p-4 rounded-lg border-b-2 border-dashed border-red-300",children:[e.jsx("h3",{className:"text-xl font-bold mb-2",children:l.optionalFeatures}),e.jsxs("ul",{className:"list-disc list-inside text-gray-600",children:[e.jsxs("li",{children:[l.roofRack,":"," ",o.optionalFeatures.roofRack?e.jsxs("span",{className:"text-green-500",children:["✓ ",l.available]}):e.jsx("span",{className:"text-red-500",children:"✗"})]}),e.jsxs("li",{children:[l.airConditioning,":"," ",o.optionalFeatures.airConditioning?e.jsxs("span",{className:"text-green-500",children:["✓ ",l.available]}):e.jsx("span",{className:"text-red-500",children:"✗"})]}),e.jsxs("li",{children:[l.towingHook,":"," ",o.optionalFeatures.towingHook?e.jsxs("span",{className:"text-green-500",children:["✓ ",l.available]}):e.jsx("span",{className:"text-red-500",children:"✗"})]}),e.jsxs("li",{children:[l.parkingSensors,":"," ",o.optionalFeatures.parkingSensors?e.jsxs("span",{className:"text-green-500",children:["✓ ",l.available]}):e.jsx("span",{className:"text-red-500",children:"✗"})]})]})]})]})})]})]}),e.jsx("div",{className:"max-w-full fixed bottom-0 left-0 right-0",children:e.jsxs(le,{variant:"contained",color:"warning",fullWidth:!0,className:"booking-button rounded-xl bg-blue-600 text-white py-4 shadow-lg hover:bg-blue-700 transition duration-300",onClick:q,children:[e.jsxs("span",{className:" font-extrabold text-2xl",children:[" ",W()," CHF"]})," ",l.procedToBooking," ",e.jsx(O,{})]})})]})]}),document.body):null},it=({isOpenVanModal:o,onCloseVanModal:d})=>{const{fetchVans:h,vans:y}=Ke(),[f,p]=x.useState(null);x.useEffect(()=>{y.length===0&&h()},[]);const M=async k=>{p({...k})};return f&&d(),e.jsxs("div",{className:"container m-auto pb-10 p-5",children:[e.jsx(Oe,{open:o,onClose:d,"aria-labelledby":"vans-modal-title","aria-describedby":"vans-modal-description",children:e.jsx("div",{className:"flex items-center justify-center min-h-screen bg-black bg-opacity-50",children:e.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-lg max-w-5xl h-[80vh] overflow-y-scroll w-full relative",children:[e.jsx("button",{className:" absolute right-2 top-2 text-red-500 text-2xl hover:bg-red-500 hover:text-white rounded-full p-2 ",onClick:d,children:e.jsx(fe,{})}),e.jsx("div",{className:"container m-auto pb-10 p-5",children:e.jsx(me,{container:!0,spacing:1,justifyContent:"center",alignItems:"center",children:y.map(k=>e.jsx(me,{item:!0,xs:12,sm:6,md:6,lg:6,xl:6,children:e.jsx(Ge,{van:k,onSelect:M})},k._id))})})]})})}),f&&e.jsx(Ze,{isOpen:!!f,onClose:()=>p(null),van:f})]})};export{it as V};
