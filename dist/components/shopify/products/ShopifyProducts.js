'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("..");
var ShopifyProducts = function (_a) {
    var products = _a.products, _b = _a.buttonText, buttonText = _b === void 0 ? 'Add to cart' : _b, _c = _a.enableBorder, enableBorder = _c === void 0 ? false : _c, enableAddToCart = _a.enableAddToCart, enableQuickShop = _a.enableQuickShop, enableQuantity = _a.enableQuantity;
    return (react_1.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-full" }, products === null || products === void 0 ? void 0 : products.map(function (product) { return (react_1.default.createElement("div", { className: "p-1", key: product === null || product === void 0 ? void 0 : product.id },
        react_1.default.createElement(__1.ShopifyProductCard, { product: product, enableBorder: enableBorder, enableAddToCart: enableAddToCart, enableQuickShop: enableQuickShop, enableQuantity: enableQuantity, buttonText: buttonText }))); })));
};
exports.default = ShopifyProducts;
