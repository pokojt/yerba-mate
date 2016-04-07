import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleDetail() {
      this.toggleProperty('addReview');
    },
    saveReview() {
      var formInputs = {
        rating: this.get('rating') ? this.get('rating'): "",
        author: this.get('author') ? this.get('author'): "",
        content: this.get('content') ? this.get('content'): "",
        // date: this.get('date'),
        product: this.get('product'),
    };
      this.toggleProperty('addReview');
      this.set('rating', "");
      this.set('author', "");
      this.set('content', "");
      this.sendAction('saveReview', formInputs);
    }
  }
});
