
var get = Em.get, set = Em.set;

App.disabledClassNameBinding = Em.Mixin.create({
  classNameBindings: ['disabled'],
  disabled: false,

  toogleDisabled: function() {

    set(this, 'disabled', !get(this,'disabled') );

  }

});

App.TapDisabledView = Em.View.extend(App.disabledClassNameBinding, {

  tapEnd: function () {
    this.toogleDisabled();
  }

});

App.DoubleTapDisabledView = Em.View.extend(App.disabledClassNameBinding,{

  tapOptions: {
    numberOfTaps: 2,
    delayBetweenTaps: 300
  },

  tapEnd: function () {
    this.toogleDisabled();
  }

});

App.TouchHoldDisabledView = Em.View.extend(App.disabledClassNameBinding,{

  touchStart: function(event) {
    event.preventDefault();
  },

  touchHoldEnd: function (recognizer, event) {
    this.toogleDisabled();
  }

});

App.DoubleTouchHoldDisabledView = Em.View.extend(App.disabledClassNameBinding,{

  touchHoldOptions: {
    holdPeriod: 1000,
    numberOfRequiredTouches: 2
  },

  touchStart: function(event) {
    event.preventDefault();
  },

  touchHoldEnd: function (recognizer, event) {
    this.toogleDisabled();
  }

});
