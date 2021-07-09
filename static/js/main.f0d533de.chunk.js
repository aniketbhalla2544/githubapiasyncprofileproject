(this.webpackJsonpgithubapiasyncprofileproj=this.webpackJsonpgithubapiasyncprofileproj||[]).push([[0],{35:function(e,t,s){},36:function(e,t,s){},65:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),r=s(27),i=s.n(r),l=s(9),n=(s(35),s(2)),o=(s(36),s(10)),b=s(30),d=s(0),x={fontFamily:"'Work Sans', sans-serif",color:"white"},j=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),s=t[0],c=t[1],r=Object(a.useState)(!1),i=Object(o.a)(r,2),n=i[0],j=i[1],m=Object(a.useState)(""),u=Object(o.a)(m,2),p=u[0],h=u[1];return Object(d.jsxs)("div",{className:"relative z-10 shadow-xl px-7 bg-gray-800 rounded-xl mx-auto pb-12 md:pb-24 pt-8 md:pt-14 w-4/5 md:w-auto md:px-28",children:[Object(d.jsxs)("div",{className:"grid place-items-center mb-3 md:hidden",children:[" ",Object(d.jsx)("i",{className:"text-white text-6xl bi bi-github"})]}),Object(d.jsxs)("h1",{className:"whitespace-nowrap text-3xl text-center font-bold tracking-widest capitalize mb-16 md:mb-24 md:lowercase md:text-4xl",style:x,children:["github ",Object(d.jsx)("i",{className:"bi bi-github text-6xl hidden md:inline"})," profile"]}),Object(d.jsxs)("div",{className:"flex flex-col",children:[Object(d.jsxs)("div",{className:"text-xs text-red-600 mb-2 flex justify-start gap-x-2 items-center flex-nowrap",children:[p?Object(d.jsx)(b.a,{}):null," ",p]}),Object(d.jsx)("input",{type:"text",name:"",value:s,onChange:function(e){var t=e.target.value;c(t),j(""!==t)},className:"focus:outline-none focus:ring-4 focus:ring-opacity-50 focus:ring-blue-200 shadow mb-10 py-2 px-3 text-center rounded",placeholder:"Enter name here"}),Object(d.jsx)(l.b,{onClick:function(e){h(n?"":"Name required"),setTimeout((function(){return h("")}),5e3)},to:n?"/users/".concat(s):"/",className:"".concat(n?"":"cursor-not-allowed"," self-center text-sm max-w-xl overflow-hidden whitespace-nowrap text-center md:text-base uppercase focus:outline-none focus:ring-2 focus:ring-white tracking-wider bg-blue-300 hover:bg-blue-400 px-5 py-3 font-bold rounded-md"),children:"show profile"})]})]})},m=s(16),u=s.n(m),p=s(18),h=s(29),f=s(17),g=s.n(f),O=s(68),N=function(){var e=Object(n.g)().paramsUsername,t=Object(n.f)(),s=Object(a.useState)({userName:e,avatarUrl:"",userLocation:"",userBio:"",userTotalRepos:0,userIsHireable:"yes",userReposUrl:"",userRepos:[]}),c=Object(o.a)(s,2),r=c[0],i=c[1];return Object(a.useEffect)((function(){Object(h.a)(u.a.mark((function e(){var t,s,a,c,l,n,o,b,d,x;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("https://api.github.com/users/".concat(r.userName));case 3:return t=e.sent,s=t.data,a=s.avatar_url,c=s.location,l=s.bio,n=s.public_repos,o=s.hireable,b=s.repos_url,null===o&&(o="No"),e.next=8,g.a.get("".concat(b));case 8:d=e.sent,x=d.data,i(Object(p.a)(Object(p.a)({},r),{},{avatarUrl:a,userLocation:c,userBio:l,userTotalRepos:n,userIsHireable:o,userReposUrl:b,userRepos:x})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()}),[]),Object(d.jsxs)("div",{className:"relative z-10 shadow-xl px-4  pt-8 pb-8 bg-gray-600 border-gray-400 border-opacity-5 border-t-4 border-l-4  h-1/4 overflow-hidden bg-opacity-40 backdrop-filter backdrop-blur-sm w-11/12 mx-auto rounded-3xl md:px-10 max-w-xl",children:[Object(d.jsx)("div",{className:"grid place-items-center mb-6",children:Object(d.jsx)("img",{rel:"noreferrer",className:"rounded-md ring-4 ring-gray-400 w-36 aspect-w-1 aspec-h-1",src:r.avatarUrl,alt:"user profile"})}),Object(d.jsxs)("h1",{className:"mb-14 tracking-widest font-semibold text-gray-300 text-2xl text-center overflow-hidden whitespace-nowrap",children:["Hello ",Object(d.jsx)("span",{children:r.userName})]}),Object(d.jsxs)("div",{className:"max-h-56 mb-14 overflow-y-scroll pr-6",children:[Object(d.jsx)("h3",{className:"text-gray-300 capitalize tracking-widest text-base mb-3",children:"more information"}),Object(d.jsxs)("div",{className:"p-4 mb-10  grid grid-cols-2 gap-x-6 gap-y-8 grid-rows-2",children:[Object(d.jsxs)("div",{className:" bg-gray-400 p-4 rounded-lg shadow-xl",children:[Object(d.jsx)("div",{className:"mb-4 grid place-items-center",children:Object(d.jsx)("i",{className:" text-2xl font-extrabold bi bi-briefcase"})}),Object(d.jsxs)("p",{className:"text-base flex flex-col justify-center items-center",children:[Object(d.jsx)("span",{className:"font-semibold text-center",children:"Hireable:"})," ",r.userIsHireable]})]}),Object(d.jsxs)("div",{className:"bg-gray-400 p-4 rounded-lg shadow-xl",children:[Object(d.jsx)("div",{className:"mb-4 grid place-items-center",children:Object(d.jsx)("i",{className:"text-2xl font-extrabold bi bi-book"})}),Object(d.jsxs)("p",{className:"text-base flex flex-col justify-center items-center",children:[Object(d.jsx)("span",{className:"font-semibold",children:"Repositories:"})," ",Object(d.jsx)("span",{children:r.userTotalRepos})]})]}),Object(d.jsxs)("div",{className:"bg-gray-400 px-4 rounded-lg col-span-2 p-4 shadow-xl",children:[Object(d.jsx)("div",{className:"mb-4 grid place-items-center",children:Object(d.jsx)("i",{className:"text-2xl font-extrabold bi bi-geo-alt"})}),Object(d.jsxs)("p",{className:"text-xs",children:[Object(d.jsx)("span",{className:"font-semibold",children:"Location: "}),Object(d.jsx)("span",{children:r.userLocation})]})]}),Object(d.jsxs)("div",{className:"bg-gray-400 px-4 rounded-lg col-span-2 p-4 shadow-xl",children:[Object(d.jsx)("div",{className:"mb-4 grid place-items-center",children:Object(d.jsx)("i",{className:"text-2xl font-extrabold mr-3 bi bi-info-circle"})}),Object(d.jsxs)("p",{className:"text-xs",children:[Object(d.jsx)("span",{className:"font-semibold ",children:"Bio:"})," ",r.userBio]})]})]}),Object(d.jsx)("h3",{className:"text-gray-300 capitalize tracking-widest text-base mb-3",children:"repositories"}),Object(d.jsx)("ol",{className:"py-6 px-6 w-full",children:r.userRepos.map((function(e){var t=e.name,s=e.html_url;return Object(d.jsx)("li",{className:"flex justify-center items-center bg-gray-100 mb-6 rounded-md py-4 shadow-xs",children:Object(d.jsx)("a",{href:s,target:"_blank",rel:"noopener",className:"capitalize underline overflow-hidden font-semibold text-sm tracking-widest",children:t})},Object(O.a)())}))})]}),Object(d.jsx)("button",{onClick:function(){return t.goBack()},className:"bg-white text-blue-700 hover:bg-blue-300 w-12 h-12 flex justify-center items-center hover:text-black rounded-full",children:Object(d.jsx)("i",{className:"text-xl bi bi-caret-left-fill"})})]})},w=function(){return Object(d.jsxs)("main",{className:"min-h-screen place-items-center bg-gray-900 w-screen flex justify-center items-center relative",children:[Object(d.jsx)("div",{className:"bg-gray-100 bg-gradient-to-br from-gray-100 to-gray-600 w-32 h-32 absolute z-0 inset-7 rounded-full"}),Object(d.jsxs)(n.c,{children:[Object(d.jsx)(n.a,{exact:!0,path:"/",children:Object(d.jsx)(j,{})}),Object(d.jsx)(n.a,{path:"/users/:paramsUsername",children:Object(d.jsx)(N,{})}),Object(d.jsx)(n.a,{component:function(){return Object(d.jsx)("div",{children:"404 Not found "})}})]})]})};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(l.a,{basename:"/githubapiasyncprofileproject",children:Object(d.jsx)(w,{})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.f0d533de.chunk.js.map