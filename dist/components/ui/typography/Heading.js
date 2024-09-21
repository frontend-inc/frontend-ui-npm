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
var Heading = function (props) {
    var _a = props || {}, buttons = _a.buttons, label = _a.label, title = _a.title, description = _a.description, _b = _a.textAlign, textAlign = _b === void 0 ? 'left' : _b, _c = _a.textVariant, textVariant = _c === void 0 ? 'h6' : _c, _d = _a.enableBorder, enableBorder = _d === void 0 ? false : _d;
    if (!title && !description && !label)
        return null;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_1.Stack, { sx: __assign(__assign(__assign({}, sx.stack), (enableBorder && sx.border)), { alignItems: textAlign }), direction: 'column', spacing: 0 },
            label && (react_1.default.createElement(material_1.Typography, { variant: "caption", color: "text.secondary" }, label)),
            title && (react_1.default.createElement(material_1.Typography, { variant: textVariant, color: "text.primary", sx: __assign(__assign({}, sx.title), { textAlign: textAlign }) }, title)),
            description && (react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.secondary", sx: __assign(__assign({}, sx.description), { textAlign: textAlign }) }, description)),
            buttons)));
};
exports.default = Heading;
var sx = {
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: {
            xs: 'column',
            sm: 'row',
        },
    },
    stack: {
        pb: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    border: {
        py: 2,
        borderBottom: '1px solid',
        borderColor: 'divider',
    },
    title: {
        width: '100%',
        '& span': {
            color: 'primary.main',
        },
    },
    description: {
        width: '100%',
        whiteSpace: 'pre-line',
    },
};
