"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var EditableTypography = function (props) {
    var variant = props.variant, name = props.name, handleChange = props.handleChange, text = props.text;
    var handleInputChange = function (e) {
        var _a;
        var value = (_a = e.currentTarget) === null || _a === void 0 ? void 0 : _a.textContent;
        handleChange({
            target: {
                value: value,
                name: name,
            },
        });
    };
    return (react_1.default.createElement(material_1.Typography, __assign({ suppressContentEditableWarning: true, contentEditable: "true", onInput: handleInputChange, variant: variant }, props), text));
};
exports.default = EditableTypography;
