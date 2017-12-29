import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { find } from 'ember-native-dom-helpers';

moduleForComponent('checkbox-component', 'Integration | Component | checkbox component', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{checkbox-component label="my-checkbox" isChecked=false}}`);
  assert.ok(find('input'));
  assert.ok(find('label'));
  assert.notOk(find('svg'));

  this.render(hbs`{{checkbox-component label="my-checkbox" isChecked=true}}`);
  assert.ok(find('svg'));
});
