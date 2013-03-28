//scripts.lib.js
/*
  @author dhigginbotham <david@hillsoft.com>
  
  this method will handle a wordpress-like enqueue script
  it's not dynamic like the form methods, because i don't think it needs
  to be, but that could change...

  -- current limitation: 
  --  
  --  i plan on including 'hapi.js' server routes to match the configs
  --  so i can load scripts dynamically on { path: '/s/{path}' } type
  --  matches. 
*/

var colors = require('colors');

exports.ManageScriptLoader = function(request, type, callback) {
 
  var scripts = require('../conf/scripts.conf').files; //require the conf file
 
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
