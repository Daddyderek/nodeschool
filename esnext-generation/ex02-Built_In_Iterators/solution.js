const filterForNumbers = (iterable) => {
  'use strict';
  let result = [];

  for (let i of iterable) {
    typeof i == 'number'? result.push(i) : null;
  }

  return result;
};

module.exports = filterForNumbers;
