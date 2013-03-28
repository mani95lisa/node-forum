//forms.lib.js

/*
  @author dhigginbotham <david@hillsoft.com>
  this should handle forms from config files based in 
  /conf/forms.conf.js

  this class should handle most of the needed functions for 
  form handling with socket.io/jquery.serializeArray()
*/

var forms = module.exports = {};

forms.render = function (form, cb) {

/*
  this renders the form for the clientside

*/
  var thisForm = form;
  var newForm = {};

  for ( var i=0;i<thisForm.length;++i) {
    //make this form if it doesn't exist
    if (!newForm[thisForm[i].type]) {
      newForm[thisForm[i].type] = [];
    } 
  }

  for ( var i=0;i<thisForm.length;++i) {
    //make form array with types mashed to their own array
    if (newForm[thisForm[i].type]) {
      //push the values into the array
      newForm[thisForm[i].type].push(thisForm[i]);
    } 
  }

  return (cb) ? cb(newForm) : newForm;

};

forms.join = function (form, data, cb) {

/*
  this merges user input with the original form model

*/
  var thisForm = form;
  var currentForm = data;

    for ( var i=0;i<currentForm.length;++i) {
      //if exists
      if (currentForm[i].hasOwnProperty('name')) {
        //mash form values together into original form array obj
        if (currentForm[i].name === thisForm[i].name ) {
          thisForm[i].ctx = currentForm[i].value;
        }
      
      } else {
        //don't be an idiot and put nothing in...
        thisForm = {message: 'you seem to be missing some values...'};
      }
    }

  return (cb) ? cb(thisForm) : thisForm;
};

forms.insert = function (model, form, cb) {

/*
  prepares document for an insert/update

*/
  for( var i=0;i<form.length;++i ) {
    if(form[i].hasOwnProperty('db')) {
      //we're dealing with a database item
      model[form[i].db] = form[i].ctx;
    }
  }

  return (cb) ? cb(model) : model;

};
