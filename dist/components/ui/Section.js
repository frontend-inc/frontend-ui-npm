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
    var children = props.children, title = props.title, _a = props.textAlign, textAlign = _a === void 0 ? 'left' : _a, bgcolor = props.bgcolor, maxWidth = props.maxWidth, _b = props.py, py = _b === void 0 ? 4 : _b;
    return (react_1.default.createElement(material_1.Box, { sx: __assign({ bgcolor: bgcolor }, sx.root) },
        react_1.default.createElement(material_1.Container, { disableGutters: !maxWidth, maxWidth: maxWidth || false, sx: __assign(__assign({}, sx.container), { py: py, px: py > 0 ? 2 : 0 }) },
            title && (react_1.default.createElement(material_1.Typography, { sx: __assign(__assign({}, sx.title), { textAlign: textAlign }), variant: "h6", color: "textPrimary" }, title)),
            children)));
};
exports.default = Section;
var sx = {
    root: {
        width: '100%',
        minHeight: '60px',
    },
    container: {
        width: '100%',
        overflowX: 'scroll',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    title: {
        width: '100%',
    },
};
