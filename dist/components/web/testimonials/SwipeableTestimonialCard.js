'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("../../core");
var __1 = require("../..");
function SwipeableTestimonialCard(props) {
    if (props === void 0) { props = {
        author: '',
        text: '',
        image: '',
        avatar: '',
    }; }
    var author = props.author, avatar = props.avatar, text = props.text, image = props.image;
    return (react_1.default.createElement("div", { className: "flex flex-row w-full min-h-[320px] overflow-hidden rounded-lg border border-divider bg-background" },
        react_1.default.createElement("div", { className: "flex flex-col p-6 w-full sm:w-1/2 justify-around sm:justify-between items-start h-full space-y-4" },
            react_1.default.createElement("div", { className: "flex flex-col items-center" }, text && (react_1.default.createElement(__1.ExpandableText, { className: "text-muted-foreground", text: text, variant: "h5" }))),
            react_1.default.createElement("div", { className: "flex flex-row w-full items-center space-x-2" },
                react_1.default.createElement(__1.Avatar, { src: avatar, size: 48 }),
                react_1.default.createElement(core_1.Typography, { variant: "body2", className: "text-muted-foreground" },
                    "\u2014 ",
                    author))),
        image && (react_1.default.createElement("div", { className: "flex justify-center items-center overflow-hidden w-full sm:w-1/2" },
            react_1.default.createElement(__1.Image, { alt: "testimonial", src: image, height: 320, disableBorderRadius: true })))));
}
exports.default = SwipeableTestimonialCard;
