import{M as g,y as O,w as D,x as I,N as v,l as h,k as R,i as L,m as _,O as V,P as b,Q as H,R as M,S as Y,T as k,u as C,e as P,p as $,h as w,U as j,a as B,B as Q}from"./runtime.DUfdwCLw.js";import{a as U,r as N,h as y}from"./events.C56y7QN3.js";import{r as W}from"./svelte-head.CWuQvgkk.js";import{c as q}from"./disclose-version.DYl3pxng.js";const z=["touchstart","touchmove"];function F(t){return z.includes(t)}function x(t,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=n,t.nodeValue=n==null?"":n+"")}function G(t,e){return S(t,e)}function ee(t,e){g(),e.intro=e.intro??!1;const n=e.target,u=w,l=_;try{for(var r=O(n);r&&(r.nodeType!==8||r.data!==D);)r=I(r);if(!r)throw v;h(!0),R(r),L();const d=S(t,{...e,anchor:r});if(_===null||_.nodeType!==8||_.data!==V)throw b(),v;return h(!1),d}catch(d){if(d===v)return e.recover===!1&&H(),g(),M(n),h(!1),G(t,e);throw d}finally{h(u),R(l),W()}}const i=new Map;function S(t,{target:e,anchor:n,props:u={},events:l,context:r,intro:d=!0}){g();var m=new Set,p=o=>{for(var a=0;a<o.length;a++){var s=o[a];if(!m.has(s)){m.add(s);var f=F(s);e.addEventListener(s,y,{passive:f});var T=i.get(s);T===void 0?(document.addEventListener(s,y,{passive:f}),i.set(s,1)):i.set(s,T+1)}}};p(Y(U)),N.add(p);var c=void 0,A=k(()=>{var o=n??e.appendChild(C());return P(()=>{if(r){$({});var a=Q;a.c=r}l&&(u.$$events=l),w&&q(o,null),c=t(o,u)||{},w&&(j.nodes_end=_),r&&B()}),()=>{var f;for(var a of m){e.removeEventListener(a,y);var s=i.get(a);--s===0?(document.removeEventListener(a,y),i.delete(a)):i.set(a,s)}N.delete(p),E.delete(c),o!==n&&((f=o.parentNode)==null||f.removeChild(o))}});return E.set(c,A),c}let E=new WeakMap;function te(t){const e=E.get(t);e&&e()}export{ee as h,G as m,x as s,te as u};