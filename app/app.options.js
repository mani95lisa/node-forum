//app.options.js
var Hapi = require('hapi');

var fs = require('fs')
  , path = require('path');

var _g = require('../conf/global.conf').Globals.env; //global strings

module.exports = {
  host: _g.host,
  port: _g.port,
  views: {
    path: path.join(__dirname, '../', 'views'),
    engine: {
      module: 'handlebars',
      extension: 'html'
    },
    partials: {
      path: path.join(__dirname, '../', 'views', 'parts')
    }
    , layout: true
  },
  cache: {
    engine: 'mongodb',
    partition: _g.cache
  }
};