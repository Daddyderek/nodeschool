var _ = require('lodash');

var worker = function(collection) {
  var result = [];
  orderedCollection = _.groupBy(collection, 'article');

  _.forEach(orderedCollection, function(item, key) {
    key = parseInt(key);
    var totalOrders = 0;

    if (item.length === 1) {
      totalOrders = item[0].quantity;
    } else {
      totalOrders = _.reduce(item, function(sum, item) {
        return sum + item.quantity;
      }, 0)
    }
    result.push({
      article: key,
      total_orders: totalOrders
    });
  });
  return _.sortBy(result, 'total_orders').reverse();
}

module.exports = worker;

/* ANSWER */
// 'use strict';

// var _ = require("lodash");

// var overview = function(orders) {

//   var overviewarray = [],
//     total = 0;

//   // Group by article
//   orders = _.groupBy(orders, 'article');

//   _.forEach(orders, function(item, key) {

//     key = parseInt(key);
//     total = 0;

//     // If only one article
//     if (item.length === 1) {
//       total = item[0].quantity;

//       // Else make sum of all orders
//     } else {
//       total = _.reduce(item, function(sum, item) {
//         return sum + item.quantity;
//       }, 0);
//     }

//     overviewarray.push({
//       article: key,
//       total_orders: total
//     });

//   });

//   // Order
//   overviewarray = _.sortBy(overviewarray, "total_orders").reverse();

//   return overviewarray;
// };

// module.exports = overview;