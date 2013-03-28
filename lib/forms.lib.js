//forms.lib.js
var Hoek = require('hoek');
/*

  @author dhigginbotham <david@hillsoft.com>
  this should handle forms from config files based in 
  /conf/forms.conf.js

  this class should handle most of the needed functions for 
  form handling with socket.io/jquery.serializeArray()

  -- sample .serializeArray() --

    [ { name: 'login', value: '' },
      { name: 'pass', value: '' },
      { name: 'email', value: '345634563456' },
      { name: 'first_name', value: '' },
      { name: 'last_name', value: '' } ]

*/

var forms = module.exports = {};

forms.render = function (form, cb) {

/*

  this renders the form for the clientside

*/

  var updated = {};

  for (var i=0;i<form.length;++i) {
    //make this form if it doesn't exist
    if (!updated[form[i].type]) {
      updated[form[i].type] = [];
    } 
  }

  for (var i=0;i<form.length;++i) {
    //make form array with types mashed to their own array
    if (updated[form[i].type]) {
      //push the values into the array
      updated[form[i].type].push(form[i]);
    } 
  }

  return (cb) ? cb(updated) : updated;

};

forms.joiner = function (form, data, cb) {

/*

  this merges user input with the original form model

*/
  
  // var joined = Hoek.clone(form);
  var joined = form;

    for (var i=0;i<data.length;++i) {
      //if exists
      if (data[i].hasOwnProperty('name')) {
        //mash form values together into original form array obj
        if (data[i].name === joined[i].name ) {
          joined[i].ctx = data[i].value;
        }
      }
    }

  return (cb) ? cb(joined) : joined;
};

forms.insert = function (model, form, cb) {

/*

  prepares document for an insert/update

*/

  // var insert = Hoek.clone(model);
  var insert = model;

  for(var i=0;i<form.length;++i) {
    if(form[i].hasOwnProperty('db')) {
      //we're dealing with a database item
      insert[form[i].db] = form[i].ctx;
    }
  }

  return (cb) ? cb(insert) : insert;
};
