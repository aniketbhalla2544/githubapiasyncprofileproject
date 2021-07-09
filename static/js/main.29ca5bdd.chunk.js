(this.webpackJsonpgithubapiasyncprofileproj=this.webpackJsonpgithubapiasyncprofileproj||[]).push([[0],{34:function(e,t,s){},35:function(e,t,s){},64:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),r=s(27),i=s.n(r),l=s(9),n=(s(34),s(2)),o=(s(35),s(11)),b=s(0),d={fontFamily:"'Work Sans', sans-serif",color:"white"},x=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),s=t[0],c=t[1],r=Object(a.useState)(!1),i=Object(o.a)(r,2),n=i[0],x=i[1];return Object(b.jsxs)("div",{className:"relative z-10 shadow-xl px-7 bg-gray-800 rounded-xl mx-auto pb-12 md:pb-24 pt-8 md:pt-14 w-4/5 md:w-auto md:px-28",children:[Object(b.jsxs)("div",{className:"grid place-items-center mb-3 md:hidden",children:[" ",Object(b.jsx)("i",{className:"text-white text-6xl bi bi-github"})]}),Object(b.jsxs)("h1",{className:"whitespace-nowrap text-3xl text-center font-bold tracking-widest capitalize mb-16 md:mb-24 md:lowercase md:text-4xl",style:d,children:["github ",Object(b.jsx)("i",{className:"bi bi-github text-6xl hidden md:inline"})," profile"]}),Object(b.jsxs)("div",{className:"flex flex-col",children:[Object(b.jsx)("input",{type:"text",name:"",value:s,onChange:function(e){var t=e.target.value;c(t),x(""!==t)},className:"focus:outline-none focus:ring-4 focus:ring-opacity-50 focus:ring-blue-200 shadow mb-10 py-2 px-3 text-center rounded",placeholder:"Enter name here"}),Object(b.jsx)(l.b,{to:n?"/users/".concat(s):"/",className:"".concat(n?"":"cursor-not-allowed"," self-center text-sm max-w-xl overflow-hidden whitespace-nowrap text-center md:text-base uppercase focus:outline-none focus:ring-2 focus:ring-white tracking-wider bg-blue-300 hover:bg-blue-400 px-5 py-3 font-bold rounded-md"),children:"show profile"})]})]})},j=s(16),m=s.n(j),u=s(18),p=s(29),h=s(17),g=s.n(h),f=s(67),O=function(){var e=Object(n.g)().paramsUsername,t=Object(n.f)(),s=Object(a.useState)({userName:e,avatarUrl:"",userLocation:"",userBio:"",userTotalRepos:0,userIsHireable:"yes",userReposUrl:"",userRepos:[]}),c=Object(o.a)(s,2),r=c[0],i=c[1];return Object(a.useEffect)((function(){Object(p.a)(m.a.mark((function e(){var t,s,a,c,l,n,o,b,d,x;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("https://api.github.com/users/".concat(r.userName));case 3:return t=e.sent,s=t.data,a=s.avatar_url,c=s.location,l=s.bio,n=s.public_repos,o=s.hireable,b=s.repos_url,null===o&&(o="No"),e.next=8,g.a.get("".concat(b));case 8:d=e.sent,x=d.data,i(Object(u.a)(Object(u.a)({},r),{},{avatarUrl:a,userLocation:c,userBio:l,userTotalRepos:n,userIsHireable:o,userReposUrl:b,userRepos:x})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()}),[]),Object(b.jsxs)("div",{className:"relative z-10 shadow-xl px-4  pt-8 pb-8 bg-gray-600 border-gray-400 border-opacity-5 border-t-4 border-l-4  h-1/4 overflow-hidden bg-opacity-40 backdrop-filter backdrop-blur-sm w-11/12 mx-auto rounded-3xl md:px-10 max-w-xl",children:[Object(b.jsx)("div",{className:"grid place-items-center mb-6",children:Object(b.jsx)("img",{rel:"noreferrer",className:"rounded-md ring-4 ring-gray-400 w-36 aspect-w-1 aspec-h-1",src:r.avatarUrl,alt:"user profile"})}),Object(b.jsxs)("h1",{className:"mb-14 tracking-widest font-semibold text-gray-300 text-2xl text-center overflow-hidden whitespace-nowrap",children:["Hello ",Object(b.jsx)("span",{children:r.userName})]}),Object(b.jsxs)("div",{className:"max-h-56 mb-14 overflow-y-scroll pr-6",children:[Object(b.jsx)("h3",{className:"text-gray-300 capitalize tracking-widest text-base mb-3",children:"more information"}),Object(b.jsxs)("div",{className:"p-4 mb-10  grid grid-cols-2 gap-x-6 gap-y-8 grid-rows-2",children:[Object(b.jsxs)("div",{className:" bg-gray-400 p-4 rounded-lg shadow-xl",children:[Object(b.jsx)("div",{className:"mb-4 grid place-items-center",children:Object(b.jsx)("i",{className:" text-2xl font-extrabold bi bi-briefcase"})}),Object(b.jsxs)("p",{className:"text-base flex flex-col justify-center items-center",children:[Object(b.jsx)("span",{className:"font-semibold text-center",children:"Hireable:"})," ",r.userIsHireable]})]}),Object(b.jsxs)("div",{className:"bg-gray-400 p-4 rounded-lg shadow-xl",children:[Object(b.jsx)("div",{className:"mb-4 grid place-items-center",children:Object(b.jsx)("i",{className:"text-2xl font-extrabold bi bi-book"})}),Object(b.jsxs)("p",{className:"text-base flex flex-col justify-center items-center",children:[Object(b.jsx)("span",{className:"font-semibold",children:"Repositories:"})," ",Object(b.jsx)("span",{children:r.userTotalRepos})]})]}),Object(b.jsxs)("div",{className:"bg-gray-400 px-4 rounded-lg col-span-2 p-4 shadow-xl",children:[Object(b.jsx)("div",{className:"mb-4 grid place-items-center",children:Object(b.jsx)("i",{className:"text-2xl font-extrabold bi bi-geo-alt"})}),Object(b.jsxs)("p",{className:"text-xs",children:[Object(b.jsx)("span",{className:"font-semibold",children:"Location: "}),Object(b.jsx)("span",{children:r.userLocation})]})]}),Object(b.jsxs)("div",{className:"bg-gray-400 px-4 rounded-lg col-span-2 p-4 shadow-xl",children:[Object(b.jsx)("div",{className:"mb-4 grid place-items-center",children:Object(b.jsx)("i",{className:"text-2xl font-extrabold mr-3 bi bi-info-circle"})}),Object(b.jsxs)("p",{className:"text-xs",children:[Object(b.jsx)("span",{className:"font-semibold ",children:"Bio:"})," ",r.userBio]})]})]}),Object(b.jsx)("h3",{className:"text-gray-300 capitalize tracking-widest text-base mb-3",children:"repositories"}),Object(b.jsx)("ol",{className:"py-6 px-6 w-full",children:r.userRepos.map((function(e){var t=e.name,s=e.html_url;return Object(b.jsx)("li",{className:"flex justify-center items-center bg-gray-100 mb-6 rounded-md py-4 shadow-xs",children:Object(b.jsx)("a",{href:s,target:"_blank",rel:"noopener",className:"capitalize underline overflow-hidden font-semibold text-sm tracking-widest",children:t})},Object(f.a)())}))})]}),Object(b.jsx)("button",{onClick:function(){return t.goBack()},className:"bg-white text-blue-700 hover:bg-blue-300 w-12 h-12 flex justify-center items-center hover:text-black rounded-full",children:Object(b.jsx)("i",{className:"text-xl bi bi-caret-left-fill"})})]})},w=function(){return Object(b.jsxs)("main",{className:"min-h-screen place-items-center bg-gray-900 w-screen flex justify-center items-center relative",children:[Object(b.jsx)("div",{className:"bg-gray-100 bg-gradient-to-br from-gray-100 to-gray-600 w-32 h-32 absolute z-0 inset-7 rounded-full"}),Object(b.jsxs)(n.c,{children:[Object(b.jsx)(n.a,{exact:!0,path:"/",children:Object(b.jsx)(x,{})}),Object(b.jsx)(n.a,{path:"/users/:paramsUsername",children:Object(b.jsx)(O,{})}),Object(b.jsx)(n.a,{component:function(){return Object(b.jsx)("div",{children:"404 Not found "})}})]})]})};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(l.a,{basename:"/githubapiasyncprofileproject",children:Object(b.jsx)(w,{})})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.29ca5bdd.chunk.js.map