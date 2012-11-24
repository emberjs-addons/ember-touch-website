
var get = Em.get, set = Em.set;

App.PanPhotoCanvasView = App.PhotoCanvas.extend({

  panOptions: {
    numberOfRequiredTouches: 1
  },

  panChange: function(rec, evt) {

    var SMOOTH_FACTOR = 5,
        x, y, 
        val = rec.get('translation'),
        canvasContext = this.get('canvasContext'),
        image = this.image;

    x = Math.min(this.x + SMOOTH_FACTOR * val.x,
      image.width - canvasContext.canvas.width * this.scale);

    y = Math.min(this.y + SMOOTH_FACTOR * val.y,
      image.height - canvasContext.canvas.height * this.scale);

    x = Math.max(x, 0);
    y = Math.max(y, 0);

    this.x = x;
    this.y = y;

    this.refreshImage();
  },

  touchMove: function(event) {
    event.preventDefault();
  }

});

App.NonSimultaneouslyPanPhotoCanvasView = App.PanPhotoCanvasView.extend({

  panOptions: {
    numberOfRequiredTouches: 1,
    simultaneously: false
  },

  panEnd: function(recognizer, evt) {
    App.get('gestureManager').unblock(this);
  },

  panCancel: function(recognizer) {
    App.get('gestureManager').unblock(this);
  }

});
