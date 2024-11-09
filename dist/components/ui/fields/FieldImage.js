'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var FieldImage = function (props) {
    var label = props.label, value = props.value, className = props.className, enableGradient = props.enableGradient, enableOverlay = props.enableOverlay, _a = props.height, height = _a === void 0 ? 140 : _a;
    return (react_1.default.createElement(components_1.FieldWrapper, null,
        react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('w-full max-w-screen-md', className), style: {
                width: '100%',
                height: height,
            } },
            react_1.default.createElement(components_1.Image, { label: label, alt: label, src: value === null || value === void 0 ? void 0 : value.url, height: height, enableGradient: enableGradient, enableOverlay: enableOverlay }))));
};
exports.default = FieldImage;
