import Ember from 'ember';

const { Route, inject: { service }  } = Ember;

export default Route.extend({
  ajax: service(),

  actions: {
    getRepositories(organization, token) {
      let adapterOptions = { organization, token };

      return this.get('store').findAll('repository-model', { adapterOptions })
        .then((repositories) => {
          repositories.forEach((repository) => {
            if (repository.get('branches')) {
              return;
            }

            let getBranchesUrl = repository.get('branches_url').replace('{/branch}', '');
            let query = `?client_id=${organization}&client_secret=${token}`;

            this.get('ajax').request(`${getBranchesUrl}${query}`)
              .then((branches) => repository.set('branches', branches));
          });

          return repositories;
        });
    }
  }
});
