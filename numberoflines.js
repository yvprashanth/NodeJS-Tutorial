var fs = require('fs');
try{
	var buf = fs.readFileSync(process.argv[2], 'utf8');
	var str = buf.toString();
	// console.log(str);
	// console.log(fs.readFileSync(process.argv[2]).toString().split('\n').length );
	var numberOfLines = str.split('\n');
	console.log(numberOfLines.length - 1);
}
catch (e)
{	
	console.log(e);
}