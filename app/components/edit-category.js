import Ember from 'ember';

export default Ember.Component.extend({
  editCategoryShow: false,
  actions: {
    toggleEdit() {
      this.toggleProperty('editCategoryShow');
    },
    editCategory(category) {
      var editCategoryFormInputs = {
        title: this.get('name'),
    };
      this.toggleProperty('editCategoryShow');
      this.sendAction('editCategory', category, editCategoryFormInputs);
    }
  }
});
