import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  category: DS.belongsTo('category', { async: true}),
  image: DS.attr(),
  price: DS.attr(),
  description: DS.attr(),
  seller: DS.attr(),
  reviews: DS.hasMany('review', {async: true})
});
