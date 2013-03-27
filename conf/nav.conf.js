//nav.conf.js
var Navigation = exports.Navigation = {};

Navigation.auth = [
  {std: null, id:'welcome', icon: 'home', cur: null, href:'/dashboard', token: null}
, {std:'Find Houses', id:'home', icon: null, cur: null, href:'/p/view', token: null}
, {std:'Account', id:'home', icon: null, cur: null, href:'/account', token: null}
, {std:'Logout', id:'home', icon: null, cur: null, href:'/logout', token: null}
];

Navigation.noauth = [
  {std:'Login', id:'home', icon: null, cur: null, href:'/auth', token: null}
, {std:'Find Houses', id:'home', icon: null, cur: null, href:'/p/view', token: null}
, {std:'Help', id:'home', icon: null, cur: null, href:'/help', token: null}
];

Navigation.property = [];

var GetNavigation = exports.GetNavigation = function(request) {

  var n = Navigation;
  var current = request.url.pathname;

  var nav = (!request.session.auth_token) ? n.noauth : n.auth;

    for(var i=0;i<nav.length;++i) {

      if (request.query.token) {
        nav[i].token = request.session.auth_token;
      }

      if (current == nav[i].href) {
        nav[i].cur = "active";
      } else {
        nav[i].cur = null;
      }
    }

    return nav;
}

//usage

  // var n = Navigation.GetNavigation(request);
  // var t = request.query.token;

  // Tokens.ReadToken(request, request.query.token, function(unsealed) {

  //   var id = unsealed.id;
  // });