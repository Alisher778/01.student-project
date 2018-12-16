var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);



app.set('view engine', 'ejs');

io.on('connection', (socket) => {
  console.log(socket);
  socket.on('send', (data) => {
    io.emit('all', data);
  });

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
