import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleDetail() {
      this.toggleProperty('showCategoryForm');
    },
    saveCategory() {
      var formInputs = {
        name: this.get('name') ? this.get('name'): ""
      };
      this.toggleProperty('showCategoryForm');
      this.set('name', "");
      this.sendAction('saveCategory', formInputs);
    }
  }
});
