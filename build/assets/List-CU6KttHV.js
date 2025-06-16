import{u as J,r,R as W,j as e}from"./index-CIYNhUdU.js";import{a as p,b as y}from"./index.esm-Bf_E2K6t.js";import{C as a}from"./CCol-CE39PWEk.js";import{C as $,a as G}from"./CCardBody-DPBa1pTg.js";import{C as H}from"./CCardHeader-CbN31YDA.js";import{C as d}from"./CRow-i6t9nWbk.js";import{C as V,a as _}from"./CInputGroupText-DSXybFR1.js";import{c as K}from"./cil-search-CDkY_4k-.js";import{C as O}from"./CFormInput-Bv_k17Oc.js";import{C as Q,a as Y,b as A,c as u,d as q,e as c}from"./CTable-C6rRk-RR.js";import{c as X,a as Z,b as U,d as ee,e as se}from"./cil-trash-D6kCDIfz.js";import{C as ae}from"./CFormSelect-Bp3aCtZd.js";import{C as te,a as M}from"./CPaginationItem-CQvdCR_R.js";import{C as ne,a as re,b as le,c as ie}from"./CModalHeader-NdA4I7Vg.js";import{C as de}from"./DefaultLayout-dlNfNJ1t.js";import"./CFormControlWrapper-UCHoxR0K.js";import"./CFormControlValidation-Big95UDD.js";import"./CFormLabel-CgIG1uGh.js";import"./logo-DRdS6Iio.js";import"./cil-user-Dlmw-Gem.js";const Pe=()=>{const v=J(),[B]=r.useState([{id:1,name:"John Doe",username:"john_doe",department:"Laser Engraving Unit",password:"John@123",role:"Admin",createdAt:"2024-01-15 09:30 AM",createdBy:"System Admin",updatedAt:"2024-12-20 4:25 PM",updatedBy:"Ram Kumar"},{id:2,name:"RD",username:"rd_domain",password:"Jane@456",department:"Laser Engraving Unit",role:"Manager",createdAt:"2024-02-10 11:15 AM",createdBy:"John Doe",updatedAt:"2024-12-18 6:30 PM",updatedBy:"Kumar"},{id:3,name:"Mike Johnson",username:"mike_johnson",department:"Client Design Approvals",password:"Mike@789",role:"Design Lead",createdAt:"2024-03-05 11:20 AM",createdBy:"Jane Smith",updatedAt:"2024-12-19 11:45 PM",updatedBy:"Siva"},{id:4,name:"Sarah Wilson",username:"sarah.wilson",department:"Procurement & Vendor Management",password:"Sarah@321",role:"Design Lead",createdAt:"2024-04-12 08:45 AM",createdBy:"Mike Johnson",updatedAt:"2024-12-17 3:20 PM",updatedBy:"Ravi"},{id:5,name:"David Chen",username:"david.chen",department:"Procurement & Vendor Management",password:"David@654",role:"Manager",createdAt:"2024-05-18 08:45 AM",createdBy:"Sarah Wilson",updatedAt:"2024-12-21 07:45 AM",updatedBy:"Ravi"},{id:6,name:"Lisa Anderson",department:"Packaging & Logistics",username:"lisa.anderson",password:"Lisa@987",role:"Data Entry",createdAt:"2024-06-22 09:45 AM",createdBy:"David Chen",updatedAt:"2024-12-20 10:45 AM",updatedBy:"Suresh"},{id:7,name:"Robert Taylor",username:"robert.taylor",department:"Order Fulfilment & Dispatch",password:"Robert@147",role:"Photographer",createdAt:"2024-07-08 09:45 AM",createdBy:"Lisa Anderson",updatedAt:"2024-12-16 02:45 AM",updatedBy:"Dinesh"},{id:8,name:"Emily Davis",username:"emily.davis",department:"Order Fulfilment & Dispatch",password:"Emily@258",role:"Manager",createdAt:"2024-08-14 04:45 AM",createdBy:"Robert Taylor",updatedAt:"2024-12-22 09:45 AM",updatedBy:"Dinesh"},{id:9,name:"Tom Brown",department:"Quality Control & Assurance",username:"tom.brown",password:"Tom@369",role:"Proofing Manager",createdAt:"2024-09-03 02:45 AM",createdBy:"Emily Davis",updatedAt:"2024-12-19 09:45 AM",updatedBy:"Suresh"},{id:10,name:"Anna White",department:"Metal Casting & Finishing",username:"anna.white",password:"Anna@741",role:"Admin",createdAt:"2024-10-11 09:45 AM",createdBy:"Tom Brown",updatedAt:"2024-12-15 09:45 AM",updatedBy:"Praveen"},{id:11,name:"Chris Green",department:"Metal Casting & Finishing",username:"chris.green",password:"Chris@852",role:"Manager",createdAt:"2024-11-07 01:45 AM",createdBy:"Anna White",updatedAt:"2024-12-21 09:45 PM",updatedBy:"Praveen"},{id:12,name:"Mark Wilson",username:"mark.wilson",department:"Metal Casting & Finishing",password:"Mark@963",role:"Vendor Liaison",createdAt:"2024-12-01 11:45 AM",createdBy:"Chris Green",updatedAt:"2024-12-18 09:45 AM",updatedBy:"Praveen"}]),[m,R]=r.useState(""),[o,j]=r.useState(1),[l,z]=r.useState(5),[i,E]=r.useState({key:null,direction:"asc"}),[F,S]=r.useState(!1),[h,k]=r.useState(""),[n,D]=r.useState(null),[oe,ce]=r.useState({}),N=r.useMemo(()=>B.filter(s=>s.name.toLowerCase().includes(m.toLowerCase())||s.username.toLowerCase().includes(m.toLowerCase())||s.role.toLowerCase().includes(m.toLowerCase())),[B,m]),x=r.useMemo(()=>i.key?[...N].sort((s,t)=>s[i.key]<t[i.key]?i.direction==="asc"?-1:1:s[i.key]>t[i.key]?i.direction==="asc"?1:-1:0):N,[N,i]),C=l==="all"?1:Math.ceil(x.length/l),w=l==="all"?0:(o-1)*l,P=l==="all"?x:x.slice(w,w+l);W.useEffect(()=>{j(1)},[m]);const T=(s,t)=>{s==="info"||s==="delete"?(k(s),D(t),S(!0)):s==="edit"&&console.log("Edit action for user:",t)},b=()=>{S(!1),k(""),D(null)},I=()=>{b()},g=s=>{E(t=>({key:s,direction:t.key===s&&t.direction==="asc"?"desc":"asc"}))},f=s=>i.key!==s?null:e.jsx(p,{icon:i.direction==="asc"?ee:se,size:"sm",className:"ms-1"}),L=s=>{const t={Photographer:"danger",Manager:"warning",Awards:"secondary",Admin:"success",Inventory:"info"};return e.jsx(de,{color:t[s]||"secondary",children:s})};return e.jsxs(a,{xs:12,children:[e.jsxs($,{className:"mb-4",children:[e.jsx(H,{children:e.jsx("strong",{className:"clr-blue fs-5",children:"Users List"})}),e.jsxs(G,{children:[e.jsxs(d,{className:"mb-3",children:[e.jsx(a,{xs:12,sm:8,md:6,lg:4,xl:3,className:"mb-2 mb-sm-0",children:e.jsxs(V,{children:[e.jsx(_,{children:e.jsx(p,{icon:K})}),e.jsx(O,{placeholder:"Search...",value:m,onChange:s=>R(s.target.value),className:"inputFocus"})]})}),e.jsx(a,{xs:12,sm:4,md:6,lg:8,xl:9,className:"d-flex justify-content-sm-end",children:e.jsx("button",{className:"px-3 bg-blue clr-white button-sizing",onClick:()=>v("/users/add"),children:"Add"})})]}),e.jsx("style",{children:`
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
    min-width: 120px;
  }

  .table-min-widths th:nth-child(4) {
    min-width: 130px;
  }

  .table-min-widths th:nth-child(5) {
    min-width: 100px;
  }

  .table-min-widths th:nth-child(6) {
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


`}),e.jsx("div",{className:"responsive-table-container",children:e.jsxs(Q,{striped:!0,hover:!0,className:"table-min-widths",children:[e.jsx(Y,{children:e.jsxs(A,{children:[e.jsx(u,{scope:"col",children:"S.No"}),e.jsxs(u,{scope:"col",className:"sortable-header",onClick:()=>g("name"),children:["Name",f("name")]}),e.jsxs(u,{scope:"col",className:"sortable-header",onClick:()=>g("username"),children:["Username",f("username")]}),e.jsxs(u,{scope:"col",className:"sortable-header",onClick:()=>g("department"),children:["Department",f("department")]}),e.jsxs(u,{scope:"col",className:"sortable-header",onClick:()=>g("role"),children:["Role",f("role")]}),e.jsx(u,{scope:"col",className:"text-center",children:"Actions"})]})}),e.jsx(q,{children:P.length>0?P.map((s,t)=>e.jsxs(A,{children:[e.jsx(c,{children:w+t+1}),e.jsx(c,{className:"no-wrap",children:s.name}),e.jsx(c,{className:"no-wrap",children:s.username}),e.jsx(c,{className:"no-wrap",children:s.department}),e.jsx(c,{children:L(s.role)}),e.jsx(c,{className:"text-center",children:e.jsxs("div",{className:"d-flex justify-content-center gap-1 actions-container",children:[e.jsx(y,{color:"primary",variant:"outline",size:"sm",onClick:()=>T("info",s),title:"View Details",children:e.jsx(p,{icon:X,size:"sm"})}),e.jsx(y,{color:"success",variant:"outline",size:"sm",onClick:()=>v(`/users/${s.id}`),title:"Edit User",children:e.jsx(p,{icon:Z,size:"sm"})}),e.jsx(y,{color:"danger",variant:"outline",size:"sm",onClick:()=>T("delete",s),title:"Delete User",children:e.jsx(p,{icon:U,size:"sm"})})]})})]},s.id)):e.jsx(A,{children:e.jsx(c,{colSpan:6,className:"text-center py-4",children:"No users found"})})})]})}),e.jsxs(d,{className:"align-items-center",children:[e.jsxs(a,{md:6,className:"d-flex align-items-center",children:[e.jsx("span",{className:"me-2",children:"Show"}),e.jsxs(ae,{size:"sm",style:{width:"auto"},value:l,onChange:s=>{const t=s.target.value==="all"?"all":Number(s.target.value);z(t),j(1)},children:[e.jsx("option",{value:5,children:"5"}),e.jsx("option",{value:10,children:"10"}),e.jsx("option",{value:25,children:"25"}),e.jsx("option",{value:50,children:"50"}),e.jsx("option",{value:"all",children:"All"})]}),e.jsx("span",{className:"ms-2",children:"entries"}),e.jsx("small",{className:"text-muted ms-3",children:l==="all"?`Showing all ${x.length} entries`:`Showing ${w+1} to ${Math.min(w+l,x.length)} of ${x.length} entries`})]}),e.jsx(a,{md:6,className:"d-flex justify-content-end",children:C>1&&l!=="all"&&e.jsxs(te,{children:[e.jsx(M,{disabled:o===1,onClick:()=>j(o-1),style:{cursor:o===1?"not-allowed":"pointer"},children:"Previous"}),Array.from({length:C},(s,t)=>t+1).map(s=>e.jsx(M,{active:s===o,onClick:()=>j(s),style:{cursor:"pointer"},children:s},s)),e.jsx(M,{disabled:o===C,onClick:()=>j(o+1),style:{cursor:o===C?"not-allowed":"pointer"},children:"Next"})]})})]})]})]}),e.jsxs(ne,{visible:F,onClose:b,size:"md",alignment:"center",backdrop:"static",children:[e.jsx(re,{closeButton:!0,children:e.jsxs("strong",{className:"clr-blue fs-5",children:[h==="info"&&"User Details",h==="delete"&&"Delete User"]})}),e.jsxs(le,{children:[n&&h==="info"&&e.jsxs("div",{children:[e.jsxs(d,{className:"mb-2",children:[e.jsx(a,{sm:4,className:"fw-semibold",children:"Name"}),e.jsx(a,{sm:1,className:"text-center fw-bold",children:":"}),e.jsx(a,{sm:7,children:n.name})]}),e.jsxs(d,{className:"mb-2",children:[e.jsx(a,{sm:4,className:"fw-semibold",children:"Username"}),e.jsx(a,{sm:1,className:"text-center fw-bold",children:":"}),e.jsx(a,{sm:7,children:n.username})]}),e.jsxs(d,{className:"mb-2",children:[e.jsx(a,{sm:4,className:"fw-semibold",children:"Department"}),e.jsx(a,{sm:1,className:"text-center fw-bold",children:":"}),e.jsx(a,{sm:7,children:n.department})]}),e.jsxs(d,{className:"mb-2",children:[e.jsx(a,{sm:4,className:"fw-semibold",children:"Role"}),e.jsx(a,{sm:1,className:"text-center fw-bold",children:":"}),e.jsx(a,{sm:7,children:L(n.role)})]}),e.jsxs(d,{className:"mb-2",children:[e.jsx(a,{sm:4,className:"fw-semibold",children:"Created At"}),e.jsx(a,{sm:1,className:"text-center fw-bold",children:":"}),e.jsx(a,{sm:7,children:n.createdAt})]}),e.jsxs(d,{className:"mb-2",children:[e.jsx(a,{sm:4,className:"fw-semibold",children:"Created By"}),e.jsx(a,{sm:1,className:"text-center fw-bold",children:":"}),e.jsx(a,{sm:7,children:n.createdBy})]}),e.jsxs(d,{className:"mb-2",children:[e.jsx(a,{sm:4,className:"fw-semibold",children:"Updated At"}),e.jsx(a,{sm:1,className:"text-center fw-bold",children:":"}),e.jsx(a,{sm:7,children:n.updatedAt})]}),e.jsxs(d,{className:"mb-2",children:[e.jsx(a,{sm:4,className:"fw-semibold",children:"Updated By"}),e.jsx(a,{sm:1,className:"text-center fw-bold",children:":"}),e.jsx(a,{sm:7,children:n.updatedBy})]})]}),n&&h==="delete"&&e.jsxs("div",{className:"text-center",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx(p,{icon:U,size:"xxl",className:"text-danger mb-3"}),e.jsx("h5",{children:"Confirm Deletion"})]}),e.jsxs("p",{className:"mb-4",children:["Are you sure you want to delete the user"," ",e.jsxs("strong",{className:"clr-black",children:['"',n.name,'"']}),"?",e.jsx("br",{}),e.jsx("small",{className:"text-muted",children:"This action cannot be undone."})]})]})]}),e.jsxs(ie,{className:"justify-content-center",children:[h==="info"&&e.jsx("button",{className:"px-3 bg-blue clr-white button-sizing",onClick:b,children:"Close"}),h==="delete"&&e.jsxs(e.Fragment,{children:[e.jsx(y,{color:"secondary",onClick:b,children:"Cancel"}),e.jsx("button",{className:"px-3 bg-blue clr-white button-sizing",onClick:I,children:"Yes, Delete"})]})]})]})]})};export{Pe as default};
