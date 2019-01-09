
$(document).ready(function(){


	$(".project").mouseover(function(){

		$(this).children('.caption').css("top", "0rem");

	});


	$(".project").mouseout(function(){

		$(this).children('.caption').css("top", "6rem");

	});


});