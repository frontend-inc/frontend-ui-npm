"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var index_1 = require("../../../constants/index");
var FieldImage = function (props) {
  var value = props.value,
    _a = props.objectFit,
    objectFit = _a === void 0 ? "cover" : _a;
  return react_1.default.createElement(components_1.Image, {
    src: value,
    height: index_1.IMAGE_HORIZ_HEIGHT,
    objectFit: objectFit,
  });
};
exports.default = FieldImage;
