import{r,j as e,cO as n}from"./vendor-BXSwQO8Y.js";import{a as d}from"./index-D5DROGH3.js";const u=[{count:"99",suffix:"%",title:"Positive reviews"},{count:"700",title:"Bookings in the first 6 months"},{count:"2",title:"Times roadside assistance intervened"}],l=({item:t})=>{const s=parseInt(t.count,10),[i,a]=r.useState(0),o=r.useRef(null);return r.useEffect(()=>(o.current=setInterval(()=>{a(c=>c<s?Math.min(c+1,s):(clearInterval(o.current),c))},50),()=>clearInterval(o.current)),[s]),e.jsxs("div",{className:"flex flex-col items-center bg-opacity-10 backdrop-blur-md p-6 rounded-lg transition-transform transform hover:scale-105 duration-300",children:[e.jsxs("h2",{className:"font-bold text-4xl md:text-[50px] leading-none mb-2 text-white",children:[i,t.suffix||""]}),e.jsx("p",{className:"text-center text-white leading-none uppercase tracking-wider",children:e.jsx("em",{children:t.title})})]})};l.propTypes={item:n.shape({count:n.string.isRequired,title:n.string.isRequired,suffix:n.string}).isRequired};const f=()=>{const{translations:t}=d(),s=r.useMemo(()=>t.whyClientLoveUs,[t]);return e.jsxs("section",{className:"happy-client-section relative text-white overflow-hidden z-[1] py-20",children:[e.jsx("div",{className:"absolute inset-0 -z-[1] bg-gradient-to-r from-[#ff0707] to-[#ff4500] opacity-90"}),e.jsxs("div",{className:"container mx-auto px-4",children:[e.jsx("h1",{className:"text-3xl md:text-5xl font-bold text-center mb-10",children:s}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8",children:u.map((i,a)=>e.jsx(l,{item:i},a))})]})]})};export{f as default};
