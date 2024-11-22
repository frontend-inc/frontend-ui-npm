'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var Blog = function (props) {
    var _a = props || {}, _b = _a.variant, variant = _b === void 0 ? 'h2' : _b, label = _a.label, title = _a.title, subtitle = _a.subtitle, publishedAt = _a.publishedAt, html = _a.html, author = _a.author, avatar = _a.avatar, _c = _a.tags, tags = _c === void 0 ? [] : _c, _d = _a.textAlign, textAlign = _d === void 0 ? 'left' : _d;
    return (react_1.default.createElement("div", { className: "w-full flex flex-col space-y-6" },
        label && react_1.default.createElement(components_1.Label, { label: label, textAlign: textAlign }),
        title && (react_1.default.createElement(components_1.Typography, { variant: variant, textAlign: textAlign, className: "text-foreground tracking-tight font-semibold" }, title)),
        author && (react_1.default.createElement("div", { className: "flex my-3 space-x-3" },
            react_1.default.createElement(frontend_shadcn_1.Avatar, null,
                avatar && react_1.default.createElement(frontend_shadcn_1.AvatarImage, { src: avatar, alt: author }),
                react_1.default.createElement(frontend_shadcn_1.AvatarFallback, { className: "bg-primary" }, author === null || author === void 0 ? void 0 : author.slice(0, 1))),
            react_1.default.createElement("div", { className: "flex flex-col space-y-0" },
                react_1.default.createElement(components_1.Typography, { variant: "body2", className: "font-medium text-foreground" }, author),
                react_1.default.createElement(components_1.Typography, { variant: "body2", className: "text-muted-foreground" }, publishedAt)))),
        subtitle && (react_1.default.createElement("div", { className: "w-full py-2 border-l-4 pl-6 border-border" },
            react_1.default.createElement(components_1.Typography, { variant: "subtitle2", className: "text-lg italic text-muted-foreground" }, subtitle))),
        react_1.default.createElement("div", { className: "w-full prose py-0" },
            react_1.default.createElement("div", { dangerouslySetInnerHTML: { __html: html } })),
        tags.length > 0 && (react_1.default.createElement("div", { className: "flex space-x-2 py-2" }, tags.map(function (tag, index) { return (react_1.default.createElement(frontend_shadcn_1.Badge, { className: "px-3 py-1", variant: "outline", key: index }, tag)); })))));
};
exports.default = Blog;
