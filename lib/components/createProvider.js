"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _Object$defineProperty = require("babel-runtime/core-js/object/define-property")["default"];

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = createProvider;

function createProvider(React) {
  var Component = React.Component;
  var PropTypes = React.PropTypes;

  var reduxShape = PropTypes.shape({
    subscribe: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired
  });

  return (function (_Component) {
    function Provider(props, context) {
      _classCallCheck(this, Provider);

      _get(Object.getPrototypeOf(Provider.prototype), "constructor", this).call(this, props, context);
      this.state = { redux: props.redux };
    }

    _inherits(Provider, _Component);

    _createClass(Provider, [{
      key: "getChildContext",
      value: function getChildContext() {
        return { redux: this.state.redux };
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        var redux = this.state.redux;
        var nextRedux = nextProps.redux;

        if (redux !== nextRedux) {
          var nextDispatcher = nextRedux.getDispatcher();
          redux.replaceDispatcher(nextDispatcher);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var children = this.props.children;

        return children();
      }
    }], [{
      key: "propTypes",
      value: {
        redux: reduxShape.isRequired,
        children: PropTypes.func.isRequired
      },
      enumerable: true
    }, {
      key: "childContextTypes",
      value: {
        redux: reduxShape.isRequired
      },
      enumerable: true
    }]);

    return Provider;
  })(Component);
}

module.exports = exports["default"];