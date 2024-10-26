'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var NoImage = function (props) {
    var _a = props.height, height = _a === void 0 ? 100 : _a, width = props.width, disableBorder = props.disableBorder, disableBorderRadius = props.disableBorderRadius;
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('flex items-center justify-center border border-divider rounded bg-gradient-to-br from-gray-600 to-black', height ? "h-[".concat(height, "px]") : 'h-full', width ? "w-[".concat(width, "px]") : 'w-full', disableBorder && 'border-0', disableBorderRadius && 'rounded-none') }));
};
exports.default = NoImage;
