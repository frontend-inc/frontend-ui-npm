'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var image_1 = __importDefault(require("next/image"));
var components_1 = require("../../../components");
var Logo = function (props) {
    var _a = props.src, src = _a === void 0 ? null : _a, _b = props.height, height = _b === void 0 ? 50 : _b, _c = props.width, width = _c === void 0 ? 120 : _c, _d = props.alt, alt = _d === void 0 ? 'Logo' : _d;
    return src ? (react_1.default.createElement(image_1.default, { src: src, alt: alt, height: height, width: width, style: {
            minHeight: "".concat(height, "px"),
            objectFit: 'contain',
        } })) : (react_1.default.createElement(components_1.NoImage, { height: height }));
};
exports.default = Logo;
