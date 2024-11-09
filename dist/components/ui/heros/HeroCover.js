'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var HeroCover = function (props) {
    var _a = props || {}, label = _a.label, image = _a.image, title = _a.title, subtitle = _a.subtitle;
    return (react_1.default.createElement(__1.Cover, { image: image, height: 400, label: label, title: title, subtitle: subtitle, enableOverlay: true }));
};
exports.default = HeroCover;
