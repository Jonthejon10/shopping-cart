(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{23:function(t,e,n){var c={"./2.jpg":50,"./hamingja.jpg":51,"./homeimg.jpg":52,"./ice.jpg":53,"./longclaw.jpg":54,"./longsword.jpg":55,"./oathkeeper.jpg":56,"./silver.jpg":57,"./steel.jpg":58,"./templar.jpg":59,"./viking.jpg":60};function a(t){var e=i(t);return n(e)}function i(t){if(!n.o(c,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return c[t]}a.keys=function(){return Object.keys(c)},a.resolve=i,t.exports=a,a.id=23},30:function(t,e,n){},31:function(t,e,n){},50:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/2.807e28f6.jpg"},51:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/hamingja.e2c55930.jpg"},52:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/homeimg.4a00581e.jpg"},53:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/ice.3e0804f3.jpg"},54:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/longclaw.756028c2.jpg"},55:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/longsword.b4eabec3.jpg"},56:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/oathkeeper.543093c3.jpg"},57:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/silver.67ff6869.jpg"},58:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/steel.8c1fdb30.jpg"},59:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/templar.c172e4b3.jpg"},60:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/viking.374c56b2.jpg"},61:function(t,e,n){},62:function(t,e,n){},63:function(t,e,n){},64:function(t,e,n){},65:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),i=n(16),s=n.n(i),r=n(10),o=(n(30),n(11)),l=n(12),u=n(7),j=(n(31),n(2)),d=n(6),b=n(17),m=n.n(b),p=n(0);m.a.setAppElement("#root");var h=function(t){var e=t.cart,a=t.setCart,i=t.swords,s=Object(j.f)(),b=Object(c.useState)(!1),h=Object(r.a)(b,2),f=h[0],O=h[1],g=function(){return e.reduce((function(t,e){return t+e.price*e.quantity}),0)};return console.log(i),Object(p.jsxs)("nav",{children:[Object(p.jsx)("h1",{onClick:function(){return s.push("/")},children:"Blackbeard's forge"}),Object(p.jsxs)("ul",{className:"nav-list",children:[Object(p.jsx)(d.b,{to:"/",className:"nav-link styled-link",children:Object(p.jsx)("li",{children:"Home"})}),Object(p.jsx)(d.b,{to:"/shop",className:"nav-link styled-link",children:Object(p.jsx)("li",{children:"Shop"})}),Object(p.jsx)(d.b,{to:"/contact",className:"nav-link styled-link",children:Object(p.jsx)("li",{children:"Contact"})}),Object(p.jsx)("div",{className:"shopping-div",children:Object(p.jsx)("button",{type:"button",onClick:function(){return O(!0)},children:Object(p.jsx)("p",{children:e.length})})})]}),Object(p.jsxs)(m.a,{isOpen:f,closeTimeoutMS:500,onRequestClose:function(){return O(!1)},className:"modal",overlayClassName:"overlay",children:[Object(p.jsx)("h1",{children:"Shopping basket"}),Object(p.jsxs)("div",{className:"basket-container",children:[e.map((function(t,c){return g(),Object(p.jsxs)("div",{className:"basket-item",children:[Object(p.jsx)("div",{className:"basket-item-image",children:Object(p.jsx)("img",{src:n(23)("./"+t.image+".jpg").default,alt:t.name})}),Object(p.jsx)("h3",{children:t.name}),Object(p.jsxs)("p",{children:["$",t.price*t.quantity]}),Object(p.jsx)("button",{type:"button",className:"basket-delete-button",onClick:function(){return function(t){a(Object(u.a)(e.filter((function(e){return e.name!==t.name}))));var n,c=Object(l.a)(i);try{for(c.s();!(n=c.n()).done;){var s=n.value;s.name===t.name&&(s.quantity=0)}}catch(r){c.e(r)}finally{c.f()}}(t)}}),Object(p.jsxs)("div",{className:"change-quantity-div",children:[Object(p.jsx)("button",{type:"button",className:"change-quantity-button",onClick:function(){return function(t,n){var c,s=Object(l.a)(i);try{for(s.s();!(c=s.n()).done;){var r=c.value;t.name===r.name&&(r.quantity=r.quantity-1)}}catch(j){s.e(j)}finally{s.f()}e[n]=Object(o.a)(Object(o.a)({},e[n]),{},{quantity:t.quantity-1}),a(Object(u.a)(e)),t.quantity<2&&a(Object(u.a)(e.filter((function(e){return e.name!==t.name}))))}(t,c)},children:"-"}),Object(p.jsx)("p",{children:t.quantity}),Object(p.jsx)("button",{type:"button",className:"change-quantity-button",onClick:function(){return function(t,n){var c,s=Object(l.a)(i);try{for(s.s();!(c=s.n()).done;){var r=c.value;t.name===r.name&&(r.quantity=r.quantity+1)}}catch(j){s.e(j)}finally{s.f()}e[n]=Object(o.a)(Object(o.a)({},e[n]),{},{quantity:t.quantity+1}),a(Object(u.a)(e))}(t,c)},children:"+"})]})]},c)})),Object(p.jsxs)("p",{children:["Total : $",g()]}),Object(p.jsx)("div",{className:"basket-button-div",children:Object(p.jsx)("button",{type:"button",className:"basket-order-button",children:"Order now !"})})]})]})]})},f=(n(61),function(){var t=Object(j.f)();return Object(p.jsxs)("div",{className:"home",children:[Object(p.jsx)("div",{className:"home-picture"}),Object(p.jsxs)("div",{className:"home-description",children:[Object(p.jsx)("p",{children:"Finest craftsmanship in all kingdoms known to man."}),Object(p.jsx)("p",{children:"Get your own hand-crafted sword before some pesky traveler buys all our stock (again)."}),Object(p.jsx)("button",{type:"button",className:"order-button",onClick:function(){return t.push("/shop")},children:"Browse our wares"})]})]})}),O=(n(62),function(t){var e=t.cart,c=t.setCart,a=t.swords;return Object(p.jsx)("div",{className:"shop",children:a.map((function(t,i){return Object(p.jsxs)("div",{className:"sword-card",children:[Object(p.jsx)("div",{className:"sword-image",children:Object(p.jsx)("img",{src:n(23)("./"+t.image+".jpg").default,alt:t.name})}),Object(p.jsx)("p",{children:t.name}),Object(p.jsxs)("p",{children:["$",t.price]}),Object(p.jsx)("button",{type:"button",className:"add-to-cart-button",onClick:function(){return function(t,n){a[n].quantity=(a[n].quantity||0)+1,c([].concat(Object(u.a)(e.filter((function(e){return e.name!==t.name}))),[{image:t.image,name:t.name,price:t.price,quantity:a[n].quantity}]))}(t,i)},children:"Add to cart"})]},i)}))})}),g=(n(63),function(){var t=function(){window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")};return Object(p.jsxs)("div",{className:"contact",children:[Object(p.jsx)("h2",{children:"Yes, we have socials (believe it or not),"}),Object(p.jsxs)("div",{className:"contact-buttons",children:[Object(p.jsx)("button",{className:"contact-button fb-button",onClick:t}),Object(p.jsx)("button",{className:"contact-button ig-button",onClick:t}),Object(p.jsx)("button",{className:"contact-button twitter-button",onClick:t})]}),Object(p.jsxs)("div",{className:"contact-description",children:[Object(p.jsx)("h2",{children:"29 Stable's Street, Rothenburg"}),Object(p.jsx)("p",{children:"Stop by and have a friendly chat with us by the hearth, after which we offer you a choice: either you buy, or else..."})]})]})}),x=function(){var t=Object(c.useState)([{name:"Templar Knight Sword",image:"templar",price:299.99},{name:"Hamingja",price:179.99,image:"hamingja"},{name:"Long Sword",price:129.99,image:"longsword"},{name:"Viking Sword",price:124.99,image:"viking"},{name:"Geralt's Steel Sword",price:149.99,image:"steel"},{name:"Geralt's Silver Sword",price:199.99,image:"silver"},{name:"Ned Stark's Sword, Ice",price:499.99,image:"ice"},{name:"Jon Snow's Sword, Longclaw",price:399.99,image:"longclaw"},{name:"Brienne's Sword, Oathkeeper",price:449.99,image:"oathkeeper"}]),e=Object(r.a)(t,1)[0],n=Object(c.useState)([]),a=Object(r.a)(n,2),i=a[0],s=a[1];return Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)(d.a,{children:[Object(p.jsx)(h,{cart:i,setCart:s,swords:e}),Object(p.jsxs)(j.c,{children:[Object(p.jsx)(j.a,{exact:!0,path:"/",component:f}),Object(p.jsx)(j.a,{exact:!0,path:"/shop",render:function(){return Object(p.jsx)(O,{swords:e,cart:i,setCart:s})}}),Object(p.jsx)(j.a,{exact:!0,path:"/contact",component:g})]})]})})};n(64);s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(x,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.2baf213a.chunk.js.map