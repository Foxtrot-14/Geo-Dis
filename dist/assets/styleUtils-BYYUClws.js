import{q as o,J as f,U as m,b8 as b,ce as p,b2 as h,b7 as w,eP as g}from"./index-xbq7LRAl.js";const U=()=>!!o("enable-feature:force-wosr"),j=()=>o.add("enable-feature:direct-3d-object-feature-layer-display",!0,!0,!0),N=()=>o.add("enable-feature:direct-3d-object-feature-layer-display",!1,!0,!0),R=()=>o.add("enable-i3s-patching",!0,!0,!0),$=()=>o.add("enable-i3s-patching",!1,!0,!0),k=()=>!!o("enable-feature:SceneLayer-editing"),I=(e="i3s-patching")=>{switch($(),N(),o.add("enable-feature:SceneLayer-editing",!0,!0,!0),e){case"feature-layer-view":j();break;case"i3s-patching":R()}};I("i3s-patching");let i={};async function S(e,n){try{return{data:(await A(e,n)).data,baseUrl:p(e),styleUrl:e}}catch(t){return h(t),null}}function q(e,n,t){var c;const r=n.portal!=null?n.portal:w.getDefault();let s;const l=`${r.url} - ${(c=r.user)==null?void 0:c.username} - ${e}`;return i[l]||(i[l]=C(e,r,t).then(a=>(s=a,a.fetchData())).then(a=>({data:a,baseUrl:s.itemUrl??"",styleName:e}))),i[l]}function C(e,n,t){return n.load(t).then(()=>{const r=new g({disableExtraQuery:!0,query:`owner:${u} AND type:${y} AND typekeywords:"${e}"`});return n.queryItems(r,t)}).then(({results:r})=>{var c;let s=null;const l=e.toLowerCase();if(r&&Array.isArray(r)){for(const a of r)if(((c=a.typeKeywords)==null?void 0:c.some(d=>d.toLowerCase()===l))&&a.type===y&&a.owner===u){s=a;break}}if(!s)throw new f("symbolstyleutils:style-not-found",`The style '${e}' could not be found`,{styleName:e});return s.load(t)})}function v(e,n,t){return(e==null?void 0:e.styleUrl)!=null?S(e.styleUrl,t):(e==null?void 0:e.styleName)!=null?q(e.styleName,n,t):Promise.reject(new f("symbolstyleutils:style-url-and-name-missing","Either styleUrl or styleName is required to resolve a style"))}function x(e){return e===null||e.type==="CIMSymbolReference"?e:{type:"CIMSymbolReference",symbol:e}}function E(e,n,t=["gltf"]){if(n==="cimRef")return encodeURI(e.cimRef);if(e.formatInfos&&!U())for(const r of t){const s=e.formatInfos.find(l=>l.type===r);if(s)return s.href}return encodeURI(e.webRef)}function A(e,n){const t={responseType:"json",query:{f:"json"},...n};return m(b(e),t)}const u="esri_en",y="Style",K="https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f=json";export{A as b,E as d,k as n,x as p,K as w,v as y};
