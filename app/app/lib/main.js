require('rsvp');
require('metamorph');
require('ember-metal');
require('ember-runtime');
require('ember-application');
require('ember-routing');
require('ember-views');
require('ember-handlebars');
require('ember-states');
require('ember-debug');

require('ember-touch');


require('app/system/application');
App.deferReadiness();

require('app/routing');
require('app/controllers');
require('app/views');

// load all the templates
require('app/templates');

App.advanceReadiness();
