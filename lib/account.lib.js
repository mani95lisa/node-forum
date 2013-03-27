//acount.lib.js
var Hapi = require('hapi');

//most prefered way to handle this, clearly
var con = require('./db.lib');
var db = con.db;

var acc = module.exports = {};

acc.getCtx = function(ctx, cb) {
  return console.log(ctx);
}

acc.createAccount = function(ctx, cb) {

  //first we have to check for an account, 
  //we will make sure that emails are unique
  db.collection('users').find({'u_email' : ctx.u_email }, {strict: true}, function(err, user) {
    if (err || user.length>0) {
      //handle this with boom/hapi
      new Error('An account with this email already exists.');
    }
    //we've made it this far, meaning we can
    //create this user, we're going to be using
    //form module that will make sure these link
    db.collection('users').insert(ctx, {strict: true}, function(err, result) {
      if (err) {
        //handle this with boom/hapi
        new Error('We\'ve hit a pipe, or something, please contact an admin.');
      }
    });
    //make token and store it to session & create a cookie
    //@todo add sessions / tokens / cookies
    db.close(); //closing this is important @dh
  });

  return (cb) ? cb(ctx) : ctx;
}
