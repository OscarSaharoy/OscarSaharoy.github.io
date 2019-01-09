
var whole = document.getElementById("whole");

whole.addEventListener("click", clickPosition, false);

function toggleMenu() {

	var menu      = document.getElementById("menu"),
		menuIcon  = document.getElementById("menuIcon"),
		collapsed = (menu.style.right != "0px");

	if (collapsed) { 

		menu.style.right     = "0px";
		menuIcon.src         = "assets/cross.png";
        menu.style.boxShadow = "0 0 0rem 4000px rgba(0,0,0,0.15)"

	} else {

		menu.style.right     = "-20.5rem";
		menuIcon.src         = "assets/hamburger.png";
        menu.style.boxShadow = "0 0 0rem 4000px rgba(0,0,0,0)"

	} 

}

function clickPosition(event) {

	var menu      = document.getElementById("menu"),
		menuIcon  = document.getElementById("menuIcon"),
		collapsed = (menu.style.right != "0px"),
		inMenu    = menu.contains(event.target) || menuIcon === event.target;

	if (!inMenu && !collapsed) {
		toggleMenu()
	}

}