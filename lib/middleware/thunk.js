'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

_Object$defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = thunkMiddleware;

function thunkMiddleware(getState) {
  return function (next) {
    var recurse = function recurse(action) {
      return typeof action === 'function' ? action(recurse, getState) : next(action);
    };

    return recurse;
  };
}

module.exports = exports['default'];