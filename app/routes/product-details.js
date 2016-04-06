import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),
  addedToCart: false,
  actions: {
    addToCart(product) {
      alert("Added!");
      this.get('shoppingCart').add(product);
      this.set('addedToCart', true);
    },
    removeFromCart(product) {
      this.set('addedToCart', false);
      this.get('shoppingCart').remove(product);
    }
  }
});
