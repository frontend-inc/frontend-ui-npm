"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var helpers_1 = require("../../../helpers");
var CellVideo = function (props) {
  var value = props.value,
    handleClick = props.handleClick,
    _a = props.size,
    size = _a === void 0 ? 64 : _a;
  if (!value)
    return react_1.default.createElement(components_1.NoImage, {
      height: size,
      width: size,
    });
  return react_1.default.createElement(
    material_1.Button,
    { sx: sx.root, onClick: handleClick },
    react_1.default.createElement(components_1.Image, {
      src: (0, helpers_1.imageFromVideoUrl)(value),
      // @ts-ignore
      width: size,
      height: size,
    })
  );
};
exports.default = CellVideo;
var sx = {
  root: {
    p: 0,
  },
};
