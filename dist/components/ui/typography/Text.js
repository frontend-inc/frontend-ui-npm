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
var Text = function (props) {
    var _a = props || {}, children = _a.children, _b = _a.variant, variant = _b === void 0 ? 'body1' : _b, _c = _a.color, color = _c === void 0 ? 'text.primary' : _c, textAlign = _a.textAlign;
    return (react_1.default.createElement(material_1.Typography, { variant: variant, color: color, sx: __assign(__assign({}, sx.root), { textAlign: textAlign }) }, children));
};
exports.default = Text;
var sx = {
    root: {
        whiteSpace: 'pre-wrap',
    }
};
