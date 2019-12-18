!function(e){var t={};function a(d){if(t[d])return t[d].exports;var n=t[d]={i:d,l:!1,exports:{}};return e[d].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=t,a.d=function(e,t,d){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:d})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var d=Object.create(null);if(a.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(d,n,function(t){return e[t]}.bind(null,n));return d},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){"use strict";a.r(t);const d=()=>{var e=document.getElementsByClassName("middle")[0];document.body.style.backgroundImage="url('img/backing.png')",document.body.style.backgroundSize="60vh",document.body.style.backgroundRepeat="no-repeat",document.body.style.backgroundAttachment="fixed",document.body.style.left="0";var t=document.createElement("DIV");t.classList.add("title");var a=document.createTextNode("Tap to reveal destination"),d=document.createElement("IMG");d.setAttribute("src","img/budapest.jpg"),d.setAttribute("ID","city"),d.classList.add("city"),d.addEventListener("click",(function(){n()}));var i=document.createElement("DIV");i.classList.add("reveal");var s=document.createTextNode("BUDAPEST");t.appendChild(a),i.appendChild(s),e.appendChild(t),e.appendChild(d),e.appendChild(i)},n=()=>{document.getElementById("city").style.filter="none",document.getElementById("city").style.width="100%",document.getElementById("city").style.height="48vh",document.getElementById("city").style.transitionDuration="2.5s",document.getElementsByClassName("reveal")[0].style.opacity="1",document.getElementsByClassName("reveal")[0].style.transitionDuration="10s",document.getElementsByClassName("title")[0].style.display="none"},i=e=>{for(var t=document.getElementsByClassName("icon"),a=0;a<t.length;a++)t[a].style.filter="grayscale(93%)";var d=document.getElementsByClassName("tab_text");for(a=0;a<d.length;a++)d[a].style.color="rgb(100, 100, 100)";var n=document.getElementById(e);n.firstChild.style.filter="none",n.lastChild.style.color="black"},s=()=>{for(var e=document.getElementsByClassName("middle")[0];e.firstChild;)e.removeChild(e.firstChild)};var l,c;l=document.getElementById("content"),(c=document.createElement("DIV")).classList.add("middle"),l.appendChild(c),(()=>{var e=document.getElementById("content"),t=document.createElement("DIV");t.classList.add("tabs");var a=document.createElement("DIV");a.setAttribute("ID","puzzle"),a.classList.add("tab"),a.addEventListener("click",(function(){i("puzzle"),s(),d(),n()}));var l=document.createElement("IMG");l.setAttribute("src","img/puzzle.png"),l.classList.add("icon");var c=document.createElement("DIV");c.classList.add("tab_text");var r=document.createTextNode("Secret City");a.appendChild(l),c.appendChild(r),a.appendChild(c),t.appendChild(a);var o=document.createElement("DIV");o.classList.add("tab"),o.setAttribute("ID","location"),o.addEventListener("click",(function(){i("location"),s(),(()=>{var e=document.getElementsByClassName("middle")[0],t=document.createElement("DIV");t.classList.add("page_title");var a=document.createTextNode("Where is Budapest?");t.appendChild(a),e.append(t);var d=document.createElement("IMG");d.setAttribute("src","img/budapestmap.gif"),d.classList.add("map"),e.append(d);var n=document.createElement("DIV");n.classList.add("budamap");var i=document.createTextNode("Budapest is the capital and the most populous city of Hungary, and the tenth-largest city in the European Union. The city has an estimated population of 1,752,286."),s=document.createTextNode("Hungary borders Slovakia to the north, Ukraine to the northeast, Austria to the northwest, Romania to the east, Serbia to the south, Croatia to the southwest, and Slovenia to the west."),l=document.createElement("br");n.appendChild(i),n.appendChild(l),n.appendChild(l),n.appendChild(s),e.appendChild(n)})()}));var m=document.createElement("IMG");m.setAttribute("src","img/location.png"),m.classList.add("icon");var p=document.createElement("DIV");p.classList.add("tab_text");var u=document.createTextNode("Where!?");o.appendChild(m),p.appendChild(u),o.appendChild(p),t.appendChild(o);var h=document.createElement("DIV");h.classList.add("tab"),h.setAttribute("ID","accom"),h.addEventListener("click",(function(){i("accom"),s(),(()=>{var e=document.getElementsByClassName("middle")[0],t=document.createElement("DIV"),a=document.createElement("A");t.classList.add("page_title");var d=document.createTextNode("Elizabeth Boulevard Apartment");a.setAttribute("href","https://www.airbnb.co.uk/rooms/7108208"),a.setAttribute("target","_blank"),a.appendChild(d),t.appendChild(a),e.appendChild(t);var n=document.createElement("DIV");n.classList.add("airimg");var i=document.createElement("IMG");i.setAttribute("src","img/airb1.jpg"),i.classList.add("airimages");var s=document.createElement("IMG");s.setAttribute("src","img/airb2.jpg"),s.classList.add("airimages");var l=document.createElement("IMG");l.setAttribute("src","img/airb3.jpg"),l.classList.add("airimages");var c=document.createElement("IMG");c.setAttribute("src","img/airb4.jpg"),c.classList.add("airimages");var r=document.createElement("BUTTON"),o=document.createElement("BUTTON");r.classList.add("leftSlide","arrow"),o.classList.add("rightSlide","arrow"),r.addEventListener("click",(function(){E(-1)})),o.addEventListener("click",(function(){E(1)}));var m=document.createTextNode("<"),p=document.createTextNode(">"),u=document.createElement("DIV");u.classList.add("empty"),u.addEventListener("click",(function(){b(1)}));var h=document.createElement("DIV");h.classList.add("empty"),h.addEventListener("click",(function(){b(2)}));var g=document.createElement("DIV");g.classList.add("empty"),g.addEventListener("click",(function(){b(3)}));var v=document.createElement("DIV");v.classList.add("empty"),v.addEventListener("click",(function(){b(4)}));var C=document.createElement("DIV");C.classList.add("bottom");var y=document.createElement("DIV");y.classList.add("dots"),r.appendChild(m),o.appendChild(p),n.appendChild(i),n.appendChild(s),n.appendChild(l),n.appendChild(c),e.appendChild(n),C.appendChild(r),y.appendChild(u),y.appendChild(h),y.appendChild(g),y.appendChild(v),C.appendChild(y),C.appendChild(o),n.appendChild(C);var E=e=>{I(f+=e)},b=e=>{I(f=e)};const I=e=>{var t,a=document.getElementsByClassName("airimages"),d=document.getElementsByClassName("empty");for(e>a.length&&(f=1),e<1&&(f=a.length),t=0;t<a.length;t++)a[t].style.display="none";for(a[f-1].style.display="block",t=0;t<d.length;t++)d[t].classList.remove("filled");d[f-1].className+=" filled"};var f=1;I(f)})()}));var g=document.createElement("IMG");g.setAttribute("src","img/home.png"),g.classList.add("icon");var v=document.createElement("DIV");v.classList.add("tab_text");var C=document.createTextNode("Accomodation");h.appendChild(g),v.appendChild(C),h.appendChild(v),t.appendChild(h);var y=document.createElement("DIV");y.classList.add("tab"),y.addEventListener("click",(function(){i("photo"),s(),(()=>{var e=document.getElementsByClassName("middle")[0],t=document.createElement("DIV");t.classList.add("page_title");var a=document.createTextNode("Things to do in Budapest");t.appendChild(a),e.appendChild(t);var d=document.createElement("DIV"),n=document.createElement("DIV"),i=document.createElement("IMG");i.setAttribute("src","img/castle.jpg"),i.classList.add("thingmages");var s=document.createElement("IMG");s.setAttribute("src","img/fisherman.jpg"),s.classList.add("thingmages");var l=document.createElement("IMG");l.setAttribute("src","img/great.jpg"),l.classList.add("thingmages");var c=document.createElement("IMG");c.setAttribute("src","img/parliament.jpg"),c.classList.add("thingmages");var r=document.createElement("IMG");r.setAttribute("src","img/szechenyi.jpg"),r.classList.add("thingmages");var o=document.createElement("IMG");o.setAttribute("src","img/szimpla.jpg"),o.classList.add("thingmages");var m=document.createElement("DIV");m.classList.add("thingtext");var p=document.createTextNode("Szimpla Kert");m.appendChild(p);var u=document.createElement("DIV");u.classList.add("thingtext");var h=document.createTextNode("Buda Castle");u.appendChild(h);var g=document.createElement("DIV");g.classList.add("thingtext");var v=document.createTextNode("Fisherman's Bastion");g.appendChild(v);var C=document.createElement("DIV");C.classList.add("thingtext");var y=document.createTextNode("Great Market Hall");C.appendChild(y);var E=document.createElement("DIV");E.classList.add("thingtext");var b=document.createTextNode("Parliament House");E.appendChild(b);var I=document.createElement("DIV");I.classList.add("thingtext");var f=document.createTextNode("Szechenyi Spa Baths");I.appendChild(f),d.appendChild(i),d.appendChild(s),d.appendChild(l),d.appendChild(c),d.appendChild(r),d.appendChild(l),e.appendChild(d),n.appendChild(u),n.appendChild(g),n.appendChild(C),n.appendChild(E),n.appendChild(I),n.appendChild(C),e.appendChild(n);const L=()=>{var e,t=document.getElementsByClassName("thingmages"),a=document.getElementsByClassName("thingtext");for(e=0;e<t.length;e++)t[e].style.display="none",a[e].style.display="none";++D>t.length&&(D=1),t[D-1].style.display="block",a[D-1].style.display="block",setTimeout(L,2e3)};var D=0;L()})()})),y.setAttribute("ID","photo");var E=document.createElement("IMG");E.setAttribute("src","img/photos.png"),E.classList.add("icon");var b=document.createElement("DIV");b.classList.add("tab_text");var I=document.createTextNode("Things to do");y.appendChild(E),b.appendChild(I),y.appendChild(b),t.appendChild(y),e.appendChild(t)})(),d(),i("puzzle")}]);