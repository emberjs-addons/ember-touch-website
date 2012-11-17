var get = Em.get, set = Em.set;

console.log('Init gestures module');

App = Ember.Application.create({
  rootElement: 'body',
  ready: function() {
    this._super();
    console.log('ready');
  }
});

App.TapView = Em.View.extend({
  classNameBindings: ['isGreen'],
  classNames: ['tap-view'],
  isGreen: false,

  tapEnd: function () {
    set(this, 'isGreen', !get(this, 'isGreen') );
  }

});
App.initialize();
