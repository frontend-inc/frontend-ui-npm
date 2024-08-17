"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var LayoutCenter = function (props) {
    var children = props.children;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_1.Box, { sx: sx.content }, children)));
};
exports.default = LayoutCenter;
var sx = {
    root: {
        bgcolor: 'background.default',
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '100%',
        overflowY: 'hidden',
    },
    open: {
        transform: {
            xs: 'translateX(-100%)',
            sm: 'translateX(0)',
        },
    },
    footer: {
        width: '100%',
    },
};
