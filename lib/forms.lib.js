//forms.lib.js
var internals = exports.FormsClass = {};

internals.makeForm = function(form, callback) {

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

  return (callback) ? callback(newForm) : newForm;
};

internals.formatForm = function(form, data, callback) {

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

  return (callback) ? callback(thisForm) : thisForm;
};

internals.insertForm = function(model, form, cb) {

  for( var i=0;i<form.length;++i ) {
    if(form[i].hasOwnProperty('db')) {
      //we're dealing with a database item
      model[form[i].db] = form[i].ctx;
    }
  }

  return (cb) ? cb(model) : model;

}