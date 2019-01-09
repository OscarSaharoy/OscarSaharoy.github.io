
$(document).ready(function(){

	$(".project").mouseover(function(){
	
		if ($(window).width() >= 768){

			$(this).children('.caption').css("top", "0rem");

		};

	});


	$(".project").mouseout(function(){

		$(this).children('.caption').css("top", "6rem");

	});


});