//forum.conf.js
var Hapi = require('hapi');
var mongoose = require('mongoose');

var _g = require('./global.conf').Globals; //global strings

mongoose.connect('mongodb://' + _g.env.host + '/' + _g.env.db , function (err) {
  // if we failed to connect, abort
  if (err) throw err;

});



var Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

/******************************************************************************
  This config will handle mongoose schemas for forum posts
******************************************************************************/
var UserSchema = new Schema({
    u_id: { type: ObjectId, index: true } //++i
  , u_name: { type: String } //string 50
  , u_password: {} //string 24
  , u_firstname: {} //string 50
  , u_lastname: {} //string 50
  , u_email: {} //string 50
  , u_logcount: {} //int
  , u_created: {} //datetime
  , u_updated: {} //datetime
});

var ForumSchema = new Schema({
    f_id: { type: ObjectId, index: true } //++i
  , f_name: {} //string 50
  , f_slug: {} //string 50
  , f_desc: {} //string 255
  , f_updated: {} //datetime
  , f_created: {} //datetime
});

var TopicSchema = new Schema({
    f_id: { type: ObjectId, index: true } //forum the msg is posted in
  , t_id: {} //++i
  , u_id: {} //user id
  , t_title: {} //string 200
  , t_slug: {} //string 200
  , t_created: {} //datetime
  , t_updated: {} //datetime
  , t_count: {} //int
  , t_parent: {} //int
  , t_message: {} //text
});

var MessageSchema = new Schema({
    m_id: {} //++i
  , u_id: {} //user id from
  , m_to: {} //user id to
  , m_title: {} //user id to
  , m_created: {} //user id to
  , m_msg: {} //string 500
});

var User = mongoose.model('User', UserSchema);
var Forum = mongoose.model('Forum', ForumSchema);
var Topic = mongoose.model('Topic', TopicSchema);
var Message = mongoose.model('Message', MessageSchema);

console.log('Running mongoose version %s', mongoose.version);
