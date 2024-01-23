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
var Column = function (props) {
    var children = props.children, _a = props.cols, cols = _a === void 0 ? 1 : _a, _b = props.gap, gap = _b === void 0 ? 0 : _b, _c = props.py, py = _c === void 0 ? 4 : _c, bgcolor = props.bgcolor, maxWidth = props.maxWidth;
    return (react_1.default.createElement(material_1.Container, { sx: __assign(__assign({}, sx.root), { gridTemplateColumns: {
                sm: "repeat(".concat(Number(cols), ", 1fr)"),
                xs: '1fr'
            }, gap: gap, py: py, px: py > 0 ? 2 : 0, bgcolor: bgcolor }), maxWidth: maxWidth }, children));
};
exports.default = Column;
var sx = {
    root: {
        py: 4,
    },
};
