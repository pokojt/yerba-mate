import Ember from 'ember';

export function reviewRating(params) {
  var reviewRating = params[0].get('rating');

  if(reviewRating = "5") {
    return Ember.String.htmlSafe('<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>');
  } else if(reviewRating = "4") {
    return Ember.String.htmlSafe('<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>');
  } else if(reviewRating = "3") {
    return Ember.String.htmlSafe('<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>');
  } else if(reviewRating = "2") {
    return Ember.String.htmlSafe('<i class="fa fa-star"></i><i class="fa fa-star"></i>');
  } else {
    return Ember.String.htmlSafe('<i class="fa fa-star"></i>');
  }
}

export default Ember.Helper.helper(reviewRating);
