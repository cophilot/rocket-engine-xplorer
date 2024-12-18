import{a as p,t as g,e as F}from"../chunks/disclose-version.BjaIHGDJ.js";import"../chunks/legacy.C6bS56Y-.js";import{p as G,f as I,a as J,t as M,$ as K,s as e,i as c,c as V,r as C,N as H}from"../chunks/runtime.D3EUBQNe.js";import{s as Q}from"../chunks/render.DcgCetwY.js";import{i as D}from"../chunks/if.Chnr1AtD.js";import{g as W,e as Y,i as Z,S as tt,a as et}from"../chunks/allEngines.DU7O3MaS.js";import{h as at}from"../chunks/svelte-head.CuEPRuyF.js";import{s as rt}from"../chunks/attributes.B6-yH2X6.js";import{i as st}from"../chunks/lifecycle.BjlbUu8F.js";import{s as nt,a as ot}from"../chunks/store.DhRlqiu4.js";import{p as it}from"../chunks/stores.D32uncbc.js";import{g as N}from"../chunks/entry.B3staj9t.js";import{S as a,U as r}from"../chunks/UnitView.CaqxX52n.js";import{H as mt}from"../chunks/HomeButton.BSTye9xM.js";var pt=g('<div class="engine-name glass svelte-cqn4dk"><h1 class="svelte-cqn4dk"> </h1></div> <img alt="" class="engine-img mb mt svelte-cqn4dk"> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <button class="mt"><i class="bi bi-box-arrow-up"></i> Export</button> <button><i class="bi bi-layout-split"></i> Compare</button>',1),ct=g("<h1>Engine not found</h1>"),gt=g("<!> <!>",1);function qt(R,z){G(z,!1);const L=nt();let t=W(ot(it,"$page",L).params.name);const u=()=>(t==null?void 0:t.stats.rockets)||[];st();var l=gt();at(s=>{M(()=>K.title=`${((t==null?void 0:t.stats.name)||"404")??""} - Rocket Engine Xplorer`)});var v=I(l);D(v,()=>t,s=>{var n=pt(),o=I(n),d=V(o),P=V(d,!0);C(d),C(o);var f=e(o,2),_=e(f,2);a(_,{get myState(){return t.stats.country},name:"Origin"});var h=e(_,2);D(h,()=>t.stats.company,i=>{a(i,{get myState(){return t.stats.company},name:"Company"})});var S=e(h,2);a(S,{get myState(){return t.stats.status},name:"Status"});var y=e(S,2),T=H(()=>new et(t.stats.firstFlight));a(y,{get myState(){return c(T)},name:"First Flight"});var b=e(y,2);Y(b,1,u,Z,(i,j,m)=>{var A=H(()=>m!=u().length-1);a(i,{get myState(){return c(j)},name:m==0?"Used in":void 0,noMarginTop:m!=0,get noMarginBottom(){return c(A)}})});var $=e(b,2);a($,{get myState(){return t.stats.propellant},name:"Propellant"});var k=e($,2);a(k,{get myState(){return t.stats.cycle},name:"Cycle"});var x=e(k,2);r(x,{get unit(){return t.stats.specificImpulseSeaLevel},name:"Specific Impulse"});var E=e(x,2);r(E,{get unit(){return t.stats.specificImpulseVacuum},name:"Specific Impulse (Vac)"});var U=e(E,2);r(U,{get unit(){return t.stats.height},name:"Height"});var q=e(U,2);r(q,{get unit(){return t.stats.diameter},name:"Diameter"});var w=e(q,2);r(w,{get unit(){return t.stats.massDry},name:"Mass"});var B=e(w,2),X=e(B,2);M(()=>{Q(P,t.stats.name),rt(f,"src",t.stats.imageUrl)}),F("click",B,()=>{N("/")}),F("click",X,()=>{N("/compare/"+tt.normalizeString(t.stats.name))}),p(s,n)},s=>{var n=ct();p(s,n)});var O=e(v,2);mt(O,{}),p(R,l),J()}export{qt as component};