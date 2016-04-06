import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('category');
  },
  actions: {
   saveCategory(formInputs) {
     var newCategory = this.store.createRecord('category', formInputs);
     newCategory.save();
     this.transitionTo('admin');
   },
   editCategory(category, editCategoryInputs) {
     Object.keys(editCategoryInputs).forEach(function(key) {
       if(editCategoryInputs[key]!==undefined) {
         category.set(key, editCategoryInputs[key]);
       }
     });
     category.save();
     this.transitionTo('admin');
   }
 }
});
