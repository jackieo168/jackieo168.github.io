$(document).ready(function() {

	var slider0 = document.getElementById("soln0");
	var slider1 = document.getElementById("soln1");
	var slider2 = document.getElementById("soln2");
	var slider3 = document.getElementById("soln3");
	var slider4 = document.getElementById("soln4");
	var slider5 = document.getElementById("soln5");
	var slider6 = document.getElementById("soln6");
	var slider7 = document.getElementById("soln7");
	var slider9 = document.getElementById("soln9");
	var slider10 = document.getElementById("soln10");
	var slider11 = document.getElementById("soln11");
	var slider12 = document.getElementById("soln12");
	var slider14 = document.getElementById("soln14");



	function getSoln0() {
		let val0 = slider0.value;
		var solnstr0 = "View Solution";
		var solnLink0 = solnstr0.link("");
		if(val0 == 100) {
			document.getElementById("soln0link").innerHTML = solnLink0;
		} else {
			document.getElementById("soln0link").innerHTML = "";
		}		
	}

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

	function getSoln4() {
		let val4 = slider4.value;
		var solnstr4 = "View Solution";
		var solnLink4 = solnstr4.link("");
		if(val4 == 100) {
			document.getElementById("soln4link").innerHTML = solnLink4;
		} else {
			document.getElementById("soln4link").innerHTML = "";
		}		
	}

	function getSoln5() {
		let val5 = slider5.value;
		var solnstr5 = "View Solution";
		var solnLink5 = solnstr5.link("");
		if(val5 == 100) {
			document.getElementById("soln5link").innerHTML = solnLink5;
		} else {
			document.getElementById("soln5link").innerHTML = "";
		}		
	}

	function getSoln6() {
		let val6 = slider6.value;
		var solnstr6 = "View Solution";
		var solnLink6 = solnstr6.link("");
		if(val6 == 100) {
			document.getElementById("soln6link").innerHTML = solnLink6;
		} else {
			document.getElementById("soln6link").innerHTML = "";
		}		
	}

	function getSoln7() {
		let val7 = slider7.value;
		var solnstr7 = "View Solution";
		var solnLink7 = solnstr7.link("");
		if(val7 == 100) {
			document.getElementById("soln7link").innerHTML = solnLink7;
		} else {
			document.getElementById("soln7link").innerHTML = "";
		}		
	}

	function getSoln9() {
		let val9 = slider9.value;
		var solnstr9 = "View Solution";
		var solnLink9 = solnstr9.link("");
		if(val9 == 100) {
			document.getElementById("soln9link").innerHTML = solnLink9;
		} else {
			document.getElementById("soln9link").innerHTML = "";
		}		
	}

	function getSoln10() {
		let val10 = slider10.value;
		var solnstr10 = "View Solution";
		var solnLink10 = solnstr10.link("");
		if(val10 == 100) {
			document.getElementById("soln10link").innerHTML = solnLink10;
		} else {
			document.getElementById("soln10link").innerHTML = "";
		}		
	}

	function getSoln11() {
		let val11 = slider11.value;
		var solnstr11 = "View Solution";
		var solnLink11 = solnstr11.link("");
		if(val11 == 100) {
			document.getElementById("soln11link").innerHTML = solnLink11;
		} else {
			document.getElementById("soln11link").innerHTML = "";
		}		
	}

	function getSoln12() {
		let val12 = slider12.value;
		var solnstr12 = "View Solution";
		var solnLink12 = solnstr12.link("");
		if(val12 == 100) {
			document.getElementById("soln12link").innerHTML = solnLink12;
		} else {
			document.getElementById("soln12link").innerHTML = "";
		}		
	}

	function getSoln14() {
		let val14 = slider14.value;
		var solnstr14 = "View Solution";
		var solnLink14 = solnstr14.link("");
		if(val14 == 100) {
			document.getElementById("soln14link").innerHTML = solnLink14;
		} else {
			document.getElementById("soln14link").innerHTML = "";
		}		
	}
	document.getElementById("soln0").onchange = getSoln0;
	document.getElementById("soln1").onchange = getSoln1;
	document.getElementById("soln2").onchange = getSoln2;
	document.getElementById("soln3").onchange = getSoln3;
	document.getElementById("soln4").onchange = getSoln4;
	document.getElementById("soln5").onchange = getSoln5;
	document.getElementById("soln6").onchange = getSoln6;
	document.getElementById("soln7").onchange = getSoln7;
	document.getElementById("soln9").onchange = getSoln9;
	document.getElementById("soln10").onchange = getSoln10;
	document.getElementById("soln11").onchange = getSoln11;
	document.getElementById("soln12").onchange = getSoln12;
	document.getElementById("soln14").onchange = getSoln14;
});
