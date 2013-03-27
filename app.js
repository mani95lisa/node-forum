//app.js
var Hapi = require('hapi')
  , Lout = require('lout');

var db = require('./conf/forum.conf');

//dependencies
var colors = require('colors');

//init server requirements
var http = require('./app/app.server').http;

//session support
var yar = require('./lib/yar.lib');

//load routes
var DefaultRoutes = require('./routes/default.routes.js');

http.route([
  { method: 'GET', path: '/', handler: DefaultRoutes.HomePage },
  { method: 'GET', path: '/login', handler: DefaultRoutes.LoginPage },
  { method: 'GET', path: '/p/chat', handler: DefaultRoutes.ChatPage },

  { method: 'GET', path: '/css/{path*}', handler: { directory: { path: './pub/css' } } },
  { method: 'GET', path: '/js/{path*}', handler: { directory: { path: './pub/js' } } },
]);

http.plugin.require('lout', null, function () {

  http.start( function() {
    console.log('   init  -'.green + ' server started on port ' + require('./app/app.options').port);
  });
});

/*

wip route config:

{method: 'get', path: '/', handler: }

{method: 'get', path: '/{forum}', handler: }
{method: 'get', path: '/{forum}/create', handler: }
{method: 'get', path: '/{forum}/edit', handler: }
{method: 'get', path: '/{forum}/reply', handler: }

{method: 'get', path: '/{user}/profile', handler: }

*/