import{R as te,r as ne,j as a}from"./index-DLYOJSKi.js";var ke=e=>e.type==="checkbox",me=e=>e instanceof Date,q=e=>e==null;const ot=e=>typeof e=="object";var L=e=>!q(e)&&!Array.isArray(e)&&ot(e)&&!me(e),wt=e=>L(e)&&e.target?ke(e.target)?e.target.checked:e.target.value:e,kt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,jt=(e,s)=>e.has(kt(s)),Nt=e=>{const s=e.constructor&&e.constructor.prototype;return L(s)&&s.hasOwnProperty("isPrototypeOf")},Oe=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function $(e){let s;const r=Array.isArray(e),n=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Oe&&(e instanceof Blob||n))&&(r||L(e)))if(s=r?[]:{},!r&&!Nt(e))s=e;else for(const d in e)e.hasOwnProperty(d)&&(s[d]=$(e[d]));else return e;return s}var Ve=e=>Array.isArray(e)?e.filter(Boolean):[],I=e=>e===void 0,g=(e,s,r)=>{if(!s||!L(e))return r;const n=Ve(s.split(/[,[\].]+?/)).reduce((d,l)=>q(d)?d:d[l],e);return I(n)||n===e?I(e[s])?r:e[s]:n},oe=e=>typeof e=="boolean",Ie=e=>/^\w*$/.test(e),at=e=>Ve(e.replace(/["|']|\]/g,"").split(/\.|\[/)),E=(e,s,r)=>{let n=-1;const d=Ie(s)?[s]:at(s),l=d.length,m=l-1;for(;++n<l;){const b=d[n];let C=r;if(n!==m){const Y=e[b];C=L(Y)||Array.isArray(Y)?Y:isNaN(+d[n+1])?{}:[]}if(b==="__proto__"||b==="constructor"||b==="prototype")return;e[b]=C,e=e[b]}};const He={BLUR:"blur",FOCUS_OUT:"focusout"},re={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},de={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};te.createContext(null);var At=(e,s,r,n=!0)=>{const d={defaultValues:s._defaultValues};for(const l in e)Object.defineProperty(d,l,{get:()=>{const m=l;return s._proxyFormState[m]!==re.all&&(s._proxyFormState[m]=!n||re.all),e[m]}});return d};const _t=typeof window<"u"?ne.useLayoutEffect:ne.useEffect;var ae=e=>typeof e=="string",St=(e,s,r,n,d)=>ae(e)?(n&&s.watch.add(e),g(r,e,d)):Array.isArray(e)?e.map(l=>(n&&s.watch.add(l),g(r,l))):(n&&(s.watchAll=!0),r),Ft=(e,s,r,n,d)=>s?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[n]:d||!0}}:{},ve=e=>Array.isArray(e)?e:[e],Je=()=>{let e=[];return{get observers(){return e},next:d=>{for(const l of e)l.next&&l.next(d)},subscribe:d=>(e.push(d),{unsubscribe:()=>{e=e.filter(l=>l!==d)}}),unsubscribe:()=>{e=[]}}},Le=e=>q(e)||!ot(e);function ue(e,s){if(Le(e)||Le(s))return e===s;if(me(e)&&me(s))return e.getTime()===s.getTime();const r=Object.keys(e),n=Object.keys(s);if(r.length!==n.length)return!1;for(const d of r){const l=e[d];if(!n.includes(d))return!1;if(d!=="ref"){const m=s[d];if(me(l)&&me(m)||L(l)&&L(m)||Array.isArray(l)&&Array.isArray(m)?!ue(l,m):l!==m)return!1}}return!0}var W=e=>L(e)&&!Object.keys(e).length,Me=e=>e.type==="file",se=e=>typeof e=="function",_e=e=>{if(!Oe)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},lt=e=>e.type==="select-multiple",Ue=e=>e.type==="radio",Vt=e=>Ue(e)||ke(e),ze=e=>_e(e)&&e.isConnected;function Et(e,s){const r=s.slice(0,-1).length;let n=0;for(;n<r;)e=I(e)?n++:e[s[n++]];return e}function Ct(e){for(const s in e)if(e.hasOwnProperty(s)&&!I(e[s]))return!1;return!0}function M(e,s){const r=Array.isArray(s)?s:Ie(s)?[s]:at(s),n=r.length===1?e:Et(e,r),d=r.length-1,l=r[d];return n&&delete n[l],d!==0&&(L(n)&&W(n)||Array.isArray(n)&&Ct(n))&&M(e,r.slice(0,-1)),e}var dt=e=>{for(const s in e)if(se(e[s]))return!0;return!1};function Se(e,s={}){const r=Array.isArray(e);if(L(e)||r)for(const n in e)Array.isArray(e[n])||L(e[n])&&!dt(e[n])?(s[n]=Array.isArray(e[n])?[]:{},Se(e[n],s[n])):q(e[n])||(s[n]=!0);return s}function ct(e,s,r){const n=Array.isArray(e);if(L(e)||n)for(const d in e)Array.isArray(e[d])||L(e[d])&&!dt(e[d])?I(s)||Le(r[d])?r[d]=Array.isArray(e[d])?Se(e[d],[]):{...Se(e[d])}:ct(e[d],q(s)?{}:s[d],r[d]):r[d]=!ue(e[d],s[d]);return r}var xe=(e,s)=>ct(e,s,Se(s));const Qe={value:!1,isValid:!1},Ge={value:!0,isValid:!0};var ut=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!I(e[0].attributes.value)?I(e[0].value)||e[0].value===""?Ge:{value:e[0].value,isValid:!0}:Ge:Qe}return Qe},ft=(e,{valueAsNumber:s,valueAsDate:r,setValueAs:n})=>I(e)?e:s?e===""?NaN:e&&+e:r&&ae(e)?new Date(e):n?n(e):e;const Xe={isValid:!1,value:null};var mt=e=>Array.isArray(e)?e.reduce((s,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:s,Xe):Xe;function Ze(e){const s=e.ref;return Me(s)?s.files:Ue(s)?mt(e.refs).value:lt(s)?[...s.selectedOptions].map(({value:r})=>r):ke(s)?ut(e.refs).value:ft(I(s.value)?e.ref.value:s.value,e)}var Dt=(e,s,r,n)=>{const d={};for(const l of e){const m=g(s,l);m&&E(d,l,m._f)}return{criteriaMode:r,names:[...e],fields:d,shouldUseNativeValidation:n}},Fe=e=>e instanceof RegExp,ye=e=>I(e)?e:Fe(e)?e.source:L(e)?Fe(e.value)?e.value.source:e.value:e,et=e=>({isOnSubmit:!e||e===re.onSubmit,isOnBlur:e===re.onBlur,isOnChange:e===re.onChange,isOnAll:e===re.all,isOnTouch:e===re.onTouched});const tt="AsyncFunction";var Tt=e=>!!e&&!!e.validate&&!!(se(e.validate)&&e.validate.constructor.name===tt||L(e.validate)&&Object.values(e.validate).find(s=>s.constructor.name===tt)),Rt=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),rt=(e,s,r)=>!r&&(s.watchAll||s.watch.has(e)||[...s.watch].some(n=>e.startsWith(n)&&/^\.\w+/.test(e.slice(n.length))));const we=(e,s,r,n)=>{for(const d of r||Object.keys(e)){const l=g(e,d);if(l){const{_f:m,...b}=l;if(m){if(m.refs&&m.refs[0]&&s(m.refs[0],d)&&!n)return!0;if(m.ref&&s(m.ref,m.name)&&!n)return!0;if(we(b,s))break}else if(L(b)&&we(b,s))break}}};function st(e,s,r){const n=g(e,r);if(n||Ie(r))return{error:n,name:r};const d=r.split(".");for(;d.length;){const l=d.join("."),m=g(s,l),b=g(e,l);if(m&&!Array.isArray(m)&&r!==l)return{name:r};if(b&&b.type)return{name:l,error:b};if(b&&b.root&&b.root.type)return{name:`${l}.root`,error:b.root};d.pop()}return{name:r}}var zt=(e,s,r,n)=>{r(e);const{name:d,...l}=e;return W(l)||Object.keys(l).length>=Object.keys(s).length||Object.keys(l).find(m=>s[m]===(!n||re.all))},Lt=(e,s,r)=>!e||!s||e===s||ve(e).some(n=>n&&(r?n===s:n.startsWith(s)||s.startsWith(n))),Ot=(e,s,r,n,d)=>d.isOnAll?!1:!r&&d.isOnTouch?!(s||e):(r?n.isOnBlur:d.isOnBlur)?!e:(r?n.isOnChange:d.isOnChange)?e:!0,It=(e,s)=>!Ve(g(e,s)).length&&M(e,s),Mt=(e,s,r)=>{const n=ve(g(e,r));return E(n,"root",s[r]),E(e,r,n),e},Ae=e=>ae(e);function it(e,s,r="validate"){if(Ae(e)||Array.isArray(e)&&e.every(Ae)||oe(e)&&!e)return{type:r,message:Ae(e)?e:"",ref:s}}var be=e=>L(e)&&!Fe(e)?e:{value:e,message:""},nt=async(e,s,r,n,d,l)=>{const{ref:m,refs:b,required:C,maxLength:Y,minLength:_,min:V,max:y,pattern:P,validate:ie,name:O,valueAsNumber:J,mount:je}=e._f,k=g(r,O);if(!je||s.has(O))return{};const Q=b?b[0]:m,K=w=>{d&&Q.reportValidity&&(Q.setCustomValidity(oe(w)?"":w||""),Q.reportValidity())},R={},pe=Ue(m),U=ke(m),ge=pe||U,H=(J||Me(m))&&I(m.value)&&I(k)||_e(m)&&m.value===""||k===""||Array.isArray(k)&&!k.length,le=Ft.bind(null,O,n,R),G=(w,j,D,z=de.maxLength,B=de.minLength)=>{const X=w?j:D;R[O]={type:w?z:B,message:X,ref:m,...le(w?z:B,X)}};if(l?!Array.isArray(k)||!k.length:C&&(!ge&&(H||q(k))||oe(k)&&!k||U&&!ut(b).isValid||pe&&!mt(b).isValid)){const{value:w,message:j}=Ae(C)?{value:!!C,message:C}:be(C);if(w&&(R[O]={type:de.required,message:j,ref:Q,...le(de.required,j)},!n))return K(j),R}if(!H&&(!q(V)||!q(y))){let w,j;const D=be(y),z=be(V);if(!q(k)&&!isNaN(k)){const B=m.valueAsNumber||k&&+k;q(D.value)||(w=B>D.value),q(z.value)||(j=B<z.value)}else{const B=m.valueAsDate||new Date(k),X=h=>new Date(new Date().toDateString()+" "+h),fe=m.type=="time",p=m.type=="week";ae(D.value)&&k&&(w=fe?X(k)>X(D.value):p?k>D.value:B>new Date(D.value)),ae(z.value)&&k&&(j=fe?X(k)<X(z.value):p?k<z.value:B<new Date(z.value))}if((w||j)&&(G(!!w,D.message,z.message,de.max,de.min),!n))return K(R[O].message),R}if((Y||_)&&!H&&(ae(k)||l&&Array.isArray(k))){const w=be(Y),j=be(_),D=!q(w.value)&&k.length>+w.value,z=!q(j.value)&&k.length<+j.value;if((D||z)&&(G(D,w.message,j.message),!n))return K(R[O].message),R}if(P&&!H&&ae(k)){const{value:w,message:j}=be(P);if(Fe(w)&&!k.match(w)&&(R[O]={type:de.pattern,message:j,ref:m,...le(de.pattern,j)},!n))return K(j),R}if(ie){if(se(ie)){const w=await ie(k,r),j=it(w,Q);if(j&&(R[O]={...j,...le(de.validate,j.message)},!n))return K(j.message),R}else if(L(ie)){let w={};for(const j in ie){if(!W(w)&&!n)break;const D=it(await ie[j](k,r),Q,j);D&&(w={...D,...le(j,D.message)},K(D.message),n&&(R[O]=w))}if(!W(w)&&(R[O]={ref:Q,...w},!n))return R}}return K(!0),R};const Ut={mode:re.onSubmit,reValidateMode:re.onChange,shouldFocusError:!0};function Pt(e={}){let s={...Ut,...e},r={submitCount:0,isDirty:!1,isReady:!1,isLoading:se(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1};const n={};let d=L(s.defaultValues)||L(s.values)?$(s.defaultValues||s.values)||{}:{},l=s.shouldUnregister?{}:$(d),m={action:!1,mount:!1,watch:!1},b={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},C,Y=0;const _={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let V={..._};const y={array:Je(),state:Je()},P=s.criteriaMode===re.all,ie=t=>i=>{clearTimeout(Y),Y=setTimeout(t,i)},O=async t=>{if(!s.disabled&&(_.isValid||V.isValid||t)){const i=s.resolver?W((await U()).errors):await H(n,!0);i!==r.isValid&&y.state.next({isValid:i})}},J=(t,i)=>{!s.disabled&&(_.isValidating||_.validatingFields||V.isValidating||V.validatingFields)&&((t||Array.from(b.mount)).forEach(o=>{o&&(i?E(r.validatingFields,o,i):M(r.validatingFields,o))}),y.state.next({validatingFields:r.validatingFields,isValidating:!W(r.validatingFields)}))},je=(t,i=[],o,f,u=!0,c=!0)=>{if(f&&o&&!s.disabled){if(m.action=!0,c&&Array.isArray(g(n,t))){const x=o(g(n,t),f.argA,f.argB);u&&E(n,t,x)}if(c&&Array.isArray(g(r.errors,t))){const x=o(g(r.errors,t),f.argA,f.argB);u&&E(r.errors,t,x),It(r.errors,t)}if((_.touchedFields||V.touchedFields)&&c&&Array.isArray(g(r.touchedFields,t))){const x=o(g(r.touchedFields,t),f.argA,f.argB);u&&E(r.touchedFields,t,x)}(_.dirtyFields||V.dirtyFields)&&(r.dirtyFields=xe(d,l)),y.state.next({name:t,isDirty:G(t,i),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else E(l,t,i)},k=(t,i)=>{E(r.errors,t,i),y.state.next({errors:r.errors})},Q=t=>{r.errors=t,y.state.next({errors:r.errors,isValid:!1})},K=(t,i,o,f)=>{const u=g(n,t);if(u){const c=g(l,t,I(o)?g(d,t):o);I(c)||f&&f.defaultChecked||i?E(l,t,i?c:Ze(u._f)):D(t,c),m.mount&&O()}},R=(t,i,o,f,u)=>{let c=!1,x=!1;const A={name:t};if(!s.disabled){if(!o||f){(_.isDirty||V.isDirty)&&(x=r.isDirty,r.isDirty=A.isDirty=G(),c=x!==A.isDirty);const F=ue(g(d,t),i);x=!!g(r.dirtyFields,t),F?M(r.dirtyFields,t):E(r.dirtyFields,t,!0),A.dirtyFields=r.dirtyFields,c=c||(_.dirtyFields||V.dirtyFields)&&x!==!F}if(o){const F=g(r.touchedFields,t);F||(E(r.touchedFields,t,o),A.touchedFields=r.touchedFields,c=c||(_.touchedFields||V.touchedFields)&&F!==o)}c&&u&&y.state.next(A)}return c?A:{}},pe=(t,i,o,f)=>{const u=g(r.errors,t),c=(_.isValid||V.isValid)&&oe(i)&&r.isValid!==i;if(s.delayError&&o?(C=ie(()=>k(t,o)),C(s.delayError)):(clearTimeout(Y),C=null,o?E(r.errors,t,o):M(r.errors,t)),(o?!ue(u,o):u)||!W(f)||c){const x={...f,...c&&oe(i)?{isValid:i}:{},errors:r.errors,name:t};r={...r,...x},y.state.next(x)}},U=async t=>{J(t,!0);const i=await s.resolver(l,s.context,Dt(t||b.mount,n,s.criteriaMode,s.shouldUseNativeValidation));return J(t),i},ge=async t=>{const{errors:i}=await U(t);if(t)for(const o of t){const f=g(i,o);f?E(r.errors,o,f):M(r.errors,o)}else r.errors=i;return i},H=async(t,i,o={valid:!0})=>{for(const f in t){const u=t[f];if(u){const{_f:c,...x}=u;if(c){const A=b.array.has(c.name),F=u._f&&Tt(u._f);F&&_.validatingFields&&J([f],!0);const Z=await nt(u,b.disabled,l,P,s.shouldUseNativeValidation&&!i,A);if(F&&_.validatingFields&&J([f]),Z[c.name]&&(o.valid=!1,i))break;!i&&(g(Z,c.name)?A?Mt(r.errors,Z,c.name):E(r.errors,c.name,Z[c.name]):M(r.errors,c.name))}!W(x)&&await H(x,i,o)}}return o.valid},le=()=>{for(const t of b.unMount){const i=g(n,t);i&&(i._f.refs?i._f.refs.every(o=>!ze(o)):!ze(i._f.ref))&&Ee(t)}b.unMount=new Set},G=(t,i)=>!s.disabled&&(t&&i&&E(l,t,i),!ue(h(),d)),w=(t,i,o)=>St(t,b,{...m.mount?l:I(i)?d:ae(t)?{[t]:i}:i},o,i),j=t=>Ve(g(m.mount?l:d,t,s.shouldUnregister?g(d,t,[]):[])),D=(t,i,o={})=>{const f=g(n,t);let u=i;if(f){const c=f._f;c&&(!c.disabled&&E(l,t,ft(i,c)),u=_e(c.ref)&&q(i)?"":i,lt(c.ref)?[...c.ref.options].forEach(x=>x.selected=u.includes(x.value)):c.refs?ke(c.ref)?c.refs.forEach(x=>{(!x.defaultChecked||!x.disabled)&&(Array.isArray(u)?x.checked=!!u.find(A=>A===x.value):x.checked=u===x.value||!!u)}):c.refs.forEach(x=>x.checked=x.value===u):Me(c.ref)?c.ref.value="":(c.ref.value=u,c.ref.type||y.state.next({name:t,values:$(l)})))}(o.shouldDirty||o.shouldTouch)&&R(t,u,o.shouldTouch,o.shouldDirty,!0),o.shouldValidate&&p(t)},z=(t,i,o)=>{for(const f in i){if(!i.hasOwnProperty(f))return;const u=i[f],c=t+"."+f,x=g(n,c);(b.array.has(t)||L(u)||x&&!x._f)&&!me(u)?z(c,u,o):D(c,u,o)}},B=(t,i,o={})=>{const f=g(n,t),u=b.array.has(t),c=$(i);E(l,t,c),u?(y.array.next({name:t,values:$(l)}),(_.isDirty||_.dirtyFields||V.isDirty||V.dirtyFields)&&o.shouldDirty&&y.state.next({name:t,dirtyFields:xe(d,l),isDirty:G(t,c)})):f&&!f._f&&!q(c)?z(t,c,o):D(t,c,o),rt(t,b)&&y.state.next({...r}),y.state.next({name:m.mount?t:void 0,values:$(l)})},X=async t=>{m.mount=!0;const i=t.target;let o=i.name,f=!0;const u=g(n,o),c=F=>{f=Number.isNaN(F)||me(F)&&isNaN(F.getTime())||ue(F,g(l,o,F))},x=et(s.mode),A=et(s.reValidateMode);if(u){let F,Z;const Ne=i.type?Ze(u._f):wt(t),ce=t.type===He.BLUR||t.type===He.FOCUS_OUT,xt=!Rt(u._f)&&!s.resolver&&!g(r.errors,o)&&!u._f.deps||Ot(ce,g(r.touchedFields,o),r.isSubmitted,A,x),Te=rt(o,b,ce);E(l,o,Ne),ce?(u._f.onBlur&&u._f.onBlur(t),C&&C(0)):u._f.onChange&&u._f.onChange(t);const Re=R(o,Ne,ce),yt=!W(Re)||Te;if(!ce&&y.state.next({name:o,type:t.type,values:$(l)}),xt)return(_.isValid||V.isValid)&&(s.mode==="onBlur"?ce&&O():ce||O()),yt&&y.state.next({name:o,...Te?{}:Re});if(!ce&&Te&&y.state.next({...r}),s.resolver){const{errors:Ye}=await U([o]);if(c(Ne),f){const vt=st(r.errors,n,o),Ke=st(Ye,n,vt.name||o);F=Ke.error,o=Ke.name,Z=W(Ye)}}else J([o],!0),F=(await nt(u,b.disabled,l,P,s.shouldUseNativeValidation))[o],J([o]),c(Ne),f&&(F?Z=!1:(_.isValid||V.isValid)&&(Z=await H(n,!0)));f&&(u._f.deps&&p(u._f.deps),pe(o,Z,F,Re))}},fe=(t,i)=>{if(g(r.errors,i)&&t.focus)return t.focus(),1},p=async(t,i={})=>{let o,f;const u=ve(t);if(s.resolver){const c=await ge(I(t)?t:u);o=W(c),f=t?!u.some(x=>g(c,x)):o}else t?(f=(await Promise.all(u.map(async c=>{const x=g(n,c);return await H(x&&x._f?{[c]:x}:x)}))).every(Boolean),!(!f&&!r.isValid)&&O()):f=o=await H(n);return y.state.next({...!ae(t)||(_.isValid||V.isValid)&&o!==r.isValid?{}:{name:t},...s.resolver||!t?{isValid:o}:{},errors:r.errors}),i.shouldFocus&&!f&&we(n,fe,t?u:b.mount),f},h=t=>{const i={...m.mount?l:d};return I(t)?i:ae(t)?g(i,t):t.map(o=>g(i,o))},v=(t,i)=>({invalid:!!g((i||r).errors,t),isDirty:!!g((i||r).dirtyFields,t),error:g((i||r).errors,t),isValidating:!!g(r.validatingFields,t),isTouched:!!g((i||r).touchedFields,t)}),ee=t=>{t&&ve(t).forEach(i=>M(r.errors,i)),y.state.next({errors:t?r.errors:{}})},S=(t,i,o)=>{const f=(g(n,t,{_f:{}})._f||{}).ref,u=g(r.errors,t)||{},{ref:c,message:x,type:A,...F}=u;E(r.errors,t,{...F,...i,ref:f}),y.state.next({name:t,errors:r.errors,isValid:!1}),o&&o.shouldFocus&&f&&f.focus&&f.focus()},N=(t,i)=>se(t)?y.state.subscribe({next:o=>t(w(void 0,i),o)}):w(t,i,!0),T=t=>y.state.subscribe({next:i=>{Lt(t.name,i.name,t.exact)&&zt(i,t.formState||_,ht,t.reRenderRoot)&&t.callback({values:{...l},...r,...i})}}).unsubscribe,he=t=>(m.mount=!0,V={...V,...t.formState},T({...t,formState:V})),Ee=(t,i={})=>{for(const o of t?ve(t):b.mount)b.mount.delete(o),b.array.delete(o),i.keepValue||(M(n,o),M(l,o)),!i.keepError&&M(r.errors,o),!i.keepDirty&&M(r.dirtyFields,o),!i.keepTouched&&M(r.touchedFields,o),!i.keepIsValidating&&M(r.validatingFields,o),!s.shouldUnregister&&!i.keepDefaultValue&&M(d,o);y.state.next({values:$(l)}),y.state.next({...r,...i.keepDirty?{isDirty:G()}:{}}),!i.keepIsValid&&O()},Pe=({disabled:t,name:i})=>{(oe(t)&&m.mount||t||b.disabled.has(i))&&(t?b.disabled.add(i):b.disabled.delete(i))},Ce=(t,i={})=>{let o=g(n,t);const f=oe(i.disabled)||oe(s.disabled);return E(n,t,{...o||{},_f:{...o&&o._f?o._f:{ref:{name:t}},name:t,mount:!0,...i}}),b.mount.add(t),o?Pe({disabled:oe(i.disabled)?i.disabled:s.disabled,name:t}):K(t,!0,i.value),{...f?{disabled:i.disabled||s.disabled}:{},...s.progressive?{required:!!i.required,min:ye(i.min),max:ye(i.max),minLength:ye(i.minLength),maxLength:ye(i.maxLength),pattern:ye(i.pattern)}:{},name:t,onChange:X,onBlur:X,ref:u=>{if(u){Ce(t,i),o=g(n,t);const c=I(u.value)&&u.querySelectorAll&&u.querySelectorAll("input,select,textarea")[0]||u,x=Vt(c),A=o._f.refs||[];if(x?A.find(F=>F===c):c===o._f.ref)return;E(n,t,{_f:{...o._f,...x?{refs:[...A.filter(ze),c,...Array.isArray(g(d,t))?[{}]:[]],ref:{type:c.type,name:t}}:{ref:c}}}),K(t,!1,void 0,c)}else o=g(n,t,{}),o._f&&(o._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(jt(b.array,t)&&m.action)&&b.unMount.add(t)}}},De=()=>s.shouldFocusError&&we(n,fe,b.mount),pt=t=>{oe(t)&&(y.state.next({disabled:t}),we(n,(i,o)=>{const f=g(n,o);f&&(i.disabled=f._f.disabled||t,Array.isArray(f._f.refs)&&f._f.refs.forEach(u=>{u.disabled=f._f.disabled||t}))},0,!1))},Be=(t,i)=>async o=>{let f;o&&(o.preventDefault&&o.preventDefault(),o.persist&&o.persist());let u=$(l);if(y.state.next({isSubmitting:!0}),s.resolver){const{errors:c,values:x}=await U();r.errors=c,u=x}else await H(n);if(b.disabled.size)for(const c of b.disabled)E(u,c,void 0);if(M(r.errors,"root"),W(r.errors)){y.state.next({errors:{}});try{await t(u,o)}catch(c){f=c}}else i&&await i({...r.errors},o),De(),setTimeout(De);if(y.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:W(r.errors)&&!f,submitCount:r.submitCount+1,errors:r.errors}),f)throw f},bt=(t,i={})=>{g(n,t)&&(I(i.defaultValue)?B(t,$(g(d,t))):(B(t,i.defaultValue),E(d,t,$(i.defaultValue))),i.keepTouched||M(r.touchedFields,t),i.keepDirty||(M(r.dirtyFields,t),r.isDirty=i.defaultValue?G(t,$(g(d,t))):G()),i.keepError||(M(r.errors,t),_.isValid&&O()),y.state.next({...r}))},$e=(t,i={})=>{const o=t?$(t):d,f=$(o),u=W(t),c=u?d:f;if(i.keepDefaultValues||(d=o),!i.keepValues){if(i.keepDirtyValues){const x=new Set([...b.mount,...Object.keys(xe(d,l))]);for(const A of Array.from(x))g(r.dirtyFields,A)?E(c,A,g(l,A)):B(A,g(c,A))}else{if(Oe&&I(t))for(const x of b.mount){const A=g(n,x);if(A&&A._f){const F=Array.isArray(A._f.refs)?A._f.refs[0]:A._f.ref;if(_e(F)){const Z=F.closest("form");if(Z){Z.reset();break}}}}for(const x of b.mount)B(x,g(c,x))}l=$(c),y.array.next({values:{...c}}),y.state.next({values:{...c}})}b={mount:i.keepDirtyValues?b.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},m.mount=!_.isValid||!!i.keepIsValid||!!i.keepDirtyValues,m.watch=!!s.shouldUnregister,y.state.next({submitCount:i.keepSubmitCount?r.submitCount:0,isDirty:u?!1:i.keepDirty?r.isDirty:!!(i.keepDefaultValues&&!ue(t,d)),isSubmitted:i.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:u?{}:i.keepDirtyValues?i.keepDefaultValues&&l?xe(d,l):r.dirtyFields:i.keepDefaultValues&&t?xe(d,t):i.keepDirty?r.dirtyFields:{},touchedFields:i.keepTouched?r.touchedFields:{},errors:i.keepErrors?r.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},qe=(t,i)=>$e(se(t)?t(l):t,i),gt=(t,i={})=>{const o=g(n,t),f=o&&o._f;if(f){const u=f.refs?f.refs[0]:f.ref;u.focus&&(u.focus(),i.shouldSelect&&se(u.select)&&u.select())}},ht=t=>{r={...r,...t}},We={control:{register:Ce,unregister:Ee,getFieldState:v,handleSubmit:Be,setError:S,_subscribe:T,_runSchema:U,_focusError:De,_getWatch:w,_getDirty:G,_setValid:O,_setFieldArray:je,_setDisabledField:Pe,_setErrors:Q,_getFieldArray:j,_reset:$e,_resetDefaultValues:()=>se(s.defaultValues)&&s.defaultValues().then(t=>{qe(t,s.resetOptions),y.state.next({isLoading:!1})}),_removeUnmounted:le,_disableForm:pt,_subjects:y,_proxyFormState:_,get _fields(){return n},get _formValues(){return l},get _state(){return m},set _state(t){m=t},get _defaultValues(){return d},get _names(){return b},set _names(t){b=t},get _formState(){return r},get _options(){return s},set _options(t){s={...s,...t}}},subscribe:he,trigger:p,register:Ce,handleSubmit:Be,watch:N,setValue:B,getValues:h,reset:qe,resetField:bt,clearErrors:ee,unregister:Ee,setError:S,setFocus:gt,getFieldState:v};return{...We,formControl:We}}function Bt(e={}){const s=te.useRef(void 0),r=te.useRef(void 0),[n,d]=te.useState({isDirty:!1,isValidating:!1,isLoading:se(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:se(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...e.formControl?e.formControl:Pt(e),formState:n},e.formControl&&e.defaultValues&&!se(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions));const l=s.current.control;return l._options=e,_t(()=>{const m=l._subscribe({formState:l._proxyFormState,callback:()=>d({...l._formState}),reRenderRoot:!0});return d(b=>({...b,isReady:!0})),l._formState.isReady=!0,m},[l]),te.useEffect(()=>l._disableForm(e.disabled),[l,e.disabled]),te.useEffect(()=>{e.mode&&(l._options.mode=e.mode),e.reValidateMode&&(l._options.reValidateMode=e.reValidateMode)},[l,e.mode,e.reValidateMode]),te.useEffect(()=>{e.errors&&(l._setErrors(e.errors),l._focusError())},[l,e.errors]),te.useEffect(()=>{e.shouldUnregister&&l._subjects.state.next({values:l._getWatch()})},[l,e.shouldUnregister]),te.useEffect(()=>{if(l._proxyFormState.isDirty){const m=l._getDirty();m!==n.isDirty&&l._subjects.state.next({isDirty:m})}},[l,n.isDirty]),te.useEffect(()=>{e.values&&!ue(e.values,r.current)?(l._reset(e.values,l._options.resetOptions),r.current=e.values,d(m=>({...m}))):l._resetDefaultValues()},[l,e.values]),te.useEffect(()=>{l._state.mount||(l._setValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),s.current.formState=At(n,l),s.current}function Wt(){const[e,s]=ne.useState(0),[r,n]=ne.useState([]),[d,l]=ne.useState([]),[m,b]=ne.useState(!1),[C,Y]=ne.useState(null),_=ne.useRef(null),V=ne.useRef(null),y=ne.useRef(null),{register:P,handleSubmit:ie,getValues:O,setValue:J,watch:je}=Bt({defaultValues:{jobNumber:"",materialType:"",size:"",quantity:"",process:"",timeTaken:"",productionRemarks:""}}),k=["BLACK ACRYLIC 2MM","BLACK ACRYLIC 3MM","BLACK ACRYLIC 6MM","BLACK ACRYLIC 8MM","BLACK ACRYLIC 12MM","WHITE ACRYLIC 2MM"],Q=["BLACK ACRYLIC 2MM","BLACK ACRYLIC 3MM"],K=["8' x 4'","4' x 4'"],R=["LASER CUTTING","LASER CUTTING OUTSOURCED"],pe=["😊","😂","🥰","😍","🤔","👍","👎","❤️","🔥","💯","🎉","🚀","⭐","✅","❌","⚠️","💡","🎯","📝","📊","🔧","⚙️","🛠️","📋","📁","💼","🏭","🔬","📈","📉"],U=p=>{const h=V.current;if(!h)return;const v=h.selectionStart,ee=h.selectionEnd,S=h.value.substring(v,ee);Y(p),setTimeout(()=>Y(null),200);let N="",T=v;switch(p){case"bold":S?(N=`**${S}**`,T=v+N.length):(N="****",T=v+2);break;case"italic":S?(N=`*${S}*`,T=v+N.length):(N="**",T=v+1);break;case"underline":S?(N=`<u>${S}</u>`,T=v+N.length):(N="<u></u>",T=v+3);break;case"link":S?(N=`[${S}](url)`,T=v+N.length-4):(N="[link text](url)",T=v+1);break;case"bullet":N=S?`
• ${S}`:`
• `,T=v+N.length;break;case"numbered":N=S?`
1. ${S}`:`
1. `,T=v+N.length;break;case"quote":N=S?`> ${S}`:"> ",T=v+N.length;break;case"line":N=`
---
`,T=v+N.length;break;default:N=S,T=ee}const he=h.value.substring(0,v)+N+h.value.substring(ee);J("productionRemarks",he),setTimeout(()=>{h.focus(),h.setSelectionRange(T,T)},0)},ge=p=>{const h=V.current;if(!h)return;const v=h.selectionStart,ee=h.selectionEnd,S=h.value.substring(0,v)+p+h.value.substring(ee);J("productionRemarks",S),setTimeout(()=>{h.focus(),h.setSelectionRange(v+p.length,v+p.length)},0),b(!1)},H=p=>{const h=p.target.files[0];if(!h)return;const v=new FileReader;v.onload=ee=>{const S=V.current;if(!S)return;const N=S.selectionStart,T=`![${h.name}](${ee.target.result})
`,he=S.value.substring(0,N)+T+S.value.substring(N);J("productionRemarks",he),setTimeout(()=>{S.focus(),S.setSelectionRange(N+T.length,N+T.length)},0)},v.readAsDataURL(h),p.target.value=""},le=p=>{n(h=>h.includes(p)?h.filter(v=>v!==p):[...h,p])},G=p=>{n(h=>h.filter(v=>v!==p))},w=p=>{const h=Array.from(p.target.files);l(v=>[...v,...h])},j=p=>{l(h=>h.filter((v,ee)=>ee!==p))},D=[{id:"job",label:"Job Details",icon:"📋"},{id:"recipe",label:"Recipe",icon:"📝"},{id:"process",label:"Process Info",icon:"⚙️"},{id:"bom",label:"BOM Details",icon:"📋"},{id:"upload",label:"Upload",icon:"📁"},{id:"remarks",label:"Remarks",icon:"💬"}],z=[{title:"JOB NO",subtitle:"pls enter the JOB No. you are planning for",content:a.jsx("div",{className:"step-content",children:a.jsx("div",{className:"job-input-container",children:a.jsx("input",{type:"number",...P("jobNumber"),className:"job-input",placeholder:"Enter Job Number"})})})},{title:"RECEIPE",subtitle:"PLS SELECT THE LIST OF ITEMS U WANT TO USE TO PROCESS THIS JOB",content:a.jsx("div",{className:"step-content",children:a.jsxs("div",{className:"recipe-container",children:[a.jsxs("div",{className:"recipe-section",children:[a.jsx("h3",{children:"Options"}),a.jsx("div",{className:"options-list",children:k.map((p,h)=>a.jsxs("div",{className:`option-item ${r.includes(p)?"selected":""}`,onClick:()=>le(p),children:[a.jsx("span",{children:p}),a.jsx("span",{className:"arrow",children:"›"})]},h))})]}),a.jsxs("div",{className:"recipe-section",children:[a.jsx("h3",{children:"Selected"}),a.jsxs("div",{className:"selected-list",children:[r.map((p,h)=>a.jsxs("div",{className:"selected-item",children:[a.jsx("span",{className:"remove-btn",onClick:()=>G(p),children:"‹"}),a.jsx("span",{children:p})]},h)),r.length===0&&a.jsx("div",{className:"empty-state",children:"No items selected"})]})]})]})})},{title:"BOM & PROCESS",subtitle:"CREATE LIST OF ITEMS ITS SIZE AND QTY",content:a.jsx("div",{className:"step-content",children:a.jsxs("div",{className:"bom-form-container",children:[a.jsxs("div",{className:"form-row",children:[a.jsx("div",{className:"form-group",children:a.jsxs("select",{...P("bomMaterialType"),className:"form-select",children:[a.jsx("option",{value:"",children:"Please Select"}),Q.map((p,h)=>a.jsx("option",{value:p,children:p},h))]})}),a.jsx("div",{className:"form-group",children:a.jsxs("select",{...P("bomSize"),className:"form-select",children:[a.jsx("option",{value:"",children:"Please Select"}),K.map((p,h)=>a.jsx("option",{value:p,children:p},h))]})})]}),a.jsxs("div",{className:"form-row",children:[a.jsx("div",{className:"form-group",children:a.jsx("input",{type:"number",...P("bomQuantity"),className:"form-input",placeholder:"Please enter a number",min:"1"})}),a.jsx("div",{className:"form-group",children:a.jsxs("select",{...P("process"),className:"form-select",children:[a.jsx("option",{value:"",children:"Please Select"}),R.map((p,h)=>a.jsx("option",{value:p,children:p},h))]})})]})]})})},{title:"BOM LASER PROCESS TIME MANAGEMENT",subtitle:"CREATE LIST OF ITEMS QTY AND TIME TAKEN IN LASER",content:a.jsx("div",{className:"step-content",children:a.jsxs("div",{className:"bom-form-container",children:[a.jsxs("div",{className:"form-row",children:[a.jsx("div",{className:"form-group",children:a.jsxs("select",{...P("materialType"),className:"form-select",children:[a.jsx("option",{value:"",children:"Please Select"}),Q.map((p,h)=>a.jsx("option",{value:p,children:p},h))]})}),a.jsx("div",{className:"form-group",children:a.jsxs("select",{...P("size"),className:"form-select",children:[a.jsx("option",{value:"",children:"Please Select"}),K.map((p,h)=>a.jsx("option",{value:p,children:p},h))]})})]}),a.jsxs("div",{className:"form-row",children:[a.jsx("div",{className:"form-group",children:a.jsx("input",{type:"number",...P("quantity"),className:"form-input",placeholder:"Please enter a number",min:"1"})}),a.jsx("div",{className:"form-group",children:a.jsx("input",{type:"number",...P("timeTaken"),className:"form-input",placeholder:"Please enter a number",min:"0",step:"0.1"})})]})]})})},{title:"IMAGE UPLOAD & PREVIEW",subtitle:"",content:a.jsx("div",{className:"step-content",children:a.jsxs("div",{className:"upload-container",children:[a.jsx("div",{className:"upload-area",onClick:()=>{var p;return(p=_.current)==null?void 0:p.click()},children:a.jsxs("div",{className:"upload-content",children:[a.jsx("div",{className:"upload-icon",children:"📁"}),a.jsx("button",{type:"button",className:"upload-button",children:"BROWSE & UPLOAD"}),a.jsx("p",{className:"upload-text",children:"Click to browse files or drag and drop"})]})}),a.jsx("input",{ref:_,type:"file",multiple:!0,accept:"image/*,.pdf,.doc,.docx",onChange:w,style:{display:"none"}}),d.length>0&&a.jsxs("div",{className:"uploaded-files",children:[a.jsxs("h4",{children:["Uploaded Files (",d.length,"):"]}),a.jsx("div",{className:"files-grid",children:d.map((p,h)=>a.jsxs("div",{className:"file-item",children:[a.jsxs("div",{className:"file-info",children:[a.jsx("span",{className:"file-name",children:p.name}),a.jsxs("span",{className:"file-size",children:[(p.size/1024/1024).toFixed(2)," MB"]})]}),a.jsx("button",{type:"button",className:"remove-file",onClick:()=>j(h),children:"×"})]},h))})]})]})})},{title:"PRODUCTION REMARKS",subtitle:"",content:a.jsx("div",{className:"step-content",children:a.jsxs("div",{className:"editor-container",children:[a.jsxs("div",{className:"editor-toolbar",children:[a.jsx("button",{type:"button",className:`toolbar-btn ${C==="text"?"active":""}`,title:"Text",onClick:()=>U("text"),children:"T"}),a.jsx("button",{type:"button",className:`toolbar-btn bold-btn ${C==="bold"?"active":""}`,title:"Bold",onClick:()=>U("bold"),children:a.jsx("strong",{children:"B"})}),a.jsx("button",{type:"button",className:`toolbar-btn italic-btn ${C==="italic"?"active":""}`,title:"Italic",onClick:()=>U("italic"),children:a.jsx("em",{children:"I"})}),a.jsx("button",{type:"button",className:`toolbar-btn underline-btn ${C==="underline"?"active":""}`,title:"Underline",onClick:()=>U("underline"),children:a.jsx("u",{children:"U"})}),a.jsx("button",{type:"button",className:`toolbar-btn ${C==="link"?"active":""}`,title:"Link",onClick:()=>U("link"),children:"🔗"}),a.jsx("button",{type:"button",className:`toolbar-btn ${C==="bullet"?"active":""}`,title:"Bullet List",onClick:()=>U("bullet"),children:"•"}),a.jsx("button",{type:"button",className:`toolbar-btn ${C==="numbered"?"active":""}`,title:"Numbered List",onClick:()=>U("numbered"),children:"1."}),a.jsx("button",{type:"button",className:`toolbar-btn ${C==="quote"?"active":""}`,title:"Quote",onClick:()=>U("quote"),children:'"'}),a.jsx("button",{type:"button",className:`toolbar-btn ${C==="line"?"active":""}`,title:"Horizontal Line",onClick:()=>U("line"),children:"—"}),a.jsx("button",{type:"button",className:"toolbar-btn",title:"Insert Image",onClick:()=>{var p;return(p=y.current)==null?void 0:p.click()},children:"🖼️"}),a.jsx("button",{type:"button",className:`toolbar-btn ${m?"active":""}`,title:"Emoji",onClick:()=>b(!m),children:"😊"})]}),m&&a.jsxs("div",{className:"emoji-picker",children:[a.jsxs("div",{className:"emoji-picker-header",children:[a.jsx("span",{children:"Select an emoji"}),a.jsx("button",{type:"button",className:"emoji-close",onClick:()=>b(!1),children:"×"})]}),a.jsx("div",{className:"emoji-grid",children:pe.map((p,h)=>a.jsx("button",{type:"button",className:"emoji-item",onClick:()=>ge(p),title:p,children:p},h))})]}),a.jsx("input",{ref:y,type:"file",accept:"image/*",onChange:H,style:{display:"none"}}),a.jsx("textarea",{ref:V,...P("productionRemarks"),className:"editor-textarea",placeholder:"Enter your production remarks here...",rows:"8"})]})})}],B=p=>{const h={...p,selectedItems:r,uploadedFiles:d.map(v=>({name:v.name,size:v.size}))};console.log("Form submitted:",h),alert("Form submitted successfully!")},X=()=>{s(e+1)},fe=()=>{s(e-1)};return a.jsxs("div",{className:"wizard-container",children:[a.jsxs("div",{className:"progress-steps-container",children:[a.jsx("div",{className:"progress-line",children:a.jsx("div",{className:"progress-line-fill",style:{width:`${e/(D.length-1)*100}%`}})}),a.jsx("div",{className:"progress-steps",children:D.map((p,h)=>a.jsxs("div",{className:`progress-step-item ${h<=e?"active":""} ${h<e?"completed":""}`,children:[a.jsx("div",{className:"step-circle",children:h<e?a.jsx("span",{className:"step-check",children:"✓"}):a.jsx("span",{className:"step-icon",children:p.icon})}),a.jsx("span",{className:"step-label",children:p.label})]},p.id))})]}),a.jsxs("form",{onSubmit:ie(B),className:"wizard-form",children:[a.jsxs("div",{children:[a.jsxs("div",{className:"step-header",children:[a.jsx("h2",{className:"step-title",children:z[e].title}),z[e].subtitle&&a.jsx("p",{className:"step-subtitle",children:z[e].subtitle})]}),a.jsx("div",{className:"step-body",children:z[e].content})]}),a.jsxs("div",{className:"wizard-navigation",children:[e>0&&a.jsx("button",{type:"button",onClick:fe,className:"nav-button prev-button",children:"← PREVIOUS"}),a.jsx("div",{className:"nav-spacer"}),e<z.length-1?a.jsx("button",{type:"button",onClick:X,className:"nav-button next-button",children:"NEXT →"}):a.jsx("button",{type:"submit",className:"nav-button submit-button",children:"SUBMIT"})]})]}),a.jsx("style",{jsx:!0,children:`
        .wizard-container {
          max-width: 900px;
          margin: 2rem auto;
          background: #0061ed;
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          min-height: 500px;
        }

        .progress-steps-container {
          margin-bottom: 2rem;
          padding: 1rem 0;
        }

        .progress-line {
          background: rgba(255, 255, 255, 0.3);
          height: 3px;
          border-radius: 2px;
          overflow: hidden;
          margin-bottom: 2rem;
          position: relative;
        }

        .progress-line-fill {
          background: white;
          height: 100%;
          border-radius: 2px;
          transition: width 0.5s ease;
        }

        .progress-steps {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
        }

        .progress-step-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
          position: relative;
        }

        .step-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          border: 2px solid rgba(255, 255, 255, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.5rem;
          transition: all 0.3s ease;
        }

        .progress-step-item.active .step-circle {
          background: white;
          border-color: white;
          color: #0061ed;
        }

        .progress-step-item.completed .step-circle {
          background: white;
          border-color: white;
          color: #0061ed;
        }

        .step-icon {
          font-size: 1rem;
        }

        .step-check {
          font-size: 1.2rem;
          font-weight: bold;
          color: #0061ed;
        }

        .step-label {
          color: white;
          font-size: 0.75rem;
          text-align: center;
          opacity: 0.8;
          font-weight: 500;
        }

        .progress-step-item.active .step-label,
        .progress-step-item.completed .step-label {
          opacity: 1;
          font-weight: 600;
        }

        .wizard-form {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          position: relative;
        }

        .step-header {
          text-align: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #f1f5f9;
        }

        .step-title {
          color: #374151;
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .step-subtitle {
          color: #6b7280;
          font-size: 0.9rem;
          margin: 0.5rem 0 0 0;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }

        .step-content {
          max-width: 600px;
          margin: 0 auto;
        }

        .job-input-container {
          text-align: center;
          margin: 2rem 0;
        }

        .job-input {
          width: 100%;
          max-width: 500px;
          padding: 1rem 1.5rem;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 1.1rem;
          text-align: center;
          transition: all 0.3s ease;
          background: white;
          color: #374151;
        }

        .job-input:focus {
          outline: none;
          border-color: #0061ed;
          box-shadow: 0 0 0 3px rgba(0, 97, 237, 0.1);
        }

        .bom-form-container {
          max-width: 100%;
          margin: 0 auto;
          padding: 0;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
          width: 100%;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          width: 100%;
          min-width: 0;
        }

        .form-label {
          color: #374151;
          font-weight: 600;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }

        .form-select,
        .form-input {
          padding: 0.875rem 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: white;
          color: #374151;
          width: 100%;
          min-width: 0;
          box-sizing: border-box;
        }

        .form-select:focus,
        .form-input:focus {
          outline: none;
          border-color: #0061ed;
          box-shadow: 0 0 0 3px rgba(0, 97, 237, 0.1);
        }

        .recipe-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-top: 1rem;
        }

        .recipe-section h3 {
          color: #374151;
          font-size: 1.1rem;
          margin-bottom: 1rem;
          padding: 0.5rem 1rem;
          background: #f9fafb;
          border-radius: 8px;
          text-align: center;
          border: 2px dashed #d1d5db;
        }

        .options-list,
        .selected-list {
          border: 2px dashed #d1d5db;
          border-radius: 8px;
          padding: 1rem;
          min-height: 200px;
          background: #f9fafb;
        }

        .option-item,
        .selected-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 1rem;
          margin-bottom: 0.5rem;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .option-item:hover {
          border-color: #0061ed;
          transform: translateX(4px);
        }

        .option-item.selected {
          background: #dbeafe;
          border-color: #60a5fa;
        }

        .selected-item {
          background: #ecfdf5;
          border-color: #86efac;
        }

        .selected-item:hover {
          transform: translateX(-4px);
        }

        .arrow,
        .remove-btn {
          color: #6b7280;
          font-weight: bold;
          font-size: 1.2rem;
        }

        .remove-btn {
          color: #ef4444;
          cursor: pointer;
        }

        .empty-state {
          text-align: center;
          color: #9ca3af;
          font-style: italic;
          padding: 2rem;
        }

        .upload-container {
          text-align: center;
        }

        .upload-area {
          border: 3px dashed #d1d5db;
          border-radius: 12px;
          padding: 3rem 2rem;
          background: #f9fafb;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 2rem;
        }

        .upload-area:hover {
          border-color: #0061ed;
          background: #f0f9ff;
        }

        .upload-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .upload-icon {
          font-size: 3rem;
          color: #6b7280;
        }

        .upload-button {
          background: #0061ed;
          color: white;
          border: none;
          padding: 0.75rem 2rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .upload-button:hover {
          background: #0052cc;
          transform: translateY(-2px);
        }

        .upload-text {
          color: #6b7280;
          margin: 0;
        }

        .uploaded-files {
          text-align: left;
          background: #f9fafb;
          padding: 1.5rem;
          border-radius: 12px;
          border: 2px solid #e5e7eb;
        }

        .uploaded-files h4 {
          margin: 0 0 1rem 0;
          color: #374151;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .files-grid {
          display: grid;
          gap: 0.75rem;
        }

        .file-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background: white;
          border-radius: 8px;
          margin-bottom: 0;
          border: 1px solid #e5e7eb;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          transition: all 0.2s ease;
        }

        .file-item:hover {
          border-color: #0061ed;
          box-shadow: 0 4px 8px rgba(0, 97, 237, 0.1);
        }

        .file-info {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          flex: 1;
        }

        .file-name {
          color: #374151;
          font-weight: 500;
          word-break: break-all;
        }

        .file-size {
          color: #6b7280;
          font-size: 0.875rem;
        }

        .remove-file {
          background: #ef4444;
          color: white;
          border: none;
          width: 28px;
          height: 28px;
          cursor: pointer;
        }

        .remove-file:hover {
          background: #dc2626;
          transform: scale(1.1);
        }

        .editor-container {
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          overflow: visible;
          position: relative;
        }

        .editor-toolbar {
          background: #f9fafb;
          padding: 0.75rem;
          border-bottom: 1px solid #e5e7eb;
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .toolbar-btn {
          background: white;
          border: 1px solid #d1d5db;
          border-radius: 4px;
          padding: 0.375rem 0.75rem;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 0.875rem;
        }

        .toolbar-btn:hover {
          background: #e5e7eb;
          border-color: #9ca3af;
        }

        .toolbar-btn:active,
        .toolbar-btn.active {
          background: #0061ed;
          color: white;
          border-color: #0061ed;
          transform: scale(0.95);
        }

        .bold-btn:active,
        .italic-btn:active,
        .underline-btn:active,
        .bold-btn.active,
        .italic-btn.active,
        .underline-btn.active {
          background: #0061ed;
          color: white;
          border-color: #0061ed;
        }

        .emoji-picker {
          background: white;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          position: absolute;
          top: 100%;
          right: 0;
          z-index: 1000;
          width: 280px;
          max-height: 300px;
          overflow: hidden;
        }

        .emoji-picker-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 1rem;
          background: #f9fafb;
          border-bottom: 1px solid #e5e7eb;
          font-size: 0.875rem;
          font-weight: 600;
          color: #374151;
        }

        .emoji-close {
          background: #ef4444;
          color: white;
          border: none;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          cursor: pointer;
          font-size: 1rem;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .emoji-close:hover {
          background: #dc2626;
        }

        .emoji-grid {
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          gap: 0.25rem;
          padding: 0.75rem;
          max-height: 200px;
          overflow-y: auto;
        }

        .emoji-item {
          background: transparent;
          border: 1px solid transparent;
          border-radius: 4px;
          padding: 0.5rem;
          cursor: pointer;
          font-size: 1.25rem;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
        }

        .emoji-item:hover {
          background: #f3f4f6;
          border-color: #d1d5db;
          transform: scale(1.1);
        }

        .emoji-item:active {
          background: #e5e7eb;
          transform: scale(0.95);
        }

        .editor-textarea {
          width: 100%;
          border: none;
          padding: 1rem;
          font-size: 1rem;
          font-family: inherit;
          resize: vertical;
          outline: none;
          background: white;
          box-sizing: border-box;
        }

        .wizard-navigation {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 2px solid #f1f5f9;
        }

        .nav-spacer {
          flex: 1;
        }

        .nav-button {
          padding: 0.875rem 2rem;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .prev-button {
          background: #f3f4f6;
          color: #0061ed;
          border: 2px solid #0061ed;
        }

        .prev-button:hover {
          background: #0061ed;
          color: white;
          transform: translateY(-2px);
        }

        .next-button,
        .submit-button {
          background: #0061ed;
          color: white;
        }

        .next-button:hover,
        .submit-button:hover {
          background: #0052cc;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 97, 237, 0.3);
        }

        .submit-button {
          background: linear-gradient(135deg, #10b981, #059669);
        }

        .submit-button:hover {
          background: linear-gradient(135deg, #059669, #047857);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .wizard-container {
            margin: 1rem;
            padding: 1rem;
          }

          .wizard-form {
            padding: 1.5rem;
          }

          .step-title {
            font-size: 1.25rem;
          }

          .bom-form-container {
            width: 100%;
            overflow: hidden;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 1rem;
            width: 100%;
          }

          .form-group {
            width: 100%;
            min-width: 0;
          }

          .form-select,
          .form-input {
            width: 100%;
            min-width: 0;
            box-sizing: border-box;
          }

          .recipe-container {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .wizard-navigation {
            flex-direction: column;
            gap: 1rem;
          }

          .nav-spacer {
            display: none;
          }

          .nav-button {
            width: 100%;
          }

          .progress-steps {
            flex-wrap: wrap;
            gap: 0.5rem;
            justify-content: center;
          }

          .progress-step-item {
            flex: none;
            min-width: 80px;
          }

          .step-circle {
            width: 30px;
            height: 30px;
          }

          .step-label {
            font-size: 0.65rem;
          }

          .editor-toolbar {
            flex-wrap: wrap;
            gap: 0.25rem;
          }

          .toolbar-btn {
            padding: 0.25rem 0.5rem;
            font-size: 0.75rem;
          }

          .editor-container {
            position: relative;
            overflow: visible;
          }

          .emoji-picker {
            width: 240px;
            right: -20px;
          }

          .emoji-grid {
            grid-template-columns: repeat(6, 1fr);
            padding: 0.5rem;
          }

          .emoji-item {
            width: 28px;
            height: 28px;
            font-size: 1.1rem;
          }

          .uploaded-files {
            padding: 1rem;
          }

          .file-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
            padding: 0.75rem;
          }

          .file-info {
            width: 100%;
          }

          .remove-file {
            align-self: flex-end;
            margin-left: 0;
          }
        }

        @media (max-width: 480px) {
          .wizard-container {
            margin: 0.5rem;
            padding: 0.75rem;
          }

          .wizard-form {
            padding: 1rem;
          }

          .step-title {
            font-size: 1.1rem;
          }

          .step-subtitle {
            font-size: 0.8rem;
          }

          .step-content {
            max-width: 100%;
          }

          .bom-form-container {
            padding: 0;
            margin: 0;
          }

          .form-row {
            gap: 0.75rem;
            margin-bottom: 1rem;
          }

          .form-select,
          .form-input {
            padding: 0.75rem 0.875rem;
            font-size: 0.9rem;
          }

          .upload-area {
            padding: 2rem 1rem;
          }

          .upload-icon {
            font-size: 2rem;
          }

          .job-input {
            font-size: 1rem;
            padding: 0.875rem 1rem;
          }

          .progress-steps {
            justify-content: center;
          }

          .progress-step-item {
            min-width: 70px;
          }

          .step-circle {
            width: 28px;
            height: 28px;
          }

          .step-icon {
            font-size: 0.875rem;
          }

          .step-check {
            font-size: 1rem;
          }

          .step-label {
            font-size: 0.6rem;
          }

          .nav-button {
            padding: 0.75rem 1.5rem;
            font-size: 0.9rem;
          }

          .recipe-container {
            gap: 1rem;
          }

          .options-list,
          .selected-list {
            min-height: 150px;
            padding: 0.75rem;
          }

          .option-item,
          .selected-item {
            padding: 0.5rem 0.75rem;
            font-size: 0.875rem;
          }

          .editor-textarea {
            font-size: 0.9rem;
            padding: 0.875rem;
          }

          .emoji-picker {
            width: 200px;
            right: -10px;
            max-height: 250px;
          }

          .emoji-grid {
            grid-template-columns: repeat(5, 1fr);
            padding: 0.5rem;
          }

          .emoji-item {
            width: 24px;
            height: 24px;
            font-size: 1rem;
          }

          .emoji-picker-header {
            padding: 0.5rem;
            font-size: 0.75rem;
          }

          .toolbar-btn {
            padding: 0.25rem 0.4rem;
            font-size: 0.7rem;
          }

          .file-item {
            padding: 0.5rem;
          }

          .file-name {
            font-size: 0.875rem;
          }

          .file-size {
            font-size: 0.75rem;
          }

          .remove-file {
            width: 24px;
            height: 24px;
            font-size: 1rem;
          }
        }

        @media (max-width: 360px) {
          .wizard-container {
            margin: 0.25rem;
            padding: 0.5rem;
          }

          .progress-steps {
            gap: 0.25rem;
          }

          .progress-step-item {
            min-width: 60px;
          }

          .step-circle {
            width: 24px;
            height: 24px;
          }

          .step-icon {
            font-size: 0.75rem;
          }

          .step-check {
            font-size: 0.875rem;
          }

          .step-label {
            font-size: 0.55rem;
          }

          .bom-form-container {
            width: 100%;
          }

          .form-select,
          .form-input {
            padding: 0.625rem 0.75rem;
            font-size: 0.875rem;
          }
        }
      `})]})}export{Wt as default};
