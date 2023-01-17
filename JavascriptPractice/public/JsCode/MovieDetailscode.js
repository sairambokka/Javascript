var request = new XMLHttpRequest()

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

request.onload = function () {
  
  var data = JSON.parse(this.response)

  
    data.forEach(movie => {
     	if(movie.rt_score > 90) {
		var rows = "";
	
	 	rows += "<tr><td>" + movie.title + "</td><td><img width=100px, height=120px src="+ movie.image + "></td><td>" + movie.director + "</td><td>" + movie.release_date + "</td><td>" + movie.running_time+" mins" + "</td><td>" + movie.rt_score + "</td></tr>";
    	var tbody = document.querySelector("#table1 tbody");
     	var tr = document.createElement("tr");

     	tr.innerHTML = rows;
     	tbody.appendChild(tr);
}
    })
  
}

request.send()