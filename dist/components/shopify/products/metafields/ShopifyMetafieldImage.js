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
var frontend_shopify_2 = require("frontend-shopify");
var components_1 = require("../../../../components");
var ShopifyMetafieldImage = function (props) {
    var handle = props.handle, metafield = props.metafield;
    var _a = (0, frontend_shopify_2.useProducts)(), loading = _a.loading, product = _a.product, findProduct = _a.findProduct;
    var _b = (0, react_1.useState)(null), src = _b[0], setSrc = _b[1];
    (0, react_1.useEffect)(function () {
        if (handle && metafield) {
            findProduct(handle, [metafield]);
        }
    }, [handle, metafield]);
    (0, react_1.useEffect)(function () {
        if (product) {
            setSrc((0, frontend_shopify_1.getMetafieldImage)(product, metafield.key));
        }
    }, [product]);
    if (!src)
        return null;
    return (react_1.default.createElement(components_1.Image
    // @ts-ignore
    , { 
        // @ts-ignore
        image: src, alt: product === null || product === void 0 ? void 0 : product.title }));
};
exports.default = ShopifyMetafieldImage;
