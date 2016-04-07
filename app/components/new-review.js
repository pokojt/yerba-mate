import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    toggleDetail() {
      this.toggleProperty('addReview');
    },
    saveReview() {
      var date = new Date();
      date = date.toString().substring(4, 15);
      var momentDate = moment(date).format('MM/DD/YYYY');
      var formInputs = {
        rating: this.get('rating') ? this.get('rating'): "",
        author: this.get('author') ? this.get('author'): "",
        content: this.get('content') ? this.get('content'): "",
        date: momentDate,
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
