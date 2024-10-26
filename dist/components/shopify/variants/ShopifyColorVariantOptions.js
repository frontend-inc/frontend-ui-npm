'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var image_1 = __importDefault(require("next/image"));
var frontend_shopify_1 = require("frontend-shopify");
var frontend_shadcn_1 = require("frontend-shadcn");
var ShopifyColorVariantsOptions = function (_a) {
    var product = _a.product, name = _a.name, values = _a.values, selected = _a.selected, handleChange = _a.handleChange, styles = _a.styles;
    return (react_1.default.createElement("div", { className: "flex flex-col items-start justify-center", style: styles },
        react_1.default.createElement("div", { className: "flex flex-row flex-wrap gap-2.5" }, values === null || values === void 0 ? void 0 : values.map(function (value) {
            var _a, _b;
            var variant = (0, frontend_shopify_1.findVariantByColor)(product, value);
            return (react_1.default.createElement("button", { key: value, className: (0, frontend_shadcn_1.cn)('p-0 overflow-hidden rounded-lg border-3 border-transparent hover:opacity-85 transition-opacity', 'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2', selected === value && 'border-primary opacity-100'), onClick: function () { return handleChange(name, value); } },
                react_1.default.createElement(image_1.default, { height: 72, width: 72, src: (_a = variant === null || variant === void 0 ? void 0 : variant.image) === null || _a === void 0 ? void 0 : _a.url, alt: ((_b = variant === null || variant === void 0 ? void 0 : variant.image) === null || _b === void 0 ? void 0 : _b.altText) || "".concat(value, " color variant"), className: "object-contain hover:scale-110 transition-transform" })));
        }))));
};
exports.default = ShopifyColorVariantsOptions;
