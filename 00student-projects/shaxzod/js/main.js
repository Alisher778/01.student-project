	var photos;

	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			 photos = JSON.parse(this.responseText);

			 for (i = 0; i < photos.length; i++)
			document.getElementById('photos').innerHTML += `<li onclick="del(this)"> 
				<img src="${photos[i].thumbnailUrl}" title="${photos[i].title}"><span class="numb">${i}</span></li>`;
		}
	};

	xhttp.open("GET", "json/photos.json", true);
	xhttp.send();





	function del(n){
		document.getElementById("photos").removeChild(n);
	}