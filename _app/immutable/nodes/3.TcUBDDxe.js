import{a as g,t as f}from"../chunks/disclose-version.Df7b4vZe.js";import{i as O}from"../chunks/legacy.BXVPJDk_.js";import{p as j,s as t,t as p,a as A,c,r as l,A as T,W as z,f as I}from"../chunks/runtime.CBXZyFyY.js";import{s as x,e as V}from"../chunks/render.DoRXIqSF.js";import{i as D}from"../chunks/if.A93TAv5P.js";import{s as H}from"../chunks/attributes.DOa8ETtQ.js";import{s as C,a as L}from"../chunks/store.AduSAM-D.js";import{p as N}from"../chunks/stores.Br_8x6eY.js";import{g as B}from"../chunks/entry.DzsbKIpQ.js";import{g as P}from"../chunks/allEngines.Pg9-TIER.js";import{p as E}from"../chunks/props.B2sK9Pjf.js";const W=!1,ne=Object.freeze(Object.defineProperty({__proto__:null,prerender:W},Symbol.toStringTag,{value:"Module"}));var q=f('<p class="name svelte-1nvx3xw"> </p>'),F=f('<div class="unit-view svelte-1nvx3xw"><!> <p class="value svelte-1nvx3xw"> </p> <p class="unit svelte-1nvx3xw"> </p></div>');function v(h,a){j(a,!0);let d=E(a,"compareUnit",3,void 0),w=E(a,"name",3,void 0);const e=()=>d()?a.unit.isBetterThan(d())?"green":"red":"";var r=F(),m=c(r);D(m,w,_=>{var o=q(),b=c(o);l(o),p(()=>x(b,`${w()??""}:`)),g(_,o)});var s=t(m,2);const u=z(()=>`background: ${e()}`);var n=c(s,!0);p(()=>x(n,a.unit.getValueAsString())),l(s);var i=t(s,2),y=c(i,!0);p(()=>x(y,a.unit.getUnits())),l(i),l(r),p(()=>H(s,"style",T(u))),g(h,r),A()}var G=f('<h1> </h1> <img alt="" class="engine-img mb svelte-1twyv8"> <!> <!> <!> <!> <!> <button class="mt"><i class="bi bi-box-arrow-up"></i> Export</button>',1),J=f("<h1>Engine not found</h1>"),K=f('<!> <button><i class="bi bi-house"></i> Home</button>',1);function ie(h,a){j(a,!1);const d=C();let e=P(L(N,"$page",d).params.name);O();var r=K(),m=I(r);D(m,()=>e,u=>{var n=G(),i=I(n),y=c(i,!0);l(i);var _=t(i,2),o=t(_,2);v(o,{get unit(){return e.stats.specificImpulseSeaLevel},name:"Specific Impulse"});var b=t(o,2);v(b,{get unit(){return e.stats.specificImpulseVacuum},name:"Specific Impulse (Vac)"});var S=t(b,2);v(S,{get unit(){return e.stats.height},name:"Height"});var k=t(S,2);v(k,{get unit(){return e.stats.diameter},name:"Diameter"});var U=t(k,2);v(U,{get unit(){return e.stats.massDry},name:"Mass"});var M=t(U,2);p(()=>{x(y,e.stats.name),H(_,"src",e.stats.imageUrl)}),V("click",M,()=>{B("/")}),g(u,n)},u=>{var n=J();g(u,n)});var s=t(m,2);V("click",s,()=>{B("/")}),g(h,r),A()}export{ie as component,ne as universal};
