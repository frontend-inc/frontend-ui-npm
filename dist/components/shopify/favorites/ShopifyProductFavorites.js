"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var __2 = require("..");
var material_1 = require("@mui/material");
var ShopifyProductFavorites = function (props) {
    var _a = props || {}, href = _a.href, user = _a.user, _b = _a.enableBorder, enableBorder = _b === void 0 ? false : _b, _c = _a.buttonText, buttonText = _c === void 0 ? 'Add to cart' : _c, enableAddToCart = _a.enableAddToCart, enableQuantity = _a.enableQuantity, enableQuickShop = _a.enableQuickShop;
    var favorites = (user || {}).shopify_favorites;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(__2.ShopifyProductArray, { href: href, handles: favorites || [], enableBorder: enableBorder, enableAddToCart: enableAddToCart, enableQuantity: enableQuantity, enableQuickShop: enableQuickShop, buttonText: buttonText }),
        (favorites === null || favorites === void 0 ? void 0 : favorites.length) === 0 && (react_1.default.createElement(__1.Placeholder, { icon: 'Heart', title: 'No favorites', description: 'You have no favorites yet.' }))));
};
exports.default = ShopifyProductFavorites;
var sx = {
    root: {
        width: '100%',
    },
};
