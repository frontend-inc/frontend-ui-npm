"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var Text = function (props) {
    var _a = props || {}, text = _a.text, _b = _a.variant, variant = _b === void 0 ? 'body1' : _b, _c = _a.color, color = _c === void 0 ? 'text.primary' : _c, textAlign = _a.textAlign;
    return (react_1.default.createElement(material_1.Typography, { variant: variant, color: color, style: {
            textAlign: textAlign,
        } }, text));
};
exports.default = Text;
