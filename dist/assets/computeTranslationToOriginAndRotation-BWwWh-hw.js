import{fd as P,fe as R,ff as u,fg as S,fh as s,G as N,fi as O,fj as l,fk as M,fl as T,cP as e}from"./index-xbq7LRAl.js";function i(E,o,t){const c=Math.sin(E),f=Math.cos(E),r=Math.sin(o),C=Math.cos(o),n=t;return n[0]=-c,n[4]=-r*f,n[8]=C*f,n[12]=0,n[1]=f,n[5]=-r*c,n[9]=C*c,n[13]=0,n[2]=0,n[6]=C,n[10]=r,n[14]=0,n[3]=0,n[7]=0,n[11]=0,n[15]=1,n}function h(E,o,t){return i(E,o,t),P(t,t),t}function G(E,o,t,c){if(E==null||c==null)return!1;const f=R(E,u),r=R(c,S);if(f===r&&!_(r)&&(f!==s.UNKNOWN||N(E,c)))return O(t,o),!0;if(_(r)){const C=l[f][s.LON_LAT],n=l[s.LON_LAT][r];return C!=null&&n!=null&&(C(o,0,L,0),n(L,0,A,0),i(a*L[0],a*L[1],t),t[12]=A[0],t[13]=A[1],t[14]=A[2],!0)}if(!(r!==s.WEB_MERCATOR&&r!==s.PLATE_CARREE&&r!==s.WGS84&&r!==s.CGCS2000||f!==s.WGS84&&f!==s.SPHERICAL_ECEF&&f!==s.WEB_MERCATOR&&f!==s.CGCS2000)){const C=l[f][s.LON_LAT],n=l[s.LON_LAT][r];return C!=null&&n!=null&&(C(o,0,L,0),n(L,0,A,0),f===s.SPHERICAL_ECEF?h(a*L[0],a*L[1],t):M(t),t[12]=A[0],t[13]=A[1],t[14]=A[2],!0)}return!1}function _(E){return E===s.SPHERICAL_ECEF||E===s.SPHERICAL_MARS_PCPF||E===s.SPHERICAL_MOON_PCPF}const a=T(1),L=e(),A=e();export{G as u};
