'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var FieldImage = function (props) {
    var label = props.label, value = props.value, _a = props.height, height = _a === void 0 ? 140 : _a, width = props.width, color = props.color, disableLabel = props.disableLabel;
    if (!value)
        return null;
    return (react_1.default.createElement(components_1.FieldWrapper, { color: color, label: label, disableLabel: disableLabel },
        react_1.default.createElement("div", { style: {
                height: "".concat(height, "px"),
                width: width ? "".concat(width, "px") : 'auto',
            } },
            react_1.default.createElement(components_1.Image, { aspectRatio: 1.0, alt: label || 'Image', src: (value === null || value === void 0 ? void 0 : value.url) || value, height: height }))));
};
exports.default = FieldImage;
