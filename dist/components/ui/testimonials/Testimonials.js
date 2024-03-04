"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var TestimonialCard_1 = __importDefault(require("./TestimonialCard"));
var material_2 = require("@mui/material");
var Testimonials = function (props) {
    var title = props.title, _a = props.testimonials, testimonials = _a === void 0 ? [] : _a;
    return (react_1.default.createElement(material_1.Stack, { spacing: 1, sx: sx.root },
        react_1.default.createElement(material_2.Typography, { sx: sx.title, variant: "h6", color: "textPrimary" }, title),
        react_1.default.createElement(material_1.Stack, { direction: { sm: 'row', xs: 'column' }, sx: sx.testimonials, spacing: 4 }, testimonials === null || testimonials === void 0 ? void 0 : testimonials.map(function (testimonial, i) { return (react_1.default.createElement(TestimonialCard_1.default, { key: i, image: testimonial.avatar, author: testimonial.author, rating: testimonial.rating, text: testimonial.text })); })),
        (testimonials === null || testimonials === void 0 ? void 0 : testimonials.length) === 0 && (react_1.default.createElement(components_1.Placeholder, { icon: react_1.default.createElement(components_1.Icon, { name: "Star" }), title: "No testimonails yet.", description: "Testimonials will appear here." }))));
};
exports.default = Testimonials;
var sx = {
    root: {
        width: '100%',
    },
    title: {
        textAlign: 'center'
    },
    testimonials: {
        overflowX: 'scroll',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        justifyContent: {
            sm: 'center',
            xs: 'flex-start'
        }
    }
};
