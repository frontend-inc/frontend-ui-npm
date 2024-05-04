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
var FieldWrapper = function (props) {
    var _a = props || {}, _b = _a.direction, direction = _b === void 0 ? 'column' : _b, label = _a.label, _c = _a.enableBorder, enableBorder = _c === void 0 ? false : _c, children = _a.children;
    return (react_1.default.createElement(material_1.Stack, { direction: { xs: 'column', sm: direction }, spacing: 1, sx: __assign(__assign({}, sx.root), (enableBorder && sx.rootBorder)) },
        label && (react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.label), (direction === 'row' && sx.labelRow)) },
            react_1.default.createElement(material_1.Typography, { variant: "caption", color: "text.secondary" }, label))),
        react_1.default.createElement(material_1.Box, null, children)));
};
exports.default = FieldWrapper;
var sx = {
    text: {
        color: 'text.secondary',
    },
    label: {
        width: '100%',
    },
    labelRow: {
        minWidth: 100,
        width: 100,
        pr: 1,
    },
    root: {
        minHeight: 110,
    },
    rootBorder: {
        p: 2,
        width: '100%',
        borderRadius: 1,
        border: '1px solid',
        borderColor: 'divider',
    },
};
