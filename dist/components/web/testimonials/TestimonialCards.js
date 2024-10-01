"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var TestimonialCards = function (props) {
    var _a = props.size, size = _a === void 0 ? 'small' : _a, _b = props.items, items = _b === void 0 ? [] : _b;
    return (react_1.default.createElement(__1.Container, { maxWidth: "md" },
        react_1.default.createElement(material_1.Box, { sx: sx.root }, items === null || items === void 0 ? void 0 : items.map(function (testimonial, i) { return (react_1.default.createElement(material_1.Box, { sx: sx.item },
            react_1.default.createElement(__1.TestimonialCard, { key: i, size: size, image: testimonial.image, author: testimonial.title, rating: testimonial.rating, text: testimonial.description }))); }))));
};
exports.default = TestimonialCards;
var sx = {
    root: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '16px',
    },
    item: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
};
