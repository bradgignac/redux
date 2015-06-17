'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
  value: true
});

var _createDispatcher = require('./createDispatcher');

var _createDispatcher2 = _interopRequireDefault(_createDispatcher);

var _utilsComposeStores = require('./utils/composeStores');

var _utilsComposeStores2 = _interopRequireDefault(_utilsComposeStores);

var _middlewareThunk = require('./middleware/thunk');

var _middlewareThunk2 = _interopRequireDefault(_middlewareThunk);

var Redux = (function () {
  function Redux(dispatcher, initialState) {
    _classCallCheck(this, Redux);

    if (typeof dispatcher === 'object') {
      // A shortcut notation to use the default dispatcher
      dispatcher = (0, _createDispatcher2['default'])((0, _utilsComposeStores2['default'])(dispatcher), function (getState) {
        return [(0, _middlewareThunk2['default'])(getState)];
      });
    }

    this.state = initialState;
    this.listeners = [];
    this.replaceDispatcher(dispatcher);
  }

  _createClass(Redux, [{
    key: 'getDispatcher',
    value: function getDispatcher() {
      return this.dispatcher;
    }
  }, {
    key: 'replaceDispatcher',
    value: function replaceDispatcher(nextDispatcher) {
      this.dispatcher = nextDispatcher;
      this.dispatchFn = nextDispatcher(this.state, this.setState.bind(this));
    }
  }, {
    key: 'dispatch',
    value: function dispatch(action) {
      return this.dispatchFn(action);
    }
  }, {
    key: 'getState',
    value: function getState() {
      return this.state;
    }
  }, {
    key: 'setState',
    value: function setState(nextState) {
      this.state = nextState;
      this.listeners.forEach(function (listener) {
        return listener();
      });
      return nextState;
    }
  }, {
    key: 'subscribe',
    value: function subscribe(listener) {
      var listeners = this.listeners;

      listeners.push(listener);

      return function unsubscribe() {
        var index = listeners.indexOf(listener);
        listeners.splice(index, 1);
      };
    }
  }]);

  return Redux;
})();

exports['default'] = Redux;
module.exports = exports['default'];