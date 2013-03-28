//db.lib.js
var mongo = require('mongoskin');
var _g = require('../conf/global.conf').Globals.env; //global strings

/*

  we're gonna obfiscate this a little so we don't have to edit
  this business end later, less database refactoring moving
  forward is ideal imo

*/

var db = exports.db = mongo.db(_g.host  + ':27017/' + _g.db + '?auto_reconnect&poolSize=5', {w: 1, fsync: true});

/*

  something about this static connection makes mongodb
  unhappy, it's not anything else from what I can tell,
  lets just leave this commented out until i can figure
  out its purpose?

*/

// mongo.db(_g.host, { database: _g.db });

/*

  define collections here keep them static because 
  mongodb-native driver won't know what to do otherwise

*/

var forums = db.collection('forums');
var topics = db.collection('topics');
var users = db.collection('users');
var messages = db.collection('messages');

  /* usage

  //most prefered way to handle this
  var con = require('./db.lib');
  var db = con.db;

  //alternatively
  var db = require('./db.lib').db;

  */