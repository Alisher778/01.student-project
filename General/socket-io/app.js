var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var ss = require('socket.io-stream');
var path = require('path');
var fs = require('fs');



app.set('view engine', 'ejs');

io.on('connection', (socket) => {
  console.log(socket);
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
  res.render('index', {title: 'Socket.io'})
})


http.listen(3000, () => {
  console.log('App is started');
});
