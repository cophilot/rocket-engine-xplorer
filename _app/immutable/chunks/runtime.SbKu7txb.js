var Ct=Array.isArray,Nt=Array.from,bt=Object.defineProperty,_n=Object.getOwnPropertyDescriptor,zn=Object.getOwnPropertyDescriptors,qt=Object.prototype,Pt=Array.prototype,Jn=Object.getPrototypeOf;const Ft=()=>{};function Lt(n){return n()}function dn(n){for(var t=0;t<n.length;t++)n[t]()}const y=2,En=4,Y=8,en=16,A=32,z=64,R=128,V=256,p=512,k=1024,b=2048,N=4096,j=8192,Wn=16384,yn=32768,Mt=65536,Xn=1<<18,wn=1<<19,cn=Symbol("$state"),Ht=Symbol("legacy props"),Yt=Symbol("");function Tn(n){return n===this.v}function Qn(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function mn(n){return!Qn(n,this.v)}function nt(n){throw new Error("effect_in_teardown")}function tt(){throw new Error("effect_in_unowned_derived")}function rt(n){throw new Error("effect_orphan")}function et(){throw new Error("effect_update_depth_exceeded")}function jt(){throw new Error("hydration_failed")}function Bt(n){throw new Error("props_invalid_value")}function Ut(){throw new Error("state_descriptors_fixed")}function Vt(){throw new Error("state_prototype_fixed")}function st(){throw new Error("state_unsafe_local_read")}function at(){throw new Error("state_unsafe_mutation")}let J=!1;function Gt(){J=!0}function sn(n){return{f:0,v:n,reactions:null,equals:Tn,version:0}}function Kt(n){return An(sn(n))}function lt(n,t=!1){var e;const r=sn(n);return t||(r.equals=mn),J&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function $t(n,t=!1){return An(lt(n,t))}function An(n){return o!==null&&o.f&y&&(m===null?At([n]):m.push(n)),n}function ut(n,t){return o!==null&&on()&&o.f&(y|en)&&(m===null||!m.includes(n))&&at(),ot(n,t)}function ot(n,t){return n.equals(t)||(n.v=t,n.version=Un(),gn(n,k),on()&&u!==null&&u.f&p&&!(u.f&A)&&(c!==null&&c.includes(n)?(T(u,k),W(u)):g===null?gt([n]):g.push(n))),t}function gn(n,t){var r=n.reactions;if(r!==null)for(var e=on(),s=r.length,a=0;a<s;a++){var l=r[a],i=l.f;i&k||!e&&l===u||(T(l,t),i&(p|R)&&(i&y?gn(l,b):W(l)))}}const Zt=1,zt=2,Jt=4,Wt=8,Xt=16,Qt=1,nr=2,tr=4,rr=8,er=16,sr=1,ar=2,it="[",ft="[!",_t="]",kn={},lr=Symbol();function In(n){console.warn("hydration_mismatch")}let S=!1;function ur(n){S=n}let w;function L(n){if(n===null)throw In(),kn;return w=n}function or(){return L(D(w))}function ir(n){if(S){if(D(w)!==null)throw In(),kn;w=n}}function fr(n=1){if(S){for(var t=n,r=w;t--;)r=D(r);w=r}}function _r(){for(var n=0,t=w;;){if(t.nodeType===8){var r=t.data;if(r===_t){if(n===0)return t;n-=1}else(r===it||r===ft)&&(n+=1)}var e=D(t);t.remove(),t=e}}var vn,ct,Sn,Rn;function cr(){if(vn===void 0){vn=window,ct=document;var n=Element.prototype,t=Node.prototype;Sn=_n(t,"firstChild").get,Rn=_n(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function X(n=""){return document.createTextNode(n)}function Q(n){return Sn.call(n)}function D(n){return Rn.call(n)}function vr(n,t){if(!S)return Q(n);var r=Q(w);if(r===null)r=w.appendChild(X());else if(t&&r.nodeType!==3){var e=X();return r==null||r.before(e),L(e),e}return L(r),r}function pr(n,t){if(!S){var r=Q(n);return r instanceof Comment&&r.data===""?D(r):r}return w}function hr(n,t=1,r=!1){let e=S?w:n;for(var s;t--;)s=e,e=D(e);if(!S)return e;var a=e==null?void 0:e.nodeType;if(r&&a!==3){var l=X();return e===null?s==null||s.after(l):e.before(l),L(l),l}return L(e),e}function dr(n){n.textContent=""}function vt(n){var t=y|k;u===null?t|=R:u.f|=wn;var r=o!==null&&o.f&y?o:null;const e={children:null,ctx:f,deps:null,equals:Tn,f:t,fn:n,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function Er(n){const t=vt(n);return t.equals=mn,t}function Dn(n){var t=n.children;if(t!==null){n.children=null;for(var r=0;r<t.length;r+=1){var e=t[r];e.f&y?an(e):P(e)}}}function pt(n){for(var t=n.parent;t!==null;){if(!(t.f&y))return t;t=t.parent}return null}function On(n){var t,r=u;Z(pt(n));try{Dn(n),t=Vn(n)}finally{Z(r)}return t}function xn(n){var t=On(n),r=(O||n.f&R)&&n.deps!==null?b:p;T(n,r),n.equals(t)||(n.v=t,n.version=Un())}function an(n){Dn(n),H(n,0),T(n,j),n.v=n.children=n.deps=n.ctx=n.reactions=null}function Cn(n){u===null&&o===null&&rt(),o!==null&&o.f&R&&tt(),un&&nt()}function ht(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function q(n,t,r,e=!0){var s=(n&z)!==0,a=u,l={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|k,first:null,fn:t,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var i=x;try{pn(!0),B(l),l.f|=Wn}catch(_){throw P(l),_}finally{pn(i)}}else t!==null&&W(l);var E=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&wn)===0;if(!E&&!s&&e&&(a!==null&&ht(l,a),o!==null&&o.f&y)){var h=o;(h.children??(h.children=[])).push(l)}return l}function yr(n){const t=q(Y,null,!1);return T(t,p),t.teardown=n,t}function wr(n){Cn();var t=u!==null&&(u.f&A)!==0&&f!==null&&!f.m;if(t){var r=f;(r.e??(r.e=[])).push({fn:n,effect:u,reaction:o})}else{var e=Nn(n);return e}}function Tr(n){return Cn(),ln(n)}function mr(n){const t=q(z,n,!0);return()=>{P(t)}}function Nn(n){return q(En,n,!1)}function Ar(n,t){var r=f,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=ln(()=>{n(),!e.ran&&(e.ran=!0,ut(r.l.r2,!0),Ot(t))})}function gr(){var n=f;ln(()=>{if(Dt(n.l.r2)){for(var t of n.l.r1){var r=t.effect;r.f&p&&T(r,b),F(r)&&B(r),t.ran=!1}n.l.r2.v=!1}})}function ln(n){return q(Y,n,!0)}function kr(n){return dt(n)}function dt(n,t=0){return q(Y|en|t,n,!0)}function Ir(n,t=!0){return q(Y|A,n,!0,t)}function bn(n){var t=n.teardown;if(t!==null){const r=un,e=o;hn(!0),$(null);try{t.call(null)}finally{hn(r),$(e)}}}function qn(n){var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)an(t[r])}}function Pn(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;P(r,t),r=e}}function Et(n){for(var t=n.first;t!==null;){var r=t.next;t.f&A||P(t),t=r}}function P(n,t=!0){var r=!1;if((t||n.f&Xn)&&n.nodes_start!==null){for(var e=n.nodes_start,s=n.nodes_end;e!==null;){var a=e===s?null:D(e);e.remove(),e=a}r=!0}Pn(n,t&&!r),qn(n),H(n,0),T(n,j);var l=n.transitions;if(l!==null)for(const E of l)E.stop();bn(n);var i=n.parent;i!==null&&i.first!==null&&Fn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.parent=n.fn=n.nodes_start=n.nodes_end=null}function Fn(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function Sr(n,t){var r=[];Ln(n,r,!0),yt(r,()=>{P(n),t&&t()})}function yt(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var s of n)s.out(e)}else t()}function Ln(n,t,r){if(!(n.f&N)){if(n.f^=N,n.transitions!==null)for(const l of n.transitions)(l.is_global||r)&&t.push(l);for(var e=n.first;e!==null;){var s=e.next,a=(e.f&yn)!==0||(e.f&A)!==0;Ln(e,t,a?r:!1),e=s}}}function Rr(n){Mn(n,!0)}function Mn(n,t){if(n.f&N){F(n)&&B(n),n.f^=N;for(var r=n.first;r!==null;){var e=r.next,s=(r.f&yn)!==0||(r.f&A)!==0;Mn(r,s?t:!1),r=e}if(n.transitions!==null)for(const a of n.transitions)(a.is_global||t)&&a.in()}}const wt=typeof requestIdleCallback>"u"?n=>setTimeout(n,1):requestIdleCallback;let G=!1,K=!1,nn=[],tn=[];function Hn(){G=!1;const n=nn.slice();nn=[],dn(n)}function Yn(){K=!1;const n=tn.slice();tn=[],dn(n)}function Dr(n){G||(G=!0,queueMicrotask(Hn)),nn.push(n)}function Or(n){K||(K=!0,wt(Yn)),tn.push(n)}function Tt(){G&&Hn(),K&&Yn()}const jn=0,mt=1;let U=jn,M=!1,x=!1,un=!1;function pn(n){x=n}function hn(n){un=n}let I=[],C=0;let o=null;function $(n){o=n}let u=null;function Z(n){u=n}let m=null;function At(n){m=n}let c=null,d=0,g=null;function gt(n){g=n}let Bn=0,O=!1,f=null;function Un(){return++Bn}function on(){return!J||f!==null&&f.l===null}function F(n){var l,i;var t=n.f;if(t&k)return!0;if(t&b){var r=n.deps,e=(t&R)!==0;if(r!==null){var s;if(t&V){for(s=0;s<r.length;s++)((l=r[s]).reactions??(l.reactions=[])).push(n);n.f^=V}for(s=0;s<r.length;s++){var a=r[s];if(F(a)&&xn(a),e&&u!==null&&!O&&!((i=a==null?void 0:a.reactions)!=null&&i.includes(n))&&(a.reactions??(a.reactions=[])).push(n),a.version>n.version)return!0}}e||T(n,p)}return!1}function kt(n,t,r){throw n}function Vn(n){var fn;var t=c,r=d,e=g,s=o,a=O,l=m,i=f,E=n.f;c=null,d=0,g=null,o=E&(A|z)?null:n,O=!x&&(E&R)!==0,m=null,f=n.ctx;try{var h=(0,n.fn)(),_=n.deps;if(c!==null){var v;if(H(n,d),_!==null&&d>0)for(_.length=d+c.length,v=0;v<c.length;v++)_[d+v]=c[v];else n.deps=_=c;if(!O)for(v=d;v<_.length;v++)((fn=_[v]).reactions??(fn.reactions=[])).push(n)}else _!==null&&d<_.length&&(H(n,d),_.length=d);return h}finally{c=t,d=r,g=e,o=s,O=a,m=l,f=i}}function It(n,t){let r=t.reactions;if(r!==null){var e=r.indexOf(n);if(e!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[e]=r[s],r.pop())}}r===null&&t.f&y&&(c===null||!c.includes(t))&&(T(t,b),t.f&(R|V)||(t.f^=V),H(t,0))}function H(n,t){var r=n.deps;if(r!==null)for(var e=t;e<r.length;e++)It(n,r[e])}function B(n){var t=n.f;if(!(t&j)){T(n,p);var r=u;u=n;try{t&en?Et(n):Pn(n),qn(n),bn(n);var e=Vn(n);n.teardown=typeof e=="function"?e:null,n.version=Bn}catch(s){kt(s)}finally{u=r}}}function Gn(){C>1e3&&(C=0,et()),C++}function Kn(n){var t=n.length;if(t!==0){Gn();var r=x;x=!0;try{for(var e=0;e<t;e++){var s=n[e];s.f&p||(s.f^=p);var a=[];$n(s,a),St(a)}}finally{x=r}}}function St(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];!(e.f&(j|N))&&F(e)&&(B(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Fn(e):e.fn=null))}}function Rt(){if(M=!1,C>1001)return;const n=I;I=[],Kn(n),M||(C=0)}function W(n){U===jn&&(M||(M=!0,queueMicrotask(Rt)));for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&(z|A)){if(!(r&p))return;t.f^=p}}I.push(t)}function $n(n,t){var r=n.first,e=[];n:for(;r!==null;){var s=r.f,a=(s&A)!==0,l=a&&(s&p)!==0;if(!l&&!(s&N))if(s&Y){a?r.f^=p:F(r)&&B(r);var i=r.first;if(i!==null){r=i;continue}}else s&En&&e.push(r);var E=r.next;if(E===null){let v=r.parent;for(;v!==null;){if(n===v)break n;var h=v.next;if(h!==null){r=h;continue n}v=v.parent}}r=E}for(var _=0;_<e.length;_++)i=e[_],t.push(i),$n(i,t)}function Zn(n){var t=U,r=I;try{Gn();const s=[];U=mt,I=s,M=!1,Kn(r);var e=n==null?void 0:n();return Tt(),(I.length>0||s.length>0)&&Zn(),C=0,e}finally{U=t,I=r}}async function xr(){await Promise.resolve(),Zn()}function Dt(n){var _;var t=n.f,r=(t&y)!==0;if(r&&t&j){var e=On(n);return an(n),e}if(o!==null){m!==null&&m.includes(n)&&st();var s=o.deps;c===null&&s!==null&&s[d]===n?d++:c===null?c=[n]:c.push(n),g!==null&&u!==null&&u.f&p&&!(u.f&A)&&g.includes(n)&&(T(u,k),W(u))}else if(r&&n.deps===null)for(var a=n,l=a.parent,i=a;l!==null;)if(l.f&y){var E=l;i=E,l=E.parent}else{var h=l;(_=h.deriveds)!=null&&_.includes(i)||(h.deriveds??(h.deriveds=[])).push(i);break}return r&&(a=n,F(a)&&xn(a)),n.v}function Ot(n){const t=o;try{return o=null,n()}finally{o=t}}const xt=~(k|b|p);function T(n,t){n.f=n.f&xt|t}function Cr(n,t=!1,r){f={p:f,c:null,e:null,m:!1,s:n,x:null,l:null},J&&!t&&(f.l={s:null,u:null,r1:[],r2:sn(!1)})}function Nr(n){const t=f;if(t!==null){const l=t.e;if(l!==null){var r=u,e=o;t.e=null;try{for(var s=0;s<l.length;s++){var a=l[s];Z(a.effect),$(a.reaction),Nn(a.fn)}}finally{Z(r),$(e)}}f=t.p,t.m=!0}return{}}function br(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(cn in n)rn(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&cn in r&&rn(r)}}}function rn(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let e in n)try{rn(n[e],t)}catch{}const r=Jn(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=zn(r);for(let s in e){const a=e[s].get;if(a)try{a.call(n)}catch{}}}}}export{Jn as $,yt as A,P as B,Jt as C,Q as D,Zt as E,_t as F,o as G,ft as H,N as I,Wt as J,lt as K,sn as L,Xt as M,D as N,yn as O,Tr as P,wr as Q,f as R,Ot as S,Lt as T,dn as U,Dt as V,br as W,vt as X,Gt as Y,Yt as Z,Or as _,Nr as a,zn as a0,Xn as a1,it as a2,J as a3,cr as a4,kn as a5,In as a6,jt as a7,mr as a8,cn as a9,Ar as aA,gr as aB,$t as aC,ct as aD,sr as aE,ar as aF,fr as aG,Nn as aH,Kt as aI,Zn as aJ,xr as aK,Qn as aL,qt as aa,Pt as ab,Ut as ac,ut as ad,_n as ae,lr as af,Vt as ag,Bt as ah,Mt as ai,tr as aj,mn as ak,A as al,z as am,Z as an,Qt as ao,nr as ap,rr as aq,Ht as ar,Er as as,er as at,Ft as au,yr as av,$ as aw,bt as ax,on as ay,ln as az,X as b,vr as c,dt as d,L as e,pr as f,or as g,S as h,Ct as i,Nt as j,_r as k,ur as l,w as m,Rr as n,Ir as o,Cr as p,Sr as q,ir as r,hr as s,kr as t,Dr as u,u as v,ot as w,zt as x,Ln as y,dr as z};
