var _ = require('lodash');

var worker = function(arg) {
	return _.where(arg, 'active');
}

module.exports = worker;
