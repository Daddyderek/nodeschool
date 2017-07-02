const getShortMessages = messages =>
  messages
    .filter( ({ message }) => message.length < 50 )
    .map( ({ message }) => message );

module.exports = getShortMessages;

/* ANSWER */
// module.exports = function getShortMessages(messages) {
//   return messages.filter(function(item) {
//     return item.message.length < 50
//   }).map(function(item) {
//     return item.message
//   })
// }
