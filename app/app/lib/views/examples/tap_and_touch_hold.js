
var get = Em.get, set = Em.set;

App.disabledClassNameBinding = Em.Mixin.create({
  classNameBindings: ['disabled'],
  disabled: false,

  toogleDisabled: function() {

    set(this, 'disabled', !get(this,'disabled') );

  }

});

App.TapView = Em.View.extend(App.disabledClassNameBinding, {

  tapEnd: function () {
    this.toogleDisabled();
  }

});

App.DoubleTapView = Em.View.extend(App.disabledClassNameBinding,{

  tapOptions: {
    numberOfTaps: 2,
    delayBetweenTaps: 300
  },

  tapEnd: function () {
    this.toogleDisabled();
  }

});

App.TouchHoldView = Em.View.extend(App.disabledClassNameBinding,{

  touchStart: function(event) {
    event.preventDefault();
  },

  touchHoldEnd: function (recognizer, event) {
    this.toogleDisabled();
  }

});

App.DoubleTouchHoldView = Em.View.extend(App.disabledClassNameBinding,{

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
