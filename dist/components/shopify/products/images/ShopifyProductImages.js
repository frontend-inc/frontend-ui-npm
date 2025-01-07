'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../../components");
var ShopifyProductImagesSlider_1 = __importDefault(require("./ShopifyProductImagesSlider"));
var SwipeableShopifyProductImages_1 = __importDefault(require("./SwipeableShopifyProductImages"));
var index_1 = require("../../../../constants/index");
var ShopifyProductImages = function (props) {
    var disableZoom = props.disableZoom, product = props.product, image = props.image, images = props.images, handleClick = props.handleClick;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(components_1.Hidden, { smDown: true },
            react_1.default.createElement(ShopifyProductImagesSlider_1.default, { image: image, images: images, handleClick: handleClick, disableZoom: disableZoom })),
        react_1.default.createElement(components_1.Hidden, { smUp: true },
            react_1.default.createElement(SwipeableShopifyProductImages_1.default, { objectFit: "contain", height: index_1.PDP_IMAGE_HEIGHT, width: index_1.PDP_IMAGE_HEIGHT, product: product }))));
};
exports.default = ShopifyProductImages;
