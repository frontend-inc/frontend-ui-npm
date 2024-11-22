'use client';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var image_1 = __importDefault(require("next/image"));
var frontend_shadcn_1 = require("frontend-shadcn");
var frontend_shadcn_2 = require("frontend-shadcn");
var frontend_shadcn_3 = require("frontend-shadcn");
var helpers_1 = require("../../../helpers");
function ResponsiveImage(props) {
    var src = props.src, alt = props.alt, _a = props.width, width = _a === void 0 ? 1600 : _a, _b = props.height, height = _b === void 0 ? 1600 : _b, _c = props.objectFit, objectFit = _c === void 0 ? 'cover' : _c, _d = props.aspectRatio, aspectRatio = _d === void 0 ? 1.0 : _d, _e = props.enableOverlay, enableOverlay = _e === void 0 ? false : _e, _f = props.enableGradient, enableGradient = _f === void 0 ? false : _f, _g = props.disableBorderRadius, disableBorderRadius = _g === void 0 ? false : _g, _h = props.disableZoom, disableZoom = _h === void 0 ? false : _h, handleClick = props.handleClick, className = props.className, label = props.label;
    var _j = (0, react_1.useState)(false), isHovered = _j[0], setIsHovered = _j[1];
    return (react_1.default.createElement("figure", { className: (0, frontend_shadcn_3.cn)('w-full h-full', 'relative overflow-hidden', !disableBorderRadius && 'rounded-lg', className), onMouseEnter: function () { return setIsHovered(true); }, onMouseLeave: function () { return setIsHovered(false); }, onClick: handleClick ? handleClick : undefined },
        react_1.default.createElement(frontend_shadcn_1.AspectRatio, { ratio: aspectRatio },
            src ? (react_1.default.createElement(image_1.default, { src: src, alt: alt ? alt : 'image', width: width, height: height, className: (0, frontend_shadcn_3.cn)(objectFit == 'cover' ? 'object-cover' : 'object-contain', 'w-full h-full transition-transform duration-300 ease-in-out', !disableZoom && isHovered && 'hover:scale-105') })) : (react_1.default.createElement("div", { className: (0, frontend_shadcn_3.cn)(!disableBorderRadius && 'rounded-lg', 'h-full w-full bg-gradient-to-br from-black to-gray-600') })),
            enableOverlay && (react_1.default.createElement("div", { onMouseEnter: function () { return setIsHovered(true); }, onMouseLeave: function () { return setIsHovered(false); }, className: "absolute inset-0 bg-black bg-opacity-60" })),
            enableGradient && (react_1.default.createElement("div", { onMouseEnter: function () { return setIsHovered(true); }, onMouseLeave: function () { return setIsHovered(false); }, className: "absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" })),
            label && (react_1.default.createElement(frontend_shadcn_2.Badge, { variant: "secondary", className: "absolute font-medium px-2 py-1 uppercase text-xs tracking-wider top-3 left-3 bg-opacity-20 backdrop-blur-md text-foreground border-none" }, (0, helpers_1.truncate)(label, 14))))));
}
exports.default = ResponsiveImage;
