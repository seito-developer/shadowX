(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(e,t,a){},34:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),o=a.n(r),i=(a(22),a(2)),s=a(11),l=(a(34),a(26)),b=a.n(l),d=a(75),u=a(28),j=a(74),p=a(3);var O=function(){var e,t=Object(n.useRef)(""),a=Object(n.useState)({ref:t,url:"https://player.vimeo.com/video/575873877",width:"100%",height:"100%",loop:!1,played:{played:0},playing:!1,playbackRate:1}),c=Object(s.a)(a,2),r=c[0],o=c[1],l=Object(n.useState)(0),O=Object(s.a)(l,2),g=O[0],y=O[1],m=Object(n.useState)({start:0,end:g}),h=Object(s.a)(m,2),x=h[0],f=h[1],v=Object(n.useState)(!1),N=Object(s.a)(v,2),k=N[0],S=N[1],C=Object(n.useState)(1),_=Object(s.a)(C,2),F=_[0],R=_[1],T=function(){console.log(x.start),t.current.seekTo(x.start)},w=Object(u.a)({overrides:{MuiSlider:{root:{height:10},thumb:{height:26,width:26},track:{height:20,borderRadius:10},rail:{height:20,borderRadius:10}}}}),P=function(e,a){if(!Array.isArray(a)){var n,c=.01*a;o(Object(i.a)(Object(i.a)({},r),{},{played:{played:c}})),n=c,t.current.seekTo(parseFloat(n))}};return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)("div",{className:"player",children:[Object(p.jsx)("div",{className:"player-wrapper",children:Object(p.jsx)(b.a,Object(i.a)(Object(i.a)({className:"react-player"},r),{},{onProgress:function(t){var a;o(Object(i.a)(Object(i.a)({},r),{},{played:t})),console.log("now: ",t.playedSeconds),a=t.playedSeconds,k&&a>x.end&&(console.log("fire!"),T(),o(Object(i.a)(Object(i.a)({},r),{},{playing:!1})),clearTimeout(e),e=setTimeout((function(){o(Object(i.a)(Object(i.a)({},r),{},{playing:!0}))}),500))},onReady:T,onEnded:function(){return console.log("end!"),o(Object(i.a)(Object(i.a)({},r),{},{playing:!1})),T(),clearTimeout(e),void(e=setTimeout((function(){o(Object(i.a)(Object(i.a)({},r),{},{playing:!0}))}),500))},onStart:function(){console.log("start!"),y(t.current.getDuration()),T()},onPlay:function(){console.log("PlayStart!"),T()}}))}),Object(p.jsxs)("div",{className:"player-ui",children:[Object(p.jsx)(j.a,{theme:w,children:Object(p.jsx)("div",{className:"px-2",children:Object(p.jsx)(d.a,{value:100*r.played.played,"aria-labelledby":"continuous-slider",onChange:function(e){o(Object(i.a)(Object(i.a)({},r),{},{played:parseFloat(e.target.value)}))},onChangeCommitted:function(e,t){return P(0,t)}})})}),Object(p.jsxs)("div",{className:"main-buttons",children:[Object(p.jsx)("button",{className:"bg-green-500 border-green-500 hover:bg-green-600 text-white text-lg font-bold py-4 px-10 rounded-full",onClick:function(){r.playing?o(Object(i.a)(Object(i.a)({},r),{},{playing:!1})):(T(),o(Object(i.a)(Object(i.a)({},r),{},{playing:!0})))},children:r.playing?"Stop":"Play"}),Object(p.jsxs)("button",{className:"mx-auto border border-gray-300 rounded-md text-md font-medium py-2 px-2 text-gray-500 dark:border-gray-600 dark:text-gray-400",onClick:function(){return function(){var e=F-.1;R(.7<e?Number(e.toFixed(1)):1),o(Object(i.a)(Object(i.a)({},r),{},{playbackRate:F}))}()},children:["SPEED: ",r.playbackRate]}),Object(p.jsxs)("div",{className:"main-buttons__second",children:[g,"/s"]})]}),Object(p.jsxs)("div",{className:["repeat",k?"is-active":""].join(" "),children:[Object(p.jsx)("div",{className:"repeat__button",children:Object(p.jsx)("button",{className:"mx-auto border border-gray-300 rounded-md text-lg font-medium py-2 px-3 text-gray-500 dark:border-gray-600 dark:text-gray-400",onClick:function(){S(!k)},children:k?"R:ON":"R:OFF"})}),Object(p.jsxs)("div",{className:"repeat__inputs",children:[Object(p.jsxs)("label",{className:"repeat__input",children:["Min: ",Object(p.jsx)("input",{type:"number",value:x.start,onChange:function(e){return function(e){f(Object(i.a)(Object(i.a)({},x),{},{start:e.target.value}))}(e)}})]}),Object(p.jsxs)("label",{className:"repeat__input",children:["Max: ",Object(p.jsx)("input",{type:"number",max:g,value:x.end,onChange:function(e){return function(e){f(Object(i.a)(Object(i.a)({},x),{},{end:e.target.value}))}(e)}})]})]})]})]})]})})},g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,76)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),r(e),o(e)}))};o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(O,{})}),document.getElementById("root")),g()}},[[59,1,2]]]);
//# sourceMappingURL=main.69363c5f.chunk.js.map