(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{171:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=s(n),j=a,p=u["".concat(b,".").concat(j)]||u[j]||O[j]||l;return n?r.a.createElement(p,c(c({ref:t},o),{},{components:n})):r.a.createElement(p,c({ref:t},o))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=j;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,b[1]=c;for(var o=2;o<l;o++)b[o]=n[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"},172:function(e,t,n){"use strict";var a=n(0),r=n(20);t.a=function(){const e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},173:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return b}));var a=n(172),r=n(174);function l(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.a)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:l=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(a)return t+n;const b=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+b:b}(t,e,n,a)}}function b(e,t={}){const{withBaseUrl:n}=l();return n(e,t)}},174:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},175:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/App_LeftRightNav-f293c2825a786ce25f8d25d7f157d99e.png"},176:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/App_DataEntry-87860a454ad1e5373994ea9abe8245f9.png"},63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"Highlight",(function(){return s})),n.d(t,"Clear",(function(){return u})),n.d(t,"default",(function(){return j}));var a=n(2),r=n(6),l=(n(0),n(171)),b=n(173),c={id:"Meter",title:"3.8. Meter",sidebar_label:"Meter"},i={unversionedId:"chapter3/Meter",id:"version-English/chapter3/Meter",isDocsHomePage:!1,title:"3.8. Meter",description:"export const Highlight = ({children, color}) => (",source:"@site/versioned_docs/version-English/chapter3/chap3.8_Meter.mdx",slug:"/chapter3/Meter",permalink:"/mcoms-web/en/chapter3/Meter",editUrl:"/versioned_docs/version-English/chapter3/chap3.8_Meter.mdx",version:"English",sidebar_label:"Meter",sidebar:"version-English/Docs",previous:{title:"3.7. Plant",permalink:"/mcoms-web/en/chapter3/Plant"},next:{title:"3.9. Water",permalink:"/mcoms-web/en/chapter3/Water"}},o=[{value:"3.8.1. Overview",id:"381-overview",children:[]},{value:"3.8.2. Change Meter",id:"382-change-meter",children:[]},{value:"3.8.3. Unreleased Meter",id:"383-unreleased-meter",children:[{value:"3.8.3.1. Pending tab",id:"3831-pending-tab",children:[]},{value:"3.8.3.2. Review tab",id:"3832-review-tab",children:[]},{value:"3.8.3.3. Completed tab",id:"3833-completed-tab",children:[]}]},{value:"3.8.4. Smart Meter Status",id:"384-smart-meter-status",children:[]},{value:"3.8.5. Smart Feeder Status",id:"385-smart-feeder-status",children:[]},{value:"3.8.6. Meter Reading",id:"386-meter-reading",children:[]},{value:"3.8.7. Meter Reading Review",id:"387-meter-reading-review",children:[]},{value:"3.8.8. TERMS Status",id:"388-terms-status",children:[]},{value:"3.8.9. Battery Maintenance",id:"389-battery-maintenance",children:[]}],s=function(e){var t=e.children,n=e.color;return Object(l.b)("span",{style:{borderRadius:"2px",color:n,padding:"0.2rem",fontWeight:"bold"}},t)},u=function(e){var t=e.children;return Object(l.b)("div",{style:{display:"table"}},t)},O={rightToc:o,Highlight:s,Clear:u};function j(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},O,c,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"381-overview"},"3.8.1. Overview"),Object(l.b)("br",{clear:"right"}),Object(l.b)("img",{align:"left",src:Object(b.a)("img/scrnshts/3.8.1_1_MeterFunctionalities.svg"),alt:"Meter Tab Functionalities",width:"60%"}),Object(l.b)("img",{align:"right",src:Object(b.a)("img/scrnshts/3.8.1_2_MeterTabScrSht.png"),alt:"Meter Tab Screenshot",width:"40%"}),Object(l.b)("br",{clear:"both"}),Object(l.b)("h2",{id:"382-change-meter"},"3.8.2. Change Meter"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Functionality")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Allows users to request replacement of a customer\u2019s energy meter")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Key Users")),Object(l.b)("table",null,Object(l.b)("tr",null,Object(l.b)("th",null,"Designation"),Object(l.b)("th",null,"Main Purpose"),Object(l.b)("th",null,"Example Use Case")),Object(l.b)("tr",null,Object(l.b)("td",null,"Cluster In-charge"),Object(l.b)("td",null,"To request a change of meter for a customer"),Object(l.b)("td",null,"Registering and switching out a malfunctioning meter")),Object(l.b)("tr",null,Object(l.b)("td",null,"State In-charge"),Object(l.b)("td",null,"Same as Cluster In-charge"),Object(l.b)("td",null,"Same as Cluster In-charge"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Page Details")),Object(l.b)("br",{clear:"right"}),Object(l.b)("img",{align:"left",src:Object(b.a)("img/scrnshts/3.8.2_ChangeMeter.png"),alt:"Change Metert",width:"45%"}),Object(l.b)(u,{mdxType:"Clear"},Object(l.b)("p",null,Object(l.b)("img",{alt:"Data Entry",src:n(176).default})),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("u",null,"Customer Information")," to be input"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("u",null,"Meter Information")," will automatically populate, along with option to select anew meter"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("u",null,"Review")," tapped to complete the process"))),Object(l.b)("br",{clear:"both"}),Object(l.b)("h2",{id:"383-unreleased-meter"},"3.8.3. Unreleased Meter"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Functionality")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Tracks pending and completed meter change tasks"),Object(l.b)("li",{parentName:"ul"},"These meters are to be unmounted, either because of a malfunction or expiry of the customer\u2019s subscription"),Object(l.b)("li",{parentName:"ul"},"The meter is then taken to the warehouse or assigned to a different customer\u2019s subscription")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Key Users")),Object(l.b)("table",null,Object(l.b)("tr",null,Object(l.b)("th",null,"Designation"),Object(l.b)("th",null,"Main Purpose"),Object(l.b)("th",null,"Example Use Case")),Object(l.b)("tr",null,Object(l.b)("td",null,"Cluster In-charge"),Object(l.b)("td",null,"To view pending meter change requests and assign to field agents"),Object(l.b)("td",null,"Contacting the agent who worked on a particular meter assignment")),Object(l.b)("tr",null,Object(l.b)("td",null,"State In-charge"),Object(l.b)("td",null,"To view and acknowledge meter changes"),Object(l.b)("td",null,"Checking the number of pending meter assignments"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Page Details")),Object(l.b)("p",null,"The page is organised into the following tabs"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Pending"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Review"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Completed"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"View of pending meter requests, assign to agent, and mark completed"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"List of completed meter requests"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"List of historical completed and acknowledged meter requests")))),Object(l.b)("h3",{id:"3831-pending-tab"},"3.8.3.1. Pending tab"),Object(l.b)("br",{clear:"right"}),Object(l.b)("img",{align:"left",src:Object(b.a)("img/scrnshts/3.8.3.1_PendingTab.png"),alt:"Pending Tab",width:"45%"}),Object(l.b)(u,{mdxType:"Clear"},Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("u",null,"Navigation Bar")," indicates current tab and allows switching by tapping or swiping",Object(l.b)("p",{parentName:"li"},Object(l.b)("img",{alt:"Left Right Nav",src:n(175).default}))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("u",null,"Pending Meter List")," with information on each meter. Agents can be called by tapping on their names"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("u",null,"Task Buttons")," are used to allocate tasks to field agents and register the new location of a meter",Object(l.b)("p",{parentName:"li"},"The task can be either reassigned to a different agent or executed (processed) towards reviewing on completion")))),Object(l.b)("br",{clear:"both"}),Object(l.b)("h3",{id:"3832-review-tab"},"3.8.3.2. Review tab"),Object(l.b)("br",{clear:"right"}),Object(l.b)("img",{align:"left",src:Object(b.a)("img/scrnshts/3.8.3.2_ReviewTab.png"),alt:"Review Tab",width:"45%"}),Object(l.b)(u,{mdxType:"Clear"},Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("u",null,"Navigation Bar")," indicates current tab and allows switching by tapping or swiping",Object(l.b)("p",{parentName:"li"},Object(l.b)("img",{alt:"Left Right Nav",src:n(175).default}))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("u",null,"Review Meter List")," with information on each completed meter activity that is pending review"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("u",null,"Task Buttons")," used to confirm completed tasks"))),Object(l.b)("br",{clear:"both"}),Object(l.b)("h3",{id:"3833-completed-tab"},"3.8.3.3. Completed tab"),Object(l.b)("br",{clear:"right"}),Object(l.b)("img",{align:"left",src:Object(b.a)("img/scrnshts/3.8.3.3_CompletedTab.png"),alt:"Completed Tab",width:"45%"}),Object(l.b)(u,{mdxType:"Clear"},Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("u",null,"Navigation Bar")," indicates current tab and allows switching by tapping or swiping",Object(l.b)("p",{parentName:"li"},Object(l.b)("img",{alt:"Left Right Nav",src:n(175).default}))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("u",null,"Released Meter List")," with information on each completed meter release activity"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("u",null,"Filter Bar")," to narrow results by plant and time interval"))),Object(l.b)("br",{clear:"both"}),Object(l.b)("h2",{id:"384-smart-meter-status"},"3.8.4. Smart Meter Status"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Functionality")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Gives limited access to smart Smart meter data"),Object(l.b)("li",{parentName:"ul"},"The user may remotely switch meters on and off from here "),Object(l.b)("li",{parentName:"ul"},"Refer to Section 3.4.5 for more information")),Object(l.b)("h2",{id:"385-smart-feeder-status"},"3.8.5. Smart Feeder Status"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Functionality")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The Smart Feeder Status Section allows a user to reset or change configuration of a Smart Feeder through the application")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Key Users")),Object(l.b)("table",null,Object(l.b)("tr",null,Object(l.b)("th",null,"Designation"),Object(l.b)("th",null,"Main Purpose"),Object(l.b)("th",null,"Example Use Case")),Object(l.b)("tr",null,Object(l.b)("td",null,"Cluster In-charge"),Object(l.b)("td",null,"Control the state of the meter for all customers on a particular feeder"),Object(l.b)("td",null,"Shutting off a large number of meters in case of a technical emergency")),Object(l.b)("tr",null,Object(l.b)("td",null,"State In-charge"),Object(l.b)("td",null,"Same as Cluster In-charge"),Object(l.b)("td",null,"Shutting off the meter of a customer whose faulty appliance is impacting the whole distribution network"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Page Details")),Object(l.b)("br",{clear:"right"}),Object(l.b)("img",{align:"left",src:Object(b.a)("img/scrnshts/3.8.5_1_SparkFeederStatus.png"),alt:"Smart Feeder Status",width:"45%"}),Object(l.b)(u,{mdxType:"Clear"},Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("u",null,"Enter Details")," for plant and feeder number"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("u",null,"Submit")," to continue to the next page",Object(l.b)("p",{parentName:"li"},"Note that the feeder entry tab will only show once the plant has been selected")))),Object(l.b)("br",{clear:"both"}),Object(l.b)("br",{clear:"right"}),Object(l.b)("img",{align:"left",src:Object(b.a)("img/scrnshts/3.8.5_2_SparkFeederStatus.png"),alt:"Smart Feeder Status",width:"45%"}),Object(l.b)("br",null),Object(l.b)("br",null),Object(l.b)("br",null),Object(l.b)("br",null),Object(l.b)(u,{mdxType:"Clear"},Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("u",null,"Feeder Information")," shown"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("u",null,"Meter Status")," can be chosen between:")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Off"),Object(l.b)("li",{parentName:"ul"},"On"),Object(l.b)("li",{parentName:"ul"},"Auto")),Object(l.b)("p",null,"The user can also reset the meter to its default state by tapping the reset button")),Object(l.b)("br",{clear:"both"}),Object(l.b)("h2",{id:"386-meter-reading"},"3.8.6. Meter Reading"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Functionality")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The Meter Reading Section shows the electricity meter readings which are required at each plant")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Key Users")),Object(l.b)("table",null,Object(l.b)("tr",null,Object(l.b)("th",null,"Designation"),Object(l.b)("th",null,"Main Purpose"),Object(l.b)("th",null,"Example Use Case")),Object(l.b)("tr",null,Object(l.b)("td",null,"Technician"),Object(l.b)("td",null,"To view which customer meters need to be read"),Object(l.b)("td",null,"Planning which customers to visit for metering before the end of the month")),Object(l.b)("tr",null,Object(l.b)("td",null,"CSA"),Object(l.b)("td",null,"Same as Technician"),Object(l.b)("td",null,"Same as Technician")),Object(l.b)("tr",null,Object(l.b)("td",null,"Cluster In-charge"),Object(l.b)("td",null,"To check the number of pending meter readings"),Object(l.b)("td",null,"Contacting field agents to remind them about incomplete meter readings")),Object(l.b)("tr",null,Object(l.b)("td",null,"State In-charge"),Object(l.b)("td",null,"Same as Cluster In-charge"),Object(l.b)("td",null,"Same as Cluster In-charge"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Page Details")),Object(l.b)("br",{clear:"right"}),Object(l.b)("img",{align:"left",src:Object(b.a)("img/scrnshts/3.8.6_1_MeterReading.png"),alt:"Meter Reading",width:"45%"}),Object(l.b)(u,{mdxType:"Clear"},Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("u",null,"List of Plants")," along with number of manually read meters at each plant, and number of meters still pending reading"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("u",null,"Green Rows")," aggregates data for the cluster"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("u",null,"Total Bar"),"aggregates over all plants")),Object(l.b)("p",null,"Tapping a particular plant shows the user a list of pending meters, as shown in the next screenshot (note that this functionality is only available after the 24th of the month)")),Object(l.b)("br",{clear:"both"}),Object(l.b)("br",{clear:"right"}),Object(l.b)("img",{align:"left",src:Object(b.a)("img/scrnshts/3.8.6_2_MeterReading.png"),alt:"Meter Reading",width:"45%"}),Object(l.b)(u,{mdxType:"Clear"},Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("u",null,"Search Icon")," allows the user to segregate the listed consumers at a plant"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("u",null,"Consumer List")," enables the agent to review the consumer consumption history in terms of the previous reading values and the units consumed"))),Object(l.b)("br",{clear:"both"}),Object(l.b)("h2",{id:"387-meter-reading-review"},"3.8.7. Meter Reading Review"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Functionality")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The Meter Reading Review Section displays the number of pending meter readings reviews, plant wise"),Object(l.b)("li",{parentName:"ul"},"The meter reading process is completed by agents at the beginning or end of a month to record the electricity consumption of households that do not have a smart meter")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Key Users")),Object(l.b)("table",null,Object(l.b)("tr",null,Object(l.b)("th",null,"Designation"),Object(l.b)("th",null,"Main Purpose"),Object(l.b)("th",null,"Example Use Case")),Object(l.b)("tr",null,Object(l.b)("td",null,"CSA"),Object(l.b)("td",null,"To assess the number of consumers who are yet to undergo the meter reading"),Object(l.b)("td",null,"Assessing the number of completed reading reviews in a month")),Object(l.b)("tr",null,Object(l.b)("td",null,"Cluster In-charge"),Object(l.b)("td",null,"To conduct a review on the consumers whose meter readings are still pending"),Object(l.b)("td",null,"Assessing the number of pending reviews within the cluster")),Object(l.b)("tr",null,Object(l.b)("td",null,"State In-charge"),Object(l.b)("td",null,"Same as Cluster In-charge"),Object(l.b)("td",null,"Assessing the number of pending reviews at a plant"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Page Details")),Object(l.b)("br",{clear:"right"}),Object(l.b)("img",{align:"left",src:Object(b.a)("img/scrnshts/3.8.7_MeterReadingApproval.png"),alt:"Meter Reading Approval",width:"45%"}),Object(l.b)(u,{mdxType:"Clear"},Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("u",null,"Meter Readings Approvals")," are shown in a tabular column with relevant data given plant wise"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("u",null,"Green Rows")," aggregate the data for each cluster they represent"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("u",null,"Total Bar")," aggregates the columnar data",Object(l.b)("p",{parentName:"li"},"Tapping onto a particular plant will give the user a functionality that is only available after the 24th of every month")))),Object(l.b)("br",{clear:"both"}),Object(l.b)("h2",{id:"388-terms-status"},"3.8.8. TERMS Status"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Functionality")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Gives access to smart TERMS meter data"),Object(l.b)("li",{parentName:"ul"},"The user may remotely switch customer meters on and off from here")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Key Users")),Object(l.b)("table",null,Object(l.b)("tr",null,Object(l.b)("th",null,"Designation"),Object(l.b)("th",null,"Main Purpose"),Object(l.b)("th",null,"Example Use Case")),Object(l.b)("tr",null,Object(l.b)("td",null,"Operator"),Object(l.b)("td",null,"To access information about and control of a customer\u2019s meter"),Object(l.b)("td",null,"Investigating why a customer meter may have tripped off \u2013 e.g. they are deactivated")),Object(l.b)("tr",null,Object(l.b)("td",null,"Technician"),Object(l.b)("td",null,"Same as Operator"),Object(l.b)("td",null,"Switching a meter on or off")),Object(l.b)("tr",null,Object(l.b)("td",null,"CSA"),Object(l.b)("td",null,"Same as Operator"),Object(l.b)("td",null,"Same as Technician")),Object(l.b)("tr",null,Object(l.b)("td",null,"Cluster In-charge"),Object(l.b)("td",null,"Same as Operator"),Object(l.b)("td",null,"Same as Technician")),Object(l.b)("tr",null,Object(l.b)("td",null,"State In-charge"),Object(l.b)("td",null,"Same as Operator"),Object(l.b)("td",null,"Same as Technician"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Page Details")),Object(l.b)("br",{clear:"right"}),Object(l.b)("img",{align:"left",src:Object(b.a)("img/scrnshts/3.8.8_1_TermsStatus.png"),alt:"TERMS Consumer",width:"45%"}),Object(l.b)(u,{mdxType:"Clear"},Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("u",null,"Plant Selection")," must be made for the customer list to show"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("u",null,"Customer List")," of a particular plant")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)(s,{color:"#FF0000",mdxType:"Highlight"},"Red")," - Inactive customer"),Object(l.b)("li",{parentName:"ul"},Object(l.b)(s,{color:"#008000",mdxType:"Highlight"},"Green")," - Active customer")),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},Object(l.b)("u",null,"Search Icon")," used to filter the consumer list by typing in a name or meter number")),Object(l.b)("p",null,"Tapping a customer redirects to that meter\u2019s meter control page, shown in the next screenshot")),Object(l.b)("br",{clear:"both"}),Object(l.b)("br",{clear:"right"}),Object(l.b)("img",{align:"left",src:Object(b.a)("img/scrnshts/3.8.8_2_TermsStatus.png"),alt:"TERMS Reset",width:"45%"}),Object(l.b)(u,{mdxType:"Clear"},Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("u",null,"Customer Information")," provides relevant information on the customer and the assigned TERMS meter"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("u",null,"Meter Status")," can be changed by tapping ON, OFF or the Reset button"))),Object(l.b)("br",{clear:"both"}),Object(l.b)("h2",{id:"389-battery-maintenance"},"3.8.9. Battery Maintenance"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Functionality")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The Battery Maintenance Section gives an overview on the battery banks at every plant"),Object(l.b)("li",{parentName:"ul"},"The section allows the user to switch the battery pack on or off")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Key Users")),Object(l.b)("table",null,Object(l.b)("tr",null,Object(l.b)("th",null,"Designation"),Object(l.b)("th",null,"Main Purpose"),Object(l.b)("th",null,"Example Use Case")),Object(l.b)("tr",null,Object(l.b)("td",null,"Technician"),Object(l.b)("td",null,"To change the state of a battery bank"),Object(l.b)("td",null,"Switching the battery status of a plant between on and off")),Object(l.b)("tr",null,Object(l.b)("td",null,"Cluster In-charge"),Object(l.b)("td",null,"Same as Technician"),Object(l.b)("td",null,"Same as Technician")),Object(l.b)("tr",null,Object(l.b)("td",null,"State In-charge"),Object(l.b)("td",null,"To check which batteries are online"),Object(l.b)("td",null,"Creating a report on the number of battery packs available at each plant"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Page Details")),Object(l.b)("br",{clear:"right"}),Object(l.b)("img",{align:"left",src:Object(b.a)("img/scrnshts/3.8.9_1_BatteryMaintenance.png"),alt:"Battery Bank Voltage Activity",width:"45%"}),Object(l.b)(u,{mdxType:"Clear"},Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("u",null,"Search Icon")," can be used to filter out the list of plants shown"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("u",null,"Filter Bar")," selects a particular plant and time period"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("u",null,"Plant List")," displays relevant information on the battery status of each plant")),Object(l.b)("p",null,"Tapping on a plant tab will redirect the user to the plant\u2019s battery bank control page, explained in the next screenshot")),Object(l.b)("br",{clear:"both"}),Object(l.b)("br",{clear:"right"}),Object(l.b)("img",{align:"left",src:Object(b.a)("img/scrnshts/3.8.9_2_BatteryMaintenance.png"),alt:"Battery Bank Specific",width:"45%"}),Object(l.b)(u,{mdxType:"Clear"},Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("u",null,"Battery Bank Status")," can be used to switch a battery bank at the plant on and off"))),Object(l.b)("br",{clear:"both"}))}j.isMDXComponent=!0}}]);