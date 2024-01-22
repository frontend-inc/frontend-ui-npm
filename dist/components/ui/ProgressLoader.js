"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var ProgressLoader = function (props) {
  var _a = props.size,
    size = _a === void 0 ? 48 : _a,
    _b = props.styles,
    styles = _b === void 0 ? {} : _b,
    _c = props.borderWidth,
    borderWidth = _c === void 0 ? 4 : _c;
  return react_1.default.createElement(
    material_1.Box,
    { sx: __assign(__assign({}, sx.root), styles) },
    react_1.default.createElement(
      material_1.Box,
      { sx: sx.box },
      react_1.default.createElement(material_1.LinearProgress, {
        color: "primary",
        sx: sx.progress,
      })
    )
  );
};
exports.default = ProgressLoader;
var sx = {
  root: {
    p: 6,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    position: "relative",
  },
  progress: {
    height: "4px",
    width: "220px",
    bgcolor: "transparent",
    color: "primary.dark",
    borderRadius: "4px",
  },
};
