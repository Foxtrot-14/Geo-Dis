import{en as h,eo as f,U as p}from"./index-xbq7LRAl.js";import{t as d}from"./query-oKXKVoyl.js";import{a as l}from"./AttachmentInfo-B6rhCVYj.js";import"./pbfQueryUtils-Bl19FUAz.js";import"./pbf-4Ghyjea7.js";import"./OptimizedFeature-DUj7o6ET.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./queryZScale-tTxKuowc.js";function y(n){const t=n.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function k(n,t){const e={};for(const a of t){const{parentObjectId:o,parentGlobalId:s,attachmentInfos:c}=a;for(const r of c){const{id:i}=r,u=h(f(`${n.path}/${o}/attachments/${i}`)),m=l.fromJSON(r);m.set({url:u,parentObjectId:o,parentGlobalId:s}),e[o]?e[o].push(m):e[o]=[m]}}return e}function w(n,t,e){let a={query:d({...n.query,f:"json",...y(t)})};return e&&(a={...e,...a,query:{...e.query,...a.query}}),p(n.path+"/queryAttachments",a).then(o=>o.data.attachmentGroups)}async function z(n,t,e){const{objectIds:a}=t,o=[];for(const s of a)o.push(p(n.path+"/"+s+"/attachments",e));return Promise.all(o).then(s=>a.map((c,r)=>({parentObjectId:c,attachmentInfos:s[r].data.attachmentInfos})))}export{w as executeAttachmentQuery,z as fetchAttachments,k as processAttachmentQueryResult};
