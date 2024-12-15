'use client';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var frontend_shopify_1 = require("frontend-shopify");
var __1 = require("..");
var ShopifyProductArray = function (props) {
    var _a = props || {}, handles = _a.handles, _b = _a.enableBorder, enableBorder = _b === void 0 ? false : _b, _c = _a.enableAddToCart, enableAddToCart = _c === void 0 ? false : _c, _d = _a.enableQuantity, enableQuantity = _d === void 0 ? false : _d;
    return (react_1.default.createElement("div", { className: "w-full gap-6 pb-1 grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))]" }, handles === null || handles === void 0 ? void 0 : handles.map(function (handle) {
        var _a = (0, frontend_shopify_1.useProducts)(), product = _a.product, findProduct = _a.findProduct;
        (0, react_1.useEffect)(function () {
            if (handle) {
                findProduct(handle);
            }
        }, [handle]);
        if (!product)
            return null;
        return (react_1.default.createElement("div", { key: product === null || product === void 0 ? void 0 : product.id, className: "p-1" },
            react_1.default.createElement(__1.ShopifyProductCard, { product: product, enableBorder: enableBorder, enableAddToCart: enableAddToCart, enableQuantity: enableQuantity })));
    })));
};
exports.default = ShopifyProductArray;
