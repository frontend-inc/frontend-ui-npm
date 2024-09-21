"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var TestimonialCards_1 = __importDefault(require("./TestimonialCards"));
var SwipeableTestimonials_1 = __importDefault(require("./SwipeableTestimonials"));
var __1 = require("../..");
var Testimonials = function (props) {
    var _a = props.layout, layout = _a === void 0 ? 'grid' : _a, enableArrows = props.enableArrows, enableAutoPlay = props.enableAutoPlay, _b = props.items, items = _b === void 0 ? [] : _b;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        layout == 'carousel' ? (react_1.default.createElement(SwipeableTestimonials_1.default, { items: items, enableAutoPlay: enableAutoPlay, enableArrows: enableArrows })) : (react_1.default.createElement(TestimonialCards_1.default, { items: items })),
        (items === null || items === void 0 ? void 0 : items.length) == 0 && (react_1.default.createElement(__1.Placeholder, { icon: "Star", title: "No testimonials yet.", description: "Your testimonials will appear here." }))));
};
exports.default = Testimonials;
var sx = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '100%',
        overflowX: 'scroll',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    title: {
        textAlign: 'center',
    },
    item: {
        p: 2,
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    testimonials: {
        overflowX: 'scroll',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        justifyContent: {
            sm: 'center',
            xs: 'flex-start',
        },
    },
};
