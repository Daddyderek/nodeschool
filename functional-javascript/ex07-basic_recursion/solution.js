module.exports = (arr, fn, initial) => (function reduce(index, value) {
  if (index > arr.length -1) {
    return value;
  }
  return reduce(index+1, fn(value, arr[index], index, arr));
}(0, initial));

