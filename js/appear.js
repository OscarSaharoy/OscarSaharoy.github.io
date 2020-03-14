// Heron Creative 2020

function appear() {

	var appear_divs = Array.from(document.querySelectorAll(".appear"));

	function updateAppear() {

		for(var i=0; i<appear_divs.length; ++i) {

			var div        = appear_divs[i];
			var rect       = div.getBoundingClientRect();
			var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
			var onscreen   = (rect.top - viewHeight) <= 0;


			if(onscreen) {
				div.classList.remove("appear");
				div.classList.add("slide-up-fade");

				appear_divs.splice(i, 1);
				--i;
			}
		}
	}

	document.addEventListener("scroll", updateAppear);
}

document.addEventListener("DOMContentLoaded", appear);