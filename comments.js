//create web server
var express = require('express');
var app = express();

//create server
var http = require('http');
var server = http.createServer(app);

//create socket
var io = require('socket.io').listen(server);

//create array to store comments
var comments