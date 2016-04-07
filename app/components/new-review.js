import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    toggleDetail() {
      this.toggleProperty('addReview');
    },
    saveReview() {
      var date = new Date();
      var time = date.toString().substring(16, 24);
      date = date.toString().substring(4, 15);
       var dateAndTime = date + ' ' + time;
      var momentDateAndTime = moment(dateAndTime).format('MM/DD/YYYY hh:mm:ss a');
      var formInputs = {
        rating: this.get('rating') ? this.get('rating'): "",
        author: this.get('author') ? this.get('author'): "",
        content: this.get('content') ? this.get('content'): "",
        date: momentDateAndTime,
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
