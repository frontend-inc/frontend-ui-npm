"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var NoSpaceInput = function (props) {
  var errors = props.errors,
    value = props.value,
    name = props.name,
    label = props.label,
    placeholder = props.placeholder,
    handleChange = props.handleChange,
    disabled = props.disabled;
  var handleInputChange = function (ev) {
    var value = ev.target.value;
    value = value.replace(" ", "_").toLowerCase();
    handleChange({
      target: {
        name: name,
        value: value,
      },
    });
  };
  return react_1.default.createElement(components_1.TextInput, {
    errors: errors,
    value: value,
    disabled: disabled,
    placeholder: placeholder,
    handleChange: handleInputChange,
    name: name,
    label: label,
  });
};
exports.default = NoSpaceInput;
var sx = {
  root: {},
};
