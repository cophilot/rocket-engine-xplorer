import{n as i,u as b,o,q as f,v as a,w as l}from"./runtime.DKHNuDpS.js";function d(u,e,n){if(u==null)return e(void 0),i;const s=b(()=>u.subscribe(e,n));return s.unsubscribe?()=>s.unsubscribe():s}let r=!1;function v(u,e,n){const s=n[e]??(n[e]={store:null,source:f(void 0),unsubscribe:i});if(s.store!==u)if(s.unsubscribe(),s.store=u??null,u==null)s.source.v=void 0,s.unsubscribe=i;else{var t=!0;s.unsubscribe=d(u,c=>{t?s.source.v=c:l(s.source,c)}),t=!1}return a(s.source)}function _(){const u={};return o(()=>{for(var e in u)u[e].unsubscribe()}),u}function g(u){var e=r;try{return r=!1,[u(),r]}finally{r=e}}export{v as a,g as c,_ as s};
