import DS from 'ember-data';

export default DS.Model.extend({
  rating: DS.attr(),
  author: DS.attr(),
  content: DS.attr(),
  // date: DS.attr(),
  product: DS.belongsTo('product', { async: true})
});
