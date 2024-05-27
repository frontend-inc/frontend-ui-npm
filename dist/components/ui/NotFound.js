"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var NotFound = function () {
    return (react_1.default.createElement(material_1.Stack, { sx: sx.root, direction: { sm: "row", xs: 'column' }, divider: react_1.default.createElement(material_1.Divider, { sx: sx.divider }), spacing: 2, alignItems: 'center' },
        react_1.default.createElement(material_1.Typography, { color: 'text.primary', variant: "h1" }, "404"),
        react_1.default.createElement(material_1.Typography, { color: 'text.secondary', variant: "subtitle2" }, "Page not found")));
};
exports.default = NotFound;
var sx = {
    root: {
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
        p: 2
    },
    divider: {
        height: 80,
        width: 2,
        bgcolor: 'divider',
        display: { xs: 'none', sm: 'block' }
    }
};
