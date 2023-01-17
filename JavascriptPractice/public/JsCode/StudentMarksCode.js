var stdArray = new Array();


function addData() {
	var name = document.getElementById("name").value;
	var maths = parseInt(document.getElementById("maths").value);
	var physics = parseInt(document.getElementById("physics").value);
	var chemistry = parseInt(document.getElementById("chemistry").value);
	
	let student = {stdName: name, mathScore : maths, phyScore : physics, chemScore : chemistry};
	
	stdArray.push(student);
	
    alert("data Added");
}

var i = 0;

function dispData() {
	
		var rows = "";
	
	 	rows += "<tr><td>" + stdArray[i].stdName + "</td><td>" + stdArray[i].mathScore + "</td><td>" + stdArray[i].phyScore + "</td><td>" + stdArray[i].chemScore + "</td></tr>";
    	var tbody = document.querySelector("#table1 tbody");
     	var tr = document.createElement("tr");

     	tr.innerHTML = rows;
     	tbody.appendChild(tr);
     	i++;
	
	document.getElementById("table1").style.display="block";
}


function hideTable() {
	document.getElementById("table1").style.display="none";
}



