'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_multi_carousel_1 = __importDefault(require("react-multi-carousel"));
var CarouselDot_1 = __importDefault(require("./CarouselDot"));
var CarouselLeftArrow_1 = __importDefault(require("./CarouselLeftArrow"));
var CarouselRightArrow_1 = __importDefault(require("./CarouselRightArrow"));
var ReactCarousel = function (props) {
    var children = props.children, _a = props.enableAutoPlay, enableAutoPlay = _a === void 0 ? false : _a, _b = props.enableArrows, enableArrows = _b === void 0 ? false : _b, _c = props.enableDots, enableDots = _c === void 0 ? true : _c;
    var responsive = {
        superLargeDesktop: {
            breakpoint: { max: 1280, min: 1024 },
            items: 3,
        },
        desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 768, min: 640 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 640, min: 0 },
            items: 1,
        },
    };
    return (react_1.default.createElement("div", { className: "w-full" }, responsive && children && (react_1.default.createElement(react_multi_carousel_1.default, { responsive: responsive, swipeable: true, draggable: true, infinite: true, autoPlay: enableAutoPlay, arrows: enableArrows, showDots: enableDots, customDot: react_1.default.createElement(CarouselDot_1.default, null), customRightArrow: react_1.default.createElement(CarouselRightArrow_1.default, null), customLeftArrow: react_1.default.createElement(CarouselLeftArrow_1.default, null) }, children))));
};
exports.default = ReactCarousel;
