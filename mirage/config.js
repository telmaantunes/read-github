import config from 'read-github/config/environment';

export default function() {
  this.urlPrefix = config.host;
  this.namespace = config.namespace;

  // Core Endpoints
  this.get('/:organization/repos', (schema) => {
    return schema.db.repositoryModels;
  });

  // let these requests passthrough
  this.passthrough();
}
