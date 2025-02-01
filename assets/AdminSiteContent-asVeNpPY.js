import{r as i,j as e,d as y}from"./index-DrMvIKwq.js";import{a as D}from"./index-DklELUdR.js";import{j as W,k,l as B,m as w,n as _}from"./index-BcTYs67B.js";import{a as f,I as S,T as d}from"./TextField-DvirranI.js";import{S as N}from"./Select-DJdQC6kX.js";import{M as l}from"./MenuItem-8srXigvG.js";import{C}from"./CircularProgress-B5agUqRt.js";import{I as $}from"./IconButton-BGQYt6kH.js";import{B as I}from"./Button-xUQB_oWD.js";import"./iconBase-BBLIWj70.js";import"./createSimplePaletteValueFilter-zjTMkHT-.js";import"./useSlot-BWhg9WXJ.js";import"./isMuiElement-LlRumiQy.js";import"./Menu-ComLaOXz.js";import"./Portal-BMjECl0g.js";import"./Grow-B1pBNw31.js";import"./useTheme-C3_UZ2QD.js";import"./useTheme-CepysXf6.js";import"./List-BLDT_Zsz.js";import"./Paper-C4BDKHkT.js";import"./Modal-CfkloFEy.js";import"./useControlled-Bio4-BJG.js";import"./createSvgIcon-CgYohZ5P.js";import"./index-pDPmJGlT.js";import"./listItemTextClasses--ZWm_3O6.js";import"./dividerClasses-CP17GPn_.js";const ue=()=>{var v;const[c,L]=i.useState("en"),[r,T]=i.useState("homepage"),[n,o]=i.useState({}),[u,m]=i.useState(!1),[b,h]=i.useState("");i.useEffect(()=>{(async()=>{m(!0);try{const a=await y.get(`/api/site-content/${r}/${c}`);o(a.data.content||{})}catch(a){console.error("Error fetching content",a)}finally{m(!1)}})()},[c,r]);const g=(t,a)=>{o(s=>({...s,[t]:a}))},j=(t,a,s,p)=>{const x=[...n[t]];x[a]={...x[a],[s]:p},o(M=>({...M,[t]:x}))},A=t=>{const a=[...n[t]||[]];a.push({title:"",description:""}),o(s=>({...s,[t]:a}))},E=(t,a)=>{const s=[...n[t]];s.splice(a,1),o(p=>({...p,[t]:s}))},F=async()=>{m(!0);try{await y.post(`/api/site-content/${c}/${r}`,n),h("Content saved successfully")}catch(t){console.error("Error saving content",t),h("Error saving content")}finally{m(!1)}};return e.jsxs("div",{className:"p-8 bg-gray-100 min-h-screen",children:[e.jsxs("h1",{className:"text-3xl font-bold mb-6 text-center text-gray-800",children:["Admin - Edit Site Content ",e.jsx(D,{className:"inline ml-2 text-indigo-600"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",children:[e.jsxs(f,{fullWidth:!0,children:[e.jsxs(S,{id:"language-select-label",children:[e.jsx(W,{className:"mr-2"})," Language"]}),e.jsxs(N,{labelId:"language-select-label",value:c,onChange:t=>L(t.target.value),children:[e.jsxs(l,{value:"en",children:[e.jsx("span",{className:"fi fi-gb mr-2"})," English"]}),e.jsxs(l,{value:"de",children:[e.jsx("span",{className:"fi fi-de mr-2"})," German"]}),e.jsxs(l,{value:"fr",children:[e.jsx("span",{className:"fi fi-fr mr-2"})," French"]}),e.jsxs(l,{value:"it",children:[e.jsx("span",{className:"fi fi-it mr-2"})," Italian"]})]})]}),e.jsxs(f,{fullWidth:!0,children:[e.jsxs(S,{id:"section-select-label",children:[e.jsx(k,{className:"mr-2"})," Section"]}),e.jsxs(N,{labelId:"section-select-label",value:r,onChange:t=>T(t.target.value),children:[e.jsx(l,{value:"homepage",children:"Homepage"}),e.jsx(l,{value:"about_us",children:"About Us"}),e.jsx(l,{value:"contact_us",children:"Contact Us"}),e.jsx(l,{value:"services",children:"Services"})]})]})]}),u?e.jsx("div",{className:"flex justify-center my-8",children:e.jsx(C,{})}):e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[O[r].map(t=>e.jsx("div",{className:"mb-6",children:t.type==="text"?e.jsx(d,{label:t.label,variant:"outlined",fullWidth:!0,value:n[t.name]||"",onChange:a=>g(t.name,a.target.value)}):t.type==="textarea"?e.jsx(d,{label:t.label,variant:"outlined",multiline:!0,rows:4,fullWidth:!0,value:n[t.name]||"",onChange:a=>g(t.name,a.target.value)}):null},t.name)),r==="homepage"&&e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Features"}),(v=n.features)==null?void 0:v.map((t,a)=>e.jsxs("div",{className:"mb-6 flex items-center space-x-4",children:[e.jsx(d,{label:"Feature Title",variant:"outlined",fullWidth:!0,value:t.title||"",onChange:s=>j("features",a,"title",s.target.value)}),e.jsx(d,{label:"Feature Description",variant:"outlined",fullWidth:!0,value:t.description||"",onChange:s=>j("features",a,"description",s.target.value)}),e.jsx($,{color:"secondary",onClick:()=>E("features",a),children:e.jsx(B,{})})]},a)),e.jsx(I,{variant:"contained",color:"primary",startIcon:e.jsx(w,{}),onClick:()=>A("features"),className:"bg-indigo-600 hover:bg-indigo-500 shadow-md mb-6",children:"Add Feature"})]})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx(I,{variant:"contained",color:"primary",startIcon:e.jsx(_,{}),onClick:F,disabled:u,className:"bg-indigo-600 hover:bg-indigo-500 shadow-md",children:u?e.jsx(C,{size:20}):"Save"})}),b&&e.jsx("p",{className:"text-center text-green-600 mt-4",children:b})]})},O={homepage:[{name:"title",label:"Title",type:"text"},{name:"subtitle",label:"Subtitle",type:"text"},{name:"startDateLabel",label:"Start Date Label",type:"text"},{name:"startTimeLabel",label:"Start Time Label",type:"text"},{name:"endDateLabel",label:"End Date Label",type:"text"},{name:"endTimeLabel",label:"End Time Label",type:"text"},{name:"bookButtonLabel",label:"Book Button Label",type:"text"}],about_us:[{name:"title",label:"Title",type:"text"},{name:"subtitle",label:"Subtitle",type:"text"},{name:"description",label:"Description",type:"textarea"}],contact_us:[{name:"title",label:"Title",type:"text"},{name:"subtitle",label:"Subtitle",type:"text"},{name:"address",label:"Address",type:"text"},{name:"phone",label:"Phone",type:"text"},{name:"email",label:"Email",type:"text"}],services:[{name:"title",label:"Title",type:"text"},{name:"subtitle",label:"Subtitle",type:"text"},{name:"features",label:"Features",type:"textarea"}]};export{ue as default};
