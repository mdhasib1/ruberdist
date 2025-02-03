import{r as n,u as F,a as I,j as e,k as S,m as z,n as w,cm as j,aK as l,a9 as c,B as O,aL as C,b as N}from"./vendor-DTHYb0ru.js";const P="https://www.rubertogo.com",q=()=>{const[r,v]=n.useState({firstName:"",lastName:"",email:"",phone:"",address:"",timeZone:""}),[i,u]=n.useState(["","","",""]),[b,D]=n.useState(1),[h,p]=n.useState(""),[f,y]=n.useState(""),[o,g]=n.useState(!1),x=n.useRef([]);F();const{lang:E}=I();n.useEffect(()=>{v(a=>({...a,timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone}))},[]);const m=a=>{const{name:t,value:s}=a.target;v({...r,[t]:s})},R=(a,t)=>{const{value:s}=a.target;if(s.length===1){const d=[...i];d[t]=s,u(d),t<i.length-1&&s&&x.current[t+1].focus()}else if(s===""){const d=[...i];d[t]="",u(d)}},W=(a,t)=>{if(t.key==="Backspace")if(i[a]){const s=[...i];s[a]="",u(s)}else a>0&&x.current[a-1].focus()},T=a=>{const t=a.clipboardData.getData("Text").slice(0,4);if(t.length===4){const s=t.split("");u(s),x.current[3].focus()}},A=async a=>{a.preventDefault(),p(""),y(""),g(!0);try{const t=await N.post(`${P}/api/register`,r);y(t.data.message),D(2)}catch(t){p(t.response?.data.message||"Registration failed")}finally{g(!1)}},B=async a=>{a.preventDefault(),p(""),g(!0);const t=i.join("");try{const s=await N.post(`${P}/api/verify-otp`,{email:r.email,otp:t});console.log(s.data),y("Registration and OTP verification successful!"),u(["","","",""])}catch(s){p(s.response?.data.message||"OTP verification failed")}finally{g(!1)}};return e.jsx("div",{className:"max-w-full flex min-h-screen items-center justify-center",children:e.jsx(S,{className:"h-[300px] items-center max-w-md m-auto",children:e.jsxs(z.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[b===1&&e.jsxs(e.Fragment,{children:[e.jsx(w,{variant:"h4",align:"center",color:"primary",gutterBottom:!0,children:"Admin Registration"}),h&&e.jsx(j,{severity:"error",sx:{mb:2},children:h}),f&&e.jsx(j,{severity:"success",sx:{mb:2},children:f}),e.jsxs("form",{onSubmit:A,children:[e.jsxs(l,{container:!0,spacing:2,children:[e.jsx(l,{item:!0,xs:12,sm:6,children:e.jsx(c,{label:"First Name",name:"firstName",fullWidth:!0,variant:"outlined",value:r.firstName,onChange:m,required:!0})}),e.jsx(l,{item:!0,xs:12,sm:6,children:e.jsx(c,{label:"Last Name",name:"lastName",fullWidth:!0,variant:"outlined",value:r.lastName,onChange:m,required:!0})}),e.jsx(l,{item:!0,xs:12,children:e.jsx(c,{label:"Email",name:"email",type:"email",fullWidth:!0,variant:"outlined",value:r.email,onChange:m,required:!0})}),e.jsx(l,{item:!0,xs:12,children:e.jsx(c,{label:"Phone",name:"phone",type:"tel",fullWidth:!0,variant:"outlined",value:r.phone,onChange:m})}),e.jsx(l,{item:!0,xs:12,children:e.jsx(c,{label:"Address",name:"address",fullWidth:!0,variant:"outlined",value:r.address,onChange:m})})]}),e.jsx(O,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,sx:{mt:3,py:1.5,fontSize:"1rem",fontWeight:"bold"},startIcon:o&&e.jsx(C,{size:24}),disabled:o,children:o?"Registering...":"Register"})]})]}),b===2&&e.jsxs(e.Fragment,{children:[e.jsx(w,{variant:"h4",align:"center",color:"primary",gutterBottom:!0,children:"Verify OTP"}),h&&e.jsx(j,{severity:"error",sx:{mb:2},children:h}),f&&e.jsx(j,{severity:"success",sx:{mb:2},children:f}),e.jsxs("form",{onSubmit:B,children:[e.jsx(S,{display:"flex",justifyContent:"center",alignItems:"center",gap:2,mt:2,children:i.map((a,t)=>e.jsx(c,{variant:"outlined",inputProps:{maxLength:1,style:{textAlign:"center",fontSize:"1.5rem",width:"3rem",height:"3rem"}},value:a,onChange:s=>R(s,t),onKeyDown:s=>W(t,s),onPaste:t===0?T:void 0,required:!0,inputRef:s=>x.current[t]=s},t))}),e.jsx(O,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,sx:{mt:3,py:1.5,fontSize:"1rem",fontWeight:"bold"},startIcon:o&&e.jsx(C,{size:24}),disabled:o,children:o?"Verifying...":"Verify OTP"})]})]})]})})})};export{q as default};
