(function(t){function e(e){for(var a,s,i=e[0],c=e[1],u=e[2],p=0,f=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/modules/composerman/out/vue/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("v-app-bar",{attrs:{app:"",color:"indigo",dark:""}},[n("v-toolbar-title",[t._v("Paketverwaltung")])],1),n("v-content",[n("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"text-center"},[n("PackageList")],1)],1)],1)],1),n("v-footer",{attrs:{color:"indigo",app:""}},[n("span",{staticClass:"white--text"},[t._v("© 2020 "),n("a",{attrs:{href:"https://www.aggrosoft.de"}},[t._v("Aggrosoft GmbH")])])])],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-data-table",{attrs:{items:t.packages,headers:t.headers,loading:t.loading},scopedSlots:t._u([{key:"item.version",fn:function(e){var a=e.item;return[n("v-chip",[t._v(" "+t._s(a.version)+" ")])]}},{key:"item.latest",fn:function(e){var a=e.item;return[n("v-chip",{attrs:{color:t.versionColor(a)}},[t._v(" "+t._s(a.latest)+" ")])]}},{key:"item.latest-status",fn:function(e){var a=e.item;return[n("span",{domProps:{innerHTML:t._s(t.statusText(a))}})]}},{key:"item.action",fn:function(e){var a=e.item;return[n("v-btn",t._g({staticClass:"mr-lg-2",attrs:{fab:"",color:t.isUpdatable(a)?"primary":"",text:"",icon:"",small:""},on:{click:function(e){return e.stopPropagation(),t.clickUpdatePackage(a)}}},t.on),[n("v-icon",[t._v(" mdi-refresh ")])],1)]}}])})],1)},i=[],c=(n("b0c0"),n("5530")),u=n("2f62"),l={name:"PackageList",mounted:function(){console.log("init!"),this.initPackages()},data:function(){return{headers:[{text:"Titel",value:"name"},{text:"Version",value:"version"},{text:"Neueste Version",value:"latest"},{text:"Status",value:"latest-status"},{text:"Beschreibung",value:"description"},{text:"Aktionen",value:"action",sortable:!1}]}},computed:Object(c["a"])({},Object(u["c"])(["packages","loading"])),methods:Object(c["a"])({versionColor:function(t){return"semver-safe-update"===t["latest-status"]?"green":"update-possible"===t["latest-status"]?"orange":void 0},statusText:function(t){return"semver-safe-update"===t["latest-status"]?"Sicheres Update":"update-possible"===t["latest-status"]?"Update möglich":"up-to-date"===t["latest-status"]?"Aktuell":t["latest-status"]},isUpdatable:function(t){return"up-to-date"!==t["latest-status"]},clickUpdatePackage:function(t){this.updatePackage(t.name)}},Object(u["b"])(["initPackages","updatePackage"]))},p=l,f=n("2877"),d=n("6544"),g=n.n(d),v=n("8336"),m=n("cc20"),k=n("8fea"),b=n("132d"),h=Object(f["a"])(p,s,i,!1,null,"b3089358",null),w=h.exports;g()(h,{VBtn:v["a"],VChip:m["a"],VDataTable:k["a"],VIcon:b["a"]});var P={components:{PackageList:w}},x=P,y=n("7496"),_=n("40dc"),O=n("62ad"),j=n("a523"),V=n("a75b"),T=n("553a"),C=n("0fd9"),S=n("2a7f"),L=Object(f["a"])(x,r,o,!1,null,null,null),R=L.exports;g()(L,{VApp:y["a"],VAppBar:_["a"],VCol:O["a"],VContainer:j["a"],VContent:V["a"],VFooter:T["a"],VRow:C["a"],VToolbarTitle:S["a"]});var U=n("f309");a["a"].use(U["a"]);var A=new U["a"]({}),M=(n("d3b7"),n("96cf"),n("1da1")),B=n("bc3a"),$=n.n(B),E=$.a.create();a["a"].use(u["a"]);var H=null,J=new Promise((function(t){H=t})),D=new u["a"].Store({getters:{token:function(){return J},loading:function(t){return t.loading},packages:function(t){return t.packages&&t.packages.installed?t.packages.installed:[]}},state:{packages:{},token:void 0,loading:!0},mutations:{setPackages:function(t,e){t.packages=e},setLoading:function(t,e){t.loading=e},setToken:function(t,e){var n=t.token;t.token=e,n!==e&&H(e)}},actions:{setToken:function(t,e){var n=t.commit;n("setToken",e)},initPackages:function(t){var e=t.dispatch,n=t.state;return Object(M["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n.packages.length){t.next=2;break}return t.abrupt("return",e("loadPackages"));case 2:case"end":return t.stop()}}),t)})))()},loadPackages:function(t){var e=t.commit,n=t.getters;return Object(M["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e("setLoading",!0),t.abrupt("return",n.token.then((function(t){return E.get("/admin/index.php?cl=composerman&fnc=getpackages&stoken="+t).then((function(t){e("setPackages",t.data),e("setLoading",!1)}))})));case 2:case"end":return t.stop()}}),t)})))()},updatePackage:function(t,e){var n=t.commit,a=t.dispatch,r=t.getters;return Object(M["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n("setLoading",!0),t.abrupt("return",r.token.then((function(t){return E.get("/admin/index.php?cl=composerman&fnc=updatepackage&stoken="+t+"&package="+e).then((function(){return a("loadPackages")}))})));case 2:case"end":return t.stop()}}),t)})))()}},modules:{}});a["a"].config.productionTip=!1,window.vm=new a["a"]({vuetify:A,store:D,render:function(t){return t(R)}}).$mount("#app")}});
//# sourceMappingURL=app.2a0b203c.js.map