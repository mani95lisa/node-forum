//global.conf.js

/*
  i will probably keep this pattern, but it will need to be refactored
  so its a bit more managable outside of this file, expect this to go
  to module.exports soon

*/

var Globals = exports.Globals = {};
//  --  this will be moved to a true environment variable space

/*

  this is temporary, hapi.js changed some stuff and i havent caught up
  dont bash me over this please.. ill fix this

*/

//environment variables
Globals.env = {
  host: 'localhost',
  port: 3000,
  version: '0.1.0',
  db: 'forum',
  cache: 'fcache'
};

//private key stuff for cache and etc
Globals.priv = {
  iron_key: 'superspecialkey',
  yar_key: 'superspecialyarkey'
};