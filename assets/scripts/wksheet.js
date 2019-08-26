$(document).ready(function() {

	var slider1 = document.getElementById("soln1");
	var slider2 = document.getElementById("soln2");
	var slider3 = document.getElementById("soln3");
	// var slider4 = document.getElementById("soln1");
	// var slider5 = document.getElementById("soln2");
	// var slider6 = document.getElementById("soln3");
	// var slider7 = document.getElementById("soln1");
	// var slider8 = document.getElementById("soln2");
	// var slider9 = document.getElementById("soln3");
	// var slider10 = document.getElementById("soln1");
	// var slider11 = document.getElementById("soln2");
	// var slider12 = document.getElementById("soln3");
	// var slider13 = document.getElementById("soln1");
	// var slider14 = document.getElementById("soln2");
	// var slider15 = document.getElementById("soln3");



	function getSoln1() {
		let val1 = slider1.value;
		var solnstr1 = "View Solution";
		var solnLink1 = solnstr1.link("");
		if(val1 == 100) {
			document.getElementById("soln1link").innerHTML = solnLink1;
		} else {
			document.getElementById("soln1link").innerHTML = "";
		}		
	}

	function getSoln2() {
		let val2 = slider2.value;
		var solnstr2 = "View Solution";
		var solnLink2 = solnstr2.link("");
		if(val2 == 100) {
			document.getElementById("soln2link").innerHTML = solnLink2;
		} else {
			document.getElementById("soln2link").innerHTML = "";	
		}
	}

	function getSoln3() {
		let val3 = slider3.value;
		var solnstr3 = "View Solution";
		var solnLink3 = solnstr3.link("");
		if(val3 == 100) {
     		document.getElementById("soln3link").innerHTML = solnLink3;
		} else {
  			document.getElementById("soln3link").innerHTML = "";
		}
	}

	document.getElementById("soln1").onchange = getSoln1;
	document.getElementById("soln2").onchange = getSoln2;
	document.getElementById("soln3").onchange = getSoln3;
});
