/*! For license information please see 834.abea0555.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_project=self.webpackChunkreact_project||[]).push([[834],{834:(e,t,s)=>{s.r(t),s.d(t,{startFocusVisible:()=>r});const o="ion-focused",n=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=e=>{let t=[],s=!0;const r=e?e.shadowRoot:document,c=e||document.body,i=e=>{t.forEach((e=>e.classList.remove(o))),e.forEach((e=>e.classList.add(o))),t=e},a=()=>{s=!1,i([])},d=e=>{s=n.includes(e.key),s||i([])},u=e=>{if(s&&void 0!==e.composedPath){const t=e.composedPath().filter((e=>!!e.classList&&e.classList.contains("ion-focusable")));i(t)}},v=()=>{r.activeElement===c&&i([])};r.addEventListener("keydown",d),r.addEventListener("focusin",u),r.addEventListener("focusout",v),r.addEventListener("touchstart",a,{passive:!0}),r.addEventListener("mousedown",a);return{destroy:()=>{r.removeEventListener("keydown",d),r.removeEventListener("focusin",u),r.removeEventListener("focusout",v),r.removeEventListener("touchstart",a),r.removeEventListener("mousedown",a)},setFocus:i}}}}]);
//# sourceMappingURL=834.abea0555.chunk.js.map