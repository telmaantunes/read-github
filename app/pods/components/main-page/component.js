import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  organization: null,
  token: null,
  repositories: null,
  repositoriesError: null,

  getRepositories() {},

  actions: {
    getRepositories(organization, token) {
      this.get('getRepositories')(organization, token)
        .then((repositories) => {
          this.setProperties({ repositories, 'repositoriesError': false });
        })
        .catch(() => this.set('repositoriesError', true));
    }
  }
});
