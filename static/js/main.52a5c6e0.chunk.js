(this.webpackJsonplightbox=this.webpackJsonplightbox||[]).push([[0],{23:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(1),n=c.n(s),i=c(15),o=c.n(i),l=c(7),r=(c(23),c(2)),j=c(8),d=c(17),b=(c(32),c(33),function(){var e=Object(r.g)(),t=Object(s.useState)(""),c=Object(j.a)(t,2),n=c[0],i=c[1],o=Object(r.f)();return Object(s.useEffect)((function(){fetch("https://pixabay.com/api/?key=".concat("586737-d5b309239d4fecc85c125335d","&id=").concat(e.id)).then((function(e){return e.json()})).then((function(e){i(e.hits[0].largeImageURL)}))}),[e]),Object(s.useEffect)((function(){var e=function(e){27===e.keyCode&&o.goBack()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[o]),Object(a.jsxs)("button",{className:"image-max-container",onClick:function(){o.goBack()},children:[Object(a.jsx)("img",{src:n,alt:"",className:"image-max"}),Object(a.jsx)("span",{className:"close-button",children:"X"})]})}),h=function(e){var t=e.image,c=t.tags.split(",");return Object(a.jsxs)("div",{className:"card-container",children:[Object(a.jsx)(l.b,{to:"".concat("/lightbox","/image/").concat(t.id),children:Object(a.jsx)("img",{src:t.webformatURL,alt:"",className:"image"})}),Object(a.jsxs)("div",{className:"details-container",children:[Object(a.jsxs)("h2",{className:"author",children:["Photo by ",t.user]}),Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{className:"detail",children:[Object(a.jsx)("strong",{children:"Views: "}),t.views]}),Object(a.jsxs)("li",{className:"detail",children:[Object(a.jsx)("strong",{children:"Downloads: "}),t.downloads]}),Object(a.jsxs)("li",{className:"detail",children:[Object(a.jsx)("strong",{children:"Likes: "}),t.likes]})]}),Object(a.jsx)("div",{className:"tag-container",children:c.map((function(e,t){return Object(a.jsxs)("span",{className:"tag",children:["#",e]},t)}))})]}),Object(a.jsx)(r.a,{path:"/image/:id",component:b})]})},m=c.p+"static/media/uparrow.1a7f59ad.svg",x=(c(34),function(e){var t=e.images,c=Object(s.useState)(!1),n=Object(j.a)(c,2),i=n[0],o=n[1];window.addEventListener("scroll",(function(){!i&&window.pageYOffset>400?o(!0):i&&window.pageYOffset<=400&&o(!1)}));return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"imageCard-container",children:t.map((function(e){return Object(a.jsx)(h,{image:e},e.id)}))}),Object(a.jsx)("img",{src:m,alt:"Arrow to top",id:"up-arrow",className:"up-arrow",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}})]})}),u=(c(35),function(e){var t=e.searchText,c=Object(s.useState)(""),n=Object(j.a)(c,2),i=n[0],o=n[1];return Object(a.jsxs)("div",{className:"search-container",children:[Object(a.jsxs)("p",{className:"search-paragraph",children:["Find the perfect photo - Free to download and use in your personal or commercial projects! See more on"," ",Object(a.jsx)("a",{className:"search-pixabay-link",href:"https://pixabay.com/",children:"Pixabay"})]}),Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(i)},className:"search-form",children:Object(a.jsxs)("div",{className:"search-input",children:[Object(a.jsx)("input",{type:"text",className:"search-text",placeholder:"Search Image term...",onChange:function(e){return o(e.target.value)}}),Object(a.jsxs)("button",{className:"button",type:"submit",children:[Object(a.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/5/55/Magnifying_glass_icon.svg",alt:"Magnifying glass",className:"search-icon"})," ","Search"]})]})})]})}),O=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)(!0),o=Object(j.a)(i,2),l=o[0],r=o[1],b=Object(d.a)("search",""),h=Object(j.a)(b,2),m=h[0],O=h[1];return Object(s.useEffect)((function(){fetch("https://pixabay.com/api/?key=".concat("586737-d5b309239d4fecc85c125335d","&q=").concat(m,"&safesearch&page=3&per-page=50&image_type=photo")).then((function(e){return e.json()})).then((function(e){n(e.hits),r(!1)})).catch((function(e){return console.log(e)}))}),[m]),Object(a.jsxs)("div",{className:"app-container",children:[Object(a.jsx)(u,{searchText:function(e){return O(e)}}),l?Object(a.jsx)("h1",{className:"loading",children:"Loading"}):Object(a.jsx)(x,{images:c}),!l&&0===c.length&&Object(a.jsx)("h1",{className:"no-image",children:"No image found"})]})},g=(c(36),c.p+"static/media/logo.a8726bba.png"),p=function(){return Object(a.jsxs)("div",{className:"about-container",children:[Object(a.jsx)("img",{className:"about-logo",src:g,alt:"logo"}),Object(a.jsxs)("div",{className:"about-card-container",children:[Object(a.jsxs)("div",{className:"about-card",children:[Object(a.jsxs)("p",{className:"about-text",children:["Hello, I am ",Object(a.jsx)("span",{className:"about-text-span",children:"Dominique Bello"})," ","aka"," ",Object(a.jsx)("a",{href:"https://github.com/Catevika",className:"about-text-link",children:"Catevika"}),"!"]}),Object(a.jsxs)("p",{className:"about-text",children:["I am a French"," ",Object(a.jsx)("span",{className:"about-text-span",children:"Front-End Web developer"}),", a coding woman entering the tech world after 20 years in Marketing as a Project Manager. I am living near Paris, France with my Italian husband"]})]}),Object(a.jsxs)("div",{className:"about-card",children:[Object(a.jsx)("p",{className:"about-text",children:"Some of the OS, Languages, Frameworks and Tools I use:"}),Object(a.jsxs)("ul",{className:"about-ul",children:[Object(a.jsx)("li",{className:"about-li",children:"Windows 10"}),Object(a.jsx)("li",{className:"about-li",children:"Visual Studio Code + extensions,"}),Object(a.jsx)("li",{className:"about-li",children:"HTML5, CSS3, Sass"}),Object(a.jsx)("li",{className:"about-li",children:"Javascript, React, Node"}),Object(a.jsx)("li",{className:"about-li",children:"Express, Redux, MongoDB"}),Object(a.jsx)("li",{className:"about-li",children:"Git, Github, NPM..."})]})]}),Object(a.jsxs)("div",{className:"about-card",children:[Object(a.jsx)("p",{className:"about-text",children:"Out of work, I love street art festivals, fantasy and steampunk arts, circus arts, digital photo and retouching"}),Object(a.jsx)("p",{className:"about-text",children:"Italy is my adopted country!"})]})]})]})},f=(c(37),c.p+"static/media/mail.e4228ce3.svg"),N=c.p+"static/media/twitter.16ec4858.svg",v=c.p+"static/media/github.81f9edee.svg",w=c.p+"static/media/france.40c79af5.svg",k=c.p+"static/media/italy.2b31e5a9.svg",y=c.p+"static/media/united-kingdom.2d19fed4.svg",F=function(){return Object(a.jsxs)("div",{className:"contact",children:[Object(a.jsxs)("div",{className:"contact-container",children:[Object(a.jsxs)("div",{className:"contact-main-container",children:[Object(a.jsx)("p",{className:"contact-main-text",children:"Looking for user friendly, functional and scalable apps / sites?"}),Object(a.jsx)("p",{className:"contact-main-text",children:"Let's start collaborating!"})]}),Object(a.jsxs)("div",{className:"contact-main-card",children:[Object(a.jsx)("a",{className:"contact-link",href:"mailto:dominique.bello@outlook.fr",children:Object(a.jsx)("img",{className:"contact-icon",src:f,alt:"Mail icon",height:"72",width:"72"})}),Object(a.jsx)("a",{className:"contact-link",href:"https://twitter.com/dominique_bello",children:Object(a.jsx)("img",{className:"contact-icon",src:N,alt:"Twitter logo",height:"72",width:"72"})}),Object(a.jsx)("a",{className:"contact-link",href:"https://github.com/Catevika",children:Object(a.jsx)("img",{className:"contact-icon",src:v,alt:"Github logo",height:"72",width:"72"})})]}),Object(a.jsxs)("div",{className:"contact-card",children:[Object(a.jsx)("p",{className:"contact-text flags",children:"I speak: "}),Object(a.jsxs)("div",{className:"contact-block",children:[Object(a.jsx)("img",{className:"contact-icon",src:w,alt:"French flag",height:"32",width:"32"}),Object(a.jsx)("p",{className:"contact-text",children:"French"})]}),Object(a.jsxs)("div",{className:"contact-block",children:[Object(a.jsx)("img",{className:"contact-icon",src:y,alt:"French flag",height:"32",width:"32"}),Object(a.jsx)("p",{className:"contact-text",children:"English"})]}),Object(a.jsxs)("div",{className:"contact-block",children:[Object(a.jsx)("img",{className:"contact-icon",src:k,alt:"French flag",height:"32",width:"32"}),Object(a.jsx)("p",{className:"contact-text",children:"Italian"})]})]}),Object(a.jsx)("div",{className:"contact-main-container-footer",children:Object(a.jsx)("p",{className:"contact-main-text",children:"Awaiting to hear from you soon!"})})]}),Object(a.jsx)("footer",{className:"contact-footer",children:Object(a.jsxs)("em",{className:"contact-text",children:["Icons made by",Object(a.jsx)("a",{className:"contact-link",href:"https://www.flaticon.com/authors/freepik",title:"Freepik",children:"Freepik"})," ","from"," ",Object(a.jsx)("a",{className:"contact-link",href:"http://www.onlinewebfonts.com",children:"oNline Web Fonts"}),Object(a.jsx)("a",{className:"contact-link",href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"})]})})]})},C=(c(38),function(){return Object(a.jsx)("header",{className:"navbar",children:Object(a.jsxs)("ul",{className:"navbar-ul",children:[Object(a.jsx)("li",{children:Object(a.jsx)(l.c,{exact:!0,activeClassName:"current",to:"".concat("/lightbox","/"),className:"navbar-link",children:"Gallery"})}),Object(a.jsx)("li",{children:Object(a.jsx)(l.c,{exact:!0,activeClassName:"current",to:"".concat("/lightbox","/about"),className:"navbar-link",children:"About"})}),Object(a.jsx)("li",{children:Object(a.jsx)(l.c,{exact:!0,activeClassName:"current",to:"".concat("/lightbox","/contact"),className:"navbar-link",children:"Contact"})})]})})});c(39);var S=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(C,{}),Object(a.jsxs)(r.c,{children:[Object(a.jsx)(r.a,{exact:!0,path:"".concat("/lightbox","/"),component:O}),Object(a.jsx)(r.a,{exact:!0,path:"".concat("/lightbox","/about"),component:p}),Object(a.jsx)(r.a,{exact:!0,path:"".concat("/lightbox","/contact"),component:F}),Object(a.jsx)(r.a,{exact:!0,path:"".concat("/lightbox","/image/:id"),component:b})]})]})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};o.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(l.a,{basename:"/",children:Object(a.jsx)(S,{})})}),document.getElementById("root")),I()}},[[40,1,2]]]);
//# sourceMappingURL=main.52a5c6e0.chunk.js.map