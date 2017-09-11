var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();
var router = require('./router');
var mongoose = require('mongoose');
var cors = require('cors');

//DB Connection
mongoose.connect('mongodb://ccharris:welcome1@ds151752.mlab.com:51752/bucket-list-db');

//Middleware
app.use(cors());
app.use(bodyParser.json({type: '*/*'}));
router(app);

var port = 3000;

var server = http.createServer(app);


server.listen(port);
console.log('Server is listening on ' + port);
