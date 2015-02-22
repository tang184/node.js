var net = require('net');
var server = net.createServer(function(socket){
	socket.end(now() + '\n')

	})

server.listen(Number(process.argv[2]));

function now(){
	var d = new Date();
	return d.getFullYear() + '-'+zerofill(d.getMonth()+1) + '-'
	+ zerofill(d.getDate())+' '+ zerofill(d.getHours()) + ':'+zerofill(d.getMinutes())
}

function zerofill(i){
	if (i < 10){
		return '0'+ i.toString()
	}else{
		return i.toString();
	}
}