'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var FieldAvatar = function (props) {
    var value = props.value, label = props.label, color = props.color, _a = props.size, size = _a === void 0 ? 32 : _a, variant = props.variant, disableLabel = props.disableLabel;
    return (react_1.default.createElement(components_1.FieldWrapper, { label: label, color: color, disableLabel: disableLabel },
        react_1.default.createElement(components_1.Avatar, { src: value, size: size, variant: variant })));
};
exports.default = FieldAvatar;
