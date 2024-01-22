"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var helpers_1 = require("../../../helpers");
var image_1 = __importDefault(require("next/image"));
var CellImage = function (props) {
  var value = props.value,
    _a = props.size,
    size = _a === void 0 ? 64 : _a;
  var src = (0, helpers_1.imageFromVideoUrl)(value);
  if (!value)
    return react_1.default.createElement(components_1.NoImage, {
      height: size,
      width: size,
    });
  return react_1.default.createElement(image_1.default, {
    src: src,
    width: size,
    height: size,
    alt: "Image",
    quality: 100,
    style: {
      objectFit: "contain",
    },
  });
};
exports.default = CellImage;
