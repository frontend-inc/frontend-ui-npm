'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var __2 = require("..");
var frontend_shopify_1 = require("frontend-shopify");
var ShopifyRecentlyViewed = function (props) {
    var _a = props || {}, _b = _a.layout, layout = _b === void 0 ? 'grid' : _b, _c = _a.enableBorder, enableBorder = _c === void 0 ? false : _c, enableAddToCart = _a.enableAddToCart, enableQuantity = _a.enableQuantity;
    var products = (0, frontend_shopify_1.useRecentlyViewed)().products;
    return (react_1.default.createElement("div", { className: "w-full" },
        layout == 'grid' && (react_1.default.createElement(__2.ShopifyProducts, { products: products, enableBorder: enableBorder, enableAddToCart: enableAddToCart, enableQuantity: enableQuantity })),
        layout == 'carousel' && (react_1.default.createElement(__2.ShopifyProductCarousel, { products: products, enableBorder: enableBorder })),
        (products === null || products === void 0 ? void 0 : products.length) === 0 && (react_1.default.createElement(__1.Empty, { icon: "ri-shopping-cart-2-fill", title: 'No recently viewed', description: 'You have no recently viewed products.' }))));
};
exports.default = ShopifyRecentlyViewed;
