
var get = Em.get, set = Em.set;

App.PhotoCanvas = Em.ContainerView.extend({
  classNames: ['photo-canvas-view'],

  x: 0,
  y: 0,
  scale: 1,
  image: null,

  init: function() {
    this._super();
    this.scale = get(this, 'scale');
  },

  canvasContext: Em.computed(function() {
    return this.get('child').get('element').getContext('2d');
  }).property('currentView.element'),

  didInsertElement: function() {

    var canvasContext = this.get('canvasContext'),
        self = this,
        height = this.$().height(),
        width = this.$().width(),
        image;

    canvasContext = this.get('canvasContext');
    canvasContext.canvas.width = width;
    canvasContext.canvas.height = height;


    this.image = new Image();
    this.image.onload = function() {
      self.refreshImage();
    };

    this.image.src = "/assets/images/demo_picture.jpg";
  },

  refreshImage: function() {

    var canvasContext = this.get('canvasContext'),
        canvasWidth = canvasContext.canvas.width,
        canvasHeight = canvasContext.canvas.height;

    canvasContext.clearRect(0, 0, canvasWidth, canvasHeight);
    canvasContext.drawImage(this.image, this.x, this.y, canvasWidth, canvasHeight, 0, 0, canvasWidth*this.scale, canvasHeight*this.scale);

  },

  childViews: ['child'], 
  child: Em.View.extend({
    tagName: 'canvas'

  })

});
