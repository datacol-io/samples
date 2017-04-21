var exp = require('express');

var app = exp();
app.get('/', function(req, res) {
  res.send('hello world!\n');
}).listen(8080);

console.log('Running node on port 8080');
