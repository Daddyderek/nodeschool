function* generate(isEven) {
  'use strict';
  let num = isEven? 0 : -1;

  while(true) {
    yield num += 2;
  }
}

module.exports = generate;
