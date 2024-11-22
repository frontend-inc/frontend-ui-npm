'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var __2 = require("..");
var frontend_shopify_1 = require("frontend-shopify");
var ShopifyProductFavoritesCarousel = function (props) {
    var _a = props || {}, _b = _a.enableBorder, enableBorder = _b === void 0 ? false : _b, enableAddToCart = _a.enableAddToCart, enableQuantity = _a.enableQuantity, _c = _a.enableAutoPlay, enableAutoPlay = _c === void 0 ? false : _c;
    var favorites = (0, frontend_shopify_1.useFavorites)().favorites;
    return (react_1.default.createElement("div", { className: "w-full" },
        react_1.default.createElement(__2.ShopifyProductCarousel, { products: favorites, enableBorder: enableBorder, enableAddToCart: enableAddToCart, enableQuantity: enableQuantity, enableAutoPlay: enableAutoPlay }),
        (favorites === null || favorites === void 0 ? void 0 : favorites.length) === 0 && (react_1.default.createElement(__1.Empty, { icon: "ri-heart-2-fill", title: "No favorites", description: "You have no favorites yet" }))));
};
exports.default = ShopifyProductFavoritesCarousel;
