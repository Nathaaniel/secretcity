const renderMiddle = () => {
  var container = document.getElementById("content");
  var middle = document.createElement("DIV");
  middle.classList.add("middle");
  container.appendChild(middle);
};

const renderMainPage = () => {
  var middle = document.getElementsByClassName("middle")[0];
  document.body.style.backgroundImage = "url('img/backing.png')";
  document.body.style.backgroundSize = "60vh";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundAttachment = "fixed";

  var title = document.createElement("DIV");
  title.classList.add("title");
  var titleText = document.createTextNode("Tap to reveal destination");

  var image = document.createElement("IMG");
  image.setAttribute("src", "img/budapest.jpg");
  image.setAttribute("ID", "city");

  image.classList.add("city");
  image.addEventListener("click", function() {
    deblur();
  });

  var reveal = document.createElement("DIV");
  reveal.classList.add("reveal");
  var revealText = document.createTextNode("BUDAPEST");

  title.appendChild(titleText);
  reveal.appendChild(revealText);
  middle.appendChild(title);
  middle.appendChild(image);
  middle.appendChild(reveal);
};

const deblur = () => {
  document.getElementById("city").style.filter = "none";
  document.getElementById("city").style.width = "100%";
  document.getElementById("city").style.height = "48vh";
  document.getElementById("city").style.transitionDuration = "2.5s";
  document.getElementsByClassName("reveal")[0].style.opacity = "1";
  document.getElementsByClassName("reveal")[0].style.transitionDuration = "10s";
  document.getElementsByClassName("title")[0].style.display = "none";
};

export { renderMainPage, deblur, renderMiddle };
