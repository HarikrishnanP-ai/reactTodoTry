(this.webpackJsonpharrytut=this.webpackJsonpharrytut||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(17),r=n.n(s),o=(n(25),n(11)),l=n(20),i=(n(26),n(8)),b=n(0);function d(e){return Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)(i.b,{className:"navbar-brand",to:"#",children:e.title}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(b.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.b,{className:"nav-link",to:"/about",children:"About"})})]}),e.searchBar?Object(b.jsxs)("form",{className:"d-flex",children:[Object(b.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(b.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]}):"Blanc"]})]})})}d.defaultProps={title:"Your title Here",searchBar:!0};var j=function(e){var t=e.addTodo,n=Object(a.useState)(""),c=Object(o.a)(n,2),s=c[0],r=c[1],l=Object(a.useState)(""),i=Object(o.a)(l,2),d=i[0],j=i[1];return Object(b.jsxs)("div",{className:"container my-3",children:[Object(b.jsx)("h3",{children:"Add todo"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s&&d?(t(s,d),r(""),j("")):alert("Title or desc blanc")},children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"title",className:"Form-label",children:"Todo Input"}),Object(b.jsx)("input",{type:"text",value:s,onChange:function(e){return r(e.target.value)},className:"Form-control",id:"title"})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"desc",className:"Form-label",children:"Todo Description"}),Object(b.jsx)("input",{type:"text",value:d,onChange:function(e){j(e.target.value)},className:"Form-control",id:"desc"})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})]})},u=function(){return Object(b.jsx)("footer",{className:"bg-dark text-light py-3",children:Object(b.jsx)("p",{className:"text-center",children:"Copyright \xa9 My Todoslist"})})},m=function(e){var t=e.todo,n=e.onDelete;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:t.title}),Object(b.jsx)("p",{children:t.desc}),Object(b.jsx)("button",{className:"btn btn-sm btn-danger",onClick:function(){n(t)},children:"Delete"})]})},h=function(e){return Object(b.jsxs)("div",{className:"container my-5",style:{minHeight:"100vh",margin:"40px auto"},children:[Object(b.jsx)("h3",{className:"text-center my-3",children:"Todos list"}),0===e.todos.length?"No todos to display":e.todos.map((function(t){return Object(b.jsxs)(b.Fragment,{children:[" ",Object(b.jsx)("h4",{children:"This"}),Object(b.jsx)(m,{todo:t,onDelete:e.onDelete},t.sno)]})}))]})};var x=function(){return Object(b.jsxs)("div",{children:["about comp",Object(b.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, expedita sequi. Fuga voluptate necessitatibus veniam aliquid neque incidunt exercitationem? Quod nemo cumque architecto ipsum consequatur distinctio fuga aut eligendi voluptates."})]})},O=n(2);var g=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=function(e){m(r.filter((function(t){return t!==e}))),localStorage.getItem("todos")},n=function(e,t){console.log("i am addin g title and desc",e,t);var n={sno:0==r.length?0:r[r.length-1].sno+1,title:e,desc:t};m([].concat(Object(l.a)(r),[n])),console.log(n)},c=Object(a.useState)(e),s=Object(o.a)(c,2),r=s[0],m=s[1];return Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(r))}),[r]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(i.a,{children:[Object(b.jsx)(d,{title:"MyTodos List",searchBar:!0}),Object(b.jsxs)(O.c,{children:[Object(b.jsx)(O.a,{exact:!0,path:"/",render:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j,{addTodo:n}),Object(b.jsx)(h,{todos:r,onDelete:t})]})}}),Object(b.jsx)(O.a,{path:"/about",children:Object(b.jsx)(x,{})})]}),Object(b.jsx)(u,{})]})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),p()}},[[33,1,2]]]);
//# sourceMappingURL=main.4ba9cdcf.chunk.js.map