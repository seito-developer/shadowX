(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{33:function(e,t,a){},34:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(13),r=a.n(i),s=(a(33),a(6)),l=a(27),d=(a(34),a(24)),j=a.n(d),o=a(75),b=a(26),p=a(74),u=a(3);var h=function(){var e=Object(c.useRef)(""),t=Object(c.useState)({ref:e,url:"https://player.vimeo.com/video/575873877",width:"100%",height:"100%",loop:!0,played:{played:0},playing:!1}),a=Object(l.a)(t,2),n=a[0],i=a[1],r=Object(b.a)({overrides:{MuiSlider:{root:{height:20},thumb:{height:26,width:26},track:{height:20,borderRadius:10},rail:{height:20,borderRadius:10}}}}),d=function(t,a){if(!Array.isArray(a)){var c,r=.01*a;i(Object(s.a)(Object(s.a)({},n),{},{played:{played:r}})),c=r,e.current.seekTo(parseFloat(c))}};return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{className:"player",children:[Object(u.jsx)("div",{className:"player-wrapper",children:Object(u.jsx)(j.a,Object(s.a)(Object(s.a)({className:"react-player"},n),{},{onProgress:function(e){i(Object(s.a)(Object(s.a)({},n),{},{played:e}))},onReady:function(){}}))}),Object(u.jsx)(p.a,{theme:r,children:Object(u.jsx)(o.a,{value:100*n.played.played,onChange:function(e){i(Object(s.a)(Object(s.a)({},n),{},{played:parseFloat(e.target.value)}))},onChangeCommitted:function(e,t){return d(0,t)},"aria-labelledby":"continuous-slider"})}),Object(u.jsx)("div",{className:"grid justify-items-center",children:Object(u.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",onClick:function(){n.playing?i(Object(s.a)(Object(s.a)({},n),{},{playing:!1})):i(Object(s.a)(Object(s.a)({},n),{},{playing:!0}))},children:n.playing?"Stop":"Play"})}),Object(u.jsxs)("div",{className:"grid justify-items-center",children:[Object(u.jsxs)("div",{children:["Min: ",Object(u.jsx)("input",{type:"text"})]}),Object(u.jsxs)("div",{children:["Max: ",Object(u.jsx)("input",{type:"text"})]})]})]})})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,76)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),i(e),r(e)}))};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),O()}},[[59,1,2]]]);
//# sourceMappingURL=main.5a96e1a7.chunk.js.map