"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var material_1 = require("@mui/material");
var CartText = function (props) {
    var label = props.label, value = props.value, icon = props.icon;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_1.Typography, { variant: "body1", sx: sx.label }, label),
        react_1.default.createElement(material_1.Stack, { spacing: 0.5, direction: "row" },
            react_1.default.createElement(material_1.Typography, { variant: "body1", sx: sx.value }, value),
            icon && react_1.default.createElement(components_1.Icon, { name: icon, size: 20 }))));
};
exports.default = CartText;
var sx = {
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    label: {
        color: 'text.secondary',
    },
    value: {
        textAlign: 'right',
    },
    discountCode: {
        cursor: 'pointer',
        color: 'text.secondary',
        textDecoration: 'underline',
    },
};
