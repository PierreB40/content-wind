import{d as l,r as n,b as c,c as r,a0 as u,e as t,t as _,U as a,a1 as i,p as f,j as h,l as v}from"./entry.874c24a6.js";const g=e=>(f("data-v-cdae923d"),e=e(),h(),e),m=g(()=>t("div",{class:"gradient-backdrop"},null,-1)),C=l({__name:"CodeCollapse",props:{height:{type:String,default:"220px"},open:{type:Boolean,default:!1}},emits:["update:open"],setup(e,{emit:s}){const o=n(e.open),d=()=>{o.value=!o.value,s("update:open",o.value)};return(p,S)=>(c(),r("div",{class:"code-collapse",style:i({height:a(o)?"auto":e.height})},[u(p.$slots,"default",{},void 0,!0),m,t("button",{onClick:d},_(a(o)?"Collapse code":"Expand code"),1)],4))}});const k=v(C,[["__scopeId","data-v-cdae923d"]]);export{k as default};
