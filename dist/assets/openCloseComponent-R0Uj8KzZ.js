import{dn as r}from"./index-xbq7LRAl.js";import{w as n}from"./dom-IXW38me3.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */const s=r;function i(e){return"opened"in e?e.opened:e.open}function f(e){s(()=>{e.transitionEl&&n(e.transitionEl,e.openTransitionProp,()=>{i(e)?e.onBeforeOpen():e.onBeforeClose()},()=>{i(e)?e.onOpen():e.onClose()})})}export{f as o};
