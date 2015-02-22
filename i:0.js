var fs = require ('fs')

var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var line = str.split('\n');
var num = line.length-1;
console.log(num)
