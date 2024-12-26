'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var components_2 = require("../../../components");
var image_1 = __importDefault(require("next/image"));
var Logos = function (props) {
    var _a = props.logos, logos = _a === void 0 ? [] : _a, _b = props.height, height = _b === void 0 ? 48 : _b, _c = props.width, width = _c === void 0 ? 128 : _c;
    return (react_1.default.createElement("div", { className: "flex flex-col w-full" },
        react_1.default.createElement("div", { className: "relative flex flex-wrap w-full justify-center items-center gap-4 sm:flex-nowrap" },
            react_1.default.createElement(components_2.Marquee, { className: "[--duration:20s]" }, logos.map(function (logo, i) { return (react_1.default.createElement("div", { key: i, className: 'p-4 max-h-[50px] max-w-[140px] rounded-lg w-full flex items-center justify-center' },
                react_1.default.createElement(image_1.default, { src: logo === null || logo === void 0 ? void 0 : logo.image, height: height, width: width, style: {
                        objectFit: 'contain',
                        height: height,
                        width: width,
                    }, layout: "responsive", alt: logo === null || logo === void 0 ? void 0 : logo.title }))); })),
            react_1.default.createElement("div", { className: "pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background" }),
            react_1.default.createElement("div", { className: "pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background" })),
        (logos === null || logos === void 0 ? void 0 : logos.length) === 0 && (react_1.default.createElement(components_1.Empty, { title: "No logos", description: "Logos will appear here" }))));
};
exports.default = Logos;
