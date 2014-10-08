var fs = require('fs');

fs.readdir(process.argv[2], function(err, list) {
  if (err) throw err;
  list.forEach(function(c, i, a) {
    if (c.match('.md')) {
      console.log(c);
    }
  });
});

/* ANSWER */
// var fs = require('fs')
// var path = require('path')

// fs.readdir(process.argv[2], function(err, list) {
//   list.forEach(function(file) {
//     if (path.extname(file) === '.' + process.argv[3])
//       console.log(file)
//   })
// })