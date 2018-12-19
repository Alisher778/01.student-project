
const url = "//api.openweathermap.org/data/2.5/forecast?appid=f2f10e4055e1a37e86860d3f10c6f985&q="
fetch(url+'Tashkent,UZ')
    .then(function(data) {
        return data.json();
    })
    .then(function(res) {
        console.log(res)
    })
    .catch(function(err) {
        console.log(err)
    })
