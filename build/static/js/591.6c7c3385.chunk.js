"use strict";(self.webpackChunkgymove=self.webpackChunkgymove||[]).push([[591],{3591:function(e,s,a){a.r(s);var t=a(4165),r=a(5861),n=a(9439),l=a(2791),c=a(7689),i=a(1087),o=a(5294),d=a(289),m=a(184);s.default=function(e){var s=(0,l.useState)(""),a=(0,n.Z)(s,2),u=a[0],h=a[1],x=(0,l.useState)({email:"",password:""}),p=(0,n.Z)(x,2),g=p[0],v=p[1],j=(0,l.useState)(""),N=(0,n.Z)(j,2),f=N[0],b=N[1],w=(0,l.useState)(""),y=(0,n.Z)(w,2),k=y[0],Z=y[1],S=(0,c.s0)(),C=function(){var e=(0,r.Z)((0,t.Z)().mark((function e(s){var a,r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s.preventDefault(),k&&u&&f){e.next=4;break}return v({email:"Please fill all the fields",password:""}),e.abrupt("return");case 4:return e.prev=4,a={username:k,email:u,password:f},e.next=8,o.Z.post("".concat("http://localhost:5000","/register"),a);case 8:r=e.sent,console.log(r.data),S("/login",{replace:!0}),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(4),console.error("Registration failed:",e.t0.response.data),v({email:"",password:e.t0.response.data.error});case 17:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(s){return e.apply(this,arguments)}}();return(0,m.jsx)("div",{style:{marginTop:"300px"},className:"authincation h-100 p-meddle",children:(0,m.jsx)("div",{className:"container h-100",children:(0,m.jsx)("div",{className:"row justify-content-center h-100 align-items-center",children:(0,m.jsx)("div",{className:"col-md-6",children:(0,m.jsx)("div",{className:"authincation-content",children:(0,m.jsx)("div",{className:"row no-gutters",children:(0,m.jsx)("div",{className:"col-xl-12",children:(0,m.jsxs)("div",{className:"auth-form",children:[(0,m.jsx)("div",{className:"text-center mb-3",children:(0,m.jsx)("img",{src:d,alt:""})}),(0,m.jsx)("h4",{className:"text-center mb-4 text-white",children:"Sign up your account"}),e.errorMessage&&(0,m.jsx)("div",{className:"bg-red-300 text-danger border border-red-900 p-1 my-2",children:e.errorMessage}),e.successMessage&&(0,m.jsx)("div",{className:"bg-green-300 text-danger text-green-900  p-1 my-2",children:e.successMessage}),(0,m.jsxs)("div",{className:"form-group",children:[(0,m.jsx)("label",{className:"mb-1 text-white",children:(0,m.jsx)("strong",{children:"Name"})}),(0,m.jsx)("input",{type:"text",className:"form-control",value:k,placeholder:"Name",onChange:function(e){return Z(e.target.value)}})]}),(0,m.jsxs)("div",{className:"form-group",children:[(0,m.jsx)("label",{className:"mb-1 text-white",children:(0,m.jsx)("strong",{children:"Email"})}),(0,m.jsx)("input",{type:"email",className:"form-control",value:u,placeholder:"email",onChange:function(e){return h(e.target.value)}}),g.email&&(0,m.jsx)("div",{className:"text-danger fs-12",children:g.email})]}),(0,m.jsxs)("div",{className:"form-group",children:[(0,m.jsx)("label",{className:"mb-1 text-white",children:(0,m.jsx)("strong",{children:"Password"})}),(0,m.jsx)("input",{type:"password",className:"form-control",value:f,onChange:function(e){return b(e.target.value)},placeholder:"password"})]}),g.password&&(0,m.jsx)("div",{className:"text-danger fs-12",children:g.password}),(0,m.jsx)("div",{className:"text-center mt-4",children:(0,m.jsx)("button",{onClick:C,type:"submit",className:"btn bg-white text-primary btn-block",children:"Sign up"})}),(0,m.jsx)("div",{className:"new-account mt-3 text-white",children:(0,m.jsxs)("p",{children:["Already have an account?"," ",(0,m.jsx)(i.rU,{className:"text-white",to:"/login",children:"Sign in"})]})})]})})})})})})})})}}}]);
//# sourceMappingURL=591.6c7c3385.chunk.js.map