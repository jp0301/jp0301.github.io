(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6744:function(e,n){"use strict";function t(e,n){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"===typeof e)return i(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(e,n)}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return s=e.done,e},e:function(e){c=!0,a=e},f:function(){try{s||null==t.return||t.return()}finally{if(c)throw a}}}}function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}n.Z=function(e){var n,i=new Date(e),r=(new Date).getTime()-i.getTime(),o=t([{time:"\ubd84",milliSeconds:6e4},{time:"\uc2dc\uac04",milliSeconds:36e5},{time:"\uc77c",milliSeconds:864e5},{time:"\ub2ec",milliSeconds:2592e6},{time:"\ub144",milliSeconds:31536e6}].reverse());try{for(o.s();!(n=o.n()).done;){var a=n.value,s=Math.floor(r/a.milliSeconds);if(s>0)return"".concat(s).concat(a.time," \uc804")}}catch(c){o.e(c)}finally{o.f()}return"\ubc29\uae08 \uc804"}},5889:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return x},default:function(){return j}});var i=t(214),r=t.n(i),o=t(1664),a=t.n(o),s=t(6744),c=t(3494),l=t.n(c),m=t(5675),u=t.n(m),d=t(5893),_=function(e){var n=e.posts;return(0,d.jsx)("div",{children:(0,d.jsx)("section",{children:(0,d.jsx)("div",{className:l().RecentPostContainer,children:n.slice(0,3).map((function(e){return(0,d.jsx)(a(),{href:"/".concat(e.category,"/").concat(e.slug),passHref:!0,children:(0,d.jsxs)("div",{className:l().RecentPostCard,children:[(0,d.jsx)("div",{className:l().RecentPostCardImage,children:(0,d.jsx)(u(),{src:e.thumbnailUrl,alt:"thumbnail",layout:"fill",objectFit:"cover"})}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:e.title}),(0,d.jsx)("p",{children:e.description}),(0,d.jsx)("span",{children:(0,s.Z)(e.date)})]})]})},e.slug)}))})})})},f={src:"/http://jp0301.github.io/jp0301.github.io//_next/static/media/blogMain.5449e825.png",height:1080,width:1920,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAAAAABd+vKJAAAANUlEQVR42mPgFxQRFRUWEmAQFJEUF5SUFmYQFBNSsDBUEWXgkXGNCnRS4WbInzB7Sn9nQRoAaf8H4VxoRRoAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5},h=function(){return(0,d.jsxs)("div",{className:r().mtContain,children:[(0,d.jsx)("div",{className:r().mainTitleImageContainer,children:(0,d.jsx)(u(),{src:f,alt:"mainImage",width:1920,height:600,layout:"responsive",objectFit:"cover"})}),(0,d.jsx)("div",{className:r().titleContain,children:(0,d.jsx)("div",{className:r().mainTitle,children:'"\ub3cc" \ucc98\ub7fc \uc6b0\uc9c1\ud55c \uac1c\ubc1c\uc790\uc758 \ud074\ub77c\uc6b0\ub4dc'})})]})},x=!0,j=function(e){var n=e.workPosts,t=e.projectPosts;return(0,d.jsxs)("div",{className:r().indexContainer,children:[(0,d.jsx)(h,{}),(0,d.jsxs)("div",{className:r().indexContainerSub,children:[(0,d.jsx)("h1",{className:r().recent_title,children:"Work Recent"}),(0,d.jsx)(_,{posts:n}),(0,d.jsx)(a(),{href:"/work",children:(0,d.jsx)("div",{className:r().moreBtnDiv,children:(0,d.jsx)("button",{className:r().moreBtn,children:"M O R E"})})}),(0,d.jsx)("h1",{className:r().recent_title,children:"Project Recent"}),(0,d.jsx)(_,{posts:t}),(0,d.jsx)(a(),{href:"/project",children:(0,d.jsx)("div",{className:r().moreBtnDiv,children:(0,d.jsx)("button",{className:r().moreBtn,children:"M O R E"})})})]}),(0,d.jsx)("div",{className:r().footerContainer,children:"footer"})]})}},8312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5889)}])},214:function(e){e.exports={indexContainer:"Home_indexContainer__p1DTc",indexContainerSub:"Home_indexContainerSub__jCznH",mtContain:"Home_mtContain__Gb_zf",mainTitleImageContainer:"Home_mainTitleImageContainer__ZzQb8",titleContain:"Home_titleContain__SUw9F",mainTitle:"Home_mainTitle__lryxm",subTitle:"Home_subTitle__QVpk0",recent_title:"Home_recent_title__zT47O",moreBtnDiv:"Home_moreBtnDiv___V5ig",moreBtn:"Home_moreBtn__q0dub",footerContainer:"Home_footerContainer__GrMyL"}},3494:function(e){e.exports={RecentPostContainer:"RecentPost_RecentPostContainer__NUa8y",RecentPostCard:"RecentPost_RecentPostCard__Orgz5",RecentPostCardImage:"RecentPost_RecentPostCardImage__a50mi"}}},function(e){e.O(0,[675,774,888,179],(function(){return n=8312,e(e.s=n);var n}));var n=e.O();_N_E=n}]);