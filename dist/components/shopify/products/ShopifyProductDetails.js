'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("..");
var frontend_shopify_1 = require("frontend-shopify");
var frontend_shadcn_1 = require("frontend-shadcn");
var ShopifyProductDetails = function (_a) {
    var product = _a.shopifyProduct, buttonText = _a.buttonText, _b = _a.enableQuantity, enableQuantity = _b === void 0 ? true : _b, _c = _a.enableSubscription, enableSubscription = _c === void 0 ? true : _c, enableFavorites = _a.enableFavorites;
    var _d = (0, frontend_shopify_1.useProductDetails)({
        product: product,
    }), price = _d.price, compareAtPrice = _d.compareAtPrice, variant = _d.variant, selectedOptions = _d.selectedOptions, handleOptionChange = _d.handleOptionChange, image = _d.image, images = _d.images, handleImageClick = _d.handleImageClick;
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('flex flex-col sm:flex-row', 'w-full') },
        react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('w-full sm:w-1/2', 'p-0 sm:p-1') },
            react_1.default.createElement(__1.ShopifyProductImages, { product: product, image: image, images: images, handleClick: handleImageClick })),
        react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('w-full sm:w-1/2', 'p-0 sm:p-1') },
            react_1.default.createElement("div", { className: "flex flex-col space-y-8" },
                react_1.default.createElement("div", { className: "flex flex-col space-y-4" },
                    react_1.default.createElement(__1.ShopifyProductInfo, { product: product, price: price, compareAtPrice: compareAtPrice }),
                    react_1.default.createElement(__1.ShopifyProductVariantSelector, { product: product, selectedOptions: selectedOptions, handleOptionChange: handleOptionChange }),
                    react_1.default.createElement(__1.ShopifyAddToCartButton, { product: product, variant: variant, enableQuantity: enableQuantity, enableSubscription: enableSubscription, enableFavorites: enableFavorites, label: buttonText })),
                react_1.default.createElement(__1.ShopifyProductDescription, { product: product }),
                react_1.default.createElement(__1.ShopifyTrackRecentlyViewed, { product: product })))));
};
exports.default = ShopifyProductDetails;
