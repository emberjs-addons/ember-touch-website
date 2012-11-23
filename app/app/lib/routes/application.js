App.BaseRoute = Em.Route.extend({

  connectOutlets:  function(router, context){
    router.get('applicationController').connectOutlet( this.get('name') );
  },
  enter: function ( router ){
    router.get('applicationController').setProperties({title: this.title, subtitle:null});
  }

});

App.Router = Ember.Router.extend({ 
  root:  Ember.Route.extend({
    location: 'hash',

    swipe:  App.BaseRoute.extend({
      route: '/swipe',
      title: 'SwipeGesture'
    }),
    tapAndTouchHold:  App.BaseRoute.extend({
      route: '/tap_and_touch_hold',
      title: 'Tap & Touch Gestures'
    }),
    panAndPinch:  App.BaseRoute.extend({
      route: '/pan_and_pinch',
      title: 'Pan & Pinch Gestures'
    })
  })
});
