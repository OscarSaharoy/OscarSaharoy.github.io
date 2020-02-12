// Heron Creative 2020

window.onscroll = function() {scoll_progress()};

function scoll_progress() {

	var maxWidth  = document.querySelector(".bar-bg").offsetWidth;
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	var height    = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	var scrolled  = (winScroll / height) * maxWidth;
	//document.querySelector(".bar-fg").style.transform = "scaleX(" + scrolled + ")";
	document.querySelector(".bar-fg").style.width = scrolled + "px";
}

