import ApplicationAdapter from 'read-github/pods/application/adapter';
import config from 'read-github/config/environment';

export default ApplicationAdapter.extend({
  host: config.host,
  namespace: config.namespace,

  urlForFindAll(modelName, snapshot) {
    let { organization, token } = snapshot.adapterOptions;
    let query = `?client_id=${organization}&client_secret=${token}`;

    return `${this.host}${this.namespace}${organization}/repos${query}`;
  }
});
