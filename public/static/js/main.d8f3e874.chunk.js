(this["webpackJsonpnext-chapter"]=this["webpackJsonpnext-chapter"]||[]).push([[0],{40:function(e,c,t){"use strict";t.r(c);var n=t(4),r=t.n(n),a=t(16),s=t.n(a),i=t(2),l=t(5),o=t.n(l),j=t(0);function d(e){var c=e.links;return Object(j.jsx)("nav",{id:"nav",children:Object(j.jsx)("ul",{className:"container",children:c.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#".concat(e.id),children:e.title})},e.id)}))})})}var u=t(1);function b(e){var c=e.href,t=e.className,n=e.children;return Object(j.jsx)("a",{href:c,className:"button ".concat(t),children:n})}function h(e){var c=e.id,t=e.content,n=Object(i.a)(t,4),r=n[0],a=n[1],s=n[2],l=n[3];return Object(j.jsxs)("article",{id:"top",className:"wrapper style1",children:[Object(j.jsx)("div",{id:c,className:"anchor"}),Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-4 col-5-large col-12-medium",children:Object(j.jsx)("div",{className:"image fit",children:Object(j.jsx)("img",Object(u.a)(Object(u.a)({},r.props.reduce((function(e,c){return e[c.name]=c.value,e}),{})),{},{className:"rounded"}))})}),Object(j.jsxs)("div",{className:"col-8 col-7-large col-12-medium",children:[Object(j.jsx)("h1",{children:a.children||"Welcome"}),Object(j.jsxs)("p",{children:[s.children||"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, consectetur."," "]}),Object(j.jsx)(b,{href:"#".concat(l.props.find((function(e){return"href"===e.name})).value),className:"large",children:l.children})]})]})})]})}function O(e){var c=e.iconClass,t=e.title,n=e.text;return Object(j.jsx)("div",{className:"col-4 col-6-medium col-12-small",children:Object(j.jsxs)("section",{className:"box style1",children:[Object(j.jsx)("span",{className:"icon featured ".concat(c)}),Object(j.jsx)("h3",{children:t}),Object(j.jsx)("p",{children:n})]})})}function m(e){var c=e.id,t=e.content,n=Object(i.a)(t,5),r=n[0],a=n[1],s=n[2],l=n[3],o=n[4];return Object(j.jsxs)("article",{className:"wrapper style2",children:[Object(j.jsx)("div",{id:c,className:"anchor"}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h2",{children:r.children}),Object(j.jsx)("p",{className:"fs-big",children:a.children}),s&&Object(j.jsx)("div",{className:"row aln-center",children:s.children.map((function(e){var c=Object(i.a)(e,3),t=c[0],n=c[1],r=c[2];return Object(j.jsx)(O,{iconClass:t.value,title:n.value,text:r.value},n.value)}))}),Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:"fs-big m-2",children:l.children}),o&&Object(j.jsx)(b,{href:"#".concat(o.props.find((function(e){return"href"===e.name})).value),className:"large",children:o.children})]})]})]})}var v=t(6),f="CHANGE",p="RESET";function x(e,c){var t=c.type,n=c.payload;switch(t){case f:return function(e,c){var t=c.id,n=c.value;return Object(u.a)(Object(u.a)({},e),{},{values:Object(u.a)(Object(u.a)({},e.values),{},Object(v.a)({},t,n)),mode:"Changed"})}(e,n);case"SET_FIELDS":return function(e,c){return{values:Object(u.a)({},c.values),init:e.init,mode:c.mode,errors:{}}}(e,n);case"SET_MODE":return Object(u.a)(Object(u.a)({},e),{},{mode:n});case"SET_ERRORS":return Object(u.a)(Object(u.a)({},e),{},{errors:n});case p:return console.log("reset"),Object(u.a)(Object(u.a)({},e),{},{values:Object(u.a)({},e.init)});default:return e}}var N=function(e,c,t,n){var r,a;e.preventDefault(),c.values.email&&n&&(r=n,a=c.values,o.a.post(r,a)).then((function(){window.alert("Thank you for the message, we will come back to you on email: ".concat(c.values.email)),t({type:p})})).catch((function(e){console.error("Something went wrong."),console.error(e)}))};function g(e){var c=e.id,t=e.content,r=Object(i.a)(t,6),a=r[0],s=r[1],l=r[2],o=r[3],d=r[4],b=r[5],h=function(e){var c=Object(n.useReducer)(x,{values:Object(u.a)({},e),init:Object(u.a)({},e),mode:"Create",errors:{}}),t=Object(i.a)(c,2);return[t[0],t[1]]}(l.children.reduce((function(e,c){var t=Object(i.a)(c,3)[2];return t&&(e[t.value]=""),e}),{})),O=Object(i.a)(h,2),m=O[0],v=O[1];return console.log(m),Object(j.jsxs)("article",{className:"wrapper style4",children:[Object(j.jsx)("div",{id:c,className:"anchor"}),Object(j.jsxs)("div",{className:"container medium",children:[Object(j.jsx)("h2",{children:a.children}),Object(j.jsx)("p",{children:s.children}),Object(j.jsxs)("form",{onSubmit:function(e){return N(e,m,v,b.children)},children:[l.children.map((function(e){var c=Object(i.a)(e,4),t=c[0],r=c[1],a=c[2],s=c[3];return Object(n.createElement)(t.value,{type:r.value,name:a.value,placeholder:s.value,value:m.values[a.value],onChange:function(e){return function(e,c){var t=e.target,n=t.name,r=t.value;c({type:f,payload:{id:n,value:r}})}(e,v)},className:"my-1",key:a.value},null)})),Object(j.jsxs)("ul",{className:"actions",children:[Object(j.jsx)("li",{children:Object(j.jsx)("input",{type:"submit",value:o.children||"Submit"})}),Object(j.jsx)("li",{children:Object(j.jsx)("input",{type:"reset",value:d.children||"Clear",className:"alt",onClick:function(){!function(e){e({type:p})}(v)}})})]})]})]})]})}function y(){return Object(j.jsx)("footer",{className:"wrapper style4",children:Object(j.jsx)("ul",{id:"copyright",children:Object(j.jsx)("li",{children:"\xa9 Untitled. All rights reserved."})})})}function w(e){var c=e.id,t=e.content;return Object(j.jsxs)("article",{className:"wrapper style1",children:[Object(j.jsx)("div",{id:c,className:"anchor"}),t.map((function(e,c){var t=e.selector,r=e.props,a=e.children,s=r.reduce((function(e,c){return c.name&&(e[c.name]=c.value),e}),{key:c});return Object(n.createElement)(t,s,a||null)}))]})}function E(e){var c=e.message;return Object(j.jsxs)("div",{className:"spinner",children:[Object(j.jsx)("div",{className:"spinner__icon"}),c&&Object(j.jsx)("p",{className:"spinner__message",children:c})]})}function S(e){e.message;return Object(j.jsx)("div",{className:"loading-screen",children:Object(j.jsx)(E,{message:"application loading..."})})}function k(e){var c=e.errors||"Sorry something went wrong, plese reload";return Object(j.jsx)("div",{className:"error-screen",children:Object(j.jsx)("p",{children:c})})}var C=function(){var e=Object(n.useState)([]),c=Object(i.a)(e,2),t=c[0],r=c[1];Object(n.useEffect)((function(){!function(e){o.a.get("https://next-chapter.herokuapp.com/api/pages").then((function(c){var t=[];c.data&&(t=c.data.sort((function(e,c){return e.index-c.index}))),e(t)})).catch((function(c){console.error(c),e({errors:"Failed to load content."})}))}(r)}),[r]);var a=t.map((function(e){return{id:e.id,title:e.title}}));return 0===a.length?Object(j.jsx)(S,{}):t.errors?Object(j.jsx)(k,{errors:t.errors}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d,{links:a}),t.map((function(e){var c=e.id,t=e._id,n=e.content;return"60a1f639a4e7a65f7227f54d"===e.templateId?Object(j.jsx)(h,{id:c,content:n},t):"60a1f77fa4e7a65f7227f555"===e.templateId?Object(j.jsx)(m,{id:c,content:n},t):"60a1f93fa4e7a65f7227f55f"===e.templateId?Object(j.jsx)(g,{id:c,content:n},t):Object(j.jsx)(w,{id:c,content:n},t)})),Object(j.jsx)(y,{})]})};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.d8f3e874.chunk.js.map