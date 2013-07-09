var express = require('express');
var fs = require('fs');


var app = express.createServer(express.logger());

// read file with file system, which returns a buffer
var content_buf = fs.readFileSync('index.html', 'utf8');

// save content from file to buffer
var content = content_buf.toString();


app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  reponse.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
