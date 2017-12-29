import DS from 'ember-data';
import config from 'read-github/config/environment';

const { RESTAdapter } = DS;

export default RESTAdapter.extend({
  host: config.host,
  namespace: config.namespace
});
