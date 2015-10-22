IngredientDB = new Mongo.Collection('ingredients')

Meteor.startup(function () {
    // code to run on server at startup
    if (IngredientDB.findOne() == null) {
      console.log("no ingredients db");
      var ings = JSON.parse(Assets.getText('ingredient.json'));
      // console.log(ings);
      _.each(ings, function(ing) {
        IngredientDB.insert(ing);
      });
    }
});