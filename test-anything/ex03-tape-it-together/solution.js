const test    = require('tape');
const fancify = require(process.argv[2]);

test('fancify', assert => {
  assert.equal(fancify('Wat'), '~*~Wat~*~', 'Wraps a string in ~*~');
  assert.equal(fancify('Wat', false), '~*~WAT~*~', 'Optionally makes it allcaps');
  assert.equal(fancify('Wat', true, '%'), '~%~Wat~%~', 'Optionally allows to set the character');
  assert.end();
});
