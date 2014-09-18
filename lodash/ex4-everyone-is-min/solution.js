var _ = require('lodash');

var worker = function(collection) {
	var allTowns = {
		hot: [],
		warm: []
	};

	function isHot(collection) {
		return collection > 19;
	};

	_.forEach(collection, function(town, townname) {
		if (_.every(town, isHot)) {
			allTowns.hot.push(townname);
		} else if (_.some(town, isHot)) {
			allTowns.warm.push(townname);
		}
	});

	return allTowns;

}

module.exports = worker;