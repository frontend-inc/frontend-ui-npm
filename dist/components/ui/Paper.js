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
var Paper = function (props) {
    var children = props.children, styles = props.styles;
    return (react_1.default.createElement(material_1.Box, __assign({ p: props.p || 2, sx: __assign(__assign({}, sx.root), styles) }, props), children));
};
exports.default = Paper;
var sx = {
    root: {
        width: '100%',
        borderRadius: 1,
        bgcolor: 'background.paper',
        boxShadow: 0,
        border: '1px solid',
        borderColor: 'divider',
    },
};
