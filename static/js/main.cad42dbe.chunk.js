(this.webpackJsonplightbox=this.webpackJsonplightbox||[]).push([[0],{23:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(1),n=a.n(s),i=a(15),o=a.n(i),r=a(7),l=(a(23),a(2)),j=a(8),b=a(17),d=(a(32),a(33),function(){var e=Object(l.g)(),t=Object(s.useState)(""),a=Object(j.a)(t,2),n=a[0],i=a[1],o=Object(l.f)();return Object(s.useEffect)((function(){fetch("https://pixabay.com/api/?key=".concat("586737-d5b309239d4fecc85c125335d","&id=").concat(e.id)).then((function(e){return e.json()})).then((function(e){i(e.hits[0].largeImageURL)}))}),[e]),Object(s.useEffect)((function(){var e=function(e){27===e.keyCode&&o.goBack()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[o]),Object(c.jsxs)("button",{className:"image-max-container",onClick:function(){o.goBack()},children:[Object(c.jsx)("img",{src:n,alt:"",className:"image-max"}),Object(c.jsx)("span",{className:"close-button",children:"X"})]})}),h=function(e){var t=e.image,a=t.tags.split(",");return Object(c.jsxs)("div",{className:"card-container",children:[Object(c.jsx)(r.b,{to:"".concat("/lightbox","/image/").concat(t.id),children:Object(c.jsx)("img",{src:t.webformatURL,alt:"",className:"image"})}),Object(c.jsxs)("div",{className:"details-container",children:[Object(c.jsxs)("h2",{className:"author",children:["Photo by ",t.user]}),Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{className:"detail",children:[Object(c.jsx)("strong",{children:"Views: "}),t.views]}),Object(c.jsxs)("li",{className:"detail",children:[Object(c.jsx)("strong",{children:"Downloads: "}),t.downloads]}),Object(c.jsxs)("li",{className:"detail",children:[Object(c.jsx)("strong",{children:"Likes: "}),t.likes]})]}),Object(c.jsx)("div",{className:"tag-container",children:a.map((function(e,t){return Object(c.jsxs)("span",{className:"tag",children:["#",e]},t)}))})]}),Object(c.jsx)(l.a,{path:"/image/:id",component:d})]})},u=a.p+"static/media/uparrow.1a7f59ad.svg",m=(a(34),function(e){var t=e.images,a=Object(s.useState)(!1),n=Object(j.a)(a,2),i=n[0],o=n[1];window.addEventListener("scroll",(function(){!i&&window.pageYOffset>400?o(!0):i&&window.pageYOffset<=400&&o(!1)}));return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"imageCard-container",children:t.map((function(e){return Object(c.jsx)(h,{image:e},e.id)}))}),Object(c.jsx)("img",{src:u,alt:"Arrow to top",id:"up-arrow",className:"up-arrow",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}})]})}),x=(a(35),function(e){var t=e.searchText,a=Object(s.useState)(""),n=Object(j.a)(a,2),i=n[0],o=n[1];return Object(c.jsxs)("div",{className:"search-container",children:[Object(c.jsxs)("p",{className:"search-paragraph",children:["Find the perfect photo - Free to download and use in your personal or commercial projects! See more on"," ",Object(c.jsx)("a",{className:"search-pixabay-link",href:"https://pixabay.com/",children:"Pixabay"})]}),Object(c.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(i)},className:"search-form",children:Object(c.jsxs)("div",{className:"search-input",children:[Object(c.jsx)("input",{type:"text",className:"search-text",placeholder:"Search Image term...",onChange:function(e){return o(e.target.value)}}),Object(c.jsxs)("button",{className:"button",type:"submit",children:[Object(c.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/5/55/Magnifying_glass_icon.svg",alt:"Magnifying glass",className:"search-icon"})," ","Search"]})]})})]})}),g=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),a=t[0],n=t[1],i=Object(s.useState)(!0),o=Object(j.a)(i,2),r=o[0],l=o[1],d=Object(b.a)("search",""),h=Object(j.a)(d,2),u=h[0],g=h[1];return Object(s.useEffect)((function(){fetch("https://pixabay.com/api/?key=".concat("586737-d5b309239d4fecc85c125335d","&q=").concat(u,"&safesearch&page=3&per-page=50&image_type=photo")).then((function(e){return e.json()})).then((function(e){n(e.hits),l(!1)})).catch((function(e){return console.log(e)}))}),[u]),Object(c.jsxs)("div",{className:"app-container",children:[Object(c.jsx)(x,{searchText:function(e){return g(e)}}),r?Object(c.jsx)("h1",{className:"loading",children:"Loading"}):Object(c.jsx)(m,{images:a}),!r&&0===a.length&&Object(c.jsx)("h1",{className:"no-image",children:"No image found"})]})},O=(a(36),a.p+"static/media/logo.a8726bba.png"),f=function(){return Object(c.jsxs)("div",{className:"about-container",children:[Object(c.jsx)("img",{className:"about-logo",src:O,alt:"logo"}),Object(c.jsxs)("div",{className:"about-card-container",children:[Object(c.jsxs)("div",{className:"about-card",children:[Object(c.jsxs)("p",{className:"about-text",children:["Hello, I am ",Object(c.jsx)("span",{className:"about-text-span",children:"Dominique Bello"})," ","aka"," ",Object(c.jsx)("a",{href:"https://github.com/Catevika",className:"about-text-link",children:"Catevika"}),"!"]}),Object(c.jsx)("p",{className:"about-text",children:"I am a French Front-End Web developer, a coding woman changing career after 20 years in Marketing as a Project Manager. I am living near Paris, France with my Italian husband"})]}),Object(c.jsxs)("div",{className:"about-card",children:[Object(c.jsx)("p",{className:"about-text",children:"Some of the OS, Languages, Frameworks and Tools I use:"}),Object(c.jsxs)("ul",{className:"about-ul",children:[Object(c.jsx)("li",{className:"about-li",children:"Windows 10"}),Object(c.jsx)("li",{className:"about-li",children:"Visual Studio Code + extensions,"}),Object(c.jsx)("li",{className:"about-li",children:"HTML5, CSS3, Sass"}),Object(c.jsx)("li",{className:"about-li",children:"Javascript, React, Node"}),Object(c.jsx)("li",{className:"about-li",children:"Express, Redux, MongoDB"}),Object(c.jsx)("li",{className:"about-li",children:"Git, Github, NPM..."})]})]}),Object(c.jsxs)("div",{className:"about-card",children:[Object(c.jsx)("p",{className:"about-text",children:"Out of work, I love street art festivals, fantasy and steampunk arts, circus arts, digital photo and retouching"}),Object(c.jsx)("p",{className:"about-text",children:"Italy is my adopted country!"})]})]})]})},p=(a(37),a.p+"static/media/twitter.16ec4858.svg"),N=a.p+"static/media/github.81f9edee.svg",v=a.p+"static/media/france.40c79af5.svg",w=a.p+"static/media/italy.2b31e5a9.svg",k=a.p+"static/media/united-kingdom.2d19fed4.svg",y=function(){return Object(c.jsxs)("div",{className:"contact-container",children:[Object(c.jsxs)("div",{className:"contact-card",children:[Object(c.jsx)("h1",{className:"about-header big collaboration",children:"Looking for user friendly, functional and scalable apps / sites?"}),Object(c.jsx)("a",{href:"mailto:dominique.bello@outlook.fr",className:"about-paragraph-link about-header big collaboration",children:"Let's start collaborating!"})]}),Object(c.jsxs)("h1",{className:"contact-header",children:["Contact me at:"," ",Object(c.jsx)("a",{href:"mailto:dominique.bello@outlook.fr",children:"dominique.bello@outlook.fr"})]}),Object(c.jsx)("h1",{children:"Find me also on:"}),Object(c.jsx)("img",{src:p,alt:"Twitter logo",height:"48",width:"48"}),Object(c.jsx)("a",{href:"https://twitter.com/dominique_bello",children:"@dominique_bello"})," ",Object(c.jsx)("h1",{children:"and"}),Object(c.jsx)("img",{src:N,alt:"Github logo",height:"48",width:"48"}),Object(c.jsx)("a",{href:"https://github.com/Catevika",children:"Catevika"}),Object(c.jsxs)("p",{children:["I speak:",Object(c.jsx)("img",{src:v,alt:"French flag",height:"48",width:"48"})," French ",Object(c.jsx)("img",{src:k,alt:"French flag",height:"48",width:"48"})," ","English and"," ",Object(c.jsx)("img",{src:w,alt:"French flag",height:"48",width:"48"}),"Italian"]}),Object(c.jsx)("p",{children:"Awaiting to hear from you soon!"}),Object(c.jsxs)("footer",{children:["Icons made by"," ",Object(c.jsx)("a",{href:"https://www.flaticon.com/authors/freepik",title:"Freepik",children:"Freepik"})," ","from"," ",Object(c.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"})]})]})},F=(a(38),function(){return Object(c.jsx)("header",{className:"navbar",children:Object(c.jsxs)("ul",{className:"navbar-ul",children:[Object(c.jsx)("li",{children:Object(c.jsx)(r.c,{exact:!0,activeClassName:"current",to:"".concat("/lightbox","/"),className:"navbar-link",children:"Gallery"})}),Object(c.jsx)("li",{children:Object(c.jsx)(r.c,{exact:!0,activeClassName:"current",to:"".concat("/lightbox","/about"),className:"navbar-link",children:"About"})}),Object(c.jsx)("li",{children:Object(c.jsx)(r.c,{exact:!0,activeClassName:"current",to:"".concat("/lightbox","/contact"),className:"navbar-link",children:"Contact"})})]})})});a(39);var C=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(F,{}),Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{exact:!0,path:"".concat("/lightbox","/"),component:g}),Object(c.jsx)(l.a,{exact:!0,path:"".concat("/lightbox","/about"),component:f}),Object(c.jsx)(l.a,{exact:!0,path:"".concat("/lightbox","/contact"),component:y}),Object(c.jsx)(l.a,{exact:!0,path:"".concat("/lightbox","/image/:id"),component:d})]})]})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,41)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};o.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(r.a,{basename:"/",children:Object(c.jsx)(C,{})})}),document.getElementById("root")),S()}},[[40,1,2]]]);
//# sourceMappingURL=main.cad42dbe.chunk.js.map