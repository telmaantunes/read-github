import { moduleForModel, test } from 'ember-qunit';

moduleForModel('repository-model', 'Unit | Serializer | repository model', {
  needs: ['serializer:repository-model']
});

test('it serializes records', function(assert) {
  let record = this.subject();
  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
