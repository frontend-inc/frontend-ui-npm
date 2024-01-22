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
var index_1 = require("../../../constants/index");
var image_1 = __importDefault(require("next/image"));
var Logo = function (props) {
  var _a = props || {},
    title = _a.title,
    _b = _a.image,
    image = _b === void 0 ? "" : _b,
    _c = _a.height,
    height = _c === void 0 ? index_1.LOGO_HEIGHT : _c,
    _d = _a.width,
    width = _d === void 0 ? index_1.LOGO_WIDTH : _d;
  return react_1.default.createElement(
    material_1.Box,
    {
      sx: __assign(__assign({}, sx.root), {
        height: "".concat(height, "px"),
        width: "".concat(width, "px"),
        minWidth: "".concat(width, "px"),
        minHeight: "".concat(height, "px"),
      }),
    },
    react_1.default.createElement(image_1.default, {
      height: height,
      width: width,
      src: image,
      alt: title,
      style: {
        width: "100%",
        objectFit: "contain",
      },
    })
  );
};
exports.default = Logo;
var sx = {
  root: {
    p: 0.5,
  },
};
