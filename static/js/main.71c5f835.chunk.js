(this.webpackJsonpresort=this.webpackJsonpresort||[]).push([[0],{104:function(e,t,a){},198:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(82),l=a.n(c),o=a(3);a(104);function i(e){var t=e.children,a=e.hero;return r.a.createElement("header",{className:a},t)}function s(e){var t=e.children,a=e.title,n=e.subtitle;return r.a.createElement("div",{className:"banner"},r.a.createElement("h1",null,a),r.a.createElement("div",null),r.a.createElement("p",null,n),t)}i.defaultProps={hero:"defaultHero"};var m=a(9),u=a(10),p=a(12),f=a(11),E=a(13);function d(e){var t=e.title;return r.a.createElement("div",{className:"section-title"},r.a.createElement("h4",null,t),r.a.createElement("div",null))}var h=a(19),v=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(c)))).state={services:[{icon:r.a.createElement(h.c,null),title:"free cocktails",info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},{icon:r.a.createElement(h.d,null),title:"endless hiking",info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},{icon:r.a.createElement(h.e,null),title:"free shuttle",info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},{icon:r.a.createElement(h.b,null),title:"strongest beer",info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}]},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"services"},r.a.createElement(d,{title:"services"}),r.a.createElement("div",{className:"services-center"},this.state.services.map((function(e,t){return r.a.createElement("article",{key:t,className:"service"},r.a.createElement("span",null,e.icon),r.a.createElement("h6",null,e.title),r.a.createElement("p",null,e.info))}))))}}]),t}(n.Component),g=a(47),b=a(31),y=a(48),N=a.n(y),O=a(16),x=a(95),k=Object(x.a)({space:Object({NODE_ENV:"production",PUBLIC_URL:"/react-beach-resort"}).REACT_APP_API_SPACE,accessToken:Object({NODE_ENV:"production",PUBLIC_URL:"/react-beach-resort"}).REACT_APP_ACCESS_TOKEN}),j=r.a.createContext(),C=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={rooms:[],sortedRooms:[],featuredRooms:[],loading:!0,type:"all",capacity:1,price:0,minPrice:0,maxPrice:0,minSize:0,maxSize:0,breakfast:!1,pets:!1},a.getData=function(){var e,t,n,r,c;return N.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,N.a.awrap(k.getEntries({content_type:"beachResort",order:"sys.createdAt"}));case 3:e=l.sent,t=a.formatData(e.items),n=t.filter((function(e){return!0===e.featured})),r=Math.max.apply(Math,Object(O.a)(t.map((function(e){return e.price})))),c=Math.max.apply(Math,Object(O.a)(t.map((function(e){return e.size})))),a.setState({rooms:t,featuredRooms:n,sortedRooms:t,loading:!1,price:r,maxPrice:r,maxSize:c}),l.next=14;break;case 11:l.prev=11,l.t0=l.catch(0),console.log(l.t0);case 14:case"end":return l.stop()}}),null,null,[[0,11]])},a.getRoom=function(e){return Object(O.a)(a.state.rooms).find((function(t){return t.slug===e}))},a.handleChange=function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,r=e.target.name;a.setState(Object(b.a)({},r,n),a.filterRooms)},a.filterRooms=function(){var e=a.state,t=e.rooms,n=e.type,r=e.capacity,c=e.price,l=e.minSize,o=e.maxSize,i=e.breakfast,s=e.pets,m=Object(O.a)(t);r=parseInt(r),c=parseInt(c),"all"!==n&&(m=m.filter((function(e){return e.type===n}))),1!==r&&(m=m.filter((function(e){return e.capacity>=r}))),m=(m=m.filter((function(e){return e.price<=c}))).filter((function(e){return e.size>=l&&e.size<=o})),i&&(m=m.filter((function(e){return!0===e.breakfast}))),s&&(m=m.filter((function(e){return!0===e.pets}))),a.setState({sortedRooms:m})},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"formatData",value:function(e){return e.map((function(e){var t=e.sys.id,a=e.fields.images.map((function(e){return e.fields.file.url}));return Object(g.a)({},e.fields,{images:a,id:t})}))}},{key:"render",value:function(){return r.a.createElement(j.Provider,{value:Object(g.a)({},this.state,{getRoom:this.getRoom,handleChange:this.handleChange})},this.props.children)}}]),t}(n.Component),z=j.Consumer;var R=a(87),w=a.n(R);function S(){return r.a.createElement("div",{className:"loading"},r.a.createElement("h4",null,"rooms data loading..."),r.a.createElement("img",{src:w.a,alt:""}))}var P=a(22),F=a.n(P);function A(e){var t=e.room,a=t.name,n=t.slug,c=t.images,l=t.price;return r.a.createElement("article",{className:"room"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:c[0]||F.a,alt:"single room"}),r.a.createElement("div",{className:"price-top"},r.a.createElement("h6",null,"$",l),r.a.createElement("p",null,"per night")),r.a.createElement(o.b,{to:"/rooms/".concat(n),className:"btn-primary room-link"},"Features")),r.a.createElement("p",{className:"room-info"},a))}var _=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.context,t=e.loading,a=e.featuredRooms;return a=a.map((function(e){return r.a.createElement(A,{key:e.id,room:e})})),r.a.createElement("section",{className:"featured-rooms"},r.a.createElement(d,{title:"featured rooms"}),r.a.createElement("div",{className:"featured-rooms-center"},t?r.a.createElement(S,null):a))}}]),t}(n.Component);function I(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i,{hero:"defaultHero"},r.a.createElement(s,{title:"luxurious rooms",subtitle:"deluxe rooms starting at $299"},r.a.createElement(o.b,{to:"/rooms",className:"btn-primary"},"our rooms"))),r.a.createElement(v,null),r.a.createElement(_,null))}_.contextType=j;var T=function(e,t){return Object(O.a)(new Set(e.map((function(e){return e[t]}))))};function L(e){var t=e.rooms,a=Object(n.useContext)(j),c=a.handleChange,l=a.type,o=a.capacity,i=a.price,s=a.minPrice,m=a.maxPrice,u=a.minSize,p=a.maxSize,f=a.breakfast,E=a.pets,h=T(t,"type");h=(h=["all"].concat(Object(O.a)(h))).map((function(e,t){return r.a.createElement("option",{value:e,key:t},e)}));var v=T(t,"capacity");return v=v.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})),r.a.createElement("section",{className:"filter-container"},r.a.createElement(d,{title:"search rooms"}),r.a.createElement("form",{className:"filter-form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"type"},"room type"),r.a.createElement("select",{name:"type",id:"type",value:l,className:"form-control",onChange:c},h)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"capacity"},"guests"),r.a.createElement("select",{name:"capacity",id:"capacity",value:o,className:"form-control",onChange:c},v)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"price"},"room price $",i),r.a.createElement("input",{type:"range",name:"price",min:s,max:m,id:"price",value:i,onChange:c,className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"size"},"room size"),r.a.createElement("div",{className:"size-inputs"},r.a.createElement("input",{type:"number",name:"minSize",id:"size",value:u,onChange:c,className:"size-input"}),r.a.createElement("input",{type:"number",name:"maxSize",id:"size",value:p,onChange:c,className:"size-input"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"single-extra"},r.a.createElement("input",{type:"checkbox",name:"breakfast",id:"breakfast",checked:f,onChange:c}),r.a.createElement("label",{htmlFor:"breakfast"},"breakfast")),r.a.createElement("div",{className:"single-extra"},r.a.createElement("input",{type:"checkbox",name:"pets",id:"pets",checked:E,onChange:c}),r.a.createElement("label",{htmlFor:"pets"},"pets")))))}function B(e){var t=e.rooms;return 0===t.length?r.a.createElement("div",{className:"empty-search"},r.a.createElement("h3",null,"unfortunately no rooms matched your search parameters")):r.a.createElement("section",{className:"roomslist"},r.a.createElement("div",{className:"roomslist-center"},t.map((function(e){return r.a.createElement(A,{key:e.id,room:e})}))))}var D,M=(D=function(e){var t=e.context,a=t.loading,n=t.sortedRooms,c=t.rooms;return a?r.a.createElement(S,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(L,{rooms:c}),r.a.createElement(B,{rooms:n}))},function(e){return r.a.createElement(z,null,(function(t){return r.a.createElement(D,Object.assign({},e,{context:t}))}))}),$=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i,{hero:"roomsHero"},r.a.createElement(s,{title:"our rooms"},r.a.createElement(o.b,{to:"/",className:"btn-primary"},"return home"))),r.a.createElement(M,null))},H=a(96),U=a(90);function G(){var e=Object(U.a)(["\n  min-height: 60vh;\n  background: url(",") center/cover no-repeat;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return G=function(){return e},e}var J=a(91).a.header(G(),(function(e){return e.img?e.img:F.a})),V=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).state={slug:a.props.match.params.slug,defaultBCG:F.a},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=(0,this.context.getRoom)(this.state.slug);if(!e)return r.a.createElement("div",{className:"error"},r.a.createElement("h3",null,"no such room could be found..."),r.a.createElement(o.b,{to:"/rooms",className:"btn-primary"},"back to rooms"));var t=e.name,a=e.description,n=e.capacity,c=e.size,l=e.price,i=e.extras,m=e.breakfast,u=e.pets,p=e.images,f=Object(H.a)(p),E=f[0],d=f.slice(1);return r.a.createElement(r.a.Fragment,null,r.a.createElement(J,{img:E||this.state.defaultBCG},r.a.createElement(s,{title:"".concat(t," room")},r.a.createElement(o.b,{to:"/rooms",className:"btn-primary"},"back to rooms"))),r.a.createElement("section",{className:"single-room"},r.a.createElement("div",{className:"single-room-images"},d.map((function(e,a){return r.a.createElement("img",{key:a,src:e,alt:t})}))),r.a.createElement("div",{className:"single-room-info"},r.a.createElement("article",{className:"desc"},r.a.createElement("h3",null,"details"),r.a.createElement("p",null,a)),r.a.createElement("article",{className:"info"},r.a.createElement("h3",null,"info"),r.a.createElement("h6",null,"price : $",l),r.a.createElement("h6",null,"size : ",c," SQFT"),r.a.createElement("h6",null,"max capacity : ","".concat(n,n>1?" people":" person")),r.a.createElement("h6",null,u?"pets allowed":"no pets allowed"),r.a.createElement("h6",null,m&&"free breakfast included")))),r.a.createElement("section",{className:"room-extras"},r.a.createElement("h6",null,"extras"),r.a.createElement("ul",{className:"extras"},i.map((function(e,t){return r.a.createElement("li",{key:t},"- ",e)})))))}}]),t}(n.Component);function W(){return r.a.createElement(i,null,r.a.createElement(s,{title:"404",subtitle:"page not found"},r.a.createElement(o.b,{to:"/",className:"btn-primary"},"return home")))}V.contextType=j;var K=a(15),Q=a(94),q=a.n(Q),X=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1},a.handleToggle=function(){a.setState({isOpen:!a.state.isOpen})},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"nav-center"},r.a.createElement("div",{className:"nav-header"},r.a.createElement(o.b,{to:"/"},r.a.createElement("img",{src:q.a,alt:"Beach Resort"})),r.a.createElement("button",{type:"button",className:"nav-btn",onClick:this.handleToggle},r.a.createElement(h.a,{className:"nav-icon"}))),r.a.createElement("ul",{className:this.state.isOpen?"nav-links show-nav":"nav-links"},r.a.createElement("li",null,r.a.createElement(o.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/rooms"},"Rooms")))))}}]),t}(n.Component);var Y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(X,null),r.a.createElement(K.c,null,r.a.createElement(K.a,{exact:!0,path:"/",component:I}),r.a.createElement(K.a,{exact:!0,path:"/rooms",component:$}),r.a.createElement(K.a,{exact:!0,path:"/rooms/:slug",component:V}),r.a.createElement(K.a,{component:W})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(C,null,r.a.createElement(o.a,null,r.a.createElement(Y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},22:function(e,t,a){e.exports=a.p+"static/media/room-1.e928a5c4.jpeg"},49:function(e,t){},87:function(e,t,a){e.exports=a.p+"static/media/loading-arrow.e9ea7394.gif"},94:function(e,t,a){e.exports=a.p+"static/media/logo.9f0cccc1.svg"},99:function(e,t,a){e.exports=a(198)}},[[99,1,2]]]);
//# sourceMappingURL=main.71c5f835.chunk.js.map