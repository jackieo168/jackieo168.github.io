$(document).ready(function() {

	var slider1 = document.getElementById("soln1");
	var slider2 = document.getElementById("soln2");
	var slider3 = document.getElementById("soln3")


	function getSoln1() {
		let val1 = slider1.value;
		var solnstr1 = "View Solution";
		var solnLink1 = solnstr1.link("https://drive.google.com/file/d/1iCNsA4oY4nAucU4iCI9UdcmD6_zHh0uk/view?usp=sharing");
		if(val1 == 100) {
			document.getElementById("soln1link").innerHTML = solnLink1;
		} else {
			document.getElementById("soln1link").innerHTML = "";
		}		
	}

	function getSoln2() {
		let val2 = slider2.value;
		var solnstr2 = "View Solution";
		var solnLink2 = solnstr2.link("https://drive.google.com/file/d/1oUevDtiIc69Z0vH-VVoHB-fegxS6PZIb/view?usp=sharing");
		if(val2 == 100) {
			document.getElementById("soln2link").innerHTML = solnLink2;
		} else {
			document.getElementById("soln2link").innerHTML = "";	
		}
	}

	function getSoln3() {
		let val3 = slider3.value;
		var solnstr3 = "View Solution";
		var solnLink3 = solnstr3.link("https://drive.google.com/file/d/1Eid5QBZO-XszA2A7p10Ayo0iHTxLBcD5/view?usp=sharing");
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
