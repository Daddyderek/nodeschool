var q = require('q');
var defer = q.defer();

defer.promise.then(console.log);

setTimeout(defer.resolve, 300, 'RESOLVED!');

/* ANSEWR */
// var q = require('q');
// var der = q.defer();

// def.promise.then(console.log());
// setTimeout(def.resolve, 300, "RESOLVED!");