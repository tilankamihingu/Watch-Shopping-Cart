(this.webpackJsonpcart=this.webpackJsonpcart||[]).push([[0],{17:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var s=c(0),i=c(1),n=c.n(i),a=c(11),o=c.n(a),r=(c(17),c(4)),d=c.p+"static/media/bars-solid.e8db7520.svg",l=c.p+"static/media/times-solid.ea7c95d7.svg",j=c(3),u=c.p+"static/media/shopping-cart-solid.d146d6c3.svg",b=c(6),m=Object(i.createContext)(),g=function(e){var t=Object(i.useState)([{_id:"1",title:"Wacth Product 01",images:["https://www.upsieutoc.com/images/2020/07/18/img1.jpg","https://www.upsieutoc.com/images/2020/07/18/img2.jpg","https://www.upsieutoc.com/images/2020/07/18/img3.jpg","https://www.upsieutoc.com/images/2020/07/18/img4.jpg"],description:"How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",content:"Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",colors:["red","black","teal"],sizes:["XL","L","M","XM","LX"],price:101,count:1},{_id:"2",title:"Wacth Product 02",images:["https://www.upsieutoc.com/images/2020/07/18/img2.jpg","https://www.upsieutoc.com/images/2020/07/18/img1.jpg","https://www.upsieutoc.com/images/2020/07/18/img3.jpg","https://www.upsieutoc.com/images/2020/07/18/img4.jpg"],description:"How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",content:"Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",colors:["red","black","teal"],sizes:["XL","L","M","XM","LX"],price:102,count:1},{_id:"3",title:"Wacth Product 03",images:["https://www.upsieutoc.com/images/2020/07/18/img3.jpg","https://www.upsieutoc.com/images/2020/07/18/img2.jpg","https://www.upsieutoc.com/images/2020/07/18/img1.jpg","https://www.upsieutoc.com/images/2020/07/18/img4.jpg"],description:"How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",content:"Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",colors:["red","black","teal"],sizes:["XL","L","M","XM","LX"],price:103,count:1},{_id:"4",title:"Wacth Product 04",images:["https://www.upsieutoc.com/images/2020/07/18/img4.jpg","https://www.upsieutoc.com/images/2020/07/18/img2.jpg","https://www.upsieutoc.com/images/2020/07/18/img3.jpg","https://www.upsieutoc.com/images/2020/07/18/img1.jpg"],description:"How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",content:"Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",colors:["red","black","teal"],sizes:["XL","L","M","XM","LX"],price:104,count:1},{_id:"5",title:"Wacth Product 05",images:["https://www.upsieutoc.com/images/2020/07/18/img5.jpg","https://www.upsieutoc.com/images/2020/07/18/img2.jpg","https://www.upsieutoc.com/images/2020/07/18/img3.jpg","https://www.upsieutoc.com/images/2020/07/18/img4.jpg"],description:"How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",content:"Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",colors:["red","black","teal"],sizes:["XL","L","M","XM","LX"],price:105,count:1},{_id:"6",title:"Wacth Product 06",images:["https://www.upsieutoc.com/images/2020/07/18/img6.jpg","https://www.upsieutoc.com/images/2020/07/18/img2.jpg","https://www.upsieutoc.com/images/2020/07/18/img3.jpg","https://www.upsieutoc.com/images/2020/07/18/img4.jpg"],description:"How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",content:"Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",colors:["red","black","teal"],sizes:["XL","L","M","XM","LX"],price:106,count:1}]),c=Object(r.a)(t,2),n=c[0],a=c[1],o=Object(i.useState)([]),d=Object(r.a)(o,2),l=d[0],j=d[1];Object(i.useEffect)((function(){localStorage.setItem("datacart",JSON.stringify(l))}),[l]),Object(i.useEffect)((function(){var e=JSON.parse(localStorage.getItem("datacart"));e&&j(e)}),[]);var u={products:[n,a],cart:[l,j],addCart:function(e){if(l.every((function(t){return t._id!==e}))){var t=n.filter((function(t){return t._id===e}));j([].concat(Object(b.a)(l),Object(b.a)(t)))}else alert("The product has been add to cart.")}};return Object(s.jsx)(m.Provider,{value:u,children:e.children})};function p(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),c=t[0],n=t[1],a=Object(i.useContext)(m),o=Object(r.a)(a.cart,1)[0],b=function(){n(!c)},g={left:c?0:"-100%"};return Object(s.jsxs)("header",{className:"App-header",children:[Object(s.jsx)("div",{className:"menu",onClick:b,children:Object(s.jsx)("img",{src:d,alt:"",width:"30"})}),Object(s.jsx)("div",{className:"logo",children:Object(s.jsx)("h1",{children:Object(s.jsx)(j.b,{to:"/products",children:"Citizen"})})}),Object(s.jsxs)("ul",{style:g,children:[Object(s.jsx)("li",{children:Object(s.jsx)(j.b,{to:"/products",children:"products"})}),Object(s.jsx)("li",{children:Object(s.jsx)(j.b,{to:"/",children:"About"})}),Object(s.jsx)("li",{children:Object(s.jsx)(j.b,{to:"/",children:"Contact"})}),Object(s.jsx)("li",{children:Object(s.jsx)(j.b,{to:"/",children:"Login / Register"})}),Object(s.jsx)("li",{onClick:b,children:Object(s.jsx)("img",{src:l,alt:"",width:"30",className:"menu"})})]}),Object(s.jsxs)("div",{className:"cart-icon",children:[Object(s.jsx)("span",{children:o.length}),Object(s.jsx)(j.b,{to:"/cart",children:Object(s.jsx)("img",{src:u,alt:"",width:"30"})})]})]})}function h(){var e=Object(i.useContext)(m),t=Object(r.a)(e.products,1)[0],c=e.addCart;return Object(s.jsx)("div",{className:"products",children:t.map((function(e){return Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)(j.b,{to:"/products/".concat(e._id),children:Object(s.jsx)("img",{src:e.images[0],alt:""})}),Object(s.jsxs)("div",{className:"box",children:[Object(s.jsx)("h3",{title:e.title,children:Object(s.jsx)(j.b,{to:"/",children:e.title})}),Object(s.jsx)("p",{children:e.description}),Object(s.jsx)("h4",{children:e.price}),Object(s.jsx)("button",{onClick:function(){return c(e._id)},children:"Add to Cart"})]})]},e._id)}))})}var O=c(2);function x(e){var t=e.colors;return Object(s.jsx)("div",{className:"colors",children:t.map((function(e,t){return Object(s.jsx)("button",{style:{background:e}},t)}))})}function w(e){var t=e.sizes;return Object(s.jsx)("div",{className:"sizes",children:t.map((function(e,t){return Object(s.jsx)("button",{children:e},t)}))})}function f(e){var t=e.images,c=e.setIndex;return Object(s.jsx)("div",{className:"thumb",children:t.map((function(e,t){return Object(s.jsx)("img",{src:e,alt:"",onClick:function(){return c(t)}},t)}))})}function v(){var e=Object(O.h)().id,t=Object(i.useContext)(m),c=Object(r.a)(t.products,1)[0],n=t.addCart,a=Object(i.useState)(0),o=Object(r.a)(a,2),d=o[0],l=o[1],u=Object(i.useRef)(),b=c.filter((function(t,c){return t._id===e})),g=function(e){var t=e.target.getBoundingClientRect(),c=t.left,s=t.top,i=t.width,n=t.height,a=(e.pageX-c)/i*100,o=(e.pageY-s)/n*100;u.current.style.backgroundPosition="".concat(a,"% ").concat(o,"%")};return Object(s.jsx)(s.Fragment,{children:b.map((function(e){return Object(s.jsxs)("div",{className:"details",children:[Object(s.jsx)("div",{className:"img-container",onMouseMove:g,style:{backgroundImage:"url(".concat(e.images[d],")")},ref:u,onMouseLeave:function(){return u.current.style.backgroundPosition="center"}}),Object(s.jsxs)("div",{className:"box-details",children:[Object(s.jsx)("h2",{title:e.title,children:e.title}),Object(s.jsxs)("h3",{children:["$",e.price]}),Object(s.jsx)(x,{colors:e.colors}),Object(s.jsx)(w,{sizes:e.sizes}),Object(s.jsx)("p",{children:e.description}),Object(s.jsx)("p",{children:e.content}),Object(s.jsx)(f,{images:e.images,setIndex:l}),Object(s.jsx)(j.b,{to:"/cart",className:"cart",onClick:function(){return n(e._id)},children:"Add to cart"})]})]},e._id)}))})}function N(){var e=Object(i.useContext)(m),t=Object(r.a)(e.cart,2),c=t[0],n=t[1],a=Object(i.useState)(0),o=Object(r.a)(a,2),d=o[0],l=o[1];Object(i.useEffect)((function(){!function(){var e=c.reduce((function(e,t){return e+t.price*t.count}),0);l(e)}()}),[c]);return 0===c.length?Object(s.jsx)("h2",{style:{textAlign:"center",fontSize:"5rem"},children:"Cart Empty"}):Object(s.jsxs)(s.Fragment,{children:[c.map((function(e){return Object(s.jsxs)("div",{className:"details cart",children:[Object(s.jsx)("div",{className:"img-container",style:{backgroundImage:"url(".concat(e.images[0],")")}}),Object(s.jsxs)("div",{className:"box-details",children:[Object(s.jsx)("h2",{title:e.title,children:e.title}),Object(s.jsxs)("h3",{children:["$",e.price]}),Object(s.jsx)(x,{colors:e.colors}),Object(s.jsx)(w,{sizes:e.sizes}),Object(s.jsx)("p",{children:e.description}),Object(s.jsx)("p",{children:e.content}),Object(s.jsxs)("div",{className:"amount",children:[Object(s.jsx)("button",{className:"count",onClick:function(){return t=e._id,c.forEach((function(e){e._id===t&&(1===e.count?e.count=1:e.count-=1)})),void n(Object(b.a)(c));var t},children:"-"}),Object(s.jsx)("span",{children:e.count}),Object(s.jsx)("button",{className:"count",onClick:function(){return t=e._id,c.forEach((function(e){e._id===t&&(e.count+=1)})),void n(Object(b.a)(c));var t},children:"+"})]}),Object(s.jsx)("div",{className:"delete",onClick:function(){return t=e._id,void(window.confirm("Do you want to delete this product?")&&(c.forEach((function(e,s){e._id===t&&c.splice(s,1)})),n(Object(b.a)(c))));var t},children:"X"})]})]},e._id)})),Object(s.jsxs)("div",{className:"total",children:[Object(s.jsx)(j.b,{to:"/payments",children:"Payments"}),Object(s.jsxs)("h3",{children:["Total:$ ",d]})]})]})}var C=function(){return Object(s.jsx)(g,{children:Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)(j.a,{children:[Object(s.jsx)(p,{}),Object(s.jsx)("section",{children:Object(s.jsxs)(O.c,{children:[Object(s.jsx)(O.a,{path:"products",element:Object(s.jsx)(h,{})}),Object(s.jsx)(O.a,{path:"products/:id",element:Object(s.jsx)(v,{})}),Object(s.jsx)(O.a,{path:"cart",element:Object(s.jsx)(N,{})})]})})]})})})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,21)).then((function(t){var c=t.getCLS,s=t.getFID,i=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),s(e),i(e),n(e),a(e)}))};o.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(C,{})}),document.getElementById("root")),S()}},[[20,1,2]]]);
//# sourceMappingURL=main.9b64ebda.chunk.js.map