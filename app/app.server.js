//app.server.js
var Hapi = require('hapi')
  , socketIO = require('socket.io')
  , options = require('./app.options');

var http = exports.http = new Hapi.Server(/*'localhost', 3000, */options);
var io = exports.io = socketIO.listen(http.listener);