(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{146:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return s})),i.d(t,"metadata",(function(){return o})),i.d(t,"rightToc",(function(){return c})),i.d(t,"default",(function(){return u}));var n=i(2),a=i(6),r=(i(0),i(163)),s={id:"CustRelOp",title:"Customer-related Operations",sidebar_label:"Customer-related Operations"},o={unversionedId:"CustRelOp",id:"version-English/CustRelOp",isDocsHomePage:!1,title:"Customer-related Operations",description:"Creating Packages",source:"@site/versioned_docs/version-English/chap2.2_custRelOp.md",slug:"/CustRelOp",permalink:"/mcoms-web/CustRelOp",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-English/chap2.2_custRelOp.md",version:"English",sidebar_label:"Customer-related Operations",sidebar:"version-English/Docs",previous:{title:"Introduction to Mini-grid Operational Activities",permalink:"/mcoms-web/IntroOpActivity"},next:{title:"Technical Operations",permalink:"/mcoms-web/TechOp"}},c=[{value:"Creating Packages",id:"creating-packages",children:[{value:"Customer Acquisition",id:"customer-acquisition",children:[]},{value:"Customer Status",id:"customer-status",children:[]},{value:"Metering, Billing, and Collection",id:"metering-billing-and-collection",children:[]},{value:"Customer Receipts",id:"customer-receipts",children:[]},{value:"Editing Profiles",id:"editing-profiles",children:[]},{value:"Service Requests",id:"service-requests",children:[]},{value:"Security Deposits",id:"security-deposits",children:[]},{value:"Package Changes",id:"package-changes",children:[]},{value:"Complementary Business Services",id:"complementary-business-services",children:[]}]}],l={rightToc:c};function u(e){var t=e.components,s=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,s,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"creating-packages"},"Creating Packages"),Object(r.b)("p",null,"Packages allow customers to prioritise their electricity needs and balance them against price for different levels of service. In designing and choosing packaged, three major supply characteristics must be considered:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The maximum power or load supported by the connection"),Object(r.b)("li",{parentName:"ul"},"The timings during which the connection is active"),Object(r.b)("li",{parentName:"ul"},"The tariff per unit of energy consumed, if any")),Object(r.b)("p",null,"A package combines allowances in these three dimensions, in a way that is designed to suit the consumption patterns of existing and potential customers, while covering the cost of electricity supply and business requirements. Multiple packages are generally offered at a given plant. "),Object(r.b)("p",null,"Post-paid packages are billed at the end of each billing period after energy has been consumed; these connections are typically metered and the bill depends on the amount of consumption. Pre-paid packages require the customer to pay a fixed amount in advance to maintain a given level of supply availability."),Object(r.b)("h4",{id:"figure-10-package-id-construction-example"},"Figure 10: Package ID construction example."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Package ID construction example",src:i(490).default})),Object(r.b)("h3",{id:"customer-acquisition"},"Customer Acquisition"),Object(r.b)("p",null,"The step-by-step customer acquisition process is depicted in Figure 11. Note that all steps coloured green or blue are done through the MCOMS apps."),Object(r.b)("h4",{id:"figure-11-adding-customers-detailed-workflow"},"Figure 11: Adding customers detailed workflow."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Adding customers detailed workflow",src:i(491).default})),Object(r.b)("h4",{id:"unique-customer-ids"},"Unique Customer IDs"),Object(r.b)("p",null,"Each customer is assigned a unique identification number the moment their account is created. These numbers play a pivotal role in the structure of MCOMS, as the databases for energy consumption, payment history, etc. are indexed according to this ID.\nAn example customer ID is shown in Figure 12."),Object(r.b)("h4",{id:"figure-12-customer-id-construction-example"},"Figure 12: Customer ID construction example."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Customer ID construction example",src:i(492).default})),Object(r.b)("h3",{id:"customer-status"},"Customer Status"),Object(r.b)("p",null,"A customer\u2019s status can be either \u201cactive\u201d or \u201cinactive\u201d/\u201dbanned\u201d:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Active customers have kept up to date with bills (i.e. have not exceeded their credit limit), and are continuing to avail the services of the mini-grid."),Object(r.b)("li",{parentName:"ul"},"Inactive / banned customers are those whose connection has been terminated \u2013 either because of non-payment, or the customer\u2019s preference, or in rare cases because electricity demand is exceeding the plant capacity and customers must be dropped.")),Object(r.b)("p",null,"MCOMS automatically flags customers who are to be deactivated; when the customer is connected through a smart meter, this process can be automatic."),Object(r.b)("h3",{id:"metering-billing-and-collection"},"Metering, Billing, and Collection"),Object(r.b)("p",null,"Metering, billing, and collection (MBC) is the process by which a customer pays for the electricity they have consumed. The process is summarised below and illustrated in Figure 13."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Metering",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"For customers with conventional energy meters, the new reading is noted at the end of the billing period."),Object(r.b)("li",{parentName:"ul"},"For customers with smart meters (see Section 1.3.2.3), energy consumption is automatically calculated."),Object(r.b)("li",{parentName:"ul"},"For customers with load limiters (pre-paid), no metering is necessary."))),Object(r.b)("li",{parentName:"ul"},"Billing",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"For metered customers, energy consumption is multiplied by the appropriate tariff to arrive at the final bill."),Object(r.b)("li",{parentName:"ul"},"For unmetered customers, the bill is a fixed amount per month so no calculation is necessary."),Object(r.b)("li",{parentName:"ul"},"Bills are delivered to customers either electronically or in person by field agents."))),Object(r.b)("li",{parentName:"ul"},"Collection",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"The customer makes payment against their bill, as well as any outstanding debt."),Object(r.b)("li",{parentName:"ul"},"Payment can be made in person in cash (point of sale (POS)), through a mobile wallet (e.g. PayTM), or by card."),Object(r.b)("li",{parentName:"ul"},"Partial payments are acceptable, but will require repeated field agent visits.")))),Object(r.b)("h4",{id:"figure-13-metering-billing-and-collection-workflow"},"Figure 13: Metering, billing, and collection workflow."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Metering, billing, and collection workflow",src:i(493).default})),Object(r.b)("h3",{id:"customer-receipts"},"Customer Receipts"),Object(r.b)("p",null,"Ensuring that company and customers alike have access to records of bills and payments is important for transparency and trust, and for forestalling / resolving payment disputes. Customer receipts are the primary proof of billing for any active consumer, and come in a variety of formats:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Print-out:")," a paper receipt of a transaction can be printed by field agents upon request, using a portable printer."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Digital record:")," customers using the smartphone app gain access to their complete transaction history, as seen by company agents."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Screenshot:")," customers without the app may request a screenshot of the receipt from a company agent, to be saved as an image file."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"SMS:")," customers may automatically receive SMS messages notifying them of bills and confirming payment received.")),Object(r.b)("h3",{id:"editing-profiles"},"Editing Profiles"),Object(r.b)("p",null,"It is important to maintain up-to-date customer records, including information like address and contact number. This ensures that customers can receive bills and payment receipts, and be informed of any service disruptions or company promotions."),Object(r.b)("p",null,"Customers may update their own information through the customer app, or field agents may do so with approval (and an OTP) from the customer."),Object(r.b)("h3",{id:"service-requests"},"Service Requests"),Object(r.b)("p",null,"Service requests are made by customers when they experience supply disruptions or other issues with their electricity connection. Service requests can be made though:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The customer app, which has an easy-to-use service request module"),Object(r.b)("li",{parentName:"ul"},"The field agent app, where the customer contacts the company field agent directly, and the agent logs the service request on their behalf")),Object(r.b)("p",null,"The processing of every Service Request made by all customers is as follows:"),Object(r.b)("h4",{id:"figure-14-service-requests-workflow"},"Figure 14: Service requests workflow."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Service requests workflow",src:i(494).default})),Object(r.b)("h3",{id:"security-deposits"},"Security Deposits"),Object(r.b)("p",null,"A refundable security deposit is typically taken from every new customer, with the amount depending on their anticipated monthly bill. In the event of a lapse in regular payments, the company can recoup the outstanding amount form the deposit. Otherwise, the deposit is refunded in full when a customer discontinues their subscription. The process for collecting the security deposit is illustrated in ",Object(r.b)("strong",{parentName:"p"},"Error! Reference source not found.")),Object(r.b)("h3",{id:"package-changes"},"Package Changes"),Object(r.b)("p",null,"Customers whose energy requirements or circumstances change may shift to a different package. For example, a household may upgrade to a higher load limit after buying new electrical appliances, or may opt for longer hours of access."),Object(r.b)("p",null,"A package change can be initiated via the customer app, or by a field agent on behalf of the customer. The main steps of the process are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Logging the request:")," the package change request is registered in the system"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Approval:")," the request is screened by the appropriate mini-grid employee; in some circumstances the request may be rejected"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Payment:")," the customer and company settle necessary payments, such as changing the security deposit"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Database update:")," the customer\u2019s assigned package is updated; the change may be implemented immediately or at the beginning of the next billing period"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Connection update:")," smart meter or load limiter is reprogrammed with the new package details (namely load limit and timing), or the customer is connected to a different feeder")),Object(r.b)("h3",{id:"complementary-business-services"},"Complementary Business Services"),Object(r.b)("p",null,"Value-added services are those activities which go beyond the core role of providing electricity. These activities are intended to serve multiple purposes: to bring value and opportunities to customers, to positively impact the local community, to raise the profile of the mini-grid operator, and to increase electricity sales."),Object(r.b)("p",null,"Some value-added services are geared towards businesses and micro-enterprise development, while others are more focussed on households and personal use. Two examples are given."),Object(r.b)("h4",{id:"example-1-water-sales"},"Example 1: Water Sales"),Object(r.b)("p",null,"Many mini-grid operators have established water treatment units at their plants. These provide the amenity of clean and chilled water to the local community, while generating economic activity and acting as a dependable electricity consumer for the mini-grid. Depending on the company\u2019s level of involvement, they may wish to keep track of the water treatment unit\u2019s throughput, sales and electricity consumption. Such functionalities are available through MCOMS."),Object(r.b)("h4",{id:"example-2-appliance-promotion"},"Example 2: Appliance Promotion"),Object(r.b)("p",null,"Company-run schemes offering electrical appliances to customers have been successful in the past. Such schemes are intended attract potential customers to avail an electricity connection, and increase the consumption levels of existing customers. Buyers can pay for their appliances as a package bundled with their electricity bill, which is much more attractive than paying the whole lump sum up front."))}u.isMDXComponent=!0},163:function(e,t,i){"use strict";i.d(t,"a",(function(){return p})),i.d(t,"b",(function(){return b}));var n=i(0),a=i.n(n);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(i),d=n,b=p["".concat(s,".").concat(d)]||p[d]||m[d]||r;return i?a.a.createElement(b,o(o({ref:t},l),{},{components:i})):a.a.createElement(b,o({ref:t},l))}));function b(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,s=new Array(r);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var l=2;l<r;l++)s[l]=i[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,i)}d.displayName="MDXCreateElement"},490:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/2.1_PkgIdCrExp-7f5adfe934043b11fe29746529518a15.png"},491:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/2.2_AddCustDetWorkFlw-214e296d60aec316d82cad21c78a9c17.png"},492:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/2.3_CusCrEx-a9a50aa9bfe683051559811e47ef4785.png"},493:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/2.4_MetBilColWorkflow-2882607c0e720825e26c3b057081e0d3.png"},494:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/2.5_ServiceReqWorkFlw-1bb767d5d069099b97e631e56b6dd2fc.png"}}]);