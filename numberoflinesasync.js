var fs = require('fs');
try{
	fs.readFile(process.argv[2], 'utf8')

	fs.readFile(process.argv[2], function (err, data) {
	  if (err) throw err;
  	  console.log(data.toString().split('\n').length - 1);
	});
}
catch (e)
{	
	console.log(e);
}