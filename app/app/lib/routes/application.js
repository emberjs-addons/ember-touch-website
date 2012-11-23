App.BaseRoute = Em.Route.extend({

  init: function() {
    this._super();

    var route = '/'+this.name.decamelize(),
        templateName = this.name.decamelize(),
        viewName = this.name.charAt(0).toUpperCase() + this.name.substr(1)+'View';

    if ( !this.get('route') ) {
      this.set('route', route );
    }

    // Define automatically the outlet templateView 
    App[viewName]= Em.View.extend({
      templateName: templateName
    });
  },

  connectOutlets:  function(router, context){
    router.get('applicationController').connectOutlet( this.get('name') );
  },
  enter: function ( router ){
    //router.get('applicationController').setProperties({title: this.title, subtitle:null});
  }

});

App.Router = Ember.Router.extend({ 

  enableLogging: true,
  root:  Ember.Route.extend({
    location: 'hash',
    index:  App.BaseRoute.extend({
      route: '/'
    }),
    swipe:  App.BaseRoute.extend({
    }),
    tapAndTouchHold:  App.BaseRoute.extend({
    }),
    panAndPinch:  App.BaseRoute.extend({
    }),
    handlingEvents:  App.BaseRoute.extend({
    }),
    emberTouch:  App.BaseRoute.extend({
    }),
    objectResponsabilities:  App.BaseRoute.extend({
    })

  })
});
