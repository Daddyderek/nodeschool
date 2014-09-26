var express = require('express'),
  app = express();

app.get('/home', function(req, res) {
  res.end('Hello World!');
});

app.listen(process.argv[2])

/* ANSWER */
// var express = require('express')
// var app = express()
// app.get('/home', function(req, res) {
//   res.end('Hello World!')
// })
// app.listen(process.argv[2])