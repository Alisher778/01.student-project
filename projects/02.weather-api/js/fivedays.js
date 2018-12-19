const APIKEY = "f2f10e4055e1a37e86860d3f10c6f985";
let cityUrl = "//api.openweathermap.org/data/2.5/forecast?units=metric&appid=f2f10e4055e1a37e86860d3f10c6f985&q=";
let icons = "http://openweathermap.org/img/w/"

fetch(cityUrl+'Tashkent')
    .then(data => data.json())
    .then(res => {
        
        var days = [];
        for(var i=0;i<5; i++) {
            days.push(res.list.splice(0,8));
        }
        console.log(days[0])
        var list = document.getElementById('days').children;
        days.forEach(function(data,i) {
            data.forEach(function(arr) {
                list[i].innerHTML += '<p>'+arr.dt_txt+'</p>'
            });
        });
    })
    .catch(err => console.log(err));