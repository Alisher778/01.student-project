var APIKEY = "fb39b298b395c36588f68338fa37815c";
var URL = "//api.openweathermap.org/data/2.5/forecast?q=Tashkent&units=metric&appid="+APIKEY
var icon = "http://openweathermap.org/img/w/";
fetch(URL)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        
        console.log(data)
        var city = document.getElementById('city');
        city.innerHTML = data.name;
        city.innerHTML += '<p>'+ data.main.temp +'</p>'
        city.innerHTML += '<p>'+ data.weather[0].main +'</p>'
        city.innerHTML += '<img src="'+ icon+ data.weather[0].icon +'.png">'
        city.innerHTML += '<p>'+ data.wind.speed +'</p>'
        // city.innerHTML += '<img src="img/'+data.name+'.jpg">'
    })
    .catch(function(err) {
        console.log(err)
    });

    document.getElementById('search').addEventListener('click', function() {
        var cityName = document.getElementById('search-city').value;
        var cityUrl = "//api.openweathermap.org/data/2.5/weather?lat=40.12&lon=67.85&units=metric&appid="+APIKEY

        fetch(cityUrl)
            .then(function(res) {
                return res.json()
            })
            .then(function(data) {
                if(data.cod != '404') {
                    var city = document.getElementById('city');
                    city.innerHTML = data.name;
                    city.innerHTML += '<p>'+ data.main.temp +'</p>'
                    city.innerHTML += '<p>'+ data.weather[0].main +'</p>'
                    city.innerHTML += '<img src="'+ icon+ data.weather[0].icon +'.png">'
                    city.innerHTML += '<p>'+ data.wind.speed +'</p>'
                } else {
                    console.log(data)
                }
            })
            .catch(function(err) {
                console.log(err);
            })
    })



