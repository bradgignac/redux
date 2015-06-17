"use strict";

var _Object$defineProperty = require("babel-runtime/core-js/object/define-property")["default"];

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = composeMiddleware;

function composeMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return middlewares.reduceRight(function (composed, m) {
    return m(composed);
  });
}

module.exports = exports["default"];