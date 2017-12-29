import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  submit() {},

  actions: {
    submit(organization, token) {
      return this.get('submit')(organization, token);
    }
  }
});
