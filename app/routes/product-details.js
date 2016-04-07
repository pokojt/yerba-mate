import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),
  // myFavorites: Ember.inject.service(),
  addedToCart: false,
  model(params) {
    return this.store.findRecord('product', params.product_id);
  },
  actions: {
    addToCart(product) {
      alert("Added!");
      this.get('shoppingCart').add(product);
      this.set('addedToCart', true);
    },
    removeFromCart(product) {
      this.set('addedToCart', false);
      this.get('shoppingCart').remove(product);
    },
    // addToFavorites(favorite) {
    //   this.get('myFavorites').add(favorite);
    // },
    saveReview(formInputs) {
      var newReview = this.store.createRecord('review', formInputs);
      var product = formInputs.product;
      product.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        return product.save();
      });
      this.transitionTo('product-details', formInputs.product);
    }
  }
});
