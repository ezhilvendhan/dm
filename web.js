var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fileContents = fs.readFileSync('index.html');
  var buffer = new Buffer(fileContents, 'utf-8');
  response.send(buffer.toString('utf-8'));
});

app.get('/1', function(request, response) {
  var fileContents = fs.readFileSync('p1.html');
  var buffer = new Buffer(fileContents, 'utf-8');
  response.send(buffer.toString('utf-8'));
});

app.get('/2', function(request, response) {
  var fileContents = fs.readFileSync('p2.html');
  var buffer = new Buffer(fileContents, 'utf-8');
  response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
