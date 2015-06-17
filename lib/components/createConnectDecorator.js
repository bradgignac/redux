'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = createConnectDecorator;

var _utilsGetDisplayName = require('../utils/getDisplayName');

var _utilsGetDisplayName2 = _interopRequireDefault(_utilsGetDisplayName);

var _utilsShallowEqualScalar = require('../utils/shallowEqualScalar');

var _utilsShallowEqualScalar2 = _interopRequireDefault(_utilsShallowEqualScalar);

function createConnectDecorator(React, Connector) {
  var Component = React.Component;

  return function connect(select) {
    return function (DecoratedComponent) {
      return (function (_Component) {
        function ConnectorDecorator() {
          _classCallCheck(this, ConnectorDecorator);

          if (_Component != null) {
            _Component.apply(this, arguments);
          }
        }

        _inherits(ConnectorDecorator, _Component);

        _createClass(ConnectorDecorator, [{
          key: 'shouldComponentUpdate',
          value: function shouldComponentUpdate(nextProps) {
            return !(0, _utilsShallowEqualScalar2['default'])(this.props, nextProps);
          }
        }, {
          key: 'render',
          value: function render() {
            var _this = this;

            return React.createElement(
              Connector,
              { select: function (state) {
                  return select(state, _this.props);
                } },
              function (stuff) {
                return React.createElement(DecoratedComponent, _extends({}, stuff, _this.props));
              }
            );
          }
        }], [{
          key: 'displayName',
          value: 'Connector(' + (0, _utilsGetDisplayName2['default'])(DecoratedComponent) + ')',
          enumerable: true
        }, {
          key: 'DecoratedComponent',
          value: DecoratedComponent,
          enumerable: true
        }]);

        return ConnectorDecorator;
      })(Component);
    };
  };
}

module.exports = exports['default'];