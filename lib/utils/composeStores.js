'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = composeStores;

var _lodashObjectMapValues = require('lodash/object/mapValues');

var _lodashObjectMapValues2 = _interopRequireDefault(_lodashObjectMapValues);

function composeStores(stores) {
  return function Composition(atom, action) {
    if (atom === undefined) atom = {};

    return (0, _lodashObjectMapValues2['default'])(stores, function (store, key) {
      return store(atom[key], action);
    });
  };
}

module.exports = exports['default'];