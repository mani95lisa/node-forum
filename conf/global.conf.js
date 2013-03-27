//global.conf.js
var Globals = exports.Globals = {};
/*
  this is temporary, hapi.js changed some stuff and i havent caught up
  dont bash me over this please.. ill fix this
*/
Globals.env = {
    host: 'localhost'
  , port: 3000
  , version: '0.1.0'
  , db: 'forum'
  , cache: 'fcache'
}

Globals.priv = {
    iron_key: 'superspecialkey'
  , yar_key: 'superspecialyarkey'
}
