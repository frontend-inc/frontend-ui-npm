'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var index_1 = require("../../../constants/index");
var CarouselImage = function (props) {
    var children = props.children, _a = props.enableAutoPlay, enableAutoPlay = _a === void 0 ? false : _a, _b = props.enableArrows, enableArrows = _b === void 0 ? false : _b, _c = props.enableDots, enableDots = _c === void 0 ? true : _c, _d = props.responsive, responsive = _d === void 0 ? index_1.IMAGE_CAROUSEL_RESPONSIVE : _d;
    return (react_1.default.createElement(components_1.Carousel, { enableAutoPlay: enableAutoPlay, responsive: responsive, enableArrows: enableArrows, enableDots: enableDots }, children));
};
exports.default = CarouselImage;
