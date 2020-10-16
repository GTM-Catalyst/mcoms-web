(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return l})),n.d(t,"Highlight",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),i=(n(0),n(163)),c=n(167),a={id:"welcome",title:"Introduction",sidebar_label:"Welcome",slug:"/"},u={unversionedId:"welcome",id:"version-\u0939\u093f\u0902\u0926\u0940/welcome",isDocsHomePage:!1,title:"Introduction",description:"export const Highlight = ({children, color}) => (",source:"@site/versioned_docs/version-\u0939\u093f\u0902\u0926\u0940/Welcome.mdx",slug:"/",permalink:"/hindi/",editUrl:"/versioned_docs/version-\u0939\u093f\u0902\u0926\u0940/Welcome.mdx",version:"\u0939\u093f\u0902\u0926\u0940",sidebar_label:"Welcome",sidebar:"version-\u0939\u093f\u0902\u0926\u0940/Docs",next:{title:"Mini-grid Operational Challenges",permalink:"/hindi/opchallenge"}},l=[],s=function(e){var t=e.children,n=e.color;return Object(i.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.3rem",fontSize:"20px",fontWeight:"bold",fontStyle:"italic"}},t)},f={rightToc:l,Highlight:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("a",{href:Object(c.a)("img/SamplePdf.pdf"),target:"_blank"},Object(i.b)(s,{color:"#1877F2",mdxType:"Highlight"}," Download content of this website in PDF format ")),Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("div",{dangerouslySetInnerHTML:{__html:'\n\t<div style="position: relative; padding-bottom: 56.25%;height: 0;">\n\t\t<iframe \n\t\t\tsrc="https://www.youtube.com/embed/LuVEObtXJy8" \n\t\t\tframeborder="0" \n\t\t\tallowfullscreen="" \n\t\t\tstyle=" position: absolute; \n\t\t\ttop: 0px; left: 0px; width: 100%; height: 100%;">\n\t\t</iframe>\n\t</div>\n    '}}))}p.isMDXComponent=!0},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=s(n),d=r,b=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return n?o.a.createElement(b,a(a({ref:t},l),{},{components:n})):o.a.createElement(b,a({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var l=2;l<i;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},164:function(e,t,n){"use strict";var r=n(0),o=n(21);t.a=function(){const e=Object(r.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},167:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var r=n(164),o=n(169);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.a)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(r)return t+n;const c=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+c:c}(t,e,n,r)}}function c(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},169:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))}}]);