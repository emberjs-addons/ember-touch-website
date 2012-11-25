var get = Em.get, set = Em.set;


App.PressButtonView = Em.View.extend(App.disabledClass, {

  pressOptions: {
    pressPeriodThreshold: 1000
  },

  pressEnd: function () {
    this.toogleDisabled();
  }


});
