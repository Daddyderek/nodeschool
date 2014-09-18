(function () {
	var through = require('through');
	var split = require('split');
	var i = 0;

	function transform(line) {
		i++;
		if (i % 2) {
			return this.queue(line.toString().toLowerCase() + "\n");
		} else {
			return this.queue(line.toString().toUpperCase() + "\n");
		}
	};

	process.stdin
		.pipe(split())
		.pipe(through(transform))
		.pipe(process.stdout);

})(); 

/* ANSWER */
 // var through = require('through');
 // var split = require('split');

 // var lineCount = 0;
 // var tr = through(function(buf) {
 // 	var line = buf.toString();
 // 	this.queue(lineCount % 2 === 0 ? line.toLowerCase() + '\n' : line.toUpperCase() + '\n');
 // 	lineCount++;
 // });
 // process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);