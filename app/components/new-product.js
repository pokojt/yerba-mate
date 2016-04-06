import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleDetail() {
      this.toggleProperty('showForm');
    },
    saveProduct() {
      var formInputs = {
        name: this.get('name') ? this.get('name'): "",
        seller: this.get('seller') ? this.get('seller'): "",
        category: this.get('category'),
        image: this.get('image') ? this.get('image'): "",
        description: this.get('description') ? this.get('description'): "",
        price: this.get('price') ? this.get('price'): "",
        // reviews: this.get('reviews'),
    };
      this.toggleProperty('showForm');
      this.set('name', "");
      this.set('seller', "");
      this.set('image', "");
      this.set('description', "");
      this.set('price', "");
      this.sendAction('saveProduct', formInputs);
    }
  }
});
