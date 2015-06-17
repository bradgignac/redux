'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = bindActionCreators;

var _lodashObjectMapValues = require('lodash/object/mapValues');

var _lodashObjectMapValues2 = _interopRequireDefault(_lodashObjectMapValues);

function bindActionCreators(actionCreators, dispatch) {
  return (0, _lodashObjectMapValues2['default'])(actionCreators, function (actionCreator) {
    return function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return dispatch(actionCreator.apply(undefined, args));
    };
  });
}

module.exports = exports['default'];