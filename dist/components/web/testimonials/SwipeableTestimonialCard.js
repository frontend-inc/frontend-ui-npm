'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("../../core");
var frontend_shadcn_1 = require("frontend-shadcn");
var SwipeableTestimonialCard = function (props) {
    var author = props.author, avatar = props.avatar, text = props.text;
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-[40px] p-6 px-[40px] w-full h-full justify-start items-center" },
        text && (react_1.default.createElement(core_1.Typography, { variant: "subtitle1", className: "italic text-center leading-9 text-muted-foreground" }, text)),
        react_1.default.createElement("div", { className: "flex flex-row items-center space-x-2" },
            react_1.default.createElement(frontend_shadcn_1.Avatar, { className: "h-[64px] w-[64px] rounded-full" },
                react_1.default.createElement(frontend_shadcn_1.AvatarImage, { src: avatar, alt: author }),
                react_1.default.createElement(frontend_shadcn_1.AvatarFallback, null)),
            react_1.default.createElement(core_1.Typography, { variant: "body1", className: "leading-8 text-muted-foreground" },
                "- ",
                author))));
};
exports.default = SwipeableTestimonialCard;
