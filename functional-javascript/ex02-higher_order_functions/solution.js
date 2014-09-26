module.exports = function(fn, num) {
  for (var i = 0; i < num; i++) {
    fn()
  }
};

/* ANSWER */
// function repeat(operation, num) {
//   if (num <= 0) return
//   operation()
//   return repeat(operation, --num)
// }

// module.exports = repeat