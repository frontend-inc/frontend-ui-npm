"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var HelperText = function (props) {
  var text = (props || {}).text;
  if (!text) return null;
  return react_1.default.createElement(
    material_1.Typography,
    { variant: "caption", sx: sx.root },
    text
  );
};
exports.default = HelperText;
var sx = {
  root: {
    color: "text.secondary",
  },
};
