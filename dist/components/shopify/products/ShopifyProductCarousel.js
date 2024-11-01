'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("..");
var frontend_shadcn_1 = require("frontend-shadcn");
var frontend_shadcn_2 = require("frontend-shadcn");
var ShopifyProductCarousel = function (props) {
    var loading = props.loading, products = props.products, _a = props.buttonText, buttonText = _a === void 0 ? 'Add to cart' : _a, _b = props.enableBorder, enableBorder = _b === void 0 ? false : _b, enableAddToCart = props.enableAddToCart, enableQuickShop = props.enableQuickShop, _c = props.enableQuantity, enableQuantity = _c === void 0 ? false : _c;
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('w-full', loading && 'opacity-50') },
        react_1.default.createElement(frontend_shadcn_2.Carousel, null,
            react_1.default.createElement(frontend_shadcn_2.CarouselContent, null, products === null || products === void 0 ? void 0 : products.map(function (product, index) { return (react_1.default.createElement(frontend_shadcn_2.CarouselItem, { className: "sm:basis-1/2 lg:basis-1/3", key: index },
                react_1.default.createElement("div", { className: 'p-1' },
                    react_1.default.createElement(__1.ShopifyProductCard, { product: product, buttonText: buttonText, enableBorder: enableBorder, enableAddToCart: enableAddToCart, enableQuickShop: enableQuickShop, enableQuantity: enableQuantity })))); })),
            react_1.default.createElement(frontend_shadcn_2.CarouselPrevious, { className: "hidden sm:flex" }),
            react_1.default.createElement(frontend_shadcn_2.CarouselNext, { className: "hidden sm:flex" }))));
};
exports.default = ShopifyProductCarousel;
