(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{182:function(t,e,n){const r=n(7294);const i=r.forwardRef((function({title:t,titleId:e,...n},i){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":e},n),t?r.createElement("title",{id:e},t):null,r.createElement("path",{fillRule:"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z",clipRule:"evenodd"}))}));t.exports=i},7484:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",o="hour",a="day",u="week",c="month",l="quarter",f="year",d="date",h="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},p=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},y={s:p,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+p(r,2,"0")+":"+p(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,o=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:f,w:u,d:a,D:d,h:o,m:s,s:i,ms:r,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",_={};_[g]=v;var w=function(t){return t instanceof D},M=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();_[s]&&(i=s),n&&(_[s]=n,i=s);var o=e.split("-");if(!i&&o.length>1)return t(o[0])}else{var a=e.name;_[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},x=function(t,e){if(w(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new D(n)},S=y;S.l=M,S.i=w,S.w=function(t,e){return x(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var D=function(){function v(t){this.$L=M(t.locale,null,!0),this.parse(t)}var p=v.prototype;return p.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(S.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(m);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},p.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},p.$utils=function(){return S},p.isValid=function(){return!(this.$d.toString()===h)},p.isSame=function(t,e){var n=x(t);return this.startOf(e)<=n&&n<=this.endOf(e)},p.isAfter=function(t,e){return x(t)<this.startOf(e)},p.isBefore=function(t,e){return this.endOf(e)<x(t)},p.$g=function(t,e,n){return S.u(t)?this[e]:this.set(n,t)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(t,e){var n=this,r=!!S.u(e)||e,l=S.p(t),h=function(t,e){var i=S.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},m=function(t,e){return S.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},$=this.$W,v=this.$M,p=this.$D,y="set"+(this.$u?"UTC":"");switch(l){case f:return r?h(1,0):h(31,11);case c:return r?h(1,v):h(0,v+1);case u:var g=this.$locale().weekStart||0,_=($<g?$+7:$)-g;return h(r?p-_:p+(6-_),v);case a:case d:return m(y+"Hours",0);case o:return m(y+"Minutes",1);case s:return m(y+"Seconds",2);case i:return m(y+"Milliseconds",3);default:return this.clone()}},p.endOf=function(t){return this.startOf(t,!1)},p.$set=function(t,e){var n,u=S.p(t),l="set"+(this.$u?"UTC":""),h=(n={},n[a]=l+"Date",n[d]=l+"Date",n[c]=l+"Month",n[f]=l+"FullYear",n[o]=l+"Hours",n[s]=l+"Minutes",n[i]=l+"Seconds",n[r]=l+"Milliseconds",n)[u],m=u===a?this.$D+(e-this.$W):e;if(u===c||u===f){var $=this.clone().set(d,1);$.$d[h](m),$.init(),this.$d=$.set(d,Math.min(this.$D,$.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},p.set=function(t,e){return this.clone().$set(t,e)},p.get=function(t){return this[S.p(t)]()},p.add=function(r,l){var d,h=this;r=Number(r);var m=S.p(l),$=function(t){var e=x(h);return S.w(e.date(e.date()+Math.round(t*r)),h)};if(m===c)return this.set(c,this.$M+r);if(m===f)return this.set(f,this.$y+r);if(m===a)return $(1);if(m===u)return $(7);var v=(d={},d[s]=e,d[o]=n,d[i]=t,d)[m]||1,p=this.$d.getTime()+r*v;return S.w(p,this)},p.subtract=function(t,e){return this.add(-1*t,e)},p.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=S.z(this),s=this.$H,o=this.$m,a=this.$M,u=n.weekdays,c=n.months,l=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},f=function(t){return S.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:S.s(a+1,2,"0"),MMM:l(n.monthsShort,a,c,3),MMMM:l(c,a),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,u,2),ddd:l(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:S.s(s,2,"0"),h:f(1),hh:f(2),a:d(s,o,!0),A:d(s,o,!1),m:String(o),mm:S.s(o,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:i};return r.replace($,(function(t,e){return e||m[t]||i.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(r,d,h){var m,$=S.p(d),v=x(r),p=(v.utcOffset()-this.utcOffset())*e,y=this-v,g=S.m(this,v);return g=(m={},m[f]=g/12,m[c]=g,m[l]=g/3,m[u]=(y-p)/6048e5,m[a]=(y-p)/864e5,m[o]=y/n,m[s]=y/e,m[i]=y/t,m)[$]||y,h?g:S.a(g)},p.daysInMonth=function(){return this.endOf(c).$D},p.$locale=function(){return _[this.$L]},p.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=M(t,e,!0);return r&&(n.$L=r),n},p.clone=function(){return S.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},v}(),b=D.prototype;return x.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",o],["$W",a],["$M",c],["$y",f],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),x.extend=function(t,e){return t.$i||(t(e,D,x),t.$i=!0),x},x.locale=M,x.isDayjs=w,x.unix=function(t){return x(1e3*t)},x.en=_[g],x.Ls=_,x.p={},x}()},5929:function(t,e,n){"use strict";n.d(e,{z:function(){return o}});var r=n(7294),i=n(3935),s=n(1220);const o=(t,e={})=>r.useMemo((()=>((t,e={})=>{const n={React:r,ReactDOM:i,_jsx_runtime:s.i,...e};return new Function(...Object.keys(n),t)(...Object.values(n)).default})(t,e)),[t,e])},6744:function(t,e,n){"use strict";var r=n(7484),i=n.n(r);function s(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,s=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw s}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}e.Z=function(t){i()(new Date(t)),i()(new Date);var e,n=i()().diff(t,"millisecond"),r=s([{time:"\ubd84",milliSeconds:6e4},{time:"\uc2dc\uac04",milliSeconds:36e5},{time:"\uc77c",milliSeconds:864e5},{time:"\uac1c\uc6d4",milliSeconds:2592e6},{time:"\ub144",milliSeconds:31536e6}].reverse());try{for(r.s();!(e=r.n()).done;){var o=e.value,a=Math.floor(n/o.milliSeconds);if(a>0)return"".concat(a).concat(o.time," \uc804")}}catch(u){r.e(u)}finally{r.f()}return"\ubc29\uae08 \uc804"}},3947:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var r=n(5675),i=n.n(r),s=n(6744),o=n(1221),a=n.n(o),u=n(182),c=n(5893);function l(t){var e=t.post,n=(0,s.Z)(e.date);return(0,c.jsx)("div",{className:a().postContainer,children:(0,c.jsxs)("div",{className:a().postTitleContainer,children:[(0,c.jsx)("div",{className:a().postTitleImage,children:(0,c.jsx)(i(),{src:e.thumbnailUrl,alt:"thumbnail",layout:"fill",objectFit:"cover"})}),(0,c.jsx)("div",{className:a().title_container,children:(0,c.jsxs)("div",{className:"flex flex-col flex-nowrap pt-20 w-full items-center",children:[(0,c.jsx)("div",{className:"text-lg font-bold pb-5 text-highlight-red",children:e.category}),(0,c.jsx)("div",{className:"text-lg md:text-2xl pb-4 drop-shadow-lg font-extrabold",children:e.title}),(0,c.jsxs)("div",{className:"flex text-base pt-2 pb-5",children:[(0,c.jsx)(u,{className:"w-5 h-5 mr-2"}),(0,c.jsx)("div",{className:"text-md md:text-sm text-gray-font-color",children:n})]})]})})]})})}},6459:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return a}});var r=n(9332),i=n(5929),s=n(3947),o=n(5893),a=!0;e.default=function(t){var e=t.post,n=(0,i.z)(e.body.code);return(0,o.jsxs)(r.Z,{children:[(0,o.jsx)(s.Z,{post:e}),(0,o.jsx)("div",{className:"flex flex-col flex-nowrap pt-5 items-center",children:(0,o.jsx)("div",{className:"w-full md:w-[860px] text-gray-font-color",children:(0,o.jsx)(n,{})})})]})}},3520:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/work/[slug]",function(){return n(6459)}])},1221:function(t){t.exports={postTitleContainer:"postTitle_postTitleContainer__nTXzm",postContainer:"postTitle_postContainer__A6pu_",postTitleImage:"postTitle_postTitleImage__9a_LY",title_container:"postTitle_title_container__UQtiS",title:"postTitle_title__1bzMF",date:"postTitle_date__3BaRM"}},1220:function(t,e,n){const r=n(5893);t.exports.i=r}},function(t){t.O(0,[774,888,179],(function(){return e=3520,t(t.s=e);var e}));var e=t.O();_N_E=e}]);