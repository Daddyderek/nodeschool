module.exports = function(input) {
  return input.reduce(function(obj, word) {
    obj[word] = ++obj[word] || 1;
    return obj;
  }, {});
}

/* ANSWER */
// function countWords(arr) {
//   return arr.reduce(function(countMap, word) {
//       countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
//       return countMap
//     }, {}) // second argument to reduce initialises countMap to {}
// }

// module.exports = countWords