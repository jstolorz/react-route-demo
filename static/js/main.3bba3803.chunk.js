(this["webpackJsonpreact-route-pl"]=this["webpackJsonpreact-route-pl"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/header1.70e6670e.jpg"},function(e,t,a){e.exports=a.p+"static/media/header2.33eca35f.jpg"},,,,,,function(e,t,a){e.exports=a.p+"static/media/header3.d9d36b65.jpg"},,,,,,,,function(e,t,a){e.exports=a(41)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),l=a.n(c),i=(a(30),a(2)),o=(a(31),a(6)),m=a(10),u=a.n(m),s=a(11),p=a.n(s),d=a(17),E=a.n(d),h=(a(32),function(e){return r.a.createElement("div",null,r.a.createElement(o.e,null,r.a.createElement(o.c,{path:"/",exact:!0,render:function(){return r.a.createElement("img",{src:u.a,alt:"miasto"})}}),r.a.createElement(o.c,{path:"/products",render:function(){return r.a.createElement("img",{src:p.a,alt:"miasto"})}}),r.a.createElement(o.c,{path:"/contact",render:function(){return r.a.createElement("img",{src:E.a,alt:"miasto"})}}),r.a.createElement(o.c,{path:"/admin",render:function(){return r.a.createElement("img",{src:p.a,alt:"miasto"})}}),r.a.createElement(o.c,{render:function(){return r.a.createElement("img",{src:u.a,alt:"miasto"})}})))}),f=(a(38),[{name:"start",path:"/",exact:!0},{name:"produkty",path:"/products"},{name:"kontakt",path:"/contact"},{name:"panel admina",path:"/admin"}]),v=function(e){var t=f.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement(i.c,{to:e.path,exact:!!e.exact&&e.exact},e.name))}));return r.a.createElement("div",null,r.a.createElement("nav",{className:"main"},r.a.createElement("ul",null,t)))},g=function(e){return r.a.createElement("div",null,r.a.createElement("article",{style:{marginTop:40}},r.a.createElement("h3",{style:{marginBottom:3,textTransform:"uppercase"}},e.title),r.a.createElement("span",{style:{display:"block",marginBottom:10,fontSize:12}},e.author),r.a.createElement("p",null,e.text)))},b=[{id:1,title:"Czym jest teoria strun",author:"Jan Nowak",text:"1111Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque amet, vitae consequatur exercitationem ratione voluptatibus repudiandae alias deleniti culpa illo suscipit quia sint temporibus illum commodi itaque ea ab ipsum?"},{id:2,title:"Czym jest paradoks fermiego?",author:"Ania Kwiatkowska",text:"2222Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cumque accusantium sapiente perspiciatis id ipsam necessitatibus recusandae unde dolores error sunt officiis ad, voluptatum veniam, blanditiis nam in totam esse."},{id:3,title:"Ciemna materia i ciemna energia?",author:"Jan Kowalski",text:"4444Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cumque accusantium sapiente perspiciatis id ipsam necessitatibus recusandae unde dolores error sunt officiis ad, voluptatum veniam, blanditiis nam in totam esse."}],k=function(e){var t=b.map((function(e){return r.a.createElement(g,Object.assign({key:e.id},e))}));return r.a.createElement("div",{className:"home"},t)},w=a(20),y=a(21),x=a(23),j=a(22),O=a(24),N=(a(39),function(e){function t(){var e,a;Object(w.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(x.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.handleOnSubmitForm=function(e){e.preventDefault(),a.setState({value:""})},a.handleOnChangeArea=function(e){a.setState({value:e.target.value})},a}return Object(O.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("form",{onSubmit:this.handleOnSubmitForm},r.a.createElement("h3",null,"Napisz do nas"),r.a.createElement("textarea",{value:this.state.value,onChange:this.handleOnChangeArea}),r.a.createElement("button",null,"Wy\u015blij")),r.a.createElement(o.a,{when:this.state.value,message:"Masz nie wype\u0142niony formulasz"}))}}]),t}(n.Component)),S=function(e){return r.a.createElement("div",null,r.a.createElement(o.c,{render:function(){return r.a.createElement(o.b,{to:"/login"})}}))},A=function(e){return r.a.createElement("div",null,"Nie ma takiej strony")},C=function(e){return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"login"},"Login:",r.a.createElement("input",{id:"login",type:"text"})),r.a.createElement("label",{htmlFor:"password"},"Password:",r.a.createElement("input",{id:"password",type:"password"})),r.a.createElement("button",null,"login"))},q=(a(40),["car","bike","motorcycle"]),z=function(e){var t=q.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement(i.b,{to:"/product/".concat(e)},e))}));return r.a.createElement("div",{className:"products"},r.a.createElement("h2",null,"Lista produkt\xf3w"),r.a.createElement("div",null,r.a.createElement("ul",null,t)))},L=function(e){return r.a.createElement("div",null,r.a.createElement("h2",null," ".concat(e.name)))},B=function(e){var t=e.match;return r.a.createElement("div",null,r.a.createElement("h2",null,"Strona produktu"),r.a.createElement(L,{name:t.params.name}),r.a.createElement(i.b,{to:"/products"},"Powr\xf3t do listy produkt\xf3w"))},F=function(e){return r.a.createElement("div",null,r.a.createElement(o.e,null,r.a.createElement(o.c,{path:"/",exact:!0,component:k}),r.a.createElement(o.c,{path:"/products",component:z}),r.a.createElement(o.c,{path:"/product/:name",component:B}),r.a.createElement(o.c,{path:"/contact",component:N}),r.a.createElement(o.c,{path:"/admin",component:S}),r.a.createElement(o.c,{path:"/login",component:C}),r.a.createElement(o.c,{component:A})))},J=function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,"Stopka"),r.a.createElement(o.c,{path:"/",exact:!0,render:function(e){return console.log(e),r.a.createElement("p",null,"Dodatkowe")}}))};var W=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement(h,null)),r.a.createElement("main",null,r.a.createElement("aside",null,r.a.createElement(v,null)),r.a.createElement("section",{className:"blog"},r.a.createElement(F,null))),r.a.createElement("footer",null,r.a.createElement(J,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[25,1,2]]]);
//# sourceMappingURL=main.3bba3803.chunk.js.map