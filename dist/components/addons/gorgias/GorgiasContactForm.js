"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var GorgiasContactForm = function (props) {
  var src = (props || {}).src;
  if (!src) return null;
  return react_1.default.createElement(
    "div",
    null,
    react_1.default.createElement("iframe", { src: src, style: sx.root })
  );
};
exports.default = GorgiasContactForm;
var sx = {
  root: {
    height: "100%",
    minHeight: "1100px",
    width: "100%",
    border: "none",
  },
};
