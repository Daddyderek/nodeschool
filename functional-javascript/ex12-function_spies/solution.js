module.exports = (target, method) => {
  const cachedFn = target[method];
  const result   = { count: 0 };

  target[method] = function() {
    ++result.count;
    return cachedFn.apply(this, arguments);
  }

  return result
}
