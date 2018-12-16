var apikey = "f2f10e4055e1a37e86860d3f10c6f985";
var icons = "http://openweathermap.org/img/w/"

fetch('https://api.openweathermap.org/data/2.5/weather?q=London'+"&units=metric&appid="+apikey)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data)
        document.getElementById('city').innerHTML = data.name
        document.getElementById('temp').innerHTML = Math.round(data.main.temp);
        document.getElementById('icon').src = icons+data.weather[0].icon+'.png';
    })
    .catch(function(err) {
        console.log(err);
    })