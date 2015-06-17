"use strict";

var _Object$defineProperty = require("babel-runtime/core-js/object/define-property")["default"];

var _Object$keys = require("babel-runtime/core-js/object/keys")["default"];

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = shallowEqual;

function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }

  var keysA = _Object$keys(objA);
  var keysB = _Object$keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  var hasOwn = Object.prototype.hasOwnProperty;
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {

      return false;
    }
  }

  return true;
}

module.exports = exports["default"];