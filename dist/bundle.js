
(()=>{"use strict";var t={434:(t,n,e)=>{e.d(n,{Z:()=>c});var o=e(645),i=e.n(o)()((function(t){return t[1]}));i.push([t.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const c=i},890:(t,n,e)=>{e.d(n,{Z:()=>E});var o=e(645),i=e.n(o),c=e(667),a=e.n(c),r=new URL(e(308),e.b),s=new URL(e(181),e.b),m=new URL(e(812),e.b),l=new URL(e(531),e.b),d=new URL(e(433),e.b),u=new URL(e(717),e.b),h=new URL(e(214),e.b),x=new URL(e(987),e.b),p=new URL(e(828),e.b),b=i()((function(t){return t[1]})),f=a()(r),g=a()(s),v=a()(m),w=a()(l),k=a()(d),y=a()(u),C=a()(h),T=a()(x),D=a()(p);b.push([t.id,"@font-face {\n  font-family: 'Unlock';\n  src: url("+f+");\n}\n\nbody {\n  background-color: #B45008;\n}\n\n#header {\n  background-color: #7e4c29;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-shadow: 2px 2px black;\n}\n\n#header h1 {\n  font-size: 80px;\n  font-family: 'Unlock';\n  color: white;\n  padding-bottom: 15px;\n}\n\n#header #navButtons {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\n@media (min-width: 768px) {\n  #header #navButtons {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n  }\n}\n\n#header #homeButton {\n  border-top-left-radius: 20%;\n  border-top-right-radius: 20%;\n  padding: 10px;\n  color: black;\n  border: 0px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 17px;\n}\n\n#header #homeButton:hover {\n  cursor: pointer;\n}\n\n#header #homeButton img {\n  padding: 3px;\n}\n\n@media (min-width: 768px) {\n  #header #homeButton {\n    font-size: 25px;\n    border: 1px solid black;\n    padding: 1vw;\n    margin-left: 2vw;\n  }\n}\n\n#header #menuButton {\n  border-top-left-radius: 20%;\n  border-top-right-radius: 20%;\n  padding: 10px;\n  color: black;\n  border: 0px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 17px;\n}\n\n#header #menuButton:hover {\n  cursor: pointer;\n}\n\n#header #menuButton img {\n  padding: 3px;\n}\n\n@media (min-width: 768px) {\n  #header #menuButton {\n    font-size: 25px;\n    border: 1px solid black;\n    padding: 1vw;\n    margin-left: 2vw;\n  }\n}\n\n#header #contactButton {\n  border-top-left-radius: 20%;\n  border-top-right-radius: 20%;\n  padding: 10px;\n  color: black;\n  border: 0px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 17px;\n}\n\n#header #contactButton:hover {\n  cursor: pointer;\n}\n\n#header #contactButton img {\n  padding: 3px;\n}\n\n@media (min-width: 768px) {\n  #header #contactButton {\n    font-size: 25px;\n    border: 1px solid black;\n    padding: 1vw;\n    margin-left: 2vw;\n  }\n}\n\n#frontDiv {\n  background-image: url("+g+");\n  background-size: cover;\n  height: 60vh;\n  width: 100%;\n  margin-top: 2vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n#frontDiv #welcomeDiv {\n  border: 2px solid black;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 10px;\n  background-color: rgba(255, 255, 255, 0.7);\n}\n\n#frontDiv #welcomeDiv #welcomeDivText1 {\n  color: black;\n  font-size: 25px;\n}\n\n#frontDiv #welcomeDiv #welcomeDivText2 {\n  color: #B45008;\n  font-family: 'Unlock';\n  font-size: 70px;\n}\n\n#frontDiv #mottoDiv {\n  border: 2px solid black;\n  background-color: rgba(255, 255, 255, 0.7);\n  padding: 20px;\n}\n\n#messageDiv {\n  margin-bottom: 2vh;\n  width: 100%;\n  margin-top: 2vh;\n  height: 50vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-image: url("+v+");\n  background-size: cover;\n}\n\n#messageDiv #messageDivText1 {\n  border: 1px solid black;\n  background-color: rgba(255, 255, 255, 0.7);\n  color: #B45008;\n  padding: 10px;\n  font-family: 'Unlock';\n  font-size: 25px;\n}\n\n#messageDiv #messageDivText2 {\n  border: 1px solid black;\n  color: black;\n  padding: 10px;\n  background-color: rgba(255, 255, 255, 0.8);\n  width: 70%;\n  font-size: 15px;\n}\n\n#menuContent {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 10px;\n}\n\n#menuContent #itemA, #menuContent #itemB, #menuContent #itemC, #menuContent #itemD, #menuContent #itemE {\n  height: 30vh;\n  width: 95%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-bottom: 10px;\n  border: 2px solid black;\n}\n\n@media (min-width: 768px) {\n  #menuContent #itemA, #menuContent #itemB, #menuContent #itemC, #menuContent #itemD, #menuContent #itemE {\n    height: 50vh;\n    width: auto;\n    margin: 1vh;\n  }\n}\n\n#menuContent #itemA {\n  background-image: url("+w+");\n  background-size: 100% 100%;\n}\n\n#menuContent #itemB {\n  background-image: url("+k+");\n  background-size: 100% 100%;\n}\n\n#menuContent #itemC {\n  background-image: url("+y+");\n  background-size: 100% 100%;\n}\n\n#menuContent #itemD {\n  background-image: url("+C+");\n  background-size: 100% 100%;\n}\n\n#menuContent #itemE {\n  background-image: url("+T+');\n  background-size: 100% 100%;\n}\n\n#menuContent #itemAText, #menuContent #itemBText, #menuContent #itemCText, #menuContent #itemDText, #menuContent #itemEText {\n  background-color: rgba(255, 255, 255, 0.8);\n  border: 1px solid black;\n  padding: 15px;\n  font-size: 3vh;\n}\n\n@media (min-width: 768px) {\n  #menuContent #itemAText, #menuContent #itemBText, #menuContent #itemCText, #menuContent #itemDText, #menuContent #itemEText {\n    font-size: 4vh;\n  }\n}\n\n@media (min-width: 768px) {\n  #menuContent {\n    display: -ms-grid;\n    display: grid;\n    width: 90vw;\n    -ms-grid-rows: auto auto auto;\n        grid-template-rows: auto auto auto;\n    -ms-grid-columns: auto auto;\n        grid-template-columns: auto auto;\n        grid-template-areas: "burgers coffee" "seafood dessert" "more more";\n  }\n  #menuContent #itemE {\n    -ms-grid-row: 3;\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 2;\n    grid-area: more;\n    height: 66vh;\n  }\n  #menuContent #itemE #itemEText {\n    font-size: 8vh;\n  }\n}\n\n#contactContent {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 1vh;\n}\n\n#contactContent #contactMessageDiv {\n  height: 40vh;\n  margin-top: 1vh;\n  margin-bottom: 1vh;\n  background-image: url('+D+');\n  background-size: 100% 100%;\n  border: 2px solid black;\n  width: 95%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n#contactContent #contactMessageDiv #contactMessageText {\n  padding: 15px;\n  border: 1px solid black;\n  font-size: 37px;\n  background-color: rgba(255, 255, 255, 0.8);\n}\n\n@media (min-width: 768px) {\n  #contactContent #contactMessageDiv {\n    width: 95vw;\n    height: 70vh;\n  }\n  #contactContent #contactMessageDiv #contactMessageText {\n    font-size: 6vw;\n  }\n}\n\n#contactContent #contactInfo {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 95%;\n  background-color: #7e4c29;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border: 2px solid black;\n}\n\n#contactContent #contactInfo #contactInfoText1, #contactContent #contactInfo #contactInfoText2 {\n  font-size: 20px;\n  margin: 10px;\n  color: white;\n}\n\n#contactContent #contactInfo #contactDirect {\n  margin: 5px;\n  background-color: rgba(255, 255, 255, 0.7);\n  font-size: 20px;\n  padding: 15px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n#contactContent #contactInfo #contactForm {\n  background-color: rgba(255, 255, 255, 0.7);\n  padding: 15px;\n  margin: 1vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n#contactContent #contactInfo #contactForm input, #contactContent #contactInfo #contactForm textArea {\n  background-color: #bb855e;\n  color: white;\n  border: 1px solid black;\n  font-size: 20px;\n}\n\n#contactContent #contactInfo #contactForm label {\n  font-size: 18px;\n  padding: 10px;\n}\n\n#contactContent #contactInfo #contactForm button {\n  margin: 10px;\n  padding: 10px;\n  background-color: sandybrown;\n  border: 1px solid black;\n  width: 15vw;\n}\n\n#contactContent #contactInfo #contactForm button:hover {\n  -webkit-transform: scale(1.2, 1.2);\n          transform: scale(1.2, 1.2);\n  border: 2px solid black;\n}\n\n@media (min-width: 768px) {\n  #contactContent #contactInfo {\n    width: 95vw;\n    display: -ms-grid;\n    display: grid;\n    padding-top: 2vh;\n    -ms-grid-rows: 5vh 55vh;\n        grid-template-rows: 5vh 55vh;\n    -ms-grid-columns: auto auto;\n        grid-template-columns: auto auto;\n        grid-template-areas: "text1 text2" "info form";\n  }\n  #contactContent #contactInfo #contactInfoText1 {\n    -ms-grid-row: 1;\n    -ms-grid-column: 1;\n    grid-area: text1;\n    -ms-grid-column-align: center;\n        justify-self: center;\n    -ms-flex-item-align: end;\n        -ms-grid-row-align: end;\n        align-self: end;\n  }\n  #contactContent #contactInfo #contactInfoText2 {\n    -ms-grid-row: 1;\n    -ms-grid-column: 2;\n    grid-area: text2;\n    -ms-grid-column-align: center;\n        justify-self: center;\n    -ms-flex-item-align: end;\n        -ms-grid-row-align: end;\n        align-self: end;\n  }\n  #contactContent #contactInfo #contactDirect {\n    -ms-grid-row: 2;\n    -ms-grid-column: 1;\n    grid-area: info;\n    -ms-grid-column-align: center;\n        justify-self: center;\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n    font-size: 5vh;\n    padding: 1vw;\n  }\n  #contactContent #contactInfo #contactForm {\n    -ms-grid-row: 2;\n    -ms-grid-column: 2;\n    grid-area: form;\n    -ms-grid-column-align: center;\n        justify-self: center;\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n  }\n}\n\n@media (min-width: 768px) {\n  #content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n  #header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    padding-left: 20px;\n    padding-right: 3vw;\n  }\n  #frontDiv {\n    height: 86vh;\n    width: 95vw;\n    background-size: 100% 100%;\n    border: 2px solid black;\n  }\n  #frontDiv #welcomeDiv {\n    padding: 3vw;\n  }\n  #frontDiv #welcomeDiv #welcomeDivText2 {\n    font-size: 23vh;\n  }\n  #frontDiv #mottoDiv {\n    font-size: 4vh;\n    padding: 3vw;\n  }\n  #messageDiv {\n    border: 2px solid black;\n    height: 77vh;\n    background-size: 100% 100%;\n    width: 95vw;\n  }\n  #messageDiv #messageDivText1 {\n    font-size: 8vh;\n    padding: 3vw;\n  }\n  #messageDiv #messageDivText2 {\n    font-size: 5vh;\n    padding-left: 2vw;\n  }\n}\n\n::-webkit-scrollbar {\n  background-color: black;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: #B45008;\n}',""]);const E=b},645:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=t(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,o){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(o)for(var c=0;c<this.length;c++){var a=this[c][0];null!=a&&(i[a]=!0)}for(var r=0;r<t.length;r++){var s=[].concat(t[r]);o&&i[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),n.push(s))}},n}},667:t=>{t.exports=function(t,n){return n||(n={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),n.hash&&(t+=n.hash),/["'() \t\n]|(%20)/.test(t)||n.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},379:t=>{var n=[];function e(t){for(var e=-1,o=0;o<n.length;o++)if(n[o].identifier===t){e=o;break}return e}function o(t,o){for(var c={},a=[],r=0;r<t.length;r++){var s=t[r],m=o.base?s[0]+o.base:s[0],l=c[m]||0,d="".concat(m," ").concat(l);c[m]=l+1;var u=e(d),h={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(n[u].references++,n[u].updater(h)):n.push({identifier:d,updater:i(h,o),references:1}),a.push(d)}return a}function i(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e.update(t=n)}else e.remove()}}t.exports=function(t,i){var c=o(t=t||[],i=i||{});return function(t){t=t||[];for(var a=0;a<c.length;a++){var r=e(c[a]);n[r].references--}for(var s=o(t,i),m=0;m<c.length;m++){var l=e(c[m]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}c=s}}},569:t=>{var n={};t.exports=function(t,e){var o=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},216:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n),n}},565:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},795:t=>{t.exports=function(t){var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var o=e.css,i=e.media,c=e.sourceMap;i?t.setAttribute("media",i):t.removeAttribute("media"),c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),n.styleTagTransform(o,t)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},589:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}},308:(t,n,e)=>{t.exports=e.p+"cdf7be23e9b0026d480d.ttf"},531:(t,n,e)=>{t.exports=e.p+"42ab48f34e0ccd530b01.png"},812:(t,n,e)=>{t.exports=e.p+"13d7908d7ffc82d9a233.png"},433:(t,n,e)=>{t.exports=e.p+"819f6fb998fde9e96b14.jpg"},214:(t,n,e)=>{t.exports=e.p+"2a4f3f4439bb110a6bbd.jpg"},987:(t,n,e)=>{t.exports=e.p+"7f6e85fb29f19ff85a96.jpg"},828:(t,n,e)=>{t.exports=e.p+"2792cba8497971e0e911.jpg"},181:(t,n,e)=>{t.exports=e.p+"2207eee3724e1cba203a.png"},717:(t,n,e)=>{t.exports=e.p+"73958ea71eb76cf68209.png"}},n={};function e(o){var i=n[o];if(void 0!==i)return i.exports;var c=n[o]={id:o,exports:{}};return t[o](c,c.exports,e),c.exports}e.m=t,e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var o=n.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),e.b=document.baseURI||self.location.href,(()=>{const t=(()=>{const t={init:function(){this.cacheDom(),this.createElements(),this.setId(),this.bindEvents(),this.setContent()},cacheDom:function(){this.body=document.querySelector("body"),this.pageContent=document.querySelector("#content")},createElements:function(){this.headerContent=document.createElement("div"),this.h1=document.createElement("h1"),this.navButtons=document.createElement("div"),this.homeButton=document.createElement("button"),this.menuButton=document.createElement("button"),this.contactButton=document.createElement("button"),this.homeIcon=document.createElement("img"),this.menuIcon=document.createElement("img"),this.contactIcon=document.createElement("img")},setId:function(){this.navButtons.id="navButtons",this.homeButton.id="homeButton",this.menuButton.id="menuButton",this.contactButton.id="contactButton",this.headerContent.id="header"},setContent:function(){this.h1.textContent="Savory",this.homeButton.textContent="Home",this.menuButton.textContent="Menu",this.contactButton.textContent="Contact",this.homeIcon.src="/src/icons/homeIcon.svg",this.menuIcon.src="/src/icons/menuIcon.svg",this.contactIcon.src="/src/icons/contactIcon.svg"},toggleFocus:function(){this!==window&&this!==t.homeButton||(t.homeButton.style.cssText="Background-color: #B45008",t.menuButton.style.cssText="Background-color: transparent",t.contactButton.style.cssText="Background-color: transparent"),this===t.menuButton&&(t.homeButton.style.cssText="Background-color: transparent",t.menuButton.style.cssText="Background-color: #B45008",t.contactButton.style.cssText="Background-color: transparent"),this===t.contactButton&&(t.homeButton.style.cssText="Background-color: transparent",t.menuButton.style.cssText="Background-color: transparent",t.contactButton.style.cssText="Background-color: #B45008")},bindEvents:function(){window.addEventListener("load",this.toggleFocus),this.homeButton.addEventListener("click",this.toggleFocus),this.menuButton.addEventListener("click",this.toggleFocus),this.contactButton.addEventListener("click",this.toggleFocus)}};return{attach:function(){t.init(),this.homeButton.append(this.homeIcon),this.menuButton.append(this.menuIcon),this.contactButton.append(this.contactIcon),this.navButtons.append(this.homeButton,this.menuButton,this.contactButton),this.headerContent.append(this.h1,this.navButtons),this.body.insertBefore(this.headerContent,this.pageContent)}.bind(t)}})(),n=(()=>{const t={init:function(){this.cacheDom(),this.createElements(),this.setId(),this.setContent()},cacheDom:function(){this.pageContent=document.querySelector("#content")},createElements:function(){this.homeContent=document.createElement("div"),this.frontDiv=document.createElement("div"),this.welcomeDiv=document.createElement("div"),this.welcomeDivText1=document.createElement("p"),this.welcomeDivText2=document.createElement("p"),this.mottoDiv=document.createElement("div"),this.mottoText=document.createElement("p"),this.messageDiv=document.createElement("div"),this.messageDivText1=document.createElement("div"),this.messageDivText2=document.createElement("div")},setId:function(){this.homeContent.id="homeContent",this.frontDiv.id="frontDiv",this.welcomeDiv.id="welcomeDiv",this.welcomeDivText1.id="welcomeDivText1",this.welcomeDivText2.id="welcomeDivText2",this.mottoDiv.id="mottoDiv",this.mottoText.id="mottoText",this.messageDiv.id="messageDiv",this.messageDivText1.id="messageDivText1",this.messageDivText2.id="messageDivText2"},setContent:function(){this.welcomeDivText1.textContent="Welcome to",this.welcomeDivText2.textContent="Savory",this.mottoText.textContent="The most succulent experience in town.",this.messageDivText1.textContent="For the love of cooking",this.messageDivText2.textContent="Cooking is art and food is our passion.\n                                                From choosing the best ingredients to the\n                                                presentation, everything is handled with utmost care.\n                                                Check out our menu and feel free to contact us."}};return{attach:function(){t.init(),this.welcomeDiv.append(this.welcomeDivText1,this.welcomeDivText2),this.mottoDiv.append(this.mottoText),this.frontDiv.append(this.welcomeDiv,this.mottoDiv),this.messageDiv.append(this.messageDivText1,this.messageDivText2),this.homeContent.append(this.frontDiv,this.messageDiv),this.pageContent.append(this.homeContent)}.bind(t)}})(),o=(()=>{const t={init:function(){this.cacheDom(),this.createElements(),this.setId(),this.setContent()},cacheDom:function(){this.pageContent=document.querySelector("#content")},createElements:function(){this.menuContent=document.createElement("div"),this.itemA=document.createElement("div"),this.itemB=document.createElement("div"),this.itemC=document.createElement("div"),this.itemD=document.createElement("div"),this.itemE=document.createElement("div"),this.itemAText=document.createElement("p"),this.itemBText=document.createElement("p"),this.itemCText=document.createElement("p"),this.itemDText=document.createElement("p"),this.itemEText=document.createElement("p")},setId:function(){this.menuContent.id="menuContent",this.itemA.id="itemA",this.itemB.id="itemB",this.itemC.id="itemC",this.itemD.id="itemD",this.itemE.id="itemE",this.itemAText.id="itemAText",this.itemBText.id="itemBText",this.itemCText.id="itemCText",this.itemDText.id="itemDText",this.itemEText.id="itemEText"},setContent:function(){this.itemAText.textContent="Burgers: Juicy and Thick",this.itemBText.textContent="Coffee: Prepared till perfection",this.itemCText.textContent="Seafood: Caught and served fresh",this.itemDText.textContent="Desserts: Sweat and creamy",this.itemEText.textContent="And much much more..."}};return{attach:function(){t.init(),this.itemA.append(this.itemAText),this.itemB.append(this.itemBText),this.itemC.append(this.itemCText),this.itemD.append(this.itemDText),this.itemE.append(this.itemEText),this.menuContent.append(this.itemA,this.itemB,this.itemC,this.itemD,this.itemE),this.pageContent.append(this.menuContent)}.bind(t)}})(),i=(()=>{const t={init:function(){this.cacheDom(),this.createElements(),this.setId(),this.setContent(),this.bindEvents()},cacheDom:function(){this.pageContent=document.querySelector("#content")},createElements:function(){this.contactContent=document.createElement("div"),this.contactMessageDiv=document.createElement("div"),this.contactMessageText=document.createElement("p"),this.contactInfo=document.createElement("div"),this.contactInfoText1=document.createElement("p"),this.contactDirect=document.createElement("div"),this.contactNum=document.createElement("p"),this.contactEmail=document.createElement("p"),this.contactInfoText2=document.createElement("p"),this.contactForm=document.createElement("form"),this.userNameLabel=document.createElement("label"),this.userName=document.createElement("input"),this.userEmailLabel=document.createElement("label"),this.userEmail=document.createElement("input"),this.textAreaLabel=document.createElement("label"),this.textArea=document.createElement("textArea"),this.submitButton=document.createElement("button")},setId:function(){this.contactContent.id="contactContent",this.contactMessageDiv.id="contactMessageDiv",this.contactMessageText.id="contactMessageText",this.contactInfo.id="contactInfo",this.contactInfoText1.id="contactInfoText1",this.contactInfoText2.id="contactInfoText2",this.contactDirect.id="contactDirect",this.contactForm.id="contactForm",this.submitButton.type="submit"},setContent:function(){this.contactMessageText.textContent="Get in touch with us",this.contactInfoText1.textContent="Contact us directly at",this.contactNum.textContent="00 123 456 789",this.contactEmail.textContent="savory@restaurant.com",this.contactInfoText2.textContent="Or fill out this form",this.userNameLabel.textContent="Name: ",this.userEmailLabel.textContent="Email: ",this.textAreaLabel.textContent="Your message: ",this.submitButton.textContent="Send"},submitForm:function(t){t.preventDefault(),this.reset()},bindEvents:function(){this.contactForm.addEventListener("submit",this.submitForm)}};return{attach:function(){t.init(),this.contactMessageDiv.append(this.contactMessageText),this.contactForm.append(this.userNameLabel,this.userName,this.userEmailLabel,this.userEmail,this.textAreaLabel,this.textArea,this.submitButton),this.contactDirect.append(this.contactNum,this.contactEmail),this.contactInfo.append(this.contactInfoText1,this.contactDirect,this.contactInfoText2,this.contactForm),this.contactContent.append(this.contactMessageDiv,this.contactInfo),this.pageContent.append(this.contactContent)}.bind(t)}})();var c=e(379),a=e.n(c),r=e(795),s=e.n(r),m=e(569),l=e.n(m),d=e(565),u=e.n(d),h=e(216),x=e.n(h),p=e(589),b=e.n(p),f=e(890),g={};g.styleTagTransform=b(),g.setAttributes=u(),g.insert=l().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=x(),a()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;var v=e(434),w={};w.styleTagTransform=b(),w.setAttributes=u(),w.insert=l().bind(null,"head"),w.domAPI=s(),w.insertStyleElement=x(),a()(v.Z,w),v.Z&&v.Z.locals&&v.Z.locals,{init:function(){t.attach(),n.attach(),this.cacheDom(),this.bindEvents()},cacheDom:function(){this.pageContent=document.querySelector("#content"),this.homeButton=document.querySelector("#homeButton"),this.menuButton=document.querySelector("#menuButton"),this.contactButton=document.querySelector("#contactButton")},clearPage:function(){this.pageContent.textContent=""},bindEvents:function(){this.homeButton.addEventListener("click",(()=>{this.clearPage(),n.attach()})),this.menuButton.addEventListener("click",(()=>{this.clearPage(),o.attach()})),this.contactButton.addEventListener("click",(()=>{this.clearPage(),i.attach()}))}}.init()})()})();

