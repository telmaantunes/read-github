import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { find, findAll } from 'ember-native-dom-helpers';

moduleForComponent('form-component', 'Integration | Component | form component', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{form-component}}`);
  assert.equal(findAll('input').length, 2);
  assert.ok(find('button'));
});
