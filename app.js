//NAV BAR

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.55
        }s`;
      }
    });
    //Burger Animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

//Appear images on result
//CUP or Cone
function AppearTypeImg(bg) {
  if (bg == "Cup") {
    document.getElementById("ecard3").innerHTML =
      '<img width="auto" height="400" src="img/cupImg.png">';

  } else if (bg == "Cone") {
    document.getElementById("ecard3").innerHTML =
      '<img width="auto" height="300" src="img/cone.png">';
  }
}
//Flavour 1 Image

function AppearFlavourImg1(td) {
  if (td == "Cherry") {
    document.getElementById("ecard2").innerHTML =
      '<img width="175" height="auto" src="img/cherryball.png">';
  } else if (td == "Blueberry") {
    document.getElementById("ecard2").innerHTML =
      '<img width="215" height="auto" src="img/blueberryball.png">';
  } else if (td == "Strawberry") {
    document.getElementById("ecard2").innerHTML =
      '<img width="155" height="auto" src="img/strawberryball.png">';
  } else if (td == "Orange") {
    document.getElementById("ecard2").innerHTML =
      '<img width="155" height="auto" src="img/orangeball.png">';
  } else if (td == "Pistachio") {
    document.getElementById("ecard2").innerHTML =
      '<img width="125" height="auto" src="img/pistachioball.png">';
  } else if (td == "Almond") {
    document.getElementById("ecard2").innerHTML =
      '<img width="165" height="auto" src="img/almondball.png">';
  } else if (td == "None") {
    document.getElementById("ecard2").innerHTML =
      '<img width="0" height="0" src="img/almondball.png">';
  }
  document.getElementById("ecard2").style.animation =
    "spin2 4s linear infinite";
}
//Flavour 2 image
function AppearFlavourImg2(td) {
  if (td == "Cherry") {
    document.getElementById("ecard1").innerHTML =
      '<img width="175" height="auto" src="img/cherryball.png">';
  } else if (td == "Blueberry") {
    document.getElementById("ecard1").innerHTML =
      '<img width="215" height="auto" src="img/blueberryball.png">';
  } else if (td == "Strawberry") {
    document.getElementById("ecard1").innerHTML =
      '<img width="145" height="auto" src="img/strawberryball.png">';
  } else if (td == "Orange") {
    document.getElementById("ecard1").innerHTML =
      '<img width="155" height="auto" src="img/orangeball.png">';
  } else if (td == "Pistachio") {
    document.getElementById("ecard1").innerHTML =
      '<img width="125" height="auto" src="img/pistachioball.png">';
  } else if (td == "Almond") {
    document.getElementById("ecard1").innerHTML =
      '<img width="165" height="auto" src="img/almondball.png">';
  } else if (td == "None") {
    document.getElementById("ecard1").innerHTML =
      '<img width="0" height="0" src="img/almondball.png">';
  }
  document.getElementById("ecard1").style.animation =
    "spin2 4s linear infinite";
}
//Flavour 3 image
function AppearFlavourImg3(td) {
  var AFI3 = td;
  if (AFI3 == "Cherry") {
    document.getElementById("ecard").innerHTML =
      '<img width="175" height="auto" src="img/cherryball.png">';
  } else if (td == "Blueberry") {
    document.getElementById("ecard").innerHTML =
      '<img width="215" height="auto" src="img/blueberryball.png">';
  } else if (td == "Strawberry") {
    document.getElementById("ecard").innerHTML =
      '<img width="145" height="auto" src="img/strawberryball.png">';
  } else if (td == "Orange") {
    document.getElementById("ecard").innerHTML =
      '<img width="155" height="auto" src="img/orangeball.png">';
  } else if (td == "Pistachio") {
    document.getElementById("ecard").innerHTML =
      '<img width="125" height="auto" src="img/pistachioball.png">';
  } else if (td == "Almond") {
    document.getElementById("ecard").innerHTML =
      '<img width="165" height="auto" src="img/almondball.png">';
  } else if (td == "None") {
    document.getElementById("ecard").innerHTML =
      '<img width="0" height="0" src="img/almondball.png">';
  }
  document.getElementById("ecard").style.animation = "spin2 4s linear infinite";
}
function resetForm(event) {
  document.getElementById("ecard").innerHTML =
    '<img width="0" height="0" src="img/almondball.png">';
  document.getElementById("ecard1").innerHTML =
    '<img width="0" height="0" src="img/almondball.png">';
  document.getElementById("ecard2").innerHTML =
    '<img width="0" height="0" src="img/almondball.png">';
  document.getElementById("ecard3").innerHTML =
    '<img width="0" height="0" src="img/almondball.png">';
}
