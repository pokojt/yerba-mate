import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),


  actions: {
    removeFromCart(product) {
      this.get('shoppingCart').remove(product);
      this.refresh('shoppingCart.products');
    }
  }
});
