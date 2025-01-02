'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var image_1 = __importDefault(require("next/image"));
var react_2 = require("@nextui-org/react");
var NoImage_1 = __importDefault(require("../../ui/NoImage"));
var LOGO_WIDTH = 160;
var LOGO_HEIGHT = 60;
var Logo = function (_a) {
    var src = _a.src, _b = _a.width, width = _b === void 0 ? LOGO_WIDTH : _b, _c = _a.height, height = _c === void 0 ? LOGO_HEIGHT : _c, handleClick = _a.handleClick;
    return (react_1.default.createElement(react_2.Button, { variant: "ghost", className: "p-0 hover:bg-transparent focus:bg-transparent", onPress: function () { return handleClick('/'); } }, (src === null || src === void 0 ? void 0 : src.length) > 1 ? (react_1.default.createElement(image_1.default, { src: src, alt: "logo", width: width, height: height, className: "object-contain", priority: true })) : (react_1.default.createElement(NoImage_1.default, { height: height }))));
};
exports.default = Logo;
