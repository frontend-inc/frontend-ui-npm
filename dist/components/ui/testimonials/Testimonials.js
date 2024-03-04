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
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_2.Typography, { sx: sx.title, variant: "h6", color: "textPrimary" }, title),
        react_1.default.createElement(material_1.Grid, { container: true, spacing: 0 }, testimonials === null || testimonials === void 0 ? void 0 : testimonials.map(function (testimonial, i) { return (react_1.default.createElement(material_1.Grid, { item: true, key: i, xs: 12, sm: 6, md: 4 },
            react_1.default.createElement(material_1.Box, { sx: sx.item },
                react_1.default.createElement(TestimonialCard_1.default, { key: i, image: testimonial.avatar, author: testimonial.author, rating: testimonial.rating, text: testimonial.text })))); })),
        (testimonials === null || testimonials === void 0 ? void 0 : testimonials.length) === 0 && (react_1.default.createElement(components_1.Placeholder, { icon: react_1.default.createElement(components_1.Icon, { name: "Star" }), title: "No testimonails yet.", description: "Testimonials will appear here." }))));
};
exports.default = Testimonials;
var sx = {
    root: {
        border: '1px solid red',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '100%',
        overflowX: 'scroll',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    title: {
        textAlign: 'center'
    },
    item: {
        p: 2,
        height: "100%",
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
            xs: 'flex-start'
        }
    }
};
