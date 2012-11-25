
var get = Em.get, set = Em.set;

App.PinchPhotoCanvasView = App.PhotoCanvas.extend({

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
