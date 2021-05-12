(function(t){function e(e){for(var a,i,s=e[0],l=e[1],u=e[2],c=0,d=[];c<s.length;c++)i=s[c],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);h&&h(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(a=!1)}a&&(o.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},i={app:0},r={app:0},o=[];function s(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-2d0e95df":"54b15c8f","chunk-506270b4":"5aac74bb","chunk-ba8af286":"a0df6c5a"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={"chunk-506270b4":1,"chunk-ba8af286":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-2d0e95df":"31d6cfe0","chunk-506270b4":"6ee9d428","chunk-ba8af286":"fa75e444"}[t]+".css",r=l.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===a||c===r))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],c=u.getAttribute("data-href");if(c===a||c===r)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var a=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete i[t],h.parentNode.removeChild(h),n(o)},h.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){i[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=o);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=s(t);var d=new Error;u=function(e){c.onerror=c.onload=null,clearTimeout(h);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,n[1](d)}r[t]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/nathan-louie.github.io/",l.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var h=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"141b":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:this.$route.name.bodyClass,attrs:{id:"app"}},[n("Header",{attrs:{routeName:this.$route.name,viewport:t.viewport}}),n("router-view",{attrs:{viewport:t.viewport}})],1)},r=[],o=(n("d7ac"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{attrs:{id:"header"}},[n("div",{staticClass:"header-container"},[n("div",{staticClass:"header-breadcrumb"},[t._v("Nathan Louie")]),t.viewport.is768?n("button",{staticClass:"header-nav-button",attrs:{title:"Open menu",type:"button"},on:{click:t.openMenu}},[n("span",{staticClass:"label"},[t._v("Menu")]),n("span",{staticClass:"dots d1"}),n("span",{staticClass:"dots d2"}),n("span",{staticClass:"dots d3"})]):t._e(),n("nav",{staticClass:"header-nav"},[t.viewport.is768?n("button",{staticClass:"header-nav-close-button",attrs:{title:"Close menu",type:"button"},on:{click:t.closeMenu}},[n("span",{staticClass:"label"},[t._v("✕")])]):t._e(),n("ul",[n("li",[n("router-link",{attrs:{to:"/",title:"Home"}},[t._v("Home")])],1),n("li",[n("router-link",{attrs:{to:"/about",title:"About"}},[t._v("About")])],1),t._m(0),n("li",{staticClass:"social-link"},[n("a",{attrs:{href:"mailto:nathanhlouie@gmail.com",target:"_blank",title:"Email"}},[n("svg",{staticClass:"ico",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",role:"img","aria-labelledby":"EmailIcoTitle"}},[n("title",{attrs:{id:"EmailIcoTitle"}},[t._v("Email")]),n("path",{attrs:{d:"M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"}})])])]),n("li",{staticClass:"social-link"},[n("a",{attrs:{href:"https://www.linkedin.com/in/nathan-louie-b279b1209/",target:"_blank",title:"LinkedIn"}},[n("svg",{staticClass:"ico",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",role:"img","aria-labelledby":"LinkedinIcoTitle"}},[n("title",{attrs:{id:"LinkedinIcoTitle"}},[t._v("LinkedIn logo")]),n("path",{attrs:{d:"M14.8 0H1.2C.5 0 0 .5 0 1.2v13.7c0 .6.5 1.1 1.2 1.1h13.6c.7 0 1.2-.5 1.2-1.2V1.2c0-.7-.5-1.2-1.2-1.2zM4.7 13.6H2.4V6h2.4v7.6zM3.6 5c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4V9.9c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8H6.2V6h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2z"}})])])]),n("li",{staticClass:"social-link"},[n("a",{attrs:{href:"https://github.com/nathan-louie",target:"_blank",title:"GitHub"}},[n("svg",{staticClass:"ico",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",role:"img","aria-labelledby":"GithubIcoTitle"}},[n("title",{attrs:{id:"GithubIcoTitle"}},[t._v("GitHub logo")]),n("path",{attrs:{"fill-rule":"evenodd",d:"M8 0C3.6 0 0 3.6 0 8c0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1.1-2.7-1.1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6 0 1.3-.1 2-.1s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.3.6.8.6 1.5v2.2c0 .2.1.5.6.4C13.7 14.5 16 11.5 16 8c0-4.4-3.6-8-8-8z","clip-rule":"evenodd"}})])])])])])])])}),s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"https://drive.google.com/file/d/1RUGRhcpKZNhUTOCTy7oXzXmRtl2glJN-/view?usp=sharing",target:"_blank",title:"Resume"}},[t._v("Résumé")])])}],l=(n("141b"),{name:"Header",props:{routeName:String,viewport:Object},methods:{openMenu:function(){document.body.classList.add("-open-nav")},closeMenu:function(){document.body.classList.remove("-open-nav")}}}),u=l,c=n("2877"),d=Object(c["a"])(u,o,s,!1,null,null,null),h=d.exports,p={name:"App",data:function(){return{viewport:{w:window.innerWidth,h:window.innerHeight,is568:window.innerWidth<=568,is768:window.innerWidth<=768,is1024:window.innerWidth<=1024}}},created:function(){this.updateViewport(),window.addEventListener("resize",this.updateViewport)},methods:{updateViewport:function(){this.viewport={w:window.innerWidth,h:window.innerHeight,is568:window.innerWidth<=568,is768:window.innerWidth<=768,is1024:window.innerWidth<=1024}}},components:{Header:h}},f=p,b=Object(c["a"])(f,i,r,!1,null,null,null),m=b.exports,v=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));a["a"].use(v["a"]);var w=[{path:"/",name:"Home",component:function(){return n.e("chunk-506270b4").then(n.bind(null,"bb51"))},meta:{title:"Home | Nathan Louie",bodyClass:"page-home"}},{path:"/about",name:"About",component:function(){return n.e("chunk-ba8af286").then(n.bind(null,"f820"))},meta:{title:"About | Nathan Louie",bodyClass:"page-about"}},{path:"/fr",beforeEnter:function(){window.open("https://gofisch.tech/","_blank")}},{path:"*",name:"404",component:function(){return n.e("chunk-2d0e95df").then(n.bind(null,"8cdb"))},meta:{title:"404 Not Found | Nathan Louie",bodyClass:"page-404"}}],g=new v["a"]({mode:"history",base:"/nathan-louie.github.io/",routes:w}),y="Some Default Title";g.afterEach((function(t){a["a"].nextTick((function(){document.title=t.meta&&t.meta.title||y}))}));var k=g;a["a"].config.productionTip=!1,new a["a"]({router:k,render:function(t){return t(m)}}).$mount("#app")},d7ac:function(t,e,n){}});
//# sourceMappingURL=app.b788dfb2.js.map