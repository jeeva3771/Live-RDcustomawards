import{r as p,j as e}from"./index-CUe855HK.js";import{c as i}from"./createLucideIcon-DhkID_xa.js";import{U as m}from"./user-CWDiItQK.js";import{S as x}from"./save-BkO8MZFP.js";/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],f=i("facebook",h);/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],r=i("map-pin",g);/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]],a=i("pen-line",b);/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],j=i("twitter",u);function k(){const[s,n]=p.useState("personal"),l=[{id:"personal",icon:m,label:"Personal Information"},{id:"payment",icon:r,label:"Payment"},{id:"password",icon:a,label:"Change Password"},{id:"settings",icon:a,label:"Settings"}],c=[{platform:"twitter",color:"#1da1f2",icon:j},{platform:"facebook",color:"#1877f2",icon:f},{platform:"linkedin",color:"#0077b5",icon:a}];return e.jsxs(e.Fragment,{children:[e.jsx("style",{jsx:!0,children:`
        .profile-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 32px;
          background-color: #f5f5f5;
          min-height: 100vh;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .profile-header {
          background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
          border-radius: 16px;
          padding: 32px;
          margin-bottom: 32px;
          position: relative;
          overflow: hidden;
        }

        .profile-header::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 200px;
          height: 200px;
          background: rgba(25, 118, 210, 0.1);
          border-radius: 50%;
        }

        .profile-completion {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .completion-circle {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: conic-gradient(#1976d2 0deg 108deg, #e0e0e0 108deg 360deg);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .completion-circle::before {
          content: '';
          width: 60px;
          height: 60px;
          background: white;
          border-radius: 50%;
          position: absolute;
        }

        .completion-text {
          position: relative;
          z-index: 1;
          font-weight: bold;
          color: #1976d2;
        }

        .profile-main {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        .profile-avatar {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: #1976d2;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 48px;
          font-weight: bold;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          position: relative;
        }

        .online-indicator {
          position: absolute;
          bottom: 8px;
          right: 8px;
          width: 16px;
          height: 16px;
          background: #4caf50;
          border: 3px solid white;
          border-radius: 50%;
        }

        .profile-info {
          flex: 1;
        }

        .profile-name {
          margin: 0 0 8px 0;
          font-size: 28px;
          font-weight: 600;
          color: #212529;
        }

        .profile-subtitle {
          color: #6c757d;
          font-size: 16px;
          margin-bottom: 16px;
        }

        .social-links {
          display: flex;
          gap: 12px;
        }

        .social-link {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          transition: all 0.2s;
          cursor: pointer;
        }

        .social-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        .social-twitter {
          background: #1da1f2;
        }

        .social-facebook {
          background: #1877f2;
        }

        .social-linkedin {
          background: #0077b5;
        }

        .stats-row {
          display: flex;
          gap: 32px;
          margin-top: 24px;
          flex-wrap: wrap;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 24px;
          font-weight: bold;
          color: #212529;
        }

        .stat-label {
          font-size: 14px;
          color: #6c757d;
          margin-top: 4px;
        }

        .content-section {
          background: white;
          border-radius: 16px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          margin-bottom: 24px;
        }

        .content-header {
          padding: 24px 24px 0 24px;
          border-bottom: 1px solid #f0f0f0;
          margin-bottom: 24px;
        }

        .tab-nav {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
        }

        .tab-link {
          padding: 12px 0;
          color: #6c757d;
          text-decoration: none;
          border-bottom: 2px solid transparent;
          transition: all 0.2s;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
        }

        .tab-link.active {
          color: #1976d2;
          border-bottom-color: #1976d2;
        }

        .tab-link:hover {
          color: #1976d2;
        }

        .content-body {
          padding: 0 24px 24px 24px;
        }

        .form-section {
          margin-bottom: 32px;
        }

        .section-title {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 16px;
          color: #212529;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 16px;
        }

        .form-group {
          margin-bottom: 16px;
        }

        .form-label {
          display: block;
          margin-bottom: 6px;
          font-weight: 500;
          color: #212529;
          font-size: 14px;
        }

        .form-control {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          font-size: 14px;
          transition: border-color 0.2s;
          outline: none;
          box-sizing: border-box;
        }

        .form-control:focus {
          border-color: #1976d2;
          box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.1);
        }

        .form-control-select {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
          background-position: right 12px center;
          background-repeat: no-repeat;
          background-size: 16px;
          padding-right: 40px;
          appearance: none;
        }

        .date-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 8px;
        }

        .phone-grid {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 8px;
        }

        .btn {
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 500;
          font-size: 14px;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .btn-primary {
          background: #1976d2;
          color: white;
        }

        .btn-primary:hover {
          background: #1565c0;
          transform: translateY(-1px);
        }

        .btn-outline {
          background: transparent;
          border: 1px solid #e0e0e0;
          color: #212529;
        }

        .btn-outline:hover {
          background: #f8f9fa;
        }

        .empty-state {
          padding: 40px;
          text-align: center;
          color: #6c757d;
        }

        .empty-state-icon {
          margin-bottom: 16px;
          opacity: 0.5;
        }

        .empty-state h4 {
          margin-bottom: 8px;
          color: #212529;
        }

        .button-group {
          margin-top: 32px;
        }

        .ml-12 {
          margin-left: 12px;
        }

        @media (max-width: 768px) {
          .profile-container {
            padding: 16px;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .profile-main {
            flex-direction: column;
            text-align: center;
          }

          .stats-row {
            justify-content: center;
            gap: 16px;
          }

          .tab-nav {
            gap: 12px;
          }

          .date-grid {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .phone-grid {
            grid-template-columns: 1fr;
            gap: 8px;
          }
        }
      `}),e.jsxs("div",{className:"profile-container",children:[e.jsxs("div",{className:"profile-header",children:[e.jsxs("div",{className:"profile-completion",children:[e.jsx("div",{className:"completion-circle",children:e.jsx("div",{className:"completion-text",children:"30%"})}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 8px 0",color:"#212529"},children:"Edit Your Profile"}),e.jsx("p",{style:{margin:0,color:"#6c757d"},children:"Complete your profile to unlock all features"})]})]}),e.jsxs("div",{className:"profile-main",children:[e.jsxs("div",{className:"profile-avatar",children:["SB",e.jsx("div",{className:"online-indicator"})]}),e.jsxs("div",{className:"profile-info",children:[e.jsx("h2",{className:"profile-name",children:"Stebin Ben"}),e.jsx("div",{className:"profile-subtitle",children:"Full Stack Developer"}),e.jsx("div",{className:"social-links",children:c.map((o,t)=>{const d=o.icon;return e.jsx("div",{className:`social-link social-${o.platform}`,children:e.jsx(d,{size:18})},o.platform)})})]})]}),e.jsxs("div",{className:"stats-row",children:[e.jsxs("div",{className:"stat-item",children:[e.jsx("div",{className:"stat-number",children:"86"}),e.jsx("div",{className:"stat-label",children:"Post"})]}),e.jsxs("div",{className:"stat-item",children:[e.jsx("div",{className:"stat-number",children:"40"}),e.jsx("div",{className:"stat-label",children:"Project"})]}),e.jsxs("div",{className:"stat-item",children:[e.jsx("div",{className:"stat-number",children:"4.5K"}),e.jsx("div",{className:"stat-label",children:"Members"})]})]})]}),e.jsxs("div",{className:"content-section",children:[e.jsx("div",{className:"content-header",children:e.jsx("div",{className:"tab-nav",children:l.map(o=>{const t=o.icon;return e.jsxs("div",{className:`tab-link ${s===o.id?"active":""}`,onClick:()=>n(o.id),children:[e.jsx(t,{size:16}),o.label]},o.id)})})}),e.jsxs("div",{className:"content-body",children:[s==="personal"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form-section",children:[e.jsx("div",{className:"section-title",children:"Personal Information"}),e.jsxs("div",{className:"form-row",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"First Name"}),e.jsx("input",{type:"text",className:"form-control",defaultValue:"Stebin"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Last Name"}),e.jsx("input",{type:"text",className:"form-control",defaultValue:"Ben"})]})]}),e.jsxs("div",{className:"form-row",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Email Address"}),e.jsx("input",{type:"email",className:"form-control",defaultValue:"stebin.ben@gmail.com"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Date of Birth (+18)"}),e.jsxs("div",{className:"date-grid",children:[e.jsxs("select",{className:"form-control form-control-select",children:[e.jsx("option",{children:"March"}),e.jsx("option",{children:"January"}),e.jsx("option",{children:"February"}),e.jsx("option",{children:"April"})]}),e.jsxs("select",{className:"form-control form-control-select",children:[e.jsx("option",{children:"10"}),e.jsx("option",{children:"15"}),e.jsx("option",{children:"20"}),e.jsx("option",{children:"25"})]}),e.jsx("input",{type:"text",className:"form-control",defaultValue:"1993"})]})]})]}),e.jsxs("div",{className:"form-row",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Phone Number"}),e.jsxs("div",{className:"phone-grid",children:[e.jsxs("select",{className:"form-control form-control-select",children:[e.jsx("option",{children:"+91"}),e.jsx("option",{children:"+1"}),e.jsx("option",{children:"+44"})]}),e.jsx("input",{type:"tel",className:"form-control",defaultValue:"9652364852"})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Designation"}),e.jsx("input",{type:"text",className:"form-control",defaultValue:"Full Stack Developer"})]})]})]}),e.jsxs("div",{className:"form-section",children:[e.jsx("div",{className:"section-title",children:"Address"}),e.jsxs("div",{className:"form-row",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Address 01"}),e.jsx("input",{type:"text",className:"form-control",defaultValue:"3801 Chalk Butte Rd, Cut Bank, MT 59427, United States"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Address 02"}),e.jsx("input",{type:"text",className:"form-control",defaultValue:"301 Chalk Butte Rd, Cut Bank, NY 96572, New York"})]})]}),e.jsxs("div",{className:"form-row",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Country"}),e.jsxs("select",{className:"form-control form-control-select",children:[e.jsx("option",{children:"United States"}),e.jsx("option",{children:"Canada"}),e.jsx("option",{children:"United Kingdom"}),e.jsx("option",{children:"India"})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"State"}),e.jsx("input",{type:"text",className:"form-control",defaultValue:"California"})]})]}),e.jsxs("div",{className:"button-group",children:[e.jsxs("button",{className:"btn btn-primary",children:[e.jsx(x,{size:16}),"Update Profile"]}),e.jsx("button",{className:"btn btn-outline ml-12",children:"Cancel"})]})]})]}),s==="payment"&&e.jsxs("div",{className:"empty-state",children:[e.jsx("div",{className:"empty-state-icon",children:e.jsx(r,{size:48})}),e.jsx("h4",{children:"Payment Settings"}),e.jsx("p",{children:"Manage your payment methods and billing information."})]}),s==="password"&&e.jsxs("div",{className:"empty-state",children:[e.jsx("div",{className:"empty-state-icon",children:e.jsx(a,{size:48})}),e.jsx("h4",{children:"Change Password"}),e.jsx("p",{children:"Update your password and security settings."})]}),s==="settings"&&e.jsxs("div",{className:"empty-state",children:[e.jsx("div",{className:"empty-state-icon",children:e.jsx(a,{size:48})}),e.jsx("h4",{children:"Account Settings"}),e.jsx("p",{children:"Manage your account preferences and privacy settings."})]})]})]})]})]})}export{k as default};
