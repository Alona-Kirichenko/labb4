(function(t){function e(e){for(var o,c,i=e[0],u=e[1],s=e[2],f=0,p=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(o=!1)}o&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},r={app:0},a=[];function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0b86":function(t,e,n){},"1a85":function(t,e,n){},"3c73":function(t,e,n){"use strict";n("0b86")},"3da8":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" | "),n("router-link",{attrs:{to:"/NewOne"}},[t._v("New ")]),t._v(" | ")],1),n("router-view"),n("SecondOneComponent",{attrs:{aboutSite:t.aboutSite}})],1)},a=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v(t._s(t.aboutSite))])])},i=[],u={props:{aboutSite:{type:String}}},s=u,l=(n("3c73"),n("2877")),f=Object(l["a"])(s,c,i,!1,null,"83b0a3b2",null),p=f.exports,d={name:"App",components:{SecondOneComponent:p},data:function(){return{aboutSite:"cool site "}}},m=d,v=(n("034f"),Object(l["a"])(m,r,a,!1,null,null,null)),b=v.exports,h=n("9483");Object(h["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var _=n("8c4f"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"})},w=[],y={name:"Home",components:{}},k=y,O=(n("a056"),Object(l["a"])(k,g,w,!1,null,"6842b616",null)),j=O.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.addComment(t.fact)}}},[t._v("Klicka här!")]),n("br"),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fact,expression:"fact"}],attrs:{id:"writeComent",placeholder:"Write you comment"},domProps:{value:t.fact},on:{input:function(e){e.target.composing||(t.fact=e.target.value)}}}),t.facts?n("ul",t._l(t.facts,(function(e,o){return n("li",{key:o},[n("dt",[t._v(t._s(e.text))])])})),0):n("p",[t._v("Laddar..")]),t._l(t.comments,(function(e,o){return n("li",{key:o},[n("dt",{attrs:{id:"comments"}},[t._v(t._s(e))])])}))],2)},S=[],N=(n("d3b7"),{created:function(){var t=this;fetch("https://cat-fact.herokuapp.com/facts").then((function(t){return t.json()})).then((function(e){t.facts=e}))},data:function(){return{fact:"",facts:[],comments:[]}},methods:{addComment:function(t){this.comments.push(t)}}}),C=N,P=(n("951e"),Object(l["a"])(C,x,S,!1,null,"a97800ea",null)),E=P.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"about"}},[n("NewOneComponent")],1)},A=[],M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:t.image},[n("h3",[t._v("Do you want to see the Bar Menu?")]),n("input",{attrs:{id:"yes",value:"Yes",type:"button"},on:{click:t.yes}}),n("input",{attrs:{id:"no",value:"No",type:"button"},on:{click:t.no}}),n("p",{attrs:{id:"textForNo"}},[t._v(t._s(t.text))]),t._l(t.cocktails.drinks,(function(e){return n("div",{key:e.idDrink},[n("p",{attrs:{id:"cocktail"}},[t._v(t._s(e.strDrink))])])}))],2)},B=[],D={data:function(){return{image:{backgroundImage:"./bar.webp"},text:"",cocktails:{}}},methods:{yes:function(){var t=this;fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita").then((function(t){return t.json()})).then((function(e){t.cocktails=e}))},no:function(){this.text="No so no. Bye bye!"}}},F=D,H=(n("dab8"),Object(l["a"])(F,M,B,!1,null,"591b9e78",null)),T=H.exports,J={name:"NewOne",components:{NewOneComponent:T}},q=J,I=(n("8e74"),Object(l["a"])(q,$,A,!1,null,"3f68e667",null)),K=I.exports;o["default"].use(_["a"]);var L=[{path:"/",name:"Home",component:j},{path:"/about",name:"About",component:E},{path:"/newOne",name:"NewOne",component:K}],W=new _["a"]({routes:L}),Y=W,z=n("2f62");o["default"].use(z["a"]);var G=new z["a"].Store({state:{something:10,x:2},mutations:{f:function(t){t.something=t.something+2},f2:function(t){t.x++}},actions:{},modules:{}}),Q=n("5f5b"),R=n("b1e0");n("abe2");o["default"].use(Q["a"]),o["default"].use(R["a"]),o["default"].config.productionTip=!1,new o["default"]({router:Y,store:G,render:function(t){return t(b)}}).$mount("#app")},"85ec":function(t,e,n){},"8e74":function(t,e,n){"use strict";n("aad2")},"951e":function(t,e,n){"use strict";n("a65b")},a056:function(t,e,n){"use strict";n("1a85")},a65b:function(t,e,n){},aad2:function(t,e,n){},abe2:function(t,e,n){},dab8:function(t,e,n){"use strict";n("3da8")}});
//# sourceMappingURL=app.7b48129b.js.map