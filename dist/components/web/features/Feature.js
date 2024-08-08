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
var __1 = require("../..");
var material_1 = require("@mui/material");
var Feature = function (props) {
    var _a = props || {}, icon = _a.icon, title = _a.title, description = _a.description, _b = _a.enableBorder, enableBorder = _b === void 0 ? false : _b;
    return (react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 1, sx: __assign(__assign({}, sx.root), (enableBorder && sx.enableBorder)) },
        icon && (react_1.default.createElement(material_1.Avatar, { sx: sx.avatar },
            react_1.default.createElement(__1.Icon, { name: icon, color: "primary.contrastText", size: 24 }))),
        react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 1 },
            react_1.default.createElement(material_1.Typography, { sx: sx.text, color: "text.primary", variant: "subtitle1" }, title),
            react_1.default.createElement(material_1.Typography, { sx: sx.text, color: "text.secondary", variant: "body1" }, description))));
};
exports.default = Feature;
var sx = {
    root: {
        p: 2,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 1,
    },
    avatar: {
        bgcolor: 'primary.main',
        height: '54px',
        width: '54px',
    },
    title: {
        textAlign: 'center',
        color: 'grey.900',
        '& span': {
            color: 'primary.main',
        },
    },
    text: {
        maxWidth: '280px',
        textAlign: 'center',
        '& span': {
            color: 'primary.main',
        },
    },
    enableBorder: {
        border: '1px solid',
        borderColor: 'divider',
    },
};
