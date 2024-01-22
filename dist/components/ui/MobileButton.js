"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var MobileButton = function (props) {
  var startIcon = props.startIcon,
    onClick = props.onClick,
    _a = props.color,
    color = _a === void 0 ? "primary" : _a,
    children = props.children,
    variant = props.variant;
  return react_1.default.createElement(
    react_1.default.Fragment,
    null,
    react_1.default.createElement(
      material_1.Hidden,
      { smDown: true },
      react_1.default.createElement(
        material_1.Button,
        {
          variant: variant,
          color: color,
          startIcon: startIcon,
          onClick: onClick,
        },
        children
      )
    ),
    react_1.default.createElement(
      material_1.Hidden,
      { smUp: true },
      react_1.default.createElement(
        material_1.IconButton,
        { color: color, onClick: onClick },
        startIcon
      )
    )
  );
};
exports.default = MobileButton;
