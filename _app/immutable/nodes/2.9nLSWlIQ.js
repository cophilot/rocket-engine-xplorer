import{a as A,t as C,d as ne}from"../chunks/disclose-version.CANvk-HK.js";import{i as te}from"../chunks/legacy.BYkuKUkL.js";import{h as x,i as se,b as le,D as ie,ak as q,H as oe,j as X,k as F,l as O,m as I,ay as D,d as J,e as K,g as ve,B as U,az as ue,aA as fe,aj as ce,aB as _e,an as de,ag as he,a8 as pe,Z as me,w as Y,aC as ge,aD as be,aE as we,ae as Ee,aF as xe,au as ye,p as Re,aG as G,aH as Se,t as L,a as ke,s as y,f as Q,A as k,y as T,c as b,r as w,aI as z}from"../chunks/runtime.C1vDKb48.js";import{l as Ne,a as Te,w as Ae,e as H,s as j}from"../chunks/render.DS5ySb03.js";import{i as Ce}from"../chunks/if.DL3SXjjb.js";import{r as Ie,s as De}from"../chunks/attributes.B_svR1xD.js";import{a as ze,S as He}from"../chunks/allEngines.MYxSb2P4.js";import{g as Me}from"../chunks/entry.Cd0LSR8b.js";function $e(a,e){return e}function Oe(a,e,r,t){for(var s=[],f=e.length,o=0;o<f;o++)fe(e[o].e,s,!0);var d=f>0&&s.length===0&&r!==null;if(d){var u=r.parentNode;ce(u),u.append(r),t.clear(),N(a,e[0].prev,e[f-1].next)}_e(s,()=>{for(var h=0;h<f;h++){var n=e[h];d||(t.delete(n.k),N(a,n.prev,n.next)),de(n.e,!d)}})}function Ve(a,e,r,t,s,f=null){var o=a,d={flags:e,items:new Map,first:null};x&&se();var u=null,h=!1;le(()=>{var n=r(),c=ie(n)?n:n==null?[]:q(n),l=c.length;if(h&&l===0)return;h=l===0;let i=!1;if(x){var _=o.data===oe;_!==(l===0)&&(o=X(),F(o),O(!1),i=!0)}if(x){for(var m=null,g,v=0;v<l;v++){if(I.nodeType===8&&I.data===he){o=I,i=!0,O(!1);break}var p=c[v],E=t(p,v);g=ee(I,d,m,null,p,E,v,s,e),d.items.set(E,g),m=g}l>0&&F(X())}if(!x){var R=pe;Be(c,d,o,s,e,(R.f&D)!==0,t)}f!==null&&(l===0?u?J(u):u=K(()=>f(o)):u!==null&&ve(u,()=>{u=null})),i&&O(!0),r()}),x&&(o=I)}function Be(a,e,r,t,s,f,o){var d=a.length,u=e.items,h=e.first,n=h,c,l=null,i=[],_=[],m,g,v,p;for(p=0;p<d;p+=1){if(m=a[p],g=o(m,p),v=u.get(g),v===void 0){var E=n?n.e.nodes_start:r;l=ee(E,e,l,l===null?e.first:l.next,m,g,p,t,s),u.set(g,l),i=[],_=[],n=l.next;continue}if(Le(v,m,p),v.e.f&D&&J(v.e),v!==n){if(c!==void 0&&c.has(v)){if(i.length<_.length){var R=_[0],S;l=R.prev;var W=i[0],M=i[i.length-1];for(S=0;S<i.length;S+=1)P(i[S],R,r);for(S=0;S<_.length;S+=1)c.delete(_[S]);N(e,W.prev,M.next),N(e,l,W),N(e,M,R),n=R,l=M,p-=1,i=[],_=[]}else c.delete(v),P(v,n,r),N(e,v.prev,v.next),N(e,v,l===null?e.first:l.next),N(e,l,v),l=v;continue}for(i=[],_=[];n!==null&&n.k!==g;)(f||!(n.e.f&D))&&(c??(c=new Set)).add(n),_.push(n),n=n.next;if(n===null)continue;v=n}i.push(v),l=v,n=v.next}if(n!==null||c!==void 0){for(var $=c===void 0?[]:q(c);n!==null;)(f||!(n.e.f&D))&&$.push(n),n=n.next;var ae=$.length;if(ae>0){var re=null;Oe(e,$,re,u)}}U.first=e.first&&e.first.e,U.last=l&&l.e}function Le(a,e,r,t){ue(a.v,e),a.i=r}function ee(a,e,r,t,s,f,o,d,u){var h=(u&be)!==0,n=(u&we)===0,c=h?n?me(s):Y(s):s,l=u&ge?Y(o):o,i={i:l,v:c,k:f,a:null,e:null,prev:r,next:t};try{return i.e=K(()=>d(a,c,l),x),i.e.prev=r&&r.e,i.e.next=t&&t.e,r===null?e.first=i:(r.next=i,r.e.next=i.e),t!==null&&(t.prev=i,t.e.prev=i.e),i}finally{}}function P(a,e,r){for(var t=a.next?a.next.e.nodes_start:r,s=e?e.e.nodes_start:r,f=a.e.nodes_start;f!==t;){var o=Ee(f);s.before(f),f=o}}function N(a,e,r){e===null?a.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function We(a,e){var r=a.__className,t=Xe(e);x&&a.className===t?a.__className=t:(r!==t||x&&a.className!==t)&&(e==null?a.removeAttribute("class"):a.className=t,a.__className=t)}function Xe(a){return a??""}function Fe(a,e,r=e){var t=xe();Ne(a,"input",()=>{var s=V(a)?B(a.value):a.value;r(s),t&&s!==(s=e())&&(a.value=s??"")}),ye(()=>{var s=e();if(x&&a.defaultValue!==a.value){r(V(a)?B(a.value):a.value);return}V(a)&&s===B(a.value)||a.type==="date"&&!s&&!a.value||s!==a.value&&(a.value=s??"")})}function V(a){var e=a.type;return e==="number"||e==="range"}function B(a){return a===""?null:+a}function Ue(a,e){Te(window,["resize"],()=>Ae(()=>e(window[a])))}const Ye=!0,oa=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ye},Symbol.toStringTag,{value:"Module"}));var Ge=C('<button class="engine-button svelte-zxev6t"> </button>'),Pe=C("<p><i>No Results</i></p>"),Ze=C('<header><div class="engine-overview svelte-zxev6t"><div><input type="text" placeholder="Search..."> <button>Clear</button></div> <!></div></header>');function qe(a,e){Re(e,!1);const r=z(),t=z();let s=z(0),f=ze().map(_=>_.stats.name);const o=()=>{T(r,f.filter(_=>_.toLowerCase().includes(k(t).toLowerCase())))},d=()=>{T(t,""),o()};G(()=>{},()=>{T(r,f)}),G(()=>{},()=>{T(t,"")}),Se(),te();var u=Ze(),h=b(u),n=b(h),c=b(n);Ie(c);var l=y(c,2);w(n);var i=y(n,2);Ce(i,()=>k(r).length>0,_=>{var m=ne(),g=Q(m);Ve(g,1,()=>k(r),$e,(v,p)=>{var E=Ge(),R=b(E);w(E),L(()=>j(R,`> ${k(p)??""}`)),H("click",E,()=>{Me(`/engine/${He.normalizeString(k(p))}`)}),A(v,E)}),A(_,m)},_=>{var m=Pe();A(_,m)}),w(h),w(u),L(()=>We(n,k(s)<800?"ver":"hor")),Ue("innerWidth",_=>T(s,_)),H("change",c,o),Fe(c,()=>k(t),_=>T(t,_)),H("click",l,d),A(a,u),ke()}var Je=C('<header><div class="comparison-box svelte-c5shr"><select><option>RS-25</option><option>RS-68</option><option>RD-180</option></select> <h1> </h1> <img alt="Rocket Engine" class="svelte-c5shr"></div></header>');function Z(a){let e=z("RS-25"),r="https://upload.wikimedia.org/wikipedia/commons/b/b1/Shuttle_Main_Engine_Test_Firing.jpg";const t=i=>{T(e,i.target.value)};var s=Je(),f=b(s),o=b(f),d=b(o);d.value=(d.__value="RS-25")==null?"":"RS-25";var u=y(d);u.value=(u.__value="RS-68")==null?"":"RS-68";var h=y(u);h.value=(h.__value="RD-180")==null?"":"RD-180",w(o);var n=y(o,2),c=b(n,!0);w(n);var l=y(n,2);De(l,"src",r),w(f),w(s),L(()=>j(c,k(e))),H("change",o,t),A(a,s)}var Ke=C('<header><div class="comparison-view svelte-gd52xe"><!> <!></div></header>');function Qe(a){var e=Ke(),r=b(e),t=b(r);Z(t);var s=y(t,2);Z(s),w(r),w(e),A(a,e)}var je=C(`<h1>Rocket Engine Xplorer</h1> <p class="info">Welcome to the Rocket Engine Xplorer! This is a simple web app that allows you to explore and
	compare the different rocket engines that have been used in space exploration.</p> <!> <!>`,1);function va(a){var e=je(),r=y(Q(e),4);qe(r,{});var t=y(r,2);Qe(t),A(a,e)}export{va as component,oa as universal};