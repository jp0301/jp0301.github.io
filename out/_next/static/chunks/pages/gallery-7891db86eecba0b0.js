(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[214],{6744:function(t,e){"use strict";function i(t,e){var i="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=function(t,e){if(!t)return;if("string"===typeof t)return n(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return n(t,e)}(t))||e&&t&&"number"===typeof t.length){i&&(t=i);var a=0,r=function(){};return{s:r,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,s=!0,o=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return s=t.done,t},e:function(t){o=!0,l=t},f:function(){try{s||null==i.return||i.return()}finally{if(o)throw l}}}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}e.Z=function(t){var e,n=new Date(t),a=(new Date).getTime()-n.getTime(),r=i([{time:"\ubd84",milliSeconds:6e4},{time:"\uc2dc\uac04",milliSeconds:36e5},{time:"\uc77c",milliSeconds:864e5},{time:"\ub2ec",milliSeconds:2592e6},{time:"\ub144",milliSeconds:31536e6}].reverse());try{for(r.s();!(e=r.n()).done;){var l=e.value,s=Math.floor(a/l.milliSeconds);if(s>0)return"".concat(s).concat(l.time," \uc804")}}catch(o){r.e(o)}finally{r.f()}return"\ubc29\uae08 \uc804"}},9884:function(t,e,i){"use strict";i.d(e,{Z:function(){return u}});var n=i(1664),a=i.n(n),r=i(6744),l=i(2790),s=i.n(l),o=i(5675),c=i.n(o),d=i(5893);function u(t){var e=t.date,i=t.title,n=t.des,l=t.category,o=t.thumbnailUrl,u=t.slug,_=(0,r.Z)(e);return(0,d.jsx)("div",{className:s().dailyPostContainer,children:(0,d.jsx)(a(),{href:"".concat(u),passHref:!0,children:(0,d.jsxs)("div",{className:s().dailyPostCard,children:[(0,d.jsx)("div",{className:s().dailyPostCardImage,children:(0,d.jsx)(c(),{src:o,alt:"thumbnail",layout:"fill",objectFit:"cover"})}),(0,d.jsxs)("div",{className:s().dailyPostCardText,children:[(0,d.jsx)("div",{className:s().dailyCategory,children:l}),(0,d.jsx)("h3",{className:s().dailyTitle,children:i}),(0,d.jsx)("div",{className:s().dailyDes,children:n}),(0,d.jsx)("div",{className:s().dailyDate,children:_})]})]})})})}},3416:function(t,e,i){"use strict";i.r(e),i.d(e,{__N_SSG:function(){return d}});var n=i(9884),a=i(9200),r=i(5675),l=i.n(r),s=i(597),o=i.n(s),c=i(5893),d=!0;e.default=function(t){var e=t.posts,i=t.recent;return(0,c.jsxs)("div",{children:[(0,c.jsxs)("div",{className:o().upContainer,children:[(0,c.jsxs)("div",{className:o().backgroundImage,children:[i.map((function(t){return(0,c.jsx)(l(),{src:a.O+t.thumbnailUrl,alt:"thumbnail",layout:"fill",objectFit:"cover"})})),";"]}),(0,c.jsxs)("div",{className:o().title_container,children:[(0,c.jsx)("h1",{className:o().title,children:"\uac24\ub7ec\ub9ac"}),(0,c.jsx)("h3",{className:o().subtitle1,children:"Gallery"}),(0,c.jsx)("h3",{className:o().subtitle2,children:"\uc9c0\ub098\uac00\ub2e4 \ub9c9 \ucc0d\uc5b4\uc11c \uc62c\ub9ac\ub294.."})]})]}),e.map((function(t){return(0,c.jsx)(n.Z,{date:t.date,title:t.title,des:t.description,slug:t._raw.flattenedPath,thumbnailUrl:a.O+t.thumbnailUrl,category:t.category},t._id)}))]})}},4080:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gallery",function(){return i(3416)}])},2790:function(t){t.exports={dailyPostContainer:"DailyPost_dailyPostContainer__N3qd4",dailyPostCard:"DailyPost_dailyPostCard__RocK8",dailyPostCardImage:"DailyPost_dailyPostCardImage__GLp7C",dailyPostCardText:"DailyPost_dailyPostCardText__rB4qO",dailyCategory:"DailyPost_dailyCategory__DTGXF",dailyTitle:"DailyPost_dailyTitle__nUlY1",dailyDes:"DailyPost_dailyDes__BS40E",dailyDate:"DailyPost_dailyDate__3udT2"}},597:function(t){t.exports={upContainer:"daily_upContainer__Nh_YJ",backgroundImage:"daily_backgroundImage__vIJqF",title_container:"daily_title_container__ZRB7s",title:"daily_title__uubke",subtitle1:"daily_subtitle1__Q_KN4",subtitle2:"daily_subtitle2__5H6fy",post_container:"daily_post_container__LE3YV"}}},function(t){t.O(0,[675,774,888,179],(function(){return e=4080,t(t.s=e);var e}));var e=t.O();_N_E=e}]);