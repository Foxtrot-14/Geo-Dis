const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/visualVariableUtils-C5B-ujWE.js","assets/index-xbq7LRAl.js","assets/index-DIsDuqIA.css","assets/lengthUtils-hjdKSm_k.js","assets/sizeVariableUtils-Cmcuvw-4.js"])))=>i.map(i=>d[i]);
import{cV as ee,e6 as te,e5 as re,bR as B,d as l,y as c,aU as se,aX as ie,aT as D,aF as j,aV as ne,bc as oe,f as T,aW as Z,dH as ae,i as A,aR as le,fF as ue,aO as pe,dC as ye,dG as ce,dF as he,U as fe,a9 as de,ep as me,v as ge,J as H,e as M,V as be,O as z,a3 as J,_ as we,Y as xe,bD as N,q as ve,hO as $e,b1 as Q,hP as Se,ck as Fe}from"./index-xbq7LRAl.js";import{n as U}from"./floorFilterUtils-DZ5C6FQv.js";import{n as Re}from"./sublayerUtils-BIuOcoAj.js";import{n as Oe,p as Ee}from"./popupUtils-C2PJVGVx.js";function P(t,e){return e?"xoffset"in e&&e.xoffset?Math.max(t,Math.abs(e.xoffset)):"yoffset"in e&&e.yoffset?Math.max(t,Math.abs(e.yoffset||0)):t:t}function Ve(t){let e=0,s=0;for(let n=0;n<t.length;n++){const r=t[n].size;typeof r=="number"&&(e+=r,s++)}return e/s}function q(t,e){var s;return typeof t=="number"?t:(s=t==null?void 0:t.stops)!=null&&s.length?Ve(t.stops):e}function je(t,e){if(!e)return t;const s=e.filter(i=>i.type==="size").map(i=>{const{maxSize:u,minSize:y}=i;return(q(u,t)+q(y,t))/2});let n=0;const r=s.length;if(r===0)return t;for(let i=0;i<r;i++)n+=s[i];const o=Math.floor(n/r);return Math.max(o,t)}function k(t){var o;const e=t==null?void 0:t.renderer,s=t==null?void 0:t.pointerType,n=s==="touch"?9:6;if(!e)return n;const r="visualVariables"in e?je(n,e.visualVariables):n;if(e.type==="simple")return P(r,e.symbol);if(e.type==="unique-value"){let i=r;return(o=e.uniqueValueInfos)==null||o.forEach(u=>{i=P(i,u.symbol)}),i}if(e.type==="class-breaks"){let i=r;return e.classBreakInfos.forEach(u=>{i=P(i,u.symbol)}),i}return e.type==="dot-density"||e.type,r}function Ie(t,e){const{dpi:s,gdbVersion:n,geometry:r,geometryPrecision:o,height:i,historicMoment:u,layerOption:y,mapExtent:a,maxAllowableOffset:p,returnFieldName:h,returnGeometry:m,returnUnformattedValues:v,returnZ:$,spatialReference:R,timeExtent:d,tolerance:F,width:b}=t.toJSON(),{dynamicLayers:g,layerDefs:w,layerIds:V}=Me(t),I=(e==null?void 0:e.geometry)!=null?e.geometry:null,x={historicMoment:u,geometryPrecision:o,maxAllowableOffset:p,returnFieldName:h,returnGeometry:m,returnUnformattedValues:v,returnZ:$,tolerance:F},O=(I==null?void 0:I.toJSON())||r;x.imageDisplay=`${b},${i},${s}`,n&&(x.gdbVersion=n),O&&(delete O.spatialReference,x.geometry=JSON.stringify(O),x.geometryType=ee(O));const L=R??(O==null?void 0:O.spatialReference)??(a==null?void 0:a.spatialReference);if(L&&(x.sr=te(L)),x.time=d?[d.start,d.end].join(","):null,a){const{xmin:C,ymin:X,xmax:Y,ymax:K}=a;x.mapExtent=`${C},${X},${Y},${K}`}return w&&(x.layerDefs=w),g&&!w&&(x.dynamicLayers=g),x.layers=y==="popup"?"visible":y,V&&!g&&(x.layers+=`:${V.join(",")}`),x}function Me(t){var $,R;const{mapExtent:e,floors:s,width:n,sublayers:r,layerIds:o,layerOption:i,gdbVersion:u}=t,y=(R=($=r==null?void 0:r.find(d=>d.layer!=null))==null?void 0:$.layer)==null?void 0:R.serviceSublayers,a=i==="popup",p={},h=re({extent:e,width:n,spatialReference:e==null?void 0:e.spatialReference}),m=[],v=d=>{const F=h===0,b=d.minScale===0||h<=d.minScale,g=d.maxScale===0||h>=d.maxScale;if(d.visible&&(F||b&&g))if(d.sublayers)d.sublayers.forEach(v);else{if((o==null?void 0:o.includes(d.id))===!1||a&&(!d.popupTemplate||!d.popupEnabled))return;m.unshift(d)}};if(r==null||r.forEach(v),r&&!m.length)p.layerIds=[];else{const d=Re(m,y,u),F=m.map(b=>{const g=U(s,b);return b.toExportImageJSON(g)});if(d)p.dynamicLayers=JSON.stringify(F);else{if(r){let g=m.map(({id:w})=>w);o&&(g=g.filter(w=>o.includes(w))),p.layerIds=g}else o!=null&&o.length&&(p.layerIds=o);const b=Pe(s,m);if(b!=null&&b.length){const g={};for(const w of b)w.definitionExpression&&(g[w.id]=w.definitionExpression);Object.keys(g).length&&(p.layerDefs=JSON.stringify(g))}}}return p}function Pe(t,e){const s=!!(t!=null&&t.length),n=e.filter(r=>r.definitionExpression!=null||s&&r.floorInfo!=null);return n.length?n.map(r=>{const o=U(t,r),i=B(o,r.definitionExpression);return{id:r.id,definitionExpression:i??void 0}}):null}var G;let f=G=class extends Z{static from(t){return ae(G,t)}constructor(t){super(t),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.historicMoment=null,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}writeHistoricMoment(t,e){e.historicMoment=t&&t.getTime()}};l([c({type:Number,json:{write:!0}})],f.prototype,"dpi",void 0),l([c()],f.prototype,"floors",void 0),l([c({type:String,json:{write:!0}})],f.prototype,"gdbVersion",void 0),l([c({types:se,json:{read:ie,write:!0}})],f.prototype,"geometry",void 0),l([c({type:Number,json:{write:!0}})],f.prototype,"geometryPrecision",void 0),l([c({type:Number,json:{write:!0}})],f.prototype,"height",void 0),l([c({type:Date})],f.prototype,"historicMoment",void 0),l([D("historicMoment")],f.prototype,"writeHistoricMoment",null),l([c({type:[Number],json:{write:!0}})],f.prototype,"layerIds",void 0),l([c({type:["top","visible","all","popup"],json:{write:!0}})],f.prototype,"layerOption",void 0),l([c({type:j,json:{write:!0}})],f.prototype,"mapExtent",void 0),l([c({type:Number,json:{write:!0}})],f.prototype,"maxAllowableOffset",void 0),l([c({type:Boolean,json:{write:!0}})],f.prototype,"returnFieldName",void 0),l([c({type:Boolean,json:{write:!0}})],f.prototype,"returnGeometry",void 0),l([c({type:Boolean,json:{write:!0}})],f.prototype,"returnM",void 0),l([c({type:Boolean,json:{write:!0}})],f.prototype,"returnUnformattedValues",void 0),l([c({type:Boolean,json:{write:!0}})],f.prototype,"returnZ",void 0),l([c({type:ne,json:{write:!0}})],f.prototype,"spatialReference",void 0),l([c()],f.prototype,"sublayers",void 0),l([c({type:oe,json:{write:!0}})],f.prototype,"timeExtent",void 0),l([c({type:Number,json:{write:!0}})],f.prototype,"tolerance",void 0),l([c({type:Number,json:{write:!0}})],f.prototype,"width",void 0),f=G=l([T("esri.rest.support.IdentifyParameters")],f);const W=f;let S=class extends Z{constructor(t){super(t),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(t,e){return A.fromJSON({attributes:{...e.attributes},geometry:{...e.geometry}})}writeFeature(t,e){if(!t)return;const{attributes:s,geometry:n}=t;s&&(e.attributes={...s}),n!=null&&(e.geometry=n.toJSON(),e.geometryType=ue.toJSON(n.type))}};l([c({type:String,json:{write:!0}})],S.prototype,"displayFieldName",void 0),l([c({type:A})],S.prototype,"feature",void 0),l([le("feature",["attributes","geometry"])],S.prototype,"readFeature",null),l([D("feature")],S.prototype,"writeFeature",null),l([c({type:Number,json:{write:!0}})],S.prototype,"layerId",void 0),l([c({type:String,json:{write:!0}})],S.prototype,"layerName",void 0),S=l([T("esri.rest.support.IdentifyResult")],S);const _e=S;async function Ne(t,e,s){const n=(e=Te(e)).geometry?[e.geometry]:[],r=pe(t);return r.path+="/identify",ye(n).then(o=>{const i=Ie(e,{geometry:o==null?void 0:o[0]}),u=ce({...r.query,f:"json",...i}),y=he(u,s);return fe(r.path,y).then(Ge).then(a=>Ae(a,e.sublayers))})}function Ge(t){const e=t.data;return e.results=e.results||[],e.exceededTransferLimit=!!e.exceededTransferLimit,e.results=e.results.map(s=>_e.fromJSON(s)),e}function Te(t){return t=W.from(t)}function Ae(t,e){if(!(e!=null&&e.length))return t;const s=new Map;function n(r){s.set(r.id,r),r.sublayers&&r.sublayers.forEach(n)}e.forEach(n);for(const r of t.results)r.feature.sourceLayer=s.get(r.layerId);return t}let _=null;function Be(t,e){return e.type==="tile"||e.type==="map-image"}let E=class extends de{constructor(t){super(t),this._featuresResolutions=new WeakMap,this.highlightGraphics=null,this.highlightGraphicUpdated=null,this.updateHighlightedFeatures=me(async e=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e).catch(()=>{}))})}initialize(){const t=e=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e).catch(()=>{})),this.updateHighlightedFeatures(this._highlightGeometriesResolution)};this.addHandles([ge(()=>this.highlightGraphics,"change",e=>t(e.added),{onListenerAdd:e=>t(e)})])}async fetchPopupFeaturesAtLocation(t,e){var i,u;const{layerView:{layer:s,view:{scale:n}}}=this;if(!t)throw new H("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:s});const r=Ue(s.sublayers,n,e);if(!r.length)return[];const o=await He(s,r);if(!((((u=(i=s.capabilities)==null?void 0:i.operations)==null?void 0:u.supportsIdentify)??!0)&&s.version>=10.5)&&!o)throw new H("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:s});return o?this._fetchPopupFeaturesUsingQueries(t,r,e):this._fetchPopupFeaturesUsingIdentify(t,r,e)}clearHighlights(){var t;(t=this.highlightGraphics)==null||t.removeAll()}highlight(t){const e=this.highlightGraphics;if(!e)return M();let s=null;if(t instanceof A?s=[t]:be.isCollection(t)&&t.length>0?s=t.toArray():Array.isArray(t)&&t.length>0&&(s=t),s=s==null?void 0:s.filter(z),!(s!=null&&s.length))return M();for(const n of s){const r=n.sourceLayer;r!=null&&"geometryType"in r&&r.geometryType==="point"&&(n.visible=!1)}return e.addMany(s),M(()=>e.removeMany(s??[]))}async _updateHighlightedFeaturesSymbols(t){const{layerView:{view:e},highlightGraphics:s,highlightGraphicUpdated:n}=this;if(s&&n)for(const r of t){const o=r.sourceLayer&&"renderer"in r.sourceLayer&&r.sourceLayer.renderer;r.sourceLayer&&"geometryType"in r.sourceLayer&&r.sourceLayer.geometryType==="point"&&o&&"getSymbolAsync"in o&&o.getSymbolAsync(r).then(async i=>{var a;i||(i=new J);let u=null;const y="visualVariables"in o?(a=o.visualVariables)==null?void 0:a.find(p=>p.type==="size"):void 0;y&&(_||(_=(await we(async()=>{const{getSize:p}=await import("./visualVariableUtils-C5B-ujWE.js");return{getSize:p}},__vite__mapDeps([0,1,2,3,4]))).getSize),u=_(y,r,{view:e.type,scale:e.scale,shape:i.type==="simple-marker"?i.style:null})),u||(u="width"in i&&"height"in i&&i.width!=null&&i.height!=null?Math.max(i.width,i.height):"size"in i?i.size:16),s.includes(r)&&(r.symbol=new J({style:"square",size:u,xoffset:"xoffset"in i?i.xoffset:0,yoffset:"yoffset"in i?i.yoffset:0}),n(r,"symbol"),r.visible=!0)})}}async _updateHighlightedFeaturesGeometries(t){const{layerView:{layer:e,view:s},highlightGraphics:n,highlightGraphicUpdated:r}=this;if(this._highlightGeometriesResolution=t,!r||!(n!=null&&n.length)||!e.capabilities.operations.supportsQuery)return;const o=this._getTargetResolution(t),i=new Map;for(const a of n)if(!this._featuresResolutions.has(a)||this._featuresResolutions.get(a)>o){const p=a.sourceLayer;xe(i,p,()=>new Map).set(a.getObjectId(),a)}const u=Array.from(i,([a,p])=>{const h=a.createQuery();return h.objectIds=[...p.keys()],h.outFields=[a.objectIdField],h.returnGeometry=!0,h.maxAllowableOffset=o,h.outSpatialReference=s.spatialReference,a.queryFeatures(h)}),y=await Promise.all(u);if(!this.destroyed)for(const{features:a}of y)for(const p of a){const h=p.sourceLayer,m=i.get(h).get(p.getObjectId());m&&n.includes(m)&&(m.geometry=p.geometry,r(m,"geometry"),this._featuresResolutions.set(m,o))}}_getTargetResolution(t){const e=t*N(this.layerView.view.spatialReference),s=e/16;return s<=10?0:t/e*s}async _fetchPopupFeaturesUsingIdentify(t,e,s){const n=await this._createIdentifyParameters(t,e,s);if(n==null)return[];const{results:r}=await Ne(this.layerView.layer.parsedUrl,n,s);return r.map(o=>o.feature)}async _createIdentifyParameters(t,e,s){const{floors:n,layer:r,timeExtent:o,view:{spatialReference:i,scale:u}}=this.layerView;if(!e.length)return null;await Promise.all(e.map(({sublayer:v})=>v.load(s).catch(()=>{})));const y=Math.min(ve("mapservice-popup-identify-max-tolerance"),r.allSublayers.reduce((v,$)=>$.renderer?k({renderer:$.renderer,pointerType:s==null?void 0:s.pointerType}):v,2)),a=this.createFetchPopupFeaturesQueryGeometry(t,y),p=$e(u,i),h=Math.round(a.width/p),m=new j({xmin:a.center.x-p*h,ymin:a.center.y-p*h,xmax:a.center.x+p*h,ymax:a.center.y+p*h,spatialReference:a.spatialReference});return new W({floors:n,gdbVersion:"gdbVersion"in r?r.gdbVersion:void 0,geometry:t,height:h,layerOption:"popup",mapExtent:m,returnGeometry:!0,spatialReference:i,sublayers:r.sublayers,timeExtent:o,tolerance:y,width:h})}async _fetchPopupFeaturesUsingQueries(t,e,s){const{layerView:{floors:n,timeExtent:r}}=this,o=e.map(async({sublayer:i,popupTemplate:u})=>{var w;if(await i.load(s).catch(()=>{}),i.capabilities&&!i.capabilities.operations.supportsQuery)return[];const y=i.createQuery(),a=k({renderer:i.renderer,pointerType:s==null?void 0:s.pointerType}),p=this.createFetchPopupFeaturesQueryGeometry(t,a),h=new Set,[m]=await Promise.all([Oe(i,u),(w=i.renderer)==null?void 0:w.collectRequiredFields(h,i.fieldsIndex)]);Q(s),Se(h,i.fieldsIndex,m);const v=Array.from(h).sort();y.geometry=p,y.outFields=v,y.timeExtent=r;const $=U(n,i);y.where=B(y.where,$);const R=this._getTargetResolution(p.width/a),d=await Le(u);Q(s);const F=i.geometryType==="point"||d&&d.arcadeUtils.hasGeometryOperations(u);F||(y.maxAllowableOffset=R);let{features:b}=await i.queryFeatures(y,s);const g=F?0:R;b=await ze(i,b,s);for(const V of b)this._featuresResolutions.set(V,g);return b});return(await Promise.allSettled(o)).reduce((i,u)=>u.status==="fulfilled"?[...i,...u.value]:i,[]).filter(z)}};function Ue(t,e,s){const n=[];if(!t)return n;const r=o=>{const i=o.minScale===0||e<=o.minScale,u=o.maxScale===0||e>=o.maxScale;if(o.visible&&i&&u){if(o.sublayers)o.sublayers.forEach(r);else if(o.popupEnabled){const y=Ee(o,{...s,defaultPopupTemplateEnabled:!1});y!=null&&n.unshift({sublayer:o,popupTemplate:y})}}};return t.map(r),n}function Le(t){var e;return(e=t.expressionInfos)!=null&&e.length||Array.isArray(t.content)&&t.content.some(s=>s.type==="expression")?Fe():Promise.resolve()}async function He(t,e){var s,n;if((n=(s=t.capabilities)==null?void 0:s.operations)!=null&&n.supportsQuery)return!0;try{return await Promise.any(e.map(({sublayer:r})=>r.load().then(()=>r.capabilities.operations.supportsQuery)))}catch{return!1}}async function ze(t,e,s){const n=t.renderer;return n&&"defaultSymbol"in n&&!n.defaultSymbol&&(e=n.valueExpression?await Promise.all(e.map(r=>n.getSymbolAsync(r,s).then(o=>o?r:null))).then(r=>r.filter(o=>o!=null)):e.filter(r=>n.getSymbol(r)!=null)),e}l([c({constructOnly:!0})],E.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),l([c({constructOnly:!0})],E.prototype,"layerView",void 0),l([c({constructOnly:!0})],E.prototype,"highlightGraphics",void 0),l([c({constructOnly:!0})],E.prototype,"highlightGraphicUpdated",void 0),l([c({constructOnly:!0})],E.prototype,"updatingHandles",void 0),E=l([T("esri.views.layers.support.MapServiceLayerViewHelper")],E);function De(t,e,s,n=new j){let r=0;if(s.type==="2d")r=e*(s.resolution??0);else if(s.type==="3d"){const p=s.overlayPixelSizeInMapUnits(t),h=s.basemapSpatialReference;r=h==null||h.equals(s.spatialReference)?e*p:N(h)/N(s.spatialReference)}const o=t.x-r,i=t.y-r,u=t.x+r,y=t.y+r,{spatialReference:a}=s;return n.xmin=Math.min(o,u),n.ymin=Math.min(i,y),n.xmax=Math.max(o,u),n.ymax=Math.max(i,y),n.spatialReference=a,n}new j;export{Be as U,E as _,De as r};
