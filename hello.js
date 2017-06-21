var express = require('express');
var app = express();

app.get('/nodejs_iis_sampleapp', function (req, res) {
	res.send('Hello Express!');
});

app.get('/nodejs_iis_sampleapp/about', function (req, res) {
	res.send('About Us');
});

app.listen(process.env.PORT);