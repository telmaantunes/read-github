import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
  name: attr('string'),
  html_url: attr('string'),
  private: attr('boolean'),
  language: attr('string'),
  branches_url: attr('string'),
  branches: attr(),
  visible: attr('boolean', { defaultValue: true })
});
