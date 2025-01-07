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
    var _a = props || {}, editable = _a.editable, handleChange = _a.handleChange, image = _a.image, _b = _a.variant, variant = _b === void 0 ? 'h2' : _b, label = _a.label, title = _a.title, subtitle = _a.subtitle, description = _a.description, publishedAt = _a.publishedAt, html = _a.html, author = _a.author, avatar = _a.avatar, _c = _a.tags, tags = _c === void 0 ? [] : _c, _d = _a.textAlign, textAlign = _d === void 0 ? 'left' : _d;
    return (react_1.default.createElement("div", { className: "w-full flex flex-col space-y-6" },
        react_1.default.createElement(components_1.Container, { maxWidth: "md" },
            react_1.default.createElement("div", { className: "w-full flex flex-col space-y-6" },
                label && (react_1.default.createElement(components_1.Typography, { variant: "caption", textAlign: textAlign, name: "label", editable: editable, handleChange: handleChange }, label)),
                title && (react_1.default.createElement(components_1.Typography, { variant: variant, textAlign: textAlign, className: "text-foreground tracking-tight font-semibold", name: "title", editable: editable, handleChange: handleChange }, title)),
                react_1.default.createElement("div", { className: "flex my-3 space-x-3" },
                    react_1.default.createElement(frontend_shadcn_1.Avatar, null,
                        avatar && react_1.default.createElement(frontend_shadcn_1.AvatarImage, { src: avatar, alt: author }),
                        react_1.default.createElement(frontend_shadcn_1.AvatarFallback, { className: "bg-primary" }, author === null || author === void 0 ? void 0 : author.slice(0, 1))),
                    react_1.default.createElement("div", { className: "flex flex-col space-y-0" },
                        react_1.default.createElement(components_1.Typography, { name: "author", editable: editable, handleChange: handleChange, variant: "body2", className: "font-medium text-foreground" }, author),
                        react_1.default.createElement(components_1.Typography, { name: "description", editable: editable, handleChange: handleChange, variant: "body2", className: "text-foreground/70" }, description))),
                subtitle && (react_1.default.createElement(components_1.Typography, { variant: "subtitle2", className: "text-lg text-foreground/70", name: "subtitle", editable: editable, handleChange: handleChange }, subtitle)))),
        image && react_1.default.createElement(components_1.Image, { src: image, alt: title, aspectRatio: 1.5 }),
        react_1.default.createElement(components_1.Container, { maxWidth: "md" },
            react_1.default.createElement("div", { className: "flex flex-col space-y-10" },
                react_1.default.createElement(components_1.RichText, { html: html, editable: editable, handleChange: handleChange }),
                tags.length > 0 && (react_1.default.createElement("div", { className: "flex space-x-2 py-2" }, tags.map(function (tag, index) { return (react_1.default.createElement(frontend_shadcn_1.Badge, { className: "px-3 py-1", variant: "outline", key: index }, tag)); })))))));
};
exports.default = Blog;
