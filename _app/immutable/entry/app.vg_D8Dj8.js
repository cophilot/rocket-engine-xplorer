const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.D0Ziankw.js","../chunks/disclose-version.Dkh6S5WJ.js","../chunks/runtime.Dzq96zRh.js","../chunks/svelte-head.CFS6VOls.js","../chunks/attributes.BjTQ63h-.js","../chunks/legacy.BbPStDxE.js","../chunks/lifecycle.ypMgYexc.js","../chunks/entry.CAHXcQrE.js","../assets/0.DC5fiB6m.css","../nodes/1.BfPqAXvR.js","../chunks/render.5ww2zSNn.js","../chunks/store.CFqXY-rL.js","../chunks/stores.Dwk6RNCY.js","../nodes/2.bo0ATTu5.js","../chunks/if.ZnfeIL2K.js","../chunks/allEngines.DEcslhHl.js","../assets/2.5Rt8dRTk.css","../nodes/3.BVcXUt2g.js","../chunks/HomeButton.Dag2uqZ_.js","../chunks/props.BoDNwOyX.js","../nodes/4.D-4pgNtj.js","../chunks/index-client.CS5Pgywh.js","../assets/4.YWuo67Od.css","../nodes/5.BKT9M5LF.js","../assets/5.DaQbMKdd.css"])))=>i.map(i=>d[i]);
var z=e=>{throw TypeError(e)};var F=(e,t,r)=>t.has(e)||z("Cannot "+r);var u=(e,t,r)=>(F(e,t,"read from private field"),r?r.call(e):t.get(e)),T=(e,t,r)=>t.has(e)?z("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),O=(e,t,r,i)=>(F(e,t,"write to private field"),i?i.call(e,r):t.set(e,r),r);import{h as U,i as J,b as K,E as M,e as Q,m as X,g as Z,aq as $,al as tt,q as et,au as rt,W as st,x as v,ae as at,$ as x,ay as nt,av as ot,ah as it,p as ct,u as ut,n as lt,az as ft,f as w,s as dt,a as mt,ar as S,c as ht,t as _t,r as vt,z as C}from"../chunks/runtime.Dzq96zRh.js";import{h as gt,m as yt,u as Et,s as Pt}from"../chunks/render.5ww2zSNn.js";import{f as D,a as R,t as p,g as Rt}from"../chunks/disclose-version.Dkh6S5WJ.js";import{i as I}from"../chunks/if.ZnfeIL2K.js";import{p as V,a as bt}from"../chunks/props.BoDNwOyX.js";import{o as kt}from"../chunks/index-client.CS5Pgywh.js";function q(e,t,r){U&&J();var i=e,n,o;K(()=>{n!==(n=t())&&(o&&(Z(o),o=null),n&&(o=Q(()=>r(i,n))))},M),U&&(i=X)}function W(e,t){return e===t||(e==null?void 0:e[st])===t}function B(e={},t,r,i){return $(()=>{var n,o;return tt(()=>{n=o,o=[],et(()=>{e!==r(...o)&&(t(e,...o),n&&W(r(...n),e)&&t(null,...n))})}),()=>{rt(()=>{o&&W(r(...o),e)&&t(null,...o)})}}),e}function wt(e){return class extends xt{constructor(t){super({component:e,...t})}}}var g,f;class xt{constructor(t){T(this,g);T(this,f);var o;var r=new Map,i=(a,s)=>{var d=it(s);return r.set(a,d),d};const n=new Proxy({...t.props||{},$$events:{}},{get(a,s){return v(r.get(s)??i(s,Reflect.get(a,s)))},has(a,s){return s===at?!0:(v(r.get(s)??i(s,Reflect.get(a,s))),Reflect.has(a,s))},set(a,s,d){return x(r.get(s)??i(s,d),d),Reflect.set(a,s,d)}});O(this,f,(t.hydrate?gt:yt)(t.component,{target:t.target,anchor:t.anchor,props:n,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((o=t==null?void 0:t.props)!=null&&o.$$host)||t.sync===!1)&&nt(),O(this,g,n.$$events);for(const a of Object.keys(u(this,f)))a==="$set"||a==="$destroy"||a==="$on"||ot(this,a,{get(){return u(this,f)[a]},set(s){u(this,f)[a]=s},enumerable:!0});u(this,f).$set=a=>{Object.assign(n,a)},u(this,f).$destroy=()=>{Et(u(this,f))}}$set(t){u(this,f).$set(t)}$on(t,r){u(this,g)[t]=u(this,g)[t]||[];const i=(...n)=>r.call(this,...n);return u(this,g)[t].push(i),()=>{u(this,g)[t]=u(this,g)[t].filter(n=>n!==i)}}$destroy(){u(this,f).$destroy()}}g=new WeakMap,f=new WeakMap;const At="modulepreload",Lt=function(e,t){return new URL(e,t).href},Y={},b=function(t,r,i){let n=Promise.resolve();if(r&&r.length>0){const a=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),d=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));n=Promise.allSettled(r.map(l=>{if(l=Lt(l,i),l in Y)return;Y[l]=!0;const y=l.endsWith(".css"),A=y?'[rel="stylesheet"]':"";if(!!i)for(let m=a.length-1;m>=0;m--){const _=a[m];if(_.href===l&&(!y||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${A}`))return;const c=document.createElement("link");if(c.rel=y?"stylesheet":At,y||(c.as="script"),c.crossOrigin="",c.href=l,d&&c.setAttribute("nonce",d),document.head.appendChild(c),y)return new Promise((m,_)=>{c.addEventListener("load",m),c.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return n.then(a=>{for(const s of a||[])s.status==="rejected"&&o(s.reason);return t().catch(o)})},Ft={};var Tt=p('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),Ot=p("<!> <!>",1);function St(e,t){ct(t,!0);let r=V(t,"components",23,()=>[]),i=V(t,"data_0",3,null),n=V(t,"data_1",3,null);ut(()=>t.stores.page.set(t.page)),lt(()=>{t.stores,t.page,t.constructors,r(),t.form,i(),n(),t.stores.page.notify()});let o=S(!1),a=S(!1),s=S(null);kt(()=>{const E=t.stores.page.subscribe(()=>{v(o)&&(x(a,!0),ft().then(()=>{x(s,bt(document.title||"untitled page"))}))});return x(o,!0),E});const d=C(()=>t.constructors[1]);var l=Ot(),y=w(l);I(y,()=>t.constructors[1],E=>{var c=D();const m=C(()=>t.constructors[0]);var _=w(c);q(_,()=>v(m),(P,L)=>{B(L(P,{get data(){return i()},get form(){return t.form},children:(h,Ct)=>{var j=D(),G=w(j);q(G,()=>v(d),(N,H)=>{B(H(N,{get data(){return n()},get form(){return t.form}}),k=>r()[1]=k,()=>{var k;return(k=r())==null?void 0:k[1]})}),R(h,j)},$$slots:{default:!0}}),h=>r()[0]=h,()=>{var h;return(h=r())==null?void 0:h[0]})}),R(E,c)},E=>{var c=D();const m=C(()=>t.constructors[0]);var _=w(c);q(_,()=>v(m),(P,L)=>{B(L(P,{get data(){return i()},get form(){return t.form}}),h=>r()[0]=h,()=>{var h;return(h=r())==null?void 0:h[0]})}),R(E,c)});var A=dt(y,2);I(A,()=>v(o),E=>{var c=Tt(),m=ht(c);I(m,()=>v(a),_=>{var P=Rt();_t(()=>Pt(P,v(s))),R(_,P)}),vt(c),R(E,c)}),R(e,l),mt()}const Ut=wt(St),Wt=[()=>b(()=>import("../nodes/0.D0Ziankw.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url),()=>b(()=>import("../nodes/1.BfPqAXvR.js"),__vite__mapDeps([9,1,2,5,10,3,6,11,12,7]),import.meta.url),()=>b(()=>import("../nodes/2.bo0ATTu5.js"),__vite__mapDeps([13,1,2,5,3,10,14,15,4,6,7,16]),import.meta.url),()=>b(()=>import("../nodes/3.BVcXUt2g.js"),__vite__mapDeps([17,1,2,5,18,19,11,7]),import.meta.url),()=>b(()=>import("../nodes/4.D-4pgNtj.js"),__vite__mapDeps([20,1,2,3,19,11,12,7,18,15,10,4,21,22]),import.meta.url),()=>b(()=>import("../nodes/5.BKT9M5LF.js"),__vite__mapDeps([23,1,2,5,10,3,14,15,4,6,11,12,7,19,18,24]),import.meta.url)],Yt=[],pt={"/":[2],"/about":[3],"/compare/[[engine1]]/[[engine2]]":[4],"/engine/[name]":[5]},Gt={handleError:({error:e})=>{console.error(e)},reroute:()=>{}};export{pt as dictionary,Gt as hooks,Ft as matchers,Wt as nodes,Ut as root,Yt as server_loads};