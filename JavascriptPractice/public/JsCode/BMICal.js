function calBMI() {
	var weight = parseInt(document.getElementById("weight").value);
	var height = parseInt(document.getElementById("height").value);
	
	var heightInM = height / 100;
	
	let bmi = weight / (heightInM * heightInM);
	
	document.getElementById("bmi").innerHTML = "BMI : " + parseFloat(bmi).toFixed(2);
	
	if(bmi < 18)
		document.getElementById("conclusion").innerHTML = "Underweight";
	else if(bmi < 24)
		document.getElementById("conclusion").innerHTML = "Normal";
	else if(bmi < 30)
		document.getElementById("conclusion").innerHTML = "Overweight";
	else
		document.getElementById("conclusion").innerHTML = "Obese";
}