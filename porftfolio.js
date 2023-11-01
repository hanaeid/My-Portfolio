window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}



var word = document.getElementById("word");
var front = document.getElementById("front");
var active = document.getElementsByClassName(".active");

  function frontendfun() {

if (front.style.display === "flex") {
  word.style.display = "none"
  active.style.color = "black"



} else if (front.style.display === "none") {
  front.style.display = "flex";
  word.style.display = "none";

}
else {
  word.style.display = "none";

}
}

function wordpressfun() {
if (word.style.display === "flex") {
  front.style.display = "none"
} else if (word.style.display === "none"){
  word.style.display = "flex";
  front.style.display = "none";
} else {
  front.style.display = "none";

}

}
function allfun() {
  if ( front.style.display === "none" && word.style.display === "none"){
  front.style.display = "flex";
  word.style.display = "flex";
  } else if (front.style.display === "none" && word.style.display === "flex"){
      front.style.display = "flex";
  word.style.display = "flex";
  } else if (front.style.display === "flex" && word.style.display === "none"){
      front.style.display = "flex";
  word.style.display = "flex";
  } else {
      front.style.display = "flex";
  word.style.display = "flex";
  }

}

