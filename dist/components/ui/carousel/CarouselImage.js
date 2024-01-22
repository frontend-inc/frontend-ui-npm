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
var CarouselImage = function (props) {
  var children = props.children,
    _a = props.arrows,
    arrows = _a === void 0 ? false : _a,
    _b = props.showDots,
    showDots = _b === void 0 ? true : _b,
    _c = props.responsive,
    responsive = _c === void 0 ? index_1.IMAGE_CAROUSEL_RESPONSIVE : _c;
  return react_1.default.createElement(
    components_1.Carousel,
    {
      autoPlay: false,
      responsive: responsive,
      arrows: arrows,
      showDots: showDots,
    },
    children
  );
};
exports.default = CarouselImage;
