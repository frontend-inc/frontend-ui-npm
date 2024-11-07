'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var HeroCover = function (props) {
    var _a = props || {}, image = _a.image, primary = _a.primary;
    return (react_1.default.createElement(__1.Cover, { textVariant: "h4", image: image, height: 400, title: primary, enableOverlay: true }));
};
exports.default = HeroCover;
