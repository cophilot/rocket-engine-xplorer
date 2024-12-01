var p=Object.defineProperty;var g=(t,e,i)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var s=(t,e,i)=>g(t,typeof e!="symbol"?e+"":e,i);class u{static normalizeString(e){return e.toLowerCase().replace(/ /g,"").replace(/-/g,"").replace(/_/g,"")}}class o{constructor(e){s(this,"stats");this.stats=e}checkName(e){return u.normalizeString(e)===u.normalizeString(this.stats.name)}}class n{}s(n,"GAS_GENERATOR",{name:"Gas Generator",infoUrl:"https://en.wikipedia.org/wiki/Gas-generator_cycle"}),s(n,"STAGED_COMBUSTION",{name:"Staged Combustion",infoUrl:"https://en.wikipedia.org/wiki/Staged_combustion_cycle"});class a{}s(a,"META_LOX",{comp1:"CH4",comp2:"LOX",nickname:"Meta-LOX"}),s(a,"HYDRO_LOX",{comp1:"H2",comp2:"LOX",nickname:"Hydro-LOX"});class l{constructor(e,i){s(this,"isComparable",!0);s(this,"value");s(this,"units");this.value=e,this.units=i}toString(){return`${this.value} ${this.units}`}isBetterThan(e){return this.value>e.value}getValue(){return this.value}getUnits(){return this.units}}class r extends l{constructor(e){super(e,"s")}isBetterThan(e){return this.value>e.value}}class c extends l{constructor(e){super(e,"m")}isBetterThan(e){return this.value>e.value}}class m extends l{constructor(e){super(e,"kg")}isBetterThan(e){return this.value<e.value}}const h={name:"RS-25",url:"https://en.wikipedia.org/wiki/RS-25",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Shuttle_Main_Engine_Test_Firing.jpg/250px-Shuttle_Main_Engine_Test_Firing.jpg",schemanticUrl:"https://pbs.twimg.com/media/CL5DN9sWoAABWyM.jpg",propellant:a.HYDRO_LOX,cycle:n.STAGED_COMBUSTION,specificImpulseSeaLevel:new r(366),specificImpulseVacuum:new r(452.3),height:new c(4.3),diameter:new c(2.4),massDry:new m(3177)},S=new o(h),w={name:"RS-68",url:"",imageUrl:"",schemanticUrl:"",propellant:a.HYDRO_LOX,cycle:n.STAGED_COMBUSTION,specificImpulseSeaLevel:new r(0),specificImpulseVacuum:new r(0),height:new c(0),diameter:new c(0),massDry:new m(3177)},_=new o(w),O=()=>{const t=[S,_];return t.sort((e,i)=>e.stats.name.localeCompare(i.stats.name)),t},v=t=>O().find(e=>e.checkName(t));export{u as S,O as a,v as g};
