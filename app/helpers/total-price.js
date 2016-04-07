import Ember from 'ember';

export function totalPrice(cartItems) {
  var items = cartItems[0];
  var totalPrice = 0;

  items.forEach(function(item) {
    var price = parseInt(item.get('price'));
    totalPrice = price + totalPrice;
  });
  return totalPrice;
}

export default Ember.Helper.helper(totalPrice);
