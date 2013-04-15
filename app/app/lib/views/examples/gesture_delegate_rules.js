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

App.GestureDelegateRule = Em.GestureDelegateRule.extend({
  statePath: null,
  shouldReceiveTouch: function(gesture, view, event) {

    var state = view._context.get( this.get('statePath') );
    return (state === 0) ? undefined : (state===1) ? false : true;

  }
});

App.GestureDelegateRule1 = App.GestureDelegateRule.create({
  statePath: 'rule1State'
});
App.GestureDelegateRule2 = App.GestureDelegateRule.create({
  statePath: 'rule2State'
});

App.GestureDelegateRule3 = App.GestureDelegateRule.create({
  statePath: 'rule3State'
});

App.GestureDelegateRule4 = App.GestureDelegateRule.create({
  statePath: 'rule4State'
});



var delegate1 = Em.GestureDelegate.create({
  rules: [App.GestureDelegateRule1, App.GestureDelegateRule2, App.GestureDelegateRule3, App.GestureDelegateRule4]
});

var delegate2 = Em.GestureDelegate.create({
  rules: [App.GestureDelegateRule3, App.GestureDelegateRule4]
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
