(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31c8f279"],{"0ccb":function(e,t,i){var a=i("50c4"),o=i("1148"),s=i("1d80"),n=Math.ceil,l=function(e){return function(t,i,l){var r,u,c=String(s(t)),p=c.length,d=void 0===l?" ":String(l),b=a(i);return b<=p||""==d?c:(r=b-p,u=o.call(d,n(r/d.length)),u.length>r&&(u=u.slice(0,r)),e?c+u:u+c)}};e.exports={start:l(!1),end:l(!0)}},"12aa":function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));i("4de4"),i("7db0"),i("4160"),i("a630"),i("3ca3"),i("159b");var a=i("9ab4"),o=i("1b40"),s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.audioList=[],t.subtitlesList=[],t}return Object(a["d"])(t,e),Object.defineProperty(t.prototype,"audioTrack",{get:function(){var e,t;return null!==(t=null===(e=this.audioList.find((function(e){return e.enabled})))||void 0===e?void 0:e.id)&&void 0!==t?t:"none"},set:function(e){this.audioList.forEach((function(t){t.enabled=t.id===e}))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"choosedAudio",{get:function(){var e=this;return this.audioList.find((function(t){return t.id===e.audioTrack}))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"subtitle",{get:function(){var e,t;return null!==(t=null===(e=this.subtitlesList.find((function(e){return"showing"===e.mode})))||void 0===e?void 0:e.id)&&void 0!==t?t:"none"},set:function(e){this.subtitlesList.forEach((function(t){t.mode=t.id===e?"showing":"hidden"}))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"choosedSubtitles",{get:function(){var e=this;return this.subtitlesList.find((function(t){return t.id===e.subtitle}))},enumerable:!1,configurable:!0}),t.prototype.mixinPlayerVideoLanguageInit=function(){this.player&&(this.subtitlesList=Array.from(this.player.textTracks()).filter((function(e){return"subtitles"===e.kind})))},t.prototype.mounted=function(){this.mixinPlayerVideoLanguageInit()},Object(a["c"])([Object(o["j"])("player")],t.prototype,"mixinPlayerVideoLanguageInit",null),t=Object(a["c"])([o["a"]],t),t}(o["i"])},"333d":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"bm-video-player__footer",class:{hide:!e.showHUD}},[i("div",{staticClass:"bm-video-player__footer-mobile-wrapper"},[i("div",[e.isShowWidget?e._e():i("span",[e._v(e._s(e.showProgress)+" / "+e._s(e.showDuration))]),e.isShowWidget?i("span",{staticClass:"live-viewers",class:{active:e.liveStatus}},[e._v(e._s(e.$t("player.live"))+" / "+e._s(e.$tc("player_counter.viewer",e.liveViewers)))]):e._e()]),i("div",[i("button",{staticClass:"bm-video-player__footer-button",on:{click:e.handleFullscreen}},[e.isFullscreen?i("btnfullscreenexit"):i("btnfullscreen")],1)])]),i("bms-player-progress",{ref:"progress"}),i("div",{staticClass:"bm-video-player__footer-wrapper"},[i("div",{staticClass:"bm-video-player__footer-left"},[e.isPlaylisted?i("button",{staticClass:"bm-video-player__footer-button",attrs:{disabled:!e.isPlaylistHavePrev},on:{click:e.playPrev}},[i("btnprev")],1):e._e(),i("button",{staticClass:"bm-video-player__btn-play bm-video-player__footer-button",on:{click:e.handlePlayBtn}},[e.isPlaying?i("btnpause",{staticStyle:{"margin-left":"0"}}):i("btnplay")],1),e.isPlaylisted?i("button",{staticClass:"bm-video-player__footer-button bm-video-player__footer-button",attrs:{disabled:!e.isPlaylistHaveNext},on:{click:e.playNext}},[i("btnnext")],1):e._e(),i("div",{staticClass:"bm-video-player__btn-container"},[i("button",{staticClass:"bm-video-player__btn-volume bm-video-player__footer-button",on:{click:function(t){return e.showPopup("volume")}}},[e.volumeValue>0?i("btnvolume"):e._e(),0===e.volumeValue?i("icon-mute"):e._e()],1),e.isShowVolume?i("div",{staticClass:"bm-video-player__progress-volume bm-video-player__popup"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.volume,expression:"volume"}],staticClass:"range-slide",style:{background:"linear-gradient(to right, #6296DB 0%, #6296DB "+e.volume+"%, #B8BFCB "+e.volume+"%, #B8BFCB 100%)"},attrs:{type:"range",min:"1",max:"100",step:"1"},domProps:{value:e.volume},on:{__r:function(t){e.volume=t.target.value}}})]):e._e()]),i("div",[e.isShowWidget?e._e():i("span",[e._v(e._s(e.showProgress)+" / "+e._s(e.showDuration))]),e.isShowWidget?i("span",{staticClass:"live-viewers",class:{active:e.liveStatus}},[e._v(e._s(e.$t("player.live"))+" / "+e._s(e.$tc("player_counter.viewer",e.liveViewers)))]):e._e()])]),i("div",{staticClass:"bm-video-player__footer-right"},[e.qualityList.length?i("div",{staticClass:"bm-video-player__btn-container bm-video-player__resolution"},[i("button",{staticClass:"bm-video-player__footer-button",on:{click:function(t){return e.showPopup("resolution")}}},[i("span",[e._v(e._s(e.selectedQualityString))])]),e.isShowResolution?i("div",{staticClass:"bm-video-player__resolution-list bm-video-player__radio-btn-list bm-video-player__popup"},[i("h4",[e._v(e._s(e.$t("buttons.quality")))]),i("label",[e._v(" "+e._s(e.$t("labels.auto"))+" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedQuality,expression:"selectedQuality"}],attrs:{type:"radio",name:"resolution"},domProps:{value:-1,checked:e._q(e.selectedQuality,-1)},on:{change:function(t){e.selectedQuality=-1}}}),i("span",{staticClass:"custom-radio"})]),e._l(e.qualityList,(function(t){return i("label",{key:t.id},[i("span",[e._v(e._s(t.quality)+"p")]),i("span",{staticClass:"quality"},[e._v(e._s(e.getQualityString(t.quality)))]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedQuality,expression:"selectedQuality"}],attrs:{type:"radio",name:"resolution"},domProps:{value:t.id,checked:e._q(e.selectedQuality,t.id)},on:{change:function(i){e.selectedQuality=t.id}}}),i("span",{staticClass:"custom-radio"})])}))],2):e._e()]):e._e(),e.config.isLive?e._e():i("div",{staticClass:"bm-video-player__btn-container bm-video-player__speed"},[i("button",{staticClass:"bm-video-player__footer-button",on:{click:function(t){return e.showPopup("speed")}}},[i("span",[e._v(e._s(e.playbackRate.toFixed(2)))])]),e.isShowSpeedVideo?i("div",{staticClass:"bm-video-player__speed-list bm-video-player__radio-btn-list bm-video-player__popup"},[i("h4",[e._v(e._s(e.$t("labels.speed")))]),i("label",[e._v(" 2.0 "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.playbackRate,expression:"playbackRate"}],attrs:{type:"radio",name:"speed"},domProps:{value:2,checked:e._q(e.playbackRate,2)},on:{change:function(t){e.playbackRate=2}}}),i("span",{staticClass:"custom-radio"})]),i("label",[e._v(" 1.5 "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.playbackRate,expression:"playbackRate"}],attrs:{type:"radio",name:"speed"},domProps:{value:1.5,checked:e._q(e.playbackRate,1.5)},on:{change:function(t){e.playbackRate=1.5}}}),i("span",{staticClass:"custom-radio"})]),i("label",[e._v(" 1.25 "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.playbackRate,expression:"playbackRate"}],attrs:{type:"radio",name:"speed"},domProps:{value:1.25,checked:e._q(e.playbackRate,1.25)},on:{change:function(t){e.playbackRate=1.25}}}),i("span",{staticClass:"custom-radio"})]),i("label",[e._v(" 1.0 "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.playbackRate,expression:"playbackRate"}],attrs:{type:"radio",name:"speed"},domProps:{value:1,checked:e._q(e.playbackRate,1)},on:{change:function(t){e.playbackRate=1}}}),i("span",{staticClass:"custom-radio"})]),i("label",[e._v(" 0.5 "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.playbackRate,expression:"playbackRate"}],attrs:{type:"radio",name:"speed"},domProps:{value:.5,checked:e._q(e.playbackRate,.5)},on:{change:function(t){e.playbackRate=.5}}}),i("span",{staticClass:"custom-radio"})])]):e._e()]),e.isShowConfigMenuButton?i("div",{staticClass:"bm-video-player__btn-container bm-video-player__settings",class:{"show-triangle":e.isShowSettings}},[i("button",{staticClass:"bm-video-player__footer-button",on:{click:function(t){return e.showPopup("settings")}}},[i("btnsettings")],1),e.isShowSettings?i("div",{staticClass:"bm-video-player__settings-block bm-video-player__popup",class:[{"subtitle-choice":e.isShowSubtitlesChoice},{"audio-track-choice":e.isShowAudioTrackChoice}]},[i("div",{staticClass:"subtitle-choice--hidden"},[i("h4",[e._v(e._s(e.$t("labels.settings")))]),e.isPlaylisted?i("div",{staticClass:"bm-video-player__settings-item"},[i("span",[e._v(e._s(e.$t("labels.autoplay")))]),i("label",{staticClass:"switch"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.autoplay,expression:"autoplay"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.autoplay)?e._i(e.autoplay,null)>-1:e.autoplay},on:{change:function(t){var i=e.autoplay,a=t.target,o=!!a.checked;if(Array.isArray(i)){var s=null,n=e._i(i,s);a.checked?n<0&&(e.autoplay=i.concat([s])):n>-1&&(e.autoplay=i.slice(0,n).concat(i.slice(n+1)))}else e.autoplay=o}}}),i("span",{staticClass:"slider round"})])]):e._e(),e.subtitlesList.length?i("div",{staticClass:"bm-video-player__settings-item"},[i("span",[e._v(e._s(e.$t("labels.subtitles")))]),i("button",{on:{click:function(t){t.stopPropagation(),e.isShowSubtitlesChoice=!0}}},[e._v(" "+e._s(e.choosedSubtitles?e.choosedSubtitles.language.toLocaleUpperCase():e.$t("labels.off"))+" ")])]):e._e(),e.audioList.length>1?i("div",{staticClass:"bm-video-player__settings-item"},[i("span",[e._v(e._s(e.$t("labels.audio_track")))]),i("button",{on:{click:function(t){t.stopPropagation(),e.isShowAudioTrackChoice=!0}}},[e._v(" "+e._s(e.choosedAudio?e.choosedAudio.label:e.$t("labels.off"))+" ")])]):e._e()]),i("div",{staticClass:"subtitle-choice--show"},[i("h4",[e._v(e._s(e.$t("labels.subtitles")))]),i("div",{staticClass:"bm-video-player__settings-item"},[i("button",{on:{click:function(t){return t.stopPropagation(),e.subtitlesChoice("none")}}},[e._v(" "+e._s(e.$t("labels.off"))+" "),i("span")])]),e._l(e.subtitlesList,(function(t){return i("div",{key:t.id,staticClass:"bm-video-player__settings-item"},[i("button",{on:{click:function(i){return i.stopPropagation(),e.subtitlesChoice(t.id)}}},[e._v(" "+e._s(t.label)+" "),i("span",[e._v(e._s(t.language.toLocaleUpperCase()))])])])}))],2),i("div",{staticClass:"audio-track-choice--show"},[i("h4",[e._v(e._s(e.$t("labels.audio_track")))]),e._l(e.audioList,(function(t){return i("div",{key:t.id,staticClass:"bm-video-player__settings-item"},[i("button",{on:{click:function(t){return t.stopPropagation(),e.showAudioTrackChoice(!1)}}},[e._v(" "+e._s(t.label)+" "),i("span",[e._v(e._s(t.language.toLocaleUpperCase()))])])])}))],2)]):e._e()]):e._e(),i("button",{staticClass:"bm-video-player__footer-button",on:{click:e.handleFullscreen}},[e.isFullscreen?i("btnfullscreenexit"):i("btnfullscreen")],1)])])],1)},o=[],s=(i("45fc"),i("d3b7"),i("9ab4")),n=i("1b40"),l=i("8582"),r=i("e07b"),u=i("e257"),c=i("ad57"),p=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"black","fill-opacity":"0.7",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M10.336 3.35321L5.44242 8.30734H2.00649C1.72883 8.30734 1.48589 8.41055 1.27765 8.61697C1.09255 8.80046 1 9.01835 1 9.27064V14.672C1 14.9472 1.09255 15.1766 1.27765 15.3601C1.48589 15.5436 1.72883 15.6353 2.00649 15.6353H5.51183L10.3707 20.555C10.6252 20.8073 10.9145 20.8647 11.2384 20.7271C11.5855 20.5894 11.759 20.3372 11.759 19.9702V3.93807C11.759 3.5711 11.5855 3.31881 11.2384 3.18119C10.9145 3.04358 10.6137 3.10092 10.336 3.35321ZM12.8696 9.75229C13.0547 9.86697 13.1935 9.94725 13.2861 9.99312C13.3786 10.039 13.4712 10.1078 13.5637 10.1995C13.8414 10.383 14.0149 10.578 14.0843 10.7844C14.1769 10.9679 14.2463 11.1284 14.2926 11.2661C14.3157 11.3807 14.3504 11.5872 14.3967 11.8853C14.4429 12.1606 14.3851 12.4931 14.2231 12.883C14.1537 13.0206 14.0612 13.1812 13.9455 13.3647C13.8298 13.5482 13.6447 13.7317 13.3902 13.9151C13.2976 13.961 13.2167 13.9954 13.1472 14.0183C13.0778 14.0413 12.9737 14.0986 12.8349 14.1904C12.7655 14.2133 12.6961 14.2706 12.6266 14.3624C12.5572 14.4312 12.511 14.5344 12.4878 14.672C12.4647 14.8096 12.4762 14.9358 12.5225 15.0505C12.5919 15.1651 12.6266 15.2339 12.6266 15.2569C12.7192 15.3945 12.8233 15.4862 12.939 15.5321C13.0547 15.578 13.1357 15.6009 13.1819 15.6009C13.5521 15.6927 13.9455 15.555 14.362 15.1881C14.8016 14.7982 15.1371 14.3968 15.3684 13.9839C15.461 13.8463 15.5883 13.5711 15.7502 13.1583C15.9353 12.7454 15.9932 12.2408 15.9238 11.6445C15.8775 10.9794 15.7039 10.4404 15.4032 10.0275C15.1024 9.61468 14.8594 9.31651 14.6743 9.13303C14.6743 9.13303 14.5471 9.02982 14.2926 8.82339C14.038 8.59404 13.7257 8.44495 13.3555 8.37615C13.3092 8.35321 13.2514 8.34174 13.1819 8.34174C13.1125 8.31881 13.0316 8.33028 12.939 8.37615C12.777 8.42202 12.6614 8.51376 12.5919 8.65138C12.5225 8.78899 12.4878 8.86927 12.4878 8.8922C12.4647 8.91514 12.4415 8.97248 12.4184 9.06422C12.3953 9.15596 12.4068 9.25917 12.4531 9.37385C12.4994 9.41972 12.5457 9.47706 12.5919 9.54587C12.6614 9.61468 12.7539 9.68349 12.8696 9.75229ZM14.2231 6.48394C14.362 6.57569 14.4777 6.6445 14.5702 6.69037C14.6859 6.73624 14.8363 6.80505 15.0214 6.89679C15.1371 6.94266 15.2412 7 15.3337 7.06881C15.4263 7.13761 15.5535 7.22936 15.7155 7.34404C16.0394 7.59633 16.294 7.84862 16.4791 8.10092C16.6873 8.33028 16.8145 8.47936 16.8608 8.54817C16.9534 8.68578 17.0922 8.92661 17.2773 9.27064C17.4624 9.59174 17.6244 9.99312 17.7632 10.4748C17.8557 10.8876 17.902 11.2661 17.902 11.6101C17.9252 11.9541 17.9252 12.2408 17.902 12.4702C17.8557 12.9289 17.7748 13.3303 17.6591 13.6743C17.5434 14.0183 17.4277 14.3165 17.312 14.5688C17.0344 15.1422 16.722 15.5894 16.3749 15.9106C16.051 16.2317 15.8543 16.4266 15.7849 16.4954C15.5073 16.7248 15.1602 16.9312 14.7437 17.1147C14.3504 17.2982 14.1422 17.4014 14.119 17.4243C14.0496 17.4702 13.9918 17.5275 13.9455 17.5963C13.9223 17.6422 13.9108 17.6766 13.9108 17.6995C13.8876 17.7683 13.8761 17.8372 13.8761 17.906C13.8992 17.9748 13.9108 18.0321 13.9108 18.078C13.9108 18.1239 13.9108 18.1812 13.9108 18.25C13.9339 18.3188 13.9686 18.3876 14.0149 18.4564C14.038 18.4794 14.0727 18.5252 14.119 18.594C14.1653 18.6399 14.2347 18.6858 14.3273 18.7317C14.3735 18.7546 14.4429 18.7775 14.5355 18.8005C14.6512 18.8005 14.8016 18.7775 14.9867 18.7317C15.1486 18.7087 15.299 18.6628 15.4379 18.594C15.5767 18.5252 15.7502 18.4106 15.9585 18.25C16.213 18.0894 16.4212 17.9404 16.5832 17.8028C16.7683 17.6651 16.8955 17.5619 16.9649 17.4931C17.0112 17.4472 17.1153 17.344 17.2773 17.1835C17.4624 17.0229 17.6359 16.8509 17.7979 16.6674C18.2838 16.117 18.6308 15.578 18.8391 15.0505C19.0473 14.5229 19.1746 14.1674 19.2209 13.9839C19.3828 13.3876 19.4754 12.8716 19.4985 12.4358C19.5216 12 19.5332 11.7018 19.5332 11.5413C19.5101 11.3119 19.4638 10.9794 19.3944 10.5436C19.325 10.0849 19.163 9.56881 18.9085 8.99541C18.5846 8.30734 18.2259 7.75688 17.8326 7.34404C17.4624 6.90826 17.1616 6.58716 16.9302 6.38073C16.8145 6.28899 16.6526 6.16284 16.4443 6.00229C16.2361 5.84174 16.0163 5.70413 15.7849 5.58945C15.7387 5.54358 15.5767 5.45183 15.299 5.31422C15.0214 5.17661 14.8131 5.1078 14.6743 5.1078C14.628 5.1078 14.5471 5.11927 14.4314 5.1422C14.3388 5.1422 14.2347 5.18807 14.119 5.27982C14.0727 5.32569 14.0033 5.41743 13.9108 5.55505C13.8414 5.66972 13.8298 5.83028 13.8761 6.0367C13.8992 6.12844 13.9455 6.22018 14.0149 6.31193C14.0843 6.38073 14.1537 6.43807 14.2231 6.48394ZM15.6114 3.38761C15.889 3.54817 16.1204 3.68578 16.3055 3.80046C16.4906 3.8922 16.6757 3.98394 16.8608 4.07569C17.0459 4.16743 17.2195 4.27064 17.3814 4.38532C17.5434 4.5 17.7516 4.67202 18.0061 4.90138C18.3995 5.24541 18.7234 5.55505 18.9779 5.83028C19.2324 6.1055 19.3828 6.27752 19.4291 6.34633C19.5448 6.46101 19.7299 6.73624 19.9844 7.17202C20.2621 7.58486 20.5281 8.11239 20.7826 8.75459C20.8521 8.96101 20.933 9.24771 21.0256 9.61468C21.1413 9.95872 21.2223 10.3601 21.2685 10.8188C21.3379 11.3922 21.3611 11.9197 21.3379 12.4014C21.3148 12.8601 21.2801 13.2271 21.2338 13.5023C21.1413 14.1216 21.014 14.6491 20.8521 15.0849C20.6901 15.5206 20.5628 15.8303 20.4703 16.0138C20.4009 16.1514 20.2389 16.4495 19.9844 16.9083C19.7299 17.344 19.3597 17.8257 18.8738 18.3532C18.5036 18.7431 18.1681 19.0528 17.8673 19.2821C17.5665 19.5115 17.3699 19.6606 17.2773 19.7294C17.2542 19.7294 16.9765 19.867 16.4443 20.1422C15.9353 20.4174 15.6345 20.578 15.542 20.6239C15.4494 20.6927 15.3916 20.7615 15.3684 20.8303C15.3453 20.8991 15.3337 20.9564 15.3337 21.0023C15.2875 21.0711 15.2643 21.1399 15.2643 21.2087C15.2875 21.2775 15.3106 21.3349 15.3337 21.3807C15.3337 21.4266 15.3453 21.4839 15.3684 21.5528C15.3916 21.6216 15.4379 21.6904 15.5073 21.7592C15.5998 21.8509 15.6808 21.9197 15.7502 21.9656C15.8428 21.9885 15.9122 22 15.9585 22C16.051 22 16.1436 21.9885 16.2361 21.9656C16.3287 21.9427 16.4443 21.8968 16.5832 21.828C16.8145 21.7362 17.0112 21.656 17.1732 21.5872C17.3351 21.4954 17.4393 21.4266 17.4855 21.3807C17.6244 21.3119 17.7632 21.2317 17.902 21.1399C18.064 21.0482 18.2259 20.9335 18.3879 20.7959C18.4573 20.75 18.573 20.6697 18.735 20.555C18.9201 20.4174 19.1283 20.2339 19.3597 20.0046C19.4985 19.8899 19.7067 19.695 19.9844 19.4197C20.2852 19.1216 20.586 18.7775 20.8868 18.3876C21.4652 17.6078 21.8817 16.8509 22.1362 16.117C22.4138 15.383 22.5758 14.9014 22.6221 14.672C22.946 13.4564 23.0617 12.3899 22.9692 11.4725C22.8766 10.5321 22.784 9.87844 22.6915 9.51147C22.5989 9.16743 22.3676 8.51376 21.9974 7.55046C21.6272 6.56422 20.9793 5.58945 20.0538 4.62615C19.2671 3.80046 18.5267 3.18119 17.8326 2.76835C17.1385 2.3555 16.6526 2.11468 16.3749 2.04587C16.2824 2.02294 16.1783 2.01147 16.0626 2.01147C15.9469 1.98853 15.8312 2 15.7155 2.04587C15.6692 2.06881 15.6114 2.10321 15.542 2.14908C15.4957 2.19495 15.4379 2.26376 15.3684 2.3555C15.3684 2.3555 15.3453 2.41284 15.299 2.52752C15.2528 2.61927 15.2412 2.73394 15.2643 2.87156C15.2643 2.98624 15.299 3.08945 15.3684 3.18119C15.4379 3.27294 15.5188 3.34174 15.6114 3.38761Z"}})])},d=[],b=i("2877"),h={},v=Object(b["a"])(h,p,d,!1,null,null,null),y=v.exports,C=i("4c96"),f=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"black","fill-opacity":"0.7",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M21.9581 9.89916L22 2H14.0755L17.0105 4.35294L13.2369 8.13445L15.7107 10.6134L19.4843 6.83193L21.9581 9.89916ZM2.08386 14.0588L2 22H9.96646L7.03145 19.6471L10.7631 15.8655L8.33124 13.3445L4.55765 17.1681L2.08386 14.0588Z"}})])},m=[],_={},g=Object(b["a"])(_,f,m,!1,null,null,null),w=g.exports,S=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M12.5293 0.745763L12.4623 7.62712H19.2965L16.7839 5.59322L20 2.30508L17.8894 0.169492L14.6734 3.42373L12.5293 0.745763ZM7.8392 19.3559L7.9062 12.5085H1.10553L3.61809 14.5424L0.368509 17.8305L2.51256 20L5.72864 16.7119L7.8392 19.3559ZM0.603015 7.55932L7.37018 7.62712V0.711864L5.36013 3.28814L2.14405 0L0 2.16949L3.24958 5.42373L0.603015 7.55932ZM19.397 12.4407L12.5963 12.3729V19.2881L14.6399 16.7119L17.8559 20L20 17.8305L16.7504 14.5763L19.397 12.4407Z",fill:"black","fill-opacity":"0.7"}})])},k=[],L={},P=Object(b["a"])(L,S,k,!1,null,null,null),V=P.exports,j=i("662c"),O=i("b379"),x=i("10e4"),R=i("2cfe"),M=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"black","fill-opacity":"0.7",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M10.7734 2.27682L5.65052 7.87737H2.05363C1.76298 7.87737 1.50865 7.99405 1.29066 8.22741C1.09689 8.43484 1 8.68116 1 8.96637V15.0725C1 15.3837 1.09689 15.643 1.29066 15.8504C1.50865 16.0578 1.76298 16.1615 2.05363 16.1615H5.72318L10.8097 21.7232C11.0761 22.0084 11.3789 22.0732 11.718 21.9176C12.0813 21.7621 12.263 21.4769 12.263 21.062V2.938C12.263 2.52315 12.0813 2.23793 11.718 2.08236C11.3789 1.92679 11.064 1.99161 10.7734 2.27682ZM21.673 8.49966C21.891 8.73301 22 9.01823 22 9.3553C22 9.66644 21.891 9.93869 21.673 10.172L16.6228 15.5392C16.4048 15.7726 16.1384 15.8893 15.8235 15.8893C15.5329 15.8893 15.2785 15.7726 15.0606 15.5392C14.8426 15.3059 14.7336 15.0336 14.7336 14.7225C14.7336 14.3854 14.8426 14.1002 15.0606 13.8669L20.1107 8.46076C20.3287 8.25334 20.583 8.14962 20.8737 8.14962C21.1886 8.14962 21.455 8.2663 21.673 8.49966ZM21.673 15.5392C21.455 15.7726 21.1886 15.8893 20.8737 15.8893C20.583 15.8893 20.3287 15.7726 20.1107 15.5392L15.0969 10.1332C14.8789 9.8998 14.7699 9.62755 14.7699 9.3164C14.7699 8.97933 14.8789 8.69412 15.0969 8.46076C15.3149 8.22741 15.5692 8.11073 15.8599 8.11073C16.1747 8.11073 16.4291 8.22741 16.6228 8.46076L21.7093 13.8669C21.8789 14.1002 21.9637 14.3854 21.9637 14.7225C21.9637 15.0336 21.8668 15.3059 21.673 15.5392Z"}})])},$=[],q={},Q=Object(b["a"])(q,M,$,!1,null,null,null),H=Q.exports,B=i("a8e1"),A=i("073d"),D=i("e64f"),T=i("3772"),F=i("12aa"),Z=i("a47a"),N=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.volumeValue=.5,t.isShowSpeedVideo=!1,t.isShowSettings=!1,t.isShowResolution=!1,t.isShowVolume=!1,t.isShowSubtitlesChoice=!1,t.isShowAudioTrackChoice=!1,t.liveViewers=0,t.liveStatus=!1,t}return Object(s["d"])(t,e),Object.defineProperty(t.prototype,"isFullscreen",{get:function(){var e;return(null===(e=this.player)||void 0===e?void 0:e.isFullscreen_)||!1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"volume",{get:function(){return String(Math.min(100,100*this.volumeValue))},set:function(e){this.volumeValue=+e/100,this.player.volume(this.volumeValue)},enumerable:!1,configurable:!0}),t.prototype.initPlayer=function(){var e=this;this.player&&(this.volumeValue=this.player.volume(),this.playbackRateValue=this.player.playbackRate(),this.isPlaying=!this.player.paused(),this.player.tech().on("liveStat",(function(t){var i,a=t.data;a&&(e.liveViewers=null!==(i=+a.count)&&void 0!==i?i:0,e.liveStatus=a.playing)})),setTimeout((function(){e.initQualityList()}),500))},Object.defineProperty(t.prototype,"isShowWidget",{get:function(){return this.config.isLive},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isShowConfigMenuButton",{get:function(){return[this.isPlaylisted,this.audioList.length>1,this.subtitlesList.length].some(Boolean)},enumerable:!1,configurable:!0}),t.prototype.handleFullscreen=function(){this.player.isFullscreen()?this.player.exitFullscreen():this.player.requestFullscreen()},t.prototype.showPopup=function(e){switch(e){case"speed":this.isShowSpeedVideo=!this.isShowSpeedVideo,this.isShowSettings=!1,this.isShowResolution=!1,this.isShowVolume=!1;break;case"settings":this.isShowSettings=!this.isShowSettings,this.isShowResolution=!1,this.isShowSpeedVideo=!1,this.isShowVolume=!1;break;case"resolution":this.initQualityList(),this.isShowResolution=!this.isShowResolution,this.isShowSpeedVideo=!1,this.isShowSettings=!1,this.isShowVolume=!1;break;case"volume":this.isShowVolume=!this.isShowVolume,this.isShowSpeedVideo=!1,this.isShowSettings=!1,this.isShowResolution=!1;break;default:this.isShowSpeedVideo=!1,this.isShowSettings=!1,this.isShowResolution=!1,this.isShowVolume=!1}},t.prototype.subtitlesChoice=function(e){this.isShowSubtitlesChoice=!1,this.subtitle=e},t.prototype.showAudioTrackChoice=function(e){this.isShowAudioTrackChoice=e},t.prototype.mounted=function(){this.initPlayer()},Object(s["c"])([Object(n["c"])()],t.prototype,"player",void 0),Object(s["c"])([Object(n["c"])()],t.prototype,"showHUD",void 0),Object(s["c"])([Object(n["c"])()],t.prototype,"config",void 0),Object(s["c"])([Object(n["j"])("player")],t.prototype,"initPlayer",null),t=Object(s["c"])([Object(n["a"])({components:{btnprev:l["a"],btnnext:r["a"],btnplay:u["a"],btnpause:c["a"],btnvolume:y,btnsettings:C["a"],btnfullscreen:w,btnfullscreenexit:V,iconinfo:j["a"],iconchat:O["a"],"icon-close":x["a"],"icon-playlist":R["a"],"icon-mute":H,"bms-player-progress":function(){return i.e("chunk-ff292088").then(i.bind(null,"e926"))}}})],t),t}(Object(n["d"])(B["a"],A["a"],D["a"],T["a"],F["a"],Z["a"])),E=N,I=E,U=(i("7ab3"),Object(b["a"])(I,a,o,!1,null,"d742a76e",null));t["default"]=U.exports},3772:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var a=i("9ab4"),o=i("1b40"),s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.playbackRateValue=1,t}return Object(a["d"])(t,e),Object.defineProperty(t.prototype,"playbackRate",{get:function(){return this.playbackRateValue},set:function(e){this.playbackRateValue=e,this.player.playbackRate(e)},enumerable:!1,configurable:!0}),t=Object(a["c"])([o["a"]],t),t}(o["i"])},"4d90":function(e,t,i){"use strict";var a=i("23e7"),o=i("0ccb").start,s=i("9a0c");a({target:"String",proto:!0,forced:s},{padStart:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},"7ab3":function(e,t,i){"use strict";var a=i("95e8"),o=i.n(a);o.a},"95e8":function(e,t,i){},"9a0c":function(e,t,i){var a=i("342f");e.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(a)},a47a:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));i("4de4"),i("a15b"),i("d81d"),i("4d90");var a=i("9ab4"),o=i("1b40"),s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.progressValue=0,t.progressSeconds=0,t.buffered=0,t.duration=0,t}return Object(a["d"])(t,e),Object.defineProperty(t.prototype,"progress",{get:function(){return String(this.progressValue)},set:function(e){var t,i;this.progressValue=+e;var a=(null===(t=this.player)||void 0===t?void 0:t.duration())||0,o=this.progressValue/100*a;null===(i=this.player)||void 0===i||i.currentTime(o)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"showProgress",{get:function(){return this.timeToHumanReadable(this.progressSeconds)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"showDuration",{get:function(){return this.timeToHumanReadable(this.duration)},enumerable:!1,configurable:!0}),t.prototype.mixinPlayerDurationInit=function(){var e=this;this.player&&(this.duration=this.player.duration()||0,this.player.on("timeupdate",(function(){var t,i,a;e.buffered=Math.round(100*((null===(t=e.player)||void 0===t?void 0:t.bufferedPercent())||0));var o=(null===(i=e.player)||void 0===i?void 0:i.currentTime())||0,s=(null===(a=e.player)||void 0===a?void 0:a.duration())||0;e.duration=s,e.progressSeconds=o,e.progressValue=Math.round(o/s*100)})),setTimeout((function(){e.duration=e.player.duration()||0}),500))},t.prototype.timeToHumanReadable=function(e){var t=Math.floor(e/3600),i=Math.floor((e-3600*t)/60),a=Math.floor(e-3600*t-60*i);return[t||null,i,a].filter((function(e){return null!==e})).map((function(e){return String(e).padStart(2,"0")})).join(":")},t.prototype.mounted=function(){this.mixinPlayerDurationInit()},Object(a["c"])([Object(o["j"])("player")],t.prototype,"mixinPlayerDurationInit",null),t=Object(a["c"])([o["a"]],t),t}(o["i"])},e64f:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));i("4de4"),i("7db0"),i("4160"),i("a630"),i("d81d"),i("3ca3"),i("159b");var a=i("9ab4"),o=i("1b40"),s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.qualityList=[],t.selectedQualityValue=-1,t}return Object(a["d"])(t,e),Object.defineProperty(t.prototype,"selectedQuality",{get:function(){return this.selectedQualityValue},set:function(e){Array.from(this.player.qualityLevels()).forEach((function(t,i){t.enabled=e<0||i===e})),this.selectedQualityValue=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"selectedQualityString",{get:function(){var e,t=this,i=null===(e=this.qualityList.find((function(e){return e.id===t.selectedQuality})))||void 0===e?void 0:e.quality;return i?i+"p":this.$tc("labels.auto")},enumerable:!1,configurable:!0}),t.prototype.getQualityString=function(e){switch(e){case 2160:return"UHD";case 1440:return"QHD";case 1080:return"FHD";case 720:return"HD";case 480:return"SD";case 360:case 240:return"LD";default:return""}},t.prototype.initQualityList=function(){this.qualityList=Array.from(this.player.qualityLevels()).filter((function(e){var t=e.height;return Boolean(t)})).map((function(e,t){var i=e.height;return{id:t,quality:i}}))},t=Object(a["c"])([o["a"]],t),t}(o["i"])}}]);