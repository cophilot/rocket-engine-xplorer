import{l as te,f as ae,a as C,t as U}from"../chunks/disclose-version.BjaIHGDJ.js";import{aq as G,p as J,ar as F,t as I,a as K,i,c as b,s as l,a1 as d,r as f,k as X,f as se,$ as ne}from"../chunks/runtime.D3EUBQNe.js";import{h as re}from"../chunks/svelte-head.CuEPRuyF.js";import{i as ie,p as M,a as o}from"../chunks/props.DeRfUPWP.js";import{s as le,a as oe}from"../chunks/store.DhRlqiu4.js";import{p as ve}from"../chunks/stores.B8c4HnKD.js";import{g as ue}from"../chunks/entry.DB9r7OtL.js";import{s as ce,H as ge}from"../chunks/HomeButton.CfyMbaPL.js";import{c as j,b as me,e as pe,i as de,a as fe,g as x}from"../chunks/allEngines.CfwzP-OU.js";import{s as $}from"../chunks/render.DcgCetwY.js";import{s as _e}from"../chunks/attributes.B6-yH2X6.js";import{S as h,U as p}from"../chunks/UnitView.D84Jmbc7.js";import{o as we}from"../chunks/index-client.B8sCnZ0M.js";function Q(t,a,e){if(t.multiple)return je(t,a);for(var s of t.options){var n=y(s);if(ie(n,a)){s.selected=!0;return}}(!e||a!==void 0)&&(t.selectedIndex=-1)}function he(t,a){G(()=>{var e=new MutationObserver(()=>{var s=t.__value;Q(t,s)});return e.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{e.disconnect()}})}function be(t,a,e=a){var s=!0;te(t,"change",()=>{var n;if(t.multiple)n=[].map.call(t.querySelectorAll(":checked"),y);else{var r=t.querySelector(":checked");n=r&&y(r)}e(n)}),G(()=>{var n=a();if(Q(t,n,s),s&&n===void 0){var r=t.querySelector(":checked");r!==null&&(n=y(r),e(n))}t.__value=n,s=!1}),he(t)}function je(t,a){for(var e of t.options)e.selected=~a.indexOf(y(e))}function y(t){return"__value"in t?t.__value:t.value}var ye=(t,a,e)=>a.onEngineChange(i(e)),Ee=U('<option class="svelte-143j59w"> </option>'),Se=U('<div><div class="engine-name glass svelte-143j59w"><select class="svelte-143j59w"></select></div> <h1 class="svelte-143j59w"> </h1> <img alt="" class="svelte-143j59w"> <p class="label svelte-143j59w">Origin</p> <!> <div class="line svelte-143j59w"></div> <p class="label svelte-143j59w">Status</p> <!> <div class="line svelte-143j59w"></div> <p class="label svelte-143j59w">First Flight</p> <!> <div class="line svelte-143j59w"></div> <p class="label svelte-143j59w">Propellant</p> <!> <div class="line svelte-143j59w"></div> <p class="label svelte-143j59w">Cycle</p> <!> <div class="line svelte-143j59w"></div> <p class="label svelte-143j59w">Specific Impulse</p> <!> <div class="line svelte-143j59w"></div> <p class="label svelte-143j59w">Specific Impulse (Vac)</p> <!> <div class="line svelte-143j59w"></div> <p class="label svelte-143j59w">Height</p> <!> <div class="line svelte-143j59w"></div> <p class="label svelte-143j59w">Diameter</p> <!> <div class="line svelte-143j59w"></div> <p class="label svelte-143j59w">Mass</p> <!> <div class="line svelte-143j59w"></div> <p class="label svelte-143j59w">Cost</p> <!></div>');function z(t,a){J(a,!0);let e=M(a,"engine",7),s=M(a,"comparisonEngine",7),n=M(a,"isFirst",3,!1);e()||e(j()),s()||s(j());let r=F(o(e().stats.name));const u=me();var v=Se(),c=b(v),g=b(c);g.__change=[ye,a,r],pe(g,21,()=>u,de,(L,S)=>{var w=Ee(),P={},ee=b(w,!0);f(w),I(()=>{P!==(P=i(S).stats.name)&&(w.value=(w.__value=i(S).stats.name)==null?"":i(S).stats.name),$(ee,i(S).stats.name)}),C(L,w)}),f(g),f(c);var m=l(c,2),E=b(m,!0);f(m);var V=l(m,2),k=l(V,4);h(k,{get myState(){return e().stats.country},noLabel:!0,noMarginTop:!0});var T=l(k,6);h(T,{get myState(){return e().stats.status},noLabel:!0,noMarginTop:!0});var q=l(T,6),W=X(()=>new fe(e().stats.firstFlight));h(q,{get myState(){return i(W)},noLabel:!0,noMarginTop:!0});var B=l(q,6);h(B,{get myState(){return e().stats.propellant},noLabel:!0,noMarginTop:!0});var D=l(B,6);h(D,{get myState(){return e().stats.cycle},noLabel:!0,noMarginTop:!0});var H=l(D,6);p(H,{get unit(){return e().stats.specificImpulseSeaLevel},get compareUnit(){return s().stats.specificImpulseSeaLevel}});var N=l(H,6);p(N,{get unit(){return e().stats.specificImpulseVacuum},get compareUnit(){return s().stats.specificImpulseVacuum}});var O=l(N,6);p(O,{get unit(){return e().stats.height},get compareUnit(){return s().stats.height}});var A=l(O,6);p(A,{get unit(){return e().stats.diameter},get compareUnit(){return s().stats.diameter}});var R=l(A,6);p(R,{get unit(){return e().stats.massDry},get compareUnit(){return s().stats.massDry}});var Y=l(R,6),Z=X(()=>e().stats.cost||null);p(Y,{get unit(){return i(Z)},get compareUnit(){return s().stats.cost}}),f(v),I(()=>{ce(v,`${"comparison-box "+(n()?"first":"")} svelte-143j59w`),$(E,e().stats.name),_e(V,"src",e().stats.imageUrl)}),be(g,()=>i(r),L=>d(r,L)),C(t,v),K()}ae(["change"]);var xe=U('<div class="comparison-view mb svelte-gd52xe"><!> <!></div>');function Ce(t,a){var e=xe(),s=b(e);z(s,{get engine(){return a.engine1},get comparisonEngine(){return a.engine2},get onEngineChange(){return a.onEngineChange1},isFirst:!0});var n=l(s,2);z(n,{get engine(){return a.engine2},get comparisonEngine(){return a.engine1},get onEngineChange(){return a.onEngineChange2}}),f(e),C(t,e)}var Ue=U("<!> <!>",1);function Ae(t,a){J(a,!0);const e=le(),s=()=>oe(ve,"$page",e);let n=F(o(x(s().params.engine1||""))),r=F(o(x(s().params.engine2||"")));const u=()=>{ue(`/compare/${i(n).urlName}/${i(r).urlName}`)};we(()=>{!i(n)&&!i(r)?(d(n,o(j())),d(r,o(j())),u()):i(n)&&!i(r)&&(d(r,o(j())),u())});var v=Ue();re(_=>{I(()=>{var m,E;return ne.title=`${(((m=i(n))==null?void 0:m.stats.name)||"404")??""} | ${(((E=i(r))==null?void 0:E.stats.name)||"404")??""} - Rocket Engine Xplorer`})});var c=se(v);Ce(c,{get engine1(){return i(n)},get engine2(){return i(r)},onEngineChange1:_=>{d(n,o(x(_))),u()},onEngineChange2:_=>{d(r,o(x(_))),u()}});var g=l(c,2);ge(g,{}),C(t,v),K()}export{Ae as component};
