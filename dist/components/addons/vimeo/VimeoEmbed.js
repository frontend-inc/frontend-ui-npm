'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var VimeoEmbed = function (props) {
    var src = props.src, _a = props.aspectRatio, aspectRatio = _a === void 0 ? 16 / 9 : _a;
    return (react_1.default.createElement(frontend_shadcn_1.AspectRatio, { ratio: aspectRatio },
        react_1.default.createElement("iframe", { src: src, width: "800px", height: "450px", className: "w-full h-full absolute top-0 left-0", frameBorder: "0" })));
};
exports.default = VimeoEmbed;
