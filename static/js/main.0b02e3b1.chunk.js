(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(4),i=n.n(o),r=(n(14),n(1)),u=n(2),l=(n(16),function(){var e=c.a.useState([]),t=Object(u.a)(e,2),n=t[0],a=t[1],o=c.a.useState(""),i=Object(u.a)(o,2),l=i[0],d=i[1],m=c.a.useState(null),f=Object(u.a)(m,2),s=f[0],p=f[1],E=c.a.useState(""),b=Object(u.a)(E,2),v=b[0],g=b[1];return c.a.useEffect(function(){var e=localStorage.getItem("todos"),t=JSON.parse(e);t&&a(t)},[]),c.a.useEffect(function(){var e=JSON.stringify(n);localStorage.setItem("todos",e)},[n]),c.a.createElement("div",{id:"todo-list"},c.a.createElement("h1",null,"Todo List"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={id:(new Date).getTime(),text:l.trim(),completed:!1};t.text.length>0?(a(Object(r.a)(n).concat(t)),d("")):(alert("Enter Valid Task"),d(""))}},c.a.createElement("input",{type:"text",onChange:function(e){return d(e.target.value)},value:l}),c.a.createElement("button",{type:"submit"},"Add Todo")),n.map(function(e){return c.a.createElement("div",{key:e.id,className:"todo"},c.a.createElement("div",{className:"todo-text"},c.a.createElement("input",{type:"checkbox",id:"completed",checked:e.completed,onChange:function(){return function(e){var t=Object(r.a)(n).map(function(t){return t.id===e&&(t.completed=!t.completed),t});a(t)}(e.id)}}),e.id===s?c.a.createElement("input",{type:"text",onChange:function(e){return g(e.target.value)}}):c.a.createElement("div",null,e.text)),c.a.createElement("div",{className:"todo-actions"},e.id===s?c.a.createElement("button",{onClick:function(){return function(e){var t=Object(r.a)(n).map(function(t){return t.id===e&&(t.text=v),t});a(t),p(null)}(e.id)}},"Submit Edits"):c.a.createElement("button",{onClick:function(){return p(e.id)}},"Edit"),c.a.createElement("button",{onClick:function(){return function(e){var t=Object(r.a)(n).filter(function(t){return t.id!==e});a(t)}(e.id)}},"Delete")))}))}),d=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,19)).then(function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),o(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(l,null))),d()},5:function(e,t,n){e.exports=n(18)}},[[5,3,2]]]);
//# sourceMappingURL=main.0b02e3b1.chunk.js.map