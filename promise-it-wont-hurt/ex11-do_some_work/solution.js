// var Qhttp = require('q-io/http');

// Qhttp.read("http://localhost:7000/")
//   .then(function(id) {
//     return Qhttp.read("http://localhost:7001/"+id);
//   })
//   .then(function(json) {
//     console.log(JSON.parse(json));
//   })
//   .then(null, console.error)
//   .done();


/* ANSWER */
var qhttp = require('q-io/http');

qhttp
  .read("http://localhost:7000/")
  .then(function(id) {
    return qhttp.read("http://localhost:7001/" + id);
  })
  .then(function(json) {
    console.log(JSON.parse(json));
  })
  .then(null, console.error)
  .done();