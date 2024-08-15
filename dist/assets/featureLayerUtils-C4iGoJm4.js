import{du as j,dv as G,aZ as d,O as z,dw as B,J as y}from"./index-xbq7LRAl.js";import{i as L}from"./originUtils-D69mHv66.js";import{$ as V,w as x,I as N,v as O,j as Z,y as k,P as q,l as g,d as C,c as b}from"./utils-B7sYl2-y.js";import{a as H,b as Q,i as W}from"./fetchService-CWGzI1iW.js";import{l as J,a as T,u as $,f as u,i as I}from"./portalItemUtils-DWL7cg2a.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./jsonContext-B92CjVo3.js";import"./saveAPIKeyUtils-Y4Gn8NGw.js";import"./saveUtils-jgMwhX_5.js";const h="Feature Service",w="feature-layer-utils",X=`${w}-save`,aa=`${w}-save-as`,p=`${w}-saveall`,f=`${w}-saveall-as`;function v(a){return{isValid:B(a)&&(a.type!=="feature"||!a.dynamicDataSource),errorMessage:"Feature layer should be a layer or table in a map or feature service"}}function M(a){const e=[],t=[];for(const{layer:r,layerJSON:o}of a)r.isTable?t.push(o):e.push(o);return{layers:e,tables:t}}function R(a){return M([a])}async function D(a,e){return/\/\d+\/?$/.test(a.url)?R(e[0]):F(e,a)}async function F(a,e){if(a.reverse(),!e)return M(a);const t=await ea(e,a);for(const r of a)U(r.layer,r.layerJSON,t);return na(t,a),t}async function ea(a,e){let t=await a.fetchData("json");if(ta(t))return t;t||(t={}),ra(t);const{layer:{url:r,customParameters:o,apiKey:s}}=e[0];return await sa(t,{url:r??"",customParameters:o,apiKey:s},e.map(n=>n.layer.layerId)),t}function ta(a){return!!(a&&Array.isArray(a.layers)&&Array.isArray(a.tables))}function ra(a){a.layers||(a.layers=[]),a.tables||(a.tables=[])}function na(a,e){const t=[],r=[];for(const{layer:o}of e){const{isTable:s,layerId:n}=o;s?r.push(n):t.push(n)}A(a.layers,t),A(a.tables,r)}function A(a,e){if(a.length<2)return;const t=[];for(const{id:r}of a)t.push(r);j(t.sort(P),e.slice().sort(P))&&a.sort((r,o)=>{const s=e.indexOf(r.id),n=e.indexOf(o.id);return s<n?-1:s>n?1:0})}function P(a,e){return a<e?-1:a>e?1:0}async function sa(a,e,t){const{url:r,customParameters:o,apiKey:s}=e,{serviceJSON:n,layersJSON:l}=await H(r,{customParameters:o,apiKey:s}),i=S(a.layers,n.layers,t),c=S(a.tables,n.tables,t);a.layers=i.itemResources,a.tables=c.itemResources;const m=[...i.added,...c.added],_=l?[...l.layers,...l.tables]:[];await oa(a,m,r,_)}function S(a,e,t){const r=G(a,e,(s,n)=>s.id===n.id);a=a.filter(s=>!r.removed.some(n=>n.id===s.id));const o=r.added;return o.forEach(({id:s})=>{a.push({id:s})}),{itemResources:a,added:o.filter(({id:s})=>!t.includes(s))}}async function oa(a,e,t,r){const o=await la(e),s=e.map(({id:n,type:l})=>new(o.get(l))({url:t,layerId:n,sourceJSON:r.find(({id:i})=>i===n)}));await Promise.allSettled(s.map(n=>n.load())),s.forEach(n=>{const{layerId:l,loaded:i,defaultPopupTemplate:c}=n;if(!i||c==null)return;const m={id:l,popupInfo:c.toJSON()};n.operationalLayerType!=="ArcGISFeatureLayer"&&(m.layerType=n.operationalLayerType),U(n,m,a)})}async function la(a){const e=[];a.forEach(({type:o})=>{const s=W(o),n=Q[s];e.push(n())});const t=await Promise.all(e),r=new Map;return a.forEach(({type:o},s)=>{r.set(o,t[s])}),r}function U(a,e,t){a.isTable?E(t.tables,e):E(t.layers,e)}function E(a,e){const t=a.findIndex(({id:r})=>r===e.id);t===-1?a.push(e):a[t]=e}function K(a,e){if(!a.length)throw new y(`${e}:missing-parameters`,"'layers' array should contain at least one feature layer")}function ia(a,e){const t=a.map(r=>r.portalItem.id);if(new Set(t).size>1)throw new y(`${e}:invalid-parameters`,"All layers in the 'layers' array should be loaded from the same portal item")}function Y(a,e){const t=a.map(r=>r.layerId);if(new Set(t).size!==t.length)throw new y(`${e}:invalid-parameters`,"'layers' array should contain only one instance each of layer or table in a feature service")}async function ca(a){K(a,p),await Promise.all(a.map(e=>e.load()));for(const e of a)g(e,p,v),C({layer:e,itemType:h,errorNamePrefix:p});ia(a,p),Y(a,p)}async function ua(a,e){const{url:t,layerId:r,title:o,fullExtent:s,isTable:n}=a,l=d(t);e.url=((l==null?void 0:l.serverType)==="FeatureServer"?t:`${t}/${r}`)??null,e.title||(e.title=o),e.extent=null,n||s==null||(e.extent=await J(s)),T(e,u.METADATA),T(e,u.MULTI_LAYER),I(e,u.SINGLE_LAYER),n&&I(e,u.TABLE)}function ya(a,e){for(const s of a){const n=s.parsedUrl.path,l=d(n);if(!(l==null?void 0:l.url.path))throw new y(`${e}:invalid-parameters`,b(s,`has unsupported url pattern: ${n}`),{layer:s});const c=l==null?void 0:l.serverType;if(c!=="FeatureServer"&&c!=="MapServer")throw new y(`${e}:invalid-parameters`,b(s,`has unsupported server type: ${c}`),{layer:s});if(c==="MapServer"&&a.length>1)throw new y(`${e}:invalid-parameters`,"Only one layer or table in a map service can be saved")}const t=d(a[0].parsedUrl.path),r=t==null?void 0:t.url.path;if(!a.every(s=>{const n=d(s.parsedUrl.path);return(n==null?void 0:n.url.path)===r}))throw new y(`${e}:invalid-parameters`,"'layers' array should only contain layers or tables that belong to the same feature service")}async function pa(a){K(a,f),await Promise.all(a.map(e=>e.load()));for(const e of a)g(e,f,v);ya(a,f),Y(a,f)}async function fa(a,e){let t=0,r=0;for(const{isTable:n}of e)n?r++:t++;const o=e[0].parsedUrl.path,s=d(o);if(a.url=(s==null?void 0:s.serverType)==="FeatureServer"?s.url.path:o,a.title||(a.title=s.title),a.extent=null,t>0){const n=e.map(l=>l.fullExtent).filter(z).reduce((l,i)=>l.clone().union(i));n&&(a.extent=await J(n))}T(a,u.METADATA),$(a,u.MULTI_LAYER,e.length>1),$(a,u.SINGLE_LAYER,e.length===1),$(a,u.TABLE,r>0&&t===0),O(a)}async function Aa(a,e){return V({layer:a,itemType:h,validateLayer:v,createItemData:(t,r)=>D(r,[t]),errorNamePrefix:X},e)}async function Pa(a,e){await ca(a);const t=a[0].portalItem,r=x(t),o=await Promise.all(a.map(n=>N(n,r,e))),s=await D(t,a.map((n,l)=>({layer:n,layerJSON:o[l]})));return O(t),await t.update({data:s}),await Promise.all(a.slice(1).map(n=>n.portalItem.reload())),L(r),t.clone()}async function Sa(a,e,t){return Z({layer:a,itemType:h,validateLayer:v,createItemData:(r,o)=>Promise.resolve(R(r)),errorNamePrefix:aa,newItem:e,setItemProperties:ua},t)}async function Ea(a,e,t){await pa(a);const r=k({itemType:h,errorNamePrefix:f,newItem:e}),o=x(r),s=await Promise.all(a.map(l=>N(l,o,t))),n=await F(a.map((l,i)=>({layer:l,layerJSON:s[i]})));await fa(r,a),await q(r,n,t);for(const l of a)l.portalItem=r.clone();return L(o),r}export{Aa as save,Pa as saveAll,Ea as saveAllAs,Sa as saveAs};
