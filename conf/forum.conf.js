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
  , u_name: String //string 50
  , u_password: String //string 24
  , u_firstname: String //string 50
  , u_lastname: String //string 50
  , u_email: { type: String, required: true, index: { unique: true, sparse: true } } //string 50
  , u_logcount: Number //int
  , u_created: Date //datetime
  , u_updated: Date //datetime
});

var ForumSchema = new Schema({
    f_id: { type: ObjectId, index: true } //++i
  , f_name: String //string 50
  , f_slug: String //string 50
  , f_desc: String //string 255
  , f_updated: Date //datetime
  , f_created: Date //datetime
});

var TopicSchema = new Schema({
    f_id: { type: ObjectId, index: true } //forum the msg is posted in
  , t_id: {} //++i
  , u_id: {} //user id
  , t_title: String //string 200
  , t_slug: String //string 200
  , t_created: Date //datetime
  , t_updated: Date //datetime
  , t_count: Number //int
  , t_parent: Number //int
  , t_message: {} //text
});

var MessageSchema = new Schema({
    m_id: {} //++i
  , u_id: {} //user id from
  , m_to: {} //user id to
  , m_title: String //string 200
  , m_created: Date //datetime
  , m_msg: String //string 500
});

var User = mongoose.model('User', UserSchema);
var Forum = mongoose.model('Forum', ForumSchema);
var Topic = mongoose.model('Topic', TopicSchema);
var Message = mongoose.model('Message', MessageSchema);

console.log('Running mongoose version %s', mongoose.version);
