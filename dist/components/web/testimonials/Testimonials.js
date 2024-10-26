'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var TestimonialCards_1 = __importDefault(require("./TestimonialCards"));
var SwipeableTestimonials_1 = __importDefault(require("./SwipeableTestimonials"));
var __1 = require("../..");
var Testimonials = function (props) {
    var _a = props.layout, layout = _a === void 0 ? 'grid' : _a, enableArrows = props.enableArrows, enableAutoPlay = props.enableAutoPlay, _b = props.items, items = _b === void 0 ? [] : _b;
    return (react_1.default.createElement("div", { className: "flex flex-col w-full" },
        layout == 'carousel' ? (react_1.default.createElement(SwipeableTestimonials_1.default, { items: items, enableAutoPlay: enableAutoPlay, enableArrows: enableArrows })) : (react_1.default.createElement(TestimonialCards_1.default, { items: items })),
        (items === null || items === void 0 ? void 0 : items.length) == 0 && (react_1.default.createElement(__1.Placeholder, { icon: "Star", title: "No testimonials yet.", description: "Your testimonials will appear here." }))));
};
exports.default = Testimonials;
