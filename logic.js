
// document.getElementById('test').innerHTML = apiKey;
var submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function(e) {
	
	e.preventDefault();
	var userChoice = document.querySelector('input[name="genre"]:checked').value;
	console.log(userChoice);
	var xhr = new XMLHttpRequest();
	// xhr.withCredentials = true;
	
	xhr.addEventListener("readystatechange", function (){
		if (this.readyState == 4 && this.status == 200) {
			console.log(this.responseText);
		}
	});
	
	xhr.open("GET", "https://api.themoviedb.org/3/discover/movie?with_genres=" +userChoice + "&api_key="+apiKey);
	
	xhr.send();
});