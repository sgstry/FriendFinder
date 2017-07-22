var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require("fs");
var url = require('url');

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Friends
var friends = [
	// {
	// 	name: "Steven Strybos",
	// 	photo: "http://i.imgur.com/RRUe0Mo.png",
	// 	scores: [
	// 		5,
	// 		5,
	// 		5,
	// 		5,
	// 		5,
	// 		5,
	// 		5,
	// 		5,
	// 		5,
	// 		5,
	// 	]
	// }
];

// Routes
var apiRoutes = require('./app/routing/apiRoutes')(app, friends);
var htmlRoutes = require('./app/routing/htmlRoutes')(app);

app.listen(3000, function() {
	console.log('Live at port ' + PORT);
});
