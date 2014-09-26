var express = require('express'),
  crypto = require('crypto'),
  app = express();

app.put('/message/:id', function(req, res) {
  var id = req.params.id;
  var str = crypto
              .createHash('sha1')
              .update(new Date()
              .toDateString() + id)
              .digest('hex');
  res.send(str);
});

app.listen(process.argv[2]);

/* ANSWER */
// var path = require('path');
// var express = require('express');
// var crypto = require('crypto');
// var app = express();

// app.put('/message/:id', function(req, res) {
//   var id = req.params.id;
//   var str = crypto.createHash('sha1').update(new Date().toDateString().toString() + id).digest('hex');
//   res.send(str);
// });

// app.listen(process.argv[2]);