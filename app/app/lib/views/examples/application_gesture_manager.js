
var get = Em.get, set = Em.set;

App.ApplicationGestureManagerButtonView = Em.View.extend({

  classNameBindings: ['btnInfo', 'btnWarning'],
  classNames: ['btn', 'btn-large'],

  btnInfo: Em.computed(function() {
    return !this.get('isGesturesBlocked');
  }).property('isGesturesBlocked'),

  btnWarning: Em.computed(function() {
    return this.get('isGesturesBlocked');
  }).property('isGesturesBlocked'),

  isGesturesBlockedBinding: 'App.gestureManager.isAllBlocked',


  click: function() {

    set(this, 'isGesturesBlocked', !get(this, 'isGesturesBlocked') );

  },


  willDestroyElement: function() {

    App.gestureManager.set('isAllBlocked', false);

  }

});
