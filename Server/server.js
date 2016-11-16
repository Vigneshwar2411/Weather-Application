var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');
var path = require('path');
var config=require('./config/config.json');
var routing = require('./api/routing');
var util = require('util');
const routes = require('./api/routing.js');

app.use('/', express.static(path.join(__dirname, '../')));
app.use('/api', routes);

var port = config.port;

app.listen(port, function(){
  console.log("Server started at port :"+port);
});
