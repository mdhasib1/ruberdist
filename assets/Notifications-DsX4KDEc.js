import{a as u,r as c,u as g,b as i,j as s,f as k,g as y,D as j,p as b,Z as f,L as w,a4 as $}from"./vendor-CRYhOL6r.js";const n="https://www.rubertogo.com",C=()=>{const{lang:d}=u(),[l,r]=c.useState([]),p=g();c.useEffect(()=>{x()},[]);const x=async()=>{try{const a=localStorage.getItem("accessToken"),e=await i.get(`${n}/api/notifications`,{headers:{Authorization:`Bearer ${a}`},withCredentials:!0});r(e.data)}catch(a){console.error("Failed to fetch notifications",a)}},o=async a=>{try{const e=localStorage.getItem("accessToken");await i.put(`${n}/api/notifications/${a}/read`,{},{headers:{Authorization:`Bearer ${e}`},withCredentials:!0}),r(m=>m.map(t=>t._id===a?{...t,read:!0}:t))}catch(e){console.error("Failed to mark notification as read",e)}},h=a=>{o(a),p(`/${d}/notification/${a}`)};return s.jsxs(k,{sx:{padding:"20px",maxWidth:"800px",margin:"auto"},children:[s.jsx(y,{variant:"h4",sx:{mb:2},children:"Notifiche"}),s.jsx(j,{}),s.jsx(b,{children:l.map(a=>s.jsxs(f,{button:!0,onClick:()=>h(a._id),sx:{opacity:a.read?.5:1,"&:hover":{backgroundColor:"rgba(0, 0, 0, 0.05)"},padding:"16px",borderBottom:"1px solid #ddd"},children:[s.jsx(w,{primary:a.title,secondary:a.message,sx:{color:a.read?"#888":"#000"}}),!a.read&&s.jsx($,{variant:"outlined",color:"primary",onClick:e=>{e.stopPropagation(),o(a._id)},children:"Segna come letto"})]},a._id))})]})};export{C as default};
