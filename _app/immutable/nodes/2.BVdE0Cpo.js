import{a as S,t as H,d as ae}from"../chunks/disclose-version.Dm-Biewz.js";import{i as re}from"../chunks/legacy.BDdGRo8X.js";import{h as E,i as te,b as ne,W as le,G as F,H as se,j as V,k as B,l as D,m as w,at as R,d as G,e as J,g as ie,J as X,au as oe,av as ve,F as fe,aw as ue,aq as ce,B as _e,al as de,ab as he,O as U,ax as pe,ay as me,az as ge,x as be,aA as xe,aB as ke,p as Ee,aC as W,aD as ye,a as Te,Q as I,aE as Y,T as y,c as A,s as N,f as P,r as C,t as we}from"../chunks/runtime.D23jDhc_.js";import{s as Ae}from"../chunks/render.DpBhZpPY.js";import{i as Ce}from"../chunks/if.CZTYpog3.js";import{r as Se}from"../chunks/attributes.49zVRPh5.js";import{l as Ie,d as Re}from"../chunks/events.DzuxdplV.js";import{a as Ne,S as Q}from"../chunks/allEngines.DrFs8TIS.js";import{g as K}from"../chunks/entry.jWogtf0R.js";function He(a,e){return e}function Me(a,e,r,o){for(var i=[],u=e.length,v=0;v<u;v++)ve(e[v].e,i,!0);var h=u>0&&i.length===0&&r!==null;if(h){var f=r.parentNode;fe(f),f.append(r),o.clear(),k(a,e[0].prev,e[u-1].next)}ue(i,()=>{for(var d=0;d<u;d++){var t=e[d];h||(o.delete(t.k),k(a,t.prev,t.next)),ce(t.e,!h)}})}function Oe(a,e,r,o,i,u=null){var v=a,h={flags:e,items:new Map,first:null};E&&te();var f=null,d=!1;ne(()=>{var t=r(),c=le(t)?t:t==null?[]:F(t),n=c.length;if(d&&n===0)return;d=n===0;let l=!1;if(E){var m=v.data===se;m!==(n===0)&&(v=V(),B(v),D(!1),l=!0)}if(E){for(var g=null,p,s=0;s<n;s++){if(w.nodeType===8&&w.data===_e){v=w,l=!0,D(!1);break}var _=c[s],T=o(_,s);p=Z(w,h,g,null,_,T,s,i,e),h.items.set(T,p),g=p}n>0&&B(V())}if(!E){var b=de;De(c,h,v,i,e,(b.f&R)!==0,o)}u!==null&&(n===0?f?G(f):f=J(()=>u(v)):f!==null&&ie(f,()=>{f=null})),l&&D(!0),r()}),E&&(v=w)}function De(a,e,r,o,i,u,v){var h=a.length,f=e.items,d=e.first,t=d,c,n=null,l=[],m=[],g,p,s,_;for(_=0;_<h;_+=1){if(g=a[_],p=v(g,_),s=f.get(p),s===void 0){var T=t?t.e.nodes_start:r;n=Z(T,e,n,n===null?e.first:n.next,g,p,_,o,i),f.set(p,n),l=[],m=[],t=n.next;continue}if($e(s,g,_),s.e.f&R&&G(s.e),s!==t){if(c!==void 0&&c.has(s)){if(l.length<m.length){var b=m[0],x;n=b.prev;var L=l[0],M=l[l.length-1];for(x=0;x<l.length;x+=1)q(l[x],b,r);for(x=0;x<m.length;x+=1)c.delete(m[x]);k(e,L.prev,M.next),k(e,n,L),k(e,M,b),t=b,n=M,_-=1,l=[],m=[]}else c.delete(s),q(s,t,r),k(e,s.prev,s.next),k(e,s,n===null?e.first:n.next),k(e,n,s),n=s;continue}for(l=[],m=[];t!==null&&t.k!==p;)(u||!(t.e.f&R))&&(c??(c=new Set)).add(t),m.push(t),t=t.next;if(t===null)continue;s=t}l.push(s),n=s,t=s.next}if(t!==null||c!==void 0){for(var O=c===void 0?[]:F(c);t!==null;)(u||!(t.e.f&R))&&O.push(t),t=t.next;var j=O.length;if(j>0){var ee=null;Me(e,O,ee,f)}}X.first=e.first&&e.first.e,X.last=n&&n.e}function $e(a,e,r,o){oe(a.v,e),a.i=r}function Z(a,e,r,o,i,u,v,h,f){var d=(f&me)!==0,t=(f&ge)===0,c=d?t?he(i):U(i):i,n=f&pe?U(v):v,l={i:n,v:c,k:u,a:null,e:null,prev:r,next:o};try{return l.e=J(()=>h(a,c,n),E),l.e.prev=r&&r.e,l.e.next=o&&o.e,r===null?e.first=l:(r.next=l,r.e.next=l.e),o!==null&&(o.prev=l,o.e.prev=l.e),l}finally{}}function q(a,e,r){for(var o=a.next?a.next.e.nodes_start:r,i=e?e.e.nodes_start:r,u=a.e.nodes_start;u!==o;){var v=be(u);i.before(u),u=v}}function k(a,e,r){e===null?a.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function ze(a,e,r=e){var o=xe();Ie(a,"input",()=>{var i=$(a)?z(a.value):a.value;r(i),o&&i!==(i=e())&&(a.value=i??"")}),ke(()=>{var i=e();if(E&&a.defaultValue!==a.value){r($(a)?z(a.value):a.value);return}$(a)&&i===z(a.value)||a.type==="date"&&!i&&!a.value||i!==a.value&&(a.value=i??"")})}function $(a){var e=a.type;return e==="number"||e==="range"}function z(a){return a===""?null:+a}const Le=!0,ra=Object.freeze(Object.defineProperty({__proto__:null,prerender:Le},Symbol.toStringTag,{value:"Module"})),Ve=(a,e,r)=>{I(e,""),r()};var Be=(a,e)=>{K(`/engine/${Q.normalizeString(y(e))}`)},Xe=(a,e)=>{K(`/compare/${Q.normalizeString(y(e))}`)},Ue=H('<div class="engine-box svelte-1exodk1"><button class="engine-button svelte-1exodk1"> </button> <button class="compare-button small svelte-1exodk1" aria-label="Compare"><i class="bi bi-layout-split"></i></button></div>'),We=H("<p><i>No Results</i></p>"),Ye=H('<header><div class="engine-overview svelte-1exodk1"><div class="mb search-bar-box svelte-1exodk1"><input type="text" placeholder="Search..." class="search-bar svelte-1exodk1"> <button class="small svelte-1exodk1">Clear</button></div> <!></div></header>');function qe(a,e){Ee(e,!1);const r=Y(),o=Y();let i=Ne().map(n=>n.stats.name);const u=()=>{I(r,i.filter(n=>n.toLowerCase().includes(y(o).toLowerCase())))};W(()=>{},()=>{I(r,i)}),W(()=>{},()=>{I(o,"")}),ye(),re();var v=Ye(),h=A(v),f=A(h),d=A(f);Se(d),d.__change=u;var t=N(d,2);t.__click=[Ve,o,u],C(f);var c=N(f,2);Ce(c,()=>y(r).length>0,n=>{var l=ae(),m=P(l);Oe(m,1,()=>y(r),He,(g,p)=>{var s=Ue(),_=A(s);_.__click=[Be,p];var T=A(_);C(_);var b=N(_,2);b.__click=[Xe,p],C(s),we(()=>Ae(T,`> ${y(p)??""}`)),S(g,s)}),S(n,l)},n=>{var l=We();S(n,l)}),C(h),C(v),ze(d,()=>y(o),n=>I(o,n)),S(a,v),Te()}Re(["change","click"]);var Fe=H(`<h1>Rocket Engine Xplorer</h1> <p class="info">Welcome to the Rocket Engine Xplorer! This is a simple web app that allows you to explore and
	compare the different rocket engines that have been used in space exploration.</p> <!>`,1);function ta(a){var e=Fe(),r=N(P(e),4);qe(r,{}),S(a,e)}export{ta as component,ra as universal};
