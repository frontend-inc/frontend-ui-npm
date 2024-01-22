"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../components");
var material_1 = require("@mui/material");
var TextModal = function (props) {
  var open = props.open,
    text = props.text,
    _a = props.title,
    title = _a === void 0 ? "Preview" : _a,
    handleClose = props.handleClose;
  return react_1.default.createElement(
    components_1.Modal,
    {
      open: open,
      handleClose: handleClose,
      title: title,
      maxWidth: "md",
      p: 2,
    },
    react_1.default.createElement(
      material_1.Typography,
      { my: 2, variant: "body2", sx: sx.text },
      text
    )
  );
};
exports.default = TextModal;
var sx = {
  text: {
    whiteSpace: "pre-wrap",
  },
};
