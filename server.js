// REQUIREMENTS
var express = require('express');
var app = express();

//MIDDLEWARE
app.use(express.static('public'));

// var controllers = require('./controllers');

//HTML ENDPOINTS
app.get('/', function (req, res) {
	res.sendFile(__dirname + '/views/index.html');
});

//JSON ENDPOINTS

//SERVER START
app.listen(process.env.PORT || 3000, function () {
	console.log('HTTP server listening at localhost:3000');
});
