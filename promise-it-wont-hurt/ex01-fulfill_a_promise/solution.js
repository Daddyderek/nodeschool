var q = require('q');
var defer = q.defer();

defer.promise.then(console.log);

setTimeout(function() {
  defer.resolve('RESOLVED!')
}, 300)

/* ANSEWR */
// var q = require('q');
// var der = q.defer();

// def.promise.then(console.log());
// setTimeout(def.resolve, 300, "RESOLVED!");