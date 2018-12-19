const APIKEY = "f2f10e4055e1a37e86860d3f10c6f985";
let cityUrl = "//api.openweathermap.org/data/2.5/forecast?units=metric&appid=f2f10e4055e1a37e86860d3f10c6f985&q=";
let icons = "http://openweathermap.org/img/w/"

fetch(cityUrl+'Tashkent')
    .then(data => data.json())
    .then(res => {
        console.log(res);
    })
    .catch(err => console.log(err));