// Heron Creative 2020

var hamburger  = document.querySelector(".hamburger");
var body       = document.querySelector(".body");
var menu       = document.querySelector(".menu");

var menulinks = document.querySelectorAll(".menulink");

for(var u = 0; u < menulinks.length; ++u) {

	menulinks[u].addEventListener("click", toggleMenu);
}

function toggleMenu() {

	hamburger.classList.toggle("is-active");
	body.classList.toggle("lock-scroll");
	menu.classList.toggle("menu-open");
}

function getStarted() {

	document.querySelector("#contact-us").scrollIntoView();
}

hamburger.addEventListener("click", toggleMenu);