'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var components_1 = require("../../../components");
var frontend_shopify_1 = require("frontend-shopify");
var frontend_shadcn_2 = require("frontend-shadcn");
var ShopifyOrderLineItem = function (_a) {
    var _b, _c, _d, _e, _f;
    var lineItem = _a.lineItem, className = _a.className;
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_2.cn)('flex items-start space-x-4 py-2', className) },
        react_1.default.createElement("div", { className: "relative flex-shrink-0" }, ((_c = (_b = lineItem === null || lineItem === void 0 ? void 0 : lineItem.variant) === null || _b === void 0 ? void 0 : _b.image) === null || _c === void 0 ? void 0 : _c.url) && (react_1.default.createElement("div", { className: "relative" },
            react_1.default.createElement(components_1.Image, { height: 100, width: 100, src: lineItem.variant.image.url, alt: lineItem.title, className: "rounded-md object-cover" }),
            react_1.default.createElement(frontend_shadcn_1.Badge, { className: "absolute -top-2 -right-2 h-6 w-6 rounded-full flex items-center justify-center bg-primary text-primary-foreground" }, lineItem.quantity)))),
        react_1.default.createElement("div", { className: "flex-grow" },
            react_1.default.createElement("h4", { className: "text-sm font-medium" }, lineItem.title),
            react_1.default.createElement("p", { className: "text-sm text-muted-foreground" }, (_d = lineItem === null || lineItem === void 0 ? void 0 : lineItem.variant) === null || _d === void 0 ? void 0 : _d.title),
            react_1.default.createElement("p", { className: "text-sm text-muted-foreground" },
                lineItem.quantity,
                " x",
                ' ',
                (0, frontend_shopify_1.formatCurrency)((_f = (_e = lineItem === null || lineItem === void 0 ? void 0 : lineItem.variant) === null || _e === void 0 ? void 0 : _e.price) === null || _f === void 0 ? void 0 : _f.amount)))));
};
exports.default = ShopifyOrderLineItem;
