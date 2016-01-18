const makeCounter = (someObj) => {
  'use strict';
  let num = 0, done = false;

  someObj.next = () => {
    value < 10? ++value : done = true;
    return { value, done };
  }
}

module.exports = makeCounter;
