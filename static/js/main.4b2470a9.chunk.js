(this["webpackJsonpnpm-install--save-gh-pages"]=this["webpackJsonpnpm-install--save-gh-pages"]||[]).push([[0],{11:function(t,e,n){t.exports={label:"Filter_label__2XDR-",input:"Filter_input__172q1"}},13:function(t,e,n){t.exports={container:"Container_container__1_KY6"}},2:function(t,e,n){t.exports={form:"ContactForm_form__2NbsD",label:"ContactForm_label__2ekxI",input:"ContactForm_input__-yxks",btn:"ContactForm_btn__3KTOy"}},22:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),s=n(12),o=n.n(s),i=(n(21),n(22),n(15)),l=n(6),u=n(7),b=n(9),m=n(8),h=n(3),d=n.n(h),j=(n(31),n(13)),f=n.n(j);var p=function(t){var e=t.children;return Object(a.jsx)("div",{className:f.a.container,children:e})},x=n(14),C=n(2),v=n.n(C),_=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(x.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsxs)("form",{className:v.a.form,onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{className:v.a.label,children:["Name",Object(a.jsx)("input",{className:v.a.input,type:"text",name:"name",value:e,onChange:this.handleChange,placeholder:"Name Sername"})]}),Object(a.jsxs)("label",{className:v.a.label,children:["Number",Object(a.jsx)("input",{className:v.a.input,type:"text",name:"number",value:n,onChange:this.handleChange,placeholder:"xxx-xx-xx"})]}),Object(a.jsx)("button",{className:v.a.btn,type:"submit",children:"Add contact"})]})}}]),n}(c.Component),O=n(4),g=n.n(O);var y=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsx)("ul",{className:g.a.list,children:e.map((function(t){var e=t.id,c=t.name,r=t.number;return Object(a.jsxs)("li",{className:g.a.item,children:[Object(a.jsxs)("p",{className:g.a.info,children:[c,": ",r]}),Object(a.jsx)("button",{className:g.a.btn,type:"button",onClick:function(){return n(e)}})]},e)}))})},N=n(11),S=n.n(N);var k=function(t){var e=t.value,n=t.onChange;return Object(a.jsxs)("label",{className:S.a.label,children:["Find contacts by name",Object(a.jsx)("input",{className:S.a.input,type:"text",value:e,onChange:n})]})},L=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:d.a.generate(),name:"Rosie Simpson",number:"459-12-56"},{id:d.a.generate(),name:"Hermione Kline",number:"443-89-12"},{id:d.a.generate(),name:"Eden Clements",number:"645-17-79"},{id:d.a.generate(),name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=e.name,a=e.number,c={id:d.a.generate(),name:n,number:a},r=t.state.contacts;r.find((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," is already in contacts.")):r.find((function(t){return t.number===a}))?alert("".concat(a," is already in contacts.")):""===n.trim()||""===a.trim()?alert("Enter the contact's name and number phone!"):/\d{3}[-]\d{2}[-]\d{2}/g.test(a)?t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(i.a)(e))}})):alert("Enter the correct number phone!")},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handleChange=function(e){t.setState({filter:e.currentTarget.value})},t.filterContacts=function(t,e){var n=t.toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,c=this.filterContacts(n,e);return Object(a.jsxs)(p,{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(_,{onSubmit:this.addContact}),Object(a.jsx)("h2",{children:"Contacts"}),e.length>1&&Object(a.jsx)(k,{value:n,onChange:this.handleChange}),e.length>0?Object(a.jsx)(y,{contacts:c,onDeleteContact:this.deleteContact}):Object(a.jsx)("p",{children:"Your phonebook is empty. Please add contact."})]})}}]),n}(c.Component);o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(L,{})}),document.getElementById("root"))},4:function(t,e,n){t.exports={list:"ContactsList_list__M3Rgr",item:"ContactsList_item__1Enxb",info:"ContactsList_info__vL4-3",btn:"ContactsList_btn__2TD4W"}}},[[32,1,2]]]);
//# sourceMappingURL=main.4b2470a9.chunk.js.map