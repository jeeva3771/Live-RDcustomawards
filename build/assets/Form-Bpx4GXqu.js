import{r as d,j as e}from"./index-D_bb6SdX.js";import{U as L}from"./user-KJP-hg0I.js";import{I as O}from"./image-DdUrWnyT.js";import{P as M,C as H,a as S,b as q,c as T,d as _,e as B,X as G}from"./x-C8ktVZLk.js";import{c as W}from"./createLucideIcon-DV7IdDBv.js";/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],J=W("truck",V),ee=()=>{const[l,h]=d.useState(0),[o,y]=d.useState([]),v=d.useRef(null),[j,b]=d.useState(!1),[x,D]=d.useState({clientDetails:{client:"",email:"",contactNo:""},imageUpload:{productImages:[]},productDetails:{productName:"",quantity:"",size:""},deliveryDetails:{deliveryDate:"",deliveryLocation:"",deliveryMode:""},payment:{paymentType:""}}),[m,N]=d.useState(new Set),[E,w]=d.useState(new Set);d.useEffect(()=>{if(l>0){const t=Array.from({length:l},(a,n)=>n);w(new Set(t))}},[l]);const c=[{id:"clientDetails",title:"Client Details",icon:L,fields:[{name:"client",label:"Client Name",type:"text",required:!0,placeholder:"Enter client name"},{name:"email",label:"Email",type:"email",required:!0,placeholder:"Enter email"},{name:"contactNo",label:"Contact Number",type:"tel",required:!0,placeholder:"Enter contact number"},{name:"enquiryOrigin",label:"Enquiry Origin",type:"text",required:!0,placeholder:"Enter enquiry origin"},{name:"noOfOptionsRequired",label:"Number of Options Required",type:"number",required:!0,placeholder:"Enter number of options required"}]},{id:"imageUpload",title:"Image Upload",icon:O,fields:[{name:"productImages",label:"Product Images",type:"image-upload",required:!1}]},{id:"productDetails",title:"Product Details",icon:M,fields:[{name:"productName",label:"Product Name / Theme",type:"text",required:!0,placeholder:"Enter product name"},{name:"quantity",label:"Quantity",type:"number",required:!0,placeholder:"Enter quantity"},{name:"size",label:"Size",type:"text",required:!0,placeholder:"Enter size"},{name:"budget",label:"Budget",type:"number",required:!0,placeholder:"Enter budget"},{name:"preferedMaterial",label:"Prefered Material",type:"text",required:!0,placeholder:"Enter prefered material"}]},{id:"deliveryDetails",title:"Delivery Details",icon:J,fields:[{name:"deliveryDate",label:"Delivery Date",type:"date",required:!0},{name:"deliveryLocation",label:"Delivery Location",type:"textarea",required:!0,placeholder:"Enter delivery location..."},{name:"deliveryMode",label:"Delivery Mode",type:"radio",required:!0,options:[{value:"Hand Delivery",label:"Hand Delivery"},{value:"Courier",label:"Courier"},{value:"Self Pickup",label:"Self Pickup"},{value:"Express Delivery",label:"Express Delivery"}]},{name:"briefing",label:"Briefing",type:"textarea",required:!0,placeholder:"Enter briefing..."}]},{id:"payment",title:"Payment",icon:H,fields:[{name:"paymentType",label:"Payment Terms",type:"radio",required:!0,options:[{value:"100% Advance",label:"100% Advance"},{value:"50% advance & Bal before dispatch & delivery",label:"50% Advance & Bal before dispatch & delivery"},{value:"Corporate Credit",label:"Corporate Credit"}]}]}],u=(t,a,n)=>{D(s=>({...s,[t]:{...s[t],[a]:n}}))},k=t=>{const n=Array.from(t).slice(0,5-o.length).map(s=>URL.createObjectURL(s));y(s=>[...s,...n]),u("imageUpload","productImages",[...o,...n])},g=t=>{t.preventDefault(),t.stopPropagation(),t.type==="dragenter"||t.type==="dragover"?b(!0):t.type==="dragleave"&&b(!1)},P=t=>{t.preventDefault(),t.stopPropagation(),b(!1),t.dataTransfer.files&&t.dataTransfer.files[0]&&k(t.dataTransfer.files)},z=t=>{const a=o.filter((n,s)=>s!==t);y(a),u("imageUpload","productImages",a)},f=t=>{const a=c[t];if(!a)return!0;const n=x[a.id]||{};return a.fields.every(s=>{if(!s||s.type==="header"||s.type==="image-upload")return!0;if(s.required){const r=n[s.name];return r&&r.toString().trim()!==""}return!0})},U=()=>{f(l)&&(N(t=>new Set([...t,l])),l<c.length-1&&h(l+1))},$=()=>{l>0&&h(l-1)},C=t=>{(t<=l||m.has(t))&&h(t)},I=t=>{w(a=>{const n=new Set(a);return n.has(t)?n.delete(t):n.add(t),n})},A=()=>{f(l)&&(N(t=>new Set([...t,l])),alert("Form submitted successfully!"))},p=f(l),F=(t,a)=>{if(!t||!a)return null;const n=x[a]||{};return t.type==="radio"?e.jsxs("div",{className:"col-12 mb-4",children:[e.jsxs("label",{className:"form-label fw-medium fs-6 mb-3",children:[t.label,t.required&&e.jsx("span",{className:"text-danger ms-1",children:"*"})]}),e.jsx("div",{className:"row g-2",children:t.options&&t.options.map(r=>e.jsx("div",{className:"col-12 col-sm-6 col-md-4",children:e.jsx("label",{className:"form-check-container border rounded p-3 h-100 d-block",htmlFor:`${t.name}_${r.value.replace(/\s+/g,"_")}`,style:{cursor:"pointer"},children:e.jsxs("div",{className:"form-check",children:[e.jsx("input",{className:"form-check-input",type:"radio",name:t.name,id:`${t.name}_${r.value.replace(/\s+/g,"_")}`,value:r.value,checked:n[t.name]===r.value,onChange:i=>u(a,t.name,i.target.value),required:t.required}),e.jsx("span",{className:"form-check-label fw-medium",children:r.label})]})})},r.value))})]},t.name):t.type==="image-upload"?e.jsxs("div",{className:"col-12 mb-4",children:[e.jsxs("div",{className:`upload-area border-2 border-dashed rounded-lg p-4 text-center position-relative ${j?"border-primary bg-light":"border-muted"}`,onDragEnter:g,onDragLeave:g,onDragOver:g,onDrop:P,onClick:()=>{var r;return(r=v.current)==null?void 0:r.click()},style:{cursor:"pointer",minHeight:"200px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:j?"#f8f9fa":"#ffffff",transition:"all 0.3s ease"},children:[e.jsx("input",{ref:v,type:"file",multiple:!0,accept:"image/*",onChange:r=>k(r.target.files),className:"d-none"}),e.jsx("button",{type:"button",className:"btn btn-primary px-4 py-2 mb-3",style:{fontSize:"1rem",fontWeight:"600",backgroundColor:"#0d6efd",border:"none"},disabled:o.length>=5,children:"BROWSE & UPLOAD"}),e.jsx("p",{className:"text-muted mb-0",style:{fontSize:"0.9rem"},children:"Click to browse files or drag and drop"}),e.jsx("p",{className:"small text-muted mt-2",children:"Maximum 5 images allowed • Supported formats: JPG, PNG, GIF"})]}),o.length>0&&e.jsxs("div",{className:"mt-4",children:[e.jsxs("h5",{className:"fw-semibold mb-3",children:["Uploaded Images (",o.length,")"]}),e.jsx("div",{className:"row g-3",children:o.map((r,i)=>e.jsx("div",{className:"col-6 col-md-4 col-lg-3",children:e.jsxs("div",{className:"position-relative",children:[e.jsx("img",{src:r,alt:`Product ${i+1}`,className:"img-fluid rounded border",style:{aspectRatio:"1/1",objectFit:"cover"}}),e.jsx("button",{type:"button",className:"btn btn-danger btn-sm position-absolute top-0 end-0 m-1",onClick:R=>{R.stopPropagation(),z(i)},style:{padding:"2px 4px",color:"white",display:"flex"},children:e.jsx(G,{size:14})})]})},i))})]})]},t.name):t.type==="textarea"?e.jsxs("div",{className:"col-12 mb-4",children:[e.jsxs("label",{htmlFor:t.name,className:"form-label fw-medium fs-6",children:[t.label,t.required&&e.jsx("span",{className:"text-danger ms-1",children:"*"})]}),e.jsx("textarea",{className:"form-control form-control-lg",id:t.name,name:t.name,rows:"4",value:n[t.name]||"",onChange:r=>u(a,t.name,r.target.value),placeholder:t.placeholder||`Enter ${t.label.toLowerCase()}`,required:t.required})]},t.name):e.jsxs("div",{className:"col-12 mb-4",children:[e.jsxs("label",{htmlFor:t.name,className:"form-label fw-medium fs-6",children:[t.label,t.required&&e.jsx("span",{className:"text-danger ms-1",children:"*"})]}),e.jsx("input",{type:t.type,className:"form-control form-control-lg",id:t.name,name:t.name,value:n[t.name]||"",onChange:r=>u(a,t.name,r.target.value),placeholder:t.placeholder,required:t.required,step:t.type==="number"?"0.01":void 0})]},t.name)};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .step-indicator {
          width: 65px;
          height: 65px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .step-indicator.completed {
          background-color: #198754;
          border-color: #198754;
          color: white;
        }

        .step-indicator.current {
          background-color: #0061ed;
          border-color: #0061ed;
          color: white;
        }

        .step-indicator.pending {
          background-color: #f8f9fa;
          border-color: #dee2e6;
          color: #6c757d;
          cursor: not-allowed;
        }

        .step-indicator.clickable:hover:not(.pending) {
          transform: scale(1.0);
        }

        .previous-step-header {
          background-color: #f8f9fa;
          border: none;
          width: 100%;
          text-align: left;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .previous-step-header:hover {
          background-color: #e9ecef;
        }

        .status-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          display: inline-block;
          margin-right: 0.5rem;
        }

        .status-dot.completed {
          background-color: #198754;
        }

        .status-dot.pending {
          background-color: #6c757d;
        }

        .form-field-column .mb-4:last-child {
          margin-bottom: 0 !important;
        }

        .card {
          height: fit-content;
        }

        .steps-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.8rem;
          max-width: 100%;
          overflow-x: auto;
          padding: 0 10px;
        }

        .step-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 100px;
          flex-shrink: 0;
        }

        .bg-blue {
          background-color: #0061ed;
        }

        .clr-white {
          color: white;
        }

        .clr-blue {
          color: #0061ed;
        }

        .clr-hover:hover {
          background-color: #0061ed !important;
          color: white !important;
        }

        .border-dashed {
          border-style: dashed !important;
        }

        .bg-light {
          background-color: #f8f9fa !important;
        }

        .form-check-container {
          transition: all 0.2s ease;
        }

        .form-check-container:hover {
          background-color: #f8f9fa;
        }

        .form-check-container input:checked + span {
          color: #0061ed;
          font-weight: 600;
        }

        .form-check-container input:checked {
          background-color: #0061ed;
          border-color: #0061ed;
        }

        .upload-area:hover {
          background-color: #f8f9fa !important;
          border-color: #0d6efd !important;
        }

        .upload-area:active {
          transform: scale(0.98);
        }

        .summary-header-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .step-indicator {
            width: 55px;
            height: 55px;
          }

          .steps-container {
            gap: 0.6rem;
            justify-content: flex-start;
            padding: 0 5px;
          }

          .step-item {
            min-width: 90px;
          }

          .card-body {
            padding: 1.5rem !important;
          }

          .col-sm-6 {
            flex: 0 0 auto;
            width: 100%;
          }

          .col-md-4 {
            flex: 0 0 auto;
            width: 50%;
          }

          .d-flex.justify-content-between {
            flex-direction: column;
            gap: 1rem;
          }

          .d-flex.justify-content-between > button {
            width: 100%;
            justify-content: center;
          }

          .summary-header-actions {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
        }

        @media (max-width: 576px) {
          .step-indicator {
            width: 50px;
            height: 50px;
          }

          .step-item {
            min-width: 80px;
          }

          .card-body {
            padding: 1rem !important;
          }

          .col-6 {
            flex: 0 0 auto;
            width: 100%;
          }

          .col-md-4, .col-sm-6 {
            flex: 0 0 auto;
            width: 100%;
          }
        }
      `}),e.jsx("div",{className:"container-fluid bg-light min-vh-100",children:e.jsx("div",{className:"container py-4 py-md-5",children:e.jsx("div",{className:"row justify-content-center",children:e.jsxs("div",{className:"col-lg-8",children:[e.jsxs("div",{className:"mb-4 mb-md-5 text-center",children:[e.jsx("h1",{className:"display-5 fw-bold text-dark mb-3",children:"Enquiry Form"}),e.jsx("p",{className:"text-muted fs-5",children:"Complete all steps to submit your order"})]}),e.jsx("div",{className:"mb-4 mb-md-5",children:e.jsx("div",{className:"steps-container",children:c.map((t,a)=>{const n=t.icon,s=m.has(a),r=a===l,i=a<=l||m.has(a);return e.jsxs("div",{className:"step-item",children:[e.jsx("button",{onClick:()=>i&&C(a),disabled:!i,className:`step-indicator ${s?"completed":r?"current":"pending"} ${i?"clickable":""} mb-3`,children:s?e.jsx(S,{size:20}):e.jsx(n,{size:20})}),e.jsxs("div",{className:"text-center",children:[e.jsxs("p",{className:`fw-medium mb-1 ${r?"clr-blue":s?"text-success":"text-muted"}`,style:{fontSize:"13px"},children:["Step ",a+1]}),e.jsx("p",{className:`small mb-0 ${r?"clr-blue":s?"text-success":"text-muted"}`,style:{fontSize:"12px",lineHeight:"1.3",fontWeight:"500"},children:t.title})]})]},t.id)})})}),l>0&&e.jsx("div",{className:"mb-4",children:e.jsx("div",{className:"card shadow-sm",children:e.jsxs("div",{className:"card-body",children:[e.jsx("h3",{className:"h5 fw-semibold text-dark mb-4",children:"Previous Steps Summary"}),c.slice(0,l).map((t,a)=>{const n=E.has(a);return e.jsxs("div",{className:"border rounded mb-3",children:[e.jsxs("button",{className:"previous-step-header w-100 p-3 d-flex justify-content-between align-items-center",type:"button",onClick:()=>I(a),children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("span",{className:`status-dot ${m.has(a)?"completed":"pending"}`}),e.jsx("span",{className:`fw-medium ${m.has(a)?"text-success":"text-muted"}`,children:t.title}),e.jsxs("span",{className:"text-muted small ms-2",children:["(Step ",a+1,")"]})]}),e.jsxs("div",{className:"summary-header-actions",children:[e.jsxs("button",{className:"btn btn-outline-primary btn-sm clr-hover",onClick:s=>{s.stopPropagation(),C(a)},children:[e.jsx(q,{size:16,className:"me-1"}),"Go back to edit this step"]}),e.jsx("span",{className:"text-muted small d-none d-sm-inline",children:n?"Hide Details":"Show Details"}),n?e.jsx(T,{size:18,className:"text-muted"}):e.jsx(_,{size:18,className:"text-muted"})]})]}),n&&e.jsxs("div",{className:"border-top p-3",children:[t.id==="imageUpload"&&o.length>0&&e.jsxs("div",{className:"mb-4",children:[e.jsxs("h6",{className:"fw-semibold mb-3",children:["Uploaded Images (",o.length,")"]}),e.jsx("div",{className:"row g-2",children:o.map((s,r)=>e.jsx("div",{className:"col-6 col-sm-4 col-md-3",children:e.jsx("img",{src:s,alt:`Product ${r+1}`,className:"img-fluid rounded border",style:{aspectRatio:"1/1",objectFit:"cover"}})},r))})]}),e.jsx("div",{className:"row g-3",children:t.fields.filter(s=>s.type!=="header"&&s.type!=="image-upload").map(s=>{const r=x[t.id][s.name];let i="";return Array.isArray(r)?i=r.length>0?r.join(", "):"None selected":i=r||"",e.jsx("div",{className:"col-12 col-md-6",children:e.jsxs("div",{children:[e.jsxs("small",{className:"text-muted fw-medium",children:[s.label,":"]}),e.jsx("span",{className:"fw-medium text-dark ms-2",children:i||e.jsx("em",{className:"text-muted",children:"Not filled"})})]})},s.name)})})]})]},t.id)})]})})}),e.jsx("div",{className:"card shadow-sm",children:e.jsxs("div",{className:"card-body p-3 p-md-5",children:[e.jsx("h2",{className:"h4 fw-semibold text-dark mb-4 text-center",children:c[l].title}),e.jsx("div",{className:"row justify-content-center",children:e.jsx("div",{className:"col-12 col-md-10",children:e.jsx("div",{className:"form-field-column",children:e.jsx("div",{className:"row",children:c[l].fields.map(t=>F(t,c[l].id))})})})}),e.jsxs("div",{className:"d-flex flex-column flex-md-row justify-content-between mt-4 mt-md-5 pt-4 border-top",children:[e.jsxs("button",{onClick:$,disabled:l===0,className:`btn ${l===0?"btn-outline-secondary":"btn-secondary"} d-flex align-items-center justify-content-center px-4 py-2 mb-3 mb-md-0`,style:{visibility:l===0?"hidden":"visible"},children:[e.jsx(q,{size:22,className:"me-2"}),"Previous"]}),l===c.length-1?e.jsxs("button",{onClick:A,disabled:!p,className:`btn ${p?"btn-success clr-white":"btn-outline-success"} d-flex align-items-center justify-content-center px-4 py-2`,children:[e.jsx(S,{size:22,className:"me-2"}),"Submit"]}):e.jsxs("button",{onClick:U,disabled:!p,className:`btn ${p?"bg-blue clr-white":"btn-outline-primary"} d-flex align-items-center justify-content-center px-4 py-2`,children:["Next",e.jsx(B,{size:22,className:"ms-2"})]})]})]})})]})})})})]})};export{ee as default};
