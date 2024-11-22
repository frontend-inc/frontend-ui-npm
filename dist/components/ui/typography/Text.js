'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var Text = function (props) {
    var _a = props || {}, _b = _a.variant, variant = _b === void 0 ? 'h6' : _b, title = _a.title, text = _a.text, _c = _a.textAlign, textAlign = _c === void 0 ? 'left' : _c;
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-3" },
        title && (react_1.default.createElement(components_1.Typography, { variant: variant, textAlign: textAlign, className: "text-foreground" }, title)),
        react_1.default.createElement(components_1.Typography, { variant: "body1", className: "text-muted-foreground" }, text)));
};
exports.default = Text;
