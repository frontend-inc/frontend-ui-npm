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
var LayoutScroll = function (props) {
    var _a = props || {}, children = _a.children, ref = _a.ref, _b = _a.pb, pb = _b === void 0 ? 0 : _b;
    return (react_1.default.createElement(material_1.Box, __assign({ ref: ref && ref, sx: __assign(__assign({}, sx.root), { pb: pb }) }, props), children));
};
exports.default = LayoutScroll;
var sx = {
    root: {
        height: 'calc(100vh - 50px)',
        overflowY: 'scroll',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
};
