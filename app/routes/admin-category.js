import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('category', params.category_id);
  },
  actions: {
    saveProduct(formInputs) {
      var newProduct = this.store.createRecord('product', formInputs);
      var category = formInputs.category;
      category.get('products').addObject(newProduct);
      newProduct.save().then(function() {
        return category.save();
      });
      this.transitionTo('admin-category', formInputs.category);
    },
    destroyProduct(product){
      product.destroyRecord();
      this.transitionTo('admin-category');
    },
    editProduct(product, editFormInputs){
      Object.keys(editFormInputs).forEach(function(key) {
        if(editFormInputs[key]!==undefined) {
          product.set(key, editFormInputs[key] );
        }
      });
      product.save();
      this.transitionTo('admin-category');
    }
  }
});
