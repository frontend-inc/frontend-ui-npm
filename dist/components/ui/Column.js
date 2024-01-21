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
    var children = props.children, bgcolor = props.bgcolor, maxWidth = props.maxWidth;
    return (react_1.default.createElement(material_1.Container, { sx: __assign(__assign({}, sx.root), { bgcolor: bgcolor }), maxWidth: maxWidth }, children));
};
exports.default = Column;
var sx = {
    root: {
        py: 4,
    },
};
