import { renderMainPage, deblur } from "./reveal_page";
import { renderAccomPage } from "./accom_page";
import { renderThingsPage } from "./things_page";
import { renderWherePage } from "./where_page";

const renderTabs = () => {
  var container = document.getElementById("content");
  var tabs = document.createElement("DIV");
  tabs.classList.add("tabs");

  var puzzle = document.createElement("DIV");
  puzzle.setAttribute("ID", "puzzle");
  puzzle.classList.add("tab");
  puzzle.addEventListener("click", function() {
    clickTab("puzzle");
    removeMiddle();
    renderMainPage();
    deblur();
  });
  var puzzle_image = document.createElement("IMG");
  puzzle_image.setAttribute("src", "img/puzzle.png");
  puzzle_image.classList.add("icon");
  var puzzle_text_box = document.createElement("DIV");
  puzzle_text_box.classList.add("tab_text");
  var puzzle_text = document.createTextNode("Secret City");
  puzzle.appendChild(puzzle_image);
  puzzle_text_box.appendChild(puzzle_text);
  puzzle.appendChild(puzzle_text_box);
  tabs.appendChild(puzzle);

  var location = document.createElement("DIV");
  location.classList.add("tab");
  location.setAttribute("ID", "location");
  location.addEventListener("click", function() {
    clickTab("location");
    removeMiddle();
    renderWherePage();
  });
  var location_image = document.createElement("IMG");
  location_image.setAttribute("src", "img/location.png");
  location_image.classList.add("icon");
  var location_text_box = document.createElement("DIV");
  location_text_box.classList.add("tab_text");
  var location_text = document.createTextNode("Where!?");
  location.appendChild(location_image);
  location_text_box.appendChild(location_text);
  location.appendChild(location_text_box);
  tabs.appendChild(location);

  var accom = document.createElement("DIV");
  accom.classList.add("tab");
  accom.setAttribute("ID", "accom");
  accom.addEventListener("click", function() {
    clickTab("accom");
    removeMiddle();
    renderAccomPage();
  });
  var accom_image = document.createElement("IMG");
  accom_image.setAttribute("src", "img/home.png");
  accom_image.classList.add("icon");
  var accom_text_box = document.createElement("DIV");
  accom_text_box.classList.add("tab_text");
  var accom_text = document.createTextNode("Accomodation");
  accom.appendChild(accom_image);
  accom_text_box.appendChild(accom_text);
  accom.appendChild(accom_text_box);
  tabs.appendChild(accom);

  var photo = document.createElement("DIV");
  photo.classList.add("tab");
  photo.addEventListener("click", function() {
    clickTab("photo");
    removeMiddle();
    renderThingsPage();
  });
  photo.setAttribute("ID", "photo");
  var photo_image = document.createElement("IMG");
  photo_image.setAttribute("src", "img/photos.png");
  photo_image.classList.add("icon");
  var photo_text_box = document.createElement("DIV");
  photo_text_box.classList.add("tab_text");
  var photo_text = document.createTextNode("Things to do");
  photo.appendChild(photo_image);
  photo_text_box.appendChild(photo_text);
  photo.appendChild(photo_text_box);
  tabs.appendChild(photo);

  container.appendChild(tabs);
};

const clickTab = tab => {
  var icons = document.getElementsByClassName("icon");
  for (var i = 0; i < icons.length; i++) {
    icons[i].style.filter = "grayscale(93%)";
  }
  var texts = document.getElementsByClassName("tab_text");
  for (var i = 0; i < texts.length; i++) {
    texts[i].style.color = "rgb(100, 100, 100)";
  }

  var colorTab = document.getElementById(tab);
  colorTab.firstChild.style.filter = "none";
  colorTab.lastChild.style.color = "black";
};

const removeMiddle = () => {
  var mid = document.getElementsByClassName("middle")[0];
  while (mid.firstChild) {
    mid.removeChild(mid.firstChild);
  }
};

export { renderTabs, clickTab };
