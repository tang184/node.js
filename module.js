
var mymodule = require('./filter.js')

mymodule(process.argv[2],process.argv[3],function(err,str){
	if (err){
		return console.error("There was an error",err)
	}

	str.forEach(function(file){
		console.log(file);
	})
})