"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var shopify_1 = require("../../../../components/shopify");
var index_1 = require("../../../../constants/index");
var ProductImages = function (props) {
    var product = props.product, image = props.image, images = props.images, handleClick = props.handleClick;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.Hidden, { smDown: true },
            react_1.default.createElement(shopify_1.ProductImageThumbnails, { image: image, images: images, handleClick: handleClick })),
        react_1.default.createElement(material_1.Hidden, { smUp: true },
            react_1.default.createElement(shopify_1.SwipeableProductImages, { objectFit: 'contain', height: index_1.PDP_IMAGE_HEIGHT, width: index_1.PDP_IMAGE_HEIGHT, product: product }))));
};
exports.default = ProductImages;
