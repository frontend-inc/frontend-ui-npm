'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var __2 = require("../..");
var ProductDetails = function (props) {
    var _a;
    var _b = props || {}, direction = _b.direction, product = _b.product, enableFavorites = _b.enableFavorites, enableLikes = _b.enableLikes, enableSharing = _b.enableSharing, enableRatings = _b.enableRatings, enableGradient = _b.enableGradient, enableOverlay = _b.enableOverlay;
    if (!(product === null || product === void 0 ? void 0 : product.id))
        return null;
    return (react_1.default.createElement(__1.PDP, { direction: direction, image: (_a = product === null || product === void 0 ? void 0 : product.image) === null || _a === void 0 ? void 0 : _a.url, title: product === null || product === void 0 ? void 0 : product.title, price: product === null || product === void 0 ? void 0 : product.display_price, compareAtPrice: product === null || product === void 0 ? void 0 : product.display_compare_at_price, description: product === null || product === void 0 ? void 0 : product.description, enableGradient: enableGradient, enableOverlay: enableOverlay, enableRatings: enableRatings, rating: product === null || product === void 0 ? void 0 : product.average_rating, actions: react_1.default.createElement(__2.SocialButtons, { size: "large", justifyContent: 'center', resource: product, product: product, enableProductLikes: enableLikes, enableProductFavorites: enableFavorites, enableSharing: enableSharing }), addToCart: product.recurring ? (react_1.default.createElement(__2.SubscribeButton, { availableForSale: true, size: "lg", productId: product === null || product === void 0 ? void 0 : product.id, className: "max-w-[360px]" })) : (react_1.default.createElement(__2.AddToCartButton, { availableForSale: true, size: "lg", productId: product === null || product === void 0 ? void 0 : product.id, className: "max-w-[360px]" })) }));
};
exports.default = ProductDetails;
