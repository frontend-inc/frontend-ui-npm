"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var TestimonialCard_1 = __importDefault(require("./TestimonialCard"));
var TestimonialsGrid = function (props) {
    var _a = props.size, size = _a === void 0 ? 'small' : _a, _b = props.items, items = _b === void 0 ? [] : _b;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_1.Grid, { container: true, spacing: 0 }, items === null || items === void 0 ? void 0 : items.map(function (testimonial, i) { return (react_1.default.createElement(material_1.Grid, { item: true, key: i, xs: 12, sm: 6, md: 4 },
            react_1.default.createElement(material_1.Box, { sx: sx.item },
                react_1.default.createElement(TestimonialCard_1.default, { key: i, size: size, image: testimonial.image, author: testimonial.title, rating: testimonial.rating, text: testimonial.description })))); })),
        (items === null || items === void 0 ? void 0 : items.length) === 0 && (react_1.default.createElement(__1.Placeholder, { icon: 'Rating', title: "No testimonials yet.", description: "Testimonials will appear here." }))));
};
exports.default = TestimonialsGrid;
var sx = {
    root: {},
    item: {
        p: 2,
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
};
