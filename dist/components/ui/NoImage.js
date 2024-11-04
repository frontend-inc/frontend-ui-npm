'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var components_1 = require("../../components");
var frontend_shadcn_2 = require("frontend-shadcn");
var NoImage = function (props) {
    var _a = props.height, height = _a === void 0 ? 240 : _a, _b = props.icon, icon = _b === void 0 ? 'Play' : _b, _c = props.aspectRatio, aspectRatio = _c === void 0 ? 1.0 : _c, disableBorderRadius = props.disableBorderRadius;
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)(!disableBorderRadius && 'rounded-lg', 'relative h-full w-full overflow-hidden'), style: {
            maxHeight: "".concat(height, "px")
        } },
        react_1.default.createElement(frontend_shadcn_2.AspectRatio, { ratio: aspectRatio },
            react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)(!disableBorderRadius && 'rounded-lg', 'h-full w-full bg-gradient-to-br from-black to-gray-600') })),
        icon && (react_1.default.createElement("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" },
            react_1.default.createElement(frontend_shadcn_2.Avatar, null,
                react_1.default.createElement(frontend_shadcn_2.AvatarFallback, { className: "bg-transparent border border-white" },
                    react_1.default.createElement(components_1.Icon, { name: icon, className: "text-white" })))))));
};
exports.default = NoImage;
