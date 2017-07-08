const curryN = (fn, n = fn.length) =>
  arg =>
    n <= 1? fn(arg) : curryN(fn.bind(this, arg), n - 1);

module.exports = curryN;


