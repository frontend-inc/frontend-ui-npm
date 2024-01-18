"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var CellButton = function (props) {
    var children = props.children, icon = props.icon, handleClick = props.handleClick;
    return (react_1.default.createElement(material_1.Box, { sx: sx.cell },
        react_1.default.createElement(material_1.Button, { fullWidth: true, color: "secondary", variant: "outlined", sx: sx.button, endIcon: icon && icon, onClick: handleClick && handleClick }, children)));
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
