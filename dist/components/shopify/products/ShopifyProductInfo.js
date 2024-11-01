'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("../../core");
var frontend_shopify_1 = require("frontend-shopify");
var ShopifyProductDetails = function (props) {
    var product = props.product, price = props.price, compareAtPrice = props.compareAtPrice;
    if (!product)
        return null;
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-2" },
        react_1.default.createElement(core_1.Typography, { variant: "h4" }, product.title),
        react_1.default.createElement("div", { className: "flex flex-row space-x-2" },
            react_1.default.createElement(core_1.Typography, { variant: "h6" }, price && (0, frontend_shopify_1.formatCurrency)(price)),
            compareAtPrice && (react_1.default.createElement(core_1.Typography, { variant: "subtitle2", className: "text-muted-foreground line-through" }, (0, frontend_shopify_1.formatCurrency)(compareAtPrice))))));
};
exports.default = ShopifyProductDetails;
