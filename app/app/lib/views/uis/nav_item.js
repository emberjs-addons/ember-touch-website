

App.NavItemView = Em.ContainerView.extend({
  classNameBindings: ['active'],
  tagName: 'li',
  content: null,

  route: null,

  router: Ember.computed(function() {
    return this.get('controller').container.lookup('router:main');
  }),

  active: Em.computed(function() {
    return this.get('router').isActive(this.get('route'));
  }).property('route', 'router.url'),


  currentView: Em.View.extend({
    tagName: 'a',
    attributeBindings: ['href'],

    href: Em.computed(function() {
      var router = this.get('parentView.router');
      var state = this.get('parentView.route');
      return router.generate(state);
    }).property('parentView.route'),


    didInsertElement: function() {
      this.$().text( this.get('parentView.content') );
    }

  })

});
