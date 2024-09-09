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
var ShopifyRecentlyViewed = function (props) {
    var _a = props || {}, href = _a.href, _b = _a.layout, layout = _b === void 0 ? 'grid' : _b, _c = _a.enableBorder, enableBorder = _c === void 0 ? false : _c, _d = _a.buttonText, buttonText = _d === void 0 ? 'Add to cart' : _d, enableAddToCart = _a.enableAddToCart, enableQuantity = _a.enableQuantity, enableQuickShop = _a.enableQuickShop;
    var products = (0, frontend_shopify_1.useRecentlyViewed)().products;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        layout == 'grid' && (react_1.default.createElement(__2.ShopifyProductGrid, { href: href, products: products, enableBorder: enableBorder, enableAddToCart: enableAddToCart, enableQuantity: enableQuantity, enableQuickShop: enableQuickShop, buttonText: buttonText })),
        layout == 'carousel' && (react_1.default.createElement(__2.ShopifyProductCarousel, { href: href, products: products, enableBorder: enableBorder, buttonText: buttonText })),
        (products === null || products === void 0 ? void 0 : products.length) === 0 && (react_1.default.createElement(__1.Placeholder, { icon: 'ShoppingCart', title: 'No recently viewed', description: 'You have no recently viewed products.' }))));
};
exports.default = ShopifyRecentlyViewed;
var sx = {
    root: {
        width: '100%',
    },
};
