
var get = Em.get, set = Em.set;

App.PinchPhotoView = Em.View.extend({

  pinchOptions: {
    numberOfRequiredTouches: 2
  },

  pinchStart: function(rec, evt) {
    var width,
        image,
        scale;

    image = this.$('img');
    scale = rec.get('scale');
    width = image.width();
    image.animate({
      width: width*scale
    }, 500, "linear");
  },

  touchMove: function(event) {
    event.preventDefault();
  }


});
