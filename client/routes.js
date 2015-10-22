Router.map( function() {
  this.route('home', {
    path: '/'
  });
});

Router.map( function() {
  this.route('ingredients');
  this.route('ingredient-view', {
    path: '/ingredients/:_id',
    data: function(){
      return IngredientDB.findOne(this.params._id);
    },
  });
  this.route('page2');
  this.route('page3');

});
