import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(product){
      if (confirm('Are you sure you want to delete this product?')) {
        this.sendAction('destroyProduct', product);
      }
    },
    editProduct(product, editFormInputs){
      this.sendAction('editProduct', product, editFormInputs);
    }
  }
});
