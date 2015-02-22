var http = require('http');
var bl = require('bl');
var result = [];
var count = 0;

function printing(){
	for (var i = 0; i < 3; i++){
		console.log(result[i])
	}
}

function gethttp(index){
	http.get(process.argv[2 + index], function (response){
		response.pipe(bl(function(err,data){
			if (err){
				console.error(err);
			}

			result[index] = data.toString();
			count ++;
			if (count == 3){
				printing();
			}
		}))
	})
}

for (var i =0; i < 3; i++){
	gethttp(i);
}