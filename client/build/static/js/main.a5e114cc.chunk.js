(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{35:function(e){e.exports=JSON.parse('{"AL":"Alabama","AK":"Alaska","AZ":"Arizona","AR":"Arkansas","CA":"California","CO":"Colorado","CT":"Connecticut","DE":"Delaware","FL":"Florida","GA":"Georgia","HI":"Hawaii","ID":"Idaho","IL":"Illinois","IN":"Indiana","IA":"Iowa","KS":"Kansas","KY":"Kentucky","LA":"Louisiana","ME":"Maine","MD":"Maryland","MA":"Massachusetts","MI":"Michigan","MN":"Minnesota","MS":"Mississippi","MO":"Missouri","MT":"Montana","NE":"Nebraska","NV":"Nevada","NH":"New Hampshire","NJ":"New Jersey","NM":"New Mexico","NY":"New York","NC":"North Carolina","ND":"North Dakota","OH":"Ohio","OK":"Oklahoma","OR":"Oregon","PA":"Pennsylvania","RI":"Rhode Island","SC":"South Carolina","SD":"South Dakota","TN":"Tennessee","TX":"Texas","UT":"Utah","VT":"Vermont","VA":"Virginia","WA":"Washington","WV":"West Virginia","WI":"Wisconsin","WY":"Wyoming"}')},36:function(e,t,a){e.exports=a(65)},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(29),o=a.n(l),i=a(10),c=a(9),s=function(){return r.a.createElement("nav",{className:"navbar bg-light"},r.a.createElement("h1",null,r.a.createElement(i.b,{to:"/"},r.a.createElement("i",{className:"nav-text fas fa-rocket"})," ",r.a.createElement("span",{className:"nav-text"},"Rocket Insurance"))),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.b,{to:"/"},r.a.createElement("span",{className:"nav-text"},"Registration"))),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/quote-overview"},r.a.createElement("span",{className:"nav-text"},"Quote Overview")))))},u=a(11),m=a(15),p=a(67),d=a(68),f=a(69);function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var v=function(){var e=JSON.parse(localStorage.getItem("userData")),t=JSON.parse(localStorage.getItem("collisionPlan")),a=JSON.parse(localStorage.getItem("deductiblePlan")),l=localStorage.getItem("setupTime"),o=(new Date).getTime(),i=Object(n.useState)({collision:"",deductible:""}),s=Object(m.a)(i,2),v=s[0],b=s[1],E=v.collision,y=v.deductible,O=function(e){b(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(a,!0).forEach(function(t){Object(u.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},v,Object(u.a)({},e.target.name,e.target.value)))};if(o-l>36e5)return localStorage.clear(),r.a.createElement(c.a,{to:"/"});if(null===e||!0===e.error)return localStorage.clear(),r.a.createElement(c.a,{to:"/"});var h=e.quote,N=h.rating_address,w=N.line_1,S=N.line_2,P=N.city,_=N.region,j=N.postal,x=h.policy_holder,I=x.first_name,k=x.last_name,C=h.variable_options,D=C.deductible.values.map(function(e,t){return r.a.createElement("option",{value:e,key:e}," Option ",t+1,": $",e)}),A=C.asteroid_collision.values.map(function(e,t){return r.a.createElement("option",{value:e}," Option ",t+1,": $",e)});return r.a.createElement("div",{className:"quoteBackground"},r.a.createElement(p.a,null,r.a.createElement(d.a,{md:{span:12}},r.a.createElement("div",{className:"userGreeting"},"Hi ",I,", we're excited you've chosen us for rocket owner's insurance! Please see the available plans listed below.*")),r.a.createElement(d.a,{md:{span:12}},r.a.createElement(f.a,{className:"insuranceCard",bg:"info",text:"white",style:{width:"30rem",height:"42rem"}},r.a.createElement(f.a.Header,{className:"cardOverview"},"Profile"),r.a.createElement(f.a.Body,{style:{height:"3rem"}},r.a.createElement("div",null,r.a.createElement(f.a.Subtitle,null,"Policy Holder: ",I," ",k),r.a.createElement("br",null),r.a.createElement(f.a.Subtitle,null,"Address: ",w," ",S," ",P,", ",_," ",j)),r.a.createElement("div",{className:"selected-plans"},a>0&&r.a.createElement(f.a.Subtitle,{className:"deductible"},"Deductible Plan: $",a),t>0&&r.a.createElement(f.a.Subtitle,null,"Collision Plan: $",t))),r.a.createElement(f.a.Body,null,r.a.createElement("form",{className:"insurance-registration",onSubmit:function(e){return function(e){e.preventDefault(),localStorage.setItem("setupTime",o),E&&localStorage.setItem("collisionPlan",E),y&&localStorage.setItem("deductiblePlan",y),b({collisionPlan:E,deductiblePlan:y})}(e)},name:"deductible"},r.a.createElement("div",{className:"insurance-section"},r.a.createElement(f.a.Subtitle,{className:"cardOverview"},C.deductible.title,"*"),r.a.createElement(f.a.Text,null,C.deductible.description),r.a.createElement("div",null,r.a.createElement("select",{name:"deductible",className:"insurance-selection",value:y,onChange:function(e){return O(e)}},r.a.createElement("option",{disabled:!0,selected:!0,value:!0}," -- select an option -- "),D))),r.a.createElement("div",null,r.a.createElement(f.a.Subtitle,{className:"cardOverview"},C.asteroid_collision.title,"*"),r.a.createElement(f.a.Text,null,C.asteroid_collision.description),r.a.createElement("div",null,r.a.createElement("select",{name:"collision",className:"insurance-selection",value:E,onChange:function(e){return O(e)}},r.a.createElement("option",{disabled:!0,selected:!0,value:!0}," -- select an option -- "),A))),r.a.createElement("input",{className:"submitButton",type:"submit"})))))))},b=a(12),E=a.n(b),y=a(14),O=a(34),h=a.n(O),N=function(e){var t=e.first_name,a=e.last_name,n=e.line_1,r=e.line_2,l=e.city,o=e.region,i=e.postal,c={};t||(c.first_name="First name is required"),a||(c.last_name="Last name is required"),n||(c.line_1="Address required"),l||(c.city="City required"),o||(c.region="State/Region required"),i||(c.postal="Postal/Zip code required");var s={first_name:t,last_name:a,address:{line_1:n,line_2:r,city:l,region:o,postal:i}};if(0===Object.keys(c).length){var u=w(s);return void 0!==u&&null!==u?u:"Post unsuccessful"}return console.log("errors",c),c.error=!0,c},w=function(){var e=Object(y.a)(E.a.mark(function e(t){var a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("/posts/v1/quotes",t);case 3:if(void 0===(a=e.sent)||null===a){e.next=6;break}return e.abrupt("return",a.data);case 6:e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t){return e.apply(this,arguments)}}(),S=a(35);function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var _=function(){var e=Object(n.useState)({first_name:"",last_name:"",line_1:"",line_2:"",city:"",region:"",postal:"",page_reload:""}),t=Object(m.a)(e,2),a=t[0],l=t[1],o=a.first_name,i=a.last_name,c=a.line_1,s=a.line_2,p=a.city,d=a.region,f=a.postal,g=function(e){l(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(a,!0).forEach(function(t){Object(u.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},a,Object(u.a)({},e.target.name,e.target.value)))},v=function(){var e=Object(y.a)(E.a.mark(function e(t){var n,r;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,N(a);case 3:n=e.sent,null===(r=(new Date).getTime())||n.error||(localStorage.clear(),localStorage.setItem("setupTime",r),localStorage.setItem("userData",JSON.stringify(n)),window.location.href="/quote-overview");case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),b=Object.values(S).map(function(e){return r.a.createElement("option",{value:e,key:e},e)});return r.a.createElement("div",{className:"ratingInfoBackground"},r.a.createElement("form",{className:"registration",onSubmit:function(e){return v(e)}},r.a.createElement("div",{className:"form-group websiteGreeting"}," Welcome to Rocket-Insurance! Please enter your information below."),r.a.createElement("div",{className:"form-group"},r.a.createElement("small",null,"First Name*"),r.a.createElement("input",{type:"text",placeholder:"What is your first name?",name:"first_name",value:o,onChange:function(e){return g(e)},required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("small",null,"Last Name*"),r.a.createElement("input",{type:"text",placeholder:"What is your last name?",name:"last_name",value:i,onChange:function(e){return g(e)},required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("small",null,"Address*"),r.a.createElement("input",{type:"text",placeholder:"Street Address, P.O. box, company name, c/o ",name:"line_1",value:c,onChange:function(e){return g(e)},required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"apartment, suite, unit, building, floor, etc. ",name:"line_2",value:s,onChange:function(e){return g(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("small",null,"City*"),r.a.createElement("input",{type:"text",placeholder:"e.g. Los Angeles",name:"city",value:p,onChange:function(e){return g(e)},required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("small",null,"State* ",r.a.createElement("br",null)),r.a.createElement("select",{className:"state-dropdown",name:"region",value:d,onChange:function(e){return g(e)},required:!0},b)),r.a.createElement("div",{className:"form-group"},r.a.createElement("small",null,"Postal Code*"),r.a.createElement("input",{type:"number",placeholder:"e.g. 90017",name:"postal",value:f,onChange:function(e){return g(e)},required:!0})),r.a.createElement("input",{className:"submitButton",type:"submit"})))},j=(a(64),function(){return r.a.createElement(i.a,{className:"container"},r.a.createElement(s,null),r.a.createElement(c.d,null,r.a.createElement(c.b,{exact:!0,path:"/quote-overview",component:v}),r.a.createElement(c.b,{exact:!0,path:"/",component:_})))});o.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.a5e114cc.chunk.js.map