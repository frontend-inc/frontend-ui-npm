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
var material_1 = require("@mui/material");
var shopify_1 = require("../../../components/shopify");
var material_2 = require("@mui/material");
var ProductRecommendations = function (props) {
    var _a = props || {}, handle = _a.handle, _b = _a.editing, editing = _b === void 0 ? false : _b, _c = _a.layout, layout = _c === void 0 ? 'grid' : _c, _d = _a.title, title = _d === void 0 ? 'Similar products' : _d, _e = _a.perPage, perPage = _e === void 0 ? 12 : _e, productComponent = _a.productComponent, _f = _a.enableBorder, enableBorder = _f === void 0 ? false : _f, _g = _a.buttonText, buttonText = _g === void 0 ? 'Add to cart' : _g, enableAddToCart = _a.enableAddToCart, enableQuantity = _a.enableQuantity, enableQuickShop = _a.enableQuickShop, enableOkendoStarRating = _a.enableOkendoStarRating, maxWidth = _a.maxWidth;
    var _h = (0, react_1.useState)(), similarProducts = _h[0], setSimilarProducts = _h[1];
    var _j = (0, frontend_shopify_1.useProducts)(), loading = _j.loading, findProduct = _j.findProduct, product = _j.product, products = _j.products, findProductRecommendations = _j.findProductRecommendations;
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
                .filter(function (p) { return !p.tags.includes('hidden'); })
                .filter(function (p, index) { return index < Number(perPage); }));
        }
    }, [product, products]);
    (0, react_1.useEffect)(function () {
        if (handle) {
            findProduct(String(handle));
        }
    }, [handle]);
    return (react_1.default.createElement(material_2.Box, { sx: sx.root },
        title && (react_1.default.createElement(material_1.Typography, { color: "textPrimary", variant: "h6" }, title)),
        layout == 'grid' && (react_1.default.createElement(shopify_1.ProductGrid, { editing: editing, loading: loading, products: similarProducts, productComponent: productComponent, enableBorder: enableBorder, enableAddToCart: enableAddToCart, enableQuantity: enableQuantity, enableQuickShop: enableQuickShop, enableOkendoStarRating: enableOkendoStarRating, buttonText: buttonText })),
        layout == 'carousel' && (react_1.default.createElement(shopify_1.ProductCarousel, { editing: editing, loading: loading, products: similarProducts, productComponent: productComponent, enableBorder: enableBorder, enableAddToCart: enableAddToCart, enableQuantity: enableQuantity, enableQuickShop: enableQuickShop, enableOkendoStarRating: enableOkendoStarRating, buttonText: buttonText }))));
};
exports.default = ProductRecommendations;
var sx = {
    root: {
        width: '100%',
    },
};
