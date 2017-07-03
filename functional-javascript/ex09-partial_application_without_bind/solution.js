module.exports = namespace => (...messages) => console.log.apply(null, [namespace].concat(messages));

