"use strict";(self["webpackChunkmyApp"]=self["webpackChunkmyApp"]||[]).push([[753],{4753:function(n,e,t){t.r(e),t.d(e,{mdTransitionAnimation:function(){return a}});var i=t(5980),o=t(5026);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const a=(n,e)=>{const t="40px",a="0px",r="back"===e.direction,s=e.enteringEl,c=e.leavingEl,l=(0,o.g)(s),d=l.querySelector("ion-toolbar"),m=(0,i.c)();if(m.addElement(l).fill("both").beforeRemoveClass("ion-page-invisible"),r?m.duration(e.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):m.duration(e.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform",`translateY(${t})`,`translateY(${a})`).fromTo("opacity",.01,1),d){const n=(0,i.c)();n.addElement(d),m.addAnimation(n)}if(c&&r){m.duration(e.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");const n=(0,i.c)();n.addElement((0,o.g)(c)).onFinish((e=>{1===e&&n.elements.length>0&&n.elements[0].style.setProperty("display","none")})).fromTo("transform",`translateY(${a})`,`translateY(${t})`).fromTo("opacity",1,0),m.addAnimation(n)}return m}}}]);
//# sourceMappingURL=753.86cd1bfb.js.map