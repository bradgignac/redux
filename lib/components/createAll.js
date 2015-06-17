'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = createAll;

var _createProvider = require('./createProvider');

var _createProvider2 = _interopRequireDefault(_createProvider);

var _createProvideDecorator = require('./createProvideDecorator');

var _createProvideDecorator2 = _interopRequireDefault(_createProvideDecorator);

var _createConnector = require('./createConnector');

var _createConnector2 = _interopRequireDefault(_createConnector);

var _createConnectDecorator = require('./createConnectDecorator');

var _createConnectDecorator2 = _interopRequireDefault(_createConnectDecorator);

function createAll(React) {
  // Wrapper components
  var Provider = (0, _createProvider2['default'])(React);
  var Connector = (0, _createConnector2['default'])(React);

  // Higher-order components (decorators)
  var provide = (0, _createProvideDecorator2['default'])(React, Provider);
  var connect = (0, _createConnectDecorator2['default'])(React, Connector);

  return { Provider: Provider, Connector: Connector, provide: provide, connect: connect };
}

module.exports = exports['default'];