import { moduleForModel, test } from 'ember-qunit';

moduleForModel('repository-model', 'Unit | Model | repository-model', {
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  assert.ok(!!model);
});
