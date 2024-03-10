"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var TestimonialCard_1 = __importDefault(require("./TestimonialCard"));
var SwipeableTestimonials = function (props) {
    var _a = props.enableAutoPlay, enableAutoPlay = _a === void 0 ? false : _a, _b = props.enableArrows, enableArrows = _b === void 0 ? false : _b, _c = props.testimonials, testimonials = _c === void 0 ? [] : _c;
    return (react_1.default.createElement(material_1.Box, null,
        react_1.default.createElement(components_1.Swipeable, { enableAutoPlay: enableAutoPlay, enableArrows: enableArrows }, testimonials === null || testimonials === void 0 ? void 0 : testimonials.map(function (testimonial, i) { return (react_1.default.createElement(material_1.Box, { sx: sx.item, key: i },
            react_1.default.createElement(TestimonialCard_1.default, { size: "large", image: testimonial.avatar, author: testimonial.author, rating: testimonial.rating, text: testimonial.text }))); })),
        (testimonials === null || testimonials === void 0 ? void 0 : testimonials.length) === 0 && (react_1.default.createElement(components_1.Placeholder, { icon: react_1.default.createElement(components_1.Icon, { name: "Star" }), title: "No testimonials yet.", description: "Testimonials will appear here." }))));
};
exports.default = SwipeableTestimonials;
var sx = {
    item: {
        p: 2,
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
};
