"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var TestimonialsGrid_1 = __importDefault(require("./TestimonialsGrid"));
var SwipeableTestimonials_1 = __importDefault(require("./SwipeableTestimonials"));
var material_2 = require("@mui/material");
var Testimonials = function (props) {
    var title = props.title, _a = props.layout, layout = _a === void 0 ? 'grid' : _a, enableArrows = props.enableArrows, enableAutoPlay = props.enableAutoPlay, _b = props.testimonials, testimonials = _b === void 0 ? [] : _b;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        title && (react_1.default.createElement(material_2.Typography, { sx: sx.title, variant: "h6", color: "textPrimary" }, title)),
        layout == 'grid' && react_1.default.createElement(TestimonialsGrid_1.default, { testimonials: testimonials }),
        layout == 'carousel' && (react_1.default.createElement(SwipeableTestimonials_1.default, { enableAutoPlay: enableAutoPlay, enableArrows: enableArrows, testimonials: testimonials }))));
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
