(function () {
	var through = require('through');

	function write(buffer) {
		return this.queue(buffer.toString().toUpperCase());
	}

	process.stdin.pipe(through(write)).pipe(process.stdout);
})(); 