// Heron Creative 2020

function setrem() {

	var dpr   = window.devicePixelRatio;
	var width = document.documentElement.clientWidth;

	var rem   = Math.max(0.5, -0.000112 * width - 1.01 * dpr + 2.43);

	document.documentElement.style.setProperty('--main-font-size', rem + "em");
}

window.addEventListener('resize', setrem);
setrem()