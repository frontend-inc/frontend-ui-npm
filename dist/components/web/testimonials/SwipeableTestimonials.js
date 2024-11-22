'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var SwipeableTestimonialCard_1 = __importDefault(require("./SwipeableTestimonialCard"));
var SwipeableTestimonials = function (props) {
    var _a = props.enableAutoPlay, enableAutoPlay = _a === void 0 ? false : _a, _b = props.items, items = _b === void 0 ? [] : _b;
    return (react_1.default.createElement(components_1.Swipeable, { enableArrows: true, enableAutoPlay: enableAutoPlay }, items === null || items === void 0 ? void 0 : items.map(function (testimonial, i) { return (react_1.default.createElement("div", { key: i, className: "flex items-center justify-center p-4" },
        react_1.default.createElement(SwipeableTestimonialCard_1.default, { avatar: testimonial.avatar, author: testimonial.title, text: testimonial.subtitle }))); })));
};
exports.default = SwipeableTestimonials;
