(this.webpackJsonptwitter_trends=this.webpackJsonptwitter_trends||[]).push([[4],{83:function(t,e,n){},99:function(t,e,n){"use strict";n.r(e);var c=n(8),a=n(16),s=n.n(a),r=n(18),o=n(1),i=n(2),d=n(25),l=n(6),j=n(10),u=(n(83),n(19)),b=n(30),h=n(7);var p=function(){var t=Object(i.useContext)(j.a),e=t.city,n=t.country,c=t.setData,a=t.setTime,s=Object(i.useState)(null)[1],r=window.sessionStorage.getItem("data");if(null===r){var d=void 0===e?n:e;Object(b.b)(d,c,a,s),r=window.sessionStorage.getItem("data")}var l=JSON.parse(r);return l?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("p",{className:"tt-tag",children:"Trending Now"}),Object(o.jsx)("ul",{className:"tt-trends",children:l[0].trends.filter((function(t,e){return e<10})).map((function(t){return Object(o.jsx)("li",{children:Object(o.jsx)(h.b,{to:"/".concat(n).concat(void 0===e?"":"/"+e,"/trend/").concat(window.encodeURIComponent(t.name)),children:t.name})},t.index)}))})]}):null},m=n(84),O=n(95);var x=function(t){if(t)var e=t.mapData.filter((function(t){return void 0!==Object(O.getCode)(t.name)})).map((function(t){return{country:Object(O.getCode)(t.name),value:t.trend.tweet_volume+1}}));return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(m.WorldMap,{color:"red",size:"md",data:e,tooltipBgColor:"#017acd",styleFunction:function(t){var e={fill:"#017acd",fillOpacity:.5+1.5*(t.countryValue-t.minValue)/(2*t.maxValue-t.minValue),stroke:"black",strokeWidth:1,strokeOpacity:1.5};return 1===t.countryValue?(e.fill="#c0c0c0",e):e},tooltipTextFunction:function(t,e,n){return 1===Number(n)?t.toString():t+" : "+n}})})},g=n(31),v=n(29);var f=function(){var t=Object(r.a)(s.a.mark((function t(e,n,c){var a,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://trendsend.herokuapp.com/apis/trends/trend-details",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({trend:e})});case 3:if(!(a=t.sent).ok){t.next=12;break}return t.next=7,a.json();case 7:r=t.sent,n(r.data),c(null),t.next=14;break;case 12:throw console.log(a),a;case 14:t.next=20;break;case 16:t.prev=16,t.t0=t.catch(0),console.log(t.t0),c(t.t0);case 20:case"end":return t.stop()}}),t,null,[[0,16]])})));return function(e,n,c){return t.apply(this,arguments)}}();e.default=function(){var t=function(t){return window.decodeURIComponent(t)}(Object(l.g)().hashtag),e=Object(i.useContext)(j.a),n=e.city,a=e.country,s=void 0===n?a:n,r=Object(i.useState)(null),b=Object(c.a)(r,2),h=b[0],m=b[1],O=Object(i.useState)(s),w=Object(c.a)(O,2),y=w[0],N=w[1],T=Object(i.useState)({trendingLocations:[]}),C=Object(c.a)(T,2),k=C[0],L=C[1];Object(i.useLayoutEffect)((function(){N(y)}),[y]);var _,S,I,U,R,F,V,H,J=k.trendingLocations.filter((function(t){return t.name===y}));return Object(i.useEffect)((function(){f(t,L,m)}),[t,y]),null===h?k.trendingLocations.length>=1?Object(o.jsxs)("div",{className:"hashtag",children:[Object(o.jsxs)(d.b,{children:[Object(o.jsx)("meta",{name:"description",content:"Find details about Current Top trending hashtags and Topics on Twitter in ".concat(a," ").concat(n,".")}),Object(o.jsx)("meta",{name:"title",content:"Current Twitter Hashtag Name is ".concat(t)}),Object(o.jsx)("meta",{name:"twitter:site",content:"@alldaytrends1"}),Object(o.jsx)("meta",{property:"og:type",content:"website"}),Object(o.jsx)("meta",{property:"og:url",content:"https://alldaytrends.com/"}),Object(o.jsx)("meta",{property:"og:site_name",content:"alldaytrends"}),Object(o.jsx)("meta",{property:"og:title",content:"Current Twitter Hashtag Name is ".concat(t)}),Object(o.jsx)("meta",{property:"og:description",content:"Find details about Top trending hashtags on Twitter in ".concat(a," ").concat(n,".")}),Object(o.jsx)("meta",{property:"og:image",content:"%PUBLIC_URL%/logo.png"}),Object(o.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),Object(o.jsx)("meta",{property:"twitter:url",content:"https://alldaytrends.com/"}),Object(o.jsx)("meta",{property:"twitter:title",content:"This tweets is trending in ".concat(k.trendingLocations.length," locations")}),Object(o.jsx)("meta",{property:"twitter:description",content:"This tweet is trending is these locations ".concat(k.trendingLocations.map((function(t){return t.name})))}),Object(o.jsx)("meta",{property:"twitter:image",content:"%PUBLIC_URL%/logo.png"}),Object(o.jsxs)("title",{children:[t," \ud83d\udd4a\ufe0f ",void 0===n?a:n+", "+a," \ud83d\udd4a\ufe0f Twitter Trends"]})]}),Object(o.jsx)("div",{className:"hashtag-box",children:Object(o.jsxs)("div",{children:[Object(o.jsxs)("h2",{className:"hash-line",children:["Trending at",Object(o.jsxs)("span",{className:"hash-index",children:["#",null===(_=J[0])||void 0===_||null===(S=_.trend)||void 0===S?void 0:S.index]}),"in",Object(o.jsxs)("select",{className:"country-drop",onChange:function(t){N(t.target.value)},children:[k.trendingLocations.map((function(t){return Object(o.jsx)("option",{selected:y===t.name,children:t.name},t.name)}))," "]})]}),Object(o.jsx)("div",{children:Object(o.jsx)("a",{className:"hashtag-name",href:"https://twitter.com/search?q=".concat(window.encodeURIComponent(t),"&src=typed_query"),target:"_blank",rel:"noreferrer",children:t})}),Object(o.jsxs)("div",{className:"details",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{className:"details-1",children:0===(null===(I=J[0])||void 0===I||null===(U=I.trend)||void 0===U?void 0:U.tweet_volume)?"N.A":Object(v.b)(null===(R=J[0])||void 0===R||null===(F=R.trend)||void 0===F?void 0:F.tweet_volume)}),"No. of Tweets"]}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("span",{className:"details-1",children:["#",null===(V=J[0])||void 0===V||null===(H=V.trend)||void 0===H?void 0:H.index]}),"Highest Rank"]})]}),Object(o.jsx)("div",{className:"tweet-location",children:Object(o.jsxs)("p",{children:["Tweeted in",Object(o.jsx)("span",{children:k.trendingLocations.length}),"other locations."]})}),Object(o.jsxs)("div",{children:[" ",Object(o.jsx)(x,{mapData:k.trendingLocations})," "," "]})]})}),Object(o.jsx)("div",{className:"top-tweets-box",children:Object(o.jsx)(p,{})})]}):Object(o.jsx)("div",{className:"hashtag",children:Object(o.jsx)("div",{className:"hash-loader",children:Object(o.jsx)(u.HashLoader,{color:"#017acd"})})}):Object(o.jsx)(g.a,{})}}}]);
//# sourceMappingURL=4.ff0fed20.chunk.js.map