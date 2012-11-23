
var get = Em.get, set = Em.set;

App.TapView = Em.View.extend({
  classNameBindings: ['isGreen'],
  classNames: ['tap-view'],
  isGreen: false,

  tapEnd: function () {
    set(this, 'isGreen', !get(this, 'isGreen') );
  }

});

App.DoubleTapView = Em.View.extend({
  classNameBindings: ['isGreen'],
  classNames: ['tap-view'],
  isGreen: false,

  tapOptions: {
    numberOfTaps: 2,
    delayBetweenTaps: 300
  },

  tapEnd: function () {
    set(this, 'isGreen', !get(this, 'isGreen') );
  }

});

App.TouchHoldView = Em.View.extend({
  classNameBindings: ['isGreen'],
  classNames: ['tap-view'],
  isGreen: false,

  touchHoldEnd: function (recognizer, event) {
    set(this, 'isGreen', !get(this, 'isGreen') );
  }

});

App.DoubleTouchHoldView = Em.View.extend({
  classNameBindings: ['isGreen'],
  classNames: ['tap-view'],
  isGreen: false,

  touchHoldOptions: {
    holdPeriod: 1000,
    numberOfRequiredTouches: 2
  },

  touchHoldEnd: function (recognizer, event) {
    set(this, 'isGreen', !get(this, 'isGreen') );
  }

});


App.TapAndTouchHoldExampleView = App.ExampleView.extend({
  headerTitle: 'Tap & TouchHold Gestures',
  headerSubtitle: null,
  templateName: 'tap_and_touch_hold'
});
