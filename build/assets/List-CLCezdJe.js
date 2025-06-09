import{u as W,r as n,y as $,j as e}from"./index-D-llO0Ra.js";import{a as x,b as f}from"./index.esm-CtVcU2wr.js";import{C as a}from"./CCol-BT_cBx04.js";import{C as F,a as G}from"./CCardBody-CpsREFI7.js";import{C as H}from"./CCardHeader-DtpsvZ-J.js";import{C as o}from"./CRow-CZzcgXgh.js";import{C as _,a as K}from"./CInputGroupText-CkoU27mY.js";import{c as V,a as Y,b as q,d as L,e as O,f as Q}from"./cil-trash-C5ZtASwZ.js";import{C as X}from"./CFormInput-DnCBf-8e.js";import{C as Z,a as ee,b as N,c as w,d as se,e as u}from"./CTable-LHgLUfC1.js";import{C as ae}from"./CFormSelect-Cwkg1ZhX.js";import{C as te,a as M}from"./CPaginationItem-BMF2d7uP.js";import{C as ne,a as re,b as le,c as ie}from"./CModalHeader-BV-m9icy.js";import{C as oe}from"./DefaultLayout-CiPQ5Inz.js";import"./CFormControlWrapper-wSHTrGvC.js";import"./CFormControlValidation-D_vkZGI_.js";import"./CFormLabel-BT9MHGnZ.js";import"./logo-DZpwT0P_.js";import"./cil-user-Ddrdy7PS.js";import"./cil-lock-locked-DmxpJbVL.js";const De=()=>{const v=W(),[B]=n.useState([{id:1,name:"John Doe",username:"john_doe",password:"John@123",role:"Admin",createdAt:"2024-01-15 09:30 AM",createdBy:"System Admin",updatedAt:"2024-12-20 4:25 PM",updatedBy:"Ram Kumar"},{id:2,name:"Jane Smith",username:"jane.smith",password:"Jane@456",role:"Manager",createdAt:"2024-02-10 11:15 AM",createdBy:"John Doe",updatedAt:"2024-12-18 6:30 PM",updatedBy:"Kumar"},{id:3,name:"Mike Johnson",username:"mike_johnson",password:"Mike@789",role:"Design Lead",createdAt:"2024-03-05 11:20 AM",createdBy:"Jane Smith",updatedAt:"2024-12-19 11:45 PM",updatedBy:"Siva"},{id:4,name:"Sarah Wilson",username:"sarah.wilson",password:"Sarah@321",role:"Design Lead",createdAt:"2024-04-12 08:45 AM",createdBy:"Mike Johnson",updatedAt:"2024-12-17 3:20 PM",updatedBy:"Ravi"},{id:5,name:"David Chen",username:"david.chen",password:"David@654",role:"Manager",createdAt:"2024-05-18 08:45 AM",createdBy:"Sarah Wilson",updatedAt:"2024-12-21 07:45 AM",updatedBy:"Ravi"},{id:6,name:"Lisa Anderson",username:"lisa.anderson",password:"Lisa@987",role:"Data Entry",createdAt:"2024-06-22 09:45 AM",createdBy:"David Chen",updatedAt:"2024-12-20 10:45 AM",updatedBy:"Suresh"},{id:7,name:"Robert Taylor",username:"robert.taylor",password:"Robert@147",role:"Photographer",createdAt:"2024-07-08 09:45 AM",createdBy:"Lisa Anderson",updatedAt:"2024-12-16 02:45 AM",updatedBy:"Dinesh"},{id:8,name:"Emily Davis",username:"emily.davis",password:"Emily@258",role:"Manager",createdAt:"2024-08-14 04:45 AM",createdBy:"Robert Taylor",updatedAt:"2024-12-22 09:45 AM",updatedBy:"Dinesh"},{id:9,name:"Tom Brown",username:"tom.brown",password:"Tom@369",role:"Proofing Manager",createdAt:"2024-09-03 02:45 AM",createdBy:"Emily Davis",updatedAt:"2024-12-19 09:45 AM",updatedBy:"Suresh"},{id:10,name:"Anna White",username:"anna.white",password:"Anna@741",role:"Admin",createdAt:"2024-10-11 09:45 AM",createdBy:"Tom Brown",updatedAt:"2024-12-15 09:45 AM",updatedBy:"Praveen"},{id:11,name:"Chris Green",username:"chris.green",password:"Chris@852",role:"Manager",createdAt:"2024-11-07 01:45 AM",createdBy:"Anna White",updatedAt:"2024-12-21 09:45 PM",updatedBy:"Praveen"},{id:12,name:"Mark Wilson",username:"mark.wilson",password:"Mark@963",role:"Vendor Liaison",createdAt:"2024-12-01 11:45 AM",createdBy:"Chris Green",updatedAt:"2024-12-18 09:45 AM",updatedBy:"Praveen"}]),[c,z]=n.useState(""),[d,p]=n.useState(1),[r,R]=n.useState(5),[l,I]=n.useState({key:null,direction:"asc"}),[E,S]=n.useState(!1),[m,k]=n.useState(""),[i,P]=n.useState(null),[de,ce]=n.useState({}),y=n.useMemo(()=>B.filter(s=>s.name.toLowerCase().includes(c.toLowerCase())||s.username.toLowerCase().includes(c.toLowerCase())||s.role.toLowerCase().includes(c.toLowerCase())),[B,c]),h=n.useMemo(()=>l.key?[...y].sort((s,t)=>s[l.key]<t[l.key]?l.direction==="asc"?-1:1:s[l.key]>t[l.key]?l.direction==="asc"?1:-1:0):y,[y,l]),b=r==="all"?1:Math.ceil(h.length/r),j=r==="all"?0:(d-1)*r,D=r==="all"?h:h.slice(j,j+r);$.useEffect(()=>{p(1)},[c]);const T=(s,t)=>{s==="info"||s==="delete"?(k(s),P(t),S(!0)):s==="edit"&&console.log("Edit action for user:",t)},C=()=>{S(!1),k(""),P(null)},J=()=>{C()},g=s=>{I(t=>({key:s,direction:t.key===s&&t.direction==="asc"?"desc":"asc"}))},A=s=>l.key!==s?null:e.jsx(x,{icon:l.direction==="asc"?O:Q,size:"sm",className:"ms-1"}),U=s=>{const t={Photographer:"danger",Manager:"warning",Awards:"secondary",Admin:"success",Inventory:"info"};return e.jsx(oe,{color:t[s]||"secondary",children:s})};return e.jsxs(a,{xs:12,children:[e.jsxs(F,{className:"mb-4",children:[e.jsx(H,{children:e.jsx("strong",{className:"clr-blue fs-5",children:"Users List"})}),e.jsxs(G,{children:[e.jsxs(o,{className:"mb-3",children:[e.jsx(a,{xs:12,sm:8,md:6,lg:4,xl:3,className:"mb-2 mb-sm-0",children:e.jsxs(_,{children:[e.jsx(K,{children:e.jsx(x,{icon:V})}),e.jsx(X,{placeholder:"Search...",value:c,onChange:s=>z(s.target.value)})]})}),e.jsx(a,{xs:12,sm:4,md:6,lg:8,xl:9,className:"d-flex justify-content-sm-end",children:e.jsx("button",{className:"px-3 bg-blue clr-white button-sizing",onClick:()=>v("/users/add"),children:"Add"})})]}),e.jsx("style",{children:`
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


`}),e.jsx("div",{className:"responsive-table-container",children:e.jsxs(Z,{striped:!0,hover:!0,className:"table-min-widths",children:[e.jsx(ee,{children:e.jsxs(N,{children:[e.jsx(w,{scope:"col",children:"S.No"}),e.jsxs(w,{scope:"col",className:"sortable-header",onClick:()=>g("name"),children:["Name",A("name")]}),e.jsxs(w,{scope:"col",className:"sortable-header",onClick:()=>g("username"),children:["Username",A("username")]}),e.jsxs(w,{scope:"col",className:"sortable-header",onClick:()=>g("role"),children:["Role",A("role")]}),e.jsx(w,{scope:"col",className:"text-center",children:"Actions"})]})}),e.jsx(se,{children:D.length>0?D.map((s,t)=>e.jsxs(N,{children:[e.jsx(u,{children:j+t+1}),e.jsx(u,{className:"no-wrap",children:s.name}),e.jsx(u,{className:"no-wrap",children:s.username}),e.jsx(u,{children:U(s.role)}),e.jsx(u,{className:"text-center",children:e.jsxs("div",{className:"d-flex justify-content-center gap-1 actions-container",children:[e.jsx(f,{color:"primary",variant:"outline",size:"sm",onClick:()=>T("info",s),title:"View Details",children:e.jsx(x,{icon:Y,size:"sm"})}),e.jsx(f,{color:"success",variant:"outline",size:"sm",onClick:()=>v(`/users/${s.id}`),title:"Edit User",children:e.jsx(x,{icon:q,size:"sm"})}),e.jsx(f,{color:"danger",variant:"outline",size:"sm",onClick:()=>T("delete",s),title:"Delete User",children:e.jsx(x,{icon:L,size:"sm"})})]})})]},s.id)):e.jsx(N,{children:e.jsx(u,{colSpan:6,className:"text-center py-4",children:"No users found"})})})]})}),e.jsxs(o,{className:"align-items-center",children:[e.jsxs(a,{md:6,className:"d-flex align-items-center",children:[e.jsx("span",{className:"me-2",children:"Show"}),e.jsxs(ae,{size:"sm",style:{width:"auto"},value:r,onChange:s=>{const t=s.target.value==="all"?"all":Number(s.target.value);R(t),p(1)},children:[e.jsx("option",{value:5,children:"5"}),e.jsx("option",{value:10,children:"10"}),e.jsx("option",{value:25,children:"25"}),e.jsx("option",{value:50,children:"50"}),e.jsx("option",{value:"all",children:"All"})]}),e.jsx("span",{className:"ms-2",children:"entries"}),e.jsx("small",{className:"text-muted ms-3",children:r==="all"?`Showing all ${h.length} entries`:`Showing ${j+1} to ${Math.min(j+r,h.length)} of ${h.length} entries`})]}),e.jsx(a,{md:6,className:"d-flex justify-content-end",children:b>1&&r!=="all"&&e.jsxs(te,{children:[e.jsx(M,{disabled:d===1,onClick:()=>p(d-1),style:{cursor:d===1?"not-allowed":"pointer"},children:"Previous"}),Array.from({length:b},(s,t)=>t+1).map(s=>e.jsx(M,{active:s===d,onClick:()=>p(s),style:{cursor:"pointer"},children:s},s)),e.jsx(M,{disabled:d===b,onClick:()=>p(d+1),style:{cursor:d===b?"not-allowed":"pointer"},children:"Next"})]})})]})]})]}),e.jsxs(ne,{visible:E,onClose:C,size:"md",alignment:"center",backdrop:"static",children:[e.jsx(re,{closeButton:!0,children:e.jsxs("strong",{className:"clr-blue fs-5",children:[m==="info"&&"User Details",m==="delete"&&"Delete User"]})}),e.jsxs(le,{children:[i&&m==="info"&&e.jsxs("div",{children:[e.jsxs(o,{className:"mb-2",children:[e.jsx(a,{sm:4,className:"fw-semibold",children:"Name"}),e.jsx(a,{sm:1,className:"text-center fw-bold",children:":"}),e.jsx(a,{sm:7,children:i.name})]}),e.jsxs(o,{className:"mb-2",children:[e.jsx(a,{sm:4,className:"fw-semibold",children:"Username"}),e.jsx(a,{sm:1,className:"text-center fw-bold",children:":"}),e.jsx(a,{sm:7,children:i.username})]}),e.jsxs(o,{className:"mb-2",children:[e.jsx(a,{sm:4,className:"fw-semibold",children:"Role"}),e.jsx(a,{sm:1,className:"text-center fw-bold",children:":"}),e.jsx(a,{sm:7,children:U(i.role)})]}),e.jsxs(o,{className:"mb-2",children:[e.jsx(a,{sm:4,className:"fw-semibold",children:"Created At"}),e.jsx(a,{sm:1,className:"text-center fw-bold",children:":"}),e.jsx(a,{sm:7,children:i.createdAt})]}),e.jsxs(o,{className:"mb-2",children:[e.jsx(a,{sm:4,className:"fw-semibold",children:"Created By"}),e.jsx(a,{sm:1,className:"text-center fw-bold",children:":"}),e.jsx(a,{sm:7,children:i.createdBy})]}),e.jsxs(o,{className:"mb-2",children:[e.jsx(a,{sm:4,className:"fw-semibold",children:"Updated At"}),e.jsx(a,{sm:1,className:"text-center fw-bold",children:":"}),e.jsx(a,{sm:7,children:i.updatedAt})]}),e.jsxs(o,{className:"mb-2",children:[e.jsx(a,{sm:4,className:"fw-semibold",children:"Updated By"}),e.jsx(a,{sm:1,className:"text-center fw-bold",children:":"}),e.jsx(a,{sm:7,children:i.updatedBy})]})]}),i&&m==="delete"&&e.jsxs("div",{className:"text-center",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx(x,{icon:L,size:"xxl",className:"text-danger mb-3"}),e.jsx("h5",{children:"Confirm Deletion"})]}),e.jsxs("p",{className:"mb-4",children:["Are you sure you want to delete the user"," ",e.jsxs("strong",{className:"clr-black",children:['"',i.name,'"']}),"?",e.jsx("br",{}),e.jsx("small",{className:"text-muted",children:"This action cannot be undone."})]})]})]}),e.jsxs(ie,{className:"justify-content-center",children:[m==="info"&&e.jsx("button",{className:"px-3 bg-blue clr-white button-sizing",onClick:C,children:"Close"}),m==="delete"&&e.jsxs(e.Fragment,{children:[e.jsx(f,{color:"secondary",onClick:C,children:"Cancel"}),e.jsx("button",{className:"px-3 bg-blue clr-white button-sizing",onClick:J,children:"Yes, Delete"})]})]})]})]})};export{De as default};
