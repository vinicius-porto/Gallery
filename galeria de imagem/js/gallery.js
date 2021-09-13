const mdgallery1 = document.getElementById("mdgallery1");

mdgallery1.addEventListener("click", function () {
  if ((document.getElementById("modalpic1").style.display = "block")) {
    document.querySelector("body").style.backgroundColor = "black";
  }
 
  if ((document.querySelector(".container-gallery").style.display = "flex")) {
    document.querySelector(".container-gallery").style.display = "none";
    document.querySelector("body").style.background = "#131313";
    document.querySelector("body").style.backgroundBlendMode = "overlay";
    document.querySelector("body").style.backgroundPosition = "center";
    document.querySelector("body").style.backgroundSize = "cover";
    document.querySelector("body").style.backgroundRepeat = "no-repeat";
    document.querySelector("body").style.backgroundAttachment = "fixed";
    document.querySelector("body").style.backgroundImage =
      'url("img/36916352320_e581b2683b_h.jpg")';
    document.querySelector("h1").style.color = "white";
  }

  const modalpic1 = document.getElementById("modalpic1");

  modalpic1.addEventListener("click", function () {
    document.getElementById("modalpic1").style.display = "none";
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector(".container-gallery").style.display = "flex";
    document.querySelector("h1").style.color = "black";
  });
});

const mdgallery2 = document.getElementById("mdgallery2");

mdgallery2.addEventListener("click", function () {
  if ((document.getElementById("modalpic2").style.display = "block")) {
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("h1").style.color = "white";
  }

  if ((document.querySelector(".container-gallery").style.display = "flex")) {
    document.querySelector(".container-gallery").style.display = "none";
    document.querySelector("body").style.background = "#131313";
    document.querySelector("body").style.backgroundBlendMode = "overlay";
    document.querySelector("body").style.backgroundPosition = "center";
    document.querySelector("body").style.backgroundSize = "cover";
    document.querySelector("body").style.backgroundRepeat = "no-repeat";
    document.querySelector("body").style.backgroundAttachment = "fixed";
    document.querySelector("body").style.backgroundImage =
      'url("img/36916352320_e581b2683b_h.jpg")';
  }
});

const modalpic2 = document.getElementById("modalpic2");

modalpic2.addEventListener("click", function () {
  document.getElementById("modalpic2").style.display = "none";
  document.querySelector("body").style.backgroundColor = "white";
  document.querySelector(".container-gallery").style.display = "flex";
  document.querySelector("h1").style.color = "black";
});

const mdgallery3 = document.getElementById("mdgallery3");

mdgallery3.addEventListener("click", function () {
  if ((document.getElementById("modalpic3").style.display = "block")) {
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("h1").style.color = "white";
  }

  if ((document.querySelector(".container-gallery").style.display = "flex")) {
    document.querySelector(".container-gallery").style.display = "none";
    document.querySelector("body").style.background = "#131313";
    document.querySelector("body").style.backgroundBlendMode = "overlay";
    document.querySelector("body").style.backgroundPosition = "center";
    document.querySelector("body").style.backgroundSize = "cover";
    document.querySelector("body").style.backgroundRepeat = "no-repeat";
    document.querySelector("body").style.backgroundAttachment = "fixed";
    document.querySelector("body").style.backgroundImage =
      'url("img/WRX_Portugal_2016_009.jpg")';
  }
});
const modalpic3 = document.getElementById("modalpic3");

modalpic3.addEventListener("click", function () {
  document.getElementById("modalpic3").style.display = "none";
  document.querySelector("body").style.backgroundColor = "white";
  document.querySelector(".container-gallery").style.display = "flex";
  document.querySelector("h1").style.color = "black";
});

const mdgallery4 = document.getElementById("mdgallery4");
mdgallery4.addEventListener("click", function () {
  //document.querySelector(".container-gallery").style.display = 'none';

  if ((document.getElementById("modalpic4").style.display = "block")) {
    document.querySelector("body").style.background = "#131313";
    document.querySelector("body").style.backgroundBlendMode = "overlay";
    document.querySelector("body").style.backgroundPosition = "center";
    document.querySelector("body").style.backgroundSize = "cover";
    document.querySelector("body").style.backgroundRepeat = "no-repeat";
    document.querySelector("body").style.backgroundAttachment = "fixed";
    document.querySelector("body").style.backgroundImage =
      'url("img/HRD_0790-display.jpg")';
    document.querySelector(".container-gallery").style.display = "none";
    document.querySelector("h1").style.color = "white";
  }
});

const modalpic4 = document.getElementById("modalpic4");
modalpic4.addEventListener("click", function () {
  document.querySelector(".container-gallery").style.display = "flex";

  if ((document.getElementById("modalpic4").style.display = "block")) {
    document.getElementById("modalpic4").style.display = "none";
    document.querySelector(".container-gallery").style.display = "flex";
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("h1").style.color = "black";
  }
});

const mdgallery5 = document.getElementById("mdgallery5");
mdgallery5.addEventListener("click", function () {
  //document.querySelector(".container-gallery").style.display = 'none';

  if ((document.getElementById("modalpic5").style.display = "block")) {
    document.querySelector("body").style.background = "#131313";
    document.querySelector("body").style.backgroundBlendMode = "overlay";
    document.querySelector("body").style.backgroundPosition = "center";
    document.querySelector("body").style.backgroundSize = "cover";
    document.querySelector("body").style.backgroundRepeat = "no-repeat";
    document.querySelector("body").style.backgroundAttachment = "fixed";
    document.querySelector("body").style.backgroundImage =
      'url("img/fordfocusrsrx-01.jpg")';
    document.querySelector(".container-gallery").style.display = "none";
    document.querySelector("h1").style.color = "white";
  }
});

const modalpic5 = document.getElementById("modalpic5");
modalpic5.addEventListener("click", function () {
  document.querySelector(".container-gallery").style.display = "flex";

  if ((document.getElementById("modalpic5").style.display = "block")) {
    document.getElementById("modalpic5").style.display = "none";
    document.querySelector(".container-gallery").style.display = "flex";
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("h1").style.color = "black";
  }
});
