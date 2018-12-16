var express = require('express');
var app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {title: 'Socket.io'})
})


app.listen(3000, () => {
  console.log('App is started');
});
