(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{356:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"i",(function(){return a})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return c})),n.d(e,"b",(function(){return f})),n.d(e,"e",(function(){return h})),n.d(e,"k",(function(){return p})),n.d(e,"c",(function(){return d})),n.d(e,"j",(function(){return g}));n(25),n(96),n(185),n(98),n(186),n(68),n(46),n(357),n(69),n(358),n(97);var i=/#.*$/,r=/\.(md|html)$/,s=/\/$/,a=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(i,"").replace(r,"")}function u(t){return a.test(t)}function l(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function f(t){if(u(t))return t;var e=t.match(i),n=e?e[0]:"",r=o(t);return s.test(r)?t:r+".html"+n}function h(t,e){var n=decodeURIComponent(t.hash),r=function(t){var e=t.match(i);if(e)return e[0]}(e);return(!r||n===r)&&o(t.path)===o(e)}function p(t,e,n){if(u(e))return{type:"external",path:e};n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var r=e.split("/");n&&r[r.length-1]||r.pop();for(var s=t.replace(/^\//,"").split("/"),a=0;a<s.length;a++){var o=s[a];".."===o?r.pop():"."!==o&&r.push(o)}""!==r[0]&&r.unshift("");return r.join("/")}(e,n));for(var i=o(e),r=0;r<t.length;r++)if(o(t[r].regularPath)===i)return Object.assign({},t[r],{type:"page",path:f(t[r].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function d(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function g(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},357:function(t,e,n){"use strict";var i=n(188),r=n(5),s=n(14),a=n(24),o=n(189),u=n(190);i("match",1,(function(t,e,n){return[function(e){var n=a(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,n):new RegExp(e)[t](String(n))},function(t){var i=n(e,t,this);if(i.done)return i.value;var a=r(t),l=String(this);if(!a.global)return u(a,l);var c=a.unicode;a.lastIndex=0;for(var f,h=[],p=0;null!==(f=u(a,l));){var d=String(f[0]);h[p]=d,""===d&&(a.lastIndex=o(l,s(a.lastIndex),c)),p++}return 0===p?null:h}]}))},358:function(t,e,n){"use strict";var i=n(188),r=n(187),s=n(5),a=n(24),o=n(104),u=n(189),l=n(14),c=n(190),f=n(71),h=n(1),p=[].push,d=Math.min,g=!h((function(){return!RegExp(4294967295,"y")}));i("split",2,(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(a(this)),s=void 0===n?4294967295:n>>>0;if(0===s)return[];if(void 0===t)return[i];if(!r(t))return e.call(i,t,s);for(var o,u,l,c=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,g=new RegExp(t.source,h+"g");(o=f.call(g,i))&&!((u=g.lastIndex)>d&&(c.push(i.slice(d,o.index)),o.length>1&&o.index<i.length&&p.apply(c,o.slice(1)),l=o[0].length,d=u,c.length>=s));)g.lastIndex===o.index&&g.lastIndex++;return d===i.length?!l&&g.test("")||c.push(""):c.push(i.slice(d)),c.length>s?c.slice(0,s):c}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var r=a(this),s=null==e?void 0:e[t];return void 0!==s?s.call(e,r,n):i.call(String(r),e,n)},function(t,r){var a=n(i,t,this,r,i!==e);if(a.done)return a.value;var f=s(t),h=String(this),p=o(f,RegExp),v=f.unicode,m=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(g?"y":"g"),b=new p(g?f:"^(?:"+f.source+")",m),k=void 0===r?4294967295:r>>>0;if(0===k)return[];if(0===h.length)return null===c(b,h)?[h]:[];for(var _=0,x=0,C=[];x<h.length;){b.lastIndex=g?x:0;var L,$=c(b,g?h:h.slice(x));if(null===$||(L=d(l(b.lastIndex+(g?0:x)),h.length))===_)x=u(h,x,v);else{if(C.push(h.slice(_,x)),C.length===k)return C;for(var y=1;y<=$.length-1;y++)if(C.push($[y]),C.length===k)return C;x=_=L}}return C.push(h.slice(_)),C}]}),!g)},359:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},360:function(t,e,n){"use strict";n(184),n(99),n(384);var i=n(356),r={name:"NavLink",props:{item:{required:!0}},computed:{link:function(){return Object(i.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link},isNonHttpURI:function(){return Object(i.g)(this.link)||Object(i.h)(this.link)},isBlankTarget:function(){return"_blank"===this.target},isInternal:function(){return!Object(i.f)(this.link)&&!this.isBlankTarget},target:function(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(i.f)(this.link)?"_blank":""},rel:function(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction:function(){this.$emit("focusout")}}},s=n(45),a=Object(s.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isInternal?n("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction(e)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?n("OutboundLink"):t._e()],1)}),[],!1,null,null,null);e.a=a.exports},361:function(t,e,n){},362:function(t,e,n){var i=n(24),r="["+n(359)+"]",s=RegExp("^"+r+r+"*"),a=RegExp(r+r+"*$"),o=function(t){return function(e){var n=String(i(e));return 1&t&&(n=n.replace(s,"")),2&t&&(n=n.replace(a,"")),n}};t.exports={start:o(1),end:o(2),trim:o(3)}},363:function(t,e,n){"use strict";var i=n(0),r=n(362).trim;i({target:"String",proto:!0,forced:n(390)("trim")},{trim:function(){return r(this)}})},364:function(t,e,n){var i=n(6),r=n(3),s=n(102),a=n(391),o=n(8).f,u=n(70).f,l=n(187),c=n(107),f=n(193),h=n(11),p=n(1),d=n(31).set,g=n(191),v=n(2)("match"),m=r.RegExp,b=m.prototype,k=/a/g,_=/a/g,x=new m(k)!==k,C=f.UNSUPPORTED_Y;if(i&&s("RegExp",!x||C||p((function(){return _[v]=!1,m(k)!=k||m(_)==_||"/a/i"!=m(k,"i")})))){for(var L=function(t,e){var n,i=this instanceof L,r=l(t),s=void 0===e;if(!i&&r&&t.constructor===L&&s)return t;x?r&&!s&&(t=t.source):t instanceof L&&(s&&(e=c.call(t)),t=t.source),C&&(n=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var o=a(x?new m(t,e):m(t,e),i?this:b,L);return C&&n&&d(o,{sticky:n}),o},$=function(t){t in L||o(L,t,{configurable:!0,get:function(){return m[t]},set:function(e){m[t]=e}})},y=u(m),w=0;y.length>w;)$(y[w++]);b.constructor=L,L.prototype=b,h(r,"RegExp",L)}g("RegExp")},365:function(t,e,n){},366:function(t,e,n){},367:function(t,e,n){},368:function(t,e,n){},369:function(t,e,n){},370:function(t,e,n){},371:function(t,e){t.exports=function(t){return null==t}},372:function(t,e,n){},373:function(t,e,n){},374:function(t,e,n){},375:function(t,e,n){},376:function(t,e,n){},377:function(t,e,n){},381:function(t,e,n){"use strict";n.r(e);n(184);var i=n(356),r={name:"SidebarGroup",components:{DropdownTransition:n(383).a},props:["item","open","collapsable","depth"],beforeCreate:function(){this.$options.components.SidebarLinks=n(381).default},methods:{isActive:i.e}},s=(n(403),n(45)),a=Object(s.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,"initial-open-group-index":t.item.initialOpenGroupIndex,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;n(404),n(68);function o(t,e,n,i,r){var s={props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}};return r>2&&(s.style={"padding-left":r+"rem"}),t("RouterLink",s,n)}function u(t,e,n,r,s){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||a>s?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var l=Object(i.e)(r,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,l,e.level-1),u(t,e.children,n,r,s,a+1)])})))}var l={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,r=n.$page,s=(n.$site,n.$route),a=n.$themeConfig,l=n.$themeLocaleConfig,c=e.props,f=c.item,h=c.sidebarDepth,p=Object(i.e)(s,f.path),d="auto"===f.type?p||f.children.some((function(t){return Object(i.e)(s,f.basePath+"#"+t.slug)})):p,g="external"===f.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,f.path,f.title||f.path):o(t,f.path,f.title||f.path,d),v=[r.frontmatter.sidebarDepth,h,l.sidebarDepth,a.sidebarDepth,1].find((function(t){return void 0!==t})),m=l.displayAllHeaders||a.displayAllHeaders;return"auto"===f.type?[g,u(t,f.children,f.basePath,s,v)]:(d||m)&&f.headers&&!i.d.test(f.path)?[g,u(t,Object(i.c)(f.headers),f.path,s,v)]:g}};n(405);function c(t,e){return"group"===e.type&&e.children.some((function(e){return"group"===e.type?c(t,e):"page"===e.type&&Object(i.e)(t,e.path)}))}var f={name:"SidebarLinks",components:{SidebarGroup:a,SidebarLink:Object(s.a)(l,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data:function(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route:function(){this.refreshIndex()}},created:function(){this.refreshIndex()},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if(c(t,i))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(i.e)(this.$route,t.regularPath)}}},h=Object(s.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=h.exports},382:function(t,e,n){"use strict";n(195),n(68),n(184),n(99),n(364),n(46),n(100),n(357),n(69);var i=n(43),r=n(360),s=n(383),a=n(197),o=n.n(a),u={name:"DropdownLink",components:{NavLink:r.a,DropdownTransition:s.a},props:{item:{required:!0}},data:function(){return{open:!1}},computed:{dropdownAriaLabel:function(){return this.item.ariaLabel||this.item.text}},watch:{$route:function(){this.open=!1}},methods:{setOpen:function(t){this.open=t},isLastItemOfArray:function(t,e){return o()(e)===t},handleDropdown:function(){0===event.detail&&this.setOpen(!this.open)}}},l=(n(396),n(45)),c=Object(l.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.handleDropdown}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow down"})]),t._v(" "),n("button",{staticClass:"mobile-dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v("\n          "+t._s(e.text)+"\n        ")]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(i){return n("li",{key:i.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:i},on:{focusout:function(n){t.isLastItemOfArray(i,e.items)&&t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0):n("NavLink",{attrs:{item:e},on:{focusout:function(n){t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null).exports,f=n(356),h={name:"NavLinks",components:{NavLink:r.a,DropdownLink:c},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,r=this.$router.options.routes,s=this.$site.themeConfig.locales||{},a={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map((function(i){var a,o=e[i],u=s[i]&&s[i].label||o.lang;return o.lang===t.$lang?a=n:(a=n.replace(t.$localeConfig.path,i),r.some((function(t){return t.path===a}))||(a=i)),{text:u,link:a}}))};return[].concat(Object(i.a)(this.userNav),[a])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(f.j)(t),{items:(t.items||[]).map(f.j)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}},p=(n(397),Object(l.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null));e.a=p.exports},383:function(t,e,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},r=(n(395),n(45)),s=Object(r.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},384:function(t,e,n){"use strict";var i=n(0),r=n(385);i({target:"String",proto:!0,forced:n(386)("link")},{link:function(t){return r(this,"a","href",t)}})},385:function(t,e,n){var i=n(24),r=/"/g;t.exports=function(t,e,n,s){var a=String(i(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(s).replace(r,"&quot;")+'"'),o+">"+a+"</"+e+">"}},386:function(t,e,n){var i=n(1);t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},387:function(t,e,n){"use strict";n(361)},388:function(t,e,n){var i=n(0),r=n(389);i({global:!0,forced:parseInt!=r},{parseInt:r})},389:function(t,e,n){var i=n(3),r=n(362).trim,s=n(359),a=i.parseInt,o=/^[+-]?0[Xx]/,u=8!==a(s+"08")||22!==a(s+"0x16");t.exports=u?function(t,e){var n=r(String(t));return a(n,e>>>0||(o.test(n)?16:10))}:a},390:function(t,e,n){var i=n(1),r=n(359);t.exports=function(t){return i((function(){return!!r[t]()||"​᠎"!="​᠎"[t]()||r[t].name!==t}))}},391:function(t,e,n){var i=n(4),r=n(103);t.exports=function(t,e,n){var s,a;return r&&"function"==typeof(s=e.constructor)&&s!==n&&i(a=s.prototype)&&a!==n.prototype&&r(t,a),t}},392:function(t,e,n){"use strict";var i,r=n(0),s=n(26).f,a=n(14),o=n(105),u=n(24),l=n(106),c=n(20),f="".endsWith,h=Math.min,p=l("endsWith");r({target:"String",proto:!0,forced:!!(c||p||(i=s(String.prototype,"endsWith"),!i||i.writable))&&!p},{endsWith:function(t){var e=String(u(this));o(t);var n=arguments.length>1?arguments[1]:void 0,i=a(e.length),r=void 0===n?i:h(a(n),i),s=String(t);return f?f.call(e,s,r):e.slice(r-s.length,r)===s}})},393:function(t,e,n){"use strict";n(365)},394:function(t,e,n){"use strict";n(366)},395:function(t,e,n){"use strict";n(367)},396:function(t,e,n){"use strict";n(368)},397:function(t,e,n){"use strict";n(369)},398:function(t,e,n){"use strict";n(370)},399:function(t,e,n){"use strict";n(372)},400:function(t,e,n){var i=n(33),r=n(15),s=n(27);t.exports=function(t){return"string"==typeof t||!r(t)&&s(t)&&"[object String]"==i(t)}},401:function(t,e,n){"use strict";n(373)},402:function(t,e,n){"use strict";n(374)},403:function(t,e,n){"use strict";n(375)},404:function(t,e,n){"use strict";var i=n(0),r=n(32).find,s=n(101),a=n(18),o=!0,u=a("find");"find"in[]&&Array(1).find((function(){o=!1})),i({target:"Array",proto:!0,forced:o||!u},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),s("find")},405:function(t,e,n){"use strict";n(376)},406:function(t,e,n){"use strict";n(377)},410:function(t,e,n){"use strict";n(388),n(25),n(192),n(185),n(98),n(46),n(194),n(357),n(363),n(186),n(68),n(184),n(364),n(100),n(392),n(69),n(358);var i=n(196),r=n.n(i),s=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=r()(e,"title","");return r()(e,"frontmatter.tags")&&(i+=" ".concat(e.frontmatter.tags.join(" "))),n&&(i+=" ".concat(n)),a(t,i)},a=function(t,e){var n=function(t){return t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")},i=new RegExp("[^\0-]"),r=t.split(/\s+/g).map((function(t){return t.trim()})).filter((function(t){return!!t}));if(i.test(t))return r.some((function(t){return e.toLowerCase().indexOf(t)>-1}));var s=t.endsWith(" ");return new RegExp(r.map((function(t,e){return r.length!==e+1||s?"(?=.*\\b".concat(n(t),"\\b)"):"(?=.*\\b".concat(n(t),")")})).join("")+".+","gi").test(e)},o={name:"SearchBox",data:function(){return{query:"",focused:!1,focusIndex:0,placeholder:void 0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$site.themeConfig.searchMaxSuggestions||5,i=this.$localePath,r=[],a=0;a<e.length&&!(r.length>=n);a++){var o=e[a];if(this.getPageLocalePath(o)===i&&this.isSearchable(o))if(s(t,o))r.push(o);else if(o.headers)for(var u=0;u<o.headers.length&&!(r.length>=n);u++){var l=o.headers[u];l.title&&s(t,o,l.title)&&r.push(Object.assign({},o,{path:o.path+"#"+l.slug,header:l}))}}return r}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted:function(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy:function(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter((function(e){return t.path.match(e)})).length>0},onHotkey:function(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}},u=(n(393),n(45)),l=Object(u.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(e,i){return n("li",{key:i,staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){return t.go(i)},mouseenter:function(e){return t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null).exports;n(394);function c(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var f={name:"Navbar",components:{SidebarButton:Object(u.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports,NavLinks:n(382).a,SearchBox:l,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted:function(){var t=this,e=parseInt(c(this.$el,"paddingLeft"))+parseInt(c(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)}},h=(n(398),Object(u.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null));e.a=h.exports},411:function(t,e,n){"use strict";n(46),n(69);var i=n(371),r=n.n(i),s=n(356),a={name:"PageEdit",computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){var t=r()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,e=this.$site.themeConfig,n=e.repo,i=e.docsDir,s=void 0===i?"":i,a=e.docsBranch,o=void 0===a?"master":a,u=e.docsRepo,l=void 0===u?n:u;return t&&l&&this.$page.relativePath?this.createEditLink(n,l,s,o,this.$page.relativePath):null},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,i,r){if(/bitbucket.org/.test(e))return e.replace(s.a,"")+"/src"+"/".concat(i,"/")+(n?n.replace(s.a,"")+"/":"")+r+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default");return/gitlab.com/.test(e)?e.replace(s.a,"")+"/-/edit"+"/".concat(i,"/")+(n?n.replace(s.a,"")+"/":"")+r:(s.i.test(e)?e:"https://github.com/".concat(e)).replace(s.a,"")+"/edit"+"/".concat(i,"/")+(n?n.replace(s.a,"")+"/":"")+r}}},o=(n(399),n(45)),u=Object(o.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null).exports,l=n(400),c=n.n(l),f={name:"PageNav",props:["sidebarItems"],computed:{prev:function(){return p(h.PREV,this)},next:function(){return p(h.NEXT,this)}}};var h={NEXT:{resolveLink:function(t,e){return d(t,e,1)},getThemeLinkConfig:function(t){return t.nextLinks},getPageLinkConfig:function(t){return t.frontmatter.next}},PREV:{resolveLink:function(t,e){return d(t,e,-1)},getThemeLinkConfig:function(t){return t.prevLinks},getPageLinkConfig:function(t){return t.frontmatter.prev}}};function p(t,e){var n=e.$themeConfig,i=e.$page,a=e.$route,o=e.$site,u=e.sidebarItems,l=t.resolveLink,f=t.getThemeLinkConfig,h=t.getPageLinkConfig,p=f(n),d=h(i),g=r()(d)?p:d;return!1===g?void 0:c()(g)?Object(s.k)(o.pages,g,a.path):l(i,u)}function d(t,e,n){var i=[];!function t(e,n){for(var i=0,r=e.length;i<r;i++)"group"===e[i].type?t(e[i].children||[],n):n.push(e[i])}(e,i);for(var r=0;r<i.length;r++){var s=i[r];if("page"===s.type&&s.path===decodeURIComponent(t.path))return i[r+n]}}var g=f,v=(n(401),{components:{PageEdit:u,PageNav:Object(o.a)(g,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n      ←\n      "),"external"===t.prev.type?n("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")])],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},["external"===t.next.type?n("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n      ")]),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null).exports},props:["sidebarItems"]}),m=(n(402),Object(o.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{staticClass:"theme-default-content"}),t._v(" "),n("PageEdit"),t._v(" "),n("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null));e.a=m.exports},412:function(t,e,n){"use strict";var i={name:"Home",components:{NavLink:n(360).a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},r=(n(387),n(45)),s=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),null!==t.data.tagline?n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,(function(e,i){return n("div",{key:i,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[],!1,null,null,null);e.a=s.exports},413:function(t,e,n){"use strict";var i=n(381),r=n(382),s={name:"Sidebar",components:{SidebarLinks:i.default,NavLinks:r.a},props:["items"]},a=(n(406),n(45)),o=Object(a.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null);e.a=o.exports}}]);