const renderWherePage = () => {
  var middle = document.getElementsByClassName("middle")[0];

  var page_title = document.createElement("DIV");
  page_title.classList.add("page_title");
  var page_title_text = document.createTextNode("Where is Budapest?");
  page_title.appendChild(page_title_text);
  middle.append(page_title);

  var map = document.createElement("IMG");
  map.setAttribute("src", "img/budapestmap.gif");
  map.classList.add("map");
  middle.append(map);

  var buda = document.createElement("DIV");
  buda.classList.add("budamap");
  var buda_text1 = document.createTextNode(
    "Budapest is the capital and the most populous city of Hungary, and the tenth-largest city in the European Union. The city has an estimated population of 1,752,286."
  );
  var buda_text2 = document.createTextNode(
    "Hungary borders Slovakia to the north, Ukraine to the northeast, Austria to the northwest, Romania to the east, Serbia to the south, Croatia to the southwest, and Slovenia to the west."
  );

  var br = document.createElement('br');
  buda.appendChild(buda_text1);
  buda.appendChild(br);
  buda.appendChild(br);
  buda.appendChild(buda_text2);
  middle.appendChild(buda);
};

export { renderWherePage };
