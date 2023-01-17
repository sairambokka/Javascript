var triArray = new Array();

function addData() {
	var side1 = parseInt(document.getElementById("side1").value);
	var side2 = parseInt(document.getElementById("side2").value);
	var side3 = parseInt(document.getElementById("side3").value);
	var perimeter = calPerimeter(side1, side2, side3);
	
	let triangle = {trSide1 : side1, trSide2 : side2, trSide3 : side3, trPerimeter : perimeter};
	triArray.push(triangle);
	
	var rows = "";
	
	rows += "<tr><td>" + side1 + "</td><td>" + side2 + "</td><td>" + side3 + "</td><td>" + perimeter + "</td></tr>";
    var tbody = document.querySelector("#table1 tbody");
    var tr = document.createElement("tr");

    tr.innerHTML = rows;
    tbody.appendChild(tr);
	
	alert(" Triangle data added ! ");
	
	
}

function calPerimeter(side1, side2, side3) {
	return (side1 + side2 + side3);
}



function dispData() {
	
	document.getElementById("table1").style.display="block";
}

function hideData() {
	document.getElementById("table1").style.display="none";
}