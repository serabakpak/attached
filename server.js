// REQUIREMENTS
var express = require('express');
var app = express();

//MIDDLEWARE

app.use(express.static(__dirname + '/public'));
app.use('/node_modules',  express.static(__dirname + '/node_modules'));


// var controllers = require('./controllers');

//HTML ENDPOINTS
app.get('/', function (req, res) {
	res.sendFile(__dirname + '/views/index.html');
});

app.get('/templates/:name', function templates(req, res) {
  var name = req.params.name;
  res.sendFile(__dirname + '/views/templates/' + name + '.html');
});

//JSON ENDPOINTS

//SERVER START
app.listen(process.env.PORT || 3000, function () {
	console.log('HTTP server listening at localhost:3000');
});
