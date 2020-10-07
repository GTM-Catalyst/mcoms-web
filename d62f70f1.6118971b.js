(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),i=(n(0),n(163)),o={id:"TechOp",title:"Technical Operations",sidebar_label:"Technical Operations"},c={unversionedId:"TechOp",id:"TechOp",isDocsHomePage:!1,title:"Technical Operations",description:"Technical monitoring and maintenance keep the plant running efficiently with minimal service interruptions, while enabling managers to optimise the utilisation of the plant and hence deliver as much energy to consumers as possible.",source:"@site/docs/chap2.3_TechOp.md",slug:"/TechOp",permalink:"/mcoms-web/next/TechOp",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/chap2.3_TechOp.md",version:"current",sidebar_label:"Technical Operations",sidebar:"Docs",previous:{title:"Customer-related Operations",permalink:"/mcoms-web/next/CustRelOp"},next:{title:"Site Financial Reporting",permalink:"/mcoms-web/next/SiteFinRprtng"}},s=[{value:"Plant Technical Data Submission",id:"plant-technical-data-submission",children:[]},{value:"Plant Maintenance",id:"plant-maintenance",children:[]},{value:"Customer Connection",id:"customer-connection",children:[]},{value:"Meter Status",id:"meter-status",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Technical monitoring and maintenance keep the plant running efficiently with minimal service interruptions, while enabling managers to optimise the utilisation of the plant and hence deliver as much energy to consumers as possible."),Object(i.b)("h3",{id:"plant-technical-data-submission"},"Plant Technical Data Submission"),Object(i.b)("p",null,"Data from plant equipment yields important insights into technical performance. Part of the ground team\u2019s daily activities is observing and logging certain critical datapoints, including:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Energy generated from each solar array"),Object(i.b)("li",{parentName:"ul"},"Energy generated from backup generators"),Object(i.b)("li",{parentName:"ul"},"Runtime of backup generators"),Object(i.b)("li",{parentName:"ul"},"Energy dispatched from the plant (through each feeder)")),Object(i.b)("p",null,"Pre-programmed algorithms within MCOMS then update the plant utilisation, solar yield, and other relevant metrics which can be tracked by managers."),Object(i.b)("h3",{id:"plant-maintenance"},"Plant Maintenance"),Object(i.b)("p",null,"Plant maintenance involves various operations to prevent and repair damage to plant equipment. Maintenance is scheduled by MCOMS at appropriate time intervals, with notifications pushed to the relevant personnel when the system detects that maintenance is required."),Object(i.b)("p",null,"Some activities, such as changing the oil of diesel generators or cleaning solar panels, can be carried out by plant personnel. Others, like generator servicing or battery equalisation, may require external oversight arranged by the cluster or state in-charge."),Object(i.b)("h3",{id:"customer-connection"},"Customer Connection"),Object(i.b)("p",null,"There are a number of stages to connecting new customers to the distribution network. Each stage requires different hardware and infrastructure."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"First, the distribution network\u2014i.e. the poles and wires\u2014must be within some minimum distance from the customer\u2019s property."),Object(i.b)("li",{parentName:"ul"},"Second, service wires connecting the property to the distribution network must be installed."),Object(i.b)("li",{parentName:"ul"},"Finally, the customer\u2019s electricity access points must be installed, and connected via a meter (or load limiter) to the service wire.")),Object(i.b)("p",null,"Meters may be mounted in the customer\u2019s property itself (which shields the meter from the elements), or on the nearest pole (which avoids possible tampering or accidental damage)."),Object(i.b)("h3",{id:"meter-status"},"Meter Status"),Object(i.b)("p",null,"To connect new customers, a spare meter or load limiter must be available at the plant or at a nearby warehouse. It is important to keep track of how many are free and where they are stored."),Object(i.b)("p",null,"Since meters may be in short supply, customers who have deactivated their accounts may have their meters removed and re-assigned to another customer, or sent to storage. This process is also called \u201creleasing\u201d the meter."))}u.isMDXComponent=!0},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,b=p["".concat(o,".").concat(h)]||p[h]||m[h]||i;return n?a.a.createElement(b,c(c({ref:t},l),{},{components:n})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);