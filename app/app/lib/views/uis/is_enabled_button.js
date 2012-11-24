
var get = Em.get, set = Em.set;

App.IsEnabledButtonView = Em.View.extend({

  classNameBindings: ['btnInfo', 'btnWarning'],
  classNames: ['btn', 'btn-large'],

  btnInfo: Em.computed(function() {
    return this.get('isEnabled');
  }).property('isEnabled'),

  btnWarning: Em.computed(function() {
    return !this.get('isEnabled');
  }).property('isEnabled'),

  tapEnd: function() {
    set(this, 'isEnabled', !get(this, 'isEnabled') );
  }

});
