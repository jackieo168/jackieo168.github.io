$(document).ready(function() {
	let trguide = document.getElementById("tailrecursion guide"); //the actual guide
	let OOPguide = document.getElementById("OOP guide");
	let nonlocalguide = document.getElementById("nonlocal guide");
	
	// consolidate into function
	$(trguide).hide();
	$(OOPguide).hide();
	$(nonlocalguide).hide();


	// jQuery
	$(".button").click(function () {
		let hastr = $(this).hasClass("tailrecursion");
		let hasOOP = $(this).hasClass("OOP");
		let hasnonlocal = $(this).hasClass("nonlocal");


		if(hastr) {
			$(trguide).toggle();
		} else if (hasOOP) {
			$(OOPguide).toggle();
		} else if (hasnonlocal) {
			$(nonlocalguide).toggle();
		} 
	})

});