import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin');
  this.route('about');
  this.route('cart');
  this.route('category', {path: '/category/:category_id'});
  this.route('admin-category', {path: '/admin-category/:category_id'});
  this.route('product-details', {path: '/product-details/:product_id'});
});

export default Router;
