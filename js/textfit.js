// Heron Creative 2020

function textfit() {

	var rem   = parseFloat(getComputedStyle(document.documentElement).fontSize);

	var ids   = ["portfolio-title", "what-we-offer-title", "about-us-title", "contact-us-title"];
	var ars   = [0.186, 0.12, 0.15, 0.1];


	for(var i = 0; i < ids.length; ++i) {

		var text  = document.getElementById(ids[i]);
		var ratio = ars[i];
		var width = Math.min(window.innerWidth - 8*rem, 80*rem);

		text.style.fontSize = width * ratio + "px";
	}
}

window.addEventListener("resize", textfit);
window.addEventListener("DOMContentLoaded", textfit);