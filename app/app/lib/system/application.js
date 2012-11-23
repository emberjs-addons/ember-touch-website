var get = Em.get, set = Em.set;

console.log('Init gestures module');

App = Ember.Application.create({
  rootElement: 'body',
  ready: function() {
    this._super();
    console.log('ready');
  }
});

App.initialize();
