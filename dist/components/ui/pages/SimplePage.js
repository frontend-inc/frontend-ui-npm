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
var SimplePage = function (props) {
    var _a = props || {}, title = _a.title, body = _a.body, publishedAt = _a.publishedAt, _b = _a.html, html = _b === void 0 ? false : _b, _c = _a.disablePadding, disablePadding = _c === void 0 ? false : _c;
    return (react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.root), (disablePadding && sx.rootDisablePadding)) },
        react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 2, sx: sx.content },
            react_1.default.createElement(material_1.Typography, { variant: "h2", color: "text.primary", sx: sx.title }, title),
            react_1.default.createElement(material_1.Typography, { variant: "caption", sx: sx.caption },
                "Last updated ",
                publishedAt),
            html ? (react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.primary", sx: sx.text },
                react_1.default.createElement("div", { dangerouslySetInnerHTML: { __html: body } }))) : (react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.primary", sx: sx.text }, body)))));
};
exports.default = SimplePage;
var sx = {
    root: {
        width: '100%',
        p: 6,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    rootDisablePadding: {
        p: 0,
    },
    content: {
        width: '100%',
        maxWidth: 800,
    },
    title: {
        textAlign: 'center',
    },
    caption: {
        textAlign: 'center',
    },
    text: {
        whiteSpace: 'pre-line',
    },
};
