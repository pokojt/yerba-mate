import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    removeFromCart(product) {
      if(confirm("Are you sure you want to remove this from your cart?")) {
        this.sendAction('removeFromCart', product);
        // this.get('shoppingCart').remove(product);
      }
    }
  }
});
