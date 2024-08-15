import{c as w,h as y,m as I,r as V,e as H,G as v,b as o,a as u,n as T,d as n,y as g,f as q}from"./index-xbq7LRAl.js";import"./colorUtils-CAOQ4nvo.js";import"./GeometryUtils-DUA2NHae.js";import"./UpdateTracking2D-DBfkqqG3.js";import"./enums-BRXbslMp.js";import"./definitions-Y_v3njP4.js";import"./defaults-zmeSXTBk.js";import"./OverrideHelper-CGylMZJ6.js";import"./floatRGBA-DqPt1VBm.js";import"./Container-D0FNaGQw.js";import"./WGLContainer-GcXmU5zA.js";import"./Texture-Bd0PAkMI.js";import"./enums-BlUEVwJR.js";import"./Program-BZPH6wBq.js";import"./LabelMetric-v-96RQkf.js";import"./StyleDefinition-BK3ROBTO.js";import"./enums-BRzLM11V.js";import"./MagnifierPrograms-BiWihKFq.js";import"./pbf-4Ghyjea7.js";import"./FeatureCommandQueue-l4BkE3X8.js";import"./PieChartMeshWriter-CS_q8Miw.js";import"./renderState-C37QfRey.js";import"./interfaces-B8ge7Jg9.js";import"./testSVGPremultipliedAlpha-C8UIYWB0.js";import{V as U}from"./GraphicsView2D-DTjG6njp.js";import"./earcut-zSh2G-7V.js";import"./vec3f32-nZdmKIgz.js";import{r as b,o as f,n as d}from"./imageUtils-CQZaXiDp.js";import{f as C,y as Q}from"./LayerView-bRd78Omm.js";import{h as S}from"./HighlightGraphicContainer--mz7d665.js";import{i as $}from"./RefreshableLayerView-CQDe0flp.js";import{U as P,_ as L,r as k}from"./drapedUtils-CM1Rwrg1.js";import"./vec42-Dmy7JOK8.js";import"./vec4f64-CCf6w8sj.js";import"./BidiEngine-BwB1Df7c.js";import"./OptimizedFeature-DUj7o6ET.js";import"./utils-BNpX3Phj.js";import"./Rect-CUzevAry.js";import"./BindType-BmZEZMMh.js";import"./Util-s1_hMKHE.js";import"./highlightReasons-Do5kNyU0.js";import"./defaultsJSON-GKolV7NZ.js";import"./quantizationUtils-Dj-w3gih.js";import"./parser-ainqPSIf.js";import"./ProgramTemplate-2DVv_B0N.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./config-MDUrh2eL.js";import"./featureConversionUtils-RHoZdd80.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./CircularArray-CujHzHWW.js";import"./AttributeStore-Cnk_rnWA.js";import"./labelUtils-B38b05cC.js";import"./FieldsIndex-CGICfJ2k.js";import"./UnknownTimeZone-yUshbYci.js";import"./TimeOnly-zm5PW-Xy.js";import"./timeSupport-Yu3mOoiw.js";import"./json-Wa8cmqdu.js";import"./diffUtils-CMku0PTa.js";import"./constants-D5zmR9t2.js";import"./lengthUtils-hjdKSm_k.js";import"./TurboLine-DNHbZuTq.js";import"./basicInterfaces-DngWxyLO.js";import"./normalizeUtilsSync-0ovdakRO.js";import"./Bitmap-e6jLTm38.js";import"./TileContainer-Hr-ejOVw.js";import"./AGraphicContainer-C7CHR9YE.js";import"./TechniqueInstance-DVE4PPnM.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./sublayerUtils-BIuOcoAj.js";import"./popupUtils-C2PJVGVx.js";const F=[0,0];let a=class extends $(b(C(Q))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new w,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||this.layer.resampling!==!1}get tilemapCache(){return"tilemapCache"in this.layer?this.layer.tilemapCache:null}update(t){var i;this._fetchQueue.pause(),this._fetchQueue.state=t.state,this._tileStrategy.update(t),this._fetchQueue.resume(),(i=this._highlightView)==null||i.processUpdate(t)}attach(){const t="tileServers"in this.layer?this.layer.tileServers:null,i=this.tilemapCache;if(this._tileInfoView=new y(this.layer.tileInfo,this.layer.fullExtent,i==null?void 0:i.effectiveMinLOD,i==null?void 0:i.effectiveMaxLOD),this._fetchQueue=new I({tileInfoView:this._tileInfoView,concurrency:t&&10*t.length||10,process:(e,r)=>this.fetchTile(e,r)}),this._tileStrategy=new V({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),P(this,this.layer)){const e=this._highlightView=new U({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new S(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new L({createFetchPopupFeaturesQueryGeometry:(r,h)=>k(r,h,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(r,h)=>{e.graphicUpdateHandler({graphic:r,property:h})},layerView:this,updatingHandles:this._updatingHandles})}this.requestUpdate(),this.addAttachHandles(this._updatingHandles.add(()=>this.resampling,()=>{this.doRefresh()})),super.attach()}detach(){var t,i;super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),(t=this._popupHighlightHelper)==null||t.destroy(),(i=this._highlightView)==null||i.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null}async fetchPopupFeaturesAtLocation(t,i){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeaturesAtLocation(t,i):[]}highlight(t){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(t):H()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){var i;return v((i=this.layer.tileInfo)==null?void 0:i.spatialReference,t)}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh(t=>this._updatingHandles.addPromise(this._enqueueTileFetch(t)))}}acquireTile(t){const i=this._bitmapView.createTile(t),e=i.bitmap;return[e.x,e.y]=this._tileInfoView.getTileCoords(F,i.key),e.resolution=this._tileInfoView.getTileResolution(i.key),[e.width,e.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(i)),this._bitmapView.addChild(i),this.requestUpdate(),i}releaseTile(t){this._fetchQueue.abort(t.key.id),this._bitmapView.removeChild(t),t.once("detach",()=>t.destroy()),this.requestUpdate()}async fetchTile(t,i={}){const e=this.tilemapCache,{signal:r,resamplingLevel:h=0}=i;if(!e)try{return await this._fetchImage(t,r)}catch(s){if(!o(s)&&!this.resampling)return f(this._tileInfoView.tileInfo.size);if(h<3){const m=this._tileInfoView.getTileParentId(t.id);if(m){const c=new u(m),_=await this.fetchTile(c,{...i,resamplingLevel:h+1});return d(this._tileInfoView,_,c,t)}}throw s}const l=new u(0,0,0,0);let p;try{if(await e.fetchAvailabilityUpsample(t.level,t.row,t.col,l,{signal:r}),l.level!==t.level&&!this.resampling)return f(this._tileInfoView.tileInfo.size);p=await this._fetchImage(l,r)}catch(s){if(o(s))throw s;p=await this._fetchImage(t,r)}return this.resampling?d(this._tileInfoView,p,l,t):p}async _enqueueTileFetch(t){if(!this._fetchQueue.has(t.key.id)){try{const i=await this._fetchQueue.push(t.key);t.bitmap.source=i,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.once("attach",()=>this.requestUpdate())}catch(i){o(i)||T.getLogger(this).error(i)}this.requestUpdate()}}async _fetchImage(t,i){return this.layer.fetchImageBitmapTile(t.level,t.row,t.col,{signal:i})}};n([g()],a.prototype,"resampling",null),n([g()],a.prototype,"tilemapCache",null),a=n([q("esri.views.2d.layers.TileLayerView2D")],a);const Yt=a;export{Yt as default};
