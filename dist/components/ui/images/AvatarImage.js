'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
var AvatarImage = function (props) {
    var src = props.src, alt = props.alt, _a = props.size, size = _a === void 0 ? 64 : _a, _b = props.enableGradient, enableGradient = _b === void 0 ? false : _b, _c = props.enableOverlay, enableOverlay = _c === void 0 ? false : _c;
    if (!src)
        return (react_1.default.createElement("div", { className: "rounded-full bg-gradient-to-br from-black to-gray-600", style: {
                width: "".concat(size, "px"),
                height: "".concat(size, "px")
            } }));
    return (react_1.default.createElement("div", { className: 'relative rounded-full overflow-hidden' },
        react_1.default.createElement(react_2.Image, { src: src, alt: alt, height: size, width: size, radius: "full", className: "object-cover" }),
        enableGradient && (react_1.default.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-full" })),
        enableOverlay && (react_1.default.createElement("div", { className: "absolute inset-0 bg-black/50 rounded-full" }))));
};
exports.default = AvatarImage;
