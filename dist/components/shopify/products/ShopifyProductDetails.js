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
var __1 = require("..");
var frontend_shopify_1 = require("frontend-shopify");
var frontend_shadcn_1 = require("frontend-shadcn");
var ShopifyProductDetails = function (props) {
    var shopifyProduct = props.shopifyProduct, buttonText = props.buttonText, _a = props.enableQuantity, enableQuantity = _a === void 0 ? true : _a, _b = props.enableSubscription, enableSubscription = _b === void 0 ? true : _b, enableFavorites = props.enableFavorites, _c = props.disableZoom, disableZoom = _c === void 0 ? false : _c;
    var _d = (0, frontend_shopify_1.useProducts)(), product = _d.product, findProduct = _d.findProduct;
    var _e = (0, frontend_shopify_1.useProductDetails)({
        product: product,
    }), price = _e.price, compareAtPrice = _e.compareAtPrice, variant = _e.variant, selectedOptions = _e.selectedOptions, handleOptionChange = _e.handleOptionChange, image = _e.image, images = _e.images, handleImageClick = _e.handleImageClick;
    (0, react_1.useEffect)(function () {
        if (shopifyProduct) {
            findProduct(shopifyProduct);
        }
    }, [shopifyProduct]);
    return (react_1.default.createElement("div", { className: 'flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 w-full pb-[60px]' },
        react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('w-full sm:w-1/2', 'p-0 sm:p-1') },
            react_1.default.createElement(__1.ShopifyProductImages, { product: product, image: image, images: images, handleClick: handleImageClick, disableZoom: disableZoom })),
        react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('w-full sm:w-1/2', 'p-0 sm:p-1') },
            react_1.default.createElement("div", { className: "flex flex-col space-y-8" },
                react_1.default.createElement("div", { className: "flex flex-col space-y-4" },
                    react_1.default.createElement(__1.ShopifyProductInfo, { product: product, price: price, compareAtPrice: compareAtPrice }),
                    react_1.default.createElement(__1.ShopifyVariantSelector, { product: product, selectedOptions: selectedOptions, handleOptionChange: handleOptionChange }),
                    react_1.default.createElement(__1.ShopifyAddToCartButton, { product: product, variant: variant, enableQuantity: enableQuantity, enableSubscription: enableSubscription, enableFavorites: enableFavorites, label: buttonText })),
                react_1.default.createElement(__1.ShopifyProductDescription, { product: product }),
                react_1.default.createElement(__1.ShopifyTrackRecentlyViewed, { product: product })))));
};
exports.default = ShopifyProductDetails;
