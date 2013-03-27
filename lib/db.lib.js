//db.lib.js
var mongo = require('mongoskin')
  , _g = require('./global.conf').Globals.env; //global strings

var db = exports.db = mongo.db( _g.host  + ':27017/' + _g.db + '?auto_reconnect&poolSize=5', {w: 1});
mongo.db(_g.host, { database: _g.db });

var forums = db.collection('forums')
  , topics = db.collection('topics')
  , users = db.collection('users')
  , messages = db.collection('messages');

//usage
  
  /*

  //most prefered way to handle this, clearly
  var con = require('./db.lib');
  var db = con.db;

  */