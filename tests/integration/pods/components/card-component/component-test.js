import { moduleForComponent, test } from 'ember-qunit';
import { startMirage } from 'read-github/initializers/ember-cli-mirage';
import { find, findAll } from 'ember-native-dom-helpers';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('card-component', 'Integration | Component | card component', {
  integration: true,

  beforeEach() {
    this.server = startMirage();
    this.set('repository', this.server.create('repository-model'));
  },

  afterEach() {
    this.server.shutdown();
  }
});

test('it renders', function(assert) {
  this.render(hbs`{{card-component repository=repository}}`);
  assert.ok(find('a'));
  assert.equal(findAll('p').length, 3);

  this.render(hbs`{{card-component repository=repository isExpanded=true}}`);
  assert.equal(findAll('p').length, 4);
});
