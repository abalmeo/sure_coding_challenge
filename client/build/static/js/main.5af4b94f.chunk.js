(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{49:function(e){e.exports=JSON.parse('{"AL":"Alabama","AK":"Alaska","AZ":"Arizona","AR":"Arkansas","CA":"California","CO":"Colorado","CT":"Connecticut","DE":"Delaware","FL":"Florida","GA":"Georgia","HI":"Hawaii","ID":"Idaho","IL":"Illinois","IN":"Indiana","IA":"Iowa","KS":"Kansas","KY":"Kentucky","LA":"Louisiana","ME":"Maine","MD":"Maryland","MA":"Massachusetts","MI":"Michigan","MN":"Minnesota","MS":"Mississippi","MO":"Missouri","MT":"Montana","NE":"Nebraska","NV":"Nevada","NH":"New Hampshire","NJ":"New Jersey","NM":"New Mexico","NY":"New York","NC":"North Carolina","ND":"North Dakota","OH":"Ohio","OK":"Oklahoma","OR":"Oregon","PA":"Pennsylvania","RI":"Rhode Island","SC":"South Carolina","SD":"South Dakota","TN":"Tennessee","TX":"Texas","UT":"Utah","VT":"Vermont","VA":"Virginia","WA":"Washington","WV":"West Virginia","WI":"Wisconsin","WY":"Wyoming"}')},51:function(e,t,a){e.exports=a(88)},87:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),i=a.n(l),o=a(28),c=a(12),s=a(92),u=a(93),m=function(){return r.a.createElement(s.a,{sticky:"top",bg:"light",variant:"light"},r.a.createElement(s.a.Brand,{href:"/"},r.a.createElement("i",{className:"fas fa-rocket"})," ",r.a.createElement("span",null,"Rocket Insurance")),r.a.createElement(u.a,{className:"ml-auto"},r.a.createElement(u.a.Link,{href:"/"},"Registration"),r.a.createElement(u.a.Link,{href:"/quote-overview"},"Quote Overview")))},p=a(16),d=a(22),f=a(90),g=a(91),v=a(94);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var E=function(){var e=JSON.parse(localStorage.getItem("userData")),t=JSON.parse(localStorage.getItem("collisionPlan")),a=JSON.parse(localStorage.getItem("deductiblePlan")),l=localStorage.getItem("setupTime"),i=(new Date).getTime(),o=Object(n.useState)({collision:"",deductible:""}),s=Object(d.a)(o,2),u=s[0],m=s[1],E=u.collision,y=u.deductible,h=function(e){m(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(a,!0).forEach(function(t){Object(p.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},u,Object(p.a)({},e.target.name,e.target.value)))};if(i-l>36e5)return localStorage.clear(),r.a.createElement(c.a,{to:"/"});if(null===e||!0===e.error)return localStorage.clear(),r.a.createElement(c.a,{to:"/"});var O=e.quote,N=O.rating_address,w=N.line_1,S=N.line_2,P=N.city,_=N.region,j=N.postal,k=O.policy_holder,I=k.first_name,C=k.last_name,D=O.variable_options,x=D.deductible.values.map(function(e,t){return r.a.createElement("option",{value:e,key:e}," Option ",t+1,": $",e)}),A=D.asteroid_collision.values.map(function(e,t){return r.a.createElement("option",{value:e}," Option ",t+1,": $",e)});return r.a.createElement("div",{className:"quoteBackground"},r.a.createElement(f.a,null,r.a.createElement(g.a,{md:{span:12}},r.a.createElement("div",{className:"userGreeting"},"Hi ",I,", we're excited you've chosen us for rocket owner's insurance! Please see the available plans listed below.*")),r.a.createElement(g.a,{md:{span:12}},r.a.createElement(v.a,{className:"insuranceCard",bg:"info",text:"white",style:{width:"30rem",height:"42rem"}},r.a.createElement(v.a.Header,{className:"cardOverview"},"Profile"),r.a.createElement(v.a.Body,{style:{height:"3rem"}},r.a.createElement("div",null,r.a.createElement(v.a.Subtitle,null,"Policy Holder: ",I," ",C),r.a.createElement("br",null),r.a.createElement(v.a.Subtitle,null,"Address: ",w," ",S," ",P,", ",_," ",j)),r.a.createElement("div",{className:"selected-plans"},a>0&&r.a.createElement(v.a.Subtitle,{className:"deductible"},"Deductible Plan: $",a),t>0&&r.a.createElement(v.a.Subtitle,null,"Collision Plan: $",t))),r.a.createElement(v.a.Body,null,r.a.createElement("form",{className:"insurance-registration",onSubmit:function(e){return function(e){e.preventDefault(),localStorage.setItem("setupTime",i),E&&localStorage.setItem("collisionPlan",E),y&&localStorage.setItem("deductiblePlan",y),m({collisionPlan:E,deductiblePlan:y})}(e)},name:"deductible"},r.a.createElement("div",{className:"insurance-section"},r.a.createElement(v.a.Subtitle,{className:"cardOverview"},D.deductible.title,"*"),r.a.createElement(v.a.Text,null,D.deductible.description),r.a.createElement("div",null,r.a.createElement("select",{name:"deductible",className:"insurance-selection",value:y,onChange:function(e){return h(e)}},r.a.createElement("option",{disabled:!0,selected:!0,value:!0}," -- select an option -- "),x))),r.a.createElement("div",null,r.a.createElement(v.a.Subtitle,{className:"cardOverview"},D.asteroid_collision.title,"*"),r.a.createElement(v.a.Text,null,D.asteroid_collision.description),r.a.createElement("div",null,r.a.createElement("select",{name:"collision",className:"insurance-selection",value:E,onChange:function(e){return h(e)}},r.a.createElement("option",{disabled:!0,selected:!0,value:!0}," -- select an option -- "),A))),r.a.createElement("input",{className:"submitButton",type:"submit"})))))))},y=a(17),h=a.n(y),O=a(21),N=a(48),w=a.n(N),S=function(e){var t=e.first_name,a=e.last_name,n=e.line_1,r=e.line_2,l=e.city,i=e.region,o=e.postal,c={};t||(c.first_name="First name is required"),a||(c.last_name="Last name is required"),n||(c.line_1="Address required"),l||(c.city="City required"),i||(c.region="State/Region required"),o||(c.postal="Postal/Zip code required");var s={first_name:t,last_name:a,address:{line_1:n,line_2:r,city:l,region:i,postal:o}};if(0===Object.keys(c).length){var u=P(s);return void 0!==u&&null!==u?u:"Post unsuccessful"}return console.log("errors",c),c.error=!0,c},P=function(){var e=Object(O.a)(h.a.mark(function e(t){var a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.post("/posts/v1/quotes",t);case 3:if(void 0===(a=e.sent)||null===a){e.next=6;break}return e.abrupt("return",a.data);case 6:e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t){return e.apply(this,arguments)}}(),_=a(49);function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var k=function(){var e=Object(n.useState)({first_name:"",last_name:"",line_1:"",line_2:"",city:"",region:"",postal:"",page_reload:""}),t=Object(d.a)(e,2),a=t[0],l=t[1],i=a.first_name,o=a.last_name,c=a.line_1,s=a.line_2,u=a.city,m=a.region,f=a.postal,g=function(e){l(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(a,!0).forEach(function(t){Object(p.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},a,Object(p.a)({},e.target.name,e.target.value)))},v=function(){var e=Object(O.a)(h.a.mark(function e(t){var n,r;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,S(a);case 3:n=e.sent,null===(r=(new Date).getTime())||n.error||(localStorage.clear(),localStorage.setItem("setupTime",r),localStorage.setItem("userData",JSON.stringify(n)),window.location.href="/quote-overview");case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),b=Object.values(_).map(function(e){return r.a.createElement("option",{value:e,key:e},e)});return r.a.createElement("div",{className:"ratingInfoBackground"},r.a.createElement("form",{className:"registration",onSubmit:function(e){return v(e)}},r.a.createElement("div",{className:"form-group websiteGreeting"}," Welcome to Rocket-Insurance! Please enter your information below."),r.a.createElement("div",{className:"form-group"},r.a.createElement("small",null,"First Name*"),r.a.createElement("input",{type:"text",placeholder:"What is your first name?",name:"first_name",value:i,onChange:function(e){return g(e)},required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("small",null,"Last Name*"),r.a.createElement("input",{type:"text",placeholder:"What is your last name?",name:"last_name",value:o,onChange:function(e){return g(e)},required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("small",null,"Address*"),r.a.createElement("input",{type:"text",placeholder:"Street Address, P.O. box, company name, c/o ",name:"line_1",value:c,onChange:function(e){return g(e)},required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"apartment, suite, unit, building, floor, etc. ",name:"line_2",value:s,onChange:function(e){return g(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("small",null,"City*"),r.a.createElement("input",{type:"text",placeholder:"e.g. Los Angeles",name:"city",value:u,onChange:function(e){return g(e)},required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("small",null,"State* ",r.a.createElement("br",null)),r.a.createElement("select",{className:"state-dropdown",name:"region",value:m,onChange:function(e){return g(e)},required:!0},b)),r.a.createElement("div",{className:"form-group"},r.a.createElement("small",null,"Postal Code*"),r.a.createElement("input",{type:"number",placeholder:"e.g. 90017",name:"postal",value:f,onChange:function(e){return g(e)},required:!0})),r.a.createElement("input",{className:"submitButton",type:"submit"})))},I=(a(87),function(){return r.a.createElement(o.a,{className:"container"},r.a.createElement(m,null),r.a.createElement(c.d,null,r.a.createElement(c.b,{exact:!0,path:"/quote-overview",component:E}),r.a.createElement(c.b,{exact:!0,path:"/",component:k})))});i.a.render(r.a.createElement(I,null),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.5af4b94f.chunk.js.map