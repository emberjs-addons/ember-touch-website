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

App.PinPhotoCanvasView = App.PhotoCanvas.extend({

  pinchOptions: {
    numberOfRequiredTouches: 2
  },

  pinchStart: function(rec, evt) {

    var newScale,
        scaleFactorX,
        scaleFactorY,
        canvasContext = this.get('canvasContext'),
        canvasWidth = canvasContext.canvas.width,
        canvasHeight = canvasContext.canvas.height;

    newScale = rec.get('scale') * this.scale;
    scaleFactorX = newScale * canvasWidth;
    scaleFactorY = newScale * canvasHeight;

    // Only update if the values are valid
    if (newScale > 0.25 && scaleFactorX < this.image.width && scaleFactorY < this.image.height) {
      this.scale =  newScale;
      this.refreshImage();
    }
  },

  touchMove: function(event) {
    event.preventDefault();
  }


});
