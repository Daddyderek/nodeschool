const average = (...args) =>
  args.reduce((prev, next) => prev + next, 0) / args.length;

module.exports = average;
