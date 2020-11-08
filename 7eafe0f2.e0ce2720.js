(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"Clear",(function(){return u})),n.d(t,"default",(function(){return f}));var r=n(2),i=n(6),o=(n(0),n(171)),c=n(173),a={id:"Notification",title:"4.10. Notification",sidebar_label:"Notification"},s={unversionedId:"chapter4/Notification",id:"version-English/chapter4/Notification",isDocsHomePage:!1,title:"4.10. Notification",description:"export const Clear = ({children}) => (",source:"@site/versioned_docs/version-English/chapter4/chap4.10_Notifications.md",slug:"/chapter4/Notification",permalink:"/mcoms-web/en/chapter4/Notification",editUrl:"/versioned_docs/version-English/chapter4/chap4.10_Notifications.md",version:"English",sidebar_label:"Notification",sidebar:"version-English/Docs",previous:{title:"4.9. Service Request",permalink:"/mcoms-web/en/chapter4/Service_Request"},next:{title:"4.11. Schemes and Offers",permalink:"/mcoms-web/en/chapter4/Schemes_and_Offers"}},l=[],u=function(e){var t=e.children;return Object(o.b)("div",{style:{display:"table"}},t)},p={rightToc:l,Clear:u};function f(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Functionality")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The Notification page lists all historical communications from the company, including bill alerts, payment receipts, plant shutdown messages, and more."),Object(o.b)("li",{parentName:"ul"},"The user will also receive SMS copies of the same messages; however, the ones stored here cannot be deleted.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Page Details")),Object(o.b)("br",{clear:"right"}),Object(o.b)("img",{align:"left",src:Object(c.a)("img/scrnshts/4.10_Notification.png"),alt:"Notification",width:"45%"}),Object(o.b)(u,{mdxType:"Clear"},Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("u",null,"Search Icon")," used to filter the messages by typing in key words"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("u",null,"Message List")," shows all communications from the company in chronological order"))),Object(o.b)("br",{clear:"both"}))}f.isMDXComponent=!0},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(c,".").concat(b)]||p[b]||f[b]||o;return n?i.a.createElement(m,a(a({ref:t},l),{},{components:n})):i.a.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var l=2;l<o;l++)c[l]=n[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},172:function(e,t,n){"use strict";var r=n(0),i=n(20);t.a=function(){const e=Object(r.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},173:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var r=n(172),i=n(174);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.a)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(r)return t+n;const c=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+c:c}(t,e,n,r)}}function c(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},174:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))}}]);