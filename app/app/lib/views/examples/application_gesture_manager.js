
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
    // whenever it dissapears gestures are unblocked
    // otherwise the user can be confused in the other examples
    // OJO: applying change to binding cannot work because the view instance
    // will be destroyed before the binding get updated
    App.gestureManager.set('isAllBlocked', false);

  }

});
