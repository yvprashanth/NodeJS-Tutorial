var fs = require('fs');
var path = require('path');
var http = require('http');
var str = '';

http.get(process.argv[2], function(res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log(chunk);
        str += chunk;
  });
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});