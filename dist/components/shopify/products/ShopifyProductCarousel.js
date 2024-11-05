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
    var loading = props.loading, products = props.products, _a = props.enableBorder, enableBorder = _a === void 0 ? false : _a, enableAddToCart = props.enableAddToCart, _b = props.enableQuantity, enableQuantity = _b === void 0 ? false : _b;
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('w-full', loading && 'opacity-50') },
        react_1.default.createElement(frontend_shadcn_2.Carousel, null,
            react_1.default.createElement(frontend_shadcn_2.CarouselContent, null, products === null || products === void 0 ? void 0 : products.map(function (product, index) { return (react_1.default.createElement(frontend_shadcn_2.CarouselItem, { className: "sm:basis-1/2 lg:basis-1/3", key: index },
                react_1.default.createElement("div", { className: 'p-1' },
                    react_1.default.createElement(__1.ShopifyProductCard, { product: product, enableBorder: enableBorder, enableAddToCart: enableAddToCart, enableQuantity: enableQuantity })))); })),
            react_1.default.createElement(frontend_shadcn_2.CarouselPrevious, { className: "hidden sm:flex" }),
            react_1.default.createElement(frontend_shadcn_2.CarouselNext, { className: "hidden sm:flex" }))));
};
exports.default = ShopifyProductCarousel;
