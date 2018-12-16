const APIKEY = "f2f10e4055e1a37e86860d3f10c6f985";
let city = "https://api.openweathermap.org/data/2.5/weather?appid="+APIKEY+"&units=metric&q=";
const icons = "http://openweathermap.org/img/w/"

fetch(city+'jizzakh province')
    .then(function(data) {
       return data.json();
    })
    .then(function(respons) {
        console.log(respons);
    })
    .catch(function(error) {
        console.log(error);
    });