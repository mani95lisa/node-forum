//forms.conf.js

var forms = exports.forms = {};

forms.signup = [
  {name: 'login', type: 'text', std: 'Login / Forum Name', ctx: null, desc: 'Suggested to use same name as forum.', db: 'u_name'},
  {name: 'pass', type: 'text', std: 'Password', ctx: null, desc: 'Strongly suggested not to use the same password as the forum!', db: 'u_password'},
  {name: 'email', type: 'text', std: 'Email', ctx: null, desc: 'Optional, this helps if you\'re forgetful like I am.', db: 'u_email'},
  {name: 'first_name', type: 'text', std: 'First Name', ctx: null, desc: 'Optional, this helps if you\'re forgetful like I am.', db: 'u_firstname'},
  {name: 'last_name', type: 'text', std: 'Last Name', ctx: null, desc: null, db: 'u_lastname'},
  {name: 'title', type: 'string', std: 'Please Sign In'}
];

