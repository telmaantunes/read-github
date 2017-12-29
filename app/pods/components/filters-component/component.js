import Ember from 'ember';

const { Component, isNone } = Ember;

export default Component.extend({
  classNames: 'filters',

  repositories: null,
  showPrivate: true,
  showPublic: true,
  languages: [],

  init() {
    this._super(...arguments);

    this._initializeLanguages();
  },

  didRender() {
    this._super(...arguments);

    this._handleFilters();
  },

  _initializeLanguages() {
    let languages = [];

    this.get('repositories').forEach((repository) => {
      let language = repository.get('language');

      if (isNone(language) || languages.find(({ label }) => label === language)) {
        return;
      }

      languages.push({ label: language, isChecked: true });
    });

    this.set('languages', languages);
  },

  _handleFilters() {
    let restrictions = this._getRestrictions();

    this.get('repositories').forEach((repository) => {
      repository.set('visible', this._verifyRestrictions(restrictions, repository));
    });
  },

  _getRestrictions() {
    let hideLanguages = [];

    this.get('languages').forEach((language) => {
      if (!language.isChecked) {
        hideLanguages.push(language.label);
      }
    });

    return {
      hidePrivate: !this.get('showPrivate'),
      hidePublic: !this.get('showPublic'),
      hideLanguages
    };
  },

  _verifyRestrictions(restrictions, repository) {
    if ((restrictions.hidePrivate && repository.get('private'))
      || (restrictions.hidePublic && !repository.get('private'))
      || (restrictions.hideLanguages.includes(repository.get('language')))) {
      return false;
    }

    return true;
  }
});
