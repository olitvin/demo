(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["bms-player"],{"098c":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bms-player"},[r("video",{ref:"player",staticClass:"video-js",attrs:{controls:""}})])},i=[],a=r("9ab4"),o=r("60a3"),s=r("f0e2"),l=function(t){return"number"===typeof t&&!isNaN(t)&&t>=0&&t<1/0},c=function(t){var e=t.playlist.autoadvance_;e.timeout&&t.clearTimeout(e.timeout),e.trigger&&t.off("ended",e.trigger),e.timeout=null,e.trigger=null},u=function t(e,r){c(e),l(r)?(e.playlist.autoadvance_.delay=r,e.playlist.autoadvance_.trigger=function(){var n=function(){return t(e,r)};e.one("play",n),e.playlist.autoadvance_.timeout=e.setTimeout((function(){c(e),e.off("play",n),e.playlist.next()}),1e3*r)},e.one("ended",e.playlist.autoadvance_.trigger)):e.playlist.autoadvance_.delay=null},p=function(t){var e=t.remoteTextTracks(),r=e&&e.length||0;while(r--)t.removeRemoteTextTrack(e[r])},f=function(t,e){var r=!t.paused()||t.ended();return t.trigger("beforeplaylistitem",e.originalValue||e),e.playlistItemId_&&(t.playlist.currentPlaylistItemId_=e.playlistItemId_),t.poster(e.poster||""),t.src(e.sources),p(t),t.ready((function(){if((e.textTracks||[]).forEach(t.addRemoteTextTrack.bind(t)),t.trigger("playlistitem",e.originalValue||e),r){var n=t.play();"undefined"!==typeof n&&"function"===typeof n.then&&n.then(null,(function(t){}))}u(t,t.playlist.autoadvance_.delay)})),t},d=function(t){return!!t&&"object"===typeof t},y=function(t){var e,r=[];return t.forEach((function(t){d(t)?e=t:(e=Object(t),e.originalValue=t),r.push(e)})),r},h=function(t){var e=1;t.forEach((function(t){t.playlistItemId_=e++}))},v=function(t,e){for(var r=0;r<t.length;r++)if(t[r].playlistItemId_===e)return r;return-1},g=function(t,e){var r=t,n=e;return"object"===typeof t&&(r=t.src),"object"===typeof e&&(n=e.src),/^\/\//.test(r)&&(n=n.slice(n.indexOf("//"))),/^\/\//.test(n)&&(r=r.slice(r.indexOf("//"))),r===n},m=function(t,e){for(var r=0;r<t.length;r++){var n=t[r].sources;if(Array.isArray(n))for(var i=0;i<n.length;i++){var a=n[i];if(a&&g(a,e))return r}}return-1},I=function(t){var e=-1,r=t.length-1;while(++e<t.length){var n=e+Math.floor(Math.random()*(r-e+1)),i=t[n];t[n]=t[e],t[e]=i}return t};function _(t,e,r){void 0===r&&(r=0);var n=null,i=!1,a=t.playlist=function(e,r){if(void 0===r&&(r=0),i)throw new Error("do not call playlist() during a playlist change");if(Array.isArray(e)){var o=Array.isArray(n)?n.slice():null,s=e.slice();n=s.slice(),n.filter((function(t){return d(t)})).length!==n.length&&(n=y(n)),h(n),i=!0,t.trigger({type:"duringplaylistchange",nextIndex:r,nextPlaylist:s,previousIndex:a.currentIndex_,previousPlaylist:o||[]}),i=!1,-1!==r&&a.currentItem(r),o&&t.setTimeout((function(){t.trigger("playlistchange")}),0)}return n.map((function(t){return t.originalValue||t})).slice()};return t.on("loadstart",(function(){-1===a.currentItem()&&c(t)})),a.currentIndex_=-1,a.player_=t,a.autoadvance_={},a.repeat_=!1,a.currentPlaylistItemId_=null,a.currentItem=function(t){if(i)return a.currentIndex_;if("number"===typeof t&&a.currentIndex_!==t&&t>=0&&t<n.length)return a.currentIndex_=t,f(a.player_,n[a.currentIndex_]),a.currentIndex_;var e=a.player_.currentSrc()||"";if(a.currentPlaylistItemId_){var r=v(n,a.currentPlaylistItemId_),o=n[r];if(o&&Array.isArray(o.sources)&&m([o],e)>-1)return a.currentIndex_=r,a.currentIndex_;a.currentPlaylistItemId_=null}return a.currentIndex_=a.indexOf(e),a.currentIndex_},a.contains=function(t){return-1!==a.indexOf(t)},a.indexOf=function(t){if("string"===typeof t)return m(n,t);for(var e=Array.isArray(t)?t:t.sources,r=0;r<e.length;r++){var i=e[r];if("string"===typeof i)return m(n,i);if(i.src)return m(n,i.src)}return-1},a.currentIndex=function(){return a.currentItem()},a.lastIndex=function(){return n.length-1},a.nextIndex=function(){var t=a.currentItem();if(-1===t)return-1;var e=a.lastIndex();return a.repeat_&&t===e?0:Math.min(t+1,e)},a.previousIndex=function(){var t=a.currentItem();return-1===t?-1:a.repeat_&&0===t?a.lastIndex():Math.max(t-1,0)},a.first=function(){if(!i){var t=a.currentItem(0);if(n.length)return n[t].originalValue||n[t];a.currentIndex_=-1}},a.last=function(){if(!i){var t=a.currentItem(a.lastIndex());if(n.length)return n[t].originalValue||n[t];a.currentIndex_=-1}},a.next=function(){if(!i){var t=a.nextIndex();if(t!==a.currentIndex_){var e=a.currentItem(t);return n[e].originalValue||n[e]}}},a.previous=function(){if(!i){var t=a.previousIndex();if(t!==a.currentIndex_){var e=a.currentItem(t);return n[e].originalValue||n[e]}}},a.autoadvance=function(t){u(a.player_,t)},a.repeat=function(t){return void 0===t?a.repeat_:"boolean"===typeof t?(a.repeat_=!!t,a.repeat_):void s["a"].log.error("videojs-playlist: Invalid value for repeat",t)},a.sort=function(e){n.length&&(n.sort(e),i||t.trigger("playlistsorted"))},a.reverse=function(){n.length&&(n.reverse(),i||t.trigger("playlistsorted"))},a.shuffle=function(e){var r=void 0===e?{}:e,o=r.rest,s=0,l=n;if(o&&(s=a.currentIndex_+1,l=n.slice(s)),!(l.length<=1)){var c;if(I(l),o)(c=n).splice.apply(c,[s,l.length].concat(l));i||t.trigger("playlistsorted")}},Array.isArray(e)?a(e.slice(),r):n=[],a}var b="4.3.1",x=s["a"].registerPlugin||s["a"].plugin,C=function(t,e){_(this,t,e)};x("playlist",C),C.VERSION=b;var j=r("758e"),O=r("e087"),A=s["a"].getComponent("Button"),k=function(t){function e(e,r){var n=t.call(this,e,r)||this;return n.el().style.setProperty("display","none","important"),n.on(e,["loadstart","playlistchange","playlistsorted"],(function(){n.update()})),n.on(e,"dispose",(function(){n.dispose()})),r.type||(n.options_.type="next"),n}return Object(a["b"])(e,t),e.prototype.update=function(){var t=this.player_.playlist;t&&t.length?(this.el().style.setProperty("display","inline-block","important"),this.checkIndex()!=t.currentItem()?this.el().removeAttribute("disabled"):this.el().setAttribute("disabled","disabled")):this.el().style.setProperty("display","none","important")},e.prototype.checkIndex=function(){var t=-1,e=this.player_.playlist;if(e){switch(this.options_.type){case"prev":t=e.previousIndex();break;default:t=e.nextIndex()}return t}},e.prototype.handleClick=function(){switch(this.options_.type){case"prev":this.selectPrevItem();break;default:this.selectNextItem()}},e.prototype.selectPrevItem=function(){var t=this.player_.playlist;t&&t.previous()},e.prototype.selectNextItem=function(){var t=this.player_.playlist;t&&t.next()},e.prototype.buildCSSClass=function(){return"vjs-control vjs-playlist-button vjs-playlist-"+this.options_.type},e}(A);s["a"].registerComponent("playlist-control-button",k),j["a"](s["a"]);var $=function(t){function e(){var e=t.call(this)||this;return e.player=null,e}return Object(a["b"])(e,t),e.prototype.created=function(){O["a"].Extract(this)},e.prototype.beforeDestroy=function(){this.player&&(this.player.el_=this.$el,this.player.tech()&&this.player.tech().checker&&this.player.tech().checker.stopCheckSession(),this.player.pause(),this.player.dispose())},e.prototype.mounted=function(){this.changeCode()},e.prototype.changeCode=function(){this.player&&(this.player.pause(),this.player.dispose()),this.player=Object(s["a"])(this.$refs.player,{preload:"none",controlBar:{volumePanel:{inline:!1}}}),this.player.controlBar.addChild("playlist-control-button",{type:"next"},1),this.player.controlBar.addChild("playlist-control-button",{type:"prev"},0),this._modifyFullscreen(),this.player.boomstreamHls({disableSkin:!0}),this.poster&&this.player.poster(this.poster),this.processConfig(),this.$emit("ready",this)},e.prototype.processConfig=function(){this.config?this.player.setSourceConfig(this.config).catch((function(t){return console.log(t)})):this.code&&this.player.src(this.code)},e.prototype._modifyFullscreen=function(){this.player.el_=this.fullscreenContainer?this.fullscreenContainer:this.$el},Object(a["a"])([Object(o["b"])()],e.prototype,"code",void 0),Object(a["a"])([Object(o["b"])()],e.prototype,"config",void 0),Object(a["a"])([Object(o["b"])()],e.prototype,"poster",void 0),Object(a["a"])([Object(o["b"])()],e.prototype,"fullscreenContainer",void 0),Object(a["a"])([Object(o["e"])("code")],e.prototype,"changeCode",null),Object(a["a"])([Object(o["e"])("config")],e.prototype,"processConfig",null),e=Object(a["a"])([Object(o["a"])({name:"bms-player",components:{}})],e),e}(o["d"]),N=$,E=N,P=r("2877");function S(t){var e=r("2763");e.__inject__&&e.__inject__(t);var n=r("1efa");n.__inject__&&n.__inject__(t)}var T=Object(P["a"])(E,n,i,!1,S,"c68dcd14",null,!0);e["default"]=T.exports},"1efa":function(t,e,r){"use strict";r.r(e);var n=r("2952"),i=r.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(a);e["default"]=i.a},2763:function(t,e,r){"use strict";r.r(e);var n=r("93ec"),i=r.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(a);e["default"]=i.a},2952:function(t,e,r){},"4e82":function(t,e,r){"use strict";var n=r("23e7"),i=r("1c0b"),a=r("7b0b"),o=r("d039"),s=r("a640"),l=[],c=l.sort,u=o((function(){l.sort(void 0)})),p=o((function(){l.sort(null)})),f=s("sort"),d=u||!p||!f;n({target:"Array",proto:!0,forced:d},{sort:function(t){return void 0===t?c.call(a(this)):c.call(a(this),i(t))}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var n=r("1d80"),i=r("5899"),a="["+i+"]",o=RegExp("^"+a+a+"*"),s=RegExp(a+a+"*$"),l=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(o,"")),2&t&&(r=r.replace(s,"")),r}};t.exports={start:l(1),end:l(2),trim:l(3)}},"68c1":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"playlist"},[r("ul",{staticClass:"list"},t._l(t.listItems,(function(e,n){return r("li",{key:e.playlistItemId_,class:{active:t.currentItem==n},on:{click:function(r){return t.selectItem(e,n)},tap:function(r){return t.selectItem(e,n)}}},[r("div",{staticClass:"poster",style:{backgroundImage:e.url}},[r("div",{staticClass:"duration"},[t._v(t._s(t._f("duration")(e.duration)))])]),r("div",{staticClass:"info"},[r("div",{staticClass:"name"},[t._v(" "+t._s(e.name)+" ")]),r("div",{staticClass:"bottom"},[r("div",{staticClass:"author"},[t._v(t._s(e.author))]),r("div",{staticClass:"date"},[t._v(t._s(e.date))])])])])})),0)])},i=[],a=(r("4de4"),r("a630"),r("d81d"),r("fb6a"),r("4e82"),r("a9e3"),r("3ca3"),r("9911"),r("9ab4")),o=r("60a3"),s=(r("7db0"),r("b0c0"),function t(e,r){return r.$root.$options.name==e?r.$root:r.$parent?r.$parent.$options.name==e?r.$parent:t(e,r.$parent):null}),l=function t(e,r){if(!r.$children.length)return null;var n=r.$children.find((function(t){return t.$options.name===e}));if(!n){for(var i in r.$children){var a=t(e,r.$children[i]);if(a)return a}return null}return n},c=function(t){var e=s("bms-app",t);if(e){var r=l("bms-player",e);return r}},u=140,p=80;o["d"].filter("duration",(function(t){var e=Math.floor(t/60),r=Math.floor(t-60*e),n=e>9?e:"0"+e,i=r>9?r:"0"+r;return n+":"+i}));var f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.listItems=[],e.currentItem=-1,e}return Object(a["b"])(e,t),e.prototype.created=function(){var t=c(this);t&&(this.$player=t,this.$player.player.on("playlistchange",this.playlistChange),this.$player.player.on(["duringplaylistchange","playlistitem"],this.checkCurrentItem),this.$player.player.playlist&&this.playlistChange())},e.prototype.mounted=function(){},e.prototype.playlistChange=function(){var t=this;this.currentItem=-1;var e=this.$player.player.playlist();e&&(this.listItems=Array.from(e).slice().map((function(e){e.posters.sort((function(t,e){return t.height>e.height?1:-1}));var r=e.posters.slice().filter((function(e){return t._posterCheckSize(e)})).shift();return e.url="url("+(r?r.link:e.poster)+")",e})),this.checkCurrentItem())},e.prototype._posterCheckSize=function(t){return Number(t.width)>=u&&Number(t.height)>=p},e.prototype.selectItem=function(t,e){this.$player.player.playlist.currentItem(e),this.currentItem=e},e.prototype.checkCurrentItem=function(){return this.currentItem=this.$player.player.playlist.currentItem()},e=Object(a["a"])([Object(o["a"])({components:{}})],e),e}(o["d"]),d=f,y=d,h=(r("7f69"),r("2877")),v=Object(h["a"])(y,n,i,!1,null,"2f207c52",null);e["default"]=v.exports},7156:function(t,e,r){var n=r("861d"),i=r("d2bb");t.exports=function(t,e,r){var a,o;return i&&"function"==typeof(a=e.constructor)&&a!==r&&n(o=a.prototype)&&o!==r.prototype&&i(t,o),t}},"7db0":function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").find,a=r("44d2"),o=r("ae40"),s="find",l=!0,c=o(s);s in[]&&Array(1)[s]((function(){l=!1})),n({target:"Array",proto:!0,forced:l||!c},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a(s)},"7f69":function(t,e,r){"use strict";var n=r("b0af"),i=r.n(n);i.a},"93ec":function(t,e,r){},a9e3:function(t,e,r){"use strict";var n=r("83ab"),i=r("da84"),a=r("94ca"),o=r("6eeb"),s=r("5135"),l=r("c6b6"),c=r("7156"),u=r("c04e"),p=r("d039"),f=r("7c73"),d=r("241c").f,y=r("06cf").f,h=r("9bf2").f,v=r("58a8").trim,g="Number",m=i[g],I=m.prototype,_=l(f(I))==g,b=function(t){var e,r,n,i,a,o,s,l,c=u(t,!1);if("string"==typeof c&&c.length>2)if(c=v(c),e=c.charCodeAt(0),43===e||45===e){if(r=c.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+c}for(a=c.slice(2),o=a.length,s=0;s<o;s++)if(l=a.charCodeAt(s),l<48||l>i)return NaN;return parseInt(a,n)}return+c};if(a(g,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var x,C=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof C&&(_?p((function(){I.valueOf.call(r)})):l(r)!=g)?c(new m(b(e)),r,C):b(e)},j=n?d(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;j.length>O;O++)s(m,x=j[O])&&!s(C,x)&&h(C,x,y(m,x));C.prototype=I,I.constructor=C,o(i,g,C)}},b0af:function(t,e,r){},b0c0:function(t,e,r){var n=r("83ab"),i=r("9bf2").f,a=Function.prototype,o=a.toString,s=/^\s*function ([^ (]*)/,l="name";n&&!(l in a)&&i(a,l,{configurable:!0,get:function(){try{return o.call(this).match(s)[1]}catch(t){return""}}})},d81d:function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").map,a=r("1dde"),o=r("ae40"),s=a("map"),l=o("map");n({target:"Array",proto:!0,forced:!s||!l},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);