import{dL as x,be as T,gb as d,d as i,y as s,aB as w,f as h,a9 as N,hj as P,V as v,t as C,g as O,fC as $,l as L,hn as H,eb as V,ho as B,hp as M,bY as Y}from"./index-xbq7LRAl.js";import{c as k}from"./Analysis-ChmYdZC-.js";import{j as f}from"./persistable-D2wuEcoa.js";import{h as S}from"./ElevationInfo-Cwa0hSJ4.js";import{i as D}from"./elevationInfoUtils-DlRWm8nt.js";import{S as G}from"./MultiOriginJSONSupport-DMWx2RMo.js";import{b as J}from"./OperationalLayer-D2QmD8nc.js";import"./MD5-C9MwAd2G.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./resourceExtension-CKgQd5Hu.js";import"./lengthUtils-hjdKSm_k.js";import"./commonProperties-DaxkwXA6.js";function R(t,e){return I(t)===I(e)}function I(t){if(t==null)return null;const e=t.layer!=null?t.layer.id:"";let r=null;return r=t.objectId!=null?t.objectId:t.layer!=null&&"objectIdField"in t.layer&&t.layer.objectIdField!=null&&t.attributes!=null?t.attributes[t.layer.objectIdField]:t.uid,r==null?null:`o-${e}-${r}`}const E={json:{write:{writer:K,target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:Q}}}};function K(t,e){var r;((r=t==null?void 0:t.layer)==null?void 0:r.objectIdField)!=null&&t.attributes!=null&&(e.feature={layerId:t.layer.id,objectId:t.attributes[t.layer.objectIdField]})}function Q(t){if(t.layerId!=null&&t.objectId!=null)return{uid:null,layer:{id:t.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:t.objectId}}}let a=class extends x(T(N)){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return d(this.position,e.position)&&d(this.elevationInfo,e.elevationInfo)&&R(this.feature,e.feature)}};i([s({type:w,json:{write:{isRequired:!0}}})],a.prototype,"position",void 0),i([s({type:S}),f()],a.prototype,"elevationInfo",void 0),i([s(E)],a.prototype,"feature",void 0),a=i([h("esri.analysis.LineOfSightAnalysisObserver")],a);const F=a;let u=class extends x(P){constructor(t){super(t),this.position=null,this.elevationInfo=null,this.feature=null}equals(t){return d(this.position,t.position)&&d(this.elevationInfo,t.elevationInfo)&&R(this.feature,t.feature)}};i([s({type:w}),f()],u.prototype,"position",void 0),i([s({type:S}),f()],u.prototype,"elevationInfo",void 0),i([s(E)],u.prototype,"feature",void 0),u=i([h("esri.analysis.LineOfSightAnalysisTarget")],u);const z=u,g=v.ofType(z);let o=class extends k{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles(O(()=>this._computeExtent(),e=>{(e==null?void 0:e.pending)==null&&this._set("extent",e!=null?e.extent:null)},$))}get targets(){return this._get("targets")||new g}set targets(e){this._set("targets",L(e,this.targets,g))}get spatialReference(){var e;return((e=this.observer)==null?void 0:e.position)!=null?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){var e;return[(e=this.observer)==null?void 0:e.position]}async waitComputeExtent(){const e=this._computeExtent();return e!=null?e.pending:Promise.resolve()}_computeExtent(){var m;const e=this.spatialReference;if(((m=this.observer)==null?void 0:m.position)==null||e==null)return null;const r=p=>D(p.position,p.elevationInfo)==="absolute-height",l=this.observer.position,b=H(l.x,l.y,l.z,l.x,l.y,l.z);for(const p of this.targets)if(p.position!=null){const y=V(p.position,e);if(y.pending!=null)return{pending:y.pending,extent:null};if(y.geometry!=null){const{x:_,y:q,z:A}=y.geometry;B(b,[_,q,A])}}const c=M(b,e);return r(this.observer)&&this.targets.every(r)||(c.zmin=void 0,c.zmax=void 0),{pending:null,extent:c}}clear(){this.observer=null,this.targets.removeAll()}};i([s({type:["line-of-sight"]})],o.prototype,"type",void 0),i([s({type:F,json:{read:!0,write:!0}})],o.prototype,"observer",void 0),i([s({cast:C,type:g,nonNullable:!0,json:{read:!0,write:!0}})],o.prototype,"targets",null),i([s({value:null,readOnly:!0})],o.prototype,"extent",void 0),i([s({readOnly:!0})],o.prototype,"spatialReference",null),i([s({readOnly:!0})],o.prototype,"requiredPropertiesForEditing",null),o=i([h("esri.analysis.LineOfSightAnalysis")],o);const j=o,U=v.ofType(z);let n=class extends J(G(Y)){constructor(t){super(t),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new j,this.opacity=1}initialize(){this.addHandles(O(()=>this.analysis,(t,e)=>{e!=null&&e.parent===this&&(e.parent=null),t!=null&&(t.parent=this)},$))}async load(){return this.analysis!=null&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){var t;return(t=this.analysis)==null?void 0:t.observer}set observer(t){const{analysis:e}=this;e&&(e.observer=t)}get targets(){return this.analysis!=null?this.analysis.targets:new v}set targets(t){var e;L(t,(e=this.analysis)==null?void 0:e.targets)}get fullExtent(){return this.analysis!=null?this.analysis.extent:null}get spatialReference(){return this.analysis!=null?this.analysis.spatialReference:null}releaseAnalysis(t){this.analysis===t&&(this.analysis=new j)}};i([s({json:{read:!1},readOnly:!0})],n.prototype,"type",void 0),i([s({type:["LineOfSightLayer"]})],n.prototype,"operationalLayerType",void 0),i([s({type:F,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],n.prototype,"observer",null),i([s({type:U,json:{read:!0,write:{ignoreOrigin:!0}}})],n.prototype,"targets",null),i([s({nonNullable:!0,json:{read:!1,write:!1}})],n.prototype,"analysis",void 0),i([s({readOnly:!0})],n.prototype,"fullExtent",null),i([s({readOnly:!0})],n.prototype,"spatialReference",null),i([s({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],n.prototype,"opacity",void 0),i([s({type:["show","hide"]})],n.prototype,"listMode",void 0),n=i([h("esri.layers.LineOfSightLayer")],n);const yt=n;export{yt as default};
