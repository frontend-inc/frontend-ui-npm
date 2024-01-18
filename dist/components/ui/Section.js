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
var Section = function (props) {
    var children = props.children, _a = props.bgColor, bgColor = _a === void 0 ? 'white' : _a, _b = props.p, p = _b === void 0 ? 4 : _b, _c = props.styles, styles = _c === void 0 ? {} : _c;
    return (react_1.default.createElement(material_1.Box, { sx: __assign({ bgcolor: bgColor, p: p }, styles) }, children));
};
exports.default = Section;
