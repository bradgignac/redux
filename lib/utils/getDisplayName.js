'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

_Object$defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = getDisplayName;

function getDisplayName(Component) {
  return Component.displayName || Component.name || 'Component';
}

module.exports = exports['default'];