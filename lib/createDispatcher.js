'use strict';

var _toConsumableArray = require('babel-runtime/helpers/to-consumable-array')['default'];

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = createDispatcher;

var _utilsComposeMiddleware = require('./utils/composeMiddleware');

var _utilsComposeMiddleware2 = _interopRequireDefault(_utilsComposeMiddleware);

function createDispatcher(store) {
  var middlewares = arguments[1] === undefined ? [] : arguments[1];

  return function dispatcher(initialState, setState) {
    var state = setState(store(initialState, {}));

    function dispatch(action) {
      state = setState(store(state, action));
      return action;
    }

    function getState() {
      return state;
    }

    var finalMiddlewares = typeof middlewares === 'function' ? middlewares(getState) : middlewares;

    return _utilsComposeMiddleware2['default'].apply(undefined, _toConsumableArray(finalMiddlewares).concat([dispatch]));
  };
}

module.exports = exports['default'];