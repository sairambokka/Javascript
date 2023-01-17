var puzzle = Array.from(Array(5), () => new Array(5));
var str = "ABCDEFGHIJKLMNOPQRSTUVWX-";
var row, col;

randomize();
displayData();


function randomize() {
	for(i = 0; i < puzzle.length ; i++) {
	for(j = 0; j < puzzle[0].length ; j++) {
		var pos = Math.floor(Math.random() * str.length)
		puzzle[i][j] = str.charAt(pos);
		str = removeCharAt(pos);
	}
}
}


function checkWinCond() {
	var res1 = [
		["A","B","C","D","E"],
		["F","G","H","I","J"],
		["K","L","M","N","O"],
		["P","Q","R","S","T"],
		["U","V","W","X","-"]
	];
	
	var res2 = [
		["-","A","B","C","D"],
		["E","F","G","H","I"],
		["J","K","L","M","N"],
		["O","P","Q","R","S"],
		["T","U","V","W","X"]
	];
	
	if(JSON.stringify(puzzle) === JSON.stringify(res1) || JSON.stringify(puzzle) === JSON.stringify(res2)) {
		alert("Game Won ! ");
		location.reload();
	}
}

function displayData() {
	for(i = 0; i < puzzle.length ; i++) {
		for(j = 0; j < puzzle[0].length ; j++) {
			var value = document.getElementById("cell" + i + j);
			value.innerHTML = puzzle[i][j];
		}
	}
	checkWinCond();
}



function removeCharAt(pos) {
	return (str.slice(0, pos) + str.slice(pos + 1));
}

function indexOf() {
	for (i = 0; i < puzzle.length ; i++)
	    {
	        for(j = 0; j < puzzle[0].length ; j++) {
	        	if (puzzle[i][j] == "-") {
	        		row = i;
	        		col = j;
	        	}
	                
	        }
	    }
}

function swapLeft() {
	indexOf();
	let i = row;
	let j = col;
	if(j - 1 < 0) {
		alert("Game Over ! ");
		location.reload();
	}
	let temp = puzzle[i][j - 1];
	puzzle[i][j - 1] = puzzle[i][j];
	puzzle[i][j] = temp;
	displayData();
}

function swapRight() {
	indexOf();
	let i = row;
	let j = col;
	if(j + 1 > 4) {
		alert("Game Over ! ");
		location.reload();
	}
	let temp = puzzle[i][j + 1];
	puzzle[i][j + 1] = puzzle[i][j];
	puzzle[i][j] = temp;
	displayData();
}

function swapUp() {
	try {
		indexOf();
	let i = row;
	let j = col;
	
	var temp = puzzle[i - 1][j];
	puzzle[i - 1][j] = puzzle[i][j];
	puzzle[i][j] = temp;
	displayData();
	}
	
	catch(err) {
		alert("Game Over!");
		location.reload();
	}
}

function swapDown() {
	try {
		indexOf();
	let i = row;
	let j = col;
	
	let temp = puzzle[i + 1][j];
	puzzle[i + 1][j] = puzzle[i][j];
	puzzle[i][j] = temp;
	displayData();
	}
	
	catch(err) {
		alert("Game Over !");
		location.reload();
	}
}
