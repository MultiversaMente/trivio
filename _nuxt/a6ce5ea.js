(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{276:function(t,r,o){var content=o(282);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(51).default)("e70e1bfc",content,!0,{sourceMap:!1})},277:function(t,r,o){var content=o(284);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(51).default)("68aafd56",content,!0,{sourceMap:!1})},281:function(t,r,o){"use strict";var e=o(276);o.n(e).a},282:function(t,r,o){(r=o(50)(!1)).push([t.i,".banner[data-v-c1e5f9f2]{width:100%;height:14rem}.bg--fantasy[data-v-c1e5f9f2]{--gradient-from-color:rgba(97,26,44,0.50196);--gradient-color-stops:var(--gradient-from-color),var(--gradient-to-color,rgba(97,26,44,0));--gradient-via-color:rgba(141,8,46,0.50196);--gradient-color-stops:var(--gradient-from-color),var(--gradient-via-color),var(--gradient-to-color,rgba(141,8,46,0));--gradient-to-color:rgba(97,26,44,0.50196)}.bg--fantasy[data-v-c1e5f9f2],.bg--scifi[data-v-c1e5f9f2]{background-image:linear-gradient(90deg,var(--gradient-color-stops))}.bg--scifi[data-v-c1e5f9f2]{--gradient-from-color:rgba(38,61,89,0.50196);--gradient-color-stops:var(--gradient-from-color),var(--gradient-to-color,rgba(38,61,89,0));--gradient-via-color:rgba(64,106,136,0.50196);--gradient-color-stops:var(--gradient-from-color),var(--gradient-via-color),var(--gradient-to-color,rgba(64,106,136,0));--gradient-to-color:rgba(38,61,89,0.50196)}.bg--horror[data-v-c1e5f9f2]{background-image:linear-gradient(90deg,var(--gradient-color-stops));--gradient-from-color:rgba(45,74,49,0.50196);--gradient-color-stops:var(--gradient-from-color),var(--gradient-to-color,rgba(45,74,49,0));--gradient-via-color:rgba(114,146,88,0.50196);--gradient-color-stops:var(--gradient-from-color),var(--gradient-via-color),var(--gradient-to-color,rgba(114,146,88,0));--gradient-to-color:rgba(45,74,49,0.50196)}",""]),t.exports=r},283:function(t,r,o){"use strict";var e=o(277);o.n(e).a},284:function(t,r,o){(r=o(50)(!1)).push([t.i,".nuxt-content-container,.nuxt-content-editor{background-color:transparent}.bg-main{background:radial-gradient(circle closest-side,#572361,#17162e)}",""]),t.exports=r},300:function(t,r,o){"use strict";o.r(r);o(26);var e=o(5),n={asyncData:function(t){return Object(e.a)(regeneratorRuntime.mark((function r(){var o,e,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.$content,e=t.params,r.next=3,o("books",e.slug).fetch();case 3:return n=r.sent,r.abrupt("return",{page:n});case 5:case"end":return r.stop()}}),r)})))()}},c=(o(281),o(283),o(12)),component=Object(c.a)(n,(function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("div",{staticClass:"flex flex-col h-full overflow-auto"},[o("div",{staticClass:"flex-none banner",class:["bg--"+t.page.category]},[o("div",{staticClass:"container flex items-center justify-around flex-grow h-full px-4 py-8 mx-auto"},[o("IconBase",{staticClass:"h-full",attrs:{"icon-name":t.page.category}}),t._v(" "),o("div",{staticClass:"text-center",class:["text-"+t.page.category]},[o("h1",{staticClass:"text-5xl",domProps:{textContent:t._s(t.page.title)}}),t._v(" "),o("h1",{staticClass:"text-3xl",domProps:{textContent:t._s(t.page.author)}})])],1)]),t._v(" "),o("article",{staticClass:"container flex-1 py-12 mx-auto bg-main"},[o("nuxt-content",{staticClass:"px-8 mx-auto prose text-center text-white",attrs:{document:t.page}})],1),t._v(" "),o("div",{staticClass:"flex-none h-8",class:["bg--"+t.page.category]})])}),[],!1,null,"c1e5f9f2",null);r.default=component.exports;installComponents(component,{IconBase:o(66).default})}}]);