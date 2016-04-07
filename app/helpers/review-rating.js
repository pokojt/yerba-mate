import Ember from 'ember';

export function reviewRating(params) {
  var rating = params[0].get('rating');

  if(rating == "5 stars") {
    debugger;
    return Ember.String.htmlSafe('<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>');
  } else if(rating == "4 stars") {
    return Ember.String.htmlSafe('<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>');
  } else if(rating == "3 stars") {
    return Ember.String.htmlSafe('<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>');
  } else if(rating == "2 stars" ) {
    return Ember.String.htmlSafe('<i class="fa fa-star"></i><i class="fa fa-star"></i>');
  } else {
    return Ember.String.htmlSafe('<i class="fa fa-star"></i>');
  }
}

export default Ember.Helper.helper(reviewRating);
