const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.o_BX_UWj.js","../chunks/disclose-version.DYl3pxng.js","../chunks/runtime.DUfdwCLw.js","../chunks/svelte-head.CWuQvgkk.js","../chunks/attributes.C080zEhC.js","../assets/0.CJMrn1D7.css","../nodes/1.CtTuApw7.js","../chunks/legacy.DV5xPG0d.js","../chunks/render.DOeyWuHu.js","../chunks/events.C56y7QN3.js","../chunks/lifecycle.Cf9ZFd-k.js","../chunks/store.Dv2tsFLI.js","../chunks/stores.Cm19GYYd.js","../chunks/entry.C_SL-NCP.js","../nodes/2.UH-gU-yS.js","../chunks/if.Cw1BCscN.js","../chunks/allEngines.B3R_dJLo.js","../assets/2.5Rt8dRTk.css","../nodes/3.BEayKSqf.js","../chunks/HomeButton.e7eZ_hME.js","../chunks/props.CZ_rvNMd.js","../nodes/4.B_nrr9Hp.js","../nodes/5.Bdnb3sAr.js","../assets/5.DreevUsb.css"])))=>i.map(i=>d[i]);
var q=e=>{throw TypeError(e)};var G=(e,t,r)=>t.has(e)||q("Cannot "+r);var u=(e,t,r)=>(G(e,t,"read from private field"),r?r.call(e):t.get(e)),T=(e,t,r)=>t.has(e)?q("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),O=(e,t,r,i)=>(G(e,t,"write to private field"),i?i.call(e,r):t.set(e,r),r);import{h as U,i as Q,b as X,E as Z,e as $,m as tt,g as et,aF as rt,aB as st,C as H,am as nt,V as at,F as v,ab as ot,_ as x,aG as it,an as ct,ah as ut,B as S,a8 as lt,A as J,p as ft,z as dt,f as w,s as mt,a as ht,aH as _t,c as vt,t as gt,r as yt,aI as C,J as p}from"../chunks/runtime.DUfdwCLw.js";import{h as Et,m as bt,u as Pt,s as Rt}from"../chunks/render.DOeyWuHu.js";import{d as I,a as P,t as N,e as kt}from"../chunks/disclose-version.DYl3pxng.js";import{i as V}from"../chunks/if.Cw1BCscN.js";import{p as B,a as wt}from"../chunks/props.CZ_rvNMd.js";function xt(e){throw new Error("lifecycle_outside_component")}function D(e,t,r){U&&Q();var i=e,a,o;X(()=>{a!==(a=t())&&(o&&(et(o),o=null),a&&(o=$(()=>r(i,a))))},Z),U&&(i=tt)}function Y(e,t){return e===t||(e==null?void 0:e[at])===t}function F(e={},t,r,i){return rt(()=>{var a,o;return st(()=>{a=o,o=[],H(()=>{e!==r(...o)&&(t(e,...o),a&&Y(r(...a),e)&&t(null,...a))})}),()=>{nt(()=>{o&&Y(r(...o),e)&&t(null,...o)})}}),e}function At(e){return class extends Lt{constructor(t){super({component:e,...t})}}}var g,f;class Lt{constructor(t){T(this,g);T(this,f);var o;var r=new Map,i=(n,s)=>{var d=ut(s);return r.set(n,d),d};const a=new Proxy({...t.props||{},$$events:{}},{get(n,s){return v(r.get(s)??i(s,Reflect.get(n,s)))},has(n,s){return s===ot?!0:(v(r.get(s)??i(s,Reflect.get(n,s))),Reflect.has(n,s))},set(n,s,d){return x(r.get(s)??i(s,d),d),Reflect.set(n,s,d)}});O(this,f,(t.hydrate?Et:bt)(t.component,{target:t.target,anchor:t.anchor,props:a,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((o=t==null?void 0:t.props)!=null&&o.$$host)||t.sync===!1)&&it(),O(this,g,a.$$events);for(const n of Object.keys(u(this,f)))n==="$set"||n==="$destroy"||n==="$on"||ct(this,n,{get(){return u(this,f)[n]},set(s){u(this,f)[n]=s},enumerable:!0});u(this,f).$set=n=>{Object.assign(a,n)},u(this,f).$destroy=()=>{Pt(u(this,f))}}$set(t){u(this,f).$set(t)}$on(t,r){u(this,g)[t]=u(this,g)[t]||[];const i=(...a)=>r.call(this,...a);return u(this,g)[t].push(i),()=>{u(this,g)[t]=u(this,g)[t].filter(a=>a!==i)}}$destroy(){u(this,f).$destroy()}}g=new WeakMap,f=new WeakMap;function Tt(e){S===null&&xt(),lt&&S.l!==null?Ot(S).m.push(e):J(()=>{const t=H(e);if(typeof t=="function")return t})}function Ot(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const St="modulepreload",Ct=function(e,t){return new URL(e,t).href},z={},R=function(t,r,i){let a=Promise.resolve();if(r&&r.length>0){const n=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),d=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));a=Promise.allSettled(r.map(l=>{if(l=Ct(l,i),l in z)return;z[l]=!0;const y=l.endsWith(".css"),A=y?'[rel="stylesheet"]':"";if(!!i)for(let m=n.length-1;m>=0;m--){const _=n[m];if(_.href===l&&(!y||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${A}`))return;const c=document.createElement("link");if(c.rel=y?"stylesheet":St,y||(c.as="script"),c.crossOrigin="",c.href=l,d&&c.setAttribute("nonce",d),document.head.appendChild(c),y)return new Promise((m,_)=>{c.addEventListener("load",m),c.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(n){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=n,window.dispatchEvent(s),!s.defaultPrevented)throw n}return a.then(n=>{for(const s of n||[])s.status==="rejected"&&o(s.reason);return t().catch(o)})},Yt={};var pt=N('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),It=N("<!> <!>",1);function Vt(e,t){ft(t,!0);let r=B(t,"components",23,()=>[]),i=B(t,"data_0",3,null),a=B(t,"data_1",3,null);dt(()=>t.stores.page.set(t.page)),J(()=>{t.stores,t.page,t.constructors,r(),t.form,i(),a(),t.stores.page.notify()});let o=C(!1),n=C(!1),s=C(null);Tt(()=>{const E=t.stores.page.subscribe(()=>{v(o)&&(x(n,!0),_t().then(()=>{x(s,wt(document.title||"untitled page"))}))});return x(o,!0),E});const d=p(()=>t.constructors[1]);var l=It(),y=w(l);V(y,()=>t.constructors[1],E=>{var c=I();const m=p(()=>t.constructors[0]);var _=w(c);D(_,()=>v(m),(b,L)=>{F(L(b,{get data(){return i()},get form(){return t.form},children:(h,Bt)=>{var j=I(),W=w(j);D(W,()=>v(d),(K,M)=>{F(M(K,{get data(){return a()},get form(){return t.form}}),k=>r()[1]=k,()=>{var k;return(k=r())==null?void 0:k[1]})}),P(h,j)},$$slots:{default:!0}}),h=>r()[0]=h,()=>{var h;return(h=r())==null?void 0:h[0]})}),P(E,c)},E=>{var c=I();const m=p(()=>t.constructors[0]);var _=w(c);D(_,()=>v(m),(b,L)=>{F(L(b,{get data(){return i()},get form(){return t.form}}),h=>r()[0]=h,()=>{var h;return(h=r())==null?void 0:h[0]})}),P(E,c)});var A=mt(y,2);V(A,()=>v(o),E=>{var c=pt(),m=vt(c);V(m,()=>v(n),_=>{var b=kt();gt(()=>Rt(b,v(s))),P(_,b)}),yt(c),P(E,c)}),P(e,l),ht()}const zt=At(Vt),Ht=[()=>R(()=>import("../nodes/0.o_BX_UWj.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),()=>R(()=>import("../nodes/1.CtTuApw7.js"),__vite__mapDeps([6,1,2,7,8,9,3,10,11,12,13]),import.meta.url),()=>R(()=>import("../nodes/2.UH-gU-yS.js"),__vite__mapDeps([14,1,2,7,3,8,9,15,4,10,16,13,17]),import.meta.url),()=>R(()=>import("../nodes/3.BEayKSqf.js"),__vite__mapDeps([18,1,2,7,19,9,20,11,13]),import.meta.url),()=>R(()=>import("../nodes/4.B_nrr9Hp.js"),__vite__mapDeps([21,1,2,7,10,11,12,13,19,9,20]),import.meta.url),()=>R(()=>import("../nodes/5.Bdnb3sAr.js"),__vite__mapDeps([22,1,2,7,8,9,3,15,4,10,11,12,13,16,20,19,23]),import.meta.url)],Jt=[],Nt={"/":[2],"/about":[3],"/compare/[[engine1]]/[[engine2]]":[4],"/engine/[name]":[5]},Wt={handleError:({error:e})=>{console.error(e)},reroute:()=>{}};export{Nt as dictionary,Wt as hooks,Yt as matchers,Ht as nodes,zt as root,Jt as server_loads};