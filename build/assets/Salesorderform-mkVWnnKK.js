import{r as h,j as i}from"./index-CIYNhUdU.js";import{A as B}from"./Textarea-6jSTGdig.js";import{c as u}from"./save-CsTBKXwP.js";/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],_=u("check",R);/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],M=u("chevron-left",F);/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],k=u("chevron-right",$);/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],Q=u("square-pen",L),U=()=>{var v;const[l,p]=h.useState(0),[t,j]=h.useState({date:"",jobOwner:"",jobQty:"",jobCompletionDate:"",clientName:"",contactPerson:"",phoneNumber:"",email:"",billingStreetAddress:"",billingStreetAddress2:"",billingCity:"",billingState:"",billingPostalCode:"",deliveryStreetAddress:"",deliveryStreetAddress2:"",deliveryCity:"",deliveryState:"",deliveryPostalCode:"",deliveryType:"",courier:"",productName:"",productSize:"",packaging:"",packingType:"",outerPack:"",innerPack:"",accessories:[],payment:"",takePhoto:null,imageUpload:null,time:"",bankDetails:""}),[N,P]=h.useState(!1),[g,f]=h.useState(!1),c=[{id:"welcome",title:"Sales Order Form",type:"welcome",subtitle:"Welcome! Please fill out this form to submit your sales order."},{id:"date",title:"Date",field:"date",type:"date",placeholder:"yyyy-mm-dd",required:!0},{id:"job-info",title:"JOB NO",subtitle:"3 Questions",isSection:!0,required:!0},{id:"job-owner",title:"Job Owner",field:"jobOwner",type:"select",placeholder:"Please Select",options:["John Doe","RD","	Mike Johnson","David Chen"],required:!0},{id:"job-qty",title:"JOB QTY",field:"jobQty",type:"number",placeholder:"e.g. 23",required:!0},{id:"job-completion",title:"JOB COMPLETION DATE",field:"jobCompletionDate",type:"date",placeholder:"yyyy-mm-dd",required:!0},{id:"client-section",title:"CLIENT DETAILS",subtitle:"15 Questions",isSection:!0,required:!0},{id:"client-name",title:"Client Name",field:"clientName",type:"text",placeholder:"",required:!0},{id:"contact-person",title:"Contact Person",field:"contactPerson",type:"text",placeholder:"",required:!0},{id:"phone-number",title:"Phone Number",field:"phoneNumber",type:"tel",placeholder:"(___) ___-____",helper:"Please enter a valid phone number.",required:!0},{id:"email",title:"Email",field:"email",type:"email",placeholder:"",helper:"example@example.com",required:!0},{id:"billing-address",title:"Billing Address",type:"address",fields:[{field:"billingStreetAddress",placeholder:"",label:"Street Address"},{field:"billingStreetAddress2",placeholder:"Street Address Line 2",label:""},{field:"billingCity",placeholder:"City",label:""},{field:"billingState",placeholder:"State / Province",label:""},{field:"billingPostalCode",placeholder:"Postal / Zip Code",label:""}],required:!0},{id:"delivery-address",title:"Delivery Address",type:"address",fields:[{field:"deliveryStreetAddress",placeholder:"",label:"Street Address"},{field:"deliveryStreetAddress2",placeholder:"Street Address Line 2",label:""},{field:"deliveryCity",placeholder:"City",label:""},{field:"deliveryState",placeholder:"State / Province",label:""},{field:"deliveryPostalCode",placeholder:"Postal / Zip Code",label:""}],required:!0},{id:"delivery-type",title:"Delivery Type",field:"deliveryType",type:"radio",options:["Single Point","Multi Point"],required:!0},{id:"courier",title:"Courier",field:"courier",type:"radio",options:["Client Courier","RD Courier"],required:!0},{id:"product-name",title:"Product Name",field:"productName",type:"text",placeholder:"",required:!0},{id:"product-size",title:"Product Size",field:"productSize",type:"text",placeholder:"",required:!0},{id:"packaging-section",title:"PACKAGING DETAILS",subtitle:"5 Questions",isSection:!0},{id:"packaging",title:"Packaging",field:"packaging",type:"text",placeholder:"",required:!0},{id:"packing-type",title:"Packing Type",field:"packingType",type:"radio",options:["Standard","Premium","Gift Box","Custom"],required:!0},{id:"outer-pack",title:"Outer Pack",field:"outerPack",type:"select",placeholder:"Please Select",options:["Cardboard Box","Wooden Crate","Plastic Container","Bubble Wrap","None"],required:!0},{id:"inner-pack",title:"Inner Pack",field:"innerPack",type:"select",placeholder:"Please Select",options:["Foam Padding","Tissue Paper","Bubble Wrap","Velvet Pouch","None"],required:!0},{id:"accessories",title:"Accessories (Selection)",field:"accessories",type:"checkbox",options:["Certificate","Gift Card","Ribbon","Custom Tag","Instruction Manual"]},{id:"payment",title:"Payment",field:"payment",type:"radio-vertical",options:["100% Advance","50% Advance & Balance when Material is Ready","Corporate Credit"],required:!0},{id:"take-photo",title:"Take Photo",field:"takePhoto",type:"camera",placeholder:""},{id:"image-upload",title:"Image Upload",field:"imageUpload",type:"file",placeholder:""},{id:"time",title:"Time",field:"time",type:"time",placeholder:"14:25",required:!0},{id:"bank-details",title:"A/c Holder's Name : RD CUSTOM AWARDS PRIVATE LIMITED Bank Name : HDFC BANK A/c No. : 59209820490266 Branch : KALINA Branch IFS Code: HDFC0001573",field:"bankDetails",type:"textarea",placeholder:"",required:!0},{id:"review",title:"Review and Submit",type:"review"}],b=c.length,C=(l+1)/b*100,d=(e,a)=>{j(n=>({...n,[e]:a}))},S=()=>{l<b-1&&(p(l+1),f(!1))},z=()=>{l>0&&p(l-1)},A=()=>{P(!0)},T=e=>{const a=c.findIndex(n=>n.field===e?!0:n.fields?n.fields.some(m=>m.field===e):!1);a!==-1&&(f(!0),p(a))},x=e=>{if(e.includes("billing")||e.includes("delivery")){const a=e.includes("billing")?"billing":"delivery";return[t[`${a}StreetAddress`],t[`${a}StreetAddress2`],t[`${a}City`],t[`${a}State`],t[`${a}PostalCode`]].filter(m=>m).join(", ")}return t[e]},O=()=>{var a,n,m,w;const e=c[l];if(e.type==="welcome")return i.jsxs("div",{className:"welcome-container",children:[i.jsx("h1",{className:"welcome-title",children:e.title}),i.jsx("p",{className:"welcome-subtitle",children:e.subtitle}),i.jsx("div",{className:"welcome-features",children:i.jsxs("div",{className:"feature-item",children:[i.jsx("div",{className:"feature-number",children:"20+"}),i.jsx("div",{className:"feature-text",children:"Questions to complete"})]})})]});if(e.isSection)return i.jsxs("div",{className:"section-header",children:[i.jsx("h2",{className:"section-title",children:e.title}),i.jsx("p",{className:"section-subtitle",children:e.subtitle})]});if(e.type==="review"){const r=[{label:"1. Date",field:"date",value:t.date},{label:"2. Job Owner",field:"jobOwner",value:t.jobOwner},{label:"3. JOB QTY",field:"jobQty",value:t.jobQty},{label:"4. JOB COMPLETION DATE",field:"jobCompletionDate",value:t.jobCompletionDate},{label:"5. Client Name",field:"clientName",value:t.clientName},{label:"6. Contact Person",field:"contactPerson",value:t.contactPerson},{label:"7. Phone Number",field:"phoneNumber",value:t.phoneNumber},{label:"8. Email",field:"email",value:t.email},{label:"9. Billing Address",field:"billingStreetAddress",value:x("billingStreetAddress")},{label:"10. Delivery Address",field:"deliveryStreetAddress",value:x("deliveryStreetAddress")},{label:"11. Delivery Type",field:"deliveryType",value:t.deliveryType},{label:"12. Courier",field:"courier",value:t.courier},{label:"13. Product Name",field:"productName",value:t.productName},{label:"14. Product Size",field:"productSize",value:t.productSize},{label:"15. Packaging",field:"packaging",value:t.packaging},{label:"16. Packing Type",field:"packingType",value:t.packingType},{label:"17. Outer Pack",field:"outerPack",value:t.outerPack},{label:"18. Inner Pack",field:"innerPack",value:t.innerPack},{label:"19. Accessories",field:"accessories",value:Array.isArray(t.accessories)?t.accessories.join(", "):t.accessories},{label:"20. Payment",field:"payment",value:t.payment},{label:"21. Take Photo",field:"takePhoto",value:t.takePhoto?"Photo taken":""},{label:"22. Image Upload",field:"imageUpload",value:t.imageUpload?"Image uploaded":""},{label:"23. Time",field:"time",value:t.time,highlight:!0},{label:"24. Bank Details",field:"bankDetails",value:t.bankDetails}];return i.jsx("div",{className:"review-container",children:i.jsxs("div",{className:"review-card",children:[i.jsx("div",{className:"review-header",children:i.jsx("h2",{className:"review-title",children:"Sales Order Form - Full Details"})}),i.jsx("div",{className:"review-content",children:r.map((o,s)=>i.jsxs("div",{className:"review-row",children:[i.jsx("span",{className:"review-label",children:o.label}),i.jsxs("div",{className:"review-value-container",children:[i.jsx("span",{className:`review-value ${o.highlight?"highlight":""}`,children:o.value||"-"}),i.jsx("button",{onClick:()=>T(o.field),className:"edit-btn",title:"Edit this field",children:i.jsx(Q,{size:14})})]})]},s))})]})})}return i.jsxs("div",{className:"form-step",children:[i.jsx("h2",{className:"step-title",children:e.title}),i.jsxs("div",{className:"form-field",children:[e.type==="select"?i.jsxs("div",{className:"select-wrapper",children:[i.jsxs("select",{value:t[e.field]||"",onChange:r=>d(e.field,r.target.value),className:"form-input form-select",children:[i.jsx("option",{value:"",children:e.placeholder}),(a=e.options)==null?void 0:a.map((r,o)=>i.jsx("option",{value:r,children:r},o))]}),i.jsx(k,{className:"select-icon"})]}):e.type==="date"?i.jsx("div",{className:"date-wrapper",children:i.jsx("input",{type:"date",value:t[e.field]||"",onChange:r=>d(e.field,r.target.value),className:"form-input"})}):e.type==="time"?i.jsx("div",{className:"time-wrapper",children:i.jsx("input",{type:"time",value:t[e.field]||"",onChange:r=>d(e.field,r.target.value),className:"form-input"})}):e.type==="textarea"?i.jsx(B,{}):e.type==="camera"?i.jsxs("div",{className:"camera-upload",children:[i.jsx("button",{onClick:()=>d(e.field,"photo-taken"),className:"upload-btn",children:"TAKE PHOTO"}),t[e.field]&&i.jsx("p",{className:"success-text",children:"Photo captured!"})]}):e.type==="file"?i.jsxs("div",{className:"file-upload",children:[i.jsx("button",{onClick:()=>d(e.field,"file-uploaded"),className:"upload-btn",children:"BROWSE AND PREVIEW"}),t[e.field]&&i.jsx("p",{className:"success-text",children:"File uploaded!"})]}):e.type==="address"?i.jsxs("div",{className:"address-fields",children:[e.fields.slice(0,2).map((r,o)=>i.jsxs("div",{className:"address-field",children:[r.label&&i.jsxs("label",{className:"field-label",children:[r.label,e.required===!0?i.jsx("span",{className:"text-danger fs-6",children:"*"}):""]}),i.jsx("input",{type:"text",value:t[r.field]||"",onChange:s=>d(r.field,s.target.value),placeholder:r.placeholder,className:"form-input"})]},r.field)),i.jsxs("div",{className:"address-row",children:[i.jsx("input",{type:"text",value:t[e.fields[2].field]||"",onChange:r=>d(e.fields[2].field,r.target.value),placeholder:e.fields[2].placeholder,className:"form-input"}),i.jsx("input",{type:"text",value:t[e.fields[3].field]||"",onChange:r=>d(e.fields[3].field,r.target.value),placeholder:e.fields[3].placeholder,className:"form-input"})]}),i.jsx("div",{className:"postal-field",children:i.jsx("input",{type:"text",value:t[e.fields[4].field]||"",onChange:r=>d(e.fields[4].field,r.target.value),placeholder:e.fields[4].placeholder,className:"form-input"})})]}):e.type==="radio"?i.jsx("div",{className:"radio-grid",children:(n=e.options)==null?void 0:n.map((r,o)=>i.jsxs("label",{className:"radio-option",children:[i.jsx("input",{type:"radio",name:e.field,value:r,checked:t[e.field]===r,onChange:s=>d(e.field,s.target.value),className:"radio-input"}),i.jsx("span",{className:"radio-label",children:r})]},o))}):e.type==="radio-vertical"?i.jsx("div",{className:"radio-vertical",children:(m=e.options)==null?void 0:m.map((r,o)=>i.jsxs("label",{className:"radio-option",children:[i.jsx("input",{type:"radio",name:e.field,value:r,checked:t[e.field]===r,onChange:s=>d(e.field,s.target.value),className:"radio-input"}),i.jsx("span",{className:"radio-label",children:r})]},o))}):e.type==="checkbox"?i.jsx("div",{className:"checkbox-group",children:(w=e.options)==null?void 0:w.map((r,o)=>i.jsxs("label",{className:"checkbox-option",children:[i.jsx("input",{type:"checkbox",value:r,checked:Array.isArray(t[e.field])?t[e.field].includes(r):!1,onChange:s=>{const y=Array.isArray(t[e.field])?t[e.field]:[],I=s.target.checked?[...y,r]:y.filter(D=>D!==r);d(e.field,I)},className:"checkbox-input"}),i.jsx("span",{className:"checkbox-label",children:r})]},o))}):i.jsx("input",{type:e.type,value:t[e.field]||"",onChange:r=>d(e.field,r.target.value),placeholder:e.placeholder,className:"form-input"}),e.helper&&i.jsx("p",{className:"helper-text",children:e.helper})]})]})},q=()=>{const e=c[l];return g&&(e==null?void 0:e.type)!=="review"?"SAVE & BACK TO REVIEW":(e==null?void 0:e.type)==="review"?"REVIEW AND SUBMIT":(e==null?void 0:e.type)==="welcome"?"START FORM":"NEXT"},E=()=>{const e=c[l];g&&(e==null?void 0:e.type)!=="review"?(p(c.length-1),f(!1)):(e==null?void 0:e.type)==="review"?A():S()};return i.jsxs("div",{className:"wizard-container",children:[i.jsx("style",{children:`
        * {
          box-sizing: border-box;
        }

        .wizard-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem;
        }

        @media (min-width: 768px) {
          .wizard-container {
            padding: 1rem;
          }
        }

        .wizard-content {
          width: 100%;
          max-width: 48rem;
        }

        .welcome-container {
          text-align: center;
          padding: 1rem 0;
        }

        @media (min-width: 768px) {
          .welcome-container {
            padding: 2rem 0;
          }
        }

        .welcome-icon {
          display: flex;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .welcome-title {
          font-size: 2rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 1rem;
          margin-top: 0;
        }

        @media (min-width: 768px) {
          .welcome-title {
            font-size: 2.5rem;
          }
        }

        .welcome-subtitle {
          color: #6b7280;
          font-size: 1rem;
          margin-bottom: 2rem;
          margin-top: 0;
          line-height: 1.6;
        }

        @media (min-width: 768px) {
          .welcome-subtitle {
            font-size: 1.125rem;
          }
        }

        .welcome-features {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .feature-item {
          text-align: center;
          min-width: 120px;
        }

        .feature-number {
          font-size: 2rem;
          font-weight: bold;
          color: #0061ed;
          margin-bottom: 0.5rem;
        }

        .feature-text {
          color: #6b7280;
          font-size: 0.875rem;
        }

        .thank-you-card {
          background: white;
          border-radius: 1rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          padding: 2rem;
          text-align: center;
        }

        @media (min-width: 768px) {
          .thank-you-card {
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
            padding: 3rem;
          }
        }

        .success-icon {
          width: 4rem;
          height: 4rem;
          background: #22c55e;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }

        @media (min-width: 768px) {
          .success-icon {
            width: 5rem;
            height: 5rem;
          }
        }

        .thank-you-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 1rem;
          margin-top: 0;
        }

        @media (min-width: 768px) {
          .thank-you-title {
            font-size: 1.875rem;
          }
        }

        .thank-you-text {
          color: #6b7280;
          font-size: 1rem;
          margin: 0;
        }

        @media (min-width: 768px) {
          .thank-you-text {
            font-size: 1.125rem;
          }
        }

        // .logo-icon {
        //   width: 2rem;
        //   height: 2rem;
        //   background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%);
        //   border-radius: 0.375rem;
        //   transform: rotate(12deg);
        // }

        // @media (min-width: 768px) {
        //   .logo-icon {
        //     width: 2.5rem;
        //     height: 2.5rem;
        //   }
        // }

        .form-card {
          background: white;
          border-radius: 0.75rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          overflow: hidden;
        }

        @media (min-width: 768px) {
          .form-card {
            border-radius: 1rem;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
          }
        }

        .progress-bar {
          height: 0.375rem;
          background: #f3f4f6;
        }

        @media (min-width: 768px) {
          .progress-bar {
            height: 0.5rem;
          }
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #3b82f6 0%, #6366f1 100%);
          transition: width 0.5s ease-out;
        }

        .form-content {
          padding: 1.5rem;
        }

        @media (min-width: 768px) {
          .form-content {
            padding: 3rem;
          }
        }

        .section-header {
          text-align: center;
          background: #0061ed;
          color: white;
          padding: 1.5rem;
          border-radius: 0.5rem;
          margin-bottom: 1rem;
        }

        @media (min-width: 768px) {
          .section-header {
            padding: 2rem;
            margin-bottom: 2rem;
          }
        }

        .section-title {
          font-size: 1.25rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
          margin-top: 0;
          color: white;
        }

        @media (min-width: 768px) {
          .section-title {
            font-size: 1.5rem;
          }
        }

        .section-subtitle {
          margin-bottom: 0;
          margin-top: 0;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.8);
        }

        @media (min-width: 768px) {
          .section-subtitle {
            font-size: 1rem;
          }
        }

        .form-step {
          width: 100%;
          max-width: 32rem;
          margin: 0 auto;
        }

        .step-title {
          font-size: 1.25rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 1.5rem;
          margin-top: 0;
          text-align: center;
          line-height: 1.4;
        }

        @media (min-width: 768px) {
          .step-title {
            font-size: 1.5rem;
            margin-bottom: 2rem;
          }
        }

        .form-field {
          margin-bottom: 1.5rem;
        }

        @media (min-width: 768px) {
          .form-field {
            margin-bottom: 2rem;
          }
        }

        .form-input,
        .form-select,
        .form-textarea {
          width: 100%;
          padding: 0.875rem 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 0.5rem;
          font-size: 1rem;
          color: #374151;
          outline: none;
          transition: border-color 0.2s;
          box-sizing: border-box;
          -webkit-appearance: none;
        }

        @media (min-width: 768px) {
          .form-input,
          .form-select,
          .form-textarea {
            padding: 0.75rem 1rem;
          }
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          border-color: #3b82f6;
        }

        .form-textarea {
          resize: none;
          min-height: 120px;
        }

        .select-wrapper {
          position: relative;
        }

        .select-icon {
          position: absolute;
          right: 0.75rem;
          top: 50%;
          transform: translateY(-50%) rotate(-90deg);
          width: 1.25rem;
          height: 1.25rem;
          color: #9ca3af;
          pointer-events: none;
        }

        .date-wrapper,
        .time-wrapper {
          position: relative;
        }

        // .time-icon {
        //   position: absolute;
        //   left: 0.75rem;
        //   top: 50%;
        //   transform: translateY(-50%);
        //   width: 1.25rem;
        //   height: 1.25rem;
        //   color: #9ca3af;
        //   pointer-events: none;
        // }

        // .date-label {
        //   position: absolute;
        //   bottom: -1.5rem;
        //   left: 0;
        //   font-size: 0.75rem;
        //   color: #3b82f6;
        // }

        // @media (min-width: 768px) {
        //   .date-label {
        //     font-size: 0.875rem;
        //   }
        // }

        .textarea-wrapper {
          background: #f9fafb;
          padding: 1rem;
          border-radius: 0.5rem;
          border: 2px dashed #d1d5db;
        }

        .toolbar {
          display: flex;
          align-items: center;
          margin-top: 0.75rem;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .toolbar-icon {
          width: 1rem;
          height: 1rem;
          color: #6b7280;
          cursor: pointer;
          transition: color 0.2s;
        }

        .toolbar-icon:hover {
          color: #374151;
        }

        .camera-upload,
        .file-upload {
          border: 2px dashed #93c5fd;
          border-radius: 0.5rem;
          padding: 1.5rem;
          text-align: center;
        }

        @media (min-width: 768px) {
          .camera-upload,
          .file-upload {
            padding: 2rem;
          }
        }

        .file-upload {
          border-color: #d1d5db;
        }

        .upload-btn {
          background: #0061ed;
          color: white;
          padding: 0.75rem 1.25rem;
          border-radius: 0.5rem;
          border: none;
          cursor: pointer;
          font-size: 0.875rem;
          font-weight: 500;
          transition: background-color 0.2s;
          min-height: 44px;
        }

        @media (min-width: 768px) {
          .upload-btn {
            font-size: 1rem;
            padding: 0.5rem 1.5rem;
          }
        }

        .upload-btn:hover {
          background: #0061ed;
        }

        .success-text {
          color: #16a34a;
          margin-top: 0.5rem;
          margin-bottom: 0;
          font-size: 0.875rem;
        }

        .address-fields {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .address-field {
          display: flex;
          flex-direction: column;
        }

        .field-label {
          font-size: 0.875rem;
          color: #6b7280;
          margin-bottom: 0.25rem;
          display: block;
        }

        .address-row {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        @media (min-width: 768px) {
          .address-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
        }

        .postal-field {
          width: 100%;
        }

        @media (min-width: 768px) {
          .postal-field {
            width: 50%;
          }
        }

        .radio-grid {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        @media (min-width: 768px) {
          .radio-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
          }
        }

        .radio-vertical {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .checkbox-group {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .radio-option,
        .checkbox-option {
          display: flex;
          align-items: center;
          padding: 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: border-color 0.2s;
          min-height: 44px;
        }

        .radio-option:hover,
        .checkbox-option:hover {
          border-color: #d1d5db;
        }

        .radio-input,
        .checkbox-input {
          margin-right: 0.75rem;
          width: 1rem;
          height: 1rem;
          flex-shrink: 0;
        }

        .radio-label,
        .checkbox-label {
          color: #374151;
          font-size: 0.875rem;
          line-height: 1.4;
        }

        @media (min-width: 768px) {
          .radio-label,
          .checkbox-label {
            font-size: 1rem;
          }
        }

        .helper-text {
          font-size: 0.875rem;
          color: #6b7280;
          margin-top: 0.5rem;
          margin-bottom: 0;
        }

        .review-container {
          width: 100%;
        }

        .review-card {
          background: #f9fafb;
          border-radius: 0.5rem;
          overflow: hidden;
        }

        .review-header {
          background: white;
          padding: 1rem;
          border-bottom: 1px solid #e5e7eb;
        }

        @media (min-width: 768px) {
          .review-header {
            padding: 1.5rem;
          }
        }

        .review-title {
          font-size: 1.25rem;
          font-weight: bold;
          color: #1f2937;
          margin: 0;
          text-align: center;
        }

        @media (min-width: 768px) {
          .review-title {
            font-size: 1.5rem;
          }
        }

        .review-content {
          padding: 1rem;
          max-height: 400px;
          overflow-y: auto;
        }

        @media (min-width: 768px) {
          .review-content {
            padding: 1.5rem;
            max-height: 500px;
          }
        }

        .review-row {
          display: flex;
          flex-direction: column;
          padding: 0.75rem 0;
          border-bottom: 1px solid #e5e7eb;
          gap: 0.25rem;
        }

        @media (min-width: 768px) {
          .review-row {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
            gap: 1rem;
          }
        }

        .review-row:last-child {
          border-bottom: none;
        }

        .review-label {
          font-weight: 500;
          color: #374151;
          font-size: 0.875rem;
          min-width: 200px;
        }

        @media (min-width: 768px) {
          .review-label {
            font-size: 1rem;
          }
        }

        .review-value-container {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex: 1;
        }

        .review-value {
          color: #6b7280;
          font-size: 0.875rem;
          word-break: break-word;
          flex: 1;
        }

        @media (min-width: 768px) {
          .review-value {
            font-size: 1rem;
            text-align: right;
          }
        }

        .review-value.highlight {
          color: #3b82f6;
          font-weight: 600;
        }

        .edit-btn {
          background: #f3f4f6;
          border: 1px solid #d1d5db;
          border-radius: 0.375rem;
          padding: 0.25rem;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          flex-shrink: 0;
        }

        .edit-btn:hover {
          background: #e5e7eb;
          border-color: #9ca3af;
        }

        .edit-btn svg {
          color: #6b7280;
        }

        .navigation {
          padding: 1rem 1.5rem;
        }

        @media (min-width: 768px) {
          .navigation {
            padding: 0 3rem 2rem;
          }
        }

        .nav-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        @media (min-width: 768px) {
          .nav-buttons {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: 0;
          }
        }

        .nav-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.875rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 500;
          border: none;
          cursor: pointer;
          font-size: 0.875rem;
          transition: background-color 0.2s;
          background: #0061ed;
          color: white;
          min-height: 44px;
          width: 100%;
        }

        @media (min-width: 768px) {
          .nav-btn {
            font-size: 1rem;
            padding: 0.75rem 1.5rem;
            width: auto;
          }
        }

        .nav-btn:hover:not(.disabled) {
          background: #2563eb;
        }

        .nav-btn.disabled {
          cursor: not-allowed;
          background: #f3f4f6;
          color: #9ca3af;
        }

        .step-indicators {
          padding: 1rem 1.5rem;
        }

        @media (min-width: 768px) {
          .step-indicators {
            padding: 0 3rem 2rem;
          }
        }

        .indicators {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.375rem;
          flex-wrap: wrap;
          margin-bottom: 0.75rem;
        }

        @media (min-width: 768px) {
          .indicators {
            gap: 0.5rem;
            margin-bottom: 1rem;
          }
        }

        .indicator {
          width: 0.625rem;
          height: 0.625rem;
          border-radius: 50%;
          transition: all 0.3s;
        }

        @media (min-width: 768px) {
          .indicator {
            width: 0.75rem;
            height: 0.75rem;
          }
        }

        .indicator.current {
          background: #0061ed;
          transform: scale(1.25);
        }

        .indicator.completed {
          background: #22c55e;
        }

        .indicator.pending {
          background: #e5e7eb;
        }

        .step-counter {
          text-align: center;
          font-size: 0.875rem;
          color: #6b7280;
          margin: 0;
        }

        @media (max-width: 767px) {
          .form-input,
          .form-select,
          .form-textarea,
          .upload-btn,
          .radio-option,
          .checkbox-option,
          .nav-btn {
            min-height: 44px;
          }

          .radio-input,
          .checkbox-input {
            min-width: 20px;
            min-height: 20px;
          }
        }

        @media (max-width: 767px) {
          .review-content {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }

          .review-content::-webkit-scrollbar {
            display: none;
          }
        }
      `}),N?i.jsx("div",{className:"wizard-content",children:i.jsxs("div",{className:"thank-you-card",children:[i.jsx("div",{className:"success-icon",children:i.jsx(_,{size:40,color:"white"})}),i.jsx("h1",{className:"thank-you-title",children:"Thank You!"}),i.jsx("p",{className:"thank-you-text",children:"Your submission has been received!"})]})}):i.jsx("div",{className:"wizard-content",children:i.jsxs("div",{className:"form-card",children:[i.jsx("div",{className:"progress-bar",children:i.jsx("div",{className:"progress-fill",style:{width:`${C}%`}})}),i.jsx("div",{className:"form-content",children:O()}),i.jsx("div",{className:"navigation",children:i.jsxs("div",{className:"nav-buttons",children:[i.jsxs("button",{onClick:z,disabled:l===0,className:`nav-btn ${l===0?"disabled":""}`,children:[i.jsx(M,{size:20}),((v=c[l])==null?void 0:v.type)==="review"?"BACK TO FORM":"PREVIOUS"]}),i.jsxs("button",{onClick:E,className:"nav-btn",children:[q(),i.jsx(k,{size:20})]})]})}),i.jsxs("div",{className:"step-indicators",children:[i.jsx("div",{className:"indicators",children:c.map((e,a)=>i.jsx("div",{className:`indicator ${a===l?"current":a<l?"completed":"pending"}`},a))}),i.jsxs("div",{className:"step-counter",children:[l+1," of ",b]})]})]})})]})};export{U as default};
