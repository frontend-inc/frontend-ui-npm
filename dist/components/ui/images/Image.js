'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var image_1 = __importDefault(require("next/image"));
var frontend_shadcn_1 = require("frontend-shadcn");
var frontend_shadcn_2 = require("frontend-shadcn");
var frontend_shadcn_3 = require("frontend-shadcn");
var helpers_1 = require("../../../helpers");
function ResponsiveImage(_a) {
    var src = _a.src, alt = _a.alt, _b = _a.width, width = _b === void 0 ? 600 : _b, _c = _a.height, height = _c === void 0 ? 600 : _c, _d = _a.objectFit, objectFit = _d === void 0 ? 'cover' : _d, _e = _a.aspectRatio, aspectRatio = _e === void 0 ? 1.0 : _e, _f = _a.enableOverlay, enableOverlay = _f === void 0 ? false : _f, _g = _a.enableGradient, enableGradient = _g === void 0 ? false : _g, _h = _a.disableBorderRadius, disableBorderRadius = _h === void 0 ? false : _h, _j = _a.disableZoom, disableZoom = _j === void 0 ? false : _j, handleClick = _a.handleClick, className = _a.className, label = _a.label;
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_3.cn)('w-full h-full', 'relative overflow-hidden', !disableBorderRadius && 'rounded-lg', className), onClick: handleClick ? handleClick : undefined },
        react_1.default.createElement(frontend_shadcn_1.AspectRatio, { ratio: aspectRatio },
            src ? (react_1.default.createElement(image_1.default, { src: src, alt: alt ? alt : 'image', width: width, height: height, className: (0, frontend_shadcn_3.cn)(objectFit == 'cover' ? 'object-cover' : 'object-contain', 'w-full h-full transition-transform duration-300 ease-in-out', !disableZoom && 'hover:scale-105') })) : (react_1.default.createElement("div", { className: (0, frontend_shadcn_3.cn)(!disableBorderRadius && 'rounded-lg', 'h-full w-full bg-gradient-to-br from-black to-gray-600') })),
            enableOverlay && (react_1.default.createElement("div", { className: "absolute inset-0 bg-black bg-opacity-40" })),
            enableGradient && (react_1.default.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" })),
            label && (react_1.default.createElement(frontend_shadcn_2.Badge, { variant: "secondary", className: "absolute font-medium px-2 py-1 uppercase text-xs tracking-wider top-3 left-3 bg-opacity-20 backdrop-blur-md text-foreground border-none" }, (0, helpers_1.truncate)(label, 14))))));
}
exports.default = ResponsiveImage;
