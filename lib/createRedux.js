'use strict';

var _bind = require('babel-runtime/helpers/bind')['default'];

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = createRedux;

var _Redux = require('./Redux');

var _Redux2 = _interopRequireDefault(_Redux);

function createRedux() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var redux = new (_bind.apply(_Redux2['default'], [null].concat(args)))();

  return {
    subscribe: redux.subscribe.bind(redux),
    dispatch: redux.dispatch.bind(redux),
    getState: redux.getState.bind(redux),
    getDispatcher: redux.getDispatcher.bind(redux),
    replaceDispatcher: redux.replaceDispatcher.bind(redux)
  };
}

module.exports = exports['default'];