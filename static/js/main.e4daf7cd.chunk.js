(this.webpackJsonpcoloor=this.webpackJsonpcoloor||[]).push([[0],{151:function(e){e.exports=JSON.parse('{"page.title":"\uc0c9\uc0c1 \uc120\ud0dd\uae30","color.heading":"\uc0c9\uc0c1 \uc120\ud0dd \ud3b8\uc9d1"}')},325:function(e,n){},327:function(e,n,t){"use strict";t.r(n);var a,c,r,o,i,s,l,d,h,j=t(30),b=t(0),x=t.n(b),g=t(150),O=t.n(g),u=t(165),p=t(352),m=t(151),f=t(353),w=t(161),v=t(13),y=t(46),k=t(354),S=t(355),N=t(164),C=t(348),z=t(36),L=z.a.div(a||(a=Object(j.a)(["\n  width: 100vw;\n  height: 100vh;\n"]))),A=z.a.div(c||(c=Object(j.a)(["\n  width: 100vw;\n  height: 60px;\n"]))),F=z.a.div(r||(r=Object(j.a)(["\n  width: 100vw;\n  height: calc(100vh - 60px);\n"]))),E=t(52),J=t.n(E),B=J()("#28a8ea"),I=J()("#333"),M=J()("#eee"),P=t(166),R=t(84),T=Object(R.atomWithReset)({color:"#112233"}),D=function(e,n){if(void 0===n)throw new Error("action missed");if("change-color"===n.type)return function(e,n){try{var t=Object(P.a)({},e);return t.color=n.color,t}catch(a){return e}}(e,n);throw new Error("action missed")},G=t(351),W=t(156),q=t(119),H=t(8),K=Object(z.a)(k.a)(o||(o=Object(j.a)(["\n  width: 100%;\n  height: 100%;\n  background-color: ",";\n  justify-content: center;\n  padding-left: 2em;\n\n  h1 {\n    color: ",";\n  }\n"])),B.toString(),B.darken(.4).toString()),Q=Object(z.a)(k.a)(i||(i=Object(j.a)(["\n  padding: 2em;\n  justify-content: center;\n"]))),U=Object(z.a)(k.a)(s||(s=Object(j.a)(["\n  padding: 2em;\n  justify-content: center;\n\n  .lighten-shade {\n    width: 250px;\n    box-shadow: rgb(0 0 0 / 15%) 0px 3px 12px;\n    border-radius: 5px;\n    margin-right: 1em;\n  }\n\n  .darken-shade {\n    width: 250px;\n    box-shadow: rgb(0 0 0 / 15%) 0px 3px 12px;\n    border-radius: 5px;\n  }\n\n  .lighten-shade,\n  .darken-shade {\n    align-content: center;\n\n    .shade {\n      .shade-morder {\n        width: 6em;\n        padding-left: 1em;\n        align-items: flex-start;\n      }\n\n      .shade-hex {\n        flex: 1;\n      }\n\n      .shade-morder,\n      .shade-hex {\n        justify-content: center;\n      }\n\n      height: 40px;\n    }\n  }\n"]))),V=Object(z.a)(k.a)(l||(l=Object(j.a)(["\n  margin-right: 2em;\n"]))),X=Object(z.a)(k.a)(d||(d=Object(j.a)(["\n  .color-display-panel {\n    width: 400px;\n    height: 300px;\n    box-shadow: rgb(0 0 0 / 15%) 0px 3px 12px;\n    border-radius: 5px;\n    padding-top: 2em;\n  }\n"]))),Y=function(){var e=Object(C.a)(),n=function(){var e=Object(R.useReducerAtom)(T,D),n=Object(y.a)(e,2);return{state:n[0],dispatch:n[1]}}(),t=n.state,a=n.dispatch,c=function(e){var n=J()(e),t=Object(G.a)(n.red()).mul(Object(G.a)(.299)),a=Object(G.a)(n.green()).mul(Object(G.a)(.587)),c=Object(G.a)(n.blue()).mul(Object(G.a)(.114));return t.plus(a).plus(c).toNumber()>186?I.toString():M.toString()};return Object(H.jsxs)(L,{children:[Object(H.jsx)(A,{children:Object(H.jsx)(K,{children:Object(H.jsx)(S.a,{as:"h1",variant:"xxLarge",children:e.formatMessage({id:"color.heading"})})})}),Object(H.jsxs)(F,{children:[Object(H.jsxs)(Q,{horizontal:!0,children:[Object(H.jsx)(V,{children:Object(H.jsx)(N.a,{color:t.color,width:"300px",onChange:function(e){return a({type:"change-color",color:e.hex})}})}),Object(H.jsx)(X,{children:Object(H.jsx)(k.a,{className:"color-display-panel",style:{backgroundColor:"".concat(t.color)},children:Object(H.jsx)(S.a,{as:"span",variant:"xxLarge",style:{color:c(t.color),textAlign:"center"},children:t.color})})})]}),Object(H.jsx)(U,{horizontal:!0,children:["lighten-shade","darken-shade"].map((function(e,n){return Object(H.jsx)(k.a,{className:e,children:Object(W.populate)(10).map((function(n){var a=J()(t.color),r=Object(G.a)(n).mul(Object(G.a)(.05)),o="lighten-shade"===e?a.lighten(r.toNumber()):a.darken(r.toNumber());return Object(H.jsxs)(k.a,{className:"shade",style:{backgroundColor:o.toString()},horizontal:!0,children:[Object(H.jsx)(k.a,{className:"shade-morder",children:Object(H.jsxs)(S.a,{as:"span",variant:"medium",style:{textAlign:"center",color:c(o.hex())},children:[r.mul(100).toString(),"% - ",r.toString()]})}),Object(H.jsx)(k.a,{className:"shade-hex",children:Object(H.jsx)(S.a,{as:"span",variant:"medium",style:{textAlign:"center",color:c(o.hex())},children:o.hex()})})]},Object(q.a)(n))}))},Object(q.a)(n))}))})]})]})},Z={palette:{}},$=function(){return Object(u.a)(),Object(H.jsx)(f.a,{messages:m,locale:"ko",defaultLocale:"ko",children:Object(H.jsx)(p.a,{theme:Z,children:Object(H.jsx)(w.a,{basename:"/coloor",children:Object(H.jsx)(v.c,{children:Object(H.jsx)(v.a,{exact:!0,path:"/",render:function(){return Object(H.jsx)(Y,{})}})})})})})},_=t(163),ee=t.n(_),ne=t(61),te=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,358)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,o=n.getTTFB;t(e),a(e),c(e),r(e),o(e)}))};O.a.render(Object(H.jsxs)(x.a.StrictMode,{children:[Object(H.jsx)(ne.Global,{styles:Object(ne.css)(h||(h=Object(j.a)(["\n      ","\n\n      *, *::after, *::before {\n        box-sizing: border-box;\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-font-smoothing: antialiased;\n        font-smoothing: antialiased;\n      }\n    "])),ee.a)}),Object(H.jsx)($,{})]}),document.getElementById("root")),te()}},[[327,1,2]]]);
//# sourceMappingURL=main.e4daf7cd.chunk.js.map