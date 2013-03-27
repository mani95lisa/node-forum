//default.routes.js
var Hapi = require('hapi')
  , Hoek = require('hoek');

//include socket.io
var io = require('../app/app.server').io;

var FormsClass = require('../lib/forms.lib').FormsClass;
var FormsConf = require('../conf/forms.conf').forms;

var ScriptManager = require('../lib/scripts.lib');

exports.Forwarder = function (request, url) {
    return request.reply.redirect(url).send();
}

exports.HomePage = function (request) {

  ScriptManager.ManageScriptLoader(request, 'css', function(css) {
    ScriptManager.ManageScriptLoader(request, 'js', function(js) {

      request.reply.view('pages/index', {
        title: 'Node Forum '
      , embed: js
      , style: css
      }).send();

    });
  });
}

exports.LoginPage = function (request) {

  ScriptManager.ManageScriptLoader(request, 'css', function(css) {

    ScriptManager.ManageScriptLoader(request, 'js', function(js) {

      FormsClass.makeForm(FormsConf.signup, function(formOutput) {
        request.reply.view('pages/login', {
          title: 'Login / Signup Page '
        , form: formOutput
        , embed: js
        , style: css
        }).send();
      });

      io.sockets.on('connection', function (socket) {

        socket.on('register', function (data) {
          FormsClass.formatForm(FormsConf.signup, data, function(form) {
            console.log(form);
          });
        });
      });

    });
  });

}

exports.ChatPage = function (request) {

  ScriptManager.ManageScriptLoader(request, 'css', function(css) {

    ScriptManager.ManageScriptLoader(request, 'js', function(js) {

      request.reply.view('pages/index', {
        title: 'The Unofficial RWI Chat(beta) '
        , embed: js
        , style: css
      }).send();

    });
  });
}
