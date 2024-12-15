'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("..");
var components_1 = require("../../../components");
var ShopifyProducts = function (props) {
    var _a = props || {}, products = _a.products, _b = _a.enableBorder, enableBorder = _b === void 0 ? false : _b, enableAddToCart = _a.enableAddToCart, enableQuantity = _a.enableQuantity;
    return (react_1.default.createElement("div", { className: "w-full gap-6 pb-1 grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(320px,1fr))]" }, products === null || products === void 0 ? void 0 : products.map(function (product, idx) { return (react_1.default.createElement(components_1.BlurFade, { delay: 0.25 + idx * 0.05, inView: true, key: product === null || product === void 0 ? void 0 : product.id },
        react_1.default.createElement("div", { className: "p-1", key: product === null || product === void 0 ? void 0 : product.id },
            react_1.default.createElement(__1.ShopifyProductCard, { product: product, enableBorder: enableBorder, enableAddToCart: enableAddToCart, enableQuantity: enableQuantity })))); })));
};
exports.default = ShopifyProducts;
