const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/streamLayerUtils-BNQCSmIk.js","assets/utils-B7sYl2-y.js","assets/index-xbq7LRAl.js","assets/index-DIsDuqIA.css","assets/originUtils-D69mHv66.js","assets/multiOriginJSONSupportUtils-C0wm8_Yw.js","assets/jsonContext-B92CjVo3.js","assets/portalItemUtils-DWL7cg2a.js","assets/saveAPIKeyUtils-Y4Gn8NGw.js","assets/saveUtils-jgMwhX_5.js","assets/createConnection-DASmvm8B.js","assets/query-oKXKVoyl.js","assets/pbfQueryUtils-Bl19FUAz.js","assets/pbf-4Ghyjea7.js","assets/OptimizedFeature-DUj7o6ET.js","assets/OptimizedFeatureSet-Blu9Ckm7.js","assets/queryZScale-tTxKuowc.js"])))=>i.map(i=>d[i]);
import{d as t,y as r,f as I,aW as F,be as P,aV as $,ep as E,J as d,b2 as A,fx as f,n as O,_ as v,di as y,eq as k,aP as D,U,aS as N,bd as C,aF as V,e9 as g,k as L,aR as w,aY as J,bY as G}from"./index-xbq7LRAl.js";import"./UniqueValueRenderer-B1dYbKHt.js";import{o as M,m as z,u as W}from"./jsonUtils-Dfb6dbOO.js";import{S as q}from"./MultiOriginJSONSupport-DMWx2RMo.js";import{l as Y}from"./ArcGISService-C0KYbM-y.js";import{l as Q}from"./BlendLayer-DTkPSfTD.js";import{e as Z}from"./CustomParametersMixin-ZokGHDkE.js";import{c as B}from"./FeatureEffectLayer-CDjqJLwZ.js";import{c as H}from"./FeatureReductionLayer-D3O7EbBt.js";import{b as K}from"./OperationalLayer-D2QmD8nc.js";import{j as X}from"./PortalLayer-DnK0C8vG.js";import{f as ee}from"./RefreshableLayer-Dqh0dXqi.js";import{t as te}from"./ScaleRangeLayer-DDWRZCy0.js";import{l as ie}from"./TemporalLayer-DFNUULT-.js";import{l as re,y as oe,j as se,u as ne,s as ae,t as pe,p as le}from"./commonProperties-DaxkwXA6.js";import{U as de}from"./featureLayerUtils-Y_4TaWup.js";import{s as me}from"./fieldProperties-4kCC_anc.js";import{C as ce,l as ue}from"./labelingInfo-CrM7eJNZ.js";import{t as ye}from"./styleUtils-BBNoXZiE.js";import{p as he}from"./popupUtils-B7aJOFoe.js";import{h as fe}from"./ElevationInfo-Cwa0hSJ4.js";import{A as c}from"./interfaces-CL2NbQte.js";import"./ColorStop-DTtvB9mb.js";import"./diffUtils-CMku0PTa.js";import"./colorRamps-yeFZLCSh.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-C5B-ujWE.js";import"./lengthUtils-hjdKSm_k.js";import"./jsonUtils-DBhfkAEZ.js";import"./defaults-zmeSXTBk.js";import"./defaultsJSON-GKolV7NZ.js";import"./styleUtils-BYYUClws.js";import"./LRUCache-QDI8wliO.js";import"./FieldsIndex-CGICfJ2k.js";import"./UnknownTimeZone-yUshbYci.js";import"./OverrideHelper-CGylMZJ6.js";import"./colorUtils-CAOQ4nvo.js";import"./vec42-Dmy7JOK8.js";import"./vec4f64-CCf6w8sj.js";import"./utils-BNpX3Phj.js";import"./quantizationUtils-Dj-w3gih.js";import"./heatmapUtils-DZTqcKJl.js";import"./jsonUtils-BVYcwSgO.js";import"./parser-ainqPSIf.js";import"./FeatureEffect-90lcX9b_.js";import"./FeatureReductionSelection-Br9xYUcw.js";import"./MD5-C9MwAd2G.js";import"./portalItemUtils-DWL7cg2a.js";import"./TimeInfo-BjKyYzsJ.js";import"./RelationshipQuery-BUAHFHn6.js";import"./labelUtils-B38b05cC.js";var h;let l=h=class extends F{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new h({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};t([r({type:Number,json:{write:!0}})],l.prototype,"age",void 0),t([r({type:Number,json:{write:!0}})],l.prototype,"ageReceived",void 0),t([r({type:Number,json:{write:!0}})],l.prototype,"displayCount",void 0),t([r({type:Number,json:{write:!0}})],l.prototype,"maxObservations",void 0),l=h=t([I("esri.layers.support.PurgeOptions")],l);const x=l,b=me();function S(e,o){return new d("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${o}`,{layer:e})}let i=class extends H(B(Q(ie(te(ee(Y(K(X(q(Z(P(G)))))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.outFields=["*"],this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new x,this.refreshInterval=0,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=$.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.useViewTime=!0,this.webSocketUrl=null,this._debouncedSaveOperations=E(async(o,s,a)=>{const{save:n,saveAs:p}=await v(()=>import("./streamLayerUtils-BNQCSmIk.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]));switch(o){case c.SAVE:return n(this,s);case c.SAVE_AS:return p(this,a,s)}})}normalizeCtorArgs(e,o){return typeof e=="string"?{url:e,...o}:e}load(e){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new d("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const o=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(A).then(()=>this._fetchService(o))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set featureReduction(e){const o=this._normalizeFeatureReduction(e);this._set("featureReduction",o)}set renderer(e){f(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,o,s){var n;o=o.layerDefinition||o;const a=(n=o.drawingInfo)==null?void 0:n.renderer;if(a){const p=M(a,o,s)||void 0;return p||O.getLogger(this).error("Failed to create renderer",{rendererDefinition:o.drawingInfo.renderer,layer:this,context:s}),p}return de(o,s)}async connect(e){const[{createConnection:o}]=await Promise.all([v(()=>import("./createConnection-DASmvm8B.js"),__vite__mapDeps([10,2,3,11,12,13,14,15,16])),this.load()]),s=this.geometryType?y.toJSON(this.geometryType):null,{customParameters:a=null,definitionExpression:n=null,geometryDefinition:p=null,maxReconnectionAttempts:R=0,maxReconnectionInterval:j=20,spatialReference:T=this.spatialReference}=e||this.createConnectionParameters(),m=o(this.parsedUrl,this.spatialReference,T,s,n,p,R,j,a??void 0),_=k([this.on("send-message-to-socket",u=>m.sendMessageToSocket(u)),this.on("send-message-to-client",u=>m.sendMessageToClient(u))]);return m.once("destroy",_.remove),m}createConnectionParameters(){return{spatialReference:this.spatialReference,customParameters:this.customParameters,definitionExpression:this.definitionExpression,geometryDefinition:this.geometryDefinition,maxReconnectionAttempts:this.maxReconnectionAttempts,maxReconnectionInterval:this.maxReconnectionInterval}}createPopupTemplate(e){return he(this,e)}createQuery(){const e=new D;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,o){if(!this.fields)return null;let s=null;return this.fields.some(a=>(a.name===e&&(s=a.domain),!!s)),s}getField(e){return this.fieldsIndex.get(e)}serviceSupportsSpatialReference(e){return!0}sendMessageToSocket(e){this.emit("send-message-to-socket",e)}sendMessageToClient(e){this.emit("send-message-to-client",e)}async save(e){return this._debouncedSaveOperations(c.SAVE,e)}async saveAs(e,o){return this._debouncedSaveOperations(c.SAVE_AS,o,e)}write(e,o){const s=o==null?void 0:o.messages;return this.webSocketUrl?(s==null||s.push(S(this,"using a custom websocket connection cannot be written to web scenes and web maps")),null):this.parsedUrl?super.write(e,o):(s==null||s.push(S(this,"using a client-side only connection without a url cannot be written to web scenes and web maps")),null)}async _fetchService(e){var o,s,a;if(!this.webSocketUrl&&this.parsedUrl){if(!this.sourceJSON){const{data:n}=await U(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=n}}else{if(!((o=this.timeInfo)!=null&&o.trackIdField))throw new d("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField){const n=(s=this.fields.find(p=>p.type==="oid"))==null?void 0:s.name;if(!n)throw new d("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");this.objectIdField=n}if(!this.fields)throw new d("stream-layer:missing-metadata","The stream layer fields must be specified.");if(this.fields.some(n=>n.name===this.objectIdField)||this.fields.push(new N({name:this.objectIdField,alias:this.objectIdField,type:"oid"})),!this.geometryType)throw new d("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.webSocketUrl&&(this.url=this.webSocketUrl)}return this.read(this.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:(a=this.portalItem)==null?void 0:a.portal,url:this.parsedUrl}),f(this.renderer,this.fieldsIndex),C(this.timeInfo,this.fieldsIndex),this.objectIdField||(this.objectIdField="__esri_stream_id__"),ye(this,{origin:"service"})}};t([r({type:String})],i.prototype,"copyright",void 0),t([r({readOnly:!0})],i.prototype,"defaultPopupTemplate",null),t([r({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),t([r({type:String})],i.prototype,"displayField",void 0),t([r({type:fe})],i.prototype,"elevationInfo",void 0),t([r({json:{origins:{"web-map":{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],i.prototype,"featureReduction",null),t([r(b.fields)],i.prototype,"fields",void 0),t([r(b.fieldsIndex)],i.prototype,"fieldsIndex",void 0),t([r({type:V,json:{name:"layerDefinition.definitionGeometry",write:!0}})],i.prototype,"geometryDefinition",void 0),t([r({type:y.apiValues,json:{read:{reader:y.read}}})],i.prototype,"geometryType",void 0),t([r(re)],i.prototype,"labelsVisible",void 0),t([r({type:[ce],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:ue},write:!0}})],i.prototype,"labelingInfo",void 0),t([r(oe)],i.prototype,"legendEnabled",void 0),t([r({type:["show","hide"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],i.prototype,"listMode",void 0),t([r({type:g})],i.prototype,"maxReconnectionAttempts",void 0),t([r({type:g})],i.prototype,"maxReconnectionInterval",void 0),t([r(se)],i.prototype,"maxScale",void 0),t([r(ne)],i.prototype,"minScale",void 0),t([r({type:String})],i.prototype,"objectIdField",void 0),t([r({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],i.prototype,"operationalLayerType",void 0),t([r({readOnly:!0})],i.prototype,"outFields",void 0),t([r(ae)],i.prototype,"popupEnabled",void 0),t([r({type:L,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),t([r({type:x})],i.prototype,"purgeOptions",void 0),t([r({json:{read:!1,write:!1}})],i.prototype,"refreshInterval",void 0),t([r({types:z,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:W,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],i.prototype,"renderer",null),t([w("service","renderer",["drawingInfo.renderer","defaultSymbol"]),w("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],i.prototype,"readRenderer",null),t([r((()=>{const e=J(pe);return e.json.origins["portal-item"]={read:!1,write:!1},e})())],i.prototype,"screenSizePerspectiveEnabled",void 0),t([r()],i.prototype,"sourceJSON",void 0),t([r({type:$,json:{origins:{service:{read:{source:"spatialReference"}}}}})],i.prototype,"spatialReference",void 0),t([r({json:{read:!1}})],i.prototype,"type",void 0),t([r(le)],i.prototype,"url",void 0),t([r({type:Number})],i.prototype,"updateInterval",void 0),t([r({json:{read:!1,write:!1}})],i.prototype,"useViewTime",void 0),t([r({type:String})],i.prototype,"webSocketUrl",void 0),i=t([I("esri.layers.StreamLayer")],i);const yt=i;export{yt as default};
