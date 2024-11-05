'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var __2 = require("..");
var ShopifyProductFavorites = function (props) {
    var _a = props || {}, user = _a.user, _b = _a.enableBorder, enableBorder = _b === void 0 ? false : _b, enableAddToCart = _a.enableAddToCart, enableQuantity = _a.enableQuantity;
    var favorites = (user || {}).shopify_favorites;
    return (react_1.default.createElement("div", { className: "w-full" },
        react_1.default.createElement(__2.ShopifyProductArray, { handles: favorites || [], enableBorder: enableBorder, enableAddToCart: enableAddToCart, enableQuantity: enableQuantity }),
        (favorites === null || favorites === void 0 ? void 0 : favorites.length) === 0 && (react_1.default.createElement(__1.Placeholder, { icon: 'Heart', title: 'No favorites', description: 'You have no favorites yet.' }))));
};
exports.default = ShopifyProductFavorites;
