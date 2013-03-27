//models.conf.js

/******************************************************************************
  Mongojs schema
******************************************************************************/
var db = module.exports = {};

db.forums = {
    f_id: null //++i
  , f_name: null //string 50
  , f_slug: null //string 50
  , f_desc: null //string 255
  , f_updated: null //datetime
  , f_created: null //datetime
  , f_parent: null //f_id
};
db.topics = {
    f_id: null //forum the msg is posted in
  , t_id: null //++i
  , u_id: null //user id
  , t_title: null //string 200
  , t_slug: null //string 200
  , t_created: null //datetime
  , t_updated: null //datetime
  , t_count: null //int
  , t_parent: null //int
  , t_message: null //text
};
db.users = {
    u_id: null //++i
  , u_name: null //string 50
  , u_password: null //string 24
  , u_firstname: null //string 50
  , u_lastname: null //string 50
  , u_email: null //string 50
  , u_logcount: null //int
  , u_created: null //datetime
  , u_updated: null //datetime
};
db.messages = {
    m_id: null //++i
  , u_id: null //user id from
  , m_to: null //user id to
  , m_title: null //string 200
  , m_created: null //datetime
  , m_msg: null //string 500
};
