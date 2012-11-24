
App.NavItemView = Em.ContainerView.extend({
  classNameBindings: ['active'],
  tagName: 'li',
  content: null,
  linkState: null,
  currentStateBinding: 'App.router.currentState.name',

  active: Em.computed(function() {
    return this.get('linkState') === this.get('currentState');
  }).property('linkState', 'currentState'),

  currentView: Em.View.extend({
    tagName: 'a',
    attributeBindings: ['href'],

    href: Em.computed(function() {
      return '/#/' + this.get('parentView.linkState').decamelize(); 
    }).property('parentView.linkState'),


    didInsertElement: function() {
      this.$().text( this.get('parentView.content') );
    }

  })

});
