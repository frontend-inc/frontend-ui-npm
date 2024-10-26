'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var image_1 = __importDefault(require("next/image"));
var BrandLogos = function (props) {
    var _a = props || {}, _b = _a.logos, logos = _b === void 0 ? [] : _b, _c = _a.height, height = _c === void 0 ? 48 : _c, _d = _a.width, width = _d === void 0 ? 128 : _d;
    return (react_1.default.createElement("div", { className: "mx-auto px-4" },
        react_1.default.createElement("div", { className: 'flex flex-wrap w-full justify-center items-center gap-4 sm:flex-nowrap' }, logos.map(function (logo, i) { return (react_1.default.createElement("div", { className: 'p-4 max-h-[50px] max-w-[140px] rounded-lg w-full flex items-center justify-center' },
            react_1.default.createElement(image_1.default, { key: i, src: logo === null || logo === void 0 ? void 0 : logo.image, height: height, width: width, style: {
                    objectFit: 'contain',
                    height: height,
                    width: width,
                }, layout: "responsive", alt: logo === null || logo === void 0 ? void 0 : logo.title }))); }))));
};
exports.default = BrandLogos;
