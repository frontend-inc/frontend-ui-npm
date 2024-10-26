'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../../..");
var frontend_shopify_1 = require("frontend-shopify");
var image_1 = __importDefault(require("next/image"));
var frontend_shadcn_1 = require("frontend-shadcn");
var ShopifyProductImageCarousel = function () {
    var _a = (0, frontend_shopify_1.useProductContext)(), images = _a.images, handleImageClick = _a.handleImageClick;
    return (react_1.default.createElement(__1.CarouselImage, null, images === null || images === void 0 ? void 0 : images.map(function (image) {
        var _a;
        return (react_1.default.createElement("div", { className: "w-full h-full pb-1", key: image.id },
            react_1.default.createElement(__1.TouchableOpacity, { handleClick: function () { return handleImageClick(image); } },
                react_1.default.createElement(frontend_shadcn_1.AspectRatio, { ratio: 4 / 3 },
                    react_1.default.createElement(image_1.default, { src: (_a = image === null || image === void 0 ? void 0 : image.url) === null || _a === void 0 ? void 0 : _a.url, height: 1200, width: 1200, alt: image === null || image === void 0 ? void 0 : image.altText })))));
    })));
};
exports.default = ShopifyProductImageCarousel;
