import{j as e,b3 as r,cz as l,cP as o,am as c}from"./vendor-BXSwQO8Y.js";import{a as n}from"./index-D5DROGH3.js";const m=()=>{const{translations:t}=n(),s=[{id:1,title:t.selectCar,description:t.selectCarDescription,icon:e.jsx(r,{className:"text-4xl"})},{id:2,title:t.defineBooking,description:t.defineBookingDescription,icon:e.jsx(l,{className:"text-4xl"})},{id:3,title:t.confirmPayment,description:t.confirmPaymentDescription,icon:e.jsx(o,{className:"text-4xl"})}];return e.jsxs("div",{className:"text-black py-10 px-5",children:[e.jsx("h2",{className:"text-center text-2xl font-bold mb-8",children:t.howItWorks}),e.jsx("div",{className:"relative max-w-4xl mx-auto",children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative",children:s.map((i,a)=>e.jsxs(c.div,{initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.5,delay:a*.3},className:"relative flex flex-col items-center bg-white text-white p-6 rounded-lg shadow-lg border-2 border-red-500",children:[e.jsx("div",{className:"flex-shrink-0 mb-4 bg-red-500 rounded-full p-4 shadow-md",children:i.icon}),e.jsxs("div",{className:"mt-2 text-center",children:[e.jsx("h2",{className:"text-lg font-bold text-blue-600",children:i.title}),e.jsx("p",{className:"text-gray-700",children:i.description})]})]},i.id))})})]})};export{m as default};
