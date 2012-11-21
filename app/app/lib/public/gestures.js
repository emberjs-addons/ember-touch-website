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

App.SwipeView = Em.View.extend({
  letter: 'A',
  swipeOptions: {
    direction: Em.OneGestureDirection.Left | Em.OneGestureDirection.Right,
    canelPeriod: 100,
    swipeThreshold: 10
  },

  changeChar: function(offset) {
    var asciiCode;

    asciiCode = this.get('letter').charCodeAt(0);
    asciiCode += offset;

    // Keep it betweet A and Z
    if (asciiCode < 65) asciiCode = 90;
    if (asciiCode > 90) asciiCode = 65;

    this.set('letter', String.fromCharCode(asciiCode));
  },

  swipeEnd: function(recognizer, evt) {
    var direction = recognizer.get('swipeDirection');

    // Right
    if (direction === 1) {
      this.changeChar(1);
    // Left
    } else if (direction === 2) {
      this.changeChar(-1);
    }
  }

});

App.PanAndPinchView = Em.View.extend({
  classNames: ['pan-pinch-view'],
  canvasWidth: 280,
  canvasHeight: 250,
  imageWidth: null,
  imageHeight: null,
  xPos: null,
  yPos: null,
  scale: 1,
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
      set(self, 'xPos', 0);
      set(self, 'yPos', 0);
      self.refreshImage();
    };

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
        x,
        y,
        canvasWidth,
        canvasHeight;

    var SMOOTH_FACTOR = 5;

    val = rec.get('translation');

    canvasWidth = get(this, 'canvasWidth');
    canvasHeight = get(this, 'canvasHeight');

    x = Math.min(get(this, 'xPos') + SMOOTH_FACTOR * val.x,
      get(this, 'imageWidth') - canvasWidth * get(this, 'scale'));

    y = Math.min(get(this, 'yPos') + SMOOTH_FACTOR * val.y,
      get(this, 'imageHeight') - canvasHeight * get(this, 'scale'));

    x = Math.max(x, 0);
    y = Math.max(y, 0);

    set(this, 'xPos', x);
    set(this, 'yPos', y);

    this.refreshImage();
  },

  pinchStart: function(rec, evt) {
    var scale,
        newScale,
        previousScale,
        scaleFactorX,
        scaleFactorY;

    scale = rec.get('scale');
    previousScale = get(this, 'scale');
    newScale = scale * previousScale;
    scaleFactorX = newScale * get(this, 'canvasWidth');
    scaleFactorY = newScale * get(this, 'canvasHeight');

    // Only update if the values are valid
    if (newScale > 0.25 && scaleFactorX < get(this, 'imageWidth') && scaleFactorY < get(this, 'imageHeight')) {
      set(this, 'scale', scale * get(this, 'scale'));
      this.refreshImage();
    }
  },

  refreshImage: function() {
    var val,
      canvas,
      image,
      x,
      y,
      scale,
      canvasWidth,
      canvasHeight;

    canvasWidth = get(this, 'canvasWidth');
    canvasHeight = get(this, 'canvasHeight');

    canvas = get(this, 'canvas');
    image = get(this, 'image');
    x = get(this, 'xPos');
    y = get(this, 'yPos');
    scale = get(this, 'scale');

    canvas.clearRect(0, 0, canvasWidth, canvasHeight);

    canvas.drawImage(image, x, y, canvasWidth * scale, canvasHeight * scale, 0, 0, canvasWidth, canvasHeight);
  }
});

App.TestView = Em.View.extend({
  templateName: 'test'
});
App.initialize();
