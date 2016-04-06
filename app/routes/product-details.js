import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),
  addedToCart: false,
  actions: {
    addToCart(product) {
      alert("helloooooo");
      this.set('addedToCart', true);
      this.get('shoppingCart').add(product);
    },
    removeFromCart(product) {
      this.set('addedToCart', false);
      this.get('shoppingCart').remove(product);
    }
  }
});
