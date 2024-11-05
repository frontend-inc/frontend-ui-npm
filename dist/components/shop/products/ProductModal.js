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
var __1 = require("../..");
var hooks_1 = require("../../../hooks");
var Product = function (props) {
    var _a = props || {};
    var _b = props || {}, open = _b.open, handleClose = _b.handleClose, productId = _b.productId, enableRatings = _b.enableRatings, enableLikes = _b.enableLikes, enableFavorites = _b.enableFavorites, enableGradient = _b.enableGradient, enableOverlay = _b.enableOverlay;
    var _c = (0, hooks_1.useProducts)(), loading = _c.loading, product = _c.product, findProduct = _c.findProduct;
    (0, react_1.useEffect)(function () {
        if (productId) {
            findProduct(productId);
        }
    }, [productId]);
    return (react_1.default.createElement(__1.Drawer, { open: open, handleClose: handleClose },
        react_1.default.createElement("div", { className: "w-full flex flex-row justify-center pb-10" },
            react_1.default.createElement("div", { className: "md:max-w-screen-sm flex flex-col space-y-[20px]" },
                react_1.default.createElement(__1.ProductDetails, { direction: "column", product: product, enableGradient: enableGradient, enableOverlay: enableOverlay, enableFavorites: enableFavorites, enableLikes: enableLikes, enableRatings: enableRatings }),
                enableRatings && (react_1.default.createElement(__1.ProductReviews, { productId: productId }))))));
};
exports.default = Product;
