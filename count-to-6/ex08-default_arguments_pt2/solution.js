const makeBang = (str, bangs = str.length) => `${ str }${ '!'.repeat(bangs) }`;

module.exports = makeBang;
