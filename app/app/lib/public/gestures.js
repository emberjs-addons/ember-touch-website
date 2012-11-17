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

App.PanAndPinchView = Em.View.extend({
  classNames: ['pan-pinch-view'],
  canvasWidth: 280,
  canvasHeight: 250,
  imageWidth: null,
  imageHeight: null,
  xCenter: null,
  yCenter: null,
  canvas: null,
  image: null,

  didInsertElement: function() {
    //debugger;
    var canvas,
        self,
        image;

    self = this;
    canvas = document.getElementById('canvas').getContext('2d');
    canvas.canvas.width = get(this, 'canvasWidth');
    canvas.canvas.height = get(this, 'canvasHeight');

    set(this, 'canvas', canvas);

    image = new Image();
    image.onload = function() {
      set(self, 'image', image);
      set(self, 'imageWidth', image.width);
      set(self, 'imageHeight', image.height);
      set(self, 'xCenter', 0);
      set(self, 'yCenter', 0);
      get(self, 'canvas').drawImage(image, 0, 0);
    };
    //image.src = "http://farm9.staticflickr.com/8300/7856113180_91accb0d1b_b.jpg";
    image.src = "/assets/images/demo_picture.jpg";
  },

  panOptions: {
    numberOfRequiredTouches: 1
  },

  pinchOptions: {
    numberOfRequiredTouches: 2
  },

  panChange: function(rec, evt) {
    var val,
        canvas,
        image,
        x,
        y,
        canvasWidth,
        canvasHeight;

    var SCALE = 5;

    val = rec.get('translation');
    canvas = get(this, 'canvas');
    image = get(this, 'image');

    canvasWidth = get(this, 'canvasWidth');
    canvasHeight = get(this, 'canvasHeight');

    x = Math.min(get(this, 'xCenter') + SCALE * val.x,
      get(this, 'imageWidth') - canvasWidth);

    y = Math.min(get(this, 'yCenter') + SCALE * val.y,
      get(this, 'imageHeight') - canvasHeight);

    x = Math.max(x, 0);
    y = Math.max(y, 0);

    set(this, 'xCenter', x);
    set(this, 'yCenter', y);

    canvas.clearRect(0, 0, canvasWidth, canvasHeight);

    canvas.drawImage(image, x, y, canvasWidth, canvasHeight, 0, 0, canvasWidth, canvasHeight);
  },

  pinchChange: function(rec, evt) {
    var scale = rec.get('scale');
    console.log("SCALE", scale);
  }
});

App.TestView = Em.View.extend({
  templateName: 'test'
});
App.initialize();
