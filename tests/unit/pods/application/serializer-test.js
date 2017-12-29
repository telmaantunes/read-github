import { moduleFor, test } from 'ember-qunit';

moduleFor('serializer:application', 'Unit | Serializer | application', {
  needs: ['serializer:application']
});

test('it exists', function(assert) {
  let serializer = this.subject();

  assert.ok(serializer);
});
