import{N as m,K as I,I as O,J as V,O as g,l as h,k as R,i as D,m as _,P as L,Q as b,R as H,S as Y,T as k,U as C,F as M,e as P,p as $,h as E,V as j,a as F,o as J}from"./runtime.Dzq96zRh.js";import{c as K,r as N,h as v,d as Q}from"./disclose-version.Dkh6S5WJ.js";import{r as U}from"./svelte-head.CFS6VOls.js";const W=["touchstart","touchmove"];function q(t){return W.includes(t)}function Z(t,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=n,t.nodeValue=n==null?"":n+"")}function z(t,e){return S(t,e)}function x(t,e){m(),e.intro=e.intro??!1;const n=e.target,u=E,l=_;try{for(var r=I(n);r&&(r.nodeType!==8||r.data!==O);)r=V(r);if(!r)throw g;h(!0),R(r),D();const i=S(t,{...e,anchor:r});if(_===null||_.nodeType!==8||_.data!==L)throw b(),g;return h(!1),i}catch(i){if(i===g)return e.recover===!1&&H(),m(),Y(n),h(!1),z(t,e);throw i}finally{h(u),R(l),U()}}const d=new Map;function S(t,{target:e,anchor:n,props:u={},events:l,context:r,intro:i=!0}){m();var y=new Set,p=o=>{for(var a=0;a<o.length;a++){var s=o[a];if(!y.has(s)){y.add(s);var f=q(s);e.addEventListener(s,v,{passive:f});var w=d.get(s);w===void 0?(document.addEventListener(s,v,{passive:f}),d.set(s,1)):d.set(s,w+1)}}};p(k(K)),N.add(p);var c=void 0,A=C(()=>{var o=n??e.appendChild(M());return P(()=>{if(r){$({});var a=J;a.c=r}l&&(u.$$events=l),E&&Q(o,null),c=t(o,u)||{},E&&(j.nodes_end=_),r&&F()}),()=>{var f;for(var a of y){e.removeEventListener(a,v);var s=d.get(a);--s===0?(document.removeEventListener(a,v),d.delete(a)):d.set(a,s)}N.delete(p),T.delete(c),o!==n&&((f=o.parentNode)==null||f.removeChild(o))}});return T.set(c,A),c}let T=new WeakMap;function ee(t){const e=T.get(t);e&&e()}export{x as h,z as m,Z as s,ee as u};