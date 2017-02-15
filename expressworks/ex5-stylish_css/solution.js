var express = require('express'),
  stylus = require('stylus'),
  app = express();

app.use(express.static(process.argv[3]));
app.use(stylus.middleware(process.argv[3]));

app.listen(process.argv[2]);

/* ANSWER */
// var express = require('express')
// var app = express()

// app.use(require('stylus').middleware(process.argv[3]));
// app.use(express.static(process.argv[3]));


// app.listen(process.argv[2])