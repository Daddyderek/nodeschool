// var q = require('q'),
//   defer = q.defer();

// defer.promise
//   .then(attachTitle)
//   .then(console.log);

// defer.resolve('MANHATTAN');

// function attachTitle() {
//   return "DR. " + arguments[0];
// }

/* ANSWER */
var q = require('q'),
  def = q.defer();

function attachTitle(name) {
  return "DR. " + name;
}

def.promise
  .then(attachTitle)
  .then(console.log);

def.resolve("MANHATTAN");