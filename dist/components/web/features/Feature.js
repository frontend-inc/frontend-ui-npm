"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var material_1 = require("@mui/material");
var Feature = function (props) {
    var _a = props || {}, icon = _a.icon, title = _a.title, description = _a.description;
    return (react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 1, sx: sx.root },
        icon && (react_1.default.createElement(material_1.Avatar, { sx: sx.avatar },
            react_1.default.createElement(__1.Icon, { name: icon, color: "primary.contrastText", size: 24 }))),
        react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 0 },
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
};
