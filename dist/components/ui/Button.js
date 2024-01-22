"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var Button = function (props) {
  var variant = props.variant,
    color = props.color,
    size = props.size,
    fullWidth = props.fullWidth,
    buttonText = props.buttonText;
  return react_1.default.createElement(
    material_1.Button,
    { variant: variant, size: size, color: color, fullWidth: fullWidth },
    buttonText
  );
};
exports.default = Button;
