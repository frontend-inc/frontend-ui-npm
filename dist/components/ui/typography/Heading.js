"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var Heading = function (props) {
  var _a = props || {},
    text = _a.text,
    description = _a.description,
    _b = _a.variant,
    variant = _b === void 0 ? "body1" : _b,
    _c = _a.color,
    color = _c === void 0 ? "text.primary" : _c,
    textAlign = _a.textAlign;
  return react_1.default.createElement(
    material_1.Stack,
    { sx: sx.stack, direction: "column", spacing: 1 },
    react_1.default.createElement(
      material_1.Typography,
      {
        variant: variant,
        color: color,
        style: {
          textAlign: textAlign,
        },
      },
      text
    ),
    react_1.default.createElement(
      material_1.Typography,
      {
        variant: "body1",
        color: "text.secondary",
        style: {
          textAlign: textAlign,
        },
      },
      description
    )
  );
};
exports.default = Heading;
var sx = {
  stack: {
    width: "100%",
  },
  content: {
    maxWidth: "600px",
  },
};
