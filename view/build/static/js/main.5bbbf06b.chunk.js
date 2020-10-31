(this["webpackJsonpchi-lunch-frontend"]=this["webpackJsonpchi-lunch-frontend"]||[]).push([[0],{124:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),s=a.n(c),r=a(14),i=a.n(r),l=a(15),o=a(16),u=a(18),d=a(17),j=a(19),m=a(6),p=a(56),h=a(20),b=a.n(h),f=a(48),O=a(26),v=a(21),x=a(49),y=a(50),N=a(32),g=a(27),S=a(51),B=a.n(S).a.create({baseURL:"/api"}),k=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).getUsers=Object(O.a)(b.a.mark((function e(){var t,a,c,s,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.get("user");case 2:if(200===(t=e.sent).status){a=Object(f.a)(t.data.data);try{for(a.s();!(c=a.n()).done;)(s=c.value).fullName=s.firstName+" "+s.lastName}catch(i){a.e(i)}finally{a.f()}r=t.data.data.filter((function(e){return"Regular"===e.type})),n.setState({userList:t.data.data,selectedUsers:r})}case 4:case"end":return e.stop()}}),e)}))),n.addPayment=function(){var e={amount:0,paidBy:null};n.setState((function(t){return{payments:[].concat(Object(p.a)(t.payments),[e])}}))},n.changeAmount=function(e,t){var a=n.state.payments;a[t].amount=e.target.value,n.setState((function(e){return{payments:a}}))},n.payerUpdate=function(e,t){var a=n.state.payments;a[t].paidBy=e.target.value,n.setState((function(e){return{payments:a}}))},n.onSave=function(){var e=n.state.selectedUsers.map((function(e){return e._id})),t=n.state.cost,a=n.state.payments.filter((function(e){return null!=e.paidBy})).map((function(e){return{amount:e.amount,paidBy:e.paidBy._id}}));B.post("meal",{members:e,cost:t,payments:a}).then((function(e){n.toast.show({severity:"success",summary:"Success",detail:"Record Added"})})).catch((function(e){n.toast.show({severity:"error",summary:"Error",detail:"Request Failed"})}))},n.state={selectedUsers:null,userList:[],cost:0,payments:[{amount:0,paidBy:null}]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getUsers()}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"p-grid",children:[Object(n.jsxs)("div",{className:"p-col-12 p-md-4",children:[Object(n.jsx)("h4",{children:"Select Participants"}),Object(n.jsx)(y.ListBox,{value:this.state.selectedUsers,options:this.state.userList,onChange:function(t){return e.setState({selectedUsers:t.value})},multiple:!0,filter:!0,optionLabel:"fullName",listStyle:{maxHeight:"40vh"}})]}),Object(n.jsxs)("div",{className:"p-col-12 p-md-8",children:[Object(n.jsx)("h4",{children:"Payment Details"}),Object(n.jsxs)("div",{className:"p-field",children:[Object(n.jsx)("label",{htmlFor:"cost",children:"Cost:\xa0"}),Object(n.jsx)(N.InputNumber,{id:"cost",value:this.state.cost,onValueChange:function(t){return e.setState({cost:t.value})}})]}),Object(n.jsxs)("div",{className:"p-grid",children:[Object(n.jsx)("div",{className:"p-col-5",children:"Participant"}),Object(n.jsx)("div",{className:"p-col-5",children:"Paid"})]}),this.state.payments.map((function(t,a){return Object(n.jsxs)("div",{className:"p-grid",children:[Object(n.jsxs)("div",{className:"p-col-5",children:[" ",Object(n.jsx)(x.Dropdown,{value:t.paidBy,options:e.state.userList,onChange:function(t){return e.payerUpdate(t,a)},optionLabel:"fullName",placeholder:"Select Participant"})]}),Object(n.jsxs)("div",{className:"p-col-5",children:[" ",Object(n.jsx)("div",{className:"p-field",children:Object(n.jsx)(N.InputNumber,{id:"paid",value:t.amount,onValueChange:function(t){return e.changeAmount(t,a)}})})]}),Object(n.jsx)("div",{className:"p-col-2",children:Object(n.jsx)(v.Button,{onClick:e.addPayment,icon:"pi pi-plus"})})]},"payment-".concat(a))})),Object(n.jsx)("div",{className:"p-d-flex p-jc-end",children:Object(n.jsx)(v.Button,{className:"",onClick:this.onSave,icon:"pi pi-check",label:"Save"})}),Object(n.jsx)(g.Toast,{ref:function(t){return e.toast=t}})]})]})}}]),a}(c.Component),C=a(52),w=a(53),D=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).getMealSummary=Object(O.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:B.get("meal/summary").then((function(e){console.log(e.data.data),n.setState({mealData:e.data.data})})).catch((function(e){n.toast.show({severity:"error",summary:"Error",detail:"Request Failed"})}));case 1:case"end":return e.stop()}}),e)}))),n.state={mealData:[]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getMealSummary()}},{key:"render",value:function(){var e=this,t=[{field:"fullName",header:"Name"},{field:"pending",header:"Total Bill"},{field:"paid",header:"Total Paid"},{field:"net",header:"Net Amount"}].map((function(e,t){return Object(n.jsx)(w.Column,{field:e.field,header:e.header},e.field)}));return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"card",children:Object(n.jsx)(C.DataTable,{value:this.state.mealData,children:t})}),Object(n.jsx)(g.Toast,{ref:function(t){return e.toast=t}})]})}}]),a}(c.Component),U=a(54),L=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){var e=Object(n.jsx)(s.a.Fragment,{children:Object(n.jsx)(j.b,{style:{textDecoration:"none"},to:"",children:Object(n.jsx)(v.Button,{label:"Home",icon:"pi pi-home",className:"p-mr-2"})})}),t=Object(n.jsx)(s.a.Fragment,{children:Object(n.jsx)(j.b,{style:{textDecoration:"none"},to:"summary",children:Object(n.jsx)(v.Button,{label:"Summary",icon:"pi pi-pencil",className:"p-mr-2"})})});return Object(n.jsx)("div",{children:Object(n.jsx)(U.Toolbar,{left:e,right:t})})}}]),a}(c.Component),P=Object(m.e)(L),T=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(j.a,{children:[Object(n.jsx)(P,{}),Object(n.jsx)(m.a,{exact:!0,path:"/",component:k}),Object(n.jsx)(m.a,{exact:!0,path:"/summary",component:D})]})}}]),a}(c.Component);a(120),a(121),a(122),a(123);i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(T,{})}),document.getElementById("root"))}},[[124,1,2]]]);
//# sourceMappingURL=main.5bbbf06b.chunk.js.map