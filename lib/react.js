'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _componentsCreateAll = require('./components/createAll');

var _componentsCreateAll2 = _interopRequireDefault(_componentsCreateAll);

var _createAll = (0, _componentsCreateAll2['default'])(_react2['default']);

var Provider = _createAll.Provider;
var Connector = _createAll.Connector;
var provide = _createAll.provide;
var connect = _createAll.connect;
exports.Provider = Provider;
exports.Connector = Connector;
exports.provide = provide;
exports.connect = connect;