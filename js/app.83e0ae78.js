(function(e){function t(t){for(var r,a,c=t[0],l=t[1],s=t[2],f=t[3]||[],d=0,v=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&v.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);p&&p(t),u.push.apply(u,f);while(v.length)v.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=l(l.s=n[0]))}return 0===i.length&&(u.forEach((function(e){if(void 0===o[e]){o[e]=null;var t=document.createElement("link");l.nc&&t.setAttribute("nonce",l.nc),t.rel="prefetch",t.as="script",t.href=c(e),document.head.appendChild(t)}})),u.length=0),e}var r={},a={app:0},o={app:0},i=[],u=[];function c(e){return l.p+"js/"+({bms:"bms","bms-player":"bms-player"}[e]||e)+"."+{bms:"d430b805","bms-player":"0befd6cd"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={bms:1,"bms-player":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({bms:"bms","bms-player":"bms-player"}[e]||e)+"."+{bms:"fa061f32","bms-player":"30a59130"}[e]+".css",o=l.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var c=i[u],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===r||s===o))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){c=f[u],s=c.getAttribute("data-href");if(s===r||s===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],d.parentNode.removeChild(d),n(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=c(e);var f=new Error;u=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/demo/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var p=f,v=function(){return i.push([0,"chunk-vendors"]),n()}();t([[],{},0,["bms"]])})({0:function(e,t,n){e.exports=n("cd49")},"01ef":function(e,t,n){},"106e":function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e["Overlay"]="overlay-layout",e["Frame"]="frame-layout",e["Main"]="main-layout",e["Load"]="load-layout",e["Empty"]="empty-layout"}(r||(r={}))},"1d10":function(e,t,n){},"2e87":function(e,t,n){"use strict";n.r(t);var r=n("01ef"),a=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=a.a},"8ab9":function(e,t,n){"use strict";var r=n("106e");n.d(t,"a",(function(){return r["a"]}))},"9d14":function(e,t,n){"use strict";var r=n("eaaa"),a=n.n(r);a.a},"9ddb":function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return p}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"loading"})},a=[],o=n("9ab4"),i=n("60a3");let u=class extends i["d"]{};u=Object(o["a"])([i["a"]],u);var c=u,l=c,s=n("2877");function f(e){var t=n("f3d4");t.__inject__&&t.__inject__(e)}var d=Object(s["a"])(l,r,a,!1,f,null,null,!0),p=d.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"error"},[e._v("Error "+e._s(e.data))])},m=[];let b=class extends i["d"]{};Object(o["a"])([Object(i["b"])()],b.prototype,"data",void 0),b=Object(o["a"])([Object(i["a"])({props:["data"]})],b);var y=b,h=y;function g(e){var t=n("2e87");t.__inject__&&t.__inject__(e)}var _=Object(s["a"])(h,v,m,!1,g,"29c49ecc",null,!0);_.exports;const O=e=>({component:e,loading:p,delay:200,timeout:3e4})},c5a7:function(e,t,n){"use strict";var r,a,o;n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o})),function(e){e["Light"]="",e["Dark"]="dark"}(r||(r={})),function(e){e["Right"]="right",e["Left"]="left"}(a||(a={})),function(e){e["None"]="",e["Chat"]="bms-chat",e["Playlist"]="bms-playlist",e["FrameArea"]="sidebar-frame"}(o||(o={}))},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"bms_app"}},[n("div",{staticClass:"controls-group"},[n("div",{staticClass:"control"},[n("label",[e._v("Skin")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.skin,expression:"skin"}],attrs:{disabled:""},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.skin=t.target.multiple?n:n[0]}}},e._l(e.skins,(function(t,r){return n("option",{key:r,domProps:{value:t.value}},[e._v(" "+e._s(t.name)+" ")])})),0)]),n("div",{staticClass:"control"},[n("label",[e._v("Type")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.layout,expression:"layout"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.layout=t.target.multiple?n:n[0]}}},e._l(e.options,(function(t,r){return n("option",{key:r,domProps:{value:t.value}},[e._v(" "+e._s(t.name)+" ")])})),0)]),n("div",{staticClass:"control"},[n("label",[e._v("Orientation")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.position=t.target.multiple?n:n[0]}}},e._l(e.positions,(function(t,r){return n("option",{key:r,domProps:{value:t.value}},[e._v(" "+e._s(t.name)+" ")])})),0)])]),n("div",{staticClass:"bms-container"},[n("bms-app",{attrs:{code:"VCcNtuiw",layout:e.layout,skin:e.skin,orient:e.position}})],1)])},o=[],i=(n("d3b7"),n("d4ec")),u=n("bee2"),c=n("262e"),l=n("2caf"),s=n("9ab4"),f=n("60a3"),d=n("9ddb"),p=n("8ab9"),v=n("c5a7"),m=function(e){Object(c["a"])(n,e);var t=Object(l["a"])(n);function n(){var e;return Object(i["a"])(this,n),e=t.apply(this,arguments),e.layout=p["a"].Empty,e.skin=v["c"].Light,e.position=v["b"].Right,e}return Object(u["a"])(n,[{key:"mounted",value:function(){this.layout=p["a"].Overlay}}]),n}(f["d"]);m=Object(s["a"])([Object(f["a"])({components:{"bms-app":function(){return Object(d["a"])(n.e("bms").then(n.bind(null,"9cb2")))}},data:function(){return{skins:[{name:"Light",value:v["c"].Light},{name:"Dark",value:v["c"].Dark}],options:[{name:"Frame",value:p["a"].Frame},{name:"Overlay",value:p["a"].Overlay}],positions:[{name:"Right",value:v["b"].Right},{name:"Left",value:v["b"].Left}]}}})],m);var b=m,y=b,h=(n("9d14"),n("2877")),g=Object(h["a"])(y,a,o,!1,null,null,null),_=g.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(_)}}).$mount("#bms_app")},eaaa:function(e,t,n){},f3d4:function(e,t,n){"use strict";n.r(t);var r=n("1d10"),a=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=a.a}});