let l=class o{constructor(t=[],e=[],s=!1){this.lengths=t??[],this.coords=e??[],this.hasIndeterminateRingOrder=s}static fromJSON(t){return new o(t.lengths,t.coords,t.hasIndeterminateRingOrder)}static fromRect(t){const[e,s,h,r]=t,n=h-e,c=r-s;return new o([5],[e,s,n,0,0,c,-n,0,0,-c])}get isPoint(){return this.lengths.length===0}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce((t,e)=>t+e)}forEachVertex(t){let e=0;this.lengths.length||t(this.coords[0],this.coords[1]);for(let s=0;s<this.lengths.length;s++){const h=this.lengths[s];for(let r=0;r<h;r++)t(this.coords[2*(r+e)],this.coords[2*(r+e)+1]);e+=h}}deltaDecode(){const t=this.clone(),{coords:e,lengths:s}=t;let h=0;for(const r of s){for(let n=1;n<r;n++)e[2*(h+n)]+=e[2*(h+n)-2],e[2*(h+n)+1]+=e[2*(h+n)-1];h+=r}return t}clone(t){if(this.lengths.length===0)return new o([],[this.coords[0],this.coords[1]]);const e=(this.lengths.length===0?1:this.lengths.reduce((h,r)=>h+r))*2,s=this.coords.slice(0,e);return t?(t.set(s),new o(this.lengths,t,this.hasIndeterminateRingOrder)):new o(Array.from(this.lengths),Array.from(s),this.hasIndeterminateRingOrder)}};class i{constructor(t=null,e={},s,h){this.geometry=t,this.attributes=e,this.centroid=s,this.objectId=h,this.displayId=0,this.geohashX=0,this.geohashY=0}static fromJSON(t,e){const s=t.geometry?l.fromJSON(t.geometry):null,h=t.centroid?l.fromJSON(t.centroid):null,r=t.attributes[e];return new i(s,t.attributes,h,r)}weakClone(){const t=new i(this.geometry,this.attributes,this.centroid,this.objectId);return t.displayId=this.displayId,t.geohashX=this.geohashX,t.geohashY=this.geohashY,t}clone(){var s,h;const t=(s=this.geometry)==null?void 0:s.clone(),e=new i(t,{...this.attributes},(h=this.centroid)==null?void 0:h.clone(),this.objectId);return e.displayId=this.displayId,e.geohashX=this.geohashX,e.geohashY=this.geohashY,e}}function a(g){var t,e;return!!((e=(t=g.geometry)==null?void 0:t.coords)!=null&&e.length)}export{l as a,i as e,a as s};
