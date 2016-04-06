import Ember from 'ember';

export default Ember.Component.extend({
  editFormShow: false,
  actions: {
    toggleEdit() {
      this.toggleProperty('editFormShow');
    },
    editProduct(product) {
      var editFormInputs = {
        name: this.get('name'),
        seller: this.get('seller'),
        category: this.get('category'),
        image: this.get('image'),
        description: this.get('description'),
        price: this.get('price'),
        reviews: this.get('reviews'),
    };
      this.toggleProperty('editFormShow');
      this.sendAction('editProduct', product, editFormInputs);
    }
  }
});
