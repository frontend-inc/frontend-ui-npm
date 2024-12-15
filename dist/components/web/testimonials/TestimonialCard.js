'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var components_2 = require("../../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var TestimonialCard = function (props) {
    var _a = props || {}, text = _a.text, author = _a.author, _b = _a.image, image = _b === void 0 ? '' : _b, variant = _a.variant;
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('p-3 rounded-lg min-h-[240px]', variant === 'fill' && 'p-6 bg-muted', variant === 'outline' && 'p-6 border-2 border-border') },
        react_1.default.createElement("div", { className: "flex flex-col space-y-3 justify-between h-full" },
            react_1.default.createElement("div", null, text && (react_1.default.createElement(components_1.Typography, { variant: "body1", className: "font-normal leading-loose" }, text))),
            react_1.default.createElement("div", { className: "flex flex-row space-x-2 items-center" },
                react_1.default.createElement(components_2.Avatar, { src: image, variant: "circular" }),
                react_1.default.createElement(components_1.Typography, { variant: "body2", className: "text-foreground/70" }, author)))));
};
exports.default = TestimonialCard;
