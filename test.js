var rl = require('readline');

var prompt = rl.createInterface(process.stdin,process.stdout);

prompt.question("how many sercing each day?",function(serving){
	var message = '';

	if (serving < 5){
		message = "you should eat more"
	}else{
		message = "excellent, your diet is on the right track!"
	}

	console.log(message);


process.exit();
})