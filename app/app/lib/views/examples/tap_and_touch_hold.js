
var get = Em.get, set = Em.set;

App.TapDisabledView = Em.View.extend(App.disabledClass, {

  tapEnd: function () {
    this.toogleDisabled();
  }

});

App.DoubleTapDisabledView = Em.View.extend(App.disabledClass,{

  tapOptions: {
    numberOfTaps: 2,
    delayBetweenTaps: 300
  },

  tapEnd: function () {
    this.toogleDisabled();
  }

});

App.TouchHoldDisabledView = Em.View.extend(App.disabledClass,{

  touchStart: function(event) {
    event.preventDefault();
  },

  touchHoldEnd: function (recognizer, event) {
    this.toogleDisabled();
  }

});

App.DoubleTouchHoldDisabledView = Em.View.extend(App.disabledClass,{

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
