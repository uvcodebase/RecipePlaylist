//IngredientDB = nget_ingredients

Template.ingredients.helpers({
    names: function () {
        return IngredientDB.find({}, {fields: {nameBase: 1}});
    }
});

Template.ingredients.events({
    'click button': function () {
        // increment the counter when button is clicked
        Session.set("counter", Session.get("counter") + 1);
    }
});
