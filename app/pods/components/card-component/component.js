import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  classNames: ['repositories__card'],
  classNameBindings: ['isExpanded:repositories__card--expanded'],

  repository: null,
  isExpanded: false,

  click() {
    this.toggleProperty('isExpanded');
  }
});
