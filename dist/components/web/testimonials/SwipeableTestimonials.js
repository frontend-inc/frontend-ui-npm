'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var SwipeableTestimonialCard_1 = __importDefault(require("./SwipeableTestimonialCard"));
var frontend_shadcn_1 = require("frontend-shadcn");
var SwipeableTestimonials = function (props) {
    var _a = props.enableAutoPlay, enableAutoPlay = _a === void 0 ? false : _a, _b = props.enableArrows, enableArrows = _b === void 0 ? false : _b, _c = props.items, items = _c === void 0 ? [] : _c;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(__1.Swipeable, { enableAutoPlay: enableAutoPlay, enableArrows: enableArrows }, items === null || items === void 0 ? void 0 : items.map(function (testimonial, i) { return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('flex items-center justify-center p-2', enableArrows && 'px-6'), key: i },
            react_1.default.createElement(SwipeableTestimonialCard_1.default, { image: testimonial.image, author: testimonial.title, rating: testimonial.rating, text: testimonial.description }))); }))));
};
exports.default = SwipeableTestimonials;
