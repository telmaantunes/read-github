import { moduleForComponent, test } from 'ember-qunit';
import { find } from 'ember-native-dom-helpers';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';
import { startMirage } from 'read-github/initializers/ember-cli-mirage';

const { Object: EmberObject } = Ember;

moduleForComponent('main-page', 'Integration | Component | main page', {
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
  this.render(hbs`{{main-page}}`);
  assert.ok(find('form'));
  assert.ok(find('h1'));
  assert.notOk(find('.repositories__card'));
  assert.notOk(find('.filters'));

  this.render(hbs`{{main-page repositories=repositories}}`);
  assert.ok(find('.repositories__card'));
  assert.ok(find('.filters'));
});
