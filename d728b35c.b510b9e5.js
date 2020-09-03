(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),i=(n(0),n(119)),o={id:"IntSysInt",title:"MCOMS Interfaces and System Integration",sidebar_label:"Interfaces and System Integration"},s={unversionedId:"IntSysInt",id:"IntSysInt",isDocsHomePage:!1,title:"MCOMS Interfaces and System Integration",description:"Front-end Interfaces",source:"@site/docs\\chap1.3_IntSysInt.mdx",slug:"/IntSysInt",permalink:"/mcoms-web/IntSysInt",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/chap1.3_IntSysInt.mdx",version:"current",sidebar_label:"Interfaces and System Integration",sidebar:"someSidebar",previous:{title:"The Role of COMS in Mini-grid Management",permalink:"/mcoms-web/roleofcom"},next:{title:"Organisation of this User Manual",permalink:"/mcoms-web/usermanual"}},c=[{value:"Customer App",id:"customer-app",children:[]},{value:"Field Agent App",id:"field-agent-app",children:[]},{value:"Web Platform",id:"web-platform",children:[]},{value:"Data Sources and Transmission",id:"data-sources-and-transmission",children:[]},{value:"System Overview",id:"system-overview",children:[]},{value:"Manual Data Input",id:"manual-data-input",children:[]},{value:"Smart Meters",id:"smart-meters",children:[]},{value:"Plant Equipment",id:"plant-equipment",children:[]}],l={rightToc:c};function u(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"front-end-interfaces"},"Front-end Interfaces"),Object(i.b)("p",null,"The real-time integration of mini-grid customers, field agents, and management onto a single information platform is shown in Figure 4."),Object(i.b)("h4",{id:"figure-4-integration-of-mcoms-interfaces"},"Figure 4: Integration of MCOMS interfaces."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Integration of MCOMS interfaces.",src:n(298).default})),Object(i.b)("p",null,"The following sections describe each interface."),Object(i.b)("h3",{id:"customer-app"},"Customer App"),Object(i.b)("h4",{id:"figure-5-screenshot-of-the-customer-app"},"Figure 5: Screenshot of the customer app."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Screenshot of the customer app.",src:n(299).default})),Object(i.b)("p",null,"The customer smartphone app provides an intuitive graphical interface through which mini-grid customers can:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"View their consumption, billing, and payment history"),Object(i.b)("li",{parentName:"ul"},"Store receipts"),Object(i.b)("li",{parentName:"ul"},"View and edit their customer profile"),Object(i.b)("li",{parentName:"ul"},"Register service and package change requests."),Object(i.b)("li",{parentName:"ul"},"Directly contact mini-grid field personnel"),Object(i.b)("li",{parentName:"ul"},"Receive alerts and notifications about their account, electricity supply, or other operational matters.")),Object(i.b)("p",null,"Customers without smartphones can avail some limited functionality through SMS (see Figure 6)."),Object(i.b)("p",null,"The customer app is fully documented in Chapter 0."),Object(i.b)("h4",{id:"figure-6-screenshot-of-sms-services"},"Figure 6: Screenshot of SMS services."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Screenshot of SMS services.",src:n(300).default})),Object(i.b)("h3",{id:"field-agent-app"},"Field Agent App"),Object(i.b)("h4",{id:"figure-7-screenshot-of-the-field-agent-app"},"Figure 7: Screenshot of the field agent App."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Screenshot of the field agent App.",src:n(301).default})),Object(i.b)("p",null,"The field agent smartphone app provides a comprehensive interface for mini-grid personnel at all levels of the business hierarchy."),Object(i.b)("p",null,"For personnel on the ground, the app allows:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Viewing customer accounts"),Object(i.b)("li",{parentName:"ul"},"Recording transactions"),Object(i.b)("li",{parentName:"ul"},"Receiving assignments and notifications"),Object(i.b)("li",{parentName:"ul"},"Registering customers and changing their package")),Object(i.b)("p",null,"For management personnel, the app allows:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Tracking sales and business performance"),Object(i.b)("li",{parentName:"ul"},"Communication with the field team"),Object(i.b)("li",{parentName:"ul"},"Identifying emerging issues requiring intervention"),Object(i.b)("li",{parentName:"ul"},"Monitoring technical operation of the mini-grid")),Object(i.b)("p",null,"The field agent app is fully documented in Chapter 3."),Object(i.b)("h3",{id:"web-platform"},"Web Platform"),Object(i.b)("p",null,"The web platform is the primary MCOMS front-end for use by the management teams at cluster, state, and HQ levels. It provides detailed dashboards and data analysis functionalities, and allows users to view and edit database records."),Object(i.b)("p",null,"A detailed guide to the web interface will be included in a future edition of this manual, but in this edition it is omitted."),Object(i.b)("h3",{id:"data-sources-and-transmission"},"Data Sources and Transmission"),Object(i.b)("p",null,"The MCOMS components discussed in the preceding Section 1.3.1 all exchange commands and information in real time. To fully appreciate and leverage the potential of MCOMS, it is necessary to get a basic overview of the various information pipelines, and how distributed hardware and software talk to each other."),Object(i.b)("h3",{id:"system-overview"},"System Overview"),Object(i.b)("p",null,"The central data management system acts both as a data repository and a command router, and can push information and notifications to specific users or hardware. Principal hardware nodes and the two-way interactions between them are depicted in Figure 8. The following sections describe data collection and transmission mechanisms in more depth."),Object(i.b)("h4",{id:"figure-8-data-flow-between-mcoms-components"},"Figure 8: Data flow between MCOMS components."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Data flow between MCOMS components",src:n(302).default})),Object(i.b)("h3",{id:"manual-data-input"},"Manual Data Input"),Object(i.b)("p",null,"Sales and customer-related information is entered into the system by field agents and customers. This critical ground intelligence is then relayed to all levels of the business hierarchy. "),Object(i.b)("p",null,"Some activities are input subject to requirement \u2013 example include adding new customers or registering payments. Others are routine activities, such as logging solar energy generation or performing customer meter readings."),Object(i.b)("h3",{id:"smart-meters"},"Smart Meters"),Object(i.b)("p",null,"Smart energy meters connect the demand side to cloud servers for automated data upload and remote-control capabilities. While specific technologies differ, such systems generally offer a variety of advantages over conventional meter setups, as captured in Figure 9."),Object(i.b)("h4",{id:"figure-9-benefits-of-smart-metering"},"Figure 9: Benefits of smart metering."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Benefits of smart metering",src:n(303).default})),Object(i.b)("p",null,"Communication with smart meters typically operates through the hardware manufacturer\u2019s software and cloud servers. Data can be pulled from the servers and commands issued to individual meters (or collections thereof) through the manufacturer\u2019s portal and/or through their APIs."),Object(i.b)("h3",{id:"plant-equipment"},"Plant Equipment"),Object(i.b)("p",null,"A detailed record on the state of supply-side equipment\u2014including inverters, batteries, and solar panels\u2014can be collected from data-loggers installed in the mini-grid control room. Such records allow plant management to assess performance and health of their systems."),Object(i.b)("p",null,"More sophisticated setups may combine data collection with automated real-time performance optimisation, as well as two-way communication capabilities which allow technicians to remotely control plant operations."))}u.isMDXComponent=!0},119:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,b=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return n?r.a.createElement(b,s(s({ref:t},l),{},{components:n})):r.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},298:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/1.3.1_IntMCOMInterf-acc2e4d341505ed72fdb9ee5d5a318b4.png"},299:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/1.3.2_CustApp-9ea4fe02fbab81d9c7feb1cffe7378ca.png"},300:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/1.3.3_ScrShSMS-f08cc663a44b2fd9b559335fab15e550.png"},301:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/1.3.4_FieldAgApp-eca78dc739ad671fd13d0a4455ae1f75.png"},302:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/1.3.5_DataFlow-89e52d538bded175f10e316cca0508f6.png"},303:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/1.3.6_BenofSmrtMet-e08dcb38456770f21d1fee25f35ac904.png"}}]);