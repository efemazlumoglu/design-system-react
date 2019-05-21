"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _checkProps = _interopRequireDefault(require("./check-props"));

var _docs = _interopRequireDefault(require("./docs.json"));

var _constants = require("../../utilities/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * A panel provides detailed contextual information or contextual filtering options. [Filter](/components/filters/) component should be used as children. Menus within a Filter Popover will need to not have "portal mounts" and be inline. */
var Panel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Panel, _React$Component);

  function Panel() {
    _classCallCheck(this, Panel);

    return _possibleConstructorReturn(this, _getPrototypeOf(Panel).apply(this, arguments));
  }

  _createClass(Panel, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      (0, _checkProps.default)(_constants.PANEL, _docs.default);
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: (0, _classnames.default)('slds-panel', 'slds-grid', 'slds-grid_vertical', 'slds-nowrap', {
          'slds-panel_filters': this.props.variant === 'filters'
        }, this.props.className)
      }, _react.default.createElement("div", {
        className: "slds-form_stacked slds-grow slds-scrollable_y slds-grid slds-grid_vertical"
      }, this.props.children));
    }
  }]);

  return Panel;
}(_react.default.Component);

Panel.displayName = _constants.PANEL;
Panel.propTypes = {
  /**
   * The contents of the panel
   */
  children: _propTypes.default.node,

  /**
   * CSS classes to be added to `slds-panel`.
   */
  className: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object, _propTypes.default.string]),

  /**
   * The type of panel
   */
  variant: _propTypes.default.oneOf(['filters'])
};
var _default = Panel;
exports.default = _default;