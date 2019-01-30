var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let data = [];
  var api = "VQo5EHk9TXAtuiT9Kk2HUCd3o40orwERq3p-AqKCIolp2GPW431m-nH4u3-BP3vacrThb9NCxxEQhfNxdEuvotUzFia9PiU9nBDEOGORs2rMYYGBuMz3oh0rvDBRXHYx";
  var mainUrl = "https://api.yelp.com/v3/businesses/vector-moving-scotch-plains/reviews";
  fetch(mainUrl, {"headers": {
    "Content-Type": "application/json",
    "cache-control": "no-cache",
    "Authorization": "VQo5EHk9TXAtuiT9Kk2HUCd3o40orwERq3p-AqKCIolp2GPW431m-nH4u3-BP3vacrThb9NCxxEQhfNxdEuvotUzFia9PiU9nBDEOGORs2rMYYGBuMz3oh0rvDBRXHYx"
  }})
    .then(function(data) {
        return data.json();
    })
    .then(function(res) {
        console.log(res);
        return data = res;
    })
    .catch(function(err) {
        console.log(err)
    })
  res.render('index', { title: 'Express', data });
});

module.exports = router;
