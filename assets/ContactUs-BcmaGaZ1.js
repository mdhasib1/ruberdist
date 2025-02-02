import{j as e,r as g,C as p,d as f,F as o}from"./index-l_K3aXtX.js";import{F as j}from"./FAQS-D7SfNcdC.js";import{C as n}from"./Card--jBZTlvJ.js";import{C as m}from"./CardContent-BRhZnVcA.js";import{T as a}from"./Typography-CZDPsgqr.js";import{c}from"./createSvgIcon-DbYB0CI1.js";import{T as l}from"./TextField-CCY5dsj2.js";import{B as b}from"./Button-BNd6gP94.js";import"./index-CSmOUscm.js";import"./iconBase-JB1XClnC.js";import"./createSimplePaletteValueFilter-BtcuYd6h.js";import"./useSlot-ixWl2-B5.js";import"./CircularProgress-CwSTxCM5.js";import"./useControlled-LwTdmPAX.js";import"./Collapse-Ca9pywL9.js";import"./useTheme-mzsciiAq.js";import"./useTheme-BJ2eetf3.js";import"./Portal-DJ62drf7.js";import"./Paper-CyNIrwR6.js";import"./index-BCtXaJ4G.js";import"./Select-D24LhUbi.js";import"./Menu-BKbYykOQ.js";import"./Grow-DcTcdrsK.js";import"./List-DgI9Fo7q.js";import"./Modal-B3u_ui_M.js";import"./isMuiElement-EJEjTxr9.js";const v=c(e.jsx("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"}),"Email"),N=c(e.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"}),"LocationOn"),y=c(e.jsx("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02z"}),"Phone"),w="https://rubertogo.com",J=()=>{const[s,d]=g.useState({name:"",email:"",subject:"",message:""}),t=i=>{const{name:r,value:h}=i.target;d(u=>({...u,[r]:h}))},x=async i=>{i.preventDefault();try{await f.post(`${w}/api/contact/contact`,s),o.success("Message sent successfully!"),d({name:"",email:"",subject:"",message:""})}catch(r){r.response?o.error(r.response.data.message):o.error("Failed to send message. Please try again later.")}};return e.jsxs("div",{className:"max-w-full",children:[e.jsxs("div",{className:"bg-gradient-to-r max-w-full  from-red-500 to-red-600 py-32 px-4 lg:px-16 relative overflow-hidden",children:[e.jsx("svg",{className:"absolute top-0 left-0 w-full h-full opacity-20",viewBox:"0 0 1440 320",preserveAspectRatio:"none",children:e.jsx("path",{fill:"#ffffff",d:"M0,128L48,144C96,160,192,192,288,218.7C384,245,480,267,576,245.3C672,224,768,160,864,128C960,96,1056,96,1152,106.7C1248,117,1344,139,1392,150.7L1440,160L1440,320L0,320Z"})}),e.jsxs("div",{className:"flex flex-col gap-5 lg:flex-row max-w-6xl mx-auto z-10",children:[e.jsxs("div",{className:"lg:w-1/3 space-y-6 mb-10 lg:mb-0",children:[e.jsx(n,{className:"shadow-lg rounded-lg bg-white p-4 transition-transform transform hover:scale-105",children:e.jsxs(m,{children:[e.jsxs(a,{variant:"h5",className:"flex items-center mb-2 text-gray-800",children:[e.jsx(y,{className:"mr-2 text-red-500"}),"Phone"]}),e.jsx(a,{className:"text-gray-600",children:e.jsx("a",{href:"tel:+41767678328",className:"text-blue-500",children:"+41 76 76 78 328"})})]})}),e.jsx(n,{className:"shadow-lg rounded-lg bg-white p-4 transition-transform transform hover:scale-105",children:e.jsxs(m,{children:[e.jsxs(a,{variant:"h5",className:"flex items-center mb-2 text-gray-800",children:[e.jsx(N,{className:"mr-2 text-red-500"}),"Address"]}),e.jsxs(a,{className:"text-gray-600",children:["Ruberto Go",e.jsx("br",{}),"Via Giuseppe Maggi 10, 6963 Lugano",e.jsx("br",{}),"CH-501.1.023.415-5",e.jsx("br",{}),"UID/VAT CHE-327.816.852"]})]})}),e.jsx(n,{className:"shadow-lg rounded-lg bg-white p-4 transition-transform transform hover:scale-105",children:e.jsxs(m,{children:[e.jsxs(a,{variant:"h5",className:"flex items-center mb-2 text-gray-800",children:[e.jsx(v,{className:"mr-2 text-red-500"}),"Email"]}),e.jsx(a,{className:"text-gray-600",children:e.jsx("a",{href:"mailto:info@rubertogo.ch",className:"text-blue-500",children:"info@rubertogo.ch"})})]})})]}),e.jsxs(p.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},className:"lg:w-2/3 bg-white shadow-lg rounded-lg p-8",children:[e.jsx(a,{variant:"h4",className:"text-center font-bold mb-8 text-gray-800",children:"Contact Us"}),e.jsxs("form",{onSubmit:x,className:"space-y-6",children:[e.jsx(l,{label:"Your Name",name:"name",variant:"outlined",fullWidth:!0,required:!0,value:s.name,onChange:t,className:"bg-gray-50"}),e.jsx(l,{label:"Your Email",name:"email",variant:"outlined",type:"email",fullWidth:!0,required:!0,value:s.email,onChange:t,className:"bg-gray-50"}),e.jsx(l,{label:"Subject",name:"subject",variant:"outlined",fullWidth:!0,required:!0,value:s.subject,onChange:t,className:"bg-gray-50"}),e.jsx(l,{label:"Message",name:"message",variant:"outlined",multiline:!0,rows:4,fullWidth:!0,required:!0,value:s.message,onChange:t,className:"bg-gray-50"}),e.jsx(b,{type:"submit",variant:"contained",className:"w-full bg-red-600 hover:bg-red-700 text-white transition duration-300",children:"Send Message"})]})]})]})]}),e.jsx("div",{className:"-mt-10 bg-white  z-50",children:e.jsx(j,{})})]})};export{J as default};
