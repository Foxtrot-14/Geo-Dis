import{gv as g,ex as V,cP as f,cB as l,d9 as T,cI as $,d3 as X}from"./index-xbq7LRAl.js";import"./vec42-Dmy7JOK8.js";import{e as x}from"./mat3f64-q3fE-ZOt.js";import{e as b}from"./mat4f64-CSKppSlJ.js";import{e as C}from"./quatf64-Bdb9ZJJK.js";import{n as L}from"./vec4f64-CCf6w8sj.js";class r{constructor(e){this._create=e,this._items=new Array,this._itemsPtr=0}get(){return this._itemsPtr===0&&g(()=>this._reset()),this._itemsPtr>=this._items.length&&this._items.push(this._create()),this._items[this._itemsPtr++]}_reset(){const e=2*this._itemsPtr;this._items.length>e&&(this._items.length=e),this._itemsPtr=0}static createVec2f64(){return new r(V)}static createVec3f64(){return new r(f)}static createVec4f64(){return new r(L)}static createMat3f64(){return new r(x)}static createMat4f64(){return new r(b)}static createQuatf64(){return new r(C)}get test(){}}r.createVec2f64();const Z=r.createVec3f64();r.createVec4f64();r.createMat3f64();const j=r.createMat4f64(),D=r.createQuatf64();function d(t=Q){return[t[0],t[1],t[2],t[3]]}function H(t){return t}function v(t,e,i,s=d()){const I=i[0]-e[0],h=i[1]-e[1],a=i[2]-e[2],c=t[0]-e[0],w=t[1]-e[1],A=t[2]-e[2],_=h*A-a*w,P=a*c-I*A,E=I*w-h*c,p=_*_+P*P+E*E,F=Math.abs(p-1)>1e-5&&p>1e-12?1/Math.sqrt(p):1;return s[0]=_*F,s[1]=P*F,s[2]=E*F,s[3]=-(s[0]*t[0]+s[1]*t[1]+s[2]*t[2]),s}function y(t,e,i,s=0,I=Math.floor(i*(1/3)),h=Math.floor(i*(2/3))){if(i<3)return!1;e(o,s);let a=I,c=!1;for(;a<i-1&&!c;)e(n,a),a++,c=!l(o,n);if(!c)return!1;for(a=Math.max(a,h),c=!1;a<i&&!c;)e(N,a),a++,T(M,o,n),$(M,M),T(u,n,N),$(u,u),c=!l(o,N)&&!l(n,N)&&Math.abs(X(M,u))<O;return c?(v(o,n,N,t),!0):(s!==0||I!==1||h!==2)&&y(t,e,i,0,1,2)}const O=.99619469809,o=f(),n=f(),N=f(),M=f(),u=f(),Q=[0,0,1,0];var m;(function(t){t[t.NONE=0]="NONE",t[t.CLAMP=1]="CLAMP",t[t.INFINITE_MIN=4]="INFINITE_MIN",t[t.INFINITE_MAX=8]="INFINITE_MAX"})(m||(m={}));m.INFINITE_MIN|m.INFINITE_MAX;m.INFINITE_MAX;export{d as E,H as F,y as X,Z as c,j as f,D as o};
