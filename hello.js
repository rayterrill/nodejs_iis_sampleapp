var express = require('express');
var app = express();

app.get('/nodejs', function (req, res) {
	res.send('Hello Express!');
});

app.get('/nodejs/about', function (req, res) {
	res.send('About Us');
});

app.listen(process.env.PORT);