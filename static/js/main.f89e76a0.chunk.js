(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{14:function(e,t,n){},2:function(e,t,n){e.exports={name:"Statistics_name__39lHy"}},24:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(6),r=n.n(c),s=(n(14),n(4)),o=n(2),i=n.n(o),u=n(0),b=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,r=e.positivePercentage;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("p",{className:i.a.name,children:["Good: ",t]}),Object(u.jsxs)("p",{className:i.a.name,children:[" Neutral: ",n]}),Object(u.jsxs)("p",{className:i.a.name,children:["Bad: ",a]}),Object(u.jsxs)("p",{className:i.a.name,children:["Total: ",c]}),Object(u.jsxs)("p",{className:i.a.name,children:["Positive %: ",r]})]})},j=n(7),l=n.n(j),d=n(8),O=n.n(d),h=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(u.jsx)(u.Fragment,{children:t.map((function(e){return Object(u.jsx)("button",{type:"button",className:O.a.btn,name:e,onClick:n,children:e},l.a.generate())}))})},m=function(e){var t=e.title,n=e.children;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:t}),n]})},x=n(9),f=n.n(x),p=function(e){var t=e.message;return Object(u.jsx)("p",{className:f.a.text,children:t})},g=function(){var e=Object(a.useState)(0),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(0),o=Object(s.a)(r,2),i=o[0],j=o[1],l=Object(a.useState)(0),d=Object(s.a)(l,2),O=d[0],x=d[1],f={good:n,neutral:i,bad:O},g=Object.keys(f),k=function(){return n+i+O};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(m,{title:"Please leave your feedback",children:Object(u.jsx)(h,{options:g,onLeaveFeedback:function(e){switch(e.target.name){case"good":return c((function(e){return e+1}));case"neutral":return j((function(e){return e+1}));case"bad":return x((function(e){return e+1}))}}})}),Object(u.jsx)(m,{title:"Statistics",children:k()<1?Object(u.jsx)(p,{message:"No feedback given"}):Object(u.jsx)(b,{good:n,neutral:i,bad:O,total:k(),positivePercentage:function(){var e=n/k()*100;return Math.floor(e)}()})})]})};r.a.render(Object(u.jsx)(g,{}),document.getElementById("root"))},8:function(e,t,n){e.exports={btn:"FeedbackOptions_btn__kuECA"}},9:function(e,t,n){e.exports={text:"Notification_text__qN6ku"}}},[[24,1,2]]]);
//# sourceMappingURL=main.f89e76a0.chunk.js.map