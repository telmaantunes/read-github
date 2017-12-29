import { moduleForComponent, test } from 'ember-qunit';
import { startMirage } from 'read-github/initializers/ember-cli-mirage';
import { findAll } from 'ember-native-dom-helpers';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

const { Object: EmberObject } = Ember;

moduleForComponent('filters-component', 'Integration | Component | filters component', {
  integration: true,

  beforeEach() {
    this.server = startMirage();
    this.set('repositories', [new EmberObject(this.server.create('repository-model'))]);
  },

  afterEach() {
    this.server.shutdown();
  }
});

test('it renders', function(assert) {
  this.render(hbs`{{filters-component repositories=repositories}}`);
  assert.ok(findAll('.checkbox').length, 2);
});
