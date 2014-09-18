var _ = require('lodash');

var worker = function(collection) {
	return _.forEach(collection, function(item) {
		var pop = item.population;
		if (pop < 1.0) {
			if (pop < 0.5) {
				return item.size = 'small';
			} else {
				return item.size = 'med';
			}
		} else {
			return item.size = 'big';
		}
	});
}

module.exports = worker;

/* ANSWER */
// var _ = require('lodash');

// var addSizeType = function(item) {
// 	_.forEach(item, function(value, key) {
// 		if (value.population > 1) {
// 			item[key].size = "big";
// 		} else if (value.populaiton > 0.5) {
// 			item[key].size = "med";
// 		} else {
// 			item[key].size = "small";
// 		}
// 	});
// 	return item;
// }

// module.exports = worker;