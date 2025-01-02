'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var react_2 = require("@nextui-org/react");
var helpers_1 = require("../../../helpers");
var TestimonialCard = function (props) {
    var _a = props || {}, text = _a.text, author = _a.author, _b = _a.image, image = _b === void 0 ? '' : _b, _c = _a.variant, variant = _c === void 0 ? 'default' : _c;
    return (react_1.default.createElement(react_2.Card, { shadow: variant == "default" ? "none" : "md", className: variant == 'fill' ? 'bg-content1' : '' },
        react_1.default.createElement(react_2.CardHeader, { className: "p-6" },
            react_1.default.createElement(react_2.User, { avatarProps: {
                    src: image,
                    color: 'primary',
                    name: (0, helpers_1.getInitials)(author),
                }, name: author, description: "Testimonial" })),
        react_1.default.createElement(react_2.CardBody, { className: "p-6" }, text && (react_1.default.createElement(react_2.ScrollShadow, { style: { height: '200px' } },
            react_1.default.createElement(components_1.Typography, { variant: "body1", className: "font-normal leading-loose" }, text))))));
};
var TestimonialCards = function (props) {
    var _a = props.size, size = _a === void 0 ? 'small' : _a, variant = props.variant, _b = props.items, items = _b === void 0 ? [] : _b;
    return (react_1.default.createElement("div", { className: "container mx-auto max-w-screen-lg" },
        react_1.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6" }, items === null || items === void 0 ? void 0 : items.map(function (testimonial, i) { return (react_1.default.createElement(TestimonialCard, { key: i, size: size, image: testimonial.image, author: testimonial.title, text: testimonial.subtitle, variant: variant })); }))));
};
exports.default = TestimonialCards;
