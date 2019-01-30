var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var ss = require('socket.io-stream');
var path = require('path');
var fetch =  require('fetch');
var fs = require('fs');



app.set('view engine', 'ejs');

io.on('connection', (socket) => {
  socket.on('send', (data) => {
    io.emit('all', data);
  });
  ss(socket).on('image', (stream, data) => {
    var filename = path.basename(data.name);
    stream.pipe(fs.createWriteStream(filename))
  })
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
})
app.get('/', (req, res) => {
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
  res.render('index', {title: 'Socket.io'})
})


http.listen(3000, () => {
  console.log('App is started');
});
