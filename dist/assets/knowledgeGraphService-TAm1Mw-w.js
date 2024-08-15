const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/arcgis-knowledge-client-core-simd-CPgkRu-p.js","assets/index-xbq7LRAl.js","assets/index-DIsDuqIA.css","assets/arcgis-knowledge-client-core-Cf0K9hoN.js"])))=>i.map(i=>d[i]);
import{d as a,y as s,f as G,a9 as C,aW as F,aV as U,q as Qe,_ as we,eM as ve,J as d,ek as ue,aE as be,aB as xe,aD as ce,aC as ye,n as re,U as z,b6 as Be}from"./index-xbq7LRAl.js";import{m as Me,p as ke,t as Ve,c as We}from"./GraphQueryStreaming-CwK8E37n.js";let O=class extends C{constructor(r){super(r),this.headerKeys=[],this.outSpatialReference=null,this.exceededTransferLimit=!1}};a([s()],O.prototype,"headerKeys",void 0),a([s()],O.prototype,"outSpatialReference",void 0),a([s()],O.prototype,"exceededTransferLimit",void 0),O=a([G("esri.rest.knowledgeGraph.GraphQueryResultHeader")],O);const Z=O;let L=class extends C{constructor(r){super(r),this.resultRows=[],this.resultHeader=new Z}};a([s()],L.prototype,"resultRows",void 0),a([s()],L.prototype,"resultHeader",void 0),L=a([G("esri.rest.knowledgeGraph.GraphQueryResult")],L);const Te=L;let A=class extends C{constructor(r){super(r),this.resultRowsStream=new ReadableStream,this.resultHeader=new Z}};a([s()],A.prototype,"resultRowsStream",void 0),a([s()],A.prototype,"resultHeader",void 0),A=a([G("esri.rest.knowledgeGraph.GraphQueryStreamingResult")],A);const Ee=A;let b=class extends F{constructor(r){super(r),this.name=null,this.unique=null,this.ascending=null,this.description=null,this.fieldNames=null}};a([s({type:String,json:{write:!0}})],b.prototype,"name",void 0),a([s({type:Boolean,json:{write:!0}})],b.prototype,"unique",void 0),a([s({type:Boolean,json:{write:!0}})],b.prototype,"ascending",void 0),a([s({type:String,json:{write:!0}})],b.prototype,"description",void 0),a([s({type:[String],json:{write:!0}})],b.prototype,"fieldNames",void 0),b=a([G("esri.rest.knowledgeGraph.FieldIndex")],b);const Oe=b;let v=class extends F{constructor(r){super(r),this.name=null,this.alias=null,this.fieldType=null,this.geometryType=null,this.hasM=null,this.hasZ=null,this.nullable=null,this.editable=null,this.required=null,this.defaultVisibility=null,this.systemMaintained=null,this.role=null,this.defaultValue=null}};a([s({type:String,json:{write:!0}})],v.prototype,"name",void 0),a([s({type:String,json:{write:!0}})],v.prototype,"alias",void 0),a([s({type:String,json:{write:!0}})],v.prototype,"fieldType",void 0),a([s({type:String,json:{write:!0}})],v.prototype,"geometryType",void 0),a([s({type:Boolean,json:{write:!0}})],v.prototype,"hasM",void 0),a([s({type:Boolean,json:{write:!0}})],v.prototype,"hasZ",void 0),a([s({type:Boolean,json:{write:!0}})],v.prototype,"nullable",void 0),a([s({type:Boolean,json:{write:!0}})],v.prototype,"editable",void 0),a([s({type:Boolean,json:{write:!0}})],v.prototype,"required",void 0),a([s({type:Boolean,json:{write:!0}})],v.prototype,"defaultVisibility",void 0),a([s({type:Boolean,json:{write:!0}})],v.prototype,"systemMaintained",void 0),a([s()],v.prototype,"role",void 0),a([s({json:{write:!0}})],v.prototype,"defaultValue",void 0),v=a([G("esri.rest.knowledgeGraph.GraphProperty")],v);const je=v;let P=class extends F{constructor(r){super(r),this.name=null,this.alias=null,this.role=null,this.strict=null,this.properties=null,this.fieldIndexes=null,this.type=null}};a([s({type:String,json:{write:!0}})],P.prototype,"name",void 0),a([s({type:String,json:{write:!0}})],P.prototype,"alias",void 0),a([s({type:String,json:{write:!0}})],P.prototype,"role",void 0),a([s({type:Boolean,json:{write:!0}})],P.prototype,"strict",void 0),a([s({type:[je],json:{write:!0}})],P.prototype,"properties",void 0),a([s({type:[Oe],json:{write:!0}})],P.prototype,"fieldIndexes",void 0),P=a([G("esri.rest.knowledgeGraph.GraphObjectType")],P);const $e=P;let ne=class extends $e{constructor(r){super(r),this.type="entity"}};ne=a([G("esri.rest.knowledgeGraph.EntityType")],ne);const oe=ne;let Q=class extends $e{constructor(r){super(r),this.endPoints=[],this.type="relationship"}};a([s()],Q.prototype,"endPoints",void 0),Q=a([G("esri.rest.knowledgeGraph.RelationshipType")],Q);const Fe=Q;let T=class extends F{constructor(r){super(r),this.timestamp=null,this.spatialReference=null,this.strict=null,this.objectIdField=null,this.globalIdField=null,this.arcgisManaged=null,this.identifierInfo=null,this.searchIndexes=null,this.entityTypes=null,this.relationshipTypes=null,this.metaEntityTypes=null}};a([s({type:Date,json:{type:Number,write:{writer:(e,r)=>{r.timestamp=e==null?void 0:e.getTime()}}}})],T.prototype,"timestamp",void 0),a([s({type:U,json:{write:!0}})],T.prototype,"spatialReference",void 0),a([s({type:Boolean,json:{write:!0}})],T.prototype,"strict",void 0),a([s({type:String,json:{write:!0}})],T.prototype,"objectIdField",void 0),a([s({type:String,json:{write:!0}})],T.prototype,"globalIdField",void 0),a([s()],T.prototype,"arcgisManaged",void 0),a([s()],T.prototype,"identifierInfo",void 0),a([s()],T.prototype,"searchIndexes",void 0),a([s({type:[oe],json:{write:!0}})],T.prototype,"entityTypes",void 0),a([s({type:[Fe],json:{write:!0}})],T.prototype,"relationshipTypes",void 0),a([s({type:[oe],json:{write:!0}})],T.prototype,"metaEntityTypes",void 0),T=a([G("esri.rest.knowledgeGraph.DataModel")],T);const De=T;let f=class extends F{constructor(r){super(r),this.capabilities=[],this.supportsSearch=!1,this.supportedQueryFormats=[],this.allowGeometryUpdates=!1,this.searchMaxRecordCount=null,this.serviceCapabilities=null,this.maxRecordCount=null,this.description="",this.copyrightText="",this.units="",this.spatialReference=null,this.currentVersion=null,this.dateFieldsTimeReference=null,this.serviceItemId="",this.supportsDocuments=!1,this.dataEditingNotSupported=!1,this.schemaEditingNotSupported=!1,this.supportsProvenance=!1}};a([s({type:[String],json:{write:!0}})],f.prototype,"capabilities",void 0),a([s({type:Boolean,json:{write:!0}})],f.prototype,"supportsSearch",void 0),a([s({type:[String],json:{write:!0}})],f.prototype,"supportedQueryFormats",void 0),a([s({type:Boolean,json:{write:!0}})],f.prototype,"allowGeometryUpdates",void 0),a([s({type:Number,json:{write:!0}})],f.prototype,"searchMaxRecordCount",void 0),a([s({type:Object,json:{write:!0}})],f.prototype,"serviceCapabilities",void 0),a([s({type:Number,json:{write:!0}})],f.prototype,"maxRecordCount",void 0),a([s({type:String,json:{write:!0}})],f.prototype,"description",void 0),a([s({type:String,json:{write:!0}})],f.prototype,"copyrightText",void 0),a([s({type:String,json:{write:!0}})],f.prototype,"units",void 0),a([s({type:U,json:{write:!0}})],f.prototype,"spatialReference",void 0),a([s({type:Number,json:{write:!0}})],f.prototype,"currentVersion",void 0),a([s({type:Object,json:{write:!0}})],f.prototype,"dateFieldsTimeReference",void 0),a([s({type:String,json:{write:!0}})],f.prototype,"serviceItemId",void 0),a([s({type:Boolean,json:{write:!0}})],f.prototype,"supportsDocuments",void 0),a([s({type:Boolean,json:{write:!0}})],f.prototype,"dataEditingNotSupported",void 0),a([s({type:Boolean,json:{write:!0}})],f.prototype,"schemaEditingNotSupported",void 0),a([s({type:Boolean,json:{write:!0}})],f.prototype,"supportsProvenance",void 0),f=a([G("esri.rest.knowledgeGraph.ServiceDefinition")],f);const Ne=f;let j=class extends F{constructor(r){super(r),this.dataModel=null,this.serviceDefinition=null}};a([s({type:String,json:{write:!0}})],j.prototype,"url",void 0),a([s({type:De,json:{write:!0}})],j.prototype,"dataModel",void 0),a([s({type:Ne,json:{write:!0}})],j.prototype,"serviceDefinition",void 0),j=a([G("esri.rest.knowledgeGraph.KnowledgeGraph")],j);const Ke=j,Ge="esri/rest/knowledgeGraph/wasmInterface/";let X;async function x(){const e=X;if(e)return e;const r=Qe("wasm-simd");return X=Ze(r),X}async function Ze(e){if(e){const{default:t}=await we(()=>import("./arcgis-knowledge-client-core-simd-CPgkRu-p.js"),__vite__mapDeps([0,1,2])).then(n=>n.a);return t({locateFile:n=>ve(Ge+n)})}const{default:r}=await we(()=>import("./arcgis-knowledge-client-core-Cf0K9hoN.js"),__vite__mapDeps([3,1,2])).then(t=>t.a);return r({locateFile:t=>ve(Ge+t)})}var k,Ie,ie;(function(e){e[e.OBJECT=0]="OBJECT",e[e.ENTITY=1]="ENTITY",e[e.RELATIONSHIP=2]="RELATIONSHIP",e[e.PATH=3]="PATH",e[e.ARRAY=4]="ARRAY"})(k||(k={})),function(e){e[e.view=0]="view",e[e.edit=1]="edit"}(Ie||(Ie={})),function(e){e[e.exclude=0]="exclude",e[e.include=1]="include"}(ie||(ie={}));function Le(e,r){const t=new r.ArrayValue;return t.deleteLater(),e.forEach(n=>{t.add_value(fe(n,r))}),t}function Ae(e,r){const t=new r.ObjectValue;t.deleteLater();for(const[n,o]of Object.entries(e))t.set_key_value(n,fe(o,r));return t}function he(e,r){if(e instanceof be)return rt(e,r);if(e instanceof xe)return nt(e,r);if(e instanceof ce||e instanceof ye)return tt(e,r);throw new d("knowledge-graph:unsupported-geometry","Only Point, Multipoint, Polyline, and Polygon geometry are supported by ArcGIS Knowledge",{geometry:e})}function Je(e,r){r.input_quantization_parameters={xy_resolution:e.xyResolution,x_false_origin:e.xFalseOrigin,y_false_origin:e.yFalseOrigin,z_resolution:e.zResolution,z_false_origin:e.zFalseOrigin,m_resolution:e.mResolution,m_false_origin:e.mFalseOrigin}}function Xe(e,r,t){if(!e.extent)throw new d("knowledge-graph:illegal-output-quantization","The Output quantization provided to the encoder had an illegal value as part of its extent",e.extent);if(!e.quantizeMode)throw new d("knowledge-graph:illegal-output-quantization","The Output quantization contained an illegal mode setting",e.quantizeMode);if(!e.tolerance)throw new d("knowledge-graph:illegal-output-quantization","The Output quantization contained an illegal tolerance setting",e.quantizeMode);r.output_quantization_parameters={extent:{xmax:e.extent.xmax,ymax:e.extent.ymax,xmin:e.extent.xmin,ymin:e.extent.ymin},quantize_mode:t.esriQuantizeMode[e.quantizeMode],tolerance:e.tolerance}}function et(e,r){r.provenance_behavior={value:ie[e]}}function fe(e,r){if(e==null)return"";if(typeof e!="object"||e instanceof Date)return e;if(e instanceof ue)return he(e,r);if(Array.isArray(e)){const t=new r.ArrayValue;return t.deleteLater(),e.forEach(n=>{t.add_value(fe(n,r))}),t}return Ae(e,r)}function tt(e,r){const t=new r.GeometryValue;t.deleteLater(),t.has_z=e.hasZ,t.has_m=e.hasM;const n=[],o=[];let i=[];e instanceof ce?(t.geometry_type=r.esriGeometryType.esriGeometryPolyline,i=e.paths):e instanceof ye&&(t.geometry_type=r.esriGeometryType.esriGeometryPolygon,i=e.rings);let p=0,l=0;return i.forEach(u=>{let c=0;u.forEach(y=>{c++,y.forEach(g=>{n[l]=g,l++})}),o[p]=c,p++}),t.coords=new Float64Array(n),t.lengths=new Uint32Array(o),t}function rt(e,r){const t=new r.GeometryValue;t.deleteLater(),t.geometry_type=t.geometry_type=r.esriGeometryType.esriGeometryMultipoint,t.has_z=e.hasZ,t.has_m=e.hasM;const n=[],o=[];o[0]=e.points.length;let i=0;return e.points.forEach(p=>{p.forEach(l=>{n[i]=l,i++})}),t.coords=new Float64Array(n),t.lengths=new Uint32Array(o),t}function nt(e,r){const t=new r.GeometryValue;t.deleteLater(),t.geometry_type=r.esriGeometryType.esriGeometryPoint,t.has_z=e.hasZ,t.has_m=e.hasM;const n=[],o=[];o[0]=1,n[0]=e.x,n[1]=e.y;let i=2;return e.hasZ&&(n[i]=e.z,i++),e.hasM&&(n[i]=e.m,i++),t.coords=new Float64Array(n),t.lengths=new Uint32Array(o),t}function Y(e,r){if(!e.typeName)throw new d("knowledge-graph:no-type-name","You must indicate the entity/relationship named object type to apply edits");if(e instanceof Me){const t=new r.EntityValue;t.deleteLater(),t.type_name=e.typeName;for(const[n,o]of Object.entries(e.properties))t.set_key_value(n,Re(o,r));return e.id&&t.set_id(e.id),t}if(e instanceof ke){const t=new r.RelationshipValue;t.deleteLater(),t.type_name=e.typeName;for(const[n,o]of Object.entries(e.properties))t.set_key_value(n,Re(o,r));return e.id&&t.set_id(e.id),e.originId&&e.destinationId&&t.set_related_entity_ids(e.originId,e.destinationId),t}throw new d("knowledge-graph:applyEdits-encoding-failure","Could not determine the type of a named graph object passed to the encoder")}function ot(e){return{xy_resolution:e.xyResolution,x_false_origin:e.xFalseOrigin,y_false_origin:e.yFalseOrigin,z_resolution:e.zResolution,z_false_origin:e.zFalseOrigin,m_resolution:e.mResolution,m_false_origin:e.mFalseOrigin}}function Re(e,r){return e==null?null:typeof e!="object"||e instanceof Date?e:e instanceof ue?he(e,r):null}let M=class extends C{constructor(r){super(r),this.name=null,this.supportedCategory=null,this.analyzers=[],this.searchProperties=new Map}};a([s()],M.prototype,"name",void 0),a([s()],M.prototype,"supportedCategory",void 0),a([s()],M.prototype,"analyzers",void 0),a([s()],M.prototype,"searchProperties",void 0),M=a([G("esri.rest.knowledgeGraph.SearchIndex")],M);const it=M;var V,W,K,ae,se,pe,le;(function(e){e[e.Regular=0]="Regular",e[e.Provenance=1]="Provenance",e[e.Document=2]="Document"})(V||(V={})),function(e){e[e.esriFieldTypeSmallInteger=0]="esriFieldTypeSmallInteger",e[e.esriFieldTypeInteger=1]="esriFieldTypeInteger",e[e.esriFieldTypeSingle=2]="esriFieldTypeSingle",e[e.esriFieldTypeDouble=3]="esriFieldTypeDouble",e[e.esriFieldTypeString=4]="esriFieldTypeString",e[e.esriFieldTypeDate=5]="esriFieldTypeDate",e[e.esriFieldTypeOID=6]="esriFieldTypeOID",e[e.esriFieldTypeGeometry=7]="esriFieldTypeGeometry",e[e.esriFieldTypeBlob=8]="esriFieldTypeBlob",e[e.esriFieldTypeRaster=9]="esriFieldTypeRaster",e[e.esriFieldTypeGUID=10]="esriFieldTypeGUID",e[e.esriFieldTypeGlobalID=11]="esriFieldTypeGlobalID",e[e.esriFieldTypeXML=12]="esriFieldTypeXML",e[e.esriFieldTypeBigInteger=13]="esriFieldTypeBigInteger",e[e.esriFieldTypeDateOnly=14]="esriFieldTypeDateOnly",e[e.esriFieldTypeTimeOnly=15]="esriFieldTypeTimeOnly",e[e.esriFieldTypeTimestampOffset=16]="esriFieldTypeTimestampOffset"}(W||(W={})),function(e){e[e.esriGeometryNull=0]="esriGeometryNull",e[e.esriGeometryPoint=1]="esriGeometryPoint",e[e.esriGeometryMultipoint=2]="esriGeometryMultipoint",e[e.esriGeometryPolyline=3]="esriGeometryPolyline",e[e.esriGeometryPolygon=4]="esriGeometryPolygon",e[e.esriGeometryEnvelope=5]="esriGeometryEnvelope",e[e.esriGeometryAny=6]="esriGeometryAny",e[e.esriGeometryMultiPatch=7]="esriGeometryMultiPatch"}(K||(K={})),function(e){e[e.esriMethodHintUNSPECIFIED=0]="esriMethodHintUNSPECIFIED",e[e.esriUUIDESRI=1]="esriUUIDESRI",e[e.esriUUIDRFC4122=2]="esriUUIDRFC4122"}(ae||(ae={})),function(e){e[e.esriTypeUNSPECIFIED=0]="esriTypeUNSPECIFIED",e[e.esriTypeEntity=1]="esriTypeEntity",e[e.esriTypeRelationship=2]="esriTypeRelationship",e[e.esriTypeBoth=4]="esriTypeBoth"}(se||(se={})),function(e){e[e.esriGraphPropertyUNSPECIFIED=0]="esriGraphPropertyUNSPECIFIED",e[e.esriGraphPropertyRegular=1]="esriGraphPropertyRegular",e[e.esriGraphPropertyDocumentName=2]="esriGraphPropertyDocumentName",e[e.esriGraphPropertyDocumentTitle=3]="esriGraphPropertyDocumentTitle",e[e.esriGraphPropertyDocumentUrl=4]="esriGraphPropertyDocumentUrl",e[e.esriGraphPropertyDocumentText=5]="esriGraphPropertyDocumentText",e[e.esriGraphPropertyDocumentKeywords=6]="esriGraphPropertyDocumentKeywords",e[e.esriGraphPropertyDocumentContentType=7]="esriGraphPropertyDocumentContentType",e[e.esriGraphPropertyDocumentMetadata=8]="esriGraphPropertyDocumentMetadata",e[e.esriGraphPropertyDocumentFileExtension=9]="esriGraphPropertyDocumentFileExtension",e[e.esriGraphPropertyProvenanceInstanceId=10]="esriGraphPropertyProvenanceInstanceId",e[e.esriGraphPropertyProvenanceSourceType=11]="esriGraphPropertyProvenanceSourceType",e[e.esriGraphPropertyProvenanceSourceName=12]="esriGraphPropertyProvenanceSourceName",e[e.esriGraphPropertyProvenanceSource=13]="esriGraphPropertyProvenanceSource",e[e.esriGraphPropertyProvenanceComment=14]="esriGraphPropertyProvenanceComment",e[e.esriGraphPropertyProvenanceTypeName=15]="esriGraphPropertyProvenanceTypeName",e[e.esriGraphPropertyProvenancePropertyName=16]="esriGraphPropertyProvenancePropertyName"}(pe||(pe={})),function(e){e[e.esriIdentifierInfoTypeUNSPECIFIED=0]="esriIdentifierInfoTypeUNSPECIFIED",e[e.esriIdentifierInfoTypeDatabaseNative=1]="esriIdentifierInfoTypeDatabaseNative",e[e.esriIdentifierInfoTypeUniformProperty=2]="esriIdentifierInfoTypeUniformProperty"}(le||(le={}));function at(e){var r,t,n,o,i,p,l,u,c,y,g;return e.deleteLater(),new De({timestamp:e.timestamp,spatialReference:new U(e.spatial_reference),strict:e.strict,objectIdField:e.objectid_property,globalIdField:e.globalid_property,arcgisManaged:e.arcgis_managed,identifierInfo:{identifierMappingInfo:{identifierInfoType:le[(n=(t=(r=e.identifier_info)==null?void 0:r.identifier_mapping_info)==null?void 0:t.identifier_info_type)==null?void 0:n.value],databaseNativeIdentifier:(i=(o=e.identifier_info)==null?void 0:o.identifier_mapping_info)==null?void 0:i.database_native_identifier,uniformPropertyIdentifier:{identifierPropertyName:(u=(l=(p=e.identifier_info)==null?void 0:p.identifier_mapping_info)==null?void 0:l.uniform_property_identifier)==null?void 0:u.identifier_property_name}},identifierGenerationInfo:{uuidMethodHint:ae[(g=(y=(c=e.identifier_info)==null?void 0:c.identifier_generation_info)==null?void 0:y.uuid_method_hint)==null?void 0:g.value]}},searchIndexes:ft(e.search_indexes),entityTypes:Se(e.entity_types),relationshipTypes:ht(e.relationship_types),metaEntityTypes:Se(e.meta_entity_types)})}function st(e){return e.deleteLater(),new oe(ze(e))}function pt(e){return e.deleteLater(),new Oe({name:e.name,unique:e.unique,ascending:e.ascending,description:e.description,fieldNames:ut(e.fields)})}function ze(e){return{name:e.name,alias:e.alias,role:V[e.role.value]?V[e.role.value]:null,strict:e.strict,properties:ct(e.properties),fieldIndexes:yt(e.field_indexes)}}function lt(e){return e.deleteLater(),new je({alias:e.alias,name:e.name,fieldType:W[e.field_type.value]?W[e.field_type.value]:null,geometryType:K[e.geometry_type.value]?K[e.geometry_type.value]:null,hasM:e.has_m,hasZ:e.has_z,nullable:e.nullable,editable:e.editable,required:e.required,defaultVisibility:e.default_visibility,systemMaintained:e.system_maintained,role:pe[e.role.value],defaultValue:e.default_value})}function dt(e){e.deleteLater();const r=ze(e),t=[];for(let n=0;n<e.end_points.size();n++){const o=e.end_points.get(n);t.push({originEntityType:o.origin_entity_type,destinationEntityType:o.dest_entity_type})}return e.end_points.delete(),new Fe(Object.assign({endPoints:t},r))}function Se(e){const r=[];for(let t=0;t<e.size();t++)r.push(st(e.get(t)));return e.delete(),r}function ut(e){const r=[];for(let t=0;t<e.size();t++)r.push(e.get(t));return e.delete(),r}function ct(e){const r=[];for(let t=0;t<e.size();t++)r.push(lt(e.get(t)));return e.delete(),r}function yt(e){const r=[];for(let t=0;t<e.size();t++)r.push(pt(e.get(t)));return e.delete(),r}function ht(e){const r=[];for(let t=0;t<e.size();t++)r.push(dt(e.get(t)));return e.delete(),r}function ft(e){const r=[];for(let t=0;t<e.size();t++){const n=new it,o=e.get(0);n.name=o.name,n.supportedCategory=se[o.supported_category.value];const i=o.analyzers.size();for(let p=0;p<i;p++)n.analyzers.push({name:o.analyzers.get(p).name});o.analyzers.delete();for(let p=0;p<o.search_properties.keys().size();p++){const l=o.search_properties.keys().get(p),u=o.search_properties.get(l),c=[];for(let y=0;y<u.property_names.size();y++)c.push(u.property_names.get(y));n.searchProperties.set(l,{propertyNames:c})}r.push(n)}return e.delete(),r}var I;(function(e){e[e.ESRI_GEOMETRY_NULL=0]="ESRI_GEOMETRY_NULL",e[e.ESRI_GEOMETRY_POINT=1]="ESRI_GEOMETRY_POINT",e[e.ESRI_GEOMETRY_MULTIPOINT=2]="ESRI_GEOMETRY_MULTIPOINT",e[e.ESRI_GEOMETRY_POLYLINE=3]="ESRI_GEOMETRY_POLYLINE",e[e.ESRI_GEOMETRY_POLYGON=4]="ESRI_GEOMETRY_POLYGON",e[e.ESRI_GEOMETRY_ENVELOPE=5]="ESRI_GEOMETRY_ENVELOPE",e[e.ESRI_GEOMETRY_ANY=6]="ESRI_GEOMETRY_ANY",e[e.ESRI_GEOMETRY_MULTI_PATCH=7]="ESRI_GEOMETRY_MULTI_PATCH"})(I||(I={}));function gt(e,r){const t={spatialReference:r},n=ge(e,t),o=e.lengths,i=e.coords,p=o[0];t.points=[];let l=0;for(let u=0;u<p;u++){const c=[];for(let y=0;y<n;y++)c[y]=i[l],l++;t.points.push(c)}return new be(t)}function _t(e,r){const t={spatialReference:r};let n=2;ge(e,t);const o=e.coords;return t.x=o[0],t.y=o[1],e.has_z&&(t.z=o[n],n++),e.has_m&&(t.m=o[n]),new xe(t)}function mt(e,r){return new ce(Ce(e,r))}function wt(e,r){return new ye(Ce(e,r))}function Ce(e,r){const t={spatialReference:r},n=ge(e,t),o=e.lengths,i=e.coords;let p="";if(e.geometry_type.value===I.ESRI_GEOMETRY_POLYGON)p="rings";else{if(e.geometry_type.value!==I.ESRI_GEOMETRY_POLYLINE)throw new d("KnowledgeGraph:illegal-geometry-type","Illegal Geometry type for multipath conversion");p="paths"}t[p]=[];let l=0;return o.forEach(u=>{const c=[];for(let y=0;y<u;y++){const g=[];for(let E=0;E<n;E++)g[E]=i[l],l++;c.push(g)}t[p].push(c)}),t}function ge(e,r){let t=2;return e.has_z?(r.hasZ=e.has_z,t++):r.hasZ=!1,e.has_m?(r.hasM=e.has_m,t++):r.hasM=!1,t}const H=()=>re.getLogger("esri.rest.knowledgeGraph.WasmToQueryResponseObjConstructors"),vt={decodedWasmObjToQueryResponseObj:(e,r,t)=>{if(e==null)return null;if(typeof e!="object"||"getDate"in e)return e;if("geometry_type"in e)switch(e.geometry_type.value){case null:return null;case I.ESRI_GEOMETRY_POINT:return _t(e,t);case I.ESRI_GEOMETRY_MULTIPOINT:return gt(e,t);case I.ESRI_GEOMETRY_POLYLINE:return mt(e,t);case I.ESRI_GEOMETRY_POLYGON:return wt(e,t);case I.ESRI_GEOMETRY_ENVELOPE:case I.ESRI_GEOMETRY_MULTI_PATCH:return H().warnOnce("Envelope and Multipatch are not supported on knowledge entities, but one of those geometry types was detected. Result interpreted as null"),null;case I.ESRI_GEOMETRY_NULL:case I.ESRI_GEOMETRY_ANY:default:return H().warnOnce("Unknown or blank geometry type returned - Result interpreted as null"),null}else{if(!("object_value_type"in e))return H().warnOnce("A decoded value came back of a type that is not supported. Result interpreted as null"),null;switch(e.object_value_type.value){case k.OBJECT:return Et(e,r,t);case k.ENTITY:return Ue(e,r,t);case k.RELATIONSHIP:return qe(e,r,t);case k.PATH:return Gt(e,r,t);case k.ARRAY:return Tt(e,r,t);default:return H().warnOnce("Unknown graph object type detected!  Result interpreted as null"),null}}}};function Tt(e,r,t){const n=[],o=e.count();for(let i=0;i<o;i++){const p=e.get_value_at(i);n.push(_e(p,r,t))}return n}function _e(e,r,t){return vt.decodedWasmObjToQueryResponseObj(e,r,t)}function Ue(e,r,t){const n=e.type_name,o=me(e,r,t),i=e.get_id();return new Me(Object.assign({typeName:n,id:i},o))}function me(e,r,t){const n={},o=e.key_count();for(let i=0;i<o;i++)n[e.get_key_at(i)]=_e(e.get_value_at(i),r,t);return{properties:n}}function Et(e,r,t){return new Ve(me(e,r,t))}function Gt(e,r,t){const n=e.entity_count(),o=e.relationship_count(),i=[];for(let p=0;p<n;p++)i.push(Ue(e.get_entity_at(p),r,t)),p<o&&i.push(qe(e.get_relationship_at(p),r,t));return new We({path:i})}function qe(e,r,t){const n=e.type_name,o=me(e,r,t);return new ke(Object.assign({typeName:n,id:e.get_id(),originId:e.get_origin_entity_id(),destinationId:e.get_destination_entity_id()},o))}function It(e){const r=[];for(let n=0;n<e.get_header_keys().size();n++)r.push(e.get_header_keys().get(n));const t=new U(e.get_out_sr());return new Z({headerKeys:r,outSpatialReference:t,exceededTransferLimit:e.exceeded_transfer_limit()})}let $=class extends C{constructor(r){super(r),this.hasError=null,this.error=null,this.editResults=[]}};a([s()],$.prototype,"hasError",void 0),a([s()],$.prototype,"error",void 0),a([s()],$.prototype,"editResults",void 0),$=a([G("esri.rest.knowledgeGraph.GraphApplyEditsResult")],$);const Rt=$;function St(e){const r=e.has_error(),t=new Rt({hasError:r,error:r?{errorCode:e.error.error_code,errorMessage:e.error.error_message}:null}),n=e.get_edit_results_count();for(let o=0;o<n;o++){const i=e.get_edit_results_at(o),p=e.get_edit_results_type_name_at(o),l=[],u=[],c=[],y=i.get_add_results_count(),g=i.get_update_results_count(),E=i.get_delete_results_count();for(let m=0;m<y;m++){const w=i.get_add_result_at(m);l.push({id:w.id,error:{errorCode:w.error.error_code,errorMessage:w.error.error_message}})}for(let m=0;m<g;m++){const w=i.get_update_result_at(m);u.push({id:w.id,error:{errorCode:w.error.error_code,errorMessage:w.error.error_message}})}for(let m=0;m<E;m++){const w=i.get_delete_result_at(m);c.push({id:w.id,error:{errorCode:w.error.error_code,errorMessage:w.error.error_message}})}t.editResults.push({typeName:p,adds:l,updates:u,deletes:c})}return t}const S={fetchKnowledgeGraph:async e=>{const r=new Ke({url:e}),t=[];return t.push(q(r)),t.push(Ye(r)),await Promise.all(t),r},refreshDataModel:async e=>{e.dataModel=await He(e)},refreshServiceDefinition:async e=>{var t,n;const r=(await z(e.url,{query:{f:"json"}})).data;return r.capabilities=(t=r==null?void 0:r.capabilities)==null?void 0:t.split(","),r.supportedQueryFormats=(n=r==null?void 0:r.supportedQueryFormats)==null?void 0:n.split(","),e.serviceDefinition=new Ne(r),e.serviceDefinition},executeQueryStreaming:async(e,r,t)=>{var l;const n="include",o=`${e.url}/graph/query`;await ee(e);const i=await te(o,t);if(!((l=e.serviceDefinition)!=null&&l.supportsProvenance)&&r.provenanceBehavior===n)throw new d("knowledge-graph:provenance-not-supported","The Knowledge Graph Service definition indicated that provenance is not supported");i.data.body=await Ft(r,e);const p=await B(i.data.url,i.data);if(e.dataModel){const u=await Pe(p,e.dataModel);return new Ee({resultRowsStream:u.readableStream,resultHeader:u.resultHeader})}throw new d("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model")},executeApplyEdits:async(e,r,t)=>{var i;if((i=e.serviceDefinition)!=null&&i.dataEditingNotSupported)throw new d("knowledge-graph:data-editing-not-supported","The Knowledge Graph Service definition indicated that data editing is not supported");const n=`${e.url}/graph/applyEdits`;await ee(e);const o=await te(n,t);return o.data.body=await $t(r,e),Nt(await B(o.data.url,o.data))},executeQuery:async(e,r,t)=>{var l;const n=`${e.url}/graph/query`,o=await z(n,{responseType:"array-buffer",query:{f:"pbf",openCypherQuery:r.openCypherQuery,...t==null?void 0:t.query},signal:t==null?void 0:t.signal,timeout:t==null?void 0:t.timeout}),i=(l=o.getHeader)==null?void 0:l.call(o,"content-type"),p=o.data;if(i!=null&&i.includes("application/x-protobuf")){const u=new(await x()).GraphQueryDecoder;if(u.deleteLater(),e.dataModel){const c=de(u,p,e.dataModel);return new Te({resultRows:c.resultRows,resultHeader:c.resultHeader})}throw new d("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model")}throw new d("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:i,data:o.data})},executeSearch:async(e,r,t)=>{var u;const n=r.typeCategoryFilter,o=`${e.url}/graph/search`,i=await z(o,{responseType:"array-buffer",query:{f:"pbf",searchQuery:`"${r.searchQuery}"`,typeCategoryFilter:n,...t==null?void 0:t.query},signal:t==null?void 0:t.signal,timeout:t==null?void 0:t.timeout}),p=(u=i.getHeader)==null?void 0:u.call(i,"content-type"),l=i.data;if(p!=null&&p.includes("application/x-protobuf")){const c=new(await x()).GraphQueryDecoder;if(c.deleteLater(),e.dataModel){const y=de(c,l,e.dataModel);return new Te({resultRows:y.resultRows,resultHeader:y.resultHeader})}throw new d("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model")}throw new d("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:p,data:i.data})},executeSearchStreaming:async(e,r,t)=>{const n=`${e.url}/graph/search`;await ee(e);const o=await te(n,t);o.data.body=await Dt(r);const i=await B(o.data.url,o.data);if(e.dataModel){const p=await Pe(i,e.dataModel);return new Ee({resultRowsStream:p.readableStream,resultHeader:p.resultHeader})}throw new d("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model")},_fetchWrapper:async(e,r)=>fetch(e,r)};async function Pt(e,r,t){return S.executeApplyEdits(e,r,t)}async function bt(e,r,t){return S.executeQuery(e,r,t)}async function xt(e,r,t){return S.executeQueryStreaming(e,r,t)}async function Mt(e,r,t){return S.executeSearch(e,r,t)}async function kt(e,r,t){return S.executeSearchStreaming(e,r,t)}async function Ot(e){return S.fetchKnowledgeGraph(e)}async function q(e){return S.refreshDataModel(e)}async function Ye(e){return S.refreshServiceDefinition(e)}async function B(e,r){return S._fetchWrapper(e,r)}async function ee(e){var t;((t=Be)==null?void 0:t.findCredential(e.url))||(e.dataModel?await He(e):await q(e))}function N(e,r,t){if(e.error_code!==0)throw new d(r,t,{errorCode:e.error_code,errorMessage:e.error_message})}function jt(e,r,t,n){r==null?t.set_param_key_value(e,""):typeof r!="object"||r instanceof Date?t.set_param_key_value(e,r):r instanceof ue?t.set_param_key_value(e,he(r,n)):Array.isArray(r)?t.set_param_key_value(e,Le(r,n)):t.set_param_key_value(e,Ae(r,n))}async function $t(e,r){var p,l,u,c,y,g,E,m,w;if(r.dataModel||await q(r),!r.dataModel)throw new d("knowledge-graph:data-model-undefined","Encoding could not proceed because a data model was not provided and it could not be determined from the service");const t=await x(),n=!!((p=e.options)!=null&&p.cascadeDelete),o=new t.GraphApplyEditsEncoder(t.SpatialReferenceUtil.WGS84(),(l=e.options)!=null&&l.inputQuantizationParameters?ot((u=e.options)==null?void 0:u.inputQuantizationParameters):t.InputQuantizationUtil.WGS84_lossless());o.deleteLater(),o.cascade_delete=n;try{let _;(c=e.entityAdds)==null||c.forEach(h=>{_=o.add_entity(Y(h,t)),N(_,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - an entity failed to be added to the encoder")}),(y=e.relationshipAdds)==null||y.forEach(h=>{if(!h.originId||!h.destinationId)throw new d("knowledge-graph:relationship-origin-destination-missing","When adding a new relationship, you must provide both an origin and destination id on the appropriate class property");_=o.add_relationship(Y(h,t)),N(_,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - a relationship failed to be added to the encoder")}),(g=e.entityUpdates)==null||g.forEach(h=>{if(!h.id)throw new d("knowledge-graph:entity-id-missing","When updating an entity or relationship, you must specify the id on the class level property");_=o.update_entity(Y(h,t)),N(_,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - an entity failed to be added to the encoder")}),(E=e.relationshipUpdates)==null||E.forEach(h=>{if(!h.id)throw new d("knowledge-graph:relationship-id-missing","When updating an entity or relationship, you must specify the id on the class level property");_=o.update_relationship(Y(h,t)),N(_,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - a relationship failed to be added to the encoder")}),(m=e.entityDeletes)==null||m.forEach(h=>{var D;if(!h.typeName)throw new d("knowledge-graph:no-type-name","You must indicate the entity/relationship named object type to apply edits - delete");const R=o.make_delete_helper(h.typeName,!0);R.deleteLater(),(D=h.ids)==null||D.forEach(J=>{R.delete_by_id(J)})}),(w=e.relationshipDeletes)==null||w.forEach(h=>{var D;if(!h.typeName)throw new d("knowledge-graph:no-type-name","You must indicate the entity/relationship named object type to apply edits - delete");const R=o.make_delete_helper(h.typeName,!1);(D=h.ids)==null||D.forEach(J=>{R.delete_by_id(J)})}),o.encode()}catch(_){throw new d("knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits failed",{error:_})}const i=o.get_encoding_result();return N(i.error,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits failed"),structuredClone(i.get_byte_buffer())}async function Ft(e,r){var i,p;const t=await x(),n=new t.GraphQueryRequestEncoder;if(n.deleteLater(),e.outputSpatialReference?n.output_spatial_reference={wkid:e.outputSpatialReference.wkid,latestWkid:e.outputSpatialReference.latestWkid,vcsWkid:e.outputSpatialReference.vcsWkid,latestVcsWkid:e.outputSpatialReference.latestVcsWkid,wkt:e.outputSpatialReference.wkt??""}:n.output_spatial_reference=t.SpatialReferenceUtil.WGS84(),n.open_cypher_query=e.openCypherQuery,e.bindParameters)for(const[l,u]of Object.entries(e.bindParameters))jt(l,u,n,t);if(e.bindGeometryQuantizationParameters)Je(e.bindGeometryQuantizationParameters,n);else{if(r.dataModel||await q(r),((p=(i=r.dataModel)==null?void 0:i.spatialReference)==null?void 0:p.wkid)!==4326)throw new d("knowledge-graph:SR-quantization-mismatch","If the DataModel indicates a coordinate system other than WGS84, inputQuantizationParameters must be provided to the query encoder");n.input_quantization_parameters=t.InputQuantizationUtil.WGS84_lossless()}e.outputQuantizationParameters&&Xe(e.outputQuantizationParameters,n,t),e.provenanceBehavior&&et(e.provenanceBehavior,n);try{n.encode()}catch(l){throw new d("knowledge-graph:query-encoding-failed","Attempting to encode the query failed",{error:l})}const o=n.get_encoding_result();if(o.error.error_code!==0)throw new d("knowledge-graph:query-encoding-failed","Attempting to encode the query failed",{errorCode:o.error.error_code,errorMessage:o.error.error_message});return structuredClone(o.get_byte_buffer())}async function Dt(e){var o;const r=await x(),t=new r.GraphSearchRequestEncoder;if(t.deleteLater(),t.search_query=e.searchQuery,t.type_category_filter=r.esriNamedTypeCategory[e.typeCategoryFilter],e.returnSearchContext===!0&&(t.return_search_context=e.returnSearchContext),e.start!=null&&e.start>0&&(t.start_index=e.start),e.num!=null&&(t.max_num_results=e.num),e.idsFilter!=null&&Array.isArray(e.idsFilter)&&e.idsFilter.length>0)try{t.set_ids_filter(Le(e.idsFilter,r))}catch(i){throw new d("knowledge-graph:ids-format-error","Attempting to set ids filter failed.  This is usually caused by an incorrectly formatted UUID string",{error:i})}(o=e.namedTypesFilter)==null||o.forEach(i=>{t.add_named_type_filter(i)});try{t.encode()}catch(i){throw new d("knowledge-graph:search-encoding-failed","Attempting to encode the search failed",{error:i})}const n=t.get_encoding_result();if(n.error.error_code!==0)throw new d("knowledge-graph:search-encoding-failed","Attempting to get encoding result from the query failed",{errorCode:n.error.error_code,errorMessage:n.error.error_message});return structuredClone(n.get_byte_buffer())}async function te(e,r){return z(e,{responseType:"native-request-init",method:"post",query:{f:"pbf",...r==null?void 0:r.query},body:"x",headers:{"Content-Type":"application/octet-stream"},signal:r==null?void 0:r.signal,timeout:r==null?void 0:r.timeout})}async function Nt(e){const r=e.headers.get("content-type");if(r!=null&&r.includes("application/x-protobuf")){const t=await e.arrayBuffer(),n=new(await x()).GraphApplyEditsDecoder;return n.deleteLater(),n.decode(new Uint8Array(t)),St(n)}throw new d("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:r,data:e.text()})}function de(e,r,t,n){e.push_buffer(new Uint8Array(r));const o=[];let i,p,l=0;for(;e.next_row();){i&&p||(i=n??It(e),p=i.outSpatialReference??new U({wkid:4326})),l||(l=e.get_header_keys().size());const u=new Array(l);for(let c=0;c<l;c++){const y=e.get_value(c);u[c]=_e(y,t,p)}o.push(u)}if(e.has_error())throw new d("knowledge-graph:stream-decoding-error","One or more result rows were not successfully decoded - inner row decoding",{errorCode:e.error.error_code,errorMessage:e.error.error_message});return{resultHeader:i,resultRows:o}}async function Pe(e,r){var n;const t=e.headers.get("content-type");if(e.headers.get("content-length")&&re.getLogger("esri.rest.knowledgeGraph.knowledgeGraphService").warnOnce("Found `Content-Length` header when expecting a streaming HTTP response! Please investigate whether all intermediate HTTP proxies and/or load balancers are configured such that they don't forcefully buffer the entire response before returning it to the client. A valid HTTP streaming response should use Chunked Transfer Encoding and not have a Content Length defined."),t==null?void 0:t.includes("application/x-protobuf")){const o=(n=e.body)==null?void 0:n.getReader(),i=new(await x()).GraphQueryDecoder;let p,l,u;i.deleteLater();const c=new Promise((g,E)=>{l=g,u=E});let y=!1;return{readableStream:new ReadableStream({async start(g){try{return E()}catch(m){o==null||o.releaseLock(),g.error(new d("knowledge-graph:stream-decoding-error","The server returned a valid response, but there was an error decoding the response stream",{error:m})),g.close()}function E(){return o==null?void 0:o.read().then(({done:m,value:w})=>{try{if(m){let R;if(i.has_error()?R=new d("knowledge-graph:stream-decoding-error","One or more result rows were not successfully decoded - query stream done",{errorCode:i.error.error_code,errorMessage:i.error.error_message}):y||l(new Z),o.releaseLock(),R)throw g.error(R),u(R),R;return void g.close()}const _=de(i,w,r,p),h=_.resultRows;return h.length>0&&g.enqueue(h),!p&&_.resultHeader&&(p=_.resultHeader,l(_.resultHeader),y=!0),E()}catch(_){throw re.getLogger("esri.rest.knowledgeGraph.knowledgeGraphService").error(_),u(_),new d("knowledge-graph:unexpected-server-response","Error inside streaming data return parsing",{error:_})}})}}}),resultHeader:await c}}throw new d("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:t,data:e.text()})}async function He(e){var i;const r=`${e.url}/dataModel/queryDataModel`,t=await z(r,{responseType:"array-buffer",query:{f:"pbf"}}),n=(i=t.getHeader)==null?void 0:i.call(t,"content-type"),o=t.data;if(n!=null&&n.includes("application/x-protobuf")){const p=(await x()).decode_data_model_from_protocol_buffer(new Uint8Array(o));if(!p)throw new d("knowledge-graph:data-model-decode-failure","The server responded to the data model query, but the response failed to be decoded.  This typically occurs when the Knowledge JS API (4.26 or later) is used with an unsupported backend (11.0 or earlier)");return at(p)}throw new d("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:n,data:t.data})}const Xt=Object.freeze(Object.defineProperty({__proto__:null,_fetchWrapper:B,executeApplyEdits:Pt,executeQuery:bt,executeQueryStreaming:xt,executeSearch:Mt,executeSearchStreaming:kt,fetchKnowledgeGraph:Ot,kgRestServices:S,refreshDataModel:q,refreshServiceDefinition:Ye},Symbol.toStringTag,{value:"Module"}));export{Ot as R,xt as T,Xt as k,x as r};
