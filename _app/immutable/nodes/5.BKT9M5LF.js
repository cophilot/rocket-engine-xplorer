var rt=Object.defineProperty;var it=(l,t,g)=>t in l?rt(l,t,{enumerable:!0,configurable:!0,writable:!0,value:g}):l[t]=g;var q=(l,t,g)=>it(l,typeof t!="symbol"?t+"":t,g);import{i as ot,w as st,a as y,t as S,e as lt,g as J,j as K}from"../chunks/disclose-version.Dkh6S5WJ.js";import"../chunks/legacy.BbPStDxE.js";import{h as gt,i as dt,p as F,s as r,f as E,t as p,a as I,c as T,r as k,x as m,z as B,aB as Q,$ as ct,ar as mt,ap as ut,af as Z}from"../chunks/runtime.Dzq96zRh.js";import{s as C}from"../chunks/render.5ww2zSNn.js";import{i as A}from"../chunks/if.ZnfeIL2K.js";import{b as vt,e as ft,i as _t,S as yt,c as ht}from"../chunks/allEngines.DEcslhHl.js";import{h as pt}from"../chunks/svelte-head.CFS6VOls.js";import{s as L}from"../chunks/attributes.BjTQ63h-.js";import{i as St}from"../chunks/lifecycle.ypMgYexc.js";import{s as xt,a as bt}from"../chunks/store.CFqXY-rL.js";import{p as wt}from"../chunks/stores.Dwk6RNCY.js";import{g as $}from"../chunks/entry.CAHXcQrE.js";import{p as _,a as Mt}from"../chunks/props.BoDNwOyX.js";import{s as Tt,H as kt}from"../chunks/HomeButton.Dag2uqZ_.js";function Bt(l,t,g,u,e){var v;gt&&dt();var i=(v=t.$$slots)==null?void 0:v[g],c=!1;i===!0&&(i=t.children,c=!0),i===void 0||i(l,c?()=>u:u)}function Ct(l,t){ot(window,["resize"],()=>st(()=>t(window[l])))}var Rt=S('<p class="name svelte-84otcy"> </p>'),Pt=S('<p class="value svelte-84otcy"> </p> <p class="unit svelte-84otcy"> </p>',1),zt=S('<p class="null-placeholder svelte-84otcy">-</p>'),At=S('<div class="unit-view svelte-84otcy"><!> <!></div>');function z(l,t){F(t,!0);let g=_(t,"compareUnit",3,void 0),u=_(t,"name",3,void 0);const e=()=>!g()||!t.unit?"":t.unit.isBetterThan(g())?"green":"red";var i=At(),c=T(i);A(c,u,h=>{var o=Rt(),n=T(o);k(o),p(()=>C(n,`${u()??""}:`)),y(h,o)});var v=r(c,2);A(v,()=>t.unit,h=>{var o=Pt(),n=E(o);const x=B(()=>`background: ${e()}`);var b=T(n,!0);p(()=>C(b,t.unit.getValueAsString())),k(n);var w=r(n,2),f=T(w,!0);p(()=>C(f,t.unit.getUnits())),k(w),p(()=>L(n,"style",m(x))),y(h,o)},h=>{var o=zt();y(h,o)}),k(i),y(l,i),I()}class U{}q(U,"TRANSPARENT",{firstColor:"transparent"}),q(U,"PRIMARY",{firstColor:"#00eaff",secondColor:"#ff0090"});var Et=S("<br> ",1),Ut=S("<p><!> <!></p>");function N(l,t){F(t,!0);let g=_(t,"cls",3,""),u=_(t,"onClick",3,()=>{}),e=_(t,"style",3,""),i=_(t,"lineTwo",3,void 0),c=_(t,"noMarginTop",3,!1),v=_(t,"noMarginBottom",3,!1),h=_(t,"alignTextRight",3,!1);const o=()=>{const f=t.gradient.gradientDirection||"135deg",a=t.gradient.fontColor;let s="";c()&&(s+="margin-top: 0;"),v()&&(s+="margin-bottom: 0;");let d=`linear-gradient(${f}, ${t.gradient.firstColor}`;for(let M of[t.gradient.secondColor,t.gradient.thirdColor,t.gradient.fourthColor])M!==void 0&&(d+=`, ${M}`);d+=")";let P="center";return h()&&(P="end"),`${s};background: ${d}; ${a?`color: ${a};`:""} justify-content: ${P}; ${e()}`};var n=Ut();const x=B(o);n.__click=function(...f){var a;(a=u())==null||a.apply(this,f)};var b=T(n);Bt(b,t,"default",{});var w=r(b,2);A(w,i,f=>{var a=Et(),s=r(E(a));p(()=>C(s,` ${i()??""}`)),y(f,a)}),k(n),p(()=>{Tt(n,`${"gradient-box "+g()} svelte-14n3l8l`),L(n,"style",m(x))}),y(l,n),I()}lt(["click"]);var Ft=S('<div class="state-view svelte-1q83iko"><!> <!></div>');function R(l,t){F(t,!0);let g=_(t,"name",3,void 0),u=_(t,"noMarginTop",3,!1),e=_(t,"noMarginBottom",3,!1),i=mt(0);const c=(a=!1)=>{let s=10,d=10;return m(i)<800&&(s=5),t.myState.getSecondLine()&&!a&&(d=0),`${d}px ${s}px`},v=()=>{let a="250px";return m(i)<800&&(a="calc(60vw - 10px)"),`min-width: ${a}; padding: ${c(!0)};`},h=()=>{let a="";t.myState.getFontSize()&&(a+=`font-size: ${t.myState.getFontSize()}; `);let s="150px";return m(i)<800&&(s="calc(40vw - 10px)"),`${a}padding: ${c()}; min-width: ${s}; text-align: center;`};var o=Ft(),n=T(o);A(n,g,a=>{var s=B(v);N(a,{get style(){return m(s)},get gradient(){return U.PRIMARY},alignTextRight:!0,get noMarginTop(){return u()},get noMarginBottom(){return e()},children:(d,P)=>{Q();var M=J();p(()=>C(M,`${g()??""}:`)),y(d,M)},$$slots:{default:!0}})},a=>{var s=B(v);N(a,{get style(){return m(s)},get gradient(){return U.TRANSPARENT},get noMarginTop(){return u()},get noMarginBottom(){return e()}})});var x=r(n,2),b=B(h),w=B(()=>t.myState.getGradient()),f=B(()=>t.myState.getSecondLine());N(x,{get style(){return m(b)},get gradient(){return m(w)},get lineTwo(){return m(f)},get noMarginTop(){return u()},get noMarginBottom(){return e()},children:(a,s)=>{Q();var d=J();p(()=>C(d,t.myState.getValue())),y(a,d)},$$slots:{default:!0}}),k(o),Ct("innerWidth",a=>ct(i,Mt(a))),y(l,o),I()}var It=S('<div class="engine-name glass svelte-cqn4dk"><h1 class=" svelte-cqn4dk"> </h1></div> <img alt="" class="engine-img mb mt svelte-cqn4dk"> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <button class="mt"><i class="bi bi-box-arrow-up"></i> Export</button> <button><i class="bi bi-layout-split"></i> Compare</button>',1),Vt=S("<h1>Engine not found</h1>"),qt=S("<!> <!>",1);function te(l,t){F(t,!1);const g=xt();let e=vt(bt(wt,"$page",g).params.name);const i=()=>(e==null?void 0:e.stats.rockets)||[];St();var c=qt();pt(o=>{p(()=>ut.title=`${((e==null?void 0:e.stats.name)||"404")??""} - Rocket Engine Xplorer`)});var v=E(c);A(v,()=>e,o=>{var n=It(),x=E(n),b=T(x),w=T(b,!0);k(b),k(x);var f=r(x,2),a=r(f,2);R(a,{get myState(){return e.stats.country},name:"Origin"});var s=r(a,2);R(s,{get myState(){return e.stats.status},name:"Status"});var d=r(s,2),P=Z(()=>new ht(e.stats.firstFlight));R(d,{get myState(){return m(P)},name:"First Flight"});var M=r(d,2);ft(M,1,i,_t,(et,at,V)=>{var nt=Z(()=>V!=i().length-1);R(et,{get myState(){return m(at)},name:V==0?"Used in":void 0,noMarginTop:V!=0,get noMarginBottom(){return m(nt)}})});var W=r(M,2);R(W,{get myState(){return e.stats.propellant},name:"Propellant"});var j=r(W,2);R(j,{get myState(){return e.stats.cycle},name:"Cycle"});var H=r(j,2);z(H,{get unit(){return e.stats.specificImpulseSeaLevel},name:"Specific Impulse"});var Y=r(H,2);z(Y,{get unit(){return e.stats.specificImpulseVacuum},name:"Specific Impulse (Vac)"});var D=r(Y,2);z(D,{get unit(){return e.stats.height},name:"Height"});var X=r(D,2);z(X,{get unit(){return e.stats.diameter},name:"Diameter"});var G=r(X,2);z(G,{get unit(){return e.stats.massDry},name:"Mass"});var O=r(G,2),tt=r(O,2);p(()=>{C(w,e.stats.name),L(f,"src",e.stats.imageUrl)}),K("click",O,()=>{$("/")}),K("click",tt,()=>{$("/compare/"+yt.normalizeString(e.stats.name))}),y(o,n)},o=>{var n=Vt();y(o,n)});var h=r(v,2);kt(h,{}),y(l,c),I()}export{te as component};
