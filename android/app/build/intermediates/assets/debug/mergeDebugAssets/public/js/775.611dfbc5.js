"use strict";(self["webpackChunkmyApp"]=self["webpackChunkmyApp"]||[]).push([[775],{8775:function(e,t,n){n.r(t),n.d(t,{startInputShims:function(){return A}});var o=n(8593),r=n(6587);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const i=new WeakMap,s=(e,t,n,o=0)=>{i.has(e)!==n&&(n?l(e,t,o):d(e,t))},a=e=>e===e.getRootNode().activeElement,l=(e,t,n)=>{const o=t.parentNode,r=t.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,o.appendChild(r),i.set(e,r);const s=e.ownerDocument,a="rtl"===s.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${a}px,${n}px,0) scale(0)`},d=(e,t)=>{const n=i.get(e);n&&(i.delete(e),n.remove()),e.style.pointerEvents="",t.style.transform=""},c=(e,t,n)=>{if(!n||!t)return()=>{};const o=n=>{a(t)&&s(e,t,n)},i=()=>s(e,t,!1),l=()=>o(!0),d=()=>o(!1);return(0,r.a)(n,"ionScrollStart",l),(0,r.a)(n,"ionScrollEnd",d),t.addEventListener("blur",i),()=>{(0,r.b)(n,"ionScrollStart",l),(0,r.b)(n,"ionScrollEnd",d),t.addEventListener("ionBlur",i)}},u="input, textarea, [no-blur], [contenteditable]",m=()=>{let e=!0,t=!1;const n=document,o=()=>{t=!0},i=()=>{e=!0},s=o=>{if(t)return void(t=!1);const r=n.activeElement;if(!r)return;if(r.matches(u))return;const i=o.target;i!==r&&(i.matches(u)||i.closest(u)||(e=!1,setTimeout((()=>{e||r.blur()}),50)))};return(0,r.a)(n,"ionScrollStart",o),n.addEventListener("focusin",i,!0),n.addEventListener("touchend",s,!1),()=>{(0,r.b)(n,"ionScrollStart",o,!0),n.removeEventListener("focusin",i,!0),n.removeEventListener("touchend",s,!1)}},f=.3,p=(e,t,n)=>{const o=e.closest("ion-item,[ion-item]")||e;return v(o.getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight)},v=(e,t,n,o)=>{const r=e.top,i=e.bottom,s=t.top,a=Math.min(t.bottom,o-n),l=s+15,d=.75*a,c=d-i,u=l-r,m=Math.round(c<0?-c:u>0?-u:0),p=Math.min(m,r-s),v=Math.abs(p),h=v/f,w=Math.min(400,Math.max(150,h));return{scrollAmount:p,scrollDuration:w,scrollPadding:n,inputSafeY:4-(r-l)}},h=(e,t,n,o,i)=>{let s;const l=e=>{s=(0,r.p)(e)},d=l=>{if(!s)return;const d=(0,r.p)(l);E(6,s,d)||a(t)||w(e,t,n,o,i)};return e.addEventListener("touchstart",l,{capture:!0,passive:!0}),e.addEventListener("touchend",d,!0),()=>{e.removeEventListener("touchstart",l,!0),e.removeEventListener("touchend",d,!0)}},w=async(e,t,n,i,a)=>{if(!n&&!i)return;const l=p(e,n||i,a);if(n&&Math.abs(l.scrollAmount)<4)t.focus();else if(s(e,t,!0,l.inputSafeY),t.focus(),(0,r.r)((()=>e.click())),"undefined"!==typeof window){let r;const i=async()=>{void 0!==r&&clearTimeout(r),window.removeEventListener("ionKeyboardDidShow",a),window.removeEventListener("ionKeyboardDidShow",i),n&&await(0,o.c)(n,0,l.scrollAmount,l.scrollDuration),s(e,t,!1,l.inputSafeY),t.focus()},a=()=>{window.removeEventListener("ionKeyboardDidShow",a),window.addEventListener("ionKeyboardDidShow",i)};if(n){const e=await(0,o.g)(n),s=e.scrollHeight-e.clientHeight;if(l.scrollAmount>s-e.scrollTop)return"password"===t.type?(l.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",a)):window.addEventListener("ionKeyboardDidShow",i),void(r=setTimeout(i,1e3))}i()}},E=(e,t,n)=>{if(t&&n){const o=t.x-n.x,r=t.y-n.y,i=o*o+r*r;return i>e*e}return!1},y="$ionPaddingTimer",g=e=>{const t=document,n=t=>{S(t.target,e)},o=e=>{S(e.target,0)};return t.addEventListener("focusin",n),t.addEventListener("focusout",o),()=>{t.removeEventListener("focusin",n),t.removeEventListener("focusout",o)}},S=(e,t)=>{var n,r;if("INPUT"!==e.tagName)return;if(e.parentElement&&"ION-INPUT"===e.parentElement.tagName)return;if("ION-SEARCHBAR"===(null===(r=null===(n=e.parentElement)||void 0===n?void 0:n.parentElement)||void 0===r?void 0:r.tagName))return;const i=(0,o.a)(e);if(null===i)return;const s=i[y];s&&clearTimeout(s),t>0?i.style.setProperty("--keyboard-offset",`${t}px`):i[y]=setTimeout((()=>{i.style.setProperty("--keyboard-offset","0px")}),120)},b=!0,L=!0,A=e=>{const t=document,n=e.getNumber("keyboardHeight",290),i=e.getBoolean("scrollAssist",!0),s=e.getBoolean("hideCaretOnScroll",!0),a=e.getBoolean("inputBlurring",!0),l=e.getBoolean("scrollPadding",!0),d=Array.from(t.querySelectorAll("ion-input, ion-textarea")),u=new WeakMap,f=new WeakMap,p=async e=>{await new Promise((t=>(0,r.c)(e,t)));const t=e.shadowRoot||e,a=t.querySelector("input")||t.querySelector("textarea"),l=(0,o.a)(e),d=l?null:e.closest("ion-footer");if(!a)return;if(l&&s&&!u.has(e)){const t=c(e,a,l);u.set(e,t)}const m="date"===a.type||"datetime-local"===a.type;if(!m&&(l||d)&&i&&!f.has(e)){const t=h(e,a,l,d,n);f.set(e,t)}},v=e=>{if(s){const t=u.get(e);t&&t(),u.delete(e)}if(i){const t=f.get(e);t&&t(),f.delete(e)}};a&&b&&m(),l&&L&&g(n);for(const o of d)p(o);t.addEventListener("ionInputDidLoad",(e=>{p(e.detail)})),t.addEventListener("ionInputDidUnload",(e=>{v(e.detail)}))}}}]);
//# sourceMappingURL=775.611dfbc5.js.map