const makeCounter = (someObj) => {
  var num = 0, done = false;

  someObj.next = () => {
    num < 10?  num++ : done = true;
    return { value: num, done: done };
  }
}

module.exports = makeCounter;
