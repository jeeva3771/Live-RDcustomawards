import{r as m,j as t}from"./index-CfF7sZOk.js";import{c as h}from"./createLucideIcon-CbSXwLe7.js";import{U as B}from"./user-hHdTCITC.js";import{P as U,C as S,a as L,b as O,c as P,d as V,X as G}from"./x-Bh3qgEdl.js";import{I as J}from"./image-D_PDgkXN.js";import{U as W}from"./upload-k96gNdRS.js";/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],Z=h("briefcase",Q);/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]],Y=h("building",X);/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],ee=h("clock",K);/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],ae=h("credit-card",te);/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],le=h("file-text",re),me=()=>{const[s,x]=m.useState(0),[u,f]=m.useState([]),j=m.useRef(null),[q,g]=m.useState(!1),[c,D]=m.useState({jobDetails:{jobQty:"",jobCompletionDate:""},clientDetails:{clientName:"",contactPerson:"",phoneNumber:"",email:"",billingStreetAddress:"",billingStreetAddress2:"",billingCity:"",billingState:"",billingPostalCode:"",deliveryStreetAddress:"",deliveryStreetAddress2:"",deliveryCity:"",deliveryState:"",deliveryPostalCode:"",deliveryType:"Single Point",courier:"RD Courier",productName:"",productSize:"",pricePerPc:""},packaging:{packingType:"",innerPackingType:"",premiumPackingOptions:[],packingInstructions:"",packingMode:""},payment:{paymentType:""},productImages:{images:[]},timeDetails:{time:""},bankDetails:{bankName:"",accountNumber:"",ifscCode:"",accountHolderName:"",branch:""},remarks:{remarks:""}}),[p,N]=m.useState(new Set),[A,M]=m.useState(new Set),o=[{id:"jobDetails",title:"Job Details",icon:Z,fields:[{name:"jobQty",label:"Job QTY",type:"number",required:!0},{name:"jobCompletionDate",label:"Job Completion Date",type:"date",required:!0}]},{id:"clientDetails",title:"Client Details",icon:B,fields:[{name:"clientName",label:"Client Name",type:"text",required:!0},{name:"contactPerson",label:"Contact Person",type:"text",required:!0},{name:"phoneNumber",label:"Phone Number",type:"tel",required:!0,placeholder:"Enter phone number"},{name:"email",label:"Email",type:"email",required:!0,placeholder:"example@example.com"},{name:"billingAddressHeader",label:"Billing Address",type:"header"},{name:"billingStreetAddress",label:"Street Address",type:"text",required:!1},{name:"billingStreetAddress2",label:"Street Address Line 2",type:"text",required:!1},{name:"billingCity",label:"City",type:"text",required:!1,width:"half"},{name:"billingState",label:"State / Province",type:"text",required:!1,width:"half"},{name:"billingPostalCode",label:"Postal / Zip Code",type:"text",required:!1},{name:"deliveryAddressHeader",label:"Delivery Address",type:"header"},{name:"deliveryStreetAddress",label:"Street Address",type:"text",required:!0},{name:"deliveryStreetAddress2",label:"Street Address Line 2",type:"text",required:!1},{name:"deliveryCity",label:"City",type:"text",required:!0,width:"half"},{name:"deliveryState",label:"State / Province",type:"text",required:!0,width:"half"},{name:"deliveryPostalCode",label:"Postal / Zip Code",type:"text",required:!0},{name:"deliveryTypeHeader",label:"Delivery Type",type:"header"},{name:"deliveryType",label:"Delivery Type",type:"radio",required:!0,options:[{value:"Single Point",label:"Single Point"},{value:"Multi Point",label:"Multi Point"}]},{name:"courierHeader",label:"Courier",type:"header"},{name:"courier",label:"Courier",type:"radio",required:!0,options:[{value:"Client Courier",label:"Client Courier"},{value:"RD Courier",label:"RD Courier"},{value:"Hand Delivery",label:"Hand Delivery"}]},{name:"productHeader",label:"Product Information",type:"header"},{name:"productName",label:"Product Name",type:"text",required:!0},{name:"productSize",label:"Product Size",type:"text",required:!0},{name:"pricePerPc",label:"Price Per Piece",type:"number",required:!0,placeholder:"Enter price per piece"}]},{id:"packaging",title:"Packaging Details",icon:U,fields:[{name:"packingType",label:"Select Type of Packing",type:"radio",required:!0,options:[{value:"Standard",label:"Standard"},{value:"Premium",label:"Premium"},{value:"Custom",label:"Custom"},{value:"Gift Box",label:"Gift Box"}]},{name:"innerPackingType",label:"Inner Packing Type",type:"select",required:!0,options:["Please Select","Foam Padding","Tissue Paper","Bubble Wrap","Velvet Pouch","Air Cushions","None"]},{name:"premiumPackingOptions",label:"Premium Packing Options",type:"checkbox-group",required:!1,options:[{value:"Certificate",label:"Certificate"},{value:"Gift Card",label:"Gift Card"},{value:"Ribbon",label:"Ribbon"},{value:"Custom Tag",label:"Custom Tag"},{value:"Instruction Manual",label:"Instruction Manual"}]},{name:"packingInstructions",label:"Packing Instructions",type:"textarea",required:!1,placeholder:"Enter detailed packing instructions..."},{name:"packingMode",label:"Packing Mode",type:"radio",required:!0,options:[{value:"Individual",label:"Individual"},{value:"Consolidated",label:"Consolidated"}]}]},{id:"payment",title:"Payment",icon:ae,fields:[{name:"paymentType",label:"Payment Type",type:"radio",required:!0,options:[{value:"100% Advance",label:"100% Advance"},{value:"50% Advance & Balance when Material is Ready",label:"50% Advance & Balance when Material is Ready"},{value:"Corporate Credit",label:"Corporate Credit"}]}]},{id:"productImages",title:"Product Images",icon:J,fields:[{name:"images",label:"",type:"image-upload",required:!1}]},{id:"timeDetails",title:"Time",icon:ee,fields:[{name:"time",label:"Time",type:"time",required:!0}]},{id:"bankDetails",title:"Bank Details",icon:Y,fields:[{name:"bankName",label:"Bank Name",type:"text",required:!0},{name:"accountNumber",label:"Account Number",type:"text",required:!0},{name:"ifscCode",label:"IFSC Code",type:"text",required:!0,placeholder:"Enter IFSC code"},{name:"accountHolderName",label:"Account Holder Name",type:"text",required:!0},{name:"branch",label:"Branch",type:"text",required:!0}]},{id:"remarks",title:"Remarks",icon:le,fields:[{name:"remarks",label:"Remarks",type:"textarea",required:!1,placeholder:"Additional remarks or notes..."}]}],d=(e,r,n)=>{D(l=>({...l,[e]:{...l[e],[r]:n}}))},k=e=>{const n=Array.from(e).slice(0,3-u.length).map(l=>URL.createObjectURL(l));f(l=>[...l,...n]),d("productImages","images",[...u,...n])},y=e=>{e.preventDefault(),e.stopPropagation(),e.type==="dragenter"||e.type==="dragover"?g(!0):e.type==="dragleave"&&g(!1)},$=e=>{e.preventDefault(),e.stopPropagation(),g(!1),e.dataTransfer.files&&e.dataTransfer.files[0]&&k(e.dataTransfer.files)},z=e=>{const r=u.filter((n,l)=>l!==e);f(r),d("productImages","images",r)},v=e=>{const r=o[e],n=c[r.id];return r.fields.every(l=>{if(l.type==="header"||l.type==="checkbox-group"||l.type==="image-upload")return!0;if(l.required){const a=n[l.name];return l.type==="select"?a&&a.trim()!==""&&a!=="Please Select":a&&a.toString().trim()!==""}return!0})},T=()=>{v(s)&&(N(e=>new Set([...e,s])),s<o.length-1&&x(s+1))},H=()=>{s>0&&x(s-1)},w=e=>{(e<=s||p.has(e))&&x(e)},_=e=>{M(r=>{const n=new Set(r);return n.has(e)?n.delete(e):n.add(e),n})},E=()=>{v(s)&&(N(e=>new Set([...e,s])),alert(`Sales Order Form submitted successfully!

Job Number will be generated.`))},b=v(s),R=(e,r)=>{if(e.type==="header")return t.jsx("div",{className:"col-12 mb-4 mt-5 first:mt-0",children:t.jsx("h3",{className:"h5 fw-semibold text-dark mb-3 pb-2 border-bottom d-flex align-items-center",children:e.label})},e.name);if(e.type==="radio")return t.jsxs("div",{className:"col-12 mb-4",children:[t.jsxs("label",{className:"form-label fw-medium fs-6 mb-3",children:[e.label,e.required&&t.jsx("span",{className:"text-danger ms-1",children:"*"})]}),t.jsx("div",{className:"row g-2",children:e.options.map(a=>t.jsx("div",{className:"col-12 col-sm-6 col-md-4",children:t.jsxs("div",{className:"form-check border rounded p-3 h-100",children:[t.jsx("input",{className:"form-check-input",type:"radio",name:e.name,id:`${e.name}_${a.value.replace(/\s+/g,"_")}`,value:a.value,checked:c[r][e.name]===a.value,onChange:i=>d(r,e.name,i.target.value),required:e.required}),t.jsx("label",{className:"form-check-label fw-medium",htmlFor:`${e.name}_${a.value.replace(/\s+/g,"_")}`,children:a.label})]})},a.value))})]},e.name);if(e.type==="checkbox-group")return t.jsxs("div",{className:"col-12 mb-4",children:[t.jsxs("label",{className:"form-label fw-medium fs-6 mb-3",children:[e.label,e.required&&t.jsx("span",{className:"text-danger ms-1",children:"*"})]}),t.jsx("div",{className:"row g-2",children:e.options.map(a=>t.jsx("div",{className:"col-12 col-sm-6 col-lg-4",children:t.jsxs("div",{className:"form-check border rounded p-3 h-100",children:[t.jsx("input",{className:"form-check-input",type:"checkbox",id:`${e.name}_${a.value.replace(/\s+/g,"_")}`,checked:c[r][e.name]&&c[r][e.name].includes(a.value),onChange:i=>{const C=c[r][e.name]||[],F=i.target.checked?[...C,a.value]:C.filter(I=>I!==a.value);d(r,e.name,F)}}),t.jsx("label",{className:"form-check-label fw-medium",htmlFor:`${e.name}_${a.value.replace(/\s+/g,"_")}`,children:a.label})]})},a.value))})]},e.name);if(e.type==="image-upload")return t.jsxs("div",{className:"col-12 mb-4",children:[t.jsxs("label",{className:"form-label fw-medium fs-6 mb-3",children:[e.label,e.required&&t.jsx("span",{className:"text-danger ms-1",children:"*"})]}),t.jsxs("div",{className:`border-2 border-dashed rounded-lg p-4 text-center ${q?"border-primary bg-light":"border-muted"}`,onDragEnter:y,onDragLeave:y,onDragOver:y,onDrop:$,children:[t.jsx(W,{size:48,className:"mx-auto mb-3 text-muted"}),t.jsx("p",{className:"mb-3",children:"Drag and drop images here, or click to browse"}),t.jsx("input",{ref:j,type:"file",multiple:!0,accept:"image/*",onChange:a=>k(a.target.files),className:"d-none"}),t.jsx("button",{type:"button",className:"btn btn-outline-primary",onClick:()=>{var a;return(a=j.current)==null?void 0:a.click()},disabled:u.length>=3,children:"Choose Images"}),t.jsx("p",{className:"small text-muted mt-2",children:"Maximum 3 images allowed"})]}),u.length>0&&t.jsx("div",{className:"mt-3",children:t.jsx("div",{className:"row g-3",children:u.map((a,i)=>t.jsx("div",{className:"col-4",children:t.jsxs("div",{className:"position-relative",children:[t.jsx("img",{src:a,alt:`Product ${i+1}`,className:"img-fluid rounded border",style:{aspectRatio:"1/1",objectFit:"cover"}}),t.jsx("button",{type:"button",className:"btn btn-danger btn-sm position-absolute top-0 end-0 m-1",onClick:()=>z(i),style:{padding:"2px 6px"},children:t.jsx(G,{size:12})})]})},i))})})]},e.name);if(e.type==="textarea")return t.jsxs("div",{className:"col-12 mb-4",children:[t.jsxs("label",{htmlFor:e.name,className:"form-label fw-medium fs-6",children:[e.label,e.required&&t.jsx("span",{className:"text-danger ms-1",children:"*"})]}),t.jsx("textarea",{className:"form-control form-control-lg",id:e.name,name:e.name,rows:"4",value:c[r][e.name],onChange:a=>d(r,e.name,a.target.value),placeholder:e.placeholder||`Enter ${e.label.toLowerCase()}`,required:e.required})]},e.name);const l=e.width==="half"?"col-md-6":"col-12";return t.jsxs("div",{className:`${l} mb-4`,children:[t.jsxs("label",{htmlFor:e.name,className:"form-label fw-medium fs-6",children:[e.label,e.required&&t.jsx("span",{className:"text-danger ms-1",children:"*"})]}),e.type==="select"?t.jsx("select",{className:"form-select form-select-lg",id:e.name,name:e.name,value:c[r][e.name],onChange:a=>d(r,e.name,a.target.value),required:e.required,children:e.options.map((a,i)=>t.jsx("option",{value:a,children:a},i))}):t.jsx("input",{type:e.type,className:"form-control form-control-lg",id:e.name,name:e.name,value:c[r][e.name],onChange:a=>d(r,e.name,a.target.value),placeholder:e.placeholder||(e.type==="date"?"yyyy-mm-dd":e.type==="time"?"HH:MM":`Enter ${e.label.toLowerCase()}`),required:e.required,step:e.type==="number"?"0.01":void 0})]},e.name)};return t.jsxs(t.Fragment,{children:[t.jsx("style",{children:`
        .step-indicator {
          width: 50px;
          height: 50px;
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
          gap: 0.5rem;
          max-width: 100%;
          overflow-x: auto;
          padding: 0 10px;
        }

        .step-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 80px;
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
          background-color: #0061ed;
          color: white;
        }

        /* Enhanced mobile responsiveness */
        @media (max-width: 768px) {
          .step-indicator {
            width: 40px;
            height: 40px;
          }

          .steps-container {
            // gap: 0.3rem;
            justify-content: flex-start;
            padding: 0 5px;
          }

          .step-item {
            min-width: 70px;
          }

          .container-fluid {
            padding-left: 15px;
            padding-right: 15px;
          }

          .card-body {
            padding: 1.5rem !important;
          }

          .form-control-lg, .form-select-lg {
            font-size: 1rem;
            padding: 0.75rem;
          }

          .btn {
            padding: 0.5rem 1rem;
          }

          .h4 {
            font-size: 1.25rem;
          }

          .display-5 {
            font-size: 2rem;
          }

          .col-sm-6 {
            flex: 0 0 auto;
            width: 100%;
          }

          .col-md-4 {
            flex: 0 0 auto;
            width: 50%;
          }

          .col-lg-4 {
            flex: 0 0 auto;
            width: 100%;
          }
        }

        @media (max-width: 576px) {
          .step-indicator {
            width: 35px;
            height: 35px;
          }

          .step-item {
            min-width: 60px;
          }

          .card-body {
            padding: 1rem !important;
          }

          .btn {
            font-size: 0.875rem;
            padding: 0.375rem 0.75rem;
          }

          .col-4 {
            flex: 0 0 auto;
            width: 100%;
          }

          .col-md-4, .col-sm-6 {
            flex: 0 0 auto;
            width: 100%;
          }

          .d-flex.justify-content-between {
            flex-direction: column;
            gap: 1rem;
          }

          .d-flex.justify-content-between > button {
            width: 100%;
            justify-content: center;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .col-md-4 {
            flex: 0 0 auto;
            width: 50%;
          }

          .col-lg-4 {
            flex: 0 0 auto;
            width: 33.333333%;
          }
        }

        /* Enhanced form styling */
        .form-check {
          transition: all 0.2s ease;
        }

        .form-check:hover {
          background-color: #f8f9fa;
        }

        .form-check input:checked + label {
          color: #0061ed;
          font-weight: 600;
        }

        .border-dashed {
          border-style: dashed !important;
        }

        .bg-light {
          background-color: #f8f9fa !important;
        }
      `}),t.jsx("div",{className:"container-fluid bg-light min-vh-100",children:t.jsx("div",{className:"container py-4 py-md-5",children:t.jsx("div",{className:"row justify-content-center",children:t.jsxs("div",{className:"col-lg-8",children:[t.jsxs("div",{className:"mb-4 mb-md-5 text-center",children:[t.jsx("h1",{className:"display-5 fw-bold text-dark mb-3",children:"Sales Order Form"}),t.jsx("p",{className:"text-muted fs-5",children:"Complete all steps to generate job number"})]}),t.jsx("div",{className:"mb-4 mb-md-5",children:t.jsx("div",{className:"steps-container",children:o.map((e,r)=>{const n=e.icon,l=p.has(r),a=r===s,i=r<=s||p.has(r);return t.jsxs("div",{className:"step-item",children:[t.jsx("button",{onClick:()=>i&&w(r),disabled:!i,className:`step-indicator ${l?"completed":a?"current":"pending"} ${i?"clickable":""} mb-2`,children:l?t.jsx(S,{size:22}):t.jsx(n,{size:22})}),t.jsxs("div",{className:"text-center",children:[t.jsxs("p",{className:`small fw-medium mb-1 ${a?"clr-blue":l?"text-success":"text-muted"}`,style:{fontSize:"10px"},children:["Step ",r+1]}),t.jsx("p",{className:`small mb-0 ${a?"clr-blue":l?"text-success":"text-muted"}`,style:{fontSize:"9px",lineHeight:"1.2"},children:e.title})]})]},e.id)})})}),s>0&&t.jsx("div",{className:"mb-4",children:t.jsx("div",{className:"card shadow-sm",children:t.jsxs("div",{className:"card-body",children:[t.jsx("h3",{className:"h5 fw-semibold text-dark mb-4",children:"Previous Steps Summary"}),o.slice(0,s).map((e,r)=>{const n=A.has(r);return t.jsxs("div",{className:"border rounded mb-3",children:[t.jsxs("button",{className:"previous-step-header w-100 p-3 d-flex justify-content-between align-items-center",type:"button",onClick:()=>_(r),children:[t.jsxs("div",{className:"d-flex align-items-center",children:[t.jsx("span",{className:`status-dot ${p.has(r)?"completed":"pending"}`}),t.jsx("span",{className:`fw-medium ${p.has(r)?"text-success":"text-muted"}`,children:e.title}),t.jsxs("span",{className:"text-muted small ms-2",children:["(Step ",r+1,")"]})]}),t.jsxs("div",{className:"d-flex align-items-center",children:[t.jsx("span",{className:"text-muted small me-2 d-none d-sm-inline",children:n?"Hide Details":"Show Details"}),n?t.jsx(L,{size:18,className:"text-muted"}):t.jsx(O,{size:18,className:"text-muted"})]})]}),n&&t.jsxs("div",{className:"border-top p-3",children:[t.jsx("div",{className:"row g-3",children:e.fields.filter(l=>l.type!=="header").map(l=>{const a=c[e.id][l.name];let i="";return Array.isArray(a)?i=a.length>0?a.join(", "):"None selected":i=a||"",t.jsx("div",{className:"col-12 col-md-6",children:t.jsxs("div",{children:[t.jsxs("small",{className:"text-muted fw-medium",children:[l.label,":"]}),t.jsx("span",{className:"fw-medium text-dark ms-2",children:i||t.jsx("em",{className:"text-muted",children:"Not filled"})})]})},l.name)})}),t.jsx("div",{className:"mt-3 pt-3 border-top",children:t.jsxs("button",{className:"btn btn-outline-primary clr-hover btn-sm",onClick:()=>w(r),children:[t.jsx(P,{size:16,className:"me-1"}),"Go back to edit this step"]})})]})]},e.id)})]})})}),t.jsx("div",{className:"card shadow-sm",children:t.jsxs("div",{className:"card-body p-3 p-md-5",children:[t.jsx("h2",{className:"h4 fw-semibold text-dark mb-4 text-center",children:o[s].title}),t.jsx("div",{className:"row justify-content-center",children:t.jsx("div",{className:"col-12 col-md-10",children:t.jsx("div",{className:"form-field-column",children:t.jsx("div",{className:"row",children:o[s].fields.map(e=>R(e,o[s].id))})})})}),t.jsxs("div",{className:"d-flex flex-column flex-md-row justify-content-between mt-4 mt-md-5 pt-4 border-top",children:[t.jsxs("button",{onClick:H,disabled:s===0,className:`btn ${s===0?"btn-outline-secondary":"btn-secondary"} d-flex align-items-center justify-content-center px-4 py-2 mb-3 mb-md-0`,style:{visibility:s===0?"hidden":"visible"},children:[t.jsx(P,{size:22,className:"me-2"}),"Previous"]}),s===o.length-1?t.jsxs("button",{onClick:E,disabled:!b,className:`btn ${b?"btn-success":"btn-outline-success"} d-flex align-items-center justify-content-center px-4 py-2`,children:[t.jsx(S,{size:22,className:"me-2"}),"Submit & Generate Job Number"]}):t.jsxs("button",{onClick:T,disabled:!b,className:`btn ${b?"bg-blue clr-white":"btn-outline-primary"} d-flex align-items-center justify-content-center px-4 py-2`,children:["Next",t.jsx(V,{size:22,className:"ms-2"})]})]})]})})]})})})})]})};export{me as default};
