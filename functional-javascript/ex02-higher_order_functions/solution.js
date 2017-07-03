module.exports = (fn, num) => Array(num).forEach(() => fn());

/* ANSWER */
// function repeat(operation, num) {
//   if (num <= 0) return
//   operation()
//   return repeat(operation, --num)
// }

// module.exports = repeat
