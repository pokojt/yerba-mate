import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),
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
    saveReview(formInputs) {
      //debugger;
      //alert(formInputs.product);
      var newReview = this.store.createRecord('review', formInputs);
      var product = formInputs.product;
      product.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        return product.save();
      });
      //alert('transitioning!');
      this.transitionTo('product-details', formInputs.product);
    }
  }
});
