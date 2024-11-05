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
var ShopifyProductRecommendations = function (props) {
    var _a = props || {}, _b = _a.layout, layout = _b === void 0 ? 'grid' : _b, shopifyProduct = _a.shopifyProduct, _c = _a.perPage, perPage = _c === void 0 ? 12 : _c, _d = _a.enableBorder, enableBorder = _d === void 0 ? false : _d, enableAddToCart = _a.enableAddToCart, enableQuantity = _a.enableQuantity;
    var _e = (0, react_1.useState)(), similarProducts = _e[0], setSimilarProducts = _e[1];
    var _f = (0, frontend_shopify_1.useProducts)(), loading = _f.loading, findProduct = _f.findProduct, product = _f.product, products = _f.products, findProductRecommendations = _f.findProductRecommendations;
    (0, react_1.useEffect)(function () {
        if (product) {
            findProductRecommendations(product === null || product === void 0 ? void 0 : product.id);
        }
    }, [product]);
    // Hide the current product and any products marked hidden
    (0, react_1.useEffect)(function () {
        if (product && products) {
            setSimilarProducts(products
                .filter(function (p) { return p.id != (product === null || product === void 0 ? void 0 : product.id); })
                .filter(function (p, index) { return index < Number(perPage); }));
        }
    }, [product, products]);
    (0, react_1.useEffect)(function () {
        if (shopifyProduct) {
            findProduct(shopifyProduct);
        }
    }, [shopifyProduct]);
    return (react_1.default.createElement("div", { className: "w-full" },
        layout == 'grid' && (react_1.default.createElement(shopify_1.ShopifyProducts, { loading: loading, products: similarProducts, enableBorder: enableBorder, enableAddToCart: enableAddToCart, enableQuantity: enableQuantity })),
        layout == 'carousel' && (react_1.default.createElement(shopify_1.ShopifyProductCarousel, { loading: loading, products: similarProducts, enableBorder: enableBorder, enableAddToCart: enableAddToCart, enableQuantity: enableQuantity }))));
};
exports.default = ShopifyProductRecommendations;
