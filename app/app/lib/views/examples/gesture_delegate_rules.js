var get = Em.get, set = Em.set;

App.GestureDelegateRulesButtonView = Em.View.extend({

  ruleState: 0,

  classNameBindings: ['btnInfo'],
  classNames: ['btn', 'btn-large'],

  ruleValue: Em.computed(function() {
    var ruleState =  this.get('ruleState');
    return (ruleState === 0 ) ? 'undefined' : (ruleState === 1) ? 'false' : 'true';
  }).property('ruleState'),

  tapEnd: function() {
    var ruleState = get(this, 'ruleState') + 1;
    if ( ruleState === 3 ) ruleState = 0;
    set(this, 'ruleState', ruleState);
  }

});

App.DelegateRule = Em.DelegateRule.extend({
  state: 0,
  shouldReceiveTouch: function(gesture, view, event) {
    var state = this.get('state');
    return (state === 0) ? undefined : (state===1) ? false : true;
  }
});

App.DelegateRule1 = App.DelegateRule.create({
  stateBinding: 'App.router.gestureDelegateRulesController.rule1State'
});
App.DelegateRule2 = App.DelegateRule.create({
  stateBinding: 'App.router.gestureDelegateRulesController.rule2State'
});

App.DelegateRule3 = App.DelegateRule.create({
  stateBinding: 'App.router.gestureDelegateRulesController.rule3State'
});

App.DelegateRule4 = App.DelegateRule.create({
  stateBinding: 'App.router.gestureDelegateRulesController.rule4State'
});



var delegate1 = Em.GestureDelegate.create({
  rules: [App.DelegateRule1, App.DelegateRule2, App.DelegateRule3, App.DelegateRule4]
});

var delegate2 = Em.GestureDelegate.create({
  rules: [App.DelegateRule3, App.DelegateRule4]
});


App.GestureDelegateRulesLetterSwipeView = App.LetterSwipeView.extend({

  swipeOptions: {
    direction: Em.OneGestureDirection.Left | Em.OneGestureDirection.Right,
    cancelPeriod: 100,
    swipeThreshold: 10,
    delegate: delegate1
  }

});

App.GestureDelegateRulesPanPhotoCanvasView = App.PanPhotoCanvasView.extend({

  panOptions: {
    delegate: delegate2
  }

});
