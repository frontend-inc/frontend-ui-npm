"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var CellButton = function (props) {
    var children = props.children, icon = props.icon, handleClick = props.handleClick;
    return (react_1.default.createElement(material_1.Box, { sx: sx.cell },
        react_1.default.createElement(material_1.Button, { size: "small", color: "secondary", variant: "contained", sx: sx.button, startIcon: react_1.default.createElement(components_1.Icon, { color: 'secondary.contrastText', name: icon, size: 20 }), onClick: handleClick && handleClick }, children)));
};
exports.default = CellButton;
var sx = {
    cell: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
    },
    button: {
        textTransform: 'none',
        fontFamily: function (theme) { return theme.typography.body2.fontFamily; },
        letterSpacing: 0,
    },
};
