import{d as r,y as l,t as o,f as d,V,g as y,es as h,l as p}from"./index-xbq7LRAl.js";import{y as w,f as v}from"./LayerView-bRd78Omm.js";import"./Container-D0FNaGQw.js";import"./parser-ainqPSIf.js";import"./highlightReasons-Do5kNyU0.js";import"./definitions-Y_v3njP4.js";import"./enums-BlUEVwJR.js";import"./Texture-Bd0PAkMI.js";let t=class extends w{constructor(i){super(i),this.type="group",this.layerViews=new V}destroy(){this.layerViews.length=0}_allLayerViewVisibility(i){this.layerViews.forEach(e=>{e.visible=i})}initialize(){this.addHandles([this.layerViews.on("change",i=>this._layerViewsChangeHandler(i)),y(()=>{var i;return(i=this.layer)==null?void 0:i.visibilityMode},()=>{this.layer&&this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(null))},h),y(()=>this.visible,i=>{this._applyVisibility(()=>this._allLayerViewVisibility(i),()=>{})},h)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]})}get creatingLayerViews(){var i,e;return((e=(i=this.view)==null?void 0:i.layerViewManager)==null?void 0:e.isCreatingLayerViewsForLayer(this.layer))??!1}set layerViews(i){this._set("layerViews",p(i,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((i,e)=>i+e.updatingProgress,0)/this.layerViews.length}isUpdating(){return this.creatingLayerViews||this.layerViews.some(i=>i.updating)}_hasLayerViewVisibleOverrides(){return this.layerViews.some(i=>i._isOverridden("visible"))}_findLayerViewForLayer(i){return i&&this.layerViews.find(e=>e.layer===i)}_firstVisibleOnLayerOrder(){const i=this.layer.layers.find(e=>{const s=this._findLayerViewForLayer(e);return!!(s!=null&&s.visible)});return i&&this._findLayerViewForLayer(i)}_applyExclusiveVisibility(i){i==null&&(i=this._firstVisibleOnLayerOrder())==null&&this.layerViews.length>0&&(i=this._findLayerViewForLayer(this.layer.layers.at(0))),this.layerViews.forEach(e=>{e.visible=e===i})}_layerViewsChangeHandler(i){this.removeHandles("grouplayerview:visible"),this.addHandles(this.layerViews.map(s=>y(()=>s.visible,a=>this._applyVisibility(()=>{a!==this.visible&&(s.visible=this.visible)},()=>this._applyExclusiveVisibility(a?s:null)),h)).toArray(),"grouplayerview:visible");const e=i.added[i.added.length-1];this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(e!=null&&e.visible?e:null))}_applyVisibility(i,e){var s,a;this._hasLayerViewVisibleOverrides()&&(((s=this.layer)==null?void 0:s.visibilityMode)==="inherited"?i():((a=this.layer)==null?void 0:a.visibilityMode)==="exclusive"&&e())}};r([l({readOnly:!0})],t.prototype,"creatingLayerViews",null),r([l({cast:o})],t.prototype,"layerViews",null),r([l({readOnly:!0})],t.prototype,"updatingProgress",null),r([l()],t.prototype,"view",void 0),t=r([d("esri.views.layers.GroupLayerView")],t);const u=t;let n=class extends v(u){attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(i){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((i,e)=>this.container.addChildAt(i.container,e))}};n=r([d("esri.views.2d.layers.GroupLayerView2D")],n);const O=n;export{O as default};
