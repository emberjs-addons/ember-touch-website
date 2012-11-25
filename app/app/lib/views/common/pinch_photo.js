
var get = Em.get, set = Em.set;

App.PinchPhotoView = Em.View.extend({

  pinchOptions: {
    numberOfRequiredTouches: 2
  },

  pinchChange: function(rec, evt) {
    var width,
        image,
        scale;

    image = this.$('img');
    scale = rec.get('scale');
    width = image.width();
    image.width(width*scale);
  },

  touchMove: function(event) {
    event.preventDefault();
  }


});
