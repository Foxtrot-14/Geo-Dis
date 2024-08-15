import{bZ as d,c0 as D,c1 as B,c2 as k,dp as G,c3 as M,fo as P}from"./index-xbq7LRAl.js";import{c as $,d as q}from"./conditionalSlot-A6QBtSWT.js";import{g as R,l as E,s as y,m as W}from"./dom-IXW38me3.js";import{a as F,s as I,c as U}from"./loadable-nTOxC7vm.js";import{u as _,c as j,a as Z,s as J,d as K,b as Q}from"./t9n-CZRt0mWM.js";import{c as C}from"./observers-B_LwkJeE.js";import{S as g,d as V}from"./action-group-CEodMYDu.js";import{S as X,d as Y,a as N}from"./action-menu-CpS4umHY.js";import{d as ee}from"./action-CI7wWYmk.js";import{d as te}from"./icon-ZrW-el81.js";import{d as oe}from"./loader-DGP-CujK.js";import{d as se}from"./debounce-BXUnv6U0.js";import"./guid-DP-7rFCR.js";import"./focusTrapComponent-CBmmpmvw.js";import"./openCloseComponent-R0Uj8KzZ.js";import"./component-thCpPSLC.js";import"./interactive-2Rqpbf1S.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */const ne=2,w=s=>s.reduce((e,t)=>e+t,0)/s.length,ie=s=>{const e=s.filter(o=>o.slot!==g.menuActions),t=e==null?void 0:e.length;return{actionWidth:t?w(e.map(o=>o.clientWidth||0)):0,actionHeight:t?w(e.map(o=>o.clientHeight||0)):0}},ae=({width:s,actionWidth:e,layout:t,height:o,actionHeight:i,groupCount:c})=>{const n=t==="horizontal"?s:o,a=t==="horizontal"?e:i;return Math.floor((n-c*ne)/a)},ce=({layout:s,actionCount:e,actionWidth:t,width:o,actionHeight:i,height:c,groupCount:n})=>Math.max(e-ae({width:o,actionWidth:t,layout:s,height:c,actionHeight:i,groupCount:n}),0),x=s=>Array.from(s.querySelectorAll("calcite-action")).filter(e=>e.closest("calcite-action-menu")?e.slot===X.trigger:!0),le=({actionGroups:s,expanded:e,overflowCount:t})=>{let o=t;s.reverse().forEach(i=>{let c=0;const n=x(i).reverse();n.forEach(a=>{a.slot===g.menuActions&&(a.removeAttribute("slot"),a.textEnabled=e)}),o>0&&n.some(a=>(n.filter(h=>!h.slot).length>1&&n.length>2&&!a.closest("calcite-action-menu")&&(a.textEnabled=!0,a.setAttribute("slot",g.menuActions),c++,c>1&&o--),o<1)),D(i)})},L={chevronsLeft:"chevrons-left",chevronsRight:"chevrons-right"};function re(s,e){var t;return s||((t=e.closest("calcite-shell-panel"))==null?void 0:t.position)||"start"}function m({el:s,expanded:e}){x(s).filter(t=>t.slot!==g.menuActions).forEach(t=>t.textEnabled=e),s.querySelectorAll("calcite-action-group, calcite-action-menu").forEach(t=>t.expanded=e)}const de=({tooltip:s,referenceElement:e,expanded:t,ref:o})=>(s&&(s.referenceElement=!t&&e?e:null),o&&o(e),e),he=({expanded:s,expandText:e,collapseText:t,expandLabel:o,collapseLabel:i,toggle:c,el:n,position:a,tooltip:l,ref:h,scale:r})=>{const p=R(n)==="rtl",f=s?t:e,b=s?i:o,u=[L.chevronsLeft,L.chevronsRight];p&&u.reverse();const A=re(a,n)==="end",H=A?u[1]:u[0],T=A?u[0]:u[1];return d("calcite-action",{icon:s?H:T,id:"expand-toggle",label:b,onClick:c,ref:O=>de({tooltip:l,referenceElement:O,expanded:s,ref:h}),scale:r,text:f,textEnabled:s,title:!s&&!l?f:null})};/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */const ue={actionGroupEnd:"action-group--end"},v={actionsEnd:"actions-end",bottomActions:"bottom-actions",expandTooltip:"expand-tooltip"},pe=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{pointer-events:auto;display:inline-flex;align-self:stretch;--calcite-action-bar-expanded-max-width:auto}:host([layout=vertical]){flex-direction:column}:host([layout=vertical]) .action-group--end{margin-block-start:auto}:host([layout=horizontal]){flex-direction:row}:host([layout=horizontal]) .action-group--end{margin-inline-start:auto}:host([layout=vertical][overflow-actions-disabled]){overflow-y:auto}:host([layout=horizontal][overflow-actions-disabled]){overflow-x:auto}:host([layout=vertical][expanded]){max-inline-size:var(--calcite-action-bar-expanded-max-width)}::slotted(calcite-action-group){border-block-end:1px solid var(--calcite-color-border-3)}:host([layout=horizontal]) ::slotted(calcite-action-group){border-block-end:0;border-inline-end:1px solid var(--calcite-color-border-3)}:host([layout=horizontal][expand-disabled]) ::slotted(calcite-action-group:last-of-type){border-inline-end:0}::slotted(calcite-action-group:last-child){border-block-end:0;border-inline-end:0}.action-group--end{justify-content:flex-end}:host([hidden]){display:none}[hidden]{display:none}",fe=pe,S=B(class extends k{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteActionBarToggle=G(this,"calciteActionBarToggle",6),this.mutationObserver=C("mutation",()=>{const{el:e,expanded:t}=this;m({el:e,expanded:t}),this.overflowActions()}),this.resizeObserver=C("resize",e=>this.resizeHandlerEntries(e)),this.actionMenuOpenHandler=e=>{if(e.target.menuOpen){const t=e.composedPath();Array.from(this.el.querySelectorAll("calcite-action-group")).forEach(o=>{t.includes(o)||(o.menuOpen=!1)})}},this.resizeHandlerEntries=e=>{e.forEach(this.resizeHandler)},this.resizeHandler=e=>{const{width:t,height:o}=e.contentRect;this.resize({width:t,height:o})},this.resize=se(({width:e,height:t})=>{const{el:o,expanded:i,expandDisabled:c,layout:n,overflowActionsDisabled:a}=this;if(a||n==="vertical"&&!t||n==="horizontal"&&!e)return;const l=x(o),h=c?l.length:l.length+1,r=Array.from(o.querySelectorAll("calcite-action-group"));this.setGroupLayout(r);const p=this.hasActionsEnd||this.hasBottomActions||!c?r.length+1:r.length,{actionHeight:f,actionWidth:b}=ie(l),u=ce({layout:n,actionCount:h,actionHeight:f,actionWidth:b,height:t,width:e,groupCount:p});le({actionGroups:r,expanded:i,overflowCount:u})},P.resize),this.toggleExpand=()=>{this.expanded=!this.expanded,this.calciteActionBarToggle.emit()},this.setExpandToggleRef=e=>{this.expandToggleEl=e},this.handleDefaultSlotChange=e=>{const t=E(e).filter(o=>o.matches("calcite-action-group"));this.setGroupLayout(t)},this.handleActionsEndSlotChange=e=>{this.hasActionsEnd=y(e)},this.handleBottomActionsSlotChange=e=>{this.hasBottomActions=y(e)},this.handleTooltipSlotChange=e=>{const t=E(e).filter(o=>o==null?void 0:o.matches("calcite-tooltip"));this.expandTooltip=t[0]},this.actionsEndGroupLabel=void 0,this.expandDisabled=!1,this.expanded=!1,this.layout="vertical",this.overflowActionsDisabled=!1,this.overlayPositioning="absolute",this.position=void 0,this.scale=void 0,this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.hasActionsEnd=!1,this.hasBottomActions=!1,this.expandTooltip=void 0,this.defaultMessages=void 0}expandHandler(){this.overflowActions()}expandedHandler(){const{el:e,expanded:t}=this;m({el:e,expanded:t}),this.overflowActions()}layoutHandler(){this.updateGroups()}overflowDisabledHandler(e){var t,o;if(e){(t=this.resizeObserver)==null||t.disconnect();return}(o=this.resizeObserver)==null||o.observe(this.el),this.overflowActions()}onMessagesChange(){}effectiveLocaleChange(){_(this,this.effectiveLocale)}componentDidLoad(){const{el:e,expanded:t}=this;F(this),m({el:e,expanded:t}),this.overflowActions()}connectedCallback(){var o,i;const{el:e,expanded:t}=this;j(this),Z(this),m({el:e,expanded:t}),(o=this.mutationObserver)==null||o.observe(e,{childList:!0,subtree:!0}),this.overflowActionsDisabled||(i=this.resizeObserver)==null||i.observe(e),this.overflowActions(),$(this)}async componentWillLoad(){I(this),await J(this)}disconnectedCallback(){var e,t;(e=this.mutationObserver)==null||e.disconnect(),(t=this.resizeObserver)==null||t.disconnect(),q(this),K(this),Q(this)}async overflowActions(){this.resize({width:this.el.clientWidth,height:this.el.clientHeight})}async setFocus(){await U(this),W(this.el)}updateGroups(){this.setGroupLayout(Array.from(this.el.querySelectorAll("calcite-action-group")))}setGroupLayout(e){e.forEach(t=>t.layout=this.layout)}renderBottomActionGroup(){const{expanded:e,expandDisabled:t,el:o,position:i,toggleExpand:c,scale:n,layout:a,messages:l,actionsEndGroupLabel:h,overlayPositioning:r}=this,p=t?null:d(he,{collapseLabel:l.collapseLabel,collapseText:l.collapse,el:o,expandLabel:l.expandLabel,expandText:l.expand,expanded:e,position:i,ref:this.setExpandToggleRef,scale:n,toggle:c,tooltip:this.expandTooltip});return d("calcite-action-group",{class:ue.actionGroupEnd,hidden:this.expandDisabled&&!(this.hasActionsEnd||this.hasBottomActions),label:h,layout:a,overlayPositioning:r,scale:n},d("slot",{name:v.actionsEnd,onSlotchange:this.handleActionsEndSlotChange}),d("slot",{name:v.bottomActions,onSlotchange:this.handleBottomActionsSlotChange}),d("slot",{name:v.expandTooltip,onSlotchange:this.handleTooltipSlotChange}),p)}render(){return d(M,{key:"b0627d0daa2f500a979aaacc8981814284c437ad",onCalciteActionMenuOpen:this.actionMenuOpenHandler},d("slot",{key:"b1831e21404b85f1632d47f280d0357f5897ebc7",onSlotchange:this.handleDefaultSlotChange}),this.renderBottomActionGroup())}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{expandDisabled:["expandHandler"],expanded:["expandedHandler"],layout:["layoutHandler"],overflowActionsDisabled:["overflowDisabledHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return fe}},[1,"calcite-action-bar",{actionsEndGroupLabel:[1,"actions-end-group-label"],expandDisabled:[516,"expand-disabled"],expanded:[1540],layout:[513],overflowActionsDisabled:[516,"overflow-actions-disabled"],overlayPositioning:[513,"overlay-positioning"],position:[513],scale:[513],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],hasActionsEnd:[32],hasBottomActions:[32],expandTooltip:[32],defaultMessages:[32],overflowActions:[64],setFocus:[64]},void 0,{expandDisabled:["expandHandler"],expanded:["expandedHandler"],layout:["layoutHandler"],overflowActionsDisabled:["overflowDisabledHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function z(){if(typeof customElements>"u")return;["calcite-action-bar","calcite-action","calcite-action-group","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover"].forEach(e=>{switch(e){case"calcite-action-bar":customElements.get(e)||customElements.define(e,S);break;case"calcite-action":customElements.get(e)||ee();break;case"calcite-action-group":customElements.get(e)||V();break;case"calcite-action-menu":customElements.get(e)||N();break;case"calcite-icon":customElements.get(e)||te();break;case"calcite-loader":customElements.get(e)||oe();break;case"calcite-popover":customElements.get(e)||Y();break}})}z();const Ge=S,Me=z;export{Ge as CalciteActionBar,Me as defineCustomElement};
