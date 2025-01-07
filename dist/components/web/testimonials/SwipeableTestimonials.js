'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var components_2 = require("../../../components");
var react_2 = require("@nextui-org/react");
var helpers_1 = require("../../../helpers");
var SwipeableTestimonialCard = function (props) {
    var _a = props || {}, author = _a.author, avatar = _a.avatar, text = _a.text, _b = _a.variant, variant = _b === void 0 ? 'default' : _b;
    return (react_1.default.createElement(components_2.Container, { maxWidth: "lg" },
        react_1.default.createElement(react_2.Card, { shadow: variant == 'default' ? 'none' : 'sm', className: variant == 'fill' ? 'bg-content1' : '' },
            react_1.default.createElement(react_2.CardBody, { className: "p-10" },
                react_1.default.createElement(react_2.ScrollShadow, { className: "h-[160px] w-full" }, text && (react_1.default.createElement(components_2.Typography, { variant: "body1", textAlign: "center", className: "italic text-xl font-medium leading-loose text-foreground/80" }, text)))),
            react_1.default.createElement(react_2.CardFooter, { className: "flex p-6 items-center justify-center" },
                react_1.default.createElement(react_2.User, { avatarProps: {
                        src: avatar,
                        color: 'primary',
                        size: 'lg',
                        name: (0, helpers_1.getInitials)(author),
                    }, name: author, description: "Testimonial" })))));
};
var SwipeableTestimonials = function (props) {
    var _a = props || {}, _b = _a.items, items = _b === void 0 ? [] : _b, variant = _a.variant;
    return (react_1.default.createElement(components_1.Swipeable, { itemsPerSlide: 2, enableArrows: true }, items === null || items === void 0 ? void 0 : items.map(function (testimonial, i) { return (react_1.default.createElement("div", { key: i, className: "flex items-center justify-center pb-[60px]" },
        react_1.default.createElement(SwipeableTestimonialCard, { avatar: testimonial.image, author: testimonial.title, text: testimonial.subtitle, variant: variant }))); })));
};
exports.default = SwipeableTestimonials;
