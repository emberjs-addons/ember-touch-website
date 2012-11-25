
var get = Em.get, set = Em.set;

App.disabledClass = Em.Mixin.create({
  classNameBindings: ['disabled'],
  disabled: false,

  toogleDisabled: function() {

    set(this, 'disabled', !get(this,'disabled') );

  }

});

