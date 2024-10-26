'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../../components");
var ShopifyProductImageList = function (props) {
    var images = props.images, handleClick = props.handleClick;
    return (react_1.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1" }, images === null || images === void 0 ? void 0 : images.map(function (image, i) { return (react_1.default.createElement("div", { key: i, className: "w-full" },
        react_1.default.createElement("button", { className: "w-full p-0 overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50", onClick: function () { return handleClick(i); } },
            react_1.default.createElement(components_1.Image, { alt: 'image', src: image, className: "w-full h-auto object-cover" })))); })));
};
exports.default = ShopifyProductImageList;
