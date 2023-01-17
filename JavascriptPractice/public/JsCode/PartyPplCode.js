var peopleArr = [];

function addToParty() {
	var people = document.getElementById("party").value;
	peopleArr.push(people);
	alert("added " + people);
}

function whoIsPaying() {
	const random = Math.floor(Math.random() * peopleArr.length);
	alert(peopleArr[random]);
}