/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    'ember-cli-babel': {
      includePolyfill: true
    },
    autoprefixer: {
      browsers: ['last 2 ios version'],
      cascade: false
    },
    svg: {
      optimize: false,
      paths: [
        'public/assets/images/'
      ]
    }
  });

  return app.toTree();
};
