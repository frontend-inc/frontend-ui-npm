'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
var frontend_shopify_1 = require("frontend-shopify");
var components_1 = require("../../../components");
var react_3 = require("@nextui-org/react");
var ShopifyOrderLineItem = function (_a) {
    var _b, _c, _d, _e, _f;
    var lineItem = _a.lineItem, className = _a.className;
    return (react_1.default.createElement("div", { className: (0, react_3.cn)('flex items-start space-x-4 py-2', className) },
        react_1.default.createElement("div", { className: "relative flex-shrink-0" }, ((_c = (_b = lineItem === null || lineItem === void 0 ? void 0 : lineItem.variant) === null || _b === void 0 ? void 0 : _b.image) === null || _c === void 0 ? void 0 : _c.url) && (react_1.default.createElement(react_2.Badge, { className: "absolute -top-2 -right-2 h-6 w-6 rounded-full flex items-center justify-center bg-primary text-primary-foreground" },
            react_1.default.createElement(react_2.Image, { height: 96, width: 96, src: lineItem.variant.image.url, alt: lineItem.title }),
            lineItem.quantity))),
        react_1.default.createElement("div", { className: "flex-grow" },
            react_1.default.createElement(components_1.Typography, { variant: "body1", className: "text-sm text-foreground/70" }, (_d = lineItem === null || lineItem === void 0 ? void 0 : lineItem.variant) === null || _d === void 0 ? void 0 : _d.title),
            react_1.default.createElement(components_1.Typography, { variant: "body2", className: "text-foreground/70" },
                lineItem.quantity,
                " x",
                ' ',
                (0, frontend_shopify_1.formatCurrency)((_f = (_e = lineItem === null || lineItem === void 0 ? void 0 : lineItem.variant) === null || _e === void 0 ? void 0 : _e.price) === null || _f === void 0 ? void 0 : _f.amount)))));
};
exports.default = ShopifyOrderLineItem;
