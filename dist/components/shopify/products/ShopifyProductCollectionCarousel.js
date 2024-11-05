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
var shopify_1 = require("../../../components/shopify");
var ShopifyProductCollectionCarousel = function (props) {
    var handle = props.handle, _a = props.enableAutoPlay, enableAutoPlay = _a === void 0 ? false : _a, _b = props.enableBorder, enableBorder = _b === void 0 ? false : _b, _c = props.enableAddToCart, enableAddToCart = _c === void 0 ? false : _c, _d = props.enableQuantity, enableQuantity = _d === void 0 ? false : _d;
    var _e = (0, frontend_shopify_1.useCollections)(), loading = _e.loading, products = _e.products, findCollection = _e.findCollection;
    (0, react_1.useEffect)(function () {
        if (handle) {
            findCollection(handle);
        }
    }, [handle]);
    return (react_1.default.createElement(shopify_1.ShopifyProductCarousel, { loading: loading, products: products, enableAutoPlay: enableAutoPlay, enableBorder: enableBorder, enableAddToCart: enableAddToCart, enableQuantity: enableQuantity }));
};
exports.default = ShopifyProductCollectionCarousel;
