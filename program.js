var n = 0
for (var i = 2; i < process.argv.length; i += 1){
	n = n + Number(process.argv[i])
	
}

console.log(n)