(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[487],{7484:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,i="millisecond",r="second",s="minute",a="hour",o="day",u="week",l="month",c="quarter",d="year",f="date",h="Invalid Date",y=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,_={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},$=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},v={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+$(i,2,"0")+":"+$(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,l),s=n-r<0,a=e.clone().add(i+(s?-1:1),l);return+(-(i+(n-r)/(s?r-a:a-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:d,w:u,d:o,D:f,h:a,m:s,s:r,ms:i,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",p={};p[g]=_;var D=function(t){return t instanceof w},S=function t(e,n,i){var r;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();p[s]&&(r=s),n&&(p[s]=n,r=s);var a=e.split("-");if(!r&&a.length>1)return t(a[0])}else{var o=e.name;p[o]=e,r=o}return!i&&r&&(g=r),r||!i&&g},M=function(t,e){if(D(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new w(n)},b=v;b.l=S,b.i=D,b.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var w=function(){function _(t){this.$L=S(t.locale,null,!0),this.parse(t)}var $=_.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(y);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return b},$.isValid=function(){return!(this.$d.toString()===h)},$.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return M(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<M(t)},$.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,e){var n=this,i=!!b.u(e)||e,c=b.p(t),h=function(t,e){var r=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return i?r:r.endOf(o)},y=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,_=this.$M,$=this.$D,v="set"+(this.$u?"UTC":"");switch(c){case d:return i?h(1,0):h(31,11);case l:return i?h(1,_):h(0,_+1);case u:var g=this.$locale().weekStart||0,p=(m<g?m+7:m)-g;return h(i?$-p:$+(6-p),_);case o:case f:return y(v+"Hours",0);case a:return y(v+"Minutes",1);case s:return y(v+"Seconds",2);case r:return y(v+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(t,e){var n,u=b.p(t),c="set"+(this.$u?"UTC":""),h=(n={},n[o]=c+"Date",n[f]=c+"Date",n[l]=c+"Month",n[d]=c+"FullYear",n[a]=c+"Hours",n[s]=c+"Minutes",n[r]=c+"Seconds",n[i]=c+"Milliseconds",n)[u],y=u===o?this.$D+(e-this.$W):e;if(u===l||u===d){var m=this.clone().set(f,1);m.$d[h](y),m.init(),this.$d=m.set(f,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](y);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[b.p(t)]()},$.add=function(i,c){var f,h=this;i=Number(i);var y=b.p(c),m=function(t){var e=M(h);return b.w(e.date(e.date()+Math.round(t*i)),h)};if(y===l)return this.set(l,this.$M+i);if(y===d)return this.set(d,this.$y+i);if(y===o)return m(1);if(y===u)return m(7);var _=(f={},f[s]=e,f[a]=n,f[r]=t,f)[y]||1,$=this.$d.getTime()+i*_;return b.w($,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var i=t||"YYYY-MM-DDTHH:mm:ssZ",r=b.z(this),s=this.$H,a=this.$m,o=this.$M,u=n.weekdays,l=n.months,c=function(t,n,r,s){return t&&(t[n]||t(e,i))||r[n].slice(0,s)},d=function(t){return b.s(s%12||12,t,"0")},f=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},y={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:b.s(o+1,2,"0"),MMM:c(n.monthsShort,o,l,3),MMMM:c(l,o),D:this.$D,DD:b.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,u,2),ddd:c(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:b.s(s,2,"0"),h:d(1),hh:d(2),a:f(s,a,!0),A:f(s,a,!1),m:String(a),mm:b.s(a,2,"0"),s:String(this.$s),ss:b.s(this.$s,2,"0"),SSS:b.s(this.$ms,3,"0"),Z:r};return i.replace(m,(function(t,e){return e||y[t]||r.replace(":","")}))},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(i,f,h){var y,m=b.p(f),_=M(i),$=(_.utcOffset()-this.utcOffset())*e,v=this-_,g=b.m(this,_);return g=(y={},y[d]=g/12,y[l]=g,y[c]=g/3,y[u]=(v-$)/6048e5,y[o]=(v-$)/864e5,y[a]=v/n,y[s]=v/e,y[r]=v/t,y)[m]||v,h?g:b.a(g)},$.daysInMonth=function(){return this.endOf(l).$D},$.$locale=function(){return p[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=S(t,e,!0);return i&&(n.$L=i),n},$.clone=function(){return b.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},_}(),x=w.prototype;return M.prototype=x,[["$ms",i],["$s",r],["$m",s],["$H",a],["$W",o],["$M",l],["$y",d],["$D",f]].forEach((function(t){x[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,w,M),t.$i=!0),M},M.locale=S,M.isDayjs=D,M.unix=function(t){return M(1e3*t)},M.en=p[g],M.Ls=p,M.p={},M}()},5812:function(t,e,n){"use strict";n.d(e,{Z:function(){return d}});var i=n(1664),r=n.n(i),s=n(5675),a=n.n(s),o=n(6744),u=n(2790),l=n.n(u),c=n(5893);function d(t){var e=t.date,n=t.title,i=t.des,s=t.category,u=t.thumbnailUrl,d=t.slug,f=(0,o.Z)(e);return(0,c.jsx)("div",{className:l().dailyPostContainer,children:(0,c.jsx)(r(),{href:"".concat(d),passHref:!0,children:(0,c.jsxs)("div",{className:l().dailyPostCard,children:[(0,c.jsx)("div",{className:l().dailyPostCardImage,children:(0,c.jsx)(a(),{src:u,alt:"thumbnail",layout:"fill",objectFit:"cover"})}),(0,c.jsxs)("div",{className:l().dailyPostCardText,children:[(0,c.jsx)("div",{className:l().dailyCategory,children:s}),(0,c.jsx)("h3",{className:l().dailyTitle,children:n}),(0,c.jsx)("div",{className:l().dailyDes,children:i}),(0,c.jsx)("div",{className:l().dailyDate,children:f})]})]})})})}},6744:function(t,e,n){"use strict";var i=n(7484),r=n.n(i);function s(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return o=t.done,t},e:function(t){u=!0,s=t},f:function(){try{o||null==n.return||n.return()}finally{if(u)throw s}}}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}e.Z=function(t){r()(new Date(t)),r()(new Date);var e,n=r()().diff(t,"millisecond"),i=s([{time:"\ubd84",milliSeconds:6e4},{time:"\uc2dc\uac04",milliSeconds:36e5},{time:"\uc77c",milliSeconds:864e5},{time:"\ub2ec",milliSeconds:2592e6},{time:"\ub144",milliSeconds:31536e6}].reverse());try{for(i.s();!(e=i.n()).done;){var a=e.value,o=Math.floor(n/a.milliSeconds);if(o>0)return"".concat(o).concat(a.time," \uc804")}}catch(u){i.e(u)}finally{i.f()}return"\ubc29\uae08 \uc804"}},4390:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return l}});var i=n(5812),r=n(5675),s=n.n(r),a=n(597),o=n.n(a),u=n(5893),l=!0;e.default=function(t){var e=t.posts,n=t.recent;return(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{className:o().upContainer,children:[(0,u.jsxs)("div",{className:o().backgroundImage,children:[n.map((function(t){return(0,u.jsx)(s(),{src:t.thumbnailUrl,alt:"thumbnail",layout:"fill",objectFit:"cover"})})),";"]}),(0,u.jsxs)("div",{className:o().title_container,children:[(0,u.jsx)("h1",{className:o().title,children:"\uc77c\uc0c1"}),(0,u.jsx)("h3",{className:o().subtitle1,children:"Daily"}),(0,u.jsx)("h3",{className:o().subtitle2,children:"\ud3b8\ud558\uac8c \uc544\ubb34\uac70\ub098 \ub044\uc801\ub044\uc801..."})]})]}),(0,u.jsx)("div",{className:o().post_container,children:e.map((function(t){return(0,u.jsx)(i.Z,{date:t.date,title:t.title,des:t.description,slug:t._raw.flattenedPath,thumbnailUrl:t.thumbnailUrl,category:t.category},t._id)}))})]})}},6897:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/daily",function(){return n(4390)}])},2790:function(t){t.exports={dailyPostContainer:"DailyPost_dailyPostContainer__N3qd4",dailyPostCard:"DailyPost_dailyPostCard__RocK8",dailyPostCardImage:"DailyPost_dailyPostCardImage__GLp7C",dailyPostCardText:"DailyPost_dailyPostCardText__rB4qO",dailyCategory:"DailyPost_dailyCategory__DTGXF",dailyTitle:"DailyPost_dailyTitle__nUlY1",dailyDes:"DailyPost_dailyDes__BS40E",dailyDate:"DailyPost_dailyDate__3udT2"}},597:function(t){t.exports={upContainer:"daily_upContainer__Nh_YJ",backgroundImage:"daily_backgroundImage__vIJqF",title_container:"daily_title_container__ZRB7s",title:"daily_title__uubke",subtitle1:"daily_subtitle1__Q_KN4",subtitle2:"daily_subtitle2__5H6fy",post_container:"daily_post_container__LE3YV"}}},function(t){t.O(0,[774,888,179],(function(){return e=6897,t(t.s=e);var e}));var e=t.O();_N_E=e}]);