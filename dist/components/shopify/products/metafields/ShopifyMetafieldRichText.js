'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var link_1 = __importDefault(require("next/link"));
var frontend_shadcn_1 = require("frontend-shadcn");
var ShopifyMetafieldRichText = function (_a) {
    var value = _a.value;
    if (typeof value === 'string') {
        value = JSON.parse(value);
    }
    var renderValue = function (value, inList) {
        var _a;
        if (inList === void 0) { inList = false; }
        if (!value)
            return null;
        if (value.type === 'root' && ((_a = value.children) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            return (react_1.default.createElement("div", null, value.children.map(function (child, index) { return renderValue(child, inList); })));
        }
        else if (Array.isArray(value)) {
            return value.map(function (el, index) { return renderElement(el, index, inList); });
        }
        else {
            return renderElement(value, undefined, inList);
        }
    };
    var renderElement = function (el, key, inList) {
        switch (el.type) {
            case 'paragraph':
                return (react_1.default.createElement("p", { key: key, className: "my-4" }, renderValue(el.children, inList)));
            case 'heading':
                var HeadingTag = "h".concat(el.level);
                return (react_1.default.createElement(HeadingTag, { key: key, className: (0, frontend_shadcn_1.cn)('font-bold', el.level === 1 && 'text-4xl', el.level === 2 && 'text-3xl', el.level === 3 && 'text-2xl', el.level === 4 && 'text-xl', el.level === 5 && 'text-lg', el.level === 6 && 'text-base') }, renderValue(el.children, inList)));
            case 'list':
                var ListTag = el.listType === 'ordered' ? 'ol' : 'ul';
                return (react_1.default.createElement(ListTag, { key: key, className: (0, frontend_shadcn_1.cn)('pl-5 my-4', el.listType === 'ordered' ? 'list-decimal' : 'list-disc') }, renderValue(el.children, true)));
            case 'list-item':
                return (react_1.default.createElement("li", { key: key, className: "mb-1" }, renderValue(el.children, true)));
            case 'link':
                return (react_1.default.createElement(link_1.default, { key: key, href: el.url, title: el.title, target: el.target, className: "text-blue-600 hover:underline" }, renderValue(el.children, inList)));
            case 'text':
                return renderText(el, key, inList);
            default:
                return null;
        }
    };
    var renderText = function (el, key, inList) {
        var textElement = (react_1.default.createElement("span", { key: key },
            el.bold ? react_1.default.createElement("strong", null, el.value) : null,
            el.italic ? react_1.default.createElement("em", null, el.value) : null,
            !el.bold && !el.italic ? el.value : null));
        if (inList) {
            textElement = react_1.default.createElement("span", { key: key }, textElement);
        }
        return textElement;
    };
    return react_1.default.createElement(react_1.default.Fragment, null, renderValue(value));
};
exports.default = ShopifyMetafieldRichText;
