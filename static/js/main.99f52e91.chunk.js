(this.webpackJsonplightbox=this.webpackJsonplightbox||[]).push([[0],{23:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(0),s=c.n(n),i=c(15),r=c.n(i),o=c(7),j=(c(23),c(2)),l=c(8),b=c(17),d=(c(32),c(33),function(){var e=Object(j.g)(),t=Object(n.useState)(""),c=Object(l.a)(t,2),s=c[0],i=c[1],r=Object(j.f)();return Object(n.useEffect)((function(){fetch("https://pixabay.com/api/?key=".concat("586737-d5b309239d4fecc85c125335d","&id=").concat(e.id)).then((function(e){return e.json()})).then((function(e){i(e.hits[0].largeImageURL)}))}),[e]),Object(n.useEffect)((function(){var e=function(e){27===e.keyCode&&r.goBack()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[r]),Object(a.jsxs)("button",{className:"image-max-container",onClick:function(){r.goBack()},children:[Object(a.jsx)("img",{src:s,alt:"",className:"image-max"}),Object(a.jsx)("span",{className:"close-button",children:"X"})]})}),u=function(e){var t=e.image,c=t.tags.split(",");return Object(a.jsxs)("div",{className:"card-container",children:[Object(a.jsx)(o.b,{to:"/image/".concat(t.id),children:Object(a.jsx)("img",{src:t.webformatURL,alt:"",className:"image"})}),Object(a.jsxs)("div",{className:"details-container",children:[Object(a.jsxs)("h2",{className:"author",children:["Photo by ",t.user]}),Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{className:"detail",children:[Object(a.jsx)("strong",{children:"Views: "}),t.views]}),Object(a.jsxs)("li",{className:"detail",children:[Object(a.jsx)("strong",{children:"Downloads: "}),t.downloads]}),Object(a.jsxs)("li",{className:"detail",children:[Object(a.jsx)("strong",{children:"Likes: "}),t.likes]})]}),Object(a.jsx)("div",{className:"tag-container",children:c.map((function(e,t){return Object(a.jsxs)("span",{className:"tag",children:["#",e]},t)}))})]}),Object(a.jsx)(j.a,{path:"/image/:id",component:d})]})},h=c.p+"static/media/uparrow.1a7f59ad.svg",m=(c(34),function(e){var t=e.images,c=Object(n.useState)(!1),s=Object(l.a)(c,2),i=s[0],r=s[1];window.addEventListener("scroll",(function(){!i&&window.pageYOffset>400?r(!0):i&&window.pageYOffset<=400&&r(!1)}));return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"imageCard-container",children:t.map((function(e){return Object(a.jsx)(u,{image:e},e.id)}))}),Object(a.jsx)("img",{src:h,alt:"Arrow to top",id:"up-arrow",className:"up-arrow",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}})]})}),x=(c(35),function(e){var t=e.searchText,c=Object(n.useState)(""),s=Object(l.a)(c,2),i=s[0],r=s[1];return Object(a.jsxs)("div",{className:"search-container",children:[Object(a.jsxs)("p",{className:"search-paragraph",children:["Find the perfect photo - Free to download and use in your personal or commercial projects! See more on"," ",Object(a.jsx)("a",{className:"search-pixabay-link",href:"https://pixabay.com/",children:"Pixabay"})]}),Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(i)},className:"search-form",children:Object(a.jsxs)("div",{className:"search-input",children:[Object(a.jsx)("input",{type:"text",className:"search-text",placeholder:"Search Image term...",onChange:function(e){return r(e.target.value)}}),Object(a.jsxs)("button",{className:"button",type:"submit",children:[Object(a.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/5/55/Magnifying_glass_icon.svg",alt:"Magnifying glass",className:"search-icon"})," ","Search"]})]})})]})}),O=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(!0),r=Object(l.a)(i,2),o=r[0],j=r[1],d=Object(b.a)("search",""),u=Object(l.a)(d,2),h=u[0],O=u[1];return Object(n.useEffect)((function(){fetch("https://pixabay.com/api/?key=".concat("586737-d5b309239d4fecc85c125335d","&q=").concat(h,"&safesearch&page=3&per-page=50&image_type=photo")).then((function(e){return e.json()})).then((function(e){s(e.hits),j(!1)})).catch((function(e){return console.log(e)}))}),[h]),Object(a.jsxs)("div",{className:"app-container",children:[Object(a.jsx)(x,{searchText:function(e){return O(e)}}),o?Object(a.jsx)("h1",{className:"loading",children:"Loading"}):Object(a.jsx)(m,{images:c}),!o&&0===c.length&&Object(a.jsx)("h1",{className:"no-image",children:"No image found"})]})},f=(c(36),function(){return Object(a.jsx)("div",{className:"about-container",children:Object(a.jsx)("h1",{className:"about-header",children:"About Page !!!"})})}),g=(c(37),function(){return Object(a.jsx)("div",{className:"contact-container",children:Object(a.jsx)("h1",{className:"contact-header",children:"Contact Page !!!"})})}),p=(c(38),function(){return Object(a.jsx)("header",{className:"navbar",children:Object(a.jsxs)("ul",{className:"navbar-ul",children:[Object(a.jsx)("li",{children:Object(a.jsx)(o.c,{exact:!0,activeClassName:"current",to:"/",className:"navbar-link",children:"Gallery"})}),Object(a.jsx)("li",{children:Object(a.jsx)(o.c,{exact:!0,activeClassName:"current",to:"/about",className:"navbar-link",children:"About"})}),Object(a.jsx)("li",{children:Object(a.jsx)(o.c,{exact:!0,activeClassName:"current",to:"/contact",className:"navbar-link",children:"Contact"})})]})})});c(39);var N=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(p,{}),Object(a.jsxs)(j.c,{children:[Object(a.jsx)(j.a,{exact:!0,path:"/",component:O}),Object(a.jsx)(j.a,{exact:!0,path:"/about",component:f}),Object(a.jsx)(j.a,{exact:!0,path:"/contact",component:g}),Object(a.jsx)(j.a,{exact:!0,path:"/image/:id",component:d})]})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(o.a,{children:Object(a.jsx)(N,{})})}),document.getElementById("root")),v()}},[[40,1,2]]]);
//# sourceMappingURL=main.99f52e91.chunk.js.map