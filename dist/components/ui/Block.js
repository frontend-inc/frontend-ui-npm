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
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var Box = function (_a) {
  var children = _a.children,
    props = __rest(_a, ["children"]);
  var height = props.height,
    width = props.width,
    boxRadius = props.boxRadius,
    borderSize = props.borderSize,
    borderColor = props.borderColor,
    bgcolor = props.bgcolor,
    justifyContent = props.justifyContent,
    alignItems = props.alignItems,
    flexDirection = props.flexDirection,
    gap = props.gap,
    p = props.p;
  return react_1.default.createElement(
    material_1.Box,
    {
      sx: __assign(
        __assign(
          __assign(__assign({}, sx.root), { height: height, width: width }),
          borderSize > 0 && {
            border: "".concat(borderSize, "px solid ").concat(borderColor),
          }
        ),
        {
          bgcolor: bgcolor,
          boxRadius: boxRadius,
          justifyContent: justifyContent,
          alignItems: alignItems,
          flexDirection: flexDirection,
          gap: "".concat(gap, "px"),
          p: p,
        }
      ),
    },
    children
  );
};
exports.default = Box;
var sx = {
  root: {
    display: "flex",
  },
};
