var u=Object.defineProperty;var g=(t,e,i)=>e in t?u(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var s=(t,e,i)=>g(t,typeof e!="symbol"?e+"":e,i);class p{static normalizeString(e){return e.toLowerCase().replace(/ /g,"").replace(/-/g,"").replace(/_/g,"")}}class o{constructor(e){s(this,"stats");this.stats=e}checkName(e){return p.normalizeString(e)===p.normalizeString(this.stats.name)}}class r{}s(r,"GAS_GENERATOR",{name:"Gas Generator",infoUrl:"https://en.wikipedia.org/wiki/Gas-generator_cycle"}),s(r,"STAGED_COMBUSTION",{name:"Staged Combustion",infoUrl:"https://en.wikipedia.org/wiki/Staged_combustion_cycle"});class n{}s(n,"META_LOX",{comp1:"CH4",comp2:"LOX",nickname:"Meta-LOX"}),s(n,"HYDRO_LOX",{comp1:"H2",comp2:"LOX",nickname:"Hydro-LOX"}),s(n,"KERO_LOX",{comp1:"RP1",comp2:"LOX",nickname:"Kero-LOX"});class m{constructor(e,i){s(this,"isComparable",!0);s(this,"value");s(this,"units");this.value=e,this.units=i}toString(){return`${this.value} ${this.units}`}isBetterThan(e){return this.value>e.value}getValue(){return this.value}getUnits(){return this.units}}class l extends m{constructor(e){super(e,"kg")}isBetterThan(e){return this.value<e.value}}class a extends m{constructor(e){super(e,"s")}isBetterThan(e){return this.value>e.value}}class c extends m{constructor(e){super(e,"m")}isBetterThan(e){return this.value>e.value}}const h={name:"F-1",url:"https://en.wikipedia.org/wiki/Rocketdyne_F-1",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/1/16/S-IC_engines_and_Von_Braun.jpg",schemanticUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpGWtZ0VQRF-kGHelKxkPTCslk51UObDWOqQ&s",propellant:n.KERO_LOX,cycle:r.GAS_GENERATOR,specificImpulseSeaLevel:new a(263),specificImpulseVacuum:new a(304),height:new c(5.6),diameter:new c(3.7),massDry:new l(8400)},w=new o(h),S={name:"RS-25",url:"https://en.wikipedia.org/wiki/RS-25",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Shuttle_Main_Engine_Test_Firing.jpg/250px-Shuttle_Main_Engine_Test_Firing.jpg",schemanticUrl:"https://pbs.twimg.com/media/CL5DN9sWoAABWyM.jpg",propellant:n.HYDRO_LOX,cycle:r.STAGED_COMBUSTION,specificImpulseSeaLevel:new a(366),specificImpulseVacuum:new a(452.3),height:new c(4.3),diameter:new c(2.4),massDry:new l(3177)},d=new o(S),_={name:"RS-68",url:"https://en.wikipedia.org/wiki/RS-68",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/4/4d/RS-68_rocket_engine_test.jpg",schemanticUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_p79S1pj-BhX47Munv2R44orq9EbhcPPAUg&s",propellant:n.HYDRO_LOX,cycle:r.GAS_GENERATOR,specificImpulseSeaLevel:new a(410),specificImpulseVacuum:new a(411.9),height:new c(5.2),diameter:new c(2.43),massDry:new l(6600)},k=new o(_),O=()=>{const t=[d,k,w];return t.sort((e,i)=>e.stats.name.localeCompare(i.stats.name)),t},L=t=>O().find(e=>e.checkName(t));export{p as S,O as a,L as g};
