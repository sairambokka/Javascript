function addNumbers() {
	var num1 = parseInt(document.getElementById("in1").value);
	var num2 = parseInt(document.getElementById("in2").value);
	document.getElementById("result").innerHTML = "Result : " + (num1 + num2);
}

function subNumbers() {
	var num1 = parseInt(document.getElementById("in1").value);
	var num2 = parseInt(document.getElementById("in2").value);
	document.getElementById("result").innerHTML =  "Result : " + (num1 - num2);
}

function mulNumbers() {
	var num1 = parseInt(document.getElementById("in1").value);
	var num2 = parseInt(document.getElementById("in2").value);
	document.getElementById("result").innerHTML =  "Result : " + (num1 * num2);
}

function divNumbers() {
	var num1 = parseInt(document.getElementById("in1").value);
	var num2 = parseInt(document.getElementById("in2").value);
	document.getElementById("result").innerHTML =  "Result : " + (num1 / num2);
}