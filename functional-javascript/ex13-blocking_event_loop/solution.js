module.exports = function repeat(op, num) {
  if (num <= 0) return;
  op();

  const exec = () => repeat(op, --num);
  if (num % 10 === 0) {
    setTimeout(() => {
      exec();
    })
  } else {
    exec();
  }
}
