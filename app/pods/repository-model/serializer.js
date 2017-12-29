import DS from 'ember-data';

const { JSONSerializer } = DS;

export default JSONSerializer.extend({
  attrs: {
    branches: { embedded: 'always' }
  }
});
