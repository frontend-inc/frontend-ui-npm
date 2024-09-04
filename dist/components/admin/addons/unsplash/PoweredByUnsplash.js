"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var UnsplashLogo_1 = __importDefault(require("./UnsplashLogo"));
var PoweredByUnsplash = function () {
    return (react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1, sx: sx.root },
        react_1.default.createElement(material_1.Typography, { variant: "body2", color: "text.secondary" }, "Powered by"),
        react_1.default.createElement(UnsplashLogo_1.default, null)));
};
exports.default = PoweredByUnsplash;
var sx = {
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
};
