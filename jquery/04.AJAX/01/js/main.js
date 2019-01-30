
 var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.yelp.com/v3/businesses/vector-moving-scotch-plains/reviews",
    "method": "GET",
    "headers": {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
      "Authorization": "VQo5EHk9TXAtuiT9Kk2HUCd3o40orwERq3p-AqKCIolp2GPW431m-nH4u3-BP3vacrThb9NCxxEQhfNxdEuvotUzFia9PiU9nBDEOGORs2rMYYGBuMz3oh0rvDBRXHYx"
    }
  }
    var api = "VQo5EHk9TXAtuiT9Kk2HUCd3o40orwERq3p-AqKCIolp2GPW431m-nH4u3-BP3vacrThb9NCxxEQhfNxdEuvotUzFia9PiU9nBDEOGORs2rMYYGBuMz3oh0rvDBRXHYx";
    var mainUrl = "https://api.yelp.com/v3/businesses/vector-moving-scotch-plains/reviews"
    fetch(settings.url, settings.headers)
        .then(function(data) {
            return data.json();
        })
        .then(function(res) {
            console.log(res)
        })
        .catch(function(err) {
            console.log(err)
        })
       
          
          $.ajax(settings).done(function (response) {
            console.log(11,response);
          });
