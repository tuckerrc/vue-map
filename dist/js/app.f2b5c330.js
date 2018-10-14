(function(t){function e(e){for(var o,i,s=e[0],c=e[1],l=e[2],p=0,f=[];p<s.length;p++)i=s[p],n[i]&&f.push(n[i][0]),n[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],o=!0,s=1;s<r.length;s++){var c=r[s];0!==n[c]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var o={},n={app:0},a=[];function i(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=o,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(r,o,function(e){return t[e]}.bind(null,o));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var o=r("c21b"),n=r.n(o);n.a},"0ec9":function(t,e,r){},"2f0c":function(t,e,r){"use strict";var o=r("4457"),n=r.n(o);n.a},4457:function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);var o=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("v-app",{attrs:{id:"vue-map"}},[r("v-navigation-drawer",{attrs:{fixed:"",width:"400",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("JobSearchForm",{attrs:{placeholder:"Search"},on:{submit:t.submitForm},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),r("JobList",{attrs:{jobs:t.jobs}})],1),r("v-toolbar",{attrs:{dense:"",dark:"",fixed:"",app:""}},[r("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),r("v-toolbar-title",[t._v("Search Stack Overflow Jobs")])],1),r("v-content",{attrs:{app:""}},[r("JobMap",{attrs:{jobs:t.jobs}})],1)],1)],1)},a=[],i=(r("386d"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.jobs.length?r("ul",{staticClass:"job-list"},t._l(t.jobs,function(t){return r("JobListItem",{key:t.guid,attrs:{title:t.properties.title,link:t.properties.link,location:t.properties.location,company:t.properties.company,remote:t.properties.remote,categories:t.properties.category,primarycategory:t.properties.category[0]}})})):r("p",[t._v("\n    No jobs found.\n  ")])])}),s=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"job-listing",class:[t.primarycategory]},[r("div",{staticClass:"title"},[r("a",{attrs:{href:t.link}},[t._v("\n            "+t._s(t.title)+" "),r("span",[t._v(t._s(t.remote))])])]),r("div",{staticClass:"location-company"},[r("span",{staticClass:"company"},[t.company?r("span",[t._v(t._s(t.company))]):r("span",[t._v("No Company Name")])]),r("span",{staticClass:"location"},[t.location?r("span",[t._v(t._s(t.location))]):r("span",[t._v("No office location")])])]),r("div",{staticClass:"categories"},t._l(t.categories,function(t){return r("JobCategory",{attrs:{category:t}})}))])},l=[],u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"category",class:[t.category]},[t._v(t._s(t.category))])},p=[],f={props:{category:{type:String,required:!0}}},d=f,b=(r("8766"),r("2877")),m=Object(b["a"])(d,u,p,!1,null,null,null);m.options.__file="JobCategory.vue";var v=m.exports,h={components:{JobCategory:v},props:{title:{type:String,required:!0},link:{type:String,required:!0},location:{type:String,required:!1},company:{type:String,required:!1},remote:{type:String,required:!1},categories:{type:Array,required:!1},primarycategory:{type:String,required:!1}}},g=h,y=(r("5fa6"),Object(b["a"])(g,c,l,!1,null,null,null));y.options.__file="JobListItem.vue";var _=y.exports,j={components:{JobListItem:_},props:{jobs:{type:Array,required:!1}},methods:{}},k=j,S=(r("6604"),Object(b["a"])(k,i,s,!1,null,null,null));S.options.__file="JobList.vue";var x=S.exports,w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{attrs:{id:"jobSearch"},on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[r("v-text-field",{attrs:{id:"search",placeholder:"Search Jobs",name:"search",label:"Search","single-line":"",solo:"","append-icon":"search"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),r("v-text-field",{attrs:{id:"location",placeholder:"Location",name:"location",label:"Location","single-line":"",solo:"","append-icon":"place"},model:{value:t.location,callback:function(e){t.location=e},expression:"location"}}),r("v-checkbox",{attrs:{label:"Remote?"},model:{value:t.remote,callback:function(e){t.remote=e},expression:"remote"}}),r("v-btn",{on:{click:t.handleSubmit,submit:t.handleSubmit}},[t._v("submit")])],1)},J=[],O={props:{},data(){return{search:null,location:null,remote:!1}},methods:{handleSubmit(t){var e={search:this.search,location:this.location};this.remote&&(e.remote="true"),console.log(e),this.$emit("submit",e)}}},C=O,M=(r("9db5"),Object(b["a"])(C,w,J,!1,null,null,null));M.options.__file="JobSearchForm.vue";var q=M.exports,P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("l-map",{attrs:{zoom:t.zoom,center:t.center}},[r("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),r("v-marker-cluster",t._l(t.jobs,function(e){return r("l-marker",{key:e.guid,attrs:{"lat-lng":t.reverseCoordinates(e.geometry.coordinates)}},[r("l-popup",{attrs:{content:t.tooltip(e.properties)}})],1)}))],1)},$=[],E=r("458e"),I=r("ca9f"),T=r.n(I),F={components:{LMap:E["LMap"],LTileLayer:E["LTileLayer"],LMarker:E["LMarker"],LPopup:E["LPopup"],"v-marker-cluster":T.a},props:{jobs:{type:Array,required:!1}},data(){return{zoom:4,center:L.latLng(41.032309,-95.850958),url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}},methods:{tooltip:function(t){var e="";return t&&(e+="<a href='"+t.link+"' target='_blank'>"+t.title+" "+t.remote+"</a><br>",e+="<strong>Company: </strong>"+t.company+"<br>",""!==t.location?e+="<strong>Location: </strong>"+t.location+"<br>":e+="<strong>Location: </strong>No office location listed<br>",e+="<strong>Tags: </strong>"+t.category.join(", ")+"<br>"),e},reverseCoordinates:function(t){return t.slice().reverse()}}},N=F,z=(r("2f0c"),Object(b["a"])(N,P,$,!1,null,null,null));z.options.__file="JobMap.vue";var A=z.exports;const U=r("bc3a"),D="https://api.tuckerchapman.com/stackjobs";var R={name:"app",components:{JobList:x,JobSearchForm:q,JobMap:A},data(){return{jobs:[],drawer:null}},methods:{search(t={}){U.post(D,t,{header:{"content-type":"application/json"}}).then(t=>this.jobs=t.data.data.features).catch(t=>console.log(t))},submitForm(t){this.search(t)}},mounted(){this.search()}},B=R,G=(r("034f"),Object(b["a"])(B,n,a,!1,null,null,null));G.options.__file="App.vue";var H=G.exports,K=r("ce5b"),Q=r.n(K),V=(r("bf40"),r("6cc5"),r("d1e7"),r("e11e")),W=r.n(V);delete W.a.Icon.Default.prototype._getIconUrl,W.a.Icon.Default.mergeOptions({iconRetinaUrl:r("584d"),iconUrl:r("6397"),shadowUrl:r("e2b9")}),o["default"].config.productionTip=!1,o["default"].use(Q.a),new o["default"]({render:t=>t(H)}).$mount("#app")},"5fa6":function(t,e,r){"use strict";var o=r("7fd9"),n=r.n(o);n.a},6604:function(t,e,r){"use strict";var o=r("0ec9"),n=r.n(o);n.a},"7fd9":function(t,e,r){},8766:function(t,e,r){"use strict";var o=r("f84e"),n=r.n(o);n.a},"8fd3":function(t,e,r){},"9db5":function(t,e,r){"use strict";var o=r("8fd3"),n=r.n(o);n.a},c21b:function(t,e,r){},f84e:function(t,e,r){}});
//# sourceMappingURL=app.f2b5c330.js.map