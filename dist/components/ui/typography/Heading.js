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
var components_1 = require("../../../components");
var Heading = function (props) {
    var _a = props || {}, label = _a.label, title = _a.title, description = _a.description, _b = _a.textAlign, textAlign = _b === void 0 ? 'left' : _b, _c = _a.textVariant, textVariant = _c === void 0 ? 'h4' : _c;
    if (!title && !description && !label)
        return null;
    return (react_1.default.createElement(material_1.Stack, { sx: __assign(__assign({}, sx.stack), { alignItems: {
                sm: textAlign === 'center' ? 'center' : 'flex-start',
                xs: 'center'
            } }), direction: 'column', spacing: 1 },
        label && (react_1.default.createElement(components_1.Label, { label: label })),
        title && (react_1.default.createElement(material_1.Typography, { variant: textVariant, color: "text.primary", sx: __assign(__assign({}, sx.title), { textAlign: {
                    sm: textAlign,
                    xs: 'center'
                } }) }, title)),
        description && (react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.secondary", sx: __assign(__assign({}, sx.description), { textAlign: {
                    sm: textAlign,
                    xs: 'center'
                } }) }, description))));
};
exports.default = Heading;
var sx = {
    stack: {
        width: '100%',
        pb: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        width: '100%',
    },
    description: {
        width: '100%',
    },
};
