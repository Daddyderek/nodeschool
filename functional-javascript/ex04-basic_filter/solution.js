module.exports = function(objects) {
  return objects
          .map(function(val) { return val.message; })
          .filter(lessThan50);
};
function lessThan50(str) {
  return str.length < 50;
}

/* ANSWER */
// module.exports = function getShortMessages(messages) {
//   return messages.filter(function(item) {
//     return item.message.length < 50
//   }).map(function(item) {
//     return item.message
//   })
// }