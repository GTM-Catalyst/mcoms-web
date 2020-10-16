(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{163:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(a),h=n,m=u["".concat(o,".").concat(h)]||u[h]||p[h]||i;return a?r.a.createElement(m,s(s({ref:t},l),{},{components:a})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},95:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),i=(a(0),a(163)),o={id:"DataVerSteps",title:"Data Verification Steps",sidebar_label:"Data Verification Steps"},s={unversionedId:"DataVerSteps",id:"DataVerSteps",isDocsHomePage:!1,title:"Data Verification Steps",description:"To ensure the accuracy and validity of data in the system, several layers of checks can be implemented.",source:"@site/docs/chap2.5_DataVerSteps.md",slug:"/DataVerSteps",permalink:"/DataVerSteps",editUrl:"/docs/chap2.5_DataVerSteps.md",version:"current",sidebar_label:"Data Verification Steps",sidebar:"Docs",previous:{title:"Site Financial Reporting",permalink:"/SiteFinRprtng"},next:{title:"Introduction",permalink:"/introduction"}},c=[{value:"Input Checks",id:"input-checks",children:[]},{value:"User Review",id:"user-review",children:[]},{value:"Database Edit",id:"database-edit",children:[]},{value:"Change Logs",id:"change-logs",children:[]},{value:"Numerical Checks",id:"numerical-checks",children:[]},{value:"Customer Validation",id:"customer-validation",children:[]},{value:"Chain of Approvals",id:"chain-of-approvals",children:[]},{value:"Data Audit",id:"data-audit",children:[]}],l={rightToc:c};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To ensure the accuracy and validity of data in the system, several layers of checks can be implemented."),Object(i.b)("h3",{id:"input-checks"},"Input Checks"),Object(i.b)("p",null,"MCOMS applications may restrict the range of input to different data fields. Different mechanisms will be appropriate for different occasions. For example:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Dropdown lists ensure the user can only select from a limited set of options, for example the list of plant names (so the user cannot write in an invalid name)"),Object(i.b)("li",{parentName:"ul"},"Limited input value, where only certain inputs are deemed valid \u2013 for example, an energy meter reading must be greater than the previous reading to be registered as valid")),Object(i.b)("h3",{id:"user-review"},"User Review"),Object(i.b)("p",null,"The MCOMS applications invite users to review and confirm all information that they input into the applications, before submitting it to the central database."),Object(i.b)("h3",{id:"database-edit"},"Database Edit"),Object(i.b)("p",null,"Many database entries can be amended from the front-end of the web platform, provided the user has the appropriate access rights."),Object(i.b)("h3",{id:"change-logs"},"Change Logs"),Object(i.b)("p",null,"All edits to MCOMS databases are logged, along with the timestamp of the change and which user made the change. This ensures that all data can be restored in the case of accident, and it also gaurds against malicious meddling with stored information."),Object(i.b)("h3",{id:"numerical-checks"},"Numerical Checks"),Object(i.b)("p",null,"Certain automated checks are programmed into the MCOMS server to ensure that database entries make sense. An example would be ensuring that equipment efficiencies are between 0% and 100%, or that daily energy generation falls within expected ranges. There is some overlap between this and the checks in Section 2.5.1; the difference is that here, database calculations are scheduled on the server side, whereas in Section 2.5.1 the input into the database is restricted before it is submitted."),Object(i.b)("h3",{id:"customer-validation"},"Customer Validation"),Object(i.b)("p",null,"Where changes to customer information, or updates of customer accounts are involved, MCOMS will frequently require the customer themselves to validate the change. A common way to do this is for the customer to confirm the change with an OTP sent to their registered mobile number."),Object(i.b)("h3",{id:"chain-of-approvals"},"Chain of Approvals"),Object(i.b)("p",null,"Many operational workflows discussed in this chapter involve multiple levels of the mini-grid organisational hierarchy. For such multi-person processes, MCOMS automatically notifies different personnel when their input, approval, or action is needed."),Object(i.b)("p",null,"For example, to change a customer\u2019s package, a customer must first submit a request, which passes to the cluster in-charge, who may push the request to a CSA for follow-up with the customer before approving it and handing over to a technician for implementation. Once the technician marks the task as complete, the cluster in-charge is notified; they must confirm that the work has been done properly, after which the change is finalised and logged in the central database for the state in-charge and upper management to see in their monthly reports."),Object(i.b)("h3",{id:"data-audit"},"Data Audit"),Object(i.b)("p",null,"Data audits represent an important consistency check of the MCOMS database. Independent in-situ copies of certain field data may be compared with values in the central database to ensure agreement. For example, the daily solar energy generation values are recorded through the field agent app and also noted down manually in a register in the plant control room. The cluster in-charge can compare the two records for consistency. "))}d.isMDXComponent=!0}}]);