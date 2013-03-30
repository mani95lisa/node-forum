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
  
  var joined = Hoek.clone(form);

    for (var i=0;i<data.length;++i) {

      (function() {

        var k = i;

          process.nextTick(function() {
            
            //mash form values together into original form array obj
            if (data[k].hasOwnProperty('name') && (data[k].name === joined[k].name)) {
              joined[k].ctx = data[k].value;
            };
          });

      })();

    };

  cb(joined);
};

forms.insert = function (model, form, cb) {

  var insert = Hoek.clone(model);

  for(var i=0;i<form.length;++i) {

    (function() {

      var j = i;

        process.nextTick(function() {
          if(form[j].hasOwnProperty('db')) {

            //we're dealing with a database item
            console.log('we made it to our next tick at %s', j);
            insert[form[j].db] = form[j].ctx;
          };
        });
      
    })();

  };
  //send our callback through
  cb(insert);
};
