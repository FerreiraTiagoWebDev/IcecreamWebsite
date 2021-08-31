// const BTN = document.getElementById("submit");
// const TYPE = document.getElementsByClassName("typeOfIcecream").checked;
// const FLAVOUR1 = document.getElementsByClassName("firstFlavour").value;
// const FLAVOUR2 = document.getElementsByClassName("secondFlavour").value;
// const FLAVOUR3 = document.getElementsByClassName("thirdFlavour").value;

// function myFunction() {
//   let recipient = document.forms[0];
//   let txt1 = "";
//   let i;
//   for (i = 0; i < recipient.length; i++) {
//     if (recipient[i].checked) {
//       txt1 = txt1 + recipient[i].value + " ";
//     }
//   }

//   document.getElementById("result1").innerHTML =
//     "You ordered an icecream in a: " + txt1;
// }

function typefunction(event) {
  let selectElement = event.target;
  let value1 = selectElement.value;
  document.getElementById("result1").innerHTML = "Icecream: " + value1;
}

function fla1function(event) {
  let selectElement = event.target;
  let value1 = selectElement.value;
  document.getElementById("result2").innerHTML = "First Flavour: " + value1;
}
function fla2function(event) {
  let selectElement = event.target;
  let value2 = selectElement.value;
  document.getElementById("result3").innerHTML = "Second flavour: " + value2;
}
function fla3function(event) {
  let selectElement = event.target;
  let value3 = selectElement.value;
  document.getElementById("result4").innerHTML = "Third flavour: " + value3;
}

//Appear images on result
//CUP or Cone
function AppearTypeImg(bg) {
  if (bg == "Cup") {
    document.getElementById("ecard3").innerHTML =
      '<img width="auto" height="400" src="img/cupImg.png">';
  } else if (bg == "Cone") {
    document.getElementById("ecard3").innerHTML =
      '<img width="auto" height="350" src="img/cone.png">';
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
