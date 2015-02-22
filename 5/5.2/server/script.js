var connect = require('connect');

var app = connect()
	.use(connect(__dirname+'public'))
	.use(function (req, res) {
		res.end("Couldn't find it.");
	})
	.listen(3000);
