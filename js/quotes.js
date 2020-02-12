// Heron Creative 2020

var quotes = document.querySelectorAll(".quote");

var quote_number = 0;

function update_quotes() {

	for(var i = 0; i < quotes.length; ++i) {

		if(i < quote_number) {
			quotes[i].style.transform = "translateX(-100vw)";
		}
		else if(i == quote_number) {
			quotes[i].style.transform = "";
		}
		else if(i > quote_number) {
			quotes[i].style.transform = "translateX(100vw)";
		}
	}

	document.getElementById("left-arrow").style.visibility  = quote_number == 0               ? "hidden" : "visible";
	document.getElementById("right-arrow").style.visibility = quote_number == quotes.length-1 ? "hidden" : "visible";
}

function scroll_left() {

	if(quote_number > 0 ) {
		--quote_number;
		update_quotes();
	}
}

function scroll_right() {

	if(quote_number < quotes.length-1 ) {
		++quote_number;
		update_quotes();
	}
}

update_quotes();

