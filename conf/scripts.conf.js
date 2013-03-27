//scripts.conf.js

/*
@author: David Higginbotham
@email: david@hillsoft.com
*/
 
var scriptLoader = exports.scriptLoader = {};
 
scriptLoader.files = [
 
  //header scripts
  {path:'//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js', name:'jquery.min.js', where:'head', url:'/', type: 'js'},
  {path:'//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/js/bootstrap.min.js', name:'bootstrap.min.js', where:'head', url:'/', type: 'js'},
  {path:'/socket.io/socket.io.js', name:'socket.io.js', where:'head', url: '/', type: 'js'},
 
  //header css
  {path:'//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/css/bootstrap-combined.min.css', name:'bootstrap-combined.min.css', where:'head', url:'/', type: 'css'},
  {path:'/css/signup.css', name: 'signup.css', where: 'head', url: '/login', type: 'css'},
  {path:'/css/footer.css', name: 'footer.css', where: 'head', url: '/', type: 'css'},
 
  //footer scripts
  {path:'/js/helpers.client.js', name:'helpers.client.js', where:'foot', url: '/', type: 'js'},
 
];

