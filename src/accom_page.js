const renderAccomPage = () => {
  var middle = document.getElementsByClassName("middle")[0];

  var page_title = document.createElement("DIV");

  var page_title_a = document.createElement("A");

  page_title.classList.add("page_title");
  var page_title_text = document.createTextNode(
    "Elizabeth Boulevard Apartment"
  );

  page_title_a.setAttribute("href", "https://www.airbnb.co.uk/rooms/7108208");
  page_title_a.setAttribute("target", "_blank");
  page_title_a.appendChild(page_title_text);
  page_title.appendChild(page_title_a);
  middle.appendChild(page_title);

  var airimg = document.createElement("DIV");
  airimg.classList.add("airimg")

  var airb1 = document.createElement("IMG");
  airb1.setAttribute("src", "img/airb1.jpg");
  airb1.classList.add("airimages");

  var airb2 = document.createElement("IMG");
  airb2.setAttribute("src", "img/airb2.jpg");
  airb2.classList.add("airimages");

  var airb3 = document.createElement("IMG");
  airb3.setAttribute("src", "img/airb3.jpg");
  airb3.classList.add("airimages");

  var airb4 = document.createElement("IMG");
  airb4.setAttribute("src", "img/airb4.jpg");
  airb4.classList.add("airimages");

  var left = document.createElement("BUTTON");
  var right = document.createElement("BUTTON");
  left.classList.add("leftSlide", "arrow");
  right.classList.add("rightSlide", "arrow");
  left.addEventListener("click", function() {
    plusDivs(-1);
  });
  right.addEventListener("click", function() {
    plusDivs(+1);
  });
  var leftText = document.createTextNode("<");
  var rightText = document.createTextNode(">");

  var spanner1 = document.createElement("DIV");
  spanner1.classList.add("empty");
  spanner1.addEventListener("click", function() {
    currentDivs(1);
  });

  var spanner2 = document.createElement("DIV");
  spanner2.classList.add("empty");
  spanner2.addEventListener("click", function() {
    currentDivs(2);
  });

  var spanner3 = document.createElement("DIV");
  spanner3.classList.add("empty");
  spanner3.addEventListener("click", function() {
    currentDivs(3);
  });

  var spanner4 = document.createElement("DIV");
  spanner4.classList.add("empty");
  spanner4.addEventListener("click", function() {
    currentDivs(4);
  });

  var bottom = document.createElement("DIV");
  bottom.classList.add("bottom");

  var dots = document.createElement("DIV");
  dots.classList.add("dots");

  left.appendChild(leftText);
  right.appendChild(rightText);

  airimg.appendChild(airb1);
  airimg.appendChild(airb2);
  airimg.appendChild(airb3);
  airimg.appendChild(airb4);
  middle.appendChild(airimg);
  bottom.appendChild(left);

  dots.appendChild(spanner1);
  dots.appendChild(spanner2);
  dots.appendChild(spanner3);
  dots.appendChild(spanner4);
  bottom.appendChild(dots);
  bottom.appendChild(right);
  airimg.appendChild(bottom);

  var plusDivs = num => {
    showDivs((slideIndex += num));
  };

  var currentDivs = num => {
    showDivs((slideIndex = num));
  };

  const showDivs = num => {
    var i;
    var x = document.getElementsByClassName("airimages");
    var dotters = document.getElementsByClassName("empty");
    if (num > x.length) {
      slideIndex = 1;
    }
    if (num < 1) {
      slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";

    for (i = 0; i < dotters.length; i++) {
      dotters[i].classList.remove("filled");
    }

    dotters[slideIndex - 1].className += " filled";
  };

  var slideIndex = 1;
  showDivs(slideIndex);
};

export { renderAccomPage };
