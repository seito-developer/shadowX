(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{33:function(e,t,a){},34:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(13),r=a.n(i),l=(a(33),a(3)),s=a(20),o=(a(34),a(25)),b=a.n(o),d=a(75),j=a(27),u=a(74),p=a(5);var h=function(){var e=Object(c.useRef)(""),t=Object(c.useState)({ref:e,url:"https://player.vimeo.com/video/575873877",width:"100%",height:"100%",loop:!0,played:{played:0},playing:!1}),a=Object(s.a)(t,2),n=a[0],i=a[1],r=Object(c.useState)({min:0,max:1}),o=Object(s.a)(r,2),h=(o[0],o[1],Object(j.a)({overrides:{MuiSlider:{root:{height:20},thumb:{height:26,width:26},track:{height:20,borderRadius:10},rail:{height:20,borderRadius:10}}}})),O=function(t,a){if(!Array.isArray(a)){var c,r=.01*a;i(Object(l.a)(Object(l.a)({},n),{},{played:{played:r}})),c=r,e.current.seekTo(parseFloat(c))}};return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)("div",{className:"player",children:[Object(p.jsx)("div",{className:"player-wrapper",children:Object(p.jsx)(b.a,Object(l.a)(Object(l.a)({className:"react-player"},n),{},{onProgress:function(e){i(Object(l.a)(Object(l.a)({},n),{},{played:e}))},onReady:function(){}}))}),Object(p.jsx)(u.a,{theme:h,children:Object(p.jsx)(d.a,{value:100*n.played.played,onChange:function(e){i(Object(l.a)(Object(l.a)({},n),{},{played:parseFloat(e.target.value)}))},onChangeCommitted:function(e,t){return O(0,t)},"aria-labelledby":"continuous-slider"})}),Object(p.jsx)("div",{className:"grid justify-items-center",children:Object(p.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",onClick:function(){n.playing?i(Object(l.a)(Object(l.a)({},n),{},{playing:!1})):i(Object(l.a)(Object(l.a)({},n),{},{playing:!0}))},children:n.playing?"Stop":"Play"})}),Object(p.jsx)("div",{className:"grid justify-items-center"})]})})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,76)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),i(e),r(e)}))};r.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(h,{})}),document.getElementById("root")),O()}},[[59,1,2]]]);
//# sourceMappingURL=main.9ec95d94.chunk.js.map