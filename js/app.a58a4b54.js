(function(t){function e(e){for(var r,i,s=e[0],u=e[1],c=e[2],d=0,f=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/demo/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"0033":function(t,e,n){"use strict";n.r(e);var r=n("5844"),a=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=a.a},"0141":function(t,e,n){"use strict";n("ddb0"),n("2b3d"),Object.defineProperty(e,"__esModule",{value:!0});var r=n("9ab4"),a=n("60a3"),o=n("9ddb"),i=n("8ab9"),s=n("c5a7"),u=function(t){function e(){var e=t.call(this)||this;e.selectedCode="",e.layout=i.LayoutType.Empty,e.skin=s.SkinType.Light,e.position=s.Position.Right;var n=new URL(window.location.href).searchParams,r=n.get("overrideNative"),a=n.get("nativeTracks");return window._opts={overrideNative:r,nativeTracks:a},e}return r.__extends(e,t),e.prototype.mounted=function(){this.layout=i.LayoutType.Overlay,this.selectedCode=this.$data.media[0].code},e=r.__decorate([a.Component({components:{"bms-app":function(){return o.AsyncLoadComponent(Promise.resolve().then((function(){return r.__importStar(n("9cb2"))})))}},data:function(){return{media:[{title:"Playlist: Promo boomstream",code:"nCmuI9Zb"},{title:"Live: Demo Broadcast",code:"vWktqOGl"},{title:"Single: Promo boomstream",code:"VCcNtuiw"},{title:"Single: Skillbox",code:"https://play.skillbox.ru/zxjFZZVH/config"}],skins:[{name:"Light",value:s.SkinType.Light},{name:"Dark",value:s.SkinType.Dark}],options:[{name:"Frame",value:i.LayoutType.Frame},{name:"Overlay",value:i.LayoutType.Overlay}],positions:[{name:"Right",value:s.Position.Right},{name:"Left",value:s.Position.Left}]}}})],e),e}(a.Vue);e.default=u},"01db":function(t,e,n){},"094a":function(t,e,n){"use strict";n.r(e);var r=n("29a1"),a=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=a.a},"098c":function(t,e,n){"use strict";n.r(e);var r=n("80ce"),a=n("9cb0");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("2763"),n("1efa");var i=n("2877"),s=Object(i["a"])(a["default"],r["a"],r["b"],!1,null,"c68dcd14",null);e["default"]=s.exports},"0ce1":function(t,e,n){"use strict";n.r(e);var r=n("f4b7"),a=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=a.a},1:function(t,e){},"106e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.LayoutType=void 0,function(t){t["Overlay"]="overlay-layout",t["Frame"]="frame-layout",t["Main"]="main-layout",t["Load"]="load-layout",t["Empty"]="empty-layout"}(e.LayoutType||(e.LayoutType={}))},1896:function(t,e,n){"use strict";n.r(e);var r=n("908c"),a=n("3651");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);var i=n("2877"),s=Object(i["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=s.exports},"1d10":function(t,e,n){},"1d52":function(t,e,n){"use strict";n.r(e);var r=n("f321"),a=n("aba1");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("37fb");var i=n("2877"),s=Object(i["a"])(a["default"],r["a"],r["b"],!1,null,"7bc29992",null);e["default"]=s.exports},"1efa":function(t,e,n){"use strict";var r=n("2952"),a=n.n(r);a.a},"1eff":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout main"},[t.layout&&t.layout!=t.LayoutType.Load?[t.layout==t.LayoutType.Frame?[t.orient==t.Position.Left?[n("transition",{attrs:{name:"slide"},on:{"after-leave":t.slideAfterLeave}},[t.isLeftOpen?n("div",{staticClass:"sidebar left"},[t._t("sidebar")],2):t._e()])]:t._e()]:t._e(),n("div",{staticClass:"area-main",class:t.orient,style:{"background-image":t.url(t.poster)}},[n("div",{staticClass:"overlay"},[t.layout==t.LayoutType.Overlay?[t.orient==t.Position.Left?[n("transition",{attrs:{name:"slide"},on:{"after-leave":t.slideAfterLeave}},[t.isLeftOpen?n("div",{staticClass:"sidebar left"},[t._t("sidebar")],2):t._e()])]:t._e()]:t._e(),n("div",{staticClass:"area-top"},[t.config.entity?n("div",{staticClass:"title"},[n("a",{attrs:{href:t.config.entity.link,target:"_blank"},on:{click:function(e){return t.mediaNameClick(e,t.config.entity.link)}}},[n("span",{staticClass:"name"},[t._v(t._s(t.source.name))])]),t.config.entity.author?n("span",{staticClass:"author"},[t._v(t._s(t.config.entity.author))]):t._e()]):t._e(),n("div",{staticClass:"area-controls"},[t.layout==t.LayoutType.Frame?[n("button",{on:{click:function(e){return t.selectSidebar(t.AreaTypes.FrameArea)}}},[t._v(" Чат"),"playlist"==t.config.mediaType?[t._v("/Плейлист")]:t._e()],2)]:t._e(),t.layout==t.LayoutType.Overlay?[t.sidebar!=t.AreaTypes.Chat?n("button",{key:"<button>",on:{click:function(e){return t.selectSidebar(t.AreaTypes.Chat)}}},[t._v(" Чат ")]):t._e(),"playlist"==t.config.mediaType?[t.sidebar!=t.AreaTypes.Playlist?n("button",{key:"button",on:{click:function(e){return t.selectSidebar(t.AreaTypes.Playlist)}}},[t._v(" Плейлист ")]):t._e()]:t._e()]:t._e()],2)]),t.layout==t.LayoutType.Overlay?[t.orient==t.Position.Right?[n("transition",{attrs:{name:"slide"},on:{"after-leave":t.slideAfterLeave}},[t.isRightOpen?n("div",{staticClass:"sidebar right"},[t._t("sidebar")],2):t._e()])]:t._e()]:t._e()],2),t._t("player")],2),t.layout==t.LayoutType.Frame?[t.orient==t.Position.Right?[n("transition",{attrs:{name:"slide"},on:{"after-leave":t.slideAfterLeave}},[t.isRightOpen?n("div",{staticClass:"sidebar right"},[t._t("sidebar")],2):t._e()])]:t._e()]:t._e()]:[n("div",{staticClass:"area-main",style:{"background-image":t.url(t.poster)}},[n("load-layout",[t._v("load")])],1)]],2)},a=[]},2:function(t,e){},"25f1":function(t,e,n){},2763:function(t,e,n){"use strict";var r=n("93ec"),a=n.n(r);a.a},"27fa":function(t,e,n){"use strict";var r=n("a00b"),a=n.n(r);a.a},2952:function(t,e,n){},"29a1":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("9ab4"),a=n("60a3"),o=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e=r.__decorate([a.Component({components:{}})],e),e}(a.Vue);e.default=o},"352b":function(t,e,n){},"35e5":function(t,e,n){"use strict";n.r(e);var r=n("4294"),a=n("37ce");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("f3d4");var i=n("2877"),s=Object(i["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=s.exports},3651:function(t,e,n){"use strict";n.r(e);var r=n("d3ea"),a=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=a.a},"37ce":function(t,e,n){"use strict";n.r(e);var r=n("fcae"),a=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=a.a},"37fb":function(t,e,n){"use strict";var r=n("805b"),a=n.n(r);a.a},"3cdc":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"playlist"},[n("ul",{staticClass:"list"},t._l(t.listItems,(function(e,r){return n("li",{key:e.playlistItemId_,class:{active:t.currentItem==r},on:{click:function(n){return t.selectItem(e,r)},tap:function(n){return t.selectItem(e,r)}}},[n("div",{staticClass:"poster",style:{backgroundImage:e.url}},[n("div",{staticClass:"duration"},[t._v(t._s(t._f("duration")(e.duration)))])]),n("div",{staticClass:"info"},[n("div",{staticClass:"name"},[t._v(" "+t._s(e.name)+" ")]),n("div",{staticClass:"bottom"},[n("div",{staticClass:"author"},[t._v(t._s(e.author))]),n("div",{staticClass:"date"},[t._v(t._s(e.date))])])])])})),0)])},a=[]},"3dfd":function(t,e,n){"use strict";n.r(e);var r=n("a67f"),a=n("aea9");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("9d14");var i=n("2877"),s=Object(i["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=s.exports},4294:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading"})},a=[]},"43a7":function(t,e,n){"use strict";n.r(e);var r=n("788d"),a=n("094a");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("8f3c");var i=n("2877"),s=Object(i["a"])(a["default"],r["a"],r["b"],!1,null,"37969656",null);e["default"]=s.exports},"4df0":function(t,e,n){"use strict";n("fb6a"),n("4e82"),Object.defineProperty(e,"__esModule",{value:!0});var r=n("9ab4"),a=n("60a3"),o=n("fa63"),i=140,s=80;a.Vue.filter("duration",(function(t){var e=Math.floor(t/60),n=Math.floor(t-60*e),r=e>9?e:"0"+e,a=n>9?n:"0"+n;return r+":"+a}));var u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.listItems=[],e.currentItem=-1,e}return r.__extends(e,t),e.prototype.created=function(){var t=o.findPlayerComponent(this);t&&(this.$player=t,this.$player.player.on("playlistchange",this.playlistChange),this.$player.player.on(["duringplaylistchange","playlistitem"],this.checkCurrentItem),this.$player.player.playlist&&this.playlistChange())},e.prototype.mounted=function(){},e.prototype.playlistChange=function(){var t=this;this.currentItem=-1;var e=this.$player.player.playlist();e&&(this.listItems=Array.from(e).slice().map((function(e){e.posters.sort((function(t,e){return t.height>e.height?1:-1}));var n=e.posters.slice().filter((function(e){return t._posterCheckSize(e)})).shift();return e.url="url("+(n?n.link:e.poster)+")",e})),this.checkCurrentItem())},e.prototype._posterCheckSize=function(t){return Number(t.width)>=i&&Number(t.height)>=s},e.prototype.selectItem=function(t,e){this.$player.player.playlist.currentItem(e),this.currentItem=e},e.prototype.checkCurrentItem=function(){return this.currentItem=this.$player.player.playlist.currentItem()},e=r.__decorate([a.Component({components:{}})],e),e}(a.Vue);e.default=u},"55c8":function(t,e,n){"use strict";n.r(e);var r=n("4df0"),a=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=a.a},5844:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("9ab4"),a=n("60a3"),o=r.__importDefault(n("1896")),i=n("c5a7"),s=n("9ddb"),u=function(t){function e(){return t.call(this)||this}return r.__extends(e,t),r.__decorate([a.Prop({default:i.AreaTypes.None})],e.prototype,"sidebar",void 0),r.__decorate([a.Prop({})],e.prototype,"sidebarName",void 0),e=r.__decorate([a.Component({components:{"sidebar-frame":o.default,"bms-chat":function(){return s.AsyncLoadComponent(Promise.resolve().then((function(){return r.__importStar(n("43a7"))})))},"bms-playlist":function(){return s.AsyncLoadComponent(Promise.resolve().then((function(){return r.__importStar(n("68c1"))})))}},inject:{selectSidebar:"selectSidebar"}})],e),e}(a.Vue);e.default=u},"590b":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("9ab4"),a=n("60a3"),o=r.__importDefault(n("f0e2"));n("cb60");var i=r.__importStar(n("758e")),s=n("e087");n("c44c"),i.init(o.default);var u=function(t){function e(){var e=t.call(this)||this;return e.player=null,e}return r.__extends(e,t),e.prototype.created=function(){s.ExtractShadowStyles.Extract(this)},e.prototype.beforeDestroy=function(){this.player&&(this.player.el_=this.$el,this.player.tech()&&this.player.tech().checker&&this.player.tech().checker.stopCheckSession(),this.player.pause(),this.player.dispose())},e.prototype.mounted=function(){this.changeCode()},e.prototype.changeCode=function(){this.player&&(this.player.pause(),this.player.dispose()),this.player=o.default(this.$refs.player,{preload:"none",controlBar:{volumePanel:{inline:!1}}}),this.player.controlBar.addChild("playlist-control-button",{type:"next"},1),this.player.controlBar.addChild("playlist-control-button",{type:"prev"},0),this._modifyFullscreen(),this.player.boomstreamHls({disableSkin:!0}),this.poster&&this.player.poster(this.poster),this.processConfig(),this.$emit("ready",this)},e.prototype.processConfig=function(){this.config?this.player.setSourceConfig(this.config).catch((function(t){return console.log(t)})):this.code&&this.player.src(this.code)},e.prototype._modifyFullscreen=function(){this.player.el_=this.fullscreenContainer?this.fullscreenContainer:this.$el},r.__decorate([a.Prop()],e.prototype,"code",void 0),r.__decorate([a.Prop()],e.prototype,"config",void 0),r.__decorate([a.Prop()],e.prototype,"poster",void 0),r.__decorate([a.Prop()],e.prototype,"fullscreenContainer",void 0),r.__decorate([a.Watch("code")],e.prototype,"changeCode",null),r.__decorate([a.Watch("config")],e.prototype,"processConfig",null),e=r.__decorate([a.Component({name:"bms-player",components:{}})],e),e}(a.Vue);e.default=u},"5ba5":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("9ab4"),a=n("60a3"),o=function(t){function e(){return t.call(this)||this}return r.__extends(e,t),r.__decorate([a.Prop()],e.prototype,"msg",void 0),e=r.__decorate([a.Component({props:["msg"]})],e),e}(a.Vue);e.default=o},"5e38":function(t,e,n){"use strict";var r=n("01db"),a=n.n(r);a.a},"68c1":function(t,e,n){"use strict";n.r(e);var r=n("3cdc"),a=n("55c8");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("7f69");var i=n("2877"),s=Object(i["a"])(a["default"],r["a"],r["b"],!1,null,"2f207c52",null);e["default"]=s.exports},"696d":function(t,e,n){"use strict";n.r(e);var r=n("716a"),a=n("0033");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("5e38");var i=n("2877"),s=Object(i["a"])(a["default"],r["a"],r["b"],!1,null,"2ad10908",null);e["default"]=s.exports},"6b2c":function(t,e,n){"use strict";n.r(e);var r=n("5ba5"),a=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=a.a},"716a":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},[n("div",{staticClass:"header"},[n("span",{staticClass:"title"},[t._v(t._s(t.sidebarName))]),t.sidebar?n("div",{staticClass:"controls"},[n("button",{staticClass:"more"}),n("button",{staticClass:"close",on:{click:function(e){return t.selectSidebar("")}}})]):t._e()]),n("div",{staticClass:"content"},[n(t.sidebar,{tag:"component"})],1),n("div",{staticClass:"footer"})])},a=[]},"788d":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bms-chat"},[t._v(" chat ")])},a=[]},"7f69":function(t,e,n){"use strict";var r=n("b0af"),a=n.n(r);a.a},"7f89":function(t,e,n){"use strict";n.r(e);var r=n("1eff"),a=n("0ce1");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("a66f");var i=n("2877"),s=Object(i["a"])(a["default"],r["a"],r["b"],!1,null,"357874e3",null);e["default"]=s.exports},"805b":function(t,e,n){},"80ce":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bms-player"},[n("video",{ref:"player",staticClass:"video-js",attrs:{controls:""}})])},a=[]},"8ab9":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("9ab4");r.__exportStar(n("106e"),e)},"8ecf":function(t,e,n){"use strict";n("fb6a"),n("2532"),Object.defineProperty(e,"__esModule",{value:!0});var r=n("9ab4"),a=n("60a3"),o=r.__importDefault(n("7f89")),i=n("8ab9"),s=n("9ddb"),u=n("c5a7"),c=r.__importDefault(n("696d")),l=n("e087"),d=r.__importDefault(n("e189")),f=function(t){function e(){var e=t.call(this)||this;return e.currentSource={},e.activeSidebar=u.AreaTypes.None,e.sidebarName="",e}return r.__extends(e,t),e.prototype.created=function(){this.code&&this.loadConfig(this.code),this.layout=this.getValidLayout(this.layout),this.checkPosition()},e.prototype.beforeMount=function(){this.checkPosition()},e.prototype.mounted=function(){l.ExtractShadowStyles.Extract(this),this.layout!=i.LayoutType.Empty&&(this.$data.show=!0)},e.prototype.selectSidebar=function(t){this.activeSidebar!=t?(this.activeSidebar=t,this.sidebarName=this.getSidebarName(t)):this.activeSidebar=u.AreaTypes.None},e.prototype.changeLayout=function(t,e){t!=e&&(t!=i.LayoutType.Empty&&(this.$data.show=!0),this.$data.config&&(this.$data.layoutData=this.getValidLayout(t)),this.activeSidebar=u.AreaTypes.None,this.sidebarName=this.getSidebarName(this.activeSidebar))},e.prototype.checkPosition=function(){Object.values(u.Position).includes(this.orient)||(this.orient=u.Position.Right)},e.prototype.loadConfig=function(t){this.$data.layoutData=i.LayoutType.Load,window.boomstreamConfig?this.configProcess(window.boomstreamConfig):d.default.get(d.default.makeValidAddress(t)).then(this.configProcess)},e.prototype.configProcess=function(t){this.$data.config=t,this.updatePosters(t.posters),this.$data.layoutData=this.getValidLayout(this.layout)},e.prototype.updatePosters=function(t){var e=this.$el&&this.$el.clientWidth||0,n=this.$el&&this.$el.clientHeight||0,r=Array.from(t||[]).slice();if(r.length){var a=r.filter((function(t){return t.width<e&&t.height<n})),o=r.pop();(null===a||void 0===a?void 0:a.length)&&(o=a.pop()),this.$data.poster=o.link}},e.prototype.getValidLayout=function(t){if(!Object.values(i.LayoutType).includes(t))switch(t){case"overlay":return i.LayoutType.Overlay;case"frame":return i.LayoutType.Frame;default:return i.LayoutType.Overlay}return t},e.prototype.getSidebarName=function(t){switch(t){case u.AreaTypes.Chat:return"Чат";case u.AreaTypes.Playlist:return"Плейлист"}return""},e.prototype.playerReady=function(){this.$player=this.$refs.player,this.$player&&this.$player.player.on(["ready","playlistchange","duringplaylistchange","playlistitem"],this.onChangeSource)},e.prototype.onChangeSource=function(){this.$player&&(this.currentSource=this.$player.player.currentSource())},r.__decorate([a.Prop()],e.prototype,"code",void 0),r.__decorate([a.Prop({default:i.LayoutType.Overlay,validator:function(t){return Object.values(i.LayoutType).includes(t)}})],e.prototype,"layout",void 0),r.__decorate([a.Prop()],e.prototype,"skin",void 0),r.__decorate([a.Prop({required:!1,default:u.Position.Right})],e.prototype,"orient",void 0),r.__decorate([a.Provide("$player")],e.prototype,"$player",void 0),r.__decorate([a.Provide("selectSidebar")],e.prototype,"selectSidebar",null),r.__decorate([a.Watch("layout")],e.prototype,"changeLayout",null),r.__decorate([a.Watch("orient")],e.prototype,"checkPosition",null),r.__decorate([a.Watch("code")],e.prototype,"loadConfig",null),e=r.__decorate([a.Component({name:"bms-app",components:{"app-layout":o.default,sidebar:c.default,"bms-player":function(){return s.AsyncLoadComponent(Promise.resolve().then((function(){return r.__importStar(n("098c"))})))}},data:function(){return{config:null,show:!1,layoutData:i.LayoutType.Load,poster:"",LayoutType:i.LayoutType}}})],e),e}(a.Vue);e.default=f},"8f3c":function(t,e,n){"use strict";var r=n("b408"),a=n.n(r);a.a},"908c":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" sidebar ")])},a=[]},"93ec":function(t,e,n){},"9cb0":function(t,e,n){"use strict";n.r(e);var r=n("590b"),a=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=a.a},"9cb2":function(t,e,n){"use strict";n.r(e);var r=n("a82c"),a=n("c7d0");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("d401");var i=n("2877"),s=Object(i["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=s.exports},"9d14":function(t,e,n){"use strict";var r=n("eaaa"),a=n.n(r);a.a},"9ddb":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorComponent=e.LoadingComponent=e.AsyncLoadComponent=void 0;var r=n("9ab4"),a=r.__importDefault(n("35e5"));e.LoadingComponent=a.default;var o=r.__importDefault(n("cb0a"));e.ErrorComponent=o.default,e.AsyncLoadComponent=function(t){return{component:t,loading:a.default,error:o.default,delay:200,timeout:3e4}}},a00b:function(t,e,n){},a66f:function(t,e,n){"use strict";var r=n("352b"),a=n.n(r);a.a},a67f:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"bms_app"}},[n("div",{staticClass:"controls-group"},[n("div",{staticClass:"control"},[n("label",[t._v("Media")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedCode,expression:"selectedCode"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedCode=e.target.multiple?n:n[0]}}},t._l(t.media,(function(e,r){return n("option",{key:r,domProps:{value:e.code}},[t._v(" "+t._s(e.title)+" ")])})),0)]),n("div",{staticClass:"control"},[n("label",[t._v("Skin")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.skin,expression:"skin"}],attrs:{disabled:""},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.skin=e.target.multiple?n:n[0]}}},t._l(t.skins,(function(e,r){return n("option",{key:r,domProps:{value:e.value}},[t._v(" "+t._s(e.name)+" ")])})),0)]),n("div",{staticClass:"control"},[n("label",[t._v("Type")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.layout,expression:"layout"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.layout=e.target.multiple?n:n[0]}}},t._l(t.options,(function(e,r){return n("option",{key:r,domProps:{value:e.value}},[t._v(" "+t._s(e.name)+" ")])})),0)]),n("div",{staticClass:"control"},[n("label",[t._v("Orientation")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.position,expression:"position"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.position=e.target.multiple?n:n[0]}}},t._l(t.positions,(function(e,r){return n("option",{key:r,domProps:{value:e.value}},[t._v(" "+t._s(e.name)+" ")])})),0)])]),n("div",{staticClass:"bms-container"},[n("bms-app",{attrs:{code:t.selectedCode,layout:t.layout,skin:t.skin,orient:t.position}})],1)])},a=[]},a82c:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bms",class:t.skin},[t.show?n("app-layout",{attrs:{code:t.code,config:t.config,layout:t.layoutData,orient:t.orient,sidebar:t.activeSidebar,poster:t.poster,source:t.currentSource},scopedSlots:t._u([{key:"player",fn:function(){return[n("keep-alive",[t._v(" player "),n("bms-player",{ref:"player",attrs:{code:t.code,config:t.config,poster:t.poster,fullscreenContainer:t.$el},on:{ready:t.playerReady}})],1)]},proxy:!0},{key:"sidebar",fn:function(){return[n("sidebar",{attrs:{sidebar:t.activeSidebar,sidebarName:t.sidebarName}})]},proxy:!0}],null,!1,226508753)}):t._e()],1)},a=[]},aba1:function(t,e,n){"use strict";n.r(e);var r=n("f085"),a=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=a.a},aea9:function(t,e,n){"use strict";n.r(e);var r=n("0141"),a=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=a.a},b0af:function(t,e,n){},b408:function(t,e,n){},c44c:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.PlaylistControlButton=void 0;var r=n("9ab4"),a=r.__importDefault(n("f0e2")),o=a.default.getComponent("Button"),i=function(t){function e(e,n){var r=t.call(this,e,n)||this;return r.el().style.setProperty("display","none","important"),r.on(e,["loadstart","playlistchange","playlistsorted"],(function(){r.update()})),r.on(e,"dispose",(function(){r.dispose()})),n.type||(r.options_.type="next"),r}return r.__extends(e,t),e.prototype.update=function(){var t=this.player_.playlist;t&&t.length?(this.el().style.setProperty("display","inline-block","important"),this.checkIndex()!=t.currentItem()?this.el().removeAttribute("disabled"):this.el().setAttribute("disabled","disabled")):this.el().style.setProperty("display","none","important")},e.prototype.checkIndex=function(){var t=-1,e=this.player_.playlist;if(e){switch(this.options_.type){case"prev":t=e.previousIndex();break;default:t=e.nextIndex()}return t}},e.prototype.handleClick=function(){switch(this.options_.type){case"prev":this.selectPrevItem();break;default:this.selectNextItem()}},e.prototype.selectPrevItem=function(){var t=this.player_.playlist;t&&t.previous()},e.prototype.selectNextItem=function(){var t=this.player_.playlist;t&&t.next()},e.prototype.buildCSSClass=function(){return"vjs-control vjs-playlist-button vjs-playlist-"+this.options_.type},e}(o);e.PlaylistControlButton=i,a.default.registerComponent("playlist-control-button",i)},c5a7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.AreaTypes=e.Position=e.SkinType=void 0,function(t){t["Light"]="",t["Dark"]="dark"}(e.SkinType||(e.SkinType={})),function(t){t["Right"]="right",t["Left"]="left"}(e.Position||(e.Position={})),function(t){t["None"]="",t["Chat"]="bms-chat",t["Playlist"]="bms-playlist",t["FrameArea"]="sidebar-frame"}(e.AreaTypes||(e.AreaTypes={}))},c7d0:function(t,e,n){"use strict";n.r(e);var r=n("8ecf"),a=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=a.a},ca2f:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"error"},[t._v("Error "+t._s(t.data))])},a=[]},cb0a:function(t,e,n){"use strict";n.r(e);var r=n("ca2f"),a=n("6b2c");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("27fa");var i=n("2877"),s=Object(i["a"])(a["default"],r["a"],r["b"],!1,null,"c1e0da88",null);e["default"]=s.exports},cd49:function(t,e,n){"use strict";n("e260"),n("e6cf"),n("cca6"),n("a79d"),Object.defineProperty(e,"__esModule",{value:!0});var r=n("9ab4"),a=r.__importDefault(n("2b0e")),o=r.__importDefault(n("3dfd"));a.default.config.productionTip=!1,new a.default({render:function(t){return t(o.default)}}).$mount("#bms_app")},d3ea:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("9ab4"),a=n("60a3"),o=function(t){function e(){return t.call(this)||this}return r.__extends(e,t),e=r.__decorate([a.Component({})],e),e}(a.Vue);e.default=o},d401:function(t,e,n){"use strict";var r=n("25f1"),a=n.n(r);a.a},e087:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ExtractShadowStyles=void 0;var r=function(t){var e=0;if(0==t.length)return e;for(var n=0;n<t.length;n++){var r=t.charCodeAt(n);e=(e<<5)-e+r,e&=e}return e+":"+t.length},a=function(){function t(){}return t.Extract=function(t){var e=this,n=this.getShadowRootElement(t.$parent);if(n){var a="";if(Array.from(n.styleSheets).forEach((function(t){var n=Array.from(t.cssRules).filter((function(t){return t.type==CSSRule.FONT_FACE_RULE}));n.length&&n.forEach((function(t){if(e.styles[r(t.cssText)])return!1;e.styles[r(t.cssText)]=!0,a+=t.cssText+"\n"}))})),a){var o=document.createElement("style");o.innerHTML=a,document.head.append(o)}}},t.getShadowRootElement=function(t){return t.$el&&t.$el.parentNode?this.findShadowRoot(t.$el):null},t.findShadowRoot=function(t){return t instanceof ShadowRoot?t:t.parentNode?this.findShadowRoot(t.parentNode):null},t.styles={},t}();e.ExtractShadowStyles=a},e189:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("9ab4"),a=r.__importDefault(n("bc3a")),o=r.__importDefault(n("09bd")),i=n("758e");function s(){o.default.shim(),window.boomstreamConfig?(a.default.defaults.baseURL=window.boomstreamConfig.bases.api,void 0!=window.boomstreamConfig.bases.parked&&""!=window.boomstreamConfig.bases.parked&&(a.default.defaults.baseURL=window.boomstreamConfig.bases.parked+"/api"),a.default.defaults.language=window.boomstreamConfig.language):(a.default.defaults.baseURL="//play.boomstream.com/api",a.default.defaults.language="en"),a.default.defaults.headers.common.Accept="application/json"}function u(t,e,n){var r={method:t,crossDomain:!0,url:e,headers:{"X-Language":a.default.defaults.language}};return"GET"===t||"DELETE"===t?r.params=n:r.data=n,a.default(r).then((function(t){return t.data?t.data:{code:500,message:"errors.unavailable_service"}}))}e.default={init:s,makeValidAddress:i.makeValidAddress,get:function(t,e){return u("GET",t,e)},post:function(t,e){return u("POST",t,e)},put:function(t,e){return u("PUT",t,e)},patch:function(t,e){return u("PATCH",t,e)},delete:function(t,e){return u("DELETE",t,e)}}},eaaa:function(t,e,n){},f085:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("9ab4"),a=n("60a3"),o=n("9ddb"),i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e=r.__decorate([a.Component({components:{LoadingComponent:o.LoadingComponent}})],e),e}(a.Vue);e.default=i},f321:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout loading"},[n("loading-component")],1)},a=[]},f3d4:function(t,e,n){"use strict";var r=n("1d10"),a=n.n(r);a.a},f4b7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("9ab4"),a=n("60a3"),o=r.__importDefault(n("1d52")),i=n("c5a7"),s=n("106e"),u=n("e087"),c=function(t){function e(){var e=t.call(this)||this;return e.isLeftOpen=!1,e.isRightOpen=!1,e}return r.__extends(e,t),e.prototype.created=function(){u.ExtractShadowStyles.Extract(this)},e.prototype.mounted=function(){this.checkLeftOrRight()},e.prototype.checkLeftOrRight=function(){this.sidebar?(this.isLeftOpen=this.orient==i.Position.Left,this.isRightOpen=!this.isLeftOpen):this.isLeftOpen=this.isRightOpen=!1},e.prototype.url=function(t){return"url("+t+")"},e.prototype.mediaNameClick=function(){},e.prototype.slideAfterLeave=function(){},r.__decorate([a.Prop()],e.prototype,"code",void 0),r.__decorate([a.Prop()],e.prototype,"config",void 0),r.__decorate([a.Prop({default:s.LayoutType.Overlay})],e.prototype,"layout",void 0),r.__decorate([a.Prop()],e.prototype,"orient",void 0),r.__decorate([a.Prop()],e.prototype,"sidebar",void 0),r.__decorate([a.Prop()],e.prototype,"poster",void 0),r.__decorate([a.Prop({})],e.prototype,"source",void 0),r.__decorate([a.Watch("sidebar"),a.Watch("orient")],e.prototype,"checkLeftOrRight",null),e=r.__decorate([a.Component({components:{"load-layout":o.default},inject:{selectSidebar:"selectSidebar"},data:function(){return{AreaTypes:i.AreaTypes,LayoutType:s.LayoutType,Position:i.Position}}})],e),e}(a.Vue);e.default=c},fa63:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.findPlayerComponent=void 0;var r=function t(e,n){return n.$root.$options.name==e?n.$root:n.$parent?n.$parent.$options.name==e?n.$parent:t(e,n.$parent):null},a=function t(e,n){if(!n.$children.length)return null;var r=n.$children.find((function(t){return t.$options.name===e}));if(!r){for(var a in n.$children){var o=t(e,n.$children[a]);if(o)return o}return null}return r};e.findPlayerComponent=function(t){var e=r("bms-app",t);if(e){var n=a("bms-player",e);return n}}},fcae:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("9ab4"),a=n("60a3"),o=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e=r.__decorate([a.Component],e),e}(a.Vue);e.default=o}});