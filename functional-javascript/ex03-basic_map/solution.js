module.exports = function(numbers) {
  var results = numbers.map(function(i) { return i * 2; });
  return results;
};

/* ANSWER */
// module.exports = function doubleAll(numbers) {
//   return numbers.map(function double(num) {
//     return num * 2
//   })
// }