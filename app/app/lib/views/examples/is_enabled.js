
var get = Em.get, set = Em.set;


App.IsEnabledLetterSwipeView = App.LetterSwipeView.extend({

  swipeIsEnabled: null,

  swipeOptions: {
    direction: Em.OneGestureDirection.Left | Em.OneGestureDirection.Right,
    cancelPeriod: 100,
    swipeThreshold: 10,
    isEnabledBinding: 'swipeIsEnabled'
  }

});

App.IsEnabledPanPhotoCanvasView = App.PanPhotoCanvasView.extend({


  panIsEnabled: null,

  panOptions: {
    numberOfRequiredTouches: 1,
    isEnabledBinding: 'panIsEnabled'
  }

});
