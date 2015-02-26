/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-sample-image-data',

  included: function(app) {
    app.import('vendor/assets/bey.jpg');
    app.import('vendor/assets/dowager-countess.jpg');
    app.import('vendor/assets/flippin-sweet.jpg');
    app.import('vendor/assets/shake-it-off.jpg');
    app.import('vendor/assets/so-fetch.jpg');
    app.import('vendor/assets/thought-leader.jpg');
    app.import('vendor/assets/yeezus.jpg');
  }
};
