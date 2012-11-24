
var get = Em.get, set = Em.set;


App.GestureDelegateCounterButtonView = Em.View.extend({

  counterBinding: 'App.router.gestureDelegateController.counter',

  classNameBindings: ['btnInfo', 'btnWarning'],
  classNames: ['btn', 'btn-large'],

  btnInfo: Em.computed(function() {
    return this.get('counter') === 0 ? false : ( this.get('counter') % 3 ) === 0;
  }).property('counter'),

  btnWarning: Em.computed(function() {
    return !this.get('btnInfo');
  }).property('btnInfo'),

  tapEnd: function() {

    set(this, 'counter', get(this, 'counter')+1);

  }

});


var delegate = Em.GestureDelegate.create({
    name: 'button_state_delegate',
    counterBinding: 'App.router.gestureDelegateController.counter',
    shouldReceiveTouch: function(gesture, view, event) {
      return this.get('counter') === 0 ? false : ( this.get('counter') % 3 ) === 0;
    }
});

App.GestureDelegateLetterSwipeView = App.LetterSwipeView.extend({

  swipeOptions: {
    direction: Em.OneGestureDirection.Left | Em.OneGestureDirection.Right,
    cancelPeriod: 100,
    swipeThreshold: 10,
    delegate: delegate
  }

});

App.GestureDelegatePanPhotoCanvasView = App.PanPhotoCanvasView.extend({

  panOptions: {
    delegate: delegate
  }

});
