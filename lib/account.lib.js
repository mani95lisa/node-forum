//acount.lib.js
var Hapi = require('hapi');
var Hoek = require('hoek');

//most prefered way to handle this, clearly
var con = require('./db.lib');
var db = con.db;

var acc = module.exports = {};

acc.createAccount = function (ctx, cb) {

  var acct = Hoek.clone(ctx);

  console.log(acct);

  //first we have to check for an account, 
  //we will make sure that emails are unique
  db.collection('users').find({'u_email' : acct.u_email }, {strict: true}, function(err, user) {
    
    if (err) {
      return new Error(err);
    }

    if (user.items.length < 1) {
      //handle this with boom/hapi

      //we've made it this far, meaning we can
      //create this user, we're going to be using
      //form module that will make sure these link
      db.collection('users').insert(acct, {strict: true}, function(err, inserted) {
        if (err) {
          return new Error(err);
        }
        
        db.close(); //closing this is important @dh
        return (cb) ? cb(inserted) : inserted;
      });
      //make token and store it to session & create a cookie
      //@todo add sessions / tokens / cookies
    } else {
      return new Error('user exists');
    }
  });


}
