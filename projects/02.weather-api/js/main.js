const APIKEY = "f2f10e4055e1a37e86860d3f10c6f985";
let unit = 'metric';
let defaultCity = 'Tashkent';
let cityUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid="+APIKEY;
let icons = "http://openweathermap.org/img/w/"

fetch(cityUrl+"&units="+unit+"&q="+defaultCity)
.then(function(data) {
    return data.json();
})
.then(function(respons) {
    console.log(respons);
    document.getElementById('cityName').innerHTML = respons.name;
    document.getElementById('img').src = icons+respons.weather[0].icon+'.png';
    document.getElementById('status').innerHTML = respons.weather[0].main;
    document.getElementById('msg').innerHTML = respons.weather[0].description;
    document.getElementById('temp').innerHTML = Math.round(respons.main.temp);
    document.getElementById('hum').innerHTML = Math.round(respons.main.humidity);
    document.getElementById('wind').innerHTML = Math.round(respons.wind.speed);
})
.catch(function(error) {
    console.log(error);
});

    document.getElementById('cities').addEventListener('change', function(event){
        unit = 'imperial'
        const city = event.target.value;
        defaultCity = city;
        fetch(cityUrl+"&units="+unit+"&q="+defaultCity)
            .then(function(data) {
                return data.json();
            })
            .then(function(respons) {
                console.log(respons);
                document.getElementById('cityName').innerHTML = respons.name;
                document.getElementById('img').src = icons+respons.weather[0].icon+'.png';
                document.getElementById('status').innerHTML = respons.weather[0].main;
                document.getElementById('msg').innerHTML = respons.weather[0].description;
                document.getElementById('temp').innerHTML = Math.round(respons.main.temp);
                document.getElementById('hum').innerHTML = Math.round(respons.main.humidity);
                document.getElementById('wind').innerHTML = Math.round(respons.wind.speed);
            })
            .catch(function(error) {
                console.log(error);
            });
    });

    document.getElementById('tempBtn').addEventListener('change', function(e) {
        const temp = e.target.value;
        unit = temp;
        const myCity = "https://api.openweathermap.org/data/2.5/weather?appid="+APIKEY+"&units="+ temp +"&q=";
        fetch(cityUrl+"&units="+unit+"&q="+defaultCity)
            .then(function(data) {
                return data.json();
            })
            .then(function(respons) {
                console.log(respons);
                document.getElementById('cityName').innerHTML = respons.name;
                document.getElementById('img').src = icons+respons.weather[0].icon+'.png';
                document.getElementById('status').innerHTML = respons.weather[0].main;
                document.getElementById('msg').innerHTML = respons.weather[0].description;
                document.getElementById('temp').innerHTML = Math.round(respons.main.temp);
                document.getElementById('hum').innerHTML = Math.round(respons.main.humidity);
                document.getElementById('wind').innerHTML = Math.round(respons.wind.speed);
            })
            .catch(function(error) {
                console.log(error);
            });
    })