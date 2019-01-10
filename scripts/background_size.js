
function set_size(event) {

	var div    		  = document.getElementById("background-container"),
		window_height = document.documentElement.clientHeight;

	var height_string = window_height + "px"

	div.setAttribute("style", "height: "+height_string);

}