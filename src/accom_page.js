const renderAccomPage = () => {
  var airbnb = "https://www.airbnb.co.uk/rooms/7108208";

  var middle = document.getElementsByClassName("middle")[0];

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

  var left = document.createElement("btn");
  var right = document.createElement("btn");

  middle.appendChild(airb1);
  middle.appendChild(airb2);
  middle.appendChild(airb3);
  middle.appendChild(airb4);
  middle.appendChild(left);
  middle.appendChild(right);
};

export { renderAccomPage };
