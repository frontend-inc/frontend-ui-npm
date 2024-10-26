'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var AvatarImage = function (props) {
    var image = props.image, alt = props.alt, _a = props.height, height = _a === void 0 ? 64 : _a, _b = props.enableGradient, enableGradient = _b === void 0 ? false : _b, _c = props.enableOverlay, enableOverlay = _c === void 0 ? false : _c;
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('relative h-[64px] rounded-full overflow-hidden', "h-[".concat(height, "px] w-[").concat(height, "px]")) },
        image ? (react_1.default.createElement("img", { src: image, alt: alt, className: "w-full h-full object-cover" })) : (react_1.default.createElement("div", { className: "rounded-full bg-gradient-to-br from-black to-gray-600", style: { width: "".concat(height, "px"), height: "".concat(height, "px") } })),
        enableGradient && (react_1.default.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-full" })),
        enableOverlay && (react_1.default.createElement("div", { className: "absolute inset-0 bg-black/50 rounded-full" }))));
};
exports.default = AvatarImage;
