//yar.lib.js
var Hapi = require('hapi');
var http = require('../app/app.server').http;

//add globals & scope directly to private obj
var _g = require('../conf/global.conf').Globals.priv;

var options = {
  cookieOptions: {
    password: _g.yar_key,   // Required
  },
  session: true
};

http.plugin.allow({ ext: true }).require('yar', options, function (err) {

  if (err) {
    console.log(err)
    throw err;
  }
});