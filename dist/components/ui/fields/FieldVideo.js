'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var FieldVideo = function (props) {
    var value = props.value, label = props.label;
    return (react_1.default.createElement(components_1.FieldWrapper, { label: label }, (value === null || value === void 0 ? void 0 : value.url) ? (react_1.default.createElement("video", { src: value === null || value === void 0 ? void 0 : value.url, controls: true, muted: true, autoPlay: true, className: "w-full" })) : (react_1.default.createElement(components_1.NoImage, { height: 240 }))));
};
exports.default = FieldVideo;
