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
var components_1 = require("../../components");
var Placeholder = function (props) {
    var icon = props.icon, title = props.title, description = props.description, actions = props.actions, _a = props.color, color = _a === void 0 ? 'text.secondary' : _a, _b = props.enableBorder, enableBorder = _b === void 0 ? false : _b;
    return (react_1.default.createElement(material_1.Stack, { spacing: 1, sx: __assign(__assign({}, sx.root), (enableBorder && sx.border)) },
        icon && react_1.default.createElement(components_1.Icon, { name: icon, size: 24, color: color }),
        react_1.default.createElement(material_1.Stack, null,
            react_1.default.createElement(material_1.Typography, { sx: sx.title, variant: "button" }, title),
            react_1.default.createElement(material_1.Typography, { sx: sx.description, variant: "body2", color: "textSecondary" }, description),
            actions && react_1.default.createElement(material_1.Box, { sx: sx.actions }, actions))));
};
exports.default = Placeholder;
var sx = {
    root: {
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    title: {
        color: 'text.primary',
        textAlign: 'center',
    },
    description: {
        textAlign: 'center',
    },
    border: {
        border: '1px solid',
        borderColor: 'divider',
    },
    actions: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
};
