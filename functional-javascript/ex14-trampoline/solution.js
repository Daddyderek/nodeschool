module.exports = (op, num) => {
  const trampoline = fn => {
    while(fn && typeof fn === 'function') {
      fn = fn();
    }
  };

  const repeat = (op, num) => () => {
    if (num <= 0) return;
    op();
    return repeat(op, --num);
  };

  trampoline(() => repeat(op, num));
}
