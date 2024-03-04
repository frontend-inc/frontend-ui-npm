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
var Heading = function (props) {
    var _a = props || {}, label = _a.label, title = _a.title, subtitle = _a.subtitle, textAlign = _a.textAlign;
    return (react_1.default.createElement(material_1.Stack, { sx: sx.stack, direction: 'column', spacing: 1 },
        label && (react_1.default.createElement(material_1.Typography, { color: "primary", sx: sx.label, variant: "caption" }, label)),
        title && (react_1.default.createElement(material_1.Typography, { variant: 'h6', color: 'text.primary', style: __assign(__assign({}, sx.text), { textAlign: textAlign }) }, title)),
        subtitle && (react_1.default.createElement(material_1.Typography, { variant: "body1", color: 'text.secondary', style: __assign(__assign({}, sx.text), { textAlign: textAlign }) }, subtitle))));
};
exports.default = Heading;
var sx = {
    stack: {
        width: '100%',
    },
    label: {
        color: 'primary.main',
    },
    text: {
        width: "100%",
        maxWidth: '600px',
    },
};
