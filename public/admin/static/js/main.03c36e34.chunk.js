(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{44:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),i=n(19),s=n.n(i),r=n(5),l=n(0);function o(){return Object(l.jsx)("header",{className:"header",children:"Next Chapter"})}var d=n(4);function u(e){var t=e.pages,n=e.setPages,a=e.activePage,c=e.setActivePage,i=t.length;return Object(l.jsxs)("div",{className:"sidebar",children:[Object(l.jsxs)("div",{className:"sidebar__header",children:[Object(l.jsx)("h3",{children:"Pages"}),Object(l.jsx)("img",{width:"20",height:"20",src:"images/icons/plus-circle.svg",alt:"add",className:"sidebar__header__add",onClick:function(){var e={id:"new".concat(i),title:"New Page",index:i,content:[{selector:"",props:[{name:"",value:""}],children:""}]};n([].concat(Object(d.a)(t),[e])),c(e)}})]}),Object(l.jsx)(p,{}),t.map((function(e){var t="sidebar__item";return a&&a.id===e.id&&(t="sidebar__item sidebar__item--active"),Object(l.jsx)("div",{className:t,onClick:function(){c(e)},children:e.title},e.id)}))]})}function p(){return Object(l.jsx)("div",{className:"divider"})}var j=n(9),v=n(3),O="CHANGE",b="SET_FIELDS",f="SET_MODE",h="RESET";function m(e,t){var n=t.type,a=t.payload;switch(n){case O:return function(e,t){var n=t.id,a=t.value;return Object(v.a)(Object(v.a)({},e),{},{values:Object(v.a)(Object(v.a)({},JSON.parse(JSON.stringify(e.values))),{},Object(j.a)({},n,a)),mode:"Changed"})}(e,a);case b:return function(e,t){return{values:JSON.parse(JSON.stringify(t.values)),init:t.init?JSON.parse(JSON.stringify(t.init)):JSON.parse(JSON.stringify(e.init)),mode:t.mode,errors:{}}}(e,a);case f:return Object(v.a)(Object(v.a)({},JSON.parse(JSON.stringify(e))),{},{mode:a});case"SET_ERRORS":return Object(v.a)(Object(v.a)({},JSON.parse(JSON.stringify(e))),{},{errors:a});case h:return Object(v.a)(Object(v.a)({},JSON.parse(JSON.stringify(e))),{},{values:JSON.parse(JSON.stringify(e.init)),mode:"Create"});default:return e}}var g=n(20),x=n(6),N=n.n(x),y=function(e,t){var n=e.target,a=n.name,c=n.value;t({type:O,payload:{id:a,value:c}})},S=function(e,t,n,a){var c=function(){return a({type:f,payload:"Create"})};e._id?function(e,t,n){var a=e._id,c=Object(g.a)(e,["_id"]);N.a.patch("https://next-chapter.herokuapp.com/api/pages/".concat(a),c).then((function(e){t(e.data.sort((function(e,t){return e.index-t.index}))),n()})).catch((function(e){console.error(e)}))}(e,t,c):function(e,t,n,a){N.a.post("https://next-chapter.herokuapp.com/api/pages",e).then((function(e){var c=e.data,i=c.pages,s=c.id;t(i.sort((function(e,t){return e.index-t.index}))),n(i.find((function(e){return e._id===s}))),a(s)})).catch((function(e){console.error(e)}))}(e,t,n,c)};function J(e){var t=e.activePage,n=e.setActivePage,c=e.templates,i=e.setPages,s=function(e){var t=Object(a.useReducer)(m,{values:JSON.parse(JSON.stringify(e)),init:JSON.parse(JSON.stringify(e)),mode:"Create",errors:{}}),n=Object(r.a)(t,2);return[n[0],n[1]]}({id:"",title:"",index:"",templateId:"",content:[]}),o=Object(r.a)(s,2),u=o[0],p=o[1];Object(a.useEffect)((function(){p({type:b,payload:{values:t,init:t,mode:"Create"}})}),[t,p]);var j=t._id,v=j&&"Changed"!==u.mode?"button mr-1 button--disabled":"button mr-1";return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsxs)("div",{className:"page__header",children:[Object(l.jsx)("h3",{className:"mr-a",children:"Page Details"}),Object(l.jsx)("button",{onClick:function(){return S(u.values,i,n,p)},className:v,children:"Save"}),Object(l.jsx)("button",{onClick:function(){return p({type:h})},className:"button mr-1 ".concat("Create"===u.mode?"button--disabled":"button--reset"),children:"Reset"}),Object(l.jsx)("button",{onClick:function(){return function(e,t,n){N.a.delete("https://next-chapter.herokuapp.com/api/pages/".concat(e)).then((function(e){t(e.data.sort((function(e,t){return e.index-t.index}))),n()})).catch((function(e){console.error(e)}))}(j,i,(function(){return n("")}))},className:"button ".concat(j?"button--delete":"button--disabled"),children:"Delete"})]}),Object(l.jsxs)("div",{className:"page__details",children:[Object(l.jsx)(_,{label:"id",field:Object(l.jsx)("input",{name:"id",value:u.values.id,onChange:function(e){return y(e,p)}})}),Object(l.jsx)(_,{label:"Title",field:Object(l.jsx)("input",{name:"title",value:u.values.title,onChange:function(e){return y(e,p)}})}),Object(l.jsx)(_,{label:"Index",field:Object(l.jsx)("input",{name:"index",value:u.values.index,onChange:function(e){return y(e,p)}})}),Object(l.jsx)(_,{label:"Template",field:Object(l.jsxs)("select",{name:"templateId",value:u.values.templateId||"",onChange:function(e){return function(e,t,n){var a=e.target,c=a.name,i=a.value,s=n.find((function(e){return e._id===i})),r=[];s&&(r=s.content.map((function(e){var t={};return t.selector=e.selector,e.props&&(t.props=e.props.map((function(e){return{name:e.name,value:""}}))),"string"===e.children?t.children="":"list"===e.children&&(t.children=[Object(d.a)(t.props)]),t}))),t({type:O,payload:{id:"content",value:r}}),t({type:O,payload:{id:c,value:i}})}(e,p,c)},children:[Object(l.jsx)("option",{value:"",children:"Custom Page"}),c.map((function(e){return Object(l.jsx)("option",{value:e._id,children:e.name},e._id)}))]})})]}),Object(l.jsxs)("div",{className:"page__content",children:[Object(l.jsx)("h3",{children:"Content"}),Object(l.jsx)(C,{template:c.find((function(e){return e._id===u.values.templateId})),state:u,dispatch:p})]})]})}function _(e){var t=e.label,n=e.field;return Object(l.jsxs)("div",{className:"form-field",children:[t&&Object(l.jsx)("label",{className:"form-field__label",children:t}),n]})}function C(e){var t,n=e.template,a=e.state,c=e.dispatch;return t=n?n.content.map((function(e,t){return"list"===e.children?Object(l.jsx)(P,{state:a,dispatch:c,fieldIndex:t},e.selector):Object(l.jsxs)("div",{className:"content__field",children:[Object(l.jsx)(_,{label:"Selector",field:Object(l.jsx)("input",{disabled:!0,type:"text",name:"selector",value:a.values.content[t].selector})}),e.props.length>0&&Object(l.jsx)("div",{children:e.props.map((function(e,n){return Object(l.jsx)(_,{label:0===n&&"Props",field:Object(l.jsx)("input",{type:"text",name:e.name,placeholder:e.name,value:a.values.content[t].props[n].value,onChange:function(e){var i=e.target.value,s=JSON.parse(JSON.stringify(a.values.content));s[t].props[n].value=i,c({type:O,payload:{id:"content",value:s}})}})},e.name)}))}),"string"===e.children&&Object(l.jsx)(_,{label:"Value",field:Object(l.jsx)("textarea",{type:"text",name:"selector",value:a.values.content[t].children,onChange:function(e){var n=e.target.value,i=JSON.parse(JSON.stringify(a.values.content));i[t].children=n,c({type:O,payload:{id:"content",value:i}})}})})]},e.selector)})):Object(l.jsxs)(l.Fragment,{children:[" ",a.values.content.map((function(e,t){var n=e.selector,i=e.props,s=e.children;return Object(l.jsxs)("div",{className:"content__field",children:[Object(l.jsx)("img",{src:"images/icons/trash-red.svg",width:"20",height:"20",className:"icon--trash",onClick:function(){var e=JSON.parse(JSON.stringify(a.values.content));e.splice(t,1),c({type:O,payload:{id:"content",value:e}})}}),Object(l.jsx)(_,{label:"Selector",field:Object(l.jsx)("input",{type:"text",name:"selector",value:n,onChange:function(e){var n=JSON.parse(JSON.stringify(a.values.content));n[t].selector=e.target.value,c({type:O,payload:{id:"content",value:n}})}})}),Object(l.jsxs)("div",{className:"ta-c",children:[Object(l.jsx)("label",{className:"form-field__label",children:"Props"}),i.map((function(e,n){var i=e.name,s=e.value;return Object(l.jsxs)("div",{className:"form-field__props",children:[Object(l.jsx)(_,{field:Object(l.jsx)("input",{type:"text",name:"name",value:i,placeholder:"Key",onChange:function(e){var i=JSON.parse(JSON.stringify(a.values.content));i[t].props[n].name=e.target.value,c({type:O,payload:{id:"content",value:i}})}})}),Object(l.jsx)(_,{field:Object(l.jsx)("input",{type:"text",name:"value",value:s,placeholder:"Value",onChange:function(e){var i=JSON.parse(JSON.stringify(a.values.content));i[t].props[n].value=e.target.value,c({type:O,payload:{id:"content",value:i}})}})}),Object(l.jsx)("img",{src:"images/icons/trash-red.svg",width:"20",height:"20",className:"cur-p",onClick:function(){var e=JSON.parse(JSON.stringify(a.values.content));e[t].props.splice(n,1),c({type:O,payload:{id:"content",value:e}})}})]},n)})),Object(l.jsx)("img",{width:"30",height:"30",src:"images/icons/plus-circle.svg",alt:"add",onClick:function(){var e=JSON.parse(JSON.stringify(a.values.content));e[t].props=[].concat(Object(d.a)(e[t].props),[{name:"",value:""}]),c({type:O,payload:{id:"content",value:e}})}})]}),Object(l.jsx)(_,{label:"Value",field:Object(l.jsx)("input",{type:"text",name:"children",value:s,onChange:function(e){var n=JSON.parse(JSON.stringify(a.values.content));n[t].children=e.target.value,c({type:O,payload:{id:"content",value:n}})}})})]},t)})),Object(l.jsx)("img",{width:"30",height:"30",src:"images/icons/plus-circle.svg",alt:"add",onClick:function(){var e=[].concat(Object(d.a)(JSON.parse(JSON.stringify(a.values.content))),[{selector:"",props:[{name:"",value:""}],children:""}]);c({type:O,payload:{id:"content",value:e}})}})]}),Object(l.jsx)("div",{className:"content",children:t})}function P(e){var t=e.state,n=e.dispatch,a=e.fieldIndex;return Object(l.jsxs)("div",{className:"content__field",children:[Object(l.jsx)(_,{label:"Selector",field:Object(l.jsx)("input",{disabled:!0,type:"text",name:"selector",value:t.values.content[a].selector})}),t.values.content[a].children.map((function(e,c){return Object(l.jsxs)("div",{className:"content__field",children:[Object(l.jsx)("img",{src:"images/icons/trash-red.svg",width:"20",height:"20",className:"icon--trash",onClick:function(){var e=JSON.parse(JSON.stringify(t.values.content));e[a].children.splice(c,1),n({type:O,payload:{id:"content",value:e}})}}),e.map((function(e,i){return Object(l.jsx)(_,{field:Object(l.jsx)("input",{type:"text",name:e.name,placeholder:e.name,value:e.value,onChange:function(e){var s=e.target.value,r=JSON.parse(JSON.stringify(t.values.content));r[a].children[c][i].value=s,n({type:O,payload:{id:"content",value:r}})}})},e.name)}))]},c)})),Object(l.jsx)("img",{width:"30",height:"30",src:"images/icons/plus-circle.svg",alt:"add",className:"m-a",onClick:function(){var e=JSON.parse(JSON.stringify(t.values.content));e[a].children=[].concat(Object(d.a)(e[a].children),[Object(d.a)(e[a].props)]),n({type:O,payload:{id:"content",value:e}})}})]})}var k=function(){var e=Object(a.useState)(),t=Object(r.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)([]),s=Object(r.a)(i,2),d=s[0],p=s[1],j=Object(a.useState)([]),v=Object(r.a)(j,2),O=v[0],b=v[1];return Object(a.useEffect)((function(){!function(e){N.a.get("https://next-chapter.herokuapp.com/api/pages/").then((function(t){e(t.data.sort((function(e,t){return e.index-t.index})))})).catch((function(t){console.error(t),e({errors:"Failed to load content."})}))}(p),function(e){N.a.get("https://next-chapter.herokuapp.com/api/templates").then((function(t){e(t.data)})).catch((function(t){console.error(t),e({errors:"Failed to load templates."})}))}(b)}),[p,b]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o,{}),Object(l.jsx)(u,{pages:d,setPages:p,activePage:n,setActivePage:c}),n&&Object(l.jsx)(J,{activePage:n,setActivePage:c,templates:O,setPages:p})]})};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.03c36e34.chunk.js.map