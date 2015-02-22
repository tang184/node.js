var fs = require('fs');

fs.readFile(process.argv[2],function(err, str){
	var num = str.toString().split('\n').length-1;
	console.log(num)
})

