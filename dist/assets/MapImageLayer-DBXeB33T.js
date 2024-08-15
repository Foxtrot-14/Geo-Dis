import{b2 as T,dZ as v,bA as g,e5 as $,e6 as O,U as f,aF as P,bc as E,e7 as F,J as x,b as L,d as o,y as s,e8 as S,aR as M,aT as R,f as J,e9 as N,bY as _}from"./index-xbq7LRAl.js";import{S as j}from"./MultiOriginJSONSupport-DMWx2RMo.js";import{i as U}from"./APIKeyMixin-D-Lmgt3B.js";import{m as q,f as A,t as V}from"./SublayersOwner-C0GwT43a.js";import{l as k}from"./ArcGISService-C0KYbM-y.js";import{l as Z}from"./BlendLayer-DTkPSfTD.js";import{e as z}from"./CustomParametersMixin-ZokGHDkE.js";import{b as B}from"./OperationalLayer-D2QmD8nc.js";import{j as C}from"./PortalLayer-DnK0C8vG.js";import{f as D}from"./RefreshableLayer-Dqh0dXqi.js";import{t as G}from"./ScaleRangeLayer-DDWRZCy0.js";import{l as H}from"./TemporalLayer-DFNUULT-.js";import{p as K}from"./commonProperties-DaxkwXA6.js";import{y as W}from"./ExportImageParameters-nCFgorF3.js";import{t as Y}from"./imageBitmapUtils-DWMxY70m.js";import{e as I}from"./sublayerUtils-BIuOcoAj.js";import{t as Q}from"./versionUtils-BN2R_0If.js";import"./jsonUtils-Dfb6dbOO.js";import"./UniqueValueRenderer-B1dYbKHt.js";import"./ColorStop-DTtvB9mb.js";import"./diffUtils-CMku0PTa.js";import"./colorRamps-yeFZLCSh.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-C5B-ujWE.js";import"./lengthUtils-hjdKSm_k.js";import"./jsonUtils-DBhfkAEZ.js";import"./defaults-zmeSXTBk.js";import"./defaultsJSON-GKolV7NZ.js";import"./styleUtils-BYYUClws.js";import"./LRUCache-QDI8wliO.js";import"./FieldsIndex-CGICfJ2k.js";import"./UnknownTimeZone-yUshbYci.js";import"./OverrideHelper-CGylMZJ6.js";import"./colorUtils-CAOQ4nvo.js";import"./vec42-Dmy7JOK8.js";import"./vec4f64-CCf6w8sj.js";import"./utils-BNpX3Phj.js";import"./quantizationUtils-Dj-w3gih.js";import"./heatmapUtils-DZTqcKJl.js";import"./portalItemUtils-DWL7cg2a.js";import"./QueryTask-CKmoNM66.js";import"./infoFor3D-DsOdlPuA.js";import"./executeForIds-oOdC6pnj.js";import"./query-oKXKVoyl.js";import"./pbfQueryUtils-Bl19FUAz.js";import"./pbf-4Ghyjea7.js";import"./OptimizedFeature-DUj7o6ET.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./queryZScale-tTxKuowc.js";import"./executeQueryJSON-CIDhsKPo.js";import"./FeatureSet-BG8inNND.js";import"./executeQueryPBF-VjVp9e_m.js";import"./featureConversionUtils-RHoZdd80.js";import"./featureLayerUtils-Y_4TaWup.js";import"./RelationshipQuery-BUAHFHn6.js";import"./FeatureType-CYMvPZFh.js";import"./FeatureTemplate-B8CIsiQu.js";import"./labelingInfo-CrM7eJNZ.js";import"./labelUtils-B38b05cC.js";import"./LayerFloorInfo-1hbXg1Wq.js";import"./Relationship-Dl01M8wf.js";import"./serviceCapabilitiesUtils-DzQGlfpX.js";import"./popupUtils-B7aJOFoe.js";import"./jsonUtils-BVYcwSgO.js";import"./parser-ainqPSIf.js";import"./TimeInfo-BjKyYzsJ.js";import"./ElevationInfo-Cwa0hSJ4.js";import"./floorFilterUtils-DZ5C6FQv.js";let i=class extends Z(H(G(q(A(k(B(C(j(D(U(z(_)))))))))))){constructor(...e){super(...e),this._exportImageParameters=new W({layer:this}),this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeZone=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(T).then(()=>this._fetchService(r))),Promise.resolve(this)}destroy(){this._exportImageParameters.destroy()}readImageFormat(e,r){const n=r.supportedImageFormatTypes;return n&&n.includes("PNG32")?"png32":"png24"}writeSublayers(e,r,n,t){var l,u,b;if(!this.loaded||!e)return;const a=e.slice().reverse().flatten(({sublayers:m})=>m&&m.toArray().reverse()).toArray();let p=!1;const h=v(t.origin);if((l=this.capabilities)!=null&&l.operations.supportsExportMap&&((b=(u=this.capabilities)==null?void 0:u.exportMap)!=null&&b.supportsDynamicLayers)){if(h===g.PORTAL_ITEM){const m=this.createSublayersForOrigin("service").sublayers;p=I(a,m,g.SERVICE)}else if(h>g.PORTAL_ITEM){const m=this.createSublayersForOrigin("portal-item");p=I(a,m.sublayers,v(m.origin))}}const d=[],c={writeSublayerStructure:p,...t};let y=p||this.hasVisibleLayersForOrigin(h);a.forEach(m=>{const w=m.write({},c);d.push(w),y=y||m.originOf("visible")==="user"}),d.some(m=>Object.keys(m).length>1)&&(r.layers=d),y&&(r.visibleLayers=a.filter(m=>m.visible).map(m=>m.id))}createExportImageParameters(e,r,n,t){const a=(t==null?void 0:t.pixelRatio)||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian()),this._exportImageParameters.floors=(t==null?void 0:t.floors)??null,this._exportImageParameters.scale=$({extent:e,width:r})*a;const p=this._exportImageParameters.toJSON(),h=!(t!=null&&t.rotation)||this.version<10.3?{}:{rotation:-t.rotation},d=e==null?void 0:e.spatialReference,c=O(d);p.dpi*=a;const y={};if(t!=null&&t.timeExtent){const{start:l,end:u}=t.timeExtent.toJSON();y.time=l&&u&&l===u?""+l:`${l??"null"},${u??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(y.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:c,imageSR:c,size:r+","+n,...p,...h,...y}}async fetchImage(e,r,n,t){const{data:a}=await this._fetchImage("image",e,r,n,t);return a}async fetchImageBitmap(e,r,n,t){const{data:a,url:p}=await this._fetchImage("blob",e,r,n,t);return Y(a,p,t==null?void 0:t.signal)}async fetchRecomputedExtents(e={}){const r={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:n}=await f(this.url,r),{extent:t,fullExtent:a,timeExtent:p}=n,h=t||a;return{fullExtent:h&&P.fromJSON(h),timeExtent:p&&E.fromJSON({start:p[0],end:p[1]})}}loadAll(){return F(this,e=>{e(this.allSublayers),e(this.subtables)})}serviceSupportsSpatialReference(e){return Q(this,e)}async _fetchImage(e,r,n,t,a){var d,c,y;const p={responseType:e,signal:(a==null?void 0:a.signal)??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(r,n,t,a),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},h=this.parsedUrl.path+"/export";if(((d=p.query)==null?void 0:d.dynamicLayers)!=null&&!((y=(c=this.capabilities)==null?void 0:c.exportMap)!=null&&y.supportsDynamicLayers))throw new x("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:p.query});try{const{data:l}=await f(h,p);return{data:l,url:h}}catch(l){throw L(l)?l:new x("mapimagelayer:image-fetch-error",`Unable to load image: ${h}`,{error:l})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:r,ssl:n}=await f(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});n&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r,this.read(r,{origin:"service",url:this.parsedUrl})}hasVisibleLayersForOrigin(e){var r;return!(e==null||!((r=this.sublayersSourceJSON[e])!=null&&r.visibleLayers))}};o([s(S("dateFieldsTimeReference"))],i.prototype,"dateFieldsTimeZone",void 0),o([s({type:Boolean})],i.prototype,"datesInUnknownTimezone",void 0),o([s()],i.prototype,"dpi",void 0),o([s()],i.prototype,"gdbVersion",void 0),o([s()],i.prototype,"imageFormat",void 0),o([M("imageFormat",["supportedImageFormatTypes"])],i.prototype,"readImageFormat",null),o([s({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],i.prototype,"imageMaxHeight",void 0),o([s({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],i.prototype,"imageMaxWidth",void 0),o([s()],i.prototype,"imageTransparency",void 0),o([s({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],i.prototype,"isReference",void 0),o([s({json:{read:!1,write:!1}})],i.prototype,"labelsVisible",void 0),o([s({type:["ArcGISMapServiceLayer"]})],i.prototype,"operationalLayerType",void 0),o([s({json:{read:!1,write:!1}})],i.prototype,"popupEnabled",void 0),o([s(S("preferredTimeReference"))],i.prototype,"preferredTimeZone",void 0),o([s()],i.prototype,"sourceJSON",void 0),o([s({json:{write:{ignoreOrigin:!0}}})],i.prototype,"sublayers",void 0),o([R("sublayers",{layers:{type:[V]},visibleLayers:{type:[N]}})],i.prototype,"writeSublayers",null),o([s({type:["show","hide","hide-children"]})],i.prototype,"listMode",void 0),o([s({json:{read:!1},readOnly:!0,value:"map-image"})],i.prototype,"type",void 0),o([s(K)],i.prototype,"url",void 0),i=o([J("esri.layers.MapImageLayer")],i);const dt=i;export{dt as default};
