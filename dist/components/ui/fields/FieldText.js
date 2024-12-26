'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var FieldText = function (props) {
    var value = props.value, label = props.label, expandable = props.expandable, _a = props.maxChars, maxChars = _a === void 0 ? 80 : _a, className = props.className;
    return (react_1.default.createElement(components_1.FieldWrapper, { label: label }, expandable ? (react_1.default.createElement(components_1.ExpandableText, { text: value, className: className, maxChars: maxChars })) : (react_1.default.createElement(components_1.Typography, { variant: "body1", className: className }, value))));
};
exports.default = FieldText;
