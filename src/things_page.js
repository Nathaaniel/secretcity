const renderThingsPage = () => {
  var middle = document.getElementsByClassName("middle")[0];
  var thingmages = document.createElement("DIV");
  var thingtext = document.createElement("DIV");

  var castle = document.createElement("IMG");
  castle.setAttribute("src", "img/castle.jpg");
  castle.classList.add("thingmages");

  var fisherman = document.createElement("IMG");
  fisherman.setAttribute("src", "img/fisherman.jpg");
  fisherman.classList.add("thingmages");

  var great = document.createElement("IMG");
  great.setAttribute("src", "img/great.jpg");
  great.classList.add("thingmages");

  var parliament = document.createElement("IMG");
  parliament.setAttribute("src", "img/parliament.jpg");
  parliament.classList.add("thingmages");

  var szechenyi = document.createElement("IMG");
  szechenyi.setAttribute("src", "img/szechenyi.jpg");
  szechenyi.classList.add("thingmages");

  var szimpla = document.createElement("IMG");
  szimpla.setAttribute("src", "img/szimpla.jpg");
  szimpla.classList.add("thingmages");

  var szimpla_box = document.createElement("DIV");
  szimpla_box.classList.add("thingtext");
  var szimpla_text = document.createTextNode("Szimpla Kert");
  szimpla_box.appendChild(szimpla_text);

  var castle_box = document.createElement("DIV");
  castle_box.classList.add("thingtext");
  var castle_text = document.createTextNode("Buda Castle");
  castle_box.appendChild(castle_text);

  var fisherman_box = document.createElement("DIV");
  fisherman_box.classList.add("thingtext");
  var fisherman_text = document.createTextNode("Fisherman's Bastion");
  fisherman_box.appendChild(fisherman_text);

  var great_box = document.createElement("DIV");
  great_box.classList.add("thingtext");
  var great_text = document.createTextNode("Great Market Hall");
  great_box.appendChild(great_text);

  var parliament_box = document.createElement("DIV");
  parliament_box.classList.add("thingtext");
  var parliament_text = document.createTextNode("Parliament House");
  parliament_box.appendChild(parliament_text);

  var szechenyi_box = document.createElement("DIV");
  szechenyi_box.classList.add("thingtext");
  var szechenyi_text = document.createTextNode("Szechenyi Spa Baths");
  szechenyi_box.appendChild(szechenyi_text);

  thingmages.appendChild(castle);
  thingmages.appendChild(fisherman);
  thingmages.appendChild(great);
  thingmages.appendChild(parliament);
  thingmages.appendChild(szechenyi);
  thingmages.appendChild(great);
  middle.appendChild(thingmages);

  thingtext.appendChild(castle_box);
  thingtext.appendChild(fisherman_box);
  thingtext.appendChild(great_box);
  thingtext.appendChild(parliament_box);
  thingtext.appendChild(szechenyi_box);
  thingtext.appendChild(great_box);
  middle.appendChild(thingtext);

  const carousel = () => {
    var i;
    var x = document.getElementsByClassName("thingmages");
    var y = document.getElementsByClassName("thingtext");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
      y[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
      myIndex = 1;
    }
    x[myIndex - 1].style.display = "block";
    y[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2000);
  };

  var myIndex = 0;
  carousel();
};

export { renderThingsPage };
