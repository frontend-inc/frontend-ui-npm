'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var SwipeableTestimonialCard = function (props) {
    var direction = props.direction, author = props.author, avatar = props.avatar, text = props.text;
    return (react_1.default.createElement(components_1.Container, { maxWidth: "lg" },
        react_1.default.createElement("div", { className: "flex flex-col space-y-4 items-center justify-center w-full" },
            text && (react_1.default.createElement(components_1.Typography, { variant: "body1", textAlign: 'center', className: "italic text-xl font-medium leading-loose text-foreground/80" }, text)),
            react_1.default.createElement(frontend_shadcn_1.Avatar, { className: "h-[96px] w-[96px] rounded-full" },
                react_1.default.createElement(frontend_shadcn_1.AvatarImage, { src: avatar, alt: author }),
                react_1.default.createElement(frontend_shadcn_1.AvatarFallback, null)),
            react_1.default.createElement(components_1.Typography, { variant: "body2", className: "text-foreground/80" }, author))));
};
exports.default = SwipeableTestimonialCard;
