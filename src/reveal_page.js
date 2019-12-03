const renderMainPage = () => {
  var container = document.getElementById("content");

  document.body.style.backgroundImage = "url('img/backing.png')";
  document.body.style.backgroundSize = "125%";
  document.body.style.backgroundRepeat = "no-repeat";

  var middle = document.createElement("DIV");
  middle.classList.add("middle");

  var title = document.createElement("h1");
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
  var revealText = document.createTextNode("CITYCITY!");

  title.appendChild(titleText);
  reveal.appendChild(revealText);
  middle.appendChild(title);
  middle.appendChild(image);
  middle.appendChild(reveal);
  container.appendChild(middle);
};

const deblur = () => {
  document.getElementById("city").style.filter = "none";
  document.getElementById("city").style.width = "100%";
  document.getElementById("city").style.height = "40vh";
  document.getElementById("city").style.transitionDuration = "1s";
  document.getElementsByClassName("reveal")[0].style.display = "block";
  document.getElementsByClassName("reveal")[0].style.transitionDuration = "1s";
  document.getElementsByClassName("title")[0].style.fontSize = "0px";
  document.getElementsByClassName("reveal")[0].style.transitionDuration = "1s";
};

export { renderMainPage, deblur };
