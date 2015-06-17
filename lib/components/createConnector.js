'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _get = require('babel-runtime/helpers/get')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = createConnector;

var _lodashUtilityIdentity = require('lodash/utility/identity');

var _lodashUtilityIdentity2 = _interopRequireDefault(_lodashUtilityIdentity);

var _utilsShallowEqual = require('../utils/shallowEqual');

var _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);

var _lodashLangIsPlainObject = require('lodash/lang/isPlainObject');

var _lodashLangIsPlainObject2 = _interopRequireDefault(_lodashLangIsPlainObject);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

function createConnector(React) {
  var Component = React.Component;
  var PropTypes = React.PropTypes;

  return (function (_Component) {
    function Connector(props, context) {
      _classCallCheck(this, Connector);

      _get(Object.getPrototypeOf(Connector.prototype), 'constructor', this).call(this, props, context);

      this.unsubscribe = context.redux.subscribe(this.handleChange.bind(this));
      this.state = this.selectState(props, context);
    }

    _inherits(Connector, _Component);

    _createClass(Connector, [{
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps, nextState) {
        return !this.isSliceEqual(this.state.slice, nextState.slice) || !(0, _utilsShallowEqual2['default'])(this.props, nextProps);
      }
    }, {
      key: 'isSliceEqual',
      value: function isSliceEqual(slice, nextSlice) {
        var isRefEqual = slice === nextSlice;
        if (isRefEqual) {
          return true;
        } else if (typeof slice !== 'object' || typeof nextSlice !== 'object') {
          return isRefEqual;
        } else {
          return (0, _utilsShallowEqual2['default'])(slice, nextSlice);
        }
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.select !== this.props.select) {
          // Force the state slice recalculation
          this.handleChange(nextProps);
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.unsubscribe();
      }
    }, {
      key: 'handleChange',
      value: function handleChange() {
        var props = arguments[0] === undefined ? this.props : arguments[0];

        var nextState = this.selectState(props, this.context);
        this.setState(nextState);
      }
    }, {
      key: 'selectState',
      value: function selectState(props, context) {
        var state = context.redux.getState();
        var slice = props.select(state);

        (0, _invariant2['default'])((0, _lodashLangIsPlainObject2['default'])(slice), 'The return value of `select` prop must be an object. Instead received %s.', slice);

        return { slice: slice };
      }
    }, {
      key: 'render',
      value: function render() {
        var children = this.props.children;
        var slice = this.state.slice;
        var dispatch = this.context.redux.dispatch;

        return children(_extends({ dispatch: dispatch }, slice));
      }
    }], [{
      key: 'contextTypes',
      value: {
        redux: PropTypes.object.isRequired
      },
      enumerable: true
    }, {
      key: 'propTypes',
      value: {
        children: PropTypes.func.isRequired,
        select: PropTypes.func.isRequired
      },
      enumerable: true
    }, {
      key: 'defaultProps',
      value: {
        select: _lodashUtilityIdentity2['default']
      },
      enumerable: true
    }]);

    return Connector;
  })(Component);
}

module.exports = exports['default'];