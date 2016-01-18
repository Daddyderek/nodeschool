const generate = (isEven) => {
  'use strict';
  let value = isEven? 0 : -1;

  const myIterator = {
    next(swap) {
      value += (swap ? 1 : 2);
      return { value };
    }
  }

  return myIterator;
}

module.exports = generate;
