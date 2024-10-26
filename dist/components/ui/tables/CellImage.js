'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var helpers_1 = require("../../../helpers");
var CellImage = function (props) {
    var value = props.value, handleClick = props.handleClick;
    var src = (0, helpers_1.cloudinaryImageFromVideoUrl)(value === null || value === void 0 ? void 0 : value.url);
    return (react_1.default.createElement("div", { className: "max-h-[64px] max-w-[64px]" },
        react_1.default.createElement("button", { className: "w-full h-full rounded-lg focus:outline-none focus:ring-2", onClick: handleClick },
            react_1.default.createElement(components_1.Image, { src: src, aspectRatio: 1.0, alt: 'Image' }))));
};
exports.default = CellImage;
