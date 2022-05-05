(()=>{"use strict";var e,t=0,n=(e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)},function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)});const r=function(e){function t(t){var n=this,r="Assertion failed. See https://openlayers.org/en/v"+"6.14.1".split("-")[0]+"/doc/errors/#"+t+" for details.";return(n=e.call(this,r)||this).code=t,n.name="AssertionError",n.message=r,n}return n(t,e),t}(Error),i=function(){function e(e){this.propagationStopped,this.defaultPrevented,this.type=e,this.target=null}return e.prototype.preventDefault=function(){this.defaultPrevented=!0},e.prototype.stopPropagation=function(){this.propagationStopped=!0},e}(),s=function(){function e(){this.disposed=!1}return e.prototype.dispose=function(){this.disposed||(this.disposed=!0,this.disposeInternal())},e.prototype.disposeInternal=function(){},e}();function o(){}var a="function"==typeof Object.assign?Object.assign:function(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(e),r=1,i=arguments.length;r<i;++r){var s=arguments[r];if(null!=s)for(var o in s)s.hasOwnProperty(o)&&(n[o]=s[o])}return n};function l(e){for(var t in e)delete e[t]}"function"==typeof Object.values&&Object.values;var p=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();const h=function(e){function t(t){var n=e.call(this)||this;return n.eventTarget_=t,n.pendingRemovals_=null,n.dispatching_=null,n.listeners_=null,n}return p(t,e),t.prototype.addEventListener=function(e,t){if(e&&t){var n=this.listeners_||(this.listeners_={}),r=n[e]||(n[e]=[]);-1===r.indexOf(t)&&r.push(t)}},t.prototype.dispatchEvent=function(e){var t="string"==typeof e,n=t?e:e.type,r=this.listeners_&&this.listeners_[n];if(r){var s=t?new i(e):e;s.target||(s.target=this.eventTarget_||this);var a,l=this.dispatching_||(this.dispatching_={}),p=this.pendingRemovals_||(this.pendingRemovals_={});n in l||(l[n]=0,p[n]=0),++l[n];for(var h=0,c=r.length;h<c;++h)if(!1===(a="handleEvent"in r[h]?r[h].handleEvent(s):r[h].call(this,s))||s.propagationStopped){a=!1;break}if(0==--l[n]){var u=p[n];for(delete p[n];u--;)this.removeEventListener(n,o);delete l[n]}return a}},t.prototype.disposeInternal=function(){this.listeners_&&l(this.listeners_)},t.prototype.getListeners=function(e){return this.listeners_&&this.listeners_[e]||void 0},t.prototype.hasListener=function(e){return!!this.listeners_&&(e?e in this.listeners_:Object.keys(this.listeners_).length>0)},t.prototype.removeEventListener=function(e,t){var n=this.listeners_&&this.listeners_[e];if(n){var r=n.indexOf(t);-1!==r&&(this.pendingRemovals_&&e in this.pendingRemovals_?(n[r]=o,++this.pendingRemovals_[e]):(n.splice(r,1),0===n.length&&delete this.listeners_[e]))}},t}(s);function c(e,t,n,r,i){if(r&&r!==e&&(n=n.bind(r)),i){var s=n;n=function(){e.removeEventListener(t,n),s.apply(this,arguments)}}var o={target:e,type:t,listener:n};return e.addEventListener(t,n),o}function u(e,t,n,r){return c(e,t,n,r,!0)}function d(e){e&&e.target&&(e.target.removeEventListener(e.type,e.listener),l(e))}var _=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),f=function(e){function t(){var t=e.call(this)||this;return t.on=t.onInternal,t.once=t.onceInternal,t.un=t.unInternal,t.revision_=0,t}return _(t,e),t.prototype.changed=function(){++this.revision_,this.dispatchEvent("change")},t.prototype.getRevision=function(){return this.revision_},t.prototype.onInternal=function(e,t){if(Array.isArray(e)){for(var n=e.length,r=new Array(n),i=0;i<n;++i)r[i]=c(this,e[i],t);return r}return c(this,e,t)},t.prototype.onceInternal=function(e,t){var n;if(Array.isArray(e)){var r=e.length;n=new Array(r);for(var i=0;i<r;++i)n[i]=u(this,e[i],t)}else n=u(this,e,t);return t.ol_key=n,n},t.prototype.unInternal=function(e,t){var n=t.ol_key;if(n)!function(e){if(Array.isArray(e))for(var t=0,n=e.length;t<n;++t)d(e[t]);else d(e)}(n);else if(Array.isArray(e))for(var r=0,i=e.length;r<i;++r)this.removeEventListener(e[r],t);else this.removeEventListener(e,t)},t}(h);f.prototype.on,f.prototype.once,f.prototype.un;const v=f;var g=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),y=function(e){function t(t,n,r){var i=e.call(this,t)||this;return i.key=n,i.oldValue=r,i}return g(t,e),t}(i);const m=function(e){function n(n){var r,i=e.call(this)||this;return i.on,i.once,i.un,(r=i).ol_uid||(r.ol_uid=String(++t)),i.values_=null,void 0!==n&&i.setProperties(n),i}return g(n,e),n.prototype.get=function(e){var t;return this.values_&&this.values_.hasOwnProperty(e)&&(t=this.values_[e]),t},n.prototype.getKeys=function(){return this.values_&&Object.keys(this.values_)||[]},n.prototype.getProperties=function(){return this.values_&&a({},this.values_)||{}},n.prototype.hasProperties=function(){return!!this.values_},n.prototype.notify=function(e,t){var n;n="change:".concat(e),this.hasListener(n)&&this.dispatchEvent(new y(n,e,t)),n="propertychange",this.hasListener(n)&&this.dispatchEvent(new y(n,e,t))},n.prototype.addChangeListener=function(e,t){this.addEventListener("change:".concat(e),t)},n.prototype.removeChangeListener=function(e,t){this.removeEventListener("change:".concat(e),t)},n.prototype.set=function(e,t,n){var r=this.values_||(this.values_={});if(n)r[e]=t;else{var i=r[e];r[e]=t,i!==t&&this.notify(e,i)}},n.prototype.setProperties=function(e,t){for(var n in e)this.set(n,e[n],t)},n.prototype.applyProperties=function(e){e.values_&&a(this.values_||(this.values_={}),e.values_)},n.prototype.unset=function(e,t){if(this.values_&&e in this.values_){var n=this.values_[e];delete this.values_[e],function(e){var t;for(t in e)return!1;return!t}(this.values_)&&(this.values_=null),t||this.notify(e,n)}},n}(v),w="remove";var b=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),E="length",P=function(e){function t(t,n,r){var i=e.call(this,t)||this;return i.element=n,i.index=r,i}return b(t,e),t}(i);const O=function(e){function t(t,n){var r=e.call(this)||this;r.on,r.once,r.un;var i=n||{};if(r.unique_=!!i.unique,r.array_=t||[],r.unique_)for(var s=0,o=r.array_.length;s<o;++s)r.assertUnique_(r.array_[s],s);return r.updateLength_(),r}return b(t,e),t.prototype.clear=function(){for(;this.getLength()>0;)this.pop()},t.prototype.extend=function(e){for(var t=0,n=e.length;t<n;++t)this.push(e[t]);return this},t.prototype.forEach=function(e){for(var t=this.array_,n=0,r=t.length;n<r;++n)e(t[n],n,t)},t.prototype.getArray=function(){return this.array_},t.prototype.item=function(e){return this.array_[e]},t.prototype.getLength=function(){return this.get(E)},t.prototype.insertAt=function(e,t){this.unique_&&this.assertUnique_(t),this.array_.splice(e,0,t),this.updateLength_(),this.dispatchEvent(new P("add",t,e))},t.prototype.pop=function(){return this.removeAt(this.getLength()-1)},t.prototype.push=function(e){this.unique_&&this.assertUnique_(e);var t=this.getLength();return this.insertAt(t,e),this.getLength()},t.prototype.remove=function(e){for(var t=this.array_,n=0,r=t.length;n<r;++n)if(t[n]===e)return this.removeAt(n)},t.prototype.removeAt=function(e){var t=this.array_[e];return this.array_.splice(e,1),this.updateLength_(),this.dispatchEvent(new P(w,t,e)),t},t.prototype.setAt=function(e,t){var n=this.getLength();if(e<n){this.unique_&&this.assertUnique_(t,e);var r=this.array_[e];this.array_[e]=t,this.dispatchEvent(new P(w,r,e)),this.dispatchEvent(new P("add",t,e))}else{for(var i=n;i<e;++i)this.insertAt(i,void 0);this.insertAt(e,t)}},t.prototype.updateLength_=function(){this.set(E,this.array_.length)},t.prototype.assertUnique_=function(e,t){for(var n=0,i=this.array_.length;n<i;++n)if(this.array_[n]===e&&n!==t)throw new r(58)},t}(m);function A(e){return e&&e.parentNode?e.parentNode.removeChild(e):null}var I=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();const C=function(e){function t(t){var n=e.call(this)||this,r=t.element;return!r||t.target||r.style.pointerEvents||(r.style.pointerEvents="auto"),n.element=r||null,n.target_=null,n.map_=null,n.listenerKeys=[],t.render&&(n.render=t.render),t.target&&n.setTarget(t.target),n}return I(t,e),t.prototype.disposeInternal=function(){A(this.element),e.prototype.disposeInternal.call(this)},t.prototype.getMap=function(){return this.map_},t.prototype.setMap=function(e){this.map_&&A(this.element);for(var t=0,n=this.listenerKeys.length;t<n;++t)d(this.listenerKeys[t]);this.listenerKeys.length=0,this.map_=e,e&&((this.target_?this.target_:e.getOverlayContainerStopEvent()).appendChild(this.element),this.render!==o&&this.listenerKeys.push(c(e,"postrender",this.render,this)),e.render())},t.prototype.render=function(e){},t.prototype.setTarget=function(e){this.target_="string"==typeof e?document.getElementById(e):e},t}(m);new RegExp(["^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)","(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)","(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00 ))?)","(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?","(?:small|large)|medium|smaller|larger|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))","(?:\\s*\\/\\s*(normal|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])?))","?\\s*([-,\\\"\\'\\sa-z]+?)\\s*$"].join(""),"i");const L=(e,t,n)=>{const r=document.createElement(e);return Object.entries(t||{}).forEach((([e,t])=>r.setAttribute(e,t))),n&&n(r),r},T=class extends m{constructor({sidePanel:e,paneId:t,paneUniqId:n,name:r,icon:i,weight:s}){super({name:r,icon:i,weight:s}),this.sidePanel_=e,this.paneId_=t,this.paneUniqId_=n,this.element_=L("div",{id:`ol-side-panel-pane-${this.paneUniqId_}`,role:"tabpanel",class:"ol-side-panel-pane",tabindex:"0","aria-labelledby":`ol-side-panel-tab-${this.paneUniqId_}`}),this.headerElement_=L("h1",{class:"ol-side-panel-header"}),this.element_.appendChild(this.headerElement_),this.headerElementText_=document.createElement("span"),this.headerElementText_.innerHTML=this.get("name"),this.headerElement_.appendChild(this.headerElementText_),this.headerElementCloser_=L("span",{class:"ol-side-panel-close"}),this.headerElementCloser_.innerHTML="«",this.headerElement_.appendChild(this.headerElementCloser_),this.headerElementCloser_.addEventListener("click",(e=>{e.preventDefault(),this.set("active",!1)})),this.on("change:name",(()=>{this.headerElementText_.innerHTML=this.get("name")})),this.widgets=new O,this.widgets.on("add",(e=>this.element_.appendChild(e.element.element_))),this.widgets.on("remove",(e=>this.element_.removeChild(e.element.element_))),this.on("change:active",(()=>{this.get("active")?-1===this.element_.className.search(/\bactive\b/)&&(this.element_.className+=" active"):this.element_.className=this.element_.className.replace(/\s*\bactive\b/g,"")}))}remove(){this.sidePanel_.removePane_(this),this.sidePanel_=void 0}addWidgetElement(e){const t=new class{constructor({pane:e,element:t}){this.pane_=e,this.element_=t}remove(){this.pane_.removeWidget_(this),this.pane_=void 0}}({pane:this,element:e});return this.widgets.push(t),t}removeWidget_(e){this.widgets.remove(e)}};class j{constructor({pane:e}){this.pane_=e,this.element_=L("button",{id:`ol-side-panel-tab-${this.pane_.paneUniqId_}`,role:"tab","aria-controls":`ol-side-panel-pane-${this.pane_.paneUniqId_}`}),this.updateName_(),this.updateIcon_(),this.updateWeight_(),this.pane_.on("change:name",(()=>this.updateName_())),this.pane_.on("change:icon",(()=>this.updateIcon_())),this.pane_.on("change:weight",(()=>this.updateWeight_())),this.pane_.on("change:active",(()=>{const e=this.pane_.get("active");e?-1===this.element_.className.search(/\bactive\b/)&&(this.element_.className+=" active"):this.element_.className=this.element_.className.replace(/\s*\bactive\b/g,""),this.element_.setAttribute("aria-selected",e?"true":"false")})),this.element_.addEventListener("click",(e=>{e.preventDefault(),this.pane_.set("active",!this.pane_.get("active")),this.element_.blur()}))}static fromPane(e){const t=new j({pane:e});return e.tabRef_=t,t}updateName_(){const e=this.pane_.get("name");this.element_.setAttribute("aria-label",`Tab for map side pane: '${e}'`)}updateIcon_(){this.element_.innerHTML=this.pane_.get("icon")}updateWeight_(){this.element_.style.order=this.pane_.get("weight")}}const x=j;window.olSidePanel=window.olSidePanel||{},window.olSidePanel.SidePanel=class extends C{constructor(){super({element:document.createElement("div"),activePane:null});const{element:e}=this;e.className="ol-side-panel ol-unselectable ol-control",window.nextOlSidePanelPaneUniqId=window.nextOlSidePanelPaneUniqId||0,this.panes=new O,e.appendChild(L("div",{class:"ol-side-panel-tabs",role:"tablist"},(e=>{this.panes.on("add",(t=>{const n=t.element;e.appendChild(x.fromPane(n).element_),n.on("change:active",(()=>{n.get("active")||n!==this.get("activePane")?n.get("active")&&this.updateActivePane_(n):this.updateActivePane_(null)}))})),this.panes.on("remove",(t=>{e.removeChild(t.element.tabRef_.element_)})),e.appendChild(L("div",{class:"ol-side-panel-tabs-separator"}))}))),e.appendChild(L("div",{class:"ol-side-panel-content"},(e=>{this.panes.on("add",(t=>e.appendChild(t.element.element_))),this.panes.on("remove",(t=>{e.removeChild(t.element.element_),t.element===this.get("activePane")&&this.updateActivePane_(null)}))}))),this.on("change:activePane",(()=>{this.get("activePane")?this.getMap().getTargetElement().className=this.getMap().getTargetElement().className.replace(/\bol-side-panel-collapsed\b/g,""):-1===this.getMap().getTargetElement().className.search(/\bol-side-panel-collapsed\b/)&&(this.getMap().getTargetElement().className+=" ol-side-panel-collapsed")}))}definePane({paneId:e,name:t,icon:n,weight:r}){const i=window.nextOlSidePanelPaneUniqId++,s=new T({paneId:e,paneUniqId:i,name:t,icon:n,weight:r});return this.panes.push(s),s}getPaneById(e){return this.panes.getArray().find((t=>t.paneId_===e))}removePaneById(e){this.removePane_(this.getPaneById(e))}removePane_(e){this.panes.remove(e)}addWidgetElement(e,t){return this.getPane(e).addWidgetElement(t)}updateActivePane_(e){this.set("activePane",e),this.panes.getArray().filter((t=>t!==e)).forEach((e=>e.set("active",!1)))}setMap(e){const t=this.getMap();if(e===t)return;const n=e=>{e&&e.className.replace(/\bmap-with-ol-side-panel\b/g,"")},r=e=>{e&&(e.className+=" map-with-ol-side-panel ol-side-panel-collapsed")};if(t&&(n(t.getTargetElement()),this.onMapTargetChange&&(t.un("change:target",this.onMapTargetChange.listener),this.onMapTargetChange=null)),super.setMap(e),e){r(e.getTargetElement());const t=t=>{n(t.oldValue),r(e.getTargetElement())};this.onMapTargetChange=e.getInteractions().on("change:target",t)}}}})();