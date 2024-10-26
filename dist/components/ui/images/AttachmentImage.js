'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var AttachmentImage = function (_a) {
    var _b = _a.height, height = _b === void 0 ? 64 : _b, _c = _a.width, width = _c === void 0 ? 64 : _c, _d = _a.icon, icon = _d === void 0 ? 'File' : _d, className = _a.className;
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('flex items-center justify-center bg-primary', height ? "h-[".concat(height, "px]") : 'h-auto', width ? "w-[".concat(width, "px]") : 'w-full', className) },
        react_1.default.createElement(components_1.Icon, { name: icon, size: 24 })));
};
exports.default = AttachmentImage;
