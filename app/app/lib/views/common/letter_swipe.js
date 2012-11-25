
var get = Em.get, set = Em.set;


App.LetterSwipeView = Em.View.extend({

  letter: 'A',
  classNames: ['letter-swipe-view'],
  templateName: 'letter_swipe',

  swipeOptions: {
    direction: Em.OneGestureDirection.Left | Em.OneGestureDirection.Right,
    cancelPeriod: 100,
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

  touchMove: function(event) {
    event.preventDefault();
  },

  swipeEnd: function(recognizer, evt) {
    var direction = recognizer.get('swipeDirection');

    if (direction === Em.OneGestureDirection.Right) {
      this.changeChar(1);
    } else if (direction === Em.OneGestureDirection.Left) {
      this.changeChar(-1);
    }
  }

});
