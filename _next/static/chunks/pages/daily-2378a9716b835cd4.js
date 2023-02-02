(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[487],{7484:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",a="hour",o="day",u="week",l="month",c="quarter",d="year",f="date",h="Invalid Date",y=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,_=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,l),s=n-i<0,a=e.clone().add(r+(s?-1:1),l);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:d,w:u,d:o,D:f,h:a,m:s,s:i,ms:r,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",p={};p[g]=m;var D=function(t){return t instanceof M},x=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();p[s]&&(i=s),n&&(p[s]=n,i=s);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var o=e.name;p[o]=e,i=o}return!r&&i&&(g=i),i||!r&&g},w=function(t,e){if(D(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new M(n)},S=v;S.l=x,S.i=D,S.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var M=function(){function m(t){this.$L=x(t.locale,null,!0),this.parse(t)}var $=m.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(S.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(y);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return S},$.isValid=function(){return!(this.$d.toString()===h)},$.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return w(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<w(t)},$.$g=function(t,e,n){return S.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,e){var n=this,r=!!S.u(e)||e,c=S.p(t),h=function(t,e){var i=S.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(o)},y=function(t,e){return S.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},_=this.$W,m=this.$M,$=this.$D,v="set"+(this.$u?"UTC":"");switch(c){case d:return r?h(1,0):h(31,11);case l:return r?h(1,m):h(0,m+1);case u:var g=this.$locale().weekStart||0,p=(_<g?_+7:_)-g;return h(r?$-p:$+(6-p),m);case o:case f:return y(v+"Hours",0);case a:return y(v+"Minutes",1);case s:return y(v+"Seconds",2);case i:return y(v+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(t,e){var n,u=S.p(t),c="set"+(this.$u?"UTC":""),h=(n={},n[o]=c+"Date",n[f]=c+"Date",n[l]=c+"Month",n[d]=c+"FullYear",n[a]=c+"Hours",n[s]=c+"Minutes",n[i]=c+"Seconds",n[r]=c+"Milliseconds",n)[u],y=u===o?this.$D+(e-this.$W):e;if(u===l||u===d){var _=this.clone().set(f,1);_.$d[h](y),_.init(),this.$d=_.set(f,Math.min(this.$D,_.daysInMonth())).$d}else h&&this.$d[h](y);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[S.p(t)]()},$.add=function(r,c){var f,h=this;r=Number(r);var y=S.p(c),_=function(t){var e=w(h);return S.w(e.date(e.date()+Math.round(t*r)),h)};if(y===l)return this.set(l,this.$M+r);if(y===d)return this.set(d,this.$y+r);if(y===o)return _(1);if(y===u)return _(7);var m=(f={},f[s]=e,f[a]=n,f[i]=t,f)[y]||1,$=this.$d.getTime()+r*m;return S.w($,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=S.z(this),s=this.$H,a=this.$m,o=this.$M,u=n.weekdays,l=n.months,c=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return S.s(s%12||12,t,"0")},f=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},y={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:S.s(o+1,2,"0"),MMM:c(n.monthsShort,o,l,3),MMMM:c(l,o),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,u,2),ddd:c(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:S.s(s,2,"0"),h:d(1),hh:d(2),a:f(s,a,!0),A:f(s,a,!1),m:String(a),mm:S.s(a,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:i};return r.replace(_,(function(t,e){return e||y[t]||i.replace(":","")}))},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(r,f,h){var y,_=S.p(f),m=w(r),$=(m.utcOffset()-this.utcOffset())*e,v=this-m,g=S.m(this,m);return g=(y={},y[d]=g/12,y[l]=g,y[c]=g/3,y[u]=(v-$)/6048e5,y[o]=(v-$)/864e5,y[a]=v/n,y[s]=v/e,y[i]=v/t,y)[_]||v,h?g:S.a(g)},$.daysInMonth=function(){return this.endOf(l).$D},$.$locale=function(){return p[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=x(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return S.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},m}(),b=M.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",a],["$W",o],["$M",l],["$y",d],["$D",f]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,M,w),t.$i=!0),w},w.locale=x,w.isDayjs=D,w.unix=function(t){return w(1e3*t)},w.en=p[g],w.Ls=p,w.p={},w}()},6744:function(t,e,n){"use strict";var r=n(7484),i=n.n(r);function s(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return o=t.done,t},e:function(t){u=!0,s=t},f:function(){try{o||null==n.return||n.return()}finally{if(u)throw s}}}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}e.Z=function(t){i()(new Date(t)),i()(new Date);var e,n=i()().diff(t,"millisecond"),r=s([{time:"\ubd84",milliSeconds:6e4},{time:"\uc2dc\uac04",milliSeconds:36e5},{time:"\uc77c",milliSeconds:864e5},{time:"\uac1c\uc6d4",milliSeconds:2592e6},{time:"\ub144",milliSeconds:31536e6}].reverse());try{for(r.s();!(e=r.n()).done;){var a=e.value,o=Math.floor(n/a.milliSeconds);if(o>0)return"".concat(o).concat(a.time," \uc804")}}catch(u){r.e(u)}finally{r.f()}return"\ubc29\uae08 \uc804"}},2161:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return y},default:function(){return _}});var r=n(1664),i=n.n(r),s=n(6744),a=n(2790),o=n.n(a),u=n(5893);function l(t){var e=t.date,n=t.title,r=(t.des,t.category),a=t.thumbnailUrl,l=t.slug,c=t.content,d=(0,s.Z)(e);return(0,u.jsx)("div",{className:"w-3/5",children:(0,u.jsxs)("div",{className:o().dailyPostContainer,children:[(0,u.jsx)(i(),{href:"".concat(l),passHref:!0,children:(0,u.jsxs)("div",{className:o().dailyPostTextCard,children:[(0,u.jsx)("div",{className:o().dailyPostCardImage,children:(0,u.jsx)("img",{className:o().dailyPostImg,src:a,alt:"dailypostimage"})}),(0,u.jsxs)("div",{className:"flex flex-col w-full",children:[(0,u.jsx)("div",{className:"xs:text-base md:text-2xl",children:n}),(0,u.jsx)("p",{className:"hidden md:flex md:text-sm",children:(0,u.jsx)("p",{className:o().truncate,children:c})}),(0,u.jsxs)("div",{className:"flex justify-between mt-auto",children:[(0,u.jsx)("div",{className:"Blog"===r?o().dailyPostCard_category_blog:o().dailyPostCard_category_etc,children:r}),(0,u.jsx)("div",{className:o().dailyPostCard_date,children:d})]})]})]})}),(0,u.jsx)("hr",{className:o().dailyPostCard_line})]})})}var c=n(5675),d=n.n(c),f=n(597),h=n.n(f),y=!0,_=function(t){var e=t.posts,n=t.recent;return(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{className:h().upContainer,children:[(0,u.jsxs)("div",{className:h().backgroundImage,children:[n.map((function(t){return(0,u.jsx)(d(),{src:t.thumbnailUrl,alt:"thumbnail",layout:"fill",objectFit:"cover"})})),";"]}),(0,u.jsxs)("div",{className:h().title_container,children:[(0,u.jsx)("h1",{className:h().title,children:"\uc77c\uc0c1"}),(0,u.jsx)("h3",{className:h().subtitle,children:"Daily"})]})]}),(0,u.jsx)("div",{className:"flex flex-col flex-nowrap w-full mb-5 items-center",children:e.map((function(t){return(0,u.jsx)(l,{date:t.date,title:t.title,des:t.description,slug:t._raw.flattenedPath,thumbnailUrl:t.thumbnailUrl,category:t.category,content:t.body.raw},t._id)}))})]})}},6897:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/daily",function(){return n(2161)}])},2790:function(t){t.exports={dailyPostContainer:"DailyPost_dailyPostContainer__N3qd4",dailyPostCardImage:"DailyPost_dailyPostCardImage__GLp7C",dailyPostImg:"DailyPost_dailyPostImg__TwJXd",dailyPostTextCard:"DailyPost_dailyPostTextCard__I26fR",dailyPostCard_title:"DailyPost_dailyPostCard_title__sAcOs",dailyPostCard_date:"DailyPost_dailyPostCard_date__ZZQ0J",dailyPostCard_category_blog:"DailyPost_dailyPostCard_category_blog__pfLZT",dailyPostCard_category_etc:"DailyPost_dailyPostCard_category_etc__9piC_",dailyPostCard_line:"DailyPost_dailyPostCard_line__u7Dns",truncate:"DailyPost_truncate__S98CY"}},597:function(t){t.exports={upContainer:"daily_upContainer__Nh_YJ",backgroundImage:"daily_backgroundImage__vIJqF",title_container:"daily_title_container__ZRB7s",title:"daily_title__uubke",subtitle:"daily_subtitle__2bnyY",post_container:"daily_post_container__LE3YV"}}},function(t){t.O(0,[774,888,179],(function(){return e=6897,t(t.s=e);var e}));var e=t.O();_N_E=e}]);