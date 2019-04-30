$(document).ready(function() {
	let one = document.getElementById("1");
	let two = document.getElementById("2");
	let three = document.getElementById("3");

	$(one).hide();
	$(two).hide();
	$(three).show();

	$(".eraser-img").click(function() {
		let hasOne = $(this).hasClass("1");
		let hasTwo = $(this).hasClass("2");

		if(hasOne) {
			$(one).show();
			$(two).hide();
			$(three).hide();
		} else if (hasTwo) {
			$(one).hide();
			$(two).show();
			$(three).hide();
		}
	})

	$(".chalk").click(function() {
		let hasThree = $(this).hasClass("3");
		let hasTwo = $(this).hasClass("2");

		if(hasThree) {
			$(one).hide();
			$(two).hide();
			$(three).show();
		} else if (hasTwo) {
			$(one).hide();
			$(two).show();
			$(three).hide();
		}
	})

});
