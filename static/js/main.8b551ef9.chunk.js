(this["webpackJsonpreverb-website"]=this["webpackJsonpreverb-website"]||[]).push([[0],{119:function(e,t,i){},120:function(e,t,i){"use strict";i.r(t);var n=i(0),r=i(1),c=i(27),s=i(16),a=i.p+"static/media/miniLogo.2ff76f8b.svg",o=i.p+"static/media/home.0a50edd9.svg",d=i.p+"static/media/home-hover.326762ad.svg",l=i(10);var u=function(){var e=Object(r.useState)(o),t=Object(s.a)(e,2),i=t[0],c=t[1];return Object(n.jsxs)(l.b,{to:"/",id:"logo_link",onMouseOver:function(){c(d)},onMouseOut:function(){c(o)},children:[Object(n.jsx)("img",{src:a,id:"mini-logo",alt:"Logo"}),Object(n.jsx)("img",{src:i,id:"reverb",alt:"Home"})]})};var b=function(){var e=Object(r.useState)(0),t=Object(s.a)(e,2),i=t[0],c=t[1],a=Object(r.useState)(window.pageYOffset),o=Object(s.a)(a,2),d=o[0],b=o[1],j=function(){var e=window.pageYOffset,t="0px";d<=e&&e>50&&(t="-100px"),b(e),c(t)};return Object(r.useEffect)((function(){window.addEventListener("scroll",j)})),Object(n.jsxs)("nav",{className:"navbar",style:{top:i},children:[Object(n.jsx)(u,{}),Object(n.jsx)(l.b,{to:{pathname:"https://reverb-llc.github.io/reverb-docs/"},target:"_blank",children:"Docs"}),Object(n.jsx)(l.b,{to:{pathname:"https://github.com/oslabs-beta/reverb-vscode-extension"},target:"_blank",children:"Github"}),Object(n.jsx)("div",{id:"search-container",children:Object(n.jsx)("input",{type:"text",placeholder:"Search..."})})]})},j=i.p+"static/media/reVerbLogo.69fffdbd.svg";var h=function(){return Object(n.jsxs)("div",{id:"welcome",children:[Object(n.jsx)("img",{src:j,id:"welcome-logo",alt:"logo"}),Object(n.jsxs)("div",{id:"details",children:[Object(n.jsx)("p",{id:"welcome-description",children:"A RESTful API client for Visual Studio Code"}),Object(n.jsxs)("div",{className:"welcome-buttons",children:[Object(n.jsx)("a",{href:"https://reverb-llc.github.io/reverb-docs/",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("button",{children:"Documentation"})}),Object(n.jsx)("a",{href:"https://marketplace.visualstudio.com/items?itemName=reverb-api.reverb",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("button",{children:"Install reVerb"})})]})]})]})},p=i(18),m=i(19),O=i(12),v=i(21),f=i(20),g=i(8),x=i(9),k=i(17);function I(){var e=Object(g.a)(["\n  position: absolute;\n  display: none;\n"]);return I=function(){return e},e}function y(){var e=Object(g.a)(["\n  position: absolute;\n  display: block;\n  animation: 1s ease-out 0s 1 "," forwards;\n"]);return y=function(){return e},e}function w(){var e=Object(g.a)(["\n  position: absolute;\n  display: block;\n  animation: 1s ease-out 0s 1 "," forwards;\n"]);return w=function(){return e},e}function S(){var e=Object(g.a)(["\n  position: absolute;\n  display: block;\n  animation: 1s ease-out 0s 1 "," forwards;\n"]);return S=function(){return e},e}function C(){var e=Object(g.a)(["\n  position: absolute;\n  display: block;\n  animation: 1s ease-out 0s 1 "," forwards;\n"]);return C=function(){return e},e}function N(){var e=Object(g.a)(["",""]);return N=function(){return e},e}function F(){var e=Object(g.a)(["",""]);return F=function(){return e},e}function A(){var e=Object(g.a)(["",""]);return A=function(){return e},e}function L(){var e=Object(g.a)(["",""]);return L=function(){return e},e}var _=Object(x.b)(L(),k.fadeOutLeft),M=Object(x.b)(A(),k.fadeOutRight),E=Object(x.b)(F(),k.fadeInLeft),V=Object(x.b)(N(),k.fadeInRight),T=x.a.div(C(),_),J=x.a.div(S(),M),R=x.a.div(w(),E),q=x.a.div(y(),V),D=x.a.div(I()),G=function(e){Object(v.a)(i,e);var t=Object(f.a)(i);function i(){return Object(p.a)(this,i),t.apply(this,arguments)}return Object(m.a)(i,[{key:"render",value:function(){var e=this.props.contents[0],t=this.props.contents[1],i=this.props,r=i.index,c=i.currentSlide,s=i.previousSlide,a=i.direction;if(c===r){if("right"===a)return Object(n.jsxs)(q,{children:[Object(n.jsx)("img",{src:e,id:"picture",alt:"Feature"}),Object(n.jsx)("p",{id:"description",children:t})]});if("left"===a)return Object(n.jsxs)(R,{children:[Object(n.jsx)("img",{src:e,id:"picture",alt:"Feature"}),Object(n.jsx)("p",{id:"description",children:t})]})}else{if(s!==r)return Object(n.jsxs)(D,{children:[Object(n.jsx)("img",{src:e,id:"picture",alt:"Feature"}),Object(n.jsx)("p",{id:"description",children:t})]});if("right"===a)return Object(n.jsxs)(T,{children:[Object(n.jsx)("img",{src:e,id:"picture",alt:"Feature"}),Object(n.jsx)("p",{id:"description",children:t})]});if("left"===a)return Object(n.jsxs)(J,{children:[Object(n.jsx)("img",{src:e,id:"picture",alt:"Feature"}),Object(n.jsx)("p",{id:"description",children:t})]})}return Object(n.jsxs)("div",{id:"slide",children:[Object(n.jsx)("img",{src:e,id:"picture",alt:"Feature"}),Object(n.jsx)("p",{id:"description",children:t})]})}}]),i}(r.Component),H=i.p+"static/media/arrow.cb2d0c41.svg",Y=i.p+"static/media/arrow_hover.372e7612.svg",B=function(e){var t=e.direction,i=e.clickFunction;e.glyph;return Object(n.jsx)("div",{onClick:i,children:Object(n.jsx)("img",{src:H,id:"".concat(t,"-arrow"),alt:"logo",onMouseOver:function(e){return e.currentTarget.src=Y},onMouseOut:function(e){return e.currentTarget.src=H}})})},P=i.p+"static/media/sidebar.565bc94b.svg",z=i.p+"static/media/config.b9a289f8.svg",K=i.p+"static/media/output.b686018f.svg",Q=i.p+"static/media/watch.2fa98715.svg",U=i.p+"static/media/axios.7744bd09.svg",W=i.p+"static/media/rightClick.ad4d506b.svg",X=function(e){Object(v.a)(i,e);var t=Object(f.a)(i);function i(e){var n;return Object(p.a)(this,i),(n=t.call(this,e)).state={currentImageIndex:0,previousImageIndex:0,direction:"none",slideContents:[[W,"Automatic detection of Express routes makes testing as easy as right-clicking on an endpoint definition"],[z,"Configure and store presets for testing all routes handled by your server"],[K,"View the header, contents, response time, and more for all requests sent to your server"],[P,"Monitor and manage all of your endpoints with a convenient sidebar menu"],[U,"Automatically generate pre-configured Axios request code for use by the front end team"],[Q,"Set reVerb to dynamically monitor all of your Express routes and display the current status in-line"]]},n.nextSlide=n.nextSlide.bind(Object(O.a)(n)),n.previousSlide=n.previousSlide.bind(Object(O.a)(n)),n.createSlides=n.createSlides.bind(Object(O.a)(n)),n}return Object(m.a)(i,[{key:"previousSlide",value:function(){var e=this.state,t=e.currentImageIndex,i=e.slideContents.length-1,n=0===t?i:t-1;this.setState({previousImageIndex:t,currentImageIndex:n,direction:"left"})}},{key:"nextSlide",value:function(){var e=this.state,t=e.currentImageIndex,i=t===e.slideContents.length-1?0:t+1;this.setState({previousImageIndex:t,currentImageIndex:i,direction:"right"})}},{key:"createSlides",value:function(){for(var e=[],t=this.state,i=t.slideContents,r=t.currentImageIndex,c=t.previousImageIndex,s=t.direction,a=0;a<i.length;a++)e.push(Object(n.jsx)(G,{contents:i[a],index:a,currentSlide:r,previousSlide:c,direction:s},"slide-".concat(a)));return e}},{key:"render",value:function(){var e=this.createSlides();return Object(n.jsxs)("div",{id:"carousel",children:[Object(n.jsx)(B,{direction:"left",clickFunction:this.previousSlide}),e,Object(n.jsx)(B,{direction:"right",clickFunction:this.nextSlide})]})}}]),i}(r.Component);var Z=function(){return Object(n.jsxs)("div",{id:"about",children:[Object(n.jsx)("p",{id:"features",children:"Features"}),Object(n.jsx)(X,{})]})},$=i.p+"static/media/github-logo.f93243dc.svg",ee=i.p+"static/media/linkedin.05518f5a.svg";var te=function(e){var t=e.image,i=e.name,r=e.github,c=e.linkedIn;return Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{src:t,className:"photo",alt:"Sean"}),Object(n.jsx)("p",{className:"identifier",children:i}),Object(n.jsxs)("div",{className:"logo-links",children:[Object(n.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:Object(n.jsx)("img",{src:$,className:"logos",alt:"GitHub"})}),Object(n.jsx)("a",{href:c,target:"_blank",rel:"noreferrer",children:Object(n.jsx)("img",{src:ee,className:"logos",alt:"LinkedIn"})})]})]})},ie=i.p+"static/media/corey.50a72748.svg",ne=i.p+"static/media/amir.04bc82bb.svg",re=i.p+"static/media/chris.27cb4ec3.svg",ce=i.p+"static/media/sean.c65a6920.svg";var se=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{id:"meet",children:"Meet The Team"}),Object(n.jsxs)("div",{className:"team",children:[Object(n.jsx)(te,{name:"Sean Arseneault",image:ce,github:"https://github.com/itsmesean",linkedIn:"https://www.linkedin.com/in/itsmesean/"}),Object(n.jsx)(te,{name:"Amir Marcel",image:ne,github:"https://github.com/amirmarcel",linkedIn:"https://linkedin.com/in/amir-marcel"}),Object(n.jsx)(te,{name:"Christopher Johnson",image:re,github:"https://github.com/CJLA",linkedIn:"https://linkedin.com/in/thecjjohnson"}),Object(n.jsx)(te,{name:"Corey Van Splinter",image:ie,github:"https://github.com/cvanspl1",linkedIn:"https://linkedin.com/in/corey-van-splinter"})]})]})};var ae=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(h,{}),Object(n.jsx)(Z,{}),Object(n.jsx)(se,{})]})};var oe=function(){return Object(n.jsx)("div",{children:"bunch of words"})},de=i(3);var le=function(){return Object(n.jsxs)(l.a,{children:[Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)(b,{}),Object(n.jsx)("div",{children:Object(n.jsxs)(de.c,{children:[Object(n.jsx)(de.a,{path:"/docs",component:oe}),Object(n.jsx)(de.a,{exact:!0,path:"/",component:ae})]})})]}),Object(n.jsx)("div",{className:"footer"})]})};var ue=function(){return Object(n.jsx)("div",{className:"area",children:Object(n.jsx)("ul",{className:"rings",children:function(){for(var e=[],t=0;t<5;t++)e.push(Object(n.jsx)("li",{},"ring-".concat(t)));return e}()})})};i(119);Object(c.render)(Object(n.jsxs)("div",{children:[Object(n.jsx)(ue,{}),Object(n.jsx)(le,{})]}),document.getElementById("root"))}},[[120,1,2]]]);
//# sourceMappingURL=main.8b551ef9.chunk.js.map