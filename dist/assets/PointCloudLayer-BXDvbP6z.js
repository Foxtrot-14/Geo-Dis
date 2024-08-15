import{d as r,y as o,f as y,aW as N,e9 as C,cl as v,aY as u,aS as b,a$ as V,b2 as _,i4 as x,J as l,c7 as L,U as E,n as T,k as O,aR as A,aT as k,bY as D}from"./index-xbq7LRAl.js";import{S as K}from"./MultiOriginJSONSupport-DMWx2RMo.js";import{i as G}from"./APIKeyMixin-D-Lmgt3B.js";import{l as M}from"./ArcGISService-C0KYbM-y.js";import{e as U}from"./CustomParametersMixin-ZokGHDkE.js";import{b as Y}from"./OperationalLayer-D2QmD8nc.js";import{j as z}from"./PortalLayer-DnK0C8vG.js";import{t as J}from"./ScaleRangeLayer-DDWRZCy0.js";import{L as W,C as F}from"./SceneService-CTdsDwOO.js";import{s as Z,d as H,y as Q}from"./commonProperties-DaxkwXA6.js";import{s as X}from"./fieldProperties-4kCC_anc.js";import{c as q,d as ee,b as te,a as re}from"./PointCloudUniqueValueRenderer-BFWI-YZf.js";import{$ as P,Z as oe,w as ie}from"./elevationInfoUtils-DlRWm8nt.js";import{p as se}from"./popupUtils-B7aJOFoe.js";import"./portalItemUtils-DWL7cg2a.js";import"./originUtils-D69mHv66.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./jsonContext-B92CjVo3.js";import"./resourceUtils-CRSPapwV.js";import"./resourceUtils-Bv_Ez6wW.js";import"./saveAPIKeyUtils-Y4Gn8NGw.js";import"./saveUtils-jgMwhX_5.js";import"./ElevationInfo-Cwa0hSJ4.js";import"./lengthUtils-hjdKSm_k.js";import"./FieldsIndex-CGICfJ2k.js";import"./UnknownTimeZone-yUshbYci.js";import"./ColorStop-DTtvB9mb.js";let f=class extends N{constructor(e){super(e),this.field=null,this.type=null}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};r([o({type:String,json:{write:{enabled:!0,isRequired:!0}}})],f.prototype,"field",void 0),r([o({readOnly:!0,nonNullable:!0,json:{read:!1}})],f.prototype,"type",void 0),f=r([y("esri.layers.pointCloudFilters.PointCloudFilter")],f);const g=f;var w;let d=w=class extends g{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield"}clone(){return new w({field:this.field,requiredClearBits:u(this.requiredClearBits),requiredSetBits:u(this.requiredSetBits)})}};r([o({type:[C],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],d.prototype,"requiredClearBits",void 0),r([o({type:[C],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],d.prototype,"requiredSetBits",void 0),r([v({pointCloudBitfieldFilter:"bitfield"})],d.prototype,"type",void 0),d=w=r([y("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],d);const ne=d;var I;let m=I=class extends g{constructor(e){super(e),this.includedReturns=[],this.type="return"}clone(){return new I({field:this.field,includedReturns:u(this.includedReturns)})}};r([o({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],m.prototype,"includedReturns",void 0),r([v({pointCloudReturnFilter:"return"})],m.prototype,"type",void 0),m=I=r([y("esri.layers.pointCloudFilters.PointCloudReturnFilter")],m);const ae=m;var $;let p=$=class extends g{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[]}clone(){return new $({field:this.field,mode:this.mode,values:u(this.values)})}};r([o({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],p.prototype,"mode",void 0),r([v({pointCloudValueFilter:"value"})],p.prototype,"type",void 0),r([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],p.prototype,"values",void 0),p=$=r([y("esri.layers.pointCloudFilters.PointCloudValueFilter")],p);const le=p,de={key:"type",base:g,typeMap:{value:le,bitfield:ne,return:ae}};var S;let h=S=class extends q{constructor(e){super(e),this.type="point-cloud-rgb",this.field=null}clone(){return new S({...this.cloneProperties(),field:u(this.field)})}};r([v({pointCloudRGBRenderer:"point-cloud-rgb"})],h.prototype,"type",void 0),r([o({type:String,json:{write:!0}})],h.prototype,"field",void 0),h=S=r([y("esri.renderers.PointCloudRGBRenderer")],h);const pe=h,R={key:"type",base:q,typeMap:{"point-cloud-class-breaks":ee,"point-cloud-rgb":pe,"point-cloud-stretch":te,"point-cloud-unique-value":re},errorContext:"renderer"},j=X();let i=class extends W(M(Y(z(J(K(U(G(D)))))))){constructor(...e){super(...e),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.fieldsIndex=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud"}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(e){const t=this.fieldsIndex.get(e);return t!=null&&t.domain?t.domain:null}readServiceFields(e,t,n){return Array.isArray(e)?e.map(s=>{const a=new b;return s.type==="FieldTypeInteger"&&((s=u(s)).type="esriFieldTypeInteger"),a.read(s,n),a}):Array.isArray(t.attributeStorageInfo)?t.attributeStorageInfo.map(s=>new b({name:s.name,type:s.name==="ELEVATION"?"double":"integer"})):null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}writeRenderer(e,t,n,s){V("layerDefinition.drawingInfo.renderer",e.write({},s),t)}load(e){const t=e!=null?e.signal:null,n=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(_).then(()=>this._fetchService(t));return this.addResolvingPromise(n),Promise.resolve(this)}createPopupTemplate(e){const t=se(this,e);return t&&(this._formatPopupTemplateReturnsField(t),this._formatPopupTemplateRGBField(t)),t}_formatPopupTemplateReturnsField(e){var a;const t=this.fieldsIndex.get("RETURNS");if(!t)return;const n=(a=e.fieldInfos)==null?void 0:a.find(c=>c.fieldName===t.name);if(!n)return;const s=new x({name:"pcl-returns-decoded",title:t.alias||t.name,expression:`
        var returnValue = $feature.${t.name};
        return (returnValue % 16) + " / " + Floor(returnValue / 16);
      `});e.expressionInfos=[...e.expressionInfos||[],s],n.fieldName="expression/pcl-returns-decoded"}_formatPopupTemplateRGBField(e){var a;const t=this.fieldsIndex.get("RGB");if(!t)return;const n=(a=e.fieldInfos)==null?void 0:a.find(c=>c.fieldName===t.name);if(!n)return;const s=new x({name:"pcl-rgb-decoded",title:t.alias||t.name,expression:`
        var rgb = $feature.${t.name};
        var red = Floor(rgb / 65536, 0);
        var green = Floor((rgb - (red * 65536)) / 256,0);
        var blue = rgb - (red * 65536) - (green * 256);

        return "rgb(" + red + "," + green + "," + blue + ")";
      `});e.expressionInfos=[...e.expressionInfos||[],s],n.fieldName="expression/pcl-rgb-decoded"}async queryCachedStatistics(e,t){var s;if(await this.load(t),!this.attributeStorageInfo)throw new l("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const n=this.fieldsIndex.get(e);if(!n)throw new l("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const a of this.attributeStorageInfo)if(a.name===n.name){const c=L(((s=this.parsedUrl)==null?void 0:s.path)??"",`./statistics/${a.key}`);return E(c,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then(B=>B.data)}throw new l("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(F.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(F.SAVE,e)}validateLayer(e){if(e.layerType&&e.layerType!=="PointCloud")throw new l("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new l("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new l("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return this.attributeStorageInfo!=null&&this.attributeStorageInfo.some(t=>t.name===e)}_getTypeKeywords(){return["PointCloud"]}_validateElevationInfo(){const e=this.elevationInfo;P(T.getLogger(this),oe("Point cloud layers","absolute-height",e)),P(T.getLogger(this),ie("Point cloud layers",e))}};r([o({type:["PointCloudLayer"]})],i.prototype,"operationalLayerType",void 0),r([o(Z)],i.prototype,"popupEnabled",void 0),r([o({type:O,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),r([o({readOnly:!0,json:{read:!1}})],i.prototype,"defaultPopupTemplate",null),r([o({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],i.prototype,"opacity",void 0),r([o({type:["show","hide"]})],i.prototype,"listMode",void 0),r([o({types:[de],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],i.prototype,"filters",void 0),r([o({type:[b]})],i.prototype,"fields",void 0),r([o(j.fieldsIndex)],i.prototype,"fieldsIndex",void 0),r([A("service","fields",["fields","attributeStorageInfo"])],i.prototype,"readServiceFields",null),r([o(j.outFields)],i.prototype,"outFields",void 0),r([o({readOnly:!0})],i.prototype,"attributeStorageInfo",void 0),r([o(H)],i.prototype,"elevationInfo",null),r([o({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),r([o(Q)],i.prototype,"legendEnabled",void 0),r([o({types:R,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:R},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],i.prototype,"renderer",void 0),r([k("renderer")],i.prototype,"writeRenderer",null),r([o({json:{read:!1},readOnly:!0})],i.prototype,"type",void 0),i=r([y("esri.layers.PointCloudLayer")],i);const Oe=i;export{Oe as default};
