//default.routes.js
var Hapi = require('hapi');
var Hoek = require('hoek');

//include socket.io
var io = require('../app/app.server').io;

//to be refactored
var FormsClass = require('../lib/forms.lib');
var FormsConf = require('../conf/forms.conf').forms;
var model = require('../conf/models.conf');

//models
var account = require('../lib/account.lib');

var ScriptManager = require('../lib/scripts.lib');

// exports.Forwarder = function (request, url) {
//     request.reply.redirect(url).send();
// }

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

      FormsClass.render(FormsConf.signup, function(formOutput) {

        request.reply.view('pages/login', {
          title: 'Login / Signup Page '
        , form: formOutput
        , embed: js
        , style: css
        }).send();
      });

      io.sockets.on('connection', function (socket) {

        socket.on('register', function (data) {
          FormsClass.join(FormsConf.signup, data, function (form) {

            var that = form;

            FormsClass.insert(model.users, that, function(insert) {

              var user = insert;
              account.createAccount(user, function(data) {
                console.log('this is the data: %s', data);
              });

            });

          });
          // FormsClass.formatForm(FormsConf.signup, data, function(form) {
          //   FormsClass.insertForm(model.users, form, function(resp) {
          //     account.createAccount(resp, function(data) {
          //
          //     });
          //   });
          // });
          // console.log(data); 

          //end of register event
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
