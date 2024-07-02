"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../components");
var Placeholder = function (props) {
    var icon = props.icon, title = props.title, description = props.description, actions = props.actions, _a = props.color, color = _a === void 0 ? 'text.secondary' : _a;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_1.Stack, { spacing: 1, alignItems: "center" },
            icon && react_1.default.createElement(components_1.Icon, { name: icon, size: 24, color: color }),
            react_1.default.createElement(material_1.Typography, { sx: sx.title, variant: "subtitle2" }, title),
            react_1.default.createElement(material_1.Typography, { sx: sx.description, variant: "body1", color: "textSecondary" }, description),
            actions && react_1.default.createElement(material_1.Box, { sx: sx.actions }, actions))));
};
exports.default = Placeholder;
var sx = {
    root: {
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderRadius: 1,
        border: '1px solid',
        borderColor: 'divider',
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
