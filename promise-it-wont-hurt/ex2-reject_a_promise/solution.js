var q = require('q');
var defer = q.defer();

(function () {
  defer.promise.then(console.log);
  setTimeout(defer.resolve, 300, 'REJECTED!');
})(); 

/* ANSWER */
// var q = require('q');
// var def = q.defer();

// function printError(err) {
//   console.log(err.message);
// }

// def.promise.then(null, printError);
// setTimeout(def.reject, 300, new Error("REJECTED!"));