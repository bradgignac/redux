'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = createProvideDecorator;

var _utilsGetDisplayName = require('../utils/getDisplayName');

var _utilsGetDisplayName2 = _interopRequireDefault(_utilsGetDisplayName);

function createProvideDecorator(React, Provider) {
  var Component = React.Component;

  return function provide(redux) {
    return function (DecoratedComponent) {
      return (function (_Component) {
        function ProviderDecorator() {
          _classCallCheck(this, ProviderDecorator);

          if (_Component != null) {
            _Component.apply(this, arguments);
          }
        }

        _inherits(ProviderDecorator, _Component);

        _createClass(ProviderDecorator, [{
          key: 'render',
          value: function render() {
            var _this = this;

            return React.createElement(
              Provider,
              { redux: redux },
              function () {
                return React.createElement(DecoratedComponent, _this.props);
              }
            );
          }
        }], [{
          key: 'displayName',
          value: 'Provider(' + (0, _utilsGetDisplayName2['default'])(DecoratedComponent) + ')',
          enumerable: true
        }, {
          key: 'DecoratedComponent',
          value: DecoratedComponent,
          enumerable: true
        }]);

        return ProviderDecorator;
      })(Component);
    };
  };
}

module.exports = exports['default'];