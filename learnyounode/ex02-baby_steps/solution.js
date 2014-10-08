// console.log(process.argv);

console.log(process.argv.slice(2).map(function(v) {
  return Number(v);
}).reduce(function(p, c) {
  return p + c;
}));

/* Answer */
// var result = 0;

// for (var i = 2; i < process.argv.length; i++)
// result += Number(process.argv[i]);

// console.log(result);