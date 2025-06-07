import{u as $,r as l,R as z,j as e}from"./index-DUkSm6Jp.js";import{a as x,b as N}from"./index.esm-DJ4Q8IaA.js";import{C as t}from"./CCol-CGDO2tph.js";import{C as J,a as K}from"./CCardBody-ChC1EvYi.js";import{C as O}from"./CCardHeader-6CTHiybS.js";import{C as r}from"./CRow-Cp8aa9re.js";import{C as W,a as Y}from"./CInputGroupText-DWpfiH-J.js";import{c as V,a as _,b as q,d as R,e as Q,f as X}from"./cil-trash-C5ZtASwZ.js";import{C as Z}from"./CFormInput-CnnhN-XC.js";import{C as ee,a as se,b as v,c as b,d as te,e as u}from"./CTable-DlIbXHEF.js";import{C as ae}from"./CFormSelect-D5scAYkI.js";import{C as ne,a as w}from"./CPaginationItem-NxwcV55y.js";import{C as ie,a as ce,b as le,c as re}from"./CModalHeader-DyjAK4lh.js";import{C as de}from"./DefaultLayout-292VgQNI.js";import"./CFormControlWrapper-COpEy8ds.js";import"./CFormControlValidation-D-ruDJFL.js";import"./CFormLabel-BL6vc5ac.js";import"./logo-Doo4y21f.js";import"./cil-user-Ddrdy7PS.js";import"./cil-lock-locked-DmxpJbVL.js";const ke=()=>{const M=$(),[S]=l.useState([{id:1,name:"Customer Registration",code:"CUST001",status:"Active",createdAt:"2024-01-15 09:30 AM",createdBy:"John Doe",updatedAt:"2024-12-20 4:25 PM",updatedBy:"Ram Kumar"},{id:2,name:"Payment Processing",code:"PAY002",status:"Inactive",createdAt:"2024-02-10 11:15 AM",createdBy:"Jane Smith",updatedAt:"2024-12-18 6:30 PM",updatedBy:"Kumar"},{id:3,name:"Order Management",code:"ORD003",status:"Active",createdAt:"2024-03-05 11:20 AM",createdBy:"Mike Johnson",updatedAt:"2024-12-19 11:45 PM",updatedBy:"Siva"},{id:4,name:"Inventory Update",code:"INV004",status:"Inactive",createdAt:"2024-04-12 08:45 AM",createdBy:"Sarah Wilson",updatedAt:"2024-12-17 3:20 PM",updatedBy:"Ravi"},{id:5,name:"Email Notification",code:"EML005",status:"Active",createdAt:"2024-05-18 08:45 AM",createdBy:"David Chen",updatedAt:"2024-12-21 07:45 AM",updatedBy:"Ravi"},{id:6,name:"Data Backup",code:"BAK006",status:"Active",createdAt:"2024-06-22 09:45 AM",createdBy:"Lisa Anderson",updatedAt:"2024-12-20 10:45 AM",updatedBy:"Suresh"},{id:7,name:"Report Generation",code:"RPT007",status:"Inactive",createdAt:"2024-07-08 09:45 AM",createdBy:"Robert Taylor",updatedAt:"2024-12-16 02:45 AM",updatedBy:"Dinesh"},{id:8,name:"Security Scan",code:"SEC008",status:"Active",createdAt:"2024-08-14 04:45 AM",createdBy:"Emily Davis",updatedAt:"2024-12-22 09:45 AM",updatedBy:"Dinesh"},{id:9,name:"System Maintenance",code:"SYS009",status:"Active",createdAt:"2024-09-03 02:45 AM",createdBy:"Tom Brown",updatedAt:"2024-12-19 09:45 AM",updatedBy:"Suresh"},{id:10,name:"Data Migration",code:"MIG010",status:"Inactive",createdAt:"2024-10-11 09:45 AM",createdBy:"Anna White",updatedAt:"2024-12-15 09:45 AM",updatedBy:"Praveen"},{id:11,name:"API Integration",code:"API011",status:"Active",createdAt:"2024-11-07 01:45 AM",createdBy:"Chris Green",updatedAt:"2024-12-21 09:45 PM",updatedBy:"Praveen"},{id:12,name:"Log Cleanup",code:"LOG012",status:"Inactive",createdAt:"2024-12-01 11:45 AM",createdBy:"Mark Wilson",updatedAt:"2024-12-18 09:45 AM",updatedBy:"Praveen"}]),[o,L]=l.useState(""),[d,j]=l.useState(1),[n,E]=l.useState(5),[i,G]=l.useState({key:null,direction:"asc"}),[F,B]=l.useState(!1),[m,P]=l.useState(""),[c,k]=l.useState(null),A=l.useMemo(()=>S.filter(s=>s.name.toLowerCase().includes(o.toLowerCase())||s.code.toLowerCase().includes(o.toLowerCase())||s.status.toLowerCase().includes(o.toLowerCase())),[S,o]),h=l.useMemo(()=>i.key?[...A].sort((s,a)=>s[i.key]<a[i.key]?i.direction==="asc"?-1:1:s[i.key]>a[i.key]?i.direction==="asc"?1:-1:0):A,[A,i]),p=n==="all"?1:Math.ceil(h.length/n),f=n==="all"?0:(d-1)*n,I=n==="all"?h:h.slice(f,f+n);z.useEffect(()=>{j(1)},[o]);const D=(s,a)=>{s==="info"||s==="delete"?(P(s),k(a),B(!0)):s==="edit"&&console.log("Edit action for process:",a)},C=()=>{B(!1),P(""),k(null)},H=()=>{C()},g=s=>{G(a=>({key:s,direction:a.key===s&&a.direction==="asc"?"desc":"asc"}))},y=s=>i.key!==s?null:e.jsx(x,{icon:i.direction==="asc"?Q:X,size:"sm",className:"ms-1"}),T=s=>e.jsx(de,{color:s==="Active"?"success":"secondary",children:s});return e.jsxs(t,{xs:12,children:[e.jsxs(J,{className:"mb-4",children:[e.jsx(O,{children:e.jsx("strong",{className:"clr-blue fs-5",children:"Process List"})}),e.jsxs(K,{children:[e.jsxs(r,{className:"mb-3",children:[e.jsx(t,{xs:12,sm:8,md:6,lg:4,xl:3,className:"mb-2 mb-sm-0",children:e.jsxs(W,{children:[e.jsx(Y,{children:e.jsx(x,{icon:V})}),e.jsx(Z,{placeholder:"Search...",value:o,onChange:s=>L(s.target.value)})]})}),e.jsx(t,{xs:12,sm:4,md:6,lg:8,xl:9,className:"d-flex justify-content-sm-end",children:e.jsx("button",{className:"px-3 bg-blue clr-white button-sizing",onClick:()=>M("/process/add"),children:"Add"})})]}),e.jsx("style",{children:`
  .responsive-table-container {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .table-min-widths th:nth-child(1) {
    min-width: 60px;
  }

  .table-min-widths th:nth-child(2) {
    min-width: 150px;
  }

  .table-min-widths th:nth-child(3) {
    min-width: 100px;
  }

  .table-min-widths th:nth-child(4) {
    min-width: 100px;
  }

  .table-min-widths th:nth-child(5) {
    min-width: 150px;
  }

  .sortable-header {
    cursor: pointer;
  }

  .no-wrap {
    white-space: nowrap;
  }

  .actions-container {
    min-width: 150px;
  }

  .pagination-container {
    overflow-x: auto;
  }

  .pagination-nowrap {
    flex-wrap: nowrap;
  }

  .pagination-item-min {
    min-width: 40px;
  }

  .dropdown-auto-width {
    width: auto;
    min-width: 70px;
  }

  .text-nowrap {
    white-space: nowrap;
  }
`}),e.jsx("div",{className:"responsive-table-container",children:e.jsxs(ee,{striped:!0,hover:!0,className:"table-min-widths",children:[e.jsx(se,{children:e.jsxs(v,{children:[e.jsx(b,{scope:"col",children:"S.No"}),e.jsxs(b,{scope:"col",className:"sortable-header",onClick:()=>g("name"),children:["Process Name",y("name")]}),e.jsxs(b,{scope:"col",className:"sortable-header",onClick:()=>g("code"),children:["Code",y("code")]}),e.jsxs(b,{scope:"col",className:"sortable-header",onClick:()=>g("status"),children:["Status",y("status")]}),e.jsx(b,{scope:"col",className:"text-center",children:"Actions"})]})}),e.jsx(te,{children:I.length>0?I.map((s,a)=>e.jsxs(v,{children:[e.jsx(u,{children:f+a+1}),e.jsx(u,{className:"no-wrap",children:s.name}),e.jsx(u,{className:"no-wrap",children:s.code}),e.jsx(u,{children:T(s.status)}),e.jsx(u,{className:"text-center",children:e.jsxs("div",{className:"d-flex justify-content-center gap-1 actions-container",children:[e.jsx(N,{color:"primary",variant:"outline",size:"sm",onClick:()=>D("info",s),title:"View Details",children:e.jsx(x,{icon:_,size:"sm"})}),e.jsx(N,{color:"success",variant:"outline",size:"sm",onClick:()=>M("/process/1"),title:"Edit Process",children:e.jsx(x,{icon:q,size:"sm"})}),e.jsx(N,{color:"danger",variant:"outline",size:"sm",onClick:()=>D("delete",s),title:"Delete Process",children:e.jsx(x,{icon:R,size:"sm"})})]})})]},s.id)):e.jsx(v,{children:e.jsx(u,{colSpan:5,className:"text-center py-4",children:"No processes found"})})})]})}),e.jsxs(r,{className:"mt-3 align-items-center",children:[e.jsx(t,{xs:12,lg:8,className:"mb-2 mb-lg-0",children:e.jsxs("div",{className:"d-flex flex-column flex-sm-row align-items-start align-items-sm-center",children:[e.jsxs("div",{className:"d-flex align-items-center mb-2 mb-sm-0 flex-wrap",children:[e.jsx("span",{className:"me-2 text-nowrap",children:"Show"}),e.jsxs(ae,{size:"sm",className:"dropdown-auto-width",value:n,onChange:s=>{const a=s.target.value==="all"?"all":Number(s.target.value);E(a),j(1)},children:[e.jsx("option",{value:5,children:"5"}),e.jsx("option",{value:10,children:"10"}),e.jsx("option",{value:25,children:"25"}),e.jsx("option",{value:50,children:"50"}),e.jsx("option",{value:"all",children:"All"})]}),e.jsx("span",{className:"ms-2 me-3 text-nowrap",children:"entries"})]}),e.jsx("small",{className:"text-muted",children:n==="all"?`Showing all ${h.length} entries`:`Showing ${f+1} to ${Math.min(f+n,h.length)} of ${h.length} entries`})]})}),e.jsx(t,{xs:12,lg:4,className:"d-flex justify-content-center justify-content-lg-end",children:p>1&&n!=="all"&&e.jsx("div",{className:"pagination-container d-flex justify-content-center",children:e.jsxs(ne,{size:"sm",className:"mb-0 pagination-nowrap",children:[e.jsxs(w,{disabled:d===1,onClick:()=>j(d-1),children:[e.jsx("span",{className:"d-none d-sm-inline",children:"Previous"}),e.jsx("span",{className:"d-inline d-sm-none",children:"‹"})]}),Array.from({length:p},(s,a)=>a+1).filter(s=>p<=5||s===1||s===p||Math.abs(s-d)<=1).map((s,a,U)=>e.jsxs(z.Fragment,{children:[a>0&&U[a-1]<s-1&&e.jsx(w,{disabled:!0,className:"pagination-item-min",children:"..."}),e.jsx(w,{active:s===d,onClick:()=>j(s),className:"pagination-item-min",children:s})]},s)),e.jsxs(w,{disabled:d===p,onClick:()=>j(d+1),children:[e.jsx("span",{className:"d-none d-sm-inline",children:"Next"}),e.jsx("span",{className:"d-inline d-sm-none",children:"›"})]})]})})})]})]})]}),e.jsxs(ie,{visible:F,onClose:C,size:"md",alignment:"center",backdrop:"static",children:[e.jsx(ce,{closeButton:!0,children:e.jsxs("strong",{className:"clr-blue fs-5",children:[m==="info"&&"Process Details",m==="delete"&&"Delete Process"]})}),e.jsxs(le,{children:[c&&m==="info"&&e.jsxs("div",{children:[e.jsxs(r,{className:"mb-2",children:[e.jsx(t,{sm:4,className:"fw-semibold",children:"Process Name"}),e.jsx(t,{sm:1,className:"text-center fw-bold",children:":"}),e.jsx(t,{sm:7,children:c.name})]}),e.jsxs(r,{className:"mb-2",children:[e.jsx(t,{sm:4,className:"fw-semibold",children:"Code"}),e.jsx(t,{sm:1,className:"text-center fw-bold",children:":"}),e.jsx(t,{sm:7,children:c.code})]}),e.jsxs(r,{className:"mb-2",children:[e.jsx(t,{sm:4,className:"fw-semibold",children:"Status"}),e.jsx(t,{sm:1,className:"text-center fw-bold",children:":"}),e.jsx(t,{sm:7,children:T(c.status)})]}),e.jsxs(r,{className:"mb-2",children:[e.jsx(t,{sm:4,className:"fw-semibold",children:"CreatedAt"}),e.jsx(t,{sm:1,className:"text-center fw-bold",children:":"}),e.jsx(t,{sm:7,children:c.createdAt})]}),e.jsxs(r,{className:"mb-2",children:[e.jsx(t,{sm:4,className:"fw-semibold",children:"CreatedBy"}),e.jsx(t,{sm:1,className:"text-center fw-bold",children:":"}),e.jsx(t,{sm:7,children:c.createdBy})]}),e.jsxs(r,{className:"mb-2",children:[e.jsx(t,{sm:4,className:"fw-semibold",children:"UpdatedAt"}),e.jsx(t,{sm:1,className:"text-center fw-bold",children:":"}),e.jsx(t,{sm:7,children:c.updatedAt})]}),e.jsxs(r,{className:"mb-2",children:[e.jsx(t,{sm:4,className:"fw-semibold",children:"UpdatedBy"}),e.jsx(t,{sm:1,className:"text-center fw-bold",children:":"}),e.jsx(t,{sm:7,children:c.updatedBy})]})]}),c&&m==="delete"&&e.jsxs("div",{className:"text-center",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx(x,{icon:R,size:"xxl",className:"text-danger mb-3"}),e.jsx("h5",{children:"Confirm Deletion"})]}),e.jsxs("p",{className:"mb-4",children:["Are you sure you want to delete the process"," ",e.jsxs("strong",{className:"clr-black",children:['"',c.name,'"']}),"?",e.jsx("br",{}),e.jsx("small",{className:"text-muted",children:"This action cannot be undone."})]})]})]}),e.jsxs(re,{className:"justify-content-center",children:[m==="info"&&e.jsx("button",{className:"px-3 bg-blue clr-white button-sizing",onClick:C,children:"Close"}),m==="delete"&&e.jsxs(e.Fragment,{children:[e.jsx(N,{color:"secondary",onClick:C,children:"Cancel"}),e.jsx("button",{className:"px-3 bg-blue clr-white button-sizing",onClick:H,children:"Yes, Delete"})]})]})]})]})};export{ke as default};
