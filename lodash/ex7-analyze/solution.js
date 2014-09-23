var _ = require('lodash');

var worker = function(collection) {

  var sum = 0;
  var result = {};
  var under = [];
  var over = [];

  _.forEach(collection, function(num) {
    sum += num.income;
  });

  var avg = parseInt(sum) / collection.length;

  _.filter(collection, function(obj) {
    if (obj.income > avg) {
      over.push(obj);
    } else {
      under.push(obj);
    }
  });

  function sort(obj) {
    return _.sortBy(obj, 'income');
  }

  result = {
    average: avg,
    underperform: sort(under),
    overperform: sort(over)
  };

  return result;
};

module.exports = worker;

/* ANSWER */
// 'use strict';

// var _ = require("lodash");

// var analyze = function(item) {

//   var average,
//     underperform,
//     overperform;

//   // Sort
//   item = _.sortBy(item, "income");

//   // Sum of all incomes
//   average = _.reduce(item, function(sum, num) {
//     return sum + num.income;
//   }, 0);

//   // calculate average
//   average = average / item.length;

//   // filter underperformer
//   underperform = _.filter(item, function(num) {
//     return num.income <= average;
//   });

//   // filter overperformer
//   overperform = _.filter(item, function(num) {
//     return num.income > average;
//   });

//   return {
//     average: average,
//     underperform: underperform,
//     overperform: overperform
//   };

// };

// module.exports = analyze;