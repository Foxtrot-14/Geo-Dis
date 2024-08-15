import{n as M,J as C,aY as y,eK as I,ab as x}from"./index-xbq7LRAl.js";import{o as O}from"./colorUtils-CAOQ4nvo.js";import{D as h,H as b,R as k,F as S,l as g,s as N,v as P}from"./utils-BNpX3Phj.js";import{B as $,H as w,D as G,C as T}from"./quantizationUtils-Dj-w3gih.js";function E(c,e,r,s,i){if(c==null)return null;const t=c.referencesGeometry()&&i?D(e,s,i):e,o=c.repurposeFeature(t);try{return c.evaluate({...r,$feature:o},c.services)}catch(a){return M.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",a),null}}const u=new Map;function D(c,e,r){const{transform:s,hasZ:i,hasM:t}=r;u.has(e)||u.set(e,R(e));const o=u.get(e)(c.geometry,s,i,t);return{...c,geometry:o}}function R(c){const e={};switch(c){case"esriGeometryPoint":return(r,s,i,t)=>T(s,e,r,i,t);case"esriGeometryPolygon":return(r,s,i,t)=>G(s,e,r,i,t);case"esriGeometryPolyline":return(r,s,i,t)=>w(s,e,r,i,t);case"esriGeometryMultipoint":return(r,s,i,t)=>$(s,e,r,i,t);default:return M.getLogger("esri.views.2d.support.arcadeOnDemand").error(new C("mapview-arcade",`Unable to handle geometryType: ${c}`)),r=>r}}const A=c=>{if(!c)return[0,0,0,0];const{r:e,g:r,b:s,a:i}=c;return[e,r,s,255*i]};class n{static findApplicableOverrides(e,r,s){if(e&&r){if(e.primitiveName){let i=!1;for(const t of s)if(t.primitiveName===e.primitiveName){i=!0;break}if(!i)for(const t of r)t.primitiveName===e.primitiveName&&s.push(t)}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const i of e.effects)n.findApplicableOverrides(i,r,s);if(e.symbolLayers)for(const i of e.symbolLayers)n.findApplicableOverrides(i,r,s);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMSolidFill":case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMVectorMarker":case"CIMCharacterMarker":case"CIMPictureMarker":if(e.effects)for(const i of e.effects)n.findApplicableOverrides(i,r,s);if(e.markerPlacement&&n.findApplicableOverrides(e.markerPlacement,r,s),e.type==="CIMVectorMarker"){if(e.markerGraphics)for(const i of e.markerGraphics)n.findApplicableOverrides(i,r,s),n.findApplicableOverrides(i.symbol,r,s)}else e.type==="CIMCharacterMarker"?n.findApplicableOverrides(e.symbol,r,s):e.type==="CIMHatchFill"?n.findApplicableOverrides(e.lineSymbol,r,s):e.type==="CIMPictureMarker"&&n.findApplicableOverrides(e.animatedSymbolProperties,r,s)}}}static findEffectOverrides(e,r){if(!e)return null;if(e.type==="CIMGeometricEffectDashes"&&h(e),!r||!e.primitiveName)return{type:"cim-effect-param",effect:e,overrides:[]};const s=b(e),i=e.primitiveName,t=[];for(const o of r)o.primitiveName===i&&t.push(b(o));return{type:"cim-effect-param",effect:s,overrides:k(t)}}static async resolveSymbolOverrides(e,r,s,i,t,o,a){if(!(e!=null&&e.symbol))return null;let{symbol:p,primitiveOverrides:l}=e;const v=!!l;if(!v&&!i)return p;p=y(p),l=y(l);let d=!0;if(r||(r={attributes:{}},d=!1),v){if(d||(l=l.filter(f=>{var m;return!((m=f.valueExpressionInfo)!=null&&m.expression.includes("$feature"))})),a||(l=l.filter(f=>{var m;return!((m=f.valueExpressionInfo)!=null&&m.expression.includes("$view"))})),l.length>0){const f={spatialReference:s,fields:S(r.attributes),geometryType:t};await n.createRenderExpressions(l,f),n.evaluateOverrides(l,r,t??"esriGeometryPoint",o,a)}n.applyOverrides(p,l)}return i&&n.applyDictionaryTextOverrides(p,r,i,null),p}static async createRenderExpressions(e,r){const s=[];for(const i of e){const t=i.valueExpressionInfo;if(!t||n._expressionToRenderExpression.has(t.expression))continue;const o=I(t.expression,r.spatialReference,r.fields);s.push(o),o.then(a=>n._expressionToRenderExpression.set(t.expression,a))}s.length>0&&await Promise.all(s)}static evaluateOverrides(e,r,s,i,t){const o={$view:{scale:t==null?void 0:t.scale}};for(const a of e){a.value&&typeof a.value=="object"&&O(a.value)&&(a.propertyName==="Color"||a.propertyName==="StrokeColor")&&(a.value=A(a.value));const p=a.valueExpressionInfo;if(!p)continue;const l=n._expressionToRenderExpression.get(p.expression);l&&(a.value=E(l,r,o,s,i))}}static applyDictionaryTextOverrides(e,r,s,i,t="Normal"){if(e!=null&&e.type)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":case"CIMTextSymbol":{const o=e.symbolLayers;if(!o)return;for(const a of o)a&&a.type==="CIMVectorMarker"&&n.applyDictionaryTextOverrides(a,r,s,i,e.type==="CIMTextSymbol"?e.textCase:t)}break;case"CIMVectorMarker":{const o=e.markerGraphics;if(!o)return;for(const a of o)a&&n.applyDictionaryTextOverrides(a,r,s,i)}break;case"CIMMarkerGraphic":{const o=e.textString;if(o&&o.includes("[")){const a=g(o,s);e.textString=N(r,a,i,t)}}}}static applyOverrides(e,r,s,i){if(e.primitiveName){for(const t of r)if(t.primitiveName===e.primitiveName){const o=P(t.propertyName);if(i&&i.push({cim:e,nocapPropertyName:o,value:e[o]}),s){let a=!1;for(const p of s)p.primitiveName===e.primitiveName&&(a=!0);a||s.push(t)}t.value!=null&&(e[o]=t.value)}}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const t of e.effects)n.applyOverrides(t,r,s,i);if(e.symbolLayers)for(const t of e.symbolLayers)n.applyOverrides(t,r,s,i);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMSolidFill":case"CIMVectorMarker":if(e.effects)for(const t of e.effects)n.applyOverrides(t,r,s,i);if(e.type==="CIMVectorMarker"&&e.markerGraphics)for(const t of e.markerGraphics)n.applyOverrides(t,r,s,i),n.applyOverrides(t.symbol,r,s,i)}}static restoreOverrides(e){for(const r of e)r.cim[r.nocapPropertyName]=r.value}static buildOverrideKey(e){let r="";for(const s of e)s.value!==void 0&&(r+=`${s.primitiveName}${s.propertyName}${JSON.stringify(s.value)}`);return r}static toValue(e,r){if(e==="DashTemplate")return r.split(" ").map(s=>Number(s));if(e==="Color"){const s=new x(r).toRgba();return s[3]*=255,s}return r}}n._expressionToRenderExpression=new Map;export{n as y};
