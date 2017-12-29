import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  classNames: ['checkbox'],

  isChecked: false,
  label: ''
});
