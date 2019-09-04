$(document).ready(function() {
	let one = document.getElementById("1");
	let two = document.getElementById("2");
	let three = document.getElementById("3");
	let four = document.getElementById("4");
	let five = document.getElementById("5");
	let six = document.getElementById("6");
	let seven = document.getElementById("7");
	let eight = document.getElementById("8");
	let nine = document.getElementById("9");
	let ten = document.getElementById("10");
	let eleven = document.getElementById("11");
	let twelve = document.getElementById("12");
	let thirteen = document.getElementById("13");
	let fourteen = document.getElementById("14");
	let fifteen = document.getElementById("15");
	let sixteen = document.getElementById("16");
	let seventeen = document.getElementById("17");

	$(one).hide();
	$(two).show();
	$(three).hide();
	$(four).hide();
	$(five).hide();
	$(six).hide();
	$(seven).hide();
	$(eight).hide();
	$(nine).hide();
	$(ten).hide();
	$(eleven).hide();
	$(twelve).hide();
	$(thirteen).hide();
	$(fourteen).hide();
	$(fifteen).hide();
	$(sixteen).hide();
	$(seventeen).hide();

	// $(".eraser-img").click(function() {
	$(".chalkb").click(function() {
		let hasOne = $(this).hasClass("1");
		let hasTwo = $(this).hasClass("2");
		let hasThree = $(this).hasClass("3");
		let hasFour = $(this).hasClass("4");
		let hasFive = $(this).hasClass("5");
		let hasSix = $(this).hasClass("6");
		let hasSeven = $(this).hasClass("7");
		let hasEight = $(this).hasClass("8");
		let hasNine = $(this).hasClass("9");
		let hasTen = $(this).hasClass("10");
		let hasEleven = $(this).hasClass("11");
		let hasTwelve = $(this).hasClass("12");
		let hasThirteen = $(this).hasClass("13");
		let hasFourteen = $(this).hasClass("14");
		let hasFifteen = $(this).hasClass("15");
		let hasSixteen = $(this).hasClass("16");

		if(hasOne) {
			$(one).show();
			$(two).hide();
		} else if (hasTwo) {
			$(two).show();
			$(three).hide();
		} else if (hasThree) {
			$(three).show();
			$(four).hide();
		} else if (hasFour) {
			$(four).show();
			$(five).hide();
		} else if (hasFive) {
			$(five).show();
			$(six).hide();
		} else if (hasSix) {
			$(six).show();
			$(seven).hide();
		} else if (hasSeven) {
			$(seven).show();
			$(eight).hide();
		} else if (hasEight) {
			$(eight).show();
			$(nine).hide();
		} else if (hasNine) {
			$(nine).show();
			$(ten).hide();
		} else if (hasTen) {
			$(ten).show();
			$(eleven).hide();
		} else if (hasEleven) {
			$(eleven).show();
			$(twelve).hide();
		} else if (hasTwelve) {
			$(twelve).show();
			$(thirteen).hide();
		} else if (hasThirteen) {
			$(thirteen).show();
			$(fourteen).hide();
		} else if (hasFourteen) {
			$(fourteen).show();
			$(fifteen).hide();
		} else if (hasFifteen) {
			$(fifteen).show();
			$(sixteen).hide();
		} else if (hasSixteen) {
			$(sixteen).show();
			$(seventeen).hide();
		} 
	})

	$(".chalk").click(function() {
		let hasTwo = $(this).hasClass("2");
		let hasThree = $(this).hasClass("3");
		let hasFour = $(this).hasClass("4");
		let hasFive = $(this).hasClass("5");
		let hasSix = $(this).hasClass("6");
		let hasSeven = $(this).hasClass("7");
		let hasEight = $(this).hasClass("8");
		let hasNine = $(this).hasClass("9");
		let hasTen = $(this).hasClass("10");
		let hasEleven = $(this).hasClass("11");
		let hasTwelve = $(this).hasClass("12");
		let hasThirteen = $(this).hasClass("13");
		let hasFourteen = $(this).hasClass("14");
		let hasFifteen = $(this).hasClass("15");
		let hasSixteen = $(this).hasClass("16");
		let hasSeventeen = $(this).hasClass("17");

		if (hasTwo) {
			$(two).show();
			$(one).hide();
		} else if (hasThree) {
			$(three).show();
			$(two).hide();
		} else if (hasFour) {
			$(four).show();
			$(three).hide();
		} else if (hasFive) {
			$(five).show();
			$(four).hide();
		} else if (hasSix) {
			$(six).show();
			$(five).hide();
		} else if (hasSeven) {
			$(seven).show();
			$(six).hide();
		} else if (hasEight) {
			$(eight).show();
			$(seven).hide();
		} else if (hasNine) {
			$(nine).show();
			$(eight).hide();
		} else if (hasTen) {
			$(ten).show();
			$(nine).hide();
		} else if (hasEleven) {
			$(eleven).show();
			$(ten).hide();
		} else if (hasTwelve) {
			$(twelve).show();
			$(eleven).hide();
		} else if (hasThirteen) {
			$(thirteen).show();
			$(twelve).hide();
		} else if (hasFourteen) {
			$(fourteen).show();
			$(thirteen).hide();
		} else if (hasFifteen) {
			$(fifteen).show();
			$(fourteen).hide();
		} else if (hasSixteen) {
			$(sixteen).show();
			$(fifteen).hide();
		} else if (hasSeventeen) {
			$(seventeen).show();
			$(sixteen).hide();
		} 
	})

});
