'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../../components");
// @ts-ignore
var react_medium_image_zoom_1 = __importDefault(require("react-medium-image-zoom"));
var image_1 = __importDefault(require("next/image"));
var Thumbnail = function (props) {
    var image = props.image, active = props.active, handleClick = props.handleClick;
    return (react_1.default.createElement(components_1.Button, { variant: "ghost", className: "p-0 w-24 h-24 overflow-hidden rounded ".concat(active ? 'ring-2 ring-primary' : 'ring-2 ring-transparent'), onClick: function () { return handleClick(image); } },
        react_1.default.createElement(image_1.default, { src: image.url, width: 96, height: 96, alt: (image === null || image === void 0 ? void 0 : image.altText) || '', className: "object-cover w-full h-full" })));
};
var ShopifyProductImageSlider = function (props) {
    var image = props.image, images = props.images, handleClick = props.handleClick, _a = props.thumbnailSize, thumbnailSize = _a === void 0 ? 80 : _a;
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-4" },
        react_1.default.createElement("div", { className: "flex justify-center items-start" }, (image === null || image === void 0 ? void 0 : image.url) && (react_1.default.createElement(react_medium_image_zoom_1.default, null,
            react_1.default.createElement("img", { src: image === null || image === void 0 ? void 0 : image.url, alt: (image === null || image === void 0 ? void 0 : image.altText) || '', className: "h-full w-full object-contain" })))),
        react_1.default.createElement("div", { className: "flex flex-row space-x-2 overflow-x-auto scrollbar-hide" }, images === null || images === void 0 ? void 0 : images.map(function (img) { return (react_1.default.createElement(Thumbnail, { key: img === null || img === void 0 ? void 0 : img.id, image: img, active: (img === null || img === void 0 ? void 0 : img.id) === (image === null || image === void 0 ? void 0 : image.id), handleClick: handleClick })); }))));
};
exports.default = ShopifyProductImageSlider;
