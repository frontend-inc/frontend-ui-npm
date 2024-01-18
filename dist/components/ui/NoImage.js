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
var icons_material_1 = require("@mui/icons-material");
var NoImage = function (props) {
    var _a = props.height, height = _a === void 0 ? 100 : _a, width = props.width, _b = props.rounded, rounded = _b === void 0 ? false : _b, _c = props.border, border = _c === void 0 ? false : _c;
    return (react_1.default.createElement(material_1.Box, { sx: __assign(__assign(__assign(__assign({}, sx.root), (border && sx.enableBorder)), (rounded && sx.rounded)), { height: height ? "".concat(height, "px") : '100%', width: width ? "".concat(width, "px") : '100%' }) },
        react_1.default.createElement(icons_material_1.Image, { sx: sx.icon })));
};
exports.default = NoImage;
var sx = {
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey.100',
    },
    icon: {
        color: 'divider',
    },
    rounded: {
        borderRadius: function (theme) { return theme.shape.borderRadius; },
    },
    enableBorder: {
        border: '1px solid',
        borderColor: 'divider',
    },
};
