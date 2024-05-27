"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var __2 = require("..");
var material_1 = require("@mui/material");
var frontend_shopify_1 = require("frontend-shopify");
var ProductFavoritesCarousel = function (props) {
    var _a = props || {}, href = _a.href, _b = _a.title, title = _b === void 0 ? 'Favorites' : _b, _c = _a.enableBorder, enableBorder = _c === void 0 ? false : _c, _d = _a.buttonText, buttonText = _d === void 0 ? 'Add to cart' : _d, enableAddToCart = _a.enableAddToCart, enableQuantity = _a.enableQuantity, enableQuickShop = _a.enableQuickShop, _e = _a.enableAutoPlay, enableAutoPlay = _e === void 0 ? false : _e, _f = _a.enableArrows, enableArrows = _f === void 0 ? false : _f, _g = _a.enableDots, enableDots = _g === void 0 ? true : _g;
    var favorites = (0, frontend_shopify_1.useFavorites)().favorites;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        title && (react_1.default.createElement(material_1.Typography, { mb: 1, color: "textPrimary", variant: "h5" }, title)),
        react_1.default.createElement(__2.ProductCarousel, { href: href, products: favorites, enableBorder: enableBorder, enableAddToCart: enableAddToCart, enableQuantity: enableQuantity, enableQuickShop: enableQuickShop, buttonText: buttonText, enableAutoPlay: enableAutoPlay, enableArrows: enableArrows, enableDots: enableDots }),
        (favorites === null || favorites === void 0 ? void 0 : favorites.length) === 0 && (react_1.default.createElement(__1.Placeholder, { icon: 'Heart', title: 'No favorites', description: 'You have no favorites yet' }))));
};
exports.default = ProductFavoritesCarousel;
var sx = {
    root: {
        width: '100%',
    },
};
