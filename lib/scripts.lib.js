//scripts.lib.js
/*
@author: David Higginbotham
@email: david@hillsoft.com
*/

var colors = require('colors');

exports.ManageScriptLoader = function(request, type, callback) {
 
  var scripts = require('../conf/scripts.conf').scriptLoader.files; //require the conf file
 
  var loaded = {
    head: [],
    foot: []
  };
  
  for(var i=0;i<scripts.length;++i) {
 
    var f = scripts[i];
 
    if ( (f.where === 'head' && f.url === request.url.pathname && f.type === type ) || (f.where === 'head' && f.url === '/' && f.type === type ) ) {
      // console.log(colors.cyan('   loading - ' + f.name + ' to ') + f.where);
      loaded.head.push(f);
    }
 
    if ( (f.where === 'foot' && f.url === request.url.pathname && f.type === type ) || (f.where === 'foot' && f.url === '/' && f.type === type ) ) {
      // console.log(colors.cyan('   loading - ' + f.name + ' to ') + f.where);
      loaded.foot.push(f);
    }
 
  }
 
  return (callback) ? callback(loaded) : loaded;
}
