(function(t){function e(e){for(var n,r,s=e[0],l=e[1],c=e[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var s=a[r];0!==o[s]&&(n=!1)}n&&(i.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},r={app:0},o={app:0},i=[];function s(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"a0320521","chunk-652f9bb7":"f89a93cd"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={"chunk-652f9bb7":1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-652f9bb7":"19540bac"}[t]+".css",o=l.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],u=c.getAttribute("data-href");if(u===n||u===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[t],p.parentNode.removeChild(p),a(i)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(p);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}o[t]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var p=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{clipped:t.$vuetify.breakpoint.lgAndUp,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[t._l(t.items,(function(e){return[e.heading?a("v-row",{key:e.heading,attrs:{align:"center"}},[a("v-col",{attrs:{cols:"6"}},[e.heading?a("v-subheader",[t._v(" "+t._s(e.heading)+" ")]):t._e()],1),a("v-col",{staticClass:"text-center",attrs:{cols:"6"}},[a("a",{staticClass:"body-2 black--text",attrs:{href:"#!"}},[t._v("EDIT")])])],1):e.children?a("v-list-group",{key:e.text,attrs:{"prepend-icon":e.model?e.icon:e["icon-alt"],"append-icon":""},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[t._v(" "+t._s(e.text)+"ss ")])],1)],1)]},proxy:!0}],null,!0),model:{value:e.model,callback:function(a){t.$set(e,"model",a)},expression:"item.model"}},t._l(e.children,(function(e,n){return a("v-list-item",{key:n,attrs:{link:""},on:{click:function(e){return t.alert("tet")}}},[e.icon?a("v-list-item-action",[a("v-icon",[t._v(t._s(e.icon))])],1):t._e(),a("v-list-item-content",[a("v-list-item-title",[t._v(" "+t._s(e.text)+" ")])],1)],1)})),1):a("v-list-item",{key:e.text,attrs:{link:""},on:{click:function(){return e.link&&t.$router.push(e.link)}}},[a("v-list-item-action",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" "+t._s(e.text)+" ")])],1)],1)]}))],2)],1),a("v-app-bar",{attrs:{"clipped-left":t.$vuetify.breakpoint.lgAndUp,app:"",color:"blue darken-3",dark:""}},[a("v-toolbar-title",{staticClass:"ml-0 pl-4",staticStyle:{width:"300px"}},[a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("span",{staticClass:"hidden-sm-and-down"},[t._v("Auto Generator")])],1),a("v-text-field",{staticClass:"hidden-sm-and-down",attrs:{flat:"","solo-inverted":"","hide-details":"","prepend-inner-icon":"mdi-magnify",label:"Search"}}),a("v-spacer")],1),a("v-content",[a("router-view")],1),a("v-btn",{attrs:{bottom:"",color:"pink",dark:"",fab:"",fixed:"",right:""},on:{click:function(e){t.dialog=!t.dialog}}},[a("v-icon",[t._v("mdi-plus")])],1),a("v-dialog",{attrs:{width:"800px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"grey darken-2"},[t._v(" Create contact ")]),a("v-container",[a("v-row",[a("v-col",{staticClass:"align-center justify-space-between",attrs:{cols:"12"}},[a("v-row",{attrs:{align:"center"}},[a("v-avatar",{staticClass:"mr-4",attrs:{size:"40px"}},[a("img",{attrs:{src:"//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png",alt:""}})]),a("v-text-field",{attrs:{placeholder:"Name"}})],1)],1),a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{"prepend-icon":"business",placeholder:"Company"}})],1),a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{placeholder:"Job title"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{"prepend-icon":"mail",placeholder:"Email"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{type:"tel","prepend-icon":"phone",placeholder:"(000) 000 - 0000"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{"prepend-icon":"notes",placeholder:"Notes"}})],1)],1)],1),a("v-card-actions",[a("v-btn",{attrs:{text:"",color:"primary"}},[t._v("More")]),a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.dialog=!1}}},[t._v("Cancel")]),a("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Save")])],1)],1)],1)],1)},o=[],i={props:{source:String},data:function(){return{dialog:!1,drawer:null,items:[{icon:"mdi-keyboard",text:"Deployment",link:"/generator/k8s/deployment"}]}}},s=i,l=a("0c7c"),c=a("6544"),u=a.n(c),d=a("7496"),p=a("40dc"),f=a("5bc1"),v=a("8212"),m=a("8336"),h=a("b0af"),b=a("99d9"),g=a("62ad"),y=a("a523"),x=a("a75b"),_=a("169a"),k=a("132d"),w=a("8860"),C=a("56b0"),V=a("da13"),j=a("1800"),A=a("5d23"),S=a("f774"),E=a("0fd9"),L=a("2fa4"),O=a("e0c7"),T=a("8654"),N=a("2a7f"),P=Object(l["a"])(s,r,o,!1,null,null,null),I=P.exports;u()(P,{VApp:d["a"],VAppBar:p["a"],VAppBarNavIcon:f["a"],VAvatar:v["a"],VBtn:m["a"],VCard:h["a"],VCardActions:b["a"],VCardTitle:b["b"],VCol:g["a"],VContainer:y["a"],VContent:x["a"],VDialog:_["a"],VIcon:k["a"],VList:w["a"],VListGroup:C["a"],VListItem:V["a"],VListItemAction:j["a"],VListItemContent:A["a"],VListItemTitle:A["b"],VNavigationDrawer:S["a"],VRow:E["a"],VSpacer:L["a"],VSubheader:O["a"],VTextField:T["a"],VToolbarTitle:N["a"]});a("d3b7");var D=a("8c4f"),$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},B=[],M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-layout",{attrs:{"text-center":"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-img",{staticClass:"my-3",attrs:{src:a("9b19"),contain:"",height:"200"}})],1),n("v-flex",{attrs:{"mb-4":""}},[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),n("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),n("br"),t._v("please join our online "),n("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),n("v-flex",{attrs:{"mb-5":"",xs12:""}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("What's next?")]),n("v-layout",{attrs:{"justify-center":""}},t._l(t.whatsNext,(function(e,a){return n("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),n("v-flex",{attrs:{xs12:"","mb-5":""}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Important Links")]),n("v-layout",{attrs:{"justify-center":""}},t._l(t.importantLinks,(function(e,a){return n("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),n("v-flex",{attrs:{xs12:"","mb-5":""}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Ecosystem")]),n("v-layout",{attrs:{"justify-center":""}},t._l(t.ecosystem,(function(e,a){return n("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},W=[],q={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},F=q,H=a("0e8f"),J=a("adda"),U=a("a722"),z=Object(l["a"])(F,M,W,!1,null,null,null),G=z.exports;u()(z,{VContainer:y["a"],VFlex:H["a"],VImg:J["a"],VLayout:U["a"]});var K={name:"home",components:{HelloWorld:G}},Q=K,R=Object(l["a"])(Q,$,B,!1,null,null,null),Y=R.exports;n["a"].use(D["a"]);var X=[{path:"/",name:"home",component:Y},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/generator/k8s/deployment",component:function(){return a.e("chunk-652f9bb7").then(a.bind(null,"ea49"))}}],Z=new D["a"]({mode:"history",base:"auto-generator",routes:X}),tt=Z,et=a("2f62");n["a"].use(et["a"]);var at=new et["a"].Store({state:{},mutations:{},actions:{},modules:{}}),nt=a("f309");n["a"].use(nt["a"]);var rt=new nt["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:tt,store:at,vuetify:rt,render:function(t){return t(I)}}).$mount("#app")},"9b19":function(t,e,a){t.exports=a.p+"img/logo.63a7d78d.svg"},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.bfe4ada4.js.map